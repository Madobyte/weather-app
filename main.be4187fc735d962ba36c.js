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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/app.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/app.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Varela+Round&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Teko&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\nheader {\\n  display: flex;\\n  height: 75px;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 auto;\\n  font-family: \\\"Pacifico\\\", cursive;\\n}\\nheader #logo {\\n  margin: 10px;\\n  height: 55px;\\n  width: 55px;\\n}\\n\\n@keyframes dropdown {\\n  from {\\n    top: 0;\\n    opacity: 0;\\n  }\\n  to {\\n    top: 36px;\\n    opacity: 1;\\n  }\\n}\\n@keyframes remove {\\n  from {\\n    top: 36px;\\n    opacity: 1;\\n  }\\n  to {\\n    top: 0;\\n    opacity: 0;\\n  }\\n}\\n#location-section {\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n}\\n#location-section h2 {\\n  flex: auto;\\n  font-size: 1rem;\\n  cursor: pointer;\\n}\\n#location-section h2::before {\\n  font-family: \\\"Font Awesome 5 Free\\\";\\n  font-size: 20px;\\n  content: \\\"\\\";\\n  margin: 10px;\\n  color: #e63946;\\n}\\n#location-section h2::after {\\n  font-family: \\\"Font Awesome 5 Free\\\";\\n  font-size: 10px;\\n  content: \\\"\\\";\\n  margin: 10px;\\n}\\n#location-section input {\\n  height: 36px;\\n  width: 300px;\\n  max-width: 90vw;\\n  margin-left: auto;\\n  padding: 0.5rem;\\n  background-color: rgba(255, 255, 255, 0.3);\\n  border: 3px solid #264653;\\n  border-radius: 1rem;\\n}\\n#location-section input.remove {\\n  animation: remove 0.5s forwards;\\n}\\n#location-section i {\\n  margin: 10px;\\n  cursor: pointer;\\n}\\n\\n#current-weather {\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n#current-weather img {\\n  flex-basis: 300px;\\n  width: 300px;\\n  max-width: 80vw;\\n  margin: 0 auto;\\n}\\n#current-weather #weather-description {\\n  flex-basis: 100%;\\n  text-align: center;\\n}\\n#current-weather #current-temperature {\\n  flex: 100%;\\n  font-size: 3rem;\\n  text-align: center;\\n}\\n#current-weather #wind-speed {\\n  flex-basis: 120px;\\n  text-align: center;\\n  margin-left: auto;\\n}\\n#current-weather #wind-speed::before {\\n  font-family: \\\"Font Awesome 5 Free\\\";\\n  font-weight: 900;\\n  content: \\\"\\\";\\n  margin: 10px;\\n}\\n#current-weather #humidity {\\n  flex-basis: 120px;\\n  text-align: center;\\n  margin-right: auto;\\n}\\n#current-weather #humidity::before {\\n  font-family: \\\"Font Awesome 5 Free\\\";\\n  font-weight: 900;\\n  content: \\\"\\\";\\n  margin: 10px;\\n}\\n\\n#hourly-weather-section #dates-container {\\n  display: grid;\\n  grid-template-columns: repeat(5, auto);\\n  gap: 1rem;\\n  margin: 1rem;\\n  overflow-x: scroll;\\n  scrollbar-width: none;\\n  white-space: nowrap;\\n  cursor: url(https://ssl.gstatic.com/ui/v1/icons/mail/images/2/openhand.cur), default !important;\\n  /* cursor: grab; does not work on Chrome. */\\n}\\n#hourly-weather-section #dates-container::-webkit-scrollbar {\\n  width: 0 !important;\\n  display: none;\\n}\\n#hourly-weather-section #dates-container a {\\n  text-align: center;\\n  padding: 0.1rem 0.5rem;\\n  border-radius: 2rem;\\n  cursor: pointer;\\n}\\n#hourly-weather-section #dates-container .active {\\n  background-color: rgba(255, 255, 255, 0.3);\\n}\\n#hourly-weather-section #hourly-weather {\\n  margin: 1rem;\\n  overflow-x: auto;\\n  scrollbar-width: none;\\n}\\n#hourly-weather-section #hourly-weather::-webkit-scrollbar {\\n  width: 0 !important;\\n  display: none;\\n}\\n#hourly-weather-section #hourly-weather .daily-weather-container {\\n  display: grid;\\n  grid-template-columns: repeat(9, auto);\\n  gap: 1rem;\\n  position: relative;\\n}\\n#hourly-weather-section #hourly-weather .hourly-weather-card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background-color: rgba(255, 255, 255, 0.3);\\n  border-radius: 1rem;\\n  height: 170px;\\n  width: 120px;\\n  padding: 0.5rem;\\n  cursor: url(https://ssl.gstatic.com/ui/v1/icons/mail/images/2/openhand.cur), default !important;\\n  /* cursor: grab; does not work on Chrome. */\\n}\\n#hourly-weather-section #hourly-weather .time {\\n  font-family: \\\"Teko\\\", sans-serif;\\n  font-size: 1.5rem;\\n}\\n\\nfooter {\\n  background-color: rgba(255, 255, 255, 0.3);\\n  height: 75px;\\n  width: 100%;\\n  padding: 0.5rem;\\n  position: relative;\\n  bottom: 0;\\n}\\nfooter p {\\n  text-align: center;\\n}\\nfooter a {\\n  color: #264653;\\n}\\n\\n@media all and (max-width: 500px) {\\n  #search-location-input {\\n    display: none;\\n    position: absolute;\\n    top: 36px;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    animation: dropdown 0.5s;\\n  }\\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Varela Round\\\", sans-serif;\\n  min-height: 100vh;\\n}\\n\\n#app-body {\\n  min-height: calc(100vh - 150px);\\n}\\n\\nsection {\\n  width: 800px;\\n  max-width: 100vw;\\n  margin: 0 auto;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/assets/css/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/css/app.scss":
/*!*********************************!*\
  !*** ./src/assets/css/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/app.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather-app/./src/assets/css/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/01d.svg":
/*!***********************************!*\
  !*** ./src/assets/images/01d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f287b3b299d7dca48a0d.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/01d.svg?");

/***/ }),

/***/ "./src/assets/images/01m.svg":
/*!***********************************!*\
  !*** ./src/assets/images/01m.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"266c60a43d31b089e78c.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/01m.svg?");

/***/ }),

/***/ "./src/assets/images/01n.svg":
/*!***********************************!*\
  !*** ./src/assets/images/01n.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ddb148cccdccbc81c78.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/01n.svg?");

/***/ }),

/***/ "./src/assets/images/02d.svg":
/*!***********************************!*\
  !*** ./src/assets/images/02d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e2b1c526ba82dfc14a93.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/02d.svg?");

/***/ }),

/***/ "./src/assets/images/02m.svg":
/*!***********************************!*\
  !*** ./src/assets/images/02m.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"603bac2744835d3365bc.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/02m.svg?");

/***/ }),

/***/ "./src/assets/images/02n.svg":
/*!***********************************!*\
  !*** ./src/assets/images/02n.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2253e89c4f5d4be9c31d.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/02n.svg?");

/***/ }),

/***/ "./src/assets/images/03.svg":
/*!**********************************!*\
  !*** ./src/assets/images/03.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc3585bd3e5fc1af0c07.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/03.svg?");

/***/ }),

/***/ "./src/assets/images/09.svg":
/*!**********************************!*\
  !*** ./src/assets/images/09.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05f5a7b7d55eac214443.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/09.svg?");

/***/ }),

/***/ "./src/assets/images/10d.svg":
/*!***********************************!*\
  !*** ./src/assets/images/10d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a80a36fce455728ece9.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/10d.svg?");

/***/ }),

/***/ "./src/assets/images/11d.svg":
/*!***********************************!*\
  !*** ./src/assets/images/11d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"598da0ec13cf571d04dd.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/11d.svg?");

/***/ }),

/***/ "./src/assets/images/11n.svg":
/*!***********************************!*\
  !*** ./src/assets/images/11n.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6a5587438250714cbae.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/11n.svg?");

/***/ }),

/***/ "./src/assets/images/13.svg":
/*!**********************************!*\
  !*** ./src/assets/images/13.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e96e0196e43c9130007.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/13.svg?");

/***/ }),

/***/ "./src/assets/images/50.svg":
/*!**********************************!*\
  !*** ./src/assets/images/50.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"472495177a8f3ad803ff.svg\";\n\n//# sourceURL=webpack://weather-app/./src/assets/images/50.svg?");

/***/ }),

/***/ "./src/assets/js/apiKey.js":
/*!*********************************!*\
  !*** ./src/assets/js/apiKey.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiKey\": () => (/* binding */ apiKey)\n/* harmony export */ });\nconst apiKey = \"8c401ea9946317bcec247ff3c0216973\";\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/apiKey.js?");

/***/ }),

/***/ "./src/assets/js/changeTheme.js":
/*!**************************************!*\
  !*** ./src/assets/js/changeTheme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTheme\": () => (/* binding */ changeTheme)\n/* harmony export */ });\nconst changeTheme = () => {\n  const link = document.querySelector(\"a\");\n  const searchLocationInput = document.getElementById(\"search-location-input\");\n  const time = `${new Date().getHours()}.${new Date().getMinutes()}`;\n  if (time < 6 || time <= 12) {\n    //morning\n    document.body.style.backgroundColor = \"#85c8ff\";\n    document.body.style.color = \"#264653\";\n  } else if (time < 12 || time <= 18) {\n    //afternoon\n    document.body.style.backgroundColor = \"orange\";\n    document.body.style.color = \"#f1faee\";\n  } else {\n    //night\n    document.body.style.backgroundColor = \"#00006e\";\n    document.body.style.color = \"#f1faee\";\n    link.style.color = \"#f1faee\";\n    searchLocationInput.style.color = \"#f1faee\";\n  }\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/changeTheme.js?");

/***/ }),

/***/ "./src/assets/js/constants.js":
/*!************************************!*\
  !*** ./src/assets/js/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"monthNames\": () => (/* binding */ monthNames),\n/* harmony export */   \"dayNames\": () => (/* binding */ dayNames)\n/* harmony export */ });\nconst monthNames = [\n  \"Jan\",\n  \"Feb\",\n  \"Mar\",\n  \"Apr\",\n  \"May\",\n  \"Jun\",\n  \"Jul\",\n  \"Aug\",\n  \"Sept\",\n  \"Oct\",\n  \"Nov\",\n  \"Dec\",\n];\n\nconst dayNames = [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thurs\", \"Fri\", \"Sat\"];\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/constants.js?");

/***/ }),

/***/ "./src/assets/js/createDates.js":
/*!**************************************!*\
  !*** ./src/assets/js/createDates.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDates\": () => (/* binding */ createDates)\n/* harmony export */ });\nconst createDates = () => {\n  const datesContainer = document.getElementById(\"dates-container\");\n  for (let i = 0; i <= 4; i++) {\n    const date = document.createElement(\"a\");\n    date.id = `day${i}`;\n    date.classList.add(\"date\");\n    date.innerText = \"Placeholder text\";\n    datesContainer.appendChild(date);\n  }\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/createDates.js?");

/***/ }),

/***/ "./src/assets/js/createWeatherCards.js":
/*!*********************************************!*\
  !*** ./src/assets/js/createWeatherCards.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createWeatherCards\": () => (/* binding */ createWeatherCards)\n/* harmony export */ });\nconst createWeatherCards = (array) => {\n  const hourlyWeatherContainer = document.getElementById(\"hourly-weather\");\n\n  for (let i = 0; i <= 4; i++) {\n    const hourlyWeatherContainer = document.getElementById(\"hourly-weather\");\n    const dailyWeatherContainer = document.createElement(\"div\");\n    dailyWeatherContainer.id = `day${i}-cards`;\n    dailyWeatherContainer.classList.add(\"daily-weather-container\");\n\n    for (let j = 0; j <= 8; j++) {\n      const hourlyWeatherCard = document.createElement(\"div\");\n      hourlyWeatherCard.classList.add(\"hourly-weather-card\");\n\n      const pTime = document.createElement(\"p\");\n      pTime.classList.add(\"time\");\n\n      const weatherIcon = document.createElement(\"img\");\n\n      const pTemperature = document.createElement(\"p\");\n      pTemperature.classList.add(\"hourly-weather-temperature\");\n\n      hourlyWeatherCard.appendChild(pTime);\n      hourlyWeatherCard.appendChild(weatherIcon);\n      hourlyWeatherCard.appendChild(pTemperature);\n      dailyWeatherContainer.appendChild(hourlyWeatherCard);\n    }\n\n    hourlyWeatherContainer.appendChild(dailyWeatherContainer);\n  }\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/createWeatherCards.js?");

/***/ }),

/***/ "./src/assets/js/determineIcon.js":
/*!****************************************!*\
  !*** ./src/assets/js/determineIcon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"determineIcon\": () => (/* binding */ determineIcon)\n/* harmony export */ });\n/* harmony import */ var _images_01d_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/01d.svg */ \"./src/assets/images/01d.svg\");\n/* harmony import */ var _images_01m_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/01m.svg */ \"./src/assets/images/01m.svg\");\n/* harmony import */ var _images_01n_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/01n.svg */ \"./src/assets/images/01n.svg\");\n/* harmony import */ var _images_02d_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/02d.svg */ \"./src/assets/images/02d.svg\");\n/* harmony import */ var _images_02m_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/02m.svg */ \"./src/assets/images/02m.svg\");\n/* harmony import */ var _images_02n_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/02n.svg */ \"./src/assets/images/02n.svg\");\n/* harmony import */ var _images_03_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/03.svg */ \"./src/assets/images/03.svg\");\n/* harmony import */ var _images_09_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/09.svg */ \"./src/assets/images/09.svg\");\n/* harmony import */ var _images_10d_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/10d.svg */ \"./src/assets/images/10d.svg\");\n/* harmony import */ var _images_11d_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/11d.svg */ \"./src/assets/images/11d.svg\");\n/* harmony import */ var _images_11n_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/11n.svg */ \"./src/assets/images/11n.svg\");\n/* harmony import */ var _images_13_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/13.svg */ \"./src/assets/images/13.svg\");\n/* harmony import */ var _images_50_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/50.svg */ \"./src/assets/images/50.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst determineIcon = (main, desc) => {\n  const time = `${new Date().getHours()}.${new Date().getMinutes()}`;\n  switch (main) {\n    case \"Clear\":\n      if (time > 6 && time <= 12) return _images_01d_svg__WEBPACK_IMPORTED_MODULE_0__;\n      else if (time > 12 && time <= 18) return _images_01m_svg__WEBPACK_IMPORTED_MODULE_1__;\n      else return _images_01n_svg__WEBPACK_IMPORTED_MODULE_2__;\n    case \"Clouds\":\n      if ((desc = \"few clouds: 11-25%\")) {\n        if (time > 6 && time <= 12) return _images_02d_svg__WEBPACK_IMPORTED_MODULE_3__;\n        else if (time > 12 && time <= 18) return _images_02m_svg__WEBPACK_IMPORTED_MODULE_4__;\n        else return _images_02n_svg__WEBPACK_IMPORTED_MODULE_5__;\n      } else if ((desc = \"scattered clouds: 25-50%\")) {\n        return _images_03_svg__WEBPACK_IMPORTED_MODULE_6__;\n      } else return _images_03_svg__WEBPACK_IMPORTED_MODULE_6__;\n    case \"Drizzle\":\n      return _images_09_svg__WEBPACK_IMPORTED_MODULE_7__;\n    case \"Rain\":\n      return _images_10d_svg__WEBPACK_IMPORTED_MODULE_8__;\n    case \"Thunderstorm\":\n      if (time > 6 && time <= 18) return _images_11d_svg__WEBPACK_IMPORTED_MODULE_9__;\n      else return _images_11n_svg__WEBPACK_IMPORTED_MODULE_10__;\n    case \"Snow\":\n      return _images_13_svg__WEBPACK_IMPORTED_MODULE_11__;\n    case \"Mist\" ||\n      0 ||\n      0 ||\n      0 ||\n      0 ||\n      0 ||\n      0 ||\n      0 ||\n      0 ||\n      0:\n      return _images_50_svg__WEBPACK_IMPORTED_MODULE_12__;\n  }\n};\n\nconst thunderstorm = [\n  \"thunderstorm with light rain\",\n  \"thunderstorm with rain\",\n  \"thunderstorm with heavy rain\",\n  \"light thunderstorm\",\n  \"thunderstorm\",\n  \"heavy thunderstorm\",\n  \"ragged thunderstorm\",\n  \"hunderstorm with light drizzle\",\n  \"\",\n  \"\",\n];\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/determineIcon.js?");

/***/ }),

/***/ "./src/assets/js/dragEvent.js":
/*!************************************!*\
  !*** ./src/assets/js/dragEvent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mouseDownHandler\": () => (/* binding */ mouseDownHandler)\n/* harmony export */ });\nconst mouseDownHandler = (container) => {\n  const slider = document.querySelector(container);\n  let isDown = false;\n  let startX;\n  let scrollLeft;\n\n  slider.addEventListener(\"mousedown\", (e) => {\n    e.preventDefault();\n    isDown = true;\n    slider.classList.add(\"active\");\n    startX = e.pageX - slider.offsetLeft;\n    scrollLeft = slider.scrollLeft;\n  });\n  slider.addEventListener(\"mouseleave\", () => {\n    isDown = false;\n    slider.classList.remove(\"active\");\n  });\n  slider.addEventListener(\"mouseup\", () => {\n    isDown = false;\n    slider.classList.remove(\"active\");\n  });\n  slider.addEventListener(\"mousemove\", (e) => {\n    if (!isDown) return;\n    e.preventDefault();\n    const x = e.pageX - slider.offsetLeft;\n    const walk = (x - startX) * 3;\n    slider.scrollLeft = scrollLeft - walk;\n  });\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/dragEvent.js?");

/***/ }),

/***/ "./src/assets/js/getCurrentWeather.js":
/*!********************************************!*\
  !*** ./src/assets/js/getCurrentWeather.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentWeather\": () => (/* binding */ getCurrentWeather)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/assets/js/weather.js\");\n/* harmony import */ var _determineIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./determineIcon */ \"./src/assets/js/determineIcon.js\");\n\n\n\nconst getCurrentWeather = () => {\n  const data = Object.values(JSON.parse(localStorage.getItem(\"weather\")));\n  const city = JSON.parse(localStorage.getItem(\"city\")).name;\n  const main = data[0].weather[0].main;\n  const description = data[0].weather[0].description;\n  const temp = data[0].main.temp;\n  const windSpeed = Math.round(data[0].wind.speed * 3.6 * 100) / 100; //Multiply by 3.6 to convert m/s to kph\n  const humidity = data[0].main.humidity;\n\n  const currentLocation = document.getElementById(\"current-location\");\n  currentLocation.innerText = city;\n  const currentWeather = document.getElementById(\"current-weather\");\n  const currentIcon = document.getElementById(\"current-weather-icon\");\n  const icon = document.createElement(\"img\");\n  icon.id = \"current-weather-icon\";\n  const source = (0,_determineIcon__WEBPACK_IMPORTED_MODULE_1__.determineIcon)(main, description);\n  icon.src = source;\n  currentWeather.insertBefore(icon, currentWeather.firstChild);\n  currentIcon.remove();\n  const weatherDescription = document.getElementById(\"weather-description\");\n  weatherDescription.innerText = description;\n  const currentTemperature = document.getElementById(\"current-temperature\");\n  currentTemperature.innerText = `${temp} °C`;\n  const currentWindSpeed = document.getElementById(\"wind-speed\");\n  currentWindSpeed.innerText = `${windSpeed} kph`;\n  const currentHumidity = document.getElementById(\"humidity\");\n  currentHumidity.innerText = `${humidity}%`;\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/getCurrentWeather.js?");

/***/ }),

/***/ "./src/assets/js/getHourlyWeather.js":
/*!*******************************************!*\
  !*** ./src/assets/js/getHourlyWeather.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHourlyWeather\": () => (/* binding */ getHourlyWeather)\n/* harmony export */ });\n/* harmony import */ var _renderDates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderDates */ \"./src/assets/js/renderDates.js\");\n/* harmony import */ var _renderHourlyWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderHourlyWeather */ \"./src/assets/js/renderHourlyWeather.js\");\n/* harmony import */ var _splitToChunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splitToChunks */ \"./src/assets/js/splitToChunks.js\");\n\n\n\n\nconst getHourlyWeather = () => {\n  const data = JSON.parse(localStorage.getItem(\"weather\"));\n  const chunkedArray = (0,_splitToChunks__WEBPACK_IMPORTED_MODULE_2__.splitToChunks)(Object.values(data));\n  (0,_renderDates__WEBPACK_IMPORTED_MODULE_0__.renderDate)(chunkedArray);\n  (0,_renderHourlyWeather__WEBPACK_IMPORTED_MODULE_1__.renderHourlyWeather)(chunkedArray);\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/getHourlyWeather.js?");

/***/ }),

/***/ "./src/assets/js/getLocation.js":
/*!**************************************!*\
  !*** ./src/assets/js/getLocation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLocation)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/assets/js/weather.js\");\n\n\nfunction getLocation() {\n  _weather__WEBPACK_IMPORTED_MODULE_0__.weather.getDataFromCity(); //sets the data even if the access to location is denied\n\n  if (navigator.geolocation)\n    navigator.geolocation.getCurrentPosition(success, fail);\n}\n\nfunction success(position) {\n  localStorage.setItem(\"position\", position);\n  console.log(\"Location access granted.\");\n  _weather__WEBPACK_IMPORTED_MODULE_0__.weather.getDataFromLocation(position);\n}\n\nfunction fail() {\n  console.log(\"Location access was denied.\");\n}\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/getLocation.js?");

/***/ }),

/***/ "./src/assets/js/openSearch.js":
/*!*************************************!*\
  !*** ./src/assets/js/openSearch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openSearch\": () => (/* binding */ openSearch)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/assets/js/weather.js\");\n\nconst searchLocationInput = document.getElementById(\"search-location-input\");\n\nconst openSearch = () => {\n  const searchIcon = document.querySelector(\".fa-search\");\n  searchIcon.addEventListener(\"click\", () => {\n    console.log(searchLocationInput.value !== \"\");\n    if (searchLocationInput.value !== \"\") getLocationData();\n    else openSearchInput();\n  });\n  const currentLocation = document.getElementById(\"current-location\");\n  currentLocation.addEventListener(\"click\", openSearchInput);\n};\n\nconst openSearchInput = () => {\n  searchLocationInput.classList.remove(\"remove\");\n  searchLocationInput.style.display = \"block\";\n};\n\nconst getLocationData = () => {\n  const city = searchLocationInput.value;\n  _weather__WEBPACK_IMPORTED_MODULE_0__.weather.getDataFromCity(city);\n  if (screen.width <= 500) {\n    searchLocationInput.classList.add(\"remove\");\n    searchLocationInput.addEventListener(\n      \"animationend\",\n      () => {\n        searchLocationInput.style.display = \"none\";\n      },\n      { once: true }\n    );\n  }\n  searchLocationInput.value = \"\";\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/openSearch.js?");

/***/ }),

/***/ "./src/assets/js/openTab.js":
/*!**********************************!*\
  !*** ./src/assets/js/openTab.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openTab\": () => (/* binding */ openTab)\n/* harmony export */ });\nconst openTab = () => {\n  const tabContent = document.querySelectorAll(\".daily-weather-container\");\n  const tabLinks = document.querySelectorAll(\".date\");\n  const today = document.getElementById(\"day0\");\n\n  tabContent.forEach((tab) => {\n    tab.style.display = \"none\";\n  });\n\n  tabLinks.forEach((link) => {\n    link.addEventListener(\"click\", showContent);\n  });\n\n  today.click();\n};\n\nconst showContent = (e) => {\n  const tabContent = document.querySelectorAll(\".daily-weather-container\");\n  const tabLinks = document.querySelectorAll(\".date\");\n  const tab = e.target;\n  const day = e.target.id;\n\n  tabLinks.forEach((link) => {\n    link.classList.remove(\"active\");\n  });\n\n  tabContent.forEach((tab) => {\n    tab.style.display = \"none\";\n    tab.classList.remove(\"active\");\n  });\n\n  tab.classList.add(\"active\");\n\n  const hourlyWeather = document.getElementById(`${day}-cards`);\n  hourlyWeather.classList.add(\"active\");\n  hourlyWeather.scrollLeft = 0;\n  hourlyWeather.style.display = \"grid\";\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/openTab.js?");

/***/ }),

/***/ "./src/assets/js/renderDates.js":
/*!**************************************!*\
  !*** ./src/assets/js/renderDates.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderDate\": () => (/* binding */ renderDate)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/assets/js/constants.js\");\n\n\nconst renderDate = (array) => {\n  /* Gets and renders the dates */\n  for (let i = 0; i <= 4; i++) {\n    const unixTimestamp = array[i][0].dt;\n    const date = new Date(unixTimestamp * 1000);\n    const dateMonth = _constants__WEBPACK_IMPORTED_MODULE_0__.monthNames[date.getMonth()];\n    const dateDate = date.getDate();\n    const dateDay = _constants__WEBPACK_IMPORTED_MODULE_0__.dayNames[date.getDay()];\n    let dateMonthDay;\n\n    if (i === 0) {\n      dateMonthDay = `Today, ${dateMonth} ${dateDate}`;\n    } else {\n      dateMonthDay = `${dateDay}, ${dateMonth} ${dateDate}`;\n    }\n\n    const aDate = document.getElementById(`day${i}`);\n    aDate.innerText = dateMonthDay;\n  }\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/renderDates.js?");

/***/ }),

/***/ "./src/assets/js/renderHourlyWeather.js":
/*!**********************************************!*\
  !*** ./src/assets/js/renderHourlyWeather.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHourlyWeather\": () => (/* binding */ renderHourlyWeather)\n/* harmony export */ });\nconst renderHourlyWeather = (array) => {\n  let cardsArray = []; /* contains all hourly weather data */\n  let timeOfDay;\n  /* loops through the chunkedArray */\n  for (let i = 0; i <= array.length - 1; i++) {\n    /* Removes all excess cards */\n    const dayNCards = document.getElementById(`day${i}-cards`).childNodes;\n    if (array[i].length < dayNCards.length) {\n      const numberOfExcessCardsToRemove = dayNCards.length - array[i].length;\n      for (let l = 0; l <= numberOfExcessCardsToRemove - 1; l++) {\n        dayNCards[0].remove();\n      }\n    }\n    /* loops through the hourly weather */\n    for (let j = 0; j <= array[i].length - 1; j++) {\n      let card = [];\n      const forecast = array[i][j];\n\n      const unixTimestamp = forecast.dt;\n      const date = new Date(unixTimestamp * 1000);\n      const hours = date.getHours();\n      const time = `${hours}:00`;\n      const pTime = document.createElement(\"p\");\n      pTime.classList.add(\"time\");\n      pTime.innerText = time;\n      card.push(pTime);\n\n      const icon = forecast.weather[0].icon;\n      const weatherIcon = document.createElement(\"img\");\n      weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;\n      card.push(weatherIcon);\n\n      const temperature = Math.round(forecast.main.temp * 10) / 10;\n      const pTemperature = document.createElement(\"p\");\n      pTemperature.classList.add(\"hourly-weather-temperature\");\n      pTemperature.innerText = `${temperature} °C`;\n      card.push(pTemperature);\n      cardsArray.push(card);\n    }\n  }\n  /* Renders the data */\n  const cards = document.querySelectorAll(\".hourly-weather-card\");\n  for (let k = 0; k <= cards.length - 1; k++) {\n    const currentCard = cards[k];\n    while (currentCard.firstChild) currentCard.firstChild.remove(); //removes previous data\n    cardsArray[k].forEach((data) => {\n      currentCard.appendChild(data);\n    });\n  }\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/renderHourlyWeather.js?");

/***/ }),

/***/ "./src/assets/js/splitToChunks.js":
/*!****************************************!*\
  !*** ./src/assets/js/splitToChunks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"splitToChunks\": () => (/* binding */ splitToChunks)\n/* harmony export */ });\nconst splitToChunks = (array) => {\n  let result = [];\n  let thisDay = [];\n  for (let i = 0; i <= array.length - 1; i++) {\n    if (i + 1 < array.length) {\n      const accUTS = array[i].dt;\n      const currUTS = array[i + 1].dt;\n      const accDate = new Date(accUTS * 1000);\n      const currDate = new Date(currUTS * 1000);\n      const accHours = accDate.getHours();\n      const currHours = currDate.getHours();\n\n      if (accHours < currHours) {\n        thisDay.push(array[i]);\n      } else {\n        thisDay.push(array[i]);\n        result.push(thisDay);\n        thisDay = [];\n      }\n    }\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/splitToChunks.js?");

/***/ }),

/***/ "./src/assets/js/weather.js":
/*!**********************************!*\
  !*** ./src/assets/js/weather.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weather\": () => (/* binding */ weather)\n/* harmony export */ });\n/* harmony import */ var _apiKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiKey */ \"./src/assets/js/apiKey.js\");\n/* harmony import */ var _getCurrentWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentWeather */ \"./src/assets/js/getCurrentWeather.js\");\n/* harmony import */ var _getHourlyWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getHourlyWeather */ \"./src/assets/js/getHourlyWeather.js\");\n\n\n\n\nconst weather = (function () {\n  async function getDataFromCity(city = \"Manila\") {\n    const today = document.getElementById(\"day0\");\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${_apiKey__WEBPACK_IMPORTED_MODULE_0__.apiKey}&units=metric`\n    );\n    const json = await response.json();\n    localStorage.setItem(\"city\", JSON.stringify(json.city));\n    localStorage.setItem(\"weather\", JSON.stringify({ ...json.list }));\n    (0,_getCurrentWeather__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)();\n    (0,_getHourlyWeather__WEBPACK_IMPORTED_MODULE_2__.getHourlyWeather)();\n    today.click();\n  }\n\n  async function getDataFromLocation(position) {\n    const today = document.getElementById(\"day0\");\n    const lat = position.coords.latitude;\n    const lon = position.coords.longitude;\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${_apiKey__WEBPACK_IMPORTED_MODULE_0__.apiKey}&units=metric`\n    );\n    const json = await response.json();\n    localStorage.setItem(\"city\", JSON.stringify(json.city));\n    localStorage.setItem(\"weather\", JSON.stringify({ ...json.list }));\n    (0,_getCurrentWeather__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeather)();\n    (0,_getHourlyWeather__WEBPACK_IMPORTED_MODULE_2__.getHourlyWeather)();\n    today.click();\n  }\n\n  return { getDataFromCity, getDataFromLocation };\n})();\n\n\n//# sourceURL=webpack://weather-app/./src/assets/js/weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/app.scss */ \"./src/assets/css/app.scss\");\n/* harmony import */ var _assets_js_changeTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/changeTheme */ \"./src/assets/js/changeTheme.js\");\n/* harmony import */ var _assets_js_createDates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/createDates */ \"./src/assets/js/createDates.js\");\n/* harmony import */ var _assets_js_createWeatherCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/js/createWeatherCards */ \"./src/assets/js/createWeatherCards.js\");\n/* harmony import */ var _assets_js_openSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/js/openSearch */ \"./src/assets/js/openSearch.js\");\n/* harmony import */ var _assets_js_openTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/js/openTab */ \"./src/assets/js/openTab.js\");\n/* harmony import */ var _assets_js_getLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/js/getLocation */ \"./src/assets/js/getLocation.js\");\n/* harmony import */ var _assets_js_dragEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/js/dragEvent */ \"./src/assets/js/dragEvent.js\");\n\n\n\n\n\n\n\n\n\n(0,_assets_js_changeTheme__WEBPACK_IMPORTED_MODULE_1__.changeTheme)();\n(0,_assets_js_createWeatherCards__WEBPACK_IMPORTED_MODULE_3__.createWeatherCards)();\n(0,_assets_js_createDates__WEBPACK_IMPORTED_MODULE_2__.createDates)();\n(0,_assets_js_openTab__WEBPACK_IMPORTED_MODULE_5__.openTab)();\n(0,_assets_js_openSearch__WEBPACK_IMPORTED_MODULE_4__.openSearch)();\n(0,_assets_js_dragEvent__WEBPACK_IMPORTED_MODULE_7__.mouseDownHandler)(\"#dates-container\");\n(0,_assets_js_dragEvent__WEBPACK_IMPORTED_MODULE_7__.mouseDownHandler)(\"#hourly-weather\");\n\nwindow.addEventListener(\"load\", _assets_js_getLocation__WEBPACK_IMPORTED_MODULE_6__.default);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;