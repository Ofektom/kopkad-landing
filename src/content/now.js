/**
 * kopkad.ng/now: the one link in our TikTok bio (TikTok only allows one, and
 * links in TikTok captions and comments can't be tapped). It sends people
 * straight to whatever the day's social post offered, so someone who saw the
 * Money Map reel lands on the Money Map, not on a menu.
 *
 * Keep this list in step with the posting schedule: each entry applies from
 * its date (Lagos time) until the next entry. Newest last.
 */
export const NOW = [
  { from: '2026-11-10', to: '/resources/study-plan', post: 'INTERESTED reel' },
  { from: '2026-11-12', to: '/resources/money-map', post: 'MAP reel' },
  { from: '2026-11-14', to: '/resources/study-plan', post: '5 money books' },
  { from: '2026-11-16', to: '/blog', post: 'Class day one' },
  { from: '2026-11-18', to: '/resources/money-map', post: 'Road trip reel (MAP)' },
  { from: '2026-11-20', to: '/blog', post: 'Find the gap' },
];

export const FALLBACK = '/resources';

/** Today's date in Lagos as YYYY-MM-DD, worked out on the reader's device. */
export const lagosToday = (now = new Date()) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Lagos' }).format(now);

/** Where kopkad.ng/now should go on a given day. */
export const nowTarget = (today = lagosToday(), list = NOW) => {
  let target = FALLBACK;
  for (const entry of list) if (entry.from <= today) target = entry.to;
  return target;
};
