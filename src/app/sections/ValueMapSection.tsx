import React from 'react';
import { BulbOutlined } from '@ant-design/icons';
import styles from './ValueMapSection.module.css';

export default function ValueMapSection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>BẢN ĐỒ GIÁ TRỊ (VALUE CREATION MAP)</h1>
        <p className={styles.subtitle}>Từ ý tưởng đến trải nghiệm – Chuỗi giá trị trong kỷ nguyên trí thức</p>
      </header>

      <section className={styles.section}>
        <div className={styles.intro}>
          <h2>Nội dung:</h2>
          <p>
            Chuỗi tạo giá trị kinh tế là hành trình mọi lao động trí óc và chân tay kết hợp, cùng kiến tạo giá trị.
            Từ ý tưởng ban đầu đến trải nghiệm cuối cùng của khách hàng, mỗi giai đoạn là một khâu hợp tác 
            nhịp nhàng giữa tay và óc.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Giai đoạn</th>
                <th>Lao động chính</th>
                <th>Giá trị tạo ra</th>
                <th>Ví dụ Việt Nam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ý tưởng & Thiết kế</td>
                <td>Trí óc</td>
                <td>Ý nghĩa, kế hoạch, sản phẩm mới</td>
                <td>FPT, VinAI</td>
              </tr>
              <tr>
                <td>Chuẩn bị sản xuất</td>
                <td>Hỗn hợp</td>
                <td>Dây chuyền, tổ chức sản xuất</td>
                <td>VinFast</td>
              </tr>
              <tr>
                <td>Sản xuất & Lắp ráp</td>
                <td>Chân tay</td>
                <td>Sản phẩm vật chất</td>
                <td>Dệt may, điện tử</td>
              </tr>
              <tr>
                <td>AI & Kiểm định</td>
                <td>Trí óc + Công nghệ</td>
                <td>Tự động hóa, dữ liệu</td>
                <td>Nhà máy thông minh</td>
              </tr>
              <tr>
                <td>Marketing & Thương hiệu</td>
                <td>Trí óc</td>
                <td>Hình ảnh, cảm xúc</td>
                <td>Highlands Coffee</td>
              </tr>
              <tr>
                <td>Trải nghiệm khách hàng</td>
                <td>Hỗn hợp</td>
                <td>Dịch vụ & lòng trung thành</td>
                <td>F&B, bán lẻ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.visualization}>
          <h3>
            <BulbOutlined style={{ marginRight: '10px', color: '#EAA64D' }} />
            Hình minh họa mơ ước:
          </h3>
          <ul>
            <li>Timeline icon ở giai đoạn (Idea → Production → AI → Marketing → Experience)</li>
            <li>Gradient căm-tím-xanh pastel</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
