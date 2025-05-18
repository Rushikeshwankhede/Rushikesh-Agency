
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

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
      setCount3(Math.floor((12.5 / steps) * step));
      
      if (step >= steps) {
        setCount1(235);
        setCount2(95);
        setCount3(12.5);
        clearInterval(timer);
      }
    }, interval);
  };
  
  return (
    <div ref={heroRef} className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-agency-soft-bg to-agency-purple-light/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Elevate Your <span className="gradient-text">Digital Presence</span> With AI
            </h1>
            <p className="text-lg md:text-xl text-agency-grey mb-8 max-w-lg">
              Harness the power of data-driven strategies and cutting-edge AI technology to transform your business and outperform competitors.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#contact" className="btn-outline">
                Get Free Consultation
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-agency-purple">
                  {count1}%
                </h3>
                <p className="text-sm md:text-base text-agency-grey mt-1">Average Growth</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-agency-purple">
                  {count2}+
                </h3>
                <p className="text-sm md:text-base text-agency-grey mt-1">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-agency-purple">
                  ${count3}M
                </h3>
                <p className="text-sm md:text-base text-agency-grey mt-1">Revenue Generated</p>
              </div>
            </div>
          </div>
          
          <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Marketing team working together" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-xl z-20 animate-pulse-soft">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-agency-purple text-white flex items-center justify-center">
                    <span className="text-2xl font-bold">AI</span>
                  </div>
                  <div>
                    <p className="font-medium">AI-Powered</p>
                    <p className="text-sm text-agency-grey">Strategies</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-xl z-20 animate-pulse-soft">
                <div className="text-center">
                  <p className="text-2xl font-bold text-agency-purple">+385%</p>
                  <p className="text-sm text-agency-grey">ROI Average</p>
                </div>
              </div>
              <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-agency-purple/20 to-agency-teal/20 rounded-full blur-3xl -top-1/2 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
