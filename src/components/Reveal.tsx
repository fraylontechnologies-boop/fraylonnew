import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, type Variant } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    variant?: 'fade' | 'slide' | 'scale' | 'zoom';
    className?: string;
    once?: boolean;
    threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({
    children,
    width = 'fit-content',
    delay = 0,
    duration = 0.5,
    direction = 'up',
    variant = 'slide',
    className = '',
    once = true,
    threshold = 0.2
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: threshold });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        } else if (!once) {
            mainControls.start('hidden');
        }
    }, [isInView, mainControls, once]);

    const getVariants = () => {
        const variants: { hidden: Variant; visible: Variant } = {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        };

        // Directional offsets
        let x = 0;
        let y = 0;

        if (variant === 'slide') {
            if (direction === 'up') y = 75;
            if (direction === 'down') y = -75;
            if (direction === 'left') x = 75;
            if (direction === 'right') x = -75;
        }

        variants.hidden = {
            opacity: 0,
            x,
            y,
            scale: variant === 'scale' ? 0.8 : (variant === 'zoom' ? 0.5 : 1),
        };

        variants.visible = {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.25, 0.25, 0.75], // easeOut
            }
        };

        return variants;
    };

    return (
        <motion.div
            ref={ref}
            variants={getVariants()}
            initial="hidden"
            animate={mainControls}
            className={className}
            style={{ width, position: 'relative' }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
