import { getPost, posts } from './blog/posts';
import { getStudy, studies } from './blog/course';
import { getResource, releasedResources } from './content/resources';

/**
 * Per-page title, description and share image — written into each page's
 * HTML at build time (scripts/prerender.mjs), so link previews (WhatsApp,
 * X, LinkedIn, Slack…) and readers that don't run JavaScript (search engines,
 * AI assistants) see real content instead of an empty app shell.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://kopkad.ng').replace(/\/$/, '');
export const SITE_NAME = 'Kopkad';
const IMAGE = '/og-image.jpg';
const BLOG_IMAGE = '/og-blog.jpg';

const HOME = {
  title: 'Kopkad — Financial Intelligence for Wealth Growth',
  description: 'Know your money, grow your wealth. Plan every income with Wealth Builder, track spending, save with interest, lock money for your goals, and learn the habits that build wealth.',
  image: IMAGE,
  type: 'website',
};

const STATIC = {
  '/': HOME,
  '/blog': {
    title: 'Financial Intelligence | Kopkad Blog',
    description: 'A free money class for Nigerians, one study every weekday: know where your money goes, save first, clear debt, avoid scams and build wealth. Then put it to work in Wealth Builder.',
    image: BLOG_IMAGE,
    type: 'website',
  },
  '/blog/topics': {
    title: 'All 24 topics | Financial Intelligence',
    description: 'The full outline of the free Financial Intelligence class: 24 topics, from knowing where you stand to your own financial plan.',
    image: BLOG_IMAGE,
    type: 'website',
  },
  '/resources': {
    title: 'Free resources | Kopkad',
    description: 'Free worksheets and plans from the Financial Intelligence class: the study plan, the Money Map and more. No account needed.',
    image: BLOG_IMAGE,
    type: 'website',
  },
  '/terms': { title: 'Terms of Use | Kopkad', description: 'The terms that govern your use of Kopkad.', image: IMAGE, type: 'website' },
  '/coop-member-terms': { title: 'Cooperative Member Terms | Kopkad', description: 'Terms for members of cooperatives that run on CoopX by Kopkad.', image: IMAGE, type: 'website' },
  '/coop-platform-terms': { title: 'Platform Operator Terms | Kopkad', description: 'The platform operator agreement for cooperatives on CoopX by Kopkad.', image: IMAGE, type: 'website' },
  '/bylaws': { title: 'Cooperative Bye-Laws | Kopkad', description: 'Model bye-laws for cooperative societies on CoopX by Kopkad.', image: IMAGE, type: 'website' },
};

/** Every path that gets its own pre-rendered HTML page (not /c/:token — those are per-card). */
export const PRERENDER_PATHS = [
  ...Object.keys(STATIC),
  ...posts.map((p) => `/blog/${p.slug}`),
  ...studies().map((s) => `/blog/${s.slug}`),
  ...releasedResources().map((r) => `/resources/${r.id}`),
];

const pageFor = (clean) => {
  if (STATIC[clean]) return STATIC[clean];
  if (clean.startsWith('/resources/')) {
    const r = getResource(clean.slice(11));
    return r ? { title: `${r.title} | Free download | Kopkad`, description: r.description, image: BLOG_IMAGE, type: 'website' } : null;
  }
  if (!clean.startsWith('/blog/')) return null;
  const study = getStudy(clean.slice(6));
  if (study) return { title: `${study.title} | Financial Intelligence`, description: study.summary || `Topic ${study.topic} of the free Financial Intelligence class.`, image: BLOG_IMAGE, type: 'article' };
  const post = getPost(clean.slice(6));
  return post ? { title: `${post.title} | Kopkad Blog`, description: post.summary, image: BLOG_IMAGE, type: 'article' } : null;
};

export const pageMeta = (path) => {
  const clean = path.replace(/\/+$/, '') || '/';
  const meta = pageFor(clean) || HOME;
  return { ...meta, url: `${SITE_URL}${clean === '/' ? '/' : clean}`, imageUrl: `${SITE_URL}${meta.image}` };
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** The <head> tags for a page: title, description, canonical, Open Graph and Twitter card. */
export const headTags = (path) => {
  const m = pageMeta(path);
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<link rel="canonical" href="${esc(m.url)}" />`,
    `<meta property="og:type" content="${m.type}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_NG" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${esc(m.url)}" />`,
    `<meta property="og:image" content="${esc(m.imageUrl)}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${esc(m.title)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${esc(m.imageUrl)}" />`,
  ].join('\n    ');
};
