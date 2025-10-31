"use client";
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PortfolioCarousel() {
  const portfolioItems = [
    { 
      image: 'https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE4NzY2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'UI Design',
      overlay: 'from-purple-600/80 to-purple-900/80'
    },
    { 
      image: 'https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc2MTc5NjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Brand Identity',
      overlay: 'from-blue-600/80 to-blue-900/80'
    },
    { 
      image: 'https://images.unsplash.com/photo-1630522790545-67ad2cb700fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2MTg3NDUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Website Design',
      overlay: 'from-orange-600/80 to-orange-900/80'
    },
    { 
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxODYyMzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Mobile Apps',
      overlay: 'from-green-600/80 to-green-900/80'
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <motion.div 
        className="flex gap-4 md:gap-6"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...portfolioItems, ...portfolioItems, ...portfolioItems].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <Card 
              className="w-72 md:w-80 h-80 md:h-96 border-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow relative group"
            >
              <ImageWithFallback 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.overlay} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                <h3 className="text-white text-2xl md:text-3xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
