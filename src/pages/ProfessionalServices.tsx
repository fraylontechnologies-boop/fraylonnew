import IndustryPage from '../components/IndustryPage';

const ProfessionalServices = () => {
    return (
        <IndustryPage
            title="Professional Services"
            subtitle="Streamlining Consultancy"
            description="Tools for project management, time tracking, and client collaboration for law firms, consultancies, and agencies. Operate your firm with precision and maximize billable hours."
            ctaText="Start Your Project"
            ctaLink="/contact"

            heroImage="/industries/professional-services/677d19db64ddf1be979aa168_9.webp"
            showHeroForm={false}
            whyUs={[
                "Billable Efficiency – Accurate time tracking and invoicing automation.",
                "Client Collaboration – Secure portals for document sharing and communication.",
                "Project Visibility – Real-time dashes for resource allocation and timelines.",
                "Integration – Connecting with your existing accounting and CRM software."
            ]}
            servicesOffered={[
                {
                    title: "Legal Services",
                    description: "Case management systems, document automation, and secure client portals for law firms and legal departments."
                },
                {
                    title: "Consulting Firms",
                    description: "Project management tools, resource scheduling, and knowledge management systems designed for management and IT consultants."
                },
                {
                    title: "Accounting & Audit",
                    description: "Cloud-based practice management, audit workflow automation, and client collaboration portals for CPA firms."
                },
                {
                    title: "Architecture & Engineering",
                    description: "Project information management (PIM) and BIM collaboration platforms for construction and design efficiency."
                },
                {
                    title: "Marketing Agencies",
                    description: "Campaign management dashboards, creative proofing tools, and client reporting automation for digital agencies."
                },
                {
                    title: "Recruitment & HR",
                    description: "Applicant tracking systems (ATS) and employee self-service portals to streamline hiring and workforce management."
                }
            ]}
            process={[
                {
                    title: "Operations Review",
                    description: "Analyzing your firm's project delivery and billing cycles.",
                    duration: "1 Week"
                },
                {
                    title: "Solution Configuration",
                    description: "Designing a workflow that fits your practice area.",
                    duration: "2 Weeks"
                },
                {
                    title: "Development & Setup",
                    description: "Implementing the project management and client portal tools.",
                    duration: "6-8 Weeks"
                },
                {
                    title: "Onboarding",
                    description: "Training your consultants and partners on the new system.",
                    duration: "1 Week"
                }
            ]}
            howCanWeHelp={[
                "Practice Management Software",
                "Client Portals",
                "Time & Billing Solutions",
                "Document Management",
                "Knowledge Management Systems"
            ]}
            integrations={[
                "Clio",
                "Asana",
                "Jira",
                "QuickBooks",
                "Slack",
                "Microsoft 365",
                "Zoom",
                "DocuSign",
                "HubSpot",
                "Xero"
            ]}
            caseStudy={{
                title: "Legal Practice Automation",
                client: "Smith & Associates Law",
                challenge: "The firm was losing 40% of potentially billable hours to manual case management, document drafting, and administrative overhead.",
                solution: "We implemented a custom cloud-based practice management system with automated document generation and a secure client portal.",
                outcome: "Billable hours increased by 30%, and client response times improved by 50%, resulting in a 25% increase in annual revenue.",
                image: "/images/services/technology-consulting.jpg",
                duration: "5 Months",
                technologies: ["Microsoft 365", "React", "Azure"]
            }}
            faqs={[
                {
                    question: "Is the client portal secure for sensitive documents?",
                    answer: "Yes, our client portals use bank-grade encryption and granular permission settings to ensure that sensitive documents are only accessible to authorized personnel."
                },
                {
                    question: "Can you customize the workflow to our specific practice area?",
                    answer: "Absolutely. We build modular systems that can be tailored to the specific workflows of law firms, consultancies, or creative agencies."
                },
                {
                    question: "Does the system integrate with our email and calendar?",
                    answer: "Yes, we provide deep integration with Microsoft 365 and Google Workspace to sync emails, appointments, and tasks automatically."
                }
            ]}
            testimonials={[
                {
                    name: "Jayant Nanda",
                    role: "Managing Partner",
                    company: "Nanda & Associates",
                    content: "The automation tools Fraylon implemented have transformed our firm. We spend less time on paperwork and more time serving our clients.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/men/4.jpg"
                },
                {
                    name: "Leela Iyer",
                    role: "Operations Manager",
                    company: "ConsultX Group",
                    content: "Their project management solution has given us complete visibility into our consultant's utilization rates. A critical tool for our growth.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/women/55.jpg"
                }
            ]}
        />
    );
};

export default ProfessionalServices;
