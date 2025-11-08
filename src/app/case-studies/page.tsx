'use client';

import React from 'react';
import { BrainIcon } from '@/components/icons';
import { ToolOutlined } from '@ant-design/icons';
import styles from './case-studies.module.css';
import animStyles from '../shared-animations.module.css';

export default function CaseStudiesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={`${styles.title} ${animStyles.animateSlideDown} ${animStyles.delay100}`}>
          Tri thức hóa lao động – hướng đi của Việt Nam
        </h1>
        <p className={`${styles.subtitle} ${animStyles.animateSlideDown} ${animStyles.delay300}`}>
          THỰC TẾ HIỆN ĐẠI & KỶ NGUYÊN TRI THỨC
        </p>
      </header>

      <section className={styles.section}>
        <div className={`${styles.intro} ${animStyles.animateSlideUp} ${animStyles.delay200}`}>
          <p>
            Kỷ nguyên công nghệ 4.0 đang chuyển dịch cấu trúc lao động:
          </p>
        </div>

        <div className={`${styles.twoPoints} ${animStyles.staggerChildren}`}>
          <div className={`${styles.point} ${animStyles.animateSlideLeft} ${animStyles.delay300}`}>
            <h3>
              <ToolOutlined />
              Lao động chân tay
            </h3>
            <p>
              Lao động chân tay ngày càng được <strong>hỗ trợ bởi máy móc và AI</strong>.
            </p>
          </div>

          <div className={`${styles.point} ${animStyles.animateSlideRight} ${animStyles.delay400}`}>
            <h3>
              <span className={styles.brainIconWrapper}>
                <BrainIcon size={24} />
              </span>
              Lao động trí óc
            </h3>
            <p>
              Lao động trí óc <strong>trở thành lực lượng sản xuất trực tiếp</strong>.
            </p>
          </div>
        </div>

        <div className={`${styles.highlight} ${animStyles.animateSlideUp} ${animStyles.delay500}`}>
          <p>
            Tuy nhiên, giá trị xã hội bền vững chỉ có thể đạt được khi <strong>tay và óc cùng tiến hóa</strong> — 
            con người làm chủ công nghệ thay vì phụ thuộc vào nó.
          </p>
        </div>

        <blockquote className={`${styles.quote} ${animStyles.animateFadeIn} ${animStyles.delay600}`}>
          "Máy móc làm thay đổi hình thức lao động, nhưng không thể xóa bỏ bản chất xã hội của nó." 
          <br />— <em>C. Mác, Tư bản – Quyển I</em>
        </blockquote>
      </section>
    </div>
  );
}
