import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProductsPage.css";
import { wireProducts } from "../data/wireProducts";
import { gasProducts } from "../data/gasProducts";
import { boilerProducts } from "../data/boilerProducts";
import { buildingProducts } from "../data/buildingProducts";
import { vavBoxProducts } from "../data/vavBoxProducts";
import { equipmentProducts } from "../data/equipmentProducts";
import { testingProducts } from "../data/testingProducts";
import { refrigerantProducts } from "../data/refrigerantProducts";
import { componentProducts } from "../data/componentProducts";
import { airQualityProducts } from "../data/airQualityProducts";

const categories = [
  { id: "boiler-control", name: "Boiler Control", icon: "🔥" },
  { id: "refrigerants", name: "HVAC Refrigerants", icon: "❄️" },
  { id: "components", name: "Components", icon: "🔧" },
  { id: "gas-products", name: "Gas Products", icon: "⛽" },
  { id: "wire", name: "Wire & Cable", icon: "🔌" },
  { id: "vav-boxes", name: "VAV Boxes & Dampers", icon: "💨" },
  { id: "testing", name: "Testing & Tools", icon: "🧪" },
  { id: "equipment", name: "Equipment", icon: "⚙️" },
  { id: "air-quality", name: "Air Quality Monitoring", icon: "🌬️" },
  { id: "building-automation", name: "Building Automation", icon: "🏢" },
];

const PRODUCTS_PER_PAGE = 10;
const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.id || null
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    ...boilerProducts,
    ...buildingProducts,
    ...gasProducts,
    ...wireProducts,
    ...vavBoxProducts,
    ...equipmentProducts,
    ...testingProducts,
    ...refrigerantProducts,
    ...componentProducts,
    ...airQualityProducts,
  ];

  // Search only categories
  // const filteredCategories = categories.filter((cat) =>
  //   cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredCategories = categories.filter((cat) =>
    products.some(
      (p) =>
        p.category === cat.id &&
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // const filteredProducts = products.filter((p) => {
  //   const matchesCategory = selectedCategory
  //     ? p.category === selectedCategory
  //     : true;
  //   const matchesSearch = p.name
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });
  // Filter products by search term and optionally by selected category
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? p.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

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

  // Set the first category as default on mount (optional, already handled by initial state)
  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0].id);
    }
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // optional scroll to top
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.div
            className="header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Products & Solutions</h1>
            <p>
              Discover our comprehensive range of HVAC controls, building
              automation, and industrial solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="search-filters">
        <div className="container">
          <motion.div
            className="filters-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-button">🔍</button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Shop by Category</h3>
          <ul className="category-list">
            {filteredCategories.map((cat) => (
              <li key={cat.id} className="category-item">
                <button
                  className={`category-filter ${
                    selectedCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="category-icon">{cat.icon}</span>
                  <span className="category-name">{cat.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Section */}
        <main className="content-area">
          {selectedCategory && (
            <section className="products-section">
              <motion.div
                className="products-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2>
                  {categories.find((cat) => cat.id === selectedCategory)?.name}{" "}
                  Products ({filteredProducts.length})
                </h2>
              </motion.div>

              {paginatedProducts.length === 0 ? (
                <motion.div
                  className="no-products"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="no-products-icon">🔍</div>
                  <h3>No products available</h3>
                  <p>Try selecting a different category.</p>
                </motion.div>
              ) : (
                <>
                  <motion.div
                    className="products-grid"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {paginatedProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        className="product-card"
                        variants={fadeInUp}
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="product-image">
                          <img src={product.image} alt={product.name} />
                          <div className="product-badges">
                            <span className="badge rating">
                              ⭐ {product.rating}
                            </span>
                          </div>
                        </div>
                        <div className="product-content">
                          <h3 className="product-name">{product.name}</h3>
                          {/* <p className="product-description">
                            {product.description}
                          </p> */}
                          <div className="product-specs">
                            {product.specs.slice(0, 3).map((spec, index) => (
                              <span key={index} className="spec-tag">
                                {spec}
                              </span>
                            ))}
                          </div>
                          <div className="product-footer">
                            <div className="product-price">{product.price}</div>
                            <div className="product-actions">
                              <button
                                className="btn btn-primary"
                                onClick={() => openModal(product)}
                              >
                                Details
                              </button>
                              {/* <button
                                className={`btn ${
                                  product.inStock
                                    ? "btn-primary"
                                    : "btn-disabled"
                                }`}
                                disabled={!product.inStock}
                              >
                                {product.inStock
                                  ? "Add to Cart"
                                  : "Out of Stock"}
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Pagination Controls */}
                  {/* <div className="pagination">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div> */}
                  {totalPages > 1 && (
                    <div className="pagination">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Prev
                      </button>

                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handlePageChange(index + 1)}
                          className={currentPage === index + 1 ? "active" : ""}
                        >
                          {index + 1}
                        </button>
                      ))}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </section>
          )}
        </main>
      </div>

      {/* Quick Order Section */}
      <section className="quick-order-section">
        <div className="container">
          <motion.div
            className="quick-order-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Need Help Finding the Right Product?</h2>
            <p>
              Our technical experts are here to help you select the perfect
              solution for your needs
            </p>
            <div className="quick-order-buttons">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">Contact Sales Team</Link>
              </motion.button>
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="tel:385-503-0820">Call 385-503-0820</a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              <h2>{selectedProduct.name}</h2>
              <div className="modal-images">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                {/* Add more images if product.images is an array */}
              </div>
              <p>{selectedProduct.description}</p>
              <div className="modal-specs">
                {selectedProduct.specs.map((spec, idx) => (
                  <span key={idx} className="spec-tag">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="modal-footer">
                <div className="product-price">{selectedProduct.price}</div>
                {/* <button
                  className={`btn ${
                    selectedProduct.inStock ? "btn-primary" : "btn-disabled"
                  }`}
                  disabled={!selectedProduct.inStock}
                >
                  {selectedProduct.inStock ? "Add to Cart" : "Out of Stock"}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
