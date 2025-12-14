import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import type { TestimonialCardProps } from './TestimonialCard';
import styles from '../styles/testimonialsMarquee.module.css';

interface TestimonialsMarqueeProps {
  title?: string;
  description?: string;
  testimonials: TestimonialCardProps[];
  className?: string;
}

export const TestimonialsMarquee: React.FC<TestimonialsMarqueeProps> = ({
  title = "Trusted by developers worldwide",
  description = "Join thousands of developers who are already building the future with our AI platform",
  testimonials,
  className
}) => {
  const extraClass = className ? (styles[className] ?? className) : '';
  return (
    <section className={`${styles.testimonialsSection} ${extraClass}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {[...Array(2)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  {testimonials.map((testimonial, i) => (
                    <TestimonialCard
                      key={`${setIndex}-${i}`}
                      {...testimonial}
                    />
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className={styles.gradientLeft} />
          <div className={styles.gradientRight} />
        </div>
      </div>
    </section>
  );
};
