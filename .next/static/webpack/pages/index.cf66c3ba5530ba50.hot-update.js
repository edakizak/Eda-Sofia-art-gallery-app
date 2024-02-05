/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/spotlight/index.js":
/*!***************************************!*\
  !*** ./components/spotlight/index.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _components_art_pieces_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/art_pieces/index.js */ \"./components/art_pieces/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_spotlight_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/spotlight/index.js */ \"./components/spotlight/index.js\");\n/* harmony import */ var _components_spotlight_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_spotlight_index_js__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst url = \"https://example-apis.vercel.app/api/art\";\nfunction HomePage() {\n    _s();\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url);\n    console.log(data);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 25\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Error!\"\n    }, void 0, false, {\n        fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/index.js\",\n        lineNumber: 11,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_spotlight_index_js__WEBPACK_IMPORTED_MODULE_4___default()), {\n                image: image,\n                artist: artist\n            }, void 0, false, {\n                fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_art_pieces_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                pieces: data\n            }, void 0, false, {\n                fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/artpieces\",\n                children: \" Art Pieces\"\n            }, void 0, false, {\n                fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/edakizak/Desktop/spiced-bootcamp/Eda-Sofia-art-gallery-app/pages/index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"3etLDUffADz62tD7g9gJKxYxEy4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNpQztBQUM3QjtBQUMyQjtBQUV4RCxNQUFNSSxNQUFNO0FBQ0csU0FBU0M7O0lBQ3RCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHUiwrQ0FBTUEsQ0FBQ0k7SUFDMUNLLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWixJQUFJRSxXQUFXLHFCQUFPLDhEQUFDRztrQkFBRzs7Ozs7O0lBQzFCLElBQUlKLE9BQU8scUJBQU8sOERBQUNJO2tCQUFHOzs7Ozs7SUFDdEIscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ1QsdUVBQVNBO2dCQUFDVSxPQUFPQTtnQkFBT0MsUUFBUUE7Ozs7OzswQkFDakMsOERBQUNiLHVFQUFTQTtnQkFBQ2MsUUFBUVQ7Ozs7OzswQkFDbkIsOERBQUNKLGtEQUFJQTtnQkFBQ2MsTUFBSzswQkFBYTs7Ozs7Ozs7Ozs7O0FBRzlCO0dBWndCWDs7UUFDYUwsMkNBQU1BOzs7S0FEbkJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgQXJ0UGllY2VzIGZyb20gXCIuLi9jb21wb25lbnRzL2FydF9waWVjZXMvaW5kZXguanNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTcG90bGlnaHQgZnJvbSBcIkAvY29tcG9uZW50cy9zcG90bGlnaHQvaW5kZXguanNcIjtcblxuY29uc3QgdXJsID0gXCJodHRwczovL2V4YW1wbGUtYXBpcy52ZXJjZWwuYXBwL2FwaS9hcnRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUih1cmwpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxoMT5FcnJvciE8L2gxPjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNwb3RsaWdodCBpbWFnZT17aW1hZ2V9IGFydGlzdD17YXJ0aXN0fSAvPlxuICAgICAgPEFydFBpZWNlcyBwaWVjZXM9e2RhdGF9IC8+XG4gICAgICA8TGluayBocmVmPVwiL2FydHBpZWNlc1wiPiBBcnQgUGllY2VzPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIkFydFBpZWNlcyIsIkxpbmsiLCJTcG90bGlnaHQiLCJ1cmwiLCJIb21lUGFnZSIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJoMSIsImRpdiIsImltYWdlIiwiYXJ0aXN0IiwicGllY2VzIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});