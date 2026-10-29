/**
 * Financial Intelligence: build the day's course data for the blog.
 *
 * Sources (committed, never shipped to the browser as-is):
 *   content/course/topics.json    the 24 topics we promise, in order
 *   content/course/schedule.json  every weekday study: date, topic, slug, title
 *   content/studies/<slug>.md     the written studies (front matter + Markdown)
 *
 * Output: src/content/course.generated.json (git-ignored). A study is
 * published only when its date has arrived in Lagos AND it has been written.
 * Unreleased study text never reaches the bundle, so nobody can read ahead
 * by viewing the page source. The site is rebuilt every morning
 * (.github/workflows/daily-rebuild.yml), so each day's study goes live at 6 a.m.
 *
 * Runs automatically before dev, build and test (package.json "pre*" scripts).
 * COURSE_TODAY=YYYY-MM-DD overrides the date (previews, tests).
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(readFileSync(join(root, p), 'utf8'));

export const lagosToday = (now = new Date()) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Lagos' }).format(now); // YYYY-MM-DD

/** Tiny front-matter reader: `key: value` lines between two `---` lines. */
export const parseFrontMatter = (text) => {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  m[1].split(/\r?\n/).forEach((line) => {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  });
  return { meta, body: m[2] };
};

/**
 * The Markdown we support, kept deliberately small: "## heading", paragraphs,
 * "- " or "1. " lists, "> " quotes and "!> " key-idea callouts. Inline
 * **bold**, *italic* and [links](url) are rendered by src/blog/inline.jsx.
 */
export const parseBlocks = (md) => {
  const blocks = [];
  let para = [];
  let list = null;
  const flush = () => {
    if (para.length) blocks.push({ type: 'p', text: para.join(' ') });
    if (list) blocks.push(list);
    para = []; list = null;
  };
  md.split(/\r?\n/).forEach((raw) => {
    const line = raw.trim();
    if (!line) return flush();
    let m;
    if ((m = /^##\s+(.*)$/.exec(line))) { flush(); blocks.push({ type: 'h2', text: m[1] }); return; }
    if ((m = /^!>\s+(.*)$/.exec(line))) { flush(); blocks.push({ type: 'idea', text: m[1] }); return; }
    if ((m = /^>\s+(.*)$/.exec(line))) { flush(); blocks.push({ type: 'quote', text: m[1] }); return; }
    if ((m = /^[-*]\s+(.*)$/.exec(line)) || (m = /^\d+[.)]\s+(.*)$/.exec(line))) {
      const type = /^\d/.test(line) ? 'ol' : 'ul';
      if (para.length) { blocks.push({ type: 'p', text: para.join(' ') }); para = []; }
      if (!list || list.type !== type) { if (list) blocks.push(list); list = { type, items: [] }; }
      list.items.push(m[1]);
      return;
    }
    if (list) { blocks.push(list); list = null; }
    para.push(line);
  });
  flush();
  return blocks;
};

/**
 * Pure: everything the blog needs for `today`. Studies dated after today, or
 * not yet written, contribute only their title and date (for "next up" and the
 * topic list). Their text is left out.
 */
export const buildCourse = ({ today, topics, schedule, written }) => {
  const released = schedule
    .filter((s) => s.date <= today && written[s.slug])
    .map((s) => {
      const { meta, body } = written[s.slug];
      return {
        slug: s.slug,
        date: s.date,
        topic: s.topic,
        title: meta.title || s.title,
        summary: meta.summary || '',
        action: meta.action || 'money_split',
        resource: meta.resource || null,
        blocks: parseBlocks(body),
      };
    });
  const releasedSlugs = new Set(released.map((s) => s.slug));
  const upcoming = schedule.filter((s) => !releasedSlugs.has(s.slug) && s.date > today);
  const outline = topics.map((t) => {
    const mine = schedule.filter((s) => s.topic === t.no);
    return {
      ...t,
      starts: mine[0]?.date || null,
      ends: mine[mine.length - 1]?.date || null,
      study_count: mine.length,
      released: released.filter((s) => s.topic === t.no).map(({ slug, title, date }) => ({ slug, title, date })),
    };
  });
  return {
    today,
    starts: schedule[0]?.date || null,
    studies: released,
    next: upcoming[0] ? { title: upcoming[0].title, date: upcoming[0].date, topic: upcoming[0].topic } : null,
    topics: outline,
  };
};

const loadWritten = () => {
  const dir = join(root, 'content/studies');
  const out = {};
  if (!existsSync(dir)) return out;
  readdirSync(dir).filter((f) => f.endsWith('.md') && f !== 'README.md').forEach((f) => {
    out[f.replace(/\.md$/, '')] = parseFrontMatter(readFileSync(join(dir, f), 'utf8'));
  });
  return out;
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const today = process.env.COURSE_TODAY || lagosToday();
  const schedule = read('content/course/schedule.json');
  const written = loadWritten();
  const unknown = Object.keys(written).filter((slug) => !schedule.some((s) => s.slug === slug));
  if (unknown.length) throw new Error(`content/studies has files that are not in the schedule: ${unknown.join(', ')}`);
  const course = buildCourse({ today, topics: read('content/course/topics.json'), schedule, written });
  const missed = schedule.filter((s) => s.date <= today && !written[s.slug]);
  if (missed.length) console.warn(`course: WARNING ${missed.length} scheduled studies are due but not written yet, e.g. ${missed.slice(-3).map((s) => `${s.date} ${s.slug}`).join('; ')}`);
  writeFileSync(join(root, 'src/content/course.generated.json'), `${JSON.stringify(course, null, 1)}\n`);
  console.log(`course: ${today} — ${course.studies.length} studies published, next: ${course.next ? `${course.next.date} ${course.next.title}` : 'none'}`);
}
