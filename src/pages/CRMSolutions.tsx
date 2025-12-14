import SolutionPage from '../components/SolutionPage';

const CRMSolutions = () => {
    return (
        <SolutionPage
            title="CRM Solutions"
            subtitle="Building Stronger Customer Relationships"
            description="Custom Customer Relationship Management systems to drive sales, improve customer service, and analyze data. Turn interactions into lasting relationships."
            ctaText="Start Your Project"
            ctaLink="/contact"
            whyUs={[
                "360-Degree View – Centralizing all customer interactions across channels.",
                "Sales Automation – Streamlining lead tracking, follow-ups, and pipeline management.",
                "Custom Workflows – Tailoring the CRM to match your unique sales process.",
                "Actionable Analytics – Dashboards that reveal insights into customer behavior and sales trends."
            ]}
            process={[
                {
                    title: "Strategy Workshop",
                    description: "Defining your customer journey and sales pipeline requirements.",
                    duration: "2 Weeks"
                },
                {
                    title: "Solution Architecture",
                    description: "Designing the data model and integration points for your custom CRM.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development",
                    description: "Building the core CRM features, automation rules, and reporting tools.",
                    duration: "8-12 Weeks"
                },
                {
                    title: "Training & Adoption",
                    description: "Training your sales and support teams to maximize CRM adoption.",
                    duration: "2 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Lead & Opportunity Management",
                "Contact & Account Management",
                "Sales Forecasting",
                "Email Marketing Integration",
                "Customer Support Ticketing"
            ]}
        />
    );
};

export default CRMSolutions;
