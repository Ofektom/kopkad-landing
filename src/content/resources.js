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
    howTo: [
      'Download the PDF and print it, or keep it on your phone.',
      'Write your one money goal for the class at the top: a number and a date.',
      'Tick each topic off as the class covers it. A new study is on the blog every weekday morning.',
    ],
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
    howTo: [
      'Choose a version: print the PDF and fill it in by hand, or use the spreadsheet, which does the maths for you.',
      'Open your bank and mobile money apps and look at the last 30 days.',
      'Fill in what came in and what went out last month, then what you own (at today\'s value) and the balance left on every debt.',
      'Read your surplus, your net worth and how many months your savings would last. A negative number is a starting point, not a verdict.',
      'In the spreadsheet, type only in the yellow cells on the "My Money Map" tab. The "Example" tab shows a finished one.',
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
    howTo: [
      'Download the spreadsheet. On a phone, open it in the free Google Sheets or Excel app (in Google Sheets: File > Make a copy, so you can edit it).',
      'Read the "Start here" tab, then open "My net worth". It starts empty: these are your numbers.',
      'Type what you own at today\'s value, and mark each item "Yes" if it pays you. Then type the balance left on every debt.',
      'Your net worth appears at the bottom. Copy your totals into the "Quarterly history" tab.',
      'Every 3 months, update it and add a row. The chart shows whether your net worth is rising.',
    ],
    action: 'statements',
  },
];

export const releasedResources = (today = COURSE.today) => RESOURCES.filter((r) => r.releases <= today);
export const getResource = (id, today = COURSE.today) => releasedResources(today).find((r) => r.id === id) || null;
