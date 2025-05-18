
import React, { useEffect, useRef, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const growthData = [
  { month: 'Jan', withUs: 10, industry: 5 },
  { month: 'Feb', withUs: 25, industry: 8 },
  { month: 'Mar', withUs: 40, industry: 12 },
  { month: 'Apr', withUs: 65, industry: 15 },
  { month: 'May', withUs: 95, industry: 20 },
  { month: 'Jun', withUs: 135, industry: 25 },
  { month: 'Jul', withUs: 170, industry: 28 },
  { month: 'Aug', withUs: 210, industry: 32 },
  { month: 'Sep', withUs: 250, industry: 35 },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className={`section-title transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We Drive <span className="gradient-text">Measurable Results</span>
          </h2>
          <p className={`section-subtitle transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our data-driven approach combined with cutting-edge AI technology delivers exceptional growth for our clients.
          </p>
        </div>
        
        <div className={`mt-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl shadow-xl p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-agency-dark">Client Growth Performance vs. Industry Average</h3>
            
            <div className="h-[300px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="month" />
                  <YAxis unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: 'none' }}
                    itemStyle={{ color: '#333' }}
                    formatter={(value) => [`${value}%`]}
                    labelStyle={{ fontWeight: 'bold', color: '#333' }}
                  />
                  <Legend verticalAlign="top" height={36} />
                  <Line 
                    type="monotone" 
                    dataKey="withUs" 
                    name="Growth with Nexus Digital" 
                    stroke="#8B5CF6" 
                    strokeWidth={3} 
                    dot={{ r: 4, strokeWidth: 2 }} 
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="industry" 
                    name="Industry Average" 
                    stroke="#8E9196" 
                    strokeWidth={2} 
                    dot={{ r: 4 }}
                    strokeDasharray="5 5" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 text-center text-agency-grey">
              <p className="text-sm italic">*Based on average performance across all clients in 2024</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className={`bg-gradient-to-br from-white to-agency-purple-light/30 p-6 rounded-xl shadow-md card-hover transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-agency-purple/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-agency-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-agency-dark">Data-Driven Strategies</h3>
            <p className="text-agency-grey">Our approach is built on thorough market analysis and customer insights to create strategies that deliver real results.</p>
          </div>
          
          <div className={`bg-gradient-to-br from-white to-agency-purple-light/30 p-6 rounded-xl shadow-md card-hover transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-agency-purple/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-agency-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-agency-dark">AI-Powered Innovation</h3>
            <p className="text-agency-grey">Leverage cutting-edge artificial intelligence to optimize campaigns, personalize content, and predict market trends.</p>
          </div>
          
          <div className={`bg-gradient-to-br from-white to-agency-purple-light/30 p-6 rounded-xl shadow-md card-hover transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 bg-agency-purple/10 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-agency-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-agency-dark">Transparent Reporting</h3>
            <p className="text-agency-grey">Real-time dashboards and comprehensive reporting ensure you always know exactly how your campaigns are performing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
