import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const BubbleDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Bubble.io Development",
    subtitle: "Build Powerful Web Applications Without Code Using Bubble.io",
    description: "We create custom web applications using Bubble.io's no-code platform. From MVPs to production-ready SaaS applications, we deliver fast, scalable solutions without traditional coding.",
    ctaText: "Start Your Bubble Project",
    ctaLink: "/contact",
    
    advantages: [
      "Expert Bubble.io developers – Certified specialists with extensive experience in no-code development",
      "Rapid MVP development – Launch your product in weeks, not months, with full functionality",
      "Complex application logic – Build sophisticated workflows and business logic without traditional coding",
      "API integrations – Seamlessly connect with third-party services and existing systems"
    ],
    
    features: [
      "Bubble.io App Development",
      "Custom Workflows",
      "Database Design",
      "API Integration",
      "Plugin Development",
      "Responsive Design"
    ],
    
    services: [
      {
        title: "MVP Development",
        description: "Rapid prototyping and MVP development to validate your business idea with real users quickly."
      },
      {
        title: "SaaS Applications",
        description: "Full-featured SaaS platforms with user management, subscriptions, and payment processing."
      },
      {
        title: "Custom Integrations",
        description: "Connect your Bubble app with third-party services via APIs for extended functionality."
      }
    ],
    
    industries: [
      "Startups & MVPs",
      "SaaS Platforms",
      "Marketplace Applications",
      "Internal Tools",
      "Customer Portals"
    ],
    
    deliverables: [
      "Fully functional Bubble application – Production-ready web app with all features and workflows implemented",
      "Custom database schema – Optimized data structure designed for your specific business requirements",
      "Responsive design – Mobile-friendly interface that works seamlessly across all devices and screen sizes",
      "User authentication system – Secure login, registration, and password recovery with role-based access",
      "API integrations – Connected third-party services like payment processors, email, and analytics",
      "Admin dashboard – Backend interface for managing users, content, and application settings",
      "Custom workflows – Automated business logic and processes tailored to your operations",
      "Plugin configurations – Installed and configured Bubble plugins for extended functionality",
      "Training documentation – Comprehensive guides for managing and updating your Bubble application",
      "Deployment support – Launch assistance with domain setup, SSL, and production environment configuration"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Discovery & Planning",
        description: "Understanding your requirements and mapping out features and workflows.",
        duration: "3-5 days"
      },
      {
        title: "Design & Database",
        description: "Creating UI designs and setting up the database structure in Bubble.",
        duration: "1 week"
      },
      {
        title: "Development",
        description: "Building workflows, integrations, and all application features.",
        duration: "2-4 weeks"
      },
      {
        title: "Testing & Launch",
        description: "Quality assurance, bug fixes, and deployment to production.",
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
        question: "What can you build with Bubble.io?",
        answer: "Almost anything! From marketplaces to CRMs, social networks to SaaS platforms - Bubble can handle complex web applications."
      },
      {
        question: "How long does Bubble development take?",
        answer: "MVPs can be built in 2-4 weeks, while complex applications may take 8-12 weeks."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default BubbleDevelopment;
