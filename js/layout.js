/** 全站页脚，需 site-config.js、products.js */
(function () {
  const base = document.body.dataset.base || '';
  const c = window.SITE_CONFIG || {};
  const products = window.SITE_PRODUCTS || [];
  const slot = document.getElementById('site-footer');
  if (!slot) return;

  const company = c.companyName || '长沙益汇信息科技有限公司';
  const fullName = c.companyFullName || company;
  const intro = c.footerIntro || '';
  const year = c.copyrightYear || new Date().getFullYear();
  const icp = c.icp || '';

  const maxFooterProducts = 3;
  const productLinks = products
    .slice(0, maxFooterProducts)
    .map((p) => `<a href="${base}${p.path}">${p.label}</a>`)
    .join('\n      ');
  const moreProductsLink =
    products.length > maxFooterProducts ? `<a href="${base}index.html#products">更多产品 &gt;</a>` : '';

  slot.outerHTML = `
<footer class="footer">
  <div class="wrap footer-main">
    <div>
      <h4>${company}</h4>
      <p>${intro}</p>
    </div>
    <div>
      <h4>产品中心</h4>
      ${productLinks}
      ${moreProductsLink}
    </div>
    <div>
      <h4>快速链接</h4>
      <a href="${base}index.html">网站首页</a>
      <a href="${base}about/index.html">关于我们</a>
      <a href="${base}index.html#products">产品中心</a>
      <a href="${base}contact/index.html">联系我们</a>
    </div>
    <div>
      <h4>联系方式</h4>
      <p>联系方式：<span data-site-phone>${c.phone || ''}</span> (QQ/微信)</p>
      <p>邮箱：<span data-site-email>${c.email || ''}</span></p>
      <p>地址：<span data-site-address>${c.address || ''}</span></p>
    </div>
  </div>
  <div class="wrap footer-bottom">
    <p class="footer-bottom-line">
      Copyright © ${year} ${fullName} 版权所有 &nbsp;|&nbsp; ${icp}
      &nbsp;|&nbsp;
      <img class="footer-visitor-badge" src="https://visitor-badge.laobi.icu/badge?page_id=changsha-yihui-website" alt="Visitors" loading="lazy" decoding="async" referrerpolicy="no-referrer-when-downgrade">
    </p>
  </div>
</footer>`;
})();
