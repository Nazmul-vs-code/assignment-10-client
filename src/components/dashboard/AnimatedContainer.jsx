// components/dashboard/AnimatedContainer.jsx

'use client';

import { motion } from 'framer-motion';

const AnimatedContainer = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-lg"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedContainer;