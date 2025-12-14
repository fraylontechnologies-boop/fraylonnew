import React from 'react';
import styles from '../styles/layout.module.css';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'small' | 'large' | 'hero' | 'no-padding';
  small?: boolean;
  id?: string;
  background?: 'default' | 'white' | 'gray' | 'primary';
  style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  size = 'default',
  small = false,
  id,
  background = 'default',
  style
}) => {
  const getSectionClasses = () => {
    const classes = [styles.section];

    const effectiveSize = small ? 'small' : size;

    if (effectiveSize !== 'default') {
      classes.push(styles[`section--${effectiveSize}`]);
    }

    if (background !== 'default') {
      classes.push(styles[`section--bg-${background}`]);
    }

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  };

  // CRITICAL: Merge styles but ensure position can NEVER be sticky or fixed
  // Also prevent min-height: 100vh which causes sections to fill viewport and appear sticky
  const mergedStyle: React.CSSProperties = {
    ...style,
    position: (style?.position === 'sticky' || style?.position === 'fixed')
      ? 'relative'
      : (style?.position || 'relative'),
    // Prevent viewport-height constraints that cause sticky scrolling effect
    minHeight: style?.minHeight === '100vh' || style?.minHeight === '100%'
      ? 'auto'
      : style?.minHeight,
    height: style?.height === '100vh' || style?.height === '100%'
      ? 'auto'
      : style?.height,
  };

  return (
    <section className={getSectionClasses()} id={id} style={mergedStyle}>
      {children}
    </section>
  );
};

export default Section;