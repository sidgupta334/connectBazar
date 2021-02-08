function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{X3zk:function(e,t,o){"use strict";o.r(t),o.d(t,"LoginPageModule",(function(){return C}));var r=o("ofXK"),n=o("3Pt+"),i=o("TEn/"),a=o("tyNb"),c=o("mrSG"),s=o("fXoL"),l=o("tk/3"),g=o("XNvx"),u=o("Wdxn"),m=o("VYYF"),b=o("up+p");function f(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*Email is required"),s.Ob())}function d(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"Enter valid *email"),s.Ob())}function p(e,t){if(1&e&&(s.Pb(0,"div",18),s.lc(1,f,2,0,"div",17),s.lc(2,d,2,0,"div",17),s.Ob()),2&e){var o=s.Zb();s.zb(1),s.cc("ngIf",o.f.email.errors.required),s.zb(1),s.cc("ngIf",o.f.email.errors.email)}}function h(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*Password is required"),s.Ob())}function v(e,t){if(1&e&&(s.Pb(0,"div",18),s.lc(1,h,2,0,"div",17),s.Ob()),2&e){var o=s.Zb();s.zb(1),s.cc("ngIf",o.f.password.errors.required)}}function P(e,t){1&e&&(s.Nb(0),s.Pb(1,"p",19),s.nc(2," New User? "),s.Pb(3,"u"),s.nc(4,"Signup instead"),s.Ob(),s.Ob(),s.Mb())}var O,w,x,k=[{path:"",component:(O=function(){function e(t,o,r,n,i,a,c,s,l){_classCallCheck(this,e),this.fb=t,this.http=o,this.api=r,this.alert=n,this.statusBar=i,this.router=a,this.googlePlus=c,this.loadingController=s,this.menu=l,this.formValidation=!1,this.signupText=!0}return _createClass(e,[{key:"ngOnInit",value:function(){this.menu.swipeGesture(!1),this.LoginForm=this.fb.group({email:["",[n.l.required,n.l.email]],password:["",[n.l.required]]}),this.removeAllStorageItems()}},{key:"removeAllStorageItems",value:function(){localStorage.removeItem("grocericatoken"),localStorage.removeItem("userDetail"),localStorage.removeItem("user"),localStorage.removeItem("userIdSignUp"),localStorage.removeItem("grocericastart"),localStorage.removeItem("grocericaQuantity"),localStorage.removeItem("grocericaSelectedAddress"),localStorage.removeItem("grocericaforgotEmail"),localStorage.removeItem("userId"),localStorage.removeItem("grocericaProduct"),localStorage.removeItem("reviewProduct"),localStorage.removeItem("viewFeedback"),localStorage.removeItem("grocericaOrderId"),localStorage.removeItem("grocericaViewCart"),localStorage.removeItem("grocericaemail"),localStorage.removeItem("userIdSignUp"),localStorage.removeItem("cartCount")}},{key:"login",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var o,r,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e),this.formValidation=!0,!this.LoginForm.invalid){t.next=2;break}return t.abrupt("return");case 2:return o=this.api.login(e),t.next=5,this.loadingController.create({message:"Please wait..."});case 5:(r=t.sent).present(),o.subscribe((function(e){return Object(c.a)(n,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,r.dismiss();case 3:localStorage.setItem("grocericatoken",e.token),localStorage.setItem("grocericastart","starttoken"),localStorage.setItem("grocericaemail",e.email),localStorage.setItem("user",e.fullName),localStorage.setItem("userDetail",JSON.stringify(e)),this.router.navigate(["/home"]);case 9:case"end":return t.stop()}}),t,this)})))}),(function(e){return Object(c.a)(n,void 0,void 0,regeneratorRuntime.mark((function t(){var o,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.dismiss();case 2:if("PENDING"!==e.error.message){t.next=7;break}return t.next=5,this.loadingController.create({message:"Please wait..."});case 5:(o=t.sent).present(),this.api.activateAccount(e.error.userId).subscribe((function(e){return Object(c.a)(n,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,o.dismiss();case 3:this.router.navigate(["/activate-otp"]);case 4:case"end":return t.stop()}}),t,this)})))}),(function(e){console.log(e)}));case 7:400===e.status&&this.alert.presentToast("Invalid Details");case 8:case"end":return t.stop()}}),t,this)})))}));case 7:case"end":return t.stop()}}),t,this)})))}},{key:"googleSignIn",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hellloooo"),e.next=3,this.loadingController.create({message:"Please wait..."});case 3:(t=e.sent).present(),this.googlePlus.login({}).then((function(e){console.log(e),t.dismiss(),localStorage.setItem("grocericatoken",e.accessToken),localStorage.setItem("grocericastart","starttoken"),localStorage.setItem("grocericaemail",e.email),localStorage.setItem("user",e.givenName),o.router.navigate(["/home"]),o.userData=e})).catch((function(e){o.userData="Error "+JSON.stringify(e),o.alert.presentToast("Something went wrong")}));case 5:case"end":return e.stop()}}),e,this)})))}},{key:"ionViewWillEnter",value:function(){localStorage.getItem("grocericatoken")&&(this.signupText=!1)}},{key:"f",get:function(){return this.LoginForm.controls}}]),e}(),O.\u0275fac=function(e){return new(e||O)(s.Jb(n.a),s.Jb(l.a),s.Jb(g.a),s.Jb(u.a),s.Jb(m.a),s.Jb(a.g),s.Jb(b.a),s.Jb(i.N),s.Jb(i.O))},O.\u0275cmp=s.Db({type:O,selectors:[["app-login"]],decls:40,vars:4,consts:[["src","../../assets/login.png","alt","caring mother",2,"background-color","rgb(6, 15, 66)","object-fit","cover"],[1,"background"],["src","../../assets/icon.png","alt","caring mother",1,"login"],[1,"text"],[3,"formGroup","ngSubmit"],[1,"ion-float-left",2,"border-bottom","1px solid #fff"],["lines","none",2,"background-color","transparent"],["position","fixed",2,"color","#fff"],["formControlName","email"],["id","errorStyle","class","invalid-feedback",4,"ngIf"],[1,"ion-float-right",2,"border-bottom","1px solid #fff"],["lines","none"],["type","password","formControlName","password"],[1,"login-ctr"],["type","ngSubmit",1,"des-button","login-btn"],["routerLink","/forgotpassord",2,"text-align","start","color","white","margin-left","20px","font-size","15px"],["routerLink","/home",2,"text-align","end","color","white","margin-right","20px","font-size","15px"],[4,"ngIf"],["id","errorStyle",1,"invalid-feedback"],["routerLink","/signup",1,"signup",2,"color","white","font-size","18px"]],template:function(e,t){1&e&&(s.Kb(0,"img",0),s.Pb(1,"ion-content",1),s.Pb(2,"div"),s.Kb(3,"img",2),s.Pb(4,"p",3),s.nc(5,"Welcome to Connect Bazar, "),s.Kb(6,"br"),s.nc(7,"Let's Sign in"),s.Ob(),s.Pb(8,"ion-card"),s.Pb(9,"ion-grid"),s.Pb(10,"form",4),s.Xb("ngSubmit",(function(){return t.login(t.LoginForm.value)})),s.Pb(11,"ion-row"),s.Pb(12,"ion-col",5),s.Pb(13,"div"),s.Pb(14,"ion-item",6),s.Pb(15,"ion-label",7),s.nc(16,"Email"),s.Ob(),s.Kb(17,"ion-input",8),s.Ob(),s.lc(18,p,3,2,"div",9),s.Ob(),s.Ob(),s.Ob(),s.Pb(19,"ion-row"),s.Pb(20,"ion-col",10),s.Pb(21,"div"),s.Pb(22,"ion-item",11),s.Pb(23,"ion-label",7),s.nc(24," Password"),s.Ob(),s.Kb(25,"ion-input",12),s.Ob(),s.lc(26,v,2,1,"div",9),s.Ob(),s.Ob(),s.Ob(),s.Pb(27,"div",13),s.Pb(28,"ion-button",14),s.nc(29," Login"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(30,"ion-row"),s.Pb(31,"ion-col"),s.Pb(32,"p",15),s.Pb(33,"u"),s.nc(34,"Forgot password?"),s.Ob(),s.Ob(),s.Ob(),s.Pb(35,"ion-col"),s.Pb(36,"p",16),s.Pb(37,"u"),s.nc(38," Skip for now >> "),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.lc(39,P,5,0,"ng-container",17),s.Ob()),2&e&&(s.zb(10),s.cc("formGroup",t.LoginForm),s.zb(8),s.cc("ngIf",t.formValidation&&t.f.email.errors),s.zb(8),s.cc("ngIf",t.formValidation&&t.f.password.errors),s.zb(13),s.cc("ngIf",t.signupText))},directives:[i.j,i.g,i.n,n.m,n.i,n.c,i.B,i.i,i.r,i.s,i.q,i.U,n.h,n.b,r.k,i.e,i.S,a.h],styles:[".background[_ngcontent-%COMP%]{--background:#060f42;margin-top:200px!important}ion-item[_ngcontent-%COMP%]{--background:transparent!important}ion-grid[_ngcontent-%COMP%]{margin-top:40px}ion-card[_ngcontent-%COMP%]{align-items:center;height:260px;background:hsla(0,0%,76.9%,.12);border-radius:15px}ion-icon[_ngcontent-%COMP%]{color:#000;font-size:30px}ion-input[_ngcontent-%COMP%]{color:#fff;margin-left:15px}ion-button[_ngcontent-%COMP%]{width:100%;margin-top:15px;padding-left:5%;padding-right:5%}p[_ngcontent-%COMP%]{color:#000;text-align:center;font-size:14px}.login[_ngcontent-%COMP%]{border-radius:15px;height:100px;margin-top:24px;margin-left:auto;margin-right:auto;display:block}.text[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:400;font-size:30px;line-height:35px;color:#fff}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important}u[_ngcontent-%COMP%]{-webkit-text-decoration-color:#fff;text-decoration-color:#fff}@media only screen and (max-width:360px){.text[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:400;font-size:24px;color:#fff}}.item-highlight[_ngcontent-%COMP%]{border-bottom:1px solid #d3d3d3}"]}),O)}],S=((w=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:w}),w.\u0275inj=s.Gb({factory:function(e){return new(e||w)},imports:[[a.i.forChild(k)],a.i]}),w),I=o("w1Tr"),C=((x=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:x}),x.\u0275inj=s.Gb({factory:function(e){return new(e||x)},providers:[g.a,b.a],imports:[[r.b,n.d,n.k,i.L,l.b,I.a,S]]}),x)}}]);