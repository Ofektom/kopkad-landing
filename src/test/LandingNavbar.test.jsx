import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LandingNavbar from '../landing/LandingNavbar';
import { goToApp } from '../utils/appNav';

vi.mock('../utils/appNav', async (importOriginal) => ({
  ...(await importOriginal()),
  goToApp: vi.fn(),
}));

const getHamburger = () => screen.getByRole('button', { name: /menu/i });

describe('LandingNavbar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders the logo and only links that go to another page', () => {
    render(<LandingNavbar />);
    expect(screen.getByAltText('Kopkad')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog');
    expect(screen.getByRole('link', { name: 'Resources' })).toHaveAttribute('href', '/resources');
    ['Features', 'Wealth Builder', 'Merchants', 'Field Agents', 'How It Works', 'Pricing', 'FAQ'].forEach((label) => {
      expect(screen.queryByRole('button', { name: label })).not.toBeInTheDocument();
    });
  });

  it('marks the page you are on', () => {
    window.history.pushState({}, '', '/blog/some-study');
    render(<LandingNavbar />);
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current');
    window.history.pushState({}, '', '/');
  });

  it('does not render the Cooperative link when onCoopClick is not provided', () => {
    render(<LandingNavbar />);
    expect(screen.queryByRole('button', { name: 'Cooperative' })).not.toBeInTheDocument();
  });

  it('renders the Cooperative link and calls onCoopClick when provided and clicked', () => {
    const onCoopClick = vi.fn();
    render(<LandingNavbar onCoopClick={onCoopClick} />);
    fireEvent.click(screen.getByRole('button', { name: 'Cooperative' }));
    expect(onCoopClick).toHaveBeenCalledTimes(1);
  });

  it('calls goToApp with the correct paths for the desktop CTAs', () => {
    render(<LandingNavbar />);
    fireEvent.click(screen.getByRole('button', { name: 'Log In' }));
    expect(goToApp).toHaveBeenCalledWith('/login');

    fireEvent.click(screen.getByRole('button', { name: 'Get Started Free' }));
    expect(goToApp).toHaveBeenCalledWith('/signup');
  });

  it('scrolls the window to the top when the logo is clicked', () => {
    render(<LandingNavbar />);
    fireEvent.click(screen.getByAltText('Kopkad').parentElement);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('mobile menu is closed by default', () => {
    render(<LandingNavbar onCoopClick={vi.fn()} />);
    expect(screen.queryByText('Cooperative Portal')).not.toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(1);
  });

  it('opens the mobile menu when the hamburger is clicked, revealing mobile-only items', () => {
    render(<LandingNavbar onCoopClick={vi.fn()} />);
    fireEvent.click(getHamburger());

    expect(screen.getByText('Cooperative Portal')).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(2);
  });

  it('closes the mobile menu again when the hamburger is clicked a second time', () => {
    render(<LandingNavbar onCoopClick={vi.fn()} />);
    fireEvent.click(getHamburger());
    expect(screen.getByText('Cooperative Portal')).toBeInTheDocument();

    fireEvent.click(getHamburger());
    expect(screen.queryByText('Cooperative Portal')).not.toBeInTheDocument();
  });

  it('calls onCoopClick and closes the mobile menu when the mobile Cooperative Portal button is clicked', () => {
    const onCoopClick = vi.fn();
    render(<LandingNavbar onCoopClick={onCoopClick} />);
    fireEvent.click(getHamburger());

    fireEvent.click(screen.getByText('Cooperative Portal'));

    expect(onCoopClick).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Cooperative Portal')).not.toBeInTheDocument();
  });

  it('applies the scrolled styling once the page scrolls past 20px', () => {
    const { container } = render(<LandingNavbar />);
    const nav = container.querySelector('nav');
    expect(nav.className).toContain('bg-white/95');

    Object.defineProperty(window, 'scrollY', { value: 50, configurable: true });
    fireEvent.scroll(window);

    expect(nav.className).toContain('shadow-md');
  });

  it('keeps the non-scrolled styling when scrollY stays at or below 20px', () => {
    const { container } = render(<LandingNavbar />);
    const nav = container.querySelector('nav');

    Object.defineProperty(window, 'scrollY', { value: 10, configurable: true });
    fireEvent.scroll(window);

    expect(nav.className).toContain('bg-white/95');
    expect(nav.className).not.toContain('shadow-md');
  });

  it('removes the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = render(<LandingNavbar />);
    unmount();
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
