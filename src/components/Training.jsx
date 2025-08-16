import React from 'react';
import './Training.css';

const Training = () => {
  const trainingPrograms = [
    {
      id: 1,
      title: 'AI Fundamentals Bootcamp',
      duration: '3 Days',
      level: 'Beginner to Intermediate',
      description: 'Master the basics of artificial intelligence and machine learning with hands-on projects.',
      features: ['Machine Learning Basics', 'Neural Networks', 'Data Preprocessing', 'Model Deployment'],
      price: '$899'
    },
    {
      id: 2,
      title: 'Cloud Architecture Mastery',
      duration: '5 Days',
      level: 'Intermediate to Advanced',
      description: 'Design and implement scalable cloud solutions using modern architecture patterns.',
      features: ['AWS/Azure/GCP', 'Microservices', 'Container Orchestration', 'DevOps Integration'],
      price: '$1,299'
    },
    {
      id: 3,
      title: 'Cybersecurity Essentials',
      duration: '4 Days',
      level: 'All Levels',
      description: 'Comprehensive security training covering threat detection and incident response.',
      features: ['Security Auditing', 'Penetration Testing', 'Compliance Standards', 'Risk Management'],
      price: '$1,099'
    }
  ];

  return (
    <section id="training" className="training">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Training</h2>
          <p className="section-subtitle">
            Accelerate your team's skills with our hands-on, industry-focused training programs
          </p>
        </div>

        <div className="training-content">
          <div className="training-intro">
            <div className="intro-card">
              <h3>Why Choose Our Training?</h3>
              <ul className="intro-features">
                <li>🎯 Industry-focused curriculum designed by experts</li>
                <li>💡 Hands-on projects with real-world applications</li>
                <li>🏆 Certification upon successful completion</li>
                <li>🤝 Ongoing support and mentorship</li>
                <li>📈 Flexible scheduling for corporate teams</li>
              </ul>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Professionals Trained</span>
                </div>
                <div className="stat">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="training-programs">
            {trainingPrograms.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-header">
                  <h3 className="program-title">{program.title}</h3>
                  <div className="program-meta">
                    <span className="duration">{program.duration}</span>
                    <span className="level">{program.level}</span>
                  </div>
                </div>
                
                <p className="program-description">{program.description}</p>
                
                <div className="program-features">
                  <h4>What You'll Learn:</h4>
                  <ul>
                    {program.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="program-footer">
                  <div className="program-price">{program.price}</div>
                  <button className="enroll-btn">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
