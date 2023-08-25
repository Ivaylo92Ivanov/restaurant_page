/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });

function Contact() {
    const content = document.querySelector(".content")
    content.innerHTML = "";

    const contactSection = document.createElement("div");
    contactSection.className = "contact"

    contactSection.innerHTML = '\
    <div style="padding-left: 2rem">\
        <h1>For pick-up, deliveries, compliments, rants and complaints... or maybe you just need someone to talk to...</h1>\
        <br>\
        <h1>Contact us:</h1>\
        <br>\
        <ul>\
        <li><strong>Phone:</strong> 1-555-GYROS</li>\
        <li><strong>E-mail:</strong> ThaliaforGyros@genuine.com</li>\
        </ul>\
    </div>\
    <div class="location">\
        <h1>Welcome to our location:</h1>\
        <br>\
        <img src="../src/images/location.jpg" alt = "location map">\
        <br>\
        <h3>73348 Port Thaliafort, 11 S. Lloyd Ave</h3>\
    </div>'

    content.appendChild(contactSection)
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdFNlY3Rpb24uY2xhc3NOYW1lID0gXCJjb250YWN0XCJcblxuICAgIGNvbnRhY3RTZWN0aW9uLmlubmVySFRNTCA9ICdcXFxuICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDJyZW1cIj5cXFxuICAgICAgICA8aDE+Rm9yIHBpY2stdXAsIGRlbGl2ZXJpZXMsIGNvbXBsaW1lbnRzLCByYW50cyBhbmQgY29tcGxhaW50cy4uLiBvciBtYXliZSB5b3UganVzdCBuZWVkIHNvbWVvbmUgdG8gdGFsayB0by4uLjwvaDE+XFxcbiAgICAgICAgPGJyPlxcXG4gICAgICAgIDxoMT5Db250YWN0IHVzOjwvaDE+XFxcbiAgICAgICAgPGJyPlxcXG4gICAgICAgIDx1bD5cXFxuICAgICAgICA8bGk+PHN0cm9uZz5QaG9uZTo8L3N0cm9uZz4gMS01NTUtR1lST1M8L2xpPlxcXG4gICAgICAgIDxsaT48c3Ryb25nPkUtbWFpbDo8L3N0cm9uZz4gVGhhbGlhZm9yR3lyb3NAZ2VudWluZS5jb208L2xpPlxcXG4gICAgICAgIDwvdWw+XFxcbiAgICA8L2Rpdj5cXFxuICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvblwiPlxcXG4gICAgICAgIDxoMT5XZWxjb21lIHRvIG91ciBsb2NhdGlvbjo8L2gxPlxcXG4gICAgICAgIDxicj5cXFxuICAgICAgICA8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvbG9jYXRpb24uanBnXCIgYWx0ID0gXCJsb2NhdGlvbiBtYXBcIj5cXFxuICAgICAgICA8YnI+XFxcbiAgICAgICAgPGgzPjczMzQ4IFBvcnQgVGhhbGlhZm9ydCwgMTEgUy4gTGxveWQgQXZlPC9oMz5cXFxuICAgIDwvZGl2PidcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==