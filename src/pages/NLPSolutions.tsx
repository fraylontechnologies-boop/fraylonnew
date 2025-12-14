import { useEffect } from 'react';
import SolutionPage from '../components/SolutionPage';
import { scrollToTop } from '../utils/scrollUtils';

const NLPSolutions = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Natural Language Processing (NLP) Solutions",
    subtitle: "Unlock the Power of Human Language with NLP",
    description: "We build NLP solutions that understand, interpret, and generate human language. From chatbots to sentiment analysis, we create intelligent language-based applications.",
    ctaText: "Explore NLP Solutions",
    ctaLink: "/contact",

    advantages: [
      "Advanced NLP expertise – Deep knowledge of natural language processing and computational linguistics",
      "Custom language models – Domain-specific models trained on your data for better accuracy",
      "Multi-language support – Solutions supporting 50+ languages including low-resource languages",
      "Scalable solutions – Cloud-native architecture handling millions of text processing requests"
    ],

    features: [
      "Chatbot Development",
      "Sentiment Analysis",
      "Text Classification",
      "Named Entity Recognition",
      "Language Translation",
      "Speech Recognition"
    ],

    services: [
      {
        title: "AI Chatbots",
        description: "Intelligent conversational interfaces powered by NLP for customer support and engagement."
      },
      {
        title: "Text Analytics",
        description: "Extract insights from unstructured text data including sentiment, topics, and entities."
      },
      {
        title: "Language Models",
        description: "Custom NLP models trained for your specific domain and business requirements."
      }
    ],

    industries: [
      "Customer Support",
      "Content Analysis",
      "Document Processing",
      "Voice Assistants",
      "Market Research"
    ],

    deliverables: [
      "Custom NLP models – Trained models for text classification, entity extraction, or sentiment analysis",
      "AI chatbot system – Conversational AI with intent recognition and context management",
      "Text analytics pipeline – Automated processing workflow for large-scale text analysis",
      "API endpoints – RESTful APIs for easy integration of NLP capabilities into applications",
      "Language understanding engine – NLU system for parsing user queries and extracting meaning",
      "Multi-language support – Models supporting multiple languages with translation capabilities",
      "Knowledge base integration – Connected FAQ and documentation for intelligent responses",
      "Performance metrics dashboard – Real-time tracking of model accuracy, latency, and usage",
      "Training data preparation – Annotated datasets for model training and validation",
      "Model deployment – Production-ready deployment with auto-scaling and monitoring"
    ],

    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],

    process: [
      {
        title: "Use Case Analysis",
        description: "Understanding your language processing requirements.",
        duration: "1 week"
      },
      {
        title: "Model Selection & Training",
        description: "Choosing and training appropriate NLP models.",
        duration: "2-4 weeks"
      },
      {
        title: "Integration & Testing",
        description: "Implementing NLP solutions into your systems.",
        duration: "2-3 weeks"
      },
      {
        title: "Optimization",
        description: "Fine-tuning models for better accuracy.",
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
        question: "What is NLP?",
        answer: "Natural Language Processing enables computers to understand, interpret, and generate human language in a valuable way."
      },
      {
        question: "Can NLP work in multiple languages?",
        answer: "Yes, we build multilingual NLP solutions supporting various languages."
      },
      {
        question: "How accurate are NLP models?",
        answer: "Modern NLP models achieve 85-95% accuracy for most tasks, and we continuously optimize for better performance."
      },
      {
        question: "What's the difference between NLP and AI?",
        answer: "NLP is a subset of AI focused specifically on language understanding and generation."
      }
    ]
  };

  return <SolutionPage {...serviceData} />;
};

export default NLPSolutions;
