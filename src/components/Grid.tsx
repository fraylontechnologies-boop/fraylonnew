import React from 'react';
import styles from '../styles/layout.module.css';

export interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'responsive' | number;
  className?: string;
  autoFit?: boolean;
  autoFill?: boolean;
  minItemWidth?: string;
  style?: React.CSSProperties;
}

const Grid: React.FC<GridProps> = ({
  children,
  cols = 2,
  gap = 'md',
  className = '',
  autoFit = false,
  autoFill = false,
  minItemWidth = '250px',
  style = {}
}) => {
  const getGridClasses = () => {
    const classes = [styles.grid];

    // Column classes
    if (autoFit) {
      classes.push(styles['grid--auto-fit']);
    } else if (autoFill) {
      classes.push(styles['grid--auto-fill']);
    } else {
      classes.push(styles[`grid--cols-${cols}`]);
    }

    // Gap classes - only if string
    if (typeof gap === 'string') {
      if (gap !== 'responsive') {
        classes.push(styles[`grid--gap-${gap}`]);
      } else {
        classes.push(styles['grid--gap-responsive']);
      }
    }

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  };

  const gridStyle: React.CSSProperties = {
    ...style,
    ...(autoFit || autoFill ? {
      gridTemplateColumns: autoFit
        ? `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`
        : `repeat(auto-fill, minmax(${minItemWidth}, 1fr))`
    } : {}),
    ...(typeof gap === 'number' ? { gap: `${gap}px` } : {})
  };

  return (
    <div className={getGridClasses()} style={gridStyle}>
      {children}
    </div>
  );
};

export default Grid;