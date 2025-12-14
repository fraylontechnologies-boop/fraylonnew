import SolutionPage from '../components/SolutionPage';

const LMS = () => {
    return (
        <SolutionPage
            title="Learning Management System (LMS)"
            subtitle="Elevating Digital Learning"
            description="Scalable platforms for delivering educational content, tracking progress, and facilitating interactive online learning. Perfect for schools, universities, and corporate training."
            ctaText="Start Your Project"
            ctaLink="/contact"
            whyUs={[
                "Interactive Learning – Supporting multimedia content, quizzes, and live sessions.",
                "Progress Tracking – Detailed reporting on learner engagement and completion rates.",
                "Scalable Infrastructure – Handling thousands of concurrent learners seamlessly.",
                "Mobile Learning – Accessible on any device for learning on the go."
            ]}
            process={[
                {
                    title: "Requirement Gathering",
                    description: "Defining the target audience and learning objectives.",
                    duration: "2 Weeks"
                },
                {
                    title: "UX/UI Design",
                    description: "Creating an engaging and intuitive interface for learners and instructors.",
                    duration: "3 Weeks"
                },
                {
                    title: "Platform Development",
                    description: "Developing the core LMS features, content players, and assessment tools.",
                    duration: "10-14 Weeks"
                },
                {
                    title: "Content Migration & Launch",
                    description: "Assisting with content upload and launching the platform.",
                    duration: "3 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Course Creation & Management",
                "Student Assessment & Grading",
                "Live Classroom Integration",
                "Gamification & Badges",
                "Corporate Training Portals"
            ]}
        />
    );
};

export default LMS;
