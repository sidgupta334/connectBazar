function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{X3zk:function(e,t,o){"use strict";o.r(t),o.d(t,"LoginPageModule",(function(){return y}));var r=o("ofXK"),n=o("3Pt+"),i=o("TEn/"),a=o("tyNb"),c=o("mrSG"),s=o("fXoL"),l=o("tk/3"),g=o("XNvx"),u=o("Wdxn"),b=o("VYYF"),m=o("up+p");function f(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*Email is required"),s.Ob())}function d(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"Enter valid *email"),s.Ob())}function p(e,t){if(1&e&&(s.Pb(0,"div",21),s.lc(1,f,2,0,"div",20),s.lc(2,d,2,0,"div",20),s.Ob()),2&e){var o=s.Zb();s.zb(1),s.cc("ngIf",o.f.email.errors.required),s.zb(1),s.cc("ngIf",o.f.email.errors.email)}}function h(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*Password is required"),s.Ob())}function v(e,t){if(1&e&&(s.Pb(0,"div",21),s.lc(1,h,2,0,"div",20),s.Ob()),2&e){var o=s.Zb();s.zb(1),s.cc("ngIf",o.f.password.errors.required)}}function O(e,t){1&e&&(s.Nb(0),s.Pb(1,"p",22),s.nc(2," New User? "),s.Pb(3,"u"),s.nc(4,"Signup instead"),s.Ob(),s.Ob(),s.Mb())}var P,I,k,w=[{path:"",component:(P=function(){function e(t,o,r,n,i,a,c,s,l){_classCallCheck(this,e),this.fb=t,this.http=o,this.api=r,this.alert=n,this.statusBar=i,this.router=a,this.googlePlus=c,this.loadingController=s,this.menu=l,this.formValidation=!1,this.signupText=!0}return _createClass(e,[{key:"ngOnInit",value:function(){this.menu.swipeGesture(!1),this.LoginForm=this.fb.group({email:["",[n.l.required,n.l.email]],password:["",[n.l.required]]}),this.removeAllStorageItems()}},{key:"removeAllStorageItems",value:function(){localStorage.removeItem("grocericatoken"),localStorage.removeItem("userDetail"),localStorage.removeItem("user"),localStorage.removeItem("userIdSignUp"),localStorage.removeItem("grocericastart"),localStorage.removeItem("grocericaQuantity"),localStorage.removeItem("grocericaSelectedAddress"),localStorage.removeItem("grocericaforgotEmail"),localStorage.removeItem("userId"),localStorage.removeItem("grocericaProduct"),localStorage.removeItem("reviewProduct"),localStorage.removeItem("viewFeedback"),localStorage.removeItem("grocericaOrderId"),localStorage.removeItem("grocericaViewCart"),localStorage.removeItem("grocericaemail"),localStorage.removeItem("userIdSignUp"),localStorage.removeItem("cartCount")}},{key:"login",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var o,r,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.formValidation=!0,!this.LoginForm.invalid){t.next=2;break}return t.abrupt("return");case 2:return o=this.api.login(e),t.next=5,this.loadingController.create({message:"Please wait..."});case 5:(r=t.sent).present(),o.subscribe((function(e){return Object(c.a)(n,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.dismiss();case 2:localStorage.setItem("grocericatoken",e.token),localStorage.setItem("grocericastart","starttoken"),localStorage.setItem("grocericaemail",e.email),localStorage.setItem("user",e.fullName),localStorage.setItem("userDetail",JSON.stringify(e)),this.router.navigate(["/home"]);case 8:case"end":return t.stop()}}),t,this)})))}),(function(e){return Object(c.a)(n,void 0,void 0,regeneratorRuntime.mark((function t(){var o,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.dismiss();case 2:if("PENDING"!==e.error.message){t.next=7;break}return t.next=5,this.loadingController.create({message:"Please wait..."});case 5:(o=t.sent).present(),this.api.activateAccount(e.error.userId).subscribe((function(e){return Object(c.a)(n,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.dismiss();case 2:this.router.navigate(["/activate-otp"]);case 3:case"end":return e.stop()}}),e,this)})))}),(function(e){}));case 7:400===e.status&&this.alert.presentToast("Invalid Details");case 8:case"end":return t.stop()}}),t,this)})))}));case 7:case"end":return t.stop()}}),t,this)})))}},{key:"googleSignIn",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({message:"Please wait..."});case 2:(t=e.sent).present(),this.googlePlus.login({scopes:"profile email phone"}).then((function(e){t.dismiss(),o.socialAccount=JSON.stringify(e),console.log("Result of google login: ",e),localStorage.setItem("grocericastart","starttoken"),localStorage.setItem("grocericaemail",e.email),localStorage.setItem("user",e.displayName),o.api.loginAsSocial({email:e.email,fullName:e.displayName,userId:e.userId}).subscribe((function(e){localStorage.setItem("grocericatoken",e.token),o.router.navigate(["/home"])}),(function(t){"PHONE_REQUIRED"==t.error.message?(localStorage.setItem("grocericastart","starttoken"),localStorage.setItem("grocericaemail",e.email),localStorage.setItem("user",e.displayName),localStorage.setItem("grocericatoken",t.error.token),o.router.navigate(["/socialSignUp"])):o.alert.presentToast("Unable to login, please try again")})),o.userData=e})).catch((function(e){t.dismiss(),console.log("GOOGLE LOGIN FAILED: --\x3e ",e),o.userData="Error "+JSON.stringify(e),o.alert.presentToast("Something went wrong")}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"ionViewWillEnter",value:function(){localStorage.getItem("grocericatoken")&&(this.signupText=!1)}},{key:"f",get:function(){return this.LoginForm.controls}}]),e}(),P.\u0275fac=function(e){return new(e||P)(s.Jb(n.a),s.Jb(l.a),s.Jb(g.a),s.Jb(u.a),s.Jb(b.a),s.Jb(a.g),s.Jb(m.a),s.Jb(i.N),s.Jb(i.O))},P.\u0275cmp=s.Db({type:P,selectors:[["app-login"]],decls:51,vars:5,consts:[["src","../../assets/login.png","alt","caring mother",2,"background-color","rgb(6, 15, 66)","object-fit","cover"],[1,"background"],["src","../../assets/icon.png","alt","caring mother",1,"login"],[1,"text"],["expand","block",2,"--background","rgb(155, 0, 0)",3,"click"],["slot","start","src","../../assets/search.svg"],[1,"flex-container"],[3,"formGroup","ngSubmit"],[1,"ion-float-left",2,"border-bottom","1px solid #fff"],["lines","none",2,"background-color","transparent"],["position","fixed",2,"color","#fff"],["formControlName","email"],["id","errorStyle","class","invalid-feedback",4,"ngIf"],[1,"ion-float-right",2,"border-bottom","1px solid #fff"],["lines","none"],["type","password","formControlName","password"],[1,"login-ctr"],["type","ngSubmit",1,"button-submit","des-button",3,"disabled"],["routerLink","/forgotpassord",2,"text-align","start","color","white","margin-left","20px","font-size","15px"],["routerLink","/home",2,"text-align","end","color","white","margin-right","20px","font-size","15px"],[4,"ngIf"],["id","errorStyle",1,"invalid-feedback"],["routerLink","/signup",1,"signup",2,"color","white","font-size","18px"]],template:function(e,t){1&e&&(s.Kb(0,"img",0),s.Pb(1,"ion-content",1),s.Pb(2,"div"),s.Kb(3,"img",2),s.Pb(4,"p",3),s.nc(5,"Welcome to Connect Bazar, "),s.Kb(6,"br"),s.nc(7,"Let's Sign in"),s.Ob(),s.Pb(8,"ion-button",4),s.Xb("click",(function(){return t.googleSignIn()})),s.Kb(9,"ion-icon",5),s.nc(10," LOGIN WITH GOOGLE"),s.Ob(),s.Pb(11,"div",6),s.Kb(12,"br"),s.Kb(13,"br"),s.Kb(14,"br"),s.Pb(15,"span"),s.nc(16,"OR"),s.Ob(),s.Kb(17,"br"),s.Kb(18,"br"),s.Ob(),s.Pb(19,"ion-card"),s.Pb(20,"ion-grid"),s.Pb(21,"form",7),s.Xb("ngSubmit",(function(){return t.login(t.LoginForm.value)})),s.Pb(22,"ion-row"),s.Pb(23,"ion-col",8),s.Pb(24,"div"),s.Pb(25,"ion-item",9),s.Pb(26,"ion-label",10),s.nc(27,"Email"),s.Ob(),s.Kb(28,"ion-input",11),s.Ob(),s.lc(29,p,3,2,"div",12),s.Ob(),s.Ob(),s.Ob(),s.Pb(30,"ion-row"),s.Pb(31,"ion-col",13),s.Pb(32,"div"),s.Pb(33,"ion-item",14),s.Pb(34,"ion-label",10),s.nc(35," Password"),s.Ob(),s.Kb(36,"ion-input",15),s.Ob(),s.lc(37,v,2,1,"div",12),s.Ob(),s.Ob(),s.Ob(),s.Pb(38,"div",16),s.Pb(39,"button",17),s.nc(40," Login"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(41,"ion-row"),s.Pb(42,"ion-col"),s.Pb(43,"p",18),s.Pb(44,"u"),s.nc(45,"Forgot password?"),s.Ob(),s.Ob(),s.Ob(),s.Pb(46,"ion-col"),s.Pb(47,"p",19),s.Pb(48,"u"),s.nc(49," Skip for now >> "),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.lc(50,O,5,0,"ng-container",20),s.Ob()),2&e&&(s.zb(21),s.cc("formGroup",t.LoginForm),s.zb(8),s.cc("ngIf",t.formValidation&&t.f.email.errors),s.zb(8),s.cc("ngIf",t.formValidation&&t.f.password.errors),s.zb(2),s.cc("disabled",t.LoginForm.invalid),s.zb(11),s.cc("ngIf",t.signupText))},directives:[i.j,i.e,i.p,i.g,i.n,n.m,n.i,n.c,i.B,i.i,i.r,i.s,i.q,i.U,n.h,n.b,r.k,i.S,a.h],styles:[".background[_ngcontent-%COMP%]{--background:#060f42;margin-top:200px!important}ion-item[_ngcontent-%COMP%]{--background:transparent!important}ion-card[_ngcontent-%COMP%]{align-items:center;height:220px;background:hsla(0,0%,76.9%,.12);border-radius:15px}ion-icon[_ngcontent-%COMP%]{color:#000;font-size:30px}ion-input[_ngcontent-%COMP%]{color:#fff}ion-button[_ngcontent-%COMP%]{width:100%;margin-top:15px;padding-left:5%;padding-right:5%}p[_ngcontent-%COMP%]{color:#000;text-align:center;font-size:14px}.login[_ngcontent-%COMP%]{border-radius:15px;height:100px;margin-top:24px;margin-left:auto;margin-right:auto;display:block}.text[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:400;font-size:30px;line-height:35px;color:#fff}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important}u[_ngcontent-%COMP%]{-webkit-text-decoration-color:#fff;text-decoration-color:#fff}@media only screen and (max-width:360px){.text[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:400;font-size:24px;color:#fff}}.item-highlight[_ngcontent-%COMP%]{border-bottom:1px solid #d3d3d3}.flex-container[_ngcontent-%COMP%]{display:flex;width:90%;margin-left:5%;flex-direction:row;justify-content:center;align-items:center}"]}),P)}],S=((I=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:I}),I.\u0275inj=s.Gb({factory:function(e){return new(e||I)},imports:[[a.i.forChild(w)],a.i]}),I),x=o("w1Tr"),y=((k=function e(){_classCallCheck(this,e)}).\u0275mod=s.Hb({type:k}),k.\u0275inj=s.Gb({factory:function(e){return new(e||k)},providers:[g.a,m.a],imports:[[r.b,n.d,n.k,i.L,l.b,x.a,S]]}),k)}}]);