import IndustryPage from '../components/IndustryPage';

const StartupsSMBs = () => {
    return (
        <IndustryPage
            title="Startups & SMB Solutions"
            subtitle="Accelerating Growth"
            description="Agile technology partnerships for startups and small-to-medium businesses. From MVP to scale-up, we provide the technical muscle to turn your vision into a market-leading product."
            ctaText="Start Your Project"
            ctaLink="/contact"

            heroImage="/industries/startups-smbs/677d19dba871801c923070f2_10.webp"
            showHeroForm={false}
            whyUs={[
                "Lean Methodology – Focusing on high-impact features for rapid market entry.",
                "Cost-Efficient Scaling – Architectures that grow with your user base and budget.",
                "Technical Co-founder Role – Acting as your strategic technology partner.",
                "Investor Ready – Building robust products that instill confidence in stakeholders."
            ]}
            servicesOffered={[
                {
                    title: "Early-Stage Startups",
                    description: "MVP development, prototyping, and pitch deck technical support to help founders validate ideas and secure funding."
                },
                {
                    title: "Scale-Ups",
                    description: "Refactoring legacy code, optimizing infrastructure, and adding features to support rapid user growth and market expansion."
                },
                {
                    title: "Small Business Digitization",
                    description: "Helping brick-and-mortar businesses transition online with e-commerce sites, booking systems, and digital marketing tools."
                },
                {
                    title: "SaaS Companies",
                    description: "End-to-end development of subscription-based software products with multi-tenant architecture and billing integration."
                },
                {
                    title: "On-Demand Services",
                    description: "Building marketplace platforms and gig-economy apps connecting service providers with customers in real-time."
                },
                {
                    title: "Digital Agencies",
                    description: "White-label development partnerships to help creative agencies deliver complex technical projects for their clients."
                }
            ]}
            process={[
                {
                    title: "Discovery & Validation",
                    description: "Refining your product idea and defining the MVP scope.",
                    duration: "1 Week"
                },
                {
                    title: "Rapid Prototyping",
                    description: "Creating clickable prototypes to validate UX with early users.",
                    duration: "2 Weeks"
                },
                {
                    title: "MVP Development",
                    description: "Building the core functional product in sprints.",
                    duration: "6-8 Weeks"
                },
                {
                    title: "Launch & Iterate",
                    description: "Deploying to market and iterating based on user feedback.",
                    duration: "Ongoing"
                }
            ]}
            howCanWeHelp={[
                "MVP Development",
                "Product Scaling",
                "Technical Consulting",
                "Mobile App Development",
                "User Experience (UX) Design"
            ]}
            integrations={[
                "React",
                "Node.js",
                "Firebase",
                "AWS",
                "Vercel",
                "Stripe",
                "Slack",
                "Trello",
                "Google Analytics",
                "Mixpanel"
            ]}
            caseStudy={{
                title: "Grocery Delivery MVP",
                client: "QuickCart Startup",
                challenge: "The startup needed to launch a fully functional Minimum Viable Product (MVP) within 8 weeks to secure their next round of funding.",
                solution: "We utilized a cross-platform approach with React Native and a serverless backend on Firebase to accelerate development.",
                outcome: "Successfully launched on time on both iOS and Android, acquiring 10,000 active users in the first month and securing Seed funding.",
                image: "/images/services/mvp-development.jpg",
                duration: "2 Months",
                technologies: ["React Native", "Firebase", "Node.js"]
            }}
            faqs={[
                {
                    question: "Do you offer equity-based compensation?",
                    answer: "While we primarily operate on a fee-for-service model, we are open to discussing hybrid models for select high-potential startups."
                },
                {
                    question: "What is the typical cost for an MVP?",
                    answer: "MVP costs vary based on complexity, but we offer specialized startup packages designed to get you to market cost-effectively."
                },
                {
                    question: "Can you scale the team as we grow?",
                    answer: "Yes, our flexible engagement models allow you to scale your dedicated engineering team up or down based on your funding and product roadmap."
                }
            ]}
            testimonials={[
                {
                    name: "Arjun Mehta",
                    role: "Founder",
                    company: "QuickCart",
                    content: "Fraylon didn't just write code; they acted as our technical co-founders. Their advice on feature prioritization was invaluable.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                    name: "Priya Sharma",
                    role: "CEO",
                    company: "HealthTech Now",
                    content: "We were impressed by their speed and agility. They understand the startup pace and delivered a high-quality product in record time.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/women/44.jpg"
                }
            ]}
        />
    );
};

export default StartupsSMBs;
