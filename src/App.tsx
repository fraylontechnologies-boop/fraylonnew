import { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Reveal from './components/Reveal';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';

import { loadFonts, defaultFontConfig } from './utils/fontLoader';
import { scrollToElement } from './utils/scrollUtils';
import Navigation from './components/Navigation';
import CardNav from './components/CardNav';
import Footer from './components/Footer';
import logoImage from '/logos/logo.png';
import AllProjects from './components/AllProjects';
import Container from './components/Container';
import Section from './components/Section';
import Button from './components/Button';
import Grid from './components/Grid';
import Flex from './components/Flex';

import WorkCard from './components/WorkCard';
import OriginalHero from './components/OriginalHero';
import { TestimonialsMarquee } from './components/TestimonialsMarquee';
import ClientLogos from './components/ClientLogos';
import TypingBrand from './components/TypingBrand';

import ProjectDetails from './components/ProjectDetails';


import ResponsiveServices from './components/ResponsiveServices';
import {
  Services, WebDevelopment, UIDesign, MobileAppDevelopment, DigitalMarketing,
  WordPressDevelopment, ShopifyDevelopment, EcommerceDevelopment, TechnologyConsulting,
  AIAgentsDevelopment, MVPDevelopment,
  // No-Code Development
  WebflowDevelopment, WixDevelopment, MagentoDevelopment, BubbleDevelopment,
  FramerDevelopment, DoraDevelopment, StudioAIDevelopment,
  // Custom Development
  SoftwareDevelopment, CustomCMSDevelopment, EnterprisePortals,
  // Design Services
  BrandingDesign, GraphicDesign,
  // Marketing Services
  InboundMarketing, SEOServices,
  // IT Solutions
  DigitalTransformation, StaffAugmentation, MaintenanceSupport,
  // AI & Data Science
  AIIntegration, NLPSolutions,
  // Mobile
  NativeMobileApp,
  // Zero to One
  RapidPrototyping,
  // Solutions
  SchoolManagement, HospitalManagement, HRPayroll, CRMSolutions, InventoryManagement,
  LMS, AppointmentScheduling, POSSystems, EventManagement, ContentManagementSystems, EcommerceMarketplace,
  // Industries
  Healthcare, FinancialServices, Education, Manufacturing, RealEstate,
  TravelHospitality, ProfessionalServices, NonProfit, EcommerceIndustry, AIMLIndustry, StartupsSMBs
} from './pages';
import Disclaimer from './pages/Disclaimer';

import { homePageTestimonials } from './data/testimonials';
import styles from './styles/components.module.css';

import clientStyles from './styles/clientLogos.module.css';
import layoutStyles from './styles/layout.module.css';
import './styles/animations.module.css';
import './styles/darkMode.module.css';



function App() {
  useEffect(() => {
    // CRITICAL: Force body to NEVER be fixed/sticky - run immediately
    import('./utils/bodyScrollLock').then(({ forceBodyScrollable }) => {
      forceBodyScrollable();
    });

    // Ensure scrolling works immediately
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';

    // CRITICAL: Force position to NOT be fixed/sticky
    document.body.style.position = '';
    document.documentElement.style.position = '';

    // CRITICAL: Disable scroll-snap completely
    document.documentElement.style.scrollSnapType = 'none';
    document.body.style.scrollSnapType = 'none';
    document.documentElement.style.setProperty('scroll-snap-type', 'none', 'important');
    document.body.style.setProperty('scroll-snap-type', 'none', 'important');

    // Chrome-specific: Ensure smooth scrolling doesn't interfere with native scroll
    document.documentElement.style.setProperty('overscroll-behavior', 'auto', 'important');
    document.body.style.setProperty('overscroll-behavior', 'auto', 'important');

    // Ensure all sections are properly positioned and not sticky
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const el = section as HTMLElement;
      if (el.style.position === 'sticky' || el.style.position === 'fixed') {
        el.style.position = 'relative';
      }
      if (el.style.minHeight === '100vh' || el.style.height === '100vh') {
        el.style.minHeight = 'auto';
        el.style.height = 'auto';
      }
    });

    // Force scroll height calculation after DOM is ready
    requestAnimationFrame(() => {
      void document.body.offsetHeight;
      void document.documentElement.scrollHeight;
      // Trigger reflow to ensure Chrome calculates scroll properly
      window.scrollTo(window.scrollX, window.scrollY);
    });

    // Load fonts
    loadFonts(defaultFontConfig).catch(console.error);
  }, []);

  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToElement(href);
    }
  };

  const navigationLinks = [
    { label: 'What We Do', href: '#what-we-do', onClick: () => handleNavClick('#what-we-do') },
    { label: 'What We Think', href: '#what-we-think', onClick: () => handleNavClick('#what-we-think') },
    { label: 'About Fraylon', href: '#about-fraylon', onClick: () => handleNavClick('#about-fraylon') },
    { label: 'Careers', href: '#careers', onClick: () => handleNavClick('#careers') },
    { label: 'Contact Us', href: '#contact-us', onClick: () => handleNavClick('#contact-us') },
  ];

  // CardNav mobile navigation items
  const cardNavItems = [
    {
      label: "Services",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "What We Do", href: "/services", ariaLabel: "View our services" },
        { label: "Portfolio", href: "/projects", ariaLabel: "View our portfolio" },
        { label: "Contact", href: "#contact-us", ariaLabel: "Contact us" }
      ]
    },
    {
      label: "Company",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "About Us", href: "#about-fraylon", ariaLabel: "About Fraylon" },
        { label: "Careers", href: "#careers", ariaLabel: "View careers" },
        { label: "Blog", href: "#what-we-think", ariaLabel: "Read our blog" }
      ]
    },
    {
      label: "Connect",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/company/fraylontech", ariaLabel: "Visit LinkedIn" },
        { label: "Twitter", href: "https://twitter.com", ariaLabel: "Visit Twitter" },
        { label: "Instagram", href: "https://www.instagram.com/fraylontech/", ariaLabel: "Visit Instagram" }
      ]
    }
  ];

  // Dropdown menu items with sections for comprehensive service layout
  const whatWeDoSections = [
    {
      title: 'NO CODE DEVELOPMENT',
      items: [
        { label: 'WordPress Development', href: '/services/wordpress-development' },
        { label: 'Webflow Development', href: '/services/webflow-development' },
        { label: 'Wix Development', href: '/services/wix-development' },
        { label: 'Shopify Development', href: '/services/shopify-development' },
        { label: 'Magento Development', href: '/services/magento-development' },
        { label: 'Bubble.io Development', href: '/services/bubble-development' },
        { label: 'Framer Development', href: '/services/framer-development' },
        { label: 'Dora Development', href: '/services/dora-development' },
        { label: 'Studio AI Development', href: '/services/studio-ai-development' },
      ]
    },
    {
      title: 'CUSTOM DEVELOPMENT',
      items: [
        { label: 'Software Development', href: '/services/software-development' },
        { label: 'Web Application Development', href: '/services/web-development' },
        { label: 'Custom Website & CMS Development', href: '/services/custom-cms-development' },
        { label: 'Enterprise Portals & Dashboards', href: '/services/enterprise-portals' },
        { label: 'eCommerce Website Development', href: '/services/ecommerce-development' },
      ]
    },
    {
      title: 'DESIGN SERVICES',
      items: [
        { label: 'UI/UX & Product Design', href: '/services/ui-ux-design' },
        { label: 'Branding & Visual Identity', href: '/services/branding-design' },
        { label: 'Graphic Design', href: '/services/graphic-design' },
      ]
    },
    {
      title: 'MARKETING SERVICES',
      items: [
        { label: 'Inbound Marketing & Content Strategy', href: '/services/inbound-marketing' },
        { label: 'SEO Services', href: '/services/seo-services' },
        { label: 'Social Media & Paid Advertising', href: '/services/digital-marketing' },
      ]
    },
    {
      title: 'IT SOLUTIONS',
      items: [
        { label: 'Digital Transformation', href: '/services/digital-transformation' },
        { label: 'IT Staff Augmentation', href: '/services/staff-augmentation' },
        { label: 'Technology Consulting', href: '/services/technology-consulting' },
        { label: 'Maintenance & Support Services', href: '/services/maintenance-support' },
      ]
    },
    {
      title: 'AI & DATA SCIENCE',
      items: [
        { label: 'AI Integration & Strategy Consulting', href: '/services/ai-integration' },
        { label: 'AI Agents Development', href: '/services/ai-agents-development' },
        { label: 'Natural Language Processing (NLP) Solutions', href: '/services/nlp-solutions' },
      ]
    },
    {
      title: 'MOBILE APP DEVELOPMENT',
      items: [
        { label: 'Native Mobile App', href: '/services/native-mobile-app' },
        { label: 'Hybrid Mobile App', href: '/services/mobile-app-development' },
      ]
    },
    {
      title: 'ZERO TO ONE',
      items: [
        { label: 'MVP Development', href: '/services/mvp-development' },
        { label: 'Rapid Prototyping', href: '/services/rapid-prototyping' },
      ]
    }
  ];

  const whatWeThinkSections = [
    {
      title: 'Solutions',
      items: [
        { label: 'E‑commerce Marketplace', href: '/solutions/ecommerce-marketplace' },
        { label: 'School Management Software', href: '/solutions/school-management' },
        { label: 'Hospital Management System', href: '/solutions/hospital-management' },
        { label: 'HR and Payroll Systems', href: '/solutions/hr-payroll' },
        { label: 'CRM Solutions', href: '/solutions/crm-solutions' },
        { label: 'Inventory Management Solutions', href: '/solutions/inventory-management' },
        { label: 'Content Management Systems (CMS)', href: '/solutions/cms-development' },
        { label: 'Learning Management System (LMS)', href: '/solutions/lms' },
        { label: 'Appointment Scheduling Software', href: '/solutions/appointment-scheduling' },
        { label: 'Point of Sale (POS) Systems', href: '/solutions/pos-systems' },
        { label: 'Event Management Solutions', href: '/solutions/event-management' }
      ]
    },
    {
      title: 'Industries',
      items: [
        { label: 'E‑commerce', href: '/industries/ecommerce' },
        { label: 'AI & Machine Learning', href: '/industries/ai-ml' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Financial Services', href: '/industries/financial-services' },
        { label: 'Education', href: '/industries/education' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Real Estate', href: '/industries/real-estate' },
        { label: 'Travel and Hospitality', href: '/industries/travel-hospitality' },
        { label: 'Professional Services', href: '/industries/professional-services' },
        { label: 'Startups & SMBs', href: '/industries/startups-smbs' },
        { label: 'Non‑Profit', href: '/industries/non-profit' }
      ]
    },
    {
      title: 'SaaS',
      items: [
        {
          label: 'Micro SaaS',
          href: '/services',
          image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=240&q=80',
          description: 'A micro SaaS is a small-scale software as a service business usually operated by an individual or a small team.'
        },
        { label: 'AI Powered SaaS Tools', href: '/services/ai-agents-development' },
        { label: 'Resources', href: '/disclaimer', external: true }
      ]
    }
  ];

  const aboutFraylonSections = [
    {
      title: 'Company Overview',
      items: [
        { label: 'Company History', href: '/about' },
        { label: 'Leadership', href: '/about#leadership' }
      ]
    },
    {
      title: 'Quick Links',
      items: [
        { label: 'Events', href: '/services' },
        { label: 'Global Expertise', href: '/services' },
        { label: 'Locations', href: '/services' },
        { label: 'Subscription Center', href: '/services' },
        { label: 'About Us', href: '/about' },
        { label: 'Career', href: '/careers' },
        { label: 'Blog', href: '/services' },
        { label: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Fraylon GPT ✨',
      items: [
        {
          label: 'What is Fraylon GPT ✨?',
          href: '/services',
          image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=320&q=80',
          description: 'Your ultimate guide to digital business transformation'
        },
        { label: 'Free AI Tools', href: '#', type: 'header' },
        { label: 'Company Research Tool', href: '/services' },
        { label: 'Prospect Research Tool', href: '/services' }
      ]
    },
    {
      title: 'Media',
      items: [
        { label: 'Newsroom', href: '/about' },
        { label: 'Analyst Relations', href: '/about' }
      ]
    }
  ];

  const careersSections = [
    {
      title: 'Join Our Team',
      items: [
        { label: 'Life at Fraylon', href: '#life-at-fraylon' },
        { label: 'Campus Hiring', href: '#campus-hiring' },
        { label: 'Diversity & Inclusion', href: '#diversity' },
      ]
    },
    {
      title: 'Growth & Development',
      items: [
        { label: 'Learning Programs', href: '#learning-programs' },
        { label: 'Career Paths', href: '#career-paths' },
        { label: 'Mentorship', href: '#mentorship' },
        { label: 'Employee Benefits', href: '#employee-benefits' },
      ]
    }
  ];

  const HomePage = () => (
    <>
      <div style={{ height: '110px' }} />
      <PageTransition>
        <main style={{ paddingTop: '0px', height: 'auto', overflowY: 'visible' }}>
          {/* Hero Section - Portfolio Design */}
          <div id="home">
            <OriginalHero
              title="We Build Digital Products & Experiences"
              showLaserFlow={true}
              videoSrc="/videos/hero-background-3.mp4"
              actions={
                <div className={styles.heroActionsContainer}>
                  <div className={styles.splitCta}>
                    <span className={styles.splitCtaText}>View Our Work</span>
                    <Link to="/projects" className={styles.splitCtaArrow} aria-label="View Our Work"></Link>
                  </div>
                  <Button variant="secondary" size="large">
                    Start Project
                  </Button>
                </div>
              }
              bottomContent={
                <div className={styles.heroBottomContainer}>
                  <p style={{ lineHeight: '1.6', color: '#ffffff', fontSize: '14px', fontWeight: '500', maxWidth: '400px', margin: '0', flex: '1', opacity: 1, position: 'relative', zIndex: 10, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    We are a global technology services firm specializing in digital transformation, consulting, and business solutions. We partner with enterprises to drive innovation and growth through next-generation technologies.
                  </p>
                  <div className={styles.heroDivider}></div>
                  <div style={{ display: 'flex', gap: '25px', flex: '1' }}>
                    <div className={styles.heroList}>
                      <div>Software Engineering</div>
                      <div>UI/UX Design</div>
                      <div>Cloud Solutions</div>
                    </div>
                    <div className={styles.heroDivider}></div>
                    <div className={styles.heroList}>
                      <div>E-commerce</div>
                      <div>Mobile Apps</div>
                      <div>Digital Strategy</div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>



          {/* Client Logos Section - Moved to appear right after hero */}
          <div className={clientStyles.clientsSection} style={{ paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Container>
                <div className={clientStyles.clientsTitle}>Trusted by Industry Leaders</div>
              </Container>
              <ClientLogos
                logos={[
                  { name: 'Client 1', logo: '/678533eb71a46e7e23eaeb9e_8.svg' },
                  { name: 'Client 2', logo: '/678533ec0d4b3e4f802bcefc_6.svg' },
                  { name: 'Client 3', logo: '/678533ec0d4b3e4f802bcf03_5.svg' },
                  { name: 'Client 4', logo: '/678533ec0e72f8500a198449_3.svg' },
                  { name: 'Client 5', logo: '/678533ec19665507a8e29cc5_11.svg' },
                  { name: 'Client 6', logo: '/678533ec33275b34a6200f7c_4.svg' },
                  { name: 'Client 7', logo: '/678533ec7d737bc4bb39d442_2.svg' },
                  { name: 'Client 8', logo: '/678533ec9dd1d4db7747af89_10.svg' },
                  { name: 'Client 9', logo: '/678539c0e48341a80dc07dcb_VT Website Logo 1.svg' },
                ]}
                speed={30}
              />
            </div>
          </div>

          {/* About Section */}
          <Section
            id="about-fraylon"
          >
            <Container>
              <div style={{ marginBottom: '60px' }}>
                <Reveal width="100%">
                  <h2 style={{ marginTop: '10px', color: 'var(--title)' }}>Our Story</h2>
                </Reveal>
              </div>

              <Grid cols={2} gap={60}>
                <div>
                  <h3 style={{ marginBottom: '20px' }}>Our Journey</h3>
                  <p style={{ lineHeight: '1.6' }}>
                    Founded with a vision to transform businesses through innovative digital solutions,
                    Fraylon has grown from a small startup to a leading technology consultancy. Our journey
                    began with a simple belief: that technology should empower businesses to achieve
                    their greatest potential.
                  </p>
                  <p style={{ lineHeight: '1.6' }}>
                    Over the years, we have partnered with companies across industries, helping them
                    navigate digital transformation and build sustainable competitive advantages through
                    cutting-edge technology solutions.
                  </p>
                </div>

                <div>
                  <h3 style={{ marginBottom: '20px' }}>Our Vision</h3>
                  <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                    To empower businesses with innovative technology solutions that drive growth,
                    efficiency, and meaningful customer experiences. We believe in creating lasting
                    partnerships built on trust, expertise, and shared success.
                  </p>
                  <div style={{ marginTop: '30px' }}>
                    <div className={styles.splitCta}>
                      <span className={styles.splitCtaText}>Learn More About Us</span>
                      <Link to="/about" className={styles.splitCtaArrow} aria-label="Learn More"></Link>
                    </div>
                  </div>
                </div>
              </Grid>
            </Container>
          </Section>

          {/* Work Portfolio Section */}
          {/* Work Portfolio Section - Hidden temporarily
          <Section
            id="work"
          >
            <Container>
              <div style={{ marginBottom: '60px' }}>
                <Reveal>
                  <div className={styles.subtitle}>Featured Work</div>
                  <h2 style={{ marginTop: '10px' }}>Recent Projects</h2>
                </Reveal>
              </div>
              <div className={styles.workList}>
                <WorkCard
                  title="E-COMMERCE PLATFORM DESIGN"
                  category="WEB DEVELOPMENT"
                  image="/E-Commerce Website/image.png"
                  href="/projects/project-1"
                />
                <WorkCard
                  title="INNOVATIVE BIM SERVICES"
                  category="WEB DEVELOPMENT"
                  image="/BIM Services Project/image.png"
                  href="/projects/project-2"
                />
                <WorkCard
                  title="SRI SAI DIGITAL PHOTO STUDIO"
                  category="WEB DEVELOPMENT"
                  image="/digital photo studio/image.png"
                  href="/projects/project-3"
                />
                <WorkCard
                  title="SaaS Dashboard"
                  category="Product Design"
                  image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                  href="/projects/project-4"
                />
              </div>
              <div style={{
                textAlign: 'center',
                marginTop: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div className={styles.splitCta}>
                  <span className={styles.splitCtaText}>View All Projects</span>
                  <Link to="/projects" className={styles.splitCtaArrow} aria-label="View All Projects"></Link>
                </div>
              </div>
            </Container>
          </Section>
          */}

          {/* Services Section */}
          <Section
            id="services"
            className={layoutStyles.sectionFullWidth}
          >
            <ResponsiveServices />
          </Section>



          {/* Testimonials Section with Marquee */}
          <TestimonialsMarquee
            title="Trusted by Industry Leaders Worldwide"
            description="Join thousands of companies who have transformed their digital presence with our expertise"
            testimonials={homePageTestimonials}
          />



          {/* Contact Section */}
          <Section small id="contact">
            <Container>
              <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                <div
                  className={styles.subtitle}
                  style={{
                    backgroundImage: 'none',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  Get In Touch
                </div>
                <h2 style={{ marginTop: '10px' }}>Contact Us</h2>
                <p style={{ marginTop: '20px', fontSize: '18px', maxWidth: '600px', margin: '20px auto 0' }}>
                  Ready to start your project? Get in touch with us today or visit one of our offices worldwide.
                </p>
              </div>
              <Grid cols={2} gap={60} style={{ alignItems: 'stretch' }}>
                <div style={{ minHeight: '1100px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <iframe
                    aria-label="Get In Touch"
                    frameBorder="0"
                    scrolling="no"
                    style={{
                      height: '1100px',
                      width: '100%',
                      border: 'none',
                      display: 'block',
                      overflow: 'hidden',
                    }}
                    src="https://forms.zohopublic.in/asntechnologies1/form/SimpleContactUs/formperma/dxd6LroASMB8s6-lQ9OXMkCW-oHQxhOjsvYNPkNS-Zo"
                  />
                </div>
                <div style={{ minHeight: '1100px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <h3 style={{ marginBottom: '30px', fontSize: '24px' }}>Why Reach Out?</h3>
                  <ul style={{ paddingLeft: 22, marginBottom: 20, fontSize: '16px', lineHeight: 1.7 }}>
                    <li>Get a free expert consultation for your project.</li>
                    <li>Quick response within one business day.</li>
                    <li>No obligation, 100% confidential inquiry.</li>
                    <li>We’ll help you plan, estimate, and execute your idea.</li>
                  </ul>
                  <div style={{ color: 'var(--blue-primary)', fontSize: '17px', fontWeight: 500, textAlign: 'center', marginTop: 16 }}>
                    We look forward to collaborating with you!
                  </div>
                  <div style={{ marginTop: 40 }}>
                    <h3 style={{ marginBottom: '20px', fontSize: '22px' }}>Find Us</h3>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4594429928002!2d72.8397319148953!3d19.12690078705614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b792fe6c7e6f%3A0xa1e5ce723a0cb5f2!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="180"
                      style={{ border: 0, borderRadius: 12 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Our Office Map"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
                      alt="FraylonTech: Creative Digital Workspace"
                      style={{
                        width: '100%',
                        borderRadius: 12,
                        marginTop: 20,
                        height: 300,
                        objectFit: 'cover',
                        boxShadow: '0 2px 8px rgba(60,60,90,0.10)'
                      }}
                    />
                  </div>
                </div>
              </Grid>
            </Container>
          </Section>

        </main>
      </PageTransition>

      {/* Footer removed from HomePage; now rendered globally below Routes */}
    </>
  );

  return (
    <div className="app">
      <ScrollToTop />
      {/* Desktop Navigation - visible on screens > 768px */}
      <Navigation
        brand={
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <TypingBrand
              className={styles.animatedBrand}
              onAnimationComplete={() => console.log('Navbar typing animation completed!')}
            />
          </Link>
        }
        links={navigationLinks}
        dropdownMenus={{
          whatWeDo: whatWeDoSections,
          whatWeThink: whatWeThinkSections,
          aboutFraylon: aboutFraylonSections,
          careers: careersSections
        }}
        actions={
          <Flex gap="xl">
            <Button variant="nav-primary" size="small">
              Let's Talk
            </Button>
          </Flex>
        }
        mobileActions={
          <>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <Button variant="nav-primary" size="small" mobileMenu={true}>
                Blog
              </Button>
              <Button variant="nav-primary" size="small" mobileMenu={true}>
                Let's Talk
              </Button>
            </div>
            <div style={{ marginTop: '20px', marginBottom: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
              <a href="https://www.linkedin.com/company/fraylontech" target="_blank" rel="noopener noreferrer" style={{ color: '#374151', textDecoration: 'none', fontSize: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#374151', textDecoration: 'none', fontSize: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/fraylontech/" target="_blank" rel="noopener noreferrer" style={{ color: '#374151', textDecoration: 'none', fontSize: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </>
        }
      />

      {/* Mobile CardNav - visible only on screens <= 768px */}
      <CardNav
        logo={logoImage}
        logoAlt="Fraylon Technologies Logo"
        items={cardNavItems}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#6366f185"
        buttonTextColor="#000"
        ease="power3.out"
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Existing Services */}
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UIDesign />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/services/shopify-development" element={<ShopifyDevelopment />} />
          <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/services/technology-consulting" element={<TechnologyConsulting />} />
          <Route path="/services/ai-agents-development" element={<AIAgentsDevelopment />} />
          <Route path="/services/mvp-development" element={<MVPDevelopment />} />

          {/* No-Code Development */}
          <Route path="/services/webflow-development" element={<WebflowDevelopment />} />
          <Route path="/services/wix-development" element={<WixDevelopment />} />
          <Route path="/services/magento-development" element={<MagentoDevelopment />} />
          <Route path="/services/bubble-development" element={<BubbleDevelopment />} />
          <Route path="/services/framer-development" element={<FramerDevelopment />} />
          <Route path="/services/dora-development" element={<DoraDevelopment />} />
          <Route path="/services/studio-ai-development" element={<StudioAIDevelopment />} />

          {/* Custom Development */}
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/custom-cms-development" element={<CustomCMSDevelopment />} />
          <Route path="/services/enterprise-portals" element={<EnterprisePortals />} />

          {/* Design Services */}
          <Route path="/services/branding-design" element={<BrandingDesign />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />

          {/* Marketing Services */}
          <Route path="/services/inbound-marketing" element={<InboundMarketing />} />
          <Route path="/services/seo-services" element={<SEOServices />} />

          {/* IT Solutions */}
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/services/maintenance-support" element={<MaintenanceSupport />} />

          {/* AI & Data Science */}
          <Route path="/services/ai-integration" element={<AIIntegration />} />
          <Route path="/services/nlp-solutions" element={<NLPSolutions />} />

          {/* Solutions Routes */}
          <Route path="/solutions/school-management" element={<SchoolManagement />} />
          <Route path="/solutions/hospital-management" element={<HospitalManagement />} />
          <Route path="/solutions/hr-payroll" element={<HRPayroll />} />
          <Route path="/solutions/crm-solutions" element={<CRMSolutions />} />
          <Route path="/solutions/inventory-management" element={<InventoryManagement />} />
          <Route path="/solutions/lms" element={<LMS />} />
          <Route path="/solutions/appointment-scheduling" element={<AppointmentScheduling />} />
          <Route path="/solutions/pos-systems" element={<POSSystems />} />
          <Route path="/solutions/event-management" element={<EventManagement />} />
          <Route path="/solutions/cms-development" element={<ContentManagementSystems />} />
          <Route path="/solutions/ecommerce-marketplace" element={<EcommerceMarketplace />} />

          {/* Industries Routes */}
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/travel-hospitality" element={<TravelHospitality />} />
          <Route path="/industries/professional-services" element={<ProfessionalServices />} />
          <Route path="/industries/non-profit" element={<NonProfit />} />
          <Route path="/industries/ecommerce" element={<EcommerceIndustry />} />
          <Route path="/industries/ai-ml" element={<AIMLIndustry />} />
          <Route path="/industries/startups-smbs" element={<StartupsSMBs />} />

          {/* Mobile App Development */}
          <Route path="/services/native-mobile-app" element={<NativeMobileApp />} />

          {/* Zero to One */}
          <Route path="/services/rapid-prototyping" element={<RapidPrototyping />} />


        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App
