"use client";
import { motion, useScroll } from 'motion/react';

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6E48] via-[#8054FF] to-[#3AC4FF] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
