'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  HomeOutlined,
  BookOutlined,
  ToolOutlined,
  BulbOutlined,
  TeamOutlined,
  CompassOutlined,
  FileSearchOutlined,
  RocketOutlined,
  RobotOutlined,
  MessageOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import styles from './TabsMenu.module.css';

type MenuItem = Required<MenuProps>['items'][number];

interface TabsMenuProps {
  children?: React.ReactNode;
}

const TabsMenu: React.FC<TabsMenuProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('home');

  // Auto-detect current section based on scroll position
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const sections = [
        'home', 'theory', 'manual-labor', 'intellectual-labor', 
        'unity', 'value-map', 'case-studies', 'game', 
        'ai-transparency', 'message'
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setSelectedKey(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItems: MenuItem[] = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'HOME',
    },
    {
      key: 'theory',
      icon: <BookOutlined />,
      label: 'THEORY',
    },
    {
      key: 'manual-labor',
      icon: <ToolOutlined />,
      label: 'MANUAL LABOR',
    },
    {
      key: 'intellectual-labor',
      icon: <BulbOutlined />,
      label: 'INTELLECTUAL LABOR',
    },
    {
      key: 'unity',
      icon: <TeamOutlined />,
      label: 'UNITY',
    },
    {
      key: 'value-map',
      icon: <CompassOutlined />,
      label: 'VALUE MAP',
    },
    {
      key: 'case-studies',
      icon: <FileSearchOutlined />,
      label: 'CASE STUDIES',
    },
    {
      key: 'game',
      icon: <RocketOutlined />,
      label: 'GAME',
    },
    {
      key: 'ai-transparency',
      icon: <RobotOutlined />,
      label: 'AI & TRANSPARENCY',
    },
    {
      key: 'message',
      icon: <MessageOutlined />,
      label: 'MESSAGE',
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setSelectedKey(e.key);
    
    // If we're not on homepage, navigate to homepage first
    if (pathname !== '/') {
      router.push(`/#${e.key}`);
    } else {
      // If already on homepage, just scroll to section
      const element = document.getElementById(e.key);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className={styles.layout}>
      <div className={`${styles.sidebarWrapper} ${collapsed ? styles.collapsed : ''}`}>
        <div className={styles.sidebar}>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            className={styles.collapseButton}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            selectedKeys={[selectedKey]}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={menuItems}
            onClick={handleMenuClick}
            className={styles.menu}
          />
        </div>
      </div>
      <div className={`${styles.content} ${collapsed ? styles.contentExpanded : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default TabsMenu;
