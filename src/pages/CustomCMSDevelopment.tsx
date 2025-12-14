import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const CustomCMSDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Custom Website & CMS Development",
    subtitle: "Bespoke Content Management Systems Built for Your Workflow",
    description: "We develop custom CMS solutions tailored to your content management needs. From headless CMS to traditional systems, we build platforms that make content management effortless.",
    ctaText: "Start Your CMS Project",
    ctaLink: "/contact",
    
    advantages: [
      "Custom CMS architecture – Built specifically for your content workflow and editorial processes",
      "User-friendly interfaces – Intuitive admin panels designed for non-technical content editors",
      "Scalable and secure – Enterprise-grade security with ability to handle growing content volumes",
      "SEO-optimized – Built-in SEO features for better search engine visibility and rankings"
    ],
    
    features: [
      "Custom CMS Development",
      "Headless CMS",
      "Content Architecture",
      "Multi-language Support",
      "Workflow Automation",
      "API Development"
    ],
    
    services: [
      {
        title: "Custom CMS Solutions",
        description: "Fully customized content management systems built for your specific requirements and workflows."
      },
      {
        title: "Headless CMS",
        description: "Modern headless CMS architecture for omnichannel content delivery across web, mobile, and IoT."
      },
      {
        title: "CMS Migration",
        description: "Seamless migration from existing CMS to custom solutions with data preservation and minimal downtime."
      }
    ],
    
    industries: [
      "Publishing & Media",
      "Corporate Websites",
      "E-learning Platforms",
      "Documentation Sites",
      "Multi-site Management"
    ],
    
    deliverables: [
      "Custom CMS platform – Fully functional content management system tailored to your editorial workflow",
      "Admin dashboard – Intuitive interface for content creation, editing, and publishing",
      "Content modeling – Structured content types and fields designed for your specific needs",
      "Multi-language support – Built-in internationalization for managing content in multiple languages",
      "User role management – Granular permissions system for different user types and access levels",
      "API documentation – Complete API reference for headless CMS content delivery",
      "SEO tools – Meta management, URL optimization, and sitemap generation features",
      "Media library – Digital asset management system for images, videos, and documents",
      "Version control – Content revision history with rollback capabilities",
      "Training and support – Comprehensive documentation and training for content editors and administrators"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Requirements Analysis",
        description: "Understanding your content workflow, user roles, and technical requirements.",
        duration: "1-2 weeks"
      },
      {
        title: "Architecture Design",
        description: "Designing the CMS architecture, content models, and system integrations.",
        duration: "1-2 weeks"
      },
      {
        title: "Development",
        description: "Building the CMS platform with admin interface and API endpoints.",
        duration: "6-10 weeks"
      },
      {
        title: "Testing & Deployment",
        description: "Quality assurance, user training, and production deployment.",
        duration: "2-3 weeks"
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
        question: "What is a headless CMS?",
        answer: "A headless CMS separates content management from presentation, allowing content to be delivered to any platform via APIs."
      },
      {
        question: "Can you customize existing CMS platforms?",
        answer: "Yes, we can customize platforms like WordPress, Drupal, or build completely custom solutions."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default CustomCMSDevelopment;
