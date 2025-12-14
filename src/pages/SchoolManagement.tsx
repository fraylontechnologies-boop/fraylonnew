import SolutionPage from '../components/SolutionPage';

const SchoolManagement = () => {
    return (
        <SolutionPage
            title="School Management Software"
            subtitle="Streamlining Education Administration"
            description="Comprehensive software solutions to manage student data, academic processes, and administrative workflows efficiently. Our systems bridge the gap between administrators, teachers, students, and parents."
            ctaText="Start Your Project"
            ctaLink="/contact"
            heroLayout="centered"
            showHeroForm={false}
            stats={[
                { value: "90%", label: "Efficiency", description: "Admin Tasks" },
                { value: "30%", label: "Savings", description: "Operational Costs" },
                { value: "100%", label: "Secure", description: "Student Data" }
            ]}
            whyUs={[
                "Holistic Management – Integrating academic, administrative, and financial modules.",
                "Real-time Communication – Facilitating seamless interaction between stakeholders.",
                "Data-Driven Insights – Analytics for student performance and institutional growth.",
                "Secure & Scalable – Protecting sensitive student data while growing with your institution."
            ]}
            process={[
                {
                    title: "Needs Assessment",
                    description: "Understanding your institution's specific administrative and academic requirements.",
                    duration: "2 Weeks"
                },
                {
                    title: "System Architecture",
                    description: "Designing a modular structure to handle admissions, grading, attendance, and more.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development & Integration",
                    description: "Building the platform and integrating with existing tools (e.g., LMS, Payment Gateways).",
                    duration: "10-14 Weeks"
                },
                {
                    title: "Training & Rollout",
                    description: "Comprehensive training for staff and faculty, followed by a phased launch.",
                    duration: "3 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Automate Admissions",
                "Streamline Attendance Tracking",
                "Digital Gradebooks & Report Cards",
                "Fee Management & Invoicing",
                "Parent-Teacher Communication Portals"
            ]}
        />
    );
};

export default SchoolManagement;
