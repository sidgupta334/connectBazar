function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return v}));var i,o,r=n("ofXK"),a=n("3Pt+"),c=n("TEn/"),s=n("tyNb"),l=n("zpKS"),g=n("fXoL"),u=[{path:"",component:l.a}],f=((i=function t(){_classCallCheck(this,t)}).\u0275mod=g.Hb({type:i}),i.\u0275inj=g.Gb({factory:function(t){return new(t||i)},imports:[[s.i.forChild(u)],s.i]}),i),b=n("XNvx"),p=n("tk/3"),d=n("kwrG"),h=n("Nagw"),m=n("Bfh1"),x=n("92l+"),v=((o=function t(){_classCallCheck(this,t)}).\u0275mod=g.Hb({type:o}),o.\u0275inj=g.Gb({factory:function(t){return new(t||o)},providers:[b.a,x.a,m.a,d.a,h.a],imports:[[r.b,a.d,c.L,p.b,f]]}),o)},zpKS:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("mrSG"),o=n("fXoL"),r=n("tyNb"),a=n("TEn/"),c=n("Bl/W"),s=n("Wdxn"),l=n("Nagw"),g=n("Bg0J"),u=n("Sy1n"),f=n("ofXK");function b(t,e){if(1&t&&(o.Pb(0,"ion-slide"),o.Kb(1,"img",20),o.Ob()),2&t){var n=e.$implicit;o.zb(1),o.cc("src",n.url,o.jc)}}function p(t,e){if(1&t){var n=o.Qb();o.Pb(0,"ion-col",21),o.Xb("click",(function(){o.ic(n);var t=e.$implicit;return o.Zb().categoryList(t)})),o.Kb(1,"img",22),o.Pb(2,"p",23),o.nc(3),o.Ob(),o.Ob()}if(2&t){var i=e.$implicit;o.zb(1),o.cc("src",i.url,o.jc),o.zb(2),o.oc(i.categoryName)}}var d=function(){var t=function(){function t(e,n,i,o,r,a,c,s,l){var g=this;_classCallCheck(this,t),this.router=e,this.modalController=n,this.homePageApi=i,this.commom=o,this.cartApi=r,this.loadingController=a,this.localNotifications=c,this.myapp=s,this.platform=l,this.slideOptions={initialSlide:1,speed:400},this.platform.ready().then((function(){g.localNotifications.on("click").subscribe((function(t){console.log("click",t),t.data&&(console.log("click move to view order"),localStorage.setItem("grocericaViewCart",JSON.stringify(t.data.secret)),g.router.navigate(["/view-order"]))}))}))}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.cartApi.viewCart().subscribe((function(e){console.log("responnnse",e),t.quantity=e.netQuantity})),this.myapp.ngOnInit()}},{key:"ngOnChanges",value:function(){}},{key:"openModal",value:function(){this.commom.openModal()}},{key:"viewCart",value:function(){var t=this;console.log("i work"),this.cartApi.viewCart().subscribe((function(e){t.quantity=e.netQuantity,localStorage.setItem("grocericaQuantity",e.netQuantity)}),(function(e){401===e.status&&(localStorage.removeItem("grocericatoken"),localStorage.removeItem("userDetail"),localStorage.removeItem("user"),localStorage.removeItem("userIdSignUp"),t.router.navigate(["/login"])),500===e.status&&console.log(e)}))}},{key:"getBanner",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.homePageApi.getBanner(),t.next=3,this.loadingController.create({message:"Please wait..."});case 3:(n=t.sent).present(),e.subscribe((function(t){return Object(i.a)(o,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),this.bannerImage=t,e.next=4,n.dismiss();case 4:this.getCategory();case 5:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(i.a)(o,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=401===t.status,!e.t0){e.next=5;break}return this.router.navigate(["/login"]),e.next=5,n.dismiss();case 5:if(e.t1=0===t.status,!e.t1){e.next=10;break}return this.router.navigate(["/no-internet"]),e.next=10,n.dismiss();case 10:console.log(t);case 11:case"end":return e.stop()}}),e,this)})))}));case 5:case"end":return t.stop()}}),t,this)})))}},{key:"slidesDidLoad",value:function(t){t.startAutoplay()}},{key:"getCategory",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:"Please wait..."});case 2:e=t.sent,this.homePageApi.getCategory().subscribe((function(t){console.log(t),n.categoryDescription=t}),(function(t){return Object(i.a)(n,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=401===t.status,!n.t0){n.next=5;break}return this.router.navigate(["/login"]),n.next=5,e.dismiss();case 5:if(n.t1=0===t.status,!n.t1){n.next=10;break}return this.router.navigate(["/no-internet"]),n.next=10,e.dismiss();case 10:console.log(t);case 11:case"end":return n.stop()}}),n,this)})))}));case 4:case"end":return t.stop()}}),t,this)})))}},{key:"categoryList",value:function(t){console.log(t),localStorage.setItem("grocericaCategory",t.categoryId),this.router.navigate(["category"])}},{key:"ionViewWillEnter",value:function(){console.log("ion-view-will-enter"),this.getBanner(),this.viewCart(),this.myapp.ngOnInit()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Jb(r.g),o.Jb(a.P),o.Jb(c.a),o.Jb(s.a),o.Jb(l.a),o.Jb(a.N),o.Jb(g.a),o.Jb(u.a),o.Jb(a.R))},t.\u0275cmp=o.Db({type:t,selectors:[["app-home"]],features:[o.xb],decls:25,vars:4,consts:[["color","primary"],["color","primary",1,"flex-horizontal"],["slot","start"],[2,"font-size","44px","margin-top","-6px"],[1,"home-ion-title"],["slot","end","tab","search"],[3,"click"],["name","search",1,"search-icon"],["routerLink","/cart"],["name","cart",2,"font-size","24px"],["slot","end",2,"border-radius","50%"],[1,"background"],["pager","true",3,"options","ionSlidesDidLoad"],["slider",""],[4,"ngFor","ngForOf"],[1,"flex-horizontal"],["src","../../assets/list.png","width","40","alt","Connect Bazar",2,"margin","5px 10px"],[1,"categories-header"],[2,"margin-left","6px"],["class","category-card","size","5.6",3,"click",4,"ngFor","ngForOf"],["alt","caring mother",1,"slider-image",3,"src"],["size","5.6",1,"category-card",3,"click"],["alt","caring mother",1,"category-image",3,"src"],[1,"category-text"]],template:function(t,e){if(1&t){var n=o.Qb();o.Pb(0,"ion-header",0),o.Pb(1,"ion-toolbar",1),o.Pb(2,"ion-buttons",2),o.Kb(3,"ion-menu-button",3),o.Ob(),o.Pb(4,"ion-title",4),o.nc(5,"Connect BAZAR"),o.Ob(),o.Pb(6,"ion-buttons",5),o.Pb(7,"ion-button",6),o.Xb("click",(function(){return e.openModal()})),o.Kb(8,"ion-icon",7),o.Ob(),o.Pb(9,"ion-button",8),o.Kb(10,"ion-icon",9),o.Pb(11,"ion-badge",10),o.nc(12),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Pb(13,"ion-content",11),o.Pb(14,"ion-slides",12,13),o.Xb("ionSlidesDidLoad",(function(){o.ic(n);var t=o.hc(15);return e.slidesDidLoad(t)})),o.lc(16,b,2,1,"ion-slide",14),o.Ob(),o.Kb(17,"br"),o.Pb(18,"div",15),o.Kb(19,"img",16),o.Pb(20,"div",17),o.nc(21,"Categories"),o.Ob(),o.Ob(),o.Pb(22,"ion-grid",18),o.Pb(23,"ion-row"),o.lc(24,p,4,2,"ion-col",19),o.Ob(),o.Ob(),o.Ob()}2&t&&(o.zb(12),o.oc(e.quantity),o.zb(2),o.cc("options",e.slideOptions),o.zb(2),o.cc("ngForOf",e.bannerImage),o.zb(8),o.cc("ngForOf",e.categoryDescription))},directives:[a.o,a.K,a.f,a.w,a.J,a.e,a.p,a.S,r.h,a.d,a.j,a.G,f.j,a.n,a.B,a.F,a.i],styles:[".background[_ngcontent-%COMP%]{--background:#050714}ion-toolbar[_ngcontent-%COMP%]{--min-height:70px!important}.home-ion-title[_ngcontent-%COMP%]{font-size:14px;text-align:left}.home-ion-title[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:bolder;color:#fff}p[_ngcontent-%COMP%]{font-size:19px;line-height:22px;text-align:center}.category-image[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.category-image[_ngcontent-%COMP%]{border-radius:50%;height:166px;min-height:130px;max-height:130px;min-width:130px;max-width:130px;display:block}.slider-image[_ngcontent-%COMP%]{height:230px;min-height:230px;width:100%;-o-object-fit:cover;object-fit:cover}.flex-horizontal[_ngcontent-%COMP%]{display:flex;align-items:center}@media only screen and (max-width:360px){.category-image[_ngcontent-%COMP%]{border-radius:50%;min-height:120px;max-height:120px;min-width:120px;max-width:120px;margin-left:auto;margin-right:auto;display:block}.home-ion-title[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:bolder;font-size:14px;text-align:center;color:#fff}}.categories-header[_ngcontent-%COMP%]{color:#fff;font-size:24px;max-width:120px;height:30px;font-weight:700}.category-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:5px;padding:5px;background:#1f2238;border-radius:10px;box-shadow:1px 5px 14px 0 rgba(0,1,0,.8)}.category-text[_ngcontent-%COMP%]{margin-bottom:5px}"]}),t}()}}]);