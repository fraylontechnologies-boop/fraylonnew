import IndustryPage from '../components/IndustryPage';

const FinancialServices = () => {
    return (
        <IndustryPage
            title="Financial Services Solutions"
            subtitle="Secure & Scalable Fintech"
            description="Enabling banks, insurers, and fintech companies to deliver secure, efficient, and personalized financial experiences. Trust and innovation go hand in hand."
            ctaText="Start Your Project"
            ctaLink="/contact"
            heroImage="/industries/financial-services/677ca1ccc4cd6fd435f14f64_Industries.webp"
            showHeroForm={false}
            whyUs={[
                "Bank-Grade Security – Implementing advanced encryption and fraud detection.",
                "regulatory Compliance – Adhering to PCI-DSS, KYC, and AML standards.",
                "High Performance – Low-latency systems for trading and transaction processing.",
                "Omnichannel Experience – Consistent banking across mobile, web, and branch."
            ]}
            servicesOffered={[
                {
                    title: "Retail & Commercial Banking",
                    description: "Secure core banking systems, mobile banking apps, and customer portals that enable seamless transactions and account management for individuals and businesses."
                },
                {
                    title: "Insurance (InsurTech)",
                    description: "Digital platforms for policy management, claims processing automation, and personalized insurance offerings driven by data analytics."
                },
                {
                    title: "Wealth & Asset Management",
                    description: "Robo-advisory platforms, portfolio tracking tools, and investment dashboards that provide real-time insights for investors and advisors."
                },
                {
                    title: "Payments & Remittances",
                    description: "Fast, secure, and compliant payment gateway integrations, digital wallets, and cross-border money transfer solutions."
                },
                {
                    title: "Lending & Mortgages",
                    description: "Loan origination systems, automated underwriting, and digital mortgage platforms that streamline the lending process and reduce processing time."
                },
                {
                    title: "Capital Markets",
                    description: "High-frequency trading platforms, algorithmic trading tools, and market data analysis systems for traders and financial institutions."
                }
            ]}
            process={[
                {
                    title: "Security Architecture",
                    description: "Designing a fortified infrastructure for financial data.",
                    duration: "3 Weeks"
                },
                {
                    title: "Compliance Review",
                    description: "Ensuring all features meet regional financial regulations.",
                    duration: "2 Weeks"
                },
                {
                    title: "Core Development",
                    description: "Building secure transaction engines and user interfaces.",
                    duration: "10-14 Weeks"
                },
                {
                    title: "Audit & Launch",
                    description: "Passing security audits and launching the financial product.",
                    duration: "4 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Mobile Banking Apps",
                "Digital Wallets & Payments",
                "InsurTech Platforms",
                "Wealth Management Tools",
                "Blockchain Solutions"
            ]}
            integrations={[
                "Stripe",
                "Plaid",
                "QuickBooks",
                "Xero",
                "Salesforce Financial Cloud",
                "AWS",
                "Kubernetes",
                "Docker",
                "React Native"
            ]}
            caseStudy={{
                title: "Digital Banking Transformation",
                client: "Horizon Bank",
                challenge: "The bank needed to modernize its legacy core banking interface and provide a mobile-first experience for a younger demographic.",
                solution: "We designed and built a secure, native mobile banking app with biometric authentication and real-time spending insights.",
                outcome: "Achieved a 200% increase in mobile user adoption and a 4.8-star rating on the App Store within six months.",
                image: "/images/industries/banking-financial.jpg",
                duration: "8 Months",
                technologies: ["React Native", "Node.js", "Plaid API"]
            }}
            faqs={[
                {
                    question: "Are your solutions PCI-DSS compliant?",
                    answer: "Absolutley. All our financial software is built with 'Security First' architecture, strictly adhering to PCI-DSS, GDPR, and other regional financial regulations."
                },
                {
                    question: "Can you help with blockchain integration?",
                    answer: "Yes, we specialize in implementing secure blockchain ledgers for transparent transaction tracking and smart contracts."
                },
                {
                    question: "How do you handle fraud detection?",
                    answer: "We integrate AI-driven fraud detection systems that analyze transaction patterns in real-time to flag and prevent suspicious activities."
                }
            ]}
            testimonials={[
                {
                    name: "David Sterling",
                    role: "CEO",
                    company: "Horizon Bank",
                    content: "Fraylon's understanding of fintech security standards combined with their UX expertise delivered a product that our customers trust and love.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/men/85.jpg"
                },
                {
                    name: "Elena Rossi",
                    role: "VP of Product",
                    company: "InsureLife",
                    content: "The claims processing automation they built reduced our processing time by 60%. Highly recommended for any financial institution.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/women/12.jpg"
                }
            ]}
        />
    );
};

export default FinancialServices;
