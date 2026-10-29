import { COURSE } from '../blog/course';

/**
 * Free downloads from the Financial Intelligence class (kopkad.ng/resources).
 * Moved here from the app (app.kopkad.ng/resources now redirects to these pages).
 *
 * Each resource has its own page (/resources/<id>) — that is where the
 * comment-to-DM automations send people, so a reader who asked for one
 * download gets that download, not a menu of everything. The list page shows
 * only resources whose `releases` date has come (same daily rebuild as the
 * studies). To add one: put its files in public/magnets/ and add an entry
 * below (newest last). Files are reachable by direct URL before release, but
 * nothing links to them until the release date.
 */
export const RESOURCES = [
  {
    id: 'study-plan',
    releases: '2026-10-28',
    tag: 'Start here',
    title: 'Financial Intelligence study plan',
    description: 'All 24 topics of the free class, in order, so you know exactly what is coming and can follow along.',
    preview: '/magnets/study-plan-preview.webp',
    files: [{ kind: 'pdf', label: 'Download the PDF', href: '/magnets/study-plan.pdf' }],
    action: 'money_split',
  },
  {
    id: 'money-map',
    releases: '2026-10-28',
    tag: 'Topic 2 · Know where you stand',
    title: 'Your Money Map',
    description:
      'One page that shows where you stand: what comes in, what goes out, what you own, what you owe and your net worth. About 20 minutes.',
    preview: '/magnets/money-map-preview.webp',
    files: [
      { kind: 'pdf', label: 'Printable PDF', href: '/magnets/money-map.pdf' },
      { kind: 'xlsx', label: 'Spreadsheet (does the maths)', href: '/magnets/money-map.xlsx' },
    ],
    action: 'statements',
  },
  {
    id: 'net-worth-calculator',
    releases: '2026-12-11',
    tag: 'Topic 2 · Know where you stand',
    title: 'Net Worth Calculator',
    description:
      'A spreadsheet that adds up what you own and what you owe, shows your net worth and how much of your wealth is working for you, and keeps a quarterly history so you can watch the trend.',
    preview: '/magnets/net-worth-calculator-preview.webp',
    files: [{ kind: 'xlsx', label: 'Download the spreadsheet', href: '/magnets/net-worth-calculator.xlsx' }],
    action: 'statements',
  },
];

export const releasedResources = (today = COURSE.today) => RESOURCES.filter((r) => r.releases <= today);
export const getResource = (id, today = COURSE.today) => releasedResources(today).find((r) => r.id === id) || null;
