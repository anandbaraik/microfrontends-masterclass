// ../module-federation/checkout/src/Checkout.jsx
import React, { useState, useEffect } from "react";
if (!window.eventBus) {
  window.eventBus = {
    emit: (event, data) => console.log("[Mock EventBus]", event, data),
    on: (event, handler) => console.log("[Mock EventBus] Listener added for:", event),
    off: (event, handler) => console.log("[Mock EventBus] Listener removed for:", event)
  };
}
var Checkout = ({ items = [], user = null }) => {
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });
  const calculateTotal = () => {
    const subtotal2 = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax2 = subtotal2 * 0.08;
    return {
      subtotal: subtotal2,
      tax: tax2,
      total: subtotal2 + tax2
    };
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    window.eventBus.emit("notification:show", {
      type: "success",
      message: `Order ${orderId} placed successfully!`
    });
    window.eventBus.emit("cart:clear");
    setTimeout(() => {
      window.eventBus.emit("navigate", { route: "orders" });
    }, 2e3);
  };
  const { subtotal, tax, total } = calculateTotal();
  if (items.length === 0) {
    return /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "3rem" } }, /* @__PURE__ */ React.createElement("h2", null, "No items in checkout"), /* @__PURE__ */ React.createElement("p", null, "Please add items to your cart first"), /* @__PURE__ */ React.createElement("button", { onClick: () => window.eventBus.emit("navigate", { route: "cart" }) }, "Back to Cart"));
  }
  return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "2rem" } }, /* @__PURE__ */ React.createElement("h1", null, "Checkout"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 400px", gap: "2rem" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "white", padding: "2rem", borderRadius: "10px" } }, /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ React.createElement("h2", null, "Shipping Information"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "fullName",
      placeholder: "Full Name",
      value: formData.fullName,
      onChange: handleInputChange,
      required: true,
      style: { width: "100%", padding: "0.75rem", marginBottom: "1rem" }
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      value: formData.email,
      onChange: handleInputChange,
      required: true,
      style: { width: "100%", padding: "0.75rem", marginBottom: "1rem" }
    }
  ), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "address",
      placeholder: "Address",
      value: formData.address,
      onChange: handleInputChange,
      required: true,
      style: { width: "100%", padding: "0.75rem", marginBottom: "1rem" }
    }
  ), /* @__PURE__ */ React.createElement("h2", null, "Payment Information"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "cardNumber",
      placeholder: "Card Number",
      value: formData.cardNumber,
      onChange: handleInputChange,
      required: true,
      style: { width: "100%", padding: "0.75rem", marginBottom: "1rem" }
    }
  ), /* @__PURE__ */ React.createElement("button", { type: "submit", style: {
    width: "100%",
    padding: "1rem",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.1rem",
    cursor: "pointer"
  } }, "Place Order"))), /* @__PURE__ */ React.createElement("div", { style: { background: "white", padding: "2rem", borderRadius: "10px", height: "fit-content" } }, /* @__PURE__ */ React.createElement("h2", null, "Order Summary"), items.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.id, style: { display: "flex", justifyContent: "space-between", marginBottom: "1rem" } }, /* @__PURE__ */ React.createElement("span", null, item.name, " x", item.quantity), /* @__PURE__ */ React.createElement("span", null, "$", (item.price * item.quantity).toFixed(2)))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: "1rem" } }, /* @__PURE__ */ React.createElement("span", null, "Subtotal:"), /* @__PURE__ */ React.createElement("span", null, "$", subtotal.toFixed(2))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", null, "Tax:"), /* @__PURE__ */ React.createElement("span", null, "$", tax.toFixed(2))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "1.2rem", marginTop: "1rem" } }, /* @__PURE__ */ React.createElement("span", null, "Total:"), /* @__PURE__ */ React.createElement("span", null, "$", total.toFixed(2))))));
};
var Checkout_default = Checkout;
export {
  Checkout_default as default
};
