function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activate-otp-activate-otp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/activate-otp/activate-otp.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activate-otp/activate-otp.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppActivateOtpActivateOtpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"background\"  style=\"background-color: rgb(6, 15, 66);\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"arrow-back\" routerLink=\"/login\"></ion-icon>\n     </ion-buttons>\n</ion-toolbar>\n  \n  <ion-grid>\n    <p class=\"text\">Awesome? <br> We sent you OTP, please confirm</p>\n    <ion-card>\n      <form class=\"ion-padding\" [formGroup]=\"ActivateForm\" (ngSubmit)=\"verifyActivateUserOtp(ActivateForm.value)\">\n      <ion-row style=\"padding-left: 10%; padding-right: 10%;\">\n        <ion-col class=\"ion-float-right\">\n          <div>\n            <ion-item>\n              <ion-label position=\"fixed\" style=\"color: #919090;\">\n                OTP</ion-label>\n              <ion-input style=\"color: #fff;\" type=\"text\" formControlName=\"otp\">\n              </ion-input>\n            </ion-item>\n            <div id=\"errorStyle\" *ngIf=\"validateForm && f.otp.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.otp.errors.required\">*OTP is required</div>\n             \n          </div>\n          </div>\n        </ion-col>\n\n        <button  class=\"button-submit\" color=\"primary\"color=\"primary\"  type=\"ngSubmit\">\n          Activate Account</button>\n \n      </ion-row>\n    </form>\n    </ion-card>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/activate-otp/activate-otp-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/activate-otp/activate-otp-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ActivateOtpPageRoutingModule */

  /***/
  function srcAppActivateOtpActivateOtpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateOtpPageRoutingModule", function () {
      return ActivateOtpPageRoutingModule;
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


    var _activate_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./activate-otp.page */
    "./src/app/activate-otp/activate-otp.page.ts");

    var routes = [{
      path: '',
      component: _activate_otp_page__WEBPACK_IMPORTED_MODULE_3__["ActivateOtpPage"]
    }];

    var ActivateOtpPageRoutingModule = function ActivateOtpPageRoutingModule() {
      _classCallCheck(this, ActivateOtpPageRoutingModule);
    };

    ActivateOtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ActivateOtpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/activate-otp/activate-otp.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/activate-otp/activate-otp.module.ts ***!
    \*****************************************************/

  /*! exports provided: ActivateOtpPageModule */

  /***/
  function srcAppActivateOtpActivateOtpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateOtpPageModule", function () {
      return ActivateOtpPageModule;
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


    var _activate_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./activate-otp-routing.module */
    "./src/app/activate-otp/activate-otp-routing.module.ts");
    /* harmony import */


    var _activate_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./activate-otp.page */
    "./src/app/activate-otp/activate-otp.page.ts");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ActivateOtpPageModule = function ActivateOtpPageModule() {
      _classCallCheck(this, ActivateOtpPageModule);
    };

    ActivateOtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _activate_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivateOtpPageRoutingModule"]],
      providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"]],
      declarations: [_activate_otp_page__WEBPACK_IMPORTED_MODULE_6__["ActivateOtpPage"]]
    })], ActivateOtpPageModule);
    /***/
  },

  /***/
  "./src/app/activate-otp/activate-otp.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/activate-otp/activate-otp.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppActivateOtpActivateOtpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  --background: url('login.png') repeat-x 0% 0%;\n}\n\n.text {\n  color: #a4a4a4;\n  text-align: center;\n  font-size: 24px;\n  margin-top: 50%;\n}\n\nion-card {\n  background: rgba(196, 196, 196, 0.12);\n  border-radius: 15px;\n}\n\nion-item {\n  --background: rgba(0, 0, 0, 0) !important;\n  --border-color: #a4a4a4;\n}\n\nion-input {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  color: #919090;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZhdGUtb3RwL0Q6XFxQcm9qZWN0c1xcY29ubmVjdEJhemFyXFxEZWxpdmVyeUFwcFxcc2FraWJzaWRkaXF1aS1jYXJpbmdtb3RoZXJfZGVsaXZlcnktZDE4OGQ3MjJlZGIzL3NyY1xcYXBwXFxhY3RpdmF0ZS1vdHBcXGFjdGl2YXRlLW90cC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjdGl2YXRlLW90cC9hY3RpdmF0ZS1vdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkNBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSx5Q0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FESUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYWN0aXZhdGUtb3RwL2FjdGl2YXRlLW90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2xvZ2luLnBuZykgcmVwZWF0LXggMCUgMCU7XG4gIH1cbiAgXG4gIC50ZXh0IHtcbiAgICBjb2xvcjogI2E0YTRhNDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgfVxuICBcbiAgaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4xMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAgI2E0YTRhNDtcbiAgICBcbiAgICAvLyAtLWJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwKSFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGlvbi1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICM5MTkwOTA7XG4gIH1cbiAgXG4iLCIuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9sb2dpbi5wbmcpIHJlcGVhdC14IDAlIDAlO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiAjYTRhNGE0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYTRhNGE0O1xufVxuXG5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM5MTkwOTA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/activate-otp/activate-otp.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/activate-otp/activate-otp.page.ts ***!
    \***************************************************/

  /*! exports provided: ActivateOtpPage */

  /***/
  function srcAppActivateOtpActivateOtpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateOtpPage", function () {
      return ActivateOtpPage;
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


    var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _commom_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../commom.service */
    "./src/app/commom.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ActivateOtpPage = /*#__PURE__*/function () {
      // tslint:disable-next-line: max-line-length
      function ActivateOtpPage(fb, common, api, alertController, router) {
        _classCallCheck(this, ActivateOtpPage);

        this.fb = fb;
        this.common = common;
        this.api = api;
        this.alertController = alertController;
        this.router = router;
        this.validateForm = false;
      }

      _createClass(ActivateOtpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ActivateForm = this.fb.group({
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "verifyActivateUserOtp",
        value: function verifyActivateUserOtp(value) {
          var _this = this;

          this.validateForm = true;

          if (this.ActivateForm.invalid) {
            return;
          }

          var p = this.api.verifyActivateUserOtp(value);
          p.subscribe(function (res) {
            _this.presentAlertConfirm('Account is Activated');
          }, // tslint:disable-next-line: no-shadowed-variable
          function (error) {
            if (error.error.message === 'OTP doesn\'t matched') {
              _this.common.presentToast(error.error.message);
            }

            if (error.status === 500) {
              _this.common.presentToast('Something Went Wrong!! Try after sometime');
            }
          });
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
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
                          _this2.router.navigate(['login']);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "f",
        get: function get() {
          return this.ActivateForm.controls;
        }
      }]);

      return ActivateOtpPage;
    }();

    ActivateOtpPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _commom_service__WEBPACK_IMPORTED_MODULE_4__["CommomService"]
      }, {
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    ActivateOtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-activate-otp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./activate-otp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/activate-otp/activate-otp.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./activate-otp.page.scss */
      "./src/app/activate-otp/activate-otp.page.scss"))["default"]]
    })], ActivateOtpPage);
    /***/
  }
}]);
//# sourceMappingURL=activate-otp-activate-otp-module-es5.js.map