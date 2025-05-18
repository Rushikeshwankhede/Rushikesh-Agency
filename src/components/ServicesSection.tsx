
import React, { useEffect, useRef, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Digital Marketing Strategy",
    description: "Comprehensive digital marketing strategies tailored to your business goals and target audience.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: ["Market Research", "Competitor Analysis", "Channel Selection", "Budget Optimization"]
  },
  {
    id: 2,
    title: "SEO & Content Marketing",
    description: "Boost your online visibility with our advanced SEO techniques and compelling content strategies.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: ["Keyword Research", "On-Page Optimization", "Content Creation", "Link Building"]
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    description: "Harness the power of artificial intelligence to gain deeper insights and make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: ["Predictive Analytics", "Customer Segmentation", "Trend Analysis", "Performance Forecasting"]
  },
  {
    id: 4,
    title: "Social Media Management",
    description: "Engage your audience and build brand loyalty with strategic social media marketing campaigns.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: ["Platform Strategy", "Content Calendar", "Community Management", "Paid Campaigns"]
  },
  {
    id: 5,
    title: "PPC & Paid Advertising",
    description: "Maximize ROI with targeted paid advertising campaigns across search, social, and display networks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: ["Ad Copywriting", "Landing Page Design", "A/B Testing", "Budget Management"]
  },
  {
    id: 6,
    title: "Email Marketing Automation",
    description: "Nurture leads and drive conversions with personalized email marketing campaigns and automation.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    features: ["Sequence Design", "Segmentation", "A/B Testing", "Performance Analytics"]
  }
];

const ServicesSection = () => {
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
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-agency-soft-bg">
      <div className="container-custom">
        <div className="text-center">
          <h2 className={`section-title transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className={`section-subtitle transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Comprehensive digital marketing solutions powered by AI to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className={`mt-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3">
                  <Card className="h-full card-hover border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <h3 className="text-white font-bold text-xl p-4">{service.title}</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-agency-grey mb-4">{service.description}</p>
                        <ul className="mb-4">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm mb-1 text-agency-dark">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-agency-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button variant="link" className="text-agency-purple p-0 hover:text-agency-dark">
                          <span>Learn more</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static relative transform-none" />
              <CarouselNext className="static relative transform-none" />
            </div>
          </Carousel>
          
          <div className="mt-12 text-center">
            <a href="#" className="btn-outline">
              See All Services
            </a>
          </div>
        </div>
        
        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-agency-dark">
                AI-Powered Solutions for Modern Businesses
              </h3>
              <p className="text-agency-grey mb-6">
                Our agency leverages cutting-edge artificial intelligence to deliver unprecedented results. 
                From predictive analytics to personalized content generation, our AI tools work around the clock 
                to optimize your marketing performance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-agency-purple/20 text-agency-purple flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>AI-driven content creation and optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-agency-purple/20 text-agency-purple flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Predictive analytics for market trends</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-agency-purple/20 text-agency-purple flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Automated campaign optimization</span>
                </li>
              </ul>
              <a href="#contact" className="btn-primary self-start">
                Get AI Solutions
              </a>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                alt="AI-Powered Marketing Solutions"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-agency-purple/70 to-agency-teal/70 mix-blend-multiply"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div className="text-5xl md:text-6xl font-bold mb-4">AI</div>
                <div className="text-xl md:text-2xl">Powered Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
