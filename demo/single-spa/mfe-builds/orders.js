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

/***/ "../module-federation/orders/src/Orders.js":
/*!*************************************************!*\
  !*** ../module-federation/orders/src/Orders.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Orders_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.jsx */ \"../module-federation/orders/src/Orders.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Orders_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/orders/src/Orders.js?\n}");

/***/ }),

/***/ "../module-federation/orders/src/Orders.jsx":
/*!**************************************************!*\
  !*** ../module-federation/orders/src/Orders.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n// Initialize eventBus for standalone mode\nif (!window.eventBus) {\n  window.eventBus = {\n    emit: function emit(event, data) {\n      return console.log('[Mock EventBus]', event, data);\n    },\n    on: function on(event, handler) {\n      return console.log('[Mock EventBus] Listener added for:', event);\n    },\n    off: function off(event, handler) {\n      return console.log('[Mock EventBus] Listener removed for:', event);\n    }\n  };\n}\nvar Orders = function Orders(_ref) {\n  var _ref$user = _ref.user,\n    user = _ref$user === void 0 ? null : _ref$user;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{\n      id: 'ORD-001',\n      date: '2024-01-15',\n      status: 'Delivered',\n      total: 459.97,\n      items: [{\n        name: 'Laptop',\n        quantity: 1,\n        price: 399.99\n      }, {\n        name: 'Mouse',\n        quantity: 2,\n        price: 29.99\n      }]\n    }, {\n      id: 'ORD-002',\n      date: '2024-01-20',\n      status: 'Shipped',\n      total: 189.98,\n      items: [{\n        name: 'Headphones',\n        quantity: 1,\n        price: 149.99\n      }, {\n        name: 'USB Cable',\n        quantity: 2,\n        price: 19.99\n      }]\n    }]),\n    _useState2 = _slicedToArray(_useState, 1),\n    orders = _useState2[0];\n  if (!user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      style: {\n        textAlign: 'center',\n        padding: '3rem'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Please log in to view orders\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n      onClick: function onClick() {\n        window.eventBus.emit('user:login', {\n          user: {\n            id: 1,\n            name: 'John Doe',\n            email: 'john@example.com'\n          }\n        });\n      },\n      style: {\n        padding: '0.75rem 2rem',\n        background: '#667eea',\n        color: 'white',\n        border: 'none',\n        borderRadius: '5px',\n        cursor: 'pointer'\n      }\n    }, \"Log In\"));\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    style: {\n      maxWidth: '1200px',\n      margin: '0 auto',\n      padding: '2rem'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", null, \"My Orders\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    style: {\n      display: 'grid',\n      gap: '1.5rem'\n    }\n  }, orders.map(function (order) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      key: order.id,\n      style: {\n        background: 'white',\n        borderRadius: '10px',\n        padding: '2rem',\n        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      style: {\n        display: 'flex',\n        justifyContent: 'space-between',\n        marginBottom: '1rem'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h3\", null, \"Order #\", order.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", {\n      style: {\n        color: '#666'\n      }\n    }, \"Placed on \", new Date(order.date).toLocaleDateString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", {\n      style: {\n        padding: '0.5rem 1rem',\n        borderRadius: '20px',\n        background: order.status === 'Delivered' ? '#d4edda' : '#cce5ff',\n        color: order.status === 'Delivered' ? '#155724' : '#004085'\n      }\n    }, order.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      style: {\n        marginBottom: '1rem'\n      }\n    }, order.items.map(function (item, idx) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n        key: idx,\n        style: {\n          display: 'flex',\n          justifyContent: 'space-between',\n          padding: '0.5rem 0'\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, item.name, \" x\", item.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", null, \"$\", (item.price * item.quantity).toFixed(2)));\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      style: {\n        display: 'flex',\n        justifyContent: 'space-between',\n        alignItems: 'center',\n        borderTop: '1px solid #eee',\n        paddingTop: '1rem'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", {\n      style: {\n        fontSize: '1.2rem',\n        fontWeight: 'bold'\n      }\n    }, \"Total: $\", order.total.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n      style: {\n        padding: '0.5rem 1.5rem',\n        background: '#667eea',\n        color: 'white',\n        border: 'none',\n        borderRadius: '5px',\n        cursor: 'pointer'\n      }\n    }, \"Track Order\")));\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Orders);\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/orders/src/Orders.jsx?\n}");

/***/ }),

/***/ "./mfe-wrappers/orders.js":
/*!********************************!*\
  !*** ./mfe-wrappers/orders.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bootstrap: () => (/* binding */ bootstrap),\n/* harmony export */   mount: () => (/* binding */ mount),\n/* harmony export */   unmount: () => (/* binding */ unmount)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa-react */ \"single-spa-react\");\n/* harmony import */ var _module_federation_orders_src_Orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module-federation/orders/src/Orders */ \"../module-federation/orders/src/Orders.js\");\n\n\n\n\n\n// Create the Single-SPA lifecycle\nvar lifecycles = (0,single_spa_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n  React: react__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  rootComponent: _module_federation_orders_src_Orders__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  errorBoundary: function errorBoundary(err, info, props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"error-boundary\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Error in Orders MFE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"pre\", null, err.toString()));\n  },\n  domElementGetter: function domElementGetter(props) {\n    // Get or create container element\n    var el = document.getElementById('orders-mfe');\n    if (!el) {\n      el = document.createElement('div');\n      el.id = 'orders-mfe';\n      var container = props.domElementGetter ? props.domElementGetter() : document.getElementById('mfe-container');\n      if (container) {\n        container.appendChild(el);\n      }\n    }\n    return el;\n  }\n});\nvar bootstrap = lifecycles.bootstrap,\n  mount = lifecycles.mount,\n  unmount = lifecycles.unmount;\n\n\n//# sourceURL=webpack://single-spa-demo/./mfe-wrappers/orders.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./mfe-wrappers/orders.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});