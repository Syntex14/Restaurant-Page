/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/General-Tso-Chicken.jpg":
/*!*************************************!*\
  !*** ./src/General-Tso-Chicken.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b61fc695cad75ec53032.jpg";

/***/ }),

/***/ "./src/Orange-Chicken.jpg":
/*!********************************!*\
  !*** ./src/Orange-Chicken.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6a7ff81c284a577225c.jpg";

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
/* harmony export */   "default": () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var _General_Tso_Chicken_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General-Tso-Chicken.jpg */ "./src/General-Tso-Chicken.jpg");
/* harmony import */ var _Orange_Chicken_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orange-Chicken.jpg */ "./src/Orange-Chicken.jpg");




const menuItems = ["Menu", "Hours", "Contact Us"]; // used to create individual ol elements using textContent


const header = document.createElement('header');
header.setAttribute("id", "head");

const title = document.createElement("h1");
title.textContent = "ChinaTown Restuaurant";

const myHeaderPhoto = new Image();
myHeaderPhoto.setAttribute("id", "head-photo");
myHeaderPhoto.src = HeaderPhoto;

const navBar = document.createElement("nav");
const ul = document.createElement("ul");

for (const itemText of menuItems) {
    const ol = document.createElement("ol"); 
    const link = document.createElement("a");
    link.textContent = itemText; 
    link.setAttribute("href", "#");
    link.setAttribute("id", `${itemText}`); 
    ol.appendChild(link);  // Append the <a> element to the < li> element
    ul.appendChild(ol);    // Append the <li> element to the <ul> element
}
navBar.appendChild(ul);   // Append the <ul> element to the navigation bar



function recipes (dishName, dishImage, price, description) {


  return { dishName, price, dishImage, description };  
};

const generalTsoChicken = recipes("General Tso's Chicken", _General_Tso_Chicken_jpg__WEBPACK_IMPORTED_MODULE_0__, 11.99, "General Tso's Chicken is a sweet and savory dish that features bite-sized pieces of deep-fried chicken that are crispy on the outside and tender on the inside. The chicken is coated in a flavorful sauce made from soy sauce, hoisin sauce, garlic, ginger, and chili peppers. The sauce has a perfect balance of sweetness, tanginess, and spiciness, making it a favorite among those who enjoy a mix of flavors in their dishes. It's often garnished with sesame seeds and chopped green onions and is served with steamed white rice." );

const orangeChicken = recipes("Orange Chicken", _Orange_Chicken_jpg__WEBPACK_IMPORTED_MODULE_1__, 12.99, "Orange Chicken is a delicious dish that consists of battered and deep-fried chicken pieces tossed in a tangy and slightly sweet orange sauce. The sauce is made with fresh orange juice, soy sauce, ginger, garlic, and a touch of sugar. The combination of crispy chicken and the vibrant orange sauce creates a delightful contrast in textures and flavors. This dish is often enjoyed with a side of steamed vegetables and rice." );


function load() {
    const getDiv = document.getElementById("content");

    getDiv.appendChild(header);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCK0Q7QUFDVDs7O0FBR3RELG1EQUFtRDs7O0FBR25EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVM7QUFDeEMsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQjtBQUNBLDBCQUEwQjs7OztBQUkxQjs7O0FBR0EsV0FBVztBQUNYOztBQUVBLDJEQUEyRCxxREFBc0I7O0FBRWpGLGdEQUFnRCxnREFBa0I7OztBQUduRDtBQUNmOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGdlbmVyYWxUc29DaGlja2VuSW1hZ2UgZnJvbSAnLi9HZW5lcmFsLVRzby1DaGlja2VuLmpwZyc7XG5pbXBvcnQgb3JhbmdlQ2hpY2tlbkltYWdlIGZyb20gJy4vT3JhbmdlLUNoaWNrZW4uanBnJztcblxuXG5jb25zdCBtZW51SXRlbXMgPSBbXCJNZW51XCIsIFwiSG91cnNcIiwgXCJDb250YWN0IFVzXCJdOyAvLyB1c2VkIHRvIGNyZWF0ZSBpbmRpdmlkdWFsIG9sIGVsZW1lbnRzIHVzaW5nIHRleHRDb250ZW50XG5cblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5oZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkXCIpO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJDaGluYVRvd24gUmVzdHVhdXJhbnRcIjtcblxuY29uc3QgbXlIZWFkZXJQaG90byA9IG5ldyBJbWFnZSgpO1xubXlIZWFkZXJQaG90by5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWQtcGhvdG9cIik7XG5teUhlYWRlclBob3RvLnNyYyA9IEhlYWRlclBob3RvO1xuXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbmZvciAoY29uc3QgaXRlbVRleHQgb2YgbWVudUl0ZW1zKSB7XG4gICAgY29uc3Qgb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7IFxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rLnRleHRDb250ZW50ID0gaXRlbVRleHQ7IFxuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpdGVtVGV4dH1gKTsgXG4gICAgb2wuYXBwZW5kQ2hpbGQobGluayk7ICAvLyBBcHBlbmQgdGhlIDxhPiBlbGVtZW50IHRvIHRoZSA8IGxpPiBlbGVtZW50XG4gICAgdWwuYXBwZW5kQ2hpbGQob2wpOyAgICAvLyBBcHBlbmQgdGhlIDxsaT4gZWxlbWVudCB0byB0aGUgPHVsPiBlbGVtZW50XG59XG5uYXZCYXIuYXBwZW5kQ2hpbGQodWwpOyAgIC8vIEFwcGVuZCB0aGUgPHVsPiBlbGVtZW50IHRvIHRoZSBuYXZpZ2F0aW9uIGJhclxuXG5cblxuZnVuY3Rpb24gcmVjaXBlcyAoZGlzaE5hbWUsIGRpc2hJbWFnZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG5cblxuICByZXR1cm4geyBkaXNoTmFtZSwgcHJpY2UsIGRpc2hJbWFnZSwgZGVzY3JpcHRpb24gfTsgIFxufTtcblxuY29uc3QgZ2VuZXJhbFRzb0NoaWNrZW4gPSByZWNpcGVzKFwiR2VuZXJhbCBUc28ncyBDaGlja2VuXCIsIGdlbmVyYWxUc29DaGlja2VuSW1hZ2UsIDExLjk5LCBcIkdlbmVyYWwgVHNvJ3MgQ2hpY2tlbiBpcyBhIHN3ZWV0IGFuZCBzYXZvcnkgZGlzaCB0aGF0IGZlYXR1cmVzIGJpdGUtc2l6ZWQgcGllY2VzIG9mIGRlZXAtZnJpZWQgY2hpY2tlbiB0aGF0IGFyZSBjcmlzcHkgb24gdGhlIG91dHNpZGUgYW5kIHRlbmRlciBvbiB0aGUgaW5zaWRlLiBUaGUgY2hpY2tlbiBpcyBjb2F0ZWQgaW4gYSBmbGF2b3JmdWwgc2F1Y2UgbWFkZSBmcm9tIHNveSBzYXVjZSwgaG9pc2luIHNhdWNlLCBnYXJsaWMsIGdpbmdlciwgYW5kIGNoaWxpIHBlcHBlcnMuIFRoZSBzYXVjZSBoYXMgYSBwZXJmZWN0IGJhbGFuY2Ugb2Ygc3dlZXRuZXNzLCB0YW5naW5lc3MsIGFuZCBzcGljaW5lc3MsIG1ha2luZyBpdCBhIGZhdm9yaXRlIGFtb25nIHRob3NlIHdobyBlbmpveSBhIG1peCBvZiBmbGF2b3JzIGluIHRoZWlyIGRpc2hlcy4gSXQncyBvZnRlbiBnYXJuaXNoZWQgd2l0aCBzZXNhbWUgc2VlZHMgYW5kIGNob3BwZWQgZ3JlZW4gb25pb25zIGFuZCBpcyBzZXJ2ZWQgd2l0aCBzdGVhbWVkIHdoaXRlIHJpY2UuXCIgKTtcblxuY29uc3Qgb3JhbmdlQ2hpY2tlbiA9IHJlY2lwZXMoXCJPcmFuZ2UgQ2hpY2tlblwiLCBvcmFuZ2VDaGlja2VuSW1hZ2UsIDEyLjk5LCBcIk9yYW5nZSBDaGlja2VuIGlzIGEgZGVsaWNpb3VzIGRpc2ggdGhhdCBjb25zaXN0cyBvZiBiYXR0ZXJlZCBhbmQgZGVlcC1mcmllZCBjaGlja2VuIHBpZWNlcyB0b3NzZWQgaW4gYSB0YW5neSBhbmQgc2xpZ2h0bHkgc3dlZXQgb3JhbmdlIHNhdWNlLiBUaGUgc2F1Y2UgaXMgbWFkZSB3aXRoIGZyZXNoIG9yYW5nZSBqdWljZSwgc295IHNhdWNlLCBnaW5nZXIsIGdhcmxpYywgYW5kIGEgdG91Y2ggb2Ygc3VnYXIuIFRoZSBjb21iaW5hdGlvbiBvZiBjcmlzcHkgY2hpY2tlbiBhbmQgdGhlIHZpYnJhbnQgb3JhbmdlIHNhdWNlIGNyZWF0ZXMgYSBkZWxpZ2h0ZnVsIGNvbnRyYXN0IGluIHRleHR1cmVzIGFuZCBmbGF2b3JzLiBUaGlzIGRpc2ggaXMgb2Z0ZW4gZW5qb3llZCB3aXRoIGEgc2lkZSBvZiBzdGVhbWVkIHZlZ2V0YWJsZXMgYW5kIHJpY2UuXCIgKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkKCkge1xuICAgIGNvbnN0IGdldERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGdldERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==