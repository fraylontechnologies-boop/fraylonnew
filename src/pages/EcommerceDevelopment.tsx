import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const EcommerceDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "E-commerce Development",
    subtitle: "Build Powerful Online Stores That Drive Sales and Growth",
    description: "We create comprehensive e-commerce solutions that provide seamless shopping experiences, secure payment processing, and powerful management tools. From simple online stores to complex multi-vendor marketplaces, we deliver scalable e-commerce platforms that convert visitors into customers.",
    features: [
      "Custom E-commerce Platforms",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing System",
      "Customer Management",
      "Analytics & Reporting"
    ],
    benefits: [
      "200% increase in online sales",
      "50% faster checkout process",
      "Mobile-optimized shopping experience",
      "Secure payment processing",
      "Real-time inventory tracking",
      "Advanced analytics dashboard"
    ],
    industries: [
      "Retail & Fashion",
      "Electronics",
      "Food & Beverage",
      "Health & Beauty",
      "Home & Garden",
      "Sports & Fitness",
      "Books & Media",
      "B2B Commerce"
    ],
    deliverables: [
      "Fully functional e-commerce website – Complete online store with shopping cart, checkout, and product catalog",
      "Payment gateway integration – Secure payment processing with multiple payment methods and fraud protection",
      "Inventory management system – Real-time stock tracking, automated reordering, and low-stock alerts",
      "Order tracking system – Complete order lifecycle management from placement to delivery with notifications",
      "Customer portal – Customer accounts, order history, wishlist, and personalized recommendations",
      "Admin dashboard – Comprehensive backend for managing products, orders, customers, and analytics",
      "SEO optimization – Search engine optimization for better visibility, organic traffic, and rankings",
      "Shipping integration – Real-time shipping rates, label printing, and tracking from major carriers",
      "Email automation – Automated transactional emails for orders, shipping, and abandoned cart recovery",
      "Mobile app (optional) – Native mobile application for iOS and Android platforms with push notifications"
    ],
    process: [
      {
        title: "Discovery & Strategy",
        description: "We analyze your business model, target audience, and requirements to create a comprehensive e-commerce strategy.",
        duration: "1-2 weeks"
      },
      {
        title: "Design & UX",
        description: "Our designers create intuitive user interfaces that guide customers through a seamless shopping experience.",
        duration: "2-3 weeks"
      },
      {
        title: "Development & Integration",
        description: "We build your e-commerce platform with secure payment processing and third-party integrations.",
        duration: "6-10 weeks"
      },
      {
        title: "Testing & Launch",
        description: "Thorough testing ensures your platform works flawlessly before going live with your customers.",
        duration: "2 weeks"
      }
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "CEO",
        company: "Fashion Forward",
        content: "Our online sales increased by 300% after launching our new e-commerce platform. The user experience is incredible!",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What e-commerce platforms do you work with?",
        answer: "We work with Shopify, WooCommerce, Magento, and custom solutions. We choose the best platform based on your specific needs."
      },
      {
        question: "How do you handle payment security?",
        answer: "We implement industry-standard security measures including SSL certificates, PCI compliance, and secure payment gateways."
      },
      {
        question: "Can you integrate with our existing inventory system?",
        answer: "Yes, we can integrate with most inventory management systems and ERPs to keep your stock levels synchronized."
      },
      {
        question: "Do you provide training for managing the store?",
        answer: "Absolutely! We provide comprehensive training for you and your team to manage products, orders, and customers effectively."
      }
    ],
    ctaText: "Start Your E-commerce Project",
    ctaLink: "/contact",
    // Additional Fraylon format sections
    advantages: [
      "Custom E-commerce Solutions – Tailored online stores designed for your business model",
      "Secure Payment Integration – Multiple payment gateways with PCI compliance",
      "Mobile-First Design – Optimized shopping experience across all devices",
      "Advanced Analytics & Reporting – Data-driven insights for business growth"
    ],
    services: [
      {
        title: "Custom E-commerce Platforms",
        description: "Build powerful online stores with advanced features and seamless user experience."
      },
      {
        title: "Payment Gateway Integration",
        description: "Secure payment processing with multiple payment options and fraud protection."
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking and automated stock management systems."
      },
      {
        title: "Order Processing System",
        description: "Streamlined order management from cart to delivery with tracking capabilities."
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
      title: "Multi-Vendor E-commerce Marketplace",
      client: "A leading retail company",
      challenge: "Need to create a multi-vendor marketplace to connect suppliers with customers. Required complex vendor management, commission tracking, and scalable architecture to handle thousands of vendors and millions of products.",
      solution: "Developed a custom multi-vendor e-commerce platform with vendor dashboard, commission management, and advanced search functionality. Integrated multiple payment gateways and implemented real-time inventory synchronization across all vendors.",
      outcome: "300% increase in online sales within 6 months. Successfully onboarded 500+ vendors. 50% reduction in order processing time. 95% vendor satisfaction rate with the platform."
    },
    blogs: [
      {
        title: "E-commerce Trends 2024: What Every Online Store Needs to Know",
        date: "Dec 12, 2024",
        link: "/blog/ecommerce-trends-2024"
      },
      {
        title: "Building a Successful Multi-Vendor Marketplace",
        date: "Dec 8, 2024",
        link: "/blog/multi-vendor-marketplace"
      },
      {
        title: "E-commerce Security: Protecting Your Online Store",
        date: "Dec 3, 2024",
        link: "/blog/ecommerce-security"
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default EcommerceDevelopment;
