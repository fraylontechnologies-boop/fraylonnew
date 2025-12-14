import ServicePage from '../components/ServicePage';

const AppointmentScheduling = () => {
    return (
        <ServicePage
            title="Appointment Scheduling Software"
            subtitle="Effortless Booking Management"
            description="Automated booking systems to reduce no-shows, optimize schedules, and enhance client convenience. Suitable for clinics, salons, consultants, and service businesses."
            ctaText="Start Your Project"
            ctaLink="/contact"
            whyUs={[
                "24/7 Availability – Allowing clients to book appointments anytime, anywhere.",
                "Automated Reminders – Reducing no-shows via SMS and email notifications.",
                "Calendar Sync – Seamlessly syncing with Google, Outlook, and iCal.",
                "Resource Management – Managing staff availability and room/equipment allocation."
            ]}
            process={[
                {
                    title: "Workflow Definition",
                    description: "Understanding your booking rules, services, and staff availability.",
                    duration: "1 Week"
                },
                {
                    title: "Interface Design",
                    description: "Designing a user-friendly booking widget or portal.",
                    duration: "2 Weeks"
                },
                {
                    title: "Development",
                    description: "Building the booking engine and notification system.",
                    duration: "4-6 Weeks"
                },
                {
                    title: "Integration & Launch",
                    description: "Embedding the scheduler into your website and training staff.",
                    duration: "1 Week"
                }
            ]}
            howCanWeHelp={[
                "Online Booking Portals",
                "Calendar Synchronization",
                "Automated SMS/Email Reminders",
                "Staff & Resource Scheduling",
                "Payment Process Integration"
            ]}
        />
    );
};

export default AppointmentScheduling;
