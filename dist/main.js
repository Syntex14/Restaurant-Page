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
const headerText = document.createElement("p");
headerText.textContent = "Proudly serving Denton 15 years of authentic Chinese food";

header.append(title, navBar, headerText);


const getDiv = document.getElementById("content");

getDiv.appendChild(header);


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc29sZS5sb2coXCJIaSwganVzdCBjaGVja2luZyB0byBzZWUgaWYgdGhlIHdlYnBhY2sgc2V0IHVwIHdvcmtlZCFcIik7XG5cblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5oZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkXCIpO1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG50aXRsZS50ZXh0Q29udGVudCA9IFwiQ2hpbmFUb3duIFJlc3R1YXVyYW50XCI7XG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiUHJvdWRseSBzZXJ2aW5nIERlbnRvbiAxNSB5ZWFycyBvZiBhdXRoZW50aWMgQ2hpbmVzZSBmb29kXCI7XG5cbmhlYWRlci5hcHBlbmQodGl0bGUsIG5hdkJhciwgaGVhZGVyVGV4dCk7XG5cblxuY29uc3QgZ2V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5nZXREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9