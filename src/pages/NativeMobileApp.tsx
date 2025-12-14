import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const NativeMobileApp = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Native Mobile App Development",
    subtitle: "High-Performance Native Apps for iOS and Android",
    description: "We build native mobile applications that deliver the best performance and user experience. Using Swift for iOS and Kotlin for Android, we create apps that users love.",
    ctaText: "Start Your App Project",
    ctaLink: "/contact",
    
    advantages: [
      "Platform-specific expertise – Native iOS and Android development for optimal performance",
      "Optimal performance – Leveraging platform capabilities for fast, responsive applications",
      "Native UI/UX – Platform-specific design patterns for intuitive user experiences",
      "App Store optimization – Expert guidance on app store submission and visibility"
    ],
    
    features: [
      "iOS App Development (Swift)",
      "Android App Development (Kotlin)",
      "App Store Deployment",
      "Push Notifications",
      "In-App Purchases",
      "Offline Functionality"
    ],
    
    services: [
      {
        title: "iOS Development",
        description: "Native iOS apps built with Swift for iPhone and iPad with App Store compliance."
      },
      {
        title: "Android Development",
        description: "Native Android apps built with Kotlin for all Android devices with Google Play optimization."
      },
      {
        title: "App Maintenance",
        description: "Ongoing updates, bug fixes, feature enhancements, and OS compatibility updates."
      }
    ],
    
    industries: [
      "Consumer Apps",
      "Enterprise Apps",
      "E-commerce Apps",
      "Social Networking",
      "On-Demand Services"
    ],
    
    deliverables: [
      "Native iOS app – Swift-based iPhone/iPad application with optimized performance and native UI",
      "Native Android app – Kotlin-based Android application supporting latest OS versions",
      "App Store submission – Complete app store setup with screenshots, descriptions, and launch",
      "Push notification system – Integrated push messaging for user engagement and updates",
      "In-app purchases – Subscription or one-time payment integration with App Store/Play Store",
      "Offline functionality – Data caching and offline mode for uninterrupted app usage",
      "Backend API integration – Connected services for data sync, authentication, and cloud features",
      "Analytics integration – User behavior tracking and app performance monitoring",
      "Crash reporting – Automated error tracking and crash analytics for stability",
      "App documentation – Technical documentation and user guides for app features"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Planning & Design",
        description: "Defining features and creating UI/UX designs.",
        duration: "2-3 weeks"
      },
      {
        title: "Development",
        description: "Building native apps for iOS and Android platforms.",
        duration: "8-12 weeks"
      },
      {
        title: "Testing & QA",
        description: "Comprehensive testing across devices and OS versions.",
        duration: "2 weeks"
      },
      {
        title: "Launch & Support",
        description: "App store submission and post-launch support.",
        duration: "1-2 weeks"
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
        question: "What's the difference between native and hybrid apps?",
        answer: "Native apps are built specifically for each platform, offering better performance and user experience than hybrid apps."
      },
      {
        question: "Do you build for both iOS and Android?",
        answer: "Yes, we develop native apps for both iOS (Swift) and Android (Kotlin) platforms."
      },
      {
        question: "How long does app development take?",
        answer: "Simple apps take 2-3 months, while complex apps with advanced features may take 4-6 months."
      },
      {
        question: "Do you handle app store submissions?",
        answer: "Yes, we manage the entire app store submission process for both Apple App Store and Google Play Store."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default NativeMobileApp;
