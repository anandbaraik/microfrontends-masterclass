/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["react","react-dom","single-spa-react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	var __WEBPACK_EXTERNAL_MODULE_single_spa_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_single_spa_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_single_spa_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../module-federation/cart/src/Cart.js":
/*!*********************************************!*\
  !*** ../module-federation/cart/src/Cart.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _Cart_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.jsx */ \"../module-federation/cart/src/Cart.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Cart_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/cart/src/Cart.js?\n}");

/***/ }),

/***/ "../module-federation/cart/src/Cart.jsx":
/*!**********************************************!*\
  !*** ../module-federation/cart/src/Cart.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _cart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.css */ \"../module-federation/cart/src/cart.css\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n// Initialize eventBus for standalone mode\nif (!window.eventBus) {\n  window.eventBus = {\n    emit: function emit(event, data) {\n      return console.log('[Mock EventBus]', event, data);\n    },\n    on: function on(event, handler) {\n      return console.log('[Mock EventBus] Listener added for:', event);\n    },\n    off: function off(event, handler) {\n      return console.log('[Mock EventBus] Listener removed for:', event);\n    }\n  };\n}\nvar Cart = function Cart() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    cartItems = _useState2[0],\n    setCartItems = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState4 = _slicedToArray(_useState3, 2),\n    promoCode = _useState4[0],\n    setPromoCode = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState6 = _slicedToArray(_useState5, 2),\n    discount = _useState6[0],\n    setDiscount = _useState6[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // Load cart from localStorage on mount\n    var savedCart = localStorage.getItem('cart');\n    if (savedCart) {\n      setCartItems(JSON.parse(savedCart));\n    }\n\n    // Listen for cart events\n    var handleAddToCart = function handleAddToCart(event) {\n      var product = event.detail.product;\n      setCartItems(function (prevItems) {\n        var existingItem = prevItems.find(function (item) {\n          return item.id === product.id;\n        });\n        var newItems;\n        if (existingItem) {\n          newItems = prevItems.map(function (item) {\n            return item.id === product.id ? _objectSpread(_objectSpread({}, item), {}, {\n              quantity: item.quantity + (product.quantity || 1)\n            }) : item;\n          });\n        } else {\n          newItems = [].concat(_toConsumableArray(prevItems), [_objectSpread(_objectSpread({}, product), {}, {\n            quantity: product.quantity || 1\n          })]);\n        }\n\n        // Save to localStorage\n        localStorage.setItem('cart', JSON.stringify(newItems));\n\n        // Emit update event\n        window.eventBus.emit('cart:update', {\n          items: newItems\n        });\n        return newItems;\n      });\n    };\n    var handleRemoveFromCart = function handleRemoveFromCart(event) {\n      var productId = event.detail.productId;\n      setCartItems(function (prevItems) {\n        var newItems = prevItems.filter(function (item) {\n          return item.id !== productId;\n        });\n        localStorage.setItem('cart', JSON.stringify(newItems));\n        window.eventBus.emit('cart:update', {\n          items: newItems\n        });\n        return newItems;\n      });\n    };\n    var handleClearCart = function handleClearCart() {\n      setCartItems([]);\n      localStorage.removeItem('cart');\n      window.eventBus.emit('cart:update', {\n        items: []\n      });\n    };\n    window.eventBus.on('cart:add', handleAddToCart);\n    window.eventBus.on('cart:remove', handleRemoveFromCart);\n    window.eventBus.on('cart:clear', handleClearCart);\n    return function () {\n      window.eventBus.off('cart:add', handleAddToCart);\n      window.eventBus.off('cart:remove', handleRemoveFromCart);\n      window.eventBus.off('cart:clear', handleClearCart);\n    };\n  }, []);\n  var updateQuantity = function updateQuantity(id, newQuantity) {\n    if (newQuantity <= 0) {\n      removeItem(id);\n      return;\n    }\n    var newItems = cartItems.map(function (item) {\n      return item.id === id ? _objectSpread(_objectSpread({}, item), {}, {\n        quantity: newQuantity\n      }) : item;\n    });\n    setCartItems(newItems);\n    localStorage.setItem('cart', JSON.stringify(newItems));\n    window.eventBus.emit('cart:update', {\n      items: newItems\n    });\n  };\n  var removeItem = function removeItem(id) {\n    var newItems = cartItems.filter(function (item) {\n      return item.id !== id;\n    });\n    setCartItems(newItems);\n    localStorage.setItem('cart', JSON.stringify(newItems));\n    window.eventBus.emit('cart:update', {\n      items: newItems\n    });\n    window.eventBus.emit('notification:show', {\n      type: 'info',\n      message: 'Item removed from cart'\n    });\n  };\n  var applyPromoCode = function applyPromoCode() {\n    // Mock promo code validation\n    var promoCodes = {\n      'SAVE10': 10,\n      'SAVE20': 20,\n      'WELCOME': 15\n    };\n    if (promoCodes[promoCode]) {\n      setDiscount(promoCodes[promoCode]);\n      window.eventBus.emit('notification:show', {\n        type: 'success',\n        message: \"Promo code applied! \".concat(promoCodes[promoCode], \"% discount\")\n      });\n    } else {\n      window.eventBus.emit('notification:show', {\n        type: 'error',\n        message: 'Invalid promo code'\n      });\n    }\n  };\n  var calculateSubtotal = function calculateSubtotal() {\n    return cartItems.reduce(function (total, item) {\n      return total + item.price * item.quantity;\n    }, 0);\n  };\n  var calculateTax = function calculateTax() {\n    return calculateSubtotal() * 0.08; // 8% tax\n  };\n  var calculateTotal = function calculateTotal() {\n    var subtotal = calculateSubtotal();\n    var discountAmount = subtotal * discount / 100;\n    return subtotal - discountAmount + calculateTax();\n  };\n  var proceedToCheckout = function proceedToCheckout() {\n    // Emit event to navigate to checkout\n    window.eventBus.emit('navigate', {\n      route: 'checkout'\n    });\n\n    // Pass cart data to checkout\n    window.eventBus.emit('checkout:init', {\n      items: cartItems,\n      subtotal: calculateSubtotal(),\n      tax: calculateTax(),\n      discount: discount,\n      total: calculateTotal()\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"cart-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", null, \"Shopping Cart\"), cartItems.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"empty-cart\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"empty-cart-icon\"\n  }, \"\\uD83D\\uDED2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Your cart is empty\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", null, \"Add some products to get started!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n    className: \"continue-shopping-btn\",\n    onClick: function onClick() {\n      return window.eventBus.emit('navigate', {\n        route: 'products'\n      });\n    }\n  }, \"Continue Shopping\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"cart-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"cart-items\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Items (\", cartItems.length, \")\"), cartItems.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      key: item.id,\n      className: \"cart-item\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"item-image\"\n    }, item.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"item-details\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h3\", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", {\n      className: \"item-price\"\n    }, \"$\", item.price.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"quantity-controls\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n      onClick: function onClick() {\n        return updateQuantity(item.id, item.quantity - 1);\n      },\n      className: \"quantity-btn\"\n    }, \"-\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", {\n      className: \"quantity\"\n    }, item.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n      onClick: function onClick() {\n        return updateQuantity(item.id, item.quantity + 1);\n      },\n      className: \"quantity-btn\"\n    }, \"+\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"item-total\"\n    }, \"$\", (item.price * item.quantity).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n      onClick: function onClick() {\n        return removeItem(item.id);\n      },\n      className: \"remove-btn\",\n      title: \"Remove item\"\n    }, \"\\u274C\"));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"cart-summary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Order Summary\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"promo-code-section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Enter promo code\",\n    value: promoCode,\n    onChange: function onChange(e) {\n      return setPromoCode(e.target.value.toUpperCase());\n    },\n    className: \"promo-input\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n    onClick: applyPromoCode,\n    className: \"apply-btn\"\n  }, \"Apply\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"summary-details\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"summary-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"Subtotal:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"$\", calculateSubtotal().toFixed(2))), discount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"summary-row discount\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"Discount (\", discount, \"%):\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"-$\", (calculateSubtotal() * discount / 100).toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"summary-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"Tax (8%):\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"$\", calculateTax().toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"summary-row total\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"Total:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"$\", calculateTotal().toFixed(2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n    onClick: proceedToCheckout,\n    className: \"checkout-btn\"\n  }, \"Proceed to Checkout\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"event-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h3\", null, \"\\uD83D\\uDD04 Event-Based Communication\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", null, \"This Cart MFE demonstrates:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, \"Listening for 'cart:add', 'cart:remove', 'cart:clear' events\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, \"Emitting 'cart:update' when cart changes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, \"Triggering 'navigate' event for checkout\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, \"Sending 'checkout:init' with cart data\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, \"Persisting cart in localStorage for session continuity\"))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/cart/src/Cart.jsx?\n}");

/***/ }),

/***/ "../module-federation/cart/src/cart.css":
/*!**********************************************!*\
  !*** ../module-federation/cart/src/cart.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _single_spa_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../single-spa/node_modules/css-loader/dist/cjs.js!./cart.css */ \"./node_modules/css-loader/dist/cjs.js!../module-federation/cart/src/cart.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_single_spa_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_single_spa_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _single_spa_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_single_spa_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_single_spa_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _single_spa_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_single_spa_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_single_spa_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _single_spa_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _single_spa_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/cart/src/cart.css?\n}");

/***/ }),

/***/ "./mfe-wrappers/cart.js":
/*!******************************!*\
  !*** ./mfe-wrappers/cart.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bootstrap: () => (/* binding */ bootstrap),\n/* harmony export */   mount: () => (/* binding */ mount),\n/* harmony export */   unmount: () => (/* binding */ unmount)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa-react */ \"single-spa-react\");\n/* harmony import */ var _module_federation_cart_src_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module-federation/cart/src/Cart */ \"../module-federation/cart/src/Cart.js\");\n/* harmony import */ var _module_federation_cart_src_cart_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../module-federation/cart/src/cart.css */ \"../module-federation/cart/src/cart.css\");\n\n\n\n\n\n// Import styles\n\n\n// Create the Single-SPA lifecycle\nvar lifecycles = (0,single_spa_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n  React: react__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  rootComponent: _module_federation_cart_src_Cart__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  errorBoundary: function errorBoundary(err, info, props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"error-boundary\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Error in Cart MFE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"pre\", null, err.toString()));\n  },\n  domElementGetter: function domElementGetter(props) {\n    // Get or create container element\n    var el = document.getElementById('cart-mfe');\n    if (!el) {\n      el = document.createElement('div');\n      el.id = 'cart-mfe';\n      var container = props.domElementGetter ? props.domElementGetter() : document.getElementById('mfe-container');\n      if (container) {\n        container.appendChild(el);\n      }\n    }\n    return el;\n  }\n});\nvar bootstrap = lifecycles.bootstrap,\n  mount = lifecycles.mount,\n  unmount = lifecycles.unmount;\n\n\n//# sourceURL=webpack://single-spa-demo/./mfe-wrappers/cart.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../module-federation/cart/src/cart.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../module-federation/cart/src/cart.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _single_spa_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../single-spa/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _single_spa_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _single_spa_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../single-spa/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _single_spa_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _single_spa_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_single_spa_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Cart MFE Styles */\n.cart-container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.cart-container h1 {\n  font-size: 2.5rem;\n  margin-bottom: 2rem;\n  color: #333;\n}\n\n/* Empty Cart */\n.empty-cart {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 2px 15px rgba(0,0,0,0.08);\n}\n\n.empty-cart-icon {\n  font-size: 5rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n\n.empty-cart h2 {\n  color: #666;\n  margin-bottom: 1rem;\n}\n\n.empty-cart p {\n  color: #999;\n  margin-bottom: 2rem;\n}\n\n.continue-shopping-btn {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 1rem 2rem;\n  border-radius: 50px;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.continue-shopping-btn:hover {\n  background: #5a67d8;\n  transform: scale(1.05);\n}\n\n/* Cart Content */\n.cart-content {\n  display: grid;\n  grid-template-columns: 1fr 400px;\n  gap: 2rem;\n}\n\n@media (max-width: 968px) {\n  .cart-content {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Cart Items */\n.cart-items {\n  background: white;\n  border-radius: 15px;\n  padding: 2rem;\n  box-shadow: 0 2px 15px rgba(0,0,0,0.08);\n}\n\n.cart-items h2 {\n  margin-bottom: 1.5rem;\n  color: #333;\n}\n\n.cart-item {\n  display: grid;\n  grid-template-columns: 80px 1fr auto auto auto;\n  gap: 1.5rem;\n  align-items: center;\n  padding: 1.5rem 0;\n  border-bottom: 1px solid #eee;\n}\n\n.cart-item:last-child {\n  border-bottom: none;\n}\n\n.item-image {\n  font-size: 3rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n}\n\n.item-details h3 {\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n\n.item-price {\n  color: #666;\n  font-size: 1rem;\n}\n\n.quantity-controls {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background: #f5f5f5;\n  padding: 0.5rem;\n  border-radius: 50px;\n}\n\n.quantity-btn {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background: white;\n  cursor: pointer;\n  font-size: 1.2rem;\n  transition: all 0.3s;\n}\n\n.quantity-btn:hover {\n  background: #667eea;\n  color: white;\n}\n\n.quantity {\n  font-weight: bold;\n  min-width: 30px;\n  text-align: center;\n}\n\n.item-total {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #667eea;\n}\n\n.remove-btn {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.3s;\n}\n\n.remove-btn:hover {\n  opacity: 1;\n}\n\n/* Cart Summary */\n.cart-summary {\n  background: white;\n  border-radius: 15px;\n  padding: 2rem;\n  box-shadow: 0 2px 15px rgba(0,0,0,0.08);\n  height: fit-content;\n  position: sticky;\n  top: 2rem;\n}\n\n.cart-summary h2 {\n  margin-bottom: 1.5rem;\n  color: #333;\n}\n\n/* Promo Code */\n.promo-code-section {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n\n.promo-input {\n  flex: 1;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 10px;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n\n.promo-input:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\n.apply-btn {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n\n.apply-btn:hover {\n  background: #5a67d8;\n}\n\n/* Summary Details */\n.summary-details {\n  border-top: 2px solid #f0f0f0;\n  padding-top: 1.5rem;\n  margin-bottom: 2rem;\n}\n\n.summary-row {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  color: #666;\n}\n\n.summary-row.discount {\n  color: #27ae60;\n}\n\n.summary-row.total {\n  font-size: 1.3rem;\n  font-weight: bold;\n  color: #333;\n  padding-top: 1rem;\n  border-top: 2px solid #f0f0f0;\n}\n\n.checkout-btn {\n  width: 100%;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border: none;\n  padding: 1rem;\n  border-radius: 50px;\n  font-size: 1.1rem;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.checkout-btn:hover {\n  transform: scale(1.02);\n  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);\n}\n\n/* Event Info */\n.event-info {\n  background: #f8f9fa;\n  padding: 2rem;\n  border-radius: 15px;\n  margin-top: 3rem;\n}\n\n.event-info h3 {\n  color: #667eea;\n  margin-bottom: 1rem;\n}\n\n.event-info ul {\n  list-style: none;\n  padding: 0;\n}\n\n.event-info li {\n  padding: 0.5rem 0;\n  padding-left: 1.5rem;\n  position: relative;\n  color: #666;\n}\n\n.event-info li:before {\n  content: '→';\n  position: absolute;\n  left: 0;\n  color: #667eea;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/cart/src/cart.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://single-spa-demo/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://single-spa-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://single-spa-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://single-spa-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://single-spa-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://single-spa-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://single-spa-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://single-spa-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "single-spa-react":
/*!***********************************!*\
  !*** external "single-spa-react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_single_spa_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./mfe-wrappers/cart.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});