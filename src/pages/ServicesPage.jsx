import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Technical Support & Consultation',
      icon: '🔧',
      description: 'Expert technical assistance for all your HVAC and building automation needs',
      features: [
        '24/7 phone support',
        'On-site technical visits',
        'System troubleshooting',
        'Performance optimization',
        'Emergency response'
      ],
      pricing: 'Starting at $150/hour',
      category: 'support'
    },
    {
      id: 2,
      title: 'Installation & Commissioning',
      icon: '⚙️',
      description: 'Professional installation and setup of HVAC controls and building automation systems',
      features: [
        'System installation',
        'Wiring and connections',
        'Commissioning services',
        'Testing and validation',
        'Documentation'
      ],
      pricing: 'Project-based pricing',
      category: 'installation'
    },
    {
      id: 3,
      title: 'Preventive Maintenance',
      icon: '🛠️',
      description: 'Regular maintenance programs to keep your systems running efficiently',
      features: [
        'Scheduled inspections',
        'Performance monitoring',
        'Calibration services',
        'Parts replacement',
        'System optimization'
      ],
      pricing: 'Starting at $200/month',
      category: 'maintenance'
    },
    {
      id: 4,
      title: 'Training & Certification',
      icon: '📚',
      description: 'Comprehensive training programs for your technical team',
      features: [
        'Classroom training',
        'Hands-on workshops',
        'Online courses',
        'Certification programs',
        'Custom training'
      ],
      pricing: 'Starting at $500/person',
      category: 'training'
    },
    {
      id: 5,
      title: 'System Integration',
      icon: '🔗',
      description: 'Seamless integration of multiple building systems and protocols',
      features: [
        'Protocol conversion',
        'Gateway development',
        'Data aggregation',
        'API development',
        'Cloud integration'
      ],
      pricing: 'Project-based pricing',
      category: 'integration'
    },
    {
      id: 6,
      title: 'Emergency Repairs',
      icon: '🚨',
      description: 'Fast response emergency repair services for critical system failures',
      features: [
        '24/7 emergency response',
        'Same-day service',
        'Critical parts availability',
        'Temporary solutions',
        'Follow-up maintenance'
      ],
      pricing: 'Emergency rates apply',
      category: 'emergency'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'ABC Manufacturing',
      role: 'Facility Manager',
      content: 'The technical support team at Company Equipment has been incredible. They helped us optimize our building automation system and saved us 30% on energy costs.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'XYZ Hospital',
      role: 'Chief Engineer',
      content: 'Their installation team was professional and efficient. Our new HVAC controls were up and running ahead of schedule with minimal disruption.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mike Davis',
      company: 'Tech Solutions Inc.',
      role: 'Operations Director',
      content: 'The training program was excellent. Our team now has the skills to maintain and troubleshoot our systems independently.',
      rating: 5
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div 
            className="header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Our Services</h1>
            <p>Comprehensive solutions to keep your HVAC and building automation systems running at peak performance</p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>What We Offer</h2>
            <p>From installation to ongoing support, we provide end-to-end solutions for your building systems</p>
          </motion.div>

          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                className="service-card"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-pricing">
                  <span className="pricing-label">Starting at:</span>
                  <span className="pricing-amount">{service.pricing}</span>
                </div>
                
                <div className="service-actions">
                  {/* <button className="btn btn-outline">Learn More</button> */}
                  <Link to="/contact" className="btn btn-primary get__quote">Get Quote</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Company Equipment?</h2>
            <p>We're not just another service provider - we're your trusted partner in building automation excellence</p>
          </motion.div>

          <motion.div 
            className="benefits-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="benefit-item" variants={fadeInUp}>
              <div className="benefit-icon">🏆</div>
              <h3>Industry Expertise</h3>
              <p>Over 25 years of experience in HVAC controls and building automation</p>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInUp}>
              <div className="benefit-icon">⚡</div>
              <h3>Fast Response</h3>
              <p>24/7 emergency support with same-day service for critical issues</p>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInUp}>
              <div className="benefit-icon">🔒</div>
              <h3>Certified Technicians</h3>
              <p>Factory-trained and certified technicians for all major brands</p>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInUp}>
              <div className="benefit-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Preventive maintenance programs that save money in the long run</p>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInUp}>
              <div className="benefit-icon">🌱</div>
              <h3>Energy Efficiency</h3>
              <p>Optimize your systems for maximum energy savings and performance</p>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInUp}>
              <div className="benefit-icon">📱</div>
              <h3>Modern Technology</h3>
              <p>Stay current with the latest building automation technologies</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it - hear from satisfied customers</p>
          </motion.div>

          <motion.div 
            className="testimonials-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="testimonial-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p className="author-company">{testimonial.company}</p>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="service-process">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>How We Work</h2>
            <p>Our proven process ensures quality service delivery every time</p>
          </motion.div>

          <motion.div 
            className="process-steps"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="process-step" variants={fadeInUp}>
              <div className="step-number">1</div>
              <div className="step-icon">📞</div>
              <h3>Initial Contact</h3>
              <p>Reach out to us with your service needs or questions</p>
            </motion.div>

            <motion.div className="process-step" variants={fadeInUp}>
              <div className="step-number">2</div>
              <div className="step-icon">🔍</div>
              <h3>Assessment</h3>
              <p>We evaluate your systems and provide detailed recommendations</p>
            </motion.div>

            <motion.div className="process-step" variants={fadeInUp}>
              <div className="step-number">3</div>
              <div className="step-icon">📋</div>
              <h3>Proposal</h3>
              <p>Receive a comprehensive quote and service plan</p>
            </motion.div>

            <motion.div className="process-step" variants={fadeInUp}>
              <div className="step-number">4</div>
              <div className="step-icon">⚙️</div>
              <h3>Service Delivery</h3>
              <p>Our certified technicians complete the work efficiently</p>
            </motion.div>

            <motion.div className="process-step" variants={fadeInUp}>
              <div className="step-number">5</div>
              <div className="step-icon">✅</div>
              <h3>Follow-up</h3>
              <p>We ensure your satisfaction and provide ongoing support</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your service needs and get a personalized quote</p>
            <div className="cta-buttons">
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">Request Service</Link>
              </motion.button>
              <motion.button 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="tel:385-503-0820">Call Now: 385-503-0820</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
