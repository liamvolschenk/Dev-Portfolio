webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/styles.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/styles.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap);\"]);\n// Module\nexports.push([module.i, \"/*some basic styles*/\\n\\nbody {\\n\\tfont-family: 'Roboto', sans-serif;\\n\\tfont-size: 18px;\\n}\\n\\na[href] {\\n\\tcolor: #000;\\n}\\n\\n.container {\\n\\twidth: 980px;\\n\\tmargin-left: auto;\\n\\tmargin-right: auto;\\n}\\n\\n.hero {\\n\\tpadding-top: 100px;\\n\\tpadding-bottom: 100px;\\n}\\n\\n.hero .container {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n}\\n\\n.hero .home-img {\\n\\twidth: 450px;\\n\\tposition: relative;\\n\\tbottom: 40px;\\n}\\n\\n.hero .text-wrapper {\\n\\twidth: 45%;\\n}\\n\\n.home-text {\\n\\tposition: relative;\\n\\tleft: 100px;\\n\\tbottom: 70px;\\n}\\n\\n.hero .text-wrapper.w-full {\\n\\twidth: 100%;\\n}\\n\\n.hero .text-wrapper .title {\\n\\tfont-size: 48px;\\n\\tmargin-top: 0;\\n\\tmargin-bottom: 10px;\\n}\\n\\n.hero .text-wrapper .description {\\n\\tfont-size: 22px;\\n\\tline-height: 40px;\\n}\\n\\n.hero .image-wrapper {\\n\\twidth: 50%;\\n\\ttext-align: right;\\n}\\n\\n.portfolio-wrapper .portfolio-item .portfolio-category a:hover {\\n\\tcolor: gray;\\n}\\n\\n.contact {\\n\\tposition: relative;\\n\\tbottom: 20px;\\n}\\n\\n.icon {\\n\\tpadding-right: 10px;\\n}\\n\\n.icon:hover {\\n\\tcolor: gray;\\n}\\n\\n.social-icons {\\n\\tposition: fixed;\\n\\ttop: 95%;\\n\\ttransform: translateY(-50%);\\n\\tmargin-left: 20px;\\n}\\n\\n.social-icons a {\\n\\theight: 50px;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/liamvolschenk1/Desktop/next.js-portfolio/styles/styles.css\"],\"names\":[],\"mappings\":\"AAAA,oBAAoB;;AAIpB;CACC,iCAAiC;CACjC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,UAAU;CACV,iBAAiB;AAClB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,QAAQ;CAGR,2BAA2B;CAC3B,iBAAiB;AAClB;;AAEA;CACC,YAAY;AACb\",\"file\":\"styles.css\",\"sourcesContent\":[\"/*some basic styles*/\\n\\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');\\n\\nbody {\\n\\tfont-family: 'Roboto', sans-serif;\\n\\tfont-size: 18px;\\n}\\n\\na[href] {\\n\\tcolor: #000;\\n}\\n\\n.container {\\n\\twidth: 980px;\\n\\tmargin-left: auto;\\n\\tmargin-right: auto;\\n}\\n\\n.hero {\\n\\tpadding-top: 100px;\\n\\tpadding-bottom: 100px;\\n}\\n\\n.hero .container {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n}\\n\\n.hero .home-img {\\n\\twidth: 450px;\\n\\tposition: relative;\\n\\tbottom: 40px;\\n}\\n\\n.hero .text-wrapper {\\n\\twidth: 45%;\\n}\\n\\n.home-text {\\n\\tposition: relative;\\n\\tleft: 100px;\\n\\tbottom: 70px;\\n}\\n\\n.hero .text-wrapper.w-full {\\n\\twidth: 100%;\\n}\\n\\n.hero .text-wrapper .title {\\n\\tfont-size: 48px;\\n\\tmargin-top: 0;\\n\\tmargin-bottom: 10px;\\n}\\n\\n.hero .text-wrapper .description {\\n\\tfont-size: 22px;\\n\\tline-height: 40px;\\n}\\n\\n.hero .image-wrapper {\\n\\twidth: 50%;\\n\\ttext-align: right;\\n}\\n\\n.portfolio-wrapper .portfolio-item .portfolio-category a:hover {\\n\\tcolor: gray;\\n}\\n\\n.contact {\\n\\tposition: relative;\\n\\tbottom: 20px;\\n}\\n\\n.icon {\\n\\tpadding-right: 10px;\\n}\\n\\n.icon:hover {\\n\\tcolor: gray;\\n}\\n\\n.social-icons {\\n\\tposition: fixed;\\n\\ttop: 95%;\\n\\t-webkit-transform: translateY(-50%);\\n\\t-ms-transform: translateY(-50%);\\n\\ttransform: translateY(-50%);\\n\\tmargin-left: 20px;\\n}\\n\\n.social-icons a {\\n\\theight: 50px;\\n}\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVzLmNzcz9jNzIwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0EsY0FBYyxRQUFTLHdFQUF3RSxJQUFJLGtCQUFrQjtBQUNySDtBQUNBLGNBQWMsUUFBUyxrQ0FBa0Msc0NBQXNDLG9CQUFvQixHQUFHLGFBQWEsZ0JBQWdCLEdBQUcsZ0JBQWdCLGlCQUFpQixzQkFBc0IsdUJBQXVCLEdBQUcsV0FBVyx1QkFBdUIsMEJBQTBCLEdBQUcsc0JBQXNCLGtCQUFrQix3QkFBd0IsR0FBRyxxQkFBcUIsaUJBQWlCLHVCQUF1QixpQkFBaUIsR0FBRyx5QkFBeUIsZUFBZSxHQUFHLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLGdDQUFnQyxnQkFBZ0IsR0FBRyxnQ0FBZ0Msb0JBQW9CLGtCQUFrQix3QkFBd0IsR0FBRyxzQ0FBc0Msb0JBQW9CLHNCQUFzQixHQUFHLDBCQUEwQixlQUFlLHNCQUFzQixHQUFHLG9FQUFvRSxnQkFBZ0IsR0FBRyxjQUFjLHVCQUF1QixpQkFBaUIsR0FBRyxXQUFXLHdCQUF3QixHQUFHLGlCQUFpQixnQkFBZ0IsR0FBRyxtQkFBbUIsb0JBQW9CLGFBQWEsZ0NBQWdDLHNCQUFzQixHQUFHLHFCQUFxQixpQkFBaUIsR0FBRyxPQUFPLGdJQUFnSSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLDRJQUE0SSxJQUFJLG1CQUFtQixVQUFVLHNDQUFzQyxvQkFBb0IsR0FBRyxhQUFhLGdCQUFnQixHQUFHLGdCQUFnQixpQkFBaUIsc0JBQXNCLHVCQUF1QixHQUFHLFdBQVcsdUJBQXVCLDBCQUEwQixHQUFHLHNCQUFzQixrQkFBa0Isd0JBQXdCLEdBQUcscUJBQXFCLGlCQUFpQix1QkFBdUIsaUJBQWlCLEdBQUcseUJBQXlCLGVBQWUsR0FBRyxnQkFBZ0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRyxnQ0FBZ0MsZ0JBQWdCLEdBQUcsZ0NBQWdDLG9CQUFvQixrQkFBa0Isd0JBQXdCLEdBQUcsc0NBQXNDLG9CQUFvQixzQkFBc0IsR0FBRywwQkFBMEIsZUFBZSxzQkFBc0IsR0FBRyxvRUFBb0UsZ0JBQWdCLEdBQUcsY0FBYyx1QkFBdUIsaUJBQWlCLEdBQUcsV0FBVyx3QkFBd0IsR0FBRyxpQkFBaUIsZ0JBQWdCLEdBQUcsbUJBQW1CLG9CQUFvQixhQUFhLHdDQUF3QyxvQ0FBb0MsZ0NBQWdDLHNCQUFzQixHQUFHLHFCQUFxQixpQkFBaUIsR0FBRyxHQUFHO0FBQ3p5RztBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9zdHlsZXMvc3R5bGVzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypzb21lIGJhc2ljIHN0eWxlcyovXFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuYVtocmVmXSB7XFxuXFx0Y29sb3I6ICMwMDA7XFxufVxcblxcbi5jb250YWluZXIge1xcblxcdHdpZHRoOiA5ODBweDtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5oZXJvIHtcXG5cXHRwYWRkaW5nLXRvcDogMTAwcHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4uaGVybyAuY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZXJvIC5ob21lLWltZyB7XFxuXFx0d2lkdGg6IDQ1MHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDQwcHg7XFxufVxcblxcbi5oZXJvIC50ZXh0LXdyYXBwZXIge1xcblxcdHdpZHRoOiA0NSU7XFxufVxcblxcbi5ob21lLXRleHQge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OiAxMDBweDtcXG5cXHRib3R0b206IDcwcHg7XFxufVxcblxcbi5oZXJvIC50ZXh0LXdyYXBwZXIudy1mdWxsIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlcm8gLnRleHQtd3JhcHBlciAudGl0bGUge1xcblxcdGZvbnQtc2l6ZTogNDhweDtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcblxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5oZXJvIC50ZXh0LXdyYXBwZXIgLmRlc2NyaXB0aW9uIHtcXG5cXHRmb250LXNpemU6IDIycHg7XFxuXFx0bGluZS1oZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5oZXJvIC5pbWFnZS13cmFwcGVyIHtcXG5cXHR3aWR0aDogNTAlO1xcblxcdHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ucG9ydGZvbGlvLXdyYXBwZXIgLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8tY2F0ZWdvcnkgYTpob3ZlciB7XFxuXFx0Y29sb3I6IGdyYXk7XFxufVxcblxcbi5jb250YWN0IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym90dG9tOiAyMHB4O1xcbn1cXG5cXG4uaWNvbiB7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmljb246aG92ZXIge1xcblxcdGNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc29jaWFsLWljb25zIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiA5NSU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblxcdG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uc29jaWFsLWljb25zIGEge1xcblxcdGhlaWdodDogNTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2xpYW12b2xzY2hlbmsxL0Rlc2t0b3AvbmV4dC5qcy1wb3J0Zm9saW8vc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0JBQW9COztBQUlwQjtDQUNDLGlDQUFpQztDQUNqQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixRQUFRO0NBR1IsMkJBQTJCO0NBQzNCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFlBQVk7QUFDYlwiLFwiZmlsZVwiOlwic3R5bGVzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKnNvbWUgYmFzaWMgc3R5bGVzKi9cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5hW2hyZWZdIHtcXG5cXHRjb2xvcjogIzAwMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDk4MHB4O1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmhlcm8ge1xcblxcdHBhZGRpbmctdG9wOiAxMDBweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbi5oZXJvIC5jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8gLmhvbWUtaW1nIHtcXG5cXHR3aWR0aDogNDUwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogNDBweDtcXG59XFxuXFxuLmhlcm8gLnRleHQtd3JhcHBlciB7XFxuXFx0d2lkdGg6IDQ1JTtcXG59XFxuXFxuLmhvbWUtdGV4dCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxlZnQ6IDEwMHB4O1xcblxcdGJvdHRvbTogNzBweDtcXG59XFxuXFxuLmhlcm8gLnRleHQtd3JhcHBlci53LWZ1bGwge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVybyAudGV4dC13cmFwcGVyIC50aXRsZSB7XFxuXFx0Zm9udC1zaXplOiA0OHB4O1xcblxcdG1hcmdpbi10b3A6IDA7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmhlcm8gLnRleHQtd3JhcHBlciAuZGVzY3JpcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMjJweDtcXG5cXHRsaW5lLWhlaWdodDogNDBweDtcXG59XFxuXFxuLmhlcm8gLmltYWdlLXdyYXBwZXIge1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5wb3J0Zm9saW8td3JhcHBlciAucG9ydGZvbGlvLWl0ZW0gLnBvcnRmb2xpby1jYXRlZ29yeSBhOmhvdmVyIHtcXG5cXHRjb2xvcjogZ3JheTtcXG59XFxuXFxuLmNvbnRhY3Qge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDIwcHg7XFxufVxcblxcbi5pY29uIHtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uaWNvbjpob3ZlciB7XFxuXFx0Y29sb3I6IGdyYXk7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDk1JTtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG5cXHRtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnNvY2lhbC1pY29ucyBhIHtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/styles.css\n");

/***/ })

})