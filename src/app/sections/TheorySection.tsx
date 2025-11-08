import React from 'react';
import styles from './TheorySection.module.css';

export default function TheorySection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Cơ sở lý luận</h1>
        <p className={styles.subtitle}>Lao động và giá trị trong học thuyết Mác</p>
      </header>

      <section className={styles.section}>
        <p>
          Theo Mác, lao động là <strong>hoạt động đặc trưng của con người</strong>, là điều kiện cơ bản của sự tồn tại và là{' '}
          <strong>nguồn gốc của mọi giá trị</strong>.
        </p>

        <p>Mác chia ra làng hai loại giá trị:</p>

        <ul className={styles.list}>
          <li>
            <strong>Giá trị sử dụng</strong>, do <em>lao động cụ thể</em> tạo ra – chính là công dụng của sản phẩm.
          </li>
          <li>
            <strong>Giá trị trao đổi</strong>, do <em>lao động trừu tượng</em> tạo ra – phản ánh sức lao động xã hội kết tinh trong 
            sản phẩm.
          </li>
        </ul>

        <blockquote className={styles.quote}>
          "Lao động là cha, còn đất là mẹ của mọi của cải." — <em>W. Petty, được Mác trích trong Tư bản</em>
        </blockquote>

        <p>
          Từ đó, ta hiểu rằng <strong>dù là lao động chân tay hay trí óc</strong>, đều góp phần tạo ra giá trị xã hội. Chúng 
          không tách biệt tuyệt đối, mà <strong>tồn tại trong mối quan hệ biện chứng</strong>, hỗ trợ và chuyển hóa lẫn nhau.
        </p>

        <blockquote className={styles.quote}>
          "Trí tuệ và đôi tay con người, khi được tổ chức hợp lý, là sức mạnh vô địch của chủ nghĩa xã 
          hội." — <em>V.I. Lênin, Toàn tập – Tập 39</em>
        </blockquote>
      </section>
    </div>
  );
}
