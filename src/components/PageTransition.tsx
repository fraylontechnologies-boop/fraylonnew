import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
    className?: string;
}

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.61, 1, 0.88, 1] as const,
        },
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.3,
            ease: [0.61, 1, 0.88, 1] as const,
        },
    },
};

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            className={className}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
