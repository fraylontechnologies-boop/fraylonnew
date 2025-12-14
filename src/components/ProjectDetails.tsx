import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Container from './Container';
import Button from './Button';
import styles from '../styles/projectDetails.module.css';

interface ProjectResult {
  number: string;
  label: string;
}

interface ProjectTestimonial {
  quote: string;
  client: string;
  role: string;
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  heroImage: string;
  gallery: string[];
  description: string;
  task: string;
  strategy: string;
  tools: string;
  client: string;
  overview: string;
  features: string[];
  whatWeDid: string[];
  results: ProjectResult[];
  testimonial: ProjectTestimonial;
  websiteUrl: string;
}

// Mock project data - in a real app this would come from an API or CMS
const projectData: Record<string, ProjectData> = {
  'asaj-solutions': {
    id: 'asaj-solutions',
    title: 'ASAJ Solutions Job Portal',
    category: 'Website Design & Development',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop'
    ],
    description: 'ASAJ Solutions required a dynamic and user-friendly job portal to connect employers and job seekers in IT and non-IT sectors. We developed a robust WordPress-powered platform tailored for job seekers and employers, featuring a seamless user experience and powerful backend capabilities to manage job listings, applications, and employer accounts.',
    task: 'Delivered a comprehensive job portal website, featuring easy navigation, detailed job listings, and a user-friendly application process tailored for middle and senior-level professionals in both IT and non-IT fields.',
    strategy: 'Custom Job Portal Design, WordPress Development, UX/UI Optimization',
    tools: 'Figma, WordPress, Elementor',
    client: 'Mazhar Alam',
    overview: 'ASAJ Solutions is a job portal designed to help job seekers in the IT and non-IT industries find permanent and contract-based (C2H) positions. Their platform caters to middle and senior-level professionals, providing high-quality job opportunities to elevate careers. The website was developed with a focus on ease of use, quick job search, and efficient application processes, enhancing the overall user experience for both job seekers and employers.',
    features: [
      'Job Search Functionality: Filters for location, industry, job type, and experience level',
      'Job Listings: Easy-to-read, categorized listings that feature both IT and non-IT roles',
      'User Profiles: Job seekers can create personalized profiles to apply for jobs and track applications',
      'Application Management: Simple job application process integrated with profile data for quick submissions',
      'Employer Dashboard: For companies to manage job postings, applications, and candidate searches',
      'Job Alerts: Email notifications for job seekers when relevant positions are posted',
      'Mobile Responsive: Fully optimized for a smooth browsing and application experience on mobile devices'
    ],
    whatWeDid: [
      'Custom UI/UX Design: Created a sleek, modern design that aligns with ASAJ Solutions\' brand while ensuring users can navigate the job listings effortlessly',
      'WordPress Development: Built a robust job portal using WordPress, customized to cater to job listings, applications, and user management',
      'Job Listing Integration: Incorporated job categories, search filters, and location-based options for easy navigation',
      'Profile and Application Features: Developed a system for job seekers to create profiles and submit applications directly from the portal',
      'Employer Dashboard: Added an intuitive backend interface for employers to manage job postings and review applications',
      'Real-Time Job Alerts: Integrated a job alert system to keep job seekers informed about new opportunities',
      'SEO and Performance Optimization: Enhanced search engine visibility and optimized the website\'s performance for fast load times and a smooth user experience',
      'Mobile-First Design: Ensured the portal was fully mobile-responsive, offering the best experience on any device'
    ],
    results: [
      { number: '140%', label: 'Increase in qualified leads' },
      { number: '35%', label: 'Improvement in brand recognition' },
      { number: '3x', label: 'Faster sales cycle' },
      { number: '95%', label: 'Client satisfaction rate' }
    ],
    testimonial: {
      quote: 'The new brand identity has completely transformed how we\'re perceived in the market. We\'ve seen a significant increase in high-quality leads and our sales team reports that prospects already know and trust our brand before we even get on the phone.',
      client: 'Sarah Johnson',
      role: 'Marketing Director, ASAJ Solutions'
    },
    websiteUrl: 'https://asajsolutions.com'
  },
  'project-1': {
    id: 'project-1',
    title: 'E-COMMERCE PLATFORM DESIGN',
    category: 'WEB DEVELOPMENT',
    heroImage: '/E-Commerce Website/image.png',
    gallery: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
    ],
    description: 'Complete design of an e-commerce platform to improve user experience and increase conversion rates.',
    task: 'The client was experiencing low conversion rates and high bounce rates on their e-commerce platform.',
    strategy: 'User Research, Interface Redesign, Modern Design System',
    tools: 'Figma, React, Node.js',
    client: 'E-commerce Client',
    overview: 'Complete redesign of an e-commerce platform to improve user experience and increase conversion rates.',
    features: [
      'Modern UI/UX Design',
      'Responsive Layout',
      'Fast Loading Times',
      'Secure Payment Processing'
    ],
    whatWeDid: [
      'Conducted comprehensive user research to identify pain points',
      'Redesigned the interface with a focus on conversion optimization',
      'Implemented a modern design system for consistency',
      'Optimized performance for faster page loads'
    ],
    results: [
      { number: '42%', label: 'Increase in conversion rate' },
      { number: '28%', label: 'Reduction in bounce rate' },
      { number: '3.2x', label: 'Faster page load times' }
    ],
    testimonial: {
      quote: 'The redesign transformed our online store. Conversion rates have never been higher!',
      client: 'Michael Chen',
      role: 'E-commerce Director'
    },
    websiteUrl: 'https://eastedge.onrender.com/'
  },
  'project-2': {
    id: 'project-2',
    title: 'INNOVATIVE BIM SERVICES',
    category: 'WEB DEVELOPMENT',
    heroImage: '/BIM Services Project/image.png',
    gallery: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    ],
    description: 'Innovative BIM Services provides Building Information Modeling (BIM) and related engineering, design, and consulting services on various BIM platforms to stakeholders in the construction industry.',
    task: 'Develop a comprehensive BIM services platform to support construction companies globally, offering services from the conceptual (pre-design) stage to the final commissioning stage.',
    strategy: 'BIM Consulting Services, BIM Engineering Services, Comprehensive Project Support',
    tools: 'Figma, React, Node.js, BIM Software, AutoCAD, Revit',
    client: 'Construction Industry',
    overview: 'Innovative BIM Services provides Building Information Modeling (BIM) and related engineering, design, and consulting services on various BIM platforms to stakeholders in the construction industry. The company supports construction companies globally, offering services from the conceptual (pre-design) stage to the final commissioning stage.',
    features: [
      'BIM Consulting Services',
      'BIM Engineering Services',
      'Comprehensive Project Support',
      'Multi-Platform BIM Solutions'
    ],
    whatWeDid: [
      'Provided expert BIM consulting services to help clients grow and specialize in the BIM field',
      'Managed and coordinated data in large complex projects for better execution',
      'Offered comprehensive support from conceptual design stage to final commissioning',
      'Developed multi-platform BIM solutions for various construction stakeholders'
    ],
    results: [
      { number: '60%', label: 'Improvement in construction efficiency' },
      { number: '45%', label: 'Reduction in project timelines' },
      { number: '95%', label: 'Client satisfaction rate' }
    ],
    testimonial: {
      quote: 'Innovative BIM Services has transformed our construction processes with their comprehensive BIM consulting and engineering services. Their support from conceptual design to final commissioning has been invaluable.',
      client: 'Michael Thompson',
      role: 'Project Director, Construction Firm'
    },
    websiteUrl: 'https://innovativebim.netlify.app/'
  },
  'project-3': {
    id: 'project-3',
    title: 'SRI SAI DIGITAL PHOTO STUDIO',
    category: 'WEB DEVELOPMENT',
    heroImage: '/digital photo studio/image.png',
    gallery: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    ],
    description: 'Professional photography services capturing your precious moments with creativity and precision. Specializing in wedding photography, portrait sessions, and event coverage.',
    task: 'Develop a comprehensive photography studio website to showcase portfolios and enable online booking for professional photography services.',
    strategy: 'Website Design, Online Booking System, SEO Optimization',
    tools: 'Figma, React, Node.js, Photography Equipment',
    client: 'Photography Studio',
    overview: 'Professional photography services capturing your precious moments with creativity and precision. Specializing in wedding photography, portrait sessions, and event coverage.',
    features: [
      'Wedding Photography',
      'Portrait Sessions',
      'Event Coverage',
      'Photo Editing Services',
      'Custom Photo Albums'
    ],
    whatWeDid: [
      'Created a visually appealing and user-friendly website to showcase photography portfolios',
      'Implemented an online booking system for clients to schedule sessions conveniently',
      'Optimized the website for search engines to increase online visibility',
      'Developed custom photo gallery and portfolio management system'
    ],
    results: [
      { number: '150%', label: 'Increase in online bookings' },
      { number: '200%', label: 'Growth in portfolio views' },
      { number: '95%', label: 'Client satisfaction rate' }
    ],
    testimonial: {
      quote: 'Sri Sai Digital Photo Studio captured our wedding beautifully. The photos are stunning, and the team was professional throughout.',
      client: 'A Happy Couple',
      role: 'Wedding Clients'
    },
    websiteUrl: 'https://saistudio1247.netlify.app/'
  },
  'project-4': {
    id: 'project-4',
    title: 'SaaS Dashboard',
    category: 'Product Design',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop'
    ],
    description: 'Design of a comprehensive SaaS dashboard for analytics and business intelligence.',
    task: 'Creating an intuitive dashboard that presents complex data in an easily digestible format.',
    strategy: 'Data Visualization, User Experience Design, Information Architecture',
    tools: 'Figma, D3.js, React',
    client: 'DataCorp',
    overview: 'Design of a comprehensive SaaS dashboard for analytics and business intelligence.',
    features: [
      'Interactive Data Visualizations',
      'Customizable Widgets',
      'Real-time Data Updates',
      'Export Functionality'
    ],
    whatWeDid: [
      'Designed customizable dashboards with interactive visualizations',
      'Created a user-friendly interface for complex data analysis',
      'Implemented real-time data updates for current insights',
      'Developed export functionality for report generation'
    ],
    results: [
      { number: '50%', label: 'Reduction in training time' },
      { number: '95%', label: 'User adoption rate' },
      { number: '25%', label: 'Increase in productivity' }
    ],
    testimonial: {
      quote: 'The dashboard has transformed how our team makes data-driven decisions. It\'s an essential tool for our business.',
      client: 'David Kim',
      role: 'CTO, DataCorp'
    },
    websiteUrl: '#'
  }
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Default to first project if no ID is provided
  const project = projectData[id || 'asaj-solutions'] || projectData['asaj-solutions'];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleBackToProjects = () => {
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Then navigate to projects page
    navigate('/projects');
  };

  return (
    <div className={styles.projectDetails}>
      {/* Blue Banner */}
      <div className={styles.aiBanner}>
        <Container>
          <p className={styles.bannerText}>
            Introducing Fraylon AI — Automations, AI Agents & Intelligent Workflows for your business.
            <a href="#" className={styles.bannerLink}>Explore Now →</a>
          </p>
        </Container>
      </div>

      <Container>
        {/* Back to Projects Button - Moved to top */}
        <div className={styles.backButtonContainer}>
          <button onClick={handleBackToProjects} className={styles.backLink}>
            ← Back to Projects
          </button>
        </div>

        {/* Category and Title Only */}
        <div className={styles.projectHeader}>
          <div className={styles.categoryBadge}>
            <div className={styles.categoryDot}></div>
            <span>{project.category}</span>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
        </div>

        {/* Project Details - Above image */}
        <div className={styles.projectDetailsTop}>
          <div className={styles.detailsSection}>
            <h3 className={styles.detailTitle}>Task</h3>
            <p className={styles.detailText}>{project.task}</p>
          </div>

          <div className={styles.detailsRow}>
            <div className={styles.detailsSection}>
              <h3 className={styles.detailTitle}>Strategy</h3>
              <p className={styles.detailText}>{project.strategy}</p>
            </div>

            <div className={styles.detailsSection}>
              <h3 className={styles.detailTitle}>Tools</h3>
              <p className={styles.detailText}>{project.tools}</p>
            </div>

            <div className={styles.detailsSection}>
              <h3 className={styles.detailTitle}>Client</h3>
              <p className={styles.detailText}>{project.client}</p>
            </div>
          </div>

          <a href={project.websiteUrl} className={styles.visitWebsiteBtn} target="_blank" rel="noopener noreferrer">
            Visit Website →
          </a>
        </div>

        {/* Large Project Image */}
        <div className={styles.projectImageContainer}>
          <img
            src={project.heroImage}
            alt={project.title}
            className={styles.projectImage}
          />
        </div>

        {/* Project Overview Section */}
        <div className={styles.projectOverview}>
          <h2 className={styles.overviewTitle}>Project overview</h2>
          <p className={styles.overviewDescription}>{project.overview}</p>

          <h3 className={styles.featuresTitle}>Key website features include:</h3>
          <ul className={styles.featuresList}>
            {project.features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* What We Did Section */}
        <div className={styles.whatWeDidSection}>
          <h2 className={styles.whatWeDidTitle}>What we did</h2>
          <ul className={styles.whatWeDidList}>
            {project.whatWeDid.map((item, index) => (
              <li key={index} className={styles.whatWeDidItem}>{item}</li>
            ))}
          </ul>

          <p className={styles.whatWeDidConclusion}>
            The resulting job portal is a powerful platform designed to bridge the gap between job seekers and companies. ASAJ Solutions can now connect skilled professionals with high-quality roles while providing a user-friendly experience for job seekers and employers alike.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetails;