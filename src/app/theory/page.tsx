'use client';

import React from 'react';
import { ToolOutlined, BulbOutlined } from '@ant-design/icons';
import styles from './theory.module.css';
import animStyles from '../shared-animations.module.css';

export default function TheoryPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Background Image Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <header className={styles.header}>
            <h1 className={`${styles.title} ${animStyles.animateSlideDown} ${animStyles.delay100}`}>
              Hai mặt của lao động sản xuất hàng hóa – nền tảng cho mọi giá trị
            </h1>
            <p className={`${styles.subtitle} ${animStyles.animateSlideDown} ${animStyles.delay300}`}>
              CƠ SỞ LÝ LUẬN MÁC – LÊNIN: TÍNH HAI MẶT CỦA LAO ĐỘNG
            </p>
          </header>
        </div>
      </div>

      <div className={styles.container}>
      <section className={styles.section}>
        <div className={`${styles.intro} ${animStyles.animateSlideUp} ${animStyles.delay200}`}>
          <p>
            Trong học thuyết Mác, mọi lao động sản xuất hàng hóa đều mang <strong>hai mặt thống nhất</strong>:
          </p>
        </div>

        <div className={`${styles.twoColumns} ${animStyles.staggerChildren}`}>
          <div className={`${styles.column} ${animStyles.animateSlideLeft} ${animStyles.delay300}`}>
            <div className={styles.columnIcon}>
              <ToolOutlined />
            </div>
            <h3>Lao động cụ thể</h3>
            <p>
              <strong>Lao động cụ thể</strong> tạo ra <strong>giá trị sử dụng</strong> – đó là những hoạt động mang 
              tính nghề nghiệp cụ thể, ví dụ như chế tạo, trồng trọt, xây dựng.
            </p>
          </div>

          <div className={`${styles.column} ${animStyles.animateSlideRight} ${animStyles.delay400}`}>
            <div className={styles.columnIcon}>
              <BulbOutlined />
            </div>
            <h3>Lao động trừu tượng</h3>
            <p>
              <strong>Lao động trừu tượng</strong> tạo ra <strong>giá trị trao đổi</strong> – là sự hao phí sức lao động 
              nói chung của con người, bao gồm cả cơ bắp, thần kinh và trí óc.
            </p>
          </div>
        </div>

        <div className={`${styles.highlight} ${animStyles.animateSlideUp} ${animStyles.delay500}`}>
          <h3>Hai mặt này cùng tồn tại trong mỗi con người lao động.</h3>
          <p>
            Khi một người công nhân điều chỉnh máy CNC hay một kỹ sư viết mã, họ đều đồng thời vận dụng tay nghề 
            và tư duy – sự hòa quyện giữa cụ thể và trừu tượng.
          </p>
        </div>

        <blockquote className={`${styles.quote} ${animStyles.animateFadeIn} ${animStyles.delay600}`}>
          "Lao động cụ thể tạo ra giá trị sử dụng của hàng hóa, còn lao động trừu tượng tạo ra giá trị của 
          hàng hóa." — <em>C. Mác, Tư bản – Quyển I</em>
        </blockquote>
      </section>
      </div>
    </div>
  );
}
