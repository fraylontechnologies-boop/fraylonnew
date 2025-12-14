import SolutionPage from '../components/SolutionPage';

const HospitalManagement = () => {
    return (
        <SolutionPage
            title="Hospital Management System"
            subtitle="Optimizing Healthcare Operations"
            description="Integrated platforms for patient management, appointment scheduling, billing, and electronic health records (EHR). We help healthcare providers deliver better care through efficient digital operations."
            ctaText="Start Your Project"
            ctaLink="/contact"
            heroLayout="centered"
            showHeroForm={false}
            stats={[
                { value: "40%", label: "Wait Time", description: "Reduction in queues" },
                { value: "99.9%", label: "Uptime", description: "Critical Systems" },
                { value: "100%", label: "Compliant", description: "HIPAA & GDPR" }
            ]}
            whyUs={[
                "HIPAA Compliance – Ensuring strict adherence to healthcare data privacy regulations.",
                "Interoperability – Seamless data exchange between labs, pharmacy, and wards.",
                "Patient-Centric Design – Improving the patient journey from admission to discharge.",
                "Operational Efficiency – Reducing wait times and optimizing resource allocation."
            ]}
            process={[
                {
                    title: "Workflow Analysis",
                    description: "Mapping out patient flows and administrative bottlenecks.",
                    duration: "3 Weeks"
                },
                {
                    title: "Solution Blueprint",
                    description: "Designing a secure architecture for EHR, billing, and scheduling modules.",
                    duration: "4 Weeks"
                },
                {
                    title: "Secure Development",
                    description: "Developing the system with rigorous security protocols and compliance checks.",
                    duration: "12-16 Weeks"
                },
                {
                    title: "Deployment & Compliance Audit",
                    description: "Launching the system and conducting final compliance verification.",
                    duration: "4 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Electronic Health Records (EHR)",
                "Appointment Scheduling & Reminders",
                "Billing & Insurance Claim Processing",
                "Laboratory & Pharmacy Management",
                "Telemedicine Integration"
            ]}
        />
    );
};

export default HospitalManagement;
