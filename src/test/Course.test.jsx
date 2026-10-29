import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { buildCourse, parseBlocks, lagosToday } from '../../scripts/course.mjs';
import { makeCourse, STUDY_1, STUDY_2, STUDY_3 } from './courseFixture';

// The class on Tuesday 17 Nov: studies 1 and 2 are out, study 3 is written but not due.
vi.mock('../content/course.generated.json', async () => {
  const { makeCourse: make, STUDY_1: s1, STUDY_2: s2, STUDY_3: s3 } = await import('./courseFixture');
  return {
    default: make('2026-11-17', {
      'your-salary-is-not-your-wealth': s1,
      'financial-intelligence-vs-financial-discipline': s2,
      'money-is-a-journey-with-6-steps': s3,
    }),
  };
});
vi.mock('../utils/appNav', async (importOriginal) => ({ ...(await importOriginal()), goToApp: vi.fn(), goToCoop: vi.fn() }));
vi.mock('../blog/engagementApi', () => ({ getEngagement: vi.fn().mockResolvedValue({ ok: true, data: { enabled: false } }), toggleLike: vi.fn(), postComment: vi.fn() }));

const { default: BlogPage } = await import('../pages/BlogPage');
const { default: BlogPostPage } = await import('../pages/BlogPostPage');
const { default: TopicsPage } = await import('../pages/TopicsPage');
const { default: ResourcesPage, ResourcePage } = await import('../pages/ResourcesPage');
const { PRERENDER_PATHS, pageMeta } = await import('../seo');

const renderAt = (path) => render(
  <MemoryRouter initialEntries={[path]}>
    <Routes>
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/topics" element={<TopicsPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/resources/:id" element={<ResourcePage />} />
    </Routes>
  </MemoryRouter>,
);

beforeEach(() => { window.scrollTo = vi.fn(); });

describe('course build (scripts/course.mjs)', () => {
  const written = { 'your-salary-is-not-your-wealth': STUDY_1, 'money-is-a-journey-with-6-steps': STUDY_3 };

  it('publishes a study only once its day has come and it has been written', () => {
    const before = makeCourse('2026-11-15', written);
    expect(before.studies).toEqual([]);
    expect(before.next).toEqual({ title: 'Your salary is not your wealth', date: '2026-11-16', topic: 1 });

    const day3 = makeCourse('2026-11-18', written);
    // Day 2 is due but not written: skipped, never a broken page.
    expect(day3.studies.map((s) => s.slug)).toEqual(['your-salary-is-not-your-wealth', 'money-is-a-journey-with-6-steps']);
  });

  it('never puts the text of a future study into the site data', () => {
    const json = JSON.stringify(makeCourse('2026-11-17', written));
    expect(json).not.toContain('SECRET FUTURE');
    expect(json).toContain('Money is a journey with 6 steps'); // only its title, as "next up" / outline
  });

  it('lists every topic with its dates, length and the studies released so far', () => {
    const c = makeCourse('2026-11-17', written);
    expect(c.topics).toHaveLength(24);
    expect(c.topics[0]).toMatchObject({ no: 1, starts: '2026-11-16', ends: '2026-11-27', study_count: 10 });
    expect(c.topics[0].released).toEqual([{ slug: 'your-salary-is-not-your-wealth', title: 'Your salary is not your wealth', date: '2026-11-16' }]);
    expect(c.topics[1].released).toEqual([]);
  });

  it('turns the study Markdown into blocks', () => {
    expect(parseBlocks('Hello\nworld\n\n## Head\n- a\n- b\n1. one\n> quote\n!> idea')).toEqual([
      { type: 'p', text: 'Hello world' },
      { type: 'h2', text: 'Head' },
      { type: 'ul', items: ['a', 'b'] },
      { type: 'ol', items: ['one'] },
      { type: 'quote', text: 'quote' },
      { type: 'idea', text: 'idea' },
    ]);
  });

  it('works out "today" in Lagos, not UTC', () => {
    expect(lagosToday(new Date('2026-11-15T23:30:00Z'))).toBe('2026-11-16'); // 00:30 in Lagos
    expect(buildCourse({ today: '2026-11-16', topics: [], schedule: [], written: {} }).studies).toEqual([]);
  });
});

describe('BlogPage — the class in progress', () => {
  it('opens on the latest study, with the topic now studying and what is next', () => {
    renderAt('/blog');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Financial Intelligence. One study a day.');
    const today = screen.getByTestId('todays-study');
    expect(today).toHaveAttribute('href', '/blog/financial-intelligence-vs-financial-discipline');
    expect(today).toHaveTextContent('Today · Topic 1, study 2 of 10');
    expect(screen.getByRole('link', { name: /Your salary is not your wealth/ })).toHaveAttribute('href', '/blog/your-salary-is-not-your-wealth');
    expect(screen.getByTestId('home-next-up')).toHaveTextContent('Wednesday 18 November');
    expect(screen.getByTestId('home-next-up')).toHaveTextContent('Money is a journey with 6 steps');
    expect(screen.queryByTestId('starts-soon')).not.toBeInTheDocument();
    expect(document.title).toBe('Financial Intelligence | Kopkad Blog');
  });
});

describe('StudyPage', () => {
  it('shows the full study, safely, with its download and the Wealth Builder call to action', async () => {
    renderAt('/blog/your-salary-is-not-your-wealth');
    const study = screen.getByTestId('study');
    expect(within(study).getByRole('heading', { level: 1, name: 'Your salary is not your wealth' })).toBeInTheDocument();
    expect(study).toHaveTextContent('Topic 1 · Financial intelligence: the journey · Study 1 of 10');
    expect(study).toHaveTextContent('Monday 16 November');
    expect(within(study).getByText('₦300,000').tagName).toBe('STRONG');
    expect(within(study).getByRole('heading', { level: 2, name: 'What wealth really is' })).toBeInTheDocument();
    expect(study).toHaveTextContent('Wealth is what you keep, not what you earn.');
    expect(within(study).getByRole('link', { name: 'the Money Map' })).toHaveAttribute('href', '/resources/money-map');
    // No HTML or javascript: links from study text.
    expect(study.querySelector('script')).toBeNull();
    expect(within(study).queryByRole('link', { name: 'bad' })).not.toBeInTheDocument();
    expect(screen.getByTestId('study-resource')).toHaveAttribute('href', '/resources/money-map');
    expect(within(screen.getByTestId('signup-cta')).getByRole('button', { name: /Set up your Wealth Builder/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Next study/ })).toHaveAttribute('href', '/blog/financial-intelligence-vs-financial-discipline');
    expect(document.title).toBe('Your salary is not your wealth | Financial Intelligence');
  });

  it("teases tomorrow's study by title and date without a link", () => {
    renderAt('/blog/financial-intelligence-vs-financial-discipline');
    const next = screen.getByTestId('next-up');
    expect(next).toHaveTextContent('Next up · Wednesday 18 November');
    expect(next).toHaveTextContent('Money is a journey with 6 steps');
    expect(within(next).queryByRole('link')).not.toBeInTheDocument();
  });

  it('does not serve a written study before its day', async () => {
    renderAt('/blog/money-is-a-journey-with-6-steps');
    await waitFor(() => expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Financial Intelligence. One study a day.'));
    expect(document.body).not.toHaveTextContent('SECRET FUTURE');
  });

  it('keeps the library articles at their old addresses', () => {
    renderAt('/blog/the-snowball');
    expect(screen.getByRole('heading', { level: 1, name: 'The snowball: get rich slowly' })).toBeInTheDocument();
  });
});

describe('TopicsPage', () => {
  it('lists all 24 topics: released studies as links, later topics greyed out with their start date', () => {
    renderAt('/blog/topics');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('All 24 topics');
    for (let n = 1; n <= 24; n += 1) expect(screen.getByTestId(`topic-${n}`)).toBeInTheDocument();
    const t1 = screen.getByTestId('topic-1');
    expect(within(t1).getAllByRole('link').map((a) => a.getAttribute('href'))).toEqual([
      '/blog/your-salary-is-not-your-wealth', '/blog/financial-intelligence-vs-financial-discipline',
    ]);
    expect(t1).toHaveTextContent('8 more studies to come in this topic');
    const t2 = screen.getByTestId('topic-2');
    expect(within(t2).queryByRole('link')).not.toBeInTheDocument();
    expect(t2).toHaveTextContent('Starts Monday 30 November');
  });
});

describe('Resources', () => {
  it('lists the released downloads', () => {
    renderAt('/resources');
    expect(screen.getByRole('heading', { level: 1, name: 'Resources' })).toBeInTheDocument();
    expect(screen.getByTestId('resource-card-money-map')).toHaveAttribute('href', '/resources/money-map');
    expect(screen.getByTestId('resource-card-study-plan')).toHaveAttribute('href', '/resources/study-plan');
  });

  it('gives each download its own page that shows only that download', () => {
    renderAt('/resources/money-map');
    const page = screen.getByTestId('resource-money-map');
    expect(within(page).getByRole('link', { name: /Printable PDF/ })).toHaveAttribute('href', '/magnets/money-map.pdf');
    expect(within(page).getByRole('link', { name: /Spreadsheet/ })).toHaveAttribute('href', '/magnets/money-map.xlsx');
    expect(page).not.toHaveTextContent('study plan');
    expect(within(page).getByRole('link', { name: /Read today's study/ })).toHaveAttribute('href', '/blog');
  });

  it('keeps a resource hidden until its release date', () => {
    renderAt('/resources');
    expect(screen.queryByTestId('resource-card-net-worth-calculator')).not.toBeInTheDocument(); // releases 11 Dec
    expect(PRERENDER_PATHS).not.toContain('/resources/net-worth-calculator');
  });

  it('sends old /resources#<id> links to that resource, and unknown ids to the list', async () => {
    const { unmount } = renderAt('/resources#money-map');
    expect(await screen.findByTestId('resource-money-map')).toBeInTheDocument();
    unmount();
    renderAt('/resources/not-a-thing');
    expect(screen.getByRole('heading', { level: 1, name: 'Resources' })).toBeInTheDocument();
  });
});

describe('SEO for the class', () => {
  it('prerenders released studies, the topics page and each released resource', () => {
    expect(PRERENDER_PATHS).toEqual(expect.arrayContaining([
      '/blog', '/blog/topics', '/resources', '/resources/money-map', '/resources/study-plan',
      '/blog/your-salary-is-not-your-wealth', '/blog/financial-intelligence-vs-financial-discipline',
    ]));
    expect(PRERENDER_PATHS).not.toContain('/blog/money-is-a-journey-with-6-steps');
    expect(pageMeta('/blog/your-salary-is-not-your-wealth')).toMatchObject({
      title: 'Your salary is not your wealth | Financial Intelligence',
      description: 'Same salary, very different results after 100 days.',
      type: 'article',
    });
    expect(pageMeta('/resources/money-map').title).toBe('Your Money Map | Free download | Kopkad');
  });
});
