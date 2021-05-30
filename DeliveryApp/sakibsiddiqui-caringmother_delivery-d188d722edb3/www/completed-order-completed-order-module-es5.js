function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["completed-order-completed-order-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/completed-order/completed-order.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/completed-order/completed-order.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompletedOrderCompletedOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" style=\"height: 52px;\">\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"arrow-back\" routerLink=\"/home\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Completed Order</ion-title>\n\n    <ion-buttons slot=\"end\" tab=\"search\">\n      <ion-button style=\"margin-left: -60px;\" (click)=\"logout()\">\n        <ion-icon name=\"power\" style=\"font-size: 38px;\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\">\n\n  <ion-row > \n    <ion-col style=\"border-bottom: 1px solid #C6C6C6;margin-bottom:30px;\"></ion-col>\n    <ion-col> <h1 style=\"color: #C6C6C6;text-align: center;\">ORDERS</h1></ion-col>\n    <ion-col style=\"border-bottom: 1px solid #C6C6C6;margin-bottom:30px;\"></ion-col>\n   \n  </ion-row>\n\n\n  <ion-card *ngFor=\"let item of orderList\">\n\n    <ion-grid>\n      <ion-row class=\"order-row\">\n        <ion-col class=\"order-col\" style=\"font-weight: lighter;\">Order Id: <span style=\"font-weight: bolder;\">{{item.orderId}}</span></ion-col>\n      </ion-row>\n  \n      <ion-row class=\"order-title\">\n        <ion-col size=\"6\">Order Date</ion-col>\n        <ion-col size=\"6\" id=\"order-value\">{{item.orderDate}}</ion-col>\n        <ion-col size=\"6\">Order Status</ion-col>\n        <ion-col size=\"6\" id=\"order-value\" style=\"color: #1FCA1C;\">{{item.orderStatus}}</ion-col>\n        <ion-col size=\"6\">Item Count</ion-col>\n        <ion-col size=\"6\" id=\"order-value\">{{item.netQuantity}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  \n    <ion-row class=\"order-Final-title\">\n      <ion-col size=\"6\">Total Amount</ion-col>\n      <ion-col size=\"6\" id=\"order-value\">₹ {{item.oldTotal}}</ion-col>\n    </ion-row>\n\n    <ion-button color=\"primary\" class=\"button\" (click)= \"viewParticularOrder(item)\">View Order</ion-button>\n  </ion-card>\n\n\n  <ion-row > \n    <ng-container *ngIf=\"showNoOrder\">\n    <ion-col>\n      <ion-card>\n        <p>No Orders Available</p>\n      </ion-card>\n    </ion-col>\n\n  </ng-container>\n</ion-row>\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/completed-order/completed-order-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/completed-order/completed-order-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CompletedOrderPageRoutingModule */

  /***/
  function srcAppCompletedOrderCompletedOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompletedOrderPageRoutingModule", function () {
      return CompletedOrderPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _completed_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./completed-order.page */
    "./src/app/completed-order/completed-order.page.ts");

    var routes = [{
      path: '',
      component: _completed_order_page__WEBPACK_IMPORTED_MODULE_3__["CompletedOrderPage"]
    }];

    var CompletedOrderPageRoutingModule = function CompletedOrderPageRoutingModule() {
      _classCallCheck(this, CompletedOrderPageRoutingModule);
    };

    CompletedOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CompletedOrderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/completed-order/completed-order.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/completed-order/completed-order.module.ts ***!
    \***********************************************************/

  /*! exports provided: CompletedOrderPageModule */

  /***/
  function srcAppCompletedOrderCompletedOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompletedOrderPageModule", function () {
      return CompletedOrderPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _completed_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./completed-order-routing.module */
    "./src/app/completed-order/completed-order-routing.module.ts");
    /* harmony import */


    var _completed_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./completed-order.page */
    "./src/app/completed-order/completed-order.page.ts");

    var CompletedOrderPageModule = function CompletedOrderPageModule() {
      _classCallCheck(this, CompletedOrderPageModule);
    };

    CompletedOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _completed_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompletedOrderPageRoutingModule"]],
      declarations: [_completed_order_page__WEBPACK_IMPORTED_MODULE_6__["CompletedOrderPage"]]
    })], CompletedOrderPageModule);
    /***/
  },

  /***/
  "./src/app/completed-order/completed-order.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/completed-order/completed-order.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompletedOrderCompletedOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  --background:rgb(6, 15, 66);\n}\n\n.order-row {\n  color: white;\n  text-align: center;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-weight: bold;\n  font-family: Roboto;\n  margin-top: 10px;\n  border-bottom: 1px solid aquamarine;\n}\n\n.order-col {\n  color: white;\n  font-size: 18px;\n}\n\n.order-title {\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 17px;\n  color: #919090;\n  font-weight: bold;\n  padding-left: 15px;\n  padding-top: 6px;\n  border-bottom: 1px solid aquamarine;\n}\n\n.order-Final-title {\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 17px;\n  color: #fff;\n  font-weight: bold;\n  padding-left: 15px;\n  padding-top: 6px;\n}\n\n#order-value {\n  text-align: end;\n  padding-right: 15px;\n}\n\n.order-item {\n  color: white;\n  text-align: center;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-weight: bold;\n  font-family: Roboto;\n  margin-top: 10px;\n}\n\n#text-color {\n  color: white;\n}\n\n.button {\n  width: 100%;\n  height: 50px;\n  font-size: 18px;\n  font-family: Roboto;\n  color: white;\n  --border-radius: 0px;\n  padding: 0px;\n  margin-bottom: 0px;\n}\n\nion-card {\n  margin-top: 40px;\n  background: rgba(239, 239, 239, 0.12);\n  border-top-left-radius: 23px;\n  border-top-right-radius: 23px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  box-shadow: 5px 10px #1b1c29;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxldGVkLW9yZGVyL0Q6XFxQcm9qZWN0c1xcY29ubmVjdEJhemFyXFxEZWxpdmVyeUFwcFxcc2FraWJzaWRkaXF1aS1jYXJpbmdtb3RoZXJfZGVsaXZlcnktZDE4OGQ3MjJlZGIzL3NyY1xcYXBwXFxjb21wbGV0ZWQtb3JkZXJcXGNvbXBsZXRlZC1vcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBsZXRlZC1vcmRlci9jb21wbGV0ZWQtb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDQUo7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wbGV0ZWQtb3JkZXIvY29tcGxldGVkLW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcbiAgICAtLWJhY2tncm91bmQ6cmdiKDYsIDE1LCA2Nik7XG4gICAgfVxuXG5cbi5vcmRlci1yb3cge1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGFxdWFtYXJpbmU7XG4gIH1cbiAgXG4gIC5vcmRlci1jb2wge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gIC5vcmRlci10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjOTE5MDkwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBhcXVhbWFyaW5lO1xuICB9XG4gIC5vcmRlci1GaW5hbC10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xuICBcbiAgfVxuICBcbiAgI29yZGVyLXZhbHVlIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuICBcbiAgLm9yZGVyLWl0ZW0ge1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gICN0ZXh0LWNvbG9yIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIFxuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgMjM5LCAyMzksIDAuMTIpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIzcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7IFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICMxYjFjMjk7XG4gIH1cbiAgXG4gIFxuICBcbiAgIiwiLmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6cmdiKDYsIDE1LCA2Nik7XG59XG5cbi5vcmRlci1yb3cge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGFxdWFtYXJpbmU7XG59XG5cbi5vcmRlci1jb2wge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm9yZGVyLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjOTE5MDkwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYXF1YW1hcmluZTtcbn1cblxuLm9yZGVyLUZpbmFsLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4jb3JkZXItdmFsdWUge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5vcmRlci1pdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiN0ZXh0LWNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgMjM5LCAyMzksIDAuMTIpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyM3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiA1cHggMTBweCAjMWIxYzI5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/completed-order/completed-order.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/completed-order/completed-order.page.ts ***!
    \*********************************************************/

  /*! exports provided: CompletedOrderPage */

  /***/
  function srcAppCompletedOrderCompletedOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompletedOrderPage", function () {
      return CompletedOrderPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _universalapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../universalapi.service */
    "./src/app/universalapi.service.ts");
    /* harmony import */


    var _commom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../commom.service */
    "./src/app/commom.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/login/login.service.ts");

    var CompletedOrderPage = /*#__PURE__*/function () {
      function CompletedOrderPage(router, homePageApi, commom, loadingController, api) {
        _classCallCheck(this, CompletedOrderPage);

        this.router = router;
        this.homePageApi = homePageApi;
        this.commom = commom;
        this.loadingController = loadingController;
        this.api = api;
        this.showNoOrder = false;
      }

      _createClass(CompletedOrderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          window.addEventListener('online', function () {
            _this.router.navigateByUrl('/no-internet', {
              skipLocationChange: true
            }).then(function () {
              _this.router.navigate(['/home']);
            });
          });
        } // method to get the category details

      }, {
        key: "getOrderList",
        value: function getOrderList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loading, p;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 2:
                    loading = _context2.sent;
                    p = this.homePageApi.getClosedOrderList();
                    p.subscribe(function (res) {
                      _this2.orderList = res;
                    }, function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return loading.dismiss();

                              case 2:
                                if (error.status === 401) {
                                  this.router.navigate(['/login']);
                                }

                                if (error.status === 400) {
                                  this.showNoOrder = true;
                                }

                                if (error.status === 0) {
                                  this.router.navigate(['/no-internet']);
                                }

                              case 5:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getOrderList();
        }
      }, {
        key: "viewParticularOrder",
        value: function viewParticularOrder(item) {
          localStorage.setItem('vendorViewCart', JSON.stringify(item.orderId));
          this.router.navigate(['/order']);
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.commom.logout();

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return CompletedOrderPage;
    }();

    CompletedOrderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _universalapi_service__WEBPACK_IMPORTED_MODULE_2__["UniversalapiService"]
      }, {
        type: _commom_service__WEBPACK_IMPORTED_MODULE_3__["CommomService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
      }];
    };

    CompletedOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-completed-order',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./completed-order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/completed-order/completed-order.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./completed-order.page.scss */
      "./src/app/completed-order/completed-order.page.scss"))["default"]]
    })], CompletedOrderPage);
    /***/
  }
}]);
//# sourceMappingURL=completed-order-completed-order-module-es5.js.map