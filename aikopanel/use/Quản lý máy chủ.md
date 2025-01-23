# Quản lý máy chủ 


## Chức năng "Quản lý Máy Chủ Vmess, Trojan, Shadowsocks, Hysteria, Vless" trong AikoPanel cho phép người quản trị cấu hình và quản lý các loại máy chủ VPN, giúp tối ưu hóa kết nối mạng và tăng cường bảo mật cho người dùng. Dưới đây là chi tiết về các chức năng và cách quản lý máy chủ trong AikoPanel:
## Mục đích:
* Quản lý và giám sát các máy chủ VPN sử dụng các giao thức như Vmess, Trojan, Shadowsocks, Hysteria, và Vless.
* Cung cấp công cụ để kiểm soát trạng thái của các máy chủ VPN, bao gồm việc hiển thị hoặc ẩn các máy chủ, kiểm tra tình trạng kết nối và thực hiện các thao tác cần thiết.
## Các Tính Năng Chính:
1. Chạy Node Server VPN:

   * Quản lý các máy chủ VPN thông qua việc cấu hình và duy trì các node server.
   * Cung cấp các tùy chọn để khởi động, tạm dừng hoặc dừng các máy chủ VPN theo yêu cầu.
   2. ID Server:

      * Mỗi máy chủ VPN sẽ có một ID Server duy nhất, giúp dễ dàng nhận diện và quản lý.
      * Cho phép người quản trị dễ dàng tìm kiếm và chọn lựa máy chủ cần thao tác trong danh sách.
      3. Hiện/Ẩn Máy Chủ:

         * Cung cấp tùy chọn để hiện hoặc ẩn các máy chủ trong giao diện quản lý.
         * Giúp người quản trị có thể tạm thời ẩn các máy chủ không cần thiết hoặc không hoạt động mà không cần xóa chúng.
         4. Kiểm Tra Máy Chủ:

            * Kiểm tra tình trạng hoạt động của các máy chủ VPN (online/offline).
            * Kiểm tra thông tin chi tiết như tốc độ kết nối, tình trạng sử dụng tài nguyên, và độ ổn định của máy chủ.
            *  Chưa Chạy
            *  Không có người sử dụng hoặc báo cáo lỗi từ máy chủ.
            *  Hoạt động bình thường.
            5. Địa Chỉ Máy Chủ:

               * Hiển thị địa chỉ IP hoặc tên miền của mỗi máy chủ VPN, giúp người quản trị dễ dàng cấu hình hoặc kiểm tra kết nối.
               6. Tỷ Lệ Máy Chủ:

                  * Quản lý tỷ lệ sử dụng hoặc tải trọng của các máy chủ, giúp phân phối lưu lượng một cách hợp lý giữa các máy chủ VPN.
                  * Cung cấp các công cụ để theo dõi tỷ lệ sử dụng CPU, RAM và băng thông của các máy chủ
                  * Số lượng người sử dụng sẽ bị trừ đi theo tỷ lệ nhân đôi lưu lượng sử dụng..
                  7. Nhóm Máy Chủ:

                     * Cung cấp chức năng để nhóm các máy chủ lại với nhau, giúp người quản trị dễ dàng tổ chức và phân loại các máy chủ theo mục đích hoặc khu vực.
                     * Các nhóm máy chủ có thể được phân loại theo các tiêu chí như loại giao thức (Vmess, Trojan, Shadowsocks, v.v.) hoặc vị trí địa lý của máy chủ.
                     8. Số lượng người:
- Phụ thuộc vào tần suất báo cáo của máy chủ
## Quản lý Các Giao Thức VPN:
                        1. Vmess:

                           * Vmess là giao thức được sử dụng trong V2Ray, hỗ trợ bảo mật cao và có khả năng điều khiển thông tin truyền tải tốt.
                           * Cung cấp các tùy chọn để tạo và quản lý các máy chủ Vmess cho phép truyền tải dữ liệu qua các mạng bị chặn.
                           2. Trojan:

                              * Trojan là giao thức VPN rất mạnh mẽ và bảo mật, đặc biệt khi kết hợp với HTTPS giúp mã hóa dữ liệu tốt hơn.
                              * AikoPanel hỗ trợ việc quản lý các máy chủ Trojan, bao gồm việc cấu hình chứng chỉ SSL và kiểm tra tình trạng máy chủ.
                              3. Shadowsocks:

                                 * Shadowsocks là một giao thức proxy nhẹ, dễ triển khai và sử dụng, đặc biệt phổ biến trong các mạng có hạn chế truy cập.
                                 * AikoPanel cung cấp công cụ để quản lý máy chủ Shadowsocks, bao gồm thay đổi cài đặt mã hóa và thông tin máy chủ.
                                 4. Hysteria:

                                    * Hysteria là giao thức VPN mới, được tối ưu hóa cho các kết nối có độ trễ thấp, hỗ trợ tốt trong việc vượt qua các tường lửa.
                                    * AikoPanel cung cấp các tùy chọn để cài đặt và kiểm tra tình trạng của các máy chủ Hysteria.
                                    5. Vless:

                                       * Vless là một giao thức mới trong V2Ray được thiết kế đơn giản và hiệu quả, tập trung vào tốc độ và tính bảo mật.
                                       * Cung cấp tùy chọn để quản lý máy chủ Vless, cấu hình các tham số bảo mật và hiệu suất của máy chủ.
## Cấu Hình và Quản Lý:
                                       1. Thêm Máy Chủ VPN:

                                          * Người quản trị có thể thêm các máy chủ mới vào hệ thống bằng cách nhập địa chỉ IP hoặc tên miền của máy chủ, cùng với các cấu hình giao thức tương ứng (Vmess, Trojan, Shadowsocks, Hysteria, Vless).
                                          2. Cập Nhật Máy Chủ:

                                             * Cho phép người quản trị chỉnh sửa thông tin máy chủ như địa chỉ, tỷ lệ tải, và nhóm máy chủ.
                                             3. Quản Lý Nhóm Máy Chủ:

                                                * Có thể nhóm các máy chủ theo loại giao thức hoặc vị trí địa lý để dễ dàng kiểm soát và theo dõi hiệu suất.
                                                4. Kiểm Tra Trạng Thái:

                                                   * Kiểm tra tình trạng hoạt động của mỗi máy chủ: online/offline, tải trọng hiện tại và thông số kỹ thuật khác như CPU, RAM và băng thông.
## Lợi Ích:
                                                   * Quản lý linh hoạt các máy chủ VPN với các giao thức khác nhau giúp tối ưu hóa hiệu suất và bảo mật.
                                                   * Theo dõi và kiểm tra trạng thái máy chủ giúp duy trì hoạt động ổn định cho hệ thống VPN.
                                                   * Phân phối tải hợp lý giữa các máy chủ và nhóm máy chủ giúp tối ưu hóa tài nguyên và giảm tình trạng quá tải.
                                                   * Quản lý dễ dàng các máy chủ và nhóm máy chủ, giúp cải thiện hiệu quả quản lý hạ tầng VPN.
Chức năng Quản lý Máy Chủ VPN trong AikoPanel giúp người quản trị dễ dàng giám sát, cấu hình và tối ưu hóa các máy chủ VPN, đồng thời tăng cường hiệu suất và bảo mật cho hệ thống.