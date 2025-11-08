'use client';

import React from 'react';
import { ThunderboltOutlined, AimOutlined, TrophyOutlined, PlayCircleOutlined } from '@ant-design/icons';
import styles from './game.module.css';
import animStyles from '../shared-animations.module.css';

export default function GamePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={`${styles.title} ${animStyles.animateSlideDown} ${animStyles.delay100}`}>
          CAREER FLOW GAME
        </h1>
        <p className={`${styles.subtitle} ${animStyles.animateSlideDown} ${animStyles.delay300}`}>
          Trải nghiệm hành trình lao động tương tác
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.comingSoon}>
          <div className={`${styles.icon} ${animStyles.animateScaleIn} ${animStyles.delay200}`}>
            <PlayCircleOutlined />
          </div>
          <h2 className={`${animStyles.animateSlideUp} ${animStyles.delay300}`}>Game đang được phát triển</h2>
          <p className={`${animStyles.animateSlideUp} ${animStyles.delay400}`}>
            Career Flow Game - Trò chơi tương tác giúp bạn trải nghiệm hành trình từ lao động 
            chân tay đến lao động trí óc trong bối cảnh kỷ nguyên số.
          </p>
          <p className={`${animStyles.animateSlideUp} ${animStyles.delay500}`}>
            <strong>5 vòng - 1 phút</strong> để khám phá chuỗi giá trị lao động!
          </p>
          <div className={`${styles.features} ${animStyles.staggerChildren}`}>
            <div className={`${styles.feature} ${animStyles.animateSlideLeft} ${animStyles.delay600}`}>
              <span className={styles.featureIcon}>
                <ThunderboltOutlined />
              </span>
              <p>Tương tác nhanh</p>
            </div>
            <div className={`${styles.feature} ${animStyles.animateSlideUp} ${animStyles.delay700}`}>
              <span className={styles.featureIcon}>
                <AimOutlined />
              </span>
              <p>Học qua trải nghiệm</p>
            </div>
            <div className={`${styles.feature} ${animStyles.animateSlideRight} ${animStyles.delay800}`}>
              <span className={styles.featureIcon}>
                <TrophyOutlined />
              </span>
              <p>Tạo giá trị</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
