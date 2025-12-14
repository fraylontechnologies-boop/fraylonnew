import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollUtils';
import styles from '../styles/components.module.css';

const AnimatedServices: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to get service link based on title
  const getServiceLink = (title: string) => {
    const linkMap: { [key: string]: string } = {
      'Web Development': '/services/web-development',
      'UI/UX Design': '/services/ui-ux-design',
      'Mobile Apps': '/services/mobile-app-development',
      'E-commerce': '/services/ecommerce-development',
      'WordPress Development': '/services/wordpress-development',
      'Digital Marketing': '/services/digital-marketing',
      'Technology Consulting': '/services/technology-consulting'
    };
    return linkMap[title] || '/services';
  };

  // Handle service click with scroll to top
  const handleServiceClick = () => {
    scrollToTop();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      detailedDescription: 'We create responsive, fast, and scalable web applications using React, Node.js, and cloud technologies. Our solutions are optimized for performance and user experience.',
      image: '/images/services/web-development.jpg',
      additionalImages: [
        '/images/services/web-development.jpg',
        '/images/services/web-development.jpg'
      ]
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging digital experiences',
      detailedDescription: 'Our design team focuses on creating intuitive interfaces that users love. We conduct user research, create wireframes, and design beautiful, functional interfaces.',
      image: '/images/services/ui-ux-design.jpg',
      additionalImages: [
        '/images/services/ui-ux-design.jpg',
        '/images/services/ui-ux-design.jpg'
      ]
    },
    {
      title: 'Mobile Apps',
      description: 'Native and hybrid mobile applications for iOS and Android',
      detailedDescription: 'We develop cross-platform mobile apps using React Native and Flutter, ensuring your app works seamlessly across all devices with native performance.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      additionalImages: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop'
      ]
    },
    {
      title: 'E-commerce',
      description: 'Complete online store solutions with payment integration',
      detailedDescription: 'Build powerful e-commerce platforms with secure payment processing, inventory management, and analytics. We integrate with major payment gateways and shipping providers.',
      image: '/images/services/ecommerce.webp',
      additionalImages: [
        '/images/services/ecommerce.webp',
        '/images/services/ecommerce.webp'
      ]
    },
    {
      title: 'WordPress Development',
      description: 'Create powerful WordPress websites with custom themes and plugins',
      detailedDescription: 'We build custom WordPress solutions with tailored themes, plugins, and functionality. Our WordPress development ensures your site is fast, secure, and optimized for performance.',
      image: '/images/services/wordpress.jpg',
      additionalImages: [
        '/images/services/wordpress.jpg',
        '/images/services/wordpress.jpg'
      ]
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to boost your online presence',
      detailedDescription: 'Our marketing experts help you reach your target audience through SEO, social media marketing, content strategy, and data-driven campaigns that deliver results.',
      image: '/images/services/digitalmarketing.jpeg',
      additionalImages: [
        '/images/services/digitalmarketing.jpeg',
        '/images/services/digitalmarketing.jpeg'
      ]
    },
    {
      title: 'Technology Consulting',
      description: 'Expert guidance on technology strategy and digital transformation',
      detailedDescription: 'We help businesses navigate digital transformation with strategic planning, technology audits, and implementation roadmaps tailored to your business goals.',
      image: '/images/services/technologyconsulting.jpg',
      additionalImages: [
        '/images/services/technologyconsulting.jpg',
        '/images/services/technologyconsulting.jpg'
      ]
    }
  ];

  return (
    <div className={styles.virushaServices}>
      <div className={styles.twoColumnLayout}>
        {/* Left Column - Header Content */}
        <div className={styles.leftColumn}>
          <div className={styles.virushaServicesHeader}>
            <div className={styles.virushaSubtitle}>WHAT WE DO</div>
            <h2 className={styles.virushaTitle}>OUR SERVICES</h2>
            <div
              ref={imageRef}
              className={`${styles.mainImageContainer} ${isVisible ? styles.slideInFromLeft : ''}`}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Our Services"
                className={styles.heroImage}
              />
            </div>
            <p className={styles.virushaDescription}>
              In today's fast-paced digital landscape, having a tailored strategy that aligns with your brand's identity is crucial. We focus on creating solutions that enhance your online presence.
            </p>
            <div className={styles.splitCta}>
              <span className={styles.splitCtaText}>View All Services</span>
              <Link to="/services" className={styles.splitCtaArrow} aria-label="View All Services"></Link>
            </div>
          </div>
        </div>

        {/* Right Column - Services List */}
        <div className={styles.rightColumn}>
          <div className={styles.servicesIntro}>
            <p>We are dedicated to delivering comprehensive solutions designed to propel your brand forward in the digital world. Our approach is rooted in a deep understanding of your unique needs.</p>
          </div>
          <div className={styles.simpleServicesList}>
            {services.map((service, index) => (
              <Link
                key={index}
                to={getServiceLink(service.title)}
                onClick={handleServiceClick}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block'
                }}
              >
                <div className={styles.simpleServiceItem} style={{ cursor: 'pointer' }}>
                  <div className={styles.simpleServiceText}>
                    <h3>{service.title}</h3>
                  </div>
                  <div className={styles.simpleServiceImage}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={styles.singleImage}
                      onLoad={() => console.log(`Image loaded for ${service.title}`)}
                      onError={() => console.log(`Image failed to load for ${service.title}`)}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedServices;
