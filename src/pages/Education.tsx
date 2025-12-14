import IndustryPage from '../components/IndustryPage';

const Education = () => {
    return (
        <IndustryPage
            title="Education Technology"
            subtitle="Transforming the Classroom"
            description="Empowering institutions with tools for remote learning, student administration, and campus management. Shaping the future of education through technology."
            ctaText="Start Your Project"
            ctaLink="/contact"

            heroImage="/industries/education/677cab3e66e3f78cbe15113a_Industries (1).webp"
            showHeroForm={false}
            whyUs={[
                "Engagement Focused – Tools tailored to keep students motivated and involved.",
                "Accessibility First – Ensuring learning is accessible to all students.",
                "Administrative Efficiency – Reducing paperwork for educators.",
                "Scalable Platforms – Supporting growth from single schools to university networks."
            ]}
            servicesOffered={[
                {
                    title: "K-12 Education",
                    description: "Interactive learning platforms and classroom management systems designed to engage younger students and support teachers in primary and secondary education."
                },
                {
                    title: "Higher Education",
                    description: "Comprehensive university management systems, virtual campuses, and research collaboration tools to support complex academic ecosystems."
                },
                {
                    title: "Corporate Training & Upskilling",
                    description: "Employee training portals and professional development platforms that track progress, certification, and skill acquisition for businesses."
                },
                {
                    title: "Language Learning",
                    description: "Immersive applications utilizing AI and speech recognition to facilitate language acquisition and practice for learners worldwide."
                },
                {
                    title: "Special Needs Education",
                    description: "Adaptive technologies and accessible interfaces designed to support diverse learning needs and ensure inclusive education for all."
                },
                {
                    title: "E-Learning Content Providers",
                    description: "Platforms for creating, distributing, and monetizing educational content, courses, and certifications for global audiences."
                }
            ]}
            process={[
                {
                    title: "EdTech Consulting",
                    description: "identifying the right digital strategy for your institution.",
                    duration: "2 Weeks"
                },
                {
                    title: "Platform Design",
                    description: "Creating learning interfaces suitable for specific age groups.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development",
                    description: "Building the LMS, SIS, or E-learning application.",
                    duration: "8-12 Weeks"
                },
                {
                    title: "Training & Adoption",
                    description: "Workshops for teachers and students to ensure smooth adoption.",
                    duration: "2 Weeks"
                }
            ]}
            howCanWeHelp={[
                "E-Learning Platforms",
                "Student Information Systems",
                "Virtual Classrooms",
                "Assessment Tools",
                "Campus Management ERP"
            ]}
            integrations={[
                "Moodle",
                "Zoom",
                "Google Classroom",
                "Microsoft Teams",
                "AWS",
                "React",
                "Node.js",
                "PostgreSQL"
            ]}
            caseStudy={{
                title: "University Digital Transformation",
                client: "Global Arts University",
                challenge: "The university needed to transition 10,000+ students to remote learning within two weeks due to campus closures.",
                solution: "We deployed a customized cloud-based LMS with integrated video conferencing and real-time collaboration tools.",
                outcome: "Zero downtime during final exams and 95% student satisfaction rate with the new digital experience.",
                image: "/images/solutions/Learning Management System (LMS).jpg",
                duration: "4 Months",
                technologies: ["React", "Node.js", "AWS", "Moodle"]
            }}
            faqs={[
                {
                    question: "Can you integrate with our existing Student Information System (SIS)?",
                    answer: "Yes, we have experience integrating with major SIS platforms like Banner, PowerSchool, and custom legacy databases."
                },
                {
                    question: "Is the platform mobile-friendly?",
                    answer: "All our educational platforms are built with a mobile-first approach, ensuring students can learn effectively on tablets and smartphones."
                },
                {
                    question: "How do you handle high traffic during exam periods?",
                    answer: "We design our architecture to be auto-scalable using cloud services, ensuring the system remains fast and stable even during peak usage."
                }
            ]}
            testimonials={[
                {
                    name: "Prof. Alan Grant",
                    role: "Dean of Studies",
                    company: "Global Arts University",
                    content: "The speed and efficiency with which Fraylon helped us pivot to online learning was nothing short of miraculous. A true partner.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                    name: "Maria Rodriguez",
                    role: "Director of IT",
                    company: "EdFuture Schools",
                    content: "Their custom assessment tools have saved our teachers hundreds of hours of grading time. The user interface is beautiful and easy to use.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/women/44.jpg"
                }
            ]}
        />
    );
};

export default Education;
