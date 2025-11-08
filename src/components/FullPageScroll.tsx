'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from './FullPageScroll.module.css';

interface FullPageScrollProps {
  children: ReactNode[];
}

// Map section hash to page index
const SECTION_TO_PAGE: Record<string, number> = {
  'home': 0,
  'theory': 1,
  'manual-labor': 2,
  'intellectual-labor': 3,
  'unity': 4,
  'value-map': 5,
  'case-studies': 6,
  'game': 7,
  'ai-transparency': 8,
  'message': 9,
};

// Map page index to section hash
const PAGE_TO_SECTION: Record<number, string> = {
  0: 'home',
  1: 'theory',
  2: 'manual-labor',
  3: 'intellectual-labor',
  4: 'unity',
  5: 'value-map',
  6: 'case-studies',
  7: 'game',
  8: 'ai-transparency',
  9: 'message',
};

export default function FullPageScroll({ children }: FullPageScrollProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const totalPages = children.length;

  const scrollToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages && !isScrolling) {
      setIsScrolling(true);
      setCurrentPage(pageIndex);
      
      // Update URL hash
      const sectionHash = PAGE_TO_SECTION[pageIndex];
      if (sectionHash) {
        window.history.replaceState(null, '', `/#${sectionHash}`);
      }
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  // Listen for hash changes from navigation clicks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove #
      const pageIndex = SECTION_TO_PAGE[hash];
      
      console.log('Hash changed:', hash, 'Page index:', pageIndex); // Debug log
      
      if (pageIndex !== undefined) {
        setIsScrolling(false); // Reset scrolling state
        setCurrentPage(pageIndex);
      }
    };

    // Check initial hash on mount
    if (typeof window !== 'undefined') {
      const initialHash = window.location.hash.substring(1);
      const initialPageIndex = SECTION_TO_PAGE[initialHash];
      
      console.log('Initial hash:', initialHash, 'Page index:', initialPageIndex); // Debug log
      
      if (initialPageIndex !== undefined && initialPageIndex !== 0) {
        setCurrentPage(initialPageIndex);
      }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array - only run once on mount

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (!isScrolling) {
        // Horizontal scroll: both vertical wheel and horizontal trackpad
        if (e.deltaY > 0 || e.deltaX > 0) {
          // Scroll right
          scrollToPage(currentPage + 1);
        } else if (e.deltaY < 0 || e.deltaX < 0) {
          // Scroll left
          scrollToPage(currentPage - 1);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          scrollToPage(currentPage + 1);
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          scrollToPage(currentPage - 1);
          break;
        case 'Home':
          e.preventDefault();
          scrollToPage(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToPage(totalPages - 1);
          break;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (Math.abs(diff) > 50 && !isScrolling) {
        if (diff > 0) {
          // Swipe left -> go right
          scrollToPage(currentPage + 1);
        } else {
          // Swipe right -> go left
          scrollToPage(currentPage - 1);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, isScrolling, totalPages]);

  return (
    <div ref={containerRef} className={styles.fullPageContainer}>
      <div 
        className={styles.pageWrapper}
        style={{
          transform: `translateX(-${currentPage * 100}vw)`,
          transition: 'transform 1s cubic-bezier(0.77, 0, 0.175, 1)'
        }}
      >
        {children.map((child, index) => (
          <div 
            key={index} 
            className={styles.page}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className={styles.navigation}>
        {children.map((_, index) => (
          <button
            key={index}
            className={`${styles.navDot} ${index === currentPage ? styles.navDotActive : ''}`}
            onClick={() => scrollToPage(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Page Counter */}
      <div className={styles.pageCounter}>
        {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
      </div>
    </div>
  );
}
