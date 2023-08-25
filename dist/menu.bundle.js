/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/corned_beef.png":
/*!************************************!*\
  !*** ./src/images/corned_beef.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b520a9e1334eafcd80d.png";

/***/ }),

/***/ "./src/images/fries.jpeg":
/*!*******************************!*\
  !*** ./src/images/fries.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "635a38698bcfb843058a.jpeg";

/***/ }),

/***/ "./src/images/gyro.jpeg":
/*!******************************!*\
  !*** ./src/images/gyro.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b397e94500beb41844c.jpeg";

/***/ }),

/***/ "./src/images/soda.jpeg":
/*!******************************!*\
  !*** ./src/images/soda.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "805e7423286367b7550a.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _src_images_gyro_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/gyro.jpeg */ "./src/images/gyro.jpeg");
/* harmony import */ var _src_images_corned_beef_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/corned_beef.png */ "./src/images/corned_beef.png");
/* harmony import */ var _src_images_fries_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/fries.jpeg */ "./src/images/fries.jpeg");
/* harmony import */ var _src_images_soda_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/soda.jpeg */ "./src/images/soda.jpeg");





function Menu() {
    const content = document.querySelector(".content")
    content.innerHTML = "";

    const menuSection = document.createElement("div");
    menuSection.className = "menu";

    const menuSectionHeader = document.createElement("h1");
    menuSectionHeader.className = "menu-header"
    menuSectionHeader.innerHTML = "Check out our menu!";
    menuSection.appendChild(menuSectionHeader);

    const menuHolder = document.createElement("div");
    menuHolder.className = "menu-holder";

    const gyroMenuItem = document.createElement("div");
    gyroMenuItem.className = "menu-item";
    gyroMenuItem.innerHTML = `<img src="${_src_images_gyro_jpeg__WEBPACK_IMPORTED_MODULE_0__}" alt="gyro">\
    <div>\
    <h1>Best Gyro in Town!</h1>\
    <br>\
    <ul>\
        <li>Large: $6,99</li>\
        <li>Medium: $5,99</li>\
        <li>Small: $4,99</li>\
    </ul>\
    </div>`;
    menuHolder.appendChild(gyroMenuItem);

    const cornedBeefMenuItem = document.createElement("div");
    cornedBeefMenuItem.className = "menu-item";
    cornedBeefMenuItem.innerHTML = `<img src="${_src_images_corned_beef_png__WEBPACK_IMPORTED_MODULE_1__}" alt="corned beef">\
    <div>\
    <h1>Corned Beef Sammich!</h1>\
    <br>\
    <ul>\
    <li>Footlong: $5,99</li>\
    <li>Both feet long: $8,99</li>\
    </ul>\
    </div>`;
    menuHolder.appendChild(cornedBeefMenuItem);

    const friesMenuItem = document.createElement("div");
    friesMenuItem.className = "menu-item";
    friesMenuItem.innerHTML = `<img src="${_src_images_fries_jpeg__WEBPACK_IMPORTED_MODULE_2__}" alt="side of fries">\
    <div>\
    <h1>Side of Fries!</h1>\
    <br>\
    <ul>\
        <li>Large: $4,99</li>\
        <li>Medium: $3,99</li>\
        <li>Small: $2,99</li>\
    </ul>\
    </div>`;
    menuHolder.appendChild(friesMenuItem);

    const sodaMenuItem = document.createElement("div");
    sodaMenuItem.classList = "menu-item";
    sodaMenuItem.innerHTML = `<img src="${_src_images_soda_jpeg__WEBPACK_IMPORTED_MODULE_3__}" alt="soda">\
    <div>\
    <h1>Soda of choice!</h1>\
    <br>\
    <ul>\
        <li>Large: $4,99</li>\
        <li>Small: $3,99</li>\
    </ul>\
    </div>`;
    menuHolder.appendChild(sodaMenuItem);

    menuSection.appendChild(menuHolder);
    content.appendChild(menuSection);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjBDO0FBQ1k7QUFDVjtBQUNGOztBQUUzQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsa0RBQUksQ0FBQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELHdEQUFVLENBQUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsbURBQUssQ0FBQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLGtEQUFJLENBQUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZ3lybyBmcm9tIFwiLi4vc3JjL2ltYWdlcy9neXJvLmpwZWdcIlxuaW1wb3J0IGNvcm5lZEJlZWYgZnJvbSBcIi4uL3NyYy9pbWFnZXMvY29ybmVkX2JlZWYucG5nXCJcbmltcG9ydCBmcmllcyBmcm9tIFwiLi4vc3JjL2ltYWdlcy9mcmllcy5qcGVnXCJcbmltcG9ydCBzb2RhIGZyb20gXCIuLi9zcmMvaW1hZ2VzL3NvZGEuanBlZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51U2VjdGlvbi5jbGFzc05hbWUgPSBcIm1lbnVcIjtcblxuICAgIGNvbnN0IG1lbnVTZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lbnVTZWN0aW9uSGVhZGVyLmNsYXNzTmFtZSA9IFwibWVudS1oZWFkZXJcIlxuICAgIG1lbnVTZWN0aW9uSGVhZGVyLmlubmVySFRNTCA9IFwiQ2hlY2sgb3V0IG91ciBtZW51IVwiO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uSGVhZGVyKTtcblxuICAgIGNvbnN0IG1lbnVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVIb2xkZXIuY2xhc3NOYW1lID0gXCJtZW51LWhvbGRlclwiO1xuXG4gICAgY29uc3QgZ3lyb01lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBneXJvTWVudUl0ZW0uY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcbiAgICBneXJvTWVudUl0ZW0uaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtneXJvfVwiIGFsdD1cImd5cm9cIj5cXFxuICAgIDxkaXY+XFxcbiAgICA8aDE+QmVzdCBHeXJvIGluIFRvd24hPC9oMT5cXFxuICAgIDxicj5cXFxuICAgIDx1bD5cXFxuICAgICAgICA8bGk+TGFyZ2U6ICQ2LDk5PC9saT5cXFxuICAgICAgICA8bGk+TWVkaXVtOiAkNSw5OTwvbGk+XFxcbiAgICAgICAgPGxpPlNtYWxsOiAkNCw5OTwvbGk+XFxcbiAgICA8L3VsPlxcXG4gICAgPC9kaXY+YDtcbiAgICBtZW51SG9sZGVyLmFwcGVuZENoaWxkKGd5cm9NZW51SXRlbSk7XG5cbiAgICBjb25zdCBjb3JuZWRCZWVmTWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvcm5lZEJlZWZNZW51SXRlbS5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xuICAgIGNvcm5lZEJlZWZNZW51SXRlbS5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2Nvcm5lZEJlZWZ9XCIgYWx0PVwiY29ybmVkIGJlZWZcIj5cXFxuICAgIDxkaXY+XFxcbiAgICA8aDE+Q29ybmVkIEJlZWYgU2FtbWljaCE8L2gxPlxcXG4gICAgPGJyPlxcXG4gICAgPHVsPlxcXG4gICAgPGxpPkZvb3Rsb25nOiAkNSw5OTwvbGk+XFxcbiAgICA8bGk+Qm90aCBmZWV0IGxvbmc6ICQ4LDk5PC9saT5cXFxuICAgIDwvdWw+XFxcbiAgICA8L2Rpdj5gO1xuICAgIG1lbnVIb2xkZXIuYXBwZW5kQ2hpbGQoY29ybmVkQmVlZk1lbnVJdGVtKTtcblxuICAgIGNvbnN0IGZyaWVzTWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZyaWVzTWVudUl0ZW0uY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcbiAgICBmcmllc01lbnVJdGVtLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7ZnJpZXN9XCIgYWx0PVwic2lkZSBvZiBmcmllc1wiPlxcXG4gICAgPGRpdj5cXFxuICAgIDxoMT5TaWRlIG9mIEZyaWVzITwvaDE+XFxcbiAgICA8YnI+XFxcbiAgICA8dWw+XFxcbiAgICAgICAgPGxpPkxhcmdlOiAkNCw5OTwvbGk+XFxcbiAgICAgICAgPGxpPk1lZGl1bTogJDMsOTk8L2xpPlxcXG4gICAgICAgIDxsaT5TbWFsbDogJDIsOTk8L2xpPlxcXG4gICAgPC91bD5cXFxuICAgIDwvZGl2PmA7XG4gICAgbWVudUhvbGRlci5hcHBlbmRDaGlsZChmcmllc01lbnVJdGVtKTtcblxuICAgIGNvbnN0IHNvZGFNZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc29kYU1lbnVJdGVtLmNsYXNzTGlzdCA9IFwibWVudS1pdGVtXCI7XG4gICAgc29kYU1lbnVJdGVtLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7c29kYX1cIiBhbHQ9XCJzb2RhXCI+XFxcbiAgICA8ZGl2PlxcXG4gICAgPGgxPlNvZGEgb2YgY2hvaWNlITwvaDE+XFxcbiAgICA8YnI+XFxcbiAgICA8dWw+XFxcbiAgICAgICAgPGxpPkxhcmdlOiAkNCw5OTwvbGk+XFxcbiAgICAgICAgPGxpPlNtYWxsOiAkMyw5OTwvbGk+XFxcbiAgICA8L3VsPlxcXG4gICAgPC9kaXY+YDtcbiAgICBtZW51SG9sZGVyLmFwcGVuZENoaWxkKHNvZGFNZW51SXRlbSk7XG5cbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51SG9sZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9