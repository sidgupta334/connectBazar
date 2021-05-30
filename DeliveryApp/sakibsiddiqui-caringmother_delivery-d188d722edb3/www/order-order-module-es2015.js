(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\" style=\"height: 52px;\">\n        <ion-buttons slot=\"start\">\n            <ion-icon name=\"arrow-back\" routerLink=\"/home\" style=\"margin-top: -10px;\"></ion-icon>\n        </ion-buttons>\n        <ion-title>Order</ion-title>\n\n        <ion-buttons slot=\"end\" tab=\"search\">\n            <ion-button style=\"margin-left:0px;margin-top: 1px;\" (click)=\"navigate()\">\n                <ion-icon name=\"navigate\" style=\"font-size: 34px;\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"appBackground\">\n    <ion-grid>\n        <ion-row class=\"order-row\">\n            <ion-col class=\"order-col\">Order ID: <span style=\"font-weight: bold;\">{{viewOrder?.orderId}}</span></ion-col>\n        </ion-row>\n\n        <ion-row class=\"order-title\">\n            <ion-col size=\"6\">Order Date</ion-col>\n            <ion-col size=\"6\" id=\"order-value\">{{viewOrder?.orderDate}}</ion-col>\n            <ion-col size=\"6\">Order Status</ion-col>\n            <ion-col size=\"6\" id=\"order-value\" style=\"color: #1FCA1C;\">{{viewOrder?.orderStatus}}</ion-col>\n            <ion-col size=\"6\">Item Count</ion-col>\n            <ion-col size=\"6\" id=\"order-value\">{{viewOrder?.netQuantity}}</ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-row class=\"order-item\">\n        <ion-col class=\"order-col\">ORDER ITEMS :</ion-col>\n    </ion-row>\n\n    <ion-card *ngFor='let item of viewOrder?.products'>\n        <ion-row style=\"border-bottom: 1px solid aquamarine;\">\n            <ion-col size=\"3\">\n                <img [src]=\"item.url\" alt=\"caringMother\" />\n            </ion-col>\n\n            <ion-col size=\"7\">\n                <p>{{item.productName}} <span>({{item.brand}}) </span>\n                </p>\n\n                <div style=\"margin-top: 25px;\">\n                    <p><span><del>₹{{item.oldPrice}}</del></span> <span style=\"margin-left: 15px;\"> ₹ {{item.newPrice}} ×\n              {{item.quantity}} </span>\n                    </p>\n                </div>\n            </ion-col>\n\n            <ion-col>\n                <p style=\"text-align: end;padding-right: 10px;\">₹ {{item.total}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n<div style=\"background-color: rgb(6, 15, 66);\">\n\n    <ion-row class=\"order-total\" id=\"text-color\">\n\n        <ng-container *ngIf=\"viewOrder?.orderStatus === 'DELIVERED'\">\n            <ion-col size=\"6\">Status</ion-col>\n            <ion-col size=\"6\" id=\"order-value\" style=\"color: #1FCA1C;\">{{viewOrder?.orderStatus}}</ion-col>\n        </ng-container>\n\n        <ng-container *ngIf=\"viewOrder?.orderStatus === 'CANCELLED'\">\n            <ion-col size=\"6\">Status</ion-col>\n            <ion-col size=\"6\" id=\"order-value\" style=\"color: red;\">{{viewOrder?.orderStatus}}</ion-col>\n        </ng-container>\n        <ng-container *ngIf=\"viewOrder?.orderStatus === 'COMPLETED'\">\n            <ion-col size=\"6\">Status</ion-col>\n            <ion-col size=\"6\" id=\"order-value\" style=\"color: #1FCA1C;\">{{viewOrder?.orderStatus}}</ion-col>\n        </ng-container>\n\n\n        <ion-col size=\"6\">Total Amount</ion-col>\n        <ion-col size=\"6\" id=\"order-value\">₹ {{viewOrder?.oldTotal}}</ion-col>\n        <ion-col size=\"6\">Discount Received</ion-col>\n        <ion-col size=\"6\" id=\"order-value\" style=\"color: #cabe1c;\">₹ {{ viewOrder?.discountReceived}}</ion-col>\n        <ion-col size=\"6\">Net Amount</ion-col>\n        <ion-col size=\"6\" id=\"order-value\">₹ {{viewOrder?.netAmount - viewOrder?.serviceCharge}}</ion-col>\n        <ion-col size=\"6\">Discount Applied</ion-col>\n        <ion-col size=\"6\" id=\"order-value\" style=\"color: #1FCA1C;\">₹ {{viewOrder?.discountApplied}}</ion-col>\n        <ion-col size=\"6\">Service Charge</ion-col>\n        <ion-col size=\"6\" id=\"order-value\" style=\"color: #1FCA1C;\">₹ {{viewOrder?.serviceCharge}}</ion-col>\n\n        <ion-col size=\"6\" style=\"font-weight: bold;\">Final Amount</ion-col>\n        <ion-col size=\"6\" style=\"font-weight: bold;\" id=\"order-value\">₹ {{viewOrder?.finalTotal}}</ion-col>\n\n    </ion-row>\n\n    <ng-container *ngIf=\"viewOrder?.orderStatus === 'ORDERED'\">\n        <button class=\"button\"> Cancel Order</button>\n    </ng-container>\n\n    <ng-container *ngIf=\"viewOrder?.orderStatus === 'CONFIRMED'\">\n        <button class=\"button\" (click)=\"orderDelivered(viewOrder)\"> Mark Deliver</button>\n    </ng-container>\n\n</div>");

/***/ }),

/***/ "./src/app/order/order-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/*! exports provided: OrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageRoutingModule", function() { return OrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.page */ "./src/app/order/order.page.ts");




const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_3__["OrderPage"]
    }
];
let OrderPageRoutingModule = class OrderPageRoutingModule {
};
OrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderPageRoutingModule);



/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/order/order-routing.module.ts");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order.page */ "./src/app/order/order.page.ts");









let OrderPageModule = class OrderPageModule {
};
OrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_7__["OrderPageRoutingModule"]
        ],
        providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_8__["OrderPage"]]
    })
], OrderPageModule);



/***/ }),

/***/ "./src/app/order/order.page.scss":
/*!***************************************!*\
  !*** ./src/app/order/order.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bolder;\n  font-size: 26px;\n  text-align: left;\n  color: #c6c6c6;\n  margin-top: -12px;\n}\n\n.order-row {\n  color: white;\n  text-align: center;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-weight: bold;\n  font-family: Roboto;\n  margin-top: 10px;\n  border-bottom: 2px solid aquamarine;\n}\n\n.order-col {\n  color: white;\n  font-size: 22px;\n  font-weight: normal;\n}\n\n.order-title {\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 17px;\n  color: #919090;\n  font-weight: bold;\n  padding-left: 15px;\n  padding-top: 6px;\n  border-bottom: 2px solid aquamarine;\n}\n\n#order-value {\n  text-align: end;\n  padding-right: 15px;\n}\n\n.order-item {\n  color: white;\n  text-align: center;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-weight: bold;\n  font-family: Roboto;\n  margin-top: 10px;\n}\n\n#text-color {\n  color: white;\n}\n\n.button {\n  width: 90%;\n  margin-left: 5%;\n  border-radius: 15px;\n  height: 50px;\n  font-size: 20px;\n  font-family: Roboto;\n  color: white;\n  font-weight: bold;\n  background-color: #6B00C2;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\n#label {\n  background-color: transparent;\n  text-align: center;\n}\n\nion-card {\n  background-color: rgba(239, 239, 239, 0.12);\n  border-radius: 15px;\n}\n\nimg {\n  width: 30px;\n  width: 95px;\n  height: 95px;\n  padding: 4px;\n  border-radius: 15px;\n}\n\np {\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 16px;\n  color: #C3C3C3;\n}\n\n.order-total {\n  font-family: Roboto;\n  font-style: normal;\n  font-size: 17px;\n  color: #919090;\n  font-weight: bold;\n  padding-left: 15px;\n  padding-top: 6px;\n}\n\n@media only screen and (max-width: 360px) {\n  ion-title {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: bolder;\n    font-size: 20px;\n    line-height: 30px;\n    color: #c6c6c6;\n    margin-left: -10px;\n    margin-bottom: 3px;\n  }\n\n  .cus-ion-buttons {\n    position: absolute;\n    right: 20px;\n    top: -30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvRDpcXFByb2plY3RzXFxjb25uZWN0QmF6YXJcXERlbGl2ZXJ5QXBwXFxzYWtpYnNpZGRpcXVpLWNhcmluZ21vdGhlcl9kZWxpdmVyeS1kMTg4ZDcyMmVkYjMvc3JjXFxhcHBcXG9yZGVyXFxvcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVyL29yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkNBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDQTs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRElBO0VBQ0U7SUFDSSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQ0RKOztFRE9FO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQ0pKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2M2YzZjNjtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG59XG5cbi5vcmRlci1yb3cge1xuICBjb2xvcjogd2hpdGU7IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYXF1YW1hcmluZTtcbn1cblxuLm9yZGVyLWNvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ub3JkZXItdGl0bGUge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICM5MTkwOTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xufVxuXG4jb3JkZXItdmFsdWUge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5vcmRlci1pdGVtIHtcbiAgY29sb3I6IHdoaXRlOyBcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3RleHQtY29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkIwMEMyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuI2xhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjM5LCAyMzksIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMzBweDtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogOTVweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5wIHtcbmZvbnQtZmFtaWx5OiBSb2JvdG87XG5mb250LXdlaWdodDogYm9sZDtcbmZvbnQtc2l6ZTogMTZweDtcbmNvbG9yOiAjQzNDM0MzO1xufVxuXG4ub3JkZXItdG90YWwge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICM5MTkwOTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG5cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PW1lZGlhIHF1ZXJ5IGNzcyBmb3Igc21hbGwgZGV2aWNlcyA9PT09PT09PT09PT09PT0vL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCl7XG4gIGlvbi10aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgY29sb3I6ICNjNmM2YzY7XG4gICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIH1cbiAgXG4gIFxuXG5cbiAgICAuY3VzLWlvbi1idXR0b25zIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAtMzBweDtcbiAgICB9XG4gICAgXG4gXG5cbn0iLCJpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNjNmM2YzY7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xufVxuXG4ub3JkZXItcm93IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBhcXVhbWFyaW5lO1xufVxuXG4ub3JkZXItY29sIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5vcmRlci10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzkxOTA5MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGFxdWFtYXJpbmU7XG59XG5cbiNvcmRlci12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm9yZGVyLWl0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3RleHQtY29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkIwMEMyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM5LCAyMzksIDIzOSwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiA5NXB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0MzQzNDMztcbn1cblxuLm9yZGVyLXRvdGFsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjOTE5MDkwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIGlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICNjNmM2YzY7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgfVxuXG4gIC5jdXMtaW9uLWJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB0b3A6IC0zMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/order/order.page.ts":
/*!*************************************!*\
  !*** ./src/app/order/order.page.ts ***!
  \*************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _commom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commom.service */ "./src/app/commom.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _universalapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../universalapi.service */ "./src/app/universalapi.service.ts");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");









let OrderPage = class OrderPage {
    constructor(common, geolocation, api, launch, loadingController, router, nativeGeocoder) {
        this.common = common;
        this.geolocation = geolocation;
        this.api = api;
        this.launch = launch;
        this.loadingController = loadingController;
        this.router = router;
        this.nativeGeocoder = nativeGeocoder;
    }
    ngOnInit() { }
    getProductList() {
        const p = this.api.getOrderVendor(this.id);
        p.subscribe(res => {
            this.viewOrder = res;
            // get the status of cancelled
            if (this.viewOrder.orderStatus === 'CANCELLED_COD' ||
                this.viewOrder.orderStatus === 'CANCELLED_ONLINE') {
                this.viewOrder.orderStatus = 'CANCELLED';
            }
            this.viewOrder.discountReceived =
                this.viewOrder.oldTotal -
                    (this.viewOrder.finalTotal + this.viewOrder.discountApplied);
            this.viewOrder.netAmount =
                this.viewOrder.oldTotal - this.viewOrder.discountReceived;
            for (let i = 0; i < this.viewOrder.products.length; i++) {
                // calc total of particular product
                this.viewOrder.products[i].total =
                    this.viewOrder.products[i].newPrice *
                        this.viewOrder.products[i].quantity;
                // calc the discount on each product
                this.viewOrder.products[i].discount =
                    this.viewOrder.products[i].oldPrice *
                        this.viewOrder.products[i].quantity -
                        this.viewOrder.products[i].total;
                // calc the total discount of product list
                // this.viewOrder.totalDiscount =
                //   this.viewOrder.totalDiscount + this.viewOrder.products[i].discount;
                // this.viewOrder.totalAmount =
                //   this.viewOrder.oldTotal - this.viewOrder.totalDiscount;
            }
        });
    }
    ionViewWillEnter() {
        this.id = JSON.parse(localStorage.getItem('vendorViewCart'));
        this.getProductList();
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.common.logout();
        });
    }
    navigate() {
        const options = {
            // start:  '' + this.latitude + ',' + this.longitude + ',ON' ,
            app: this.launch.APP.MAPS,
        };
        this.launch
            .navigate('' + this.viewOrder.lattitude + ',' + this.viewOrder.longitude + ',ON', options)
            .then(success => console.log('Launched navigator'), error => console.log('Error launching navigator', error));
    }
    orderDelivered(item) {
        const p = this.api.markDelivered(item.orderId);
        p.subscribe(res => {
            this.common.presentToast('Order Deliverd');
            this.getProductList();
        }, error => {
            this.common.presentToast('Something Went Wrong');
        });
    }
};
OrderPage.ctorParameters = () => [
    { type: _commom_service__WEBPACK_IMPORTED_MODULE_2__["CommomService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _universalapi_service__WEBPACK_IMPORTED_MODULE_5__["UniversalapiService"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_6__["LaunchNavigator"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"] }
];
OrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order.page.scss */ "./src/app/order/order.page.scss")).default]
    })
], OrderPage);



/***/ })

}]);
//# sourceMappingURL=order-order-module-es2015.js.map