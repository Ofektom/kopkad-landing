import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LandingNavbar from '../landing/LandingNavbar';
import { goToApp } from '../utils/appNav';

vi.mock('../utils/appNav', () => ({
  goToApp: vi.fn(),
}));

const getHamburger = () => screen.getAllByRole('button').find((b) => b.textContent === '');

describe('LandingNavbar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders the logo and all desktop nav links', () => {
    render(<LandingNavbar />);
    expect(screen.getByAltText('Kopkad')).toBeInTheDocument();
    ['Features', 'How It Works', 'Pricing', 'FAQ'].forEach((label) => {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument();
    });
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

  it('scrolls smoothly to the matching section id when a nav link is clicked', () => {
    render(<LandingNavbar />);
    const el = document.createElement('div');
    el.id = 'pricing';
    el.scrollIntoView = vi.fn();
    document.body.appendChild(el);

    fireEvent.click(screen.getByRole('button', { name: 'Pricing' }));

    expect(el.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('does not throw when clicking a nav link whose target section is missing', () => {
    render(<LandingNavbar />);
    expect(() => fireEvent.click(screen.getByRole('button', { name: 'FAQ' }))).not.toThrow();
  });

  it('scrolls the window to the top when the logo is clicked', () => {
    render(<LandingNavbar />);
    fireEvent.click(screen.getByAltText('Kopkad').parentElement);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('mobile menu is closed by default', () => {
    render(<LandingNavbar onCoopClick={vi.fn()} />);
    expect(screen.queryByText('Cooperative Portal')).not.toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'FAQ' })).toHaveLength(1);
  });

  it('opens the mobile menu when the hamburger is clicked, revealing mobile-only items', () => {
    render(<LandingNavbar onCoopClick={vi.fn()} />);
    fireEvent.click(getHamburger());

    expect(screen.getByText('Cooperative Portal')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'FAQ' })).toHaveLength(2);
  });

  it('closes the mobile menu again when the hamburger is clicked a second time', () => {
    render(<LandingNavbar onCoopClick={vi.fn()} />);
    fireEvent.click(getHamburger());
    expect(screen.getByText('Cooperative Portal')).toBeInTheDocument();

    fireEvent.click(getHamburger());
    expect(screen.queryByText('Cooperative Portal')).not.toBeInTheDocument();
  });

  it('closes the mobile menu after selecting a section from within it', () => {
    render(<LandingNavbar />);
    const el = document.createElement('div');
    el.id = 'faq';
    el.scrollIntoView = vi.fn();
    document.body.appendChild(el);

    fireEvent.click(getHamburger());
    const faqButtons = screen.getAllByRole('button', { name: 'FAQ' });
    expect(faqButtons).toHaveLength(2);

    fireEvent.click(faqButtons[1]);

    expect(el.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    expect(screen.getAllByRole('button', { name: 'FAQ' })).toHaveLength(1);
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
