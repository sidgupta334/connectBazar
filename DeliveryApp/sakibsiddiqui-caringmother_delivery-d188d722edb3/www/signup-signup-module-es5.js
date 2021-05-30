function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"../../assets/login.png\" style=\"position: fixed;background-color: rgb(6, 15, 66);\" alt=\"Connect Bazar\" />\n\n<ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-icon name=\"arrow-back\" routerLink=\"/login\"></ion-icon>\n    </ion-buttons>\n</ion-toolbar>\n\n\n<ion-content class=\"background\">\n    <p class=\"text\">Get Onboard <br>Register Here</p>\n\n    <ion-grid>\n        <ion-card>\n            <form class=\"ion-padding\" [formGroup]=\"SignUpForm\" (ngSubmit)=\"registerUser(SignUpForm.value)\">\n                <ion-row>\n                    <ion-col class=\"ion-float-right\">\n                        <ion-item>\n                            <ion-label position=\"fixed\" style=\"color: #919090;\">\n                                FullName</ion-label>\n\n                            <ion-input type=\"text\" formControlName=\"fullName\">\n                            </ion-input>\n                        </ion-item>\n                        <div id=\"errorStyle\" *ngIf=\"checkValid && f.fullName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.fullName.errors.required\">*FullName is required</div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col class=\"ion-float-right\">\n                        <ion-item>\n                            <ion-label position=\"fixed\" style=\"color: #919090;\">\n                                Mobile</ion-label>\n                            <ion-input type=\"text\" formControlName=\"mobile\">\n                            </ion-input>\n                        </ion-item>\n                        <div id=\"errorStyle\" *ngIf=\"checkValid && f.mobile.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.mobile.errors.required\">*Mobile no is required</div>\n                            <div *ngIf=\"f.mobile.errors.pattern\">Enter valid *Mobile No</div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"fixed\" style=\"color: #919090;\">\n                                Email</ion-label>\n                            <ion-input type=\"text\" formControlName=\"email\">\n                            </ion-input>\n                        </ion-item>\n                        <div id=\"errorStyle\" *ngIf=\"checkValid && f.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.email.errors.required\">*Email is required</div>\n                            <div *ngIf=\"f.email.errors.email\">Enter valid *email</div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"fixed\" style=\"color: #919090;\">\n                                Password</ion-label>\n                            <ion-input type=\"text\" formControlName=\"password\">\n                            </ion-input>\n                        </ion-item>\n                        <div id=\"errorStyle\" *ngIf=\"checkValid && f.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.password.errors.required\">*Password is required</div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n\n\n                <ion-row>\n                    <ion-col>\n\n\n                        <ion-item>\n                            <ion-label style=\"color: #919090;\">DOB</ion-label>\n                            <ion-datetime value=\"1990-02-19\" formControlName=\"dob\" style=\"color: #919090;\">\n\n                            </ion-datetime>\n                            <ion-icon name=\"calendar-outline\" style=\"color: #fff;\"></ion-icon>\n                        </ion-item>\n\n                        <div id=\"errorStyle\" *ngIf=\"checkValid && f.dob.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.dob.errors.required\">*Dob is required</div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"fixed\" style=\"color: #919090;\">\n                                Gender</ion-label>\n                            <ion-select style=\"margin-left: 40px; color: #A4A4A4;\" placeholder=\"Select\" formControlName=\"gender\">\n                                <ion-select-option value=\"f\" style=\"color: #fff;\">Female</ion-select-option>\n                                <ion-select-option value=\"m\" style=\"color: #fff;\">Male</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <div id=\"errorStyle\" *ngIf=\"checkValid && f.gender.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.gender.errors.required\">*Gender is required</div>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <!-- <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"fixed\" style=\"color: #919090;\">\n                Address Title</ion-label>\n              <ion-input type=\"text\" formControlName=\"addressTitle\">\n              </ion-input>\n            </ion-item>\n            <div id=\"errorStyle\" *ngIf=\"checkValid && f.addressTitle.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.addressTitle.errors.required\">*AddressTitle is required</div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"fixed\" style=\"color: #919090;\">\n                Address</ion-label>\n              <ion-input type=\"text\" formControlName=\"address1\">\n              </ion-input>\n            </ion-item>\n            <div id=\"errorStyle\" *ngIf=\"checkValid && f.address1.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.address1.errors.required\">*Address is required</div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"fixed\" style=\"color: #919090;\">\n                Landmark</ion-label>\n              <ion-input type=\"text\" formControlName=\"address2\">\n              </ion-input>\n            </ion-item>\n            <div id=\"errorStyle\" *ngIf=\"checkValid && f.address2.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.address2.errors.required\">*Landmark is required</div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"fixed\" style=\"color: #919090;\">\n                City</ion-label>\n              <ion-input type=\"text\" formControlName=\"city\">\n              </ion-input>\n            </ion-item>\n            <div id=\"errorStyle\" *ngIf=\"checkValid && f.city.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.city.errors.required\">*City is required</div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"fixed\" style=\"color: #919090;\">\n                Pincode</ion-label>\n              <ion-input type=\"text\" formControlName=\"pincode\">\n              </ion-input>\n            </ion-item>\n            <div id=\"errorStyle\" *ngIf=\"checkValid && f.pincode.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.pincode.errors.required\">*Pincode is required</div>\n              <div *ngIf=\"f.pincode.errors.pattern\">Enter valid *Pincode</div>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"fixed\" style=\"color: #919090;\">\n                State</ion-label>\n              <ion-input type=\"text\" formControlName=\"state\">\n              </ion-input>\n            </ion-item>\n            <div id=\"errorStyle\" *ngIf=\"checkValid && f.pincode.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.state.errors.required\">*state is required</div>\n\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"fixed\" style=\"color: #919090;\">\n                Country</ion-label>\n              <ion-input type=\"text\" formControlName=\"country\">\n              </ion-input>\n            </ion-item>\n            <div id=\"errorStyle\" *ngIf=\"checkValid && f.country.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.country.errors.required\">*Country is required</div>\n\n            </div>\n          </ion-col>\n        </ion-row> -->\n\n                <button class=\"button-submit\" color=\"primary\" type=\"ngSubmit\">\n          Sign Up\n        </button>\n            </form>\n        </ion-card>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/signup/signup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup/signup-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");
    /* harmony import */


    var _signup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./signup.service */
    "./src/app/signup/signup.service.ts");
    /* harmony import */


    var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/date-picker/ngx */
    "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]],
      providers: [_signup_service__WEBPACK_IMPORTED_MODULE_8__["SignupService"], _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["DatePicker"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  --background:rgb(6, 15, 66);\n  margin-top: 200px !important;\n}\n\nion-item {\n  --background: rgba(0, 0, 0, 0) !important;\n  background-color: transparent;\n  --border-color: #a4a4a4;\n}\n\n.text {\n  color: #A4A4A4;\n  text-align: center;\n  font-size: 30px;\n  margin-top: 40px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  height: 94px;\n}\n\nion-icon {\n  color: #a4a4a4;\n  font-size: 30px;\n}\n\nion-input {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0Q6XFxQcm9qZWN0c1xcY29ubmVjdEJhemFyXFxEZWxpdmVyeUFwcFxcc2FraWJzaWRkaXF1aS1jYXJpbmdtb3RoZXJfZGVsaXZlcnktZDE4OGQ3MjJlZGIzL3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREdFO0VBQ0UseUNBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FESUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURPQTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0FDSkY7O0FET0M7RUFDQyxjQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmJhY2tncm91bmQge1xuICAgIC0tYmFja2dyb3VuZDpyZ2IoNiwgMTUsIDY2KTtcbiAgICBtYXJnaW4tdG9wOjIwMHB4IWltcG9ydGFudDtcbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAgI2E0YTRhNDtcbiAgICAvLyAtLWJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwKSFpbXBvcnRhbnQ7XG4gIH1cblxuICAudGV4dCB7XG4gICAgY29sb3I6I0E0QTRBNDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgfVxuXG5cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDk0cHg7XG59XG5cbiBpb24taWNvbiB7XG4gIGNvbG9yOiNhNGE0YTQ7IFxuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiNmZmY7XG59XG5cbiBcbiAiLCIuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDpyZ2IoNiwgMTUsIDY2KTtcbiAgbWFyZ2luLXRvcDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYTRhNGE0O1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiAjQTRBNEE0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDk0cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICNhNGE0YTQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6ICNmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/signup/signup.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signup/signup.page.ts ***!
    \***************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signup.service */
    "./src/app/signup/signup.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _commom_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../commom.service */
    "./src/app/commom.service.ts");
    /* harmony import */


    var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/date-picker/ngx */
    "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(api, formBuilder, alert, router, datePicker, loadingController) {
        _classCallCheck(this, SignupPage);

        this.api = api;
        this.formBuilder = formBuilder;
        this.alert = alert;
        this.router = router;
        this.datePicker = datePicker;
        this.loadingController = loadingController;
        this.checkValid = false;
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.SignUpForm = this.formBuilder.group({
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[6-9]\d{9}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        } // getter method to access form fields

      }, {
        key: "registerUser",
        value: function registerUser(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var p, loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    value.user = "user";
                    this.checkValid = true;

                    if (!this.SignUpForm.invalid) {
                      _context3.next = 4;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 4:
                    p = this.api.registerUser(value);
                    _context3.next = 7;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 7:
                    loading = _context3.sent;
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
                                localStorage.setItem('userId', res.userId);
                                this.router.navigate(['/activate-otp']);

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, // tslint:disable-next-line: no-unused-expression
                    function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var mes;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return loading.dismiss();

                              case 2:
                                if (!(error.status === 400)) {
                                  _context2.next = 7;
                                  break;
                                }

                                _context2.next = 5;
                                return loading.dismiss();

                              case 5:
                                mes = 'Invalid Details';
                                this.alert.presentToast(mes);

                              case 7:
                                _context2.next = 9;
                                return loading.dismiss();

                              case 9:
                                if (error.status === 500 && error.error.message === 'Email already exists') {
                                  this.alert.presentToast('Email already exists');
                                }

                              case 10:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "showDatepicker",
        value: function showDatepicker() {
          var _this2 = this;

          this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
            okText: "Save Date",
            todayText: "Set Today"
          }).then(function (date) {
            _this2.myDate = date.getDate() + "/" + date.toLocaleString('default', {
              month: 'long'
            }) + "/" + date.getFullYear();
          }, function (err) {
            return console.log('Error occurred while getting date: ', err);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.SignUpForm.controls;
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _commom_service__WEBPACK_IMPORTED_MODULE_6__["CommomService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-signup",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/signup/signup.page.scss"))["default"]]
    })], SignupPage);
    /***/
  },

  /***/
  "./src/app/signup/signup.service.ts":
  /*!******************************************!*\
    !*** ./src/app/signup/signup.service.ts ***!
    \******************************************/

  /*! exports provided: SignupService */

  /***/
  function srcAppSignupSignupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupService", function () {
      return SignupService;
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

    var SignupService = /*#__PURE__*/function () {
      function SignupService(http) {
        _classCallCheck(this, SignupService);

        this.http = http;
        this.baseUrl = _universalapi_service__WEBPACK_IMPORTED_MODULE_4__["UniversalapiService"].url;
      }

      _createClass(SignupService, [{
        key: "registerUser",
        value: function registerUser(value) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          var param = {
            "dob": value.dob,
            "email": value.email,
            "fullName": value.fullName,
            "gender": value.gender,
            "mobile": value.mobile,
            "password": value.password,
            "userType": value.user
          };
          return this.http.post(this.baseUrl + '/users/create', param, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }));
        }
      }]);

      return SignupService;
    }();

    SignupService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SignupService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SignupService);
    /***/
  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map