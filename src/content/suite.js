/**
 * The Kopkad suite: the products on the home page's "suite" section.
 *
 * The third product is not live yet. Its name is only set here (NAME_NEW_PRODUCT),
 * so renaming it is a one-line change. Do not add dates, prices or claims that the
 * product does not meet yet; it is "coming soon" until a pilot shop is using it.
 */
export const NAME_NEW_PRODUCT = 'Dosebooks';

export const SUITE_CONTACT = 'support@kopkad.ng';

/** status: 'live' | 'soon' */
export const SUITE_PRODUCTS = [
  {
    id: 'kopkad',
    name: 'Kopkad',
    audience: 'For individuals, merchants and savings agents',
    status: 'live',
    blurb: 'Know your money and grow it: Wealth Builder, savings that earn interest, Locked Savings, Thrift groups and the Kopkad Pay merchant POS.',
    cta: 'Open the app',
    action: 'app',
  },
  {
    id: 'coopx',
    name: 'CoopX by Kopkad',
    audience: 'For cooperative societies',
    status: 'live',
    blurb: 'Run a cooperative end to end: member wallets, contribution groups, loans and a branded member portal.',
    cta: 'Explore CoopX',
    action: 'coop',
  },
  {
    id: 'new',
    name: NAME_NEW_PRODUCT,
    audience: 'For pharmacies, patent medicine stores and shops',
    status: 'soon',
    blurb: 'Know what is on your shelf and what is about to expire. Stock by batch, expiry and low-stock alerts, and a counter that keeps selling when the network is down. Starting with shops in Akwa Ibom.',
    cta: 'Ask to be a pilot shop',
    action: 'mail',
  },
];
