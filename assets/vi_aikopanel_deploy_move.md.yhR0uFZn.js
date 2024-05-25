import{_ as a,c as n,o as i,a3 as e}from"./chunks/framework.BYhES31N.js";const k=JSON.parse('{"title":"Chuyển AikoPanel sang máy chủ mới","description":"","frontmatter":{},"headers":[],"relativePath":"vi/aikopanel/deploy/move.md","filePath":"vi/aikopanel/deploy/move.md"}'),o={name:"vi/aikopanel/deploy/move.md"},c=e('<h1 id="chuyen-aikopanel-sang-may-chu-moi" tabindex="-1">Chuyển AikoPanel sang máy chủ mới <a class="header-anchor" href="#chuyen-aikopanel-sang-may-chu-moi" aria-label="Permalink to &quot;Chuyển AikoPanel sang máy chủ mới&quot;">​</a></h1><h2 id="buoc-1-sao-luu-du-lieu-va-cau-hinh" tabindex="-1">Bước 1: Sao lưu dữ liệu và cấu hình <a class="header-anchor" href="#buoc-1-sao-luu-du-lieu-va-cau-hinh" aria-label="Permalink to &quot;Bước 1: Sao lưu dữ liệu và cấu hình&quot;">​</a></h2><h3 id="đau-tien-ban-can-sao-luu-du-lieu-va-cau-hinh-cua-aikopanel" tabindex="-1">Đầu tiên, bạn cần sao lưu dữ liệu và cấu hình của AikoPanel. <a class="header-anchor" href="#đau-tien-ban-can-sao-luu-du-lieu-va-cau-hinh-cua-aikopanel" aria-label="Permalink to &quot;Đầu tiên, bạn cần sao lưu dữ liệu và cấu hình của AikoPanel.&quot;">​</a></h3><ul><li>Sao chép file config ở thư mục sau:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{Source Path}/config/aikopanel.php</span></span></code></pre></div><ul><li>Sao chép file .env ở thư mục sau:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{Source Path}/.env</span></span></code></pre></div><h2 id="buoc-2-cai-lai-aikopanel-theo-huong-dan-cu" tabindex="-1">Bước 2: Cài lại AikoPanel theo hướng dẫn cũ <a class="header-anchor" href="#buoc-2-cai-lai-aikopanel-theo-huong-dan-cu" aria-label="Permalink to &quot;Bước 2: Cài lại AikoPanel theo hướng dẫn cũ&quot;">​</a></h2><h3 id="ban-can-cai-lai-aikopanel-theo-huong-dan-cu-nhung-khong-can-tao-co-so-du-lieu-moi-va-chay-script-init-sh" tabindex="-1">Bạn cần cài lại AikoPanel theo hướng dẫn cũ, nhưng không cần tạo cơ sở dữ liệu mới và chạy script init.sh. <a class="header-anchor" href="#ban-can-cai-lai-aikopanel-theo-huong-dan-cu-nhung-khong-can-tao-co-so-du-lieu-moi-va-chay-script-init-sh" aria-label="Permalink to &quot;Bạn cần cài lại AikoPanel theo hướng dẫn cũ, nhưng không cần tạo cơ sở dữ liệu mới và chạy script init.sh.&quot;">​</a></h3><ul><li><p>Sau khi git clone, bạn cần chuyển đến nhánh master thì bạn coppy file config và file .env đã sao lưu ở bước 1 vào thư mục mới.</p></li><li><p>Sau đó bạn chạy script update.sh để cập nhật AikoPanel.</p></li></ul>',10),l=[c];function h(t,u,s,d,p,r){return i(),n("div",null,l)}const g=a(o,[["render",h]]);export{k as __pageData,g as default};
