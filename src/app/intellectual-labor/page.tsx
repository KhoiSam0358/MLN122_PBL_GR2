'use client';

import React from 'react';
import { BrainIcon } from '@/components/icons';
import { LaptopOutlined, RobotOutlined, BarChartOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from './intellectual-labor.module.css';
import animStyles from '../shared-animations.module.css';

export default function IntellectualLaborPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* First Hero Section with Background Image */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <header className={styles.header}>
            <h1 className={`${styles.title} ${animStyles.animateSlideDown} ${animStyles.delay100}`}>
              Khối óc – nguồn lực sản xuất trực tiếp
            </h1>
            <p className={`${styles.subtitle} ${animStyles.animateSlideDown} ${animStyles.delay300}`}>
              LAO ĐỘNG TRÍ ÓC: TRI THỨC TẠO GIÁ TRỊ MỚI
            </p>
          </header>
        </div>
      </div>

      <div className={styles.container}>
      <section className={styles.section}>
        <div className={`${styles.intro} ${animStyles.animateSlideUp} ${animStyles.delay200}`}>
          <p>
            Khi tri thức thâm nhập vào quá trình sản xuất, <strong>bản thân nó trở thành một lực lượng sản xuất 
            trực tiếp</strong>.
          </p>
          <p>
            Lao động trí óc bao gồm hoạt động <strong>sáng tạo, thiết kế, nghiên cứu, lập trình và tổ chức</strong> – 
            những yếu tố làm nên giá trị vô hình của hàng hóa.
          </p>
        </div>

        <div className={`${styles.highlight} ${animStyles.animateScaleIn} ${animStyles.delay400}`}>
          <div className={styles.highlightIcon}>
            <BrainIcon size={72} />
          </div>
          <p>
            Trong nền kinh tế số, <strong>"giá trị"</strong> không chỉ nằm trong vật thể hữu hình, mà còn trong{' '}
            <strong>ý tưởng, dữ liệu, và công nghệ</strong> – sản phẩm của trí tuệ con người.
          </p>
        </div>

        <blockquote className={`${styles.quote} ${animStyles.animateFadeIn} ${animStyles.delay500}`}>
          "Khi tri thức thâm nhập vào tư liệu sản xuất, bản thân tri thức trở thành một lực lượng sản xuất."
          <br />
          <span className={styles.quoteSource}>— Mác từng dự báo trong <em>Grundrisse</em></span>
        </blockquote>

        <div className={`${styles.examples} ${animStyles.animateSlideUp} ${animStyles.delay600}`}>
          <h3>
            <GlobalOutlined style={{ marginRight: '10px', color: '#0D5EA6' }} />
            Ở Việt Nam
          </h3>
          <div className={`${styles.exampleGrid} ${animStyles.staggerChildren}`}>
            <div className={`${styles.exampleCard} ${animStyles.animateSlideLeft} ${animStyles.delay700}`}>
              <div className={styles.cardIcon}>
                <LaptopOutlined />
              </div>
              <h4>FPT Software</h4>
              <p>Kỹ sư phát triển phần mềm</p>
            </div>
            <div className={`${styles.exampleCard} ${animStyles.animateSlideUp} ${animStyles.delay800}`}>
              <div className={styles.cardIcon}>
                <RobotOutlined />
              </div>
              <h4>VinAI</h4>
              <p>Chuyên gia huấn luyện mô hình AI</p>
            </div>
            <div className={`${styles.exampleCard} ${animStyles.animateSlideRight} ${animStyles.delay700}`}>
              <div className={styles.cardIcon}>
                <BarChartOutlined />
              </div>
              <h4>Marketing</h4>
              <p>Hoạch định chiến lược thương hiệu</p>
            </div>
          </div>
          <p className={styles.emphasisText}>
            <strong>Tất cả đều là biểu hiện của lao động trí óc trong thời đại mới</strong>
          </p>
        </div>
      </section>
      </div>

      {/* Second Background Section */}
      <div className={styles.secondHeroSection}>
        <div className={styles.secondHeroOverlay}></div>
      </div>
    </div>
  );
}
