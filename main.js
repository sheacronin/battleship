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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Open+Sans&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    background-color: #e9e3b4;\\n    color: #381d2a;\\n    text-align: center;\\n    font-family: 'Open Sans', sans-serif;\\n}\\n\\nh1 {\\n    height: 10vh;\\n    display: flex;\\n    justify-content: center;\\n    align-items: flex-end;\\n    font-family: 'Comfortaa', cursive;\\n    font-size: 3em;\\n}\\n\\nmain {\\n    display: grid;\\n    grid-template-rows: 10vh 80vh;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-areas:\\n        'message message'\\n        'board board';\\n}\\n\\n#setup {\\n    grid-area: board;\\n    box-shadow: -5px 5px #381d2a;\\n    background-color: #f39b6d;\\n    padding: 20px;\\n    height: 40vh;\\n    width: 80vw;\\n    margin: 0 auto;\\n    display: grid;\\n}\\n\\n#setup h3 {\\n    align-self: center;\\n    font-family: 'Comfortaa', cursive;\\n    font-size: 2em;\\n}\\n\\n.player-info {\\n    display: grid;\\n    border-top: 1px solid black;\\n}\\n\\n.player-name {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n}\\n\\n.player-is-computer {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n#setup input {\\n    height: 30px;\\n    font-size: 18px;\\n}\\n\\n#setup button {\\n    font-size: 18px;\\n    letter-spacing: 2px;\\n}\\n\\n#setup input[type='checkbox'] {\\n    width: 20px;\\n}\\n\\ninput {\\n    font-family: 'Open Sans', sans-serif;\\n    border: none;\\n    color: #381d2a;\\n    text-align: center;\\n}\\n\\nbutton {\\n    font-family: 'Open Sans', sans-serif;\\n    border: none;\\n    background-color: #381d2a;\\n    color: white;\\n}\\n\\n#messages {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    grid-area: message;\\n}\\n\\narticle.p1 {\\n    grid-column: 1 / 1;\\n    grid-row: 2 / 2;\\n}\\n\\narticle.p2 {\\n    grid-column: 2 / 2;\\n    grid-row: 2 / 2;\\n}\\n\\n@media (max-width: 500px) {\\n    article.p1 {\\n        grid-column: 1 / 3;\\n    }\\n\\n    article.p2 {\\n        grid-column: 1 / 3;\\n    }\\n}\\n\\n.board-title {\\n    margin-bottom: 30px;\\n    font-family: 'Comfortaa', cursive;\\n}\\n\\n.board {\\n    width: 250px;\\n    height: 250px;\\n    margin: 0 auto;\\n    background-color: white;\\n    border: 1px solid black;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n    position: relative;\\n}\\n\\n.board-x-labels {\\n    position: absolute;\\n    width: 100%;\\n    top: -23px;\\n    display: flex;\\n    justify-content: space-around;\\n}\\n\\n.board-y-labels {\\n    display: flex;\\n    position: absolute;\\n    left: -23px;\\n    height: 100%;\\n    flex-direction: column;\\n    justify-content: space-around;\\n}\\n\\n.unit {\\n    border: 1px solid grey;\\n    background-color: white;\\n    width: 25px;\\n    height: 25px;\\n    background-size: contain;\\n}\\n\\n.active.board {\\n    box-shadow: lightskyblue 0 0 10px 10px;\\n}\\n\\n.active .unit:hover {\\n    cursor: pointer;\\n    box-shadow: inset 0 0 5px black;\\n}\\n\\n.bug {\\n    background-color: lightgreen;\\n}\\n\\n.miss {\\n    background-color: grey;\\n}\\n\\n.hit {\\n    background-color: indianred;\\n}\\n\\n.swatted {\\n    opacity: 0.5;\\n}\\n\\n.bug-pen {\\n    background-color: #f39b6d;\\n    grid-area: bug-pen;\\n    display: grid;\\n    grid-template-rows: 10% repeat(3, 30%);\\n    grid-template-columns: 1fr 1fr;\\n    /* not sure about this height */\\n    height: 40vh;\\n    position: absolute;\\n    bottom: 0;\\n}\\n\\n.bug-pen h3 {\\n    grid-row: 1 / 1;\\n    grid-column: 1 / 3;\\n    font-family: 'Comfortaa', cursive;\\n}\\n\\n.place-bugs-random {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    width: 90px;\\n}\\n\\n.bug-container {\\n    display: grid;\\n    justify-items: center;\\n    align-items: center;\\n    grid-template-columns: 2fr 1fr;\\n    grid-template-rows: 1fr 3fr;\\n    grid-template-areas:\\n        'bug-name bug-name'\\n        'bug input'\\n        'bug rotate';\\n    font-size: 0.9em;\\n    position: relative;\\n    border: 1px solid;\\n}\\n\\n.worm {\\n    grid-row: 2 / 2;\\n    grid-column: 1 / 3;\\n}\\n\\n.bug-container h4 {\\n    grid-area: bug-name;\\n}\\n\\n.rotate-bug {\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n}\\n\\n.whole-bug {\\n    display: flex;\\n    cursor: move;\\n    grid-area: bug;\\n}\\n\\n.coords-input-container {\\n    text-align: left;\\n    font-size: 12px;\\n}\\n\\n.coords-input-container label {\\n    display: block;\\n}\\n\\n.coords-input-container input {\\n    border: none;\\n    height: 20px;\\n    width: 30px;\\n}\\n\\n.coords-input-container button {\\n    height: 20px;\\n    width: 30px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Board {\n    constructor() {\n        this.grid = this._initGrid();\n        this.bugs = [];\n    }\n\n    _initGrid() {\n        const grid = [];\n        for (let i = 0; i < 10; i++) {\n            const row = [];\n            for (let j = 0; j < 10; j++) {\n                row.push(null);\n            }\n            grid.push(row);\n        }\n        return grid;\n    }\n\n    placeBug(bug, x, y) {\n        if (\n            x < 0 ||\n            y < 0 ||\n            x >= 10 ||\n            y >= 10 ||\n            (bug.direction === 'horizontal' && x + bug.length >= 10) ||\n            (bug.direction === 'vertical' && y + bug.length >= 10)\n        ) {\n            throw new Error('cannot place bug off the grid');\n        }\n\n        if (bug.direction === 'horizontal') {\n            if (\n                this.grid[y]\n                    .slice(x, x + bug.length)\n                    .some((unit) => unit !== null)\n            ) {\n                throw new Error('there is already another bug here!');\n            }\n            for (let bugIndex = 0; bugIndex < bug.length; bugIndex++) {\n                this.grid[y][x + bugIndex] = [bug, bugIndex];\n            }\n        } else {\n            let bugIndex = 0;\n            // first check if there are any other bugs here.\n            for (let rowI = y; rowI < y + bug.length; rowI++) {\n                if (this.grid[rowI][x] !== null) {\n                    throw new Error('there is already another bug here!');\n                }\n            }\n            // place the bug if there were no errors.\n            for (let rowI = y; rowI < y + bug.length; rowI++) {\n                this.grid[rowI][x] = [bug, bugIndex];\n                bugIndex++;\n            }\n        }\n\n        this.bugs.push(bug);\n    }\n\n    placeBugRandomly(bug) {\n        let x = Math.floor(Math.random() * 10);\n        let y = Math.floor(Math.random() * 10);\n\n        // select direction randomly as well\n        let shouldDirectionChange = Math.random() < 0.5;\n        if (shouldDirectionChange) bug.direction = 'vertical';\n\n        try {\n            this.placeBug(bug, x, y);\n        } catch {\n            // catch thrown error and re-run for bug\n            // if there's an error\n            this.placeBugRandomly(bug);\n        }\n    }\n\n    receiveAttack(x, y) {\n        switch (this.grid[y][x]) {\n            case 'miss':\n                console.log(\"you've already swatted here!\");\n                throw new Error('this unit has already been attacked!');\n            case null:\n                console.log(`Missed at ${x}, ${y}!`);\n                this.grid[y][x] = 'miss';\n                return ['miss', [x, y]];\n            default:\n                console.log(`Hit ${this.grid[y][x][0].name} at ${x}, ${y}`);\n                return this._hitBug(this.grid[y][x], [x, y]);\n        }\n    }\n\n    convertCoordsToIndicies(coords) {\n        const letter = coords.slice(0, 1);\n        const number = coords.slice(1);\n        const indicies = [];\n        switch (letter) {\n            case 'A':\n                indicies[1] = 0;\n                break;\n            case 'B':\n                indicies[1] = 1;\n                break;\n            case 'C':\n                indicies[1] = 2;\n                break;\n            case 'D':\n                indicies[1] = 3;\n                break;\n            case 'E':\n                indicies[1] = 4;\n                break;\n            case 'F':\n                indicies[1] = 5;\n                break;\n            case 'G':\n                indicies[1] = 6;\n                break;\n            case 'H':\n                indicies[1] = 7;\n                break;\n            case 'I':\n                indicies[1] = 8;\n                break;\n            case 'J':\n                indicies[1] = 9;\n                break;\n            default:\n                throw new Error('invalid coordinate letter');\n        }\n\n        if (number < 1 || number > 10 || isNaN(number)) {\n            throw new Error('invalid coordinate number');\n        }\n\n        indicies[0] = number - 1;\n\n        return indicies;\n    }\n\n    _hitBug([bug, bugIndex], [x, y]) {\n        bug.hit(bugIndex);\n        return [bug, [x, y]];\n    }\n\n    areAllBugsSwatted() {\n        return this.bugs.every((bug) => bug.isSwatted());\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack://battleship/./src/board.js?");

/***/ }),

/***/ "./src/bugs.js":
/*!*********************!*\
  !*** ./src/bugs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Bug {\n    constructor(length, name, direction = 'horizontal') {\n        this.length = length;\n        this.name = name;\n        this.direction = direction;\n        this.units = this._initUnits();\n    }\n\n    _initUnits() {\n        const units = [];\n        for (let i = 0; i < this.length; i++) {\n            // 'safe' indicates a non-hit unit.\n            units.push('safe');\n        }\n        return units;\n    }\n\n    hit(index) {\n        if (index >= this.length || index < 0) {\n            throw new Error('invalid target index');\n        } else if (this.units[index] === 'hit') {\n            throw new Error('already hit this index');\n        }\n        const newUnits = [...this.units];\n        newUnits.splice(index, 1, 'hit');\n        this.units = newUnits;\n    }\n\n    isSwatted() {\n        if (this.units.includes('safe')) {\n            // If not all units are hit, bug is not swatted.\n            return false;\n        } else {\n            return true;\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug);\n\n\n//# sourceURL=webpack://battleship/./src/bugs.js?");

/***/ }),

/***/ "./src/dom/board-dom.js":
/*!******************************!*\
  !*** ./src/dom/board-dom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoardDisplay\": () => (/* binding */ BoardDisplay)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ \"./src/game.js\");\n/* harmony import */ var _bug_pen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bug-pen */ \"./src/dom/bug-pen.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _bug_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bug-images */ \"./src/dom/bug-images.js\");\n\n\n\n\n\nclass BoardDisplay {\n    constructor(board, boardOwnerPlayer) {\n        this.board = board;\n        this.boardOwnerPlayer = boardOwnerPlayer;\n        this.containerEl = document.createElement('article');\n        this.nameEl = document.createElement('h2');\n        this.nameEl.classList.add('board-title');\n        this.boardEl = document.createElement('div');\n        this.boardEl.classList.add('board');\n        this.bugPen = new _bug_pen__WEBPACK_IMPORTED_MODULE_1__.BugPen(this);\n    }\n\n    render() {\n        this._clearBoard();\n        if (this._shouldThisBoardBeActive()) {\n            this.boardEl.classList.add('active');\n        } else {\n            this.boardEl.classList.remove('active');\n        }\n\n        // add name element\n        this.nameEl.textContent = `${this.boardOwnerPlayer.name}'s board`;\n        this.containerEl.appendChild(this.nameEl);\n\n        // add board labels\n        this.boardEl.appendChild(this._createXAxisLabels());\n        this.boardEl.appendChild(this._createYAxisLabels());\n\n        // add units to board\n        const unitEls = this._createUnits();\n        unitEls.forEach((unitEl) => this.boardEl.appendChild(unitEl));\n\n        // add board element\n        this.containerEl.appendChild(this.boardEl);\n\n        // add bug pen\n        if (!this.bugPen.hasBeenCreated) {\n            this.bugPen.createPen(this.board.bugs);\n        }\n        this.containerEl.appendChild(this.bugPen.containerEl);\n\n        // add container\n        _index__WEBPACK_IMPORTED_MODULE_2__.main.appendChild(this.containerEl);\n    }\n\n    _clearBoard() {\n        while (this.boardEl.firstChild) {\n            this.boardEl.removeChild(this.boardEl.firstChild);\n        }\n    }\n\n    _createXAxisLabels() {\n        const xLabelsContainer = document.createElement('div');\n        xLabelsContainer.classList.add('board-x-labels');\n\n        for (let n = 1; n <= 10; n++) {\n            const xLabel = document.createElement('div');\n            xLabel.textContent = n;\n            xLabelsContainer.appendChild(xLabel);\n        }\n\n        return xLabelsContainer;\n    }\n\n    _createYAxisLabels() {\n        const yLabelsContainer = document.createElement('div');\n        yLabelsContainer.classList.add('board-y-labels');\n\n        let yCharCode = 65;\n        for (let n = 1; n <= 10; n++) {\n            // Start y label as 'A'\n            // add letter by unicode\n            const yLabel = document.createElement('div');\n            yLabel.textContent = String.fromCharCode(yCharCode);\n            yLabelsContainer.appendChild(yLabel);\n\n            yCharCode++;\n        }\n\n        return yLabelsContainer;\n    }\n\n    _createUnits() {\n        const unitEls = [];\n\n        this.board.grid.forEach((row) => {\n            let unitIndex = 0;\n\n            row.forEach((unit) => {\n                const unitEl = this._createUnit(unit);\n\n                const x = unitIndex;\n                const y = this.board.grid.indexOf(row);\n\n                if (this._shouldThisBoardBeClickable()) {\n                    this._addClickEventListener(unitEl, [x, y]);\n                }\n\n                unitEls.push(unitEl);\n\n                unitIndex++;\n            });\n        });\n\n        return unitEls;\n    }\n\n    _createUnit(unit) {\n        const unitEl = document.createElement('button');\n        unitEl.classList.add('unit');\n\n        this._styleUnit(unit, unitEl);\n\n        return unitEl;\n    }\n\n    _styleUnit(unit, unitEl) {\n        if (unit === 'miss') {\n            unitEl.classList.add('miss');\n        } else if (unit !== null) {\n            const bug = unit[0];\n            const unitIndex = unit[1];\n            // if this unit was hit, add styles\n            if (bug.units[unitIndex] === 'hit') unitEl.classList.add('hit');\n            // if this bug was swatted, add styles\n            if (bug.isSwatted()) unitEl.classList.add('swatted');\n            // temporarily add name until bug assets are added\n            if (_game__WEBPACK_IMPORTED_MODULE_0__.default.shouldShowBugs(this.boardOwnerPlayer)) {\n                unitEl.classList.add('bug');\n                (0,_bug_images__WEBPACK_IMPORTED_MODULE_3__.default)(unitEl, bug, unitIndex);\n            }\n        }\n    }\n\n    _shouldThisBoardBeActive() {\n        return !this.boardOwnerPlayer.isMyTurn;\n    }\n\n    _shouldThisBoardBeClickable() {\n        return (\n            !this.boardOwnerPlayer.isMyTurn && !_game__WEBPACK_IMPORTED_MODULE_0__.default.getWhoseTurn().isComputer\n        );\n    }\n\n    _addClickEventListener(unitEl, [x, y]) {\n        unitEl.addEventListener('click', () => _game__WEBPACK_IMPORTED_MODULE_0__.default.playTurn(x, y));\n    }\n\n    disable() {\n        // styles - opacity lower\n        this.boardEl.style.opacity = '0.5';\n        // remove active class\n        this.boardEl.classList.remove('active');\n        // disable unit buttons\n        this.boardEl.childNodes.forEach((unit) => (unit.disabled = true));\n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/dom/board-dom.js?");

/***/ }),

/***/ "./src/dom/bug-images.js":
/*!*******************************!*\
  !*** ./src/dom/bug-images.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_ladybug_0_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/ladybug_0.png */ \"./src/img/ladybug_0.png\");\n/* harmony import */ var _img_ladybug_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/ladybug_1.png */ \"./src/img/ladybug_1.png\");\n/* harmony import */ var _img_ant_0_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/ant_0.png */ \"./src/img/ant_0.png\");\n/* harmony import */ var _img_ant_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/ant_1.png */ \"./src/img/ant_1.png\");\n/* harmony import */ var _img_ant_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/ant_2.png */ \"./src/img/ant_2.png\");\n/* harmony import */ var _img_spider_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spider_1.png */ \"./src/img/spider_1.png\");\n/* harmony import */ var _img_spider_0_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spider_0.png */ \"./src/img/spider_0.png\");\n/* harmony import */ var _img_spider_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spider_2.png */ \"./src/img/spider_2.png\");\n/* harmony import */ var _img_caterpillar_0_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/caterpillar_0.png */ \"./src/img/caterpillar_0.png\");\n/* harmony import */ var _img_caterpillar_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/caterpillar_1.png */ \"./src/img/caterpillar_1.png\");\n/* harmony import */ var _img_caterpillar_2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/caterpillar_2.png */ \"./src/img/caterpillar_2.png\");\n/* harmony import */ var _img_caterpillar_3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/caterpillar_3.png */ \"./src/img/caterpillar_3.png\");\n/* harmony import */ var _img_worm_0_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/worm_0.png */ \"./src/img/worm_0.png\");\n/* harmony import */ var _img_worm_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/worm_1.png */ \"./src/img/worm_1.png\");\n/* harmony import */ var _img_worm_2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/worm_2.png */ \"./src/img/worm_2.png\");\n/* harmony import */ var _img_worm_3_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/worm_3.png */ \"./src/img/worm_3.png\");\n/* harmony import */ var _img_worm_4_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/worm_4.png */ \"./src/img/worm_4.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst bugImages = {\n    ladybug: [_img_ladybug_0_png__WEBPACK_IMPORTED_MODULE_0__, _img_ladybug_1_png__WEBPACK_IMPORTED_MODULE_1__],\n    ant: [_img_ant_0_png__WEBPACK_IMPORTED_MODULE_2__, _img_ant_1_png__WEBPACK_IMPORTED_MODULE_3__, _img_ant_2_png__WEBPACK_IMPORTED_MODULE_4__],\n    spider: [_img_spider_0_png__WEBPACK_IMPORTED_MODULE_6__, _img_spider_1_png__WEBPACK_IMPORTED_MODULE_5__, _img_spider_2_png__WEBPACK_IMPORTED_MODULE_7__],\n    caterpillar: [_img_caterpillar_0_png__WEBPACK_IMPORTED_MODULE_8__, _img_caterpillar_1_png__WEBPACK_IMPORTED_MODULE_9__, _img_caterpillar_2_png__WEBPACK_IMPORTED_MODULE_10__, _img_caterpillar_3_png__WEBPACK_IMPORTED_MODULE_11__],\n    worm: [_img_worm_0_png__WEBPACK_IMPORTED_MODULE_12__, _img_worm_1_png__WEBPACK_IMPORTED_MODULE_13__, _img_worm_2_png__WEBPACK_IMPORTED_MODULE_14__, _img_worm_3_png__WEBPACK_IMPORTED_MODULE_15__, _img_worm_4_png__WEBPACK_IMPORTED_MODULE_16__],\n};\n\nfunction styleUnitWithBugImage(unitEl, bug, index) {\n    if (checkIfBugIsVertical(bug.direction)) {\n        unitEl.style.transform = 'rotate(90deg)';\n    } else {\n        unitEl.style.transform = 'rotate(0deg)';\n    }\n    unitEl.style.backgroundImage = getBugImageURL(bug.name, index);\n}\n\nfunction getBugImageURL(bugName, index) {\n    return `url(${getBugImage(bugName, index)})`;\n}\n\nfunction getBugImage(bugName, index) {\n    bugName = bugName.toLowerCase();\n    return bugImages[bugName][index];\n}\n\nfunction checkIfBugIsVertical(bugDirection) {\n    return bugDirection === 'vertical' ? true : false;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleUnitWithBugImage);\n\n\n//# sourceURL=webpack://battleship/./src/dom/bug-images.js?");

/***/ }),

/***/ "./src/dom/bug-pen.js":
/*!****************************!*\
  !*** ./src/dom/bug-pen.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BugPen\": () => (/* binding */ BugPen)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ \"./src/game.js\");\n/* harmony import */ var _bug_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bug-images */ \"./src/dom/bug-images.js\");\n\n\n\nclass BugPen {\n    constructor(boardDisplay) {\n        this.boardDisplay = boardDisplay;\n        this.board = boardDisplay.board;\n        this.owner = boardDisplay.boardOwnerPlayer;\n\n        this.hasBeenCreated = false;\n        this.bugsOnBoardCount = 0;\n\n        this.containerEl = document.createElement('div');\n        this.containerEl.classList.add('bug-pen');\n\n        this.titleEl = document.createElement('h3');\n        this.titleEl.textContent = `${this.owner.name}'s Bugs`;\n        this.containerEl.appendChild(this.titleEl);\n\n        this.placeBugsRandomlyBtn = document.createElement('button');\n        this.placeBugsRandomlyBtn.classList.add('place-bugs-random');\n        this.placeBugsRandomlyBtn.textContent = 'Place Bugs Randomly';\n        this.containerEl.appendChild(this.placeBugsRandomlyBtn);\n    }\n\n    createPen(bugs) {\n        bugs.forEach((bug) => {\n            const bugContainer = document.createElement('div');\n            bugContainer.classList.add('bug-container');\n            bugContainer.classList.add(bug.name.toLowerCase());\n\n            const bugName = document.createElement('h4');\n            bugName.textContent = bug.name;\n            bugContainer.appendChild(bugName);\n\n            const wholeBug = document.createElement('div');\n            wholeBug.classList.add('whole-bug');\n            wholeBug.draggable = true;\n            this.addDragEventListeners(wholeBug);\n\n            for (let i = 0; i < bug.units.length; i++) {\n                const bugUnit = document.createElement('div');\n                bugUnit.classList.add('unit');\n                bugUnit.classList.add('bug');\n                (0,_bug_images__WEBPACK_IMPORTED_MODULE_1__.default)(bugUnit, bug, i);\n                wholeBug.appendChild(bugUnit);\n            }\n\n            bugContainer.appendChild(wholeBug);\n\n            // only add inputs if the owner of the bugs is human\n            if (!this.owner.isComputer) {\n                bugContainer.appendChild(this._createRotateBtn(bug, wholeBug));\n                bugContainer.appendChild(this._createCoordsInput(bug));\n            }\n\n            this.containerEl.appendChild(bugContainer);\n        });\n\n        this.placeBugsRandomlyBtn.addEventListener('click', () => {\n            bugs.forEach((bug) => this.board.placeBugRandomly(bug));\n            this.placeBugsRandomlyBtn.disabled = true;\n            this.onAllBugsArePlaced();\n        });\n\n        // reset bugs on board object so that they don't get doubled up\n        // when the player places them on the board\n        if (!this.owner.isComputer) {\n            this.board.bugs = [];\n        }\n\n        // change this flag so extra bugs don't get added by BoardDisplay\n        this.hasBeenCreated = true;\n    }\n\n    _createRotateBtn(bug, bugEl) {\n        const rotateBtn = document.createElement('button');\n        rotateBtn.classList.add('rotate-bug');\n        rotateBtn.textContent = 'Rotate Bug';\n        rotateBtn.addEventListener('click', () => {\n            if (bug.direction === 'horizontal') {\n                bug.direction = 'vertical';\n                bugEl.style.flexDirection = 'column';\n            } else {\n                bug.direction = 'horizontal';\n                bugEl.style.flexDirection = 'row';\n            }\n            // update background styles\n            for (let i = 0; i < bug.units.length; i++) {\n                (0,_bug_images__WEBPACK_IMPORTED_MODULE_1__.default)(bugEl.childNodes[i], bug, i);\n            }\n        });\n        return rotateBtn;\n    }\n\n    _createCoordsInput(bug) {\n        const coordsInputContainer = document.createElement('div');\n        coordsInputContainer.classList.add('coords-input-container');\n\n        const label = document.createElement('label');\n        label.textContent = 'Coordinates:';\n        coordsInputContainer.appendChild(label);\n\n        const input = document.createElement('input');\n        input.maxLength = 3;\n        input.minLength = 2;\n        coordsInputContainer.appendChild(input);\n\n        const submit = document.createElement('button');\n        submit.textContent = 'Place';\n        submit.addEventListener('click', () =>\n            this.onSubmitCoords(submit, input, bug)\n        );\n        coordsInputContainer.appendChild(submit);\n\n        return coordsInputContainer;\n    }\n\n    onSubmitCoords(submitBtn, inputEl, bug) {\n        const [x, y] = this.board.convertCoordsToIndicies(inputEl.value);\n\n        this.board.placeBug(bug, x, y);\n\n        this.boardDisplay.render();\n\n        submitBtn.remove();\n\n        // TODO: add edit button\n\n        this.bugsOnBoardCount++;\n        if (this.bugsOnBoardCount === 5) {\n            this.onAllBugsArePlaced();\n        }\n    }\n\n    onAllBugsArePlaced() {\n        console.log('all bugs have been added!');\n        const enemy = _game__WEBPACK_IMPORTED_MODULE_0__.default.getEnemyPlayer(this.owner);\n        if (enemy.isComputer) {\n            _game__WEBPACK_IMPORTED_MODULE_0__.default.setupFirstTurn();\n        } else {\n            // Check if it is player 2, because it will be player 1's turn\n            if (!enemy.isMyTurn) {\n                _game__WEBPACK_IMPORTED_MODULE_0__.default.placeBugsFromPen(enemy);\n            } else {\n                // If the enemy is p1, p2 has already placed bugs\n                // so we can begin the game\n                _game__WEBPACK_IMPORTED_MODULE_0__.default.setupFirstTurn();\n            }\n        }\n    }\n\n    addDragEventListeners(bugContainer) {\n        bugContainer.addEventListener('dragstart', onDragStart);\n\n        function onDragStart(e) {\n            console.log(e);\n        }\n\n        bugContainer.addEventListener('dragend', onDragEnd);\n\n        function onDragEnd(e) {\n            const dropX = e.screenX;\n            const dropY = e.screenY;\n\n            const dropEl = document.elementFromPoint(dropX, dropY);\n            console.log(dropEl);\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/dom/bug-pen.js?");

/***/ }),

/***/ "./src/dom/messages.js":
/*!*****************************!*\
  !*** ./src/dom/messages.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _setup_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup-dom */ \"./src/dom/setup-dom.js\");\n\n\n\nconst messages = (() => {\n    const containerEl = document.createElement('div');\n    containerEl.id = 'messages';\n\n    const text = [];\n\n    function render(turnData) {\n        containerEl.remove();\n        _clear();\n        _create(turnData);\n        text.forEach((message) => {\n            if (message === 'playAgainBtn') {\n                containerEl.appendChild(playAgainBtn);\n            } else {\n                const p = document.createElement('p');\n                p.textContent = message;\n                containerEl.appendChild(p);\n            }\n        });\n        _index__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(containerEl);\n    }\n\n    function _clear() {\n        while (containerEl.firstChild) {\n            containerEl.removeChild(containerEl.firstChild);\n        }\n        text.length = 0;\n    }\n\n    function _create(turnData) {\n        if (!turnData) {\n            text.push(\n                'Welcome to BatteBug! Please enter your information and click \"Play\".'\n            );\n            return;\n        }\n\n        switch (turnData.action) {\n            case 'firstTurn':\n                text.push(\n                    `${turnData.whoDidAction}, you go first! Click on ${turnData.whoReceivedAction}'s board to attack!`\n                );\n                return;\n            case 'placeBugs':\n                // render \"Player X, please place your bugs by typing...\"\n                text.push(\n                    `${turnData.whoDidAction}, please place your bugs by typing in coordinates for where you would like the topmost or leftmost unit to be. Please type the coordinates with a capital letter and number (example: A1).`\n                );\n                return;\n            case 'miss':\n                text.push(\n                    `${turnData.whoDidAction} missed at ${turnData.coords}`\n                );\n                break;\n            case 'hit':\n                text.push(\n                    `${turnData.whoDidAction} hit ${turnData.whoReceivedAction}'s ${turnData.hitBug} at ${turnData.coords}!`\n                );\n                break;\n            default:\n                console.log('Something went wrong with messages');\n        }\n\n        // // render \"Pass to other player\"\n        // if (turnData.firstTurn) {\n        // }\n\n        if (turnData.wasABugSwatted) {\n            text.push(\n                `${turnData.whoReceivedAction}'s ${turnData.missOrBug} has been swatted!`\n            );\n        }\n\n        if (!turnData.shouldGameEnd) {\n            text.push(`It is ${turnData.whoReceivedAction}'s turn`);\n        } else {\n            text.push(`Game over! ${turnData.whoDidAction} wins!`);\n            text.push('playAgainBtn');\n        }\n    }\n\n    return { render };\n})();\n\nconst playAgainBtn = document.createElement('button');\nplayAgainBtn.textContent = 'Play Again';\nplayAgainBtn.addEventListener('click', () => {\n    while (_index__WEBPACK_IMPORTED_MODULE_0__.main.firstChild) {\n        _index__WEBPACK_IMPORTED_MODULE_0__.main.removeChild(_index__WEBPACK_IMPORTED_MODULE_0__.main.firstChild);\n    }\n    _setup_dom__WEBPACK_IMPORTED_MODULE_1__.setup.render();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messages);\n\n\n//# sourceURL=webpack://battleship/./src/dom/messages.js?");

/***/ }),

/***/ "./src/dom/setup-dom.js":
/*!******************************!*\
  !*** ./src/dom/setup-dom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setup\": () => (/* binding */ setup)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game */ \"./src/game.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\nconst setup = (() => {\n    const containerEl = document.createElement('article');\n    containerEl.id = 'setup';\n\n    const setupTitle = document.createElement('h3');\n    setupTitle.textContent = 'Setup';\n    containerEl.appendChild(setupTitle);\n\n    class PlayerInfo {\n        constructor(playerN) {\n            this.playerN = playerN;\n            this.containerEl = document.createElement('section');\n            this.containerEl.classList.add('player-info');\n            this.playerName = new PlayerName(playerN, 'name');\n            this.playerIsComputer = new PlayerIsComputer(\n                playerN,\n                'is-computer'\n            );\n        }\n\n        render() {\n            this.playerName.create();\n            this.containerEl.appendChild(this.playerName.containerEl);\n\n            this.playerIsComputer.create(this.playerName.inputEl);\n            this.containerEl.appendChild(this.playerIsComputer.containerEl);\n\n            containerEl.appendChild(this.containerEl);\n        }\n    }\n\n    class PlayerInfoAttribute {\n        constructor(playerN, attribute) {\n            this.playerN = playerN;\n            this.attribute = attribute;\n\n            this.containerEl = document.createElement('div');\n            this.containerEl.classList.add(`player-${this.attribute}`);\n\n            this.labelEl = document.createElement('label');\n            this.labelEl.setAttribute(\n                'for',\n                `player${playerN}-${this.attribute}`\n            );\n\n            this.inputEl = document.createElement('input');\n            this.inputEl.id = `player${playerN}-${this.attribute}`;\n            this.inputEl.setAttribute(\n                'name',\n                `player${playerN}-${this.attribute}`\n            );\n        }\n    }\n\n    class PlayerName extends PlayerInfoAttribute {\n        constructor(playerN, attribute) {\n            super(playerN, attribute);\n            this.labelEl.textContent = `What is Player ${playerN}'s name?`;\n        }\n\n        create() {\n            this.containerEl.appendChild(this.labelEl);\n            this.containerEl.appendChild(this.inputEl);\n        }\n    }\n\n    class PlayerIsComputer extends PlayerInfoAttribute {\n        constructor(playerN, attribute) {\n            super(playerN, attribute);\n            this.labelEl.textContent = `Is Player ${playerN} a computer?`;\n        }\n\n        create(playerNameInput) {\n            this.containerEl.appendChild(this.labelEl);\n\n            this.inputEl.type = 'checkbox';\n            this.inputEl.addEventListener('change', () =>\n                this.onIsComputerClick(playerNameInput)\n            );\n\n            if (this.playerN === 2) {\n                this.makePlayerAComputer(playerNameInput);\n            }\n\n            this.containerEl.appendChild(this.inputEl);\n        }\n\n        onIsComputerClick(nameInput) {\n            if (this.inputEl.checked) {\n                this.makePlayerAComputer(nameInput);\n            } else {\n                this.makePlayerNotAComputer(nameInput);\n            }\n        }\n\n        makePlayerAComputer(nameInput) {\n            this.inputEl.checked = true;\n            nameInput.value = 'Computer';\n            nameInput.disabled = true;\n        }\n\n        makePlayerNotAComputer(nameInput) {\n            this.inputEl.checked = false;\n            nameInput.value = '';\n            nameInput.disabled = false;\n        }\n    }\n\n    const playersNameInfo = {};\n\n    for (let playerN = 1; playerN < 3; playerN++) {\n        const playerInfo = new PlayerInfo(playerN);\n        playersNameInfo[playerN] = playerInfo.playerName;\n        playerInfo.render();\n    }\n\n    const playBtn = document.createElement('button');\n    playBtn.textContent = 'Play';\n    playBtn.addEventListener('click', onPlayBtnClick);\n    containerEl.appendChild(playBtn);\n\n    // on click submit button\n    function onPlayBtnClick() {\n        // get name inputs\n        const playerNames = {\n            1: playersNameInfo[1].inputEl.value,\n            2: playersNameInfo[2].inputEl.value,\n        };\n\n        // if none, default to \"Player N\"\n        for (let player in playerNames) {\n            if (playerNames[player] === '') {\n                playerNames[player] = `Player ${player}`;\n            }\n        }\n\n        // remove setup elements\n        removeSetup();\n\n        // play game function\n        _game__WEBPACK_IMPORTED_MODULE_0__.default.setup(playerNames);\n        // this should render the boards\n    }\n\n    function render() {\n        _index__WEBPACK_IMPORTED_MODULE_1__.main.appendChild(containerEl);\n    }\n\n    function removeSetup() {\n        _index__WEBPACK_IMPORTED_MODULE_1__.main.removeChild(containerEl);\n    }\n\n    return { render };\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/dom/setup-dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _bugs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bugs */ \"./src/bugs.js\");\n/* harmony import */ var _dom_board_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/board-dom */ \"./src/dom/board-dom.js\");\n/* harmony import */ var _dom_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/messages */ \"./src/dom/messages.js\");\n\n\n\n\n\n\nconst game = (() => {\n    const boards = {};\n    const players = {};\n    const boardDisplays = {};\n\n    function setup(playerNames) {\n        boards[1] = new _board__WEBPACK_IMPORTED_MODULE_1__.default();\n        boards[2] = new _board__WEBPACK_IMPORTED_MODULE_1__.default();\n\n        players[1] = new _player__WEBPACK_IMPORTED_MODULE_0__.default(playerNames[1], boards[2]);\n        players[2] = new _player__WEBPACK_IMPORTED_MODULE_0__.default(playerNames[2], boards[1]);\n\n        // Player 1 goes first.\n        players[1].switchTurn();\n\n        for (let n in boards) {\n            const owner = players[n];\n            const boardDisplay = new _dom_board_dom__WEBPACK_IMPORTED_MODULE_3__.BoardDisplay(boards[n], owner);\n            boardDisplay.containerEl.classList.add('p' + n);\n            boardDisplays[n] = boardDisplay;\n        }\n\n        const bugCollections = {\n            1: [\n                new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(5, 'Worm'),\n                new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(4, 'Caterpillar'),\n                new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Ant'),\n                new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Spider'),\n                new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(2, 'Ladybug'),\n            ],\n\n            2: [\n                new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(5, 'Worm'),\n                new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(4, 'Caterpillar'),\n                new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Ant'),\n                new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Spider'),\n                new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(2, 'Ladybug'),\n            ],\n        };\n\n        for (let n in players) {\n            if (players[n].isComputer) {\n                bugCollections[n].forEach((bug) => {\n                    boards[n].placeBugRandomly(bug);\n                });\n            } else {\n                // push bugs to the board so they will render in bug pen\n                boards[n].bugs = bugCollections[n];\n            }\n        }\n\n        if (players[1].isComputer && players[2].isComputer) {\n            setupFirstTurn(boardDisplays);\n        } else if (!players[1].isComputer && !players[2].isComputer) {\n            // if both human, (WILL NEED PASS TO X SCREEN LATER)\n            placeBugsFromPen(players[1]);\n        } else {\n            for (let n in players) {\n                if (!players[n].isComputer) {\n                    placeBugsFromPen(players[n]);\n                }\n            }\n        }\n    }\n\n    function placeBugsFromPen(player) {\n        console.log('placing bugs from pen...');\n        const n = player === players[1] ? 1 : 2;\n        _dom_messages__WEBPACK_IMPORTED_MODULE_4__.default.render({\n            action: 'placeBugs',\n            whoDidAction: player.name,\n        });\n        boardDisplays[n].render();\n    }\n\n    function setupFirstTurn() {\n        for (let n in boardDisplays) {\n            boardDisplays[n].render();\n        }\n\n        _dom_messages__WEBPACK_IMPORTED_MODULE_4__.default.render({\n            action: 'firstTurn',\n            whoDidAction: getWhoseTurn().name,\n            whoReceivedAction: getNotWhoseTurn().name,\n        });\n\n        if (getWhoseTurn().isComputer) {\n            setTimeout(playTurn, 2000);\n        }\n    }\n\n    function playTurn(xInput, yInput) {\n        let whoseTurn = getWhoseTurn();\n\n        console.log(`======= ${whoseTurn.name} attacks! ========`);\n\n        // If whoseTurn is computer, there will be no player input and\n        // attack will be random coordinates\n        let result;\n        try {\n            result = whoseTurn.attack(xInput, yInput);\n        } catch {\n            // If computer throws an error, run the function again\n            console.log(\"you've already attacked here!\");\n            if (whoseTurn.isComputer) playTurn();\n            return;\n        }\n\n        const wasABugSwatted = result[0] !== 'miss' && result[0].isSwatted();\n        console.log('swatted? ' + wasABugSwatted);\n\n        let shouldGameEnd;\n        if (wasABugSwatted) {\n            shouldGameEnd = checkIfGameShouldEnd(whoseTurn.enemyBoard);\n        }\n\n        const action = result[0] === 'miss' ? 'miss' : 'hit';\n\n        _dom_messages__WEBPACK_IMPORTED_MODULE_4__.default.render({\n            action: action,\n            coords: result[1],\n            whoDidAction: whoseTurn.name,\n            whoReceivedAction: getNotWhoseTurn().name,\n            hitBug: action === 'hit' ? result[0].name : null,\n            wasABugSwatted,\n            shouldGameEnd,\n        });\n\n        if (shouldGameEnd) {\n            endGame();\n        } else {\n            endTurn();\n        }\n    }\n\n    function getWhoseTurn() {\n        for (let n in players) {\n            if (players[n].isMyTurn) {\n                return players[n];\n            }\n        }\n    }\n\n    function getNotWhoseTurn() {\n        for (let n in players) {\n            if (!players[n].isMyTurn) {\n                return players[n];\n            }\n        }\n    }\n\n    function getEnemyPlayer(player) {\n        for (let n in players) {\n            if (players[n] !== player) return players[n];\n        }\n    }\n\n    function shouldShowBugs(boardOwner) {\n        if (\n            (boardOwner.isMyTurn && !boardOwner.isComputer) ||\n            getEnemyPlayer(boardOwner).isComputer\n        ) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    function checkIfGameShouldEnd(boardBeingAttacked) {\n        // check if all bugs are swatted\n        if (boardBeingAttacked.areAllBugsSwatted()) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    function endTurn() {\n        for (let n in players) {\n            players[n].switchTurn();\n        }\n\n        for (let n in boardDisplays) {\n            boardDisplays[n].render();\n        }\n\n        // If it's computer's turn now, it should play without any input\n        if (getWhoseTurn().isComputer) {\n            setTimeout(playTurn, 2000);\n        }\n    }\n\n    function endGame() {\n        for (let n in boardDisplays) {\n            boardDisplays[n].render();\n            boardDisplays[n].disable();\n        }\n    }\n\n    return {\n        setup,\n        playTurn,\n        endTurn,\n        getWhoseTurn,\n        getEnemyPlayer,\n        placeBugsFromPen,\n        setupFirstTurn,\n        shouldShowBugs,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/img/ant_0.png":
/*!***************************!*\
  !*** ./src/img/ant_0.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b23b850433d3680172f4.png\";\n\n//# sourceURL=webpack://battleship/./src/img/ant_0.png?");

/***/ }),

/***/ "./src/img/ant_1.png":
/*!***************************!*\
  !*** ./src/img/ant_1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e62dfa6ff421c275279.png\";\n\n//# sourceURL=webpack://battleship/./src/img/ant_1.png?");

/***/ }),

/***/ "./src/img/ant_2.png":
/*!***************************!*\
  !*** ./src/img/ant_2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"571a611cd66c051f2aaf.png\";\n\n//# sourceURL=webpack://battleship/./src/img/ant_2.png?");

/***/ }),

/***/ "./src/img/caterpillar_0.png":
/*!***********************************!*\
  !*** ./src/img/caterpillar_0.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e248e93c179e0b21730.png\";\n\n//# sourceURL=webpack://battleship/./src/img/caterpillar_0.png?");

/***/ }),

/***/ "./src/img/caterpillar_1.png":
/*!***********************************!*\
  !*** ./src/img/caterpillar_1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7b8ee76f4144ea724eb8.png\";\n\n//# sourceURL=webpack://battleship/./src/img/caterpillar_1.png?");

/***/ }),

/***/ "./src/img/caterpillar_2.png":
/*!***********************************!*\
  !*** ./src/img/caterpillar_2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a6fde277967ae41dc5d.png\";\n\n//# sourceURL=webpack://battleship/./src/img/caterpillar_2.png?");

/***/ }),

/***/ "./src/img/caterpillar_3.png":
/*!***********************************!*\
  !*** ./src/img/caterpillar_3.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3de0e20015a92bb112ec.png\";\n\n//# sourceURL=webpack://battleship/./src/img/caterpillar_3.png?");

/***/ }),

/***/ "./src/img/ladybug_0.png":
/*!*******************************!*\
  !*** ./src/img/ladybug_0.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"49cd8b2c25f0e4abd514.png\";\n\n//# sourceURL=webpack://battleship/./src/img/ladybug_0.png?");

/***/ }),

/***/ "./src/img/ladybug_1.png":
/*!*******************************!*\
  !*** ./src/img/ladybug_1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a174805f773370cc03cd.png\";\n\n//# sourceURL=webpack://battleship/./src/img/ladybug_1.png?");

/***/ }),

/***/ "./src/img/spider_0.png":
/*!******************************!*\
  !*** ./src/img/spider_0.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"48612b638a523562eb89.png\";\n\n//# sourceURL=webpack://battleship/./src/img/spider_0.png?");

/***/ }),

/***/ "./src/img/spider_1.png":
/*!******************************!*\
  !*** ./src/img/spider_1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"86af7dcc53759caf59d5.png\";\n\n//# sourceURL=webpack://battleship/./src/img/spider_1.png?");

/***/ }),

/***/ "./src/img/spider_2.png":
/*!******************************!*\
  !*** ./src/img/spider_2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"edf52d441f02d9358e2d.png\";\n\n//# sourceURL=webpack://battleship/./src/img/spider_2.png?");

/***/ }),

/***/ "./src/img/worm_0.png":
/*!****************************!*\
  !*** ./src/img/worm_0.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ff77a6005d383629eb34.png\";\n\n//# sourceURL=webpack://battleship/./src/img/worm_0.png?");

/***/ }),

/***/ "./src/img/worm_1.png":
/*!****************************!*\
  !*** ./src/img/worm_1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc5c557422c8ffd94da1.png\";\n\n//# sourceURL=webpack://battleship/./src/img/worm_1.png?");

/***/ }),

/***/ "./src/img/worm_2.png":
/*!****************************!*\
  !*** ./src/img/worm_2.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c09af212da335cca7857.png\";\n\n//# sourceURL=webpack://battleship/./src/img/worm_2.png?");

/***/ }),

/***/ "./src/img/worm_3.png":
/*!****************************!*\
  !*** ./src/img/worm_3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4699aa5a505d1fa9567a.png\";\n\n//# sourceURL=webpack://battleship/./src/img/worm_3.png?");

/***/ }),

/***/ "./src/img/worm_4.png":
/*!****************************!*\
  !*** ./src/img/worm_4.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0250a8c836657f2c3ac9.png\";\n\n//# sourceURL=webpack://battleship/./src/img/worm_4.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _dom_setup_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/setup-dom */ \"./src/dom/setup-dom.js\");\n/* harmony import */ var _dom_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/messages */ \"./src/dom/messages.js\");\n\n\n\n\nconst main = document.querySelector('main');\n\n_dom_messages__WEBPACK_IMPORTED_MODULE_2__.default.render();\n_dom_setup_dom__WEBPACK_IMPORTED_MODULE_1__.setup.render();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Player {\n    constructor(name, enemyBoard) {\n        this.name = name;\n        this.isComputer = name === 'Computer';\n        this.enemyBoard = enemyBoard;\n        this.isMyTurn = false;\n    }\n\n    switchTurn() {\n        this.isMyTurn = !this.isMyTurn;\n    }\n\n    attack(x, y) {\n        if (!this.enemyBoard) {\n            throw new Error('player must have an enemy board to attack');\n        }\n\n        if (this.isComputer) {\n            x = Math.floor(Math.random() * 10);\n            y = Math.floor(Math.random() * 10);\n        }\n        const result = this.enemyBoard.receiveAttack(x, y);\n        return result;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;