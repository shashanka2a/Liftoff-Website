"use client";
import { motion } from 'motion/react';

export function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ y: -8, rotateY: 5 }}
      className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all card-hover perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#0A0A0A]">
        {/* App mockup SVG */}
        <svg className="w-full h-full p-8" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Browser window */}
          <g filter="url(#shadow)">
            {/* Window frame */}
            <rect x="40" y="60" width="720" height="480" rx="12" fill="url(#windowGradient)" />
            
            {/* Browser chrome */}
            <rect x="40" y="60" width="720" height="40" rx="12" fill="#2a2a2a" />
            <rect x="40" y="100" width="720" height="440" fill="#ffffff" />
            
            {/* Traffic lights */}
            <circle cx="65" cy="80" r="6" fill="#FF5F57" />
            <circle cx="85" cy="80" r="6" fill="#FFBD2E" />
            <circle cx="105" cy="80" r="6" fill="#28CA42" />
            
            {/* URL bar */}
            <rect x="140" y="70" width="600" height="20" rx="10" fill="#1a1a1a" />
            
            {/* Navigation bar */}
            <rect x="60" y="120" width="100" height="8" rx="4" fill="url(#gradient1)" opacity="0.6" />
            <rect x="180" y="120" width="80" height="8" rx="4" fill="#e5e5e5" />
            <rect x="280" y="120" width="80" height="8" rx="4" fill="#e5e5e5" />
            <rect x="380" y="120" width="80" height="8" rx="4" fill="#e5e5e5" />
            
            {/* Hero section */}
            <g>
              {/* Headline bars */}
              <rect x="80" y="180" width="360" height="24" rx="4" fill="url(#gradient1)" opacity="0.9" />
              <rect x="80" y="220" width="280" height="20" rx="4" fill="url(#gradient2)" opacity="0.7" />
              <rect x="80" y="252" width="220" height="12" rx="4" fill="#d1d5db" />
              <rect x="80" y="272" width="180" height="12" rx="4" fill="#d1d5db" />
              
              {/* CTA buttons */}
              <rect x="80" y="310" width="120" height="36" rx="8" fill="url(#gradient1)" />
              <motion.rect 
                x="220" 
                y="310" 
                width="120" 
                height="36" 
                rx="8" 
                fill="none" 
                stroke="url(#gradient2)" 
                strokeWidth="2"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </g>
            
            {/* Image placeholder with gradient */}
            <g>
              <rect x="500" y="160" width="240" height="160" rx="12" fill="url(#imageGradient)" />
              <motion.circle
                cx="620"
                cy="240"
                r="40"
                fill="url(#gradient3)"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </g>
            
            {/* Feature cards */}
            <g>
              <rect x="80" y="380" width="160" height="120" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="100" y="400" width="40" height="40" rx="8" fill="url(#gradient1)" opacity="0.2" />
              <rect x="100" y="455" width="100" height="8" rx="4" fill="#d1d5db" />
              <rect x="100" y="470" width="80" height="6" rx="3" fill="#e5e7eb" />
              
              <rect x="260" y="380" width="160" height="120" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="280" y="400" width="40" height="40" rx="8" fill="url(#gradient2)" opacity="0.2" />
              <rect x="280" y="455" width="100" height="8" rx="4" fill="#d1d5db" />
              <rect x="280" y="470" width="80" height="6" rx="3" fill="#e5e7eb" />
              
              <rect x="440" y="380" width="160" height="120" rx="8" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="460" y="400" width="40" height="40" rx="8" fill="url(#gradient3)" opacity="0.2" />
              <rect x="460" y="455" width="100" height="8" rx="4" fill="#d1d5db" />
              <rect x="460" y="470" width="80" height="6" rx="3" fill="#e5e7eb" />
            </g>
          </g>
          
          {/* Floating elements for depth */}
          <motion.circle
            cx="100"
            cy="140"
            r="4"
            fill="url(#gradient1)"
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="720"
            cy="520"
            r="6"
            fill="url(#gradient2)"
            initial={{ y: 0 }}
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6E48" />
              <stop offset="100%" stopColor="#8054FF" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8054FF" />
              <stop offset="100%" stopColor="#FF4B9E" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4B9E" />
              <stop offset="100%" stopColor="#3AC4FF" />
            </linearGradient>
            <linearGradient id="windowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f9fafb" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <linearGradient id="imageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6E48" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#8054FF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3AC4FF" stopOpacity="0.1" />
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="0" dy="10" stdDeviation="30" floodOpacity="0.2" />
            </filter>
          </defs>
        </svg>
        
        {/* Subtle animated glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#FF6E48]/10 via-transparent to-[#8054FF]/10"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
