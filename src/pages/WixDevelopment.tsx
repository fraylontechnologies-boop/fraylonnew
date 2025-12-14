import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const WixDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Wix Development",
    subtitle: "Build Professional Websites Quickly with Wix's User-Friendly Platform",
    description: "We create custom Wix websites for businesses of all sizes. From simple landing pages to complex business sites, we leverage Wix's powerful tools to deliver stunning, functional websites.",
    ctaText: "Start Your Wix Project",
    ctaLink: "/contact",
    
    advantages: [
      "Certified Wix Partners – Official Wix experts with verified credentials and experience",
      "Fast development and deployment – Launch professional websites in weeks, not months",
      "Cost-effective solutions – Affordable development without compromising on quality",
      "Easy-to-manage websites – Intuitive platform allowing you to make updates independently"
    ],
    
    features: [
      "Wix Website Development",
      "Wix E-commerce",
      "Custom Wix Apps",
      "Wix SEO Optimization",
      "Wix Velo Development",
      "Wix Redesign"
    ],
    
    services: [
      {
        title: "Custom Wix Design",
        description: "Professional Wix websites tailored to your brand and business goals with custom layouts."
      },
      {
        title: "Wix E-commerce Setup",
        description: "Complete online store setup with product management, payment integration, and shipping options."
      },
      {
        title: "Wix Velo Development",
        description: "Advanced functionality using Wix Velo (formerly Corvid) for custom features and integrations."
      }
    ],
    
    industries: [
      "Small Business Websites",
      "E-commerce Stores",
      "Portfolio Sites",
      "Restaurant & Hospitality",
      "Professional Services"
    ],
    
    deliverables: [
      "Custom Wix website – Professional site with brand-aligned design and responsive layout",
      "E-commerce store setup – Complete online shop with products, payments, and shipping",
      "Custom Wix Velo code – Advanced features and functionality using JavaScript",
      "Mobile optimization – Fully responsive design optimized for smartphones and tablets",
      "SEO configuration – Optimized meta tags, URLs, and site structure for search engines",
      "Contact forms – Integrated forms with email notifications and lead capture",
      "Social media integration – Connected social profiles and sharing capabilities",
      "Google Analytics setup – Tracking code implementation for visitor insights",
      "Training materials – Video tutorials and documentation for managing your Wix site",
      "Ongoing support – Post-launch assistance and maintenance services"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Planning & Design",
        description: "Understanding requirements and creating custom Wix design.",
        duration: "3-5 days"
      },
      {
        title: "Development",
        description: "Building site with Wix Editor and custom Velo code.",
        duration: "1-2 weeks"
      },
      {
        title: "Content & SEO",
        description: "Adding content and optimizing for search engines.",
        duration: "3-5 days"
      },
      {
        title: "Launch & Training",
        description: "Going live and training on Wix platform management.",
        duration: "2-3 days"
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
        question: "Is Wix suitable for business websites?",
        answer: "Yes! Wix is perfect for small to medium businesses, offering professional templates and powerful features."
      },
      {
        question: "Can I sell products on Wix?",
        answer: "Absolutely! Wix has robust e-commerce capabilities for online stores of all sizes."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default WixDevelopment;
