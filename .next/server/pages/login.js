module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/login/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contexts/LoginContext.tsx":
/*!***************************************!*\
  !*** ./src/contexts/LoginContext.tsx ***!
  \***************************************/
/*! exports provided: LoginContext, LoginContextProvider, useLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginContext", function() { return LoginContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginContextProvider", function() { return LoginContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogin", function() { return useLogin; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\projetosEstudo\\nftcalendar\\src\\contexts\\LoginContext.tsx";

const LoginContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function LoginContextProvider({
  children
}) {
  const {
    0: userLogin,
    1: setUserLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: isUserLoggedIn,
    1: setIsUserLoggedIn
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const login = localStorage.getItem("@apes/userLogin") ? localStorage.getItem("@apes/userLogin") : "";
    setUserLogin(login);
  }, []);

  function login(login) {
    setIsUserLoggedIn(true);
    setUserLogin(login);
  }

  function logout() {
    setIsUserLoggedIn(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LoginContext.Provider, {
    value: {
      userLogin,
      isUserLoggedIn,
      login,
      logout
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 3
  }, this);
}
const useLogin = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(LoginContext);
};

/***/ }),

/***/ "./src/pages/login/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io5 */ "react-icons/io5");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cogo-toast */ "cogo-toast");
/* harmony import */ var cogo_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cogo_toast__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts_LoginContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/LoginContext */ "./src/contexts/LoginContext.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./src/pages/login/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\projetosEstudo\\nftcalendar\\src\\pages\\login\\index.tsx";






function Login() {
  const {
    login
  } = Object(_contexts_LoginContext__WEBPACK_IMPORTED_MODULE_5__["useLogin"])();
  const {
    0: isPasswordVisible,
    1: setIsPasswordVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const loginInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const passwordInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    loginInput.current.focus();
  }, []);

  async function handleFormSubmit(event) {
    event.preventDefault();
    const user = {
      login: loginInput.current.value,
      password: passwordInput.current.value
    }; // const config = {
    // 	headers: {
    // 		login: user.login,
    // 		password: user.password,
    // 	},
    // };

    const users = ["ricardo", "samuel"];
    console.log(user);

    if (users.includes(user.login, 0) && user.password === "bundinha123") {
      localStorage.setItem("@nftcalendar/userLogin", user.login);
      login(user.login);
      router.push("/home");
    } else {
      cogo_toast__WEBPACK_IMPORTED_MODULE_4___default.a.error("Usuário ou senha inválidos");
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

  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.loginContainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleFormSubmit,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.inputContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            id: "login",
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.login,
            ref: loginInput,
            required: true,
            autoComplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.inputContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: isPasswordVisible ? "text" : "password",
            id: "password",
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.password,
            autoComplete: "off",
            ref: passwordInput,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "Senha"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 7
          }, this), isPasswordVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__["IoEyeOff"], {
            onClick: () => setIsPasswordVisible(false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 8
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__["IoEye"], {
            onClick: () => setIsPasswordVisible(true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
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

/***/ }),

/***/ "./src/pages/login/styles.module.scss":
/*!********************************************!*\
  !*** ./src/pages/login/styles.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loginContainer": "styles_loginContainer__1WMUB",
	"title": "styles_title__Aiyoh",
	"inputContainer": "styles_inputContainer__qWMtk",
	"password": "styles_password__u1Pvz"
};


/***/ }),

/***/ "cogo-toast":
/*!*****************************!*\
  !*** external "cogo-toast" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cogo-toast");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/io5":
/*!**********************************!*\
  !*** external "react-icons/io5" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io5");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0xvZ2luQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2xvZ2luL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4vc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvZ28tdG9hc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW81XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTG9naW5Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkxvZ2luQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyTG9naW4iLCJzZXRVc2VyTG9naW4iLCJ1c2VTdGF0ZSIsImlzVXNlckxvZ2dlZEluIiwic2V0SXNVc2VyTG9nZ2VkSW4iLCJ1c2VFZmZlY3QiLCJsb2dpbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dvdXQiLCJ1c2VMb2dpbiIsInVzZUNvbnRleHQiLCJMb2dpbiIsImlzUGFzc3dvcmRWaXNpYmxlIiwic2V0SXNQYXNzd29yZFZpc2libGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpbklucHV0IiwidXNlUmVmIiwicGFzc3dvcmRJbnB1dCIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZUZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInZhbHVlIiwicGFzc3dvcmQiLCJ1c2VycyIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsInNldEl0ZW0iLCJwdXNoIiwiY29nb1RvYXN0IiwiZXJyb3IiLCJzdHlsZXMiLCJsb2dp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QUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXVDQSxDOzs7Ozs7Ozs7OztBQzNHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9sb2dpbi9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgTG9naW5Db250ZXh0RGF0YSA9IHtcclxuXHRpc1VzZXJMb2dnZWRJbjogYm9vbGVhbjtcclxuXHR1c2VyTG9naW46IHN0cmluZztcclxuXHRsb2dpbjogKGxvZ2luOiBzdHJpbmcpID0+IHZvaWQ7XHJcblx0bG9nb3V0OiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgTG9naW5Db250ZXh0RGF0YSk7XHJcblxyXG50eXBlIExvZ2luQ29udGV4dFByb3ZpZGVyUHJvcHMgPSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH06IExvZ2luQ29udGV4dFByb3ZpZGVyUHJvcHMpIHtcclxuXHRjb25zdCBbdXNlckxvZ2luLCBzZXRVc2VyTG9naW5dID0gdXNlU3RhdGUoXCJcIik7XHJcblx0Y29uc3QgW2lzVXNlckxvZ2dlZEluLCBzZXRJc1VzZXJMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBsb2dpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiQGFwZXMvdXNlckxvZ2luXCIpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJAYXBlcy91c2VyTG9naW5cIikgOiBcIlwiO1xyXG5cclxuXHRcdHNldFVzZXJMb2dpbihsb2dpbik7XHJcblx0fSwgW10pO1xyXG5cclxuXHRmdW5jdGlvbiBsb2dpbihsb2dpbjogc3RyaW5nKSB7XHJcblx0XHRzZXRJc1VzZXJMb2dnZWRJbih0cnVlKTtcclxuXHRcdHNldFVzZXJMb2dpbihsb2dpbik7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBsb2dvdXQoKSB7XHJcblx0XHRzZXRJc1VzZXJMb2dnZWRJbihmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExvZ2luQ29udGV4dC5Qcm92aWRlclxyXG5cdFx0XHR2YWx1ZT17e1xyXG5cdFx0XHRcdHVzZXJMb2dpbixcclxuXHRcdFx0XHRpc1VzZXJMb2dnZWRJbixcclxuXHRcdFx0XHRsb2dpbixcclxuXHRcdFx0XHRsb2dvdXQsXHJcblx0XHRcdH19PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L0xvZ2luQ29udGV4dC5Qcm92aWRlcj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTG9naW4gPSAoKSA9PiB7XHJcblx0cmV0dXJuIHVzZUNvbnRleHQoTG9naW5Db250ZXh0KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBJb0V5ZSwgSW9FeWVPZmYgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQgY29nb1RvYXN0IGZyb20gXCJjb2dvLXRvYXN0XCI7XG5cbmltcG9ydCB7IHVzZUxvZ2luIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0xvZ2luQ29udGV4dFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblx0Y29uc3QgeyBsb2dpbiB9ID0gdXNlTG9naW4oKTtcblx0Y29uc3QgW2lzUGFzc3dvcmRWaXNpYmxlLCBzZXRJc1Bhc3N3b3JkVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBsb2dpbklucHV0ID0gdXNlUmVmKG51bGwpO1xuXHRjb25zdCBwYXNzd29yZElucHV0ID0gdXNlUmVmKG51bGwpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0bG9naW5JbnB1dC5jdXJyZW50LmZvY3VzKCk7XG5cdH0sIFtdKTtcblxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgdXNlciA9IHtcblx0XHRcdGxvZ2luOiBsb2dpbklucHV0LmN1cnJlbnQudmFsdWUsXG5cdFx0XHRwYXNzd29yZDogcGFzc3dvcmRJbnB1dC5jdXJyZW50LnZhbHVlLFxuXHRcdH07XG5cblx0XHQvLyBjb25zdCBjb25maWcgPSB7XG5cdFx0Ly8gXHRoZWFkZXJzOiB7XG5cdFx0Ly8gXHRcdGxvZ2luOiB1c2VyLmxvZ2luLFxuXHRcdC8vIFx0XHRwYXNzd29yZDogdXNlci5wYXNzd29yZCxcblx0XHQvLyBcdH0sXG5cdFx0Ly8gfTtcblxuXHRcdGNvbnN0IHVzZXJzID0gW1wicmljYXJkb1wiLCBcInNhbXVlbFwiXTtcblxuXHRcdGNvbnNvbGUubG9nKHVzZXIpO1xuXG5cdFx0aWYgKHVzZXJzLmluY2x1ZGVzKHVzZXIubG9naW4sIDApICYmIHVzZXIucGFzc3dvcmQgPT09IFwiYnVuZGluaGExMjNcIikge1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJAbmZ0Y2FsZW5kYXIvdXNlckxvZ2luXCIsIHVzZXIubG9naW4pO1xuXHRcdFx0bG9naW4odXNlci5sb2dpbik7XG5cdFx0XHRyb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2dvVG9hc3QuZXJyb3IoXCJVc3XDoXJpbyBvdSBzZW5oYSBpbnbDoWxpZG9zXCIpO1xuXHRcdH1cblxuXHRcdC8vIHRyeSB7XG5cdFx0Ly8gXHRjb25zdCBiYXNlVXJsID0gYGh0dHA6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX06NTEwMC9gO1xuXG5cdFx0Ly8gXHRjb25zdCBhcGlMb2NhbCA9IGF4aW9zLmNyZWF0ZSh7XG5cdFx0Ly8gXHRcdGJhc2VVUkw6IGJhc2VVcmwsXG5cdFx0Ly8gXHR9KTtcblxuXHRcdC8vIFx0Y29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGF3YWl0IGFwaUxvY2FsLmdldChcImF1dGhlbnRpY2F0ZVwiLCBjb25maWcpO1xuXG5cdFx0Ly8gXHRpZiAoc3RhdHVzID09PSAyMDApIHtcblx0XHQvLyBcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJAbmZ0Y2FsZW5kYXIvdG9rZW5cIiwgZGF0YS5zdG9rZW4pO1xuXHRcdC8vIFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkBuZnRjYWxlbmRhci91c2VySWRcIiwgZGF0YS51c2VyLmlkVXN1YXJpbyk7XG5cdFx0Ly8gXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQG5mdGNhbGVuZGFyL3VzZXJOYW1lXCIsIGRhdGEudXNlci5zTG9naW4pO1xuXHRcdC8vIFx0XHRsb2dpbihkYXRhLnVzZXIuaWRVc3VhcmlvLCBkYXRhLnVzZXIuc0xvZ2luKTtcblx0XHQvLyBcdFx0cm91dGVyLnB1c2goXCIvYXBlcy1sb2NhbC9ob21lXCIpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gXHRjb2dvVG9hc3QuZXJyb3IoXCJVc3XDoXJpbyBvdSBzZW5oYSBpbnbDoWxpZG9zXCIpO1xuXHRcdC8vIH1cblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkNvbnRhaW5lcn0+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+TkZUIENBTEVOREFSPC9zdHJvbmc+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250YWluZXJ9PlxuXHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0aWQ9XCJsb2dpblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufVxuXHRcdFx0XHRcdFx0XHRyZWY9e2xvZ2luSW5wdXR9XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJsb2dpblwiPlVzdcOhcmlvPC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Q29udGFpbmVyfT5cblx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHR0eXBlPXtpc1Bhc3N3b3JkVmlzaWJsZSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxuXHRcdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMucGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0XHRcdHJlZj17cGFzc3dvcmRJbnB1dH1cblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+U2VuaGE8L2xhYmVsPlxuXHRcdFx0XHRcdFx0e2lzUGFzc3dvcmRWaXNpYmxlID8gKFxuXHRcdFx0XHRcdFx0XHQ8SW9FeWVPZmYgb25DbGljaz17KCkgPT4gc2V0SXNQYXNzd29yZFZpc2libGUoZmFsc2UpfSAvPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PElvRXllIG9uQ2xpY2s9eygpID0+IHNldElzUGFzc3dvcmRWaXNpYmxlKHRydWUpfSAvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8YnV0dG9uPkxvZ2luPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9naW5Db250YWluZXJcIjogXCJzdHlsZXNfbG9naW5Db250YWluZXJfXzFXTVVCXCIsXG5cdFwidGl0bGVcIjogXCJzdHlsZXNfdGl0bGVfX0FpeW9oXCIsXG5cdFwiaW5wdXRDb250YWluZXJcIjogXCJzdHlsZXNfaW5wdXRDb250YWluZXJfX3FXTXRrXCIsXG5cdFwicGFzc3dvcmRcIjogXCJzdHlsZXNfcGFzc3dvcmRfX3UxUHZ6XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2dvLXRvYXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvNVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==