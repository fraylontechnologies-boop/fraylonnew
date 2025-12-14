import { useNavigate } from 'react-router-dom';
import DotGrid from './DotGrid';
import './AllProjects.css';

const AllProjects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Then navigate to project details
    navigate(`/projects/${projectId}`);
  };

  return (
    <div style={{
      padding: '180px 20px 100px',
      textAlign: 'center',
      minHeight: '100vh',
      background: 'radial-gradient(circle at 50% 50%, rgba(82, 39, 255, 0.03) 0%, rgba(255, 255, 255, 1) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* DotGrid Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <DotGrid
          dotSize={14}
          gap={25}
          baseColor="#5227FF"
          activeColor="#FF2752"
          proximity={200}
          shockRadius={350}
          shockStrength={10}
          resistance={400}
          returnDuration={1.0}
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#000' }}>All Projects</h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
          Explore our complete portfolio of web development, design, and digital solutions.
        </p>

        {/* Bootstrap-style project cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div
            className="card"
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={() => handleProjectClick('project-1')}
          >
            <img className="card-img-top" src="/E-Commerce Website/image.png" alt="E-commerce Platform" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0', color: '#000' }}>
                E-COMMERCE PLATFORM DESIGN
              </h5>
              <p className="card-text" style={{ fontSize: '14px', color: '#666', margin: '0' }}>
                Complete design of an e-commerce platform to improve user experience and increase conversion rates.
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={() => handleProjectClick('project-2')}
          >
            <img className="card-img-top" src="/BIM Services Project/image.png" alt="BIM Services" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0', color: '#000' }}>
                INNOVATIVE BIM SERVICES
              </h5>
              <p className="card-text" style={{ fontSize: '14px', color: '#666', margin: '0' }}>
                Revolutionizing the construction industry with cutting-edge, AI-powered BIM solutions.
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={() => handleProjectClick('project-3')}
          >
            <img className="card-img-top" src="/digital photo studio/image.png" alt="Photo Studio" />
            <div className="card-body">
              <h5 className="card-title" style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0', color: '#000' }}>
                SRI SAI DIGITAL PHOTO STUDIO
              </h5>
              <p className="card-text" style={{ fontSize: '14px', color: '#666', margin: '0' }}>
                Professional photography services capturing your precious moments with creativity and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
