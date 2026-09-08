
import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// The production build prerenders the homepage into #root (see prerender.mjs),
// so hydrate that markup rather than discarding it: hydration reuses the
// existing DOM, so the content the browser already laid out — including the
// element a "/#demo" link points at — stays put. In dev, #root is empty and
// there is nothing to hydrate.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
