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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });

function Menu() {
    const content = document.querySelector(".content")
    content.innerHTML = "";

    const menuSection = document.createElement("div");
    menuSection.className = "menu";
    menuSection

    const gyroMenuItem = document.createElement("div");
    gyroMenuItem.className = "menu-item";
    gyroMenuItem.innerHTML = '<img src="../src/images/gyro.jpeg" alt="gyro">\
    <div>\
    <h1>Best Gyro in Town!</h1>\
    <br>\
    <ul>\
        <li>Large: $6,99</li>\
        <li>Medium: $5,99</li>\
        <li>Small: $4,99</li>\
    </ul>\
    </div>';
    menuSection.appendChild(gyroMenuItem)

    const cornedBeefMenuItem = document.createElement("div");
    cornedBeefMenuItem.className = "menu-item";
    cornedBeefMenuItem.innerHTML = '<img src="../src/images/corned_beef.png" alt="corned beef">\
    <div>\
    <h1>Corned Beef Sammich!</h1>\
    <br>\
    <ul>\
    <li>Footlong: $5,99</li>\
    <li>Both feet long: $8,99</li>\
    </ul>\
    </div>';
    menuSection.appendChild(cornedBeefMenuItem);

    const friesMenuItem = document.createElement("div");
    friesMenuItem.className = "menu-item";
    friesMenuItem.innerHTML = '<img src="../src/images/fries.jpeg" alt="side of fries">\
    <div>\
    <h1>Side of Fries!</h1>\
    <br>\
    <ul>\
        <li>Large: $4,99</li>\
        <li>Medium: $3,99</li>\
        <li>Small: $2,99</li>\
    </ul>\
    </div>'
    menuSection.appendChild(friesMenuItem)

    const sodaMenuItem = document.createElement("div");
    sodaMenuItem.classList = "menu-item"
    sodaMenuItem.innerHTML = '<img src="../src/images/soda.jpeg" alt="side of fries">\
    <div>\
    <h1>Soda of choice!</h1>\
    <br>\
    <ul>\
        <li>Large: $4,99</li>\
        <li>Small: $3,99</li>\
    </ul>\
    </div>'
    menuSection.appendChild(sodaMenuItem)

    content.appendChild(menuSection)
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudVNlY3Rpb24uY2xhc3NOYW1lID0gXCJtZW51XCI7XG4gICAgbWVudVNlY3Rpb25cblxuICAgIGNvbnN0IGd5cm9NZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3lyb01lbnVJdGVtLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG4gICAgZ3lyb01lbnVJdGVtLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvZ3lyby5qcGVnXCIgYWx0PVwiZ3lyb1wiPlxcXG4gICAgPGRpdj5cXFxuICAgIDxoMT5CZXN0IEd5cm8gaW4gVG93biE8L2gxPlxcXG4gICAgPGJyPlxcXG4gICAgPHVsPlxcXG4gICAgICAgIDxsaT5MYXJnZTogJDYsOTk8L2xpPlxcXG4gICAgICAgIDxsaT5NZWRpdW06ICQ1LDk5PC9saT5cXFxuICAgICAgICA8bGk+U21hbGw6ICQ0LDk5PC9saT5cXFxuICAgIDwvdWw+XFxcbiAgICA8L2Rpdj4nO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGd5cm9NZW51SXRlbSlcblxuICAgIGNvbnN0IGNvcm5lZEJlZWZNZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29ybmVkQmVlZk1lbnVJdGVtLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG4gICAgY29ybmVkQmVlZk1lbnVJdGVtLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvY29ybmVkX2JlZWYucG5nXCIgYWx0PVwiY29ybmVkIGJlZWZcIj5cXFxuICAgIDxkaXY+XFxcbiAgICA8aDE+Q29ybmVkIEJlZWYgU2FtbWljaCE8L2gxPlxcXG4gICAgPGJyPlxcXG4gICAgPHVsPlxcXG4gICAgPGxpPkZvb3Rsb25nOiAkNSw5OTwvbGk+XFxcbiAgICA8bGk+Qm90aCBmZWV0IGxvbmc6ICQ4LDk5PC9saT5cXFxuICAgIDwvdWw+XFxcbiAgICA8L2Rpdj4nO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNvcm5lZEJlZWZNZW51SXRlbSk7XG5cbiAgICBjb25zdCBmcmllc01lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmcmllc01lbnVJdGVtLmNsYXNzTmFtZSA9IFwibWVudS1pdGVtXCI7XG4gICAgZnJpZXNNZW51SXRlbS5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2ZyaWVzLmpwZWdcIiBhbHQ9XCJzaWRlIG9mIGZyaWVzXCI+XFxcbiAgICA8ZGl2PlxcXG4gICAgPGgxPlNpZGUgb2YgRnJpZXMhPC9oMT5cXFxuICAgIDxicj5cXFxuICAgIDx1bD5cXFxuICAgICAgICA8bGk+TGFyZ2U6ICQ0LDk5PC9saT5cXFxuICAgICAgICA8bGk+TWVkaXVtOiAkMyw5OTwvbGk+XFxcbiAgICAgICAgPGxpPlNtYWxsOiAkMiw5OTwvbGk+XFxcbiAgICA8L3VsPlxcXG4gICAgPC9kaXY+J1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGZyaWVzTWVudUl0ZW0pXG5cbiAgICBjb25zdCBzb2RhTWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNvZGFNZW51SXRlbS5jbGFzc0xpc3QgPSBcIm1lbnUtaXRlbVwiXG4gICAgc29kYU1lbnVJdGVtLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvc29kYS5qcGVnXCIgYWx0PVwic2lkZSBvZiBmcmllc1wiPlxcXG4gICAgPGRpdj5cXFxuICAgIDxoMT5Tb2RhIG9mIGNob2ljZSE8L2gxPlxcXG4gICAgPGJyPlxcXG4gICAgPHVsPlxcXG4gICAgICAgIDxsaT5MYXJnZTogJDQsOTk8L2xpPlxcXG4gICAgICAgIDxsaT5TbWFsbDogJDMsOTk8L2xpPlxcXG4gICAgPC91bD5cXFxuICAgIDwvZGl2PidcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChzb2RhTWVudUl0ZW0pXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=