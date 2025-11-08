'use client';

import React from 'react';
import { ToolOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from './manual-labor.module.css';
import animStyles from '../shared-animations.module.css';

export default function ManualLaborPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Background Image Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <header className={styles.header}>
            <h1 className={`${styles.title} ${animStyles.animateSlideDown} ${animStyles.delay100}`}>
              Đôi tay – nền tảng của giá trị sử dụng
            </h1>
            <p className={`${styles.subtitle} ${animStyles.animateSlideDown} ${animStyles.delay300}`}>
              LAO ĐỘNG CHÂN TAY: CỤ THỂ HÓA GIÁ TRỊ
            </p>
          </header>
        </div>
      </div>

      <div className={styles.container}>
      <section className={styles.section}>
        <div className={`${styles.intro} ${animStyles.animateSlideUp} ${animStyles.delay200}`}>
          <p>
            Lao động chân tay là <strong>hoạt động cụ thể nhất của con người</strong>, nơi giá trị vật chất được tạo ra 
            bằng sức lực và kỹ năng.
          </p>
          <p>
            Dù công nghệ phát triển, <strong>giá trị sử dụng của sản phẩm</strong> vẫn phụ thuộc vào tay nghề, kỷ luật, 
            và ý thức lao động của con người.
          </p>
        </div>

        <div className={`${styles.highlight} ${animStyles.animateScaleIn} ${animStyles.delay400}`}>
          <div className={styles.highlightIcon}>
            <ToolOutlined />
          </div>
          <p>
            Những đôi tay đó chính là <strong>biểu hiện sống động của lao động cụ thể</strong> mà Mác đã nói đến.
          </p>
        </div>

        <div className={`${styles.examples} ${animStyles.animateSlideLeft} ${animStyles.delay500}`}>
          <h3>
            <GlobalOutlined style={{ marginRight: '10px', color: '#EAA64D' }} />
            Tại Việt Nam
          </h3>
          <p>
            Hàng triệu lao động đang ngày ngày tạo nên nền kinh tế quốc dân – từ công nhân trong nhà máy <strong>VinFast</strong>, 
            thợ dệt ở <strong>Nam Định</strong>, tới người barista trong quán cà phê <strong>Highlands</strong>.
          </p>
          <p className={styles.emphasisText}>
            Họ là hiện thân của <strong>"bàn tay tạo giá trị sử dụng"</strong>.
          </p>
        </div>

        <blockquote className={`${styles.quote} ${animStyles.animateFadeIn} ${animStyles.delay600}`}>
          "Chính trong quá trình lao động, con người không chỉ tác động lên giới tự nhiên mà còn cải biến chính 
          bản thân mình." — <em>C. Mác, Tư bản – Quyển I</em>
        </blockquote>
      </section>
      </div>
    </div>
  );
}
