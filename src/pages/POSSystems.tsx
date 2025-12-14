import SolutionPage from '../components/SolutionPage';

const POSSystems = () => {
    return (
        <SolutionPage
            title="Point of Sale (POS) Systems"
            subtitle="Seamless Transaction Processing"
            description="Modern POS solutions integrating sales, inventory, and customer loyalty for retail and hospitality businesses. Speed up checkout and gain business insights."
            ctaText="Start Your Project"
            ctaLink="/contact"
            whyUs={[
                "Fast Checkout – Optimized interfaces for quick transaction processing.",
                "Offline Capability – Allowing operations to continue even without internet.",
                "Unified Commerce – Connecting in-store sales with online inventory.",
                "Hardware Integration – Compatible with barcode scanners, receipt printers, and cash drawers."
            ]}
            process={[
                {
                    title: "Operational Analysis",
                    description: "Reviewing your checkout process and hardware requirements.",
                    duration: "2 Weeks"
                },
                {
                    title: "System Design",
                    description: "Designing the POS interface and backend integrations.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development",
                    description: "Building the POS application with offline sync capabilities.",
                    duration: "8-12 Weeks"
                },
                {
                    title: "On-site Deployment",
                    description: "Installing the system on your hardware and training cashiers.",
                    duration: "2 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Custom POS Software Development",
                "Inventory Syncing",
                "Customer Loyalty Programs",
                "Sales Reporting & Analytics",
                "Payment Gateway Integration"
            ]}
        />
    );
};

export default POSSystems;
