import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { colors, gradients, fonts, layout, shadow } from './theme.js';
// Imported before App so base/reset rules land first in the bundled CSS —
// component stylesheets (imported deeper in the App tree) are then free to
// override them at equal selector specificity (e.g. .btn vs .nav-cta).
import './index.css';
import App from './App.jsx';

// Mirror theme.js onto CSS custom properties so every stylesheet in the app
// reads color/type tokens from ONE source of truth instead of hardcoding hex
// values or font stacks. Runs synchronously before the first paint.
const root = document.documentElement.style;
const cssVars = {
  '--c-black': colors.black,
  '--c-black-soft': colors.blackSoft,
  '--c-navy': colors.navy,
  '--c-white': colors.white,
  '--c-offwhite': colors.offWhite,
  '--c-green-light': colors.greenLight,
  '--c-green': colors.green,
  '--c-green-dark': colors.greenDark,
  '--c-text-on-dark': colors.textOnDark,
  '--c-text-on-dark-muted': colors.textOnDarkMuted,
  '--c-text-on-light': colors.textOnLight,
  '--c-text-on-light-muted': colors.textOnLightMuted,
  '--c-border': colors.border,
  '--c-border-light': colors.borderLight,
  '--c-overlay': colors.overlay,
  '--g-brand': gradients.brand,
  '--g-brand-text': gradients.brandText,
  '--g-fade': gradients.fade,
  '--f-display': fonts.display,
  '--f-accent': fonts.accent,
  '--f-body': fonts.body,
  '--max-width': layout.maxWidth,
  '--radius': layout.radius,
  '--radius-sm': layout.radiusSm,
  '--nav-height': layout.navHeight,
  '--shadow-card': shadow.card,
  '--shadow-glow': shadow.glow,
};
Object.entries(cssVars).forEach(([key, value]) => root.setProperty(key, value));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
