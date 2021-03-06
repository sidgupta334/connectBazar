function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassord-forgotpassord-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassord/forgotpassord.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassord/forgotpassord.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgotpassordForgotpassordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content class=\"background\"  style=\"background-color: rgb(6, 15, 66);\">\n\n\n\n  <ng-container *ngIf=\"forgotPassword; then forgotEmailForm\"></ng-container>\n  <ng-container *ngIf=\"otpPost; then otpEnterForm\"></ng-container>\n\n <ng-template #forgotEmailForm> \n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"arrow-back\" routerLink=\"/login\"></ion-icon>\n     </ion-buttons>\n</ion-toolbar>\n    <ion-grid>\n      <p class=\"text\">Forgot your password? <br> Let's recover it</p>\n      <ion-card>\n      <form class=\"ion-padding\" [formGroup]=\"EmailForm\" (ngSubmit)=\"getEmail(EmailForm.value)\">\n\n        <ion-row >\n          <ion-col class=\"ion-float-right\">\n            <div>\n              <ion-item  style=\"background-color: transparent;\">\n                <ion-label position=\"fixed\" style=\"color: #919090;\">\n                  Email \n                </ion-label>\n                <ion-input  type=\"text\" formControlName=\"Email\" style=\"color: #fff;margin-left: -15px;\">  </ion-input>\n              </ion-item>\n              <div id=\"errorStyle\" *ngIf=\"checkValid && f.Email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.Email.errors.required\">*Email is required</div>\n                <div *ngIf=\"f.Email.errors.email\" >Enter valid *email</div>\n            </div>\n            </div>\n          </ion-col>\n\n          <button class=\"button-submit\"  color=\"primary\" type=\"ngSubmit\">\n            Send OTP</button>\n       \n        </ion-row>\n      </form>\n    </ion-card>\n    </ion-grid>\n  </ng-template>\n\n\n  <ng-template #otpEnterForm> \n    <ion-toolbar>\n      <ion-buttons slot=\"start\"  (click)=\"route()\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n       </ion-buttons>\n  </ion-toolbar>\n  <ion-grid>\n    <p class=\"text\">Forgot your password? <br> Let's recover it</p>\n    <ion-card>\n    <form class=\"ion-padding\" [formGroup]=\"OtpForm\" (ngSubmit)=\"postOtp(OtpForm.value)\">\n      <ion-row>\n        <ion-col class=\"ion-float-right\">\n          <div>\n            <ion-item class=\"input-password\">\n              <ion-label position=\"fixed\" style=\"color: #919090;\">\n                New Password</ion-label>\n              <ion-input style=\"color: #fff;\" type=\"password\"  formControlName=\"newPassword\">\n              </ion-input>\n            </ion-item>\n            <div id=\"errorStyle\" *ngIf=\"otpFormValid && frmValid.newPassword.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"frmValid.newPassword.errors.required\">*Password is required</div>\n          </div>\n            <ion-item class=\"input-password\">\n              <ion-label position=\"fixed\" style=\"color: #919090;\">\n                OTP</ion-label>\n              <ion-input style=\"color: #fff;\" type=\"text\"  formControlName=\"otp\">\n              </ion-input>\n            </ion-item>\n            <div id=\"errorStyle\" *ngIf=\"otpFormValid && frmValid.otp.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"frmValid.otp.errors.required\">*Otp is required</div>\n          \n          </div>\n          </div>\n        </ion-col>\n\n        <button  class=\"button-submit\" color=\"primary\"color=\"primary\"  type=\"ngSubmit\">\n          Update Password</button>\n \n      </ion-row>\n    </form>\n    </ion-card>\n  </ion-grid>\n  </ng-template>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/forgotpassord/forgotpassord-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/forgotpassord/forgotpassord-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ForgotpassordPageRoutingModule */

  /***/
  function srcAppForgotpassordForgotpassordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpassordPageRoutingModule", function () {
      return ForgotpassordPageRoutingModule;
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


    var _forgotpassord_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgotpassord.page */
    "./src/app/forgotpassord/forgotpassord.page.ts");

    var routes = [{
      path: '',
      component: _forgotpassord_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpassordPage"]
    }];

    var ForgotpassordPageRoutingModule = function ForgotpassordPageRoutingModule() {
      _classCallCheck(this, ForgotpassordPageRoutingModule);
    };

    ForgotpassordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotpassordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/forgotpassord/forgotpassord.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/forgotpassord/forgotpassord.module.ts ***!
    \*******************************************************/

  /*! exports provided: ForgotpassordPageModule */

  /***/
  function srcAppForgotpassordForgotpassordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpassordPageModule", function () {
      return ForgotpassordPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _forgotpassord_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgotpassord-routing.module */
    "./src/app/forgotpassord/forgotpassord-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _forgotpassord_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forgotpassord.page */
    "./src/app/forgotpassord/forgotpassord.page.ts");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/login/login.service.ts");

    var ForgotpassordPageModule = function ForgotpassordPageModule() {
      _classCallCheck(this, ForgotpassordPageModule);
    };

    ForgotpassordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _forgotpassord_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpassordPageRoutingModule"]],
      providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]],
      declarations: [_forgotpassord_page__WEBPACK_IMPORTED_MODULE_7__["ForgotpassordPage"]]
    })], ForgotpassordPageModule);
    /***/
  },

  /***/
  "./src/app/forgotpassord/forgotpassord.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/forgotpassord/forgotpassord.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgotpassordForgotpassordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text {\n  color: #a4a4a4;\n  text-align: center;\n  font-size: 30px;\n  margin-top: 44%;\n}\n\n.input-password ion-label {\n  flex: 0 0 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzc29yZC9EOlxcUHJvamVjdHNcXGNvbm5lY3RCYXphclxcRGVsaXZlcnlBcHBcXHNha2lic2lkZGlxdWktY2FyaW5nbW90aGVyX2RlbGl2ZXJ5LWQxODhkNzIyZWRiMy9zcmNcXGFwcFxcZm9yZ290cGFzc29yZFxcZm9yZ290cGFzc29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdvdHBhc3NvcmQvZm9yZ290cGFzc29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREtFO0VBQ0UsZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290cGFzc29yZC9mb3Jnb3RwYXNzb3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRleHQge1xuICBjb2xvcjogI2E0YTRhNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDQ0JTtcbn1cblxuLmlucHV0LXBhc3N3b3JkIHtcblxuICBpb24tbGFiZWwge1xuICAgIGZsZXg6IDAgMCAxMzBweDtcbiAgfVxuXG59XG4iLCIudGV4dCB7XG4gIGNvbG9yOiAjYTRhNGE0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogNDQlO1xufVxuXG4uaW5wdXQtcGFzc3dvcmQgaW9uLWxhYmVsIHtcbiAgZmxleDogMCAwIDEzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/forgotpassord/forgotpassord.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/forgotpassord/forgotpassord.page.ts ***!
    \*****************************************************/

  /*! exports provided: ForgotpassordPage */

  /***/
  function srcAppForgotpassordForgotpassordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpassordPage", function () {
      return ForgotpassordPage;
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


    var _login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _commom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../commom.service */
    "./src/app/commom.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ForgotpassordPage = /*#__PURE__*/function () {
      function ForgotpassordPage(fb, http, api, loadingController, alertController, router, alert) {
        _classCallCheck(this, ForgotpassordPage);

        this.fb = fb;
        this.http = http;
        this.api = api;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.alert = alert;
        this.checkValid = false;
        this.otpFormValid = false;
        this.otpPost = false;
        this.forgotPassword = true;
      }

      _createClass(ForgotpassordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.EmailForm = this.fb.group({
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
          });
          this.OtpForm = this.fb.group({
            otp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            newPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        } // getter method to access form fields

      }, {
        key: "route",
        value: function route() {
          this.otpPost = false;
          this.forgotPassword = true;
        }
      }, {
        key: "getEmail",
        value: function getEmail(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading, p;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.checkValid = true;

                    if (!this.EmailForm.invalid) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return");

                  case 3:
                    _context.next = 5;
                    return this.loadingController.create({
                      message: "Please wait..."
                    });

                  case 5:
                    loading = _context.sent;
                    loading.present();
                    p = this.api.forgotPassword(value.Email);
                    p.subscribe(function (res) {
                      localStorage.setItem('grocericaforgotEmail', value.Email);
                      loading.dismiss();

                      _this.alert.presentToast("Otp Sent Successfully to your email");

                      _this.forgotPassword = false;
                      _this.otpPost = true;
                      _this.otpFormValid = false;
                    }, function (error) {
                      loading.dismiss();

                      if (error.error.message === "User not found" && error.status === 400) {
                        _this.alert.presentToast(error.error.message);
                      }

                      if (error.status === 500) {
                        _this.alert.presentToast("Something went wrong");
                      }
                    });

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // =======form method for otp validation==========//

      }, {
        key: "postOtp",
        value: function postOtp(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loading, p;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.otpFormValid = true;

                    if (!this.OtpForm.invalid) {
                      _context2.next = 3;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 3:
                    value.email = localStorage.getItem('grocericaforgotEmail');
                    _context2.next = 6;
                    return this.loadingController.create({
                      message: "Please wait..."
                    });

                  case 6:
                    loading = _context2.sent;
                    loading.present();
                    p = this.api.postOtp(value);
                    p.subscribe(function (res) {
                      loading.dismiss();

                      _this2.presentAlertConfirm(res.message);
                    }, function (error) {
                      loading.dismiss();

                      if (error.error.message === "User not found" && error.status === 400) {
                        _this2.alert.presentToast(error.error.message);
                      }

                      if (error.error.message === "OTP doesn't matched" && error.status === 500) {
                        _this2.alert.presentToast(error.error.message);
                      }
                    });

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: message,
                      message: 'Login to your Account',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          _this3.router.navigate(['login']);
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "f",
        get: function get() {
          return this.EmailForm.controls;
        } // getter method to access form fields

      }, {
        key: "frmValid",
        get: function get() {
          return this.OtpForm.controls;
        }
      }]);

      return ForgotpassordPage;
    }();

    ForgotpassordPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _commom_service__WEBPACK_IMPORTED_MODULE_5__["CommomService"]
      }];
    };

    ForgotpassordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-forgotpassord",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forgotpassord.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassord/forgotpassord.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forgotpassord.page.scss */
      "./src/app/forgotpassord/forgotpassord.page.scss"))["default"]]
    })], ForgotpassordPage);
    /***/
  }
}]);
//# sourceMappingURL=forgotpassord-forgotpassord-module-es5.js.map