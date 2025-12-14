import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const GraphicDesign = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Graphic Design",
    subtitle: "Creative Graphic Design That Communicates Your Message",
    description: "We create compelling graphic designs for all your marketing and communication needs. From social media graphics to print materials, we deliver designs that engage and convert.",
    ctaText: "Start Your Design Project",
    ctaLink: "/contact",
    
    advantages: [
      "Creative and strategic designs – Unique, innovative designs tailored to your brand identity and business goals",
      "Fast turnaround times – Quick delivery without compromising on quality and attention to detail",
      "Print and digital expertise – Comprehensive design solutions for both online and offline channels",
      "Unlimited revisions – Continuous refinement until you achieve the perfect final design"
    ],
    
    features: [
      "Social Media Graphics",
      "Print Design",
      "Infographics",
      "Presentation Design",
      "Marketing Materials",
      "Packaging Design"
    ],
    
    services: [
      {
        title: "Marketing Collateral",
        description: "Brochures, flyers, posters, and other marketing materials that effectively communicate your brand message."
      },
      {
        title: "Social Media Design",
        description: "Eye-catching graphics optimized for all social media platforms to maximize engagement and reach."
      },
      {
        title: "Presentation Design",
        description: "Professional slide decks that impress stakeholders and persuade audiences with compelling visuals."
      },
      {
        title: "Infographic Design",
        description: "Visual storytelling through data-driven infographics that simplify complex information effectively."
      }
    ],
    
    industries: [
      "Marketing Campaigns",
      "Social Media",
      "Events & Conferences",
      "Product Launches",
      "Corporate Communications"
    ],
    
    deliverables: [
      "Brand-aligned design files – Complete source files in Adobe formats (AI, PSD, INDD) with organized layers and assets",
      "Multi-format exports – Ready-to-use files in PDF, PNG, JPG, and SVG optimized for print and digital use",
      "Print-ready artwork – High-resolution designs with proper bleed, crop marks, and color profiles (CMYK)",
      "Web-optimized graphics – Compressed images in appropriate formats and sizes for fast web loading",
      "Social media assets – Platform-specific designs sized for Facebook, Instagram, LinkedIn, Twitter, and more",
      "Editable templates – Customizable design templates for ongoing brand consistency and easy updates",
      "Style guide documentation – Visual guidelines covering color codes, typography, and design element usage",
      "Icon and graphic libraries – Custom icon sets and graphic elements for consistent brand application",
      "Presentation decks – Professional slide templates with branded layouts and visual hierarchy",
      "Brand asset package – Comprehensive folder structure with all deliverables organized and labeled"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Discovery & Brief",
        description: "Understanding your brand, goals, and design requirements.",
        duration: "1-2 days"
      },
      {
        title: "Concept Development",
        description: "Creating initial design concepts and exploring creative directions.",
        duration: "3-5 days"
      },
      {
        title: "Refinement & Revisions",
        description: "Incorporating feedback and refining designs to perfection.",
        duration: "2-3 days"
      },
      {
        title: "Final Delivery",
        description: "Delivering all final files in required formats.",
        duration: "1-2 days"
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
        question: "What file formats do you provide?",
        answer: "We provide source files (AI, PSD) and export formats (PDF, PNG, JPG, SVG) based on your needs."
      },
      {
        question: "How many revisions are included?",
        answer: "We offer unlimited revisions until you're completely satisfied with the design."
      },
      {
        question: "Can you match our existing brand guidelines?",
        answer: "Absolutely! We work within your brand guidelines to ensure consistency across all materials."
      },
      {
        question: "What's the typical turnaround time?",
        answer: "Simple graphics can be delivered in 2-3 days, while complex projects may take 1-2 weeks."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default GraphicDesign;
