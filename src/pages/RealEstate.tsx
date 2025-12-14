import IndustryPage from '../components/IndustryPage';

const RealEstate = () => {
    return (
        <IndustryPage
            title="Real Estate Solutions"
            subtitle="Digital Property Management"
            description="Platforms for property listings, virtual tours, tenant management, and real estate investment analysis. Connecting buyers, sellers, and agents seamlessly."
            ctaText="Start Your Project"
            ctaLink="/contact"
            heroImage="/industries/real-estate/677cae850297654bbdf957ad_Industries (3).webp"
            showHeroForm={false}
            whyUs={[
                "Immersive Experiences – Virtual tours and AR visualization integration.",
                "Seamless Listings – Automated syndication to major property portals.",
                "Tenant Portals – Self-service for payments and maintenance requests.",
                "Data-Driven Valuation – Analytics tools for market trends and pricing."
            ]}
            servicesOffered={[
                {
                    title: "Residential Real Estate",
                    description: "Listing websites, mobile apps, and CRM systems for agents helping individuals buy, sell, or rent homes."
                },
                {
                    title: "Commercial Real Estate",
                    description: "Platforms for leasing office space, managing retail properties, and investment analysis tools for commercial brokers."
                },
                {
                    title: "Property Management",
                    description: "Comprehensive software for rent collection, maintenance tracking, and tenant communication for landlords and property managers."
                },
                {
                    title: "Construction & Development",
                    description: "Project management tools and ERP systems for tracking construction progress, budgets, and compliance."
                },
                {
                    title: "Real Estate Investment (REITs)",
                    description: "Fund management platforms and investor portals providing transparency and reporting for real estate investment trusts."
                },
                {
                    title: "Coworking & Flexible Space",
                    description: "Booking systems and member management apps for shared office spaces and flexible work environments."
                }
            ]}
            process={[
                {
                    title: "Market Analysis",
                    description: "Understanding your niche in the real estate market.",
                    duration: "1 Week"
                },
                {
                    title: "Platform Design",
                    description: "Designing a visually appealing listing or management interface.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development",
                    description: "Building the portal with map integrations and CRM features.",
                    duration: "8-12 Weeks"
                },
                {
                    title: "Launch",
                    description: "Deploying the platform and optimizing for SEO.",
                    duration: "2 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Property Listing Portals",
                "Property Management Systems (PMS)",
                "Virtual Tour Integration",
                "Real Estate CRM",
                "Tenant Apps"
            ]}
            integrations={[
                "Yardi",
                "AppFolio",
                "Buildium",
                "Matterport",
                "Zillow API",
                "Salesforce",
                "HubSpot",
                "QuickBooks",
                "Stripe",
                "Google Maps API"
            ]}
            caseStudy={{
                title: "Virtual Property Showcase",
                client: "Prime Estates Group",
                challenge: "The agency faced decreased property viewings due to client travel restrictions and scheduling conflicts, slowing down the sales cycle.",
                solution: "We created an immersive VR/AR property tour platform integrated with their website, allowing clients to tour homes remotely.",
                outcome: "Property inquiries increased by 75%, and the agency closed multiple high-value sales sight-unseen within the first quarter.",
                image: "/images/services/ui-ux-design.jpg",
                duration: "4 Months",
                technologies: ["Matterport", "React", "Three.js"]
            }}
            faqs={[
                {
                    question: "Can you integrate with MLS listings?",
                    answer: "Yes, we can build IDX (Internet Data Exchange) feeds to pull real-time property listings directly from your local MLS database."
                },
                {
                    question: "Is your software suitable for commercial real estate?",
                    answer: "Yes, we offer specialized modules for commercial lease management, CAM reconciliation, and asset performance tracking."
                },
                {
                    question: "Do you offer tenant portals for rent payment?",
                    answer: "Yes, we build secure tenant portals that allow for online rent payments, maintenance request tracking, and lease document signing."
                }
            ]}
            testimonials={[
                {
                    name: "Mehul Shah",
                    role: "Principal Broker",
                    company: "Prime Estates",
                    content: "The virtual tour technology Fraylon implemented has completely changed how we sell. We are closing deals faster than ever.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/men/33.jpg"
                },
                {
                    name: "Jasmine Kaur",
                    role: "Property Manager",
                    company: "Urban Living",
                    content: "Our tenant satisfaction has skyrocketed since launching the new mobile app. Maintenance requests are handled in half the time.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/women/35.jpg"
                }
            ]}
        />
    );
};

export default RealEstate;
