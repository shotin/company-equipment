import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './TrainingPage.css';

const TrainingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const trainingCategories = [
    { id: 'all', name: 'All Courses', icon: '📚' },
    { id: 'niagara', name: 'Niagara Training', icon: '🏢' },
    { id: 'cct', name: 'CCT Introduction', icon: '🔧' },
    { id: 'hvac', name: 'HVAC Controls', icon: '❄️' },
    { id: 'automation', name: 'Building Automation', icon: '⚙️' },
    { id: 'certification', name: 'Certification', icon: '🏆' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Introduction to Niagara Framework',
      category: 'niagara',
      duration: '3 days',
      level: 'Beginner',
      price: '$1,200',
      description: 'Learn the fundamentals of the Niagara Framework for building automation systems',
      topics: ['Niagara Architecture', 'Workbench Basics', 'Station Development', 'Point Configuration'],
      instructor: 'Jennifer Martinez',
      nextDate: 'March 15-17, 2024',
      seats: 8,
      image: 'https://via.placeholder.com/300x200/2563eb/ffffff?text=Niagara+Training'
    },
    {
      id: 2,
      title: 'CCT Introduction & Fundamentals',
      category: 'cct',
      duration: '2 days',
      level: 'Beginner',
      price: '$800',
      description: 'Comprehensive introduction to CCT programming and configuration',
      topics: ['CCT Basics', 'Programming Fundamentals', 'Device Configuration', 'Troubleshooting'],
      instructor: 'Michael Chen',
      nextDate: 'March 20-21, 2024',
      seats: 12,
      image: 'https://via.placeholder.com/300x200/059669/ffffff?text=CCT+Training'
    },
    {
      id: 3,
      title: 'Advanced HVAC Controls',
      category: 'hvac',
      duration: '4 days',
      level: 'Advanced',
      price: '$1,500',
      description: 'Advanced techniques for HVAC control system design and optimization',
      topics: ['System Design', 'PID Control', 'Energy Optimization', 'Advanced Diagnostics'],
      instructor: 'Robert Johnson',
      nextDate: 'April 5-8, 2024',
      seats: 6,
      image: 'https://via.placeholder.com/300x200/dc2626/ffffff?text=HVAC+Controls'
    },
    {
      id: 4,
      title: 'Building Automation Integration',
      category: 'automation',
      duration: '5 days',
      level: 'Intermediate',
      price: '$1,800',
      description: 'Learn to integrate multiple building systems using modern protocols',
      topics: ['BACnet Integration', 'Modbus Communication', 'API Development', 'System Testing'],
      instructor: 'Sarah Williams',
      nextDate: 'April 15-19, 2024',
      seats: 10,
      image: 'https://via.placeholder.com/300x200/7c3aed/ffffff?text=Automation+Integration'
    },
    {
      id: 5,
      title: 'Niagara Advanced Programming',
      category: 'niagara',
      duration: '4 days',
      level: 'Advanced',
      price: '$1,600',
      description: 'Advanced programming techniques for complex Niagara applications',
      topics: ['Advanced Programming', 'Custom Components', 'Database Integration', 'Performance Optimization'],
      instructor: 'Jennifer Martinez',
      nextDate: 'May 10-13, 2024',
      seats: 8,
      image: 'https://via.placeholder.com/300x200/ea580c/ffffff?text=Advanced+Niagara'
    },
    {
      id: 6,
      title: 'HVAC Controls Certification',
      category: 'certification',
      duration: '6 days',
      level: 'All Levels',
      price: '$2,200',
      description: 'Comprehensive certification program for HVAC control professionals',
      topics: ['Theory & Practice', 'Hands-on Labs', 'Final Exam', 'Certification'],
      instructor: 'Multiple Instructors',
      nextDate: 'May 20-25, 2024',
      seats: 15,
      image: 'https://via.placeholder.com/300x200/0891b2/ffffff?text=HVAC+Certification'
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

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
    <div className="training-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div 
            className="header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Training & Certification</h1>
            <p>Develop your skills with our comprehensive training programs led by industry experts</p>
          </motion.div>
        </div>
      </section>

      {/* Training Overview */}
      <section className="training-overview">
        <div className="container">
          <motion.div 
            className="overview-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overview-text">
              <h2>Why Choose Our Training?</h2>
              <p>
                Our training programs are designed by industry professionals with decades of real-world 
                experience. We combine theoretical knowledge with hands-on practice to ensure you gain 
                practical skills that you can immediately apply in your work.
              </p>
              <ul className="overview-features">
                <li>✅ Expert instructors with industry experience</li>
                <li>✅ Hands-on labs with real equipment</li>
                <li>✅ Small class sizes for personalized attention</li>
                <li>✅ Industry-recognized certifications</li>
                <li>✅ Ongoing support and resources</li>
                <li>✅ Flexible scheduling options</li>
              </ul>
            </div>
            <div className="overview-image">
              <img src="https://i.ibb.co/wFQCtqtW/photo-1614447413576-b346c641c128.jpg" alt="Training Center" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="course-categories">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Available Courses</h2>
            <p>Browse our upcoming training sessions and reserve your spot today</p>
          </motion.div>
        <div className="container">
          <motion.div 
            className="categories-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {trainingCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training Center */}
      <section className="training-center">
        <div className="container">
          <motion.div 
            className="center-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="center-text">
              <h2>State-of-the-Art Training Center</h2>
              <p>
                Our training facility is equipped with the latest HVAC controls, building automation 
                systems, and diagnostic equipment. Students work with real-world equipment in a 
                controlled environment, ensuring they gain practical experience.
              </p>
              <div className="center-features">
                <div className="feature-item">
                  <span className="feature-icon">💻</span>
                  <span>Modern Computer Labs</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔧</span>
                  <span>Hands-on Equipment</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📱</span>
                  <span>Digital Learning Tools</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">☕</span>
                  <span>Comfortable Break Areas</span>
                </div>
              </div>
            </div>
            <div className="center-image">
              <img src="https://i.ibb.co/1HhhK5w/premium-photo-1664301972519-506636f0245d.jpg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="certification-programs">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Certification Programs</h2>
            <p>Earn industry-recognized certifications to advance your career</p>
          </motion.div>

          <motion.div 
            className="certifications-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="certification-card" variants={fadeInUp}>
              <div className="cert-icon">🏆</div>
              <h3>HVAC Controls Specialist</h3>
              <p>Comprehensive certification covering all aspects of HVAC control systems</p>
              <ul>
                <li>System Design & Installation</li>
                <li>Programming & Configuration</li>
                <li>Troubleshooting & Maintenance</li>
                <li>Energy Optimization</li>
              </ul>
              <div className="cert-details">
                <span className="cert-duration">6 months</span>
                <span className="cert-level">Advanced</span>
              </div>
            </motion.div>

            <motion.div className="certification-card" variants={fadeInUp}>
              <div className="cert-icon">🔧</div>
              <h3>Building Automation Engineer</h3>
              <p>Advanced certification for building automation system professionals</p>
              <ul>
                <li>System Integration</li>
                <li>Protocol Implementation</li>
                <li>Performance Optimization</li>
                <li>Project Management</li>
              </ul>
              <div className="cert-details">
                <span className="cert-duration">8 months</span>
                <span className="cert-level">Expert</span>
              </div>
            </motion.div>

            <motion.div className="certification-card" variants={fadeInUp}>
              <div className="cert-icon">⚙️</div>
              <h3>Niagara Framework Developer</h3>
              <p>Specialized certification for Niagara Framework development</p>
              <ul>
                <li>Framework Architecture</li>
                <li>Custom Component Development</li>
                <li>Database Integration</li>
                <li>System Deployment</li>
              </ul>
              <div className="cert-details">
                <span className="cert-duration">4 months</span>
                <span className="cert-level">Intermediate</span>
              </div>
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
            <h2>Ready to Advance Your Career?</h2>
            <p>Contact our training coordinator to discuss your learning goals and find the perfect program</p>
            <div className="cta-buttons">
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">Contact Training Coordinator</Link>
              </motion.button>
              <motion.button 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="tel:385-503-0820">Call: 385-503-0820</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
