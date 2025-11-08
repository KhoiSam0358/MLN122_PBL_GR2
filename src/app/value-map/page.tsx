'use client';

import React, { useState } from 'react';
import animStyles from '../shared-animations.module.css';
import { 
  BankOutlined, 
  TeamOutlined, 
  ShopOutlined, 
  GlobalOutlined,
  ToolOutlined,
  UserOutlined,
  CoffeeOutlined,
  SettingOutlined,
  SolutionOutlined,
  RocketOutlined,
  ApartmentOutlined,
  BuildOutlined,
  ExperimentOutlined,
  BulbOutlined,
  ThunderboltOutlined,
  PictureOutlined
} from '@ant-design/icons';
import styles from './value-map.module.css';

export default function ValueMapPage() {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  return (
    <div className={styles.pageWrapper}>
      {/* Background Image Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <header className={styles.header}>
            <h1 className={`${styles.title} ${animStyles.animateSlideDown} ${animStyles.delay100}`}>
              Các thành phần kinh tế – nơi tay & óc cùng phát triển
            </h1>
            <p className={`${styles.subtitle} ${animStyles.animateSlideDown} ${animStyles.delay300}`}>
              LIÊN HỆ THỰC TIỄN: CÁC THÀNH PHẦN KINH TẾ
            </p>
          </header>
        </div>
      </div>

      <div className={styles.container}>
      <section className={styles.section}>
        <div className={`${styles.intro} ${animStyles.animateSlideUp} ${animStyles.delay200}`}>
          <p>
            Nền kinh tế Việt Nam hiện nay bao gồm <strong>nhiều thành phần kinh tế khác nhau</strong>, phản ánh sự 
            phong phú của hình thức lao động trong xã hội.
          </p>
          <p>
            Theo Mác – Lênin, sự phát triển nhiều thành phần kinh tế chính là <strong>biểu hiện của tính đa dạng 
            của hình thức sở hữu và lực lượng lao động</strong>.
          </p>
        </div>

        <blockquote className={`${styles.quote} ${animStyles.animateFadeIn} ${animStyles.delay400}`}>
          "Các thành phần kinh tế bình đẳng, hợp tác và cạnh tranh cùng phát triển theo pháp luật."
          <br />— <em>Giáo trình KTCT Mác – Lênin, tr.164</em>
        </blockquote>

        <div className={`${styles.tableWrapper} ${animStyles.animateSlideUp} ${animStyles.delay500}`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th 
                  onMouseEnter={() => setHoveredColumn(1)}
                  onMouseLeave={() => setHoveredColumn(null)}
                  className={hoveredColumn === 1 ? styles.columnHovered : ''}
                >
                  Thành phần
                </th>
                <th 
                  onMouseEnter={() => setHoveredColumn(2)}
                  onMouseLeave={() => setHoveredColumn(null)}
                  className={hoveredColumn === 2 ? styles.columnHovered : ''}
                >
                  Biểu hiện lao động chân tay
                </th>
                <th 
                  onMouseEnter={() => setHoveredColumn(3)}
                  onMouseLeave={() => setHoveredColumn(null)}
                  className={hoveredColumn === 3 ? styles.columnHovered : ''}
                >
                  Biểu hiện lao động trí óc
                </th>
                <th 
                  onMouseEnter={() => setHoveredColumn(4)}
                  onMouseLeave={() => setHoveredColumn(null)}
                  className={hoveredColumn === 4 ? styles.columnHovered : ''}
                >
                  Ví dụ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={hoveredColumn === 1 ? styles.columnHovered : ''}>
                  <div className={styles.tableIcon}>
                    <BankOutlined />
                    <strong>Kinh tế nhà nước</strong>
                  </div>
                </td>
                <td className={hoveredColumn === 2 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <ToolOutlined className={styles.cellIcon} />
                    <span>Công nhân kỹ thuật</span>
                  </div>
                </td>
                <td className={hoveredColumn === 3 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <SolutionOutlined className={styles.cellIcon} />
                    <span>Quản lý, kỹ sư điều hành</span>
                  </div>
                </td>
                <td className={hoveredColumn === 4 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <RocketOutlined className={styles.cellIcon} />
                    <span>EVN, Petrolimex</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={hoveredColumn === 1 ? styles.columnHovered : ''}>
                  <div className={styles.tableIcon}>
                    <TeamOutlined />
                    <strong>Kinh tế tập thể</strong>
                  </div>
                </td>
                <td className={hoveredColumn === 2 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <UserOutlined className={styles.cellIcon} />
                    <span>Nông dân sản xuất</span>
                  </div>
                </td>
                <td className={hoveredColumn === 3 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <ApartmentOutlined className={styles.cellIcon} />
                    <span>Ban quản lý HTX, kỹ sư nông nghiệp</span>
                  </div>
                </td>
                <td className={hoveredColumn === 4 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <ThunderboltOutlined className={styles.cellIcon} />
                    <span>HTX công nghệ cao</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={hoveredColumn === 1 ? styles.columnHovered : ''}>
                  <div className={styles.tableIcon}>
                    <ShopOutlined />
                    <strong>Kinh tế tư nhân</strong>
                  </div>
                </td>
                <td className={hoveredColumn === 2 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <CoffeeOutlined className={styles.cellIcon} />
                    <span>Barista, công nhân, thợ thủ công</span>
                  </div>
                </td>
                <td className={hoveredColumn === 3 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <BulbOutlined className={styles.cellIcon} />
                    <span>Quản trị, marketing, R&D</span>
                  </div>
                </td>
                <td className={hoveredColumn === 4 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <ExperimentOutlined className={styles.cellIcon} />
                    <span>VinFast, Highlands, FPT</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={hoveredColumn === 1 ? styles.columnHovered : ''}>
                  <div className={styles.tableIcon}>
                    <GlobalOutlined />
                    <strong>FDI</strong>
                  </div>
                </td>
                <td className={hoveredColumn === 2 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <BuildOutlined className={styles.cellIcon} />
                    <span>Lao động sản xuất</span>
                  </div>
                </td>
                <td className={hoveredColumn === 3 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <SettingOutlined className={styles.cellIcon} />
                    <span>Quản lý, kỹ sư quốc tế</span>
                  </div>
                </td>
                <td className={hoveredColumn === 4 ? styles.columnHovered : ''}>
                  <div className={styles.tableCellContent}>
                    <RocketOutlined className={styles.cellIcon} />
                    <span>Samsung, Intel Việt Nam</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`${styles.valueChainSection} ${animStyles.animateSlideUp} ${animStyles.delay600}`}>
          <h3 className={styles.valueChainTitle}>
            <PictureOutlined style={{ marginRight: '10px', color: '#EAA64D' }} />
            Chuỗi Giá Trị Lao Động: Từ Ý Tưởng Đến Trải Nghiệm
          </h3>
          <p className={styles.valueChainDesc}>
            Sự kết hợp giữa lao động chân tay và trí óc trong mỗi giai đoạn tạo nên giá trị sản phẩm
          </p>

          <div className={styles.valueChainTimeline}>
            {/* Stage 1: Idea */}
            <div className={styles.timelineStage}>
              <div className={styles.stageIcon} style={{ background: 'linear-gradient(135deg, #EAA64D 0%, #F4C27C 100%)' }}>
                <BulbOutlined />
              </div>
              <div className={styles.stageContent}>
                <h4>1. Ý Tưởng (Idea)</h4>
                <div className={styles.stageDetail}>
                  <div className={styles.laborType}>
                    <SolutionOutlined /> <strong>Trí óc:</strong> Nghiên cứu thị trường, brainstorming
                  </div>
                  <div className={styles.stageExample}>
                    💡 VD: Đội ngũ R&D FPT phát triển giải pháp AI
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className={styles.timelineConnector}></div>

            {/* Stage 2: Design */}
            <div className={styles.timelineStage}>
              <div className={styles.stageIcon} style={{ background: 'linear-gradient(135deg, #AA5486 0%, #C87DAE 100%)' }}>
                <ExperimentOutlined />
              </div>
              <div className={styles.stageContent}>
                <h4>2. Thiết Kế (Design)</h4>
                <div className={styles.stageDetail}>
                  <div className={styles.laborType}>
                    <SolutionOutlined /> <strong>Trí óc:</strong> Kỹ sư thiết kế, kiến trúc sư hệ thống
                  </div>
                  <div className={styles.laborType}>
                    <ToolOutlined /> <strong>Chân tay:</strong> Làm mẫu thử, prototype
                  </div>
                  <div className={styles.stageExample}>
                    🎨 VD: Thiết kế sản phẩm VinFast VF8
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelineConnector}></div>

            {/* Stage 3: Production */}
            <div className={styles.timelineStage}>
              <div className={styles.stageIcon} style={{ background: 'linear-gradient(135deg, #0D5EA6 0%, #4A90D9 100%)' }}>
                <BuildOutlined />
              </div>
              <div className={styles.stageContent}>
                <h4>3. Sản Xuất (Production)</h4>
                <div className={styles.stageDetail}>
                  <div className={styles.laborType}>
                    <ToolOutlined /> <strong>Chân tay:</strong> Công nhân lắp ráp, vận hành máy móc
                  </div>
                  <div className={styles.laborType}>
                    <SettingOutlined /> <strong>Trí óc:</strong> Giám sát chất lượng, tối ưu quy trình
                  </div>
                  <div className={styles.stageExample}>
                    🏭 VD: Nhà máy Samsung Bắc Ninh
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelineConnector}></div>

            {/* Stage 4: AI & Automation */}
            <div className={styles.timelineStage}>
              <div className={styles.stageIcon} style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)' }}>
                <ThunderboltOutlined />
              </div>
              <div className={styles.stageContent}>
                <h4>4. Tự Động Hóa & AI</h4>
                <div className={styles.stageDetail}>
                  <div className={styles.laborType}>
                    <SolutionOutlined /> <strong>Trí óc:</strong> Lập trình AI, quản lý hệ thống
                  </div>
                  <div className={styles.laborType}>
                    <ToolOutlined /> <strong>Chân tay:</strong> Bảo trì robot, vận hành thiết bị
                  </div>
                  <div className={styles.stageExample}>
                    🤖 VD: Intel Việt Nam - Dây chuyền tự động
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelineConnector}></div>

            {/* Stage 5: Marketing */}
            <div className={styles.timelineStage}>
              <div className={styles.stageIcon} style={{ background: 'linear-gradient(135deg, #10B981 0%, #6EE7B7 100%)' }}>
                <RocketOutlined />
              </div>
              <div className={styles.stageContent}>
                <h4>5. Marketing & Bán Hàng</h4>
                <div className={styles.stageDetail}>
                  <div className={styles.laborType}>
                    <BulbOutlined /> <strong>Trí óc:</strong> Chiến lược marketing, phân tích dữ liệu
                  </div>
                  <div className={styles.laborType}>
                    <UserOutlined /> <strong>Chân tay:</strong> Nhân viên bán hàng, logistics
                  </div>
                  <div className={styles.stageExample}>
                    📱 VD: Highlands Coffee - Mở rộng chuỗi cửa hàng
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelineConnector}></div>

            {/* Stage 6: Experience */}
            <div className={styles.timelineStage}>
              <div className={styles.stageIcon} style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)' }}>
                <CoffeeOutlined />
              </div>
              <div className={styles.stageContent}>
                <h4>6. Trải Nghiệm Khách Hàng</h4>
                <div className={styles.stageDetail}>
                  <div className={styles.laborType}>
                    <UserOutlined /> <strong>Chân tay:</strong> Phục vụ trực tiếp, giao hàng
                  </div>
                  <div className={styles.laborType}>
                    <SolutionOutlined /> <strong>Trí óc:</strong> Chăm sóc khách hàng, thu thập feedback
                  </div>
                  <div className={styles.stageExample}>
                    ☕ VD: Barista Highlands, shipper Grab
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.valueChainSummary}>
            <blockquote className={styles.summaryQuote}>
              "Trong mỗi giai đoạn, lao động chân tay và trí óc không tồn tại riêng lẻ mà <strong>hỗ trợ lẫn nhau</strong>, 
              tạo nên chuỗi giá trị hoàn chỉnh từ ý tưởng đến sản phẩm cuối cùng."
            </blockquote>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
