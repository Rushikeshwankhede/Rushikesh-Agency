
import React, { Suspense, lazy } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import { Toaster } from "@/components/ui/toaster";
import { motion } from 'framer-motion';

// Lazy load components for better performance
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading fallback component
const SectionLoading = () => (
  <div className="w-full py-20 flex justify-center items-center">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {/* Toast provider for notifications */}
      <Toaster />
      
      <NavBar />
      <Hero />
      
      <Suspense fallback={<SectionLoading />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <Footer />
      </Suspense>
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </motion.div>
  );
};

// Scroll to top button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-agency-purple text-white shadow-lg z-40 ${!isVisible ? 'hidden' : ''}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{ duration: 0.3 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </motion.button>
  );
};

export default Index;
