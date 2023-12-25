import{_ as i,o as l,c as n,R as a}from"./chunks/framework.tzssv0c6.js";const m=JSON.parse('{"title":"AikoPanel","description":"","frontmatter":{},"headers":[],"relativePath":"vi/aikopanel/home.md","filePath":"vi/aikopanel/home.md"}'),t={name:"vi/aikopanel/home.md"},h=a('<h1 id="aikopanel" tabindex="-1">AikoPanel <a class="header-anchor" href="#aikopanel" aria-label="Permalink to &quot;AikoPanel&quot;">​</a></h1><ul><li>Bảng điều khiển Aiko là bảng điều khiển riêng tư dành cho nhân viên của Aiko.</li><li>Bảng điều khiển Aiko được tạo bởi <a href="https://aikocute.tech" target="_blank" rel="noreferrer">Aiko</a></li><li>Địa chỉ cài đặt Panel <a href="https://github.com/AikoPanel/AikoPanel" target="_blank" rel="noreferrer">AikoPanelv3</a></li><li>Sử dụng backend Aiko-Server <a href="https://github.com/AikoPanel/AikoServer" target="_blank" rel="noreferrer">Aiko-Server</a> với loại AikoPanel</li><li>Và lưu ý AikoPanel không Free</li></ul><h2 id="nhat-ki-thay-đoi-cua-aikopanel-verison-3" tabindex="-1">Nhật kí thay đổi của AikoPanel Verison 3 <a class="header-anchor" href="#nhat-ki-thay-đoi-cua-aikopanel-verison-3" aria-label="Permalink to &quot;Nhật kí thay đổi của AikoPanel Verison 3&quot;">​</a></h2><h3 id="v3-1-0-dev" tabindex="-1">v3.1.0 - DEV <a class="header-anchor" href="#v3-1-0-dev" aria-label="Permalink to &quot;v3.1.0 - DEV&quot;">​</a></h3><ul><li>Tái cấu trúc lại báo node online ( báo cho Admin ID và Group Admin - Custom, Báo tới group user )</li></ul><h3 id="v3-0-9" tabindex="-1">v3.0.9 <a class="header-anchor" href="#v3-0-9" aria-label="Permalink to &quot;v3.0.9&quot;">​</a></h3><ul><li>Sửa lỗi bot (Tự động tắt Node sắp có - Hiện đang thử nghiệm)</li><li>Tái cấu trúc sao lưu cơ sở dữ liệu</li><li>Tái cấu trúc GetAppleID</li><li>Thêm đăng ký IP</li><li>Hiển thị thông tin Coupon</li><li>Sửa lỗi di cư từ v2board v1.7.4</li><li>Thêm thời gian phiên cho quản trị viên</li><li>Cập nhật giao diện người dùng</li><li>Cập nhật chế độ bảo trì</li><li>Sửa lỗi chính tả SNI</li><li>Sửa lỗi đếm Appleid khi rỗng</li></ul><h3 id="v3-0-8" tabindex="-1">v3.0.8 <a class="header-anchor" href="#v3-0-8" aria-label="Permalink to &quot;v3.0.8&quot;">​</a></h3><ul><li>Thêm bộ lọc cho số lượng người dùng được mời</li><li>Cập nhật URL Quantumut X cho IDAPPLE</li><li>Thêm chức năng tự động xóa người dùng không hoạt động quá 30 ngày (Thiết lập thời gian xóa trong trang quản trị)</li><li>Tối ưu hóa sao lưu cơ sở dữ liệu Logic lệnh</li><li>Thêm bot Thống kê máy chủ online</li><li>Thêm nút Kiểm tra trực tuyến ( Online , Offline và Tắt khi không hoạt động )</li><li>Cập nhật lại User page và Admin Page</li></ul><h3 id="v3-0-7" tabindex="-1">v3.0.7 <a class="header-anchor" href="#v3-0-7" aria-label="Permalink to &quot;v3.0.7&quot;">​</a></h3><ul><li>hotfix bug</li></ul><h3 id="v3-0-6" tabindex="-1">v3.0.6 <a class="header-anchor" href="#v3-0-6" aria-label="Permalink to &quot;v3.0.6&quot;">​</a></h3><ul><li>Bỏ giới hạn Min 1 Khi setup Node Speedlimit</li><li>Thống kê số lượng người được mời trên mỗi tài khoản và tìm kiếm người nào đã được Tk này mời</li><li>thêm mã giảm giá ở Admin page mục order</li><li>Fix lỗi khi dùng Trojan ( WS và GRPC )</li></ul><h3 id="v3-0-5" tabindex="-1">v3.0.5 <a class="header-anchor" href="#v3-0-5" aria-label="Permalink to &quot;v3.0.5&quot;">​</a></h3><ul><li>Cập nhật tự động thay đổi RecordID và IP trên AutoDNS</li><li>Thêm tính năng Đếm Kế hoạch (Hiện tại đã sử dụng / Tổng số kế hoạch đã mua)</li><li>Tái cấu trúc Lấy số lượng trong Kế hoạch Người dùng và Kế hoạch Quản trị (Lỗi chính tả)</li><li>Thông tin khách hàng dành cho quản trị viên (người dùng khách hàng sẽ nhìn thấy nó)</li><li>Thêm option gói 1 ngày</li><li>Hỗ trợ Mysql ^8 và Mariadb ^10.7</li><li>Thêm bộ lọc theo mã đơn hàng</li><li>Thêm Node SpeedLimit</li></ul><h3 id="v3-0-4" tabindex="-1">v3.0.4 <a class="header-anchor" href="#v3-0-4" aria-label="Permalink to &quot;v3.0.4&quot;">​</a></h3><ul><li>Sửa lỗi Trojan With transport ( WS, GRPC )</li><li>Tối ưu lại về Rule xác thực AutoDNS với Cloudflare</li><li>Thêm Flag cho Quantumult X</li><li>Thêm Custom URL cho AppleID</li><li>Fix lỗi Vless không add được flag</li><li>Fix lỗi trùng tên trên các app khi admin đặt trùng tên node</li><li>Sửa thông hiển thị trên APP Shadowrocket</li><li>Fix lại sắp xếp Node</li><li>Thêm danh sách IP ưu tiên khi lấy liên kết đăng kí</li></ul><h3 id="v3-0-3" tabindex="-1">v3.0.3 <a class="header-anchor" href="#v3-0-3" aria-label="Permalink to &quot;v3.0.3&quot;">​</a></h3><ul><li>Cập nhật thêm về giao diện người dùng</li><li>Fix lỗi các app đang hỗ trợ ( nhất là singbox ) - Đã support beta version</li><li>Cập nhật flag Quantumult với (&amp;flag=qxping)</li></ul><h3 id="v3-0-2" tabindex="-1">v3.0.2 <a class="header-anchor" href="#v3-0-2" aria-label="Permalink to &quot;v3.0.2&quot;">​</a></h3><ul><li>Tối ưu lại giao diện</li><li>cập nhật Report thông tin hàng ngày qua telegram</li><li>Support Plan 2 Month</li><li>Thêm mã hoá đơn trên Quản lý đơn hàng</li><li>Update quản lý trạng thái dịch vụ thống kê trực tiếp lên panel</li><li>Cập nhật Rule cho Subscribe</li><li>Thêm custom thời gian kết thúc đơn hàng</li><li>Hiển thị thông tin trong đơn đặt hàng, Hết hạn khi người dùng lấy liên kết dăng kí</li><li>Sắp xếp thứ tự các Server</li><li>Add Thêm số tài khoản khi người dùng yêu cầu rút hoa hồng</li><li>Thêm custom Khoảng thời gian xóa dữ liệu trực tuyến của nút đã hết hạn</li><li>Thêm Report Payments Success</li><li>Thêm Auto backup database</li><li>Thêm Auto DNS</li><li>Thêm Thời gian kết thúc phiên đăng nhập của người dùng</li><li>Support Vless Reality + XTLS</li><li>Thêm Node SpeedLimit ( Mbps )</li><li>Thêm Phương thức đặt lại lưu lượng ( hằng ngày )</li><li>Thêm trình quản lý , giới hạn user khi lấy appleid</li><li>Tối ưu hoá API khi user init node</li></ul><h3 id="aikopanel-v3-v3-0-1" tabindex="-1">AikoPanel v3 - v3.0.1 <a class="header-anchor" href="#aikopanel-v3-v3-0-1" aria-label="Permalink to &quot;AikoPanel v3 - v3.0.1&quot;">​</a></h3><ul><li>Thêm đăng ký đường dẫn tùy chỉnh khác</li></ul><h3 id="v3-0-1-beta-3" tabindex="-1">v3.0.1-beta.3 <a class="header-anchor" href="#v3-0-1-beta-3" aria-label="Permalink to &quot;v3.0.1-beta.3&quot;">​</a></h3><ul><li>sửa lỗi bảng quản trị (Đặt Plan_Id của người dùng là Null rồi đăng ký Error Api)</li></ul><h3 id="v3-0-1-beta" tabindex="-1">v3.0.1-beta <a class="header-anchor" href="#v3-0-1-beta" aria-label="Permalink to &quot;v3.0.1-beta&quot;">​</a></h3><ul><li>Fix lỗi cơ bản ban đầu</li></ul>',27),e=[h];function o(r,u,c,g,d,s){return l(),n("div",null,e)}const v=i(t,[["render",o]]);export{m as __pageData,v as default};
