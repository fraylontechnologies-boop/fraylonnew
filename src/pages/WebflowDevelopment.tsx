import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const WebflowDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Webflow Development",
    subtitle: "Create Stunning, Responsive Websites with Webflow's Visual Development Platform",
    description: "We build custom, responsive websites using Webflow's powerful visual development platform. From marketing sites to complex web applications, we deliver pixel-perfect designs with clean, production-ready code.",
    ctaText: "Start Your Webflow Project",
    ctaLink: "/contact",
    
    advantages: [
      "Expert Webflow developers certified by Webflow – Official partners with proven track record",
      "Pixel-perfect implementation of designs – Exact visual replication without compromises",
      "SEO-optimized and fast-loading websites – Built-in optimization for search and performance",
      "Custom animations and interactions – Engaging micro-interactions that enhance user experience"
    ],
    
    features: [
      "Webflow Website Development",
      "Custom CMS Integration",
      "Webflow E-commerce",
      "Animation & Interactions",
      "Responsive Design",
      "Webflow Optimization"
    ],
    
    services: [
      {
        title: "Custom Webflow Design",
        description: "Unique, responsive Webflow websites designed and developed to match your brand identity perfectly."
      },
      {
        title: "Webflow CMS Setup",
        description: "Configure and customize Webflow CMS for easy content management and updates by your team."
      },
      {
        title: "Webflow E-commerce",
        description: "Build stunning e-commerce stores with Webflow's integrated shopping platform and payment processing."
      },
      {
        title: "Webflow Migration",
        description: "Seamlessly migrate your existing website to Webflow platform with data preservation and SEO retention."
      }
    ],
    
    industries: [
      "Marketing & Agency Websites",
      "E-commerce Stores",
      "Portfolio & Creative Sites",
      "SaaS Landing Pages",
      "Corporate Websites"
    ],
    
    deliverables: [
      "Custom Webflow website – Fully responsive site with pixel-perfect design implementation",
      "Webflow CMS setup – Configured content management system for easy updates",
      "Animations library – Custom interactions and scroll-based animations",
      "SEO optimization – Meta tags, structured data, and performance optimization",
      "Responsive design – Optimized layouts for desktop, tablet, and mobile devices",
      "E-commerce integration – Shopping cart, checkout, and payment processing setup",
      "Form integrations – Contact forms with email notifications and CRM connections",
      "Third-party integrations – Connected tools like analytics, marketing, and automation",
      "Training documentation – Comprehensive guides for managing content in Webflow",
      "Webflow hosting setup – Fast, secure hosting with SSL and CDN configuration"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Discovery & Planning",
        description: "Understanding your requirements and creating a project roadmap.",
        duration: "1 week"
      },
      {
        title: "Design & Development",
        description: "Creating and implementing custom Webflow designs.",
        duration: "2-3 weeks"
      },
      {
        title: "Testing & Launch",
        description: "Quality assurance and deployment to production.",
        duration: "1 week"
      }
    ],
    
    team: [
      {
        name: "Nalluri Vigneswar",
        role: "CEO",
        description: "Leading the company with a vision for innovation and growth."
      }
    ],
    
    faqs: [
      {
        question: "What is Webflow and why should I use it?",
        answer: "Webflow is a visual web development platform that combines design, CMS, and hosting. It allows for faster development while maintaining complete design control."
      },
      {
        question: "How long does a Webflow project take?",
        answer: "Simple websites take 2-3 weeks, while complex sites with custom CMS can take 4-6 weeks."
      },
      {
        question: "Can I manage content myself after launch?",
        answer: "Yes! Webflow's CMS is intuitive and easy to use. We provide training and documentation."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default WebflowDevelopment;
