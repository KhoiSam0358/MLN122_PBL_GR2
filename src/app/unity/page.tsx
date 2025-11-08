'use client';

import React from 'react';
import { BrainIcon, HammerIcon } from '@/components/icons';
import { SettingOutlined, AppstoreOutlined, EditOutlined, RobotOutlined, SwapRightOutlined, SwapLeftOutlined } from '@ant-design/icons';
import styles from './unity.module.css';
import animStyles from '../shared-animations.module.css';

export default function UnityPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Background Image Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <header className={styles.header}>
            <h1 className={`${styles.title} ${animStyles.animateSlideDown} ${animStyles.delay100}`}>
              Sự kết hợp biện chứng giữa tay & óc
            </h1>
            <p className={`${styles.subtitle} ${animStyles.animateSlideDown} ${animStyles.delay300}`}>
              SỰ KẾT HỢP BIỆN CHỨNG GIỮA TAY & ÓC
            </p>
          </header>
        </div>
      </div>

      <div className={styles.container}>
      <section className={styles.section}>
        <div className={`${styles.intro} ${animStyles.animateSlideUp} ${animStyles.delay200}`}>
          <p>
            Mác và Lênin đều nhấn mạnh rằng giữa <strong>lao động vật chất và lao động tinh thần</strong> không tồn tại 
            sự đối lập tuyệt đối, mà là <strong>một quan hệ thống nhất và chuyển hóa lẫn nhau</strong>.
          </p>
        </div>

        <div className={`${styles.unityGrid} ${animStyles.staggerChildren}`}>
          <div className={`${styles.unityCard} ${animStyles.animateSlideLeft} ${animStyles.delay300}`}>
            <div className={styles.cardIcon}>
              <BrainIcon size={64} />
            </div>
            <h3>Trí óc</h3>
            <p>Định hướng cho đôi tay</p>
          </div>
          <div className={`${styles.unityArrow} ${animStyles.animateScaleIn} ${animStyles.delay400}`}>
            <SwapLeftOutlined />
            <SwapRightOutlined />
          </div>
          <div className={`${styles.unityCard} ${animStyles.animateSlideRight} ${animStyles.delay500}`}>
            <div className={styles.cardIcon}>
              <HammerIcon size={64} />
            </div>
            <h3>Đôi tay</h3>
            <p>Biến ý tưởng thành sản phẩm</p>
          </div>
        </div>

        <div className={`${styles.highlight} ${animStyles.animateSlideUp} ${animStyles.delay600}`}>
          <p>
            Trong dây chuyền sản xuất hiện đại, kỹ sư và công nhân không thể tách rời: kỹ sư thiết kế hệ thống, 
            nhưng chính công nhân mới là người vận hành, điều chỉnh và sáng tạo trong quá trình thực tế.
          </p>
          <p className={styles.emphasisText}>
            <strong>Trí óc định hướng cho đôi tay, còn đôi tay biến ý tưởng thành sản phẩm cụ thể.</strong>
          </p>
        </div>

        <blockquote className={`${styles.quote} ${animStyles.animateFadeIn} ${animStyles.delay700}`}>
          "Không có sự hợp tác giữa lao động trí óc và lao động chân tay thì không thể có sản xuất xã hội 
          phát triển." — <em>C. Mác, Phê phán cương lĩnh Gotha</em>
        </blockquote>

        <div className={`${styles.modernContext} ${animStyles.animateSlideUp} ${animStyles.delay800}`}>
          <h3>
            <RobotOutlined style={{ marginRight: '10px', color: '#AA5486' }} />
            Ngày nay
          </h3>
          <p>
            Với sự xuất hiện của AI, ranh giới giữa <strong>"người làm"</strong> và <strong>"người nghĩ"</strong> càng 
            trở nên linh hoạt.
          </p>
          <div className={`${styles.exampleList} ${animStyles.staggerChildren}`}>
            <div className={`${styles.exampleItem} ${animStyles.animateSlideLeft} ${animStyles.delay100}`}>
              <span className={styles.bulletIcon}>
                <SettingOutlined />
              </span>
              <p>Kỹ sư vận hành robot</p>
            </div>
            <div className={`${styles.exampleItem} ${animStyles.animateSlideUp} ${animStyles.delay200}`}>
              <span className={styles.bulletIcon}>
                <AppstoreOutlined />
              </span>
              <p>Nông dân sử dụng cảm biến dữ liệu</p>
            </div>
            <div className={`${styles.exampleItem} ${animStyles.animateSlideRight} ${animStyles.delay300}`}>
              <span className={styles.bulletIcon}>
                <EditOutlined />
              </span>
              <p>Nhân viên sáng tạo nội dung</p>
            </div>
          </div>
          <p className={styles.conclusionText}>
            <strong>Đều là người lao động tích hợp</strong> giữa kỹ năng tay nghề và tư duy sáng tạo.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}
