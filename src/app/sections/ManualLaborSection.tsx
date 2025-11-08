import React from 'react';
import styles from './ManualLaborSection.module.css';

export default function ManualLaborSection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Lao động chân tay – nền tảng của sản xuất vật chất</h1>
      </header>

      <section className={styles.section}>
        <p className={styles.intro}>
          Lao động chân tay là hình thức lao động sử dụng <strong>sức lực và kỹ năng thực hành</strong> để tác động trực tiếp 
          vào đối tượng lao động.
        </p>

        <p>
          Từ nền nông nghiệp sơ khai đến đây chuyển công nghiệp hiện đại, sức người vẫn là yếu tố không thể 
          thay thế hoàn toàn.
        </p>

        <div className={styles.highlight}>
          <p>
            Mác khẳng định rằng trong quá trình lao động, con người "vừa tác động lên giới tự nhiên, vừa cải 
            biến chính bản thân mình."
          </p>
          <p>
            Lao động chân tay không chỉ tạo ra <strong>giá trị sử dụng</strong>, mà còn hình thành nền <strong>kinh nghiệm, kỹ năng,{' '}
            tính kỷ luật và ý thức cộng đồng</strong>.
          </p>
        </div>

        <p>Trong bối cảnh Việt Nam, lao động chân tay vẫn là <strong>cột trụ của nền kinh tế</strong>:</p>

        <ul className={styles.list}>
          <li>
            <strong>Tại VinFast</strong>, công nhân trực tiếp vận hành dây chuyền robot, đảm bảo từng chi tiết lắp ráp đạt 
            tiêu chuẩn.
          </li>
          <li>
            <strong>Trong ngành dệt may</strong>, hàng triệu lao động nữ góp phần mang về hơn 15% kim ngạch xuất 
            khẩu quốc gia.
          </li>
          <li>
            <strong>Tại các chuỗi F&B như Highlands Coffee</strong>, người barista hay phục vụ chính là những "bàn 
            tay" tạo nên trải nghiệm dịch vụ – một dạng giá trị tinh tế mà máy móc không thể thay thế bằng được.
          </li>
        </ul>

        <div className={styles.highlight}>
          <p>
            Dù công nghệ có phát triển đến đâu, lao động chân tay vẫn giữ vai trò <strong>vật chất hóa sáng tạo của con 
            người</strong> – là nơi mà ý tưởng trở thành hiện thực.
          </p>
        </div>
      </section>
    </div>
  );
}
