/** 全站交互：移动菜单、站点配置占位填充 */
(function () {
  const base = document.body?.dataset?.base || '';

  // Inject a unified favicon for all pages.
  const setFavicon = (rel) => {
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
    }
    link.setAttribute('type', 'image/svg+xml');
    link.setAttribute('href', `${base}images/logo.svg`);
  };
  setFavicon('icon');
  setFavicon('shortcut icon');

  const c = window.SITE_CONFIG;
  if (c) {
    document.querySelectorAll('[data-site-phone]').forEach((el) => {
      el.textContent = c.phone || '';
    });
    document.querySelectorAll('[data-site-email]').forEach((el) => {
      el.textContent = c.email || '';
      if (el.tagName === 'A') el.href = `mailto:${c.email}`;
    });
    document.querySelectorAll('[data-site-address]').forEach((el) => {
      el.textContent = c.address || '';
    });
    document.querySelectorAll('[data-site-work-hours]').forEach((el) => {
      el.textContent = c.workHours || '';
    });
  }

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', (e) => {
      if (e.target.closest('a') && window.matchMedia('(max-width: 768px)').matches) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.querySelector('.nav-item.is-open')?.classList.remove('is-open');
      }
    });
  }

})();
