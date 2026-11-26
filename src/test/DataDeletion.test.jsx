import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { pageMeta } from '../seo';

const renderAt = (path) => render(
  <MemoryRouter initialEntries={[path]}>
    <App />
  </MemoryRouter>
);

describe('User Data Deletion page (/data-deletion)', () => {
  it('is routed and shows the deletion instructions', () => {
    renderAt('/data-deletion');
    expect(screen.getByRole('heading', { level: 1, name: 'User Data Deletion' })).toBeInTheDocument();
    expect(screen.getByText(/How to request deletion/)).toBeInTheDocument();
    expect(screen.getByText(/What we must keep/)).toBeInTheDocument();
  });

  it('gives working email and phone contacts for the request', () => {
    renderAt('/data-deletion');
    expect(screen.getByRole('link', { name: '09079095259' })).toHaveAttribute('href', 'tel:+2349079095259');
    const emails = screen.getAllByRole('link', { name: 'support@kopkad.ng' });
    expect(emails[0].getAttribute('href')).toMatch(/^mailto:support@kopkad\.ng\?subject=Delete%20my%20account/);
  });

  it('links to the Privacy Policy', () => {
    renderAt('/data-deletion');
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy');
  });

  it('is linked from section 10 of the Privacy Policy', () => {
    renderAt('/privacy');
    expect(screen.getByRole('link', { name: 'User Data Deletion' })).toHaveAttribute('href', '/data-deletion');
  });

  it('has its own share/search title and canonical URL', () => {
    const m = pageMeta('/data-deletion');
    expect(m.title).toBe('User Data Deletion | Kopkad');
    expect(m.url).toBe('https://kopkad.ng/data-deletion');
  });
});
