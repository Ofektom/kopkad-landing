import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../landing/Footer';
import { goToApp } from '../utils/appNav';

vi.mock('../utils/appNav', () => ({
  goToApp: vi.fn(),
}));

const renderFooter = () =>
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

describe('Footer', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders the brand logo and description', () => {
    renderFooter();
    expect(screen.getByAltText('Kopkad')).toBeInTheDocument();
    expect(screen.getByText(/Smart savings management for thrift businesses/i)).toBeInTheDocument();
  });

  it('renders exactly four social icon links pointing to "#"', () => {
    renderFooter();
    const socialLinks = screen.getAllByRole('link').filter((a) => a.getAttribute('href') === '#');
    expect(socialLinks).toHaveLength(4);
  });

  it('renders the Product, Platform, Account and Contact column headings', () => {
    renderFooter();
    ['Product', 'Platform', 'Account', 'Contact'].forEach((heading) => {
      expect(screen.getByText(heading)).toBeInTheDocument();
    });
  });

  it('scrolls smoothly to the matching section when a Product link is clicked', () => {
    renderFooter();
    const el = document.createElement('div');
    el.id = 'features';
    el.scrollIntoView = vi.fn();
    document.body.appendChild(el);

    fireEvent.click(screen.getByRole('button', { name: 'Features' }));

    expect(el.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('does not throw when the target section is missing from the DOM', () => {
    renderFooter();
    expect(() => fireEvent.click(screen.getByRole('button', { name: 'Pricing' }))).not.toThrow();
    expect(() => fireEvent.click(screen.getByRole('button', { name: 'FAQ' }))).not.toThrow();
  });

  it('scrolls to "how-it-works" for the "For Agents" platform link', () => {
    renderFooter();
    const el = document.createElement('div');
    el.id = 'how-it-works';
    el.scrollIntoView = vi.fn();
    document.body.appendChild(el);

    fireEvent.click(screen.getByRole('button', { name: 'For Agents' }));

    expect(el.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('calls goToApp with "/signup" when Sign Up is clicked', () => {
    renderFooter();
    fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));
    expect(goToApp).toHaveBeenCalledTimes(1);
    expect(goToApp).toHaveBeenCalledWith('/signup');
  });

  it('calls goToApp with "/login" when Log In is clicked', () => {
    renderFooter();
    fireEvent.click(screen.getByRole('button', { name: 'Log In' }));
    expect(goToApp).toHaveBeenCalledWith('/login');
  });

  it('renders the physical address text', () => {
    renderFooter();
    expect(screen.getByText(/4A Akpabio Street/)).toBeInTheDocument();
    expect(screen.getByText(/Uyo, Akwa Ibom State/)).toBeInTheDocument();
  });

  it('renders a working tel: link for the phone number', () => {
    renderFooter();
    const phoneLink = screen.getByText('09079095259').closest('a');
    expect(phoneLink).toHaveAttribute('href', 'tel:+2349079095259');
  });

  it('renders a working mailto: link for the support email', () => {
    renderFooter();
    const emailLink = screen.getByText('support@kopkad.ng').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:support@kopkad.ng');
  });

  it('renders all legal links with the correct hrefs', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: 'Terms of Use' })).toHaveAttribute('href', '/terms');
    expect(screen.getByRole('link', { name: 'Cooperative Member Terms' })).toHaveAttribute(
      'href',
      '/coop-member-terms'
    );
    expect(screen.getByRole('link', { name: 'Platform Operator Terms' })).toHaveAttribute(
      'href',
      '/coop-platform-terms'
    );
    expect(screen.getByRole('link', { name: 'Cooperative Bye-Laws' })).toHaveAttribute('href', '/bylaws');
  });

  it('renders the current year in the copyright notice', () => {
    renderFooter();
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year} Kopkad`))).toBeInTheDocument();
  });

  it('renders the Ofektom Technologies credit link pointing to the correct URL', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: 'Ofektom Technologies' })).toHaveAttribute(
      'href',
      'https://ofektomtechnologies.com'
    );
  });
});
