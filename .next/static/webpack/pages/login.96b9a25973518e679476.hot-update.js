webpackHotUpdate_N_E("pages/login",{

/***/ "./src/pages/login/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var C_projetosEstudo_nftcalendar_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projetosEstudo_nftcalendar_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_projetosEstudo_nftcalendar_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_projetosEstudo_nftcalendar_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cogo-toast */ "./node_modules/cogo-toast/dist/index.es.js");
/* harmony import */ var _contexts_LoginContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/LoginContext */ "./src/contexts/LoginContext.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/login/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\projetosEstudo\\nftcalendar\\src\\pages\\login\\index.tsx",
    _s = $RefreshSig$();







function Login() {
  _s();

  var _useLogin = Object(_contexts_LoginContext__WEBPACK_IMPORTED_MODULE_7__["useLogin"])(),
      login = _useLogin.login;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isPasswordVisible = _useState[0],
      setIsPasswordVisible = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var loginInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var passwordInput = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    loginInput.current.focus();
  }, []);

  function handleFormSubmit(_x) {
    return _handleFormSubmit.apply(this, arguments);
  }

  function _handleFormSubmit() {
    _handleFormSubmit = Object(C_projetosEstudo_nftcalendar_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_projetosEstudo_nftcalendar_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var user, users;
      return C_projetosEstudo_nftcalendar_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              user = {
                login: loginInput.current.value,
                password: passwordInput.current.value
              }; // const config = {
              // 	headers: {
              // 		login: user.login,
              // 		password: user.password,
              // 	},
              // };

              users = ["ricardo", "samuel"];
              console.log(user);

              if (users.includes(user.login, 0) && user.password === "bundinha123") {
                localStorage.setItem("@nftcalendar/userLogin", user.login);
                login(user.login);
                router.push("/home");
              } else {
                cogo_toast__WEBPACK_IMPORTED_MODULE_6__["default"].error("Usuário ou senha inválidos");
              } // try {
              // 	const baseUrl = `http://${window.location.hostname}:5100/`;
              // 	const apiLocal = axios.create({
              // 		baseURL: baseUrl,
              // 	});
              // 	const { status, data } = await apiLocal.get("authenticate", config);
              // 	if (status === 200) {
              // 		localStorage.setItem("@nftcalendar/token", data.stoken);
              // 		localStorage.setItem("@nftcalendar/userId", data.user.idUsuario);
              // 		localStorage.setItem("@nftcalendar/userName", data.user.sLogin);
              // 		login(data.user.idUsuario, data.user.sLogin);
              // 		router.push("/apes-local/home");
              // 	}
              // } catch (error) {
              // 	cogoToast.error("Usuário ou senha inválidos");
              // }


            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleFormSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.loginContainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: handleFormSubmit,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("strong", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title,
          children: "NFT CALENDAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.inputContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            id: "login",
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.login,
            ref: loginInput,
            required: true,
            autoComplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "login",
            children: "Usu\xE1rio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.inputContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: isPasswordVisible ? "text" : "password",
            id: "password",
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.password,
            autoComplete: "off",
            ref: passwordInput,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Senha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 7
          }, this), isPasswordVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoEyeOff"], {
            onClick: function onClick() {
              return setIsPasswordVisible(false);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 8
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoEye"], {
            onClick: function onClick() {
              return setIsPasswordVisible(true);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 3
  }, this);
}

_s(Login, "I4CgQws4J5iZxL106aYiB1lFeeg=", false, function () {
  return [_contexts_LoginContext__WEBPACK_IMPORTED_MODULE_7__["useLogin"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZUxvZ2luIiwibG9naW4iLCJ1c2VTdGF0ZSIsImlzUGFzc3dvcmRWaXNpYmxlIiwic2V0SXNQYXNzd29yZFZpc2libGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpbklucHV0IiwidXNlUmVmIiwicGFzc3dvcmRJbnB1dCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZUZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInZhbHVlIiwicGFzc3dvcmQiLCJ1c2VycyIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiY29nb1RvYXN0IiwiZXJyb3IiLCJzdHlsZXMiLCJsb2dpbkNvbnRhaW5lciIsInRpdGxlIiwiaW5wdXRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDYkMsdUVBQVEsRUFESztBQUFBLE1BQ3ZCQyxLQUR1QixhQUN2QkEsS0FEdUI7O0FBQUEsa0JBRW1CQyxzREFBUSxDQUFDLEtBQUQsQ0FGM0I7QUFBQSxNQUV4QkMsaUJBRndCO0FBQUEsTUFFTEMsb0JBRks7O0FBRy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF6QjtBQUNBLE1BQU1DLGFBQWEsR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQTVCO0FBRUFFLHlEQUFTLENBQUMsWUFBTTtBQUNmSCxjQUFVLENBQUNJLE9BQVgsQ0FBbUJDLEtBQW5CO0FBQ0EsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFQK0Is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QWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpELGVBNEJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF1Q0E7O0dBbEd1QkwsSztVQUNMQywrRCxFQUVITSxxRDs7O0tBSFFQLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uOTZiOWEyNTk3MzUxOGU2Nzk0NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgSW9FeWUsIElvRXllT2ZmIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuaW1wb3J0IGNvZ29Ub2FzdCBmcm9tIFwiY29nby10b2FzdFwiO1xuXG5pbXBvcnQgeyB1c2VMb2dpbiB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9Mb2dpbkNvbnRleHRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG5cdGNvbnN0IHsgbG9naW4gfSA9IHVzZUxvZ2luKCk7XG5cdGNvbnN0IFtpc1Bhc3N3b3JkVmlzaWJsZSwgc2V0SXNQYXNzd29yZFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgbG9naW5JbnB1dCA9IHVzZVJlZihudWxsKTtcblx0Y29uc3QgcGFzc3dvcmRJbnB1dCA9IHVzZVJlZihudWxsKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGxvZ2luSW5wdXQuY3VycmVudC5mb2N1cygpO1xuXHR9LCBbXSk7XG5cblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudDogUmVhY3QuRm9ybUV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IHVzZXIgPSB7XG5cdFx0XHRsb2dpbjogbG9naW5JbnB1dC5jdXJyZW50LnZhbHVlLFxuXHRcdFx0cGFzc3dvcmQ6IHBhc3N3b3JkSW5wdXQuY3VycmVudC52YWx1ZSxcblx0XHR9O1xuXG5cdFx0Ly8gY29uc3QgY29uZmlnID0ge1xuXHRcdC8vIFx0aGVhZGVyczoge1xuXHRcdC8vIFx0XHRsb2dpbjogdXNlci5sb2dpbixcblx0XHQvLyBcdFx0cGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIH07XG5cblx0XHRjb25zdCB1c2VycyA9IFtcInJpY2FyZG9cIiwgXCJzYW11ZWxcIl07XG5cblx0XHRjb25zb2xlLmxvZyh1c2VyKTtcblxuXHRcdGlmICh1c2Vycy5pbmNsdWRlcyh1c2VyLmxvZ2luLCAwKSAmJiB1c2VyLnBhc3N3b3JkID09PSBcImJ1bmRpbmhhMTIzXCIpIHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQG5mdGNhbGVuZGFyL3VzZXJMb2dpblwiLCB1c2VyLmxvZ2luKTtcblx0XHRcdGxvZ2luKHVzZXIubG9naW4pO1xuXHRcdFx0cm91dGVyLnB1c2goXCIvaG9tZVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29nb1RvYXN0LmVycm9yKFwiVXN1w6FyaW8gb3Ugc2VuaGEgaW52w6FsaWRvc1wiKTtcblx0XHR9XG5cblx0XHQvLyB0cnkge1xuXHRcdC8vIFx0Y29uc3QgYmFzZVVybCA9IGBodHRwOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9OjUxMDAvYDtcblxuXHRcdC8vIFx0Y29uc3QgYXBpTG9jYWwgPSBheGlvcy5jcmVhdGUoe1xuXHRcdC8vIFx0XHRiYXNlVVJMOiBiYXNlVXJsLFxuXHRcdC8vIFx0fSk7XG5cblx0XHQvLyBcdGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSBhd2FpdCBhcGlMb2NhbC5nZXQoXCJhdXRoZW50aWNhdGVcIiwgY29uZmlnKTtcblxuXHRcdC8vIFx0aWYgKHN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0Ly8gXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQG5mdGNhbGVuZGFyL3Rva2VuXCIsIGRhdGEuc3Rva2VuKTtcblx0XHQvLyBcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJAbmZ0Y2FsZW5kYXIvdXNlcklkXCIsIGRhdGEudXNlci5pZFVzdWFyaW8pO1xuXHRcdC8vIFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkBuZnRjYWxlbmRhci91c2VyTmFtZVwiLCBkYXRhLnVzZXIuc0xvZ2luKTtcblx0XHQvLyBcdFx0bG9naW4oZGF0YS51c2VyLmlkVXN1YXJpbywgZGF0YS51c2VyLnNMb2dpbik7XG5cdFx0Ly8gXHRcdHJvdXRlci5wdXNoKFwiL2FwZXMtbG9jYWwvaG9tZVwiKTtcblx0XHQvLyBcdH1cblx0XHQvLyB9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFx0Y29nb1RvYXN0LmVycm9yKFwiVXN1w6FyaW8gb3Ugc2VuaGEgaW52w6FsaWRvc1wiKTtcblx0XHQvLyB9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Db250YWluZXJ9PlxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9IGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pk5GVCBDQUxFTkRBUjwvc3Ryb25nPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Q29udGFpbmVyfT5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdGlkPVwibG9naW5cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn1cblx0XHRcdFx0XHRcdFx0cmVmPXtsb2dpbklucHV0fVxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwibG9naW5cIj5Vc3XDoXJpbzwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dENvbnRhaW5lcn0+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT17aXNQYXNzd29yZFZpc2libGUgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cblx0XHRcdFx0XHRcdFx0aWQ9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLnBhc3N3b3JkfVxuXHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdFx0XHRyZWY9e3Bhc3N3b3JkSW5wdXR9XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlNlbmhhPC9sYWJlbD5cblx0XHRcdFx0XHRcdHtpc1Bhc3N3b3JkVmlzaWJsZSA/IChcblx0XHRcdFx0XHRcdFx0PElvRXllT2ZmIG9uQ2xpY2s9eygpID0+IHNldElzUGFzc3dvcmRWaXNpYmxlKGZhbHNlKX0gLz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxJb0V5ZSBvbkNsaWNrPXsoKSA9PiBzZXRJc1Bhc3N3b3JkVmlzaWJsZSh0cnVlKX0gLz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGJ1dHRvbj5Mb2dpbjwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=