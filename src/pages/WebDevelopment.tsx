import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const WebDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Web Application Development",
    subtitle: "Transform Business Operations with Custom Web Application Development",
    description: "Empower your business with custom-built web applications designed for scalability, security, and seamless user experience. Whether you need a business management platform, SaaS application, or AI-powered analytics dashboard, our expertise ensures future-proof, high-performing solutions that enhance operational efficiency and drive digital transformation.",
    features: [
      "Custom Web Applications",
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
      "Security Implementation",
      "Scalable Architecture"
    ],
    benefits: [
      "77% of businesses rely on web applications for customer engagement and internal operations",
      "Cloud-based web apps reduce infrastructure costs by 30% compared to traditional software",
      "API-driven applications improve workflow efficiency by 50%, enabling seamless integrations",
      "Security breaches cost businesses an average of $4.45M per incident – our robust security is crucial",
      "Real-time data management and platform independence for better accessibility",
      "50% improvement in workflow efficiency through automation and intelligent process optimization"
    ],
    industries: [
      "SaaS & Technology – Scalable SaaS platforms with multi-tenant architecture and subscription management",
      "Healthcare & MedTech – HIPAA-compliant patient portals, telemedicine platforms, and health data management systems",
      "Finance & FinTech – Banking dashboards, payment gateways, and financial analytics platforms with PCI-DSS compliance",
      "E-commerce & Retail – Custom online stores, inventory management, and omnichannel retail solutions",
      "Education & E-Learning – Learning management systems (LMS), virtual classrooms, and student portals",
      "Real Estate & PropTech – Property management systems, listing platforms, and CRM solutions",
      "Manufacturing & Logistics – Supply chain management, warehouse automation, and IoT-enabled tracking systems",
      "Enterprise & Startups – Business process automation, internal tools, and MVP development for rapid market entry"
    ],
    deliverables: [
      "Production-Ready Web Application – Fully functional, tested, and optimized web application deployed on secure cloud infrastructure with CI/CD pipelines",
      "Scalable Cloud Architecture – Auto-scaling infrastructure on AWS/Azure/GCP with load balancing, CDN integration, and 99.9% uptime SLA",
      "Secure Authentication & Authorization – Industry-standard security with OAuth 2.0, JWT tokens, role-based access control (RBAC), and multi-factor authentication",
      "API Documentation & Integration Guide – Comprehensive API documentation using Swagger/OpenAPI with integration examples and SDKs for seamless third-party connections",
      "Real-Time Analytics Dashboard – Interactive data visualization with charts, KPIs, and business intelligence insights powered by AI-driven analytics",
      "Performance & SEO Optimization – Lighthouse score 90+, Core Web Vitals optimization, lazy loading, code splitting, and structured data for search engines",
      "Database Design & Migration – Optimized database schema with indexing, query optimization, and data migration scripts for PostgreSQL, MongoDB, or MySQL",
      "Automated Testing Suite – Unit tests, integration tests, and end-to-end testing with 90%+ code coverage using Jest, Cypress, or Selenium",
      "DevOps & Monitoring Setup – Docker containerization, Kubernetes orchestration, automated deployments, and 24/7 application monitoring with alerts",
      "Training & Knowledge Transfer – Team training sessions, video tutorials, and complete technical documentation for maintenance and future enhancements"
    ],
    process: [
      {
        title: "Discovery & Planning",
        description: "Understanding your business goals, target audience, and technical requirements.",
        duration: "1-2 weeks"
      },
      {
        title: "Design & Prototyping",
        description: "Creating wireframes, mockups, and interactive prototypes.",
        duration: "2-3 weeks"
      },
      {
        title: "Development & Testing",
        description: "Building the application with rigorous testing and quality assurance.",
        duration: "4-6 weeks"
      },
      {
        title: "Launch & Support",
        description: "Deployment, training, and ongoing maintenance support.",
        duration: "Ongoing"
      }
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc",
        content: "The web application they built for us exceeded all expectations. It's fast, secure, and has helped us scale our business significantly.",
        rating: 5
      },
      {
        name: "Michael Chen",
        role: "CTO",
        company: "InnovateFlow",
        content: "Professional development team that delivered on time and within budget. Highly recommend their services.",
        rating: 5
      },
      {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        company: "BrandForward",
        content: "Our new website has improved our online presence dramatically. The team was excellent to work with.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What technologies do you use for web development?",
        answer: "We use modern technologies including React, Next.js, Node.js, Python, PHP, and various databases depending on your project requirements."
      },
      {
        question: "How long does it take to develop a web application?",
        answer: "The timeline depends on complexity. Simple websites take 2-4 weeks, while complex applications can take 8-12 weeks or more."
      },
      {
        question: "Do you provide ongoing maintenance and support?",
        answer: "Yes, we offer comprehensive maintenance packages including updates, security monitoring, and technical support."
      },
      {
        question: "Can you integrate with existing systems?",
        answer: "Absolutely! We specialize in integrating new applications with your existing CRM, ERP, and other business systems."
      },
      {
        question: "Is my web application mobile-friendly?",
        answer: "Yes, all our applications are built with mobile-first responsive design to ensure optimal performance on all devices."
      }
    ],
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    // Additional Fraylon format sections
    advantages: [
      "Tailor-Made Web Applications – Built for your unique business needs and scalability requirements",
      "API-First & Cloud-Native – Seamless integrations with third-party systems and high availability across cloud platforms",
      "Enterprise-Grade Security – Robust protection for sensitive data with industry-standard compliance and security protocols",
      "Agile Development & Rapid Deployment – Accelerated time-to-market with iterative enhancements and continuous delivery"
    ],
    services: [
      {
        title: "Custom SaaS & Enterprise Applications",
        description: "Build scalable, multi-tenant SaaS platforms with subscription management, user authentication, role-based access control, and real-time analytics dashboards."
      },
      {
        title: "Progressive Web Apps (PWA)",
        description: "Develop app-like experiences on the web with offline functionality, push notifications, and native-like performance for enhanced user engagement."
      },
      {
        title: "API Development & Microservices",
        description: "Design RESTful APIs and microservices architecture for seamless third-party integrations, improved scalability, and independent service deployment."
      },
      {
        title: "Business Process Automation",
        description: "Automate repetitive workflows with intelligent process automation tools, reducing manual work and increasing operational efficiency by 50%."
      },
      {
        title: "Data Dashboards & Analytics Platforms",
        description: "Create interactive, real-time data visualization dashboards with AI-powered insights for better business intelligence and decision-making."
      },
      {
        title: "Cloud-Native Web Applications",
        description: "Build cloud-first applications on AWS, Azure, or Google Cloud with auto-scaling, load balancing, and disaster recovery for 99.9% uptime."
      }
    ],
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
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
    partners: [
      {
        name: "Adobe",
        description: "Adobe is the leader in digital experience technology, helping transform customer experience through its Adobe Experience Cloud and Adobe Experience Platform."
      },
      {
        name: "AWS",
        description: "Amazon Web Services' industry-leading cloud solutions enable our clients to scale as they transform."
      },
      {
        name: "Google Cloud",
        description: "A Global Premier Partner of Google Cloud, combining the speed and storage of Google Cloud Platform with our decades of digital expertise."
      }
    ],
    caseStudy: {
      title: "Enterprise SaaS Platform Transformation",
      client: "A Fortune 500 financial services company",
      challenge: "Legacy monolithic web application causing scalability issues, poor performance, and high infrastructure costs. System struggled to handle 100,000+ daily active users and required 48+ hours for new feature deployments. Security vulnerabilities and lack of real-time data analytics were hindering business growth.",
      solution: "Architected and developed a modern cloud-native SaaS platform using React, Node.js microservices, and AWS infrastructure. Implemented API-first architecture with GraphQL for efficient data fetching. Integrated real-time analytics using Apache Kafka and Elasticsearch. Deployed containerized services with Kubernetes for auto-scaling and implemented CI/CD pipelines for rapid deployments. Added enterprise-grade security with OAuth 2.0, encrypted data storage, and SOC 2 compliance.",
      outcome: "Achieved 10x improvement in system performance with sub-second page load times. Reduced infrastructure costs by 40% through cloud optimization and auto-scaling. Enabled deployment of new features in under 2 hours (from 48+ hours). Successfully scaled to support 500,000+ concurrent users with 99.97% uptime. Increased user satisfaction score from 62% to 94%. Real-time analytics reduced data processing time by 85%, enabling instant business insights."
    },
    blogs: [
      {
        title: "The Future of Web Development: Trends to Watch in 2024",
        date: "Dec 15, 2024",
        link: "/blog/web-development-trends-2024"
      },
      {
        title: "Building Scalable Web Applications with Modern Technologies",
        date: "Dec 10, 2024",
        link: "/blog/scalable-web-applications"
      },
      {
        title: "Web Performance Optimization: Best Practices for 2024",
        date: "Dec 5, 2024",
        link: "/blog/web-performance-optimization"
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default WebDevelopment;
