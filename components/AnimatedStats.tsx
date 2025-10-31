"use client";
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

function StatItem({ value, label, suffix = '', prefix = '', delay = 0 }: StatItemProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, value, delay, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-4 bg-gradient-to-r from-[#FF6E48] via-[#8054FF] to-[#FF4B9E] bg-clip-text text-transparent">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <p className="text-base md:text-lg text-gray-700">{label}</p>
    </motion.div>
  );
}

export function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      <StatItem value={100} suffix="+" label="Projects Launched" delay={0} />
      <StatItem value={50} suffix="+" label="Happy Clients" delay={0.1} />
      <StatItem value={99} suffix="%" label="On-Time Delivery" delay={0.2} />
      <StatItem value={48} label="Hour Turnaround" delay={0.3} />
    </div>
  );
}
