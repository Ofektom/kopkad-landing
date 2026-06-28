const APP_URL  = import.meta.env.VITE_APP_URL  || 'https://app.kopkad.ng';
const COOP_URL = import.meta.env.VITE_COOP_URL || 'https://cooperative.kopkad.ng';

export const goToApp  = (path = '') => { window.location.href = APP_URL  + path; };
export const goToCoop = (path = '') => { window.location.href = COOP_URL + path; };
