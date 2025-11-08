'use client';

import React from 'react';
import { RobotOutlined } from '@ant-design/icons';
import styles from './ai-transparency.module.css';
import animStyles from '../shared-animations.module.css';

export default function AITransparencyPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={`${styles.title} ${animStyles.animateSlideDown} ${animStyles.delay100}`}>
          AI & TRANSPARENCY
        </h1>
        <p className={`${styles.subtitle} ${animStyles.animateSlideDown} ${animStyles.delay300}`}>
          Trí tuệ nhân tạo và tính minh bạch trong công việc
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.comingSoon}>
          <div className={`${styles.icon} ${animStyles.animateScaleIn} ${animStyles.delay200}`}>
            <RobotOutlined />
          </div>
          <h2 className={`${animStyles.animateSlideUp} ${animStyles.delay300}`}>Đang phát triển</h2>
          <p className={`${animStyles.animateSlideUp} ${animStyles.delay400}`}>
            Nội dung về AI và tính minh bạch trong lao động sẽ được cập nhật sớm.
          </p>
          <p className={`${animStyles.animateSlideUp} ${animStyles.delay500}`}>
            Chúng tôi đang nghiên cứu về vai trò của trí tuệ nhân tạo trong việc tạo ra 
            sự minh bạch và công bằng trong môi trường làm việc hiện đại.
          </p>
        </div>
      </section>
    </div>
  );
}
