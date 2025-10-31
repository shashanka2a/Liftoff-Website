"use client";
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <Card className="border-0 bg-[#FAF9F7] rounded-2xl md:rounded-3xl h-full shadow-md hover:shadow-xl transition-shadow">
        <CardContent className="p-6 md:p-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Quote className="w-10 h-10 md:w-12 md:h-12 text-gray-300 mb-4 md:mb-6" />
          </motion.div>
          <p className="accent-text text-xl md:text-2xl mb-6 md:mb-8 leading-relaxed text-gray-800">
            "{quote}"
          </p>
          <div>
            <p className="mb-1 text-gray-900">{author}</p>
            <p className="text-gray-600">{role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
