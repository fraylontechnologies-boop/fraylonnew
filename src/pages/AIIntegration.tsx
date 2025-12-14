import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const AIIntegration = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "AI Integration & Strategy Consulting",
    subtitle: "Harness the Power of AI to Transform Your Business",
    description: "We help businesses integrate AI technologies into their operations. From strategy to implementation, we deliver AI solutions that drive efficiency and innovation.",
    ctaText: "Explore AI Solutions",
    ctaLink: "/contact",
    
    advantages: [
      "AI strategy expertise – Deep understanding of AI technologies and business applications across industries",
      "Custom AI implementations – Tailored solutions designed specifically for your unique business requirements",
      "Ethical AI practices – Responsible AI development with transparency, fairness, and bias mitigation",
      "ROI-focused solutions – Measurable business value with clear metrics and performance tracking"
    ],
    
    features: [
      "AI Strategy Development",
      "Machine Learning",
      "ChatGPT Integration",
      "Predictive Analytics",
      "Process Automation",
      "AI Model Training"
    ],
    
    services: [
      {
        title: "AI Strategy Consulting",
        description: "Develop comprehensive AI strategies aligned with business objectives and digital transformation goals."
      },
      {
        title: "AI Implementation",
        description: "Integrate AI technologies into existing systems and workflows with minimal disruption to operations."
      },
      {
        title: "Custom AI Solutions",
        description: "Build custom AI models and applications for specific use cases with ongoing optimization and support."
      }
    ],
    
    industries: [
      "Customer Service Automation",
      "Predictive Analytics",
      "Content Generation",
      "Process Optimization",
      "Data Analysis"
    ],
    
    deliverables: [
      "AI readiness assessment – Comprehensive evaluation of your organization's AI maturity and opportunities",
      "AI strategy roadmap – Detailed plan with prioritized use cases, timelines, and resource requirements",
      "Custom AI models – Trained machine learning models tailored to your specific business data and objectives",
      "Integration documentation – Technical specifications for seamless integration with existing systems",
      "API endpoints – RESTful APIs for easy access to AI capabilities across your technology stack",
      "Training materials – Comprehensive documentation and workshops for your team to leverage AI tools",
      "Performance dashboards – Real-time monitoring and analytics to track AI model performance and ROI",
      "Data pipeline setup – Automated data collection, processing, and model training infrastructure",
      "Ethics and compliance framework – Guidelines ensuring responsible AI use and regulatory compliance",
      "Ongoing optimization – Continuous model improvement and fine-tuning based on performance data"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "AI Strategy Workshop",
        description: "Identifying AI opportunities within your business.",
        duration: "1-2 weeks"
      },
      {
        title: "Solution Design",
        description: "Designing AI solutions aligned with your goals.",
        duration: "2-3 weeks"
      },
      {
        title: "Implementation",
        description: "Integrating AI technologies into your systems.",
        duration: "4-8 weeks"
      },
      {
        title: "Training & Optimization",
        description: "Team training and continuous AI model improvement.",
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
        question: "How can AI benefit my business?",
        answer: "AI can automate tasks, provide insights from data, improve customer experience, and drive operational efficiency."
      },
      {
        question: "Do we need a lot of data for AI?",
        answer: "It depends on the use case. Some AI solutions work well with limited data, while others require larger datasets."
      },
      {
        question: "How much does AI implementation cost?",
        answer: "Costs vary based on complexity. Simple chatbots can start at $10K, while enterprise AI solutions may require $100K+."
      },
      {
        question: "Do you provide AI training for our team?",
        answer: "Yes, we include comprehensive training to ensure your team can effectively use and maintain AI solutions."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default AIIntegration;
