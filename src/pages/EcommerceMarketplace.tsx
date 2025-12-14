import ServicePage from '../components/ServicePage';

const EcommerceMarketplace = () => {
    return (
        <ServicePage
            title="E-commerce Marketplace Solutions"
            subtitle="Multi-Vendor Trading Platforms"
            description="Robust multi-vendor marketplace platforms like Amazon or Etsy. Connect buyers and sellers with secure transactions, commission management, and scalable infrastructure."
            ctaText="Start Your Project"
            ctaLink="/contact"
            whyUs={[
                "Commission Flexibility – Dynamic fee structures for different seller tiers.",
                "Vendor Dashboards – Self-service portals for sellers to manage products and orders.",
                "Scalable Architecture – Handling high traffic and millions of SKUs.",
                "Payment Splitting – Automated payouts to vendors and platform owners."
            ]}
            process={[
                {
                    title: "Business Logic Definition",
                    description: "Defining commission models, shipping rules, and vendor onboarding processes.",
                    duration: "2 Weeks"
                },
                {
                    title: "UX/UI Design",
                    description: "Designing intuitive interfaces for both customers and vendors.",
                    duration: "4 Weeks"
                },
                {
                    title: "Platform Development",
                    description: "Building the core marketplace engine and payment gateways.",
                    duration: "12-16 Weeks"
                },
                {
                    title: "Beta Launch",
                    description: "Soft launch with select vendors to gather feedback.",
                    duration: "4 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Multi-Vendor Platform Development",
                "Vendor Onboarding Systems",
                "Commission & Payout Automation",
                "Marketplace Analytics",
                "Order Splitting & Routing"
            ]}
        />
    );
};

export default EcommerceMarketplace;
