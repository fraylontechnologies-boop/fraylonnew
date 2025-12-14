import React from 'react';
import styles from '../styles/clientLogos.module.css';

interface ClientLogo {
  name: string;
  logo: string;
}

interface ClientLogosProps {
  logos: ClientLogo[];
  speed?: number;
}

const ClientLogos: React.FC<ClientLogosProps> = ({ logos, speed = 20 }) => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={styles.clientLogosContainer}>
      <div className={styles.logosWrapper}>
        <div
          className={styles.logosTrack}
          style={{
            animationDuration: `${speed}s`
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img src={logo.logo} alt={logo.name} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;