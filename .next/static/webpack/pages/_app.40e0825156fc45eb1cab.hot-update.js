webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_projetosEstudo_nftcalendar_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_PageContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageContainer */ "./src/components/PageContainer/index.tsx");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loading */ "./src/components/Loading/index.tsx");
/* harmony import */ var _contexts_LoginContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/LoginContext */ "./src/contexts/LoginContext.tsx");
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/reset.scss */ "./src/styles/reset.scss");
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "C:\\projetosEstudo\\nftcalendar\\src\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_projetosEstudo_nftcalendar_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLoading = _useState[0],
      setIsLoading = _useState[1]; //Binding events.


  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on("routeChangeStart", function () {
    setIsLoading(true);
    nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
  });
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on("routeChangeComplete", function () {
    setIsLoading(false);
    nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
  });
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on("routeChangeError", function () {
    setIsLoading(false);
    nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_contexts_LoginContext__WEBPACK_IMPORTED_MODULE_8__["LoginContextProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_PageContainer__WEBPACK_IMPORTED_MODULE_6__["PageContainer"], {
      children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Loading__WEBPACK_IMPORTED_MODULE_7__["Loading"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 10
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, this);
}

_s(MyApp, "EmvgwIb3cHpoFpeP+WmEDbjx4y4=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIk5Qcm9ncmVzcyIsInN0YXJ0IiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLEtBQUQsQ0FERjtBQUFBLE1BQ2pDQyxTQURpQztBQUFBLE1BQ3RCQyxZQURzQixpQkFHeEM7OztBQUNBQyxvREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDLFlBQU07QUFDMUNILGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FJLG9EQUFTLENBQUNDLEtBQVY7QUFDQSxHQUhEO0FBS0FKLG9EQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsWUFBTTtBQUM3Q0gsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUksb0RBQVMsQ0FBQ0UsSUFBVjtBQUNBLEdBSEQ7QUFLQUwsb0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxZQUFNO0FBQzFDSCxnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBSSxvREFBUyxDQUFDRSxJQUFWO0FBQ0EsR0FIRDtBQUtBLHNCQUNDLHFFQUFDLDJFQUFEO0FBQUEsMkJBQ0cscUVBQUMsdUVBQUQ7QUFBQSxnQkFDR1AsU0FBUyxnQkFDVCxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFMsZ0JBR1IscUVBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVdBOztHQTlCUUYsSzs7S0FBQUEsSztBQWdDTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MGUwODI1MTU2ZmM0NWViMWNhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgXCJucHJvZ3Jlc3MvbnByb2dyZXNzLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZUNvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VDb250YWluZXJcIjtcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcclxuXHJcbmltcG9ydCB7IExvZ2luQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL0xvZ2luQ29udGV4dFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGVzL3Jlc2V0LnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5zY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHRjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHQvL0JpbmRpbmcgZXZlbnRzLlxyXG5cdFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsICgpID0+IHtcclxuXHRcdHNldElzTG9hZGluZyh0cnVlKTtcclxuXHRcdE5Qcm9ncmVzcy5zdGFydCgpO1xyXG5cdH0pO1xyXG5cclxuXHRSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiB7XHJcblx0XHRzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG5cdFx0TlByb2dyZXNzLmRvbmUoKTtcclxuXHR9KTtcclxuXHJcblx0Um91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgKCkgPT4ge1xyXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHRcdE5Qcm9ncmVzcy5kb25lKCk7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TG9naW5Db250ZXh0UHJvdmlkZXI+XHJcblx0XHRcdFx0XHQ8UGFnZUNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0XHR7aXNMb2FkaW5nID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PExvYWRpbmcgLz5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvUGFnZUNvbnRhaW5lcj5cclxuXHRcdDwvTG9naW5Db250ZXh0UHJvdmlkZXI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=