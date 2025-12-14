import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const MobileAppDevelopment = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Mobile App Development",
    subtitle: "Build Native & Cross-Platform Mobile Apps That Delight Users and Drive Growth",
    description: "We develop high-performance, scalable mobile applications for iOS and Android using cutting-edge native and cross-platform technologies. From initial concept and UI/UX design to App Store deployment and ongoing optimization, we create engaging mobile experiences that drive user retention, business growth, and competitive advantage in the mobile-first world.",
    features: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "UI/UX Design",
      "App Store Optimization",
      "Backend Integration",
      "Performance Optimization"
    ],
    benefits: [
      "Mobile apps account for 70% of all digital media time, making them essential for customer engagement",
      "Cross-platform development reduces time-to-market by 40-50% and cuts development costs by 30%",
      "Users spend 90% of mobile time in apps vs. 10% in mobile browsers",
      "Push notifications achieve 50% higher open rates compared to email marketing",
      "Mobile commerce represents 73% of total e-commerce sales globally",
      "Well-designed mobile apps increase customer retention by 300% compared to mobile websites"
    ],
    industries: [
      "Healthcare",
      "Fintech",
      "E-commerce",
      "Education",
      "Gaming",
      "Social Media",
      "Productivity",
      "IoT"
    ],
    deliverables: [
      "Native iOS and Android apps – Platform-specific applications optimized for best performance and user experience",
      "Cross-platform mobile solution – Single codebase app working on both iOS and Android with native features",
      "App Store and Play Store deployment – Complete submission process with app store optimization and compliance",
      "Backend API development – Scalable server infrastructure with secure data management and real-time sync",
      "Push notification system – Targeted messaging for user engagement and retention with segmentation",
      "Analytics integration – User behavior tracking, crash reporting, and performance monitoring dashboards",
      "App store optimization – Keyword research, screenshots, descriptions optimized for discoverability",
      "User authentication – Secure login with social media integration and biometric authentication",
      "Offline functionality – Data caching and offline mode for uninterrupted app usage",
      "Post-launch support and updates – Bug fixes, OS compatibility updates, and feature enhancements"
    ],
    process: [
      {
        title: "Strategy & Planning",
        description: "Defining app concept, target audience, and technical requirements.",
        duration: "1-2 weeks"
      },
      {
        title: "Design & Prototyping",
        description: "Creating wireframes, UI/UX design, and interactive prototypes.",
        duration: "2-3 weeks"
      },
      {
        title: "Development & Testing",
        description: "Building the app with comprehensive testing and quality assurance.",
        duration: "6-10 weeks"
      },
      {
        title: "Launch & Optimization",
        description: "App Store submission, launch strategy, and performance optimization.",
        duration: "2-3 weeks"
      }
    ],
    testimonials: [
      {
        name: "Jennifer Martinez",
        role: "CEO",
        company: "HealthTrack",
        content: "The mobile app they developed has revolutionized how our patients interact with our services. User retention increased by 60%.",
        rating: 5
      },
      {
        name: "Robert Kim",
        role: "Founder",
        company: "FinTech Mobile",
        content: "Exceptional development team that delivered a complex financial app on time. The user experience is outstanding.",
        rating: 5
      },
      {
        name: "Amanda Davis",
        role: "Product Director",
        company: "EduTech Solutions",
        content: "Their cross-platform approach saved us time and money while delivering native-quality performance.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "Do you develop native or cross-platform apps?",
        answer: "We develop both! We choose the best approach based on your requirements, budget, and timeline."
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer: "Simple apps take 2-3 months, while complex applications can take 4-6 months or more depending on features."
      },
      {
        question: "Do you handle App Store submission?",
        answer: "Yes, we handle the complete App Store and Play Store submission process including optimization and compliance."
      },
      {
        question: "Can you integrate with existing backend systems?",
        answer: "Absolutely! We specialize in integrating mobile apps with existing APIs, databases, and third-party services."
      },
      {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer comprehensive support including bug fixes, updates, feature additions, and performance monitoring."
      }
    ],
    ctaText: "Start Your App",
    ctaLink: "/contact",
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default MobileAppDevelopment;
