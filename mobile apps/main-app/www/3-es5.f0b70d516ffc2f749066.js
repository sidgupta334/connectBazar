function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{sYqR:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var o=n("mrSG"),i=n("fXoL"),r=n("Bl/W"),c=n("Nagw"),a=n("tyNb"),s=n("TEn/"),l=n("zpKS"),u=n("Wdxn"),g=n("ofXK");function b(t,e){if(1&t){var n=i.Qb();i.Nb(0),i.Pb(1,"button",24),i.Xb("click",(function(){return i.ic(n),i.Zb(2).moveWithToast()})),i.nc(2,"ADD TO CART"),i.Ob(),i.Mb()}}function d(t,e){1&t&&i.Lb(0)}function p(t,e){if(1&t){var n=i.Qb();i.Pb(0,"div"),i.Pb(1,"button",24),i.Xb("click",(function(){i.ic(n);var t=i.Zb(3),e=t.$implicit,o=t.index;return i.Zb().addToCart(e,o)})),i.nc(2,"ADD TO CART"),i.Ob(),i.Ob()}}function f(t,e){if(1&t){var n=i.Qb();i.Pb(0,"div",29),i.Pb(1,"button",30),i.Xb("click",(function(){i.ic(n);var t=i.Zb(3),e=t.$implicit,o=t.index;return i.Zb().removeFromCart(e,o)})),i.nc(2,"-"),i.Ob(),i.Pb(3,"p",31),i.nc(4),i.Ob(),i.Pb(5,"button",32),i.Xb("click",(function(){i.ic(n);var t=i.Zb(3),e=t.$implicit,o=t.index;return i.Zb().addToCart(e,o)})),i.nc(6,"+"),i.Ob(),i.Ob()}if(2&t){var o=i.Zb(3).$implicit;i.zb(4),i.oc(o.quantity)}}function h(t,e){if(1&t&&(i.lc(0,p,3,0,"div",23),i.lc(1,f,7,1,"div",28)),2&t){var n=i.Zb(2).$implicit;i.cc("ngIf",1==n.visible),i.zb(1),i.cc("ngIf",0==n.visible)}}function m(t,e){1&t&&(i.Pb(0,"p",33),i.nc(1,"OUT OF STOCK"),i.Ob())}function v(t,e){if(1&t&&(i.Nb(0),i.lc(1,d,1,0,"ng-container",25),i.lc(2,h,2,2,"ng-template",null,26,i.mc),i.lc(4,m,2,0,"ng-template",null,27,i.mc),i.Mb()),2&t){var n=i.hc(3),o=i.hc(5),r=i.Zb().$implicit;i.zb(1),i.cc("ngIf",1==r.available)("ngIfThen",n)("ngIfElse",o)}}function y(t,e){if(1&t){var n=i.Qb();i.Pb(0,"ion-card",11),i.Pb(1,"ion-row"),i.Pb(2,"ion-col",12),i.Xb("click",(function(){i.ic(n);var t=e.$implicit;return i.Zb().particularProduct(t)})),i.Kb(3,"img",13),i.Ob(),i.Pb(4,"ion-col",14),i.Pb(5,"div",15),i.Pb(6,"div",16),i.Xb("click",(function(){i.ic(n);var t=e.$implicit;return i.Zb().particularProduct(t)})),i.Pb(7,"p",17),i.nc(8),i.Pb(9,"span"),i.Pb(10,"del",18),i.nc(11),i.Ob(),i.Ob(),i.Pb(12,"span"),i.Pb(13,"label",19),i.nc(14),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(15,"div",20),i.Xb("click",(function(){i.ic(n);var t=e.$implicit;return i.Zb().particularProduct(t)})),i.Pb(16,"p",21),i.nc(17),i.Pb(18,"span",22),i.nc(19),i.Ob(),i.Kb(20,"span"),i.Ob(),i.Ob(),i.lc(21,b,3,0,"ng-container",23),i.lc(22,v,6,3,"ng-container",23),i.Ob(),i.Ob(),i.Ob(),i.Ob()}if(2&t){var o=e.$implicit,r=i.Zb();i.zb(3),i.cc("src",o.url,i.jc),i.zb(5),i.pc(" \u20b9",o.newPrice," "),i.zb(3),i.pc("\u20b9",o.oldPrice,""),i.zb(3),i.pc("",o.discountPercentage,"% Off"),i.zb(3),i.pc(" ",o.productName,""),i.zb(2),i.pc(" - (",o.brand,") "),i.zb(2),i.cc("ngIf",0==r.show),i.zb(1),i.cc("ngIf",1==r.show)}}var O=function(){var t=function(){function t(e,n,o,i,r,c){_classCallCheck(this,t),this.homePageApi=e,this.api=n,this.router=o,this.loadingController=i,this.home=r,this.common=c,this.cart=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.noAuth=localStorage.getItem("grocericatoken"),this.api.viewCart().subscribe((function(e){console.log("responnnse",e),t.quantity=e.netQuantity})),null===this.noAuth&&(console.log("I am nullllll"),this.show=!1,console.log(this.quantity)),void 0===this.noAuth&&(console.log("I am undefined"),this.show=!1),this.noAuth&&(this.show=!0,console.log("i just logged in")),this.viewCart();var e=localStorage.getItem("grocericaCategory");this.quantity=localStorage.getItem("grocericaQuantity"),console.log("quantity"+this.quantity),this.getProducts(e)}},{key:"openModel",value:function(){this.common.openModal()}},{key:"viewCart",value:function(){var t=this;this.api.viewCart().subscribe((function(e){t.view=e,localStorage.setItem("grocericaQuantity",e.netQuantity),t.quantity=localStorage.getItem("grocericaQuantity"),console.log("cart values",t.view),console.log("cart product length"+t.view.products.length)}),(function(t){500===t.status&&(console.log("I am here "),localStorage.setItem("grocericaQuantity","0"))}))}},{key:"getProducts",value:function(t){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingController.create({message:"Please wait..."});case 2:(n=e.sent).present(),this.homePageApi.getProducts(t).subscribe((function(t){return Object(o.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){var o,i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.dismiss();case 2:for(this.category=t[0].categoryName,console.log("productList",t),console.log("product list length"+t.length),o=0;o<t.length;o++)t[o].discountPercentage=Math.round((t[o].oldPrice-t[o].newPrice)/t[o].oldPrice*100),this.productList=t;for(i=0;i<t.length;i++){for(this.productList[i].visible=!0,r=0;r<this.view.products.length;r++)this.productList[i].productId===this.view.products[r].productId&&(console.log("true"),this.productList[i].visible=!1,this.productList[i].quantity=this.view.products[r].quantity,console.log(this.productList));console.log(this.productList)}case 7:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(o.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=401===t.status,!e.t0){e.next=5;break}return this.router.navigate(["/login"]),e.next=5,n.dismiss();case 5:if(e.t1=0===t.status,!e.t1){e.next=10;break}return this.router.navigate(["/no-internet"]),e.next=10,n.dismiss();case 10:return console.log(t),e.next=13,n.dismiss();case 13:case"end":return e.stop()}}),e,this)})))}));case 4:case"end":return e.stop()}}),e,this)})))}},{key:"addToCart",value:function(t,e){var n=this;this.api.addToCart(t.productId).subscribe((function(t){console.log(t);for(var e=0;e<t.products.length;e++){console.log("cart list id",t.products[e].productId);for(var o=0;o<n.productList.length;o++)t.products[e].productId==n.productList[o].productId&&(console.log("same id",t.products[e].productId),n.productList[o].visible=!1,n.productList[o].quantity=t.products[e].quantity,n.viewCart())}console.log(n.productList)}),(function(t){console.log(t),500==t.status&&(console.log("helll"),n.ngOnInit())}))}},{key:"removeFromCart",value:function(t,e){var n=this;console.log("items ",t),this.api.removeFromCart(t.productId).subscribe((function(t){if(console.log("cart response ",t),n.removeCart=t,0!=n.removeCart.netQuantity)for(var e=0;e<n.removeCart.products.length;e++){console.log("remove cart length "+n.removeCart.products.length);for(var o=function(t){console.log("product list length "+n.productList.length),n.removeCart.products[e].productId===n.productList[t].productId&&(n.productList[t].quantity=n.removeCart.products[e].quantity,console.log(n.productList),n.viewCart()),n.removeCart.products.some((function(e){return e.productId===n.productList[t].productId}))?console.log("Object found inside the array."):(console.log("Not found ",n.productList[t].productId),n.productList[t].visible=!0,n.viewCart())},i=0;i<n.productList.length;i++)o(i)}0===n.removeCart.netQuantity&&(console.log("empty"),n.viewCart(),n.ngOnInit())}),(function(t){console.log(t)}))}},{key:"particularProduct",value:function(t){localStorage.setItem("grocericaProduct",JSON.stringify(t)),this.router.navigate(["/product"])}},{key:"moveWithToast",value:function(){var t=this;this.common.presentToast("Login to add product in cart "),setTimeout((function(){t.router.navigate(["/login"])}),3033)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Jb(r.a),i.Jb(c.a),i.Jb(a.g),i.Jb(s.N),i.Jb(l.a),i.Jb(u.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-category"]],decls:15,vars:3,consts:[["color","primary",2,"height","52px"],["slot","start"],["name","arrow-back","routerLink","/home"],["slot","end","tab","search"],[3,"click"],["name","search",1,"cart-icon"],["routerLink","/cart",2,"margin-left","6px","position","relative"],["name","cart",2,"font-size","24px"],["slot","end",2,"border-radius","50%"],[1,"appBackground"],["class","ion-card-category",4,"ngFor","ngForOf"],[1,"ion-card-category"],["size","4",3,"click"],[1,"cart-image",3,"src"],[1,"cate-ion-col"],[1,"cate-parent"],[1,"rupee-status",3,"click"],[1,"class-ruppee"],[1,"class-del"],["id","product-label",1,"class-off-button"],[1,"branddiv",3,"click"],[1,"class-product"],[1,"class-brand"],[4,"ngIf"],[1,"cartButton","des-button",3,"click"],[4,"ngIf","ngIfThen","ngIfElse"],["addTocart",""],["stock",""],["class","cate-more",4,"ngIf"],[1,"cate-more"],[1,"incButton","des-button",3,"click"],[1,"incText"],[1,"decButton","des-button",3,"click"],[1,"stock"]],template:function(t,e){1&t&&(i.Pb(0,"ion-header"),i.Pb(1,"ion-toolbar",0),i.Pb(2,"ion-buttons",1),i.Kb(3,"ion-icon",2),i.Ob(),i.Pb(4,"ion-title"),i.nc(5),i.Ob(),i.Pb(6,"ion-buttons",3),i.Pb(7,"ion-button",4),i.Xb("click",(function(){return e.openModel()})),i.Kb(8,"ion-icon",5),i.Ob(),i.Pb(9,"ion-button",6),i.Kb(10,"ion-icon",7),i.Pb(11,"ion-badge",8),i.nc(12),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(13,"ion-content",9),i.lc(14,y,23,8,"ion-card",10),i.Ob()),2&t&&(i.zb(5),i.oc(e.category),i.zb(7),i.oc(e.quantity),i.zb(2),i.cc("ngForOf",e.productList))},directives:[s.o,s.K,s.f,s.p,s.S,a.h,s.J,s.e,s.d,s.j,g.j,s.g,s.B,s.i,g.k],styles:[""]}),t}()},zpKS:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n("mrSG"),i=n("fXoL"),r=n("tyNb"),c=n("TEn/"),a=n("Bl/W"),s=n("Wdxn"),l=n("Nagw"),u=n("Bg0J"),g=n("Sy1n"),b=n("ofXK");function d(t,e){if(1&t&&(i.Pb(0,"ion-slide"),i.Kb(1,"img",20),i.Ob()),2&t){var n=e.$implicit;i.zb(1),i.cc("src",n.url,i.jc)}}function p(t,e){if(1&t){var n=i.Qb();i.Pb(0,"ion-col",21),i.Xb("click",(function(){i.ic(n);var t=e.$implicit;return i.Zb().categoryList(t)})),i.Kb(1,"img",22),i.Pb(2,"p",23),i.nc(3),i.Ob(),i.Ob()}if(2&t){var o=e.$implicit;i.zb(1),i.cc("src",o.url,i.jc),i.zb(2),i.oc(o.categoryName)}}var f=function(){var t=function(){function t(e,n,o,i,r,c,a,s,l){var u=this;_classCallCheck(this,t),this.router=e,this.modalController=n,this.homePageApi=o,this.commom=i,this.cartApi=r,this.loadingController=c,this.localNotifications=a,this.myapp=s,this.platform=l,this.slideOptions={initialSlide:1,speed:400},this.platform.ready().then((function(){u.localNotifications.on("click").subscribe((function(t){console.log("click",t),t.data&&(console.log("click move to view order"),localStorage.setItem("grocericaViewCart",JSON.stringify(t.data.secret)),u.router.navigate(["/view-order"]))}))}))}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.cartApi.viewCart().subscribe((function(e){console.log("responnnse",e),t.quantity=e.netQuantity})),this.myapp.ngOnInit()}},{key:"openModal",value:function(){this.commom.openModal()}},{key:"viewCart",value:function(){var t=this;console.log("i work"),this.cartApi.viewCart().subscribe((function(e){t.quantity=e.netQuantity,localStorage.setItem("grocericaQuantity",e.netQuantity)}),(function(e){401===e.status&&(localStorage.removeItem("grocericatoken"),localStorage.removeItem("userDetail"),localStorage.removeItem("user"),localStorage.removeItem("userIdSignUp"),t.router.navigate(["/login"])),500===e.status&&console.log(e)}))}},{key:"getBanner",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.homePageApi.getBanner(),t.next=3,this.loadingController.create({message:"Please wait..."});case 3:(n=t.sent).present(),e.subscribe((function(t){return Object(o.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),this.bannerImage=t,e.next=4,n.dismiss();case 4:this.getCategory();case 5:case"end":return e.stop()}}),e,this)})))}),(function(t){return Object(o.a)(i,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=401===t.status,!e.t0){e.next=5;break}return this.router.navigate(["/login"]),e.next=5,n.dismiss();case 5:if(e.t1=0===t.status,!e.t1){e.next=10;break}return this.router.navigate(["/no-internet"]),e.next=10,n.dismiss();case 10:console.log(t);case 11:case"end":return e.stop()}}),e,this)})))}));case 5:case"end":return t.stop()}}),t,this)})))}},{key:"slidesDidLoad",value:function(t){t.startAutoplay()}},{key:"getCategory",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:"Please wait..."});case 2:e=t.sent,this.homePageApi.getCategory().subscribe((function(t){console.log(t),n.categoryDescription=t}),(function(t){return Object(o.a)(n,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=401===t.status,!n.t0){n.next=5;break}return this.router.navigate(["/login"]),n.next=5,e.dismiss();case 5:if(n.t1=0===t.status,!n.t1){n.next=10;break}return this.router.navigate(["/no-internet"]),n.next=10,e.dismiss();case 10:console.log(t);case 11:case"end":return n.stop()}}),n,this)})))}));case 4:case"end":return t.stop()}}),t,this)})))}},{key:"categoryList",value:function(t){console.log(t),localStorage.setItem("grocericaCategory",t.categoryId),this.router.navigate(["category"])}},{key:"ionViewWillEnter",value:function(){console.log("ion-view-will-enter"),this.getBanner(),this.viewCart(),this.myapp.ngOnInit()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Jb(r.g),i.Jb(c.P),i.Jb(a.a),i.Jb(s.a),i.Jb(l.a),i.Jb(c.N),i.Jb(u.a),i.Jb(g.a),i.Jb(c.R))},t.\u0275cmp=i.Db({type:t,selectors:[["app-home"]],decls:25,vars:4,consts:[["color","primary"],["color","primary",1,"flex-horizontal"],["slot","start"],[2,"font-size","44px","margin-top","-6px"],[1,"home-ion-title"],["slot","end","tab","search"],[3,"click"],["name","search",1,"search-icon"],["routerLink","/cart"],["name","cart",2,"font-size","24px"],["slot","end",2,"border-radius","50%"],[1,"background"],["pager","true",3,"options","ionSlidesDidLoad"],["slider",""],[4,"ngFor","ngForOf"],[1,"flex-horizontal"],["src","../../assets/list.png","width","40","alt","Connect Bazar",2,"margin","5px 10px"],[1,"categories-header"],[2,"margin-left","6px"],["class","category-card","size","5.6",3,"click",4,"ngFor","ngForOf"],["alt","caring mother",1,"slider-image",3,"src"],["size","5.6",1,"category-card",3,"click"],["alt","caring mother",1,"category-image",3,"src"],[1,"category-text"]],template:function(t,e){if(1&t){var n=i.Qb();i.Pb(0,"ion-header",0),i.Pb(1,"ion-toolbar",1),i.Pb(2,"ion-buttons",2),i.Kb(3,"ion-menu-button",3),i.Ob(),i.Pb(4,"ion-title",4),i.nc(5,"Connect BAZAR"),i.Ob(),i.Pb(6,"ion-buttons",5),i.Pb(7,"ion-button",6),i.Xb("click",(function(){return e.openModal()})),i.Kb(8,"ion-icon",7),i.Ob(),i.Pb(9,"ion-button",8),i.Kb(10,"ion-icon",9),i.Pb(11,"ion-badge",10),i.nc(12),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Ob(),i.Pb(13,"ion-content",11),i.Pb(14,"ion-slides",12,13),i.Xb("ionSlidesDidLoad",(function(){i.ic(n);var t=i.hc(15);return e.slidesDidLoad(t)})),i.lc(16,d,2,1,"ion-slide",14),i.Ob(),i.Kb(17,"br"),i.Pb(18,"div",15),i.Kb(19,"img",16),i.Pb(20,"div",17),i.nc(21,"Categories"),i.Ob(),i.Ob(),i.Pb(22,"ion-grid",18),i.Pb(23,"ion-row"),i.lc(24,p,4,2,"ion-col",19),i.Ob(),i.Ob(),i.Ob()}2&t&&(i.zb(12),i.oc(e.quantity),i.zb(2),i.cc("options",e.slideOptions),i.zb(2),i.cc("ngForOf",e.bannerImage),i.zb(8),i.cc("ngForOf",e.categoryDescription))},directives:[c.o,c.K,c.f,c.w,c.J,c.e,c.p,c.S,r.h,c.d,c.j,c.G,b.j,c.n,c.B,c.F,c.i],styles:[".background[_ngcontent-%COMP%]{--background:#050714}ion-toolbar[_ngcontent-%COMP%]{--min-height:70px!important}.home-ion-title[_ngcontent-%COMP%]{font-size:20px;text-align:left;margin-left:20px}.home-ion-title[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:bolder;color:#fff}p[_ngcontent-%COMP%]{font-size:19px;line-height:22px;text-align:center}.category-image[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.category-image[_ngcontent-%COMP%]{border-radius:50%;height:166px;min-height:130px;max-height:130px;min-width:130px;max-width:130px;display:block}.slider-image[_ngcontent-%COMP%]{height:230px;min-height:230px;width:100%;-o-object-fit:cover;object-fit:cover}.flex-horizontal[_ngcontent-%COMP%]{display:flex;align-items:center}@media only screen and (max-width:360px){.category-image[_ngcontent-%COMP%]{border-radius:50%;min-height:120px;max-height:120px;min-width:120px;max-width:120px;margin-left:auto;margin-right:auto;display:block}.home-ion-title[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:bolder;font-size:16px;text-align:center;color:#fff;margin-left:50px}}.categories-header[_ngcontent-%COMP%]{color:#fff;font-size:24px;max-width:120px;height:30px;font-weight:700}.category-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin:5px;padding:5px;background:#1f2238;border-radius:10px;box-shadow:1px 5px 14px 0 rgba(0,1,0,.8)}.category-text[_ngcontent-%COMP%]{margin-bottom:5px}"]}),t}()}}]);