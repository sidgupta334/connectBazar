function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,r,e){return r&&_defineProperties(t.prototype,r),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{RdcS:function(t,r,e){"use strict";e.r(r),e.d(r,"ForgotpassordPageModule",(function(){return I}));var n=e("ofXK"),o=e("TEn/"),i=e("tk/3"),s=e("tyNb"),a=e("mrSG"),c=e("3Pt+"),l=e("fXoL"),b=e("XNvx"),u=e("Wdxn");function f(t,r){1&t&&l.Lb(0)}function d(t,r){1&t&&l.Lb(0)}function m(t,r){1&t&&(l.Pb(0,"div"),l.nc(1,"*Email is required"),l.Ob())}function p(t,r){1&t&&(l.Pb(0,"div"),l.nc(1,"Enter valid *email"),l.Ob())}function g(t,r){if(1&t&&(l.Pb(0,"div",14),l.lc(1,m,2,0,"div",15),l.lc(2,p,2,0,"div",15),l.Ob()),2&t){var e=l.Zb(2);l.zb(1),l.cc("ngIf",e.f.Email.errors.required),l.zb(1),l.cc("ngIf",e.f.Email.errors.email)}}function h(t,r){if(1&t){var e=l.Qb();l.Pb(0,"ion-toolbar"),l.Pb(1,"ion-buttons",4),l.Kb(2,"ion-icon",5),l.Ob(),l.Ob(),l.Pb(3,"ion-grid"),l.Pb(4,"p",6),l.nc(5,"Forgot your password? "),l.Kb(6,"br"),l.nc(7," Let's recover it"),l.Ob(),l.Pb(8,"ion-card"),l.Pb(9,"form",7),l.Xb("ngSubmit",(function(){l.ic(e);var t=l.Zb();return t.getEmail(t.EmailForm.value)})),l.Pb(10,"ion-row"),l.Pb(11,"ion-col",8),l.Pb(12,"div"),l.Pb(13,"ion-item",9),l.Pb(14,"ion-label",10),l.nc(15," Email "),l.Ob(),l.Kb(16,"ion-input",11),l.Ob(),l.lc(17,g,3,2,"div",12),l.Ob(),l.Ob(),l.Pb(18,"button",13),l.nc(19," Send OTP"),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob()}if(2&t){var n=l.Zb();l.zb(9),l.cc("formGroup",n.EmailForm),l.zb(8),l.cc("ngIf",n.checkValid&&n.f.Email.errors)}}function P(t,r){1&t&&(l.Pb(0,"div"),l.nc(1,"*Otp is required"),l.Ob())}function v(t,r){if(1&t&&(l.Pb(0,"div",14),l.lc(1,P,2,0,"div",15),l.Ob()),2&t){var e=l.Zb(2);l.zb(1),l.cc("ngIf",e.frmValid.otp.errors.required)}}function O(t,r){1&t&&(l.Pb(0,"div"),l.nc(1,"*Password is required"),l.Ob())}function w(t,r){if(1&t&&(l.Pb(0,"div",14),l.lc(1,O,2,0,"div",15),l.Ob()),2&t){var e=l.Zb(2);l.zb(1),l.cc("ngIf",e.frmValid.newPassword.errors.required)}}function k(t,r){if(1&t){var e=l.Qb();l.Pb(0,"ion-toolbar"),l.Pb(1,"ion-buttons",16),l.Xb("click",(function(){return l.ic(e),l.Zb().route()})),l.Kb(2,"ion-icon",17),l.Ob(),l.Ob(),l.Pb(3,"ion-grid"),l.Pb(4,"p",6),l.nc(5,"Forgot your password? "),l.Kb(6,"br"),l.nc(7," Let's recover it"),l.Ob(),l.Pb(8,"ion-card"),l.Pb(9,"form",7),l.Xb("ngSubmit",(function(){l.ic(e);var t=l.Zb();return t.postOtp(t.OtpForm.value)})),l.Pb(10,"ion-row"),l.Pb(11,"ion-col",8),l.Pb(12,"div"),l.Pb(13,"ion-item",18),l.Pb(14,"ion-label",10),l.nc(15," OTP"),l.Ob(),l.Kb(16,"ion-input",19),l.Ob(),l.lc(17,v,2,1,"div",12),l.Pb(18,"ion-item",18),l.Pb(19,"ion-label",10),l.nc(20," New Password"),l.Ob(),l.Kb(21,"ion-input",20),l.Ob(),l.lc(22,w,2,1,"div",12),l.Ob(),l.Ob(),l.Pb(23,"button",13),l.nc(24," Update Password"),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob()}if(2&t){var n=l.Zb();l.zb(9),l.cc("formGroup",n.OtpForm),l.zb(8),l.cc("ngIf",n.otpFormValid&&n.frmValid.otp.errors),l.zb(5),l.cc("ngIf",n.otpFormValid&&n.frmValid.newPassword.errors)}}var y,C,x,E=[{path:"",component:(y=function(){function t(r,e,n,o,i,s,a,c){_classCallCheck(this,t),this.fb=r,this.http=e,this.api=n,this.loadingController=o,this.alertController=i,this.router=s,this.alert=a,this.menu=c,this.checkValid=!1,this.otpFormValid=!1,this.otpPost=!1,this.forgotPassword=!0}return _createClass(t,[{key:"ngOnInit",value:function(){this.menu.swipeGesture(!1),this.EmailForm=this.fb.group({Email:["",[c.l.required,c.l.email]]}),this.OtpForm=this.fb.group({otp:["",[c.l.required]],newPassword:["",[c.l.required]]})}},{key:"route",value:function(){this.otpPost=!1,this.forgotPassword=!0}},{key:"getEmail",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var e,n=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(this.checkValid=!0,!this.EmailForm.invalid){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,this.loadingController.create({message:"Please wait..."});case 4:(e=r.sent).present(),this.api.forgotPassword(t.Email).subscribe((function(r){localStorage.setItem("grocericaforgotEmail",t.Email),e.dismiss(),n.alert.presentToast("Otp Sent Successfully to your email"),n.forgotPassword=!1,n.otpPost=!0,n.otpFormValid=!1}),(function(t){e.dismiss(),"User not found"===t.error.message&&400===t.status&&n.alert.presentToast(t.error.message),500===t.status&&n.alert.presentToast("Something went wrong")}));case 6:case"end":return r.stop()}}),r,this)})))}},{key:"postOtp",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var e,n=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(this.otpFormValid=!0,!this.OtpForm.invalid){r.next=2;break}return r.abrupt("return");case 2:return t.email=localStorage.getItem("grocericaforgotEmail"),r.next=5,this.loadingController.create({message:"Please wait..."});case 5:(e=r.sent).present(),this.api.postOtp(t).subscribe((function(t){e.dismiss(),n.presentAlertConfirm(t.message)}),(function(t){e.dismiss(),"User not found"===t.error.message&&400===t.status&&n.alert.presentToast(t.error.message),"OTP doesn't matched"===t.error.message&&500===t.status&&n.alert.presentToast(t.error.message)}));case 7:case"end":return r.stop()}}),r,this)})))}},{key:"presentAlertConfirm",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var e,n=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.alertController.create({cssClass:"my-custom-class",header:t,message:"Login to your Account",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(t){}},{text:"Okay",handler:function(){n.router.navigate(["login"])}}]});case 2:return e=r.sent,r.next=5,e.present();case 5:case"end":return r.stop()}}),r,this)})))}},{key:"f",get:function(){return this.EmailForm.controls}},{key:"frmValid",get:function(){return this.OtpForm.controls}}]),t}(),y.\u0275fac=function(t){return new(t||y)(l.Jb(c.a),l.Jb(i.a),l.Jb(b.a),l.Jb(o.N),l.Jb(o.a),l.Jb(s.g),l.Jb(u.a),l.Jb(o.O))},y.\u0275cmp=l.Db({type:y,selectors:[["app-forgotpassord"]],decls:7,vars:4,consts:[[1,"background",2,"background-color","rgb(6, 15, 66)"],[4,"ngIf","ngIfThen"],["forgotEmailForm",""],["otpEnterForm",""],["slot","start"],["name","arrow-back","routerLink","/login"],[1,"text"],[1,"ion-padding",3,"formGroup","ngSubmit"],[1,"ion-float-right"],["lines","none",2,"background-color","transparent"],["position","fixed",2,"color","#fff"],["type","text","formControlName","Email",2,"color","#fff","margin-left","-15px"],["id","errorStyle","class","invalid-feedback",4,"ngIf"],["type","ngSubmit",1,"button-submit","des-button"],["id","errorStyle",1,"invalid-feedback"],[4,"ngIf"],["slot","start",3,"click"],["name","arrow-back"],["lines","none",1,"input-password"],["type","text","formControlName","otp",2,"color","#fff"],["type","password","formControlName","newPassword",2,"color","#fff"]],template:function(t,r){if(1&t&&(l.Pb(0,"ion-content",0),l.lc(1,f,1,0,"ng-container",1),l.lc(2,d,1,0,"ng-container",1),l.lc(3,h,20,2,"ng-template",null,2,l.mc),l.lc(5,k,25,3,"ng-template",null,3,l.mc),l.Ob()),2&t){var e=l.hc(4),n=l.hc(6);l.zb(1),l.cc("ngIf",r.forgotPassword)("ngIfThen",e),l.zb(1),l.cc("ngIf",r.otpPost)("ngIfThen",n)}},directives:[o.j,n.k,o.K,o.f,o.p,o.S,s.h,o.n,o.g,c.m,c.i,c.c,o.B,o.i,o.r,o.s,o.q,o.U,c.h,c.b],styles:[".text[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:30px;margin-top:44%}.input-password[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{flex:0 0 130px}ion-input[_ngcontent-%COMP%]{color:#fff}"]}),y)}],F=((x=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:x}),x.\u0275inj=l.Gb({factory:function(t){return new(t||x)},imports:[[s.i.forChild(E)],s.i]}),x),I=((C=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:C}),C.\u0275inj=l.Gb({factory:function(t){return new(t||C)},providers:[b.a],imports:[[n.b,c.d,c.k,i.b,o.L,F]]}),C)}}]);