import React from 'react';
import styles from '../styles/layout.module.css';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  size = 'default'
}) => {
  const getContainerClass = () => {
    const baseClass = styles.container;
    const sizeClass = size !== 'default' ? styles[`container--${size}`] : '';
    return `${baseClass} ${sizeClass} ${className}`.trim();
  };

  return (
    <div className={getContainerClass()}>
      {children}
    </div>
  );
};

export default Container;