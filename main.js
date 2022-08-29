/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutContent\": () => (/* binding */ aboutContent)\n/* harmony export */ });\nfunction aboutContent() {\n\tconst aboutDiv = document.createElement(\"div\");\n\taboutDiv.classList.add(\"content-text\", \"about-content\");\n\taboutDiv.innerHTML = \"Whether it's a quick lunch on your own or a long hearty dinner with friends, there's always a warm welcome at the Three Legged Stool.\";\n\n\treturn aboutDiv;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactContent\": () => (/* binding */ contactContent)\n/* harmony export */ });\nfunction contactContent() {\n\tconst contactDiv = document.createElement(\"div\");\n\n\tcontactDiv.classList.add(\"contact-div\");\n\tcontactDiv.innerHTML = \"CONTACT US TEST\";\n\n\treturn contactDiv;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBtnEvent\": () => (/* binding */ addBtnEvent)\n/* harmony export */ });\nfunction addBtnEvent(buttonName, handler) {\n\tlet button = \"\";\n\n\tswitch (buttonName) {\n\t\tcase \"about\":\n\t\t\tbutton = document.getElementsByClassName(\"nav-btn about\")[0];\n\t\t\tbreak;\n\t\tcase \"menu\":\n\t\t\tbutton = document.getElementsByClassName(\"nav-btn menu\")[0];\n\t\t\tbreak;\n\t\tcase \"contact\":\n\t\t\tbutton = document.getElementsByClassName(\"nav-btn contact\")[0];\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tbreak;\n\t}\n\n\tif (button != \"\") {\n\t\tbutton.addEventListener(\"click\", handler);\n\t}\n}\n\n\n//# sourceURL=webpack://restaurant/./src/events.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events.js */ \"./src/events.js\");\n\n\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.generatePage)();\nsetPageEvents();\n\nfunction setPageEvents() {\n\t(0,_events_js__WEBPACK_IMPORTED_MODULE_4__.addBtnEvent)(\"about\", loadAbout);\n\t(0,_events_js__WEBPACK_IMPORTED_MODULE_4__.addBtnEvent)(\"menu\", loadMenu);\n\t(0,_events_js__WEBPACK_IMPORTED_MODULE_4__.addBtnEvent)(\"contact\", loadContact);\n}\n\nfunction loadAbout(event) {\n\tupdateNavGlow(event.target);\n\n\t(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.updateContentText)((0,_about_js__WEBPACK_IMPORTED_MODULE_1__.aboutContent)());\n}\n\nfunction loadMenu(event) {\n\tupdateNavGlow(event.target);\n\t(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.updateContentText)((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuContent)());\n}\n\nfunction loadContact(event) {\n\tupdateNavGlow(event.target);\n\t(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.updateContentText)((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactContent)());\n}\n\nfunction updateNavGlow(target) {\n\tconst navBtns = document.getElementsByClassName(\"nav-btn\");\n\n\tfor (const button of navBtns) {\n\t\tbutton.classList.remove(\"active\");\n\t}\n\n\ttarget.classList.add(\"active\");\n}\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuContent\": () => (/* binding */ menuContent)\n/* harmony export */ });\nfunction MenuItem(name, image, description, price) {\n\tthis.name = name;\n\tthis.image = image;\n\tthis.description = description;\n\tthis.price = price;\n\n\tthis.getName = function () {\n\t\treturn this.name;\n\t};\n\n\tthis.getImage = function () {\n\t\treturn this.image;\n\t};\n\n\tthis.getDescription = function () {\n\t\treturn this.description;\n\t};\n\n\tthis.getPrice = function () {\n\t\treturn this.price;\n\t};\n}\n\nfunction menuContent() {\n\tconst menuDiv = document.createElement(\"div\");\n\n\tmenuDiv.classList.add(\"content-text\", \"menu-content\");\n\n\tconst testItem = new MenuItem(\n\t\t\"Ploughman's Lunch\",\n\t\t\"../src/images/ploughmans.jpg\",\n\t\t\"Wiltshire Ham, sliced apples, handmade pickles and chutneys, homemade bread & butter and fresh salad with balsamic drizzle.\",\n\t\t\"9.99\"\n\t);\n\n\tmenuDiv.appendChild(addItem(testItem));\n\n\treturn menuDiv;\n}\n\nfunction addItem(item) {\n\tconst menuItem = document.createElement(\"div\");\n\tmenuItem.classList.add(\"menu-item\");\n\n\tmenuItem.appendChild(addItemName(item));\n\tmenuItem.appendChild(document.createElement(\"br\"));\n\n\tmenuItem.appendChild(addItemImage(item));\n\tmenuItem.appendChild(document.createElement(\"br\"));\n\n\tmenuItem.appendChild(addItemText(item));\n\tmenuItem.appendChild(document.createElement(\"br\"));\n\n\tmenuItem.appendChild(addItemPrice(item));\n\n\treturn menuItem;\n}\n\nfunction addItemName(item) {\n\tconst itemName = document.createElement(\"h1\");\n\titemName.innerHTML = item.getName();\n\titemName.classList.add(\"menu-name\");\n\n\treturn itemName;\n}\n\nfunction addItemImage(item) {\n\tconst itemImage = document.createElement(\"img\");\n\titemImage.classList.add(\"menu-image\");\n\titemImage.setAttribute(\"src\", item.getImage());\n\titemImage.setAttribute(\"alt\", item.getName());\n\n\treturn itemImage;\n}\n\nfunction addItemText(item) {\n\tconst itemText = document.createElement(\"p\");\n\titemText.innerHTML = item.getDescription();\n\titemText.classList.add(\"menu-desc\");\n\n\treturn itemText;\n}\n\nfunction addItemPrice(item) {\n\tconst itemPrice = document.createElement(\"p\");\n\titemPrice.innerHTML = item.getPrice();\n\titemPrice.classList.add(\"menu-price\");\n\n\treturn itemPrice;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generatePage\": () => (/* binding */ generatePage),\n/* harmony export */   \"updateContentText\": () => (/* binding */ updateContentText)\n/* harmony export */ });\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n// Generate Page\nfunction generatePage() {\n\tconst content = document.getElementById(\"content\");\n\n\tcontent.appendChild(generateHeader());\n\tcontent.appendChild(generateContent());\n\tcontent.appendChild(generateFooter());\n}\n\nfunction updateContentText(contentText) {\n\tconst content = document.getElementsByClassName(\"content-container\")[0];\n\tcontent.replaceChild(contentText, content.childNodes[0]);\n}\n\nfunction generateHeader() {\n\tconst header = document.createElement(\"header\");\n\theader.classList.add(\"header-container\");\n\n\tconst headerContent = document.createElement(\"h1\");\n\theaderContent.classList.add(\"header-text\");\n\theaderContent.innerHTML = \"Three Legged Stool\";\n\n\theader.appendChild(headerContent);\n\n\theader.appendChild(generateNav());\n\n\treturn header;\n}\n\nfunction generateNav() {\n\tconst navBar = document.createElement(\"nav\");\n\tnavBar.classList.add(\"nav-bar\");\n\tnavBar.setAttribute(\"role\", \"navigation\");\n\n\tconst about = document.createElement(\"button\");\n\tabout.classList.add(\"nav-btn\", \"about\", \"active\");\n\tabout.innerHTML = \"About\";\n\tnavBar.appendChild(about);\n\n\tconst menu = document.createElement(\"button\");\n\tmenu.classList.add(\"nav-btn\", \"menu\");\n\tmenu.innerHTML = \"Menu\";\n\tnavBar.appendChild(menu);\n\n\tconst contact = document.createElement(\"button\");\n\tcontact.classList.add(\"nav-btn\", \"contact\");\n\tcontact.innerHTML = \"Contact\";\n\tnavBar.appendChild(contact);\n\n\treturn navBar;\n}\n\nfunction generateContent() {\n\tconst content = document.createElement(\"main\");\n\tcontent.classList.add(\"content-container\");\n\n\tconst contentText = (0,_about_js__WEBPACK_IMPORTED_MODULE_0__.aboutContent)();\n\n\tcontent.appendChild(contentText);\n\n\treturn content;\n}\n\nfunction generateFooter() {\n\tconst footer = document.createElement(\"footer\");\n\tfooter.classList.add(\"footer-container\");\n\n\tconst footerContent = document.createElement(\"p\");\n\tfooterContent.classList.add(\"footer-text\");\n\tfooterContent.innerHTML = \"&copy Hayley Ashby 2022\";\n\n\tfooter.appendChild(footerContent);\n\n\treturn footer;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/pageLoad.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;