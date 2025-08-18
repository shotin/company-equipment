import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['Main: 385-503-0820', 'Support: 385-503-0820', 'Emergency: 385-503-0820'],
      action: 'Call Now'
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['company@controlequipment.org'],
      action: 'Send Email'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['1234 Industrial Blvd', 'Salt Lake City, UT 84101', 'Mon-Fri: 8AM-6PM'],
      action: 'Get Directions'
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
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div 
            className="header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p>Get in touch with our team for expert advice, quotes, or technical support</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <motion.div 
            className="methods-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                className="contact-method-card"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <div className="method-details">
                  {method.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                <button className="method-action">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-map-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Question</option>
                    <option value="support">Technical Support</option>
                    <option value="quote">Request Quote</option>
                    <option value="training">Training Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Map & Location Info */}
            <motion.div 
              className="map-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Our Location</h2>
              <div className="map-placeholder">
                <div className="map-content">
                  <div className="map-icon">🗺️</div>
                  <h3>Company Equipment Headquarters</h3>
                  <p>1234 Industrial Blvd</p>
                  <p>Salt Lake City, UT 84101</p>
                  <p>United States</p>
                  
                  <div className="location-details">
                    <div className="detail-item">
                      <span className="detail-icon">🕒</span>
                      <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">🕒</span>
                      <span>Sat: 9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">🚫</span>
                      <span>Sun: Closed</span>
                    </div>
                  </div>
                  
                  <button className="directions-button">
                    📍 Get Directions
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="branch-locations">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Branch Locations</h2>
            <p>Visit us at any of our convenient locations across the region</p>
          </motion.div>

          <motion.div 
            className="locations-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="location-card" variants={fadeInUp}>
              <div className="location-header">
                <h3>Salt Lake City</h3>
                <span className="location-type">Headquarters</span>
              </div>
              <div className="location-address">
                <p>1234 Industrial Blvd</p>
                <p>Salt Lake City, UT 84101</p>
              </div>
              <div className="location-contact">
                <p>📞 385-503-0820</p>
                <p>📧 company@controlequipment.org</p>
              </div>
              <div className="location-hours">
                <p><strong>Hours:</strong> Mon-Fri 8AM-6PM</p>
              </div>
            </motion.div>

            <motion.div className="location-card" variants={fadeInUp}>
              <div className="location-header">
                <h3>Provo</h3>
                <span className="location-type">Branch Office</span>
              </div>
              <div className="location-address">
                <p>5678 Technology Way</p>
                <p>Provo, UT 84601</p>
              </div>
              <div className="location-contact">
                <p>📞 385-503-0820</p>
                <p>📧 company@controlequipment.org</p>
              </div>
              <div className="location-hours">
                <p><strong>Hours:</strong> Mon-Fri 8AM-5PM</p>
              </div>
            </motion.div>

            <motion.div className="location-card" variants={fadeInUp}>
              <div className="location-header">
                <h3>Ogden</h3>
                <span className="location-type">Branch Office</span>
              </div>
              <div className="location-address">
                <p>9012 Business Center Dr</p>
                <p>Ogden, UT 84401</p>
              </div>
              <div className="location-contact">
                <p>📞 385-503-0820</p>
                <p>📧 company@controlequipment.org</p>
              </div>
              <div className="location-hours">
                <p><strong>Hours:</strong> Mon-Fri 8AM-5PM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-contact">
        <div className="container">
          <motion.div 
            className="emergency-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="emergency-icon">🚨</div>
            <h2>24/7 Emergency Support</h2>
            <p>For critical system failures and emergency repairs, we're available around the clock</p>
            <div className="emergency-actions">
              <a href="tel:385-503-0820" className="emergency-phone">
                📞 Emergency: 385-503-0820
              </a>
              <p className="emergency-note">
                Our emergency response team will be on-site within 2 hours for critical issues
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
