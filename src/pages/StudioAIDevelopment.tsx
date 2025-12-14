import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const StudioAIDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Studio AI Development",
    subtitle: "Build Intelligent Websites with AI-Powered Design Tools",
    description: "We create modern websites using Studio AI's intelligent design platform. Combine the power of AI with expert development to build stunning, functional websites faster.",
    ctaText: "Start Your Studio AI Project",
    ctaLink: "/contact",
    
    advantages: [
      "AI-powered development – Leverage artificial intelligence for faster, smarter design decisions",
      "Rapid prototyping – Go from concept to working prototype in days with AI assistance",
      "Smart design suggestions – AI-generated recommendations for layouts, colors, and components",
      "Efficient workflows – Streamlined development process reducing time and costs significantly"
    ],
    
    features: [
      "AI-Assisted Web Development",
      "Responsive Design",
      "Component Libraries",
      "Design System Creation",
      "Prototype to Production",
      "Code Generation"
    ],
    
    services: [
      {
        title: "AI-Powered Websites",
        description: "Leverage AI to create optimized, conversion-focused websites with intelligent design."
      },
      {
        title: "Rapid Prototyping",
        description: "Quick iteration from concept to functional prototype using AI tools for faster validation."
      },
      {
        title: "Design Systems",
        description: "Scalable design systems powered by AI for consistency and rapid component creation."
      }
    ],
    
    industries: [
      "Startups",
      "Marketing Websites",
      "Landing Pages",
      "SaaS Products",
      "Digital Products"
    ],
    
    deliverables: [
      "AI-generated website – Fully functional site with AI-assisted design and optimization",
      "Design system – Reusable component library with AI-generated variations and themes",
      "Responsive layouts – Mobile-first designs optimized for all screen sizes",
      "Code repository – Clean, maintainable code with AI-assisted optimization",
      "Performance optimization – AI-optimized loading speeds and resource management",
      "SEO configuration – AI-recommended meta tags, structure, and content optimization",
      "A/B testing setup – AI-powered experimentation framework for conversion optimization",
      "Analytics integration – Tracking setup with AI-driven insights and recommendations",
      "Content templates – AI-generated content structures and copywriting suggestions",
      "Documentation – Comprehensive guides for managing and extending the AI-powered site"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "AI-Assisted Discovery",
        description: "Using AI to analyze requirements and generate initial design concepts.",
        duration: "3-5 days"
      },
      {
        title: "Rapid Development",
        description: "Building site with AI-generated components and layouts.",
        duration: "1-2 weeks"
      },
      {
        title: "AI Optimization",
        description: "AI-powered testing and optimization for performance and conversion.",
        duration: "3-5 days"
      },
      {
        title: "Launch & Learning",
        description: "Deployment with AI-driven analytics and continuous improvement.",
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
        question: "How does Studio AI help in development?",
        answer: "Studio AI uses artificial intelligence to suggest designs, generate code, and streamline the development process."
      },
      {
        question: "Can AI replace human developers?",
        answer: "No, AI assists developers to work faster and smarter. Human expertise is essential for quality results."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default StudioAIDevelopment;
