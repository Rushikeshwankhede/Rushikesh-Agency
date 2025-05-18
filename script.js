
// Data
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

const growthData = [
  { month: 'Jan', withUs: 10, industry: 5 },
  { month: 'Feb', withUs: 25, industry: 8 },
  { month: 'Mar', withUs: 40, industry: 12 },
  { month: 'Apr', withUs: 65, industry: 15 },
  { month: 'May', withUs: 95, industry: 20 },
  { month: 'Jun', withUs: 135, industry: 25 },
  { month: 'Jul', withUs: 170, industry: 28 },
  { month: 'Aug', withUs: 210, industry: 32 },
  { month: 'Sep', withUs: 250, industry: 35 }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileDropdownToggle = document.querySelector('.mobile-dropdown .dropdown-toggle');
const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');
const servicesCarousel = document.getElementById('services-carousel');
const testimonialsCarousel = document.getElementById('testimonials-carousel');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const currentYearSpan = document.getElementById('current-year');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize services carousel
  initServicesCarousel();
  
  // Initialize testimonials carousel
  initTestimonialsCarousel();
  
  // Initialize growth chart
  initGrowthChart();
  
  // Start stats counter
  startCountingStats();
  
  // Scroll effects initialization
  initScrollEffects();
});

// Handle scroll events for navbar
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });
}

// Mobile dropdown toggle
if (mobileDropdownToggle) {
  mobileDropdownToggle.addEventListener('click', function() {
    mobileDropdownMenu.classList.toggle('hidden');
    this.querySelector('.dropdown-icon').classList.toggle('rotate-180');
  });
}

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', function() {
    if (!this.classList.contains('dropdown-toggle')) {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });
});

// Handle contact form submission
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const submitButton = document.querySelector('.form-submit');
    const spinner = document.querySelector('.spinner');
    
    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    
    // Validate form
    let isValid = true;
    
    if (!name.value.trim()) {
      nameError.textContent = 'Name is required';
      isValid = false;
    }
    
    if (!email.value.trim()) {
      emailError.textContent = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      emailError.textContent = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!message.value.trim()) {
      messageError.textContent = 'Message is required';
      isValid = false;
    }
    
    if (isValid) {
      // Show loading state
      submitButton.disabled = true;
      spinner.classList.remove('hidden');
      
      // Simulate form submission (would be replaced with actual API call)
      setTimeout(function() {
        // Reset form
        contactForm.reset();
        
        // Hide loading state
        submitButton.disabled = false;
        spinner.classList.add('hidden');
        
        // Show success message
        showToast('Message sent successfully! We\'ll get back to you soon.');
      }, 1500);
    }
  });
}

// Services carousel initialization
function initServicesCarousel() {
  if (!servicesCarousel) return;
  
  // Create service cards
  services.forEach(service => {
    const serviceCard = createServiceCard(service);
    servicesCarousel.appendChild(serviceCard);
  });
  
  // Initialize carousel controls
  initCarouselControls('services-carousel', 3);
}

// Testimonials carousel initialization
function initTestimonialsCarousel() {
  if (!testimonialsCarousel) return;
  
  // Create testimonial cards
  testimonials.forEach(testimonial => {
    const testimonialCard = createTestimonialCard(testimonial);
    testimonialsCarousel.appendChild(testimonialCard);
  });
  
  // Initialize carousel controls
  initCarouselControls('testimonials-carousel', 3);
}

// Create service card element
function createServiceCard(service) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'carousel-item';
  
  cardDiv.innerHTML = `
    <div class="service-card card-hover">
      <div class="service-image-container">
        <img src="${service.image}" alt="${service.title}" class="service-image">
        <div class="service-image-overlay">
          <h3 class="service-title">${service.title}</h3>
        </div>
      </div>
      <div class="service-content">
        <p class="service-description">${service.description}</p>
        <ul class="service-features">
          ${service.features.map(feature => `
            <li class="service-feature">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              ${feature}
            </li>
          `).join('')}
        </ul>
        <a href="#" class="service-link">
          <span>Learn more</span>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" class="ml-1">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  `;
  
  return cardDiv;
}

// Create testimonial card element
function createTestimonialCard(testimonial) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'carousel-item';
  
  // Generate stars based on rating
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= testimonial.rating) {
      stars += `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="star">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      `;
    } else {
      stars += `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="star star-empty">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      `;
    }
  }
  
  cardDiv.innerHTML = `
    <div class="testimonial-card card-hover">
      <div class="testimonial-header">
        <div class="testimonial-image">
          <img src="${testimonial.image}" alt="${testimonial.name}">
        </div>
        <div>
          <h4 class="testimonial-name">${testimonial.name}</h4>
          <p class="testimonial-position">${testimonial.position}</p>
        </div>
      </div>
      
      <div class="testimonial-rating">
        ${stars}
      </div>
      
      <blockquote class="testimonial-text">
        "${testimonial.quote}"
      </blockquote>
      
      <a href="#" class="testimonial-link" data-id="${testimonial.id}">
        <span>Read Full Story</span>
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" class="ml-1">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  `;
  
  // Add click event to "Read Full Story" links
  const readMoreLink = cardDiv.querySelector('.testimonial-link');
  readMoreLink.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('data-id');
    const testimonial = testimonials.find(t => t.id == id);
    alert(`Full Testimonial from ${testimonial.name}:\n\n"${testimonial.longQuote}"`);
    // In a real implementation, this could open a modal or navigate to a detailed page
  });
  
  return cardDiv;
}

// Initialize carousel controls
function initCarouselControls(carouselId, itemsPerView) {
  const carousel = document.getElementById(carouselId);
  const prevBtn = document.querySelector(`[data-carousel="${carouselId}"].prev-button`);
  const nextBtn = document.querySelector(`[data-carousel="${carouselId}"].next-button`);
  
  if (!carousel || !prevBtn || !nextBtn) return;
  
  let current = 0;
  const items = carousel.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  
  // Set initial state
  updateCarouselPosition();
  
  // Previous button click
  prevBtn.addEventListener('click', function() {
    current = (current > 0) ? current - 1 : totalItems - itemsPerView;
    updateCarouselPosition();
  });
  
  // Next button click
  nextBtn.addEventListener('click', function() {
    current = (current < totalItems - itemsPerView) ? current + 1 : 0;
    updateCarouselPosition();
  });
  
  // Update carousel position
  function updateCarouselPosition() {
    // For mobile, show 1 item per view
    const actualItemsPerView = window.innerWidth < 640 ? 1 : 
                             window.innerWidth < 768 ? 2 : 
                             itemsPerView;
    
    const itemWidth = 100 / actualItemsPerView;
    carousel.style.transform = `translateX(-${current * itemWidth}%)`;
    
    // Adjust item widths based on screen size
    items.forEach(item => {
      item.style.flexBasis = `${itemWidth}%`;
    });
  }
  
  // Update on window resize
  window.addEventListener('resize', updateCarouselPosition);
}

// Initialize growth chart
function initGrowthChart() {
  const ctx = document.getElementById('growth-chart');
  if (!ctx) return;
  
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: growthData.map(d => d.month),
      datasets: [
        {
          label: 'Growth with Nexus Digital',
          data: growthData.map(d => d.withUs),
          borderColor: '#8B5CF6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 8,
          fill: false,
          tension: 0.4
        },
        {
          label: 'Industry Average',
          data: growthData.map(d => d.industry),
          borderColor: '#8E9196',
          backgroundColor: 'rgba(142, 145, 150, 0.1)',
          borderWidth: 2,
          pointRadius: 4,
          borderDash: [5, 5],
          fill: false,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          backgroundColor: 'white',
          titleColor: '#333',
          bodyColor: '#333',
          borderColor: '#E2E8F0',
          borderWidth: 1,
          cornerRadius: 8,
          displayColors: true,
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.parsed.y}%`;
            }
          }
        },
        legend: {
          position: 'top',
          labels: {
            padding: 20,
            boxWidth: 30,
            usePointStyle: true
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#8E9196'
          }
        },
        y: {
          grid: {
            color: '#EDF2F7'
          },
          ticks: {
            callback: function(value) {
              return value + '%';
            },
            color: '#8E9196'
          }
        }
      }
    }
  });
}

// Start counting stats
function startCountingStats() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statElements = document.querySelectorAll('.stat-number, .stat-number-dollar');
        statElements.forEach(element => {
          const target = parseFloat(element.getAttribute('data-target'));
          animateValue(element, 0, target, 2000, element.classList.contains('stat-number-dollar'));
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    observer.observe(heroSection);
  }
}

// Animate number counting
function animateValue(element, start, end, duration, isDollar = false) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = progress * (end - start) + start;
    
    if (isDollar) {
      element.textContent = `$${currentValue.toFixed(1)}M`;
    } else {
      element.textContent = `${Math.floor(currentValue)}${end === Math.floor(end) ? '' : '+'}${end === Math.floor(end) ? '%' : ''}`;
    }
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Initialize scroll effects
function initScrollEffects() {
  // Add scroll observer for animations
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animate elements within the section
        const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('visible');
          }, 100 * index);
        });
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
    
    // Add animation classes
    const elementsToAnimate = section.querySelectorAll('.section-title, .section-subtitle, .chart-container, .features-grid > *, .carousel-container, .info-card, .contact-card');
    
    elementsToAnimate.forEach(element => {
      element.classList.add('animate-on-scroll');
    });
  });
}

// Show toast notification
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(function() {
    toast.classList.add('hidden');
  }, 5000);
}

// Email validation
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
