import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const FramerDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Framer Development",
    subtitle: "Design and Build Interactive Websites with Framer",
    description: "We create stunning, interactive websites using Framer's design-to-code platform. Perfect for design-forward brands that want pixel-perfect implementations with smooth animations.",
    ctaText: "Start Your Framer Project",
    ctaLink: "/contact",
    
    advantages: [
      "Expert Framer developers – Certified professionals with deep expertise in Framer development",
      "Pixel-perfect designs – Exact implementation matching your design vision without compromises",
      "Smooth animations and interactions – Fluid micro-interactions that delight and engage users",
      "Fast performance – Optimized code ensuring lightning-fast load times and smooth scrolling"
    ],
    
    features: [
      "Framer Website Development",
      "Interactive Prototypes",
      "Custom Components",
      "Animation Design",
      "CMS Integration",
      "Responsive Design"
    ],
    
    services: [
      {
        title: "Custom Framer Sites",
        description: "Beautiful, interactive websites built with Framer's powerful platform and React components."
      },
      {
        title: "Animation & Interactions",
        description: "Engaging animations and micro-interactions that delight users and enhance brand experience."
      },
      {
        title: "Framer CMS",
        description: "Dynamic content management with Framer's built-in CMS for easy updates and scalability."
      }
    ],
    
    industries: [
      "Creative Agencies",
      "Portfolio Sites",
      "Product Landing Pages",
      "Design Studios",
      "Marketing Websites"
    ],
    
    deliverables: [
      "Custom Framer website – Production-ready site with all pages, interactions, and animations implemented",
      "Interactive components – Reusable React components with smooth animations and hover effects",
      "Framer CMS setup – Configured content management system for easy content updates",
      "Responsive design – Optimized layouts for desktop, tablet, and mobile devices",
      "Animation library – Custom animation presets and interaction patterns for brand consistency",
      "Page transitions – Smooth navigation with engaging page transition effects",
      "SEO optimization – Meta tags, structured data, and performance optimization for search engines",
      "Form integrations – Connected contact forms with email notifications and CRM integration",
      "Analytics setup – Google Analytics or other tracking implementation for visitor insights",
      "Training documentation – Comprehensive guide for managing content and making updates in Framer"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Design & Planning",
        description: "Creating Framer design mockups and planning component structure.",
        duration: "1 week"
      },
      {
        title: "Development",
        description: "Building pages, components, and animations in Framer.",
        duration: "2-3 weeks"
      },
      {
        title: "CMS & Content",
        description: "Setting up CMS and populating with initial content.",
        duration: "3-5 days"
      },
      {
        title: "Launch & Training",
        description: "Deploying site and training team on Framer CMS.",
        duration: "3-5 days"
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
        question: "What makes Framer different?",
        answer: "Framer combines design tools with React components, enabling designers to create production-ready websites with advanced animations."
      },
      {
        question: "Can I update content myself in Framer?",
        answer: "Yes! Framer has an intuitive CMS that makes content updates easy for non-technical users."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default FramerDevelopment;
