import IndustryPage from '../components/IndustryPage';

const AIMLIndustry = () => {
    return (
        <IndustryPage
            title="AI & Machine Learning"
            subtitle="Intelligence at Scale"
            description="Transforming raw data into actionable intelligence. We help industries leverage Artificial Intelligence and Machine Learning to automate processes, predict trends, and innovate faster."
            ctaText="Start Your Project"
            ctaLink="/contact"

            heroImage="/industries/ai&machinelearning/677c9dcb0fc59688b0ba8b2a_1.webp"
            showHeroForm={false}
            whyUs={[
                "Custom Algorithms – Models tailored to your specific business data.",
                "Ethical AI – Transparency and fairness in machine learning models.",
                "Edge Computing – deploying AI models on IoT devices for real-time inference.",
                "Seamless Integration – Embedding AI into your existing software ecosystem."
            ]}
            servicesOffered={[
                {
                    title: "Healthcare AI",
                    description: "Enhancing diagnostic accuracy and patient care through predictive analytics, medical imaging analysis, and personalized treatment plans powered by machine learning."
                },
                {
                    title: "Financial AI",
                    description: "Detecting fraud, automating trading strategies, and providing personalized financial advice with secure, real-time data processing algorithms."
                },
                {
                    title: "Retail & E-commerce",
                    description: "Optimizing inventory management, pricing strategies, and customer experiences through recommendation engines and demand forecasting."
                },
                {
                    title: "Manufacturing Intelligence",
                    description: "Implementing predictive maintenance, quality control automation, and supply chain optimization to reduce downtime and operational costs."
                },
                {
                    title: "Natural Language Processing (NLP)",
                    description: "Developing intelligent chatbots, voice assistants, and sentiment analysis tools to improve customer support and automate content generation."
                },
                {
                    title: "Computer Vision",
                    description: "Enabling systems to interpret and make decisions based on visual data, from facial recognition security to automated visual inspection in manufacturing."
                }
            ]}
            process={[
                {
                    title: "Data Assessment",
                    description: "Evaluating your data quality availability and readiness for AI.",
                    duration: "2 Weeks"
                },
                {
                    title: "Model Prototyping",
                    description: "Building and training initial models to test feasibility.",
                    duration: "4 Weeks"
                },
                {
                    title: "Development & Tuning",
                    description: "Refining models for accuracy and integrating them into APIs.",
                    duration: "8-12 Weeks"
                },
                {
                    title: "Deployment & MLOps",
                    description: "Deploying models to production and setting up monitoring.",
                    duration: "3 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Predictive Analytics & Forecasting",
                "Natural Language Processing (NLP)",
                "Computer Vision & Image Recognition",
                "Recommendation Engines",
                "Process Automation (RPA)"
            ]}
            integrations={[
                "TensorFlow",
                "PyTorch",
                "Python",
                "Kubernetes",
                "AWS SageMaker",
                "OpenAI",
                "Azure AI",
                "Hugging Face",
                "Keras",
                "Docker",
                "Grafana",
                "Apache Spark"
            ]}
            caseStudy={{
                title: "Predictive Healthcare Analytics",
                client: "MediCore Systems",
                challenge: "The client needed to reduce the time taken to diagnose rare genetic disorders from patient data, which was taking weeks of manual analysis.",
                solution: "We developed a deep learning model capable of analyzing over 5 million patient records to identify patterns and genetic markers.",
                outcome: "Diagnosis accuracy improved by 35% and average diagnosis time was reduced from 2 weeks to 48 hours.",
                image: "/images/services/ai-integration.jpg",
                duration: "6 Months",
                technologies: ["Python", "TensorFlow", "AWS SageMaker", "React"]
            }}
            faqs={[
                {
                    question: "How much data do I need for an AI project?",
                    answer: "The amount of data depends on the complexity of the problem. For simple regressions, thousands of records may suffice, while deep learning models often require millions of data points. We can help assess your data readiness."
                },
                {
                    question: "Is AI development secure?",
                    answer: "Yes, we prioritize security by using encrypted data pipelines, secure model hosting, and adhering to strict compliance standards like GDPR and HIPAA where applicable."
                },
                {
                    question: "Can you integrate AI with our legacy systems?",
                    answer: "Absolutely. We specialize in building API layers that allow modern AI models to communicate seamlessly with legacy ERP and CRM systems."
                },
                {
                    question: "What is the typical timeline for an MVP?",
                    answer: "A typical Proof of Concept (PoC) or MVP takes between 4 to 8 weeks, depending on the scope and data availability."
                }
            ]}
            testimonials={[
                {
                    name: "Dr. Anjali Gupta",
                    role: "Chief Medical Officer",
                    company: "MediCore Systems",
                    content: "The predictive model Fraylon built has revolutionized our diagnostic process. It's not just about speed; the accuracy has saved lives.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/women/68.jpg"
                },
                {
                    name: "Vikram Singh",
                    role: "CTO",
                    company: "FinTech Innovations",
                    content: "Their expertise in NLP helped us automate 70% of our customer support queries within three months. Exceptional work.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/men/54.jpg"
                }
            ]}
        />
    );
};

export default AIMLIndustry;
