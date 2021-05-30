function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\" style=\"height: 52px;\">\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"arrow-back\" routerLink=\"/home\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n\n    <ion-buttons slot=\"end\" tab=\"search\">\n      <ion-button style=\"margin-left: -60px;\" (click)=\"logout()\">\n        <ion-icon name=\"power\" style=\"font-size: 38px;\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"appBackground\">\n  <ng-container *ngIf=\"showProfile; then show\"></ng-container>\n  <ng-container *ngIf=\"!showProfile; then editForm\"></ng-container>\n  <ng-template #show>\n    <h1>View Your Profile</h1>\n    <ion-card style=\"margin-top: 25px;\">\n      <div class=\"nameCol\">\n        <p>{{this.letter}}</p>\n      </div>\n      <ion-list>\n        <ion-item>\n          <ion-label\n            style=\"color: #a4a4a4; font-size: 20px; font-family: Roboto;\"\n            >Name:\n            <span style=\"font-weight: bolder;\"\n              >{{this.user?.fullName}}</span\n            ></ion-label\n          >\n        </ion-item>\n        <ion-item>\n          <ion-label\n            style=\"color: #a4a4a4; font-size: 20px; font-family: Roboto;\"\n            >DOB:\n            <span style=\"font-weight: bolder;\"\n              >{{this.user?.dob}}</span\n            ></ion-label\n          >\n        </ion-item>\n        <ion-item>\n          <ion-label\n            style=\"color: #a4a4a4; font-size: 20px; font-family: Roboto;\"\n            >Email Id:\n            <span style=\"font-weight: bolder;\"\n              >{{this.user?.email}}</span\n            ></ion-label\n          >\n        </ion-item>\n        <ion-item>\n          <ion-label\n            style=\"color: #a4a4a4; font-size: 20px; font-family: Roboto;\"\n            >Phone No:\n            <span style=\"font-weight: bolder;\"\n              >{{this.user?.mobile}}</span\n            ></ion-label\n          >\n        </ion-item>\n        <ion-item>\n          <ion-label\n            style=\"color: #a4a4a4; font-size: 20px; font-family: Roboto;\"\n            >Gender:\n            <span style=\"font-weight: bolder;\"\n              >{{this.user?.gender}}</span\n            ></ion-label\n          >\n        </ion-item>\n      </ion-list>\n    </ion-card>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"editProfile()\">\n        <img\n          src=\"../../assets/edit.png\"\n          style=\"color: white; font-weight: bold;\"\n        />\n      </ion-fab-button>\n    </ion-fab>\n  </ng-template>\n\n\n\n  <ng-template #editForm>\n    <form [formGroup]=\"EditForm\">\n      <h1>Edit Your Profile</h1>\n      <ion-card style=\"margin-top: 25px;\">\n        <div class=\"nameCol\">\n          <p>{{this.letter}}</p>\n        </div>\n        <ion-list>\n          <ion-row>\n            <ion-col class=\"ion-float-right\">\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"color: #919090;\">\n                  Name:</ion-label\n                >\n                <ion-input type=\"text\" formControlName=\"name\"> </ion-input>\n              </ion-item>\n              <div\n                id=\"errorStyle\"\n                *ngIf=\"checkValid && f.name.errors\"\n                class=\"invalid-feedback\"\n              >\n                <div *ngIf=\"f.name.errors.required\">*Name is required</div>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"color: #919090;\">\n                  DOB:</ion-label\n                >\n                <ion-input type=\"text\" formControlName=\"dob\"> </ion-input>\n                <div\n                  id=\"errorStyle\"\n                  *ngIf=\"checkValid && f.dob.errors\"\n                  class=\"invalid-feedback\"\n                >\n                  <div *ngIf=\"f.dob.errors.required\" style=\"color: red;\">\n                    *Dob is required\n                  </div>\n                </div>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"color: #919090;\">\n                  Email Id:</ion-label\n                ><span style=\"font-weight: bolder; color: #fff;\"> {{this.user?.email}}</span>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"color: #919090;\">\n                  Phone No:</ion-label\n                ><span style=\"font-weight: bolder; color: #fff;\">{{this.user?.mobile}}</span>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"fixed\" style=\"color: #919090;\">\n                  Gender:</ion-label\n                >\n                <ion-input type=\"text\" formControlName=\"gender\"> </ion-input>\n                <div\n                  id=\"errorStyle\"\n                  *ngIf=\"checkValid && f.gender.errors\"\n                  class=\"invalid-feedback\"\n                >\n                  <div *ngIf=\"f.gender.errors.required\" style=\"color: red;\">\n                    *gender is required\n                  </div>\n                </div>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </ion-card>\n    </form>\n  </ng-template>\n</ion-content>\n<div *ngIf=\"!showProfile\">\n  <button class=\"updateButton\" type=\"ngSubmit\" (click)=\"updateAddress(EditForm.value)\">Update Profile</button>\n\n</div>\n";
    /***/
  },

  /***/
  "./src/app/profile/profile-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/profile/profile-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");
    /* harmony import */


    var _commom_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../commom.service */
    "./src/app/commom.service.ts");
    /* harmony import */


    var _profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile.service */
    "./src/app/profile/profile.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      providers: [_commom_service__WEBPACK_IMPORTED_MODULE_7__["CommomService"], _profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 26px;\n  line-height: 30px;\n  text-align: center;\n  color: #A4A4A4;\n}\n\n.nameCol {\n  height: 113px;\n  width: 121px;\n  background: radial-gradient(50% 50% at 50% 50%, #227C98 0%, rgba(70, 211, 255, 0) 100%);\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\np {\n  text-align: center;\n  padding: 21px;\n  font-size: 50px;\n  color: #FFFFFF;\n  font-weight: bolder;\n  margin-top: 20px;\n}\n\nion-list {\n  background-color: transparent;\n  margin-top: 20px;\n}\n\nion-item {\n  --background: rgba(0, 0, 0, 0) !important;\n  background-color: transparent;\n  --border-color: #a4a4a4;\n  height: 70px;\n}\n\nimg {\n  color: white;\n  height: 40px;\n}\n\n.updateButton {\n  width: 100%;\n  height: 50px;\n  font-size: 20px;\n  font-family: Roboto;\n  color: white;\n  font-weight: bold;\n  background-color: #6B00C2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9EOlxcUHJvamVjdHNcXGNvbm5lY3RCYXphclxcRGVsaXZlcnlBcHBcXHNha2lic2lkZGlxdWktY2FyaW5nbW90aGVyX2RlbGl2ZXJ5LWQxODhkNzIyZWRiMy9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBQTs7QURHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUZBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0QsdUJBQUE7RUFDQyxZQUFBO0FDQ0o7O0FERUM7RUFDRyxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVDO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBcbmZvbnQtZmFtaWx5OiBSb2JvdG87XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogYm9sZDtcbmZvbnQtc2l6ZTogMjZweDtcbmxpbmUtaGVpZ2h0OiAzMHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuY29sb3I6ICNBNEE0QTRcbn1cblxuLm5hbWVDb2wge1xuICAgIGhlaWdodDogMTEzcHg7XG4gICAgd2lkdGg6IDEyMXB4O1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg1MCUgNTAlIGF0IDUwJSA1MCUsICMyMjdDOTggMCUsIHJnYmEoNzAsIDIxMSwgMjU1LCAwKSAxMDAlKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbnAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMXB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgLS1ib3JkZXItY29sb3I6ICAjYTRhNGE0O1xuICAgIGhlaWdodDogNzBweDtcbiAgICAvLyAtLWJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwKSFpbXBvcnRhbnQ7XG4gIH1cbiBpbWcge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gfVxuXG4gLnVwZGF0ZUJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkIwMEMyO1xuICAgIFxuIH0iLCJoMSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNBNEE0QTQ7XG59XG5cbi5uYW1lQ29sIHtcbiAgaGVpZ2h0OiAxMTNweDtcbiAgd2lkdGg6IDEyMXB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoNTAlIDUwJSBhdCA1MCUgNTAlLCAjMjI3Qzk4IDAlLCByZ2JhKDcwLCAyMTEsIDI1NSwgMCkgMTAwJSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMXB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6ICNhNGE0YTQ7XG4gIGhlaWdodDogNzBweDtcbn1cblxuaW1nIHtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi51cGRhdGVCdXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2QjAwQzI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/profile/profile.page.ts ***!
    \*****************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _commom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../commom.service */
    "./src/app/commom.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile.service */
    "./src/app/profile/profile.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(common, formBuilder, datePipe, loadingController, api) {
        _classCallCheck(this, ProfilePage);

        this.common = common;
        this.formBuilder = formBuilder;
        this.datePipe = datePipe;
        this.loadingController = loadingController;
        this.api = api;
        this.showProfile = true;
        this.checkValid = false;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.EditForm = this.formBuilder.group({
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var _this = this;

          var a = this.api.getUserDetails();
          a.subscribe(function (res) {
            _this.user = res;
            var a = _this.user.fullName;
            _this.letter = a.slice(0, 1);

            var b = _this.datePipe.transform(_this.user.dob, 'yyyy-MM-dd');

            _this.user.dob = b;
          });
        }
      }, {
        key: "editProfile",
        value: function editProfile() {
          this.showProfile = false;
          this.EditForm.controls.name.setValue(this.user.fullName);
          this.EditForm.controls.dob.setValue(this.datePipe.transform(this.user.dob, 'yyyy-MM-dd'));
          this.EditForm.controls.gender.setValue(this.user.gender);
        }
      }, {
        key: "updateAddress",
        value: function updateAddress(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var loading, p;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    value.userId = this.user.userId;
                    value.email = this.user.email;
                    value.mobile = this.user.mobile;
                    this.checkValid = true;

                    if (!this.EditForm.invalid) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return");

                  case 6:
                    _context.next = 8;
                    return this.loadingController.create({
                      message: 'Updating...'
                    });

                  case 8:
                    loading = _context.sent;
                    loading.present();
                    p = this.api.updateProfile(value);
                    p.subscribe(function (res) {
                      if (res) {
                        loading.dismiss();

                        _this2.common.presentToast('Profile is updated');

                        _this2.showProfile = true;

                        _this2.getUserDetails();
                      }
                    }, function (error) {
                      loading.dismiss();

                      _this2.common.presentToast('Something went wrong? Try Again');
                    });

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.quantity = localStorage.getItem('grocericaQuantity');
          this.getUserDetails();
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.common.logout();

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "f",
        get: function get() {
          return this.EditForm.controls;
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _commom_service__WEBPACK_IMPORTED_MODULE_2__["CommomService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  },

  /***/
  "./src/app/profile/profile.service.ts":
  /*!********************************************!*\
    !*** ./src/app/profile/profile.service.ts ***!
    \********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppProfileProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _universalapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../universalapi.service */
    "./src/app/universalapi.service.ts");

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService(http, url) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this.url = url;
        this.baseUrl = _universalapi_service__WEBPACK_IMPORTED_MODULE_4__["UniversalapiService"].url;
      }

      _createClass(ProfileService, [{
        key: "getUserDetails",
        value: function getUserDetails() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers = headers.set('token', localStorage.getItem('grocericaVendortoken'));
          return this.http.get(this.baseUrl + '/users/me', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(value) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers = headers.set('token', localStorage.getItem('grocericaVendortoken'));
          var param = {
            "dob": value.dob,
            "email": value.email,
            "fullName": value.name,
            "gender": value.gender,
            "mobile": value.mobile,
            "userId": value.userId
          };
          return this.http.post(this.baseUrl + '/users/update', param, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _universalapi_service__WEBPACK_IMPORTED_MODULE_4__["UniversalapiService"]
      }];
    };

    ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProfileService);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map