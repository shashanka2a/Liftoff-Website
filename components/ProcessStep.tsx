"use client";
import { motion } from 'motion/react';
import { Search, Sparkles, Rocket } from 'lucide-react';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  iconType: 'discover' | 'design' | 'deliver';
  index: number;
  isLast?: boolean;
}

const iconMap = {
  discover: Search,
  design: Sparkles,
  deliver: Rocket,
};

export function ProcessStep({ step, title, description, iconType, index, isLast = false }: ProcessStepProps) {
  const Icon = iconMap[iconType];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative"
    >
      <div className="flex gap-6 md:gap-8">
        {/* Left side - Icon column */}
        <div className="flex flex-col items-center flex-shrink-0">
          {/* Icon container */}
          <motion.div
            className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#FF6E48] via-[#8054FF] to-[#FF4B9E] flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
          </motion.div>
          
          {/* Connecting line - only show if not last item */}
          {!isLast && (
            <div className="flex-1 w-0.5 mt-4 bg-gradient-to-b from-[#8054FF] to-[#FF4B9E] min-h-[80px] opacity-30" />
          )}
        </div>
        
        {/* Right side - Content */}
        <div className="flex-1 pb-12 md:pb-16">
          <motion.div
            className="bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all group"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step number */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4">
              <span className="font-heading text-sm text-gray-400">{step}</span>
            </div>
            
            {/* Title */}
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 text-gray-900">
              {title}
            </h3>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
            
            {/* Decorative gradient line */}
            <motion.div
              className="h-1 bg-gradient-to-r from-[#FF6E48] via-[#8054FF] to-[#FF4B9E] rounded-full mt-6 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
