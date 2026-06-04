/** 产品详情页左侧栏：body 需 data-base、data-nav-product；先加载 products.js */
(function () {
  const base = document.body.dataset.base || '';
  const active = document.body.dataset.navProduct || '';
  const slot = document.getElementById('site-sidebar');
  const products = window.SITE_PRODUCTS;
  if (!slot || !products) return;

  const links = products
    .map((p) => {
      const ac = active === p.id ? ' class="active"' : '';
      return `<a href="${base}${p.path}"${ac}>${p.label}</a>`;
    })
    .join('');

  slot.outerHTML = `
<aside class="sidebar">
  <div class="sidebar-title">产品列表</div>
  ${links}
</aside>`;
})();
