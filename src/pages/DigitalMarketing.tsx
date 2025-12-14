import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const DigitalMarketing = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Digital Marketing",
    subtitle: "Drive Growth with Data-Driven Marketing Strategies That Deliver Results",
    description: "We create comprehensive digital marketing campaigns that increase brand awareness, generate leads, and drive conversions. Our data-driven approach ensures maximum ROI for your marketing investment.",
    features: [
      "SEO & Content Marketing",
      "Social Media Management",
      "PPC Advertising",
      "Email Marketing",
      "Analytics & Reporting",
      "Conversion Optimization"
    ],
    benefits: [
      "300% increase in organic traffic",
      "50% improvement in conversion rates",
      "40% reduction in cost per acquisition",
      "Enhanced brand visibility",
      "Better customer engagement",
      "Measurable ROI tracking"
    ],
    industries: [
      "E-commerce",
      "SaaS",
      "Healthcare",
      "Real Estate",
      "Professional Services",
      "Manufacturing",
      "Education",
      "Non-profit"
    ],
    deliverables: [
      "SEO-optimized website – Complete on-page and technical SEO optimization for improved search engine rankings",
      "Content marketing strategy – Editorial calendar with keyword-targeted blog posts, articles, and landing pages",
      "Social media campaigns – Managed profiles with daily posts, engagement, and paid social advertising across platforms",
      "PPC campaign management – Google Ads and social media ads with A/B testing and conversion optimization",
      "Email marketing automation – Segmented email campaigns with automated workflows and personalization",
      "Analytics and reporting – Monthly performance reports with traffic, conversions, ROI, and actionable insights",
      "Lead generation system – Landing pages, forms, and nurture sequences designed to capture and convert leads",
      "Marketing automation setup – CRM integration and automated marketing workflows for lead nurturing",
      "Competitor analysis – Comprehensive analysis of competitor strategies with recommendations for differentiation",
      "Conversion rate optimization – A/B testing, heatmap analysis, and UX improvements to boost conversions"
    ],
    process: [
      {
        title: "Audit & Strategy",
        description: "Analyzing current performance and developing comprehensive marketing strategy.",
        duration: "1-2 weeks"
      },
      {
        title: "Implementation",
        description: "Setting up campaigns, content creation, and optimization across all channels.",
        duration: "2-4 weeks"
      },
      {
        title: "Optimization",
        description: "Continuous monitoring, testing, and improving campaign performance.",
        duration: "Ongoing"
      },
      {
        title: "Reporting & Analysis",
        description: "Regular reporting and strategic adjustments based on performance data.",
        duration: "Monthly"
      }
    ],
    testimonials: [
      {
        name: "Mark Thompson",
        role: "Marketing Director",
        company: "TechCorp",
        content: "Our organic traffic increased by 300% in just 6 months. Their SEO strategy is incredibly effective.",
        rating: 5
      },
      {
        name: "Sarah Johnson",
        role: "CEO",
        company: "EcoStore",
        content: "The digital marketing team transformed our online presence. Our sales have doubled since working with them.",
        rating: 5
      },
      {
        name: "David Lee",
        role: "Founder",
        company: "StartupHub",
        content: "Professional team that delivers measurable results. Our lead generation improved by 150%.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "How long does it take to see results from digital marketing?",
        answer: "SEO results typically appear in 3-6 months, while PPC and social media can show immediate results."
      },
      {
        question: "Do you work with small businesses?",
        answer: "Yes, we work with businesses of all sizes and create customized strategies that fit your budget."
      },
      {
        question: "What's included in your reporting?",
        answer: "We provide detailed monthly reports including traffic, conversions, ROI, and strategic recommendations."
      },
      {
        question: "Can you integrate with our existing tools?",
        answer: "Absolutely! We work with all major marketing tools including Google Analytics, HubSpot, Mailchimp, and more."
      },
      {
        question: "Do you provide content creation services?",
        answer: "Yes, we offer comprehensive content creation including blog posts, social media content, and email campaigns."
      }
    ],
    ctaText: "Boost Your Marketing",
    ctaLink: "/contact",
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default DigitalMarketing;
