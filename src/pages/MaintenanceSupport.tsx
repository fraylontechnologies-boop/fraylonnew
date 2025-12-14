import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const MaintenanceSupport = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Maintenance & Support Services",
    subtitle: "Keep Your Systems Running Smoothly with Expert Support",
    description: "We provide comprehensive maintenance and support services to ensure your applications and systems run smoothly. From bug fixes to feature updates, we keep your technology current.",
    ctaText: "Get Support",
    ctaLink: "/contact",
    
    advantages: [
      "24/7 support availability – Round-the-clock monitoring and assistance whenever you need it",
      "Proactive monitoring – Continuous system surveillance to detect and prevent issues before they occur",
      "Fast response times – Rapid resolution of critical issues to minimize downtime and disruption",
      "Preventive maintenance – Regular updates and optimization to ensure peak performance and security"
    ],
    
    features: [
      "Application Maintenance",
      "Infrastructure Support",
      "Security Updates",
      "Performance Monitoring",
      "Bug Fixes",
      "Feature Enhancements"
    ],
    
    services: [
      {
        title: "Application Support",
        description: "Ongoing maintenance and updates for web and mobile applications to ensure optimal performance."
      },
      {
        title: "Infrastructure Management",
        description: "Server monitoring, updates, and optimization services for reliable and secure infrastructure."
      },
      {
        title: "Emergency Support",
        description: "Rapid response to critical issues and system failures with guaranteed resolution times."
      }
    ],
    
    industries: [
      "Web Applications",
      "Mobile Apps",
      "E-commerce Sites",
      "Enterprise Systems",
      "Cloud Infrastructure"
    ],
    
    deliverables: [
      "System health assessment – Comprehensive evaluation of infrastructure, security, and performance baselines",
      "Monitoring dashboard setup – Real-time alerts and metrics tracking for uptime, performance, and errors",
      "Incident response plan – Documented procedures for handling emergencies with escalation protocols",
      "Regular maintenance schedule – Planned updates, backups, and optimization activities with minimal disruption",
      "Security patch management – Timely application of security updates and vulnerability remediation",
      "Performance optimization reports – Analysis and improvements for speed, resource usage, and scalability",
      "Backup and recovery systems – Automated backup solutions with tested disaster recovery procedures",
      "Monthly status reports – Detailed summaries of uptime, incidents, and maintenance activities",
      "Feature enhancement roadmap – Planned improvements and updates to keep systems current and competitive",
      "24/7 support access – Round-the-clock monitoring and emergency support with guaranteed response times"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "System Assessment",
        description: "Evaluating your current infrastructure and applications.",
        duration: "1 week"
      },
      {
        title: "Monitoring Setup",
        description: "Implementing proactive monitoring and alerting systems.",
        duration: "1 week"
      },
      {
        title: "Regular Maintenance",
        description: "Scheduled updates, backups, and optimization.",
        duration: "Monthly"
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock monitoring and emergency response.",
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
        question: "What's included in maintenance?",
        answer: "Regular updates, security patches, bug fixes, performance optimization, and technical support."
      },
      {
        question: "Do you offer 24/7 support?",
        answer: "Yes, we provide round-the-clock monitoring and emergency support."
      },
      {
        question: "How do you handle emergencies?",
        answer: "We have rapid response protocols with guaranteed response times based on severity."
      },
      {
        question: "Can you maintain systems you didn't build?",
        answer: "Absolutely! We can take over maintenance of any existing system or application."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default MaintenanceSupport;
