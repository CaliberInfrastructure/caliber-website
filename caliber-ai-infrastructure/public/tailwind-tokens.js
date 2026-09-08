// Design tokens for the Caliber visual upgrade. Consumed by the Tailwind
// Play CDN (configured at runtime). Components reference these tokens
// (teal / navy / terracotta / ink / surface, the 12–28px radius scale,
// and the serif/sans families) rather than ad-hoc hex.
//
// Loaded as a plain (non-deferred) script immediately after the Play CDN on
// every page — the React app and the static Terms / Privacy / Guide pages —
// so the palette stays identical across the site from one source.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        teal:       { DEFAULT: '#0E7E8F', light: '#4FC2D1', deep: '#0B5E6B', wash: '#E2F0F1' },
        navy:       { DEFAULT: '#0C1A24', line: '#1E3242', line2: '#2C4150', line3: '#2C5A63' },
        terracotta: { DEFAULT: '#BC5B43', light: '#E08A6F' },
        ink:        { DEFAULT: '#0C1A24', 2: '#46535B', 3: '#5A666E', 4: '#3D4A52', 5: '#2A363D' },
        muted:      { DEFAULT: '#7E8A91', 2: '#9AA4AA', 3: '#C0C8CC', 4: '#6B7780' },
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
};
