import SolutionPage from '../components/SolutionPage';

const HRPayroll = () => {
    return (
        <SolutionPage
            title="HR and Payroll Systems"
            subtitle="Empowering Your Workforce"
            description="Automated solutions for employee lifecycle management, payroll processing, compliance, and performance tracking. Simplify HR tasks so you can focus on your people."
            ctaText="Start Your Project"
            ctaLink="/contact"
            whyUs={[
                "Automated Compliance – Automatically staying up-to-date with tax laws and labor regulations.",
                "Self-Service Portals – Empowering employees to manage their own profiles and leaves.",
                "Accuracy & Security – Eliminating payroll errors and securing sensitive personnel data.",
                "Insightful Analytics – Reporting on retention, performance, and workforce costs."
            ]}
            process={[
                {
                    title: "HR Process Audit",
                    description: "Reviewing current HR / Payroll workflows and identifying manual pain points.",
                    duration: "2 Weeks"
                },
                {
                    title: "System Customization",
                    description: "Configuring the solution to match your organizational hierarchy and policies.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development & Migration",
                    description: "Building custom modules and securely migrating legacy employee data.",
                    duration: "8-10 Weeks"
                },
                {
                    title: "Go-Live & Support",
                    description: "Launching the portal and providing dedicated support for the first pay cycle.",
                    duration: "2 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Automated Payroll Processing",
                "Leave & Attendance Management",
                "Employee Onboarding & Offboarding",
                "Performance Review Management",
                "Tax & Compliance Reporting"
            ]}
        />
    );
};

export default HRPayroll;
