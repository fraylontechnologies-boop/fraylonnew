import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const DoraDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Dora Development",
    subtitle: "Create Next-Generation 3D Websites with Dora AI",
    description: "We build immersive 3D websites using Dora's no-code platform. From interactive 3D experiences to AI-powered designs, we create websites that stand out.",
    ctaText: "Start Your Dora Project",
    ctaLink: "/contact",
    
    advantages: [
      "3D web design expertise – Specialists in creating immersive 3D experiences that captivate users",
      "No-code development – Fast iteration and deployment without traditional coding complexities",
      "AI-powered design tools – Leverage cutting-edge AI for unique and dynamic design generation",
      "Immersive experiences – Interactive 3D elements that engage and wow your audience"
    ],
    
    features: [
      "3D Website Development",
      "Interactive 3D Elements",
      "AI-Assisted Design",
      "Animation & Effects",
      "Responsive 3D Layouts",
      "Performance Optimization"
    ],
    
    services: [
      {
        title: "3D Web Experiences",
        description: "Immersive 3D websites that capture attention and engage users with stunning visual effects."
      },
      {
        title: "AI-Powered Design",
        description: "Leverage Dora's AI tools to create unique, dynamic designs that evolve and adapt."
      },
      {
        title: "Interactive Elements",
        description: "3D animations and interactions that enhance user engagement and create memorable experiences."
      }
    ],
    
    industries: [
      "Creative Portfolios",
      "Product Showcases",
      "Brand Experiences",
      "Gaming Websites",
      "Art & Design Studios"
    ],
    
    deliverables: [
      "Immersive 3D website – Fully functional site with interactive 3D elements and smooth animations",
      "AI-generated design assets – Unique visual elements created using Dora's AI-powered tools",
      "Interactive 3D models – Product showcases and visualizations with user-controlled interactions",
      "Custom animations – Scroll-based and interaction-triggered animations for engaging experiences",
      "Responsive 3D layouts – Optimized designs that work seamlessly across all devices",
      "Performance optimization – Fast-loading 3D content with efficient rendering and caching",
      "Brand integration – 3D elements that align with your brand identity and visual guidelines",
      "User interaction flows – Intuitive navigation and interaction patterns for 3D elements",
      "Browser compatibility – Cross-browser testing ensuring consistent 3D experience everywhere",
      "Content management – Easy-to-use system for updating 3D content and visual elements"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Concept & Design",
        description: "Creating 3D concepts and design mockups using Dora's AI tools.",
        duration: "1-2 weeks"
      },
      {
        title: "3D Development",
        description: "Building interactive 3D elements and animations.",
        duration: "2-3 weeks"
      },
      {
        title: "Testing & Optimization",
        description: "Performance testing and optimization across devices.",
        duration: "1 week"
      },
      {
        title: "Launch & Support",
        description: "Deployment and ongoing maintenance of 3D website.",
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
        question: "What is Dora?",
        answer: "Dora is a no-code platform for creating 3D and AI-powered websites with advanced animations and interactions."
      },
      {
        question: "Do 3D websites perform well?",
        answer: "Yes! Dora optimizes 3D content for fast loading and smooth performance across devices."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default DoraDevelopment;
