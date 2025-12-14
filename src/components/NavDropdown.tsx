import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navigation.module.css';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  image?: string;
  external?: boolean;
  type?: 'header';
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

interface NavDropdownProps {
  label: string;
  items?: DropdownItem[];
  sections?: DropdownSection[];
  onClick?: () => void;
}

// Global counter to track open dropdowns across instances
let openCount = 0;

const NavDropdown = ({ label, items = [], sections = [], onClick }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  // Manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      openCount++;
      if (openCount === 1) {
        document.body.style.overflow = 'hidden';
      }
    }

    return () => {
      if (isOpen) {
        openCount--;
        if (openCount === 0) {
          document.body.style.overflow = '';
        }
      }
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before hiding to prevent flickering
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      // Optional: Reset active tab on close
      // setActiveTab(0); 
    }, 150); // 150ms delay
  };

  const handleItemClick = (href: string) => {
    setIsOpen(false);
    if (onClick) onClick();
    // Handle smooth scrolling for hash links only
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    // For route links, React Router Link component will handle navigation
  };

  return (
    <div
      className={styles.navDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={styles.navDropdownTrigger}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <svg
          className={`${styles.dropdownArrow} ${isOpen ? styles.open : ''}`}
          width="24"
          height="24"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.navDropdownMenu}>
          {/* Main Title Row */}
          <div className={styles.dropdownHeaderContainer}>
            <div className={styles.headerAccentBar}></div>
            <h2 className={styles.dropdownMainTitle}>{label}</h2>
          </div>

          <div className={styles.dropdownMegaContainer}>
            {/* Split Layout: Categories Sidebar + Content Area */}
            {sections.length > 0 ? (
              <>
                {/* Left Sidebar: Categories */}
                <div className={styles.dropdownSidebar}>
                  <div className={styles.sidebarHeader}>Categories</div>
                  <div className={styles.sidebarList}>
                    {sections.map((section, index) => (
                      <div
                        key={index}
                        className={`${styles.sidebarItem} ${activeTab === index ? styles.active : ''}`}
                        onMouseEnter={() => {
                          // Simple debounce for tab switching
                          const timerId = setTimeout(() => {
                            setActiveTab(index);
                          }, 50); // 50ms delay
                          // Store timer to clear if needed (though locally scoped here, it works for quick glides)
                          // Ideally we'd use a ref, but for simple hover-over this helps prevent 'instant' rapid updates
                          (window as any)._tabTimer = timerId;
                        }}
                        onMouseLeave={() => {
                          if ((window as any)._tabTimer) clearTimeout((window as any)._tabTimer);
                        }}
                      >
                        <span className={styles.sidebarLabel}>{section.title}</span>
                        <svg className={styles.sidebarArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Panel: Content Grid */}
                <div className={styles.dropdownContentPanel}>
                  {/* Dynamic Header for the Right Panel */}
                  <div className={styles.panelHeader}>{sections[activeTab].title}</div>

                  <div className={styles.panelGrid}>
                    {sections[activeTab].items.map((item, index) => (
                      item.type === 'header' ? (
                        <div key={index} className={styles.dropdownSubheader}>{item.label}</div>
                      ) : (
                        <Link
                          key={index}
                          to={item.href}
                          className={styles.panelCard}
                          onClick={() => handleItemClick(item.href)}
                        >
                          {item.image && (
                            <img src={item.image} alt={item.label} className={styles.panelCardImage} />
                          )}
                          <div className={styles.panelCardContent}>
                            <div className={styles.panelCardTitle}>{item.label}</div>
                            {item.description && (
                              <div className={styles.panelCardDesc}>{item.description}</div>
                            )}
                          </div>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* Fallback for simple lists without sections */
              <div className={styles.dropdownSimpleGrid}>
                {items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className={styles.dropdownItem}
                    onClick={() => handleItemClick(item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
