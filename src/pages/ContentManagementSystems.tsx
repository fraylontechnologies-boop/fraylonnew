import SolutionPage from '../components/SolutionPage';

const ContentManagementSystems = () => {
    return (
        <SolutionPage
            title="Content Management Systems (CMS)"
            subtitle="Empower Your Content Strategy"
            description="Scalable, secure, and user-friendly CMS solutions that give you full control over your digital content. From headless CMS to enterprise-grade platforms, we build systems that grow with your business."
            ctaText="Start Your Project"
            ctaLink="/contact"
            whyUs={[
                "Custom Workflows – Tailored publishing flows to match your team structure.",
                "Headless Capability – Decoupled front-end and back-end for omnichannel delivery.",
                "Security First – Role-based access control and regular security patches.",
                "SEO Friendliness – Built-in tools to optimize content for search engines."
            ]}
            process={[
                {
                    title: "Needs Analysis",
                    description: "Evaluating your content types, volume, and team roles.",
                    duration: "1 Week"
                },
                {
                    title: "Platform Selection & Design",
                    description: "Choosing the right stack (WordPress, Strapi, Contentful, etc.) and designing the architecture.",
                    duration: "2 Weeks"
                },
                {
                    title: "Development & Migration",
                    description: "Building content models and migrating existing data.",
                    duration: "6-8 Weeks"
                },
                {
                    title: "Training & Handover",
                    description: "Training your editorial team on the new system.",
                    duration: "1 Week"
                }
            ]}
            howCanWeHelp={[
                "Custom CMS Development",
                "Headless CMS Implementation",
                "Plugin & Module Development",
                "CMS Migration Services",
                "Enterprise Content Governance"
            ]}
        />
    );
};

export default ContentManagementSystems;
