import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const EnterprisePortals = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Enterprise Portals & Dashboards",
    subtitle: "Powerful Portals and Dashboards for Enterprise Operations",
    description: "We build enterprise-grade portals and dashboards that centralize data, streamline operations, and enhance decision-making. From employee portals to customer-facing dashboards, we deliver solutions that scale.",
    ctaText: "Start Your Enterprise Project",
    ctaLink: "/contact",
    
    advantages: [
      "Enterprise-level security – Bank-grade security with encryption, SSO, and compliance certifications",
      "Scalable architecture – Built to handle thousands of concurrent users with high availability",
      "Real-time data visualization – Live dashboards with interactive charts and business intelligence",
      "Role-based access control – Granular permissions ensuring users see only what they need"
    ],
    
    features: [
      "Enterprise Portal Development",
      "Business Intelligence Dashboards",
      "Data Visualization",
      "User Access Management",
      "System Integration",
      "Custom Reporting"
    ],
    
    services: [
      {
        title: "Employee Portals",
        description: "Centralized platforms for internal communication, HR, collaboration, and productivity tools."
      },
      {
        title: "Customer Portals",
        description: "Self-service portals for customers to manage accounts, access resources, and get support."
      },
      {
        title: "Analytics Dashboards",
        description: "Real-time dashboards for business intelligence, data analytics, and performance monitoring."
      },
      {
        title: "Partner Portals",
        description: "Secure portals for partners and vendors to collaborate, share data, and manage relationships."
      }
    ],
    
    industries: [
      "Large Enterprises",
      "Financial Institutions",
      "Healthcare Organizations",
      "Government Agencies",
      "Manufacturing Companies"
    ],
    
    deliverables: [
      "Enterprise portal platform – Secure, scalable web portal with SSO and multi-tenant architecture",
      "Business intelligence dashboards – Interactive data visualization with real-time analytics and KPI tracking",
      "User management system – Role-based access control with user provisioning and authentication",
      "Custom reporting engine – Automated report generation with export capabilities and scheduling",
      "System integrations – Seamless connectivity with ERP, CRM, HRIS, and other enterprise systems",
      "Mobile responsive design – Full portal functionality accessible on tablets and smartphones",
      "Document management – Secure file storage, versioning, and collaboration features",
      "Workflow automation – Automated approval processes and business workflows",
      "API gateway – RESTful APIs for third-party integrations and data exchange",
      "Admin console – Comprehensive administration interface for portal management and configuration"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Requirements & Architecture",
        description: "Gathering requirements and designing enterprise portal architecture.",
        duration: "2-3 weeks"
      },
      {
        title: "Development & Integration",
        description: "Building portal features and integrating with enterprise systems.",
        duration: "8-12 weeks"
      },
      {
        title: "Security & Testing",
        description: "Security audits, penetration testing, and quality assurance.",
        duration: "2-3 weeks"
      },
      {
        title: "Deployment & Training",
        description: "Production deployment and user training programs.",
        duration: "2 weeks"
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
        question: "What is an enterprise portal?",
        answer: "An enterprise portal is a secure gateway that provides employees, customers, or partners with access to company information and applications."
      },
      {
        question: "How secure are enterprise portals?",
        answer: "We implement enterprise-grade security including SSO, encryption, role-based access, and compliance with industry standards."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default EnterprisePortals;
