import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (menu) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  const handleDropdownHover = (menu) => {
    if (!isMobile) setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    if (!isMobile) setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      {/* Mobile Backdrop */}
      {isMenuOpen && isMobile && (
        <div className="mobile-backdrop" onClick={toggleMenu}></div>
      )}

      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <a href="tel:385-503-0820" className="phone-link">
              Call us: 385-503-0820
            </a>
          </div>
          <div className="top-bar-actions">
            {/* <span className="cart-info">Cart (0)</span> */}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="container navigation">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img
                width={100}
                src="https://i.ibb.co/FLdNhLb3/logo-ce.png"
                alt="Control Equipment"
              />
            </Link>
          </div>

          {/* Hamburger Toggle */}
          <button
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            {/* Mobile Close Button */}
            {/* {isMobile && isMenuOpen && (
              <li className="nav-item mobile-menu-header">
                <button className="mobile-close-btn" onClick={toggleMenu}>
                  ✕
                </button>
              </li>
            )} */}

            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>

            {/* Products Dropdown */}
            <li
              className="nav-item dropdown"
              {...(!isMobile && {
                onMouseEnter: () => handleDropdownHover("products"),
                onMouseLeave: handleDropdownLeave,
              })}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownClick("products")}
              >
                Products
              </button>
              {activeDropdown === "products" && (
                <div className="dropdown-menu">
                  <Link
                    to="/products"
                    className="dropdown-item"
                    onClick={toggleMenu}
                  >
                    All Products
                  </Link>
                  {/* <a href="#" className="dropdown-item">
                    Quick Order
                  </a>
                  <a href="#" className="dropdown-item">
                    Categories
                  </a>
                  <a href="#" className="dropdown-item">
                    Shopping Cart
                  </a>
                  <a href="#" className="dropdown-item">
                    Favorites
                  </a>
                  <a href="#" className="dropdown-item">
                    Software Downloads
                  </a> */}
                </div>
              )}
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link ${isActive("/services") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/training"
                className={`nav-link ${isActive("/training") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Training
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>

            {/* My Account Dropdown */}
            {/* <li
              className="nav-item dropdown"
              {...(!isMobile && {
                onMouseEnter: () => handleDropdownHover("account"),
                onMouseLeave: handleDropdownLeave,
              })}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={() => handleDropdownClick("account")}
              >
                My Account
              </button>
              {activeDropdown === "account" && (
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    My Account Home
                  </a>
                  <a href="#" className="dropdown-item">
                    Recent Web Orders
                  </a>
                  <a href="#" className="dropdown-item">
                    View Invoices
                  </a>
                  <a href="#" className="dropdown-item">
                    Current Statement
                  </a>
                  <a href="#" className="dropdown-item">
                    Purchase History
                  </a>
                  <a href="#" className="dropdown-item">
                    Item History
                  </a>
                  <a href="#" className="dropdown-item">
                    Saved Carts
                  </a>
                  <a href="#" className="dropdown-item">
                    Favorites
                  </a>
                  <a href="#" className="dropdown-item">
                    Frequent Items
                  </a>
                </div>
              )}
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
