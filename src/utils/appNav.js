export const APP_URL  = import.meta.env.VITE_APP_URL  || 'https://app.kopkad.ng';
const COOP_URL = import.meta.env.VITE_COOP_URL || 'https://cooperative.kopkad.ng';

/** Free Money Map download page on the main app (kopkad-frontend /money-map). */
export const MONEY_MAP_URL = `${APP_URL}/money-map`;

export const goToApp  = (path = '') => { window.location.href = APP_URL  + path; };
export const goToCoop = (path = '') => { window.location.href = COOP_URL + path; };

/**
 * Scroll to a landing-page section; from another page (the blog, the terms)
 * go to the landing page at that section instead (LandingPage scrolls to the
 * hash once it renders).
 */
export const goToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  else window.location.assign(`/#${id}`);
};
