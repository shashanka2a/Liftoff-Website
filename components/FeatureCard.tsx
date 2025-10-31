"use client";
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  type: 'black' | 'gradient' | 'mockup';
}

export function FeatureCard({ number, title, description, type }: FeatureCardProps) {
  const getBackground = () => {
    switch (type) {
      case 'black':
        return 'bg-[#0E0E0E]';
      case 'gradient':
        return '';
      case 'mockup':
        return 'bg-gradient-to-br from-orange-400 to-red-500';
    }
  };

  const getStyle = () => {
    if (type === 'gradient') {
      return {
        background: 'linear-gradient(135deg, #FF6E48 0%, #8054FF 50%, #3AC4FF 100%)'
      };
    }
    return {};
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Card 
        className={`${getBackground()} border-0 rounded-2xl md:rounded-3xl overflow-hidden h-[350px] md:h-[400px] shadow-lg hover:shadow-2xl transition-shadow`}
        style={getStyle()}
      >
        <CardContent className="p-6 md:p-8 h-full flex flex-col justify-between">
          <div>
            <motion.div 
              className={`text-5xl md:text-6xl mb-3 md:mb-4 ${type === 'black' ? 'text-white' : 'text-white'}`}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              {number}
            </motion.div>
            <h3 className={`text-2xl md:text-3xl mb-2 md:mb-3 ${type === 'black' ? 'text-white' : 'text-white'}`}>
              {title}
            </h3>
            <p className={`text-base md:text-lg ${type === 'black' ? 'text-gray-300' : 'text-white/90'}`}>
              {description}
            </p>
          </div>

          {type === 'gradient' && (
            <div className="grid grid-cols-2 gap-3 mt-6">
              {['Task 1', 'Task 2', 'Task 3', 'Task 4'].map((task, i) => (
                <motion.div
                  key={task}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/20 backdrop-blur rounded-xl p-3 text-white text-sm"
                >
                  {task}
                </motion.div>
              ))}
            </div>
          )}

          {type === 'mockup' && (
            <div className="relative mt-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-white">
                <div className="flex gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/40 rounded w-3/4" />
                  <div className="h-2 bg-white/40 rounded w-1/2" />
                </div>
              </div>
            </div>
          )}

          {type === 'black' && (
            <motion.div 
              className="text-white/60 text-sm mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              $4,995/month flat rate
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
