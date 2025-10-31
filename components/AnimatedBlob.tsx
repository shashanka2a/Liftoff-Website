"use client";
import { motion } from 'motion/react';

interface AnimatedBlobProps {
  color: string;
  size?: number;
  duration?: number;
  delay?: number;
}

export function AnimatedBlob({ color, size = 400, duration = 20, delay = 0 }: AnimatedBlobProps) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-20"
      style={{
        width: size,
        height: size,
        background: color,
      }}
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0],
        scale: [1, 1.2, 0.8, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
