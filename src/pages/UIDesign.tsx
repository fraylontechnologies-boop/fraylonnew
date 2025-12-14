import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const UIDesign = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "UI/UX & Product Design",
    subtitle: "User-Centric UI/UX & Product Design for Digital Success",
    description: "A well-crafted UI/UX design is more than just aesthetics—it's about usability, accessibility, and ensuring a seamless digital experience that drives engagement and conversions. Whether designing a web platform, mobile app, SaaS product, or enterprise dashboard, our human-centered design approach ensures a frictionless and intuitive user journey that prioritizes functionality, aesthetics, and business goals.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
      "Design Systems",
      "Conversion Optimization"
    ],
    benefits: [
      "Good UI can increase website conversion rates by up to 200%, and UX design can boost conversions by 400%",
      "88% of online users will not return to a site after a bad user experience",
      "Companies that invest in UX see a return of $100 for every $1 spent on design",
      "Poor mobile optimization accounts for 57% of users leaving a website instantly",
      "Improved brand perception and customer loyalty through intuitive design",
      "Reduced development costs through early design validation and prototyping"
    ],
    industries: [
      "SaaS Platforms – User-friendly dashboards, onboarding flows, and subscription management interfaces",
      "E-commerce & Retail – Optimized product pages, checkout experiences, and mobile shopping apps",
      "Healthcare & MedTech – Patient portals, telemedicine interfaces, and medical device UIs",
      "Fintech & Banking – Financial dashboards, payment interfaces, and investment platforms",
      "Education & E-Learning – Learning management systems, student portals, and interactive courses",
      "Real Estate & PropTech – Property search interfaces, virtual tour experiences, and CRM dashboards",
      "Travel & Hospitality – Booking platforms, travel planning apps, and customer portals",
      "Gaming & Entertainment – Game interfaces, streaming platforms, and social gaming experiences"
    ],
    deliverables: [
      "Comprehensive User Research Report – User personas, journey maps, competitive analysis, and behavioral insights from interviews and surveys",
      "Information Architecture – Sitemaps, user flows, content hierarchy, and navigation structures optimized for usability",
      "Low & High-Fidelity Wireframes – Detailed wireframes showing layout, content placement, and interaction patterns",
      "Interactive Prototypes – Clickable prototypes in Figma/Adobe XD for user testing and stakeholder presentations",
      "Visual Design System – Color palettes, typography, iconography, spacing guidelines, and reusable component library",
      "Responsive Design Files – Desktop, tablet, and mobile designs with breakpoint specifications and adaptive layouts",
      "Usability Testing Reports – Test results, heatmaps, user feedback analysis, and actionable improvement recommendations",
      "Accessibility Compliance – WCAG 2.1 AA compliant designs with screen reader optimization and keyboard navigation",
      "Developer Handoff Package – Design specifications, asset exports, design tokens, and Figma/Zeplin developer access",
      "Design Documentation – Style guide, component usage guidelines, and design principles for future scalability"
    ],
    process: [
      {
        title: "Research & Discovery",
        description: "Understanding users, business goals, and competitive landscape.",
        duration: "1-2 weeks"
      },
      {
        title: "Information Architecture",
        description: "Creating user flows, sitemaps, and content structure.",
        duration: "1 week"
      },
      {
        title: "Design & Prototyping",
        description: "Creating wireframes, visual designs, and interactive prototypes.",
        duration: "3-4 weeks"
      },
      {
        title: "Testing & Refinement",
        description: "Usability testing, feedback integration, and final refinements.",
        duration: "1-2 weeks"
      }
    ],
    testimonials: [
      {
        name: "Alex Thompson",
        role: "Product Manager",
        company: "SaaSFlow",
        content: "The UI/UX design they created transformed our product. User engagement increased by 40% and our conversion rates improved significantly.",
        rating: 5
      },
      {
        name: "Lisa Wang",
        role: "Founder",
        company: "EcoShop",
        content: "Their design process was thorough and the final result exceeded our expectations. Our customers love the new interface.",
        rating: 5
      },
      {
        name: "David Kumar",
        role: "CTO",
        company: "HealthTech Solutions",
        content: "Professional design team that understood our complex requirements and delivered an intuitive solution.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "What's the difference between UI and UX design?",
        answer: "UI (User Interface) focuses on the visual elements and layout, while UX (User Experience) focuses on the overall user journey and usability."
      },
      {
        question: "Do you conduct user research?",
        answer: "Yes, we conduct comprehensive user research including interviews, surveys, and usability testing to inform our design decisions."
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer: "Absolutely! We ensure all designs align with your brand identity and existing guidelines while improving user experience."
      },
      {
        question: "Do you provide design systems?",
        answer: "Yes, we create comprehensive design systems that ensure consistency across all touchpoints and make future updates easier."
      },
      {
        question: "How do you measure design success?",
        answer: "We track metrics like user engagement, conversion rates, task completion rates, and user satisfaction scores."
      }
    ],
    ctaText: "Get Your Design Quote",
    ctaLink: "/contact",
    // Additional Fraylon format sections
    advantages: [
      "User-Centered Design – Solutions designed around your users' needs and behaviors",
      "Modern Design Systems – Scalable design systems that ensure consistency across all touchpoints",
      "Cross-Platform Expertise – Seamless experiences across web, mobile, and desktop applications",
      "Data-Driven Design – Design decisions backed by user research and analytics"
    ],
    services: [
      {
        title: "UX Research & Strategy",
        description: "In-depth user research, competitive analysis, user personas, journey mapping, and data-driven UX strategy to inform design decisions."
      },
      {
        title: "UI/UX Design for Web & Mobile",
        description: "Comprehensive interface design for responsive websites, progressive web apps, iOS/Android apps, and cross-platform solutions."
      },
      {
        title: "Design Systems & Component Libraries",
        description: "Scalable design systems with reusable components, design tokens, and comprehensive documentation for brand consistency."
      },
      {
        title: "Usability Testing & Optimization",
        description: "User testing sessions, A/B testing, heatmap analysis, and continuous optimization for improved conversion rates."
      },
      {
        title: "Product Redesign & Modernization",
        description: "Transform outdated interfaces with modern design principles, improved user flows, and enhanced accessibility features."
      },
      {
        title: "Prototyping & Interaction Design",
        description: "Interactive prototypes with micro-interactions, animations, and realistic user flows for validation before development."
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
      title: "SaaS Dashboard Redesign for Enterprise Analytics Platform",
      client: "A $500M ARR B2B SaaS analytics company",
      challenge: "Complex analytics dashboard with poor usability causing 45% customer churn during onboarding. Users struggled with overwhelming data visualization, unclear navigation (avg. 12 clicks to reach key features), and non-intuitive workflows. Mobile experience was virtually non-existent. User satisfaction score was 58%, and support tickets related to UI issues accounted for 40% of total inquiries. Time-to-value for new users averaged 6 weeks.",
      solution: "Conducted extensive user research with 50+ enterprise clients including interviews, surveys, and usability testing sessions. Created detailed user personas and journey maps. Redesigned information architecture to reduce complexity and prioritize key workflows. Developed a comprehensive design system with 120+ reusable components. Created intuitive data visualization with customizable dashboards and real-time collaboration features. Implemented responsive mobile design for on-the-go analytics. Added guided onboarding with interactive tutorials and contextual help. Built interactive Figma prototypes and conducted 5 rounds of user testing for iterative refinement.",
      outcome: "User satisfaction score increased from 58% to 91% (57% improvement). Onboarding churn reduced from 45% to 12% (73% reduction). Average time-to-value decreased from 6 weeks to 3 days (14x faster). Support tickets related to UI decreased by 68%. Mobile app achieved 4.8/5 rating with 200% increase in mobile user engagement. Net Promoter Score (NPS) increased from 32 to 67. Product-led growth resulted in 40% increase in user referrals. Customer lifetime value increased by 35%."
    },
    blogs: [
      {
        title: "UI/UX Design Trends 2024: What's Next in Digital Design",
        date: "Dec 13, 2024",
        link: "/blog/ui-ux-trends-2024"
      },
      {
        title: "Building Effective Design Systems: A Complete Guide",
        date: "Dec 6, 2024",
        link: "/blog/design-systems-guide"
      },
      {
        title: "User Research Methods: How to Understand Your Users",
        date: "Dec 1, 2024",
        link: "/blog/user-research-methods"
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default UIDesign;
