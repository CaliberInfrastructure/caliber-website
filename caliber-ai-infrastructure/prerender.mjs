import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const ssrDir = path.join(root, '.ssr-build');
const target = path.join(root, 'dist/index.html');
const MARKER = '<div id="root"></div>';

const { render } = await import(path.join(ssrDir, 'entry-server.js'));
const markup = render();

if (!markup || markup.length < 2000) {
  throw new Error(`prerender: suspiciously small render output (${markup.length} bytes)`);
}

const html = readFileSync(target, 'utf8');
if (!html.includes(MARKER)) {
  throw new Error(`prerender: "${MARKER}" not found in dist/index.html`);
}

writeFileSync(target, html.replace(MARKER, `<div id="root">${markup}</div>`));
if (existsSync(ssrDir)) rmSync(ssrDir, { recursive: true, force: true });

console.log(`prerender: injected ${markup.length} bytes of static markup into dist/index.html`);
