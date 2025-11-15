'use client';

import React from 'react';
import styles from './message.module.css';
import animStyles from '../shared-animations.module.css';

export default function MessagePage() {
  return (
    <div className={styles.container} suppressHydrationWarning>
      <header className={styles.header}>
        <h1 className={`${styles.title} ${animStyles.animateSlideDown} ${animStyles.delay100}`}>
          Hands & Minds – Sức mạnh của con người trong nền kinh tế tri thức
        </h1>
        <p className={`${styles.subtitle} ${animStyles.animateSlideDown} ${animStyles.delay300}`}>
          THÔNG ĐIỆP KẾT THÚC
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.mainMessage}>
          <p className={`${styles.intro} ${animStyles.animateSlideUp} ${animStyles.delay200}`}>
            Từ lý luận của Mác – Lênin đến thực tiễn Việt Nam, ta nhận thấy:
          </p>

          <div className={`${styles.highlight} ${animStyles.animateSlideUp} ${animStyles.delay400}`}>
            <p>
              <strong>Lao động cụ thể (tay)</strong> và <strong>lao động trừu tượng (óc)</strong> là hai mặt không thể tách rời.
            </p>
            <p>
              Các thành phần kinh tế chính là môi trường để hai hình thức lao động ấy cùng phát triển, bổ sung và 
              nâng cao giá trị xã hội.
            </p>
          </div>

          <blockquote className={`${styles.finalQuote} ${animStyles.animateFadeIn} ${animStyles.delay500}`}>
            "Khi con người kết hợp tri thức và kỹ năng, chúng ta không chỉ tạo ra sản phẩm – mà còn tạo ra chính 
            tương lai của mình."
          </blockquote>
        </div>

        <div className={`${styles.references} ${animStyles.animateSlideUp} ${animStyles.delay600}`}>
          <h2>Tài liệu tham khảo</h2>
          <ul>
            <li>C. Mác, <em>Tư bản</em> (Quyển I–III)</li>
            <li>C. Mác, <em>Phê phán cương lĩnh Gotha</em>, 1875</li>
            <li>C. Mác, <em>Grundrisse</em>, 1857–1858</li>
            <li>V.I. Lênin, <em>Toàn tập</em>, Tập 39, NXB Sự thật</li>
            <li>Báo cáo thường niên FPT 2024</li>
            <li>Báo cáo phát triển bền vững Vingroup 2023</li>
            <li>Hiệp hội Dệt may Việt Nam (VITAS), 2023</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
