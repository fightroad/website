/** 全站顶栏 + 页头，需 site-config.js；#site-nav 供 nav.js 注入 */
(function () {
  const base = document.body.dataset.base || '';
  const c = window.SITE_CONFIG || {};
  const slot = document.getElementById('site-header');
  if (!slot) return;

  const company = c.companyName || '长沙益汇信息科技有限公司';
  const tagline = c.tagline || '医疗信息化';
  const welcome = `欢迎访问${company}官方网站`;
  const phone = c.phone || '';
  const email = c.email || '';

  slot.outerHTML = `
<div class="topbar">
  <div class="wrap topbar-inner">
    <span>${welcome}</span>
    <span>联系方式：<strong>${phone}</strong> (QQ/微信) &nbsp;|&nbsp; <a href="mailto:${email}">${email}</a></span>
  </div>
</div>
<header class="header">
  <div class="wrap header-inner">
    <a href="${base}index.html" class="logo">
      <span class="logo-img"><img src="${base}images/logo.svg" alt="${company}"></span>
      <span class="logo-name">${company}<small>${tagline}</small></span>
    </a>
    <button class="nav-toggle" type="button" aria-label="打开菜单" aria-expanded="false" aria-controls="main-nav">☰</button>
    <div id="site-nav"></div>
  </div>
</header>`;
})();
