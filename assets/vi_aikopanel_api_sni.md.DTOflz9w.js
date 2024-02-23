import{_ as t,c as a,o as i,a4 as e}from"./chunks/framework.DclLByTZ.js";const b=JSON.parse('{"title":"API thay đổi SNI","description":"","frontmatter":{},"headers":[],"relativePath":"vi/aikopanel/api/sni.md","filePath":"vi/aikopanel/api/sni.md"}'),n={name:"vi/aikopanel/api/sni.md"},o=e('<h1 id="api-thay-đoi-sni" tabindex="-1">API thay đổi SNI <a class="header-anchor" href="#api-thay-đoi-sni" aria-label="Permalink to &quot;API thay đổi SNI&quot;">​</a></h1><h2 id="_1-thay-đoi-sni-server-name-indication" tabindex="-1">1. Thay đổi SNI (Server Name Indication) <a class="header-anchor" href="#_1-thay-đoi-sni-server-name-indication" aria-label="Permalink to &quot;1. Thay đổi SNI (Server Name Indication)&quot;">​</a></h2><h3 id="chuan-bi" tabindex="-1">Chuẩn bị <a class="header-anchor" href="#chuan-bi" aria-label="Permalink to &quot;Chuẩn bị&quot;">​</a></h3><ul><li>Sni muốn thay đổi</li></ul><h3 id="mot-so-custom-sni-nhanh-chong" tabindex="-1">Một số Custom SNI nhanh chóng <a class="header-anchor" href="#mot-so-custom-sni-nhanh-chong" aria-label="Permalink to &quot;Một số Custom SNI nhanh chóng&quot;">​</a></h3><table><thead><tr><th>SNI</th><th>Mô tả</th><th>Sử dụng</th></tr></thead><tbody><tr><td>ff</td><td>Free Fire</td><td><code>&amp;sni=ff</code></td></tr><tr><td>lq</td><td>Liên Quân</td><td><code>&amp;sni=lq</code></td></tr><tr><td>tiktok</td><td>Tiktok</td><td><code>&amp;sni=tiktok</code></td></tr><tr><td>jp</td><td>Japan Sorfbank</td><td><code>&amp;sni=jp</code></td></tr><tr><td>fb</td><td>Facebook</td><td><code>&amp;sni=fb</code></td></tr></tbody></table><h3 id="thuc-hien" tabindex="-1">Thực hiện <a class="header-anchor" href="#thuc-hien" aria-label="Permalink to &quot;Thực hiện&quot;">​</a></h3><p>Liên kết đăng kí hiện tại của bạn và thêm <code>&amp;sni=domain.com</code> vào cuối liên kết.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://aikopanel.com/api/v1/client/subscribe?token={token}&amp;sni=domain.com</span></span></code></pre></div><p>hoặc</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://aikopanel.com/api/v1/client/subscribe?token={token}&amp;flag=sing-box&amp;sni=domain.com</span></span></code></pre></div>',11),s=[o];function d(h,c,r,p,l,m){return i(),a("div",null,s)}const k=t(n,[["render",d]]);export{b as __pageData,k as default};
