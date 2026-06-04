/** 首页 #products 产品卡片，需 products.js；页面含 #site-products */
(function () {
  const base = document.body.dataset.base || '';
  const slot = document.getElementById('site-products');
  const products = window.SITE_PRODUCTS;
  if (!slot || !products) return;

  slot.innerHTML = products
    .map((p) => {
      const img = base + (p.thumb || p.image);
      return `<a href="${base}${p.path}" class="product-card">
  <div class="product-thumb"><img src="${img}" alt="${p.imageAlt || p.label}" loading="lazy" decoding="async"></div>
  <div class="product-card-body">
    <h3>${p.label}</h3>
    <p>${p.summary}</p>
    <span class="more">查看详情 &gt;</span>
  </div>
</a>`;
    })
    .join('');
})();
