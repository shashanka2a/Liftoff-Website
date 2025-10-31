"use client";
import { motion } from 'motion/react';
import { Sparkles, Zap, Star, Circle } from 'lucide-react';

export function FloatingElements() {
  const elements = [
    { Icon: Sparkles, x: '10%', y: '20%', duration: 8, delay: 0 },
    { Icon: Zap, x: '85%', y: '15%', duration: 10, delay: 1 },
    { Icon: Star, x: '15%', y: '70%', duration: 12, delay: 2 },
    { Icon: Circle, x: '90%', y: '65%', duration: 9, delay: 1.5 },
    { Icon: Sparkles, x: '75%', y: '35%', duration: 11, delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const Icon = element.Icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: element.x,
              top: element.y,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
          >
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
          </motion.div>
        );
      })}
    </div>
  );
}
