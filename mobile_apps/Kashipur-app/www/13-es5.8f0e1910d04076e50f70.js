function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1cI6":function(t,n,e){"use strict";e.r(n),e.d(n,"ActivateOtpPageModule",(function(){return O}));var o=e("ofXK"),r=e("3Pt+"),i=e("TEn/"),a=e("tyNb"),c=e("mrSG"),s=e("fXoL"),f=e("Wdxn"),u=e("XNvx");function b(t,n){1&t&&(s.Pb(0,"div"),s.nc(1,"*OTP is required"),s.Ob())}function l(t,n){if(1&t&&(s.Pb(0,"div",11),s.lc(1,b,2,0,"div",12),s.Ob()),2&t){var e=s.Zb();s.zb(1),s.cc("ngIf",e.f.otp.errors.required)}}var d,p,m,g=[{path:"",component:(d=function(){function t(n,e,o,r,i){_classCallCheck(this,t),this.fb=n,this.common=e,this.api=o,this.alertController=r,this.router=i,this.validateForm=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.ActivateForm=this.fb.group({otp:["",[r.l.required]]})}},{key:"verifyActivateUserOtp",value:function(t){var n=this;this.validateForm=!0,this.ActivateForm.invalid||this.api.verifyActivateUserOtp(t).subscribe((function(t){n.presentAlertConfirm("Account is Activated")}),(function(t){"OTP doesn't matched"===t.error.message&&n.common.presentToast(t.error.message),500===t.status&&n.common.presentToast("Something Went Wrong!! Try after sometime")}))}},{key:"presentAlertConfirm",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,o=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({cssClass:"my-custom-class",header:t,message:"Login to your Account",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(t){}},{text:"Okay",handler:function(){o.router.navigate(["login"])}}]});case 2:return e=n.sent,n.next=5,e.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"f",get:function(){return this.ActivateForm.controls}}]),t}(),d.\u0275fac=function(t){return new(t||d)(s.Jb(r.a),s.Jb(f.a),s.Jb(u.a),s.Jb(i.a),s.Jb(a.g))},d.\u0275cmp=s.Db({type:d,selectors:[["app-activate-otp"]],decls:21,vars:2,consts:[[1,"background",2,"background-color","rgb(6, 15, 66)"],["slot","start"],["name","arrow-back","routerLink","/login"],[1,"text"],[1,"ion-padding",3,"formGroup","ngSubmit"],[2,"padding-left","10%","padding-right","10%"],[1,"ion-float-right"],["position","fixed",2,"color","#fff"],["type","text","formControlName","otp",2,"color","#fff"],["id","errorStyle","class","invalid-feedback",4,"ngIf"],["type","ngSubmit",1,"button-submit","des-button"],["id","errorStyle",1,"invalid-feedback"],[4,"ngIf"]],template:function(t,n){1&t&&(s.Pb(0,"ion-content",0),s.Pb(1,"ion-toolbar"),s.Pb(2,"ion-buttons",1),s.Kb(3,"ion-icon",2),s.Ob(),s.Ob(),s.Pb(4,"ion-grid"),s.Pb(5,"p",3),s.nc(6,"Your account is not activated yet. "),s.Kb(7,"br"),s.nc(8," We had sent you OTP, please confirm"),s.Ob(),s.Pb(9,"ion-card"),s.Pb(10,"form",4),s.Xb("ngSubmit",(function(){return n.verifyActivateUserOtp(n.ActivateForm.value)})),s.Pb(11,"ion-row",5),s.Pb(12,"ion-col",6),s.Pb(13,"div"),s.Pb(14,"ion-item"),s.Pb(15,"ion-label",7),s.nc(16," OTP"),s.Ob(),s.Kb(17,"ion-input",8),s.Ob(),s.lc(18,l,2,1,"div",9),s.Ob(),s.Ob(),s.Pb(19,"button",10),s.nc(20," Activate Account"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&t&&(s.zb(10),s.cc("formGroup",n.ActivateForm),s.zb(8),s.cc("ngIf",n.validateForm&&n.f.otp.errors))},directives:[i.j,i.K,i.f,i.p,i.S,a.h,i.n,i.g,r.m,r.i,r.c,i.B,i.i,i.r,i.s,i.q,i.U,r.h,r.b,o.k],styles:[".background[_ngcontent-%COMP%]{--background:url(login.9a1588ab6f3f11e65996.png) repeat-x 0% 0%}.text[_ngcontent-%COMP%]{color:#fff;text-align:center;font-size:24px;margin-top:50%}ion-card[_ngcontent-%COMP%]{background:hsla(0,0%,76.9%,.12);border-radius:15px}ion-item[_ngcontent-%COMP%]{--background:transparent!important;--border-color:#fff}ion-input[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:400;font-size:24px;color:#fff}"]}),d)}],v=((p=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:p}),p.\u0275inj=s.Gb({factory:function(t){return new(t||p)},imports:[[a.i.forChild(g)],a.i]}),p),h=e("tk/3"),O=((m=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:m}),m.\u0275inj=s.Gb({factory:function(t){return new(t||m)},providers:[u.a],imports:[[o.b,r.d,r.k,h.b,i.L,v]]}),m)}}]);