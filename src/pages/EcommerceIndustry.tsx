import IndustryPage from '../components/IndustryPage';

const EcommerceIndustry = () => {
    return (
        <IndustryPage
            title="E-commerce Retail Solutions"
            subtitle="Reimagining Digital Retail"
            description="Comprehensive solutions for modern retailers. We help brands build immersive shopping experiences, optimize supply chains, and drive customer loyalty in an omnichannel world."
            ctaText="Start Your Project"
            ctaLink="/contact"
            heroLayout="centered"
            heroImage="/industries/ecommerce/677c9dcbce86b4d1685cc7ff_2.webp"
            showHeroForm={false}
            stats={[
                { value: "5T+", label: "Global Sales", description: "Projected 2026 Volume" },
                { value: "70%", label: "Mobile Traffic", description: "Of Retail Visits" },
                { value: "80%", label: "CX Priority", description: "Customer Retention" }
            ]}
            whyUs={[
                "Omnichannel Mastery – Unifying online and offline customer journeys.",
                "Conversion Optimization – Data-driven design to maximize sales.",
                "Personalization Engines – AI-powered product recommendations.",
                "Scalable Infrastructure – Handling peak traffic during Black Friday/Cyber Monday."
            ]}
            process={[
                {
                    title: "Retail Strategy",
                    description: "Analyzing market trends and competitor landscape.",
                    duration: "2 Weeks"
                },
                {
                    title: "CX Design",
                    description: "Mapping the customer journey from discovery to checkout.",
                    duration: "3 Weeks"
                },
                {
                    title: "Platform Development",
                    description: "Building robust stores on Shopify, Magento, or custom stacks.",
                    duration: "10-14 Weeks"
                },
                {
                    title: "Growth Marketing",
                    description: "Launching with SEO, PPC, and retention strategies.",
                    duration: "Ongoing"
                }
            ]}
            howCanWeHelp={[
                "Direct-to-Consumer (DTC) Brands",
                "B2B E-commerce Portals",
                "Omnichannel Retail Integration",
                "Shopping Cart Abandonment Recovery",
                "Retail Analytics & Insights"
            ]}
            integrations={[
                "Shopify",
                "Magento",
                "WooCommerce",
                "BigCommerce",
                "Salesforce Commerce Cloud",
                "Stripe",
                "PayPal",
                "Google Analytics",
                "Mailchimp",
                "Klaviyo",
                "HubSpot",
                "Square"
            ]}
        />
    );
};

export default EcommerceIndustry;
