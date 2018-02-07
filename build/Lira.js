/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(1);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderDiv = React.createClass({
	displayName: "HeaderDiv",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow" },
			React.createElement(
				"h5",
				{ className: "my-0 mr-md-auto font-weight-normal" },
				"Lira"
			),
			React.createElement(
				"nav",
				{ className: "my-2 my-md-0 mr-md-3" },
				React.createElement(
					"a",
					{ className: "p-2 text-dark", href: "#" },
					"Features"
				),
				React.createElement(
					"a",
					{ className: "p-2 text-dark", href: "#" },
					"Enterprise"
				),
				React.createElement(
					"a",
					{ className: "p-2 text-dark", href: "#" },
					"Support"
				),
				React.createElement(
					"a",
					{ className: "p-2 text-dark", href: "#" },
					"Pricing"
				)
			),
			React.createElement(
				"a",
				{ className: "btn btn-outline-primary", href: "#" },
				"Sign up"
			)
		);
	}

});

var LoginDiv = React.createClass({
	displayName: "LoginDiv",

	login: function login(event) {
		var user = { username: "admin", password: "admin" };
		$.ajax({
			type: "POST",
			url: "http://192.168.1.2:8081/api/prelogin/login",
			data: (0, _stringify2.default)(user),
			dataType: 'json',
			contentType: 'application/json',
			success: function success(data) {
				console.log(data);
			}
		});
	},
	render: function render() {
		return React.createElement(
			"form",
			{ className: "form-signin" },
			React.createElement("img", { src: '/public/imgs/Lira.jpg', alt: "", width: "72", height: "72" }),
			React.createElement(
				"h1",
				{ className: "h3 mb-3 font-weight-normal" },
				"Please sign in"
			),
			React.createElement(
				"label",
				{ htmlFor: "inputEmail", className: "sr-only" },
				"Email address"
			),
			React.createElement("input", { type: "text", id: "inputUserName", className: "form-control", placeholder: "User Name", required: true, autoFocus: true }),
			React.createElement(
				"label",
				{ htmlFor: "inputPassword", className: "sr-only" },
				"Password"
			),
			React.createElement("input", { type: "password", id: "inputPassword", className: "form-control", placeholder: "Password", required: true }),
			React.createElement(
				"button",
				{ id: "subButton", className: "btn btn-lg btn-primary btn-block", type: "button", onClick: this.login },
				"Sign in"
			),
			React.createElement(
				"p",
				{ className: "mt-5 mb-3 text-muted" },
				"\xA9 2017-2018"
			)
		);
	}
});
ReactDOM.render(React.createElement(HeaderDiv, null), document.getElementById('headerDiv'));
ReactDOM.render(React.createElement(LoginDiv, null), document.getElementById('centerDiv'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ })
/******/ ]);