import React from 'react';
import styles from '../styles/components.module.css';
import Container from './Container';
import ShinyText from './ShinyText';


export interface OriginalHeroProps {
  subtitle?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  bottomContent?: React.ReactNode;
  videoSrc?: string;
  showLaserFlow?: boolean;
}

const OriginalHero: React.FC<OriginalHeroProps> = ({
  subtitle,
  title,
  description,
  image,
  imageAlt = '',
  actions,
  bottomContent,
  videoSrc,

}) => {
  return (
    <section className={styles.heroSection} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Background Video */}
      {videoSrc && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 1, // Full opacity for the video container
          backgroundColor: '#000', // Fallback color while video loads
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Dark Overlay for white text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)', // Dark overlay
          }} />
        </div>
      )}

      <Container>
        <div className={styles.heroWrap}>
          {image && (
            <div className={styles.heroImg}>
              <img
                src={image}
                alt={imageAlt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          <div className={styles.heroContent}>
            <div className={styles.heroTop}>
              <div className={styles.heroHeading}>
                {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
                <h1 className={styles.heroTitle}>
                  <ShinyText text={title} speed={3} className="hero-title-shiny" />
                </h1>
                {description && <p className={styles.heroParagraph} style={{ color: '#ffffff', fontSize: '16px', lineHeight: '1.6' }}>{description}</p>}
                {actions}
              </div>
            </div>

            {bottomContent && (
              <div className={styles.heroBottom}>
                {bottomContent}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OriginalHero;