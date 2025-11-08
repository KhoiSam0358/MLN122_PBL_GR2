import React from 'react';
import styles from './GameSection.module.css';

export default function GameSection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>CAREER FLOW GAME</h1>
        <p className={styles.subtitle}>Trải nghiệm hành trình lao động tương tác</p>
      </header>

      <section className={styles.section}>
        <div className={styles.comingSoon}>
          <div className={styles.icon}>🎮</div>
          <h2>Game đang được phát triển</h2>
          <p>
            Career Flow Game - Trò chơi tương tác giúp bạn trải nghiệm hành trình từ lao động 
            chân tay đến lao động trí óc trong bối cảnh kỷ nguyên số.
          </p>
          <p>
            <strong>5 vòng - 1 phút</strong> để khám phá chuỗi giá trị lao động!
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>⚡</span>
              <p>Tương tác nhanh</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🎯</span>
              <p>Học qua trải nghiệm</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🏆</span>
              <p>Tạo giá trị</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
