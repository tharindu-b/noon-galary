module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/chin/git/noon-gallery/components/Header.js";


function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Noon Gallery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toolbar */ "./components/Toolbar.js");
var _jsxFileName = "/home/chin/git/noon-gallery/components/Layout.js";




function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4214565638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4214565638" + " " + "child-elements",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4214565638",
    __self: this
  }, "*.jsx-4214565638{box-sizing:border-box;}@media (max-width:500px){.child-elements.jsx-4214565638{margin-bottom:55px;}}@media (min-width:501px){.child-elements.jsx-4214565638{margin-top:55px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZSxBQUc0QixBQUtFLEFBTUgsZ0JBQ2hCLEdBTkEsR0FMUCIsImZpbGUiOiIvaG9tZS9jaGluL2dpdC9ub29uLWdhbGxlcnkvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJy4vVG9vbGJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8SGVhZGVyIC8+IHsvKnBhZ2UgaGVhZGVyKi99XG5cdFx0XHQ8VG9vbGJhciAvPiB7LyogdG9vbCBiYXIgZWxlbWVudCAqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hpbGQtZWxlbWVudHNcIj5cblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufXsvKiBhbGwgdGhlIG90aGVyIHBhZ2VzL2NvbXBvbmVudHMgZ29lcyBoZXJlICovfVxuICAgICAgXHRcdDwvZGl2PlxuXHRcdFx0ey8qZ3JpZCBzeXN0ZW0gc3R5bGVzICovfVxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0KiB7XG5cdFx0XHQgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHR9XG5cblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkgeyAvL2tlZXAgbWFyZ2luZSB3aXRoIG5hdmJhciB3aGVuIGl0IGlzIGF0IGJvdHRvbVxuXHQgICAgICAgIFx0LmNoaWxkLWVsZW1lbnRzIHtcblx0ICAgICAgICBcdFx0bWFyZ2luLWJvdHRvbTo1NXB4O1xuXHQgICAgICAgIFx0fVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkgeyAvL2tlZXAgbWFyZ2luZSB3aXRoIG5hdmJhciB3aGVuIGl0IGlzIGF0IHRvcFxuXHQgICAgICAgIFx0LmNoaWxkLWVsZW1lbnRzIHtcblx0ICAgICAgICBcdFx0bWFyZ2luLXRvcDo1NXB4O1xuXHQgICAgICAgIFx0fVxuXHQgICAgICAgIH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KVxufSJdfQ== */\n/*@ sourceURL=/home/chin/git/noon-gallery/components/Layout.js */"));
}

/***/ }),

/***/ "./components/Postsliked.js":
/*!**********************************!*\
  !*** ./components/Postsliked.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-ionicons/lib/MdHeart */ "react-ionicons/lib/MdHeart");
/* harmony import */ var react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_ionicons_lib_MdHeartOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-ionicons/lib/MdHeartOutline */ "react-ionicons/lib/MdHeartOutline");
/* harmony import */ var react_ionicons_lib_MdHeartOutline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_MdHeartOutline__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "/home/chin/git/noon-gallery/components/Postsliked.js";





var Postsliked =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Postsliked, _React$Component);

  function Postsliked() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Postsliked);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Postsliked)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      'post_liked': _this.props.post.userLiked
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "likePost", function (postId) {
      _this.setState({
        post_liked: true
      }); // update state object when user liked on a post


      fetch("http://localhost:3001/post/like/".concat(postId), {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          status: true
        })
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "unlikePost", function (postId) {
      _this.setState({
        post_liked: false
      }); // update state object when user dislike on a post


      fetch("http://localhost:3001/post/like/".concat(postId), {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          status: false
        })
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Postsliked, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var likeBtn = '';

      if (this.state.post_liked == false) //if user not liked this post show default icon
        {
          likeBtn = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_ionicons_lib_MdHeartOutline__WEBPACK_IMPORTED_MODULE_11___default.a, {
            color: "#fafafa",
            onClick: function onClick(e) {
              return _this2.likePost(_this2.props.post.id);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          });
        } else {
        //if user has liked this post show liked icon (red)
        likeBtn = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_10___default.a, {
          color: "#f00000",
          onClick: function onClick(e) {
            return _this2.unlikePost(_this2.props.post.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "userinfo-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "profile-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "".concat(this.props.post.user.picUrl),
        alt: "".concat(this.props.post.user.name),
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.props.post.user.name, " test ", this.liked))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "img-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "post-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "".concat(this.props.post.image.imgUrl),
        alt: "".concat(this.props.post.image.title),
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "post-info-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "img-title-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, this.props.post.image.description), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, this.props.post.image.title)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "spacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "like-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, likeBtn)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "post-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "post-likes-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "post-likes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_10___default.a, {
        fontSize: "20px",
        color: "#003cdc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, this.props.post.likes, " Likes"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "post-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.props.post.description)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "hash-tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "#", this.props.post.hashtags.join(' #'))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2692219114" + " " + "view-comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        className: "jsx-2692219114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "View 12 comments")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2692219114",
        __self: this
      }, "*.jsx-2692219114{box-sizing:border-box;}.post.jsx-2692219114{position:relative;text-align:left;}.post.jsx-2692219114:not(:last-child){border-bottom:1px solid #e8e8e8;margin-bottom:5px;}.userinfo-section.jsx-2692219114{display:inline-block;float:left;width:100%;height:40px;left:0;margin-left:10px;}.profile-img.jsx-2692219114{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.profile-img.jsx-2692219114 img.jsx-2692219114{width:25px;border-radius:50%;}.post-img.jsx-2692219114 img.jsx-2692219114{width:100%;height :auto;}.profile-img.jsx-2692219114 p.jsx-2692219114{margin-left:10px;color:#003cdc;cursor:pointer;font-weight:600;}.post-info-section.jsx-2692219114{position:absolute;left:10px;text-align:left;color:#fafafa;width:100%;margin-top:-45px;}.post-info-section.jsx-2692219114 div.jsx-2692219114{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.post-info-section.jsx-2692219114 .spacer.jsx-2692219114{-webkit-flex:1;-ms-flex:1;flex:1;}.img-title-section.jsx-2692219114{display:block !important;float:left;}.img-title-section.jsx-2692219114 div.jsx-2692219114:last-child{font-weight :1000;}.post-footer.jsx-2692219114{display:block;width:100%;left:0;margin-left:10px;font-size:15px;}.post-footer.jsx-2692219114>*.jsx-2692219114:first-child{margin-top:-15px;}.post-footer.jsx-2692219114>*.jsx-2692219114{margin-top:-15px;}.post-footer.jsx-2692219114>*.jsx-2692219114:last-child{margin-top:-5px;}.post-likes.jsx-2692219114{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:13px;}.post-likes.jsx-2692219114 p.jsx-2692219114{margin-left:5px;color:#003cdc;font-weight:600;}.like-btn.jsx-2692219114{margin-right:25px;}.post-footer.jsx-2692219114 .hash-tags.jsx-2692219114{color:#6784d2;}.post-footer.jsx-2692219114 .post-description.jsx-2692219114 p.jsx-2692219114{color :#918484;}.post-footer.jsx-2692219114 .view-comments.jsx-2692219114 p.jsx-2692219114{color :#b7adad;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9jb21wb25lbnRzL1Bvc3RzbGlrZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZpQixBQUk0QixBQUlDLEFBS1MsQUFLWCxBQVNHLEFBTWQsQUFLRyxBQUtJLEFBT00sQUFVdEIsQUFHUSxBQUltQixBQUtQLEFBSVAsQUFRTSxBQUlBLEFBSUQsQUFJSyxBQU9SLEFBTUUsQUFJSixBQUlJLEFBSUEsV0F2RkEsQUFLRixHQXNDRixBQXFDZixDQUlHLEFBSUEsQ0E3QkgsQUFXZSxDQTVEQSxBQXlDZixBQUlBLENBaEZvQixBQTBDTixBQXNCWCxBQXFDQSxHQTNGWSxDQWRmLEVBbUNHLENBNEJZLEFBVUosR0ExQlMsQ0FqQnBCLENBc0VpQixDQTVERCxDQS9CRyxBQU1KLEFBMkRNLENBZmxCLENBdERBLEVBMkRBLE9BaERhLENBZ0NFLEVBUEQsQUE0RGpCLEdBMUJrQixDQWpFbEIsS0FPVyxHQWdDSSxJQS9CTSxBQXdCckIsRUFrQ0EsS0F6QkUsS0FJQyxLQXBDSCxPQWdDRyxPQTVCUyxBQXFFQSxZQXBFRSxBQXFFQSwwRUFwRVQsQUFxRVcsZUFDWCIsImZpbGUiOiIvaG9tZS9jaGluL2dpdC9ub29uLWdhbGxlcnkvY29tcG9uZW50cy9Qb3N0c2xpa2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1kSGVhcnQgZnJvbSAncmVhY3QtaW9uaWNvbnMvbGliL01kSGVhcnQnXG5pbXBvcnQgTWRIZWFydE91dGxpbmUgZnJvbSAncmVhY3QtaW9uaWNvbnMvbGliL01kSGVhcnRPdXRsaW5lJ1xuXG5jbGFzcyBQb3N0c2xpa2VkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzdGF0ZSA9IHsncG9zdF9saWtlZCcgOiB0aGlzLnByb3BzLnBvc3QudXNlckxpa2VkfTtcblxuXHRsaWtlUG9zdCA9IChwb3N0SWQpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtwb3N0X2xpa2VkIDogdHJ1ZX0pIC8vIHVwZGF0ZSBzdGF0ZSBvYmplY3Qgd2hlbiB1c2VyIGxpa2VkIG9uIGEgcG9zdFxuXHRcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9zdC9saWtlLyR7cG9zdElkfWAsIHtcblx0ICAgICAgICBtZXRob2Q6ICdQVVQnLFxuXHQgICAgICAgIGhlYWRlcnM6IHtcblx0ICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdCAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdCAgICAgICAgfSxcblx0ICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7c3RhdHVzOnRydWV9KVxuXHQgICAgICB9KVxuXHR9XG5cblx0dW5saWtlUG9zdCA9IChwb3N0SWQpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtwb3N0X2xpa2VkIDogZmFsc2V9KSAvLyB1cGRhdGUgc3RhdGUgb2JqZWN0IHdoZW4gdXNlciBkaXNsaWtlIG9uIGEgcG9zdFxuXHRcdGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9zdC9saWtlLyR7cG9zdElkfWAsIHtcblx0ICAgICAgICBtZXRob2Q6ICdQVVQnLFxuXHQgICAgICAgIGhlYWRlcnM6IHtcblx0ICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdCAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdCAgICAgICAgfSxcblx0ICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7c3RhdHVzOmZhbHNlfSlcblx0ICAgIH0pXG5cdH1cblxuXHRyZW5kZXIoKXtcblx0XG5cdFx0bGV0IGxpa2VCdG4gPSAnJztcblx0XHRpZih0aGlzLnN0YXRlLnBvc3RfbGlrZWQgPT0gZmFsc2UpIC8vaWYgdXNlciBub3QgbGlrZWQgdGhpcyBwb3N0IHNob3cgZGVmYXVsdCBpY29uXG5cdFx0e1xuXHRcdFx0bGlrZUJ0biA9IDxNZEhlYXJ0T3V0bGluZSBjb2xvcj1cIiNmYWZhZmFcIiBvbkNsaWNrPXtlID0+IHRoaXMubGlrZVBvc3QodGhpcy5wcm9wcy5wb3N0LmlkKX0gLz47XG5cdFx0fVxuXHRcdGVsc2V7IC8vaWYgdXNlciBoYXMgbGlrZWQgdGhpcyBwb3N0IHNob3cgbGlrZWQgaWNvbiAocmVkKVxuXHRcdFx0bGlrZUJ0biA9IDxNZEhlYXJ0IGNvbG9yPVwiI2YwMDAwMFwiIG9uQ2xpY2s9e2UgPT4gdGhpcy51bmxpa2VQb3N0KHRoaXMucHJvcHMucG9zdC5pZCl9IC8+O1xuXHRcdH1cblx0ICAgIHJldHVybiAoXG5cdCAgICBcdDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxuXHQgICAgXHRcblx0XHRcdFx0PGRpdiA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyaW5mby1zZWN0aW9uXCI+XG5cdFx0ICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtaW1nXCI+XG5cdFx0XHRcdCAgXHRcdFx0XHRcblx0ICBcdFx0XHRcdFx0PGltZyBzcmM9e2Ake3RoaXMucHJvcHMucG9zdC51c2VyLnBpY1VybH1gfSBhbHQ9e2Ake3RoaXMucHJvcHMucG9zdC51c2VyLm5hbWV9YH0gLz4gPHA+e3RoaXMucHJvcHMucG9zdC51c2VyLm5hbWV9IHRlc3Qge3RoaXMubGlrZWR9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pbWdcIj5cblx0XHQgIFx0XHRcdFx0PGltZyBzcmM9e2Ake3RoaXMucHJvcHMucG9zdC5pbWFnZS5pbWdVcmx9YH0gYWx0PXtgJHt0aGlzLnByb3BzLnBvc3QuaW1hZ2UudGl0bGV9YH0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0ICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaW5mby1zZWN0aW9uXCI+XG5cdFx0ICBcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdCAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWctdGl0bGUtc2VjdGlvblwiPlxuXHRcdFx0XHRcdCAgXHRcdFx0PGRpdj57dGhpcy5wcm9wcy5wb3N0LmltYWdlLmRlc2NyaXB0aW9ufTwvZGl2PlxuXHRcdFx0XHRcdCAgXHRcdFx0PGRpdj57dGhpcy5wcm9wcy5wb3N0LmltYWdlLnRpdGxlfTwvZGl2PlxuXHRcdFx0XHQgIFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCIgLz5cblx0XHRcdFx0ICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpa2UtYnRuXCI+XG5cdFx0XHRcdCAgXHRcdFx0XHR7bGlrZUJ0bn1cblx0XHRcdFx0ICBcdFx0XHQ8L2Rpdj5cblx0XHQgIFx0XHRcdFx0PC9kaXY+XG5cdFx0ICBcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0ICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3QtZm9vdGVyXCI+XG5cdCAgXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbGlrZXMtc2VjdGlvblwiPlxuXHQgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbGlrZXNcIj5cblx0ICBcdFx0XHRcdFx0XHQ8TWRIZWFydCBmb250U2l6ZT1cIjIwcHhcIiBjb2xvcj1cIiMwMDNjZGNcIiAvPjxwPnt0aGlzLnByb3BzLnBvc3QubGlrZXN9IExpa2VzPC9wPlxuXHQgIFx0XHRcdFx0XHQ8L2Rpdj5cblx0ICBcdFx0XHRcdDwvZGl2PlxuXHQgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0LWRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8cD57dGhpcy5wcm9wcy5wb3N0LmRlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhc2gtdGFnc1wiPlxuXHRcdFx0XHRcdFx0PHA+I3t0aGlzLnByb3BzLnBvc3QuaGFzaHRhZ3Muam9pbignICMnKX08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNvbW1lbnRzXCI+XG5cdFx0XHRcdFx0XHQ8cD5WaWV3IDEyIGNvbW1lbnRzPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdCAgXHQ8c3R5bGUganN4PntgXG5cblx0XHQgIFx0XHQqIHtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBvc3Qge1xuXHRcdFx0ICAgICAgXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdCAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgIC5wb3N0Om5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDVweDtcblx0XHRcdFx0fVxuXG5cdFx0ICBcdFx0LnVzZXJpbmZvLXNlY3Rpb24ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0ICAgIGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHQgICAgd2lkdGg6IDEwMCU7XG5cdFx0XHRcdCAgICBoZWlnaHQ6IDQwcHg7XG5cdFx0XHRcdCAgICBsZWZ0OiAwO1xuXHRcdFx0XHQgICBcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHR9XG5cdFx0ICAgICAgXHRcblx0XHQgIFx0XHQucHJvZmlsZS1pbWcge1xuXHRcdCAgICAgIFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdGhlaWdodDoxMDAlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ICAgICAgXHR9XG5cblx0XHRcdFx0LnByb2ZpbGUtaW1nIGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6MjVweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdH1cblx0XHQgICAgICBcdFxuXHRcdFx0ICAgIC5wb3N0LWltZyBpbWcge1xuXHRcdFx0ICAgIFx0d2lkdGg6MTAwJTsgLypnaXZlIHBvc3QgaW1hZ2VzIHRoZSB3aW5kb3cgd2lkdGggKi9cblx0XHRcdCAgICBcdGhlaWdodCA6IGF1dG87XG5cdFx0XHQgICAgfVxuXG5cdFx0XHQgICAgLnByb2ZpbGUtaW1nIHAge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMDAzY2RjO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjsgLy90byBtYWtlIGl0IGxvb2sgbGlrZSBjbGlja2FibGVcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdCAgICAucG9zdC1pbmZvLXNlY3Rpb24ge1xuXHRcdFx0ICAgICAgXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdCAgICBsZWZ0OiAxMHB4O1xuXHRcdFx0XHQgICAgdGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0ICAgIGNvbG9yOiAjZmFmYWZhO1xuXHRcdFx0XHQgICAgd2lkdGg6IDEwMCU7XG5cdFx0XHRcdCAgICBtYXJnaW4tdG9wOiAtNDVweFxuXHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgIC5wb3N0LWluZm8tc2VjdGlvbiBkaXYge1xuXHRcdFx0ICAgIFx0ZGlzcGxheTpmbGV4XG5cdFx0XHQgICAgfVxuXG5cdFx0XHQgICAgLnBvc3QtaW5mby1zZWN0aW9uIC5zcGFjZXIge1xuXHRcdFx0ICAgIFx0ZmxleDoxO1xuXHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgIC5pbWctdGl0bGUtc2VjdGlvbiB7XG5cdFx0XHQgICAgXHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyA7XG5cdFx0XHRcdCAgICBmbG9hdDogbGVmdDtcblx0XHRcdCAgICB9XG5cblx0XHRcdCAgICAuaW1nLXRpdGxlLXNlY3Rpb24gZGl2Omxhc3QtY2hpbGQge1xuXHRcdFx0ICAgIFx0Zm9udC13ZWlnaHQgOiAxMDAwO1xuXHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgIC5wb3N0LWZvb3RlciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdCAgICB3aWR0aDogMTAwJTtcblx0XHRcdFx0ICAgIGxlZnQ6IDA7XG5cdFx0XHRcdCAgIFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdCAgICBmb250LXNpemU6MTVweDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5wb3N0LWZvb3RlciA+ICo6Zmlyc3QtY2hpbGQge1xuXHRcdFx0ICAgIFx0bWFyZ2luLXRvcDogLTE1cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9zdC1mb290ZXIgPiAqIHtcblx0XHRcdFx0ICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBvc3QtZm9vdGVyID4gKjpsYXN0LWNoaWxkIHtcblx0XHRcdCAgICBcdG1hcmdpbi10b3A6IC01cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQucG9zdC1saWtlcyB7XG5cdFx0ICAgICAgXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0aGVpZ2h0OjEwMCU7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0ICAgICAgXHR9XG5cblx0XHQgICAgICBcdC5wb3N0LWxpa2VzIHAge1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA1cHg7XG5cdFx0XHRcdFx0Y29sb3I6ICMwMDNjZGM7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0fVxuXG5cdFx0XHQgICAgLmxpa2UtYnRuIHtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDI1cHg7XG5cdFx0XHQgICAgfVxuXG5cdFx0XHRcdC5wb3N0LWZvb3RlciAuaGFzaC10YWdzIHtcblx0XHRcdFx0XHRjb2xvcjogIzY3ODRkMjtcblx0XHRcdFx0fVxuXG5cdFx0XHQgICAgLnBvc3QtZm9vdGVyIC5wb3N0LWRlc2NyaXB0aW9uIHAge1xuXHRcdFx0ICAgIFx0Y29sb3IgOiAjOTE4NDg0O1xuXHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgIC5wb3N0LWZvb3RlciAudmlldy1jb21tZW50cyBwIHtcblx0XHRcdCAgICBcdGNvbG9yIDogI2I3YWRhZDtcblx0XHRcdCAgICB9XG5cdFx0ICBcdGB9XG5cdFx0ICBcdDwvc3R5bGU+XG5cdCAgXHQ8L2Rpdj5cblx0ICBcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNsaWtlZDsiXX0= */\n/*@ sourceURL=/home/chin/git/noon-gallery/components/Postsliked.js */"));
    }
  }]);

  return Postsliked;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Postsliked);

/***/ }),

/***/ "./components/Toolbar.js":
/*!*******************************!*\
  !*** ./components/Toolbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ionicons/lib/MdHeart */ "react-ionicons/lib/MdHeart");
/* harmony import */ var react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_ionicons_lib_MdHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ionicons/lib/MdHome */ "react-ionicons/lib/MdHome");
/* harmony import */ var react_ionicons_lib_MdHome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ionicons_lib_MdHome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/chin/git/noon-gallery/components/Toolbar.js";






var Toolbar = function Toolbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3310229858" + " " + "tool-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3310229858" + " " + "tool-bar-navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3310229858",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_ionicons_lib_MdHome__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3310229858",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/favourites",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_ionicons_lib_MdHeart__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3310229858",
    __self: this
  }, ".tool-bar.jsx-3310229858{position :fixed;left:0;width :100%;background :#ff627e;height:50px;display:inline-block;z-index:999;}.tool-bar-navigation.jsx-3310229858{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.tool-bar-navigation.jsx-3310229858>.jsx-3310229858:first-child{margin-left:30%;}.tool-bar-navigation.jsx-3310229858>.jsx-3310229858:last-child{margin-right:30%;float:right;right:0;position:absolute;}@media (max-width:500px){.tool-bar.jsx-3310229858{bottom:0;}}@media (min-width:501px){.tool-bar.jsx-3310229858{top:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9jb21wb25lbnRzL1Rvb2xiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWUsQUFHNkIsQUFVRCxBQU1BLEFBSUMsQUFRUixBQU1ILE1BQ04sR0FOQSxPQTVCTyxBQWdCUixDQUlVLE1BbkJJLE1Bb0JSLE1BbkJnQixFQW9CTixrQkFuQkgsQUFvQmIsWUFuQmlCLHFCQUNULEtBS0MsT0FKVCxLQUtXLDBFQUNYIiwiZmlsZSI6Ii9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9jb21wb25lbnRzL1Rvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWRIZWFydCBmcm9tICdyZWFjdC1pb25pY29ucy9saWIvTWRIZWFydCdcbmltcG9ydCBNZEhvbWUgZnJvbSAncmVhY3QtaW9uaWNvbnMvbGliL01kSG9tZSdcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgVG9vbGJhciA9IChwcm9wcykgPT4gIHtcblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT1cInRvb2wtYmFyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvb2wtYmFyLW5hdmlnYXRpb25cIj5cblx0XHRcdFx0PGRpdj48TGluayBocmVmPVwiL1wiPjxNZEhvbWUgY29sb3I9XCJ3aGl0ZVwiIC8+PC9MaW5rPjwvZGl2PiB7LyogbGluayB0byBob21lL2RlZmF1bHQgcGFnZSAqL31cblx0XHRcdFx0PGRpdj48TGluayBocmVmPVwiL2Zhdm91cml0ZXNcIj48TWRIZWFydCBjb2xvcj1cIndoaXRlXCIgLz48L0xpbms+PC9kaXY+IHsvKmxpbmsgdG8gZmF2b3JpdGUgcG9zdHMgcGFnZSovfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC50b29sLWJhciB7XG5cdFx0ICAgICAgICAgIHBvc2l0aW9uIDogZml4ZWQ7XG5cdFx0ICAgICAgICAgIGxlZnQ6MDtcblx0XHQgICAgICAgICAgd2lkdGggOiAxMDAlO1xuXHRcdCAgICAgICAgICBiYWNrZ3JvdW5kIDogI2ZmNjI3ZTtcblx0XHQgICAgICAgICAgaGVpZ2h0OjUwcHg7XG5cdFx0XHRcdCAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHQgIHotaW5kZXg6IDk5OTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgLnRvb2wtYmFyLW5hdmlnYXRpb24geyAvL3ZlcnRpY2FsbHkgY2VudGVyZWRcbiAgICBcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXHRcdFx0XHRoZWlnaHQ6MTAwJTtcbiAgICBcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ICAgICAgICB9XG5cblx0XHQgICAgICAgIC50b29sLWJhci1uYXZpZ2F0aW9uID4gOmZpcnN0LWNoaWxkIHsgLy9zcGFjZSBiZXR3ZWVuIG5hdmJhciBob21lIGJ1dHRvbiBhbmQgbGVmdFxuXHRcdCAgICAgICAgXHRtYXJnaW4tbGVmdDogMzAlO1xuXHRcdCAgICAgICAgfVxuXG5cdFx0ICAgICAgICAudG9vbC1iYXItbmF2aWdhdGlvbiA+IDpsYXN0LWNoaWxkIHsgLy9zcGFjZSBiZXR3ZWVuIG5hdmJhciBmYXZvcml0ZXMgYnV0dG9uIGFuZCByaWdodCBzaWRlIG9mIHRoZSBzY3JlZW5cblx0XHQgICAgICAgIFx0bWFyZ2luLXJpZ2h0OiAzMCU7XG5cdFx0XHRcdCAgICBmbG9hdDogcmlnaHQ7XG5cdFx0XHRcdCAgICByaWdodDogMDtcblx0XHRcdFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7IC8vbmF2YmFyIHNob3VsZCB2aXNpYmxlIGluIGJvdHRvbSBmb3Igc21hbGwgc2NyZWVuc1xuXHRcdCAgICAgICAgXHQudG9vbC1iYXIge1xuXHRcdCAgICAgICAgXHRcdGJvdHRvbTowO1xuXHRcdCAgICAgICAgXHR9XG5cdFx0ICAgICAgICB9XG5cblx0XHQgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkgeyAvL25hdmJhciBzaG91bGQgdmlzaWJsZSBvbiB0b3Agb2YgdGhlIHBhZ2UgZm9yIGxhcmdlIHNjcmVlbnNcblx0XHQgICAgICAgIFx0LnRvb2wtYmFyIHtcblx0XHQgICAgICAgIFx0XHR0b3A6MDtcblx0XHQgICAgICAgIFx0fVxuXHRcdCAgICAgICAgfVxuXHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9uYXY+IFxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7Il19 */\n/*@ sourceURL=/home/chin/git/noon-gallery/components/Toolbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/favourites.js":
/*!*****************************!*\
  !*** ./pages/favourites.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Postsliked_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Postsliked.js */ "./components/Postsliked.js");


var _jsxFileName = "/home/chin/git/noon-gallery/pages/favourites.js";






var Favourites = function Favourites(_ref) {
  var posts = _ref.posts;
  var likedHtml = '';

  if (posts.length > 0) {
    likedHtml = posts.map(function (post) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Postsliked_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: post.id,
        post: post,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    });
  } else {
    likedHtml = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-3370293772",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
      className: "jsx-3370293772",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Nothong to show here!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3370293772",
      __self: this
    }, ".jsx-3370293772{text-align:center;margin-top:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9mYXZvdXJpdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCZSxBQUV1QixrQkFDRSxpQkFDbEIiLCJmaWxlIjoiL2hvbWUvY2hpbi9naXQvbm9vbi1nYWxsZXJ5L3BhZ2VzL2Zhdm91cml0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC5qcydcbmltcG9ydCBQb3N0c2xpa2VkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdHNsaWtlZC5qcydcblxuY29uc3QgRmF2b3VyaXRlcyA9ICh7cG9zdHN9KSA9PiB7XG5cblx0dmFyIGxpa2VkSHRtbCA9ICcnO1xuXHRpZihwb3N0cy5sZW5ndGggPiAwKVxuXHR7XG5cdFx0bGlrZWRIdG1sID0gcG9zdHMubWFwKHBvc3QgPT4gKFxuXHQgIFx0XHQ8UG9zdHNsaWtlZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG5cdCAgXHQpKVxuXHR9XG5cdGVsc2V7XG5cdFx0bGlrZWRIdG1sID0gXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5Ob3Rob25nIHRvIHNob3cgaGVyZSE8L2gxPlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCAgICBcdFx0bWFyZ2luLXRvcDogMTUwcHg7XG5cdCAgICBcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj4gLy9pZiB0aGVyZSdzIG5vIGxpa2VkIHBvc3RzIHNob3cgdGhpcyBtc2dcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdFxuXHRcdFx0PGRpdj5cblx0XHQgIFx0e2xpa2VkSHRtbH1cblx0XHRcdDwvZGl2PlxuXHRcdCAgICA8c3R5bGUganN4PntgXG5cdFx0ICAgICAgKiB7XG5cdFx0ICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdCAgICAgIH1cblx0XHQgICAgYH08L3N0eWxlPlxuXHRcdDwvTGF5b3V0PlxuXHQpXG5cdFxufVxuXG5GYXZvdXJpdGVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvcG9zdHMvbGlrZWQnKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiB7IHBvc3RzOiByZXNwb25zZSB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBGYXZvdXJpdGVzOyJdfQ== */\n/*@ sourceURL=/home/chin/git/noon-gallery/pages/favourites.js */")); //if there's no liked posts show this msg
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4121594649",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, likedHtml), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4121594649",
    __self: this
  }, "*.jsx-4121594649{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9mYXZvdXJpdGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCa0IsQUFHaUMsc0JBQ3hCIiwiZmlsZSI6Ii9ob21lL2NoaW4vZ2l0L25vb24tZ2FsbGVyeS9wYWdlcy9mYXZvdXJpdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXG5pbXBvcnQgUG9zdHNsaWtlZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RzbGlrZWQuanMnXG5cbmNvbnN0IEZhdm91cml0ZXMgPSAoe3Bvc3RzfSkgPT4ge1xuXG5cdHZhciBsaWtlZEh0bWwgPSAnJztcblx0aWYocG9zdHMubGVuZ3RoID4gMClcblx0e1xuXHRcdGxpa2VkSHRtbCA9IHBvc3RzLm1hcChwb3N0ID0+IChcblx0ICBcdFx0PFBvc3RzbGlrZWQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuXHQgIFx0KSlcblx0fVxuXHRlbHNle1xuXHRcdGxpa2VkSHRtbCA9IFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+Tm90aG9uZyB0byBzaG93IGhlcmUhPC9oMT5cblx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQgICAgXHRcdG1hcmdpbi10b3A6IDE1MHB4O1xuXHQgICAgXHRgfTwvc3R5bGU+XG5cdFx0PC9kaXY+IC8vaWYgdGhlcmUncyBubyBsaWtlZCBwb3N0cyBzaG93IHRoaXMgbXNnXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHRcblx0XHRcdDxkaXY+XG5cdFx0ICBcdHtsaWtlZEh0bWx9XG5cdFx0XHQ8L2Rpdj5cblx0XHQgICAgPHN0eWxlIGpzeD57YFxuXHRcdCAgICAgICoge1xuXHRcdCAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHQgICAgICB9XG5cdFx0ICAgIGB9PC9zdHlsZT5cblx0XHQ8L0xheW91dD5cblx0KVxuXHRcbn1cblxuRmF2b3VyaXRlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Bvc3RzL2xpa2VkJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4geyBwb3N0czogcmVzcG9uc2UgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgRmF2b3VyaXRlczsiXX0= */\n/*@ sourceURL=/home/chin/git/noon-gallery/pages/favourites.js */"));
};

Favourites.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, res, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return fetch('http://localhost:3001/posts/liked');

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            response = _context.sent;
            return _context.abrupt("return", {
              posts: response
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Favourites);

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/favourites.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chin/git/noon-gallery/pages/favourites.js */"./pages/favourites.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ionicons/lib/MdHeart":
/*!*********************************************!*\
  !*** external "react-ionicons/lib/MdHeart" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ionicons/lib/MdHeart");

/***/ }),

/***/ "react-ionicons/lib/MdHeartOutline":
/*!****************************************************!*\
  !*** external "react-ionicons/lib/MdHeartOutline" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ionicons/lib/MdHeartOutline");

/***/ }),

/***/ "react-ionicons/lib/MdHome":
/*!********************************************!*\
  !*** external "react-ionicons/lib/MdHome" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ionicons/lib/MdHome");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=favourites.js.map