/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


console.log("Hi, just checking to see if the webpack set up worked!");


const header = document.createElement('header');
header.setAttribute("id", "head");
const title = document.createElement("h1");
title.textContent = "ChinaTown Restuaurant";
const navBar = document.createElement("nav");

const ul = document.createElement("ul");
const li = document.createElement("li");

ul.append(li);
ul.append(li);
navBar.append(ul);

const headerText = document.createElement("p");
headerText.textContent = "Proudly serving Denton 15 years of authentic Chinese food";

header.append(title, navBar, headerText);


const getDiv = document.getElementById("content");

getDiv.appendChild(header);


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnNvbGUubG9nKFwiSGksIGp1c3QgY2hlY2tpbmcgdG8gc2VlIGlmIHRoZSB3ZWJwYWNrIHNldCB1cCB3b3JrZWQhXCIpO1xuXG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZFwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIkNoaW5hVG93biBSZXN0dWF1cmFudFwiO1xuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblxuY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5jb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxudWwuYXBwZW5kKGxpKTtcbnVsLmFwcGVuZChsaSk7XG5uYXZCYXIuYXBwZW5kKHVsKTtcblxuY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiUHJvdWRseSBzZXJ2aW5nIERlbnRvbiAxNSB5ZWFycyBvZiBhdXRoZW50aWMgQ2hpbmVzZSBmb29kXCI7XG5cbmhlYWRlci5hcHBlbmQodGl0bGUsIG5hdkJhciwgaGVhZGVyVGV4dCk7XG5cblxuY29uc3QgZ2V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5nZXREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9