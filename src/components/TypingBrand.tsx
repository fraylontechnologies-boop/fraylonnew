import React, { useState, useEffect } from 'react';

interface TypingBrandProps {
  className?: string;
  style?: React.CSSProperties;
  onAnimationComplete?: () => void;
}

export const TypingBrand: React.FC<TypingBrandProps> = ({
  className,
  style,
  onAnimationComplete
}) => {
  const [displayText, setDisplayText] = useState('FraylonTechnologies');

  const staticPart = 'Fraylon';
  const typingPart = 'Technologies';

  useEffect(() => {
    // Simple timeout-based animation - run only once
    const startAnimation = () => {
      setDisplayText('Fraylon'); // Start with static part

      // Type out Technologies letter by letter
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < typingPart.length) {
          setDisplayText(staticPart + typingPart.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          onAnimationComplete?.();
          // Animation completes and stays as "FraylonTechnologies"
        }
      }, 150);
    };

    // Start animation after 1 second
    const initialTimeout = setTimeout(startAnimation, 1000);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, [onAnimationComplete]);

  return (
    <div
      className={`${className} typing-brand-container`}
      style={{
        fontSize: '24px',
        fontWeight: '700',
        color: 'var(--black)',
        fontFamily: "'Playfair Display', serif",
        letterSpacing: '0.5px',
        position: 'relative',
        width: 'auto',
        height: '60px', // Increased vertical height
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '0px', // Reset margin
        paddingLeft: '0px', // Remove previous padding
        overflow: 'hidden',
        backgroundColor: 'transparent',
        cursor: 'default',
        transition: 'none',
        transform: 'none',
        pointerEvents: 'auto',
        ...style
      }}
    >
      {displayText || 'FraylonTechnologies'} {/* Fallback text */}
      <style>{`
        .typing-cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        /* Prevent any hover effects */
        .typing-brand-container:hover {
          transform: none !important;
          color: var(--black) !important;
          scale: 1 !important;
          zoom: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default TypingBrand;
