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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.generateMain)();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateMain\": () => (/* binding */ generateMain)\n/* harmony export */ });\nfunction component(type, classes = \"\", id = \"\", content = \"\") {\n\tconst element = document.createElement(type);\n\n\tif (classes != \"\") {\n\t\telement.classList.add(classes);\n\t}\n\n\tif (id != \"\") {\n\t\telement.id = id;\n\t}\n\n\tif (content != \"\") {\n\t\telement.innerHTML = content;\n\t}\n\n\treturn element;\n}\n\nfunction generateHeader() {\n\tconst header = component(\"div\", \"header\");\n\n\theader.appendChild(component(\"div\", \"logo\", \"\", \"LOGO HERE\"));\n\n\tconst info = generateInfoMenu();\n\theader.appendChild(info);\n\n\theader.appendChild(component(\"div\", \"title\", \"\", \"Three Legged Stool\"));\n\n\treturn header;\n}\n\nfunction generateInfoMenu() {\n\tconst info = component(\"div\", \"info-container\");\n\n\tinfo.appendChild(component(\"div\", \"info\", \"about\", \"About\"));\n\tinfo.appendChild(component(\"div\", \"info\", \"menu\", \"Menu\"));\n\tinfo.appendChild(component(\"div\", \"info\", \"contact\", \"Contact\"));\n\n\treturn info;\n}\n\nfunction generateContent() {\n\tconst content = component(\"div\", \"content-container\");\n\tcontent.appendChild(\n\t\tcomponent(\n\t\t\t\"p\",\n\t\t\t\"content-text\",\n\t\t\t\"\",\n\t\t\t\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed augue porttitor, sagittis ex nec, suscipit lacus. Vivamus non orci metus. Curabitur varius rutrum malesuada. Etiam turpis mi, sagittis eu nulla ut, tempor ornare nunc. Maecenas lorem risus, aliquam sed accumsan vel, mollis quis dolor. Aenean laoreet lobortis metus dictum pellentesque. Cras tincidunt neque a elit faucibus sagittis.\"\n\t\t)\n\t);\n\tcontent.appendChild(document.createElement(\"br\"));\n\tcontent.appendChild(\n\t\tcomponent(\n\t\t\t\"p\",\n\t\t\t\"content-text\",\n\t\t\t\"\",\n\t\t\t\"Nulla rutrum eget quam sit amet ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue magna, feugiat at elit vitae, consequat mollis erat. Etiam eu egestas arcu, sed vulputate enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in gravida tellus. Aliquam ut nisi ut massa semper lobortis. Fusce vel scelerisque sem. Proin vel velit quis ipsum imperdiet dapibus. Phasellus commodo lectus eu vestibulum interdum. Maecenas rutrum purus metus, non lacinia est maximus at. Quisque porttitor turpis eget purus pretium tincidunt. Nam ut nisi sed sem interdum iaculis in lacinia felis. Donec quis lectus id erat pellentesque convallis id ac felis.\"\n\t\t)\n\t);\n\tcontent.appendChild(document.createElement(\"br\"));\n\tcontent.appendChild(\n\t\tcomponent(\n\t\t\t\"p\",\n\t\t\t\"content-text\",\n\t\t\t\"\",\n\t\t\t\"Suspendisse tempus viverra neque eu malesuada. Morbi consectetur felis nec nisl laoreet faucibus. Curabitur eget ex tristique, aliquam augue eu, commodo ipsum. Morbi vehicula metus a quam venenatis venenatis et dapibus turpis. Sed facilisis lobortis dolor, eu pellentesque dolor. Suspendisse gravida nisi a erat ultricies aliquet. Praesent molestie id dolor quis egestas. Fusce vel commodo turpis.\"\n\t\t)\n\t);\n\n\treturn content;\n}\n\n// Main content\nfunction generateMain() {\n\tconst mainContent = document.getElementById(\"content\");\n\tmainContent.appendChild(generateHeader());\n\tmainContent.appendChild(generateContent());\n}\n\n\n//# sourceURL=webpack://restaurant/./src/pageLoad.js?");

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