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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    background-color: rgb(217, 231, 216);\\n    text-align: center;\\n    font-family: sans-serif;\\n}\\n\\nh1 {\\n    margin-top: 30px;\\n}\\n\\nmain {\\n    display: grid;\\n    grid-template-rows: 10vh 90vh;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-areas:\\n        'message message'\\n        'board board';\\n}\\n\\n#setup {\\n    grid-area: board;\\n    background-color: white;\\n    height: 40vh;\\n    width: 50vw;\\n    margin: 0 auto;\\n    display: grid;\\n}\\n\\n#setup h3 {\\n    align-self: center;\\n}\\n\\n.player-info {\\n    display: grid;\\n}\\n\\n.player-name {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n}\\n\\n.board {\\n    width: 500px;\\n    height: 500px;\\n    margin: 0 auto;\\n    background-color: white;\\n    border: 1px solid black;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-template-rows: repeat(10, 1fr);\\n}\\n\\n.unit {\\n    border: 1px solid grey;\\n    background-color: white;\\n    width: 50px;\\n}\\n\\n.active.board {\\n    box-shadow: lightskyblue 0 0 10px 10px;\\n}\\n\\n.active .unit:hover {\\n    cursor: pointer;\\n    box-shadow: inset 0 0 5px black;\\n}\\n\\n.bug {\\n    background-color: lightgreen;\\n}\\n\\n.miss {\\n    background-color: grey;\\n}\\n\\n.hit {\\n    background-color: indianred;\\n}\\n\\n.swatted {\\n    opacity: 0.5;\\n}\\n\\n#messages {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    grid-area: message;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Board {\n    constructor() {\n        this.grid = this._initGrid();\n        this.bugs = [];\n    }\n\n    _initGrid() {\n        const grid = [];\n        for (let i = 0; i < 10; i++) {\n            const row = [];\n            for (let j = 0; j < 10; j++) {\n                row.push(null);\n            }\n            grid.push(row);\n        }\n        return grid;\n    }\n\n    placeBug(bug, x, y) {\n        if (\n            x < 0 ||\n            y < 0 ||\n            x >= 10 ||\n            y >= 10 ||\n            (bug.direction === 'horizontal' && x + bug.length >= 10) ||\n            (bug.direction === 'vertical' && y + bug.length >= 10)\n        ) {\n            throw new Error('cannot place bug off the grid');\n        }\n\n        if (bug.direction === 'horizontal') {\n            if (\n                this.grid[y]\n                    .slice(x, x + bug.length)\n                    .some((unit) => unit !== null)\n            ) {\n                throw new Error('there is already another bug here!');\n            }\n            for (let bugIndex = 0; bugIndex < bug.length; bugIndex++) {\n                this.grid[y][x + bugIndex] = [bug, bugIndex];\n            }\n        } else {\n            let bugIndex = 0;\n            // first check if there are any other bugs here.\n            for (let rowI = y; rowI < y + bug.length; rowI++) {\n                if (this.grid[rowI][x] !== null) {\n                    throw new Error('there is already another bug here!');\n                }\n            }\n            // place the bug if there were no errors.\n            for (let rowI = y; rowI < y + bug.length; rowI++) {\n                this.grid[rowI][x] = [bug, bugIndex];\n                bugIndex++;\n            }\n        }\n\n        this.bugs.push(bug);\n    }\n\n    placeBugRandomly(bug) {\n        let x = Math.floor(Math.random() * 10);\n        let y = Math.floor(Math.random() * 10);\n\n        // select direction randomly as well\n        let shouldDirectionChange = Math.random() < 0.5;\n        if (shouldDirectionChange) bug.direction = 'vertical';\n\n        try {\n            this.placeBug(bug, x, y);\n        } catch {\n            // catch thrown error and re-run for bug\n            // if there's an error\n            this.placeBugRandomly(bug);\n        }\n    }\n\n    receiveAttack(x, y) {\n        switch (this.grid[y][x]) {\n            case 'miss':\n                console.log(\"you've already swatted here!\");\n                throw new Error('this unit has already been attacked!');\n            case null:\n                console.log(`Missed at ${x}, ${y}!`);\n                this.grid[y][x] = 'miss';\n                return ['miss', [x, y]];\n            default:\n                console.log(`Hit ${this.grid[y][x][0].name} at ${x}, ${y}`);\n                return this._hitBug(this.grid[y][x], [x, y]);\n        }\n    }\n\n    _hitBug([bug, bugIndex], [x, y]) {\n        bug.hit(bugIndex);\n        return [bug, [x, y]];\n    }\n\n    areAllBugsSwatted() {\n        return this.bugs.every((bug) => bug.isSwatted());\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack://battleship/./src/board.js?");

/***/ }),

/***/ "./src/bugs.js":
/*!*********************!*\
  !*** ./src/bugs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Bug {\n    constructor(length, name, direction = 'horizontal') {\n        this.length = length;\n        this.name = name;\n        this.direction = direction;\n        this.units = this._initUnits();\n    }\n\n    _initUnits() {\n        const units = [];\n        for (let i = 0; i < this.length; i++) {\n            // 'safe' indicates a non-hit unit.\n            units.push('safe');\n        }\n        return units;\n    }\n\n    hit(index) {\n        if (index >= this.length || index < 0) {\n            throw new Error('invalid target index');\n        } else if (this.units[index] === 'hit') {\n            throw new Error('already hit this index');\n        }\n        const newUnits = [...this.units];\n        newUnits.splice(index, 1, 'hit');\n        this.units = newUnits;\n    }\n\n    isSwatted() {\n        if (this.units.includes('safe')) {\n            // If not all units are hit, bug is not swatted.\n            return false;\n        } else {\n            return true;\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bug);\n\n\n//# sourceURL=webpack://battleship/./src/bugs.js?");

/***/ }),

/***/ "./src/game-dom.js":
/*!*************************!*\
  !*** ./src/game-dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoardDisplay\": () => (/* binding */ BoardDisplay),\n/* harmony export */   \"messageDisplays\": () => (/* binding */ messageDisplays)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst main = document.querySelector('main');\n\nconst setup = (() => {\n    const containerEl = document.createElement('article');\n    containerEl.id = 'setup';\n\n    const setupTitle = document.createElement('h3');\n    setupTitle.textContent = 'Setup';\n    containerEl.appendChild(setupTitle);\n\n    class PlayerInfo {\n        constructor(playerN) {\n            this.playerN = playerN;\n            this.containerEl = document.createElement('section');\n            this.containerEl.classList.add('player-info');\n            this.playerName = new PlayerName(playerN, 'name');\n            this.playerIsComputer = new PlayerIsComputer(\n                playerN,\n                'is-computer'\n            );\n        }\n\n        render() {\n            this.playerName.create();\n            this.containerEl.appendChild(this.playerName.containerEl);\n\n            this.playerIsComputer.create(this.playerName.inputEl);\n            this.containerEl.appendChild(this.playerIsComputer.containerEl);\n\n            containerEl.appendChild(this.containerEl);\n        }\n    }\n\n    class PlayerInfoAttribute {\n        constructor(playerN, attribute) {\n            this.playerN = playerN;\n            this.attribute = attribute;\n\n            this.containerEl = document.createElement('div');\n            this.containerEl.classList.add(`player-${this.attribute}`);\n\n            this.labelEl = document.createElement('label');\n            this.labelEl.setAttribute(\n                'for',\n                `player${playerN}-${this.attribute}`\n            );\n\n            this.inputEl = document.createElement('input');\n            this.inputEl.id = `player${playerN}-${this.attribute}`;\n            this.inputEl.setAttribute(\n                'name',\n                `player${playerN}-${this.attribute}`\n            );\n        }\n    }\n\n    class PlayerName extends PlayerInfoAttribute {\n        constructor(playerN, attribute) {\n            super(playerN, attribute);\n            this.labelEl.textContent = `What is Player ${playerN}'s name?`;\n        }\n\n        create() {\n            this.containerEl.appendChild(this.labelEl);\n            this.containerEl.appendChild(this.inputEl);\n        }\n    }\n\n    class PlayerIsComputer extends PlayerInfoAttribute {\n        constructor(playerN, attribute) {\n            super(playerN, attribute);\n            this.labelEl.textContent = `Is Player ${playerN} a computer?`;\n        }\n\n        create(playerNameInput) {\n            this.containerEl.appendChild(this.labelEl);\n\n            this.inputEl.type = 'checkbox';\n            this.inputEl.addEventListener('change', () =>\n                this.onIsComputerClick(playerNameInput)\n            );\n\n            if (this.playerN === 2) {\n                this.makePlayerAComputer(playerNameInput);\n            }\n\n            this.containerEl.appendChild(this.inputEl);\n        }\n\n        onIsComputerClick(nameInput) {\n            if (this.inputEl.checked) {\n                this.makePlayerAComputer(nameInput);\n            } else {\n                this.makePlayerNotAComputer(nameInput);\n            }\n        }\n\n        makePlayerAComputer(nameInput) {\n            this.inputEl.checked = true;\n            nameInput.value = 'Computer';\n            nameInput.disabled = true;\n        }\n\n        makePlayerNotAComputer(nameInput) {\n            this.inputEl.checked = false;\n            nameInput.value = '';\n            nameInput.disabled = false;\n        }\n    }\n\n    const playersNameInfo = {};\n\n    for (let playerN = 1; playerN < 3; playerN++) {\n        const playerInfo = new PlayerInfo(playerN);\n        playersNameInfo[playerN] = playerInfo.playerName;\n        playerInfo.render();\n    }\n\n    const playBtn = document.createElement('button');\n    playBtn.textContent = 'Play';\n    playBtn.addEventListener('click', onPlayBtnClick);\n    containerEl.appendChild(playBtn);\n\n    // on click submit button\n    function onPlayBtnClick() {\n        // get name inputs\n        const playerNames = {\n            1: playersNameInfo['1'].inputEl.value,\n            2: playersNameInfo['2'].inputEl.value,\n        };\n\n        // if none, default to \"Player N\"\n        for (let player in playerNames) {\n            if (playerNames[player] === '') {\n                playerNames[player] = `Player ${player}`;\n            }\n        }\n\n        // remove setup elements\n        removeSetup();\n\n        // play game function\n        _game__WEBPACK_IMPORTED_MODULE_0__.default.setup(playerNames);\n        // this should render the boards\n    }\n\n    function render() {\n        main.appendChild(containerEl);\n    }\n\n    function removeSetup() {\n        main.removeChild(containerEl);\n    }\n\n    return { render };\n})();\n\nsetup.render();\n\nclass BoardDisplay {\n    constructor(board, boardOwnerPlayer) {\n        this.board = board;\n        this.boardOwnerPlayer = boardOwnerPlayer;\n        this.containerEl = document.createElement('article');\n        this.nameEl = document.createElement('h2');\n        this.boardEl = document.createElement('div');\n        this.boardEl.classList.add('board');\n    }\n\n    render() {\n        this._clearBoard();\n        if (this._shouldThisBoardBeActive()) {\n            this.boardEl.classList.add('active');\n        } else {\n            this.boardEl.classList.remove('active');\n        }\n\n        // add name element\n        this.nameEl.textContent = `${this.boardOwnerPlayer.name}'s board`;\n        this.containerEl.appendChild(this.nameEl);\n\n        // add units to board\n        const unitEls = this._createUnits();\n        unitEls.forEach((unitEl) => this.boardEl.appendChild(unitEl));\n\n        // add board element\n        this.containerEl.appendChild(this.boardEl);\n\n        // add container\n        main.appendChild(this.containerEl);\n    }\n\n    _clearBoard() {\n        while (this.boardEl.firstChild) {\n            this.boardEl.removeChild(this.boardEl.firstChild);\n        }\n    }\n\n    _createUnits() {\n        const unitEls = [];\n\n        this.board.grid.forEach((row) => {\n            let unitIndex = 0;\n\n            row.forEach((unit) => {\n                const unitEl = this._createUnit(unit);\n\n                const x = unitIndex;\n                const y = this.board.grid.indexOf(row);\n\n                if (this._shouldThisBoardBeClickable()) {\n                    this._addClickEventListener(unitEl, [x, y]);\n                }\n\n                unitEls.push(unitEl);\n\n                unitIndex++;\n            });\n        });\n\n        return unitEls;\n    }\n\n    _createUnit(unit) {\n        const unitEl = document.createElement('button');\n        unitEl.classList.add('unit');\n\n        this._styleUnit(unit, unitEl);\n\n        return unitEl;\n    }\n\n    _styleUnit(unit, unitEl) {\n        if (unit === 'miss') {\n            unitEl.classList.add('miss');\n        } else if (unit !== null) {\n            unitEl.classList.add('bug');\n            const bug = unit[0];\n            // if this unit was hit, add styles\n            if (bug.units[unit[1]] === 'hit') unitEl.classList.add('hit');\n            // if this bug was swatted, add styles\n            if (bug.isSwatted()) unitEl.classList.add('swatted');\n            // temporarily add name until bug assets are added\n            unitEl.textContent = bug.name;\n        }\n    }\n\n    _shouldThisBoardBeActive() {\n        return !this.boardOwnerPlayer.isMyTurn;\n    }\n\n    _shouldThisBoardBeClickable() {\n        return (\n            !this.boardOwnerPlayer.isMyTurn &&\n            !_game__WEBPACK_IMPORTED_MODULE_0__.default.players.find((player) => player.isMyTurn).isComputer\n        );\n    }\n\n    _addClickEventListener(unitEl, [x, y]) {\n        unitEl.addEventListener('click', () => _game__WEBPACK_IMPORTED_MODULE_0__.default.playTurn(x, y));\n    }\n\n    disable() {\n        // styles - opacity lower\n        this.boardEl.style.opacity = '0.5';\n        // remove active class\n        this.boardEl.classList.remove('active');\n        // disable unit buttons\n        this.boardEl.childNodes.forEach((unit) => (unit.disabled = true));\n    }\n}\n\nclass MessageDisplay {\n    constructor() {\n        this.messageEl = document.createElement('p');\n    }\n}\n\nconst messageDisplays = {\n    previousAction: new MessageDisplay(),\n    wasABugSwatted: new MessageDisplay(),\n    whoseTurn: new MessageDisplay(),\n};\n\nmessageDisplays.previousAction.render = (turnData) => {\n    let message;\n    if (turnData.missOrBug === 'miss') {\n        message = `${turnData.whoDidAction.name} missed at ${turnData.coords}`;\n    } else {\n        message = `${turnData.whoDidAction.name} hit ${turnData.whoReceivedAction.name}'s ${turnData.missOrBug.name} at ${turnData.coords}!`;\n    }\n\n    messageDisplays.previousAction.messageEl.textContent = message;\n};\n\nmessageDisplays.wasABugSwatted.render = (turnData) => {\n    let message;\n    if (turnData.wasABugSwatted) {\n        message = `${turnData.whoReceivedAction.name}'s ${turnData.missOrBug.name} has been swatted!`;\n    } else {\n        message = '';\n    }\n\n    messageDisplays.wasABugSwatted.messageEl.textContent = message;\n};\n\nconst playAgainBtn = document.createElement('button');\nplayAgainBtn.textContent = 'Play Again';\n//TODO: setup --- playAgainBtn.addEventListener('click', )\n\nmessageDisplays.whoseTurn.render = (turnData) => {\n    if (!turnData.shouldGameEnd) {\n        messageDisplays.whoseTurn.messageEl.textContent = `It is ${turnData.whoReceivedAction.name}'s turn`;\n    } else {\n        messageDisplays.whoseTurn.messageEl.textContent = `Game over! ${turnData.whoDidAction.name} wins!`;\n        messageDisplays.whoseTurn.messageEl.appendChild(playAgainBtn);\n    }\n};\n\nconst messagesContainer = document.createElement('div');\nmessagesContainer.id = 'messages';\nmessagesContainer.appendChild(messageDisplays.previousAction.messageEl);\nmessagesContainer.appendChild(messageDisplays.wasABugSwatted.messageEl);\nmessagesContainer.appendChild(messageDisplays.whoseTurn.messageEl);\nmain.appendChild(messagesContainer);\n\n\n\n\n//# sourceURL=webpack://battleship/./src/game-dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _bugs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bugs */ \"./src/bugs.js\");\n/* harmony import */ var _game_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-dom */ \"./src/game-dom.js\");\n\n\n\n\n\nconst game = (() => {\n    console.log('playing game!');\n\n    const boards = [];\n    const players = [];\n    const boardDisplays = [];\n\n    // Setup.\n    function setup(playerNames) {\n        const board1 = new _board__WEBPACK_IMPORTED_MODULE_1__.default();\n        const board2 = new _board__WEBPACK_IMPORTED_MODULE_1__.default();\n        boards.push(board1, board2);\n\n        const player1 = new _player__WEBPACK_IMPORTED_MODULE_0__.default(playerNames['1'], board2);\n        const player2 = new _player__WEBPACK_IMPORTED_MODULE_0__.default(playerNames['2'], board1);\n        players.push(player1, player2);\n\n        // Player 1 goes first.\n        player1.switchTurn();\n\n        const bugCollection1 = [\n            new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(5, 'Worm'),\n            new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(4, 'Caterpillar'),\n            new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Ant'),\n            new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Spider'),\n            new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(2, 'Ladybug'),\n        ];\n\n        const bugCollection2 = [\n            new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(5, 'Worm'),\n            new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(4, 'Caterpillar'),\n            new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Ant'),\n            new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(3, 'Spider'),\n            new _bugs__WEBPACK_IMPORTED_MODULE_2__.default(2, 'Ladybug'),\n        ];\n\n        bugCollection1.forEach((bug) => {\n            board1.placeBugRandomly(bug);\n        });\n\n        bugCollection2.forEach((bug) => {\n            board2.placeBugRandomly(bug);\n        });\n\n        boards.forEach((board) => {\n            const boardDisplay = new _game_dom__WEBPACK_IMPORTED_MODULE_3__.BoardDisplay(\n                board,\n                players.find((player) => player.enemyBoard !== board)\n            );\n            boardDisplays.push(boardDisplay);\n            boardDisplay.render();\n        });\n    }\n\n    function playTurn(xInput, yInput) {\n        const whoseTurn = players.find((player) => player.isMyTurn);\n        console.log(`======= ${whoseTurn.name} attacks! ========`);\n\n        // If whoseTurn is computer, there will be no player input and\n        // attack will be random coordinates\n        let result;\n        try {\n            result = whoseTurn.attack(xInput, yInput);\n        } catch {\n            // If computer throws an error, run the function again\n            console.log(\"you've already attacked here!\");\n            if (whoseTurn.isComputer) playTurn();\n            return;\n        }\n\n        const wasABugSwatted = result[0] !== 'miss' && result[0].isSwatted();\n        console.log('swatted? ' + wasABugSwatted);\n\n        let shouldGameEnd;\n        if (wasABugSwatted) {\n            shouldGameEnd = checkIfGameShouldEnd(whoseTurn.enemyBoard);\n        }\n\n        for (let message in _game_dom__WEBPACK_IMPORTED_MODULE_3__.messageDisplays) {\n            _game_dom__WEBPACK_IMPORTED_MODULE_3__.messageDisplays[message].render({\n                missOrBug: result[0],\n                coords: result[1],\n                whoDidAction: whoseTurn,\n                whoReceivedAction: players.find((player) => !player.isMyTurn),\n                wasABugSwatted,\n                shouldGameEnd,\n            });\n        }\n\n        if (shouldGameEnd) {\n            endGame();\n        } else {\n            endTurn();\n        }\n    }\n\n    function checkIfGameShouldEnd(boardBeingAttacked) {\n        // check if all bugs are swatted\n        if (boardBeingAttacked.areAllBugsSwatted()) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    function endTurn() {\n        players.forEach((player) => player.switchTurn());\n\n        const whoseTurnNext = players.find((player) => player.isMyTurn);\n\n        boardDisplays.forEach((boardDisplay) => boardDisplay.render());\n\n        // If it's computer's turn now, it should play without any input\n        if (whoseTurnNext.isComputer) {\n            setTimeout(playTurn, 2000);\n        }\n    }\n\n    function endGame() {\n        // make sure board renders hit unit\n        boardDisplays.forEach((boardDisplay) => boardDisplay.render());\n        boardDisplays.forEach((boardDisplay) => boardDisplay.disable());\n    }\n\n    return { boards, players, setup, playTurn };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n\n//# sourceURL=webpack://battleship/./src/game.js?");

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