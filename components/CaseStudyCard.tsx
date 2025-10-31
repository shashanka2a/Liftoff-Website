"use client";
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  image: string;
  logo?: string;
  title: string;
  description: string;
  delay?: number;
}

export function CaseStudyCard({ image, logo, title, description, delay = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group card-hover"
    >
      <Card className="border-0 bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden">
        <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <ImageWithFallback 
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Floating gradient orb */}
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#FF6E48]/30 to-[#8054FF]/30 rounded-full blur-2xl"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        
        <div className="p-6 md:p-8 relative">
          {logo && (
            <motion.div 
              className="mb-4"
              initial={{ y: 0 }}
              whileHover={{ y: -2 }}
            >
              <span className="text-2xl">{logo}</span>
            </motion.div>
          )}
          
          <motion.h3 
            className="text-2xl md:text-3xl mb-3 text-gray-900"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            {description}
          </motion.p>
          
          <motion.button
            className="inline-flex items-center text-base md:text-lg group/btn relative"
            whileHover={{ x: 4 }}
          >
            <span className="bg-gradient-to-r from-[#FF6E48] to-[#8054FF] bg-clip-text text-transparent">
              View Case
            </span>
            <motion.span
              className="ml-2"
              whileHover={{ x: 4 }}
            >
              <ArrowRight className="w-5 h-5 text-[#FF6E48]" />
            </motion.span>
          </motion.button>
        </div>
      </Card>
    </motion.div>
  );
}
