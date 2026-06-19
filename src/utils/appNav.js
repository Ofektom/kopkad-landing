const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.kopkad.ng';

export const goToApp = (path = '') => {
  window.location.href = APP_URL + path;
};
