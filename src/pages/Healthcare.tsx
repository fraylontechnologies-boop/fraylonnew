import IndustryPage from '../components/IndustryPage';

const Healthcare = () => {
    return (
        <IndustryPage
            title="Healthcare Solutions"
            subtitle="Innovating Patient Care"
            description="Digital technologies to improve patient outcomes, streamline hospital operations, and ensure regulatory compliance. We help you navigate the complex landscape of healthcare IT."
            ctaText="Start Your Project"
            ctaLink="/contact"

            heroImage="/industries/healthcare/677c9dcb5c19e7ff04c43413_3.webp"
            showHeroForm={false}
            whyUs={[
                "HIPAA & GDPR Compliance – Deep expertise in healthcare data regulations.",
                "System Interoperability – Connecting HL7/FHIR standards for seamless data flow.",
                "Clinical Workflow Optimization – Improving efficiency for doctors and nurses.",
                "Patient Engagement – Tools that empower patients to take charge of their health."
            ]}
            servicesOffered={[
                {
                    title: "Hospitals & Healthcare Providers",
                    description: "Integrated hospital management information systems (HMIS), electronic health records (EHR), and practice management solutions for streamlined operations."
                },
                {
                    title: "Telemedicine & Remote Care",
                    description: "Secure video consultation platforms and remote patient monitoring systems that expand access to care and enable home-based health management."
                },
                {
                    title: "Pharmaceuticals & Life Sciences",
                    description: "Digital tools for clinical trial management, supply chain tracking, and drug discovery acceleration using data analytics and AI."
                },
                {
                    title: "Health Insurance",
                    description: "Claims processing automation, member portals, and fraud detection systems that improve efficiency and transparency in health insurance."
                },
                {
                    title: "Medical Devices (MedTech)",
                    description: "IoT connectivity and software integration for medical devices, enabling real-time data collection and analysis for better patient outcomes."
                },
                {
                    title: "Public Health",
                    description: "Population health management platforms and disease surveillance systems that support government agencies and NGOs in health initiatives."
                }
            ]}
            process={[
                {
                    title: "Regulatory Assessment",
                    description: "Evaluating compliance requirements and security needs.",
                    duration: "2 Weeks"
                },
                {
                    title: "Solution Design",
                    description: "Designing architecture for telemedicine, EHR, or patient portals.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development & Certification",
                    description: "Building the solution and assisting with necessary certifications.",
                    duration: "12-16 Weeks"
                },
                {
                    title: "Implementation",
                    description: "Deploying the solution in clinical settings with staff training.",
                    duration: "4 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Telemedicine Platforms",
                "Electronic Health Records (EHR)",
                "Medical IoT Integration",
                "Healthcare Analytics",
                "Patient Portals"
            ]}
            integrations={[
                "Epic Systems",
                "Cerner (Oracle Health)",
                "Allscripts",
                "Salesforce Health Cloud",
                "AWS (HIPAA Compliant)",
                "Tableau",
                "MuleSoft",
                "Zoom Healthcare",
                "Twilio"
            ]}
            caseStudy={{
                title: "Telehealth Platform Expansion",
                client: "CityCare Hospital Network",
                challenge: "Scaling telemedicine services rapidly to meet a 500% surge in demand while ensuring strict HIPAA compliance and EHR integration.",
                solution: "We deployed a secure, scalable video consultation platform fully integrated with their existing Epic EHR system, utilizing WebRTC and encrypted data tunnels.",
                outcome: "Facilitated over 100,000 virtual visits in the first year, reduced no-show rates by 40%, and improved patient satisfaction scores significantly.",
                image: "/images/industries/healthcare-life-sciences.jpg",
                duration: "12 Months",
                technologies: ["WebRTC", "Twilio", "React", "HIPAA Cloud"]
            }}
            faqs={[
                {
                    question: "Are your applications HIPAA and GDPR compliant?",
                    answer: "Yes, compliance is at the core of our healthcare development. We follow strict security protocols including data encryption at rest and in transit, access controls, and regular audits."
                },
                {
                    question: "Do you offer integration with major EHR systems like Epic or Cerner?",
                    answer: "Yes, we have extensive experience with HL7 and FHIR standards to ensure seamless interoperability with major Electronic Health Record systems."
                },
                {
                    question: "How do you ensure the security of patient data?",
                    answer: "We employ a multi-layered security approach including multi-factor authentication (MFA), role-based access control (RBAC), and continuous security monitoring."
                }
            ]}
            testimonials={[
                {
                    name: "Dr. Emily Chen",
                    role: "Chief Digital Officer",
                    company: "CityCare Hospital",
                    content: "Fraylon's deep understanding of clinical workflows and regulatory requirements made them the perfect partner for our digital transformation.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/women/66.jpg"
                },
                {
                    name: "Mark Thompson",
                    role: "COO",
                    company: "VitalHome Health",
                    content: "The remote patient monitoring dashboard they built has empowered our nurses to manage chronic care patients more effectively than ever before.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/men/52.jpg"
                }
            ]}
        />
    );
};

export default Healthcare;
