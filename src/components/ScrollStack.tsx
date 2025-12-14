import React from 'react';
import styles from '../styles/components.module.css';

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`${styles.scrollStackItem} ${className}`}>
      {children}
    </div>
  );
};

const ScrollStack: React.FC<ScrollStackProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`${styles.scrollStack} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollStack;