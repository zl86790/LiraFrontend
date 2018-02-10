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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 
 */
var HeaderDiv = React.createClass({
	displayName: "HeaderDiv",

	render: function render() {

		var borderBottomStyle = {
			//			borderBottomStyle: '1px solid #e5e5e5',
			//			boxShadow: '0 .25rem .75rem rgba(0, 0, 0, .05)'
		};

		return React.createElement(
			"div",
			{ style: borderBottomStyle, className: "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow" },
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

ReactDOM.render(React.createElement(HeaderDiv, null), document.getElementById('headerDiv'));

/***/ })

/******/ });