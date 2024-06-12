import{_ as t,c as n,o as h,a3 as a}from"./chunks/framework.D5qxx6u8.js";const k=JSON.parse('{"title":"Aiko-Server","description":"","frontmatter":{},"headers":[],"relativePath":"vi/aikoserver/home.md","filePath":"vi/aikoserver/home.md"}'),i={name:"vi/aikoserver/home.md"},e=a('<p align="center"><img src="https://avatars.githubusercontent.com/u/91626055?v=4" width="128"></p><div align="center"><h1 id="aiko-server" tabindex="-1">Aiko-Server <a class="header-anchor" href="#aiko-server" aria-label="Permalink to &quot;Aiko-Server&quot;">​</a></h1><p>Dự án Aiko-Server</p></div><h1 id="mo-ta-ve-aiko-server" tabindex="-1">Mô tả về Aiko-Server <a class="header-anchor" href="#mo-ta-ve-aiko-server" aria-label="Permalink to &quot;Mô tả về Aiko-Server&quot;">​</a></h1><p>Aiko-Server chỉ hỗ trợ AikoPanel</p><p>Một khung sau dựa trên Xray, hỗ trợ các giao thức V2ay, Trojan, Shadowsocks, dễ mở rộng và hỗ trợ kết nối đa trang rất dễ dàng.</p><p>Nếu bạn thích dự án này, bạn có thể nhấp vào nút sao + xem ở góc trên bên phải để theo dõi tiến trình của dự án này.</p><h2 id="mien-trach-nhiem" tabindex="-1">Miễn trách nhiệm <a class="header-anchor" href="#mien-trach-nhiem" aria-label="Permalink to &quot;Miễn trách nhiệm&quot;">​</a></h2><p>Dự án này chỉ dành cho mục đích học tập, phát triển và bảo trì cá nhân của tôi, tôi không đảm bảo tính khả dụng và tôi không chịu trách nhiệm về bất kỳ hậu quả nào sau khi sử dụng phần mềm này.</p><h2 id="tinh-nang" tabindex="-1">Tính năng <a class="header-anchor" href="#tinh-nang" aria-label="Permalink to &quot;Tính năng&quot;">​</a></h2><ul><li>Hỗ trợ nhiều giao thức V2ray, Trojan, Shadowsocks.</li><li>Hỗ trợ các tính năng mới như Vless và XTLS.</li><li>Hỗ trợ kết nối đến nhiều bảng và nút mà không cần khởi động lại.</li><li>Hỗ trợ giới hạn tốc độ IP trực tuyến</li><li>Hỗ trợ cấp cổng nút, giới hạn tốc độ cấp người dùng.</li><li>Cấu hình đơn giản và rõ ràng.</li><li>Sửa đổi cấu hình để tự động khởi động lại phiên bản.</li><li>Dễ biên dịch và nâng cấp, có thể nhanh chóng cập nhật phiên bản core, hỗ trợ các tính năng mới của Xray-core.</li><li>Hỗ trợ UDP và nhiều chức năng khác</li></ul><h2 id="tinh-nang-1" tabindex="-1">Tính năng <a class="header-anchor" href="#tinh-nang-1" aria-label="Permalink to &quot;Tính năng&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Tính năng</th><th>VMess</th><th>Trojan</th><th>Shadowsocks</th><th>VLESS</th></tr></thead><tbody><tr><td>Lấy thông tin nút</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Lấy thông tin người dùng</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Thống kê lưu lượng người dùng</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Báo cáo thông tin máy chủ</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Đăng ký tự động chứng chỉ TLS</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Tự động gia hạn chứng chỉ TLS</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Số lượng người trực tuyến</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Giới hạn người dùng trực tuyến</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Quy tắc kiểm tra</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Giới hạn tốc độ cổng nút</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Giới hạn tốc độ người dùng</td><td>√</td><td>√</td><td>√</td><td>√</td></tr><tr><td>Tùy chỉnh DNS</td><td>√</td><td>√</td><td>√</td><td>√</td></tr></tbody></table><h2 id="ho-tro-giao-dien-nguoi-dung" tabindex="-1">Hỗ trợ giao diện người dùng <a class="header-anchor" href="#ho-tro-giao-dien-nguoi-dung" aria-label="Permalink to &quot;Hỗ trợ giao diện người dùng&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Bảng điều khiển</th><th>VMess</th><th>Trojan</th><th>Shadowsocks</th><th>VLESS</th></tr></thead><tbody><tr><td>AikoPanel</td><td>√</td><td>√</td><td>√</td><td>√</td></tr></tbody></table><h2 id="ho-tro-lenh" tabindex="-1">Hỗ trợ lệnh <a class="header-anchor" href="#ho-tro-lenh" aria-label="Permalink to &quot;Hỗ trợ lệnh&quot;">​</a></h2><ul><li>[x] <code>aiko-server</code> - Lệnh Aiko-Server</li><li>[x] <code>aiko-server x25519</code> - Quản lý chứng chỉ X25519 (Vless-Reality)</li><li>[x] <code>aiko-server cert</code> - Tạo quản lý chứng chỉ TLS</li></ul><p><strong>Lưu ý: Lệnh không được hỗ trợ trong phiên bản Docker và nếu bạn có Lệnh Mới cho nó, vui lòng commit nó</strong></p><h2 id="cai-đat-phan-mem-phien-ban-phat-hanh" tabindex="-1">Cài đặt phần mềm - phiên bản phát hành <a class="header-anchor" href="#cai-đat-phan-mem-phien-ban-phat-hanh" aria-label="Permalink to &quot;Cài đặt phần mềm - phiên bản phát hành&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wget --no-check-certificate -O Aiko-Server.sh https://raw.githubusercontent.com/AikoPanel/AikoServer/master/install.sh &amp;&amp; bash Aiko-Server.sh</span></span></code></pre></div><h2 id="ho-tro-cong-đong-aiko-server" tabindex="-1">Hỗ trợ Cộng đồng Aiko-Server <a class="header-anchor" href="#ho-tro-cong-đong-aiko-server" aria-label="Permalink to &quot;Hỗ trợ Cộng đồng Aiko-Server&quot;">​</a></h2><p><a href="https://t.me/AikoPanel" target="_blank" rel="noreferrer">Telegram</a></p><p><strong>Lưu ý: Vì tôi lười viết tài liệu, nếu có ai đó tình nguyện viết tài liệu cho aiko-server, vui lòng liên hệ với tôi (sử dụng tiếng Anh).</strong></p><h2 id="nguoi-ung-ho-theo-thoi-gian" tabindex="-1">Người ủng hộ theo thời gian <a class="header-anchor" href="#nguoi-ung-ho-theo-thoi-gian" aria-label="Permalink to &quot;Người ủng hộ theo thời gian&quot;">​</a></h2><p><a href="https://starchart.cc/AikoPanel/AikoServer" target="_blank" rel="noreferrer"><img src="https://starchart.cc/AikoPanel/AikoServer.svg" alt="Stargazers over time"></a></p>',24),r=[e];function d(o,c,l,g,s,u){return h(),n("div",null,r)}const m=t(i,[["render",d]]);export{k as __pageData,m as default};
