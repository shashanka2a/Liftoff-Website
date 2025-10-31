"use client";
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

interface PricingCardProps {
  type: 'white' | 'black';
  title?: string;
  subtitle?: string;
  price?: string;
  period?: string;
  features?: string[];
}

export function PricingCard({ type, title, subtitle, price, period, features }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <Card 
        className={`${type === 'black' ? 'bg-[#0E0E0E] text-white' : 'bg-white'} border-0 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-shadow h-full`}
      >
        <CardContent className="p-8 md:p-12">
          {type === 'white' ? (
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-3xl md:text-4xl">{title}</h3>
              <p className="text-lg md:text-xl text-gray-700">{subtitle}</p>
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-[#FF6E48] to-[#8054FF] hover:scale-105 hover:shadow-xl transition-all duration-300 text-white"
              >
                Get Started
              </Button>
            </div>
          ) : (
            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="flex items-baseline mb-4 md:mb-6">
                  <motion.span 
                    className="text-5xl md:text-6xl"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring' }}
                  >
                    {price}
                  </motion.span>
                  <span className="text-xl md:text-2xl text-gray-400">{period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 md:space-y-4">
                {features?.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Check className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-green-400 mt-0.5 md:mt-1" />
                    <span className="text-base md:text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <Button 
                size="lg"
                className="w-full bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transition-all"
              >
                Get Started
              </Button>

              <div className="flex gap-3 pt-4">
                <motion.div 
                  className="w-12 h-8 rounded bg-orange-500 flex items-center justify-center text-xs"
                  whileHover={{ scale: 1.1 }}
                >
                  VISA
                </motion.div>
                <motion.div 
                  className="w-12 h-8 rounded bg-red-500 flex items-center justify-center text-xs"
                  whileHover={{ scale: 1.1 }}
                >
                  MC
                </motion.div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
