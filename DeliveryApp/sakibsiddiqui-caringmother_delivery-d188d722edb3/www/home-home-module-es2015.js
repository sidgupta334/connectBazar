(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"tertiary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button style=\"font-size:44px;margin-top: -6px;\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title class=\"home-ion-title\">Connect Bazar</ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"logout()\">\n                <ion-icon name=\"power\" style=\"font-size: 38px;\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content>\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-row>\n        <ion-col style=\"border-bottom: 1px solid #C6C6C6;margin-bottom:30px;\"></ion-col>\n        <ion-col>\n            <h1 style=\"color: #C6C6C6;text-align: center;\">ORDERS</h1>\n        </ion-col>\n        <ion-col style=\"border-bottom: 1px solid #C6C6C6;margin-bottom:30px;\"></ion-col>\n\n    </ion-row>\n\n\n    <ion-card *ngFor=\"let item of orderList\">\n\n        <ion-grid>\n            <ion-row class=\"order-row\">\n                <ion-col class=\"order-col\" style=\"font-weight: lighter;\">Order Id: <span style=\"font-weight: bolder;\">{{item.orderId}}</span></ion-col>\n            </ion-row>\n\n            <ion-row class=\"order-title\">\n                <ion-col size=\"6\">Order Date</ion-col>\n                <ion-col size=\"6\" id=\"order-value\">{{item.orderDate}}</ion-col>\n                <ion-col size=\"6\">Order Status</ion-col>\n                <ion-col size=\"6\" id=\"order-value\" style=\"color: #1FCA1C;\">{{item.orderStatus}}</ion-col>\n                <ion-col size=\"6\">Item Count</ion-col>\n                <ion-col size=\"6\" id=\"order-value\">{{item.netQuantity}}</ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-row class=\"order-Final-title\">\n            <ion-col size=\"6\">Total Amount</ion-col>\n            <ion-col size=\"6\" id=\"order-value\">₹ {{item.oldTotal}}</ion-col>\n        </ion-row>\n\n        <ion-button color=\"primary\" class=\"button\" (click)=\"viewParticularOrder(item)\">View Order</ion-button>\n    </ion-card>\n\n\n    <ion-row>\n        <ng-container *ngIf=\"showNoOrder\">\n            <ion-col>\n                <ion-card>\n                    <p>No Orders Available</p>\n                </ion-card>\n            </ion-col>\n\n        </ng-container>\n    </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");










let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        providers: [
            _login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background {\n  --background:rgb(6, 15, 66);\n}\n\nion-toolbar {\n  --min-height:70px!important;\n}\n\n.home-ion-title {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bolder;\n  font-size: 26px;\n  text-align: left;\n  margin-left: -22px;\n  color: #c6c6c6;\n}\n\np {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bolder;\n  font-size: 19px;\n  line-height: 22px;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  color: #C6C6C6;\n}\n\n.category-image {\n  border-radius: 50%;\n  height: 166px;\n  min-height: 150px;\n  max-height: 150px;\n  min-width: 154px;\n  max-width: 154px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.slider-image {\n  height: 230px;\n  min-height: 230px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media only screen and (max-width: 360px) {\n  .category-image {\n    border-radius: 50%;\n    min-height: 120px;\n    max-height: 120px;\n    min-width: 120px;\n    max-width: 120px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n  .home-ion-title {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: bolder;\n    font-size: 16px;\n    text-align: left;\n    color: #c6c6c6;\n  }\n}\n\n.order-row {\n  color: white;\n  text-align: center;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-weight: bold;\n  font-family: Roboto;\n  margin-top: 10px;\n  border-bottom: 1px solid aquamarine;\n}\n\n.order-col {\n  color: white;\n  font-size: 18px;\n}\n\n.order-title {\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 17px;\n  color: #919090;\n  font-weight: bold;\n  padding-left: 15px;\n  padding-top: 6px;\n  border-bottom: 1px solid aquamarine;\n}\n\n.order-Final-title {\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 17px;\n  color: #fff;\n  font-weight: bold;\n  padding-left: 15px;\n  padding-top: 6px;\n}\n\n#order-value {\n  text-align: end;\n  padding-right: 15px;\n}\n\n.order-item {\n  color: white;\n  text-align: center;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-weight: bold;\n  font-family: Roboto;\n  margin-top: 10px;\n}\n\n#text-color {\n  color: white;\n}\n\n.button {\n  width: 100%;\n  height: 50px;\n  font-size: 18px;\n  font-family: Roboto;\n  color: white;\n  --border-radius: 0px;\n  padding: 0px;\n  margin-bottom: 0px;\n}\n\nion-card {\n  margin-top: 40px;\n  background: rgba(239, 239, 239, 0.12);\n  border-top-left-radius: 23px;\n  border-top-right-radius: 23px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  box-shadow: 5px 10px #1b1c29;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJvamVjdHNcXGNvbm5lY3RCYXphclxcRGVsaXZlcnlBcHBcXHNha2lic2lkZGlxdWktY2FyaW5nbW90aGVyX2RlbGl2ZXJ5LWQxODhkNzIyZWRiMy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSwyQkFBQTtBQ0NBOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREtBO0VBQ0UsbUJBQUE7RUFDRixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQ0hBOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNMRjs7QURVQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDUEY7O0VEV0E7SUFDRSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDUkY7QUFDRjs7QURjQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ1pGOztBRGVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNaRjs7QURlQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDWkY7O0FEY0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNYRjs7QURlQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ1pGOztBRGVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1pGOztBRGVBO0VBQ0UsWUFBQTtBQ1pGOztBRGVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNaRjs7QURlQTtFQUNFLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuLS1iYWNrZ3JvdW5kOnJnYig2LCAxNSwgNjYpO1xufVxuXG5pb24tdG9vbGJhcntcbiAgICAtLW1pbi1oZWlnaHQ6NzBweCFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaG9tZS1pb24tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xuICAgIGNvbG9yOiAjYzZjNmM2O1xuICAgIFxuICB9XG5cblxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiBib2xkZXI7XG5mb250LXNpemU6IDE5cHg7XG5saW5lLWhlaWdodDogMjJweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbm1hcmdpbi1sZWZ0OiBhdXRvO1xubWFyZ2luLXJpZ2h0OiBhdXRvO1xuXG5jb2xvcjogI0M2QzZDNjtcblxufVxuXG4uY2F0ZWdvcnktaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7IFxuICBoZWlnaHQ6MTY2cHg7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgbWluLXdpZHRoOiAxNTRweDtcbiAgbWF4LXdpZHRoOiAxNTRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG5cbn1cblxuLnNsaWRlci1pbWFnZSB7XG4gIGhlaWdodDogMjMwcHg7XG4gIG1pbi1oZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG5cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcbiAgLmNhdGVnb3J5LWltYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgXG4gIH1cblxuICAuaG9tZS1pb24tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICNjNmM2YzY7XG4gICAgXG4gIH1cbn1cblxuXG5cbi5vcmRlci1yb3cge1xuICBjb2xvcjogd2hpdGU7IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYXF1YW1hcmluZTtcbn1cblxuLm9yZGVyLWNvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ub3JkZXItdGl0bGUge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICM5MTkwOTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBhcXVhbWFyaW5lO1xufVxuLm9yZGVyLUZpbmFsLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuXG59XG5cbiNvcmRlci12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm9yZGVyLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jdGV4dC1jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgMjM5LCAyMzksIDAuMTIpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyM3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4OyBcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggIzFiMWMyOTtcbn1cblxuXG5cbiIsIi5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOnJnYig2LCAxNSwgNjYpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tbWluLWhlaWdodDo3MHB4IWltcG9ydGFudDtcbn1cblxuLmhvbWUtaW9uLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMjJweDtcbiAgY29sb3I6ICNjNmM2YzY7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY29sb3I6ICNDNkM2QzY7XG59XG5cbi5jYXRlZ29yeS1pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxNjZweDtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBtaW4td2lkdGg6IDE1NHB4O1xuICBtYXgtd2lkdGg6IDE1NHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNsaWRlci1pbWFnZSB7XG4gIGhlaWdodDogMjMwcHg7XG4gIG1pbi1oZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmNhdGVnb3J5LWltYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgbWF4LWhlaWdodDogMTIwcHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5ob21lLWlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogI2M2YzZjNjtcbiAgfVxufVxuLm9yZGVyLXJvdyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYXF1YW1hcmluZTtcbn1cblxuLm9yZGVyLWNvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ub3JkZXItdGl0bGUge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICM5MTkwOTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBhcXVhbWFyaW5lO1xufVxuXG4ub3JkZXItRmluYWwtdGl0bGUge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbiNvcmRlci12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm9yZGVyLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3RleHQtY29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCAyMzksIDIzOSwgMC4xMik7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIzcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4ICMxYjFjMjk7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _universalapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../universalapi.service */ "./src/app/universalapi.service.ts");
/* harmony import */ var _commom_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commom.service */ "./src/app/commom.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");










let HomePage = class HomePage {
    constructor(alert, router, modalController, statusBar, homePageApi, commom, network, loadingController, api, platform) {
        this.alert = alert;
        this.router = router;
        this.modalController = modalController;
        this.statusBar = statusBar;
        this.homePageApi = homePageApi;
        this.commom = commom;
        this.network = network;
        this.loadingController = loadingController;
        this.api = api;
        this.platform = platform;
        this.showNoOrder = false;
        this.platform = platform;
    }
    ngOnInit() {
        window.addEventListener('online', () => {
            this.router.navigateByUrl('/no-internet', { skipLocationChange: true }).then(() => {
                this.router.navigate(['/home']);
            });
        });
    }
    doRefresh(event) {
        this.getOrderList();
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    // method to get the category details
    getOrderList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            const p = this.homePageApi.getOpenOrderList();
            p.subscribe(res => {
                this.orderList = res;
                //method to sort in ascending order
                this.orderList.sort((a, b) => parseFloat(a.orderId) - parseFloat(b.orderId));
                // get the status of cancelled
                for (let i = 0; i < this.orderList.length; i++) {
                    if (this.orderList[i].orderStatus === 'CANCELLED_COD' || this.orderList[i].orderStatus === 'CANCELLED_ONLINE') {
                        this.orderList[i].orderStatus = 'CANCELLED';
                    }
                }
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (error.status === 401) {
                    this.router.navigate(['/login']);
                }
                if (error.status === 400) {
                    this.showNoOrder = true;
                }
                if (error.status === 0) {
                    this.router.navigate(['/no-internet']);
                }
            }));
        });
    }
    ionViewWillEnter() {
        this.getOrderList();
    }
    viewParticularOrder(item) {
        localStorage.setItem('vendorViewCart', JSON.stringify(item.orderId));
        this.router.navigate(['/order']);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.commom.logout();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _universalapi_service__WEBPACK_IMPORTED_MODULE_6__["UniversalapiService"] },
    { type: _commom_service__WEBPACK_IMPORTED_MODULE_7__["CommomService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map