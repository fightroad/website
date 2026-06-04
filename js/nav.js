/**
 * 全站统一导航（需先加载 products.js、header.js）
 * data-nav: home | about | contact
 * data-nav-product: 产品子页 id
 */
(function () {
  const base = document.body.dataset.base || '';
  const activeNav = document.body.dataset.nav || '';
  const activeProduct = document.body.dataset.navProduct || '';
  const products = window.SITE_PRODUCTS || [];

  const slot = document.getElementById('site-nav');
  if (!slot) return;

  const inProducts = Boolean(activeProduct);
  const triggerActive = inProducts ? ' active' : '';

  const productLinks = products
    .map((p) => {
      const ac = activeProduct === p.id ? ' class="active"' : '';
      return `<a href="${base}${p.path}"${ac}>${p.label}</a>`;
    })
    .join('');

  slot.outerHTML = `
<nav class="nav" id="main-nav">
  <a href="${base}index.html"${activeNav === 'home' ? ' class="active"' : ''}>首页</a>
  <div class="nav-item nav-products">
    <a href="${base}index.html#products" class="nav-products-trigger${triggerActive}" id="nav-products-trigger" aria-haspopup="true" aria-expanded="false">产品中心</a>
    <div class="dropdown">
      ${productLinks}
    </div>
  </div>
  <a href="${base}about/index.html"${activeNav === 'about' ? ' class="active"' : ''}>关于我们</a>
  <a href="${base}contact/index.html"${activeNav === 'contact' ? ' class="active"' : ''}>联系我们</a>
</nav>`;

  initProductsNav();
})();

function initProductsNav() {
  const item = document.querySelector('.nav-products');
  const trigger = document.getElementById('nav-products-trigger');
  if (!item || !trigger) return;

  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  const setExpanded = (open) => {
    item.classList.toggle('is-open', open);
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isMobile()) return;
    const willOpen = !item.classList.contains('is-open');
    document.querySelectorAll('.nav-item.is-open').forEach((el) => {
      if (el !== item) el.classList.remove('is-open');
    });
    setExpanded(willOpen);
  });

  document.addEventListener('click', (e) => {
    if (!item.classList.contains('is-open')) return;
    if (item.contains(e.target)) return;
    setExpanded(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setExpanded(false);
  });

  window.addEventListener('resize', () => {
    if (!isMobile()) setExpanded(false);
  });
}
