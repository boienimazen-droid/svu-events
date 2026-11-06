export const initializeScrollTop = () => {
  const scrollTop = document.querySelector('#scroll-top');
  if (!scrollTop) return;
  const updateVisibility = () => scrollTop.classList.toggle('visible', window.scrollY > 450);
  window.addEventListener('scroll', updateVisibility, { passive: true });
  scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  updateVisibility();
};
