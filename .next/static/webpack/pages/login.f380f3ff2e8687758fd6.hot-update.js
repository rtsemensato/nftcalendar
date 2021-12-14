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
          children: "NFT CALENDAR"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
            lineNumber: 78,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "login",
            children: "Usu\xE1rio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
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
            lineNumber: 89,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Senha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 7
          }, this), isPasswordVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoEyeOff"], {
            onClick: function onClick() {
              return setIsPasswordVisible(false);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 8
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoEye"], {
            onClick: function onClick() {
              return setIsPasswordVisible(true);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZUxvZ2luIiwibG9naW4iLCJ1c2VTdGF0ZSIsImlzUGFzc3dvcmRWaXNpYmxlIiwic2V0SXNQYXNzd29yZFZpc2libGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpbklucHV0IiwidXNlUmVmIiwicGFzc3dvcmRJbnB1dCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZUZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInZhbHVlIiwicGFzc3dvcmQiLCJ1c2VycyIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiY29nb1RvYXN0IiwiZXJyb3IiLCJzdHlsZXMiLCJsb2dpbkNvbnRhaW5lciIsImlucHV0Q29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ2JDLHVFQUFRLEVBREs7QUFBQSxNQUN2QkMsS0FEdUIsYUFDdkJBLEtBRHVCOztBQUFBLGtCQUVtQkMsc0RBQVEsQ0FBQyxLQUFELENBRjNCO0FBQUEsTUFFeEJDLGlCQUZ3QjtBQUFBLE1BRUxDLG9CQUZLOztBQUcvQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBekI7QUFDQSxNQUFNQyxhQUFhLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUE1QjtBQUVBRSx5REFBUyxDQUFDLFlBQU07QUFDZkgsY0FBVSxDQUFDSSxPQUFYLENBQW1CQyxLQUFuQjtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBUCtCLFdBV2hCQyxn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QTtBQUFBO0FBQUEsZ0JBWkQsZUE0QkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXVDQTs7R0FsR3VCTCxLO1VBQ0xDLCtELEVBRUhNLHFEOzs7S0FIUVAsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5mMzgwZjNmZjJlODY4Nzc1OGZkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBJb0V5ZSwgSW9FeWVPZmYgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQgY29nb1RvYXN0IGZyb20gXCJjb2dvLXRvYXN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCB7IHVzZUxvZ2luIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0xvZ2luQ29udGV4dFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblx0Y29uc3QgeyBsb2dpbiB9ID0gdXNlTG9naW4oKTtcblx0Y29uc3QgW2lzUGFzc3dvcmRWaXNpYmxlLCBzZXRJc1Bhc3N3b3JkVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBsb2dpbklucHV0ID0gdXNlUmVmKG51bGwpO1xuXHRjb25zdCBwYXNzd29yZElucHV0ID0gdXNlUmVmKG51bGwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0bG9naW5JbnB1dC5jdXJyZW50LmZvY3VzKCk7XG5cdH0sIFtdKTtcblxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgdXNlciA9IHtcblx0XHRcdGxvZ2luOiBsb2dpbklucHV0LmN1cnJlbnQudmFsdWUsXG5cdFx0XHRwYXNzd29yZDogcGFzc3dvcmRJbnB1dC5jdXJyZW50LnZhbHVlLFxuXHRcdH07XG5cblx0XHQvLyBjb25zdCBjb25maWcgPSB7XG5cdFx0Ly8gXHRoZWFkZXJzOiB7XG5cdFx0Ly8gXHRcdGxvZ2luOiB1c2VyLmxvZ2luLFxuXHRcdC8vIFx0XHRwYXNzd29yZDogdXNlci5wYXNzd29yZCxcblx0XHQvLyBcdH0sXG5cdFx0Ly8gfTtcblxuXHRcdGNvbnN0IHVzZXJzID0gW1wicmljYXJkb1wiLCBcInNhbXVlbFwiXTtcblxuXHRcdGNvbnNvbGUubG9nKHVzZXIpO1xuXG5cdFx0aWYgKHVzZXJzLmluY2x1ZGVzKHVzZXIubG9naW4sIDApICYmIHVzZXIucGFzc3dvcmQgPT09IFwiYnVuZGluaGExMjNcIikge1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJAbmZ0Y2FsZW5kYXIvdXNlckxvZ2luXCIsIHVzZXIubG9naW4pO1xuXHRcdFx0bG9naW4odXNlci5sb2dpbik7XG5cdFx0XHRyb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2dvVG9hc3QuZXJyb3IoXCJVc3XDoXJpbyBvdSBzZW5oYSBpbnbDoWxpZG9zXCIpO1xuXHRcdH1cblxuXHRcdC8vIHRyeSB7XG5cdFx0Ly8gXHRjb25zdCBiYXNlVXJsID0gYGh0dHA6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX06NTEwMC9gO1xuXG5cdFx0Ly8gXHRjb25zdCBhcGlMb2NhbCA9IGF4aW9zLmNyZWF0ZSh7XG5cdFx0Ly8gXHRcdGJhc2VVUkw6IGJhc2VVcmwsXG5cdFx0Ly8gXHR9KTtcblxuXHRcdC8vIFx0Y29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGF3YWl0IGFwaUxvY2FsLmdldChcImF1dGhlbnRpY2F0ZVwiLCBjb25maWcpO1xuXG5cdFx0Ly8gXHRpZiAoc3RhdHVzID09PSAyMDApIHtcblx0XHQvLyBcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJAbmZ0Y2FsZW5kYXIvdG9rZW5cIiwgZGF0YS5zdG9rZW4pO1xuXHRcdC8vIFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkBuZnRjYWxlbmRhci91c2VySWRcIiwgZGF0YS51c2VyLmlkVXN1YXJpbyk7XG5cdFx0Ly8gXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQG5mdGNhbGVuZGFyL3VzZXJOYW1lXCIsIGRhdGEudXNlci5zTG9naW4pO1xuXHRcdC8vIFx0XHRsb2dpbihkYXRhLnVzZXIuaWRVc3VhcmlvLCBkYXRhLnVzZXIuc0xvZ2luKTtcblx0XHQvLyBcdFx0cm91dGVyLnB1c2goXCIvYXBlcy1sb2NhbC9ob21lXCIpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gXHRjb2dvVG9hc3QuZXJyb3IoXCJVc3XDoXJpbyBvdSBzZW5oYSBpbnbDoWxpZG9zXCIpO1xuXHRcdC8vIH1cblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkNvbnRhaW5lcn0+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHN0cm9uZz5ORlQgQ0FMRU5EQVI8L3N0cm9uZz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dENvbnRhaW5lcn0+XG5cdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRpZD1cImxvZ2luXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMubG9naW59XG5cdFx0XHRcdFx0XHRcdHJlZj17bG9naW5JbnB1dH1cblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImxvZ2luXCI+VXN1w6FyaW88L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250YWluZXJ9PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9e2lzUGFzc3dvcmRWaXNpYmxlID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XG5cdFx0XHRcdFx0XHRcdGlkPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlcy5wYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHRcdFx0cmVmPXtwYXNzd29yZElucHV0fVxuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5TZW5oYTwvbGFiZWw+XG5cdFx0XHRcdFx0XHR7aXNQYXNzd29yZFZpc2libGUgPyAoXG5cdFx0XHRcdFx0XHRcdDxJb0V5ZU9mZiBvbkNsaWNrPXsoKSA9PiBzZXRJc1Bhc3N3b3JkVmlzaWJsZShmYWxzZSl9IC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8SW9FeWUgb25DbGljaz17KCkgPT4gc2V0SXNQYXNzd29yZFZpc2libGUodHJ1ZSl9IC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxidXR0b24+TG9naW48L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9