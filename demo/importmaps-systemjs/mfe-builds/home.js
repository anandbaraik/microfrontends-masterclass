// ../module-federation/home/src/Home.jsx
import React, { useEffect, useState } from "react";
if (!window.eventBus) {
  window.eventBus = {
    emit: (event, data) => console.log("[Mock EventBus]", event, data),
    on: (event, handler) => console.log("[Mock EventBus] Listener added for:", event),
    off: (event, handler) => console.log("[Mock EventBus] Listener removed for:", event)
  };
}
var Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setFeaturedProducts([
      { id: 1, name: "Wireless Headphones", price: 99.99, image: "\u{1F3A7}" },
      { id: 2, name: "Smart Watch", price: 299.99, image: "\u231A" },
      { id: 3, name: "Laptop Stand", price: 49.99, image: "\u{1F4BB}" },
      { id: 4, name: "USB-C Hub", price: 79.99, image: "\u{1F50C}" }
    ]);
    setCategories([
      { id: 1, name: "Electronics", icon: "\u{1F4F1}", count: 156 },
      { id: 2, name: "Fashion", icon: "\u{1F454}", count: 243 },
      { id: 3, name: "Home & Garden", icon: "\u{1F3E1}", count: 89 },
      { id: 4, name: "Sports", icon: "\u26BD", count: 167 }
    ]);
  }, []);
  const handleProductClick = (product) => {
    window.eventBus.emit("product:selected", { product });
    window.eventBus.emit("navigate", { route: "products", productId: product.id });
  };
  const handleCategoryClick = (category) => {
    window.eventBus.emit("navigate", {
      route: "products",
      filter: { category: category.name }
    });
  };
  const handleQuickAddToCart = (product) => {
    window.eventBus.emit("cart:add", {
      product: {
        ...product,
        quantity: 1
      }
    });
    window.eventBus.emit("notification:show", {
      type: "success",
      message: `${product.name} added to cart!`
    });
  };
  return /* @__PURE__ */ React.createElement("div", { className: "home-container" }, /* @__PURE__ */ React.createElement("section", { className: "hero-section" }, /* @__PURE__ */ React.createElement("div", { className: "hero-content" }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to E-Commerce MFE"), /* @__PURE__ */ React.createElement("p", null, "Discover amazing products with Module Federation architecture"), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "cta-button",
      onClick: () => window.eventBus.emit("navigate", { route: "products" })
    },
    "Shop Now \u2192"
  )), /* @__PURE__ */ React.createElement("div", { className: "hero-stats" }, /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("span", { className: "stat-number" }, "5"), /* @__PURE__ */ React.createElement("span", { className: "stat-label" }, "Microfrontends")), /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("span", { className: "stat-number" }, "1000+"), /* @__PURE__ */ React.createElement("span", { className: "stat-label" }, "Products")), /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("span", { className: "stat-number" }, "24/7"), /* @__PURE__ */ React.createElement("span", { className: "stat-label" }, "Support")))), /* @__PURE__ */ React.createElement("section", { className: "categories-section" }, /* @__PURE__ */ React.createElement("h2", null, "Shop by Category"), /* @__PURE__ */ React.createElement("div", { className: "categories-grid" }, categories.map((category) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: category.id,
      className: "category-card",
      onClick: () => handleCategoryClick(category)
    },
    /* @__PURE__ */ React.createElement("div", { className: "category-icon" }, category.icon),
    /* @__PURE__ */ React.createElement("h3", null, category.name),
    /* @__PURE__ */ React.createElement("p", null, category.count, " products")
  )))), /* @__PURE__ */ React.createElement("section", { className: "featured-section" }, /* @__PURE__ */ React.createElement("h2", null, "Featured Products"), /* @__PURE__ */ React.createElement("div", { className: "products-grid" }, featuredProducts.map((product) => /* @__PURE__ */ React.createElement("div", { key: product.id, className: "product-card" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "product-image",
      onClick: () => handleProductClick(product)
    },
    product.image
  ), /* @__PURE__ */ React.createElement("h3", null, product.name), /* @__PURE__ */ React.createElement("p", { className: "product-price" }, "$", product.price), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "add-to-cart-btn",
      onClick: () => handleQuickAddToCart(product)
    },
    "Add to Cart"
  ))))), /* @__PURE__ */ React.createElement("section", { className: "info-section" }, /* @__PURE__ */ React.createElement("h2", null, "Cross-MFE Communication Demo"), /* @__PURE__ */ React.createElement("div", { className: "info-grid" }, /* @__PURE__ */ React.createElement("div", { className: "info-card" }, /* @__PURE__ */ React.createElement("h3", null, "\u{1F4E1} Event Bus"), /* @__PURE__ */ React.createElement("p", null, "Click products or categories to see events being emitted across MFEs")), /* @__PURE__ */ React.createElement("div", { className: "info-card" }, /* @__PURE__ */ React.createElement("h3", null, "\u{1F504} Real-time Updates"), /* @__PURE__ */ React.createElement("p", null, "Cart count updates instantly when items are added")), /* @__PURE__ */ React.createElement("div", { className: "info-card" }, /* @__PURE__ */ React.createElement("h3", null, "\u{1F3AF} Independent Deployment"), /* @__PURE__ */ React.createElement("p", null, "Each MFE can be deployed separately")))));
};
var Home_default = Home;
export {
  Home_default as default
};
