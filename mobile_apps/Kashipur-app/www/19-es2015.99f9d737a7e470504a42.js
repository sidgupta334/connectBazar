(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{X3zk:function(e,o,t){"use strict";t.r(o),t.d(o,"LoginPageModule",(function(){return I}));var n=t("ofXK"),i=t("3Pt+"),r=t("TEn/"),a=t("tyNb"),c=t("mrSG"),s=t("fXoL"),l=t("tk/3"),g=t("XNvx"),b=t("Wdxn"),d=t("VYYF"),m=t("up+p");function f(e,o){1&e&&(s.Pb(0,"div"),s.nc(1,"*Email is required"),s.Ob())}function u(e,o){1&e&&(s.Pb(0,"div"),s.nc(1,"Enter valid *email"),s.Ob())}function p(e,o){if(1&e&&(s.Pb(0,"div",22),s.lc(1,f,2,0,"div",21),s.lc(2,u,2,0,"div",21),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.f.email.errors.required),s.zb(1),s.cc("ngIf",e.f.email.errors.email)}}function h(e,o){1&e&&(s.Pb(0,"div"),s.nc(1,"*Password is required"),s.Ob())}function w(e,o){if(1&e&&(s.Pb(0,"div",22),s.lc(1,h,2,0,"div",21),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.f.password.errors.required)}}function O(e,o){1&e&&(s.Nb(0),s.Pb(1,"p",23),s.nc(2," New User? "),s.Pb(3,"u"),s.nc(4,"Signup instead"),s.Ob(),s.Ob(),s.Mb())}const v=[{path:"",component:(()=>{class e{constructor(e,o,t,n,i,r,a,c,s){this.fb=e,this.http=o,this.api=t,this.alert=n,this.statusBar=i,this.router=r,this.googlePlus=a,this.loadingController=c,this.menu=s,this.formValidation=!1,this.signupText=!0}ngOnInit(){this.menu.swipeGesture(!1),this.LoginForm=this.fb.group({email:["",[i.l.required,i.l.email]],password:["",[i.l.required]]}),this.removeAllStorageItems()}removeAllStorageItems(){localStorage.removeItem("grocericatoken"),localStorage.removeItem("userDetail"),localStorage.removeItem("user"),localStorage.removeItem("userIdSignUp"),localStorage.removeItem("grocericastart"),localStorage.removeItem("grocericaQuantity"),localStorage.removeItem("grocericaSelectedAddress"),localStorage.removeItem("grocericaforgotEmail"),localStorage.removeItem("userId"),localStorage.removeItem("grocericaProduct"),localStorage.removeItem("reviewProduct"),localStorage.removeItem("viewFeedback"),localStorage.removeItem("grocericaOrderId"),localStorage.removeItem("grocericaViewCart"),localStorage.removeItem("grocericaemail"),localStorage.removeItem("userIdSignUp"),localStorage.removeItem("cartCount")}get f(){return this.LoginForm.controls}login(e){return Object(c.a)(this,void 0,void 0,(function*(){if(this.formValidation=!0,this.LoginForm.invalid)return;const o=this.api.login(e),t=yield this.loadingController.create({message:"Please wait..."});t.present(),o.subscribe(e=>Object(c.a)(this,void 0,void 0,(function*(){yield t.dismiss(),localStorage.setItem("grocericatoken",e.token),localStorage.setItem("grocericastart","starttoken"),localStorage.setItem("grocericaemail",e.email),localStorage.setItem("user",e.fullName),localStorage.setItem("userDetail",JSON.stringify(e)),this.router.navigate(["/home"])})),e=>Object(c.a)(this,void 0,void 0,(function*(){if(yield t.dismiss(),"PENDING"===e.error.message){const o=yield this.loadingController.create({message:"Please wait..."});o.present(),this.api.activateAccount(e.error.userId).subscribe(e=>Object(c.a)(this,void 0,void 0,(function*(){yield o.dismiss(),this.router.navigate(["/activate-otp"])})),e=>{})}400===e.status&&this.alert.presentToast("Invalid Details")})))}))}googleSignIn(){return Object(c.a)(this,void 0,void 0,(function*(){this.socialAccount=JSON.stringify({m1:"qqqqqqqqqqqqqqqqqqqqqnnnnnnnnnnnnnnnndsfjfskjfsdkjfdkfuifsdkjdeuidbjkediwefbkefwuifewkjfewjkfeiufewjbwefjkefw",m2:"klwdjhfwuhrwjwfjnewknoefiofwofwnlewnewdkjewjbewjweewjnkdejnewjoweohenljwejbrwbrvkhrwevrwhevhjvhjwekbrwhjreiou"});const e=yield this.loadingController.create({message:"Please wait..."});e.present(),this.googlePlus.login({scopes:"profile email phone"}).then(o=>{e.dismiss(),this.socialAccount=JSON.stringify(o),console.log("Result of google login: ",o),localStorage.setItem("grocericatoken",o.accessToken),localStorage.setItem("grocericastart","starttoken"),localStorage.setItem("grocericaemail",o.email),localStorage.setItem("user",o.givenName),this.userData=o}).catch(o=>{e.dismiss(),console.log("GOOGLE LOGIN FAILED: --\x3e ",o),this.userData="Error "+JSON.stringify(o),this.alert.presentToast("Something went wrong")})}))}ionViewWillEnter(){localStorage.getItem("grocericatoken")&&(this.signupText=!1)}}return e.\u0275fac=function(o){return new(o||e)(s.Jb(i.a),s.Jb(l.a),s.Jb(g.a),s.Jb(b.a),s.Jb(d.a),s.Jb(a.g),s.Jb(m.a),s.Jb(r.N),s.Jb(r.O))},e.\u0275cmp=s.Db({type:e,selectors:[["app-login"]],decls:52,vars:6,consts:[["src","../../assets/login.png","alt","caring mother",2,"background-color","rgb(6, 15, 66)","object-fit","cover"],[1,"background"],["src","../../assets/icon.png","alt","caring mother",1,"login"],[1,"text"],["expand","block",2,"--background","rgb(155, 0, 0)",3,"click"],["slot","start","src","../../assets/search.svg"],[1,"flex-container"],[2,"word-break","break-word"],[3,"formGroup","ngSubmit"],[1,"ion-float-left",2,"border-bottom","1px solid #fff"],["lines","none",2,"background-color","transparent"],["position","fixed",2,"color","#fff"],["formControlName","email"],["id","errorStyle","class","invalid-feedback",4,"ngIf"],[1,"ion-float-right",2,"border-bottom","1px solid #fff"],["lines","none"],["type","password","formControlName","password"],[1,"login-ctr"],["type","ngSubmit",1,"des-button","login-btn",3,"disabled"],["routerLink","/forgotpassord",2,"text-align","start","color","white","margin-left","20px","font-size","15px"],["routerLink","/home",2,"text-align","end","color","white","margin-right","20px","font-size","15px"],[4,"ngIf"],["id","errorStyle",1,"invalid-feedback"],["routerLink","/signup",1,"signup",2,"color","white","font-size","18px"]],template:function(e,o){1&e&&(s.Kb(0,"img",0),s.Pb(1,"ion-content",1),s.Pb(2,"div"),s.Kb(3,"img",2),s.Pb(4,"p",3),s.nc(5,"Welcome to Connect Bazar, "),s.Kb(6,"br"),s.nc(7,"Let's Sign in"),s.Ob(),s.Pb(8,"ion-button",4),s.Xb("click",(function(){return o.googleSignIn()})),s.Kb(9,"ion-icon",5),s.nc(10," LOGIN WITH GOOGLE"),s.Ob(),s.Pb(11,"div",6),s.Pb(12,"span"),s.nc(13,"------ "),s.Ob(),s.Pb(14,"span"),s.nc(15,"OR"),s.Ob(),s.Pb(16,"span"),s.nc(17," ------"),s.Ob(),s.Ob(),s.Pb(18,"div",7),s.nc(19),s.Ob(),s.Pb(20,"ion-card"),s.Pb(21,"ion-grid"),s.Pb(22,"form",8),s.Xb("ngSubmit",(function(){return o.login(o.LoginForm.value)})),s.Pb(23,"ion-row"),s.Pb(24,"ion-col",9),s.Pb(25,"div"),s.Pb(26,"ion-item",10),s.Pb(27,"ion-label",11),s.nc(28,"Email"),s.Ob(),s.Kb(29,"ion-input",12),s.Ob(),s.lc(30,p,3,2,"div",13),s.Ob(),s.Ob(),s.Ob(),s.Pb(31,"ion-row"),s.Pb(32,"ion-col",14),s.Pb(33,"div"),s.Pb(34,"ion-item",15),s.Pb(35,"ion-label",11),s.nc(36," Password"),s.Ob(),s.Kb(37,"ion-input",16),s.Ob(),s.lc(38,w,2,1,"div",13),s.Ob(),s.Ob(),s.Ob(),s.Pb(39,"div",17),s.Pb(40,"ion-button",18),s.nc(41," Login"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(42,"ion-row"),s.Pb(43,"ion-col"),s.Pb(44,"p",19),s.Pb(45,"u"),s.nc(46,"Forgot password?"),s.Ob(),s.Ob(),s.Ob(),s.Pb(47,"ion-col"),s.Pb(48,"p",20),s.Pb(49,"u"),s.nc(50," Skip for now >> "),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.lc(51,O,5,0,"ng-container",21),s.Ob()),2&e&&(s.zb(19),s.oc(o.socialAccount),s.zb(3),s.cc("formGroup",o.LoginForm),s.zb(8),s.cc("ngIf",o.formValidation&&o.f.email.errors),s.zb(8),s.cc("ngIf",o.formValidation&&o.f.password.errors),s.zb(2),s.cc("disabled",o.LoginForm.invalid),s.zb(11),s.cc("ngIf",o.signupText))},directives:[r.j,r.e,r.p,r.g,r.n,i.m,i.i,i.c,r.B,r.i,r.r,r.s,r.q,r.U,i.h,i.b,n.k,r.S,a.h],styles:[".background[_ngcontent-%COMP%]{--background:#060f42;margin-top:200px!important}ion-item[_ngcontent-%COMP%]{--background:transparent!important}ion-card[_ngcontent-%COMP%]{align-items:center;height:220px;background:hsla(0,0%,76.9%,.12);border-radius:15px}ion-icon[_ngcontent-%COMP%]{color:#000;font-size:30px}ion-input[_ngcontent-%COMP%]{color:#fff;margin-left:15px}ion-button[_ngcontent-%COMP%]{width:100%;margin-top:15px;padding-left:5%;padding-right:5%}p[_ngcontent-%COMP%]{color:#000;text-align:center;font-size:14px}.login[_ngcontent-%COMP%]{border-radius:15px;height:100px;margin-top:24px;margin-left:auto;margin-right:auto;display:block}.text[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:400;font-size:30px;line-height:35px;color:#fff}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important}u[_ngcontent-%COMP%]{-webkit-text-decoration-color:#fff;text-decoration-color:#fff}@media only screen and (max-width:360px){.text[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:400;font-size:24px;color:#fff}}.item-highlight[_ngcontent-%COMP%]{border-bottom:1px solid #d3d3d3}.flex-container[_ngcontent-%COMP%]{display:flex;width:90%;margin-left:5%;flex-direction:row;justify-content:center;align-items:center}"]}),e})()}];let P=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(o){return new(o||e)},imports:[[a.i.forChild(v)],a.i]}),e})();var k=t("w1Tr");let I=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(o){return new(o||e)},providers:[g.a,m.a],imports:[[n.b,i.d,i.k,r.L,l.b,k.a,P]]}),e})()}}]);