import SolutionPage from '../components/SolutionPage';

const EventManagement = () => {
    return (
        <SolutionPage
            title="Event Management Solutions"
            subtitle="Creating Memorable Experiences"
            description="End-to-end platforms for event planning, registration, ticketing, and attendee engagement. Simplify the complexity of managing conferences, exhibitions, and corporate events."
            ctaText="Start Your Project"
            ctaLink="/contact"
            whyUs={[
                "Seamless Registration – Easy-to-use forms and ticketing flows.",
                "Attendee Engagement – Live polls, networking tools, and event apps.",
                "Analytics Dashboard – Real-time insights into registration and attendance.",
                "Virtual & Hybrid Support – Tools to manage both in-person and online participants."
            ]}
            process={[
                {
                    title: "Event Strategy",
                    description: "Defining the scope, scale, and specific feature needs of your event platform.",
                    duration: "2 Weeks"
                },
                {
                    title: "Platform Design",
                    description: "Designing the event branding and user experience for attendees.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development",
                    description: "Building the registration engine, event app, and admin dashboard.",
                    duration: "8-10 Weeks"
                },
                {
                    title: "Launch & Support",
                    description: "Launching the platform and providing live support during the event.",
                    duration: "2 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Online Registration & Ticketing",
                "Event App Development",
                "Session & Agenda Management",
                "Attendee Networking Tools",
                "Virtual Event Platforms"
            ]}
        />
    );
};

export default EventManagement;
