import React, { useState, useEffect } from 'react';
import NavDropdown from './NavDropdown';
import styles from '../styles/navigation.module.css';

export interface NavigationProps {
  brand?: React.ReactNode;
  links?: Array<{
    label: string;
    href: string;
    onClick?: () => void;
  }>;
  actions?: React.ReactNode;
  mobileActions?: React.ReactNode;
  dropdownMenus?: {
    whatWeDo?: Array<{ label: string; href: string; description?: string }> | Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>;
    whatWeThink?: Array<{ label: string; href: string; description?: string }> | Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>;
    aboutFraylon?: Array<{ label: string; href: string; description?: string }> | Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>;
    careers?: Array<{ label: string; href: string; description?: string }> | Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>;
  };
}

const Navigation: React.FC<NavigationProps> = ({
  brand,
  links = [],
  actions,
  mobileActions,
  dropdownMenus
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  // CRITICAL: Ensure body scrolling works but avoid aggressive checking that can interfere
  useEffect(() => {
    // Import the force scroll utility
    import('../utils/bodyScrollLock').then(({ forceBodyScrollable }) => {
      // Force body scrollable on mount
      forceBodyScrollable();

      // REMOVED: Aggressive interval checking can interfere with scrolling
      // Only check on mount and unmount, not continuously
    });

    // Cleanup on unmount - ensure scrolling is enabled
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.classList.remove('mobile-menu-open');
    };
  }, []); // Run once on mount

  // Additional effect to ensure classes are applied when state changes
  useEffect(() => {
    // On mobile, never apply mobile-menu-open class since CardNav is used
    if (window.innerWidth <= 1200) {
      document.body.classList.remove('mobile-menu-open');
      document.documentElement.classList.remove('mobile-menu-open');
      // Ensure scrolling is always enabled on mobile
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.height = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      return;
    }

    // Only apply classes on desktop
    if (isMobileMenuOpen) {
      // Ensure classes are added when menu is open
      document.body.classList.add('mobile-menu-open');
      document.documentElement.classList.add('mobile-menu-open');
    } else {
      // Ensure classes are removed when menu is closed
      document.body.classList.remove('mobile-menu-open');
      document.documentElement.classList.remove('mobile-menu-open');
      // Also remove inline styles
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.height = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    }
  }, [isMobileMenuOpen]);

  // Function to get service logos
  const getServiceLogo = (serviceName: string) => {
    const logoMap: { [key: string]: string } = {
      'WordPress Development': 'W',
      'Webflow Development': 'W',
      'Wix Development': 'W',
      'Shopify Development': 'S',
      'Magento Development': 'M',
      'Bubble.io Development': 'B',
      'Framer Development': 'F',
      'Dora Development': 'D',
      'Studio AI Development': 'S',
      'Software Development': 'S',
      'Web Application Development': 'W',
      'Custom Website & CMS Development': 'C',
      'Enterprise Portals & Dashboards': 'E',
      'eCommerce Website Development': 'E',
      'UI/UX & Product Design': 'U',
      'Branding & Visual Identity': 'B',
      'Graphic Design': 'G',
      'Inbound Marketing & Content Strategy': 'I',
      'SEO Services': 'S',
      'Social Media & Paid Advertising': 'S',
      'Digital Transformation': 'D',
      'IT Staff Augmentation': 'I',
      'Technology Consulting': 'T',
      'Maintenance & Support Services': 'M',
      'AI Integration & Strategy Consulting': 'A',
      'AI Agents Development': 'A',
      'Natural Language Processing (NLP) Solutions': 'N',
      'Native Mobile App': 'N',
      'Hybrid Mobile App': 'H',
      'MVP Development': 'M',
      'Rapid Prototyping': 'R'
    };

    return logoMap[serviceName] || serviceName.charAt(0);
  };

  const toggleMobileMenu = () => {
    // Don't do anything on mobile since CardNav is used
    if (window.innerWidth <= 1200) {
      return;
    }

    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    // Use setTimeout to ensure state update happens before DOM manipulation
    setTimeout(() => {
      // Prevent background scrolling when menu is open (desktop only)
      // CHANGED: Use overflow: hidden ONLY, no position: fixed to prevent sticking
      if (newState) {
        // PREVENT STICKY: Don't use position: fixed!
        // Only prevent scrolling with overflow: hidden
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // DO NOT SET position: fixed - this was causing sections to stick!
        // document.body.style.position = 'fixed'; // REMOVED

        // Add class (but CSS won't use position: fixed anymore)
        document.body.classList.add('mobile-menu-open');
        document.documentElement.classList.add('mobile-menu-open');
      } else {
        // CRITICAL: Fully restore all styles to prevent stuck elements
        const storedScrollY = document.body.style.top;

        // Remove all inline styles
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.bottom = '';
        document.body.style.width = '';
        document.body.style.height = '';
        document.body.style.touchAction = '';
        document.documentElement.style.position = '';
        document.documentElement.style.top = '';
        document.documentElement.style.touchAction = '';

        // Remove class from body
        document.body.classList.remove('mobile-menu-open');
        document.documentElement.classList.remove('mobile-menu-open');

        // Restore scroll position if it was stored
        if (storedScrollY) {
          const scrollPosition = parseInt(storedScrollY.replace('-', '').replace('px', '')) || 0;
          window.scrollTo(0, scrollPosition);
        }
      }
    }, 0);
  };

  const closeMobileMenu = () => {
    // Don't do anything on mobile since CardNav is used
    if (window.innerWidth <= 1200) {
      return;
    }

    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);

    // Use setTimeout to ensure state update happens before DOM manipulation
    setTimeout(() => {
      // CRITICAL: Fully restore all styles to prevent stuck elements
      const storedScrollY = document.body.style.top;

      // Remove all inline styles
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.bottom = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
      document.documentElement.style.position = '';
      document.documentElement.style.top = '';
      document.documentElement.style.touchAction = '';

      // Remove class from body
      document.body.classList.remove('mobile-menu-open');
      document.documentElement.classList.remove('mobile-menu-open');

      // Restore scroll position if it was stored
      if (storedScrollY) {
        const scrollPosition = parseInt(storedScrollY.replace('-', '').replace('px', '')) || 0;
        window.scrollTo(0, scrollPosition);
      }
    }, 0);
  };

  const toggleMobileDropdown = (dropdownKey: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdownKey ? null : dropdownKey);

    // Ensure scrolling works when dropdown opens
    if (dropdownKey === 'whatWeDo') {
      setTimeout(() => {
        const megaMenu = document.querySelector('.mobileMegaMenu');
        if (megaMenu) {
          // Force enable scrolling
          (megaMenu as HTMLElement).style.overflowY = 'auto';
          (megaMenu as HTMLElement).style.setProperty('-webkit-overflow-scrolling', 'touch');
          (megaMenu as HTMLElement).style.touchAction = 'pan-y';
          (megaMenu as HTMLElement).style.maxHeight = '70vh';
          console.log('Mega menu scrolling enabled');
        }
      }, 100);
    }
  };

  const handleMobileMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>
          {brand}
        </div>

        <div className={styles.navMenu}>
          {links.map((link, index) => {
            // Check if this link should have a dropdown
            const hasDropdown = (link.label === 'What We Do' && dropdownMenus?.whatWeDo) ||
              (link.label === 'What We Think' && dropdownMenus?.whatWeThink) ||
              (link.label === 'About Fraylon' && dropdownMenus?.aboutFraylon) ||
              (link.label === 'Careers' && dropdownMenus?.careers);

            if (hasDropdown) {
              const dropdownKey = link.label === 'What We Do' ? 'whatWeDo' :
                link.label === 'What We Think' ? 'whatWeThink' :
                  link.label === 'About Fraylon' ? 'aboutFraylon' :
                    'careers';

              const dropdownData = dropdownMenus?.[dropdownKey as keyof typeof dropdownMenus];

              return (
                <NavDropdown
                  key={index}
                  label={link.label}
                  sections={Array.isArray(dropdownData) && dropdownData.length > 0 && 'title' in dropdownData[0]
                    ? dropdownData as Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>
                    : undefined
                  }
                  items={Array.isArray(dropdownData) && dropdownData.length > 0 && 'label' in dropdownData[0]
                    ? dropdownData as Array<{ label: string; href: string; description?: string }>
                    : undefined
                  }
                />
              );
            }
            return null;
          })}
          {links.map((link, index) => {
            // Only show Contact Us as regular link
            if (link.label === 'Contact Us') {
              return (
                <a
                  key={index}
                  href={link.href}
                  className={styles.navLink}
                  onClick={link.onClick}
                >
                  {link.label}
                </a>
              );
            }
            return null;
          })}
        </div>

        <div className={styles.navActions}>
          {actions}
          <button
            className={`${styles.menu} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={handleMobileMenuClick}
            onMouseDown={(e) => e.preventDefault()}
            aria-label="Toggle mobile menu"
          >
            <svg viewBox="0 0 64 48">
              <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
              <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
              <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div
            className={`${styles.mobileMenuBackdrop} ${isMobileMenuOpen ? styles.show : ''}`}
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.show : styles.hidden}`}>
          {/* Purple Banner */}
          <div className={styles.mobileBanner}>
            <div className={styles.bannerContent}>
              <span className={styles.bannerText}>Introducing Virusha AI — Automations, AI Agents & Intelligent Workflows for your business. Explore Now</span>
              <svg className={styles.bannerArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m7 17 10-10m0 0h-6m6 0v6" />
              </svg>
            </div>
          </div>

          {/* Hamburger button in menu */}
          <button
            className={`${styles.menu} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={handleMobileMenuClick}
            onMouseDown={(e) => e.preventDefault()}
            aria-label="Close mobile menu"
          >
            <svg viewBox="0 0 64 48">
              <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
              <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
              <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
            </svg>
          </button>

          {links.map((link, index) => {
            // Check if this link should have a dropdown
            const hasDropdown = (link.label === 'What We Do' && dropdownMenus?.whatWeDo) ||
              (link.label === 'What We Think' && dropdownMenus?.whatWeThink) ||
              (link.label === 'About Fraylon' && dropdownMenus?.aboutFraylon) ||
              (link.label === 'Careers' && dropdownMenus?.careers);

            if (hasDropdown) {
              const dropdownKey = link.label === 'What We Do' ? 'whatWeDo' :
                link.label === 'What We Think' ? 'whatWeThink' :
                  link.label === 'About Fraylon' ? 'aboutFraylon' :
                    'careers';

              return (
                <div key={index} className={styles.mobileDropdown}>
                  <button
                    className={styles.mobileDropdownTrigger}
                    onClick={() => toggleMobileDropdown(dropdownKey)}
                    data-dropdown={dropdownKey}
                  >
                    <span className={styles.mobileNavLabel}>{link.label}</span>
                    <svg
                      className={`${styles.dropdownArrow} ${openMobileDropdown === dropdownKey ? styles.rotated : ''}`}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </button>
                  {openMobileDropdown === dropdownKey && (
                    <div
                      className={dropdownKey === 'whatWeDo' ? styles.mobileMegaMenu : styles.mobileDropdownContent}
                    >
                      {dropdownKey === 'whatWeDo' && dropdownMenus.whatWeDo ? (
                        <div className={styles.mobileMegaMenu}>
                          {/* SERVICES Header */}
                          <div className={styles.servicesHeader}>
                            <span className={styles.servicesHeaderText}>SERVICES</span>
                            <svg className={styles.servicesHeaderArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="18,15 12,9 6,15"></polyline>
                            </svg>
                          </div>

                          {/* Render all service sections */}
                          {(dropdownMenus.whatWeDo as Array<{ title: string; items: Array<{ label: string; href: string; description?: string }> }>).map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              {/* Section Header */}
                              <div className={styles.subsectionHeader}>
                                <span className={styles.subsectionHeaderText}>{section.title}</span>
                              </div>

                              {/* Two-column grid container for this section */}
                              <div className={styles.mobileMegaMenuContainer}>
                                {section.items.map((item, itemIndex) => (
                                  <a
                                    key={`${sectionIndex}-${itemIndex}`}
                                    href={item.href}
                                    className={styles.megaMenuCard}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      closeMobileMenu();
                                    }}
                                  >
                                    {/* Service Logo */}
                                    <div className={styles.megaMenuCardLogo}>
                                      {getServiceLogo(item.label)}
                                    </div>

                                    {/* Service Name */}
                                    <div className={styles.megaMenuCardTitle}>
                                      {item.label}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Original simple dropdown for other menus
                        <div className={styles.mobileDropdownSection}>
                          {Array.isArray(dropdownMenus?.[dropdownKey as keyof typeof dropdownMenus]) &&
                            (dropdownMenus?.[dropdownKey as keyof typeof dropdownMenus] as Array<{ label: string; href: string; description?: string }>).map((item, itemIndex) => (
                              <a
                                key={itemIndex}
                                href={item.href}
                                className={styles.mobileDropdownLink}
                                onClick={closeMobileMenu}
                              >
                                {item.label}
                              </a>
                            ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            // Regular links (like Contact Us, Services)
            return (
              <a
                key={index}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => {
                  if (link.onClick) {
                    link.onClick();
                  }
                  closeMobileMenu();
                }}
              >
                <span className={styles.mobileNavLabel}>{link.label}</span>
              </a>
            );
          })}

          {/* Mobile Actions */}
          {mobileActions}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;