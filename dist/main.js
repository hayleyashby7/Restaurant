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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.generatePage)();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generatePage\": () => (/* binding */ generatePage)\n/* harmony export */ });\n// Generate Page\nfunction generatePage() {\n\tconst content = document.getElementById(\"content\");\n\n\tcontent.appendChild(generateHeader());\n\tcontent.appendChild(generateNav());\n\tcontent.appendChild(generateContent());\n\tcontent.appendChild(generateFooter());\n}\n\nfunction generateHeader() {\n\tconst header = document.createElement(\"header\");\n\theader.classList.add(\"header-container\");\n\n\tconst headerContent = document.createElement(\"h1\");\n\theaderContent.classList.add(\"header-title\");\n\theaderContent.innerHTML = \"Three Legged Stool\";\n\n\theader.appendChild(headerContent);\n\n\treturn header;\n}\nfunction generateNav() {\n\tconst navBar = document.createElement(\"nav\");\n\tnavBar.classList.add(\"nav-bar\");\n\tnavBar.setAttribute(\"role\", \"navigation\");\n\n\treturn navBar;\n}\n\nfunction generateContent() {\n\tconst content = document.createElement(\"main\");\n\tcontent.classList.add(\"content-container\");\n\n\tconst contentText = document.createElement(\"p\");\n\tcontentText.classList.add(\"content-text\");\n\tcontentText.innerHTML = \"EXAMPLE TEXT FOR NOW\";\n\n\tcontent.appendChild(contentText);\n\n\treturn content;\n}\n\nfunction generateFooter() {\n\tconst footer = document.createElement(\"footer\");\n\tfooter.classList.add(\"footer-container\");\n\n\tconst footerContent = document.createElement(\"p\");\n\tfooterContent.classList.add(\"footer-text\");\n\tfooterContent.innerHTML = \"&copy Hayley Ashby 2022\";\n\n\tfooter.appendChild(footerContent);\n\n\treturn footer;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/pageLoad.js?");

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