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

/***/ "../module-federation/product-catalog/src/ProductCatalog.js":
/*!******************************************************************!*\
  !*** ../module-federation/product-catalog/src/ProductCatalog.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _ProductCatalog_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCatalog.jsx */ \"../module-federation/product-catalog/src/ProductCatalog.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ProductCatalog_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/product-catalog/src/ProductCatalog.js?\n}");

/***/ }),

/***/ "../module-federation/product-catalog/src/ProductCatalog.jsx":
/*!*******************************************************************!*\
  !*** ../module-federation/product-catalog/src/ProductCatalog.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _productCatalog_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productCatalog.css */ \"../module-federation/product-catalog/src/productCatalog.css\");\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n// Initialize eventBus for standalone mode\nif (!window.eventBus) {\n  window.eventBus = {\n    emit: function emit(event, data) {\n      return console.log('[Mock EventBus]', event, data);\n    },\n    on: function on(event, handler) {\n      return console.log('[Mock EventBus] Listener added for:', event);\n    },\n    off: function off(event, handler) {\n      return console.log('[Mock EventBus] Listener removed for:', event);\n    }\n  };\n}\nvar ProductCatalog = function ProductCatalog() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    products = _useState2[0],\n    setProducts = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState4 = _slicedToArray(_useState3, 2),\n    filteredProducts = _useState4[0],\n    setFilteredProducts = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all'),\n    _useState6 = _slicedToArray(_useState5, 2),\n    selectedCategory = _useState6[0],\n    setSelectedCategory = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState8 = _slicedToArray(_useState7, 2),\n    searchTerm = _useState8[0],\n    setSearchTerm = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('name'),\n    _useState0 = _slicedToArray(_useState9, 2),\n    sortBy = _useState0[0],\n    setSortBy = _useState0[1];\n\n  // Mock product data\n  var mockProducts = [{\n    id: 1,\n    name: 'Wireless Headphones',\n    price: 99.99,\n    category: 'Electronics',\n    rating: 4.5,\n    image: '🎧'\n  }, {\n    id: 2,\n    name: 'Smart Watch',\n    price: 299.99,\n    category: 'Electronics',\n    rating: 4.7,\n    image: '⌚'\n  }, {\n    id: 3,\n    name: 'Running Shoes',\n    price: 89.99,\n    category: 'Sports',\n    rating: 4.3,\n    image: '👟'\n  }, {\n    id: 4,\n    name: 'Yoga Mat',\n    price: 29.99,\n    category: 'Sports',\n    rating: 4.6,\n    image: '🧘'\n  }, {\n    id: 5,\n    name: 'Coffee Maker',\n    price: 149.99,\n    category: 'Home',\n    rating: 4.4,\n    image: '☕'\n  }, {\n    id: 6,\n    name: 'Desk Lamp',\n    price: 39.99,\n    category: 'Home',\n    rating: 4.2,\n    image: '💡'\n  }, {\n    id: 7,\n    name: 'Backpack',\n    price: 59.99,\n    category: 'Fashion',\n    rating: 4.5,\n    image: '🎒'\n  }, {\n    id: 8,\n    name: 'Sunglasses',\n    price: 129.99,\n    category: 'Fashion',\n    rating: 4.8,\n    image: '🕶️'\n  }, {\n    id: 9,\n    name: 'Bluetooth Speaker',\n    price: 79.99,\n    category: 'Electronics',\n    rating: 4.6,\n    image: '🔊'\n  }, {\n    id: 10,\n    name: 'Water Bottle',\n    price: 24.99,\n    category: 'Sports',\n    rating: 4.4,\n    image: '💧'\n  }];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setProducts(mockProducts);\n    setFilteredProducts(mockProducts);\n\n    // Listen for search events from other MFEs\n    var handleProductSearch = function handleProductSearch(event) {\n      setSearchTerm(event.detail.searchTerm || '');\n      if (event.detail.category) {\n        setSelectedCategory(event.detail.category);\n      }\n    };\n    window.eventBus.on('product:search', handleProductSearch);\n    return function () {\n      window.eventBus.off('product:search', handleProductSearch);\n    };\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // Filter and sort products\n    var filtered = products;\n\n    // Category filter\n    if (selectedCategory !== 'all') {\n      filtered = filtered.filter(function (p) {\n        return p.category === selectedCategory;\n      });\n    }\n\n    // Search filter\n    if (searchTerm) {\n      filtered = filtered.filter(function (p) {\n        return p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase());\n      });\n    }\n\n    // Sort\n    filtered = _toConsumableArray(filtered).sort(function (a, b) {\n      switch (sortBy) {\n        case 'name':\n          return a.name.localeCompare(b.name);\n        case 'price-low':\n          return a.price - b.price;\n        case 'price-high':\n          return b.price - a.price;\n        case 'rating':\n          return b.rating - a.rating;\n        default:\n          return 0;\n      }\n    });\n    setFilteredProducts(filtered);\n  }, [products, selectedCategory, searchTerm, sortBy]);\n  var handleAddToCart = function handleAddToCart(product) {\n    // Emit event to add product to cart\n    window.eventBus.emit('cart:add', {\n      product: {\n        id: product.id,\n        name: product.name,\n        price: product.price,\n        image: product.image,\n        quantity: 1\n      }\n    });\n\n    // Show notification\n    window.eventBus.emit('notification:show', {\n      type: 'success',\n      message: \"\".concat(product.name, \" added to cart!\"),\n      duration: 3000\n    });\n  };\n  var handleProductView = function handleProductView(product) {\n    // Emit event for product view analytics\n    window.eventBus.emit('product:viewed', {\n      productId: product.id,\n      productName: product.name,\n      category: product.category\n    });\n  };\n  var categories = ['all'].concat(_toConsumableArray(new Set(products.map(function (p) {\n    return p.category;\n  }))));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"product-catalog-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"catalog-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h1\", null, \"Product Catalog\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", null, \"Explore our wide range of products\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"catalog-controls\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"search-bar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Search products...\",\n    value: searchTerm,\n    onChange: function onChange(e) {\n      return setSearchTerm(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", {\n    className: \"search-icon\"\n  }, \"\\uD83D\\uDD0D\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"filter-controls\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"select\", {\n    value: selectedCategory,\n    onChange: function onChange(e) {\n      return setSelectedCategory(e.target.value);\n    },\n    className: \"category-filter\"\n  }, categories.map(function (cat) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"option\", {\n      key: cat,\n      value: cat\n    }, cat === 'all' ? 'All Categories' : cat);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"select\", {\n    value: sortBy,\n    onChange: function onChange(e) {\n      return setSortBy(e.target.value);\n    },\n    className: \"sort-filter\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"option\", {\n    value: \"name\"\n  }, \"Sort by Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"option\", {\n    value: \"price-low\"\n  }, \"Price: Low to High\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"option\", {\n    value: \"price-high\"\n  }, \"Price: High to Low\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"option\", {\n    value: \"rating\"\n  }, \"Highest Rated\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"results-info\"\n  }, \"Showing \", filteredProducts.length, \" of \", products.length, \" products\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"products-grid\"\n  }, filteredProducts.map(function (product) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      key: product.id,\n      className: \"product-card\",\n      onClick: function onClick() {\n        return handleProductView(product);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"product-image\"\n    }, product.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"product-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h3\", null, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", {\n      className: \"product-category\"\n    }, product.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"product-rating\"\n    }, '⭐'.repeat(Math.floor(product.rating)), \" \", product.rating), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"product-footer\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"span\", {\n      className: \"product-price\"\n    }, \"$\", product.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"button\", {\n      className: \"add-to-cart-btn\",\n      onClick: function onClick(e) {\n        e.stopPropagation();\n        handleAddToCart(product);\n      }\n    }, \"Add to Cart\"))));\n  })), filteredProducts.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"no-products\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", null, \"No products found matching your criteria\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    className: \"communication-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h3\", null, \"\\uD83D\\uDCAC Cross-MFE Communication\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"p\", null, \"This Product Catalog MFE demonstrates:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, \"Emitting 'cart:add' events when products are added to cart\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, \"Listening for 'product:search' events from other MFEs\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, \"Sending 'product:viewed' analytics events\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"li\", null, \"Broadcasting 'notification:show' for user feedback\"))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCatalog);\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/product-catalog/src/ProductCatalog.jsx?\n}");

/***/ }),

/***/ "../module-federation/product-catalog/src/productCatalog.css":
/*!*******************************************************************!*\
  !*** ../module-federation/product-catalog/src/productCatalog.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../single-spa/node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _single_spa_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _single_spa_node_modules_css_loader_dist_cjs_js_productCatalog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../single-spa/node_modules/css-loader/dist/cjs.js!./productCatalog.css */ \"./node_modules/css-loader/dist/cjs.js!../module-federation/product-catalog/src/productCatalog.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_single_spa_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_single_spa_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _single_spa_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_single_spa_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_single_spa_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _single_spa_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_single_spa_node_modules_css_loader_dist_cjs_js_productCatalog_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_single_spa_node_modules_css_loader_dist_cjs_js_productCatalog_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _single_spa_node_modules_css_loader_dist_cjs_js_productCatalog_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _single_spa_node_modules_css_loader_dist_cjs_js_productCatalog_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/product-catalog/src/productCatalog.css?\n}");

/***/ }),

/***/ "./mfe-wrappers/products.js":
/*!**********************************!*\
  !*** ./mfe-wrappers/products.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bootstrap: () => (/* binding */ bootstrap),\n/* harmony export */   mount: () => (/* binding */ mount),\n/* harmony export */   unmount: () => (/* binding */ unmount)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! single-spa-react */ \"single-spa-react\");\n/* harmony import */ var _module_federation_product_catalog_src_ProductCatalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module-federation/product-catalog/src/ProductCatalog */ \"../module-federation/product-catalog/src/ProductCatalog.js\");\n/* harmony import */ var _module_federation_product_catalog_src_productCatalog_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../module-federation/product-catalog/src/productCatalog.css */ \"../module-federation/product-catalog/src/productCatalog.css\");\n\n\n\n\n\n// Import styles\n\n\n// Create the Single-SPA lifecycle\nvar lifecycles = (0,single_spa_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n  React: react__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  rootComponent: _module_federation_product_catalog_src_ProductCatalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  errorBoundary: function errorBoundary(err, info, props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      className: \"error-boundary\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"h2\", null, \"Error in Products MFE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"pre\", null, err.toString()));\n  },\n  domElementGetter: function domElementGetter(props) {\n    // Get or create container element\n    var el = document.getElementById('products-mfe');\n    if (!el) {\n      el = document.createElement('div');\n      el.id = 'products-mfe';\n      var container = props.domElementGetter ? props.domElementGetter() : document.getElementById('mfe-container');\n      if (container) {\n        container.appendChild(el);\n      }\n    }\n    return el;\n  }\n});\nvar bootstrap = lifecycles.bootstrap,\n  mount = lifecycles.mount,\n  unmount = lifecycles.unmount;\n\n\n//# sourceURL=webpack://single-spa-demo/./mfe-wrappers/products.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../module-federation/product-catalog/src/productCatalog.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../module-federation/product-catalog/src/productCatalog.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _single_spa_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../single-spa/node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _single_spa_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _single_spa_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../single-spa/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _single_spa_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_single_spa_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _single_spa_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_single_spa_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Product Catalog MFE Styles */\n.product-catalog-container {\n  padding: 0;\n}\n\n.catalog-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.catalog-header h1 {\n  font-size: 2.5rem;\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n\n.catalog-header p {\n  color: #666;\n  font-size: 1.1rem;\n}\n\n/* Controls */\n.catalog-controls {\n  display: flex;\n  gap: 2rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.search-bar {\n  flex: 1;\n  min-width: 300px;\n  position: relative;\n}\n\n.search-bar input {\n  width: 100%;\n  padding: 0.75rem 3rem 0.75rem 1rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 50px;\n  font-size: 1rem;\n  transition: border-color 0.3s;\n}\n\n.search-bar input:focus {\n  outline: none;\n  border-color: #667eea;\n}\n\n.search-icon {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 1.2rem;\n}\n\n.filter-controls {\n  display: flex;\n  gap: 1rem;\n}\n\n.category-filter,\n.sort-filter {\n  padding: 0.75rem 1rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 10px;\n  font-size: 1rem;\n  background: white;\n  cursor: pointer;\n  transition: border-color 0.3s;\n}\n\n.category-filter:hover,\n.sort-filter:hover {\n  border-color: #667eea;\n}\n\n/* Results Info */\n.results-info {\n  color: #666;\n  margin-bottom: 1.5rem;\n  font-size: 0.95rem;\n}\n\n/* Products Grid */\n.products-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 2rem;\n  margin-bottom: 3rem;\n}\n\n.product-card {\n  background: white;\n  border-radius: 15px;\n  overflow: hidden;\n  box-shadow: 0 2px 15px rgba(0,0,0,0.08);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.product-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 5px 25px rgba(0,0,0,0.15);\n}\n\n.product-image {\n  height: 200px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 5rem;\n}\n\n.product-info {\n  padding: 1.5rem;\n}\n\n.product-info h3 {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n  color: #333;\n}\n\n.product-category {\n  color: #999;\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n}\n\n.product-rating {\n  color: #ffa500;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n\n.product-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1rem;\n}\n\n.product-price {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #667eea;\n}\n\n.add-to-cart-btn {\n  background: #667eea;\n  color: white;\n  border: none;\n  padding: 0.5rem 1.5rem;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 0.95rem;\n}\n\n.add-to-cart-btn:hover {\n  background: #5a67d8;\n  transform: scale(1.05);\n}\n\n/* No Products */\n.no-products {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #999;\n}\n\n.no-products p {\n  font-size: 1.2rem;\n}\n\n/* Communication Info */\n.communication-info {\n  background: #f8f9fa;\n  padding: 2rem;\n  border-radius: 15px;\n  margin-top: 3rem;\n}\n\n.communication-info h3 {\n  color: #667eea;\n  margin-bottom: 1rem;\n  font-size: 1.3rem;\n}\n\n.communication-info p {\n  color: #666;\n  margin-bottom: 1rem;\n}\n\n.communication-info ul {\n  list-style: none;\n  padding: 0;\n}\n\n.communication-info li {\n  padding: 0.5rem 0;\n  color: #666;\n  position: relative;\n  padding-left: 1.5rem;\n}\n\n.communication-info li:before {\n  content: '✓';\n  position: absolute;\n  left: 0;\n  color: #667eea;\n  font-weight: bold;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://single-spa-demo/../module-federation/product-catalog/src/productCatalog.css?./node_modules/css-loader/dist/cjs.js\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./mfe-wrappers/products.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});