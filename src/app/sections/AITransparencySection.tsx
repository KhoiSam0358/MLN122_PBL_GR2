import React from 'react';
import { RobotOutlined } from '@ant-design/icons';
import styles from './AITransparencySection.module.css';

export default function AITransparencySection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>AI & TRANSPARENCY</h1>
        <p className={styles.subtitle}>Trí tuệ nhân tạo và tính minh bạch trong công việc</p>
      </header>

      <section className={styles.section}>
        <div className={styles.comingSoon}>
          <div className={styles.icon}>
            <RobotOutlined />
          </div>
          <h2>Đang phát triển</h2>
          <p>
            Nội dung về AI và tính minh bạch trong lao động sẽ được cập nhật sớm.
          </p>
          <p>
            Chúng tôi đang nghiên cứu về vai trò của trí tuệ nhân tạo trong việc tạo ra 
            sự minh bạch và công bằng trong môi trường làm việc hiện đại.
          </p>
        </div>
      </section>
    </div>
  );
}
