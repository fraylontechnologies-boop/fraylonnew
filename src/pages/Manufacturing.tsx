import IndustryPage from '../components/IndustryPage';

const Manufacturing = () => {
    return (
        <IndustryPage
            title="Manufacturing Solutions"
            subtitle="Industry 4.0 Integration"
            description="Smart manufacturing solutions leveraging IoT, AI, and automation to optimize production and supply chains. Drive efficiency on the factory floor."
            ctaText="Start Your Project"
            ctaLink="/contact"
            heroImage="/industries/manufacturing/677cad47367b4e10c22451da_Industries (2).webp"
            showHeroForm={false}
            whyUs={[
                "IoT Expertise – Connecting machinery for real-time data monitoring.",
                "Predictive Maintenance – Using AI to prevent equipment downtime.",
                "Supply Chain Visibility – End-to-end tracking of materials and products.",
                "Operational Efficiency – Lean manufacturing process automation."
            ]}
            servicesOffered={[
                {
                    title: "Automotive Manufacturing",
                    description: "Smart factory solutions for assembly lines, inventory management, and quality assurance in the automotive sector."
                },
                {
                    title: "Consumer Electronics",
                    description: "Precision manufacturing tracking, component supply chain optimization, and rapid prototyping digital workflows."
                },
                {
                    title: "Food & Beverage",
                    description: "Process automation for batch tracking, compliance monitoring, and ensuring safety standards in food production facilities."
                },
                {
                    title: "Pharmaceutical Manufacturing",
                    description: "Strict regulatory compliance tracking, sterile environment monitoring, and serialized product tracing solutions."
                },
                {
                    title: "Logistics & Warehousing",
                    description: "Warehouse management systems (WMS), robotic process automation, and real-time inventory tracking for efficient distribution."
                },
                {
                    title: "Aerospace & Defense",
                    description: "High-precision manufacturing execution systems (MES) ensuring traceability and adherence to rigorous industry standards."
                }
            ]}
            process={[
                {
                    title: "Factory Audit",
                    description: "Assessing current machinery and digital readiness.",
                    duration: "2 Weeks"
                },
                {
                    title: "IoT Strategy",
                    description: "Planning the sensor network and data collection architecture.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development & Integration",
                    description: "Building the analytics dashboard and connecting factory devices.",
                    duration: "10-14 Weeks"
                },
                {
                    title: "Pilot Implementation",
                    description: "Testing the solution on a production line before full rollout.",
                    duration: "4 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Industrial IoT (IIoT)",
                "Production Planning Systems",
                "Quality Control Automation",
                "Supply Chain Management",
                "Equipment Maintenance Systems"
            ]}
            integrations={[
                "Siemens MindSphere",
                "SAP ERP",
                "Azure IoT Hub",
                "AWS IoT Core",
                "ThingWorx",
                "Tableau",
                "Power BI",
                "Python",
                "TensorFlow"
            ]}
            caseStudy={{
                title: "Smart Factory Automation",
                client: "AutoParts Mfg",
                challenge: "The client faced frequent, unplanned equipment downtime on their assembly line, costing thousands of dollars per hour in lost production.",
                solution: "We implemented an Industrial IoT solution with vibration sensors and a predictive maintenance AI model to forecast equipment failures.",
                outcome: "Unplanned downtime was reduced by 25%, and maintenance costs decreased by 15% in the first year of implementation.",
                image: "/images/industries/manufacturing-resources.jpg",
                duration: "9 Months",
                technologies: ["IoT", "Python", "Azure", "React"]
            }}
            faqs={[
                {
                    question: "Can you connect legacy machinery to the cloud?",
                    answer: "Yes, we use retrofit sensors and edge gateways to extract data from older analog machines without needing to replace expensive equipment."
                },
                {
                    question: "Is the data transmission secure?",
                    answer: "We use end-to-end encryption and private APNs to ensure that sensitive production data remains secure and isolated from the public internet."
                },
                {
                    question: "Do you provide real-time dashboards?",
                    answer: "Yes, we build custom, real-time visualization dashboards that allow plant managers to monitor KPIs and OEE (Overall Equipment Effectiveness) instantly."
                }
            ]}
            testimonials={[
                {
                    name: "Rakesh Patel",
                    role: "Plant Manager",
                    company: "AutoParts Mfg",
                    content: "The visibility we now have into our production line is a game changer. We can spot issues before they become failures.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/men/22.jpg"
                },
                {
                    name: "Suman Rao",
                    role: "Supply Chain Director",
                    company: "Global Logistics Co",
                    content: "Fraylon's inventory tracking system has eliminated our stockouts and improved our order fulfillment accuracy to 99.9%.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/women/24.jpg"
                }
            ]}
        />
    );
};

export default Manufacturing;
