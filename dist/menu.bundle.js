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

    const menuSectionHeader = document.createElement("h1");
    menuSectionHeader.className = "menu-header"
    menuSectionHeader.innerHTML = "Check out our menu!";
    menuSection.appendChild(menuSectionHeader);

    const menuHolder = document.createElement("div");
    menuHolder.className = "menu-holder";

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
    menuHolder.appendChild(gyroMenuItem);

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
    menuHolder.appendChild(cornedBeefMenuItem);

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
    </div>';
    menuHolder.appendChild(friesMenuItem);

    const sodaMenuItem = document.createElement("div");
    sodaMenuItem.classList = "menu-item";
    sodaMenuItem.innerHTML = '<img src="../src/images/soda.jpeg" alt="side of fries">\
    <div>\
    <h1>Soda of choice!</h1>\
    <br>\
    <ul>\
        <li>Large: $4,99</li>\
        <li>Small: $3,99</li>\
    </ul>\
    </div>';
    menuHolder.appendChild(sodaMenuItem);

    menuSection.appendChild(menuHolder);
    content.appendChild(menuSection);
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51U2VjdGlvbi5jbGFzc05hbWUgPSBcIm1lbnVcIjtcblxuICAgIGNvbnN0IG1lbnVTZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lbnVTZWN0aW9uSGVhZGVyLmNsYXNzTmFtZSA9IFwibWVudS1oZWFkZXJcIlxuICAgIG1lbnVTZWN0aW9uSGVhZGVyLmlubmVySFRNTCA9IFwiQ2hlY2sgb3V0IG91ciBtZW51IVwiO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uSGVhZGVyKTtcblxuICAgIGNvbnN0IG1lbnVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVIb2xkZXIuY2xhc3NOYW1lID0gXCJtZW51LWhvbGRlclwiO1xuXG4gICAgY29uc3QgZ3lyb01lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBneXJvTWVudUl0ZW0uY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcbiAgICBneXJvTWVudUl0ZW0uaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9neXJvLmpwZWdcIiBhbHQ9XCJneXJvXCI+XFxcbiAgICA8ZGl2PlxcXG4gICAgPGgxPkJlc3QgR3lybyBpbiBUb3duITwvaDE+XFxcbiAgICA8YnI+XFxcbiAgICA8dWw+XFxcbiAgICAgICAgPGxpPkxhcmdlOiAkNiw5OTwvbGk+XFxcbiAgICAgICAgPGxpPk1lZGl1bTogJDUsOTk8L2xpPlxcXG4gICAgICAgIDxsaT5TbWFsbDogJDQsOTk8L2xpPlxcXG4gICAgPC91bD5cXFxuICAgIDwvZGl2Pic7XG4gICAgbWVudUhvbGRlci5hcHBlbmRDaGlsZChneXJvTWVudUl0ZW0pO1xuXG4gICAgY29uc3QgY29ybmVkQmVlZk1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb3JuZWRCZWVmTWVudUl0ZW0uY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcbiAgICBjb3JuZWRCZWVmTWVudUl0ZW0uaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9jb3JuZWRfYmVlZi5wbmdcIiBhbHQ9XCJjb3JuZWQgYmVlZlwiPlxcXG4gICAgPGRpdj5cXFxuICAgIDxoMT5Db3JuZWQgQmVlZiBTYW1taWNoITwvaDE+XFxcbiAgICA8YnI+XFxcbiAgICA8dWw+XFxcbiAgICA8bGk+Rm9vdGxvbmc6ICQ1LDk5PC9saT5cXFxuICAgIDxsaT5Cb3RoIGZlZXQgbG9uZzogJDgsOTk8L2xpPlxcXG4gICAgPC91bD5cXFxuICAgIDwvZGl2Pic7XG4gICAgbWVudUhvbGRlci5hcHBlbmRDaGlsZChjb3JuZWRCZWVmTWVudUl0ZW0pO1xuXG4gICAgY29uc3QgZnJpZXNNZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJpZXNNZW51SXRlbS5jbGFzc05hbWUgPSBcIm1lbnUtaXRlbVwiO1xuICAgIGZyaWVzTWVudUl0ZW0uaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9mcmllcy5qcGVnXCIgYWx0PVwic2lkZSBvZiBmcmllc1wiPlxcXG4gICAgPGRpdj5cXFxuICAgIDxoMT5TaWRlIG9mIEZyaWVzITwvaDE+XFxcbiAgICA8YnI+XFxcbiAgICA8dWw+XFxcbiAgICAgICAgPGxpPkxhcmdlOiAkNCw5OTwvbGk+XFxcbiAgICAgICAgPGxpPk1lZGl1bTogJDMsOTk8L2xpPlxcXG4gICAgICAgIDxsaT5TbWFsbDogJDIsOTk8L2xpPlxcXG4gICAgPC91bD5cXFxuICAgIDwvZGl2Pic7XG4gICAgbWVudUhvbGRlci5hcHBlbmRDaGlsZChmcmllc01lbnVJdGVtKTtcblxuICAgIGNvbnN0IHNvZGFNZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc29kYU1lbnVJdGVtLmNsYXNzTGlzdCA9IFwibWVudS1pdGVtXCI7XG4gICAgc29kYU1lbnVJdGVtLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvc29kYS5qcGVnXCIgYWx0PVwic2lkZSBvZiBmcmllc1wiPlxcXG4gICAgPGRpdj5cXFxuICAgIDxoMT5Tb2RhIG9mIGNob2ljZSE8L2gxPlxcXG4gICAgPGJyPlxcXG4gICAgPHVsPlxcXG4gICAgICAgIDxsaT5MYXJnZTogJDQsOTk8L2xpPlxcXG4gICAgICAgIDxsaT5TbWFsbDogJDMsOTk8L2xpPlxcXG4gICAgPC91bD5cXFxuICAgIDwvZGl2Pic7XG4gICAgbWVudUhvbGRlci5hcHBlbmRDaGlsZChzb2RhTWVudUl0ZW0pO1xuXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUhvbGRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==