import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const WordPressDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "WordPress Development",
    subtitle: "Build Powerful, Custom WordPress Websites That Drive Business Growth",
    description: "We create custom WordPress websites and applications using modern development practices. From simple blogs to complex e-commerce sites, we deliver scalable, secure, and high-performance WordPress solutions tailored to your business needs.",
    features: [
      "Custom WordPress Themes",
      "Plugin Development",
      "E-commerce Integration",
      "Performance Optimization",
      "Security Implementation",
      "SEO Optimization"
    ],
    benefits: [
      "40% faster page load times",
      "Enhanced security with custom solutions",
      "Mobile-first responsive design",
      "SEO-optimized for better rankings",
      "Easy content management",
      "Scalable architecture"
    ],
    industries: [
      "Blogging & Content",
      "E-commerce",
      "Corporate Websites",
      "Portfolio Sites",
      "Educational",
      "Non-profit",
      "Real Estate",
      "Healthcare"
    ],
    deliverables: [
      "Custom WordPress theme",
      "Plugin development and integration",
      "Content management system setup",
      "Performance optimization",
      "Security implementation",
      "SEO optimization",
      "Training and documentation",
      "Ongoing support and maintenance"
    ],
    process: [
      {
        title: "Planning & Design",
        description: "Understanding requirements and creating wireframes and designs.",
        duration: "1-2 weeks"
      },
      {
        title: "Development & Customization",
        description: "Building custom themes, plugins, and functionality.",
        duration: "3-4 weeks"
      },
      {
        title: "Testing & Optimization",
        description: "Quality assurance, performance optimization, and security testing.",
        duration: "1 week"
      },
      {
        title: "Launch & Training",
        description: "Deployment, content migration, and user training.",
        duration: "1 week"
      }
    ],
    testimonials: [
      {
        name: "Sarah Mitchell",
        role: "Marketing Director",
        company: "ContentCorp",
        content: "Our new WordPress site loads 40% faster and has improved our SEO rankings significantly. The team was professional and delivered exactly what we needed.",
        rating: 5
      },
      {
        name: "David Chen",
        role: "CEO",
        company: "TechStart",
        content: "The custom WordPress solution they built has scaled perfectly with our business growth. Highly recommend their services.",
        rating: 5
      },
      {
        name: "Lisa Rodriguez",
        role: "Founder",
        company: "EcoBlog",
        content: "Professional development team that understood our content management needs and delivered an intuitive solution.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "Do you use custom themes or pre-built themes?",
        answer: "We primarily develop custom themes tailored to your brand and requirements, but can also customize premium themes when appropriate."
      },
      {
        question: "How long does it take to develop a WordPress site?",
        answer: "Simple WordPress sites take 2-3 weeks, while complex e-commerce or custom applications can take 6-8 weeks."
      },
      {
        question: "Do you provide WordPress training?",
        answer: "Yes, we provide comprehensive training on content management, updates, and maintenance of your WordPress site."
      },
      {
        question: "Can you migrate my existing website to WordPress?",
        answer: "Absolutely! We specialize in seamless website migrations while preserving SEO rankings and content structure."
      },
      {
        question: "Do you offer ongoing WordPress maintenance?",
        answer: "Yes, we provide ongoing maintenance including updates, backups, security monitoring, and performance optimization."
      }
    ],
    ctaText: "Start Your WordPress Project",
    ctaLink: "/contact",
    // Additional Fraylon format sections
    advantages: [
      "Custom WordPress Solutions – Tailored themes and plugins for your specific needs",
      "Performance Optimization – Fast-loading websites that rank well in search engines",
      "Security & Maintenance – Secure, regularly updated WordPress installations",
      "SEO-Ready Development – Built-in SEO optimization for better search rankings"
    ],
    services: [
      {
        title: "Custom WordPress Themes",
        description: "Unique, responsive WordPress themes designed specifically for your brand and requirements."
      },
      {
        title: "WordPress Plugin Development",
        description: "Custom plugins to extend WordPress functionality and meet your specific business needs."
      },
      {
        title: "WordPress Migration",
        description: "Seamless migration of existing websites to WordPress with zero downtime."
      },
      {
        title: "WordPress Maintenance",
        description: "Ongoing maintenance, updates, and security monitoring for your WordPress site."
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
      title: "E-commerce WordPress Platform",
      client: "A growing online retailer",
      challenge: "Existing website couldn't handle increased traffic and lacked essential e-commerce features. Need for a scalable WordPress solution with custom functionality for product management, inventory tracking, and customer accounts.",
      solution: "Developed a custom WordPress e-commerce platform using WooCommerce with custom themes and plugins. Implemented advanced product filtering, inventory management, customer portal, and integrated payment processing. Optimized for performance and SEO.",
      outcome: "500% increase in website speed and performance. 200% increase in online sales. 80% improvement in user experience scores. 300% increase in organic search traffic. Successfully handled 10x traffic growth without issues."
    },
    blogs: [
      {
        title: "WordPress Development Best Practices for 2024",
        date: "Dec 8, 2024",
        link: "/blog/wordpress-best-practices-2024"
      },
      {
        title: "Custom WordPress Plugins: When and How to Build Them",
        date: "Dec 3, 2024",
        link: "/blog/custom-wordpress-plugins"
      },
      {
        title: "WordPress Security: Protecting Your Website",
        date: "Nov 28, 2024",
        link: "/blog/wordpress-security-guide"
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default WordPressDevelopment;
