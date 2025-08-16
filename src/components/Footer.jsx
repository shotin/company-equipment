import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="https://i.ibb.co/FLdNhLb3/logo-ce.png" className='mb-4' />
                <p>Your trusted partner in HVAC controls and building automation solutions.</p>
              </div>
              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#" className="social-link">📘 Facebook</a>
                  <a href="#" className="social-link">🐦 Twitter</a>
                  <a href="#" className="social-link">💼 LinkedIn</a>
                  <a href="#" className="social-link">📷 Instagram</a>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/training">Training</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Products</h4>
              <ul className="footer-links">
                <li><a href="#">Boiler Control</a></li>
                <li><a href="#">Building Automation</a></li>
                <li><a href="#">HVAC Controls</a></li>
                <li><a href="#">Gas Products</a></li>
                <li><a href="#">Refrigerants</a></li>
                <li><a href="#">Tools & Equipment</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#">Technical Support</a></li>
                <li><a href="#">Installation</a></li>
                <li><a href="#">Maintenance</a></li>
                <li><a href="#">Training</a></li>
                <li><a href="#">System Integration</a></li>
                <li><a href="#">Emergency Repairs</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p>📞 <a href="tel:385-503-0820">385-503-0820</a></p>
                <p>📧 <a href="mailto:company@controlequipment.org">company@controlequipment.org</a></p>
                <p>📍 1234 Industrial Blvd</p>
                <p>Salt Lake City, UT 84101</p>
              </div>
              {/* <div className="emergency-contact">
                <p><strong>24/7 Emergency:</strong></p>
                <p><a href="tel:385-503-0820">385-503-0820</a></p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Company Equipment. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
