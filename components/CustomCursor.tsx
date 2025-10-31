"use client";
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
        setCursorVariant('hover');
      } else if (target.closest('.card-hover')) {
        setIsHovering(true);
        setCursorVariant('card');
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          background: 'linear-gradient(135deg, #FF6E48 0%, #8054FF 100%)',
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 28,
          mass: 0.3,
        }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #FF6E48, #8054FF, #FF4B9E, #3AC4FF)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: cursorVariant === 'hover' ? 1.5 : cursorVariant === 'card' ? 1.2 : 1,
          rotate: isHovering ? 90 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.5,
        }}
      />
      
      {/* Trailing glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-[9997] hidden md:block blur-xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #FF6E48 0%, #8054FF 50%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isHovering ? 1.3 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 25,
          mass: 0.8,
        }}
      />
    </>
  );
}
