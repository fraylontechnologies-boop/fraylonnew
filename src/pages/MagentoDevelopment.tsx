import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const MagentoDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Magento Development",
    subtitle: "Enterprise-Grade E-commerce Solutions with Magento",
    description: "We build scalable, feature-rich e-commerce platforms using Magento. From custom extensions to full platform implementations, we deliver enterprise-level e-commerce solutions.",
    ctaText: "Start Your Magento Project",
    ctaLink: "/contact",
    
    advantages: [
      "Certified Magento developers – Official Magento partners with proven expertise in e-commerce",
      "Enterprise e-commerce expertise – Experience building large-scale online stores handling millions in revenue",
      "Scalable solutions for growth – Architecture designed to grow with your business expansion",
      "Custom module development – Tailored extensions for unique business requirements and workflows"
    ],
    
    features: [
      "Magento 2 Development",
      "Custom Extension Development",
      "Theme Customization",
      "Performance Optimization",
      "Magento Migration",
      "Multi-store Setup"
    ],
    
    services: [
      {
        title: "Magento Store Development",
        description: "Complete e-commerce stores built on Magento 2 platform with custom features and integrations."
      },
      {
        title: "Custom Extensions",
        description: "Tailored Magento extensions to meet your specific business requirements and enhance functionality."
      },
      {
        title: "Magento Optimization",
        description: "Performance tuning and optimization for faster page loads, better SEO, and improved conversions."
      }
    ],
    
    industries: [
      "Enterprise E-commerce",
      "B2B Platforms",
      "Multi-vendor Marketplaces",
      "Fashion & Retail",
      "Consumer Electronics"
    ],
    
    deliverables: [
      "Magento 2 store – Fully functional e-commerce platform with product catalog and checkout system",
      "Custom theme design – Responsive, brand-aligned storefront optimized for conversions",
      "Payment gateway integration – Multiple payment methods including cards, PayPal, and local options",
      "Shipping configuration – Integrated shipping carriers with real-time rates and tracking",
      "Multi-store setup – Multiple storefronts from single admin for different brands or regions",
      "Custom extensions – Tailored modules for unique business logic and features",
      "Performance optimization – Caching, CDN setup, and code optimization for fast loading",
      "SEO configuration – URL rewrites, meta tags, sitemaps, and rich snippets for search visibility",
      "Security hardening – PCI compliance, SSL setup, and security best practices implementation",
      "Admin training – Comprehensive training for managing products, orders, and store settings"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Planning & Design",
        description: "Requirements gathering and custom theme design for Magento store.",
        duration: "2-3 weeks"
      },
      {
        title: "Development",
        description: "Building Magento store with custom features and extensions.",
        duration: "6-10 weeks"
      },
      {
        title: "Testing & Optimization",
        description: "Quality assurance, performance optimization, and security testing.",
        duration: "2 weeks"
      },
      {
        title: "Launch & Support",
        description: "Production deployment and post-launch support.",
        duration: "1-2 weeks"
      }
    ],
    
    team: [
      {
        name: "Nalluri Vigneswar",
        role: "CEO",
        description: "Leading the company with a vision for innovation and growth, driving strategic initiatives for success."
      },
      {
        name: "Aisha Kapoor",
        role: "Executive Assistant",
        description: "Provides vital support to the CEO, ensuring smooth operations with excellent organizational skills."
      },
      {
        name: "Priya Anand",
        role: "CMO",
        description: "Responsible for executing marketing strategies that elevate brand visibility and customer engagement."
      },
      {
        name: "Daniel Carter",
        role: "COO",
        description: "Oversees daily operations and ensures company processes are efficient, fostering collaboration."
      }
    ],
    
    faqs: [
      {
        question: "Why choose Magento for e-commerce?",
        answer: "Magento is ideal for large-scale e-commerce with advanced features, scalability, and customization options."
      },
      {
        question: "Can you migrate from Magento 1 to Magento 2?",
        answer: "Yes, we specialize in seamless migrations from Magento 1 to Magento 2 with data preservation."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default MagentoDevelopment;
