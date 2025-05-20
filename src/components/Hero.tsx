
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.3 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const interval = 20;
    const steps = duration / interval;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      
      setCount1(Math.floor((235 / steps) * step));
      setCount2(Math.floor((95 / steps) * step));
      setCount3(parseFloat(((12.5 / steps) * step).toFixed(1)));
      
      if (step >= steps) {
        setCount1(235);
        setCount2(95);
        setCount3(12.5);
        clearInterval(timer);
      }
    }, interval);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <div ref={heroRef} className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-agency-soft-bg to-agency-purple-light/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-10 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Elevate Your <span className="gradient-text">Digital Presence</span> With AI
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-agency-grey mb-8 max-w-lg"
              variants={itemVariants}
            >
              Harness the power of data-driven strategies and cutting-edge AI technology to transform your business and outperform competitors.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.a 
                href="#services" 
                className="btn-primary flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-4 md:gap-8"
              variants={statsVariants}
            >
              <motion.div className="text-center" variants={statItemVariants}>
                <motion.h3 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-agency-purple"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  {count1}%
                </motion.h3>
                <p className="text-sm md:text-base text-agency-grey mt-1">Average Growth</p>
              </motion.div>
              
              <motion.div className="text-center" variants={statItemVariants}>
                <motion.h3 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-agency-purple"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                >
                  {count2}+
                </motion.h3>
                <p className="text-sm md:text-base text-agency-grey mt-1">Happy Clients</p>
              </motion.div>
              
              <motion.div className="text-center" variants={statItemVariants}>
                <motion.h3 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-agency-purple"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  ${count3}M
                </motion.h3>
                <p className="text-sm md:text-base text-agency-grey mt-1">Revenue Generated</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <motion.div 
                className="relative z-10 rounded-lg shadow-2xl overflow-hidden"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Marketing team working together" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-xl z-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-agency-purple text-white flex items-center justify-center">
                    <span className="text-2xl font-bold">AI</span>
                  </div>
                  <div>
                    <p className="font-medium">AI-Powered</p>
                    <p className="text-sm text-agency-grey">Strategies</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-xl z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-agency-purple">+385%</p>
                  <p className="text-sm text-agency-grey">ROI Average</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -z-10 w-full h-full bg-gradient-to-r from-agency-purple/20 to-agency-teal/20 rounded-full blur-3xl -top-1/2 left-1/2 transform -translate-x-1/2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
