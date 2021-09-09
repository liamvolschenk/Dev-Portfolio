webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/liamvolschenk1/Desktop/next.js-portfolio/components/Navbar.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n//a basic navbar component that allows users to easily to different pages on the site, the component will be imported and used on every page\n//importing the next link API and router to help with the routing and navigation\n\n //setting the titles and links for all of the nav items on the navbar\n\nfunction Navbar(_ref) {\n  var _this = this;\n\n  var router = _ref.router;\n  var navs = [{\n    text: 'Home',\n    href: '/'\n  }, {\n    text: 'Portfolio',\n    href: '/portfolio'\n  }, {\n    text: 'About',\n    href: '/about'\n  }, {\n    text: 'Contact',\n    href: '/contact'\n  }]; //creating a basic navbar, below is a function to map over all the nav variables created above\n  //some jsx styles are used below to style the component\n\n  return __jsx(\"div\", {\n    className: \"jsx-2429925962\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: \"jsx-2429925962\" + \" \" + \"navbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2429925962\" + \" \" + \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-2429925962\" + \" \" + \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 26\n    }\n  }, \"LV.\")), __jsx(\"ul\", {\n    className: \"jsx-2429925962\" + \" \" + \"nav-links\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, navs.map(function (nav) {\n    return __jsx(\"li\", {\n      className: \"jsx-2429925962\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: nav.href,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 19\n      }\n    }, __jsx(\"a\", {\n      className: \"jsx-2429925962\" + \" \" + \"nav-item \".concat(router.pathname == nav.href ? 'active' : ''),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 41\n      }\n    }, nav.text)));\n  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2429925962\",\n    __self: this\n  }, \"a[href].jsx-2429925962{color:#000;}.container.jsx-2429925962{width:100%;max-width:980px;margin-left:auto;margin-right:auto;}.navbar.jsx-2429925962{margin-top:20px;}.navbar.jsx-2429925962 .container.jsx-2429925962{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.navbar.jsx-2429925962 .logo.jsx-2429925962{font-size:28px;text-transform:uppercase;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;font-weight:500;-webkit-text-decoration:none;text-decoration:none;}@media screen and (max-width:800px){.navbar.jsx-2429925962 .logo.jsx-2429925962{padding-left:20px;}}.navbar.jsx-2429925962 .nav-links.jsx-2429925962{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:auto;list-style:none;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}@media screen and (max-width:800px){.navbar.jsx-2429925962 .nav-links.jsx-2429925962{padding:0;margin:20px auto;}}.navbar.jsx-2429925962 .nav-links.jsx-2429925962 .nav-item.jsx-2429925962{position:relative;display:inline-block;margin-left:20px;margin-right:20px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}@media screen and (max-width:800px){.navbar.jsx-2429925962 .nav-links.jsx-2429925962 .nav-item.jsx-2429925962{margin:0 5px !important;padding:0;font-size:14px;}}.navbar.jsx-2429925962 .nav-links.jsx-2429925962 .nav-item.active.jsx-2429925962{font-weight:700;}.navbar.jsx-2429925962 .nav-links.jsx-2429925962 .nav-item.jsx-2429925962:hover{opacity:0.5;}.navbar.jsx-2429925962 .nav-links.jsx-2429925962 .nav-item.active.jsx-2429925962:after{content:'';position:absolute;bottom:-10px;left:0;width:25px;height:2px;background-color:#000;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFtdm9sc2NoZW5rMS9EZXNrdG9wL25leHQuanMtcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QlMsQUFHc0IsQUFJQSxBQU9LLEFBSUgsQUFNRSxBQVNLLEFBS1AsQUFRRCxBQU1NLEFBVVEsQUFPVixBQUlKLEFBSUQsVUE5QlEsQ0EzQ3JCLEFBSWtCLEFBc0VFLENBSnBCLEdBakQyQixDQVYzQixBQXVEQSxFQXBDRSxBQW1CcUIsTUFVVCxHQXRESyxBQXVDakIsRUErQmEsS0FmSSxLQVZBLENBNUJFLEVBc0RaLEVBdEVXLEtBdURsQixBQWdCVyxPQTFCTyxJQTJCUCxFQXZFYixTQXdFd0IsR0FoRUgsQUFvQkYsQUFpQkksaUJBaEJMLEVBNENuQixjQTNDa0IsaUJBZ0JTLFNBOUJSLGdCQUNLLGVBY3ZCLEdBdEJpQixhQXNDakIsbUJBN0JBLHlCQVJBIiwiZmlsZSI6Ii9Vc2Vycy9saWFtdm9sc2NoZW5rMS9EZXNrdG9wL25leHQuanMtcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vYSBiYXNpYyBuYXZiYXIgY29tcG9uZW50IHRoYXQgYWxsb3dzIHVzZXJzIHRvIGVhc2lseSB0byBkaWZmZXJlbnQgcGFnZXMgb24gdGhlIHNpdGUsIHRoZSBjb21wb25lbnQgd2lsbCBiZSBpbXBvcnRlZCBhbmQgdXNlZCBvbiBldmVyeSBwYWdlXHJcbi8vaW1wb3J0aW5nIHRoZSBuZXh0IGxpbmsgQVBJIGFuZCByb3V0ZXIgdG8gaGVscCB3aXRoIHRoZSByb3V0aW5nIGFuZCBuYXZpZ2F0aW9uXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vL3NldHRpbmcgdGhlIHRpdGxlcyBhbmQgbGlua3MgZm9yIGFsbCBvZiB0aGUgbmF2IGl0ZW1zIG9uIHRoZSBuYXZiYXJcclxuZnVuY3Rpb24gTmF2YmFyKHsgcm91dGVyIH0pIHtcclxuICBjb25zdCBuYXZzID0gW1xyXG4gICAgeyB0ZXh0OiAnSG9tZScsIGhyZWY6ICcvJyB9LFxyXG4gICAgeyB0ZXh0OiAnUG9ydGZvbGlvJywgaHJlZjogJy9wb3J0Zm9saW8nIH0sXHJcbiAgICB7IHRleHQ6ICdBYm91dCcsIGhyZWY6ICcvYWJvdXQnIH0sXHJcbiAgICB7IHRleHQ6ICdDb250YWN0JywgaHJlZjogJy9jb250YWN0JyB9LFxyXG4gIF07XHJcblxyXG4gIC8vY3JlYXRpbmcgYSBiYXNpYyBuYXZiYXIsIGJlbG93IGlzIGEgZnVuY3Rpb24gdG8gbWFwIG92ZXIgYWxsIHRoZSBuYXYgdmFyaWFibGVzIGNyZWF0ZWQgYWJvdmVcclxuICAvL3NvbWUganN4IHN0eWxlcyBhcmUgdXNlZCBiZWxvdyB0byBzdHlsZSB0aGUgY29tcG9uZW50XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPVwibG9nb1wiPkxWLjwvYT48L0xpbms+XHJcblxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxyXG4gICAgICAgICAgICB7bmF2cy5tYXAobmF2ID0+IChcclxuICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj17bmF2LmhyZWZ9PjxhIGNsYXNzTmFtZT17YG5hdi1pdGVtICR7cm91dGVyLnBhdGhuYW1lID09IG5hdi5ocmVmID8gJ2FjdGl2ZScgOiAnJ31gfT57bmF2LnRleHR9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgYVtocmVmXSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogOTgwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubmF2YmFyIC5jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uYXZiYXIgLmxvZ28ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAubmF2YmFyIC5sb2dvIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdmJhciAubmF2LWxpbmtzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAubmF2YmFyIC5uYXYtbGlua3MgeyBcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uYXZiYXIgLm5hdi1saW5rcyAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAubmF2YmFyIC5uYXYtbGlua3MgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uYXZiYXIgLm5hdi1saW5rcyAubmF2LWl0ZW0uYWN0aXZlIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uYXZiYXIgLm5hdi1saW5rcyAubmF2LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubmF2YmFyIC5uYXYtbGlua3MgLm5hdi1pdGVtLmFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2YmFyKTsiXX0= */\\n/*@ sourceURL=/Users/liamvolschenk1/Desktop/next.js-portfolio/components/Navbar.jsx */\"));\n}\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"withRouter\"])(Navbar));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qc3g/NjM0ZCJdLCJuYW1lcyI6WyJOYXZiYXIiLCJyb3V0ZXIiLCJuYXZzIiwidGV4dCIsImhyZWYiLCJtYXAiLCJuYXYiLCJwYXRobmFtZSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxTQUFTQSxNQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzFCLE1BQU1DLElBQUksR0FBRyxDQUNYO0FBQUVDLFFBQUksRUFBRSxNQUFSO0FBQWdCQyxRQUFJLEVBQUU7QUFBdEIsR0FEVyxFQUVYO0FBQUVELFFBQUksRUFBRSxXQUFSO0FBQXFCQyxRQUFJLEVBQUU7QUFBM0IsR0FGVyxFQUdYO0FBQUVELFFBQUksRUFBRSxPQUFSO0FBQWlCQyxRQUFJLEVBQUU7QUFBdkIsR0FIVyxFQUlYO0FBQUVELFFBQUksRUFBRSxTQUFSO0FBQW1CQyxRQUFJLEVBQUU7QUFBekIsR0FKVyxDQUFiLENBRDBCLENBUTFCO0FBQ0E7O0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZTtBQUFBLHdDQUFhLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFmLENBREYsRUFHRTtBQUFBLHdDQUFjLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsV0FDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFQSxHQUFHLENBQUNGLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBc0I7QUFBQSw2REFBMEJILE1BQU0sQ0FBQ00sUUFBUCxJQUFtQkQsR0FBRyxDQUFDRixJQUF2QixHQUE4QixRQUE5QixHQUF5QyxFQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBFRSxHQUFHLENBQUNILElBQTlFLENBQXRCLENBQUosQ0FEVztBQUFBLEdBQVosQ0FESCxDQUhGLENBREYsQ0FERjtBQUFBO0FBQUE7QUFBQSxvMU9BREY7QUFzR0Q7O0tBaEhRSCxNO0FBa0hNLHFFQUFBUSw4REFBVSxDQUFDUixNQUFELENBQXpCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXZiYXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9hIGJhc2ljIG5hdmJhciBjb21wb25lbnQgdGhhdCBhbGxvd3MgdXNlcnMgdG8gZWFzaWx5IHRvIGRpZmZlcmVudCBwYWdlcyBvbiB0aGUgc2l0ZSwgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGltcG9ydGVkIGFuZCB1c2VkIG9uIGV2ZXJ5IHBhZ2VcclxuLy9pbXBvcnRpbmcgdGhlIG5leHQgbGluayBBUEkgYW5kIHJvdXRlciB0byBoZWxwIHdpdGggdGhlIHJvdXRpbmcgYW5kIG5hdmlnYXRpb25cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vc2V0dGluZyB0aGUgdGl0bGVzIGFuZCBsaW5rcyBmb3IgYWxsIG9mIHRoZSBuYXYgaXRlbXMgb24gdGhlIG5hdmJhclxyXG5mdW5jdGlvbiBOYXZiYXIoeyByb3V0ZXIgfSkge1xyXG4gIGNvbnN0IG5hdnMgPSBbXHJcbiAgICB7IHRleHQ6ICdIb21lJywgaHJlZjogJy8nIH0sXHJcbiAgICB7IHRleHQ6ICdQb3J0Zm9saW8nLCBocmVmOiAnL3BvcnRmb2xpbycgfSxcclxuICAgIHsgdGV4dDogJ0Fib3V0JywgaHJlZjogJy9hYm91dCcgfSxcclxuICAgIHsgdGV4dDogJ0NvbnRhY3QnLCBocmVmOiAnL2NvbnRhY3QnIH0sXHJcbiAgXTtcclxuXHJcbiAgLy9jcmVhdGluZyBhIGJhc2ljIG5hdmJhciwgYmVsb3cgaXMgYSBmdW5jdGlvbiB0byBtYXAgb3ZlciBhbGwgdGhlIG5hdiB2YXJpYWJsZXMgY3JlYXRlZCBhYm92ZVxyXG4gIC8vc29tZSBqc3ggc3R5bGVzIGFyZSB1c2VkIGJlbG93IHRvIHN0eWxlIHRoZSBjb21wb25lbnRcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJsb2dvXCI+TFYuPC9hPjwvTGluaz5cclxuXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XHJcbiAgICAgICAgICAgIHtuYXZzLm1hcChuYXYgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaT48TGluayBocmVmPXtuYXYuaHJlZn0+PGEgY2xhc3NOYW1lPXtgbmF2LWl0ZW0gJHtyb3V0ZXIucGF0aG5hbWUgPT0gbmF2LmhyZWYgPyAnYWN0aXZlJyA6ICcnfWB9PntuYXYudGV4dH08L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICBhW2hyZWZdIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uYXZiYXIgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5hdmJhciAubG9nbyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgIC5uYXZiYXIgLmxvZ28ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2YmFyIC5uYXYtbGlua3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgIC5uYXZiYXIgLm5hdi1saW5rcyB7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5hdmJhciAubmF2LWxpbmtzIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgIC5uYXZiYXIgLm5hdi1saW5rcyAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5hdmJhciAubmF2LWxpbmtzIC5uYXYtaXRlbS5hY3RpdmUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5hdmJhciAubmF2LWxpbmtzIC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uYXZiYXIgLm5hdi1saW5rcyAubmF2LWl0ZW0uYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMTBweDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXZiYXIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ })

})