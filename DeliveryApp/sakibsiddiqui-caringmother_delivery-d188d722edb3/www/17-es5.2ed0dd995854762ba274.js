function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,o,n){return o&&_defineProperties(e.prototype,o),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{cRhG:function(e,o,n){"use strict";n.r(o),n.d(o,"ProfilePageModule",(function(){return M}));var t,i=n("ofXK"),r=n("3Pt+"),l=n("TEn/"),c=n("tyNb"),a=n("mrSG"),b=n("fXoL"),s=n("Wdxn"),u=n("tk/3"),f=n("lJxs"),d=n("Bl/W"),g=((t=function(){function e(o,n){_classCallCheck(this,e),this.http=o,this.url=n,this.baseUrl=d.a.url}return _createClass(e,[{key:"getUserDetails",value:function(){var e=new u.c;return e=e.set("token",localStorage.getItem("grocericatoken")),this.http.get(this.baseUrl+"/users/me",{headers:e}).pipe(Object(f.a)((function(e){return e})))}},{key:"updateProfile",value:function(e){console.log(e),console.log(e.dob),console.log(e.email),console.log(e.name),console.log(e.gender),console.log(e.mobile),console.log(e.userId);var o=new u.c;return o=o.set("token",localStorage.getItem("grocericatoken")),this.http.post(this.baseUrl+"/users/update",{dob:e.dob,email:e.email,fullName:e.name,gender:e.gender,mobile:e.mobile,userId:e.userId},{headers:o}).pipe(Object(f.a)((function(e){return e})))}}]),e}()).\u0275fac=function(e){return new(e||t)(b.Tb(u.a),b.Tb(d.a))},t.\u0275prov=b.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t);function m(e,o){1&e&&b.Lb(0)}function p(e,o){1&e&&b.Lb(0)}function h(e,o){if(1&e){var n=b.Qb();b.Pb(0,"h1"),b.lc(1,"View Your Profile"),b.Ob(),b.Pb(2,"ion-card",11),b.Pb(3,"div",12),b.Pb(4,"p"),b.lc(5),b.Ob(),b.Ob(),b.Pb(6,"ion-list"),b.Pb(7,"ion-item"),b.Pb(8,"ion-label",13),b.lc(9,"Name: "),b.Pb(10,"span",14),b.lc(11),b.Ob(),b.Ob(),b.Ob(),b.Pb(12,"ion-item"),b.Pb(13,"ion-label",13),b.lc(14,"DOB: "),b.Pb(15,"span",14),b.lc(16),b.Ob(),b.Ob(),b.Ob(),b.Pb(17,"ion-item"),b.Pb(18,"ion-label",13),b.lc(19,"Email Id: "),b.Pb(20,"span",14),b.lc(21),b.Ob(),b.Ob(),b.Ob(),b.Pb(22,"ion-item"),b.Pb(23,"ion-label",13),b.lc(24,"Phone No: "),b.Pb(25,"span",14),b.lc(26),b.Ob(),b.Ob(),b.Ob(),b.Pb(27,"ion-item"),b.Pb(28,"ion-label",13),b.lc(29,"Gender: "),b.Pb(30,"span",14),b.lc(31),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(32,"ion-fab",15),b.Pb(33,"ion-fab-button",16),b.Xb("click",(function(){return b.gc(n),b.Zb().editProfile()})),b.Kb(34,"img",17),b.Ob(),b.Ob()}if(2&e){var t=b.Zb();b.zb(5),b.mc(t.letter),b.zb(6),b.mc(null==t.user?null:t.user.fullName),b.zb(5),b.mc(null==t.user?null:t.user.dob),b.zb(5),b.mc(null==t.user?null:t.user.email),b.zb(5),b.mc(null==t.user?null:t.user.mobile),b.zb(5),b.mc(null==t.user?null:t.user.gender)}}function P(e,o){1&e&&(b.Pb(0,"div"),b.lc(1,"*Name is required"),b.Ob())}function O(e,o){if(1&e&&(b.Pb(0,"div",26),b.jc(1,P,2,0,"div",10),b.Ob()),2&e){var n=b.Zb(2);b.zb(1),b.cc("ngIf",n.f.name.errors.required)}}function v(e,o){1&e&&(b.Pb(0,"div",28),b.lc(1," *Dob is required "),b.Ob())}function k(e,o){if(1&e&&(b.Pb(0,"div",26),b.jc(1,v,2,0,"div",27),b.Ob()),2&e){var n=b.Zb(2);b.zb(1),b.cc("ngIf",n.f.dob.errors.required)}}function w(e,o){1&e&&(b.Pb(0,"div",28),b.lc(1," *gender is required "),b.Ob())}function y(e,o){if(1&e&&(b.Pb(0,"div",26),b.jc(1,w,2,0,"div",27),b.Ob()),2&e){var n=b.Zb(2);b.zb(1),b.cc("ngIf",n.f.gender.errors.required)}}function C(e,o){if(1&e&&(b.Pb(0,"form",18),b.Pb(1,"h1"),b.lc(2,"Edit Your Profile"),b.Ob(),b.Pb(3,"ion-card",11),b.Pb(4,"div",12),b.Pb(5,"p"),b.lc(6),b.Ob(),b.Ob(),b.Pb(7,"ion-list"),b.Pb(8,"ion-row"),b.Pb(9,"ion-col",19),b.Pb(10,"ion-item"),b.Pb(11,"ion-label",20),b.lc(12," Name:"),b.Ob(),b.Kb(13,"ion-input",21),b.Ob(),b.jc(14,O,2,1,"div",22),b.Ob(),b.Ob(),b.Pb(15,"ion-row"),b.Pb(16,"ion-col"),b.Pb(17,"ion-item"),b.Pb(18,"ion-label",20),b.lc(19," DOB:"),b.Ob(),b.Kb(20,"ion-input",23),b.jc(21,k,2,1,"div",22),b.Ob(),b.Ob(),b.Ob(),b.Pb(22,"ion-row"),b.Pb(23,"ion-col"),b.Pb(24,"ion-item"),b.Pb(25,"ion-label",20),b.lc(26," Email Id:"),b.Ob(),b.Pb(27,"span",24),b.lc(28),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(29,"ion-row"),b.Pb(30,"ion-col"),b.Pb(31,"ion-item"),b.Pb(32,"ion-label",20),b.lc(33," Phone No:"),b.Ob(),b.Pb(34,"span",24),b.lc(35),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(36,"ion-row"),b.Pb(37,"ion-col"),b.Pb(38,"ion-item"),b.Pb(39,"ion-label",20),b.lc(40," Gender:"),b.Ob(),b.Kb(41,"ion-input",25),b.jc(42,y,2,1,"div",22),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&e){var n=b.Zb();b.cc("formGroup",n.EditForm),b.zb(6),b.mc(n.letter),b.zb(8),b.cc("ngIf",n.checkValid&&n.f.name.errors),b.zb(7),b.cc("ngIf",n.checkValid&&n.f.dob.errors),b.zb(7),b.nc(" ",null==n.user?null:n.user.email,""),b.zb(7),b.mc(null==n.user?null:n.user.mobile),b.zb(7),b.cc("ngIf",n.checkValid&&n.f.gender.errors)}}function x(e,o){if(1&e){var n=b.Qb();b.Pb(0,"div"),b.Pb(1,"button",29),b.Xb("click",(function(){b.gc(n);var e=b.Zb();return e.updateAddress(e.EditForm.value)})),b.lc(2,"Update Profile"),b.Ob(),b.Ob()}}var I,z,j,_=[{path:"",component:(I=function(){function e(o,n,t,i,r){_classCallCheck(this,e),this.common=o,this.formBuilder=n,this.datePipe=t,this.loadingController=i,this.api=r,this.showProfile=!0,this.checkValid=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.EditForm=this.formBuilder.group({dob:["",[r.j.required]],name:["",[r.j.required]],gender:["",[r.j.required]]})}},{key:"getUserDetails",value:function(){var e=this;this.api.getUserDetails().subscribe((function(o){e.user=o,console.log(e.user);var n=e.user.fullName;e.letter=n.slice(0,1);var t=e.datePipe.transform(e.user.dob,"yyyy-MM-dd");e.user.dob=t,console.log(n)}))}},{key:"editProfile",value:function(){this.showProfile=!1,this.EditForm.controls.name.setValue(this.user.fullName),this.EditForm.controls.dob.setValue(this.datePipe.transform(this.user.dob,"yyyy-MM-dd")),this.EditForm.controls.gender.setValue(this.user.gender)}},{key:"updateAddress",value:function(e){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){var n,t=this;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(console.log(e),e.userId=this.user.userId,e.email=this.user.email,e.mobile=this.user.mobile,this.checkValid=!0,!this.EditForm.invalid){o.next=2;break}return o.abrupt("return");case 2:return o.next=4,this.loadingController.create({message:"Updating..."});case 4:(n=o.sent).present(),this.api.updateProfile(e).subscribe((function(e){console.log(e),e&&(n.dismiss(),t.common.presentToast("Profile is updated"),t.showProfile=!0,t.getUserDetails())}),(function(e){n.dismiss(),t.common.presentToast("Something went wrong? Try Again")}));case 6:case"end":return o.stop()}}),o,this)})))}},{key:"ionViewWillEnter",value:function(){this.quantity=localStorage.getItem("grocericaQuantity"),this.getUserDetails()}},{key:"logout",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("logout"),this.common.logout();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"f",get:function(){return this.EditForm.controls}}]),e}(),I.\u0275fac=function(e){return new(e||I)(b.Jb(s.a),b.Jb(r.a),b.Jb(i.d),b.Jb(l.G),b.Jb(g))},I.\u0275cmp=b.Db({type:I,selectors:[["app-profile"]],decls:17,vars:5,consts:[["color","primary",2,"height","52px"],["slot","start"],["name","arrow-back","routerLink","/home"],["slot","end","tab","search"],[2,"margin-left","-60px",3,"click"],["name","power",2,"font-size","38px"],[1,"appBackground"],[4,"ngIf","ngIfThen"],["show",""],["editForm",""],[4,"ngIf"],[2,"margin-top","25px"],[1,"nameCol"],[2,"color","#a4a4a4","font-size","20px","font-family","Roboto"],[2,"font-weight","bolder"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["src","../../assets/edit.png",2,"color","white","font-weight","bold"],[3,"formGroup"],[1,"ion-float-right"],["position","fixed",2,"color","#919090"],["type","text","formControlName","name"],["id","errorStyle","class","invalid-feedback",4,"ngIf"],["type","text","formControlName","dob"],[2,"font-weight","bolder","color","#fff"],["type","text","formControlName","gender"],["id","errorStyle",1,"invalid-feedback"],["style","color: red;",4,"ngIf"],[2,"color","red"],["type","ngSubmit",1,"updateButton",3,"click"]],template:function(e,o){if(1&e&&(b.Pb(0,"ion-header"),b.Pb(1,"ion-toolbar",0),b.Pb(2,"ion-buttons",1),b.Kb(3,"ion-icon",2),b.Ob(),b.Pb(4,"ion-title"),b.lc(5,"Profile"),b.Ob(),b.Pb(6,"ion-buttons",3),b.Pb(7,"ion-button",4),b.Xb("click",(function(){return o.logout()})),b.Kb(8,"ion-icon",5),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(9,"ion-content",6),b.jc(10,m,1,0,"ng-container",7),b.jc(11,p,1,0,"ng-container",7),b.jc(12,h,35,6,"ng-template",null,8,b.kc),b.jc(14,C,43,7,"ng-template",null,9,b.kc),b.Ob(),b.jc(16,x,3,0,"div",10)),2&e){var n=b.fc(13),t=b.fc(15);b.zb(10),b.cc("ngIf",o.showProfile)("ngIfThen",n),b.zb(1),b.cc("ngIf",!o.showProfile)("ngIfThen",t),b.zb(5),b.cc("ngIf",!o.showProfile)}},directives:[l.l,l.D,l.d,l.m,l.L,c.h,l.C,l.c,l.g,i.k,l.e,l.q,l.o,l.p,l.i,l.j,r.k,r.h,r.c,l.y,l.f,l.n,l.N,r.g,r.b],styles:["h1[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:700;font-size:26px;line-height:30px;text-align:center;color:#a4a4a4}.nameCol[_ngcontent-%COMP%]{height:113px;width:121px;background:radial-gradient(50% 50% at 50% 50%,#227c98 0,rgba(70,211,255,0) 100%);display:block;margin-left:auto;margin-right:auto}p[_ngcontent-%COMP%]{text-align:center;padding:21px;font-size:50px;color:#fff;font-weight:bolder}ion-list[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-top:20px}ion-list[_ngcontent-%COMP%]{background-color:transparent}ion-item[_ngcontent-%COMP%]{--background:transparent!important;background-color:transparent;--border-color:#a4a4a4;height:70px}img[_ngcontent-%COMP%]{color:#fff;height:40px}.updateButton[_ngcontent-%COMP%]{width:100%;height:50px;font-size:20px;font-family:Roboto;color:#fff;font-weight:700;background-color:#6b00c2}"]}),I)}],E=((j=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:j}),j.\u0275inj=b.Gb({factory:function(e){return new(e||j)},imports:[[c.i.forChild(_)],c.i]}),j),M=((z=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:z}),z.\u0275inj=b.Gb({factory:function(e){return new(e||z)},providers:[s.a,g,i.d],imports:[[i.b,r.d,l.E,u.b,r.i,E]]}),z)}}]);