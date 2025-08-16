import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transforming Ideas Into
              <span className="gradient-text"> Digital Reality</span>
            </h1>
            <p className="hero-description">
              We're your technology partners, specializing in cutting-edge solutions 
              that drive innovation and accelerate growth. From AI integration to 
              cloud infrastructure, we make complex technology simple.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Solutions</button>
              <button className="btn btn-secondary">Watch Demo</button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon">🚀</div>
                <h3>Innovation</h3>
              </div>
              <div className="tech-card">
                <div className="tech-icon">⚡</div>
                <h3>Performance</h3>
              </div>
              <div className="tech-card">
                <div className="tech-icon">🔒</div>
                <h3>Security</h3>
              </div>
              <div className="tech-card">
                <div className="tech-icon">🌐</div>
                <h3>Scalability</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
