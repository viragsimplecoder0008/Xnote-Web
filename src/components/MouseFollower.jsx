import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 bg-indigo-500 rounded-full mix-blend-screen pointer-events-none z-50 blur-xl opacity-50"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
            }}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 200,
                mass: 0.5,
            }}
        />
    );
};

export default MouseFollower;
