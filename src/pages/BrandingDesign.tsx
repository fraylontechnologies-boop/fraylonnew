import { useEffect } from 'react';
import ServicePage from '../components/ServicePage';
import { scrollToTop } from '../utils/scrollUtils';

const BrandingDesign = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const serviceData = {
    title: "Branding & Visual Identity",
    subtitle: "Create a Memorable Brand Identity That Resonates",
    description: "We craft unique brand identities that capture your essence and connect with your audience. From logos to complete brand guidelines, we create cohesive visual systems that stand out.",
    ctaText: "Start Your Branding Project",
    ctaLink: "/contact",
    
    advantages: [
      "Strategic brand development – Research-driven brand positioning that differentiates you in the market",
      "Unique visual identities – Distinctive designs that authentically represent your brand essence",
      "Comprehensive brand guidelines – Detailed documentation ensuring consistent brand application",
      "Market research-driven design – Data-informed creative decisions for maximum brand impact"
    ],
    
    features: [
      "Logo Design",
      "Brand Strategy",
      "Visual Identity Systems",
      "Brand Guidelines",
      "Packaging Design",
      "Marketing Collateral"
    ],
    
    services: [
      {
        title: "Logo & Identity Design",
        description: "Distinctive logos and visual identities that represent your brand essence and resonate with your target audience."
      },
      {
        title: "Brand Strategy",
        description: "Comprehensive brand positioning and messaging frameworks that differentiate you in the marketplace."
      },
      {
        title: "Brand Guidelines",
        description: "Complete visual and verbal identity guidelines ensuring consistency across all brand touchpoints."
      }
    ],
    
    industries: [
      "Startups",
      "Rebranding Projects",
      "Product Launches",
      "Corporate Identity",
      "Personal Brands"
    ],
    
    deliverables: [
      "Logo design package – Primary, secondary, and icon variations in vector formats with usage guidelines",
      "Complete brand identity system – Comprehensive visual language including typography, color palettes, and patterns",
      "Brand guidelines document – Detailed PDF guide covering logo usage, color codes, typography, and design principles",
      "Business stationery – Professional designs for business cards, letterheads, envelopes, and email signatures",
      "Social media branding kit – Profile images, cover photos, and post templates for all major platforms",
      "Brand pattern library – Custom graphic elements, textures, and patterns for consistent brand application",
      "Marketing material templates – Branded templates for presentations, brochures, flyers, and promotional items",
      "Digital asset library – Organized repository of all brand assets in various formats and sizes",
      "Brand messaging framework – Tone of voice guidelines, key messages, and communication principles",
      "Implementation support – Guidance and assistance for rolling out your new brand across all touchpoints"
    ],
    
    integrations: [
      "Bitbucket", "Discord", "WhatsApp", "Zendesk", "Google Calendar", "Mailchimp",
      "Confluence", "Figma", "Zapier", "Stripe", "Dropbox", "Jira"
    ],
    
    process: [
      {
        title: "Brand Discovery",
        description: "Research, competitor analysis, and brand positioning strategy.",
        duration: "1-2 weeks"
      },
      {
        title: "Concept Development",
        description: "Creating brand concepts, logo design, and visual direction.",
        duration: "2-3 weeks"
      },
      {
        title: "Brand Guidelines",
        description: "Developing comprehensive brand guidelines and applications.",
        duration: "1-2 weeks"
      },
      {
        title: "Delivery & Support",
        description: "Final deliverables and brand implementation support.",
        duration: "1 week"
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
        question: "How long does branding take?",
        answer: "Complete branding projects typically take 4-8 weeks from discovery to final deliverables."
      },
      {
        question: "What's included in branding?",
        answer: "Logo, color palette, typography, brand guidelines, and application across various touchpoints."
      },
      {
        question: "Do you offer rebranding services?",
        answer: "Yes, we specialize in both new brand creation and rebranding existing businesses."
      },
      {
        question: "Can you help with brand implementation?",
        answer: "Absolutely! We provide support for implementing your new brand across all materials and platforms."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default BrandingDesign;
