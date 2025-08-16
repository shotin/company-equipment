import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'AI Solutions Architect',
      image: '👩‍💻',
      bio: 'Leading AI implementations with 8+ years in machine learning and data science.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Cloud Infrastructure Lead',
      image: '👨‍💼',
      bio: 'Expert in scalable cloud architectures and DevOps automation strategies.'
    },
    {
      name: 'Emily Watson',
      role: 'Cybersecurity Specialist',
      image: '👩‍🔬',
      bio: 'Protecting digital assets with advanced threat detection and compliance expertise.'
    }
  ];

  const achievements = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About TechNexus</h2>
            <p className="about-description">
              Founded in 2018, TechNexus has been at the forefront of digital transformation, 
              helping businesses navigate the complex world of modern technology. Our mission 
              is to bridge the gap between cutting-edge innovation and practical business solutions.
            </p>
            <p className="about-description">
              We believe that technology should empower, not complicate. That's why we focus on 
              creating solutions that are not only powerful but also intuitive and scalable. 
              Our team of experts brings together decades of experience across various domains.
            </p>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement">
                  <span className="achievement-number">{achievement.number}</span>
                  <span className="achievement-label">{achievement.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="vision-mission">
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>To be the leading catalyst for digital transformation, making advanced technology accessible to businesses of all sizes.</p>
            </div>
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>Empowering organizations through innovative technology solutions that drive growth, efficiency, and competitive advantage.</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Meet Our Experts</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-avatar">{member.image}</div>
                <h4 className="member-name">{member.name}</h4>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
