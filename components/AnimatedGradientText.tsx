"use client";
import { motion } from 'motion/react';

interface AnimatedGradientTextProps {
  children: string;
  className?: string;
}

export function AnimatedGradientText({ children, className = '' }: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-[#FF6E48] via-[#8054FF] to-[#FF4B9E] bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundSize: '200% auto',
      }}
    >
      {children}
    </motion.span>
  );
}
