const NAV_ITEMS = [
  { label: 'الرئيسية', href: 'index.html', page: 'home' },
  { label: 'الفعاليات', href: 'events.html', page: 'events' },
  { label: 'عن البوابة', href: 'about.html', page: 'about' },
  { label: 'تواصل معنا', href: 'contact.html', page: 'contact' },
];

const renderHeader = () => {
  const currentPage = document.body.dataset.page || 'home';
  const header = document.querySelector('#site-header');
  if (!header) return;
  const navLinks = NAV_ITEMS.map(({ label, href, page }) => `
    <li class="nav-item"><a class="nav-link ${currentPage === page ? 'active' : ''}" ${currentPage === page ? 'aria-current="page"' : ''} href="${href}">${label}</a></li>
  `).join('');
  header.innerHTML = `
    <header class="site-header"><nav class="navbar navbar-expand-lg" data-bs-theme="dark" aria-label="التنقل الرئيسي"><div class="container">
      <a class="navbar-brand" href="index.html" aria-label="دليل فعاليات الجامعة الافتراضية السورية"><span class="brand-mark"><i class="bi bi-mortarboard-fill"></i></span><span class="brand-text"><strong>SVU</strong><small>دليل الفعاليات</small></span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavigation" aria-controls="mainNavigation" aria-expanded="false" aria-label="فتح القائمة"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="mainNavigation"><ul class="navbar-nav mx-auto mb-2 mb-lg-0">${navLinks}</ul><div class="header-actions d-flex align-items-center gap-2"><button class="theme-toggle" id="theme-toggle" type="button" aria-label="تفعيل الوضع الداكن" title="الوضع الداكن"><i class="bi bi-moon-stars"></i></button><a class="btn btn-primary btn-sm header-cta" href="events.html">شارك معنا <i class="bi bi-arrow-left"></i></a></div></div>
    </div></nav></header>`;
};

const renderFooter = () => {
  const footer = document.querySelector('#site-footer');
  if (!footer) return;
  footer.innerHTML = `
    <footer class="site-footer"><div class="container"><div class="row g-4 justify-content-between">
      <div class="col-lg-4"><a class="navbar-brand footer-brand" href="index.html"><span class="brand-mark"><i class="bi bi-mortarboard-fill"></i></span><span class="brand-text"><strong>SVU</strong><small>دليل الفعاليات</small></span></a><p class="footer-copy">دليل يساعدك على اكتشاف الفعاليات والتجارب الجامعية.</p></div>
      <div class="col-6 col-lg-2"><h3>استكشف</h3><ul class="footer-links"><li><a href="events.html">الفعاليات</a></li><li><a href="about.html">عن البوابة</a></li><li><a href="contact.html">تواصل معنا</a></li></ul></div>
    </div><div class="footer-bottom"><span>© 2026 دليل فعاليات الجامعة الافتراضية السورية.</span></div></div></footer>`;
};

export const renderSiteShell = () => {
  renderHeader();
  renderFooter();
};
