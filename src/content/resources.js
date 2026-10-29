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
  {
    id: 'money-values',
    releases: '2026-12-22',
    tag: 'Topic 3 · Goals that match your values',
    title: 'Money Values worksheet',
    description:
      'One printable page that helps you name your top three values, check whether last month\'s spending matched them, and move money to what you really care about. About 15 minutes.',
    preview: '/magnets/money-values-preview.webp',
    files: [{ kind: 'pdf', label: 'Download the PDF', href: '/magnets/money-values.pdf' }],
    howTo: [
      'Print the page, or open it on your phone and write on it with any PDF or notes app. A sheet of paper works too.',
      'Step 1: tick the values that matter most to you and write your top three.',
      'Step 2: from your bank and mobile money history, list last month\'s biggest spending and write which of your top three values each one served, or "none".',
      'Step 3: pick one spending to reduce and one value to fund instead, with the monthly amount.',
    ],
    action: 'log_expense',
  },
  {
    id: 'goal-planner',
    releases: '2027-01-01',
    tag: 'Topic 3 · Goals that match your values',
    title: 'Life-Stage Goal Planner',
    description:
      'A spreadsheet for all your goals, from this year to twenty years ahead. It works out what each one will really cost when you need it, how much to save each month, and whether they all fit what you can save.',
    preview: '/magnets/goal-planner-preview.webp',
    files: [{ kind: 'xlsx', label: 'Download the spreadsheet', href: '/magnets/goal-planner.xlsx' }],
    howTo: [
      'Download the spreadsheet. On a phone, open it in the free Google Sheets or Excel app (in Google Sheets: File > Make a copy, so you can edit it).',
      'Read the "Start here" tab, then open "My goals". It starts empty: these are your goals.',
      'At the top, type what you can save each month (your surplus from the Money Map).',
      'One goal per row: what it is, how many years from now, today\'s price, any extras, and what you\'ve already saved. If a price is already agreed, like your rent, choose Yes under "Price already fixed?".',
      'The planner works out the price when you need it and the monthly amount. If the total says "Not yet", fund your top priorities first or move a date.',
    ],
    action: 'money_split',
  },
];

export const releasedResources = (today = COURSE.today) => RESOURCES.filter((r) => r.releases <= today);
export const getResource = (id, today = COURSE.today) => releasedResources(today).find((r) => r.id === id) || null;
