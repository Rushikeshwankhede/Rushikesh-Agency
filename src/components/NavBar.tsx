
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services', dropdown: true },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesList = [
    { name: 'Digital Marketing', href: '#' },
    { name: 'SEO Optimization', href: '#' },
    { name: 'Content Creation', href: '#' },
    { name: 'Social Media Management', href: '#' },
    { name: 'AI-Driven Analytics', href: '#' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.a 
              href="#" 
              className="text-2xl font-bold flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <span className="gradient-text">ADMAX</span>
              <span className="ml-1 text-agency-dark">IFY</span>
            </motion.a>
          </div>

          {/* Desktop Navigation using NavigationMenu for better dropdown support */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {navItems.map((item) => (
                  item.dropdown ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="bg-transparent text-agency-dark hover:text-agency-purple transition-colors px-0 py-0">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-48 bg-white p-2 rounded-md shadow-lg">
                          {servicesList.map((service) => (
                            <NavigationMenuLink 
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                              {service.name}
                            </NavigationMenuLink>
                          ))}
                          <NavigationMenuLink 
                            href="#services"
                            className="block px-4 py-2 text-sm text-agency-purple font-medium"
                          >
                            See all services
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
                        <NavigationMenuLink 
                          href={item.href}
                          className="text-agency-dark hover:text-agency-purple transition-colors"
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </motion.div>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="hidden md:block">
            <motion.a 
              href="#contact" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-agency-dark hover:text-agency-purple transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.name} className="py-2">
                    <button 
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center w-full text-left text-agency-dark hover:text-agency-purple transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
                    </button>
                    
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div 
                          className="ml-4 mt-2 space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {servicesList.map((service) => (
                            <motion.a
                              key={service.name}
                              href={service.href}
                              className="block py-1 text-sm text-gray-700 hover:text-agency-purple"
                              onClick={() => setIsOpen(false)}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              {service.name}
                            </motion.a>
                          ))}
                          <motion.a
                            href="#services"
                            className="block py-1 text-sm text-agency-purple font-medium"
                            onClick={() => setIsOpen(false)}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          >
                            See all services
                          </motion.a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-agency-dark hover:text-agency-purple transition-colors"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.name}
                  </motion.a>
                )
              ))}
              
              <div className="pt-4 mt-4 border-t">
                <motion.a 
                  href="#contact" 
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
