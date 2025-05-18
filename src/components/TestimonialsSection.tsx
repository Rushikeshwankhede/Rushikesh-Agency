
import React, { useEffect, useRef, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director, TechFlow Inc.",
    company: "TechFlow Inc.",
    quote: "Nexus Digital transformed our marketing strategy completely. Their AI-driven approach helped us increase our lead generation by 215% in just three months.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    longQuote: "Nexus Digital transformed our marketing strategy completely. Their AI-driven approach helped us increase our lead generation by 215% in just three months. The team is incredibly responsive and always brings innovative ideas to the table. What impressed me most was their ability to adapt to our industry's unique challenges and develop customized solutions that truly work."
  },
  {
    id: 2,
    name: "David Chen",
    position: "CEO, StartUp Launch",
    company: "StartUp Launch",
    quote: "As a startup founder, I needed a marketing team that could deliver results with limited budget. Nexus Digital exceeded all my expectations with their targeted campaigns.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    longQuote: "As a startup founder, I needed a marketing team that could deliver results with limited budget. Nexus Digital exceeded all my expectations with their targeted campaigns. Their understanding of digital marketing fundamentals paired with cutting-edge AI tools helped us establish a strong market presence without breaking the bank. Within six months, our organic traffic grew by 300% and conversions by 180%. I couldn't be happier with the results."
  },
  {
    id: 3,
    name: "Amanda Lewis",
    position: "E-commerce Director, FashionNova",
    company: "FashionNova",
    quote: "The ROI we've seen since working with Nexus Digital has been incredible. Their team helped us optimize our e-commerce funnel and increase sales by 175%.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    longQuote: "The ROI we've seen since working with Nexus Digital has been incredible. Their team helped us optimize our e-commerce funnel and increase sales by 175%. Their data-driven approach to optimization gave us insights we never had before, allowing us to make strategic decisions based on customer behavior rather than guesswork. The personalized AI-driven product recommendations they implemented on our site have significantly improved our average order value."
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    position: "CMO, GreenLife Solutions",
    company: "GreenLife Solutions",
    quote: "Nexus Digital's content strategy helped us become thought leaders in the sustainability space. Their SEO expertise doubled our organic traffic in just 4 months.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4,
    longQuote: "Nexus Digital's content strategy helped us become thought leaders in the sustainability space. Their SEO expertise doubled our organic traffic in just 4 months. The team took time to deeply understand our industry and target audience, creating content that resonates with our customers while also ranking well in search results. Their ability to balance quality writing with technical optimization is impressive and has helped us build authority in a competitive market."
  },
  {
    id: 5,
    name: "Jennifer Parker",
    position: "Small Business Owner, ParkerCrafts",
    company: "ParkerCrafts",
    quote: "As a small business, I was skeptical about hiring a marketing agency. Nexus Digital provided personalized service that felt like having an in-house team.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    longQuote: "As a small business, I was skeptical about hiring a marketing agency. Nexus Digital provided personalized service that felt like having an in-house team. They understood my budget constraints and created strategies that maximized every dollar spent. Their social media management has helped me connect with my ideal customers, and their e-commerce optimizations increased my conversion rate by 85%. The team is always available for questions and regularly provides detailed reports showing the impact of their work."
  }
];

const TestimonialsSection = () => {
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

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i}
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className={`section-title transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className={`section-subtitle transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Don't just take our word for it — hear from our clients who have experienced remarkable growth with our strategies.
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
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border shadow-lg card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-agency-dark">{testimonial.name}</h4>
                          <p className="text-sm text-agency-grey">{testimonial.position}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="italic text-agency-dark mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <Button variant="link" className="text-agency-purple p-0 hover:text-agency-dark">
                        <span>Read Full Story</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
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
            <a href="#" className="btn-primary">
              See More Results
            </a>
          </div>
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-agency-dark to-agency-purple text-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Digital Strategy?</h3>
              <p className="text-lg opacity-90 mb-8">
                Join the ranks of our successful clients and experience the difference that data-driven, 
                AI-powered marketing can make for your business.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#contact" className="bg-white text-agency-dark hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
                  Get Started Today
                </a>
                <a href="#services" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-white/10">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
