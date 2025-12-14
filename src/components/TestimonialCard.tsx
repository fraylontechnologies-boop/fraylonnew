import React from 'react';
import styles from '../styles/testimonial.module.css';

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
  role?: string;
  company?: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
  rating?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  text,
  href,
  className,
  rating = 5
}) => {
  const CardTag = href ? 'a' : 'div';

  return (
    <CardTag
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${styles.testimonialCard} ${className || ''}`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>
          <img src={author.avatar} alt={author.name} width="48" height="48" loading="lazy" />
        </div>
        <div className={styles.authorInfo}>
          <h3 className={styles.authorName}>{author.name}</h3>
          {author.role && author.company ? (
            <p className={styles.authorMeta}>{author.role}, {author.company}</p>
          ) : (
            <p className={styles.authorMeta}>{author.handle}</p>
          )}
        </div>
      </div>

      {rating && (
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={i < rating ? styles.starFilled : styles.starEmpty}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      )}

      <p className={styles.testimonialText}>{text}</p>
    </CardTag>
  );
};
