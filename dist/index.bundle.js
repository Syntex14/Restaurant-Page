/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#content {
    text-align: center;
    width: 80%;
}

h1 {
    font-size: 60px;
}

#head-photo {
    height: 100px;
    width: 100px;
    
}
nav {
    margin: 0;
    
}

p {
    margin: 0;
    
}

ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
}

ol {
    margin: 0;
    padding: 0;
    
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;;AAEhB;AACA;IACI,SAAS;;AAEb;;AAEA;IACI,SAAS;;AAEb;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,SAAS;IACT,UAAU;;AAEd","sourcesContent":["body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n}\n\n#content {\n    text-align: center;\n    width: 80%;\n}\n\nh1 {\n    font-size: 60px;\n}\n\n#head-photo {\n    height: 100px;\n    width: 100px;\n    \n}\nnav {\n    margin: 0;\n    \n}\n\np {\n    margin: 0;\n    \n}\n\nul {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: space-evenly;\n}\n\nol {\n    margin: 0;\n    padding: 0;\n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/moduleLoader.js":
/*!*****************************!*\
  !*** ./src/moduleLoader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearDOM),
/* harmony export */   displayModule: () => (/* binding */ displayModule),
/* harmony export */   loadModule: () => (/* binding */ loadModule)
/* harmony export */ });


function clearDOM() {
    const getPrimordialDiv = document.getElementById("content");
    getPrimordialDiv.innerHTML = "";
}

function displayModule(moduleName) {
    const getContentDiv = document.getElementById("content");

    const module = loadModule(moduleName);

    module.load(getContentDiv);
}

function loadModule(moduleName) {
    return moduleLoaders[moduleName];
};

const moduleLoaders = {
    menu: loadMenu,
    weather: loadWeather
};




/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectWeatherData: () => (/* binding */ connectWeatherData),
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData),
/* harmony export */   weatherCity: () => (/* binding */ weatherCity),
/* harmony export */   weatherCondition: () => (/* binding */ weatherCondition),
/* harmony export */   weatherIcon: () => (/* binding */ weatherIcon),
/* harmony export */   weatherState: () => (/* binding */ weatherState),
/* harmony export */   weatherTemperature: () => (/* binding */ weatherTemperature)
/* harmony export */ });
let weatherCity;
let weatherState;
let weatherCondition;
let weatherTemperature;
let weatherIcon = "#";

function fetchWeatherData(locationCityName) {
    return fetch("http://api.weatherapi.com/v1/forecast.json?key=f8a0286f0fe64d2897e133302231408&q=Denton&days=1&aqi=no&alerts=no")
        .then(res => {return res.json()})
        .then(data => {
            let weatherData = data;
            console.log(weatherData);
            connectWeatherData(weatherData);
        });
}

function connectWeatherData (weatherData) {
    weatherCity = weatherData.location.name;
    weatherState = weatherData.location.region;
    weatherCondition = weatherData.current.condition.text;
    weatherTemperature = weatherData.current.temp_f;
    weatherIcon = weatherData.current.condition.icon;
 
}





// going to need:
    // currentDayConditions
    // currentDayTemps
    // currentDay
    // currentTime

/***/ }),

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

/***/ }),

/***/ "./src/china-bowl.png":
/*!****************************!*\
  !*** ./src/china-bowl.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30e2920016c83b00ff7e.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _china_bowl_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./china-bowl.png */ "./src/china-bowl.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");
/* harmony import */ var _moduleLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleLoader.js */ "./src/moduleLoader.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
// Need to understand
    // webpack and how to load modules
        // Entry Points
        // Output
        // dynamic import
            // default
            // 









// Creates the Header section

const menuItems = ["Menu", "Hours", "Contact Us"]; // used to create individual ol elements using textContent


const header = document.createElement('header');
header.setAttribute("id", "head");

const title = document.createElement("h1");
title.textContent = "ChinaTown Restuaurant";

const myHeaderPhoto = new Image();
myHeaderPhoto.setAttribute("id", "head-photo");
myHeaderPhoto.src = _china_bowl_png__WEBPACK_IMPORTED_MODULE_0__;

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


function navBarClickers() {
    const menuClicker = document.getElementById("Menu").addEventListener("click", () => loadModule('menu.js'));
    console.log(menuClicker);
}

function loadModule () {
    (0,_moduleLoader_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

}

const headerText = document.createElement("p");
headerText.textContent = "Proudly serving Denton 15 years of authentic Chinese food...";

header.append(title, myHeaderPhoto, navBar, headerText);

// Creates the About Us section

const aboutText = document.createElement("h2");
aboutText.textContent = "About Us";

const aboutTextParagraph = document.createElement("p");
aboutTextParagraph.textContent = "Welcome to our charming Chinese takeout and buffet nestled in the heart of mid-town Denton, TX! With a deep love for genuine flavors and a strong focus on excellent service, we bring the diverse world of Chinese cuisine right to your table. Our establishment takes joy in presenting a wide array of delectable dishes that capture the true essence of traditional Chinese cooking, tailored to suit the distinct preferences of our local community. Whether you're craving the comforting embrace of timeless favorites or ready to explore exciting chef's specials, our skilled culinary team prepares each dish with care and precision. As a cornerstone of Denton's dining scene, we're dedicated to fashioning a welcoming ambiance where families, friends, and individuals can gather to relish the simple joy of sharing a meal. Join us for an adventure that honors both authenticity and innovation, all set against the lively backdrop of mid-town Denton.";

const aboutDiv = document.createElement("div");
aboutDiv.setAttribute("id", "about-div");

aboutDiv.append(aboutText, aboutTextParagraph);

// Creates the Weather section

const locationTitle = document.createElement("h2");
locationTitle.textContent = "Local Weather";

const locationText = document.createElement("p");
locationText.textContent = "Hot or cold, we are always there for you!"

// Creates the City and State inputs
// City -> 
const locationCityName = document.createElement("h3");
const locationStateName = document.createElement("h3");
const locationWeatherCondition = document.createElement("h4");
const locationWeatherTemperature = document.createElement("h4");
const locationWeatherIcon = new Image();


(0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.fetchWeatherData)().then(() => {

    locationCityName.textContent = _weather_js__WEBPACK_IMPORTED_MODULE_2__.weatherCity;
    locationStateName.textContent = _weather_js__WEBPACK_IMPORTED_MODULE_2__.weatherState;
    locationWeatherCondition.textContent = _weather_js__WEBPACK_IMPORTED_MODULE_2__.weatherCondition;
    locationWeatherTemperature.textContent = _weather_js__WEBPACK_IMPORTED_MODULE_2__.weatherTemperature;
    locationWeatherIcon.src = _weather_js__WEBPACK_IMPORTED_MODULE_2__.weatherIcon;
});


// Creates the weather div where everything weather-div related is inputted

const locationDiv = document.createElement("div");
locationDiv.setAttribute("id", "location-div");


const imgGifAPI = new Image();
imgGifAPI.setAttribute("id", "gif-image");
imgGifAPI.src = "#";

fetch('https://api.giphy.com/v1/gifs/translate?api_key=w1ra1rONC8I9vp4UFGFmEjTwiBgK9XOI&s=cats')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        imgGifAPI.src = response.data.images.original.url;
    });
locationDiv.append(locationTitle, locationText,locationCityName, locationStateName, locationWeatherCondition, locationWeatherTemperature, locationWeatherIcon, imgGifAPI);

// Gets the content div in index.html and appends each section to the content div

const getDiv = document.getElementById("content");

getDiv.appendChild(header);
getDiv.appendChild(aboutDiv);
getDiv.appendChild(locationDiv);


document.addEventListener("DOMContentLoaded", function () {
    navBarClickers();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLCtCQUErQixvQkFBb0IsOEJBQThCLDBCQUEwQixvQkFBb0IsZ0JBQWdCLEdBQUcsY0FBYyx5QkFBeUIsaUJBQWlCLEdBQUcsUUFBUSxzQkFBc0IsR0FBRyxpQkFBaUIsb0JBQW9CLG1CQUFtQixTQUFTLE9BQU8sZ0JBQWdCLFNBQVMsT0FBTyxnQkFBZ0IsU0FBUyxRQUFRLGdCQUFnQixpQkFBaUIsb0JBQW9CLG9DQUFvQyxHQUFHLFFBQVEsZ0JBQWdCLGlCQUFpQixTQUFTLG1CQUFtQjtBQUNsNEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNsRDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYitEO0FBQ1Q7OztBQUd0RCxtREFBbUQ7OztBQUduRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0I7QUFDQSwwQkFBMEI7Ozs7QUFJMUI7OztBQUdBLFdBQVc7QUFDWDs7QUFFQSwyREFBMkQscURBQXNCOztBQUVqRixnREFBZ0QsZ0RBQWtCOzs7QUFHbkQ7QUFDZjs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q2U7QUFDZjtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qk87QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNQO0FBQ0Esc0JBQXNCLGtCQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJMkM7QUFDdEI7QUFDdUc7QUFDcEY7QUFDWDs7QUFFN0I7O0FBRUEsbURBQW1EOzs7QUFHbkQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQVc7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0I7QUFDQSwwQkFBMEI7OztBQUcxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksNERBQVE7QUFDWixJQUFJLG9EQUFJOztBQUVSOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSw2REFBZ0I7O0FBRWhCLG1DQUFtQyxvREFBVztBQUM5QyxvQ0FBb0MscURBQVk7QUFDaEQsMkNBQTJDLHlEQUFnQjtBQUMzRCw2Q0FBNkMsMkRBQWtCO0FBQy9ELDhCQUE4QixvREFBVztBQUN6QyxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG5cbiNoZWFkLXBob3RvIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBcbn1cbm5hdiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIFxufVxuXG5wIHtcbiAgICBtYXJnaW46IDA7XG4gICAgXG59XG5cbnVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG5vbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxTQUFTOztBQUViOztBQUVBO0lBQ0ksU0FBUzs7QUFFYjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVOztBQUVkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbiNoZWFkLXBob3RvIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBcXG59XFxubmF2IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBcXG59XFxuXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgXFxufVxcblxcbnVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxub2wge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdlbmVyYWxUc29DaGlja2VuSW1hZ2UgZnJvbSAnLi9HZW5lcmFsLVRzby1DaGlja2VuLmpwZyc7XG5pbXBvcnQgb3JhbmdlQ2hpY2tlbkltYWdlIGZyb20gJy4vT3JhbmdlLUNoaWNrZW4uanBnJztcblxuXG5jb25zdCBtZW51SXRlbXMgPSBbXCJNZW51XCIsIFwiSG91cnNcIiwgXCJDb250YWN0IFVzXCJdOyAvLyB1c2VkIHRvIGNyZWF0ZSBpbmRpdmlkdWFsIG9sIGVsZW1lbnRzIHVzaW5nIHRleHRDb250ZW50XG5cblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5oZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkXCIpO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbnRpdGxlLnRleHRDb250ZW50ID0gXCJDaGluYVRvd24gUmVzdHVhdXJhbnRcIjtcblxuY29uc3QgbXlIZWFkZXJQaG90byA9IG5ldyBJbWFnZSgpO1xubXlIZWFkZXJQaG90by5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWQtcGhvdG9cIik7XG5teUhlYWRlclBob3RvLnNyYyA9IEhlYWRlclBob3RvO1xuXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbmZvciAoY29uc3QgaXRlbVRleHQgb2YgbWVudUl0ZW1zKSB7XG4gICAgY29uc3Qgb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7IFxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaW5rLnRleHRDb250ZW50ID0gaXRlbVRleHQ7IFxuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpdGVtVGV4dH1gKTsgXG4gICAgb2wuYXBwZW5kQ2hpbGQobGluayk7ICAvLyBBcHBlbmQgdGhlIDxhPiBlbGVtZW50IHRvIHRoZSA8IGxpPiBlbGVtZW50XG4gICAgdWwuYXBwZW5kQ2hpbGQob2wpOyAgICAvLyBBcHBlbmQgdGhlIDxsaT4gZWxlbWVudCB0byB0aGUgPHVsPiBlbGVtZW50XG59XG5uYXZCYXIuYXBwZW5kQ2hpbGQodWwpOyAgIC8vIEFwcGVuZCB0aGUgPHVsPiBlbGVtZW50IHRvIHRoZSBuYXZpZ2F0aW9uIGJhclxuXG5cblxuZnVuY3Rpb24gcmVjaXBlcyAoZGlzaE5hbWUsIGRpc2hJbWFnZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG5cblxuICByZXR1cm4geyBkaXNoTmFtZSwgcHJpY2UsIGRpc2hJbWFnZSwgZGVzY3JpcHRpb24gfTsgIFxufTtcblxuY29uc3QgZ2VuZXJhbFRzb0NoaWNrZW4gPSByZWNpcGVzKFwiR2VuZXJhbCBUc28ncyBDaGlja2VuXCIsIGdlbmVyYWxUc29DaGlja2VuSW1hZ2UsIDExLjk5LCBcIkdlbmVyYWwgVHNvJ3MgQ2hpY2tlbiBpcyBhIHN3ZWV0IGFuZCBzYXZvcnkgZGlzaCB0aGF0IGZlYXR1cmVzIGJpdGUtc2l6ZWQgcGllY2VzIG9mIGRlZXAtZnJpZWQgY2hpY2tlbiB0aGF0IGFyZSBjcmlzcHkgb24gdGhlIG91dHNpZGUgYW5kIHRlbmRlciBvbiB0aGUgaW5zaWRlLiBUaGUgY2hpY2tlbiBpcyBjb2F0ZWQgaW4gYSBmbGF2b3JmdWwgc2F1Y2UgbWFkZSBmcm9tIHNveSBzYXVjZSwgaG9pc2luIHNhdWNlLCBnYXJsaWMsIGdpbmdlciwgYW5kIGNoaWxpIHBlcHBlcnMuIFRoZSBzYXVjZSBoYXMgYSBwZXJmZWN0IGJhbGFuY2Ugb2Ygc3dlZXRuZXNzLCB0YW5naW5lc3MsIGFuZCBzcGljaW5lc3MsIG1ha2luZyBpdCBhIGZhdm9yaXRlIGFtb25nIHRob3NlIHdobyBlbmpveSBhIG1peCBvZiBmbGF2b3JzIGluIHRoZWlyIGRpc2hlcy4gSXQncyBvZnRlbiBnYXJuaXNoZWQgd2l0aCBzZXNhbWUgc2VlZHMgYW5kIGNob3BwZWQgZ3JlZW4gb25pb25zIGFuZCBpcyBzZXJ2ZWQgd2l0aCBzdGVhbWVkIHdoaXRlIHJpY2UuXCIgKTtcblxuY29uc3Qgb3JhbmdlQ2hpY2tlbiA9IHJlY2lwZXMoXCJPcmFuZ2UgQ2hpY2tlblwiLCBvcmFuZ2VDaGlja2VuSW1hZ2UsIDEyLjk5LCBcIk9yYW5nZSBDaGlja2VuIGlzIGEgZGVsaWNpb3VzIGRpc2ggdGhhdCBjb25zaXN0cyBvZiBiYXR0ZXJlZCBhbmQgZGVlcC1mcmllZCBjaGlja2VuIHBpZWNlcyB0b3NzZWQgaW4gYSB0YW5neSBhbmQgc2xpZ2h0bHkgc3dlZXQgb3JhbmdlIHNhdWNlLiBUaGUgc2F1Y2UgaXMgbWFkZSB3aXRoIGZyZXNoIG9yYW5nZSBqdWljZSwgc295IHNhdWNlLCBnaW5nZXIsIGdhcmxpYywgYW5kIGEgdG91Y2ggb2Ygc3VnYXIuIFRoZSBjb21iaW5hdGlvbiBvZiBjcmlzcHkgY2hpY2tlbiBhbmQgdGhlIHZpYnJhbnQgb3JhbmdlIHNhdWNlIGNyZWF0ZXMgYSBkZWxpZ2h0ZnVsIGNvbnRyYXN0IGluIHRleHR1cmVzIGFuZCBmbGF2b3JzLiBUaGlzIGRpc2ggaXMgb2Z0ZW4gZW5qb3llZCB3aXRoIGEgc2lkZSBvZiBzdGVhbWVkIHZlZ2V0YWJsZXMgYW5kIHJpY2UuXCIgKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkKCkge1xuICAgIGNvbnN0IGdldERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGdldERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckRPTSgpIHtcbiAgICBjb25zdCBnZXRQcmltb3JkaWFsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGdldFByaW1vcmRpYWxEaXYuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNb2R1bGUobW9kdWxlTmFtZSkge1xuICAgIGNvbnN0IGdldENvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBtb2R1bGUgPSBsb2FkTW9kdWxlKG1vZHVsZU5hbWUpO1xuXG4gICAgbW9kdWxlLmxvYWQoZ2V0Q29udGVudERpdik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgICByZXR1cm4gbW9kdWxlTG9hZGVyc1ttb2R1bGVOYW1lXTtcbn07XG5cbmNvbnN0IG1vZHVsZUxvYWRlcnMgPSB7XG4gICAgbWVudTogbG9hZE1lbnUsXG4gICAgd2VhdGhlcjogbG9hZFdlYXRoZXJcbn07XG5cblxuIiwiZXhwb3J0IGxldCB3ZWF0aGVyQ2l0eTtcbmV4cG9ydCBsZXQgd2VhdGhlclN0YXRlO1xuZXhwb3J0IGxldCB3ZWF0aGVyQ29uZGl0aW9uO1xuZXhwb3J0IGxldCB3ZWF0aGVyVGVtcGVyYXR1cmU7XG5leHBvcnQgbGV0IHdlYXRoZXJJY29uID0gXCIjXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uQ2l0eU5hbWUpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWY4YTAyODZmMGZlNjRkMjg5N2UxMzMzMDIyMzE0MDgmcT1EZW50b24mZGF5cz0xJmFxaT1ubyZhbGVydHM9bm9cIilcbiAgICAgICAgLnRoZW4ocmVzID0+IHtyZXR1cm4gcmVzLmpzb24oKX0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbGV0IHdlYXRoZXJEYXRhID0gZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgICAgIGNvbm5lY3RXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29ubmVjdFdlYXRoZXJEYXRhICh3ZWF0aGVyRGF0YSkge1xuICAgIHdlYXRoZXJDaXR5ID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcbiAgICB3ZWF0aGVyU3RhdGUgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5yZWdpb247XG4gICAgd2VhdGhlckNvbmRpdGlvbiA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgd2VhdGhlclRlbXBlcmF0dXJlID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Y7XG4gICAgd2VhdGhlckljb24gPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuIFxufVxuXG5cblxuXG5cbi8vIGdvaW5nIHRvIG5lZWQ6XG4gICAgLy8gY3VycmVudERheUNvbmRpdGlvbnNcbiAgICAvLyBjdXJyZW50RGF5VGVtcHNcbiAgICAvLyBjdXJyZW50RGF5XG4gICAgLy8gY3VycmVudFRpbWUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIE5lZWQgdG8gdW5kZXJzdGFuZFxuICAgIC8vIHdlYnBhY2sgYW5kIGhvdyB0byBsb2FkIG1vZHVsZXNcbiAgICAgICAgLy8gRW50cnkgUG9pbnRzXG4gICAgICAgIC8vIE91dHB1dFxuICAgICAgICAvLyBkeW5hbWljIGltcG9ydFxuICAgICAgICAgICAgLy8gZGVmYXVsdFxuICAgICAgICAgICAgLy8gXG5cblxuXG5pbXBvcnQgSGVhZGVyUGhvdG8gZnJvbSAnLi9jaGluYS1ib3dsLnBuZyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7ZmV0Y2hXZWF0aGVyRGF0YSwgd2VhdGhlckNpdHksIHdlYXRoZXJTdGF0ZSwgd2VhdGhlckNvbmRpdGlvbiwgd2VhdGhlclRlbXBlcmF0dXJlLCB3ZWF0aGVySWNvbn0gZnJvbSAnLi93ZWF0aGVyLmpzJztcbmltcG9ydCBjbGVhckRPTSBmcm9tICcuL21vZHVsZUxvYWRlci5qcydcbmltcG9ydCBsb2FkIGZyb20gJy4vbWVudS5qcyc7XG5cbi8vIENyZWF0ZXMgdGhlIEhlYWRlciBzZWN0aW9uXG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcIk1lbnVcIiwgXCJIb3Vyc1wiLCBcIkNvbnRhY3QgVXNcIl07IC8vIHVzZWQgdG8gY3JlYXRlIGluZGl2aWR1YWwgb2wgZWxlbWVudHMgdXNpbmcgdGV4dENvbnRlbnRcblxuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbmhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRcIik7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIkNoaW5hVG93biBSZXN0dWF1cmFudFwiO1xuXG5jb25zdCBteUhlYWRlclBob3RvID0gbmV3IEltYWdlKCk7XG5teUhlYWRlclBob3RvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZC1waG90b1wiKTtcbm15SGVhZGVyUGhvdG8uc3JjID0gSGVhZGVyUGhvdG87XG5cbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5jb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuZm9yIChjb25zdCBpdGVtVGV4dCBvZiBtZW51SXRlbXMpIHtcbiAgICBjb25zdCBvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTsgXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBpdGVtVGV4dDsgXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2l0ZW1UZXh0fWApOyBcbiAgICBvbC5hcHBlbmRDaGlsZChsaW5rKTsgIC8vIEFwcGVuZCB0aGUgPGE+IGVsZW1lbnQgdG8gdGhlIDwgbGk+IGVsZW1lbnRcbiAgICB1bC5hcHBlbmRDaGlsZChvbCk7ICAgIC8vIEFwcGVuZCB0aGUgPGxpPiBlbGVtZW50IHRvIHRoZSA8dWw+IGVsZW1lbnRcbn1cbm5hdkJhci5hcHBlbmRDaGlsZCh1bCk7ICAgLy8gQXBwZW5kIHRoZSA8dWw+IGVsZW1lbnQgdG8gdGhlIG5hdmlnYXRpb24gYmFyXG5cblxuZnVuY3Rpb24gbmF2QmFyQ2xpY2tlcnMoKSB7XG4gICAgY29uc3QgbWVudUNsaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxvYWRNb2R1bGUoJ21lbnUuanMnKSk7XG4gICAgY29uc29sZS5sb2cobWVudUNsaWNrZXIpO1xufVxuXG5mdW5jdGlvbiBsb2FkTW9kdWxlICgpIHtcbiAgICBjbGVhckRPTSgpO1xuICAgIGxvYWQoKTtcblxufVxuXG5jb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5oZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJQcm91ZGx5IHNlcnZpbmcgRGVudG9uIDE1IHllYXJzIG9mIGF1dGhlbnRpYyBDaGluZXNlIGZvb2QuLi5cIjtcblxuaGVhZGVyLmFwcGVuZCh0aXRsZSwgbXlIZWFkZXJQaG90bywgbmF2QmFyLCBoZWFkZXJUZXh0KTtcblxuLy8gQ3JlYXRlcyB0aGUgQWJvdXQgVXMgc2VjdGlvblxuXG5jb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5hYm91dFRleHQudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG5cbmNvbnN0IGFib3V0VGV4dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuYWJvdXRUZXh0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIG91ciBjaGFybWluZyBDaGluZXNlIHRha2VvdXQgYW5kIGJ1ZmZldCBuZXN0bGVkIGluIHRoZSBoZWFydCBvZiBtaWQtdG93biBEZW50b24sIFRYISBXaXRoIGEgZGVlcCBsb3ZlIGZvciBnZW51aW5lIGZsYXZvcnMgYW5kIGEgc3Ryb25nIGZvY3VzIG9uIGV4Y2VsbGVudCBzZXJ2aWNlLCB3ZSBicmluZyB0aGUgZGl2ZXJzZSB3b3JsZCBvZiBDaGluZXNlIGN1aXNpbmUgcmlnaHQgdG8geW91ciB0YWJsZS4gT3VyIGVzdGFibGlzaG1lbnQgdGFrZXMgam95IGluIHByZXNlbnRpbmcgYSB3aWRlIGFycmF5IG9mIGRlbGVjdGFibGUgZGlzaGVzIHRoYXQgY2FwdHVyZSB0aGUgdHJ1ZSBlc3NlbmNlIG9mIHRyYWRpdGlvbmFsIENoaW5lc2UgY29va2luZywgdGFpbG9yZWQgdG8gc3VpdCB0aGUgZGlzdGluY3QgcHJlZmVyZW5jZXMgb2Ygb3VyIGxvY2FsIGNvbW11bml0eS4gV2hldGhlciB5b3UncmUgY3JhdmluZyB0aGUgY29tZm9ydGluZyBlbWJyYWNlIG9mIHRpbWVsZXNzIGZhdm9yaXRlcyBvciByZWFkeSB0byBleHBsb3JlIGV4Y2l0aW5nIGNoZWYncyBzcGVjaWFscywgb3VyIHNraWxsZWQgY3VsaW5hcnkgdGVhbSBwcmVwYXJlcyBlYWNoIGRpc2ggd2l0aCBjYXJlIGFuZCBwcmVjaXNpb24uIEFzIGEgY29ybmVyc3RvbmUgb2YgRGVudG9uJ3MgZGluaW5nIHNjZW5lLCB3ZSdyZSBkZWRpY2F0ZWQgdG8gZmFzaGlvbmluZyBhIHdlbGNvbWluZyBhbWJpYW5jZSB3aGVyZSBmYW1pbGllcywgZnJpZW5kcywgYW5kIGluZGl2aWR1YWxzIGNhbiBnYXRoZXIgdG8gcmVsaXNoIHRoZSBzaW1wbGUgam95IG9mIHNoYXJpbmcgYSBtZWFsLiBKb2luIHVzIGZvciBhbiBhZHZlbnR1cmUgdGhhdCBob25vcnMgYm90aCBhdXRoZW50aWNpdHkgYW5kIGlubm92YXRpb24sIGFsbCBzZXQgYWdhaW5zdCB0aGUgbGl2ZWx5IGJhY2tkcm9wIG9mIG1pZC10b3duIERlbnRvbi5cIjtcblxuY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWJvdXREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dC1kaXZcIik7XG5cbmFib3V0RGl2LmFwcGVuZChhYm91dFRleHQsIGFib3V0VGV4dFBhcmFncmFwaCk7XG5cbi8vIENyZWF0ZXMgdGhlIFdlYXRoZXIgc2VjdGlvblxuXG5jb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xubG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiTG9jYWwgV2VhdGhlclwiO1xuXG5jb25zdCBsb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9IFwiSG90IG9yIGNvbGQsIHdlIGFyZSBhbHdheXMgdGhlcmUgZm9yIHlvdSFcIlxuXG4vLyBDcmVhdGVzIHRoZSBDaXR5IGFuZCBTdGF0ZSBpbnB1dHNcbi8vIENpdHkgLT4gXG5jb25zdCBsb2NhdGlvbkNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgbG9jYXRpb25TdGF0ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5jb25zdCBsb2NhdGlvbldlYXRoZXJDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG5jb25zdCBsb2NhdGlvbldlYXRoZXJUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbmNvbnN0IGxvY2F0aW9uV2VhdGhlckljb24gPSBuZXcgSW1hZ2UoKTtcblxuXG5mZXRjaFdlYXRoZXJEYXRhKCkudGhlbigoKSA9PiB7XG5cbiAgICBsb2NhdGlvbkNpdHlOYW1lLnRleHRDb250ZW50ID0gd2VhdGhlckNpdHk7XG4gICAgbG9jYXRpb25TdGF0ZU5hbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyU3RhdGU7XG4gICAgbG9jYXRpb25XZWF0aGVyQ29uZGl0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckNvbmRpdGlvbjtcbiAgICBsb2NhdGlvbldlYXRoZXJUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJUZW1wZXJhdHVyZTtcbiAgICBsb2NhdGlvbldlYXRoZXJJY29uLnNyYyA9IHdlYXRoZXJJY29uO1xufSk7XG5cblxuLy8gQ3JlYXRlcyB0aGUgd2VhdGhlciBkaXYgd2hlcmUgZXZlcnl0aGluZyB3ZWF0aGVyLWRpdiByZWxhdGVkIGlzIGlucHV0dGVkXG5cbmNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxvY2F0aW9uRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9jYXRpb24tZGl2XCIpO1xuXG5cbmNvbnN0IGltZ0dpZkFQSSA9IG5ldyBJbWFnZSgpO1xuaW1nR2lmQVBJLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2lmLWltYWdlXCIpO1xuaW1nR2lmQVBJLnNyYyA9IFwiI1wiO1xuXG5mZXRjaCgnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9dzFyYTFyT05DOEk5dnA0VUZHRm1FalR3aUJnSzlYT0kmcz1jYXRzJylcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgaW1nR2lmQVBJLnNyYyA9IHJlc3BvbnNlLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgICB9KTtcbmxvY2F0aW9uRGl2LmFwcGVuZChsb2NhdGlvblRpdGxlLCBsb2NhdGlvblRleHQsbG9jYXRpb25DaXR5TmFtZSwgbG9jYXRpb25TdGF0ZU5hbWUsIGxvY2F0aW9uV2VhdGhlckNvbmRpdGlvbiwgbG9jYXRpb25XZWF0aGVyVGVtcGVyYXR1cmUsIGxvY2F0aW9uV2VhdGhlckljb24sIGltZ0dpZkFQSSk7XG5cbi8vIEdldHMgdGhlIGNvbnRlbnQgZGl2IGluIGluZGV4Lmh0bWwgYW5kIGFwcGVuZHMgZWFjaCBzZWN0aW9uIHRvIHRoZSBjb250ZW50IGRpdlxuXG5jb25zdCBnZXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmdldERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuZ2V0RGl2LmFwcGVuZENoaWxkKGFib3V0RGl2KTtcbmdldERpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIG5hdkJhckNsaWNrZXJzKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=