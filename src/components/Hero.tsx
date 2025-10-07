"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  agentName: string;
  agentTitle: string;
  agentCompany: string;
  agentPhone: string;
  agentEmail: string;
  agentInstagram?: string;
}

export default function Hero({ agentName, agentTitle, agentCompany, agentPhone, agentEmail, agentInstagram }: HeroProps) {
  const scrollToListings = () => {
    document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&h=1080&fit=crop&q=80"
          alt="Cape Town City Bowl and Table Mountain"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Agent Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.1, duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              <Image
                src="/michael.png"
                alt="Michael Maingard - Real Estate Professional"
                fill
                className="object-contain rounded-full border-4 border-white/20 shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-7xl font-bold font-poppins text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3
              }}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 25px rgba(255,255,255,0.3)",
                transition: { duration: 0.3 }
              }}
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              {agentName}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-raleway font-light text-white/90 mb-2 tracking-wide"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.8, 
                type: "spring",
                stiffness: 60
              }}
              whileHover={{ letterSpacing: '0.05em' }}
            >
              {agentTitle}
            </motion.p>
            <motion.p 
              className="text-lg font-montserrat text-white/80 tracking-wide"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.9, 
                type: "spring",
                stiffness: 60
              }}
            >
              {agentCompany}
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Discover exclusive properties on Cape Town's prestigious Atlantic Seaboard.
            Your gateway to luxury coastal living with personalized service and unmatched expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-lg font-poppins font-semibold tracking-wide transition-all duration-300 hover:scale-105"
              onClick={scrollToListings}
            >
              View All Listings
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary bg-black/40 backdrop-blur-sm text-white hover:bg-secondary hover:text-primary font-poppins font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href={`tel:${agentPhone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary bg-black/40 backdrop-blur-sm text-white hover:bg-secondary hover:text-primary font-poppins font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href={`mailto:${agentEmail}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
              {agentInstagram && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary bg-black/40 backdrop-blur-sm text-white hover:bg-secondary hover:text-primary font-poppins font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <a href={`https://instagram.com/${agentInstagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-white animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}