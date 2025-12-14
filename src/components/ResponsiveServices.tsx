import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceCarousel, type Service } from '@/components/ui/services-card';
import AnimatedServices from '@/components/AnimatedServices';

import styles from '@/styles/components.module.css';
import { Code, Palette, Search, Smartphone, Globe, BarChart3 } from 'lucide-react';

// Convert your existing services to ServiceCarousel format
const servicesForCarousel: Service[] = [
  {
    number: "001",
    title: "Web Development",
    description: "Beautiful and functional websites built with purpose and precision.",
    icon: Code,
    gradient: "from-[var(--secondary)] to-[var(--blue-primary)] dark:from-[var(--blue-primary-hover)] dark:to-[#000000]",
    href: "/services/web-development",
    image: "/images/mobile services section/web development.jpeg",
  },
  {
    number: "002",
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces designed for seamless user experiences.",
    icon: Palette,
    gradient: "from-[var(--secondary)] to-[var(--blue-primary)] dark:from-[var(--blue-primary-hover)] dark:to-[#000000]",
    href: "/services/ui-ux-design",
    image: "/images/mobile services section/ui ux design.jpeg",
  },
  {
    number: "003",
    title: "SEO Optimization",
    description: "Get found faster with tailored SEO strategies backed by real data.",
    icon: Search,
    gradient: "from-[var(--secondary)] to-[var(--blue-primary)] dark:from-[var(--blue-primary-hover)] dark:to-[#000000]",
    href: "/services/seo-services",
    image: "/images/mobile services section/seo optimization.jpeg",
  },
  {
    number: "004",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional experiences.",
    icon: Smartphone,
    gradient: "from-[var(--secondary)] to-[var(--blue-primary)] dark:from-[var(--blue-primary-hover)] dark:to-[#000000]",
    href: "/services/mobile-app-development",
    image: "/images/mobile services section/mobile apps.jpeg",
  },
  {
    number: "005",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that grow your audience and boost conversions.",
    icon: BarChart3,
    gradient: "from-[var(--secondary)] to-[var(--blue-primary)] dark:from-[var(--blue-primary-hover)] dark:to-[#000000]",
    href: "/services/digital-marketing",
    image: "/images/mobile services section/digital marketing.jpeg",
  },
  {
    number: "006",
    title: "Branding",
    description: "We craft logos and brand systems that leave a lasting impression.",
    icon: Globe,
    gradient: "from-[var(--secondary)] to-[var(--blue-primary)] dark:from-[var(--blue-primary-hover)] dark:to-[#000000]",
    href: "/services/branding-design",
    image: "/images/mobile services section/branding.jpg",
  },
];

/**
 * Responsive Services Component
 * Shows ServiceCarousel on mobile (≤768px) and AnimatedServices on desktop
 */
const ResponsiveServices = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  if (isMobile) {
    return (
      <div className="w-full bg-background flex flex-col items-center justify-center py-8 px-4">
        <div className="text-left w-full max-w-6xl mb-8">
          <div className="text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-2">
            WHAT WE DO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Our Services</h2>
        </div>
        <ServiceCarousel services={servicesForCarousel} />

        {/* View All Services Button */}
        <div className="w-full max-w-6xl mt-8 px-4">
          <div className={styles.splitCta}>
            <span className={styles.splitCtaText}>View All Services</span>
            <Link
              to="/services"
              className={styles.splitCtaArrow}
              aria-label="View All Services"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
            ></Link>
          </div>
        </div>
      </div>
    );
  }

  // Desktop: Use existing AnimatedServices component
  return <AnimatedServices />;
};

export default ResponsiveServices;

