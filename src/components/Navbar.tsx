'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Modal, Tooltip, Dropdown } from 'antd';
import { PlayCircleOutlined, VideoCameraOutlined, CompassOutlined, QrcodeOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const mainMenuItems = [
    { label: 'Home', href: '/' },
    { label: 'Theory', href: '/theory' },
    { label: 'Value Map', href: '/value-map' },
    { label: 'Game', href: '/game' },
    { label: 'Message', href: '/message' },
  ];

  const moreMenuItems: MenuProps['items'] = [
    {
      key: 'manual-labor',
      label: <Link href="/manual-labor">Manual Labor</Link>,
    },
    {
      key: 'intellectual-labor',
      label: <Link href="/intellectual-labor">Intellectual Labor</Link>,
    },
    {
      key: 'unity',
      label: <Link href="/unity">Unity</Link>,
    },
    {
      key: 'case-studies',
      label: <Link href="/case-studies">Case Studies</Link>,
    },
  ];

  const handleVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const handleGameModal = () => {
    setIsGameModalOpen(true);
  };

  const handleQRModal = () => {
    setIsQRModalOpen(true);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/icons/Logo.png"
              alt="Hands & Minds Logo"
              width={120}
              height={35}
              className={styles.logoImage}
              priority
            />
            <span className={styles.logoText}>Hands & Minds</span>
          </Link>

          {/* Desktop Menu */}
          <ul className={styles.menu}>
            {mainMenuItems.map((item) => {
              return (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={styles.menuItem}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            
            {/* More Menu Dropdown */}
            <li>
              <Dropdown menu={{ items: moreMenuItems }} placement="bottomRight">
                <a className={styles.menuItem} onClick={(e) => e.preventDefault()}>
                  More <DownOutlined style={{ fontSize: '10px', marginLeft: '4px' }} />
                </a>
              </Dropdown>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className={styles.ctaContainer}>
            <Tooltip title="Thử trải nghiệm: 5 vòng, 1 phút">
              <button onClick={handleGameModal} className={styles.ctaButtonPrimary1}>
                <PlayCircleOutlined className={styles.ctaIcon} />
                <span className={styles.ctaText}>Play Career Flow</span>
              </button>
            </Tooltip>
            
            <Tooltip title="Xem video 60s giới thiệu dự án">
              <button onClick={handleVideoModal} className={styles.ctaButtonPrimary2}>
                <VideoCameraOutlined className={styles.ctaIcon} />
                <span className={styles.ctaText}>Watch Intro</span>
              </button>
            </Tooltip>
            
            <Tooltip title="Khám phá chuỗi tạo giá trị">
              <Link href="/value-map" className={styles.ctaButtonSecondary}>
                <CompassOutlined className={styles.ctaIcon} />
                <span className={styles.ctaText}>Explore Value Map</span>
              </Link>
            </Tooltip>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileMenuList}>
              {mainMenuItems.map((item) => {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={styles.mobileMenuItem}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              
              {/* More sections in mobile */}
              <li>
                <Link href="/manual-labor" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>
                  Manual Labor
                </Link>
              </li>
              <li>
                <Link href="/intellectual-labor" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>
                  Intellectual Labor
                </Link>
              </li>
              <li>
                <Link href="/unity" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>
                  Unity
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className={styles.mobileMenuItem} onClick={() => setIsMobileMenuOpen(false)}>
                  Case Studies
                </Link>
              </li>
              
              <li>
                <button
                  onClick={() => {
                    handleGameModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className={styles.mobileCTAButton}
                >
                  <PlayCircleOutlined /> Play Career Flow
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleVideoModal();
                    setIsMobileMenuOpen(false);
                  }}
                  className={styles.mobileCTAButton}
                >
                  <VideoCameraOutlined /> Watch Intro
                </button>
              </li>
              <li>
                <Link
                  href="/value-map"
                  className={styles.mobileCTAButton}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <CompassOutlined /> Explore Value Map
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Floating QR Button */}
      <Tooltip title="Quét QR xem demo trên điện thoại" placement="left">
        <button onClick={handleQRModal} className={styles.floatingQRButton}>
          <QrcodeOutlined style={{ fontSize: '24px' }} />
        </button>
      </Tooltip>

      {/* Video Modal */}
      <Modal
        title="Watch Intro Video"
        open={isVideoModalOpen}
        onCancel={() => setIsVideoModalOpen(false)}
        footer={null}
        width={800}
        centered
      >
        <div style={{ aspectRatio: '16/9', backgroundColor: '#000' }}>
          {/* Replace with actual video embed */}
          <p style={{ color: '#fff', textAlign: 'center', paddingTop: '20%' }}>
            Video intro 60s sẽ được hiển thị ở đây
          </p>
        </div>
      </Modal>

      {/* Game Modal */}
      <Modal
        title="Career Flow Game"
        open={isGameModalOpen}
        onCancel={() => setIsGameModalOpen(false)}
        footer={null}
        width={900}
        centered
      >
        <div style={{ minHeight: '400px', textAlign: 'center', padding: '40px' }}>
          <p>Game Career Flow sẽ được hiển thị ở đây</p>
          <p>5 vòng, 1 phút</p>
        </div>
      </Modal>

      {/* QR Modal */}
      <Modal
        title="Scan QR Code"
        open={isQRModalOpen}
        onCancel={() => setIsQRModalOpen(false)}
        footer={null}
        centered
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ 
            width: '200px', 
            height: '200px', 
            backgroundColor: '#f0f0f0',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <QrcodeOutlined style={{ fontSize: '120px', color: '#999' }} />
          </div>
          <p style={{ marginTop: '20px' }}>Quét mã QR để xem demo trên điện thoại</p>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
