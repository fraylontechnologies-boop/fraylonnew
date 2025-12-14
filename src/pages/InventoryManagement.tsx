import SolutionPage from '../components/SolutionPage';

const InventoryManagement = () => {
    return (
        <SolutionPage
            title="Inventory Management Solutions"
            subtitle="Smart Supply Chain Control"
            description="Real-time tracking and management systems to optimize inventory levels, reduce waste, and improve order fulfillment. Gain complete visibility over your stock."
            ctaText="Start Your Project"
            ctaLink="/contact"
            whyUs={[
                "Real-Time Accuracy – preventing stockouts and overstock scenarios.",
                "Multi-Location Support – Managing inventory across warehouses, stores, and suppliers.",
                "Automated Reordering – Smart triggers to replenish stock at the right time.",
                "Integration Ready – Seamlessly connecting with ERP, POS, and eCommerce platforms."
            ]}
            process={[
                {
                    title: "Supply Chain Audit",
                    description: "Analyzing your current inventory flow and storage methods.",
                    duration: "2 Weeks"
                },
                {
                    title: "System Design",
                    description: "Mapping out the inventory tracking logic and barcode/RFID integrations.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development & Testing",
                    description: "Building the tracking modules and testing with real-world scenarios.",
                    duration: "8-10 Weeks"
                },
                {
                    title: "Deployment",
                    description: " implementing the solution and conducting staff training on new devices.",
                    duration: "2 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Real-Time Stock Tracking",
                "Order Management & Fulfillment",
                "Warehouse Management (WMS)",
                "Barcode & RFID Integration",
                "Supplier Relationship Management"
            ]}
        />
    );
};

export default InventoryManagement;
