import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const InboundMarketing = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Inbound Marketing & Content Strategy",
    subtitle: "Attract, Engage, and Delight Customers with Strategic Content",
    description: "We develop comprehensive inbound marketing strategies that attract qualified leads and nurture them into customers. From content creation to marketing automation, we drive sustainable growth.",
    ctaText: "Start Your Marketing Journey",
    ctaLink: "/contact",
    
    advantages: [
      "Data-driven strategies – Analytics-powered decision making for optimized campaign performance",
      "Content marketing expertise – Compelling content that attracts and engages your ideal customers",
      "Marketing automation – Streamlined workflows that nurture leads and accelerate conversions",
      "ROI-focused campaigns – Measurable results with clear return on marketing investment"
    ],
    
    features: [
      "Content Strategy",
      "Blog Writing & SEO",
      "Email Marketing",
      "Marketing Automation",
      "Lead Nurturing",
      "Analytics & Reporting"
    ],
    
    services: [
      {
        title: "Content Marketing",
        description: "Strategic content creation that attracts and engages your target audience while driving organic growth."
      },
      {
        title: "Lead Generation",
        description: "Campaigns designed to capture and qualify leads effectively through multi-channel strategies."
      },
      {
        title: "Marketing Automation",
        description: "Automated workflows that nurture leads and drive conversions at scale with personalization."
      }
    ],
    
    industries: [
      "B2B Companies",
      "SaaS Products",
      "Professional Services",
      "E-commerce",
      "Startups"
    ],
    
    deliverables: [
      "Content marketing strategy – Comprehensive plan with audience personas, content themes, and publishing calendar",
      "SEO-optimized blog posts – Keyword-researched articles designed to attract organic traffic and engage readers",
      "Email campaign workflows – Automated email sequences with personalized content for lead nurturing",
      "Landing page designs – Conversion-optimized pages with compelling copy and clear calls-to-action",
      "Lead magnet creation – Valuable content offers like ebooks, whitepapers, and guides to capture leads",
      "Marketing automation setup – Configured workflows in HubSpot or similar platforms for lead management",
      "Social media content calendar – Planned posts with engaging copy and visuals across all channels",
      "Performance analytics dashboard – Custom reporting showing traffic, leads, conversions, and ROI metrics",
      "Buyer journey mapping – Detailed visualization of customer touchpoints and content alignment",
      "Monthly performance reports – Comprehensive analysis with insights and recommendations for optimization"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Strategy Development",
        description: "Creating a comprehensive inbound marketing strategy.",
        duration: "1-2 weeks"
      },
      {
        title: "Content Creation",
        description: "Developing valuable content that attracts your target audience.",
        duration: "Ongoing"
      },
      {
        title: "Campaign Execution",
        description: "Implementing campaigns across multiple channels.",
        duration: "Ongoing"
      },
      {
        title: "Analysis & Optimization",
        description: "Monitoring performance and optimizing for better results.",
        duration: "Monthly"
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
        question: "What is inbound marketing?",
        answer: "Inbound marketing attracts customers through valuable content and experiences tailored to them, rather than interruptive advertising."
      },
      {
        question: "How long does it take to see results?",
        answer: "Typically 3-6 months for noticeable results, with continued improvement over time."
      },
      {
        question: "What's included in your service?",
        answer: "Content strategy, blog writing, email marketing, SEO, social media, and marketing automation."
      },
      {
        question: "Do you provide analytics and reporting?",
        answer: "Yes, we provide detailed monthly reports showing traffic, leads, and ROI metrics."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default InboundMarketing;
