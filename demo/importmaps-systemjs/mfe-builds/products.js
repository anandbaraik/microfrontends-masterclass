// ../module-federation/product-catalog/src/ProductCatalog.jsx
import React, { useState, useEffect } from "react";
if (!window.eventBus) {
  window.eventBus = {
    emit: (event, data) => console.log("[Mock EventBus]", event, data),
    on: (event, handler) => console.log("[Mock EventBus] Listener added for:", event),
    off: (event, handler) => console.log("[Mock EventBus] Listener removed for:", event)
  };
}
var ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const mockProducts = [
    { id: 1, name: "Wireless Headphones", price: 99.99, category: "Electronics", rating: 4.5, image: "\u{1F3A7}" },
    { id: 2, name: "Smart Watch", price: 299.99, category: "Electronics", rating: 4.7, image: "\u231A" },
    { id: 3, name: "Running Shoes", price: 89.99, category: "Sports", rating: 4.3, image: "\u{1F45F}" },
    { id: 4, name: "Yoga Mat", price: 29.99, category: "Sports", rating: 4.6, image: "\u{1F9D8}" },
    { id: 5, name: "Coffee Maker", price: 149.99, category: "Home", rating: 4.4, image: "\u2615" },
    { id: 6, name: "Desk Lamp", price: 39.99, category: "Home", rating: 4.2, image: "\u{1F4A1}" },
    { id: 7, name: "Backpack", price: 59.99, category: "Fashion", rating: 4.5, image: "\u{1F392}" },
    { id: 8, name: "Sunglasses", price: 129.99, category: "Fashion", rating: 4.8, image: "\u{1F576}\uFE0F" },
    { id: 9, name: "Bluetooth Speaker", price: 79.99, category: "Electronics", rating: 4.6, image: "\u{1F50A}" },
    { id: 10, name: "Water Bottle", price: 24.99, category: "Sports", rating: 4.4, image: "\u{1F4A7}" }
  ];
  useEffect(() => {
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
    const handleProductSearch = (event) => {
      setSearchTerm(event.detail.searchTerm || "");
      if (event.detail.category) {
        setSelectedCategory(event.detail.category);
      }
    };
    window.eventBus.on("product:search", handleProductSearch);
    return () => {
      window.eventBus.off("product:search", handleProductSearch);
    };
  }, []);
  useEffect(() => {
    let filtered = products;
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm, sortBy]);
  const handleAddToCart = (product) => {
    window.eventBus.emit("cart:add", {
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }
    });
    window.eventBus.emit("notification:show", {
      type: "success",
      message: `${product.name} added to cart!`,
      duration: 3e3
    });
  };
  const handleProductView = (product) => {
    window.eventBus.emit("product:viewed", {
      productId: product.id,
      productName: product.name,
      category: product.category
    });
  };
  const categories = ["all", ...new Set(products.map((p) => p.category))];
  return /* @__PURE__ */ React.createElement("div", { className: "product-catalog-container" }, /* @__PURE__ */ React.createElement("div", { className: "catalog-header" }, /* @__PURE__ */ React.createElement("h1", null, "Product Catalog"), /* @__PURE__ */ React.createElement("p", null, "Explore our wide range of products")), /* @__PURE__ */ React.createElement("div", { className: "catalog-controls" }, /* @__PURE__ */ React.createElement("div", { className: "search-bar" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "Search products...",
      value: searchTerm,
      onChange: (e) => setSearchTerm(e.target.value)
    }
  ), /* @__PURE__ */ React.createElement("span", { className: "search-icon" }, "\u{1F50D}")), /* @__PURE__ */ React.createElement("div", { className: "filter-controls" }, /* @__PURE__ */ React.createElement(
    "select",
    {
      value: selectedCategory,
      onChange: (e) => setSelectedCategory(e.target.value),
      className: "category-filter"
    },
    categories.map((cat) => /* @__PURE__ */ React.createElement("option", { key: cat, value: cat }, cat === "all" ? "All Categories" : cat))
  ), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: sortBy,
      onChange: (e) => setSortBy(e.target.value),
      className: "sort-filter"
    },
    /* @__PURE__ */ React.createElement("option", { value: "name" }, "Sort by Name"),
    /* @__PURE__ */ React.createElement("option", { value: "price-low" }, "Price: Low to High"),
    /* @__PURE__ */ React.createElement("option", { value: "price-high" }, "Price: High to Low"),
    /* @__PURE__ */ React.createElement("option", { value: "rating" }, "Highest Rated")
  ))), /* @__PURE__ */ React.createElement("div", { className: "results-info" }, "Showing ", filteredProducts.length, " of ", products.length, " products"), /* @__PURE__ */ React.createElement("div", { className: "products-grid" }, filteredProducts.map((product) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: product.id,
      className: "product-card",
      onClick: () => handleProductView(product)
    },
    /* @__PURE__ */ React.createElement("div", { className: "product-image" }, product.image),
    /* @__PURE__ */ React.createElement("div", { className: "product-info" }, /* @__PURE__ */ React.createElement("h3", null, product.name), /* @__PURE__ */ React.createElement("p", { className: "product-category" }, product.category), /* @__PURE__ */ React.createElement("div", { className: "product-rating" }, "\u2B50".repeat(Math.floor(product.rating)), " ", product.rating), /* @__PURE__ */ React.createElement("div", { className: "product-footer" }, /* @__PURE__ */ React.createElement("span", { className: "product-price" }, "$", product.price), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "add-to-cart-btn",
        onClick: (e) => {
          e.stopPropagation();
          handleAddToCart(product);
        }
      },
      "Add to Cart"
    )))
  ))), filteredProducts.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "no-products" }, /* @__PURE__ */ React.createElement("p", null, "No products found matching your criteria")), /* @__PURE__ */ React.createElement("div", { className: "communication-info" }, /* @__PURE__ */ React.createElement("h3", null, "\u{1F4AC} Cross-MFE Communication"), /* @__PURE__ */ React.createElement("p", null, "This Product Catalog MFE demonstrates:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Emitting 'cart:add' events when products are added to cart"), /* @__PURE__ */ React.createElement("li", null, "Listening for 'product:search' events from other MFEs"), /* @__PURE__ */ React.createElement("li", null, "Sending 'product:viewed' analytics events"), /* @__PURE__ */ React.createElement("li", null, "Broadcasting 'notification:show' for user feedback"))));
};
var ProductCatalog_default = ProductCatalog;
export {
  ProductCatalog_default as default
};
