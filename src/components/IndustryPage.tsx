import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import Section from './Section';
import Button from './Button';
import Accordion from './Accordion';

import serviceStyles from '../styles/services.module.css';
import styles from '../styles/components.module.css';

export interface IndustryPageProps {
    // Basic Info
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;

    // Fixed Sections (Required on new pages, optional for backward compatibility)
    whyUs?: string[];  // Previously 'advantages' or 'benefits'
    ourExpertise?: string[];  // Previously 'features'
    servicesOffered?: Array<{
        title: string;
        description: string;
    }>;  // Previously 'services'
    howCanWeHelp?: string[];  // Previously 'industries'
    integrations?: string[];  // Tools we use
    process?: Array<{
        title: string;
        description: string;
        duration: string;
    }>;
    team?: Array<{
        name: string;
        role: string;
        description: string;
        image?: string;
        linkedin?: string;
    }>;

    // Dynamic Sections (Optional - Change per service)
    caseStudy?: {
        title: string;
        client: string;
        challenge: string;
        solution: string;
        outcome: string;
        image?: string;
        duration?: string;
        technologies?: string[];
    };
    faqs?: Array<{
        question: string;
        answer: string;
    }>;
    deliverables?: string[];
    testimonials?: Array<{
        name: string;
        role: string;
        company: string;
        content: string;
        rating: number;
        image?: string;
    }>;
    partners?: Array<{
        name: string;
        description: string;
        logo?: string;
    }>;
    blogs?: Array<{
        title: string;
        date: string;
        link: string;
    }>;

    // Layout Options
    heroLayout?: 'split' | 'centered';
    showHeroForm?: boolean;
    heroImage?: string;
    isIndustryPage?: boolean;

    // New Sections
    stats?: Array<{
        value: string;
        label: string;
        description?: string;
    }>;

    // Legacy fields (for backward compatibility)
    features?: string[];
    benefits?: string[];
    industries?: string[];
    advantages?: string[];
    services?: Array<{
        title: string;
        description: string;
    }>;
}

// Function to get appropriate SVG icon for each tool using external SVG files
// Function to get appropriate SVG icon for each tool using external SVG files
const getToolIcon = (toolName: string) => {
    const toolIcons: { [key: string]: string } = {
        // Original tools from AI Agents
        'Bitbucket': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b117ceabf8617c434b65_6791e8c5da3064473e43e9c9_bitbucket.svg',
        'Discord': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b11493b522de807f12ea_6791e8c5da3064473e43e9ca_discord.svg',
        'WhatsApp': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b11236e3eafaa63f89d4_6791e8c5da3064473e43e9cc_whatsapp.svg',
        'Zendesk': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b10cef9bd01daa577287_6791e8c5da3064473e43e9c6_zendesk.svg',
        'Google Calendar': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b10f03b9228fab9108d9_6791e8c5da3064473e43e9c8_g-calendar.svg',
        'Mailchimp': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b10836e3eafaa63f7efc_6791e8c5da3064473e43e9c7_mailchimp.svg',
        'Confluence': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b106eae56f7c16062820_6791e8c5da3064473e43e9c5_confluence.svg',
        'Figma': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b1049698e17b47dec913_6791e8c5da3064473e43e9cb_figma.svg',
        'Zapier': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b101cc9acbad4ec8323f_6773a1c56b10600055b37aa1_zapier.svg',
        'Stripe': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b0fec4e345a9f6f3ec5a_6773a1c56b10600055b37aa2_stripe.svg',
        'Dropbox': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b0fd2596fd13fe613e7e_6773a1c56b10600055b37aa0_dropbox.svg',
        'Jira': 'https://cdn.prod.website-files.com/67618f1c479d3b91caa743f6/67a1b0fcc4e345a9f6f3eb07_6773a1c46b10600055b37a9d_jira.svg',

        // E-commerce & Marketing Tools
        'Salesforce Commerce Cloud': 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
        'PayPal': 'https://cdn.worldvectorlogo.com/logos/paypal-3.svg',
        'Google Analytics': 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg',
        'Klaviyo': 'https://cdn.worldvectorlogo.com/logos/klaviyo-1.svg', // Changed to klaviyo-1 as klaviyo might be ambiguous
        'HubSpot': 'https://cdn.worldvectorlogo.com/logos/hubspot.svg',
        'Square': 'https://cdn.worldvectorlogo.com/logos/square.svg',
        'Shopify': 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
        'Magento': 'https://cdn.worldvectorlogo.com/logos/magento.svg',
        'WooCommerce': 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg',
        'BigCommerce': 'https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg',

        // Other Tech
        'React': 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        'Node.js': 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
        'Firebase': 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
        'AWS': 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
        'Vercel': 'https://cdn.worldvectorlogo.com/logos/vercel.svg',
        'Slack': 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
        'Trello': 'https://cdn.worldvectorlogo.com/logos/trello.svg',
        'Mixpanel': 'https://cdn.worldvectorlogo.com/logos/mixpanel.svg',
        'Python': 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
        'TensorFlow': 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg',
        'Docker': 'https://cdn.worldvectorlogo.com/logos/docker.svg',
        'Kubernetes': 'https://cdn.worldvectorlogo.com/logos/kubernetes.svg'
    };

    const iconUrl = toolIcons[toolName];

    // If no icon found, return a placeholder with the first letter
    if (!iconUrl) {
        return (
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold'
            }}>
                {toolName.charAt(0)}
            </div>
        );
    }

    return (
        <img
            src={iconUrl}
            alt={`${toolName} logo`}
            style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain'
            }}
        />
    );
};

const IndustryPage: React.FC<IndustryPageProps> = ({
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    // Layout
    heroLayout = 'split',
    showHeroForm = true,
    heroImage,
    // Fixed sections
    whyUs,

    servicesOffered,

    integrations = [],
    process = [],
    team = [],
    // Dynamic sections
    caseStudy,
    faqs,

    testimonials,
    stats,
    // Legacy fields for backward compatibility

    benefits,

    advantages,
    services
}) => {
    // Use new field names, fallback to legacy fields
    const displayWhyUs = whyUs || advantages || benefits || [];

    const displayServices = servicesOffered || services || [];

    return (
        <main style={{ paddingTop: '72px' }}>
            {/* Hero Section */}
            <Section size="hero" background="white">
                <Container>
                    <div
                        className={serviceStyles.heroGrid}
                        style={!showHeroForm ? {
                            gridTemplateColumns: heroImage ? '1fr 1fr' : '1fr',
                            maxWidth: heroLayout === 'centered' && !heroImage ? '900px' : '100%',
                            margin: heroLayout === 'centered' && !heroImage ? '0 auto' : '0',
                            textAlign: heroLayout === 'centered' && !heroImage ? 'center' : 'left',
                            gap: '60px',
                            alignItems: 'center'
                        } : {}}
                    >
                        {/* Left Column - Content */}
                        <div className={serviceStyles.heroContent} style={{ alignItems: heroLayout === 'centered' && !showHeroForm && !heroImage ? 'center' : 'flex-start' }}>
                            <h1 style={{
                                fontSize: '48px',
                                fontWeight: '700',
                                marginBottom: '30px',
                                lineHeight: '1.2',
                                color: 'var(--title)',
                                textAlign: heroLayout === 'centered' && !showHeroForm && !heroImage ? 'center' : 'left'
                            }}>
                                {title}
                            </h1>
                            <p style={{
                                fontSize: '24px',
                                color: 'var(--grey)',
                                marginBottom: '40px',
                                lineHeight: '1.5',
                                fontWeight: '400',
                                textAlign: heroLayout === 'centered' && !showHeroForm && !heroImage ? 'center' : 'left'
                            }}>
                                {subtitle}
                            </p>
                            <p style={{
                                fontSize: '18px',
                                color: 'var(--body)',
                                marginBottom: '60px',
                                lineHeight: '1.7',
                                textAlign: heroLayout === 'centered' && !showHeroForm && !heroImage ? 'center' : 'left'
                            }}>
                                {description}
                            </p>
                            <div style={{ marginBottom: '40px', textAlign: heroLayout === 'centered' && !showHeroForm && !heroImage ? 'center' : 'left' }}>
                                <div className={styles.splitCta} style={{ justifyContent: heroLayout === 'centered' && !showHeroForm && !heroImage ? 'center' : 'flex-start' }}>
                                    <span className={styles.splitCtaText}>{ctaText}</span>
                                    <Link to={ctaLink} className={styles.splitCtaArrow} aria-label={ctaText}></Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Hero Image if present */}
                        {!showHeroForm && heroImage && (
                            <div className={serviceStyles.heroImageContainer} style={{
                                position: 'relative',
                                borderRadius: '0',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                height: '100%',
                                minHeight: '400px'
                            }}>
                                <img
                                    src={heroImage}
                                    alt={`${title} Hero`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0
                                    }}
                                />
                            </div>
                        )}

                        {/* Right Column - Zoho Form if heroImage is NOT present and form IS enabled */}
                        {showHeroForm && !heroImage && (
                            <div className={serviceStyles.formContainer}>
                                <iframe
                                    aria-label='Service Form'
                                    frameBorder="0"
                                    className={serviceStyles.formIframe}
                                    src='https://forms.zohopublic.in/asntechnologies1/form/ServiceForm/formperma/3h021lJ50t0UN-jOarSfwLydiQ0iS4o1y5YbsYiYXSU'
                                    title="Service Inquiry Form"
                                />
                            </div>
                        )}
                    </div>
                </Container>
            </Section>

            {/* Stats Section */}
            {stats && stats.length > 0 && (
                <Section background="white" style={{ paddingTop: '0', paddingBottom: '60px' }}>
                    <Container>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '40px',
                            borderTop: '1px solid #eee',
                            paddingTop: '60px'
                        }}>
                            {stats.map((stat, index) => (
                                <div key={index} style={{ textAlign: 'center' }}>
                                    <div style={{
                                        fontSize: '48px',
                                        fontWeight: '700',
                                        color: 'var(--blue-primary)',
                                        marginBottom: '10px',
                                        lineHeight: '1'
                                    }}>
                                        {stat.value}
                                    </div>
                                    <div style={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        color: 'var(--title)',
                                        marginBottom: '8px'
                                    }}>
                                        {stat.label}
                                    </div>
                                    {stat.description && (
                                        <div style={{
                                            fontSize: '14px',
                                            color: 'var(--body)',
                                            lineHeight: '1.5'
                                        }}>
                                            {stat.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* About Service Section */}
            <Section background="white">
                <Container>
                    <div style={{ maxWidth: '900px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <div style={{
                                width: '8px',
                                height: '8px',
                                backgroundColor: 'var(--title)',
                                borderRadius: '50%',
                                marginRight: '12px'
                            }}></div>
                            <span style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                color: 'var(--title)'
                            }}>
                                ABOUT SERVICE
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: '36px',
                            fontWeight: '700',
                            marginBottom: '30px',
                            color: 'var(--title)',
                            lineHeight: '1.2',
                            textAlign: 'left'
                        }}>
                            {title}
                        </h2>
                        <div style={{
                            fontSize: '18px',
                            color: 'var(--body)',
                            lineHeight: '1.8',
                            textAlign: 'left'
                        }}>
                            <p style={{ marginBottom: '24px' }}>
                                {description}
                            </p>
                            {displayWhyUs.length > 0 && (
                                <div style={{ marginTop: '40px' }}>
                                    <h3 style={{
                                        fontSize: '22px',
                                        fontWeight: '600',
                                        marginBottom: '24px',
                                        color: 'var(--title)'
                                    }}>
                                        Key Insights:
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {displayWhyUs.map((benefit, index) => (
                                            <li key={index} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                marginBottom: '16px',
                                                fontSize: '16px',
                                                lineHeight: '1.7',
                                                color: 'var(--body)'
                                            }}>
                                                <div style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    backgroundColor: 'var(--title)',
                                                    borderRadius: '50%',
                                                    marginRight: '15px',
                                                    marginTop: '10px',
                                                    flexShrink: 0
                                                }}></div>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </Section>



            {/* Services Offered Section - FIXED SECTION */}
            {displayServices.length > 0 && (
                <Section>
                    <Container>
                        <div style={{ maxWidth: '1200px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: 'var(--title)',
                                    borderRadius: '50%',
                                    marginRight: '12px'
                                }}></div>
                                <span style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    color: 'var(--title)'
                                }}>
                                    OUR OFFERED
                                </span>
                            </div>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: '700',
                                marginBottom: '40px',
                                color: 'var(--title)',
                                lineHeight: '1.2',
                                textAlign: 'left'
                            }}>
                                SERVICES
                            </h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '20px',
                                marginBottom: '40px'
                            }}>
                                {displayServices.map((service, index) => (
                                    <div key={index} style={{
                                        backgroundColor: '#f5f5f5',
                                        padding: '30px',
                                        borderRadius: '8px',
                                        border: '1px solid #e5e7eb'
                                    }}>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: '700',
                                            marginBottom: '15px',
                                            color: '#330066',
                                            textAlign: 'left',
                                            lineHeight: '1.3'
                                        }}>
                                            {service.title}
                                        </h4>
                                        <p style={{
                                            fontSize: '16px',
                                            color: '#555555',
                                            lineHeight: '1.6',
                                            margin: 0,
                                            textAlign: 'left'
                                        }}>
                                            {service.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>
            )}



            {/* Tools Section */}
            {integrations.length > 0 && (
                <Section background="gray">
                    <div style={{ width: '100%' }}>
                        <Container>
                            <div style={{ maxWidth: '1200px', marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        backgroundColor: 'var(--title)',
                                        borderRadius: '50%',
                                        marginRight: '12px'
                                    }}></div>
                                    <span style={{
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        letterSpacing: '1px',
                                        color: 'var(--title)'
                                    }}>
                                        INTEGRATIONS
                                    </span>
                                </div>
                                <h2 style={{
                                    fontSize: '36px',
                                    fontWeight: '700',
                                    marginBottom: '30px',
                                    color: 'var(--title)',
                                    lineHeight: '1.2',
                                    textAlign: 'left'
                                }}>
                                    TOOLS WE USE
                                </h2>
                            </div>
                        </Container>

                        <div style={{
                            position: 'relative',
                            overflow: 'hidden',
                            width: '100vw',
                            marginLeft: 'calc(-50vw + 50%)',
                            marginBottom: '40px'
                        }}>
                            <div
                                className="tools-slider"
                                role="marquee"
                                aria-label="Tools and integrations we use"
                                style={{
                                    display: 'flex',
                                    gap: '0',
                                    width: 'fit-content',
                                    alignItems: 'center',
                                    animation: 'slide 25s linear infinite'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.animationPlayState = 'paused';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.animationPlayState = 'running';
                                }}
                            >
                                {/* Only show tools that have real SVG icons */}
                                {[...integrations, ...integrations, ...integrations]
                                    .map((integration, index) => (
                                        <div
                                            key={`tool-${index}`}
                                            role="img"
                                            aria-label={`${integration} tool integration`}
                                            tabIndex={0}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                padding: '1.5rem 1rem',
                                                textAlign: 'center',
                                                minWidth: '120px',
                                                flexShrink: 0,
                                                transition: 'transform 0.3s ease',
                                                cursor: 'pointer',
                                                outline: 'none',
                                                marginRight: '4rem'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                            onFocus={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.1)';
                                            }}
                                            onBlur={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        >
                                            <div style={{
                                                marginBottom: '0.75rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '64px',
                                                height: '64px'
                                            }}>
                                                {getToolIcon(integration)}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Our Working Process Section */}
            {process.length > 0 && (
                <Section background="white">
                    <Container>
                        <div style={{ maxWidth: '900px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: 'var(--title)',
                                    borderRadius: '50%',
                                    marginRight: '12px'
                                }}></div>
                                <span style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    color: 'var(--title)'
                                }}>
                                    OUR PROCESS
                                </span>
                            </div>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: '700',
                                marginBottom: '20px',
                                color: 'var(--title)',
                                lineHeight: '1.2',
                                textAlign: 'left'
                            }}>
                                WORKING PROCESS
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                color: 'var(--body)',
                                marginBottom: '50px',
                                lineHeight: '1.6',
                                textAlign: 'left'
                            }}>
                                Our structured {title.toLowerCase()} process ensures seamless automation and AI-driven business efficiency.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                                {process.map((step, index) => (
                                    <div key={index} style={{
                                        borderLeft: '3px solid var(--primary)',
                                        paddingLeft: '30px',
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            left: '-9px',
                                            top: '0',
                                            width: '15px',
                                            height: '15px',
                                            backgroundColor: 'var(--primary)',
                                            borderRadius: '50%'
                                        }}></div>
                                        <h3 style={{
                                            fontSize: '22px',
                                            fontWeight: '600',
                                            marginBottom: '8px',
                                            color: 'var(--title)'
                                        }}>
                                            {step.title} {step.duration && <span style={{
                                                fontSize: '16px',
                                                fontWeight: '400',
                                                color: 'var(--grey)'
                                            }}>({step.duration})</span>}
                                        </h3>
                                        <p style={{
                                            fontSize: '16px',
                                            color: 'var(--body)',
                                            lineHeight: '1.7',
                                            marginBottom: '12px'
                                        }}>
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>
            )}

            {/* Case Study Section */}
            {caseStudy && (
                <Section>
                    <Container>
                        <div style={{ maxWidth: '1000px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: 'var(--title)',
                                    borderRadius: '50%',
                                    marginRight: '12px'
                                }}></div>
                                <span style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    color: 'var(--title)'
                                }}>
                                    SUCCESS STORY
                                </span>
                            </div>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: '700',
                                marginBottom: '40px',
                                color: 'var(--title)',
                                lineHeight: '1.2',
                                textAlign: 'left'
                            }}>
                                CASE STUDY
                            </h2>

                            <div>
                                <h3 style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    marginBottom: '16px',
                                    color: 'var(--title)',
                                    lineHeight: '1.3'
                                }}>
                                    {caseStudy.title}
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    color: 'var(--grey)',
                                    marginBottom: '40px',
                                    fontStyle: 'italic'
                                }}>
                                    Client: {caseStudy.client}
                                </p>

                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        marginBottom: '12px',
                                        color: 'var(--title)'
                                    }}>
                                        The Challenge
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        color: 'var(--body)',
                                        lineHeight: '1.7'
                                    }}>
                                        {caseStudy.challenge}
                                    </p>
                                </div>

                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        marginBottom: '12px',
                                        color: 'var(--title)'
                                    }}>
                                        Our Solution
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        color: 'var(--body)',
                                        lineHeight: '1.7'
                                    }}>
                                        {caseStudy.solution}
                                    </p>
                                </div>

                                <div>
                                    <h4 style={{
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        marginBottom: '12px',
                                        color: 'var(--title)'
                                    }}>
                                        The Results
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        color: 'var(--body)',
                                        lineHeight: '1.7',
                                        fontWeight: '500'
                                    }}>
                                        {caseStudy.outcome}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            )}

            {/* Meet Our Team Section */}
            {team && team.length > 0 && (
                <Section background="white">
                    <Container>
                        <div style={{ maxWidth: '1200px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: 'var(--title)',
                                    borderRadius: '50%',
                                    marginRight: '12px'
                                }}></div>
                                <span style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    color: 'var(--title)'
                                }}>
                                    OUR TEAM
                                </span>
                            </div>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: '700',
                                marginBottom: '40px',
                                color: 'var(--title)',
                                lineHeight: '1.2',
                                textAlign: 'left'
                            }}>
                                MEET OUR DEVELOPERS
                            </h2>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '30px',
                                marginTop: '40px'
                            }}>
                                {team.map((member, index) => (
                                    <div key={index} style={{ textAlign: 'center' }}>
                                        {member.image && (
                                            <div style={{
                                                width: '120px',
                                                height: '120px',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                margin: '0 auto 20px',
                                                border: '3px solid var(--primary)'
                                            }}>
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            </div>
                                        )}
                                        <h3 style={{
                                            fontSize: '20px',
                                            fontWeight: '600',
                                            marginBottom: '8px',
                                            color: 'var(--title)'
                                        }}>
                                            {member.name}
                                        </h3>
                                        <p style={{
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            color: 'var(--primary)',
                                            marginBottom: '12px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}>
                                            {member.role}
                                        </p>
                                        <p style={{
                                            fontSize: '15px',
                                            color: 'var(--body)',
                                            lineHeight: '1.6',
                                            marginBottom: '16px'
                                        }}>
                                            {member.description}
                                        </p>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    color: 'var(--primary)',
                                                    textDecoration: 'none',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    transition: 'opacity 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                                LinkedIn
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>
            )}

            {/* Testimonials Section */}
            {testimonials && testimonials.length > 0 && (
                <Section background="gray">
                    <Container>
                        <div style={{ maxWidth: '1200px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: 'var(--title)',
                                    borderRadius: '50%',
                                    marginRight: '12px'
                                }}></div>
                                <span style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    color: 'var(--title)'
                                }}>
                                    TESTIMONIALS
                                </span>
                            </div>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: '700',
                                marginBottom: '40px',
                                color: 'var(--title)',
                                lineHeight: '1.2',
                                textAlign: 'left'
                            }}>
                                CLIENT SUCCESS STORIES
                            </h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '30px'
                            }}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} style={{
                                        backgroundColor: 'white',
                                        padding: '40px',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                    }}>
                                        <div style={{ marginBottom: '20px' }}>
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} style={{
                                                    color: i < testimonial.rating ? '#FFD700' : '#E0E0E0',
                                                    fontSize: '20px',
                                                    marginRight: '4px'
                                                }}>★</span>
                                            ))}
                                        </div>
                                        <p style={{
                                            fontSize: '16px',
                                            color: 'var(--body)',
                                            lineHeight: '1.7',
                                            marginBottom: '30px',
                                            fontStyle: 'italic'
                                        }}>
                                            "{testimonial.content}"
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            {testimonial.image && (
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        borderRadius: '50%',
                                                        marginRight: '15px',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            )}
                                            <div>
                                                <div style={{
                                                    fontSize: '16px',
                                                    fontWeight: '700',
                                                    color: 'var(--title)',
                                                    marginBottom: '4px'
                                                }}>
                                                    {testimonial.name}
                                                </div>
                                                <div style={{
                                                    fontSize: '14px',
                                                    color: 'var(--grey)'
                                                }}>
                                                    {testimonial.role}, {testimonial.company}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </Section>
            )}

            {/* FAQs Section */}
            {faqs && faqs.length > 0 && (
                <Section background="white">
                    <Container>
                        <div style={{ maxWidth: '1000px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: 'var(--title)',
                                    borderRadius: '50%',
                                    marginRight: '12px'
                                }}></div>
                                <span style={{
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    color: 'var(--title)'
                                }}>
                                    FAQ'S
                                </span>
                            </div>
                            <h2 style={{
                                fontSize: '36px',
                                fontWeight: '700',
                                marginBottom: '16px',
                                color: 'var(--title)',
                                lineHeight: '1.2',
                                textAlign: 'left'
                            }}>
                                FREQUENTLY ASKED QUESTIONS
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                color: 'var(--body)',
                                marginBottom: '40px',
                                lineHeight: '1.6',
                                textAlign: 'left'
                            }}>
                                Discover quick and comprehensive answers to common questions about our platform, services, and features.
                            </p>

                            <Accordion items={faqs} />
                        </div>
                    </Container>
                </Section>
            )}

            {/* CTA Section */}
            <Section>
                <Container>
                    <div style={{ maxWidth: '800px' }}>
                        <h2 style={{
                            fontSize: '36px',
                            fontWeight: '700',
                            marginBottom: '30px',
                            color: 'var(--title)',
                            lineHeight: '1.2',
                            textAlign: 'left'
                        }}>
                            Let's Discuss Your Project!
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            color: 'var(--body)',
                            marginBottom: '40px',
                            lineHeight: '1.6',
                            maxWidth: '600px',
                            textAlign: 'left'
                        }}>
                            Get in touch today for a free consultation and discover how we can help elevate your digital presence.
                        </p>
                        <div style={{ textAlign: 'left' }}>
                            <Link to={ctaLink} style={{ textDecoration: 'none' }}>
                                <Button variant="secondary" size="large">
                                    {ctaText}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>

        </main>
    );
};

export default IndustryPage;
