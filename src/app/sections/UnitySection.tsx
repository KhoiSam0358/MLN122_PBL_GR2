import React from 'react';
import styles from './UnitySection.module.css';

export default function UnitySection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Sự thống nhất biện chứng giữa tay và óc</h1>
      </header>

      <section className={styles.section}>
        <p className={styles.intro}>
          Mác và Lênin đều nhấn mạnh rằng giữa lao động vật chất và lao động tinh thần <strong>không tồn tại sự đối 
          lập tuyệt đối</strong>, mà là <strong>một quan hệ thống nhất và chuyển hóa lẫn nhau</strong>.
        </p>

        <p>
          Trong dây chuyền sản xuất hiện đại, kỹ sư và công nhân không thể tách rời: kỹ sư thiết kế hệ thống, 
          nhưng chính công nhân mới là người vận hành, điều chỉnh và sáng tạo trong quá trình thực tế.
        </p>

        <div className={styles.highlight}>
          <p>
            Trí óc định hướng cho đôi tay, còn đôi tay biến ý tưởng thành sản phẩm cụ thể.
          </p>
        </div>

        <blockquote className={styles.quote}>
          "Không có sự hợp tác giữa lao động trí óc và lao động chân tay thì không thể có sản xuất xã 
          hội phát triển." — <em>C. Mác, Phê phán cương lĩnh Gotha</em>
        </blockquote>

        <p>
          Ngày nay, với sự xuất hiện của AI, ranh giới giữa "người làm" và "người nghĩ" càng trở nên linh hoạt. 
          Một kỹ sư vận hành robot, một nông dân sử dụng cảm biến đất liệu, bất cứ nhân viên sáng tạo nội 
          dung — <strong>đều là người lao động tích hợp</strong> giữa kỹ năng tay nghề và tư duy sáng tạo.
        </p>
      </section>
    </div>
  );
}
