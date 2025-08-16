import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes and gain valuable insights from your data.',
      features: ['Custom AI Models', 'Data Analytics', 'Process Automation', 'Predictive Analytics']
    },
    {
      id: 2,
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your business operations.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Integration', 'Cost Optimization']
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements and goals.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      id: 4,
      icon: '🛡️',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and maintain compliance.',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']
    },
    {
      id: 5,
      icon: '📊',
      title: 'Data Engineering',
      description: 'Transform raw data into actionable insights with our advanced data processing solutions.',
      features: ['Data Pipelines', 'ETL Processes', 'Real-time Analytics', 'Data Warehousing']
    },
    {
      id: 6,
      icon: '🎯',
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategies to modernize your business processes.',
      features: ['Strategy Planning', 'Technology Roadmap', 'Change Management', 'Training Programs']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
