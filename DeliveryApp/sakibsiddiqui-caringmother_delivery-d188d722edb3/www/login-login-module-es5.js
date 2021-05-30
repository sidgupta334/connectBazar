function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"../../assets/login.png\" alt=\"Connect Bazar\" style=\"    \nbackground-color: rgb(6, 15, 66);\nobject-fit: cover;\" />\n\n\n\n<ion-content class=\"background\">\n\n    <div>\n        <img src=\"../../assets/icon.png\" alt=\"Connect Bazar\" class=\"login\" />\n\n        <p class=\"text\">Welcome to Connect Bazar, <br />Vendor App</p>\n\n        <ion-card>\n            <ion-grid>\n                <form [formGroup]=\"LoginForm\" (ngSubmit)=\"login(LoginForm.value)\">\n                    <ion-row>\n                        <ion-col class=\"ion-float-left\">\n                            <div>\n                                <ion-item style=\"background-color: transparent;\">\n                                    <ion-label position=\"fixed\" style=\"color: #919090;\">User Name</ion-label>\n                                    <ion-input formControlName=\"email\"></ion-input>\n                                </ion-item>\n                                <div id=\"errorStyle\" *ngIf=\"formValidation && f.email.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.email.errors.required\">*Email is required</div>\n                                    <div *ngIf=\"f.email.errors.email\">Enter valid *email</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class=\"ion-float-right\">\n                            <div>\n                                <ion-item>\n                                    <ion-label position=\"fixed\" style=\"color: #919090;\">\n                                        Password</ion-label>\n                                    <ion-input type=\"password\" formControlName=\"password\">\n                                    </ion-input>\n                                </ion-item>\n                                <div id=\"errorStyle\" *ngIf=\"formValidation && f.password.errors\" class=\"invalid-feedback\">\n                                    <div *ngIf=\"f.password.errors.required\">*Password is required</div>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-button color=\"primary\" type=\"ngSubmit\"> Login</ion-button>\n                </form>\n            </ion-grid>\n        </ion-card>\n    </div>\n\n    <ion-row>\n        <ion-col>\n            <p routerLink=\"/forgotpassord\" style=\"text-align: start; color: white;font-size: 15px;text-align: end; margin-right: 15px;\">\n                <u>Forgot password?</u>\n            </p>\n        </ion-col>\n    </ion-row>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var angular_epic_spinners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-epic-spinners */
    "./node_modules/angular-epic-spinners/__ivy_ngcc__/fesm2015/angular-epic-spinners.js");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], angular_epic_spinners__WEBPACK_IMPORTED_MODULE_9__["AtomSpinnerModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      providers: [_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  --background:rgb(6, 15, 66);\n  margin-top: 200px !important;\n}\n\nion-item {\n  --background: rgba(0,0,0,0)!important;\n}\n\nion-grid {\n  margin-top: 40px;\n}\n\nion-card {\n  align-items: center;\n  height: 260px;\n  background: rgba(196, 196, 196, 0.12);\n  border-radius: 15px;\n}\n\nion-icon {\n  color: black;\n  font-size: 30px;\n}\n\nion-input {\n  color: white;\n  margin-left: 15px;\n}\n\nion-button {\n  width: 100%;\n  margin-top: 15px;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\np {\n  color: black;\n  text-align: center;\n  font-size: 14px;\n}\n\n.login {\n  border-radius: 15px;\n  height: 100px;\n  margin-top: 24px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.text {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 35px;\n  color: #A4A4A4;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nu {\n  -webkit-text-decoration-color: #A4A4A4;\n          text-decoration-color: #A4A4A4;\n}\n\n@media only screen and (max-width: 360px) {\n  .text {\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 24px;\n    color: #A4A4A4;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFByb2plY3RzXFxjb25uZWN0QmF6YXJcXERlbGl2ZXJ5QXBwXFxzYWtpYnNpZGRpcXVpLWNhcmluZ21vdGhlcl9kZWxpdmVyeS1kMTg4ZDcyMmVkYjMvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLDJCQUFBO0VBQ0EsNEJBQUE7QUNDSDs7QURHQTtFQUNJLHFDQUFBO0FDQUo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBREtBO0VBRUksbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRFFDO0VBQ0csWUFBQTtFQUNBLGVBQUE7QUNMSjs7QURRQztFQUNHLFlBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFDO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFDO0VBQ0csWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFFDO0VBRUcsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFVBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1BBOztBRFlBO0VBQ0cseUJBQUE7RUFDQSx3Q0FBQTtBQ1RIOztBRFlDO0VBQ0Usc0NBQUE7VUFBQSw4QkFBQTtBQ1RIOztBRGNDO0VBQ0U7SUFDRyxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQ1hKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gICAtLWJhY2tncm91bmQ6cmdiKDYsIDE1LCA2Nik7XG4gICBtYXJnaW4tdG9wOjIwMHB4IWltcG9ydGFudDtcbiB9XG4gXG5cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCkhaW1wb3J0YW50O1xuICAgIC8vIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDApIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbn1cblxuaW9uLWNhcmQge1xuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4xMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuXG59XG5cbiBpb24taWNvbiB7XG4gICAgY29sb3I6IGJsYWNrOyBcbiAgICBmb250LXNpemU6IDMwcHhcbiB9XG5cbiBpb24taW5wdXQge1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gfVxuIFxuIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTsgXG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gfVxuXG4gcCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gfVxuXG4gLmxvZ2luIHtcbiBcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xuICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuIH1cbiBcblxuLnRleHQge1xuZm9udC1mYW1pbHk6IFJvYm90bztcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XG5mb250LXNpemU6IDMwcHg7XG5saW5lLWhlaWdodDogMzVweDtcbmNvbG9yOiAjQTRBNEE0O1xuXG59XG5cblxuaW9uLXRvb2xiYXIge1xuICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gfVxuIFxuIHUge1xuICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjQTRBNEE0O1xuICAgO1xuIH1cblxuXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCl7XG4gICAudGV4dCB7XG4gICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiAjQTRBNEE0O1xuICAgICAgXG4gICAgICB9XG4gfSIsIi5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOnJnYig2LCAxNSwgNjYpO1xuICBtYXJnaW4tdG9wOiAyMDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKSFpbXBvcnRhbnQ7XG59XG5cbmlvbi1ncmlkIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuaW9uLWNhcmQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDI2MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuXG5wIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxvZ2luIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogI0E0QTRBNDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG51IHtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjQTRBNEE0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC50ZXh0IHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogI0E0QTRBNDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _commom_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../commom.service */
    "./src/app/commom.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(fb, http, api, alert, statusBar, router, loadingController) {
        _classCallCheck(this, LoginPage);

        this.fb = fb;
        this.http = http;
        this.api = api;
        this.alert = alert;
        this.statusBar = statusBar;
        this.router = router;
        this.loadingController = loadingController;
        this.formValidation = false; // to check is form valid
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // form credential applying validation
          this.LoginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        } // getter method to access form fields

      }, {
        key: "login",
        // ===================Post method for login================//
        value: function login(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this = this;

            var p, loading;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.formValidation = true; // stop here if form is invalid

                    if (!this.LoginForm.invalid) {
                      _context4.next = 3;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 3:
                    p = this.api.login(value);
                    _context4.next = 6;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 6:
                    loading = _context4.sent;
                    loading.present();
                    p.subscribe(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return loading.dismiss();

                              case 2:
                                localStorage.setItem('grocericaVendortoken', res.token);
                                localStorage.setItem('grocericaVendorstart', 'starttoken');
                                localStorage.setItem('grocericaemail', res.email);
                                localStorage.setItem('user', res.fullName);
                                localStorage.setItem('userDetail', JSON.stringify(res));
                                window.location.reload();
                                this.router.navigate(['/home']);

                              case 9:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this2 = this;

                        var _loading, _p, mes;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return loading.dismiss();

                              case 2:
                                if (!(error.error.message === 'PENDING')) {
                                  _context3.next = 9;
                                  break;
                                }

                                _context3.next = 5;
                                return this.loadingController.create({
                                  message: 'Please wait...'
                                });

                              case 5:
                                _loading = _context3.sent;

                                _loading.present();

                                _p = this.api.activateAccount(error.error.userId);

                                _p.subscribe(function (res) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                      while (1) {
                                        switch (_context2.prev = _context2.next) {
                                          case 0:
                                            _context2.next = 2;
                                            return _loading.dismiss();

                                          case 2:
                                            this.router.navigate(['/activate-otp']);

                                          case 3:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }
                                    }, _callee2, this);
                                  }));
                                }, function (error) {});

                              case 9:
                                if (error.status === 400) {
                                  mes = 'Invalid Details';
                                  this.alert.presentToast(mes);
                                }

                              case 10:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "f",
        get: function get() {
          return this.LoginForm.controls;
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _commom_service__WEBPACK_IMPORTED_MODULE_7__["CommomService"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map