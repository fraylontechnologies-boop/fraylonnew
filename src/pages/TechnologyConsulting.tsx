import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const TechnologyConsulting = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Technology Consulting",
    subtitle: "Strategic Technology Guidance for Digital Transformation",
    description: "Our technology consulting services help businesses make informed decisions about their digital infrastructure, software architecture, and technology strategy. We provide expert guidance to optimize your technology stack and drive digital transformation initiatives.",
    features: [
      "Technology Strategy",
      "Digital Transformation",
      "System Architecture Review",
      "Technology Stack Optimization",
      "Cloud Migration Planning",
      "Security Assessment"
    ],
    benefits: [
      "40% reduction in technology costs",
      "Improved system performance",
      "Enhanced security posture",
      "Future-proof technology decisions",
      "Streamlined operations",
      "Competitive advantage"
    ],
    industries: [
      "Healthcare",
      "Finance",
      "Manufacturing",
      "Retail",
      "Education",
      "Government",
      "Non-profit",
      "Startups"
    ],
    deliverables: [
      "Technology assessment report – Comprehensive analysis of your current technology infrastructure and recommendations",
      "Digital transformation roadmap – Strategic plan for modernizing your business processes and systems",
      "System architecture recommendations – Detailed technical specifications for scalable and secure solutions",
      "Technology stack optimization plan – Strategies for improving performance, security, and cost-effectiveness",
      "Security audit report – Thorough security assessment with vulnerability analysis and remediation plans",
      "Implementation timeline – Detailed project schedule with milestones and resource allocation",
      "Cost-benefit analysis – Financial analysis of technology investments and expected ROI",
      "Training materials – Educational resources and training programs for your team"
    ],
    process: [
      {
        title: "Assessment & Analysis",
        description: "We conduct a comprehensive analysis of your current technology infrastructure and business processes.",
        duration: "2-3 weeks"
      },
      {
        title: "Strategy Development",
        description: "Based on our findings, we develop a customized technology strategy aligned with your business goals.",
        duration: "2-3 weeks"
      },
      {
        title: "Implementation Planning",
        description: "We create detailed implementation plans with timelines, resources, and success metrics.",
        duration: "1-2 weeks"
      },
      {
        title: "Ongoing Support",
        description: "We provide continuous guidance and support throughout your digital transformation journey.",
        duration: "Ongoing"
      }
    ],
    testimonials: [
      {
        name: "Michael Chen",
        role: "CTO",
        company: "TechCorp Solutions",
        content: "The technology consulting helped us modernize our entire infrastructure. We've seen significant improvements in efficiency and security.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What types of technology assessments do you provide?",
        answer: "We provide comprehensive assessments covering infrastructure, security, performance, scalability, and compliance across all technology areas."
      },
      {
        question: "How long does a typical consulting engagement last?",
        answer: "Consulting engagements typically range from 2-12 weeks depending on the scope and complexity of your technology landscape."
      },
      {
        question: "Do you work with specific technology vendors?",
        answer: "We're vendor-agnostic and work with all major technology providers to recommend the best solutions for your needs."
      },
      {
        question: "Can you help with cloud migration planning?",
        answer: "Yes, we specialize in cloud migration strategies, helping you move to AWS, Azure, or Google Cloud with minimal disruption."
      }
    ],
    ctaText: "Get Technology Consultation",
    ctaLink: "/contact",
    // Additional Fraylon format sections
    advantages: [
      "Strategic Technology Guidance – Expert advice on technology decisions and digital transformation",
      "Vendor-Agnostic Approach – Recommendations based on your needs, not vendor partnerships",
      "Proven Methodologies – Structured approach to technology assessment and implementation",
      "Ongoing Support – Continuous guidance throughout your digital transformation journey"
    ],
    services: [
      {
        title: "Technology Strategy Development",
        description: "Comprehensive technology roadmaps aligned with your business objectives and growth plans."
      },
      {
        title: "Digital Transformation Planning",
        description: "End-to-end digital transformation strategies to modernize your business operations."
      },
      {
        title: "System Architecture Review",
        description: "Detailed analysis of your current technology infrastructure with optimization recommendations."
      },
      {
        title: "Cloud Migration Planning",
        description: "Strategic cloud migration plans for AWS, Azure, or Google Cloud with minimal disruption."
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
      title: "Enterprise Digital Transformation",
      client: "A Fortune 500 healthcare company",
      challenge: "Legacy systems causing operational inefficiencies and compliance issues. Need for comprehensive digital transformation including cloud migration, system integration, and process automation while maintaining HIPAA compliance.",
      solution: "Developed a comprehensive digital transformation strategy including cloud migration to AWS, integration of 15+ systems, implementation of automated workflows, and establishment of new security protocols. Created detailed implementation roadmap with risk mitigation strategies.",
      outcome: "50% reduction in operational costs through process automation. 99.9% system uptime with cloud infrastructure. 100% HIPAA compliance maintained throughout transformation. 40% improvement in employee productivity with new integrated systems."
    },
    blogs: [
      {
        title: "Digital Transformation in 2024: Key Strategies for Success",
        date: "Dec 14, 2024",
        link: "/blog/digital-transformation-2024"
      },
      {
        title: "Cloud Migration Best Practices: A Complete Guide",
        date: "Dec 9, 2024",
        link: "/blog/cloud-migration-best-practices"
      },
      {
        title: "Technology Consulting: When and Why You Need It",
        date: "Dec 4, 2024",
        link: "/blog/technology-consulting-guide"
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default TechnologyConsulting;
