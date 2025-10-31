"use client";
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function ScrollPrompt() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
    >
      <motion.button
        onClick={handleScroll}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.1 }}
        className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <span className="text-sm">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}
