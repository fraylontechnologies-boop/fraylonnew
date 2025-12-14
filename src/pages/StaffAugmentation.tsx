import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const StaffAugmentation = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "IT Staff Augmentation",
    subtitle: "Scale Your Team with Expert IT Professionals",
    description: "We provide skilled IT professionals to augment your team on-demand. From developers to DevOps engineers, we match the right talent to your project needs.",
    ctaText: "Find Your IT Talent",
    ctaLink: "/contact",
    
    advantages: [
      "Pre-vetted tech professionals – Rigorously screened experts with proven track records and verified skills",
      "Flexible engagement models – Scalable solutions from hourly contracts to dedicated long-term teams",
      "Fast onboarding – Streamlined integration process to get professionals productive quickly",
      "Cost-effective scaling – Access top talent without the overhead of full-time employment costs"
    ],
    
    features: [
      "Software Developers",
      "DevOps Engineers",
      "QA Engineers",
      "UI/UX Designers",
      "Project Managers",
      "Data Scientists"
    ],
    
    services: [
      {
        title: "Contract Staffing",
        description: "Short-term or long-term IT professionals for project-based work with flexible terms and conditions."
      },
      {
        title: "Dedicated Teams",
        description: "Fully dedicated development teams working exclusively on your projects with full commitment."
      },
      {
        title: "Skill-Based Hiring",
        description: "Specialists with specific technical skills to fill gaps in your team and enhance capabilities."
      }
    ],
    
    industries: [
      "Startups",
      "Growing Companies",
      "Enterprise Projects",
      "Product Development",
      "Digital Agencies"
    ],
    
    deliverables: [
      "Pre-vetted candidate profiles – Detailed resumes with verified skills, experience, and technical assessments",
      "Skills assessment reports – Results from technical tests and coding challenges for each candidate",
      "Onboarding documentation – Comprehensive guides for integrating new team members into workflows",
      "NDA and contract templates – Legal agreements ensuring confidentiality and clear engagement terms",
      "Time tracking and reporting – Weekly activity reports and timesheet summaries for transparency",
      "Performance evaluation framework – Structured review process with KPIs and feedback mechanisms",
      "Team integration support – Assistance with tool access, project briefings, and team introductions",
      "Flexible scaling options – Ability to quickly ramp up or down team size based on project needs",
      "Replacement guarantee – Fast replacement of team members who don't meet expectations",
      "Ongoing management support – Regular check-ins and coordination to ensure smooth collaboration"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Requirements Analysis",
        description: "Understanding your technical needs and team requirements.",
        duration: "1-3 days"
      },
      {
        title: "Candidate Selection",
        description: "Matching pre-vetted professionals to your needs.",
        duration: "3-5 days"
      },
      {
        title: "Onboarding",
        description: "Integrating team members into your workflows.",
        duration: "1 week"
      },
      {
        title: "Ongoing Management",
        description: "Regular check-ins and performance monitoring.",
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
        question: "How quickly can you provide staff?",
        answer: "We can typically onboard pre-vetted professionals within 1-2 weeks."
      },
      {
        question: "What are your engagement models?",
        answer: "We offer hourly, monthly, and project-based contracts to fit your needs."
      },
      {
        question: "Can we convert staff to full-time?",
        answer: "Yes, we offer hire-to-convert options for team members who are a great fit."
      },
      {
        question: "What if a team member isn't working out?",
        answer: "We provide replacement guarantees to ensure you always have the right talent."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default StaffAugmentation;
