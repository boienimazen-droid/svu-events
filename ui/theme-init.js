// Run before styles load so saved/system preferences apply without a light flash.
(() => {
  let savedTheme;
  try { savedTheme = localStorage.getItem('svu-theme'); } catch { /* Storage is optional. */ }
  const theme = savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-bs-theme', theme);
  document.documentElement.classList.toggle('dark-mode', theme === 'dark');
})();
