// ONE10K BENGALURU — Design tokens
// Colors decoded from the brand logo: deep near-black ink, a two-stop lime→green
// gradient, and clean white. Keep this file the single source of truth for
// color and type so the rest of the app never hardcodes hex values or fonts.

export const colors = {
  // Core brand
  black: '#0A0C0A', // primary ink / background
  blackSoft: '#121510', // elevated surface on black
  navy: '#101826', // secondary dark accent (from the logo's navy variant)
  white: '#FFFFFF',
  offWhite: '#F4F6F2', // logo backdrop white, used for light sections

  // Brand green — gradient from lime to deeper green, matches the "10K" wordmark
  greenLight: '#9BDC3C',
  green: '#6FB92C',
  greenDark: '#3F8E22',

  // Text
  textOnDark: '#F4F6F2',
  textOnDarkMuted: 'rgba(244, 246, 242, 0.66)',
  textOnLight: '#0A0C0A',
  textOnLightMuted: 'rgba(10, 12, 10, 0.62)',

  // Utility
  border: 'rgba(244, 246, 242, 0.12)',
  borderLight: 'rgba(10, 12, 10, 0.1)',
  overlay: 'rgba(10, 12, 10, 0.72)',
};

export const gradients = {
  brand: `linear-gradient(100deg, ${colors.greenLight} 0%, ${colors.green} 55%, ${colors.greenDark} 100%)`,
  brandText: `linear-gradient(100deg, ${colors.greenLight} 0%, ${colors.green} 100%)`,
  fade: `linear-gradient(180deg, rgba(10,12,10,0) 0%, rgba(10,12,10,0.95) 100%)`,
};

// Fonts decoded from the wordmark: a bold, tall condensed display face for the
// "ONE10K" impact type, a technical/sporty face for stats & numerals, and a
// clean grotesque for body copy/UI. Loaded via Google Fonts in index.html.
export const fonts = {
  display: "'Bebas Neue', 'Anton', sans-serif", // headlines, nav, hero
  accent: "'Rajdhani', 'Oswald', sans-serif", // stats, numbers, labels, tags
  body: "'Inter', -apple-system, 'Segoe UI', sans-serif", // paragraphs, UI text
};

export const layout = {
  maxWidth: '1200px',
  radius: '14px',
  radiusSm: '8px',
  navHeight: '76px',
};

export const shadow = {
  card: '0 20px 50px rgba(0,0,0,0.35)',
  glow: `0 0 40px rgba(111, 185, 44, 0.35)`,
};

const theme = { colors, gradients, fonts, layout, shadow };
export default theme;
