import { describe, it, expect } from 'vitest';
import { PRERENDER_PATHS, headTags, pageMeta } from '../seo';
import { posts } from '../blog/posts';

describe('per-page share and search tags (prerendered at build time)', () => {
  it('prerenders the home page, blog, every post and the legal pages — not the per-card scan pages', () => {
    expect(PRERENDER_PATHS).toEqual(expect.arrayContaining(['/', '/blog', '/terms', '/bylaws', '/coop-member-terms', '/coop-platform-terms']));
    expect(PRERENDER_PATHS.filter((p) => p.startsWith('/blog/'))).toHaveLength(posts.length);
    expect(PRERENDER_PATHS.some((p) => p.startsWith('/c/'))).toBe(false);
  });

  it('gives each blog post its own title, summary, canonical URL and the blog share image', () => {
    const m = pageMeta('/blog/the-snowball/');
    expect(m.title).toBe('The snowball: get rich slowly | Kopkad Blog');
    expect(m.url).toBe('https://kopkad.ng/blog/the-snowball');
    expect(m.imageUrl).toBe('https://kopkad.ng/og-blog.jpg');
    expect(m.type).toBe('article');
  });

  it('falls back to the home page details for unknown paths', () => {
    expect(pageMeta('/nope').title).toBe('Kopkad — Financial Intelligence for Wealth Growth');
    expect(pageMeta('/').imageUrl).toBe('https://kopkad.ng/og-image.jpg');
  });

  it('writes Open Graph and Twitter tags, escaping quotes and angle brackets', () => {
    const tags = headTags('/blog');
    expect(tags).toContain('<meta property="og:image" content="https://kopkad.ng/og-blog.jpg" />');
    expect(tags).toContain('<meta name="twitter:card" content="summary_large_image" />');
    expect(tags).toContain('<link rel="canonical" href="https://kopkad.ng/blog" />');
    expect(headTags('/blog/the-pie-pay-yourself-first')).not.toMatch(/content="[^"]*<[^"]*"/);
  });
});
