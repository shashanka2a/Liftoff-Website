"use client";
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: 'single' | 'double' | 'triple';
  delay?: number;
}

export function BentoCard({ children, className = '', span = 'single', delay = 0 }: BentoCardProps) {
  const spanClasses = {
    single: 'col-span-1',
    double: 'col-span-1 md:col-span-2',
    triple: 'col-span-1 md:col-span-3',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`${spanClasses[span]} bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  );
}
