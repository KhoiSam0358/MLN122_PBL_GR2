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
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const mainMenuItems = [
    { label: 'Home', href: '/' },
    { label: 'Theory', href: '/theory' },
    { label: 'Value Map', href: '/value-map' },
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
              <Link href="/game" className={styles.ctaButtonPrimary1}>
                <PlayCircleOutlined className={styles.ctaIcon} />
                <span className={styles.ctaText}>Play Career Flow</span>
              </Link>
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
                <Link
                  href="/game"
                  className={styles.mobileCTAButton}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <PlayCircleOutlined /> Play Career Flow
                </Link>
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
        width={900}
        centered
      >
        <div style={{ aspectRatio: '16/9', backgroundColor: '#000', position: 'relative' }}>
          <video 
            controls 
            autoPlay
            preload="metadata"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain' 
            }}
          >
            <source 
              src="https://video-mln122.s3.ap-southeast-1.amazonaws.com/mln122+video.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>

      {/* QR Modal */}
      <Modal
        title="Scan QR Code"
        open={isQRModalOpen}
        onCancel={() => setIsQRModalOpen(false)}
        footer={null}
        centered
        width={400}
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ 
            width: '256px', 
            height: '256px', 
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff'
          }}>
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://mln-122-pbl-gr-2.vercel.app"
              alt="QR Code"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <p style={{ marginTop: '15px', fontSize: '16px', fontWeight: '600', color: '#2B2B2B' }}>
            Quét mã QR để xem trên điện thoại
          </p>
          <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
            mln-122-pbl-gr-2.vercel.app
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
