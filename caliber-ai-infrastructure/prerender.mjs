import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const ssrDir = path.join(root, '.ssr-build');
const target = path.join(root, 'dist/index.html');
const MARKER = '<div id="root"></div>';
const FAQ_MARKER = '<!--FAQ_JSONLD-->';
const SITE = 'https://www.caliberinfrastructure.com/';

const { render, FAQS } = await import(path.join(ssrDir, 'entry-server.js'));
const markup = render();

if (!markup || markup.length < 2000) {
  throw new Error(`prerender: suspiciously small render output (${markup.length} bytes)`);
}

let html = readFileSync(target, 'utf8');
if (!html.includes(MARKER)) {
  throw new Error(`prerender: "${MARKER}" not found in dist/index.html`);
}
html = html.replace(MARKER, `<div id="root">${markup}</div>`);

// The FAQPage schema is generated from the same array the visible FAQ renders
// from, rather than kept as a second hand-maintained copy inside index.html.
// Google requires the structured data to match what the page shows; two copies
// of six answers with a comment asking whoever edits one to remember the other
// is a drift bug with a countdown on it.
if (!html.includes(FAQ_MARKER)) {
  throw new Error(`prerender: "${FAQ_MARKER}" not found in dist/index.html`);
}
if (!Array.isArray(FAQS) || FAQS.length === 0) {
  throw new Error('prerender: FAQS export from components/FAQ.tsx is empty');
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE}#faq`,
  isPartOf: { '@id': `${SITE}#webpage` },
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

// `</` inside a JSON string would close the script element early.
const faqJson = JSON.stringify(faqSchema, null, 2).replace(/<\//g, '<\\/');
html = html.replace(
  FAQ_MARKER,
  `<script type="application/ld+json">\n${faqJson}\n</script>`,
);

writeFileSync(target, html);
if (existsSync(ssrDir)) rmSync(ssrDir, { recursive: true, force: true });

console.log(
  `prerender: injected ${markup.length} bytes of static markup and ` +
  `${FAQS.length} FAQ entries of JSON-LD into dist/index.html`,
);
