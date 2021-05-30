(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-start-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background\">\n\n    <img src=\"../../assets/icon.png\" alt=\"Connect Bazar\" />\n\n    <p>Connect Bazar</p>\n    <button color=\"primary\" routerLink=\"/login\">\n  Get Started\n</button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/start/start-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/start/start-routing.module.ts ***!
  \***********************************************/
/*! exports provided: StartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageRoutingModule", function() { return StartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.page */ "./src/app/start/start.page.ts");




const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"]
    }
];
let StartPageRoutingModule = class StartPageRoutingModule {
};
StartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StartPageRoutingModule);



/***/ }),

/***/ "./src/app/start/start.module.ts":
/*!***************************************!*\
  !*** ./src/app/start/start.module.ts ***!
  \***************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-routing.module */ "./src/app/start/start-routing.module.ts");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "./src/app/start/start.page.ts");







let StartPageModule = class StartPageModule {
};
StartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _start_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPageRoutingModule"]
        ],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
    })
], StartPageModule);



/***/ }),

/***/ "./src/app/start/start.page.scss":
/*!***************************************!*\
  !*** ./src/app/start/start.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  --background: url('background.png')0 0/100% 100% no-repeat;\n}\n\nimg {\n  height: 116px;\n  margin-top: 40%;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\np {\n  color: white;\n  text-align: center;\n  font-size: 62px;\n  margin-top: 22px;\n  font-family: DamionRegular;\n}\n\nbutton {\n  color: white;\n  height: 58px;\n  width: 80%;\n  font-size: 18px;\n  margin-left: 10%;\n  border-radius: 25px;\n  background: #6B00C2;\n  margin-top: 25%;\n}\n\n@media only screen and (max-width: 360px) {\n  p {\n    color: white;\n    text-align: center;\n    font-size: 46px;\n    margin-top: 22px;\n    font-family: DamionRegular;\n  }\n\n  button {\n    color: white;\n    height: 51px;\n    width: 80%;\n    font-size: 18px;\n    margin-left: 10%;\n    border-radius: 20px;\n    background: #6B00C2;\n    margin-top: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvRDpcXFByb2plY3RzXFxjb25uZWN0QmF6YXJcXERlbGl2ZXJ5QXBwXFxzYWtpYnNpZGRpcXVpLWNhcmluZ21vdGhlcl9kZWxpdmVyeS1kMTg4ZDcyMmVkYjMvc3JjXFxhcHBcXHN0YXJ0XFxzdGFydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0YXJ0L3N0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBEQUFBO0FDQ0o7O0FER0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FES0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNISjs7QURNQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsMEJBQUE7RUNITjs7RURPRTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VDSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFja2dyb3VuZC5wbmcpMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gICAgLy8gZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7IFxufVxuXG5pbWcge1xuICAgIGhlaWdodDogMTE2cHg7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcblxuIFxufVxuXG5wIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNjJweDtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBEYW1pb25SZWd1bGFyO1xuIFxufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDU4cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICM2QjAwQzI7XG4gICAgbWFyZ2luLXRvcDogMjUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IERhbWlvblJlZ3VsYXI7XG4gICAgIFxuICAgIH1cbiAgICBcbiAgICBidXR0b24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogNTFweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNkIwMEMyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNSU7XG4gICAgfSBcbn1cbiIsIi5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nKTAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDExNnB4O1xuICBtYXJnaW4tdG9wOiA0MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNjJweDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgZm9udC1mYW1pbHk6IERhbWlvblJlZ3VsYXI7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1OHB4O1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICM2QjAwQzI7XG4gIG1hcmdpbi10b3A6IDI1JTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBEYW1pb25SZWd1bGFyO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA1MXB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNkIwMEMyO1xuICAgIG1hcmdpbi10b3A6IDI1JTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/start/start.page.ts":
/*!*************************************!*\
  !*** ./src/app/start/start.page.ts ***!
  \*************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let StartPage = class StartPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
StartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/start/start.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start.page.scss */ "./src/app/start/start.page.scss")).default]
    })
], StartPage);



/***/ })

}]);
//# sourceMappingURL=start-start-module-es2015.js.map