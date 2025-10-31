"use client";
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group card-hover"
    >
      <Card className="border-0 bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all h-full relative overflow-hidden">
        {/* Gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl md:rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #FF6E48, #8054FF)',
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        
        <CardContent className="p-6 md:p-8 relative z-10">
          <motion.div
            className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-r from-[#FF6E48] to-[#8054FF] flex items-center justify-center mb-4 md:mb-6 relative"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF6E48] to-[#8054FF] blur-lg opacity-50"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white relative z-10" />
          </motion.div>
          
          <motion.h3 
            className="text-2xl md:text-3xl mb-3 md:mb-4 text-gray-900"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-base md:text-lg text-gray-700 leading-relaxed"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            {description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
