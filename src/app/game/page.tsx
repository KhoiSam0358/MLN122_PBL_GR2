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
        <div className={`${styles.gameEmbed} ${animStyles.animateFadeIn} ${animStyles.delay400}`}>
          <div className={styles.embedContainer}>
            <iframe
              src="https://career-flow-one.vercel.app/"
              title="Career Flow Game"
              className={styles.gameFrame}
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
