const lightFavicon = document.getElementById('favicon-light');
const darkFavicon = document.getElementById('favicon-dark');

const setFavicon = (theme) => {
  if (theme === 'dark') {
    lightFavicon.setAttribute('href', '/svg/logo-light.svg');
    darkFavicon.setAttribute('href', '');
  } else {
    lightFavicon.setAttribute('href', '');
    darkFavicon.setAttribute('href', '/svg/logo-dark.svg');
  }
};

// Detect initial theme
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
setFavicon(prefersDarkScheme ? 'dark' : 'light');

// Watch for theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  setFavicon(e.matches ? 'dark' : 'light');
});
