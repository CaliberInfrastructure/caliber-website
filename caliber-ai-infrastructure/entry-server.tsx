import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

// Build-time render of the homepage. The output is injected into dist/index.html
// by prerender.mjs so the hero copy, FAQ, and footer exist in the served HTML —
// crawlers and AI retrieval engines that do not execute JavaScript still see it.
//
// renderToString (not renderToStaticMarkup) because index.tsx hydrates this
// markup rather than replacing it. Hydration keeps the existing DOM, which is
// what lets a direct load of /#demo actually land on the demo section.
export function render(): string {
  return renderToString(<App />);
}
