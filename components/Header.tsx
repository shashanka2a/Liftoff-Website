"use client";
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <motion.a 
          href="/" 
          className="font-heading text-xl md:text-2xl tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Liftoff.design
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <a 
            href="#services" 
            className="text-gray-700 hover:text-gray-900 transition-colors relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6E48] to-[#8054FF] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="#work" 
            className="text-gray-700 hover:text-gray-900 transition-colors relative group"
          >
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6E48] to-[#8054FF] group-hover:w-full transition-all duration-300"></span>
          </a>
          <Button 
            variant="outline" 
            size="sm"
            className="hover:border-gray-400 transition-colors"
          >
            Book a Call
          </Button>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-[#FF6E48] to-[#8054FF] hover:shadow-md transition-shadow text-white border-0"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t px-4 py-6 space-y-4"
        >
          <a 
            href="#services" 
            className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
          >
            Services
          </a>
          <a 
            href="#work" 
            className="block text-gray-700 hover:text-gray-900 transition-colors py-2"
          >
            Work
          </a>
          <Button 
            variant="outline" 
            className="w-full"
          >
            Book a Call
          </Button>
          <Button 
            className="w-full bg-gradient-to-r from-[#FF6E48] to-[#8054FF] text-white"
          >
            Get Started
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
