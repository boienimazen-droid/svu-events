const THEME_STORAGE_KEY = 'svu-theme';

const readSavedTheme = () => {
  try {
    const theme = localStorage.getItem(THEME_STORAGE_KEY);
    return theme === 'dark' || theme === 'light' ? theme : null;
  } catch { return null; }
};

const updateThemeIcon = () => {
  const toggle = document.querySelector('#theme-toggle');
  if (!toggle) return;
  const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
  toggle.innerHTML = `<i class="bi bi-${isDark ? 'sun' : 'moon-stars'}"></i>`;
  toggle.setAttribute('aria-label', isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن');
  toggle.setAttribute('title', isDark ? 'الوضع الفاتح' : 'الوضع الداكن');
  toggle.setAttribute('aria-pressed', String(isDark));
};

export const initializeTheme = () => {
  const systemPreference = window.matchMedia?.('(prefers-color-scheme: dark)');
  let hasUserChoice = readSavedTheme() !== null;
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');
    updateThemeIcon();
  };
  const initialTheme = document.documentElement.getAttribute('data-bs-theme');
  applyTheme(initialTheme === 'dark' || initialTheme === 'light'
    ? initialTheme
    : readSavedTheme() || (systemPreference?.matches ? 'dark' : 'light'));
  const toggle = document.querySelector('#theme-toggle');
  toggle?.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    hasUserChoice = true;
    applyTheme(theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch { /* The theme still works for this page when storage is blocked. */ }
  });
  systemPreference?.addEventListener?.('change', ({ matches }) => {
    if (!hasUserChoice) applyTheme(matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', ({ key }) => {
    if (key !== THEME_STORAGE_KEY && key !== null) return;
    const savedTheme = readSavedTheme();
    hasUserChoice = savedTheme !== null;
    applyTheme(savedTheme || (systemPreference?.matches ? 'dark' : 'light'));
  });
};
