import React, { useState } from 'react';
import styles from '../styles/footer.module.css';
import { ChevronDown } from 'lucide-react';


const services = [
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  { label: 'Brand Identity', href: '/services/ui-ux-design' },
  { label: 'E-commerce', href: '/services/ecommerce-development' },
  { label: 'Mobile Apps', href: '/services/mobile-app-development' },
  { label: 'Digital Strategy', href: '/services/digital-marketing' },
];
const offerings = [
  { label: 'AI Agents Development', href: '/services/ai-agents-development' },
  { label: 'MVP Development', href: '/services/mvp-development' },
  { label: 'Tech Consulting', href: '/services/technology-consulting' },
  { label: 'Maintenance & Support', href: '/services/web-development' },
  { label: 'WordPress/Shopify Dev', href: '/services/wordpress-development' },
  { label: 'Rapid Prototyping', href: '/services/mvp-development' },
];
const industries = [
  { label: 'Retail & E-commerce', href: '/services' },
  { label: 'Healthcare', href: '/services' },
  { label: 'SaaS & Startups', href: '/services' },
  { label: 'Education', href: '/services' },
  { label: 'Enterprise', href: '/services' },
  { label: 'Local Businesses', href: '/services' },
];
const aboutus = [
  { label: 'About', href: '/about' },
  { label: 'Leadership', href: '/about#leadership' },
  { label: 'Careers', href: '/careers' },
  { label: 'Awards', href: '/about#awards' },
  { label: 'Events', href: '/about#events' },
  { label: 'Contact', href: '/contact' },
];
const socialLinks = [
  {
    label: 'LinkedIn', icon: (
      <svg width="20" height="20" viewBox="0 0 50 50" fill="none" aria-hidden="true">
        <path
          d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
          fill="currentColor"
        />
      </svg>
    ), url: 'https://www.linkedin.com/company/fraylontech'
  },
  {
    label: 'Facebook', icon: (
      <svg width="20" height="20" viewBox="0 0 50 50" fill="none" aria-hidden="true">
        <path
          d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
          fill="currentColor"
        />
      </svg>
    ), url: 'https://www.facebook.com/fraylontech'
  },
  {
    label: 'WhatsApp', icon: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
      </svg>
    ), url: 'https://wa.me/919493893730'
  },
  {
    label: 'Instagram', icon: (
      <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeMiterlimit="10" aria-hidden="true">
        <path d="M11.5 15.5h-7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4z" />
        <circle cx="8" cy="8" r="3.5" />
        <circle cx="12.5" cy="3.5" r=".5" />
      </svg>
    ), url: 'https://www.instagram.com/fraylontech/'
  },
];

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className={styles.megaFooter} style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Desktop View */}
        <div className={styles.desktopFooter}>
          <div className={styles.megaFooterGrid}>
            <div>
              <h5 className={styles.footerHead}>Services</h5>
              <ul className={styles.footerList}>
                {services.map(l => (
                  <li key={l.label}>
                    {l.href ? <a href={l.href} className={styles.footerLink}>{l.label}</a> : <span className={styles.footerLinkInactive}>{l.label}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className={styles.footerHead}>Offerings</h5>
              <ul className={styles.footerList}>
                {offerings.map(l => (
                  <li key={l.label}>
                    {l.href ? <a href={l.href} className={styles.footerLink}>{l.label}</a> : <span className={styles.footerLinkInactive}>{l.label}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className={styles.footerHead}>Industries</h5>
              <ul className={styles.footerList}>
                {industries.map(l => (
                  <li key={l.label}>
                    {l.href ? <a href={l.href} className={styles.footerLink}>{l.label}</a> : <span className={styles.footerLinkInactive}>{l.label}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className={styles.footerHead}>About Us</h5>
              <ul className={styles.footerList}>
                {aboutus.map(l => (
                  <li key={l.label}>
                    {l.href ? <a href={l.href} className={styles.footerLink}>{l.label}</a> : <span className={styles.footerLinkInactive}>{l.label}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.megaFooterBottom}>
            <span className={styles.footerConnectText}>Connect with Fraylon Technologies</span>
            <div className={styles.footerSocialRow} style={{ marginTop: 12 }}>
              {socialLinks.map(s => (
                <a key={s.label} href={s.url} className={styles.footerSocialIcon} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.icon}</a>
              ))}
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 14,
                color: 'rgba(255,255,255,0.75)',
                display: 'flex',
                flexWrap: 'nowrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
              }}
            >
              <span>Copyright © {new Date().getFullYear()} Fraylon Technologies</span>
              <a href="/contact" className={styles.footerLink} style={{ display: 'inline' }}>Contact Us</a>
              <span>/</span>
              <a href="/disclaimer" className={styles.footerLink} style={{ display: 'inline' }}>Disclaimer</a>
              <span>/</span>
              <a href="/privacy" className={styles.footerLink} style={{ display: 'inline' }}>Privacy Statement</a>
              <span>/</span>
              <a href="/terms" className={styles.footerLink} style={{ display: 'inline' }}>Terms of use</a>
              <span>/</span>
              <a href="/sitemap" className={styles.footerLink} style={{ display: 'inline' }}>Sitemap</a>
              <span>/</span>
              <a href="/grievance" className={styles.footerLink} style={{ display: 'inline' }}>Raise a Grievance</a>
            </div>
            <div style={{ marginTop: 8, fontSize: 14, color: 'rgba(255,255,255,0.75)', display: 'flex', justifyContent: 'center', alignItems: 'center', whiteSpace: 'nowrap', width: '100%' }}>
              We use cookies on our site. Please read more about <a href="/privacy#cookies" className={styles.footerLink} style={{ display: 'inline', margin: '0 6px' }}>cookies policy</a> here.
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className={styles.mobileFooter}>
          <div className={styles.mobileAccordion}>
            <div className={styles.accordionItem}>
              <button
                className={`${styles.accordionHeader} ${openSection === 'services' ? styles.active : ''}`}
                onClick={() => toggleSection('services')}
              >
                <span>Services</span>
                <ChevronDown className={`${styles.chevron} ${openSection === 'services' ? styles.rotate : ''}`} size={20} />
              </button>
              <div className={`${styles.accordionContent} ${openSection === 'services' ? styles.open : ''}`}>
                <ul className={styles.mobileList}>
                  {services.map(l => (
                    <li key={l.label}>
                      <a href={l.href || '#'} className={styles.mobileLink}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.accordionItem}>
              <button
                className={`${styles.accordionHeader} ${openSection === 'offerings' ? styles.active : ''}`}
                onClick={() => toggleSection('offerings')}
              >
                <span>Offerings</span>
                <ChevronDown className={`${styles.chevron} ${openSection === 'offerings' ? styles.rotate : ''}`} size={20} />
              </button>
              <div className={`${styles.accordionContent} ${openSection === 'offerings' ? styles.open : ''}`}>
                <ul className={styles.mobileList}>
                  {offerings.map(l => (
                    <li key={l.label}>
                      <a href={l.href || '#'} className={styles.mobileLink}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.accordionItem}>
              <button
                className={`${styles.accordionHeader} ${openSection === 'industries' ? styles.active : ''}`}
                onClick={() => toggleSection('industries')}
              >
                <span>Industries</span>
                <ChevronDown className={`${styles.chevron} ${openSection === 'industries' ? styles.rotate : ''}`} size={20} />
              </button>
              <div className={`${styles.accordionContent} ${openSection === 'industries' ? styles.open : ''}`}>
                <ul className={styles.mobileList}>
                  {industries.map(l => (
                    <li key={l.label}>
                      <a href={l.href || '#'} className={styles.mobileLink}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.accordionItem}>
              <button
                className={`${styles.accordionHeader} ${openSection === 'about' ? styles.active : ''}`}
                onClick={() => toggleSection('about')}
              >
                <span>About Us</span>
                <ChevronDown className={`${styles.chevron} ${openSection === 'about' ? styles.rotate : ''}`} size={20} />
              </button>
              <div className={`${styles.accordionContent} ${openSection === 'about' ? styles.open : ''}`}>
                <ul className={styles.mobileList}>
                  {aboutus.map(l => (
                    <li key={l.label}>
                      <a href={l.href || '#'} className={styles.mobileLink}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.mobileExtras}>
            <div className={styles.mobileSocialRow}>
              {socialLinks.map(s => (
                <a key={s.label} href={s.url} className={styles.mobileSocialIcon} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>

            <div className={styles.cookieNotice}>
              <p>
                We use cookies on our site. Please read more about <a href="/privacy#cookies">cookies policy</a> here.
              </p>
            </div>

            <div className={styles.mobileFooterLinks}>
              <div className={styles.mobileFooterLinkRow}>
                <a href="/contact">Contact Us</a>
                <span>/</span>
                <a href="/disclaimer">Disclaimer</a>
                <span>/</span>
                <a href="/privacy">Privacy Statement</a>
              </div>
              <div className={styles.mobileFooterLinkRow}>
                <a href="/terms">Terms of use</a>
                <span>/</span>
                <a href="/sitemap">Sitemap</a>
                <span>/</span>
                <a href="/grievance">Raise a Grievance</a>
              </div>
            </div>

            <div className={styles.mobileCopyright}>
              Copyright © {new Date().getFullYear()} Fraylon Technologies
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;