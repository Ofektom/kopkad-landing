import { getPost, posts } from './blog/posts';

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
  title: 'Kopkad — Save. Invest. Grow.',
  description: 'Savings that earn interest, Wealth Builder to plan every naira, Thrift groups, a phone POS for merchants, and cooperative management software across Nigeria.',
  image: IMAGE,
  type: 'website',
};

const STATIC = {
  '/': HOME,
  '/blog': {
    title: 'Money Lessons | Kopkad Blog',
    description: 'Practical money lessons for Nigerians: pay yourself first, build an emergency fund, clear debt, spot Ponzi schemes. Learn the habit, then put it to work in Wealth Builder.',
    image: BLOG_IMAGE,
    type: 'website',
  },
  '/terms': { title: 'Terms of Use | Kopkad', description: 'The terms that govern your use of Kopkad.', image: IMAGE, type: 'website' },
  '/coop-member-terms': { title: 'Cooperative Member Terms | Kopkad', description: 'Terms for members of cooperatives that run on CoopX by Kopkad.', image: IMAGE, type: 'website' },
  '/coop-platform-terms': { title: 'Platform Operator Terms | Kopkad', description: 'The platform operator agreement for cooperatives on CoopX by Kopkad.', image: IMAGE, type: 'website' },
  '/bylaws': { title: 'Cooperative Bye-Laws | Kopkad', description: 'Model bye-laws for cooperative societies on CoopX by Kopkad.', image: IMAGE, type: 'website' },
};

/** Every path that gets its own pre-rendered HTML page (not /c/:token — those are per-card). */
export const PRERENDER_PATHS = [...Object.keys(STATIC), ...posts.map((p) => `/blog/${p.slug}`)];

export const pageMeta = (path) => {
  const clean = path.replace(/\/+$/, '') || '/';
  const post = clean.startsWith('/blog/') ? getPost(clean.slice(6)) : null;
  const meta = post
    ? { title: `${post.title} | Kopkad Blog`, description: post.summary, image: BLOG_IMAGE, type: 'article' }
    : STATIC[clean] || HOME;
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
