import { useScrollAnimation } from '../hooks/useAnimations';

import styles from '../styles/blog.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

export interface WorkCardProps {
  title: string;
  category?: string;
  image?: string;
  href: string;
  onClick?: () => void;
}

const WorkCard = ({
  title,
  category,
  image,
  href,
  onClick
}: WorkCardProps) => {
  const animationRef = useScrollAnimation('scaleIn', { duration: 800 });

  // Check if the href is an external link or internal route
  const isExternal = href.startsWith('http') || href.startsWith('www');

  if (isExternal) {
    return (
      <a
        ref={animationRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={`${styles.workCard}`}
        onClick={onClick}
      >
        <div className={styles.workThumb}>
          {image && <img src={image} alt={title} className={styles.coverImage} />}
        </div>
        <div className={styles.workContent}>
          <h3 className={styles.blogTitle}>{title}</h3>
          <div className={styles.workRight}>
            {category && <span>{category}</span>}
          </div>
        </div>
      </a>
    );
  }

  // For internal routes, use React Router Link
  return (
    <Link
      ref={animationRef as React.RefObject<HTMLAnchorElement>}
      to={href}
      className={`${styles.workCard}`}
      onClick={onClick}
    >
      <div className={styles.workThumb}>
        {image && <img src={image} alt={title} className={styles.coverImage} />}
      </div>
      <div className={styles.workContent}>
        <h3 className={styles.blogTitle}>{title}</h3>
        <div className={styles.workRight}>
          {category && <span>{category}</span>}
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;