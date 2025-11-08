import React from 'react';
import styles from './IntellectualLaborSection.module.css';

export default function IntellectualLaborSection() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Lao động trí óc – trí thức trở thành lực lượng sản xuất trực tiếp</h1>
      </header>

      <section className={styles.section}>
        <p className={styles.intro}>
          Từ khi khoa học và công nghệ trở thành "đầu tàu" của phát triển kinh tế, lao động trí óc đã vượt khỏi 
          phạm vi của trí thức lý thuyết để trở thành <strong>người lực sản xuất trực tiếp</strong>.
        </p>

        <p>
          Mác từng dự báo trong <em>Grundrisse (Bản thảo 1857–1858)</em> rằng:
        </p>

        <blockquote className={styles.quote}>
          "Khi trí thức thẩm nhập vào tư liệu sản xuất, bản thân trí thức trở thành một lực lượng sản 
          xuất."
        </blockquote>

        <p>
          Lao động trí óc là hoạt động của <strong>người sáng tạo, người lập trình, người tổ chức và người điều 
          hành</strong>, đóng trí tuệ để lập kế hoạch, thiết kế hệ thống, nghiên cứu và đổi mới.
        </p>

        <p>
          Nếu lao động chân tay tạo ra hàng hóa vật chất, thì lao động trí óc <strong>tạo ra phương thức sản xuất, 
          công nghệ và giá trị tinh thần</strong>.
        </p>

        <div className={styles.highlight}>
          <h3>Trong thực tế Việt Nam, những biểu hiện tiêu biểu gồm:</h3>

          <ul className={styles.list}>
            <li>
              <strong>FPT Software và VinAI</strong> – kỹ sư phần mềm, nhà nghiên cứu AI tạo ra sản phẩm trí tuệ mang 
              giá trị toàn cầu.
            </li>
            <li>
              <strong>VNG Corporation</strong> – xây dựng nền tảng số như Zalo, Zing, đóng góp vào nền kinh tế số quốc 
              gia.
            </li>
            <li>
              <strong>Giáo viên, nhà khoa học, chuyên gia du lịch</strong> – những người tạo ra trí thức mới và ứng dụng 
              vào đời sống.
            </li>
          </ul>
        </div>

        <blockquote className={styles.quote}>
          "Sự phát triển của lực lượng sản xuất dẫn tới sự gia tăng vai trò của trí thức, kế hoạch và tổ 
          chức." — <em>C. Mác, Grundrisse</em>
        </blockquote>
      </section>
    </div>
  );
}
