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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomePage);\n\n\n//# sourceURL=webpack://email-form/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validate */ \"./src/modules/Validate.js\");\n\n\nclass UI {\n  static loadHomePage() {\n    document.getElementById('Country').onchange = _Validate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ZIP;\n    document.getElementById('ZIP').oninput = _Validate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ZIP;\n    document.getElementById('password').oninput = _Validate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].password;\n    document.getElementById('password-confirmation').oninput = _Validate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].confirmPassword;\n  }\n}\n\n\n//# sourceURL=webpack://email-form/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/Validate.js":
/*!*********************************!*\
  !*** ./src/modules/Validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Validate)\n/* harmony export */ });\nclass Validate {\n  static ZIP() {\n    const constraints = {\n      ir: [\n        '^\\\\d{5}-\\\\d{5}$',\n        'Iranian ZIPs must have exactly 8 digits: e.g. NNNNN-NNNNN',\n      ],\n      tr: [\n        '^\\\\d{5}$',\n        'Turkish ZIPs must have exactly 4 digits: e.g. NNNNN',\n      ],\n      iq: [\n        '^\\\\d{5}$',\n        'Iraqi ZIPs must have exactly 4 digits: e.g. NNNNN',\n      ],\n      af: [\n        '^^\\\\d{4}$',\n        'Afghani ZIPs must have exactly 4 digits: e.g. NNNNN',\n      ],\n    };\n\n    const country = document.getElementById('Country').value;\n\n    const ZIPField = document.getElementById('ZIP');\n\n    const constraint = new RegExp(constraints[country][0], '');\n\n    if (constraint.test(ZIPField.value)) {\n      ZIPField.setCustomValidity('');\n    } else {\n      ZIPField.setCustomValidity(constraints[country][1]);\n    }\n  }\n\n  static password() {\n    console.log('kaar kard');\n    const password = document.getElementById('password');\n    const constraint = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;\n    const customValidity = 'Your password must contain a minimum of 8 characters, at least one letter and one number';\n    if (constraint.test(password.value)) {\n      password.setCustomValidity('');\n    } else {\n      password.setCustomValidity(customValidity);\n    }\n  }\n\n  static passwordConfirm() {\n    console.log('kaar kard');\n    const password = document.getElementById('password');\n    const passwordConfirm = document.getElementById('password-confirmation');\n    const customValidity = 'Your confirmation password does not match password';\n\n    if (password.value === passwordConfirm.value) {\n      passwordConfirm.setCustomValidity('');\n    } else {\n      passwordConfirm.setCustomValidity(customValidity);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://email-form/./src/modules/Validate.js?");

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