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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    background-color: rgb(217, 231, 216);\\n    text-align: center;\\n    font-family: sans-serif;\\n}\\n\\nh1 {\\n    margin-top: 30px;\\n}\\n\\nmain {\\n    display: grid;\\n    grid-template-rows: 10vh 90vh;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-areas:\\n        'message message'\\n        'board board';\\n}\\n\\n.board {\\n    width: 500px;\\n    height: 500px;\\n    margin: 0 auto;\\n    background-color: white;\\n    border: 1px solid black;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n}\\n\\n.unit {\\n    border: 1px solid grey;\\n    background-color: white;\\n    width: 50px;\\n}\\n\\n.active.board {\\n    box-shadow: lightskyblue 0 0 10px 10px;\\n}\\n\\n.active .unit:hover {\\n    cursor: pointer;\\n    box-shadow: inset 0 0 5px black;\\n}\\n\\n.bug {\\n    background-color: lightgreen;\\n}\\n\\n.miss {\\n    background-color: grey;\\n}\\n\\n.hit {\\n    background-color: indianred;\\n}\\n\\n.swatted {\\n    opacity: 0.5;\\n}\\n\\n#messages {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    grid-area: message;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Board {\n    constructor() {\n        this.grid = this._initGrid();\n        this.bugs = [];\n    }\n\n    _initGrid() {\n        const grid = [];\n        for (let i = 0; i < 10; i++) {\n            const row = [];\n            for (let j = 0; j < 10; j++) {\n                row.push(null);\n            }\n            grid.push(row);\n        }\n        return grid;\n    }\n\n    placeBug(bug, x, y) {\n        if (\n            x < 0 ||\n            y < 0 ||\n            x >= 10 ||\n            y >= 10 ||\n            (bug.direction === 'horizontal' && x + bug.length >= 10) ||\n            (bug.direction === 'vertical' && y + bug.length >= 10)\n        ) {\n            throw new Error('cannot place bug off the grid');\n        }\n\n        if (bug.direction === 'horizontal') {\n            if (\n                this.grid[y]\n                    .slice(x, x + bug.length)\n                    .some((unit) => unit !== null)\n            ) {\n                throw new Error('there is already another bug here!');\n            }\n            for (let bugIndex = 0; bugIndex < bug.length; bugIndex++) {\n                this.grid[y][x + bugIndex] = [bug, bugIndex];\n            }\n            // this.grid[y][x]\n            // this.grid[y].fill(bug, x, x + bug.length);\n        } else {\n            let bugIndex = 0;\n            for (let rowI = y; rowI < y + bug.length; rowI++) {\n                if (this.grid[rowI][x] !== null) {\n                    throw new Error('there is already another bug here!');\n                }\n                this.grid[rowI][x] = [bug, bugIndex];\n                bugIndex++;\n            }\n        }\n\n        this.bugs.push(bug);\n    }\n\n    placeBugRandomly(bug) {\n        let x = Math.floor(Math.random() * 10);\n        let y = Math.floor(Math.random() * 10);\n\n        // select direction randomly as well\n        let shouldDirectionChange = Math.random() < 0.5;\n        if (shouldDirectionChange) bug.direction = 'vertical';\n\n        try {\n            this.placeBug(bug, x, y);\n        } catch {\n            // catch thrown error and re-run for bug\n            // if there's an error\n            this.placeBugRandomly(bug);\n        }\n    }\n\n    receiveAttack(x, y) {\n        switch (this.grid[y][x]) {\n            case 'miss':\n                console.log(\"you've already swatted here!\");\n                return;\n            case null:\n                console.log(`Missed at ${x}, ${y}!`);\n                this.grid[y][x] = 'miss';\n                return ['miss', [x, y]];\n            default:\n                console.log(`Hit ${this.grid[y][x][0].name} at ${x}, ${y}`);\n                return this._hitBug(this.grid[y][x], [x, y]);\n        }\n    }\n\n    _hitBug([bug, bugIndex], [x, y]) {\n        bug.hit(bugIndex);\n        return [bug, [x, y]];\n    }\n\n    areAllBugsSwatted() {\n        return this.bugs.every((bug) => bug.isSwatted());\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack://battleship/./src/board.js?");

/***/ }),

/***/ "./src/bugs.js":
/*!*********************!*\
  !*** ./src/bugs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Bug {\n    constructor(length, name, direction = 'horizontal') {\n        this.length = length;\n        this.name = name;\n        this.direction = direction;\n        this.units = this._initUnits();\n    }\n\n    _initUnits() {\n        const units = [];\n        for (let i = 0; i < this.length; i++) {\n            // 'safe' indicates a non-hit unit.\n            units.push('safe');\n        }\n        return units;\n    }\n\n    hit(index) {\n        if (index >= this.length || index < 0) {\n            throw new Error('invalid target index');\n        } else if (this.units[index] === 'hit') {\n            throw new Error('already hit this index');\n        }\n        const newUnits = [...this.units];\n        newUnits.splice(index, 1, 'hit');\n        this.units = newUnits;\n    }\n\n    isSwatted() {\n        if (this.units.includes('safe')) {\n            // If not all units are hit, bug is not swatted.\n            return false;\n        } else {\n            return true;\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug);\n\n\n//# sourceURL=webpack://battleship/./src/bugs.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst events = {\n    events: {},\n    on: function (eventName, fn) {\n        this.events[eventName] = this.events[eventName] || [];\n        this.events[eventName].push(fn);\n    },\n    off: function (eventName, fn) {\n        if (this.events[eventName]) {\n            for (let i = 0; i < this.events[eventName].length; i++) {\n                if (this.events[eventName][i] === fn) {\n                    this.events[eventName].splice(i, 1);\n                    break;\n                }\n            }\n        }\n    },\n    emit: function (eventName, data) {\n        if (this.events[eventName]) {\n            this.events[eventName].forEach((fn) => fn(data));\n        }\n    },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n\n//# sourceURL=webpack://battleship/./src/events.js?");

/***/ }),

/***/ "./src/game-dom.js":
/*!*************************!*\
  !*** ./src/game-dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boardDisplays\": () => (/* binding */ boardDisplays),\n/* harmony export */   \"messageDisplays\": () => (/* binding */ messageDisplays)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\n\nconst main = document.querySelector('main');\n\nclass BoardDisplay {\n    constructor(board) {\n        this.board = board;\n        this.boardOwnerPlayer = _game__WEBPACK_IMPORTED_MODULE_0__.default.players.find(\n            (player) => player.enemyBoard !== board\n        );\n        this.containerEl = document.createElement('article');\n        this.nameEl = document.createElement('h2');\n        this.boardEl = document.createElement('div');\n        this.boardEl.classList.add('board');\n    }\n\n    render() {\n        this._clearBoard();\n        if (this._shouldThisBoardBeActive()) {\n            this.boardEl.classList.add('active');\n        } else {\n            this.boardEl.classList.remove('active');\n        }\n\n        // add name element\n        this.nameEl.textContent = `${this.boardOwnerPlayer.name}'s board`;\n        this.containerEl.appendChild(this.nameEl);\n\n        // add units to board\n        const unitEls = this._createUnits();\n        unitEls.forEach((unitEl) => this.boardEl.appendChild(unitEl));\n\n        // add board element\n        this.containerEl.appendChild(this.boardEl);\n\n        // add container\n        main.appendChild(this.containerEl);\n    }\n\n    _clearBoard() {\n        while (this.boardEl.firstChild) {\n            this.boardEl.removeChild(this.boardEl.firstChild);\n        }\n    }\n\n    _createUnits() {\n        const unitEls = [];\n\n        this.board.grid.forEach((row) => {\n            let unitIndex = 0;\n\n            row.forEach((unit) => {\n                const unitEl = this._createUnit(unit);\n\n                const x = unitIndex;\n                const y = this.board.grid.indexOf(row);\n\n                if (this._shouldThisBoardBeClickable()) {\n                    this._addClickEventListener(unitEl, [x, y]);\n                }\n\n                unitEls.push(unitEl);\n\n                unitIndex++;\n            });\n        });\n\n        return unitEls;\n    }\n\n    _createUnit(unit) {\n        const unitEl = document.createElement('button');\n        unitEl.classList.add('unit');\n\n        this._styleUnit(unit, unitEl);\n\n        return unitEl;\n    }\n\n    _styleUnit(unit, unitEl) {\n        if (unit === 'miss') {\n            unitEl.classList.add('miss');\n        } else if (unit !== null) {\n            unitEl.classList.add('bug');\n            const bug = unit[0];\n            // if this unit was hit, add styles\n            if (bug.units[unit[1]] === 'hit') unitEl.classList.add('hit');\n            // if this bug was swatted, add styles\n            if (bug.isSwatted()) unitEl.classList.add('swatted');\n            // temporarily add name until bug assets are added\n            unitEl.textContent = bug.name;\n        }\n    }\n\n    _shouldThisBoardBeActive() {\n        return !this.boardOwnerPlayer.isMyTurn;\n    }\n\n    _shouldThisBoardBeClickable() {\n        return (\n            !this.boardOwnerPlayer.isMyTurn &&\n            !_game__WEBPACK_IMPORTED_MODULE_0__.default.players.find((player) => player.isMyTurn).isComputer\n        );\n    }\n\n    _addClickEventListener(unitEl, [x, y]) {\n        unitEl.addEventListener('click', () =>\n            this._emitAttackInputCoords(x, y)\n        );\n    }\n\n    _emitAttackInputCoords(x, y) {\n        // game object should listen for this event\n        _events__WEBPACK_IMPORTED_MODULE_1__.default.emit('unitClicked', [x, y]);\n    }\n\n    disable() {\n        // styles - opacity lower\n        this.boardEl.style.opacity = '0.5';\n        // remove active class\n        this.boardEl.classList.remove('active');\n        // disable unit buttons\n        this.boardEl.childNodes.forEach((unit) => (unit.disabled = true));\n    }\n}\n\nclass MessageDisplay {\n    constructor() {\n        this.messageEl = document.createElement('p');\n    }\n\n    render(newText) {\n        // update text\n        this.messageEl.textContent = newText;\n    }\n}\n\nconst messageDisplays = {\n    previousAction: new MessageDisplay(),\n    whoseTurn: new MessageDisplay(),\n};\n\nconst messagesContainer = document.createElement('div');\nmessagesContainer.id = 'messages';\nmessagesContainer.appendChild(messageDisplays.previousAction.messageEl);\nmessagesContainer.appendChild(messageDisplays.whoseTurn.messageEl);\nmain.appendChild(messagesContainer);\n\nconst boardDisplays = [];\n\n_game__WEBPACK_IMPORTED_MODULE_0__.default.boards.forEach((board) => {\n    const thisBoardDisplay = new BoardDisplay(board);\n    boardDisplays.push(thisBoardDisplay);\n    thisBoardDisplay.render();\n});\n\n\n\n\n//# sourceURL=webpack://battleship/./src/game-dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _bugs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bugs */ \"./src/bugs.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _game_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-dom */ \"./src/game-dom.js\");\n\n\n\n\n\n\nconst game = (() => {\n    // Setup.\n    const board1 = new _board__WEBPACK_IMPORTED_MODULE_1__.default();\n    const board2 = new _board__WEBPACK_IMPORTED_MODULE_1__.default();\n\n    const player1 = new _player__WEBPACK_IMPORTED_MODULE_0__.default('Sarah', board2);\n    const player2 = new _player__WEBPACK_IMPORTED_MODULE_0__.default('Computer', board1);\n\n    const players = [player1, player2];\n\n    // Player 1 goes first.\n    player1.switchTurn();\n\n    const bugCollection1 = [\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(5, 'Worm'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(4, 'Caterpillar'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Ant'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Spider'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(2, 'Ladybug'),\n    ];\n\n    const bugCollection2 = [\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(5, 'Worm'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(4, 'Caterpillar'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Ant'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Spider'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(2, 'Ladybug'),\n    ];\n\n    bugCollection1.forEach((bug) => {\n        board1.placeBugRandomly(bug);\n    });\n\n    bugCollection2.forEach((bug) => {\n        board2.placeBugRandomly(bug);\n    });\n\n    // listen for events.\n    _events__WEBPACK_IMPORTED_MODULE_3__.default.on('unitClicked', ([x, y]) => {\n        if (player1.isMyTurn) {\n            humanPlayerTakesTurn(player1, [x, y]);\n        } else {\n            humanPlayerTakesTurn(player2, [x, y]);\n        }\n    });\n\n    function humanPlayerTakesTurn(player, [x, y]) {\n        console.log(`======= ${player.name} attacks! ========`);\n        const result = player.attack(x, y);\n        // if the result isn't a miss, check if hit bug is swatted\n        if (result[0] !== 'miss') {\n            const bug = result[0];\n            if (bug.isSwatted()) {\n                // this bug is swatted\n                console.log(bug.name + ' has been swatted by ' + player.name);\n\n                // check if all bugs are swatted\n                if (player.enemyBoard.areAllBugsSwatted()) {\n                    endGame(player);\n                    return;\n                }\n            }\n        }\n\n        endTurn(result);\n    }\n\n    function endTurn(result) {\n        let whoDidAction;\n        let whoReceivedAction;\n        if (player1.isMyTurn) {\n            whoDidAction = player1;\n            whoReceivedAction = player2;\n        } else {\n            whoDidAction = player2;\n            whoReceivedAction = player1;\n        }\n\n        // update messages\n        if (result[0] === 'miss') {\n            _game_dom__WEBPACK_IMPORTED_MODULE_4__.messageDisplays.previousAction.render(\n                `${whoDidAction.name} missed at ${result[1]}`\n            );\n        } else {\n            _game_dom__WEBPACK_IMPORTED_MODULE_4__.messageDisplays.previousAction.render(\n                `${whoDidAction.name} hit ${whoReceivedAction.name}'s ${result[0].name} at ${result[1]}!`\n            );\n        }\n\n        player1.switchTurn();\n        player2.switchTurn();\n\n        _game_dom__WEBPACK_IMPORTED_MODULE_4__.boardDisplays.forEach((boardDisplay) => boardDisplay.render());\n\n        //events.off('unitClicked');\n        _events__WEBPACK_IMPORTED_MODULE_3__.default.emit('turnEnded', result);\n    }\n\n    function endGame(winner) {\n        // make sure board renders hit unit\n        _game_dom__WEBPACK_IMPORTED_MODULE_4__.boardDisplays.forEach((boardDisplay) => boardDisplay.render());\n        // declare winner\n        console.log(winner.name + ' has won!');\n        _game_dom__WEBPACK_IMPORTED_MODULE_4__.boardDisplays.forEach((boardDisplay) => boardDisplay.disable());\n        // messages.declareWinner\n        // messages.appendPlayAgainButton\n    }\n\n    _events__WEBPACK_IMPORTED_MODULE_3__.default.on('turnEnded', () => setTimeout(computerTriesToTakeTurn, 2000));\n\n    function computerTriesToTakeTurn() {\n        if (player2.isMyTurn) {\n            console.log(`======= ${player2.name} attacks! ========`);\n            const result = player2.attack();\n            endTurn(result);\n        }\n    }\n\n    return { boards: [board1, board2], players };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _game_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-dom */ \"./src/game-dom.js\");\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;