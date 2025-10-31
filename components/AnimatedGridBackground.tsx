"use client";
import { motion } from 'motion/react';

export function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="url(#gridGradient)"
              strokeWidth="0.5"
              animate={{
                strokeDashoffset: [0, 100],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              strokeDasharray="10 10"
            />
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6E48" />
            <stop offset="50%" stopColor="#8054FF" />
            <stop offset="100%" stopColor="#3AC4FF" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
