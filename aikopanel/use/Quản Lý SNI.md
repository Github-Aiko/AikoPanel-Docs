# Quản Lý SNI


## Chức năng "Quản lý SNI" trong AikoPanel giúp người quản trị cấu hình và kiểm soát các cấu hình liên quan đến SNI (Server Name Indication), một phần mở rộng của giao thức SSL/TLS, cho phép máy chủ sử dụng nhiều chứng chỉ SSL trên cùng một địa chỉ IP.
## Mục đích:
* Quản lý các cấu hình SNI giúp máy chủ hỗ trợ nhiều tên miền và chứng chỉ SSL/TLS mà không cần phải cấp phát nhiều địa chỉ IP.
* Cung cấp khả năng bảo mật và tối ưu hóa cho các dịch vụ yêu cầu SSL/TLS, đồng thời giảm bớt chi phí hạ tầng.
## Cách thức hoạt động:
1. Cấu hình SNI:

   * Thêm tên miền SNI: Người quản trị có thể thêm các tên miền SNI vào cấu hình, để mỗi tên miền có thể sử dụng một chứng chỉ SSL riêng biệt.
   * Cập nhật chứng chỉ SSL: Các chứng chỉ SSL cho từng tên miền có thể được cập nhật hoặc thay đổi từ giao diện quản lý SNI của AikoPanel.
   2. Quản lý chứng chỉ SSL:

      * Cung cấp các tùy chọn để người quản trị có thể tải lên chứng chỉ SSL cho từng tên miền, đồng thời cập nhật chứng chỉ định kỳ khi hết hạn.
      * Hỗ trợ các chứng chỉ tự ký (self-signed certificates) hoặc chứng chỉ từ các tổ chức chứng nhận uy tín (CA).
      3. Kiểm tra trạng thái SNI:

         * Kiểm tra và theo dõi tình trạng hoạt động của các cấu hình SNI, đảm bảo rằng các chứng chỉ SSL được cài đặt và sử dụng đúng cách.
         * Hiển thị thông báo khi có lỗi hoặc khi chứng chỉ SSL gần hết hạn.
         4. Tự động gia hạn chứng chỉ SSL:

            * Tùy chọn để tự động gia hạn chứng chỉ SSL cho từng tên miền SNI. Điều này giúp đảm bảo các chứng chỉ luôn được cập nhật và duy trì tính bảo mật cho hệ thống.
            5. Cấu hình kết nối và bảo mật:

               * Quản lý các cài đặt bảo mật cho các kết nối SNI, bao gồm việc cấu hình cipher suites, các yêu cầu về phiên bản SSL/TLS, và các tùy chọn mã hóa mạnh mẽ để đảm bảo kết nối an toàn.
               6. Hỗ trợ Proxy ngược (Reverse Proxy):

                  * Hỗ trợ cấu hình SNI trong các môi trường sử dụng proxy ngược, giúp tối ưu hóa việc phân phối yêu cầu và tài nguyên SSL cho các tên miền khác nhau trên cùng một máy chủ.
## Cấu hình:
                  1. Thêm tên miền SNI:

                     * Người quản trị có thể thêm tên miền và liên kết với chứng chỉ SSL thông qua giao diện web của AikoPanel.
                     2. Chọn chứng chỉ SSL:

                        * Tải lên chứng chỉ SSL cho mỗi tên miền hoặc chọn chứng chỉ từ danh sách đã được cấu hình sẵn.
                        3. Cập nhật hoặc thay đổi chứng chỉ:

                           * Các chứng chỉ SSL có thể được thay đổi hoặc cập nhật trực tiếp từ bảng điều khiển của AikoPanel.
                           4. Theo dõi và báo cáo:

                              * Hệ thống cung cấp báo cáo chi tiết về tình trạng của các chứng chỉ SSL và các tên miền SNI.
## Lợi ích:
                              * Tiết kiệm tài nguyên: Giảm chi phí khi sử dụng một địa chỉ IP cho nhiều tên miền SSL/TLS.
                              * Bảo mật: Mỗi tên miền sử dụng chứng chỉ SSL riêng biệt, giúp bảo mật thông tin truyền tải giữa máy chủ và khách hàng.
                              * Dễ dàng quản lý: Giao diện AikoPanel cung cấp cách quản lý SNI đơn giản và dễ dàng, giúp người quản trị nhanh chóng cấu hình và theo dõi các chứng chỉ SSL.
                              * Tự động hóa: Các tính năng như gia hạn tự động giúp giảm bớt công việc quản lý định kỳ, đảm bảo hệ thống luôn an toàn.
## Lưu ý quan trọng:
                              * Hỗ trợ SSL/TLS: Đảm bảo rằng máy chủ của bạn hỗ trợ SNI và có khả năng xử lý các yêu cầu SSL cho nhiều tên miền.
                              * Chứng chỉ SSL: Cần đảm bảo rằng các chứng chỉ SSL được cấp phát hợp lệ và phù hợp với các yêu cầu bảo mật mới nhất.
                              * Cập nhật thường xuyên: Theo dõi tình trạng của các chứng chỉ SSL và thực hiện cập nhật kịp thời khi có vấn đề xảy ra.