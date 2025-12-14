import IndustryPage from '../components/IndustryPage';

const NonProfit = () => {
    return (
        <IndustryPage
            title="Non-Profit Solutions"
            subtitle="Amplifying Social Impact"
            description="Cost-effective digital tools for donor management, fundraising, and volunteer coordination. Maximize your impact with technology designed for social good."
            ctaText="Start Your Project"
            ctaLink="/contact"
            heroImage="/industries/non-profit/677d19db1abdd090a5f1ab20_11.webp"
            showHeroForm={false}
            whyUs={[
                "Donor Engagement – Tools to nurture relationships and increase giving.",
                "Cost-Effective – Solutions designed with non-profit budgets in mind.",
                "Volunteer Management – Simplifying the scheduling and tracking of volunteers.",
                "Impact Reporting – Data visualization to show stakeholders your results."
            ]}
            servicesOffered={[
                {
                    title: "Charitable Organizations",
                    description: "Platforms for fundraising campaigns, recurring donations, and donor relationship management (CRM) to fuel mission-driven work."
                },
                {
                    title: "Foundations & Grantmakers",
                    description: "Grant management systems that streamline the application, review, and reporting processes for effective fund distribution."
                },
                {
                    title: "Member Associations",
                    description: "Membership portals for professional or industry groups, offering event management, networking tools, and resource libraries."
                },
                {
                    title: "Advocacy Groups",
                    description: "Digital campaign tools for petition signing, letter writing, and mobilizing supporters for social and political causes."
                },
                {
                    title: "Community Services",
                    description: "Case management software for social workers and community outreach programs to better track services and outcomes."
                },
                {
                    title: "Religious Institutions",
                    description: "Congregation management software for donation tracking, event scheduling, and member communication."
                }
            ]}
            process={[
                {
                    title: "Mission Alignment",
                    description: "Understanding your cause and digital needs.",
                    duration: "1 Week"
                },
                {
                    title: "Platform Design",
                    description: "Creating an inspiring donation and information portal.",
                    duration: "2 Weeks"
                },
                {
                    title: "Development",
                    description: "Building the donation engine and CRM features.",
                    duration: "6-8 Weeks"
                },
                {
                    title: "Launch & Outreach",
                    description: "Launching the site and assisting with digital fundraising campaigns.",
                    duration: "2 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Donor Management (CRM)",
                "Fundraising Platforms",
                "Volunteer Coordination Tools",
                "Impact Reporting Dashboards",
                "Community Portals"
            ]}
            integrations={[
                "Salesforce NPSP",
                "Blackbaud",
                "DonorPerfect",
                "Mailchimp",
                "Stripe",
                "PayPal",
                "QuickBooks",
                "WordPress",
                "Zapier"
            ]}
            caseStudy={{
                title: "Global Aid Portal",
                client: "Humanity First Foundation",
                challenge: "The foundation struggled to coordinate donations and volunteer efforts across 20 countries using disparate spreadsheets and email chains.",
                solution: "We built a centralized donor management CRM and a mobile volunteer dispatch app with real-time impact tracking.",
                outcome: "Increased annual fundraising by 40% due to better donor engagement and improved volunteer coordination efficiency by 60%.",
                image: "/images/services/digital-transformation.jpg",
                duration: "3 Months",
                technologies: ["Salesforce", "React", "Node.js"]
            }}
            faqs={[
                {
                    question: "Do you offer discounts for non-profit organizations?",
                    answer: "Yes, we are committed to social good and offer special tiered pricing and grants for registered non-profit organizations."
                },
                {
                    question: "Can we migrate our data from Excel spreadsheets?",
                    answer: "Yes, our data team specializes in cleaning, mapping, and migrating data from legacy formats like Excel and Access into modern CRM systems."
                },
                {
                    question: "Is the software easy for volunteers to learn?",
                    answer: "We prioritize User Experience (UX) design to ensure that our tools are intuitive for volunteers of all technical skill levels."
                }
            ]}
            testimonials={[
                {
                    name: "Sunita Krishnan",
                    role: "Executive Director",
                    company: "Humanity First",
                    content: "Fraylon technology allowed us to focus on our mission rather than administrative headaches. They truly care about the impact we make.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/women/33.jpg"
                },
                {
                    name: "Mohan Das",
                    role: "Fundraising Lead",
                    company: "EcoSave Alliance",
                    content: "The custom donation platform they built increased our recurring donor retention rate significantly. Seamless and secure.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/men/91.jpg"
                }
            ]}
        />
    );
};

export default NonProfit;
