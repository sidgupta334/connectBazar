(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"ct+p":function(t,e,i){"use strict";i.r(e),i.d(e,"HomePageModule",(function(){return f}));var o=i("ofXK"),n=i("3Pt+"),r=i("TEn/"),a=i("tyNb"),c=i("zpKS"),s=i("fXoL");const l=[{path:"",component:c.a}];let g=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[a.i.forChild(l)],a.i]}),t})();var b=i("XNvx"),d=i("tk/3"),h=i("kwrG"),p=i("Nagw"),m=i("Bfh1"),u=i("92l+");let f=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},providers:[b.a,u.a,m.a,h.a,p.a],imports:[[o.b,n.d,r.L,d.b,g]]}),t})()},zpKS:function(t,e,i){"use strict";i.d(e,"a",(function(){return m}));var o=i("mrSG"),n=i("fXoL"),r=i("tyNb"),a=i("TEn/"),c=i("Bl/W"),s=i("Wdxn"),l=i("Nagw"),g=i("Bg0J"),b=i("Sy1n"),d=i("ofXK");function h(t,e){if(1&t&&(n.Pb(0,"ion-slide"),n.Kb(1,"img",20),n.Ob()),2&t){const t=e.$implicit;n.zb(1),n.cc("src",t.url,n.jc)}}function p(t,e){if(1&t){const t=n.Qb();n.Pb(0,"ion-col",21),n.Xb("click",(function(){n.ic(t);const i=e.$implicit;return n.Zb().categoryList(i)})),n.Kb(1,"img",22),n.Pb(2,"p",23),n.nc(3),n.Ob(),n.Ob()}if(2&t){const t=e.$implicit;n.zb(1),n.cc("src",t.url,n.jc),n.zb(2),n.oc(t.categoryName)}}let m=(()=>{class t{constructor(t,e,i,o,n,r,a,c,s){this.router=t,this.modalController=e,this.homePageApi=i,this.commom=o,this.cartApi=n,this.loadingController=r,this.localNotifications=a,this.myapp=c,this.platform=s,this.slideOptions={initialSlide:1,speed:400},this.platform.ready().then(()=>{this.localNotifications.on("click").subscribe(t=>{console.log("click",t),t.data&&(console.log("click move to view order"),localStorage.setItem("grocericaViewCart",JSON.stringify(t.data.secret)),this.router.navigate(["/view-order"]))})})}ngOnInit(){this.cartApi.viewCart().subscribe(t=>{console.log("responnnse",t),this.quantity=t.netQuantity}),this.myapp.ngOnInit()}ngOnChanges(){}openModal(){this.commom.openModal()}viewCart(){console.log("i work"),this.cartApi.viewCart().subscribe(t=>{this.quantity=t.netQuantity,localStorage.setItem("grocericaQuantity",t.netQuantity)},t=>{401===t.status&&(localStorage.removeItem("grocericatoken"),localStorage.removeItem("userDetail"),localStorage.removeItem("user"),localStorage.removeItem("userIdSignUp"),this.router.navigate(["/login"])),500===t.status&&console.log(t)})}getBanner(){return Object(o.a)(this,void 0,void 0,(function*(){const t=this.homePageApi.getBanner(),e=yield this.loadingController.create({message:"Please wait..."});e.present(),t.subscribe(t=>Object(o.a)(this,void 0,void 0,(function*(){console.log(t),this.bannerImage=t,yield e.dismiss(),this.getCategory()})),t=>Object(o.a)(this,void 0,void 0,(function*(){401===t.status&&(this.router.navigate(["/login"]),yield e.dismiss()),0===t.status&&(this.router.navigate(["/no-internet"]),yield e.dismiss()),console.log(t)})))}))}slidesDidLoad(t){t.startAutoplay()}getCategory(){return Object(o.a)(this,void 0,void 0,(function*(){const t=yield this.loadingController.create({message:"Please wait..."});this.homePageApi.getCategory().subscribe(t=>{console.log(t),this.categoryDescription=t},e=>Object(o.a)(this,void 0,void 0,(function*(){401===e.status&&(this.router.navigate(["/login"]),yield t.dismiss()),0===e.status&&(this.router.navigate(["/no-internet"]),yield t.dismiss()),console.log(e)})))}))}categoryList(t){console.log(t),localStorage.setItem("grocericaCategory",t.categoryId),this.router.navigate(["category"])}ionViewWillEnter(){console.log("ion-view-will-enter"),this.getBanner(),this.viewCart(),this.myapp.ngOnInit()}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(r.g),n.Jb(a.P),n.Jb(c.a),n.Jb(s.a),n.Jb(l.a),n.Jb(a.N),n.Jb(g.a),n.Jb(b.a),n.Jb(a.R))},t.\u0275cmp=n.Db({type:t,selectors:[["app-home"]],features:[n.xb],decls:25,vars:4,consts:[["color","primary"],["color","primary",1,"flex-horizontal"],["slot","start"],[2,"font-size","44px","margin-top","-6px"],[1,"home-ion-title"],["slot","end","tab","search"],[3,"click"],["name","search",1,"search-icon"],["routerLink","/cart"],["name","cart",2,"font-size","24px"],["slot","end",2,"border-radius","50%"],[1,"background"],["pager","true",3,"options","ionSlidesDidLoad"],["slider",""],[4,"ngFor","ngForOf"],[1,"flex-horizontal"],["src","../../assets/list.png","width","40","alt","Connect Bazar",2,"margin","5px 10px"],[1,"categories-header"],[2,"margin-left","6px"],["class","category-card","size","5.6",3,"click",4,"ngFor","ngForOf"],["alt","caring mother",1,"slider-image",3,"src"],["size","5.6",1,"category-card",3,"click"],["alt","caring mother",1,"category-image",3,"src"],[1,"category-text"]],template:function(t,e){if(1&t){const t=n.Qb();n.Pb(0,"ion-header",0),n.Pb(1,"ion-toolbar",1),n.Pb(2,"ion-buttons",2),n.Kb(3,"ion-menu-button",3),n.Ob(),n.Pb(4,"ion-title",4),n.nc(5,"Connect BAZAR"),n.Ob(),n.Pb(6,"ion-buttons",5),n.Pb(7,"ion-button",6),n.Xb("click",(function(){return e.openModal()})),n.Kb(8,"ion-icon",7),n.Ob(),n.Pb(9,"ion-button",8),n.Kb(10,"ion-icon",9),n.Pb(11,"ion-badge",10),n.nc(12),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(13,"ion-content",11),n.Pb(14,"ion-slides",12,13),n.Xb("ionSlidesDidLoad",(function(){n.ic(t);const i=n.hc(15);return e.slidesDidLoad(i)})),n.lc(16,h,2,1,"ion-slide",14),n.Ob(),n.Kb(17,"br"),n.Pb(18,"div",15),n.Kb(19,"img",16),n.Pb(20,"div",17),n.nc(21,"Categories"),n.Ob(),n.Ob(),n.Pb(22,"ion-grid",18),n.Pb(23,"ion-row"),n.lc(24,p,4,2,"ion-col",19),n.Ob(),n.Ob(),n.Ob()}2&t&&(n.zb(12),n.oc(e.quantity),n.zb(2),n.cc("options",e.slideOptions),n.zb(2),n.cc("ngForOf",e.bannerImage),n.zb(8),n.cc("ngForOf",e.categoryDescription))},directives:[a.o,a.K,a.f,a.w,a.J,a.e,a.p,a.S,r.h,a.d,a.j,a.G,d.j,a.n,a.B,a.F,a.i],styles:[".background[_ngcontent-%COMP%]{--background:#050714}ion-toolbar[_ngcontent-%COMP%]{--min-height:70px!important}.home-ion-title[_ngcontent-%COMP%]{font-size:14px;text-align:left}.home-ion-title[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:bolder;color:#fff}p[_ngcontent-%COMP%]{font-size:19px;line-height:22px;text-align:center}.category-image[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.category-image[_ngcontent-%COMP%]{border-radius:50%;height:166px;min-height:130px;max-height:130px;min-width:130px;max-width:130px;display:block}.slider-image[_ngcontent-%COMP%]{height:230px;min-height:230px;width:100%;-o-object-fit:cover;object-fit:cover}.flex-horizontal[_ngcontent-%COMP%]{display:flex;align-items:center}@media only screen and (max-width:360px){.category-image[_ngcontent-%COMP%]{border-radius:50%;min-height:120px;max-height:120px;min-width:120px;max-width:120px;margin-left:auto;margin-right:auto;display:block}.home-ion-title[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:bolder;font-size:14px;text-align:center;color:#fff}}.categories-header[_ngcontent-%COMP%]{color:#fff;font-size:24px;max-width:120px;height:30px;font-weight:700}.category-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:5px;padding:5px;background:#1f2238;border-radius:10px;box-shadow:1px 5px 14px 0 rgba(0,1,0,.8)}.category-text[_ngcontent-%COMP%]{margin-bottom:5px}"]}),t})()}}]);