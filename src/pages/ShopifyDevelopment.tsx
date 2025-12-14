import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const ShopifyDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Shopify Development",
    subtitle: "Create High-Converting E-commerce Stores That Drive Sales and Growth",
    description: "We build custom Shopify stores and applications that maximize conversions and provide exceptional user experiences. From store setup to advanced customizations, we deliver scalable e-commerce solutions that help businesses succeed online.",
    features: [
      "Custom Shopify Themes",
      "App Development",
      "Payment Integration",
      "Inventory Management",
      "SEO Optimization",
      "Performance Tuning"
    ],
    benefits: [
      "50% increase in conversion rates",
      "Faster checkout process",
      "Mobile-optimized shopping experience",
      "Advanced analytics and reporting",
      "Secure payment processing",
      "Scalable infrastructure"
    ],
    industries: [
      "Fashion & Apparel",
      "Electronics",
      "Health & Beauty",
      "Home & Garden",
      "Sports & Fitness",
      "Food & Beverage",
      "Jewelry & Accessories",
      "Books & Media"
    ],
    deliverables: [
      "Custom Shopify store setup – Complete store configuration with branding, navigation, and optimized checkout",
      "Theme development and customization – Responsive, conversion-optimized theme tailored to your brand",
      "Payment gateway integration – Multiple payment options including Shopify Payments, Stripe, and PayPal",
      "Product catalog management – Organized product structure with variants, collections, and inventory tracking",
      "SEO optimization – Meta tags, URL structure, and schema markup for better search rankings",
      "Analytics setup – Google Analytics, Facebook Pixel, and Shopify analytics for data-driven decisions",
      "Shipping configuration – Real-time shipping rates, zones, and carrier integration for accurate costs",
      "App integrations – Essential Shopify apps for email marketing, reviews, and upselling",
      "Staff training – Comprehensive training on managing products, orders, and store settings",
      "Ongoing support – Post-launch assistance with updates, optimizations, and technical support"
    ],
    process: [
      {
        title: "Discovery & Strategy",
        description: "Understanding your business goals, target audience, and product catalog.",
        duration: "1 week"
      },
      {
        title: "Design & Development",
        description: "Creating custom themes, setting up store functionality, and integrations.",
        duration: "3-4 weeks"
      },
      {
        title: "Testing & Optimization",
        description: "Quality assurance, performance testing, and conversion optimization.",
        duration: "1 week"
      },
      {
        title: "Launch & Training",
        description: "Store launch, staff training, and ongoing support setup.",
        duration: "1 week"
      }
    ],
    testimonials: [
      {
        name: "Michael Thompson",
        role: "Founder",
        company: "FashionForward",
        content: "Our Shopify store conversion rate increased by 50% after their optimization. The custom features they built have been game-changing for our business.",
        rating: 5
      },
      {
        name: "Jennifer Lee",
        role: "CEO",
        company: "TechGadgets",
        content: "Professional Shopify development team that delivered a beautiful, fast-loading store. Our sales have tripled since the launch.",
        rating: 5
      },
      {
        name: "Robert Martinez",
        role: "Marketing Director",
        company: "EcoProducts",
        content: "The custom Shopify app they developed has streamlined our inventory management and improved our operational efficiency significantly.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "Can you migrate my existing store to Shopify?",
        answer: "Yes, we specialize in seamless e-commerce migrations while preserving product data, customer information, and SEO rankings."
      },
      {
        question: "Do you develop custom Shopify apps?",
        answer: "Absolutely! We create custom Shopify apps to extend functionality and integrate with your existing business systems."
      },
      {
        question: "How do you optimize Shopify stores for conversions?",
        answer: "We focus on user experience, checkout optimization, mobile responsiveness, and implementing conversion best practices."
      },
      {
        question: "Do you provide Shopify Plus development?",
        answer: "Yes, we have extensive experience with Shopify Plus for enterprise-level e-commerce solutions."
      },
      {
        question: "What payment gateways do you integrate?",
        answer: "We integrate with all major payment providers including Stripe, PayPal, Square, and regional payment methods."
      }
    ],
    ctaText: "Build Your Shopify Store",
    ctaLink: "/contact",
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ShopifyDevelopment;
