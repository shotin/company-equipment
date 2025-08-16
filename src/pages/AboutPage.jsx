import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product quality to customer service.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Honest, transparent relationships built on trust and mutual respect.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Embracing new technologies and creative solutions to solve complex challenges.'
    },
    {
      icon: '👥',
      title: 'Teamwork',
      description: 'Collaborative approach that leverages diverse expertise and perspectives.'
    }
  ];

  const milestones = [
    { year: '1998', title: 'Company Founded', description: 'Started as a small HVAC controls distributor' },
    { year: '2005', title: 'First Branch Office', description: 'Expanded operations to serve wider region' },
    { year: '2010', title: 'Building Automation Division', description: 'Launched comprehensive automation services' },
    { year: '2015', title: 'Training Center Established', description: 'Opened state-of-the-art training facility' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched online ordering and support portal' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as top HVAC controls supplier in region' }
  ];

  const team = [
    {
      name: 'Robert Johnson',
      role: 'CEO & Founder',
      experience: '25+ years',
      image: 'https://via.placeholder.com/200x200/3b82f6/ffffff?text=RJ',
      bio: 'Industry veteran with deep expertise in building automation and HVAC controls.'
    },
    {
      name: 'Jennifer Martinez',
      role: 'Technical Director',
      experience: '20+ years',
      image: 'https://via.placeholder.com/200x200/059669/ffffff?text=JM',
      bio: 'Certified engineer specializing in system integration and optimization.'
    },
    {
      name: 'Michael Chen',
      role: 'Sales Manager',
      experience: '15+ years',
      image: 'https://via.placeholder.com/200x200/dc2626/ffffff?text=MC',
      bio: 'Expert in understanding customer needs and delivering tailored solutions.'
    },
    {
      name: 'Sarah Williams',
      role: 'Service Coordinator',
      experience: '12+ years',
      image: 'https://via.placeholder.com/200x200/7c3aed/ffffff?text=SW',
      bio: 'Ensures seamless service delivery and customer satisfaction.'
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
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div 
            className="header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About Company Equipment</h1>
            <p>Your trusted partner in HVAC controls and building automation for over 25 years</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 1998, Company Equipment began as a small family-owned business with a simple mission: 
                to provide reliable HVAC controls and exceptional service to our community. What started 
                as a modest operation has grown into one of the region's most trusted suppliers of building 
                automation solutions.
              </p>
              <p>
                Over the past quarter-century, we've witnessed incredible technological advancements in 
                the HVAC industry. From simple thermostats to sophisticated building management systems, 
                we've been at the forefront, helping our customers navigate these changes and implement 
                solutions that improve efficiency, comfort, and sustainability.
              </p>
              <p>
                Today, Company Equipment serves hundreds of commercial and industrial facilities across Utah 
                and neighboring states. Our commitment to quality, innovation, and customer service 
                remains unchanged, and we continue to invest in our team, technology, and relationships 
                to better serve our customers.
              </p>
            </div>
            <div className="story-image">
              <img src="https://i.ibb.co/rR3mJRxs/premium-photo-1683121084617-5a77099de982.jpg" alt="Company Equipment Building" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="company-values">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <motion.div 
            className="values-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="company-milestones">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Journey</h2>
            <p>Key milestones in our company's growth and development</p>
          </motion.div>

          <motion.div 
            className="timeline"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                variants={fadeInUp}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="team-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Meet Our Team</h2>
            <p>The experienced professionals behind our success</p>
          </motion.div>

          <motion.div 
            className="team-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-member"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-experience">{member.experience} experience</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Company Stats */}
      <section className="company-stats">
        <div className="container">
          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            >
              <div className="stat-number">25+</div>
              <div className="stat-label">Years in Business</div>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
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
            <h2>Ready to Work With Us?</h2>
            <p>Join hundreds of satisfied customers who trust Company Equipment with their building automation needs</p>
            <div className="cta-buttons">
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">Get in Touch</Link>
              </motion.button>
              <motion.button 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/services">View Services</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
