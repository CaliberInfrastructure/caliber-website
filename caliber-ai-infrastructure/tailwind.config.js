/** @type {import('tailwindcss').Config} */
// Design tokens for the Caliber visual system. This is the same object that
// used to be assigned to `tailwind.config` at runtime by the Tailwind Play CDN
// (public/tailwind-tokens.js); it now feeds the build-time compiler instead.
//
// `content` must cover every file that contains class names. That includes the
// three hand-written static pages (terms/privacy/guide) — they have no JS entry,
// so if they are missing here their classes get purged and they render unstyled.
export default {
  content: [
    './index.html',
    './terms.html',
    './privacy.html',
    './guide/**/*.html',
    './index.tsx',
    './App.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        teal:       { DEFAULT: '#0E7E8F', light: '#4FC2D1', deep: '#0B5E6B', wash: '#E2F0F1' },
        navy:       { DEFAULT: '#0C1A24', line: '#1E3242', line2: '#2C4150', line3: '#2C5A63' },
        // `deep` exists so white text on a terracotta chip clears AA; the
        // DEFAULT is 4.45:1 against white, which is fine for the large display
        // numerals it is used for but short of the 4.5:1 small-text bar.
        terracotta: { DEFAULT: '#BC5B43', light: '#E08A6F', deep: '#AD5039' },
        ink:        { DEFAULT: '#0C1A24', 2: '#46535B', 3: '#5A666E', 4: '#3D4A52', 5: '#2A363D' },
        // Secondary-text ramp. Every step is measured against the lightest
        // surface it sits on (#F7F9FA, which is stricter than white):
        //   muted 5.27:1 · muted-2 4.66:1 — both clear WCAG AA for body text.
        //   muted-3 3.25:1 — chevrons and other non-text UI indicators only,
        //     which have a 3:1 bar, never running copy.
        //   muted-4 4.80:1 against navy — footer legal type, which has to read
        //     at body contrast because it carries the revenue-claim disclosure.
        // The pre-audit values (7E8A91 / 9AA4AA / C0C8CC / 6B7780) all failed.
        muted:      { DEFAULT: '#5E6A71', 2: '#687278', 3: '#828C92', 4: '#7A8791' },
        // text tones used on navy surfaces
        onnavy:     { DEFAULT: '#9AA7AE', 2: '#7E8E96', 3: '#C4D0D6', 4: '#E4EAED', wash: '#BEE6EB', teal: '#9FD3DB' },
        surface:    { DEFAULT: '#FFFFFF', 2: '#F7F9FA', 3: '#F4F7F8' },
        hairline:   { DEFAULT: '#EEF0F1', 2: '#E3E7E8', 3: '#E7EBEC', teal: '#CFE6E9' },
        track:      '#D6E3E5',
        positive:   '#86EFAC',
        error:      { bg: '#FBEEEA', border: '#E8C4B9', text: '#9A3D28' },
      },
      borderRadius: { sm: '12px', md: '14px', lg: '20px', xl: '24px', '2xl': '28px' },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans:  ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        mono:  ['Courier New', 'monospace'],
      },
      maxWidth: { container: '1180px', narrow: '920px', tight: '860px' },
      boxShadow: {
        card:     '0 2px 14px rgba(12,26,36,.05)',
        row:      '0 1px 6px rgba(12,26,36,.05)',
        soft:     '0 2px 10px rgba(12,26,36,.08)',
        elevated: '0 22px 50px rgba(12,26,36,.11)',
        cta:      '0 8px 20px rgba(14,126,143,.22)',
      },
      backgroundImage: {
        'hero-fade': 'linear-gradient(180deg,#FBFCFC 0%,#F3F6F7 100%)',
      },
    },
  },
  plugins: [],
};
