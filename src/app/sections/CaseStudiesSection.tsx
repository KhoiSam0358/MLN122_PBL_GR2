import React from 'react';
import styles from './CaseStudiesSection.module.css';

export default function CaseStudiesSection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Lao động trong kỷ nguyên AI – con người vẫn là trung tâm</h1>
      </header>

      <section className={styles.section}>
        <p className={styles.intro}>
          Sự xuất hiện của trí tuệ nhân tạo không làm mất đi vai trò của con người trong lao động – mà chỉ{' '}
          <strong>chuyển hóa hình thức của lao động</strong> đó.
        </p>

        <p>
          AI có thể thay thế các vụ lặp lại, nhưng <strong>không thể sáng tạo, đồng cảm và chịu trách nhiệm đạo 
          đức</strong>.
        </p>

        <div className={styles.highlight}>
          <p>
            Trong tư tưởng Mác, máy móc không phải là kẻ thay thế con người, mà là "phần kéo dài của năng lực 
            con người".
          </p>
          <p>
            Chính con người mới là chủ thể điều khiển và mang lại ý nghĩa cho quá trình sản xuất.
          </p>
        </div>

        <blockquote className={styles.quote}>
          "Máy móc làm thay đổi hình thức lao động, nhưng không thể xóa bỏ bản chất xã hội của nó." 
          — <em>C. Mác, Tư bản – Quyển I</em>
        </blockquote>
      </section>

      <section className={styles.section}>
        <h2>Thông điệp của dự án</h2>

        <p>
          Thế giới của lao động không còn chia đôi giữa tay và óc, giữa công nhân và kỹ sư.
        </p>

        <div className={styles.highlight}>
          <p>
            Trong kỷ nguyên trí thức, <strong>bàn tay là trí tuệ được vật chất hóa</strong>, còn <strong>trí óc là đôi tay được nâng tầm 
            bởi công nghệ</strong>.
          </p>
        </div>

        <p className={styles.projectMessage}>
          Dự án <em>Hands & Minds</em> không chỉ là một nghiên cứu học thuật, mà còn là lời khẳng định rằng:
        </p>

        <blockquote className={styles.finalQuote}>
          "Trong mỗi hành động của bạn là tự duy của trí óc, trong mỗi ý tưởng của trí óc là đầu vết 
          của bàn tay con người."
        </blockquote>
      </section>

      <section className={styles.references}>
        <h2>Tài liệu tham khảo</h2>
        <ul>
          <li>C. Mác, <em>Tư bản</em> (Quyển I–III)</li>
          <li>C. Mác, <em>Phê phán cương lĩnh Gotha</em>, 1875</li>
          <li>C. Mác, <em>Grundrisse</em>, 1857–1858</li>
          <li>V.I. Lênin, <em>Toàn tập</em>, Tập 39, NXB Sự thật</li>
          <li>Báo cáo thường niên FPT 2024</li>
          <li>Báo cáo phát triển bền vững Vingroup 2023</li>
          <li>Hiệp hội Dệt may Việt Nam (VITAS), 2023</li>
        </ul>
      </section>
    </div>
  );
}
