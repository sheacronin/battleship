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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    background-color: rgb(217, 231, 216);\\n    text-align: center;\\n    font-family: sans-serif;\\n}\\n\\nh1 {\\n    margin-top: 30px;\\n}\\n\\nmain {\\n    display: grid;\\n    grid-template-rows: 10vh 90vh;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-areas:\\n        'message message'\\n        'board board';\\n}\\n\\n.board {\\n    width: 500px;\\n    height: 500px;\\n    margin: 0 auto;\\n    background-color: white;\\n    border: 1px solid black;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n}\\n\\n.unit {\\n    border: 1px solid grey;\\n    background-color: white;\\n}\\n\\n.active:hover {\\n    cursor: pointer;\\n    box-shadow: inset 0 0 5px black;\\n}\\n\\n.bug {\\n    background-color: lightgreen;\\n}\\n\\n.miss {\\n    background-color: grey;\\n}\\n\\n.hit {\\n    background-color: indianred;\\n}\\n\\n#messages {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    grid-area: message;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Board {\n    constructor() {\n        this.grid = this._initGrid();\n        this.bugs = [];\n    }\n\n    _initGrid() {\n        const grid = [];\n        for (let i = 0; i < 10; i++) {\n            const row = [];\n            for (let j = 0; j < 10; j++) {\n                row.push(null);\n            }\n            grid.push(row);\n        }\n        return grid;\n    }\n\n    placeBug(bug, x, y) {\n        if (\n            x < 0 ||\n            y < 0 ||\n            x >= 10 ||\n            y >= 10 ||\n            (bug.direction === 'horizontal' && x + bug.length >= 10) ||\n            (bug.direction === 'vertical' && y + bug.length >= 10)\n        ) {\n            throw new Error('cannot place bug off the grid');\n        }\n\n        if (bug.direction === 'horizontal') {\n            if (\n                this.grid[y]\n                    .slice(x, x + bug.length)\n                    .some((unit) => unit !== null)\n            ) {\n                throw new Error('there is already another bug here!');\n            }\n            this.grid[y].fill(bug, x, x + bug.length);\n        } else {\n            for (let rowI = y; rowI < y + bug.length; rowI++) {\n                if (this.grid[rowI][x] !== null) {\n                    throw new Error('there is already another bug here!');\n                }\n                this.grid[rowI][x] = bug;\n            }\n        }\n\n        this.bugs.push(bug);\n    }\n\n    placeBugRandomly(bug) {\n        let x = Math.floor(Math.random() * 10);\n        let y = Math.floor(Math.random() * 10);\n\n        // select direction randomly as well\n        let shouldDirectionChange = Math.random() < 0.5;\n        if (shouldDirectionChange) bug.direction = 'vertical';\n\n        try {\n            this.placeBug(bug, x, y);\n        } catch {\n            // catch thrown error and re-run for bug\n            // if there's an error\n            this.placeBugRandomly(bug);\n        }\n    }\n\n    receiveAttack(x, y) {\n        switch (this.grid[y][x]) {\n            case 'miss':\n                console.log(\"you've already swatted here!\");\n                return;\n            case null:\n                console.log('miss!');\n                this.grid[y][x] = 'miss';\n                return [x, y];\n            default:\n                console.log('hit!');\n                return this._hitBug(this.grid[y][x], [x, y]);\n        }\n    }\n\n    _hitBug(bug, [x, y]) {\n        console.log(bug);\n        let hitIndex = 0;\n\n        if (bug.direction === 'horizontal') {\n            // go to the left,\n            // and if bug still there, increase hitIndex++\n            // stop when bug not there.\n            let n = 1;\n            while (this.grid[y][x - n] === bug) {\n                hitIndex++;\n                n++;\n            }\n        } else {\n            // vertical\n            let n = 1;\n            while (this.grid[y - n][x] === bug) {\n                hitIndex++;\n                n++;\n            }\n        }\n\n        bug.hit(hitIndex);\n        return bug;\n    }\n\n    areAllBugsSwatted() {\n        return this.bugs.every((bug) => bug.isSwatted());\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack://battleship/./src/board.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst events = {\n    events: {},\n    on: function (eventName, fn) {\n        this.events[eventName] = this.events[eventName] || [];\n        this.events[eventName].push(fn);\n    },\n    off: function (eventName, fn) {\n        if (this.events[eventName]) {\n            for (let i = 0; i < this.events[eventName].length; i++) {\n                if (this.events[eventName][i] === fn) {\n                    this.events[eventName].splice(i, 1);\n                    break;\n                }\n            }\n        }\n    },\n    emit: function (eventName, data) {\n        console.log(eventName + ' emitted with ' + data);\n        if (this.events[eventName]) {\n            this.events[eventName].forEach((fn) => fn(data));\n        }\n    },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n\n//# sourceURL=webpack://battleship/./src/events.js?");

/***/ }),

/***/ "./src/game-dom.js":
/*!*************************!*\
  !*** ./src/game-dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n/* harmony import */ var _bugs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bugs */ \"./src/bugs.js\");\n\n\n\n\nconst main = document.querySelector('main');\n\nfunction DOMBoard(board) {\n    const containerEl = document.createElement('article');\n\n    const boardEl = document.createElement('div');\n    boardEl.classList.add('board');\n\n    const nameEl = document.createElement('h2');\n    const boardOwnerPlayer = _game__WEBPACK_IMPORTED_MODULE_0__.default.players.find(\n        (player) => player.enemyBoard !== board\n    );\n    nameEl.textContent = `${boardOwnerPlayer.name}'s board`;\n\n    function render() {\n        console.log('====== BOARD RENDER =====');\n        _clearBoard();\n\n        const unitEls = _createUnits();\n        unitEls.forEach((unitEl) => boardEl.appendChild(unitEl));\n\n        containerEl.appendChild(nameEl);\n        containerEl.appendChild(boardEl);\n\n        main.appendChild(containerEl);\n    }\n\n    function _clearBoard() {\n        while (boardEl.firstChild) {\n            boardEl.removeChild(boardEl.firstChild);\n        }\n    }\n\n    function _createUnits() {\n        const unitEls = [];\n\n        board.grid.forEach((row) => {\n            let unitIndex = 0;\n\n            row.forEach((unit) => {\n                const unitEl = _createUnit(unit);\n\n                const x = unitIndex;\n                const y = board.grid.indexOf(row);\n\n                if (\n                    !boardOwnerPlayer.isMyTurn &&\n                    !_game__WEBPACK_IMPORTED_MODULE_0__.default.players.find((player) => player.isMyTurn).isComputer\n                ) {\n                    _addClickEventListener(unitEl, [x, y]);\n                }\n\n                unitEls.push(unitEl);\n\n                unitIndex++;\n            });\n        });\n\n        return unitEls;\n    }\n\n    function _createUnit(unit) {\n        const unitEl = document.createElement('button');\n        unitEl.classList.add('unit');\n\n        _styleUnit(unit, unitEl);\n\n        return unitEl;\n    }\n\n    function _addClickEventListener(unitEl, [x, y]) {\n        unitEl.addEventListener('click', () => _emitAttackInputCoords(x, y));\n    }\n\n    function _styleUnit(unit, unitEl) {\n        if (\n            !boardOwnerPlayer.isMyTurn &&\n            !_game__WEBPACK_IMPORTED_MODULE_0__.default.players.find((player) => player.isMyTurn).isComputer\n        ) {\n            unitEl.classList.add('active');\n        }\n\n        if (unit === 'miss') {\n            unitEl.classList.add('miss');\n        } else if (unit !== null) {\n            unitEl.classList.add('bug');\n            unitEl.textContent = unit.name;\n        }\n    }\n\n    // function _styleAttackedUnit(unitEl) {\n    //     if (unitEl.classList.contains('bug')) {\n    //         unitEl.classList.add('hit');\n    //     } else {\n    //         unitEl.classList.add('miss');\n    //     }\n    // }\n\n    function _emitAttackInputCoords(x, y) {\n        // game object should listen for this event\n        console.log(x, y);\n        _events__WEBPACK_IMPORTED_MODULE_1__.default.emit('unitClicked', [x, y]);\n    }\n\n    _events__WEBPACK_IMPORTED_MODULE_1__.default.on('turnEnded', () => render());\n\n    return { render };\n}\n\nconst displayMessages = (() => {\n    const messages = document.createElement('div');\n    messages.id = 'messages';\n\n    function _updateWhoseTurnText(whoseTurnEl) {\n        const whoseTurn = _game__WEBPACK_IMPORTED_MODULE_0__.default.players.find((player) => player.isMyTurn);\n        whoseTurnEl.textContent = `It is ${whoseTurn.name}'s turn.`;\n    }\n\n    function _renderWhoseTurnText() {\n        const whoseTurnEl = document.createElement('p');\n        _updateWhoseTurnText(whoseTurnEl);\n        messages.appendChild(whoseTurnEl);\n    }\n\n    function _updateActionText(actionEl, result) {\n        // this should listen for an event?\n        if (result) {\n            if (Object.getPrototypeOf(result) === _bugs__WEBPACK_IMPORTED_MODULE_2__.default.prototype) {\n                actionEl.textContent = `Blank's ${result.name} was hit!`;\n            } else {\n                actionEl.textContent = `Miss at ${result}`;\n            }\n        }\n    }\n\n    function _renderActionText(result) {\n        const actionEl = document.createElement('p');\n        _updateActionText(actionEl, result);\n        messages.appendChild(actionEl);\n    }\n\n    function render(result) {\n        _clearMessages();\n        _renderWhoseTurnText();\n        _renderActionText(result);\n        main.appendChild(messages);\n    }\n\n    function _clearMessages() {\n        while (messages.firstChild) {\n            messages.removeChild(messages.firstChild);\n        }\n    }\n\n    _events__WEBPACK_IMPORTED_MODULE_1__.default.on('turnEnded', (result) => render(result));\n\n    return { render };\n})();\n\ndisplayMessages.render();\n\n_game__WEBPACK_IMPORTED_MODULE_0__.default.boards.forEach((board) => {\n    const thisDOMBoard = new DOMBoard(board);\n    thisDOMBoard.render();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n//# sourceURL=webpack://battleship/./src/game-dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _bugs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bugs */ \"./src/bugs.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\n\n\n\nconst game = (() => {\n    // Setup.\n    const board1 = new _board__WEBPACK_IMPORTED_MODULE_1__.default();\n    const board2 = new _board__WEBPACK_IMPORTED_MODULE_1__.default();\n\n    const player1 = new _player__WEBPACK_IMPORTED_MODULE_0__.default('Sarah', board2);\n    const player2 = new _player__WEBPACK_IMPORTED_MODULE_0__.default('Computer', board1);\n\n    // Player 1 goes first.\n    player1.switchTurn();\n\n    const bugCollection = [\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(5, 'Worm'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(4, 'Caterpillar'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Ant'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Spider'),\n        new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(2, 'Ladybug'),\n    ];\n\n    bugCollection.forEach((bug) => {\n        board1.placeBugRandomly(bug);\n        board2.placeBugRandomly(bug);\n    });\n\n    // listen for events.\n    _events__WEBPACK_IMPORTED_MODULE_3__.default.on('unitClicked', ([x, y]) => {\n        let result;\n\n        if (player1.isMyTurn) {\n            result = player1.attack(x, y);\n        } else {\n            result = player2.attack(x, y);\n        }\n        // get returned value?\n        endTurn(result);\n    });\n\n    function endTurn(result) {\n        player1.switchTurn();\n        player2.switchTurn();\n        _events__WEBPACK_IMPORTED_MODULE_3__.default.emit('turnEnded', result);\n    }\n\n    _events__WEBPACK_IMPORTED_MODULE_3__.default.on('turnEnded', computerTriesToTakeTurn);\n\n    function computerTriesToTakeTurn() {\n        if (player2.isMyTurn) {\n            player2.attack();\n            endTurn();\n        }\n    }\n\n    return { boards: [board1, board2], players: [player1, player2] };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _game_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-dom */ \"./src/game-dom.js\");\n\n\n\nconsole.log('hello world!');\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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