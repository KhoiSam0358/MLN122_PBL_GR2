import React from 'react';
import { MessageOutlined, MailOutlined, GlobalOutlined, PhoneOutlined } from '@ant-design/icons';
import styles from './MessageSection.module.css';

export default function MessageSection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>MESSAGE</h1>
        <p className={styles.subtitle}>Thông điệp từ dự án Hands & Minds</p>
      </header>

      <section className={styles.section}>
        <div className={styles.messageBox}>
          <div className={styles.icon}>
            <MessageOutlined />
          </div>
          <h2>Liên hệ & Góp ý</h2>
          <p>
            Chúng tôi rất mong nhận được phản hồi và ý kiến đóng góp từ bạn về dự án 
            <strong> Hands & Minds – The Future of Labor</strong>.
          </p>
          <p>
            Dự án này là nỗ lực nghiên cứu và chia sẻ về mối quan hệ giữa lao động chân tay 
            và lao động trí óc trong bối cảnh kỷ nguyên số hóa và trí tuệ nhân tạo.
          </p>
          
          <div className={styles.contactInfo}>
            <h3>Thông tin liên hệ:</h3>
            <p>
              <MailOutlined style={{ marginRight: '8px', color: '#EAA64D' }} />
              Email: contact@handsandminds.edu.vn
            </p>
            <p>
              <GlobalOutlined style={{ marginRight: '8px', color: '#0D5EA6' }} />
              Website: www.handsandminds.edu.vn
            </p>
            <p>
              <PhoneOutlined style={{ marginRight: '8px', color: '#AA5486' }} />
              Hotline: (024) 1234 5678
            </p>
          </div>

          <div className={styles.socialMedia}>
            <h3>Theo dõi chúng tôi:</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>Facebook</a>
              <a href="#" className={styles.socialIcon}>LinkedIn</a>
              <a href="#" className={styles.socialIcon}>Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
