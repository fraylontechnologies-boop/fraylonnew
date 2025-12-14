import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const SEOServices = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "SEO Services",
    subtitle: "Improve Your Search Rankings and Drive Organic Traffic",
    description: "We provide comprehensive SEO services that improve your visibility in search engines and drive qualified organic traffic. From technical SEO to content optimization, we boost your online presence.",
    ctaText: "Boost Your SEO",
    ctaLink: "/contact",
    
    advantages: [
      "Proven SEO strategies – Time-tested methodologies that deliver sustainable organic growth",
      "White-hat techniques – Ethical SEO practices that ensure long-term search engine compliance",
      "Transparent reporting – Clear, comprehensive analytics and performance tracking dashboards",
      "Sustainable results – Long-lasting improvements in rankings and organic traffic growth"
    ],
    
    features: [
      "Technical SEO",
      "On-Page Optimization",
      "Link Building",
      "Local SEO",
      "Content Optimization",
      "SEO Audits"
    ],
    
    services: [
      {
        title: "SEO Audit & Strategy",
        description: "Comprehensive analysis and strategic roadmap for SEO success with actionable recommendations."
      },
      {
        title: "Technical SEO",
        description: "Optimize site structure, speed, and crawlability for search engines to improve indexing and rankings."
      },
      {
        title: "Content SEO",
        description: "Keyword research and content optimization for better rankings and increased organic visibility."
      }
    ],
    
    industries: [
      "E-commerce Sites",
      "Local Businesses",
      "SaaS Companies",
      "B2B Services",
      "Content Publishers"
    ],
    
    deliverables: [
      "Comprehensive SEO audit report – Detailed analysis of technical issues, on-page factors, and optimization opportunities",
      "Keyword research document – Target keywords with search volume, competition, and ranking difficulty analysis",
      "On-page optimization checklist – Page-by-page recommendations for meta tags, headers, and content improvements",
      "Technical SEO fixes – Implementation of site speed, mobile optimization, schema markup, and crawlability improvements",
      "Content optimization guidelines – SEO-focused content briefs with keyword targeting and structure recommendations",
      "Link building strategy – Plan for acquiring high-quality backlinks through outreach and content partnerships",
      "Local SEO setup – Google Business Profile optimization, local citations, and location-based content",
      "Monthly ranking reports – Keyword position tracking with traffic and conversion metrics analysis",
      "Competitor analysis – Insights into competitor strategies, keywords, and backlink profiles",
      "Ongoing optimization recommendations – Continuous improvements based on performance data and algorithm updates"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "SEO Audit",
        description: "Comprehensive analysis of your website's current SEO status.",
        duration: "1 week"
      },
      {
        title: "Strategy & Planning",
        description: "Creating a customized SEO roadmap for your business.",
        duration: "1 week"
      },
      {
        title: "On-Page Optimization",
        description: "Optimizing content, meta tags, and site structure.",
        duration: "2-4 weeks"
      },
      {
        title: "Ongoing Optimization",
        description: "Continuous monitoring, reporting, and improvements.",
        duration: "Monthly"
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
        question: "How long does SEO take to show results?",
        answer: "Typically 3-6 months for noticeable improvements, with continued growth over time."
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer: "We don't guarantee specific rankings as no one can control Google's algorithm, but we use proven strategies to improve visibility."
      },
      {
        question: "What's included in your SEO service?",
        answer: "Technical SEO, on-page optimization, content strategy, link building, and monthly reporting."
      },
      {
        question: "Do you handle local SEO?",
        answer: "Yes, we specialize in local SEO including Google Business Profile optimization and local citations."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default SEOServices;
