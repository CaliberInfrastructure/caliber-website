import React from 'react';

// One icon set for the whole page.
//
// These replace the ✓ / → / ✕ / ◆ / ▾ text glyphs the page used to draw icons
// with. Text glyphs pick up the user's emoji font, render at a different
// optical weight on every platform, shift the baseline of whatever line they
// sit in, and get read aloud ("check mark", "black rightwards arrow") by screen
// readers that have no reason to announce them. These are decorative SVG with
// aria-hidden, sized from the surrounding font-size via `1em`.

type IconProps = { className?: string };

const base = (className?: string) =>
  `inline-block flex-shrink-0${className ? ` ${className}` : ''}`;

export const Check: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false"
       className={base(className)} width="1em" height="1em">
    <path d="M3 8.4 6.2 11.6 13 4.8" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false"
       className={base(className)} width="1em" height="1em">
    <path d="M2.5 8h11m-4.4-4.4L13.5 8l-4.4 4.4" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Cross: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false"
       className={base(className)} width="1em" height="1em">
    <path d="M4.2 4.2l7.6 7.6m0-7.6l-7.6 7.6" stroke="currentColor" strokeWidth="1.9"
          strokeLinecap="round" />
  </svg>
);

export const Chevron: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false"
       className={base(className)} width="1em" height="1em">
    <path d="M3.6 6l4.4 4.4L12.4 6" stroke="currentColor" strokeWidth="1.9"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Diamond: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false"
       className={base(className)} width="1em" height="1em">
    <path d="M8 1.6 14.4 8 8 14.4 1.6 8z" stroke="currentColor" strokeWidth="1.6"
          strokeLinejoin="round" />
  </svg>
);

export const Menu: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false"
       className={base(className)} width="1em" height="1em">
    <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" />
  </svg>
);

export const Close: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false"
       className={base(className)} width="1em" height="1em">
    <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" />
  </svg>
);
