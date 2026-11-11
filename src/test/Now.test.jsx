import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import fs from 'node:fs';
import NowPage from '../pages/NowPage';
import { NOW, FALLBACK, nowTarget, lagosToday } from '../content/now';

describe('kopkad.ng/now', () => {
  it('goes to the fallback before the first entry', () => {
    expect(nowTarget('2026-11-01')).toBe(FALLBACK);
  });

  it('follows the schedule day by day', () => {
    expect(nowTarget('2026-11-10')).toBe('/resources/study-plan');
    expect(nowTarget('2026-11-11')).toBe('/resources/study-plan');
    expect(nowTarget('2026-11-12')).toBe('/resources/money-map');
    expect(nowTarget('2026-11-16')).toBe('/blog');
    expect(nowTarget('2026-11-18')).toBe('/resources/money-map');
  });

  it('keeps the last entry until a new one is added', () => {
    expect(nowTarget('2027-03-01')).toBe(NOW[NOW.length - 1].to);
  });

  it('lists entries in date order', () => {
    const dates = NOW.map((e) => e.from);
    expect([...dates].sort()).toEqual(dates);
  });

  it('works out today in Lagos time', () => {
    // 23:30 UTC on 11 Nov is already 00:30 on 12 Nov in Lagos
    expect(lagosToday(new Date('2026-11-11T23:30:00Z'))).toBe('2026-11-12');
  });

  describe('page', () => {
    const original = window.location;
    afterEach(() => { Object.defineProperty(window, 'location', { value: original, configurable: true }); });

    it('forwards to today\'s target and shows a fallback link', () => {
      const replace = vi.fn();
      Object.defineProperty(window, 'location', { value: { ...original, replace }, configurable: true });
      render(<NowPage />);
      const target = nowTarget();
      expect(replace).toHaveBeenCalledWith(target);
      expect(screen.getByRole('link', { name: /tap here/i })).toHaveAttribute('href', target);
    });
  });
});

describe('short links', () => {
  const { redirects } = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  const map = Object.fromEntries(redirects.map((r) => [r.source, r.destination]));

  it('send each short address to its resource', () => {
    expect(map['/plan']).toBe('/resources/study-plan');
    expect(map['/map']).toBe('/resources/money-map');
    expect(map['/study']).toBe('/blog');
  });

  it('are temporary, so they can be repointed later', () => {
    redirects.forEach((r) => expect(r.permanent).toBe(false));
  });
});
