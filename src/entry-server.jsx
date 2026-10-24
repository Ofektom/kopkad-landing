import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { PRERENDER_PATHS, SITE_URL, headTags } from './seo';

/**
 * Build-time renderer (scripts/prerender.mjs): turns each public path into
 * real HTML so the site can be read and previewed without running JavaScript.
 * The browser then takes over the same markup (src/main.jsx hydrates).
 */
export const render = (url) => renderToString(
  <StaticRouter location={url}>
    <App />
  </StaticRouter>,
);

export { PRERENDER_PATHS, SITE_URL, headTags };
