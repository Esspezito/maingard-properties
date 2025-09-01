"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Home, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className={cn(
              "font-bold text-2xl transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              Maingard Properties
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={cn(
                "flex items-center space-x-1 hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              <Home className="h-4 w-4" />
              <span>Listings</span>
            </Link>
            <Link 
              href="/about" 
              className={cn(
                "flex items-center space-x-1 hover:text-primary transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              <User className="h-4 w-4" />
              <span>About</span>
            </Link>
            <ThemeToggle />
            <Button 
              variant={isScrolled ? "default" : "secondary"}
              size="sm"
              asChild
            >
              <a href="tel:+27824977888" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +27 82 497 7888
              </a>
            </Button>
          </div>

          {/* Mobile: Theme Toggle and Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className={cn(
                "transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>Listings</span>
              </Link>
              <Link 
                href="/about" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-4 w-4" />
                <span>About</span>
              </Link>
              <Button 
                variant="default" 
                size="sm" 
                className="w-full"
                asChild
              >
                <a href="tel:+27824977888" className="flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +27 82 497 7888
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}