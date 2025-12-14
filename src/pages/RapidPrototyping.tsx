import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const RapidPrototyping = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Rapid Prototyping",
    subtitle: "Validate Your Ideas Quickly with Interactive Prototypes",
    description: "We create high-fidelity prototypes that bring your ideas to life quickly. Test concepts, gather feedback, and iterate before full development begins.",
    ctaText: "Start Prototyping",
    ctaLink: "/contact",
    
    advantages: [
      "Fast turnaround times – Deliver interactive prototypes in days, not weeks, for rapid validation",
      "Interactive prototypes – Clickable, realistic prototypes that simulate the final product experience",
      "User testing ready – Production-quality prototypes perfect for usability testing and feedback",
      "Cost-effective validation – Validate ideas before expensive development, reducing risk and costs"
    ],
    
    features: [
      "UI/UX Prototyping",
      "Clickable Prototypes",
      "User Flow Design",
      "Usability Testing",
      "Design Iteration",
      "Stakeholder Presentations"
    ],
    
    services: [
      {
        title: "Interactive Prototypes",
        description: "Clickable, high-fidelity prototypes that simulate the final product with realistic interactions."
      },
      {
        title: "User Testing",
        description: "Validate designs with real users before development to identify issues and opportunities."
      },
      {
        title: "Design Iteration",
        description: "Rapid iterations based on feedback and testing results to refine the user experience."
      }
    ],
    
    industries: [
      "Startups",
      "Product Development",
      "Design Validation",
      "Investor Presentations",
      "User Research"
    ],
    
    deliverables: [
      "Interactive prototype – High-fidelity, clickable prototype with realistic user flows and interactions",
      "User flow diagrams – Visual maps of user journeys and navigation patterns",
      "Wireframes – Low-fidelity sketches and layouts for structure and content placement",
      "Design specifications – Detailed specs for developers including spacing, colors, and typography",
      "Component library – Reusable UI components and design patterns for consistency",
      "Usability test results – Findings from user testing sessions with recommendations",
      "Iteration documentation – Records of design changes based on feedback and testing",
      "Prototype presentation – Demo-ready prototype for stakeholder and investor presentations",
      "Design files – Source files in Figma, Sketch, or Adobe XD for future development",
      "Development handoff – Assets, specs, and documentation ready for engineering team"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Requirements Gathering",
        description: "Understanding your product vision and user needs.",
        duration: "2-3 days"
      },
      {
        title: "Wireframing",
        description: "Creating low-fidelity wireframes and user flows.",
        duration: "3-5 days"
      },
      {
        title: "High-Fidelity Design",
        description: "Designing detailed, interactive prototypes.",
        duration: "1-2 weeks"
      },
      {
        title: "User Testing",
        description: "Testing with real users and iterating based on feedback.",
        duration: "1 week"
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
        question: "How long does prototyping take?",
        answer: "Basic prototypes can be created in 1-2 weeks, while complex apps may take 3-4 weeks."
      },
      {
        question: "Can we use the prototype for development?",
        answer: "Yes, our prototypes include detailed specs that developers can use for implementation."
      },
      {
        question: "Do you include user testing?",
        answer: "Yes, we can conduct user testing sessions to validate designs before development."
      },
      {
        question: "How many iterations are included?",
        answer: "We include 2-3 rounds of revisions based on feedback and testing results."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default RapidPrototyping;
