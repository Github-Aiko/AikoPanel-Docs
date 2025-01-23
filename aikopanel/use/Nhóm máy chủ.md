# Nhóm máy chủ 
## Chức năng Quản lý Nhóm Máy Chủ và Nhóm ID trong AikoPanel giúp người quản trị tổ chức và theo dõi các máy chủ VPN theo nhóm, đồng thời quản lý thông tin về số lượng người dùng, số lượng server, và trạng thái hoạt động của từng nhóm máy chủ. Dưới đây là chi tiết về các tính năng và cách quản lý nhóm máy chủ trong AikoPanel:
## Mục đích
* Tổ chức các máy chủ VPN thành các nhóm để dễ dàng quản lý và giám sát hiệu suất của từng nhóm máy chủ.
* Cung cấp thông tin chi tiết về số lượng người dùng, số lượng server, và trạng thái hoạt động của từng nhóm máy chủ.
## Các Tính Năng Chính
1. Nhóm Máy Chủ

   * Nhóm máy chủ cho phép người quản trị chia các máy chủ thành các nhóm nhỏ, giúp tổ chức và dễ dàng quản lý số lượng lớn các máy chủ.
   * Các nhóm máy chủ có thể được phân loại theo các tiêu chí như loại giao thức (Vmess, Trojan, Shadowsocks, Hysteria, Vless), địa lý, hoặc mục đích sử dụng (ví dụ: nhóm máy chủ cho người dùng quốc tế, nhóm máy chủ cho người dùng nội bộ, v.v.).
   2. Nhóm ID

      * Nhóm ID là mã định danh cho mỗi nhóm máy chủ. Mỗi nhóm sẽ có một ID duy nhất, giúp dễ dàng theo dõi và quản lý các nhóm trong AikoPanel.
      * Nhóm ID có thể được tạo ra khi người quản trị thêm hoặc phân loại các nhóm máy chủ.
      3. Tên Nhóm

         * Mỗi nhóm máy chủ sẽ có một tên nhóm cụ thể, giúp nhận diện mục đích hoặc loại máy chủ trong nhóm. Tên nhóm có thể là:
         * Ví dụ: "Máy chủ cho người dùng quốc tế", "Máy chủ nội bộ", "Máy chủ Vmess", "Máy chủ Trojan", v.v.
         * Tên nhóm giúp quản trị viên phân loại dễ dàng và nhanh chóng, từ đó tối ưu hóa việc quản lý.
         4. Số Lượng Người Dùng

            * Hiển thị số lượng người dùng đang sử dụng dịch vụ VPN trong mỗi nhóm máy chủ.
            * Thông tin này cho phép người quản trị biết được nhóm máy chủ nào đang có lượng người dùng cao, từ đó có thể tối ưu hóa tài nguyên và phân phối tải.
            5. Số Lượng Server

               * Số lượng server trong mỗi nhóm máy chủ cho thấy số lượng máy chủ đang hoạt động trong nhóm đó.
               * Cung cấp cái nhìn tổng quan về cấu trúc hệ thống và khả năng mở rộng của dịch vụ VPN.
               6. Hoạt Động

                  * Trạng thái hoạt động của mỗi nhóm máy chủ: Hiển thị liệu nhóm máy chủ có đang hoạt động hay không (online/offline).
                  * Giúp người quản trị theo dõi tình trạng của các nhóm máy chủ, đảm bảo rằng các máy chủ trong nhóm đang hoạt động bình thường và có thể phục vụ người dùng.
## Quản lý Nhóm Máy Chủ
                  1. Tạo Nhóm Máy Chủ

                     * Người quản trị có thể tạo nhóm máy chủ mới bằng cách nhập Tên Nhóm và ID Nhóm. Khi tạo nhóm, người quản trị cũng có thể chọn loại giao thức cho nhóm đó (Vmess, Trojan, Shadowsocks, Hysteria, Vless).
                     2. Cập Nhật Nhóm Máy Chủ

                        * Sau khi tạo nhóm, người quản trị có thể cập nhật các thông tin của nhóm như Tên Nhóm, Số Lượng Server, và Số Lượng Người Dùng.
                        3. Thêm hoặc Xóa Máy Chủ trong Nhóm

                           * Các máy chủ có thể được thêm vào hoặc loại bỏ khỏi nhóm máy chủ tùy theo yêu cầu quản lý và phân phối tải.
                           4. Theo Dõi Trạng Thái Nhóm

                              * Trạng thái hoạt động của nhóm máy chủ được cập nhật liên tục, hiển thị tình trạng online/offline. Nếu nhóm đang offline, thông báo sẽ được hiển thị để người quản trị kiểm tra và khắc phục.
                              5. Phân Phối Tải Lượng Người Dùng

                                 * Dựa trên Số Lượng Người Dùng và Số Lượng Server trong mỗi nhóm, người quản trị có thể phân phối tải trọng hợp lý giữa các máy chủ trong nhóm.
                                 * Các máy chủ có thể được cấu hình lại để đáp ứng số lượng người dùng và tăng cường hiệu suất.
## Cấu Hình Nhóm Máy Chủ
                                 1. Nhập Tên Nhóm và ID
                                 * Khi tạo nhóm mới, người quản trị nhập Tên Nhóm và Nhóm ID. Tên nhóm có thể là tên mô tả nhóm (ví dụ: "Máy chủ tại Mỹ", "Máy chủ cho người dùng Châu Á").
                                 2. Phân Loại Máy Chủ
                                 * Người quản trị có thể phân loại máy chủ trong nhóm theo các giao thức như Vmess, Trojan, Shadowsocks, Hysteria, hoặc Vless để dễ dàng quản lý và theo dõi.
                                 3. Thông Tin Trạng Thái
                                 * Tình trạng hoạt động của nhóm được cập nhật liên tục, hiển thị tình trạng online/offline. Nếu nhóm đang offline, thông báo sẽ được hiển thị để người quản trị kiểm tra và khắc phục.
## Lợi Ích
                                 * Tổ chức và quản lý dễ dàng các nhóm máy chủ giúp người quản trị dễ dàng theo dõi và tối ưu hóa tài nguyên.
                                 * Cải thiện hiệu suất: Quản lý Số Lượng Người Dùng và Số Lượng Server trong mỗi nhóm giúp người quản trị phân phối tải trọng hợp lý, tránh tình trạng quá tải.
                                 * Theo dõi trạng thái nhanh chóng: Người quản trị có thể kiểm tra nhanh chóng tình trạng hoạt động của từng nhóm máy chủ và máy chủ trong nhóm.
                                 * Khả năng mở rộng linh hoạt: Nhóm máy chủ dễ dàng thêm mới và mở rộng theo nhu cầu, đảm bảo hệ thống có thể phục vụ người dùng khi có sự gia tăng về số lượng.
Chức năng Quản lý Nhóm Máy Chủ và Nhóm ID trong AikoPanel giúp người quản trị tổ chức và theo dõi các máy chủ VPN một cách hiệu quả, đồng thời tối ưu hóa hiệu suất và tài nguyên của hệ thống.