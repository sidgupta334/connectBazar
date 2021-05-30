function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["no-internet-no-internet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/no-internet/no-internet.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/no-internet/no-internet.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNoInternetNoInternetPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"background\">\n    <img src=\"../../assets/sad-emoji-by-google.png\" alt=\"Connect Bazar\" />\n\n    <h1>No or Slow Internet Connection</h1>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/no-internet/no-internet-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/no-internet/no-internet-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: NoInternetPageRoutingModule */

  /***/
  function srcAppNoInternetNoInternetRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoInternetPageRoutingModule", function () {
      return NoInternetPageRoutingModule;
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


    var _no_internet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./no-internet.page */
    "./src/app/no-internet/no-internet.page.ts");

    var routes = [{
      path: '',
      component: _no_internet_page__WEBPACK_IMPORTED_MODULE_3__["NoInternetPage"]
    }];

    var NoInternetPageRoutingModule = function NoInternetPageRoutingModule() {
      _classCallCheck(this, NoInternetPageRoutingModule);
    };

    NoInternetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NoInternetPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/no-internet/no-internet.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/no-internet/no-internet.module.ts ***!
    \***************************************************/

  /*! exports provided: NoInternetPageModule */

  /***/
  function srcAppNoInternetNoInternetModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoInternetPageModule", function () {
      return NoInternetPageModule;
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


    var _no_internet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./no-internet-routing.module */
    "./src/app/no-internet/no-internet-routing.module.ts");
    /* harmony import */


    var _no_internet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./no-internet.page */
    "./src/app/no-internet/no-internet.page.ts");

    var NoInternetPageModule = function NoInternetPageModule() {
      _classCallCheck(this, NoInternetPageModule);
    };

    NoInternetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _no_internet_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoInternetPageRoutingModule"]],
      declarations: [_no_internet_page__WEBPACK_IMPORTED_MODULE_6__["NoInternetPage"]]
    })], NoInternetPageModule);
    /***/
  },

  /***/
  "./src/app/no-internet/no-internet.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/no-internet/no-internet.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNoInternetNoInternetPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  --background:rgb(6, 15, 66);\n}\n\nimg {\n  height: 100px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 190px;\n}\n\nh1 {\n  text-align: center;\n  color: #c2c2c2;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm8taW50ZXJuZXQvRDpcXFByb2plY3RzXFxjb25uZWN0QmF6YXJcXERlbGl2ZXJ5QXBwXFxzYWtpYnNpZGRpcXVpLWNhcmluZ21vdGhlcl9kZWxpdmVyeS1kMTg4ZDcyMmVkYjMvc3JjXFxhcHBcXG5vLWludGVybmV0XFxuby1pbnRlcm5ldC5wYWdlLnNjc3MiLCJzcmMvYXBwL25vLWludGVybmV0L25vLWludGVybmV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NSOztBREVJO0VBQ0ksa0JBQUE7RUFDSixjQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25vLWludGVybmV0L25vLWludGVybmV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcbiAgICAtLWJhY2tncm91bmQ6cmdiKDYsIDE1LCA2Nik7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDE5MHB4O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjYzJjMmMyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH0iLCIuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDpyZ2IoNiwgMTUsIDY2KTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE5MHB4O1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNjMmMyYzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/no-internet/no-internet.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/no-internet/no-internet.page.ts ***!
    \*************************************************/

  /*! exports provided: NoInternetPage */

  /***/
  function srcAppNoInternetNoInternetPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoInternetPage", function () {
      return NoInternetPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NoInternetPage = /*#__PURE__*/function () {
      function NoInternetPage() {
        _classCallCheck(this, NoInternetPage);
      }

      _createClass(NoInternetPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NoInternetPage;
    }();

    NoInternetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-no-internet',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./no-internet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/no-internet/no-internet.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./no-internet.page.scss */
      "./src/app/no-internet/no-internet.page.scss"))["default"]]
    })], NoInternetPage);
    /***/
  }
}]);
//# sourceMappingURL=no-internet-no-internet-module-es5.js.map