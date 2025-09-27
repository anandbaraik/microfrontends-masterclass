// ../module-federation/orders/src/Orders.jsx
import React, { useState } from "react";
if (!window.eventBus) {
  window.eventBus = {
    emit: (event, data) => console.log("[Mock EventBus]", event, data),
    on: (event, handler) => console.log("[Mock EventBus] Listener added for:", event),
    off: (event, handler) => console.log("[Mock EventBus] Listener removed for:", event)
  };
}
var Orders = ({ user = null }) => {
  const [orders] = useState([
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 459.97,
      items: [
        { name: "Laptop", quantity: 1, price: 399.99 },
        { name: "Mouse", quantity: 2, price: 29.99 }
      ]
    },
    {
      id: "ORD-002",
      date: "2024-01-20",
      status: "Shipped",
      total: 189.98,
      items: [
        { name: "Headphones", quantity: 1, price: 149.99 },
        { name: "USB Cable", quantity: 2, price: 19.99 }
      ]
    }
  ]);
  if (!user) {
    return /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "3rem" } }, /* @__PURE__ */ React.createElement("h2", null, "Please log in to view orders"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
      window.eventBus.emit("user:login", {
        user: { id: 1, name: "John Doe", email: "john@example.com" }
      });
    }, style: {
      padding: "0.75rem 2rem",
      background: "#667eea",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    } }, "Log In"));
  }
  return /* @__PURE__ */ React.createElement("div", { style: { maxWidth: "1200px", margin: "0 auto", padding: "2rem" } }, /* @__PURE__ */ React.createElement("h1", null, "My Orders"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: "1.5rem" } }, orders.map((order) => /* @__PURE__ */ React.createElement("div", { key: order.id, style: {
    background: "white",
    borderRadius: "10px",
    padding: "2rem",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "1rem" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "Order #", order.id), /* @__PURE__ */ React.createElement("p", { style: { color: "#666" } }, "Placed on ", new Date(order.date).toLocaleDateString())), /* @__PURE__ */ React.createElement("span", { style: {
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    background: order.status === "Delivered" ? "#d4edda" : "#cce5ff",
    color: order.status === "Delivered" ? "#155724" : "#004085"
  } }, order.status)), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "1rem" } }, order.items.map((item, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, style: { display: "flex", justifyContent: "space-between", padding: "0.5rem 0" } }, /* @__PURE__ */ React.createElement("span", null, item.name, " x", item.quantity), /* @__PURE__ */ React.createElement("span", null, "$", (item.price * item.quantity).toFixed(2))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eee", paddingTop: "1rem" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "1.2rem", fontWeight: "bold" } }, "Total: $", order.total.toFixed(2)), /* @__PURE__ */ React.createElement("button", { style: {
    padding: "0.5rem 1.5rem",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  } }, "Track Order"))))));
};
var Orders_default = Orders;
export {
  Orders_default as default
};
