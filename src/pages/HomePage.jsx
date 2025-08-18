import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const featuredProducts = [
    {
      id: 1,
      name: "KMC Controls BACnet",
      category: "Building Automation",
      image:
        "https://i.ibb.co/gMGqkmGG/axel-richter-K-CIq-M-w-Sqw-unsplash.jpg",
      description:
        "Advanced building automation controls for modern facilities",
      price: 1299.99,
    },
    {
      id: 2,
      name: "CAT85K2",
      category: "Refrigeration",
      image: "https://i.ibb.co/sJ5PrnWG/cat85-470x470-01.png",
      description: "CAT85K2 Combustion Analyzer Rugged, Smart, and Wireless",
      price: 2499.99,
    },
    {
      id: 4,
      name: "F4-CGM09090-000",
      category: "Boiler Control",
      image: "https://i.ibb.co/GvfzX3CD/f4-cgm09090.jpg",
      description: "Fully Programmable BACnet MS/TP Controller",
      price: 1799.99,
    },
    {
      id: 5,
      name: "JCDM1-34031EB-S20S",
      category: "Boiler Control",
      image: "https://i.ibb.co/n8KpWCh0/dm1-32011eb-s20b-01-01.jpg",
      description: "General-purpose micro variable frequency drive",
      price: 649.99,
    },
    {
      id: 6,
      name: "BAC-5901C",
      category: "Boiler Control",
      image:
        "https://i.ibb.co/4n2FLVL4/bac-5901ac-product-photo-3-4-left-2409.png",
      description: "Flexible Zone Control with BAC-5901C",
      price: 1599.99,
    },
  ];

  const services = [
    {
      icon: "🔧",
      title: "Technical Support",
      description: "Expert technical assistance for all your HVAC needs",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick shipping and delivery across the region",
    },
    {
      icon: "📚",
      title: "Training Programs",
      description: "Comprehensive training for your team",
    },
    {
      icon: "💼",
      title: "Custom Solutions",
      description: "Tailored solutions for unique requirements",
    },
  ];

  const sliderItems = [
    {
      id: 1,
      title: "Precision Control Systems",
      subtitle:
        "Delivering cutting-edge building automation solutions for modern facilities.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Explore Controls",
    },
    {
      id: 2,
      title: "Industrial HVAC Solutions",
      subtitle:
        "Reliable performance for demanding environments with advanced technology.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "View Solutions",
    },
    {
      id: 3,
      title: "Smart Energy Management",
      subtitle:
        "Optimizing efficiency with intelligent building controls and automation.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Learn More",
    },
    {
      id: 4,
      title: "Building Automation Excellence",
      subtitle:
        "State-of-the-art control systems for commercial and industrial buildings.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Get Started",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Slider {...sliderSettings} className="hero-slider">
          {sliderItems.map((slide, index) => (
            <div key={slide.id} className="slider-item">
              <div className="slider-image-container">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slider-image"
                />
                <div className="slider-overlay"></div>
                <motion.div
                  className="slider-content"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* <h1 className="slider-title">{slide.title}</h1> */}
                  {/* <p className="slider-subtitle">{slide.subtitle}</p> */}
                  {/* <motion.button 
                    className="slider-cta"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/products">{slide.cta}</Link>
                  </motion.button> */}
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="hero-title">
              Your Trusted Partner in
              <span className="highlight"> Control Equipment</span>
            </h1>
            <p className="hero-subtitle">
              Leading supplier of building automation, controls, and HVAC
              solutions. Serving Utah and beyond with quality products and
              exceptional service.
            </p>
            <div className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/products">Shop Products</Link>
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">Get Quote</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="shop-categories">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Shop by Category</h2>
            <p>
              Browse our comprehensive range of control equipment by category
            </p>
          </motion.div>

          <motion.div
            className="categories-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="category-card" variants={fadeInUp}>
              <div className="category-icon">🔥</div>
              <h3>Boiler Control</h3>
              <p>Advanced boiler control systems and solutions</p>
              <Link
                to="/products?category=boiler-control"
                className="category-link"
              >
                Shop Now
              </Link>
            </motion.div>

            <motion.div className="category-card" variants={fadeInUp}>
              <div className="category-icon">🏢</div>
              <h3>Building Automation</h3>
              <p>Smart building automation and control systems</p>
              <Link
                to="/products?category=building-automation"
                className="category-link"
              >
                Shop Now
              </Link>
            </motion.div>

            <motion.div className="category-card" variants={fadeInUp}>
              <div className="category-icon">⛽</div>
              <h3>Gas Products</h3>
              <p>Gas control and safety equipment solutions</p>
              <Link
                to="/products?category=gas-products"
                className="category-link"
              >
                Shop Now
              </Link>
            </motion.div>

            <motion.div className="category-card" variants={fadeInUp}>
              <div className="category-icon">⚙️</div>
              <h3>Equipment</h3>
              <p>Professional HVAC and control equipment</p>
              <Link to="/products?category=equipment" className="category-link">
                Shop Now
              </Link>
            </motion.div>

            <motion.div className="category-card" variants={fadeInUp}>
              <div className="category-icon">🔧</div>
              <h3>Components</h3>
              <p>High-quality control system components</p>
              <Link
                to="/products?category=components"
                className="category-link"
              >
                Shop Now
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="view-all-categories"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/products" className="btn btn-outline">
              View All Categories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <div className="container">
          <motion.div
            className="quick-actions-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="quick-action-card" variants={fadeInUp}>
              <div className="quick-action-icon">📞</div>
              <h3>Call Us</h3>
              <p>385-503-0820</p>
              <a href="tel:385-503-0820" className="quick-action-link">
                Call Now
              </a>
            </motion.div>

            <motion.div className="quick-action-card" variants={fadeInUp}>
              <div className="quick-action-icon">🛒</div>
              <h3>Quick Order</h3>
              <p>Fast online ordering</p>
              <Link to="/products" className="quick-action-link">
                Order Now
              </Link>
            </motion.div>

            <motion.div className="quick-action-card" variants={fadeInUp}>
              <div className="quick-action-icon">📍</div>
              <h3>Find Branch</h3>
              <p>Locate nearest branch</p>
              <Link to="/contact" className="quick-action-link">
                Find Location
              </Link>
            </motion.div>

            <motion.div className="quick-action-card" variants={fadeInUp}>
              <div className="quick-action-icon">📚</div>
              <h3>Training</h3>
              <p>Learn from experts</p>
              <Link to="/training" className="quick-action-link">
                View Courses
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Featured Products</h2>
            <p>
              Discover our most popular HVAC and building automation solutions
            </p>
          </motion.div>

          <Slider
            dots
            infinite={false}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={4000}
            arrows
            swipe
            swipeToSlide
            adaptiveHeight
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 708,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false, // cleaner on mobile
                  centerMode: false, // <- important
                  centerPadding: "0px", // <- important
                  variableWidth: false, // <- important
                },
              },
            ]}
            className="products-slider"
          >
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="product-slide">
                <motion.div
                  className="product-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-category">{product.category}</div>
                    <div className="product-price__home">${product.price}</div>
                  </div>
                  <div className="product-content">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <Link to="/products" className="product-link">
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          <motion.div
            className="view-all-products"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/products" className="btn btn-outline">
              View All Products
            </Link>
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
            <h2>Why Choose Us</h2>
            <p>
              Comprehensive solutions backed by decades of industry experience
            </p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              <div className="stat-label">Years Experience</div>
            </motion.div>

            <motion.div
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="stat-number">1000+</div>
              <div className="stat-label">Happy Customers</div>
            </motion.div>

            <motion.div
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Staff</div>
            </motion.div>

            <motion.div
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
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
            <p>
              Contact our team today for expert advice and competitive quotes
            </p>
            <div className="cta-buttons">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about">Learn More</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
