function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{X3zk:function(t,e,n){"use strict";n.r(e),n.d(e,"LoginPageModule",(function(){return C}));var o=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),a=n("tyNb"),c=n("mrSG"),s=n("fXoL"),l=n("tk/3"),b=n("XNvx"),u=n("Wdxn"),g=n("VYYF");function f(t,e){1&t&&(s.Pb(0,"div"),s.lc(1,"*Email is required"),s.Ob())}function d(t,e){1&t&&(s.Pb(0,"div"),s.lc(1,"Enter valid *email"),s.Ob())}function p(t,e){if(1&t&&(s.Pb(0,"div",14),s.jc(1,f,2,0,"div",15),s.jc(2,d,2,0,"div",15),s.Ob()),2&t){var n=s.Zb();s.zb(1),s.cc("ngIf",n.f.email.errors.required),s.zb(1),s.cc("ngIf",n.f.email.errors.email)}}function m(t,e){1&t&&(s.Pb(0,"div"),s.lc(1,"*Password is required"),s.Ob())}function h(t,e){if(1&t&&(s.Pb(0,"div",14),s.jc(1,m,2,0,"div",15),s.Ob()),2&t){var n=s.Zb();s.zb(1),s.cc("ngIf",n.f.password.errors.required)}}var v,P,O,w=[{path:"",component:(v=function(){function t(e,n,o,r,i,a,c){_classCallCheck(this,t),this.fb=e,this.http=n,this.api=o,this.alert=r,this.statusBar=i,this.router=a,this.loadingController=c,this.formValidation=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.LoginForm=this.fb.group({email:["",[r.j.required,r.j.email]],password:["",[r.j.required]]})}},{key:"login",value:function(t){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,o,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),this.formValidation=!0,!this.LoginForm.invalid){e.next=2;break}return e.abrupt("return");case 2:return n=this.api.login(t),e.next=5,this.loadingController.create({message:"Please wait..."});case 5:(o=e.sent).present(),n.subscribe((function(t){return Object(c.a)(r,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,o.dismiss();case 3:localStorage.setItem("grocericatoken",t.token),localStorage.setItem("grocericastart","starttoken"),localStorage.setItem("grocericaemail",t.email),localStorage.setItem("user",t.fullName),localStorage.setItem("userDetail",JSON.stringify(t)),window.location.reload(),this.router.navigate(["/home"]);case 10:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(c.a)(r,void 0,void 0,regeneratorRuntime.mark((function e(){var n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.dismiss();case 2:if("PENDING"!==t.error.message){e.next=7;break}return e.next=5,this.loadingController.create({message:"Please wait..."});case 5:(n=e.sent).present(),this.api.activateAccount(t.error.userId).subscribe((function(t){return Object(c.a)(r,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,n.dismiss();case 3:this.router.navigate(["/activate-otp"]);case 4:case"end":return e.stop()}}),e,this)})))}),(function(t){console.log(t)}));case 7:400===t.status&&this.alert.presentToast("Invalid Details");case 8:case"end":return e.stop()}}),e,this)})))}));case 7:case"end":return e.stop()}}),e,this)})))}},{key:"f",get:function(){return this.LoginForm.controls}}]),t}(),v.\u0275fac=function(t){return new(t||v)(s.Jb(r.a),s.Jb(l.a),s.Jb(b.a),s.Jb(u.a),s.Jb(g.a),s.Jb(a.g),s.Jb(i.G))},v.\u0275cmp=s.Db({type:v,selectors:[["app-login"]],decls:34,vars:3,consts:[["src","../../assets/login.png","alt","caring mother",2,"background-color","rgb(6, 15, 66)","object-fit","cover"],[1,"background"],["src","../../assets/icon.png","alt","caring mother",1,"login"],[1,"text"],[3,"formGroup","ngSubmit"],[1,"ion-float-left"],[2,"background-color","transparent"],["position","fixed",2,"color","#919090"],["formControlName","email"],["id","errorStyle","class","invalid-feedback",4,"ngIf"],[1,"ion-float-right"],["type","password","formControlName","password"],["color","primary","type","ngSubmit"],["routerLink","/forgotpassord",2,"text-align","start","color","white","font-size","15px","text-align","end","margin-right","15px"],["id","errorStyle",1,"invalid-feedback"],[4,"ngIf"]],template:function(t,e){1&t&&(s.Kb(0,"img",0),s.Pb(1,"ion-content",1),s.Pb(2,"div"),s.Kb(3,"img",2),s.Pb(4,"p",3),s.lc(5,"Welcome to Caring Mother, "),s.Kb(6,"br"),s.lc(7,"Let's Sign in"),s.Ob(),s.Pb(8,"ion-card"),s.Pb(9,"ion-grid"),s.Pb(10,"form",4),s.Xb("ngSubmit",(function(){return e.login(e.LoginForm.value)})),s.Pb(11,"ion-row"),s.Pb(12,"ion-col",5),s.Pb(13,"div"),s.Pb(14,"ion-item",6),s.Pb(15,"ion-label",7),s.lc(16,"User Name"),s.Ob(),s.Kb(17,"ion-input",8),s.Ob(),s.jc(18,p,3,2,"div",9),s.Ob(),s.Ob(),s.Ob(),s.Pb(19,"ion-row"),s.Pb(20,"ion-col",10),s.Pb(21,"div"),s.Pb(22,"ion-item"),s.Pb(23,"ion-label",7),s.lc(24," Password"),s.Ob(),s.Kb(25,"ion-input",11),s.Ob(),s.jc(26,h,2,1,"div",9),s.Ob(),s.Ob(),s.Ob(),s.Pb(27,"ion-button",12),s.lc(28," Login"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(29,"ion-row"),s.Pb(30,"ion-col"),s.Pb(31,"p",13),s.Pb(32,"u"),s.lc(33,"Forgot password?"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&t&&(s.zb(10),s.cc("formGroup",e.LoginForm),s.zb(8),s.cc("ngIf",e.formValidation&&e.f.email.errors),s.zb(8),s.cc("ngIf",e.formValidation&&e.f.password.errors))},directives:[i.g,i.e,i.k,r.k,r.h,r.c,i.y,i.f,i.o,i.p,i.n,i.N,r.g,r.b,o.k,i.c,i.L,a.h],styles:[".background[_ngcontent-%COMP%]{--background:#060f42;margin-top:200px!important}ion-item[_ngcontent-%COMP%]{--background:transparent!important}ion-grid[_ngcontent-%COMP%]{margin-top:40px}ion-card[_ngcontent-%COMP%]{align-items:center;height:260px;background:hsla(0,0%,76.9%,.12);border-radius:15px}ion-icon[_ngcontent-%COMP%]{color:#000;font-size:30px}ion-input[_ngcontent-%COMP%]{color:#fff;margin-left:15px}ion-button[_ngcontent-%COMP%]{width:100%;margin-top:15px;padding-left:5%;padding-right:5%}p[_ngcontent-%COMP%]{color:#000;text-align:center;font-size:14px}.login[_ngcontent-%COMP%]{border-radius:15px;height:100px;margin-top:24px;margin-left:auto;margin-right:auto;display:block}.text[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:30px;line-height:35px;color:#a4a4a4}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important}u[_ngcontent-%COMP%]{-webkit-text-decoration-color:#a4a4a4;text-decoration-color:#a4a4a4}@media only screen and (max-width:360px){.text[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:24px;color:#a4a4a4}}"]}),v)}],x=((P=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:P}),P.\u0275inj=s.Gb({factory:function(t){return new(t||P)},imports:[[a.i.forChild(w)],a.i]}),P),k=n("w1Tr"),C=((O=function t(){_classCallCheck(this,t)}).\u0275mod=s.Hb({type:O}),O.\u0275inj=s.Gb({factory:function(t){return new(t||O)},providers:[b.a],imports:[[o.b,r.d,r.i,i.E,l.b,k.a,x]]}),O)}}]);