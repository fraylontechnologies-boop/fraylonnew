import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const SoftwareDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Software Development",
    subtitle: "Custom Software Solutions Tailored to Your Business Needs",
    description: "We build custom software applications that solve complex business problems. From desktop applications to cloud-based solutions, we deliver scalable, secure, and efficient software.",
    ctaText: "Start Your Software Project",
    ctaLink: "/contact",
    
    advantages: [
      "End-to-end software development – Complete lifecycle from requirements to deployment and maintenance",
      "Agile development methodology – Iterative approach with regular feedback and continuous delivery",
      "Scalable architecture – Future-proof solutions designed to grow with your business needs",
      "Quality assurance and testing – Rigorous testing ensuring reliability and performance"
    ],
    
    features: [
      "Custom Software Development",
      "Cloud Applications",
      "Desktop Applications",
      "API Development",
      "Legacy System Modernization",
      "Software Integration"
    ],
    
    services: [
      {
        title: "Custom Application Development",
        description: "Tailored software solutions designed specifically for your business processes and requirements."
      },
      {
        title: "Cloud Software Solutions",
        description: "Scalable cloud-based applications with modern architectures and high availability."
      },
      {
        title: "System Integration",
        description: "Seamless integration of software systems and third-party services for unified operations."
      },
      {
        title: "Legacy Modernization",
        description: "Upgrade and modernize outdated software systems with modern technologies and architectures."
      }
    ],
    
    industries: [
      "Enterprise Software",
      "Business Process Automation",
      "Data Management Systems",
      "Financial Software",
      "Healthcare Applications",
      "Manufacturing Solutions"
    ],
    
    deliverables: [
      "Custom software application – Fully functional software tailored to your business requirements",
      "Source code repository – Complete codebase with version control and documentation",
      "API documentation – Comprehensive API reference for integrations and extensions",
      "Database design – Optimized database schema with backup and recovery procedures",
      "User interface – Intuitive UI/UX designed for your specific user workflows",
      "Testing suite – Automated tests ensuring code quality and reliability",
      "Deployment package – Production-ready deployment with CI/CD pipelines",
      "Technical documentation – Architecture diagrams, setup guides, and maintenance docs",
      "Training materials – User manuals and training sessions for your team",
      "Support and maintenance – Ongoing support with SLA-based response times"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Discovery & Planning",
        description: "Requirements gathering, feasibility analysis, and project planning.",
        duration: "2-3 weeks"
      },
      {
        title: "Design & Architecture",
        description: "System architecture design, database modeling, and UI/UX design.",
        duration: "2-3 weeks"
      },
      {
        title: "Development & Testing",
        description: "Agile development sprints with continuous testing and integration.",
        duration: "8-16 weeks"
      },
      {
        title: "Deployment & Support",
        description: "Production deployment, user training, and ongoing support.",
        duration: "2 weeks+"
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
        question: "How long does custom software development take?",
        answer: "It depends on complexity. Simple applications take 2-3 months, while enterprise solutions may take 6-12 months."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer maintenance, updates, and technical support for all software we develop."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Absolutely! We specialize in creating software that integrates seamlessly with your current infrastructure."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default SoftwareDevelopment;
