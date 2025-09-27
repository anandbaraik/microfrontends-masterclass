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

/***/ "../module-federation/checkout/src/Checkout.js":
/*!*****************************************************!*\
  !*** ../module-federation/checkout/src/Checkout.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Checkout_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.jsx */ \"../module-federation/checkout/src/Checkout.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Checkout_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/checkout/src/Checkout.js?\n}");

/***/ }),

/***/ "../module-federation/checkout/src/Checkout.jsx":
/*!******************************************************!*\
  !*** ../module-federation/checkout/src/Checkout.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n// Initialize eventBus for standalone mode\nif (!window.eventBus) {\n  window.eventBus = {\n    emit: function emit(event, data) {\n      return console.log('[Mock EventBus]', event, data);\n    },\n    on: function on(event, handler) {\n      return console.log('[Mock EventBus] Listener added for:', event);\n    },\n    off: function off(event, handler) {\n      return console.log('[Mock EventBus] Listener removed for:', event);\n    }\n  };\n}\nvar Checkout = function Checkout(_ref) {\n  var _ref$items = _ref.items,\n    items = _ref$items === void 0 ? [] : _ref$items,\n    _ref$user = _ref.user,\n    user = _ref$user === void 0 ? null : _ref$user;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n      fullName: (user === null || user === void 0 ? void 0 : user.name) || '',\n      email: (user === null || user === void 0 ? void 0 : user.email) || '',\n      address: '',\n      city: '',\n      zipCode: '',\n      cardNumber: '',\n      expiry: '',\n      cvv: ''\n    }),\n    _useState2 = _slicedToArray(_useState, 2),\n    formData = _useState2[0],\n    setFormData = _useState2[1];\n  var calculateTotal = function calculateTotal() {\n    var subtotal = items.reduce(function (sum, item) {\n      return sum + item.price * item.quantity;\n    }, 0);\n    var tax = subtotal * 0.08;\n    return {\n      subtotal: subtotal,\n      tax: tax,\n      total: subtotal + tax\n    };\n  };\n  var handleInputChange = function handleInputChange(e) {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value)));\n  };\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();\n    window.eventBus.emit('notification:show', {\n      type: 'success',\n      message: \"Order \".concat(orderId, \" placed successfully!\")\n    });\n    window.eventBus.emit('cart:clear');\n    setTimeout(function () {\n      window.eventBus.emit('navigate', {\n        route: 'orders'\n      });\n    }, 2000);\n  };\n  var _calculateTotal = calculateTotal(),\n    subtotal = _calculateTotal.subtotal,\n    tax = _calculateTotal.tax,\n    total = _calculateTotal.total;\n  if (items.length === 0) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      style: {\n        textAlign: 'center',\n        padding: '3rem'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"No items in checkout\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", null, \"Please add items to your cart first\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n      onClick: function onClick() {\n        return window.eventBus.emit('navigate', {\n          route: 'cart'\n        });\n      }\n    }, \"Back to Cart\"));\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    style: {\n      maxWidth: '1200px',\n      margin: '0 auto',\n      padding: '2rem'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", null, \"Checkout\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    style: {\n      display: 'grid',\n      gridTemplateColumns: '1fr 400px',\n      gap: '2rem'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    style: {\n      background: 'white',\n      padding: '2rem',\n      borderRadius: '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Shipping Information\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n    type: \"text\",\n    name: \"fullName\",\n    placeholder: \"Full Name\",\n    value: formData.fullName,\n    onChange: handleInputChange,\n    required: true,\n    style: {\n      width: '100%',\n      padding: '0.75rem',\n      marginBottom: '1rem'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    placeholder: \"Email\",\n    value: formData.email,\n    onChange: handleInputChange,\n    required: true,\n    style: {\n      width: '100%',\n      padding: '0.75rem',\n      marginBottom: '1rem'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n    type: \"text\",\n    name: \"address\",\n    placeholder: \"Address\",\n    value: formData.address,\n    onChange: handleInputChange,\n    required: true,\n    style: {\n      width: '100%',\n      padding: '0.75rem',\n      marginBottom: '1rem'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Payment Information\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n    type: \"text\",\n    name: \"cardNumber\",\n    placeholder: \"Card Number\",\n    value: formData.cardNumber,\n    onChange: handleInputChange,\n    required: true,\n    style: {\n      width: '100%',\n      padding: '0.75rem',\n      marginBottom: '1rem'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n    type: \"submit\",\n    style: {\n      width: '100%',\n      padding: '1rem',\n      background: '#667eea',\n      color: 'white',\n      border: 'none',\n      borderRadius: '5px',\n      fontSize: '1.1rem',\n      cursor: 'pointer'\n    }\n  }, \"Place Order\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    style: {\n      background: 'white',\n      padding: '2rem',\n      borderRadius: '10px',\n      height: 'fit-content'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Order Summary\"), items.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      key: item.id,\n      style: {\n        display: 'flex',\n        justifyContent: 'space-between',\n        marginBottom: '1rem'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, item.name, \" x\", item.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"$\", (item.price * item.quantity).toFixed(2)));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      marginTop: '1rem'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"Subtotal:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"$\", subtotal.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"Tax:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"$\", tax.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between',\n      fontWeight: 'bold',\n      fontSize: '1.2rem',\n      marginTop: '1rem'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"Total:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"$\", total.toFixed(2))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkout);\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/checkout/src/Checkout.jsx?\n}");

/***/ }),

/***/ "./mfe-wrappers/checkout.js":
/*!**********************************!*\
  !*** ./mfe-wrappers/checkout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bootstrap: () => (/* binding */ bootstrap),\n/* harmony export */   mount: () => (/* binding */ mount),\n/* harmony export */   unmount: () => (/* binding */ unmount)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa-react */ \"single-spa-react\");\n/* harmony import */ var _module_federation_checkout_src_Checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module-federation/checkout/src/Checkout */ \"../module-federation/checkout/src/Checkout.js\");\n\n\n\n\n\n// Create the Single-SPA lifecycle\nvar lifecycles = (0,single_spa_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n  React: react__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  rootComponent: _module_federation_checkout_src_Checkout__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  errorBoundary: function errorBoundary(err, info, props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"error-boundary\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Error in Checkout MFE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"pre\", null, err.toString()));\n  },\n  domElementGetter: function domElementGetter(props) {\n    // Get or create container element\n    var el = document.getElementById('checkout-mfe');\n    if (!el) {\n      el = document.createElement('div');\n      el.id = 'checkout-mfe';\n      var container = props.domElementGetter ? props.domElementGetter() : document.getElementById('mfe-container');\n      if (container) {\n        container.appendChild(el);\n      }\n    }\n    return el;\n  }\n});\nvar bootstrap = lifecycles.bootstrap,\n  mount = lifecycles.mount,\n  unmount = lifecycles.unmount;\n\n\n//# sourceURL=webpack://single-spa-demo/./mfe-wrappers/checkout.js?\n}");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./mfe-wrappers/checkout.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});