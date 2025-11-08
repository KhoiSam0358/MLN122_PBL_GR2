'use client';

import styles from "./page.module.css";
import animStyles from "./shared-animations.module.css";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      {/* Home Section */}
      <section id="home" className={styles.section}>
        <div className={styles.page}>
          {/* Video Hero Banner */}
          <div className={styles.videoContainer}>
            <video
              className={styles.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="https://xauawomztudlaqjibiof.supabase.co/storage/v1/object/public/videos/herobanner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.videoOverlay}></div>
          </div>

          <main className={styles.main}>
            <header className={styles.header}>
              <h1 className={`${styles.title} ${animStyles.animateSlideDown} ${animStyles.delay100}`}>
                Hands & Minds – The Future of Labor
              </h1>
              <p className={`${styles.subtitle} ${animStyles.animateSlideDown} ${animStyles.delay300}`}>
                Mối quan hệ giữa lao động trí óc và lao động chân tay trong kỷ nguyên trí thức
              </p>
            </header>

            <div className={styles.heroSection}>
              <blockquote className={`${styles.quote} ${animStyles.animateFadeIn} ${animStyles.delay200}`}>
                "Hands create. Minds innovate. Together, they build the future."
              </blockquote>

              <div className={styles.content}>
                <p className={`${animStyles.animateSlideUp} ${animStyles.delay400}`}>
                  Thế giới ngày nay đang chứng kiến một cuộc chuyển hóa sâu sắc trong bản chất của lao động.
                  Nếu như trước đây, <strong>lao động chân tay</strong> gắn vai trò chủ đạo trong sản xuất vật chất, 
                  thì trong kỷ nguyên số hóa, <strong>lao động trí óc</strong> lại đang trở thành yếu tố quyết định 
                  năng suất, hiệu quả và giá trị tăng dư.
                </p>

                <p className={`${animStyles.animateSlideUp} ${animStyles.delay500}`}>
                  Dưới góc nhìn của <strong>Kinh tế chính trị Mác – Lênin</strong>, đây không phải là sự thay thế, 
                  mà là <strong>sự thống nhất biện chứng</strong> giữa hai loại hình lao động.
                </p>

                <p className={`${animStyles.animateSlideUp} ${animStyles.delay600}`}>
                  Phát minh công nghệ, trí tuệ nhân tạo và tự động hóa không làm mất đi giá trị của lao động 
                  chân tay, mà ngược lại — <strong>nâng tầm vai trò của con người</strong> trong việc sáng tạo, 
                  điều khiển và phát triển xã hội.
                </p>

                <blockquote className={`${styles.quote} ${animStyles.animateFadeIn} ${animStyles.delay700}`}>
                  "Chính trong quá trình lao động, con người không chỉ tái tạo thế giới mà còn tái tạo chính bản 
                  thân mình." - (C. Mác, Tư bản – Quyển I)
                </blockquote>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
