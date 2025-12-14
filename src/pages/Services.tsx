
import Container from '../components/Container';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Button from '../components/Button';
import Flex from '../components/Flex';
import LaserFlow from '../components/LaserFlow';

import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollUtils';

const Services = () => {
  // Don't scroll on mount - let browser handle it naturally
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'auto' });
  // }, []);
  // Function to get service link based on title
  const getServiceLink = (title: string) => {
    const linkMap: { [key: string]: string } = {
      'Web Application Development': '/services/web-development',
      'UI/UX & Product Design': '/services/ui-ux-design',
      'Native Mobile App': '/services/mobile-app-development',
      'Hybrid Mobile App': '/services/mobile-app-development',
      'WordPress Development': '/services/wordpress-development',
      'Shopify Development': '/services/shopify-development',
      'Digital Marketing': '/services/digital-marketing',
      'SEO Services': '/services/digital-marketing',
      'Social Media & Paid Advertising': '/services/digital-marketing',
      'Inbound Marketing & Content Strategy': '/services/digital-marketing',
      'Graphic Design': '/services/ui-ux-design',
      'Branding & Visual Identity': '/services/ui-ux-design',
      'Software Development': '/services/web-development',
      'E-commerce Website Development': '/services/ecommerce-development',
      'Custom Website & CMS Development': '/services/web-development',
      'Enterprise Portals & Dashboards': '/services/web-development',
      'Digital Transformation': '/services/technology-consulting',
      'IT Staff Augmentation': '/services/technology-consulting',
      'Technology Consulting': '/services/technology-consulting',
      'Maintenance & Support Services': '/services/web-development',
      'AI Integration & Strategy Consulting': '/services/ai-agents-development',
      'AI Agents Development': '/services/ai-agents-development',
      'Natural Language Processing (NLP) Solutions': '/services/ai-agents-development',
      'MVP Development': '/services/mvp-development',
      'Rapid Prototyping': '/services/mvp-development',
      'Bubble.io Development': '/services/web-development',
      'Magento Development': '/services/ecommerce-development',
      'Wix Development': '/services/web-development',
      'Webflow Development': '/services/web-development',
      'Framer Development': '/services/ui-ux-design',
      'Studio AI Development': '/services/ai-agents-development',
      'Dora Development': '/services/web-development'
    };
    return linkMap[title] || '/services';
  };

  // Handle service click with scroll to top
  const handleServiceClick = () => {
    scrollToTop();
  };

  // Function to get solution image path based on solution name
  const getSolutionImage = (solutionName: string) => {
    // Map solution names to their corresponding image filenames
    const imageMap: { [key: string]: string } = {
      "E-commerce Marketplace": "/images/solutions/ecommerce marketplace.jpg",
      "School Management Software": "/images/solutions/school management software.jpg",
      "Hospital Management System": "/images/solutions/hospital management software.jpg",
      "HR and Payroll Systems": "/images/solutions/hr payroll software.webp",
      "CRM Solutions": "/images/solutions/CRM Solutions.jpg",
      "Inventory Management Solutions": "/images/solutions/Inventory Management Solutions.jpg",
      "Content Management Systems (CMS)": "/images/solutions/Content Management Systems (CMS).avif",
      "Learning Management System (LMS)": "/images/solutions/Learning Management System (LMS).jpg",
      "Appointment Scheduling Software": "/images/solutions/Appointment Scheduling Software.jpg",
      "Point of Sale (POS) Systems": "/images/solutions/Point of Sale (POS) Systems.jpg",
      "Event Management Solutions": "/images/solutions/Event Management Solutions.jpg",
      "Project Management Tools": "/images/solutions/Project Management Tools.webp",
      "Analytics Dashboards": "/images/solutions/Analytics Dashboards.jpg",
      "Mobile Applications": "/images/solutions/Mobile Applications.jpg",
      "API Development": "/images/solutions/API Development.jpg"
    };

    return imageMap[solutionName] || `/images/solutions/${solutionName.toLowerCase().replace(/\s+/g, '-')}.jpg`;
  };

  const services = [
    {
      title: "AI Agents Development",
      image: "/images/services/ai-agents-development.jpg", // Add your image here
      description: "Build intelligent AI agents that automate business processes and enhance customer experiences."
    },
    {
      title: "Studio AI Development",
      image: "/images/services/studio-ai-development.jpg", // Add your image here
      description: "Create AI-powered studio solutions for content creation and digital workflows."
    },
    {
      title: "Dora Development",
      image: "/images/services/dora-development.jpeg", // Add your image here
      description: "Develop custom Dora-based applications for streamlined business operations."
    },
    {
      title: "Framer Development",
      image: "/images/services/framer-development.jpg", // Add your image here
      description: "Build interactive prototypes and high-fidelity designs with Framer."
    },
    {
      title: "Rapid Prototyping",
      image: "/images/services/rapid-prototyping.jpg", // Add your image here
      description: "Quickly validate ideas with fast, iterative prototyping solutions."
    },
    {
      title: "MVP Development",
      image: "/images/services/mvp-development.jpg", // Add your image here
      description: "Launch your minimum viable product with proven development methodologies."
    },
    {
      title: "Bubble.io Development",
      image: "/images/services/bubble-development.jpg", // Add your image here
      description: "Create powerful web applications without coding using Bubble.io."
    },
    {
      title: "Magento Development",
      image: "/images/services/magento-development.jpg", // Add your image here
      description: "Build scalable e-commerce solutions with Magento platform."
    },
    {
      title: "Shopify Development",
      image: "/images/services/shopify-development.jpg", // Add your image here
      description: "Create high-converting Shopify stores with custom features and integrations."
    },
    {
      title: "Wix Development",
      image: "/images/services/wix-development.jpg", // Add your image here
      description: "Design and develop custom Wix websites that engage and convert visitors."
    },
    {
      title: "Webflow Development",
      image: "/images/services/webflow-development.jpg", // Add your image here
      description: "Build responsive, custom websites with Webflow's visual development platform."
    },
    {
      title: "WordPress Development",
      image: "/images/services/wordpress-development.jpg", // Add your image here
      description: "Create powerful WordPress websites with custom themes and plugins."
    },
    {
      title: "Maintenance & Support Services",
      image: "/images/services/maintenance-support.jpg", // Add your image here
      description: "Keep your digital solutions running smoothly with ongoing maintenance and support."
    },
    {
      title: "Technology Consulting",
      image: "/images/services/technology-consulting.jpg", // Add your image here
      description: "Get expert guidance on technology strategy and digital transformation."
    },
    {
      title: "IT Staff Augmentation",
      image: "/images/services/staff-augmentation.jpg", // Add your image here
      description: "Scale your development team with skilled IT professionals."
    },
    {
      title: "Digital Transformation",
      image: "/images/services/digital-transformation.jpg", // Add your image here
      description: "Transform your business with modern digital solutions and processes."
    },
    {
      title: "Natural Language Processing (NLP) Solutions",
      image: "/images/services/nlp-solutions.jpg", // Add your image here
      description: "Implement AI-powered language processing for enhanced user interactions."
    },
    {
      title: "AI Integration & Strategy Consulting",
      image: "/images/services/ai-integration.jpg", // Add your image here
      description: "Integrate AI solutions into your business with strategic consulting."
    },
    {
      title: "Graphic Design",
      image: "/images/services/graphic-design.jpg", // Add your image here
      description: "Create compelling visual designs that communicate your brand message."
    },
    {
      title: "UI/UX & Product Design",
      image: "/images/services/ui-ux-design.jpg", // Add your image here
      description: "Design intuitive user experiences that delight customers and drive engagement."
    },
    {
      title: "Social Media & Paid Advertising",
      image: "/images/services/social-media-marketing.jpg", // Add your image here
      description: "Amplify your brand reach with strategic social media and advertising campaigns."
    },
    {
      title: "SEO Services",
      image: "/images/services/seo-services.jpg", // Add your image here
      description: "Improve your search rankings and organic traffic with proven SEO strategies."
    },
    {
      title: "Inbound Marketing & Content Strategy",
      image: "/images/services/inbound-marketing.jpg", // Add your image here
      description: "Attract and engage customers with strategic content and inbound marketing."
    },
    {
      title: "Hybrid Mobile App",
      image: "/images/services/hybrid-mobile-app.jpg", // Add your image here
      description: "Build cross-platform mobile applications that work on iOS and Android."
    },
    {
      title: "Native Mobile App",
      image: "/images/services/native-mobile-app.jpg", // Add your image here
      description: "Develop high-performance native mobile applications for iOS and Android."
    },
    {
      title: "Enterprise Portals & Dashboards",
      image: "/images/services/enterprise-portals.jpg", // Add your image here
      description: "Create powerful enterprise solutions with custom portals and dashboards."
    },
    {
      title: "Software Development",
      image: "/images/services/software-development.jpg", // Add your image here
      description: "Build custom software solutions tailored to your business requirements."
    },
    {
      title: "E-commerce Website Development",
      image: "/images/services/ecommerce-development.jpg", // Add your image here
      description: "Create online stores that convert visitors into customers with optimized e-commerce solutions."
    },
    {
      title: "Web Application Development",
      image: "/images/services/web-development.jpg", // Add your image here
      description: "Develop scalable web applications that power your business operations."
    },
    {
      title: "Custom Website & CMS Development",
      image: "/images/services/custom-website-development.jpg", // Add your image here
      description: "Build custom websites and content management systems for your unique needs."
    },
    {
      title: "Branding & Visual Identity",
      image: "/images/services/branding-design.jpg", // Add your image here
      description: "Develop a strong brand identity that resonates with your target audience."
    }
  ];

  const industries = [
    {
      name: "Banking & Financial Services",
      description: "Digital banking, fintech, and payment solutions",
      icon: "BANK",
      image: "/images/industries/banking-financial.jpg"
    },
    {
      name: "Healthcare & Life Sciences",
      description: "Medical software, patient management, and health tech",
      icon: "HEALTH",
      image: "/images/industries/healthcare-life-sciences.jpg"
    },
    {
      name: "Manufacturing & Resources",
      description: "Industrial automation and supply chain management",
      icon: "MFG",
      image: "/images/industries/manufacturing-resources.jpg"
    },
    {
      name: "Technology & Media",
      description: "Software development and digital media solutions",
      icon: "TECH",
      image: "/images/industries/technology-media.jpg"
    },
    {
      name: "Retail & Consumer",
      description: "E-commerce, retail tech, and consumer applications",
      icon: "RETAIL",
      image: "/images/industries/retail-consumer.jpg"
    }
  ];

  const solutions = [
    {
      name: "E-commerce Marketplace",
      description: "Multi-vendor online marketplaces",
      icon: "ECOMM"
    },
    {
      name: "School Management Software",
      description: "Educational institution management",
      icon: "EDU"
    },
    {
      name: "Hospital Management System",
      description: "Healthcare facility management",
      icon: "HOSP"
    },
    {
      name: "HR and Payroll Systems",
      description: "Human resources and payroll automation",
      icon: "HR"
    },
    {
      name: "CRM Solutions",
      description: "Customer relationship management",
      icon: "CRM"
    },
    {
      name: "Inventory Management Solutions",
      description: "Stock and supply chain management",
      icon: "INV"
    },
    {
      name: "Content Management Systems (CMS)",
      description: "Website and content management",
      icon: "CMS"
    },
    {
      name: "Learning Management System (LMS)",
      description: "Online education platforms",
      icon: "LMS"
    },
    {
      name: "Appointment Scheduling Software",
      description: "Booking and scheduling systems",
      icon: "SCHED"
    },
    {
      name: "Point of Sale (POS) Systems",
      description: "Retail and payment processing",
      icon: "POS"
    },
    {
      name: "Event Management Solutions",
      description: "Event planning and management",
      icon: "EVENT"
    },
    {
      name: "Project Management Tools",
      description: "Team collaboration and project tracking",
      icon: "PM"
    },
    {
      name: "Analytics Dashboards",
      description: "Business intelligence and reporting",
      icon: "ANALYTICS"
    },
    {
      name: "Mobile Applications",
      description: "iOS and Android app development",
      icon: "MOBILE"
    },
    {
      name: "API Development",
      description: "Custom API and integration services",
      icon: "API"
    }
  ];

  return (
    <main style={{ paddingTop: '72px', position: 'relative' }}>


      {/* AI Banner */}
      <div style={{
        backgroundColor: 'var(--blue-primary)',
        color: 'var(--white)',
        padding: '12px 0',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '500',
        position: 'relative',
        zIndex: 1
      }}>
        <Container>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span>Introducing Fraylon AI — Automations, AI Agents & Intelligent Workflows for your business.</span>
            <a href="#contact" style={{
              color: 'var(--white)',
              textDecoration: 'none',
              fontWeight: '600',
              borderBottom: '1px solid var(--white)'
            }}>
              Explore Now →
            </a>
          </div>
        </Container>
      </div>

      {/* Hero Section */}
      <div style={{
        position: 'relative',
        padding: '120px 0',
        background: 'var(--primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        zIndex: 1
      }}>
        {/* Laser Flow Background - Full Section */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          <LaserFlow
            horizontalBeamOffset={0.5}
            verticalBeamOffset={0.5}
            color="#8B45FF"
          />
        </div>

        {/* Content */}
        <Container>
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
          }}>
            <h1 style={{
              marginBottom: '20px',
              color: 'white',
              fontSize: '48px',
              fontWeight: '700'
            }}>Our Services</h1>
            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
              End-to-end creative services for a seamless brand experience
            </p>
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <Section style={{ position: 'relative', zIndex: 1 }}>
        <Container>
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>What we do</h2>
            <Grid cols={3} gap="xl">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={getServiceLink(service.title)}
                  onClick={handleServiceClick}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    display: 'block',
                    textDecoration: 'none',
                    color: 'inherit',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';

                    // Add small circular button overlay
                    const overlay = document.createElement('div');
                    (overlay as HTMLElement).style.cssText = `
                      position: absolute;
                      bottom: 120px;
                      right: 15px;
                      width: 40px;
                      height: 40px;
                      background-color: #8B45FF;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      box-shadow: 0 2px 8px rgba(139, 69, 255, 0.3);
                      opacity: 0;
                      transform: scale(0.8);
                      transition: all 0.3s ease;
                      z-index: 10;
                      pointer-events: auto;
                      cursor: pointer;
                    `;

                    // Add arrow icon
                    const arrow = document.createElement('div');
                    arrow.style.cssText = `
                      width: 0;
                      height: 0;
                      border-left: 10px solid white;
                      border-top: 7px solid transparent;
                      border-bottom: 7px solid transparent;
                      margin-left: 3px;
                    `;

                    overlay.appendChild(arrow);
                    overlay.className = 'hover-overlay';

                    // Add hover effects to the button
                    overlay.addEventListener('mouseenter', () => {
                      overlay.style.cursor = 'pointer';
                      overlay.style.transform = 'scale(1.1)';
                    });

                    overlay.addEventListener('mouseleave', () => {
                      overlay.style.cursor = 'pointer';
                      overlay.style.transform = 'scale(1)';
                    });

                    // Add click event to the button
                    overlay.addEventListener('click', (clickEvent) => {
                      clickEvent.preventDefault();
                      clickEvent.stopPropagation();
                      // Navigate to the service page
                      window.location.href = getServiceLink(service.title);
                    });

                    e.currentTarget.appendChild(overlay);

                    setTimeout(() => {
                      (overlay as HTMLElement).style.opacity = '1';
                      (overlay as HTMLElement).style.transform = 'scale(1)';
                    }, 10);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

                    // Remove circular button overlay
                    const overlay = e.currentTarget.querySelector('.hover-overlay');
                    if (overlay) {
                      (overlay as HTMLElement).style.opacity = '0';
                      (overlay as HTMLElement).style.transform = 'scale(0.8)';
                      setTimeout(() => {
                        if (overlay.parentNode) {
                          overlay.parentNode.removeChild(overlay);
                        }
                      }, 300);
                    }
                  }}>
                  {/* Service Image */}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#f8f9fa'
                  }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `
                            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #6b7280; font-size: 14px;">
                              <div style="font-size: 16px; font-weight: bold; color: #6366f1; margin-bottom: 8px;">IMAGE</div>
                              <div>Add your image here</div>
                              <div style="font-size: 12px; margin-top: 4px; text-align: center; padding: 0 10px;">${service.image}</div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>

                  {/* Service Content */}
                  <div style={{ padding: '15px' }}>
                    <h3 style={{
                      marginBottom: '8px',
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'var(--title)',
                      lineHeight: '1.3'
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: 'var(--body)',
                      lineHeight: '1.5',
                      marginBottom: '10px'
                    }}>
                      {service.description}
                    </p>

                    {/* Company Logo */}
                  </div>
                </Link>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Industries Section */}
      <Section background="gray" style={{ position: 'relative', zIndex: 1 }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ marginBottom: '20px' }}>Industries</h2>
            <p style={{ fontSize: '18px', color: 'var(--grey)', maxWidth: '600px', margin: '0 auto' }}>
              We serve businesses across various industries with tailored solutions and deep domain expertise.
            </p>
          </div>

          {/* Industries Grid */}
          <Grid cols={3} gap="xl">
            {industries.map((industry, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = '#6366f1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}>
                {/* Industry Image */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#f8f9fa'
                }}>
                  <img
                    src={industry.image}
                    alt={industry.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = `
                          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #6b7280; font-size: 14px;">
                            <div style="font-size: 16px; font-weight: bold; color: #6366f1; margin-bottom: 8px;">IMAGE</div>
                            <div>Add your image here</div>
                            <div style="font-size: 12px; margin-top: 4px; text-align: center; padding: 0 10px;">${industry.image}</div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Industry Content */}
                <div style={{ padding: '15px', textAlign: 'center' }}>
                  <h3 style={{
                    marginBottom: '15px',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'var(--title)',
                    lineHeight: '1.3'
                  }}>
                    {industry.name}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--body)',
                    lineHeight: '1.5',
                    margin: '0'
                  }}>
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </Grid>

          {/* Industry Stats */}
          <div style={{
            marginTop: '60px',
            padding: '40px',
            backgroundColor: 'white',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '20px', color: 'var(--title)' }}>Industry Impact</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              marginTop: '30px'
            }}>
              <div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#6366f1',
                  marginBottom: '8px'
                }}>
                  5+
                </div>
                <div style={{ fontSize: '14px', color: 'var(--body)' }}>Industries Served</div>
              </div>
              <div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#6366f1',
                  marginBottom: '8px'
                }}>
                  200+
                </div>
                <div style={{ fontSize: '14px', color: 'var(--body)' }}>Industry Projects</div>
              </div>
              <div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#6366f1',
                  marginBottom: '8px'
                }}>
                  95%
                </div>
                <div style={{ fontSize: '14px', color: 'var(--body)' }}>Client Satisfaction</div>
              </div>
              <div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#6366f1',
                  marginBottom: '8px'
                }}>
                  5+
                </div>
                <div style={{ fontSize: '14px', color: 'var(--body)' }}>Years Experience</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Solutions Section */}
      <Section background="gray" style={{ position: 'relative', zIndex: 1 }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{
              marginBottom: '20px',
              fontSize: '36px',
              fontWeight: '700',
              color: 'var(--title)',
              letterSpacing: '-0.5px'
            }}>Solutions</h2>
            <p style={{
              fontSize: '20px',
              color: 'var(--grey)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Custom solutions designed to meet specific business needs and drive digital transformation.
            </p>
          </div>

          {/* Solutions Grid */}
          <Grid cols={3} gap="2xl">
            {solutions.map((solution, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = '#6366f1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}>
                {/* Solution Image */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#f8f9fa'
                }}>
                  <img
                    src={getSolutionImage(solution.name)}
                    alt={solution.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = `
                          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #6b7280; font-size: 14px;">
                            <div style="font-size: 16px; font-weight: bold; color: #6366f1; margin-bottom: 8px;">IMAGE</div>
                            <div>Add your image here</div>
                            <div style="font-size: 12px; margin-top: 4px; text-align: center; padding: 0 10px;">/images/solutions/${solution.name.toLowerCase().replace(/\s+/g, '-')}.jpg</div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                {/* Content Section */}
                <div style={{ padding: '15px' }}>
                  <h3 style={{
                    marginBottom: '12px',
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#000000',
                    lineHeight: '1.3'
                  }}>
                    {solution.name}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#333333',
                    lineHeight: '1.5',
                    margin: '0 0 20px 0'
                  }}>
                    {solution.description}
                  </p>

                  {/* Footer */}
                </div>
              </div>
            ))}
          </Grid>

          {/* Solutions CTA */}
          <div style={{
            textAlign: 'center',
            marginTop: '80px',
            padding: '60px 40px',
            backgroundColor: 'var(--section-bg-off-white)',
            borderRadius: '20px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--title)',
              marginBottom: '16px'
            }}>
              Need a Custom Solution?
            </h3>
            <p style={{
              fontSize: '18px',
              color: 'var(--body)',
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}>
              We specialize in creating tailored solutions that address your unique business challenges and requirements.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Button
                variant="primary"
                size="large"
                onClick={() => {
                  window.location.href = '/contact-us';
                }}
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>


      {/* Blog Section */}
      <Section background="gray" style={{ position: 'relative', zIndex: 1 }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ marginBottom: '20px' }}>Latest Articles</h2>
            <p style={{ fontSize: '18px', color: 'var(--grey)', maxWidth: '600px', margin: '0 auto' }}>
              Stay updated with the latest insights and trends in technology and business.
            </p>
          </div>
          <Grid cols={3} gap="xl">
            {[
              {
                date: "Sep 6, 2025",
                title: "5 AI Tools You Should Know About This Week (June Edition)",
                category: "AI & Technology",
                destination: "/blog/ai-tools-june-2025"
              },
              {
                date: "Sep 6, 2025",
                title: "Unveiling Our Weekly AI Sync: A Closer Look at Project Management",
                category: "Project Management",
                destination: "/blog/ai-sync-project-management"
              },
              {
                date: "Sep 6, 2025",
                title: "Discover This Week's Insights in Technology and Innovation",
                category: "Innovation",
                destination: "/blog/technology-innovation-insights"
              }
            ].map((article, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                }}>
                {/* Article Image Placeholder */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#f8f9fa',
                  borderBottom: '1px solid #e5e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9ca3af',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: '2px dashed #d1d5db'
                }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#6366f1',
                    marginBottom: '8px'
                  }}>
                    IMAGE
                  </div>
                  <div style={{ fontSize: '12px', marginBottom: '8px' }}>Add your image here</div>
                  <div style={{
                    fontSize: '10px',
                    color: '#6b7280',
                    fontFamily: 'monospace'
                  }}>
                    /images/blog/{article.destination.split('/blog/')[1]}.jpg
                  </div>
                </div>

                {/* Article Content */}
                <div style={{ padding: '20px' }}>
                  <div style={{
                    fontSize: '12px',
                    color: '#6366f1',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {article.date}
                  </div>
                  <h4 style={{
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '1.4',
                    color: 'var(--title)',
                    fontWeight: '600'
                  }}>
                    {article.title}
                  </h4>

                  <div style={{
                    fontSize: '12px',
                    color: 'var(--grey)',
                    backgroundColor: '#f8f9fa',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    display: 'inline-block'
                  }}>
                    {article.category}
                  </div>
                </div>
              </div>
            ))}
          </Grid>
          <div style={{ textAlign: 'center', marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
            <Button variant="primary" size="medium">
              View All Articles
            </Button>
          </div>
        </Container>
      </Section>


      {/* Contact Section */}
      <Section background="white" style={{ position: 'relative', zIndex: 1 }}>
        <Container>
          <div style={{ textAlign: 'center', color: 'var(--title)' }}>
            <h2 style={{
              marginBottom: '20px',
              color: 'var(--title)',
              fontSize: '36px',
              fontWeight: '700',
              letterSpacing: '-0.5px'
            }}>Let's Discuss Your Project!</h2>
            <p style={{
              fontSize: '20px',
              marginBottom: '40px',
              color: 'var(--body)',
              opacity: 1,
              fontWeight: '400',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Get in touch today for a free consultation and discover how we can help elevate your digital presence.
            </p>
            <Flex gap="lg" justify="center" align="center">
              <button style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                padding: '0',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-out'
              }}
                onMouseEnter={(e) => {
                  // Apply Let's Talk button hover effect
                  const textDiv = e.currentTarget.querySelector('div:first-child');
                  const arrowDiv = e.currentTarget.querySelector('div:last-child');
                  if (textDiv) {
                    (textDiv as HTMLElement).style.borderColor = '#1f2937';
                    (textDiv as HTMLElement).style.backgroundColor = 'transparent';
                  }
                  if (arrowDiv) {
                    (arrowDiv as HTMLElement).style.borderColor = '#1f2937';
                    (arrowDiv as HTMLElement).style.backgroundColor = 'transparent';
                  }
                }}
                onMouseLeave={(e) => {
                  // Reset to original state
                  const textDiv = e.currentTarget.querySelector('div:first-child');
                  const arrowDiv = e.currentTarget.querySelector('div:last-child');
                  if (textDiv) {
                    (textDiv as HTMLElement).style.borderColor = '#a5a5f1';
                    (textDiv as HTMLElement).style.backgroundColor = '#c3c3f1';
                  }
                  if (arrowDiv) {
                    (arrowDiv as HTMLElement).style.borderColor = '#a5a5f1';
                    (arrowDiv as HTMLElement).style.backgroundColor = '#c3c3f1';
                  }
                }}>
                <div style={{
                  padding: '16px 24px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1f2937',
                  backgroundColor: '#c3c3f1',
                  border: '1px solid #a5a5f1',
                  borderRadius: '25px',
                  borderRight: 'none',
                  transition: 'all 0.3s ease'
                }}>
                  Book Consultation
                </div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#c3c3f1',
                  border: '1px solid #a5a5f1',
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  transition: 'all 0.3s ease'
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </button>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
                onClick={() => {
                  window.location.href = '/contact-us';
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#6366f1';
                  const arrow = e.currentTarget.querySelector('svg');
                  if (arrow) {
                    arrow.style.transform = 'translateX(4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--body)';
                  const arrow = e.currentTarget.querySelector('svg');
                  if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                  }
                }}>
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--body)',
                  transition: 'color 0.3s ease'
                }}>
                  Contact Us
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{
                  transition: 'transform 0.3s ease'
                }}>
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </Flex>
          </div>
        </Container>
      </Section>


    </main>
  );
};

export default Services;
