// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Chọn tất cả các tiêu đề có nút toggle
    const headers = document.querySelectorAll('.item-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle class 'active' trên header
            header.classList.toggle('active');

            // Chọn phần nội dung tương ứng (ngay sau header)
            const content = header.nextElementSibling;

            // Điều chỉnh style.maxHeight để tạo hiệu ứng expand/collapse
            if (header.classList.contains('active')) {
                // Mở rộng nội dung: Đặt max-height bằng chiều cao thực của nội dung
                // Cộng thêm một chút để đảm bảo hiển thị hết và có padding
                 content.style.maxHeight = content.scrollHeight + 30 + "px"; // scrollHeight là chiều cao nội dung
            } else {
                // Thu gọn nội dung: Đặt max-height về 0
                content.style.maxHeight = "0";
            }

            // Cập nhật ký hiệu trên nút toggle (+/- hoặc +/rotated +)
            const toggleBtn = header.querySelector('.toggle-btn');
             if (header.classList.contains('active')) {
                 // Ký hiệu có thể được điều khiển bằng CSS rotate như trong style.css
                 // Hoặc bạn có thể đổi text content: toggleBtn.textContent = '-';
             } else {
                 // toggleBtn.textContent = '+';
             }
        });
    });

    // Prism.js sẽ tự động highlight các block code khi trang load.
    // Không cần gọi hàm đặc biệt ở đây trừ khi bạn thêm code động.
});