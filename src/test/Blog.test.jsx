import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';
import { ACTIONS, getPost, postAction, posts } from '../blog/posts';
import { goToApp, MONEY_MAP_URL } from '../utils/appNav';

// Before the class starts (no studies out yet): the blog shows the start date and the library.
vi.mock('../content/course.generated.json', async () => ({ default: (await import('./courseFixture')).makeCourse('2026-10-29') }));

vi.mock('../utils/appNav', async (importOriginal) => ({
  ...(await importOriginal()),
  goToApp: vi.fn(),
  goToCoop: vi.fn(),
}));

// Likes/comments API — off by default (the panel hides), switched on per test.
const mockApi = vi.hoisted(() => ({ getEngagement: vi.fn(), toggleLike: vi.fn(), postComment: vi.fn() }));
vi.mock('../blog/engagementApi', () => mockApi);

const renderAt = (path) => render(
  <MemoryRouter initialEntries={[path]}>
    <Routes>
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  </MemoryRouter>,
);

beforeEach(() => {
  vi.clearAllMocks();
  window.scrollTo = vi.fn();
  mockApi.getEngagement.mockResolvedValue({ ok: true, data: { enabled: false } });
});

describe('blog posts (the main app\'s Learn money lessons)', () => {
  it('has every lesson module, in course order, split into the core course and the classics', () => {
    expect(posts).toHaveLength(21);
    expect(posts.map((p) => p.order)).toEqual([...Array(21).keys()].map((i) => i + 1));
    expect(posts.filter((p) => p.group === 'Core course')).toHaveLength(12);
    posts.forEach((p) => p.lessons.forEach((l) => expect(l.points.length).toBeGreaterThan(0)));
  });

  it('ends each post with the Wealth Builder tool its lessons point to', () => {
    expect(postAction(getPost('the-pie-pay-yourself-first'))).toBe(ACTIONS.money_split);
    expect(postAction(getPost('emergency-fund'))).toBe(ACTIONS.emergency_fund);
  });
});

describe('BlogPage', () => {
  it('before day one: opens on a welcome post with the start date, the study plan and no lesson library', () => {
    renderAt('/blog');
    const post = screen.getByTestId('study');
    expect(within(post).getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to Financial Intelligence');
    expect(post).toHaveTextContent('Starts Monday 16 November');
    expect(post).toHaveTextContent('Your salary is not your wealth');
    expect(post).toHaveTextContent('Know your money (topics 1 to 6)');
    const soon = screen.getByTestId('starts-soon');
    expect(within(soon).getByRole('link', { name: /Get the free study plan/ })).toHaveAttribute('href', '/resources/study-plan');
    expect(within(soon).getByRole('link', { name: /See all 24 topics/ })).toHaveAttribute('href', '/blog/topics');
    expect(screen.queryByText('Money lesson library')).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /The pie: pay yourself first/ })).not.toBeInTheDocument();
    expect(document.title).toBe('Financial Intelligence | Kopkad Blog');
    fireEvent.click(screen.getByRole('button', { name: /Set up your Wealth Builder/ }));
    expect(goToApp).toHaveBeenCalledWith('/signup');
  });

  it('lets readers like and comment on the welcome post', async () => {
    mockApi.getEngagement.mockResolvedValue({ ok: true, data: { enabled: true, likes: 0, liked: false, comments: [] } });
    renderAt('/blog');
    expect(await screen.findByTestId('blog-engagement')).toBeInTheDocument();
    expect(mockApi.getEngagement).toHaveBeenCalledWith('welcome');
  });
});

describe('BlogPostPage', () => {
  it('previews only the key points, keeps the full lesson for the app, and prompts the reader to sign up', () => {
    renderAt('/blog/the-pie-pay-yourself-first');
    expect(screen.getByRole('heading', { level: 1, name: 'The pie: pay yourself first' })).toBeInTheDocument();
    expect(document.title).toBe('The pie: pay yourself first | Kopkad Blog');
    expect(screen.getByText(/Savings — your future/)).toBeInTheDocument();
    expect(screen.getByText(/Whatever is left of your Give share/)).toBeInTheDocument();
    // The full lesson stays in the app: no worked examples, no quick checks.
    expect(screen.queryByText(/You earn ₦10,000 today/)).not.toBeInTheDocument();
    expect(screen.queryByText(/how much of ₦10,000 goes to Savings/)).not.toBeInTheDocument();

    fireEvent.click(within(screen.getByTestId('full-lesson-teaser')).getByRole('button', { name: /Sign up to read it/ }));
    expect(goToApp).toHaveBeenCalledWith('/signup');

    const cta = screen.getByTestId('signup-cta');
    fireEvent.click(within(cta).getByRole('button', { name: /Set up your Wealth Builder/ }));
    expect(goToApp).toHaveBeenCalledWith('/signup');
    fireEvent.click(within(cta).getByRole('button', { name: 'I already have an account' }));
    expect(goToApp).toHaveBeenCalledWith('/login');
    expect(screen.getByRole('link', { name: /Next lesson/ })).toHaveAttribute('href', '/blog/the-snowball');

    const reading = screen.getByTestId('further-reading');
    const link = within(reading).getByRole('link', { name: /The 'Pay Yourself First' approach/ });
    expect(link).toHaveAttribute('href', 'https://www.investopedia.com/terms/p/payyourselffirst.asp');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows the not-financial-advice disclaimer on investing lessons only', () => {
    const { unmount } = renderAt('/blog/investing-basics');
    expect(screen.getByRole('note')).toHaveTextContent('For educational purposes only. This is not financial advice.');
    unmount();
    renderAt('/blog/emergency-fund');
    expect(screen.queryByRole('note')).not.toBeInTheDocument();
  });

  it('sends an unknown post back to the blog', () => {
    renderAt('/blog/no-such-lesson');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to Financial Intelligence');
  });
});

describe('BlogPostPage — likes and comments', () => {
  const ON = { enabled: true, likes: 3, liked: false, comments: [{ id: 1, name: 'Ada', body: 'I now save first!', created_at: '2026-10-20T10:00:00Z' }] };

  it('is hidden while the backend switch is off', async () => {
    renderAt('/blog/the-snowball');
    await waitFor(() => expect(mockApi.getEngagement).toHaveBeenCalledWith('the-snowball'));
    expect(screen.queryByTestId('blog-engagement')).not.toBeInTheDocument();
  });

  it('shows approved comments and lets anyone like and unlike', async () => {
    mockApi.getEngagement.mockResolvedValue({ ok: true, data: ON });
    mockApi.toggleLike.mockResolvedValueOnce({ ok: true, data: { likes: 4, liked: true } })
      .mockResolvedValueOnce({ ok: true, data: { likes: 3, liked: false } });
    renderAt('/blog/the-snowball');
    const panel = await screen.findByTestId('blog-engagement');
    expect(panel).toHaveTextContent('I now save first!');
    expect(panel).toHaveTextContent('1 comment');
    fireEvent.click(within(panel).getByRole('button', { name: 'Like this lesson' }));
    await waitFor(() => expect(within(panel).getByTestId('like-count')).toHaveTextContent('4'));
    expect(within(panel).getByRole('button', { name: 'Unlike this lesson' })).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(within(panel).getByRole('button', { name: 'Unlike this lesson' }));
    await waitFor(() => expect(within(panel).getByTestId('like-count')).toHaveTextContent('3'));
    expect(mockApi.toggleLike).toHaveBeenCalledWith('the-snowball');
  });

  it('sends a comment with a name and says it waits for approval', async () => {
    mockApi.getEngagement.mockResolvedValue({ ok: true, data: { ...ON, comments: [] } });
    mockApi.postComment.mockResolvedValue({ ok: true, data: { status: 'pending' }, message: 'Thanks! Your comment will appear once it has been approved.' });
    renderAt('/blog/the-snowball');
    const panel = await screen.findByTestId('blog-engagement');
    const send = within(panel).getByRole('button', { name: /Post comment/ });
    expect(send).toBeDisabled();
    fireEvent.change(within(panel).getByLabelText('Your name'), { target: { value: 'Bayo' } });
    fireEvent.change(within(panel).getByLabelText('Comment'), { target: { value: 'Starting with ₦100 a day.' } });
    fireEvent.click(send);
    expect(await within(panel).findByRole('status')).toHaveTextContent('once it has been approved');
    expect(mockApi.postComment).toHaveBeenCalledWith('the-snowball', { name: 'Bayo', body: 'Starting with ₦100 a day.', website: '' });
    expect(within(panel).getByLabelText('Comment')).toHaveValue('');
  });

  it('shows the server message when a comment is refused', async () => {
    mockApi.getEngagement.mockResolvedValue({ ok: true, data: ON });
    mockApi.postComment.mockResolvedValue({ ok: false, message: "You've sent several comments already. Please try again later." });
    renderAt('/blog/the-snowball');
    const panel = await screen.findByTestId('blog-engagement');
    fireEvent.change(within(panel).getByLabelText('Your name'), { target: { value: 'Bayo' } });
    fireEvent.change(within(panel).getByLabelText('Comment'), { target: { value: 'Another one' } });
    fireEvent.click(within(panel).getByRole('button', { name: /Post comment/ }));
    expect(await within(panel).findByRole('status')).toHaveTextContent('several comments already');
  });
});

describe('Blog — free Money Map', () => {
  it("points at the Money Map's own page on the website", () => {
    expect(MONEY_MAP_URL).toBe('/resources/money-map');
  });

  it('keeps the blog front page on the class: no download menu there', () => {
    renderAt('/blog');
    expect(screen.queryByTestId('money-map-link')).not.toBeInTheDocument();
  });

  it('offers the Money Map on every lesson', () => {
    renderAt(`/blog/${posts[0].slug}`);
    expect(screen.getByTestId('money-map-cta')).toBeInTheDocument();
    expect(screen.getByTestId('money-map-link')).toHaveAttribute('href', MONEY_MAP_URL);
  });
});
