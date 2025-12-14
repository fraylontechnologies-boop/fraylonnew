import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const MVPDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "MVP Development",
    subtitle: "Launch Your Product Fast with Minimum Viable Product Development",
    description: "We help startups and businesses quickly validate their ideas by building Minimum Viable Products (MVPs) that test core functionality with real users. Our rapid development approach gets your product to market faster while minimizing risk and investment.",
    features: [
      "Rapid Prototyping",
      "Core Feature Development",
      "User Testing Integration",
      "Scalable Architecture",
      "Performance Optimization",
      "Iterative Development"
    ],
    benefits: [
      "50% faster time to market",
      "Reduced development costs",
      "Early user feedback",
      "Validated product-market fit",
      "Faster investor attraction",
      "Competitive advantage"
    ],
    industries: [
      "SaaS Startups",
      "Mobile Apps",
      "E-commerce",
      "Healthcare Tech",
      "FinTech",
      "EdTech",
      "PropTech",
      "Social Platforms"
    ],
    deliverables: [
      "Functional MVP application – Working product with core features validated and ready for user testing",
      "Core feature implementation – Essential functionality that demonstrates your unique value proposition",
      "User testing framework – Built-in analytics and feedback collection tools for validation",
      "Analytics integration – Tracking user behavior, engagement metrics, and conversion funnels",
      "Performance monitoring – Real-time monitoring dashboards for app health and user experience",
      "Scalability planning – Architecture designed to handle growth from hundreds to thousands of users",
      "Technical documentation – Comprehensive documentation for future development and scaling",
      "Launch strategy – Go-to-market plan with user acquisition and retention strategies",
      "Deployment setup – Production environment with CI/CD pipeline for rapid iterations",
      "Post-launch support – 30 days of bug fixes and optimization based on user feedback"
    ],
    process: [
      {
        title: "Idea Validation",
        description: "We help you define and validate your core value proposition through market research and user interviews.",
        duration: "1 week"
      },
      {
        title: "Feature Prioritization",
        description: "We identify the essential features needed for your MVP and create a development roadmap.",
        duration: "3-5 days"
      },
      {
        title: "Rapid Development",
        description: "Our agile development process builds your MVP quickly while maintaining quality and scalability.",
        duration: "4-8 weeks"
      },
      {
        title: "Launch & Iterate",
        description: "We help you launch your MVP and gather user feedback for continuous improvement.",
        duration: "Ongoing"
      }
    ],
    testimonials: [
      {
        name: "Alex Thompson",
        role: "CEO",
        company: "StartupXYZ",
        content: "Our MVP was built in just 6 weeks and helped us secure $2M in funding. The team understood our vision perfectly.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "How long does it take to build an MVP?",
        answer: "Most MVPs can be built in 4-12 weeks depending on complexity. We focus on core features first to get you to market quickly."
      },
      {
        question: "What technologies do you use for MVP development?",
        answer: "We use modern, scalable technologies like React, Node.js, Python, and cloud platforms that can grow with your business."
      },
      {
        question: "Can you help with post-MVP scaling?",
        answer: "Absolutely! We design MVPs with scalability in mind and provide ongoing support as your product grows."
      },
      {
        question: "How do you ensure MVP quality while maintaining speed?",
        answer: "We use proven development methodologies, automated testing, and code reviews to maintain quality while moving fast."
      }
    ],
    ctaText: "Start Your MVP",
    ctaLink: "/contact",
    // Additional Fraylon format sections
    advantages: [
      "Rapid MVP Development – Get to market 50% faster with our proven methodologies",
      "Cost-Effective Solutions – Minimize investment while maximizing learning and validation",
      "Scalable Architecture – Built to grow with your business from day one",
      "Expert Guidance – Strategic advice from idea to launch and beyond"
    ],
    services: [
      {
        title: "MVP Strategy & Planning",
        description: "Comprehensive MVP strategy development with feature prioritization and market validation approach."
      },
      {
        title: "Rapid Prototyping",
        description: "Quick validation of ideas through interactive prototypes and user testing."
      },
      {
        title: "MVP Development",
        description: "Fast-track development of minimum viable products using modern technologies."
      },
      {
        title: "Post-MVP Scaling",
        description: "Support for scaling your MVP into a full-featured product as you grow."
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
      title: "SaaS MVP for Healthcare Startups",
      client: "A healthcare technology startup",
      challenge: "Need to quickly validate a healthcare management platform concept with limited budget and time. Required HIPAA-compliant MVP that could handle patient data securely while providing core functionality for testing market demand.",
      solution: "Developed a HIPAA-compliant MVP using React and Node.js with secure authentication and basic patient management features. Implemented core workflows for appointment scheduling, patient records, and provider communication. Built with scalable architecture for future growth.",
      outcome: "Launched MVP in 8 weeks instead of 6 months. Successfully validated concept with 100+ beta users. Secured $2M in seed funding based on MVP traction. 95% user satisfaction rate with core features."
    },
    blogs: [
      {
        title: "MVP Development: From Idea to Launch in 8 Weeks",
        date: "Dec 11, 2024",
        link: "/blog/mvp-development-guide"
      },
      {
        title: "Startup MVP: What Features to Include and What to Skip",
        date: "Dec 7, 2024",
        link: "/blog/startup-mvp-features"
      },
      {
        title: "MVP vs Prototype: Understanding the Difference",
        date: "Dec 2, 2024",
        link: "/blog/mvp-vs-prototype"
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default MVPDevelopment;
