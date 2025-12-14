import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const DigitalTransformation = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Digital Transformation",
    subtitle: "Transform Your Business with Digital Innovation",
    description: "We guide organizations through digital transformation journeys, implementing modern technologies and processes that drive efficiency, innovation, and growth.",
    ctaText: "Start Your Transformation",
    ctaLink: "/contact",
    
    advantages: [
      "End-to-end transformation expertise – Comprehensive guidance from strategy to implementation and beyond",
      "Change management support – Helping teams adapt to new technologies and processes smoothly",
      "Technology integration – Seamless implementation of modern tools across your organization",
      "Measurable ROI – Clear metrics and KPIs to track transformation success and business impact"
    ],
    
    features: [
      "Digital Strategy",
      "Process Automation",
      "Cloud Migration",
      "Legacy Modernization",
      "Data Analytics",
      "Change Management"
    ],
    
    services: [
      {
        title: "Digital Strategy",
        description: "Comprehensive roadmap for digital transformation aligned with business goals and market opportunities."
      },
      {
        title: "Process Automation",
        description: "Automate manual processes to improve efficiency, reduce costs, and eliminate human error."
      },
      {
        title: "Technology Implementation",
        description: "Deploy modern technologies that drive business value and competitive advantage."
      }
    ],
    
    industries: [
      "Enterprise Organizations",
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Retail"
    ],
    
    deliverables: [
      "Digital maturity assessment – Comprehensive evaluation of current digital capabilities and gaps",
      "Transformation roadmap – Multi-phase plan with timelines, milestones, and resource allocation",
      "Technology stack recommendations – Curated solutions aligned with business objectives and budget",
      "Process automation workflows – Documented and implemented automated processes reducing manual work",
      "Cloud migration plan – Detailed strategy for moving to cloud infrastructure with minimal disruption",
      "Change management framework – Communication plans, training programs, and adoption strategies",
      "KPI dashboard – Real-time metrics tracking transformation progress and ROI",
      "Legacy system modernization – Updated applications with modern architectures and technologies",
      "Security and compliance audit – Enhanced security posture and regulatory compliance verification",
      "Continuous improvement plan – Ongoing optimization strategy for sustained digital excellence"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Assessment & Strategy",
        description: "Evaluating current state and defining transformation roadmap.",
        duration: "2-4 weeks"
      },
      {
        title: "Technology Implementation",
        description: "Deploying modern technologies and systems.",
        duration: "3-6 months"
      },
      {
        title: "Change Management",
        description: "Training teams and managing organizational change.",
        duration: "Ongoing"
      },
      {
        title: "Optimization",
        description: "Continuous improvement and ROI measurement.",
        duration: "Ongoing"
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
        question: "What is digital transformation?",
        answer: "Digital transformation is the integration of digital technology into all areas of business, fundamentally changing how you operate and deliver value."
      },
      {
        question: "How long does digital transformation take?",
        answer: "It varies by scope, but typical transformations take 6-18 months for significant implementation."
      },
      {
        question: "What's the ROI of digital transformation?",
        answer: "Organizations typically see 20-30% efficiency improvements and significant cost savings within the first year."
      },
      {
        question: "Do you provide change management support?",
        answer: "Yes, we include comprehensive change management and training to ensure successful adoption."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default DigitalTransformation;
