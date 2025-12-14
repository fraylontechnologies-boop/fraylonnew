import React from 'react';
import styles from '../styles/layout.module.css';

export interface FlexProps {
  children: React.ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: boolean;
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  alignContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'responsive';
  grow?: boolean;
  shrink?: boolean;
  className?: string;
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  wrap = false,
  justify = 'start',
  align = 'start',
  alignContent,
  gap = 'md',
  grow = false,
  shrink = true,
  className = ''
}) => {
  const getFlexClasses = () => {
    const classes = [styles.flex];
    
    // Direction classes
    classes.push(styles[`flex--${direction.replace('-', '-')}`]);
    
    // Wrap classes
    if (wrap) {
      classes.push(styles['flex--wrap']);
    } else {
      classes.push(styles['flex--nowrap']);
    }
    
    // Justify content classes
    classes.push(styles[`justify--${justify}`]);
    
    // Align items classes
    classes.push(styles[`align--${align}`]);
    
    // Align content classes
    if (alignContent) {
      classes.push(styles[`align-content--${alignContent}`]);
    }
    
    // Gap classes
    if (gap !== 'responsive') {
      classes.push(styles[`gap-${gap}`]);
    } else {
      classes.push(styles['gap-responsive']);
    }
    
    // Grow/Shrink classes
    if (grow) {
      classes.push(styles['flex--grow']);
    }
    if (!shrink) {
      classes.push(styles['flex--no-shrink']);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <div className={getFlexClasses()}>
      {children}
    </div>
  );
};

export default Flex;