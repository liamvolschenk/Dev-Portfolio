webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/styles.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/styles.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);\"]);\n// Module\nexports.push([module.i, \"/*some basic styles*/\\n\\nbody {\\n\\tfont-family: 'Roboto', sans-serif;\\n\\tfont-size: 18px;\\n}\\n\\na[href] {\\n\\tcolor: #000;\\n}\\n\\n.container {\\n\\twidth: 980px;\\n\\tmargin-left: auto;\\n\\tmargin-right: auto;\\n}\\n\\n.hero {\\n\\tpadding-top: 100px;\\n\\tpadding-bottom: 100px;\\n}\\n\\n.hero .container {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n}\\n\\n.hero .home-img {\\n\\twidth: 450px;\\n\\tposition: relative;\\n\\tbottom: 40px;\\n}\\n\\n.hero .text-wrapper {\\n\\twidth: 45%;\\n}\\n\\n.home-text {\\n\\tposition: relative;\\n\\tleft: 100px;\\n\\tbottom: 70px;\\n}\\n\\n.hero .text-wrapper.w-full {\\n\\twidth: 100%;\\n}\\n\\n.hero .text-wrapper .title {\\n\\tfont-size: 48px;\\n\\tmargin-top: 0;\\n\\tmargin-bottom: 10px;\\n}\\n\\n.hero .text-wrapper .description {\\n\\tfont-size: 22px;\\n\\tline-height: 40px;\\n}\\n\\n.hero .image-wrapper {\\n\\twidth: 50%;\\n\\ttext-align: right;\\n}\\n\\n.portfolio-wrapper .portfolio-item .portfolio-category a:hover {\\n\\tcolor: gray;\\n}\\n\\n.contact {\\n\\tposition: relative;\\n\\tbottom: 20px;\\n}\\n\\n.icon {\\n\\tpadding-right: 10px;\\n}\\n\\n.icon:hover {\\n\\tcolor: gray;\\n}\\n\\n.social-icons {\\n\\tposition: fixed;\\n\\ttop: 95%;\\n\\ttransform: translateY(-50%);\\n\\tmargin-left: 20px;\\n}\\n\\n.next-img {\\n\\twidth: 300px;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/liamvolschenk1/Desktop/School Tasks & Examples/next.js-portfolio/styles/styles.css\"],\"names\":[],\"mappings\":\"AAAA,oBAAoB;;AAIpB;CACC,iCAAiC;CACjC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,UAAU;CACV,iBAAiB;AAClB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,QAAQ;CAGR,2BAA2B;CAC3B,iBAAiB;AAClB;;AAEA;CACC,YAAY;AACb\",\"file\":\"styles.css\",\"sourcesContent\":[\"/*some basic styles*/\\n\\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\\n\\nbody {\\n\\tfont-family: 'Roboto', sans-serif;\\n\\tfont-size: 18px;\\n}\\n\\na[href] {\\n\\tcolor: #000;\\n}\\n\\n.container {\\n\\twidth: 980px;\\n\\tmargin-left: auto;\\n\\tmargin-right: auto;\\n}\\n\\n.hero {\\n\\tpadding-top: 100px;\\n\\tpadding-bottom: 100px;\\n}\\n\\n.hero .container {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n}\\n\\n.hero .home-img {\\n\\twidth: 450px;\\n\\tposition: relative;\\n\\tbottom: 40px;\\n}\\n\\n.hero .text-wrapper {\\n\\twidth: 45%;\\n}\\n\\n.home-text {\\n\\tposition: relative;\\n\\tleft: 100px;\\n\\tbottom: 70px;\\n}\\n\\n.hero .text-wrapper.w-full {\\n\\twidth: 100%;\\n}\\n\\n.hero .text-wrapper .title {\\n\\tfont-size: 48px;\\n\\tmargin-top: 0;\\n\\tmargin-bottom: 10px;\\n}\\n\\n.hero .text-wrapper .description {\\n\\tfont-size: 22px;\\n\\tline-height: 40px;\\n}\\n\\n.hero .image-wrapper {\\n\\twidth: 50%;\\n\\ttext-align: right;\\n}\\n\\n.portfolio-wrapper .portfolio-item .portfolio-category a:hover {\\n\\tcolor: gray;\\n}\\n\\n.contact {\\n\\tposition: relative;\\n\\tbottom: 20px;\\n}\\n\\n.icon {\\n\\tpadding-right: 10px;\\n}\\n\\n.icon:hover {\\n\\tcolor: gray;\\n}\\n\\n.social-icons {\\n\\tposition: fixed;\\n\\ttop: 95%;\\n\\t-webkit-transform: translateY(-50%);\\n\\t-ms-transform: translateY(-50%);\\n\\ttransform: translateY(-50%);\\n\\tmargin-left: 20px;\\n}\\n\\n.next-img {\\n\\twidth: 300px;\\n}\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVzLmNzcz9jNzIwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0EsY0FBYyxRQUFTLHdFQUF3RSxJQUFJLGtCQUFrQjtBQUNySDtBQUNBLGNBQWMsUUFBUyxrQ0FBa0Msc0NBQXNDLG9CQUFvQixHQUFHLGFBQWEsZ0JBQWdCLEdBQUcsZ0JBQWdCLGlCQUFpQixzQkFBc0IsdUJBQXVCLEdBQUcsV0FBVyx1QkFBdUIsMEJBQTBCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsR0FBRyxxQkFBcUIsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRyx5QkFBeUIsZUFBZSxHQUFHLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLGdDQUFnQyxnQkFBZ0IsR0FBRyxnQ0FBZ0Msb0JBQW9CLGtCQUFrQix3QkFBd0IsR0FBRyxzQ0FBc0Msb0JBQW9CLHNCQUFzQixHQUFHLDBCQUEwQixlQUFlLHNCQUFzQixHQUFHLG9FQUFvRSxnQkFBZ0IsR0FBRyxjQUFjLHVCQUF1QixpQkFBaUIsR0FBRyxXQUFXLHdCQUF3QixHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRyxtQkFBbUIsb0JBQW9CLGFBQWEsZ0NBQWdDLHNCQUFzQixHQUFHLGVBQWUsaUJBQWlCLEdBQUcsT0FBTyx3SkFBd0osTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSw0SUFBNEksSUFBSSxtQkFBbUIsVUFBVSxzQ0FBc0Msb0JBQW9CLEdBQUcsYUFBYSxnQkFBZ0IsR0FBRyxnQkFBZ0IsaUJBQWlCLHNCQUFzQix1QkFBdUIsR0FBRyxXQUFXLHVCQUF1QiwwQkFBMEIsR0FBRyxzQkFBc0Isa0JBQWtCLHdCQUF3QixHQUFHLHFCQUFxQixpQkFBaUIsdUJBQXVCLGlCQUFpQixHQUFHLHlCQUF5QixlQUFlLEdBQUcsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLEdBQUcsZ0NBQWdDLGdCQUFnQixHQUFHLGdDQUFnQyxvQkFBb0Isa0JBQWtCLHdCQUF3QixHQUFHLHNDQUFzQyxvQkFBb0Isc0JBQXNCLEdBQUcsMEJBQTBCLGVBQWUsc0JBQXNCLEdBQUcsb0VBQW9FLGdCQUFnQixHQUFHLGNBQWMsdUJBQXVCLGlCQUFpQixHQUFHLFdBQVcsd0JBQXdCLEdBQUcsaUJBQWlCLGdCQUFnQixHQUFHLG1CQUFtQixvQkFBb0IsYUFBYSx3Q0FBd0Msb0NBQW9DLGdDQUFnQyxzQkFBc0IsR0FBRyxlQUFlLGlCQUFpQixHQUFHLEdBQUc7QUFDcnpHO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL3N0eWxlcy9zdHlsZXMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKnNvbWUgYmFzaWMgc3R5bGVzKi9cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5hW2hyZWZdIHtcXG5cXHRjb2xvcjogIzAwMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDk4MHB4O1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmhlcm8ge1xcblxcdHBhZGRpbmctdG9wOiAxMDBweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi5oZXJvIC5jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8gLmhvbWUtaW1nIHtcXG5cXHR3aWR0aDogNDUwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogNDBweDtcXG59XFxuXFxuLmhlcm8gLnRleHQtd3JhcHBlciB7XFxuXFx0d2lkdGg6IDQ1JTtcXG59XFxuXFxuLmhvbWUtdGV4dCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxlZnQ6IDEwMHB4O1xcblxcdGJvdHRvbTogNzBweDtcXG59XFxuXFxuLmhlcm8gLnRleHQtd3JhcHBlci53LWZ1bGwge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVybyAudGV4dC13cmFwcGVyIC50aXRsZSB7XFxuXFx0Zm9udC1zaXplOiA0OHB4O1xcblxcdG1hcmdpbi10b3A6IDA7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmhlcm8gLnRleHQtd3JhcHBlciAuZGVzY3JpcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMjJweDtcXG5cXHRsaW5lLWhlaWdodDogNDBweDtcXG59XFxuXFxuLmhlcm8gLmltYWdlLXdyYXBwZXIge1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5wb3J0Zm9saW8td3JhcHBlciAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1jYXRlZ29yeSBhOmhvdmVyIHtcXG5cXHRjb2xvcjogZ3JheTtcXG59XFxuXFxuLmNvbnRhY3Qge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDIwcHg7XFxufVxcblxcbi5pY29uIHtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uaWNvbjpob3ZlciB7XFxuXFx0Y29sb3I6IGdyYXk7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDk1JTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFx0bWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5uZXh0LWltZyB7XFxuXFx0d2lkdGg6IDMwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbGlhbXZvbHNjaGVuazEvRGVza3RvcC9TY2hvb2wgVGFza3MgJiBFeGFtcGxlcy9uZXh0LmpzLXBvcnRmb2xpby9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7O0FBSXBCO0NBQ0MsaUNBQWlDO0NBQ2pDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFFBQVE7Q0FHUiwyQkFBMkI7Q0FDM0IsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsWUFBWTtBQUNiXCIsXCJmaWxlXCI6XCJzdHlsZXMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qc29tZSBiYXNpYyBzdHlsZXMqL1xcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmFbaHJlZl0ge1xcblxcdGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG5cXHR3aWR0aDogOTgwcHg7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaGVybyB7XFxuXFx0cGFkZGluZy10b3A6IDEwMHB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLmhlcm8gLmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVybyAuaG9tZS1pbWcge1xcblxcdHdpZHRoOiA0NTBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym90dG9tOiA0MHB4O1xcbn1cXG5cXG4uaGVybyAudGV4dC13cmFwcGVyIHtcXG5cXHR3aWR0aDogNDUlO1xcbn1cXG5cXG4uaG9tZS10ZXh0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMTAwcHg7XFxuXFx0Ym90dG9tOiA3MHB4O1xcbn1cXG5cXG4uaGVybyAudGV4dC13cmFwcGVyLnctZnVsbCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZXJvIC50ZXh0LXdyYXBwZXIgLnRpdGxlIHtcXG5cXHRmb250LXNpemU6IDQ4cHg7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGVybyAudGV4dC13cmFwcGVyIC5kZXNjcmlwdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcblxcdGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uaGVybyAuaW1hZ2Utd3JhcHBlciB7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHR0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnBvcnRmb2xpby13cmFwcGVyIC5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWNhdGVnb3J5IGE6aG92ZXIge1xcblxcdGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY29udGFjdCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogMjBweDtcXG59XFxuXFxuLmljb24ge1xcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5pY29uOmhvdmVyIHtcXG5cXHRjb2xvcjogZ3JheTtcXG59XFxuXFxuLnNvY2lhbC1pY29ucyB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogOTUlO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblxcdG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4ubmV4dC1pbWcge1xcblxcdHdpZHRoOiAzMDBweDtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/styles.css\n");

/***/ })

})