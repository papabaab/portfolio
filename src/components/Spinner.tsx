import React from 'react';
import { motion } from 'framer-motion';

interface SpinnerProps {
  isDark: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ isDark }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="relative h-[20vh] aspect-square">
        {/* Spinning circle */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-[#1699E5] rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Logo */}
        <img 
          src={isDark ? "/assets/je-noir-blanc.png" : "/assets/je-blanc-noir.png"}
          alt="Loading..."
          className="absolute inset-0 w-[80%] h-[80%] m-auto object-contain"
        />
      </div>
    </div>
  );
};