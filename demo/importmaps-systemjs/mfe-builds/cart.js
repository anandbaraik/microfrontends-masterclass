// ../module-federation/cart/src/Cart.jsx
import React, { useState, useEffect } from "react";
if (!window.eventBus) {
  window.eventBus = {
    emit: (event, data) => console.log("[Mock EventBus]", event, data),
    on: (event, handler) => console.log("[Mock EventBus] Listener added for:", event),
    off: (event, handler) => console.log("[Mock EventBus] Listener removed for:", event)
  };
}
var Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    const handleAddToCart = (event) => {
      const { product } = event.detail;
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        let newItems;
        if (existingItem) {
          newItems = prevItems.map(
            (item) => item.id === product.id ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item
          );
        } else {
          newItems = [...prevItems, { ...product, quantity: product.quantity || 1 }];
        }
        localStorage.setItem("cart", JSON.stringify(newItems));
        window.eventBus.emit("cart:update", { items: newItems });
        return newItems;
      });
    };
    const handleRemoveFromCart = (event) => {
      const { productId } = event.detail;
      setCartItems((prevItems) => {
        const newItems = prevItems.filter((item) => item.id !== productId);
        localStorage.setItem("cart", JSON.stringify(newItems));
        window.eventBus.emit("cart:update", { items: newItems });
        return newItems;
      });
    };
    const handleClearCart = () => {
      setCartItems([]);
      localStorage.removeItem("cart");
      window.eventBus.emit("cart:update", { items: [] });
    };
    window.eventBus.on("cart:add", handleAddToCart);
    window.eventBus.on("cart:remove", handleRemoveFromCart);
    window.eventBus.on("cart:clear", handleClearCart);
    return () => {
      window.eventBus.off("cart:add", handleAddToCart);
      window.eventBus.off("cart:remove", handleRemoveFromCart);
      window.eventBus.off("cart:clear", handleClearCart);
    };
  }, []);
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    const newItems = cartItems.map(
      (item) => item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
    window.eventBus.emit("cart:update", { items: newItems });
  };
  const removeItem = (id) => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
    window.eventBus.emit("cart:update", { items: newItems });
    window.eventBus.emit("notification:show", {
      type: "info",
      message: "Item removed from cart"
    });
  };
  const applyPromoCode = () => {
    const promoCodes = {
      "SAVE10": 10,
      "SAVE20": 20,
      "WELCOME": 15
    };
    if (promoCodes[promoCode]) {
      setDiscount(promoCodes[promoCode]);
      window.eventBus.emit("notification:show", {
        type: "success",
        message: `Promo code applied! ${promoCodes[promoCode]}% discount`
      });
    } else {
      window.eventBus.emit("notification:show", {
        type: "error",
        message: "Invalid promo code"
      });
    }
  };
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const calculateTax = () => {
    return calculateSubtotal() * 0.08;
  };
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = subtotal * discount / 100;
    return subtotal - discountAmount + calculateTax();
  };
  const proceedToCheckout = () => {
    window.eventBus.emit("navigate", { route: "checkout" });
    window.eventBus.emit("checkout:init", {
      items: cartItems,
      subtotal: calculateSubtotal(),
      tax: calculateTax(),
      discount,
      total: calculateTotal()
    });
  };
  return /* @__PURE__ */ React.createElement("div", { className: "cart-container" }, /* @__PURE__ */ React.createElement("h1", null, "Shopping Cart"), cartItems.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "empty-cart" }, /* @__PURE__ */ React.createElement("div", { className: "empty-cart-icon" }, "\u{1F6D2}"), /* @__PURE__ */ React.createElement("h2", null, "Your cart is empty"), /* @__PURE__ */ React.createElement("p", null, "Add some products to get started!"), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "continue-shopping-btn",
      onClick: () => window.eventBus.emit("navigate", { route: "products" })
    },
    "Continue Shopping"
  )) : /* @__PURE__ */ React.createElement("div", { className: "cart-content" }, /* @__PURE__ */ React.createElement("div", { className: "cart-items" }, /* @__PURE__ */ React.createElement("h2", null, "Items (", cartItems.length, ")"), cartItems.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.id, className: "cart-item" }, /* @__PURE__ */ React.createElement("div", { className: "item-image" }, item.image), /* @__PURE__ */ React.createElement("div", { className: "item-details" }, /* @__PURE__ */ React.createElement("h3", null, item.name), /* @__PURE__ */ React.createElement("p", { className: "item-price" }, "$", item.price.toFixed(2))), /* @__PURE__ */ React.createElement("div", { className: "quantity-controls" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => updateQuantity(item.id, item.quantity - 1),
      className: "quantity-btn"
    },
    "-"
  ), /* @__PURE__ */ React.createElement("span", { className: "quantity" }, item.quantity), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => updateQuantity(item.id, item.quantity + 1),
      className: "quantity-btn"
    },
    "+"
  )), /* @__PURE__ */ React.createElement("div", { className: "item-total" }, "$", (item.price * item.quantity).toFixed(2)), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => removeItem(item.id),
      className: "remove-btn",
      title: "Remove item"
    },
    "\u274C"
  )))), /* @__PURE__ */ React.createElement("div", { className: "cart-summary" }, /* @__PURE__ */ React.createElement("h2", null, "Order Summary"), /* @__PURE__ */ React.createElement("div", { className: "promo-code-section" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "Enter promo code",
      value: promoCode,
      onChange: (e) => setPromoCode(e.target.value.toUpperCase()),
      className: "promo-input"
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: applyPromoCode, className: "apply-btn" }, "Apply")), /* @__PURE__ */ React.createElement("div", { className: "summary-details" }, /* @__PURE__ */ React.createElement("div", { className: "summary-row" }, /* @__PURE__ */ React.createElement("span", null, "Subtotal:"), /* @__PURE__ */ React.createElement("span", null, "$", calculateSubtotal().toFixed(2))), discount > 0 && /* @__PURE__ */ React.createElement("div", { className: "summary-row discount" }, /* @__PURE__ */ React.createElement("span", null, "Discount (", discount, "%):"), /* @__PURE__ */ React.createElement("span", null, "-$", (calculateSubtotal() * discount / 100).toFixed(2))), /* @__PURE__ */ React.createElement("div", { className: "summary-row" }, /* @__PURE__ */ React.createElement("span", null, "Tax (8%):"), /* @__PURE__ */ React.createElement("span", null, "$", calculateTax().toFixed(2))), /* @__PURE__ */ React.createElement("div", { className: "summary-row total" }, /* @__PURE__ */ React.createElement("span", null, "Total:"), /* @__PURE__ */ React.createElement("span", null, "$", calculateTotal().toFixed(2)))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: proceedToCheckout,
      className: "checkout-btn"
    },
    "Proceed to Checkout"
  ))), /* @__PURE__ */ React.createElement("div", { className: "event-info" }, /* @__PURE__ */ React.createElement("h3", null, "\u{1F504} Event-Based Communication"), /* @__PURE__ */ React.createElement("p", null, "This Cart MFE demonstrates:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Listening for 'cart:add', 'cart:remove', 'cart:clear' events"), /* @__PURE__ */ React.createElement("li", null, "Emitting 'cart:update' when cart changes"), /* @__PURE__ */ React.createElement("li", null, "Triggering 'navigate' event for checkout"), /* @__PURE__ */ React.createElement("li", null, "Sending 'checkout:init' with cart data"), /* @__PURE__ */ React.createElement("li", null, "Persisting cart in localStorage for session continuity"))));
};
var Cart_default = Cart;
export {
  Cart_default as default
};
