(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{v35Q:function(o,t,n){"use strict";n.r(t),n.d(t,"CartPageModule",(function(){return k}));var i=n("ofXK"),c=n("3Pt+"),e=n("TEn/"),r=n("tyNb"),s=n("mrSG"),b=n("fXoL"),a=n("Bl/W"),l=n("Wdxn"),d=n("Nagw");function u(o,t){1&o&&(b.Pb(0,"div",12),b.Pb(1,"h1",13),b.nc(2,"NO ITEM IN CART"),b.Ob(),b.Pb(3,"h4",14),b.nc(4," Continue Shoping"),b.Ob(),b.Ob())}function p(o,t){if(1&o){const o=b.Qb();b.Pb(0,"ion-card",16),b.Pb(1,"ion-row"),b.Pb(2,"ion-col",17),b.Kb(3,"img",18),b.Ob(),b.Pb(4,"ion-col",19),b.Pb(5,"div",20),b.Pb(6,"div",21),b.Pb(7,"p",22),b.nc(8),b.Pb(9,"span"),b.Pb(10,"del",23),b.nc(11),b.Ob(),b.Ob(),b.Pb(12,"span"),b.Pb(13,"label",24),b.nc(14),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(15,"div",25),b.Pb(16,"p",26),b.nc(17),b.Pb(18,"span",27),b.nc(19),b.Ob(),b.Kb(20,"span"),b.Ob(),b.Ob(),b.Pb(21,"div",28),b.Pb(22,"ion-button",29),b.Xb("click",(function(){b.ic(o);const n=t.$implicit;return b.Zb(2).removeFromCart(n)})),b.nc(23,"-"),b.Ob(),b.Pb(24,"p",30),b.nc(25),b.Ob(),b.Pb(26,"ion-button",31),b.Xb("click",(function(){b.ic(o);const n=t.$implicit;return b.Zb(2).addToCart(n)})),b.nc(27,"+"),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()}if(2&o){const o=t.$implicit;b.zb(3),b.cc("src",o.url,b.jc),b.zb(5),b.pc(" \u20b9",o.newPrice," "),b.zb(3),b.pc("\u20b9",o.oldPrice,""),b.zb(3),b.pc(" ",o.discountPercentage,"% Off "),b.zb(3),b.pc(" ",o.productName,""),b.zb(2),b.pc(" - (",o.brand,") "),b.zb(6),b.oc(o.quantity)}}function h(o,t){if(1&o&&(b.Pb(0,"div"),b.lc(1,p,28,7,"ion-card",15),b.Ob()),2&o){const o=b.Zb();b.zb(1),b.cc("ngForOf",o.cart)}}function f(o,t){1&o&&(b.Pb(0,"div"),b.nc(1,"*enter coupon code"),b.Ob())}function g(o,t){if(1&o&&(b.Pb(0,"div",39),b.lc(1,f,2,0,"div",11),b.Ob()),2&o){const o=b.Zb(2);b.zb(1),b.cc("ngIf",o.Promo.controls.couponName.errors.required)}}function m(o,t){1&o&&(b.Pb(0,"div"),b.Pb(1,"ion-button",40),b.nc(2," Apply"),b.Ob(),b.Ob())}function P(o,t){1&o&&(b.Pb(0,"div"),b.Pb(1,"ion-button",41),b.nc(2," Applied"),b.Ob(),b.Ob())}function O(o,t){if(1&o){const o=b.Qb();b.Pb(0,"div"),b.Pb(1,"div"),b.Pb(2,"form",32),b.Xb("ngSubmit",(function(){b.ic(o);const t=b.Zb();return t.applyPromo(t.Promo.value)})),b.Pb(3,"p",33),b.nc(4,"Have Promocode?"),b.Ob(),b.Pb(5,"ion-row",34),b.Pb(6,"ion-col",35),b.Pb(7,"div"),b.Pb(8,"ion-item",36),b.Kb(9,"ion-input",37),b.Ob(),b.lc(10,g,2,1,"div",38),b.Ob(),b.Ob(),b.lc(11,m,3,0,"div",11),b.lc(12,P,3,0,"div",11),b.Kb(13,"ion-col"),b.Ob(),b.Ob(),b.Ob(),b.Ob()}if(2&o){const o=b.Zb();b.zb(2),b.cc("formGroup",o.Promo),b.zb(8),b.cc("ngIf",o.checkValid&&o.Promo.controls.couponName.errors),b.zb(1),b.cc("ngIf",o.couponButton),b.zb(1),b.cc("ngIf",o.couponButtonApplied)}}function v(o,t){if(1&o&&(b.Nb(0),b.Pb(1,"p",48),b.nc(2),b.Ob(),b.Mb()),2&o){const o=b.Zb(2);b.zb(2),b.pc("\u20b9 ",o.total," ")}}function w(o,t){if(1&o&&(b.Nb(0),b.Pb(1,"p",48),b.nc(2),b.Pb(3,"span"),b.Pb(4,"del",49),b.nc(5),b.Ob(),b.Ob(),b.Ob(),b.Mb()),2&o){const o=b.Zb(2);b.zb(2),b.pc("\u20b9 ",o.updatedPrice," "),b.zb(3),b.pc("\u20b9",o.oldPrice," ")}}function C(o,t){if(1&o&&(b.Pb(0,"div"),b.Pb(1,"div",42),b.Pb(2,"div"),b.Pb(3,"p",43),b.nc(4,"TOTAL"),b.Ob(),b.Pb(5,"ion-row"),b.Pb(6,"ion-col",44),b.lc(7,v,3,1,"ng-container",11),b.lc(8,w,6,2,"ng-container",11),b.Ob(),b.Pb(9,"ion-col",45),b.Pb(10,"ion-button",46),b.nc(11," CHECKOUT "),b.Kb(12,"ion-icon",47),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&o){const o=b.Zb();b.zb(7),b.cc("ngIf",o.withoutCoupon),b.zb(1),b.cc("ngIf",o.couponApplied)}}const I=[{path:"",component:(()=>{class o{constructor(o,t,n,i,c,e,r){this.homePageApi=o,this.router=t,this.common=n,this.formbuilder=i,this.alert=c,this.loadingController=e,this.api=r,this.showMsg=!1,this.showCart=!0,this.checkValid=!1,this.couponButton=!0,this.withoutCoupon=!0}ngOnInit(){this.viewCart(),this.Promo=this.formbuilder.group({couponName:["",c.l.required]})}openModel(){this.common.openModal()}viewCart(){const o=this.api.viewCart();this.showCart=!0,o.subscribe(o=>{console.log("CART VALUE",o),this.cartId=o.cartId,this.quantity=o.netQuantity;for(let t=0;t<o.products.length;t++)o.products[t].discountPercentage=Math.round((o.products[t].oldPrice-o.products[t].newPrice)/o.products[t].oldPrice*100),console.log(o.products[t].discountPercentage);this.cart=o.products,this.total=o.netTotal,this.couponApplied=!1,this.couponButtonApplied=!1,this.couponButton=!0,this.withoutCoupon=!0,0==this.quantity&&(this.showMsg=!0,this.showCart=!1)},o=>{500==o.status&&(this.showMsg=!0,this.showCart=!1),console.log(o)})}applyPromo(o){return Object(s.a)(this,void 0,void 0,(function*(){if(console.log(o),o.cartId=this.cartId,this.userId=JSON.parse(localStorage.getItem("userDetail")),o.userId=this.userId.userId,console.log(this.userId),o.amount=this.total,this.checkValid=!0,this.Promo.invalid)return;const t=yield this.loadingController.create({message:"Please wait..."});t.present(),this.api.applyPromoCade(o).subscribe(n=>Object(s.a)(this,void 0,void 0,(function*(){console.log(n),this.oldPrice=n.oldPrice,this.updatedPrice=n.updatedPrice,localStorage.setItem("updatedprice",this.updatedPrice),this.couponApplied=!0,this.couponButtonApplied=!0,this.withoutCoupon=!1,this.couponButton=!1,localStorage.setItem("couponCode",o.couponName),yield t.dismiss()})),o=>Object(s.a)(this,void 0,void 0,(function*(){console.log(o),500==o.status&&(this.alert.presentToast("INVALID COUPON"),yield t.dismiss())})))}))}addToCart(o){this.api.addToCart(o.productId).subscribe(o=>{console.log(o),this.viewCart()})}removeFromCart(o){this.api.removeFromCart(o.productId).subscribe(o=>{console.log(o),this.viewCart()})}ionViewWillEnter(){return Object(s.a)(this,void 0,void 0,(function*(){if(console.log("I am In"),this.viewCart(),console.log(this.quantity),this.token=localStorage.getItem("grocericatoken"),console.log(this.token),0==this.quantity&&null==this.token){const o=yield this.common.presentAlertConfirm("Login to add product in cart");o.present(),o.onDidDismiss().then(o=>{console.log(o),!0===o.data&&this.router.navigate(["/login"]),"backdrop"===o.role&&(this.common.presentToast("Login to add product in cart"),setTimeout(()=>{this.router.navigate(["/login"])},3033))})}}))}}return o.\u0275fac=function(t){return new(t||o)(b.Jb(a.a),b.Jb(r.g),b.Jb(l.a),b.Jb(c.a),b.Jb(l.a),b.Jb(e.N),b.Jb(d.a))},o.\u0275cmp=b.Db({type:o,selectors:[["app-cart"]],decls:18,vars:5,consts:[["color","primary",2,"height","52px"],["slot","start"],["name","arrow-back","routerLink","/home"],["slot","end","tab","search"],[3,"click"],["name","search",1,"cart-icon"],["routerLink","/cart",2,"margin-left","6px","position","relative"],["name","cart",2,"font-size","24px"],["slot","end",2,"border-radius","50%"],[1,"appBackground"],["style","margin-top: 60px;",4,"ngIf"],[4,"ngIf"],[2,"margin-top","60px"],[2,"font-size","24px","color","aliceblue","text-align","center"],["routerLink","/home",2,"text-align","center","color","#fff"],["class","ion-card-category",4,"ngFor","ngForOf"],[1,"ion-card-category"],["size","4"],["alt","caring mother",1,"cart-image",3,"src"],[1,"cate-ion-col"],[1,"cate-parent"],[1,"rupee-status"],[1,"class-ruppee"],[1,"class-del"],["id","product-label",1,"class-off-button"],[1,"branddiv"],[1,"class-product"],[1,"class-brand"],[1,"cate-more"],[1,"incButton","des-button",3,"click"],[1,"incText"],[1,"decButton","des-button",3,"click"],[3,"formGroup","ngSubmit"],[1,"promocode"],[2,"margin-top","-30px","margin-left","10%"],["size","8",1,"ion-float-right"],[2,"background-color","transparent"],["type","text","formControlName","couponName",2,"color","#fff"],["id","errorStyle","class","invalid-feedback",4,"ngIf"],["id","errorStyle",1,"invalid-feedback"],["type","ngSubmit",1,"des-button"],[1,""],[1,"cart-background",2,"border-top","1px solid #E5E5E5"],[2,"margin-bottom","-19px","margin-left","25px"],["size","6",1,"ion-float-right"],["size","6"],["type","ngSubmit","routerLink","/choose-address",1,"checkout-button","des-button"],["name","arrow-forward",2,"font-size","20px","color","#fff","margin-left","15px"],[1,"promocode",2,"font-weight","bold","font-size","24px","margin-left","20px"],[2,"color","grey","font-size","20px"]],template:function(o,t){1&o&&(b.Pb(0,"ion-header"),b.Pb(1,"ion-toolbar",0),b.Pb(2,"ion-buttons",1),b.Kb(3,"ion-icon",2),b.Ob(),b.Pb(4,"ion-title"),b.nc(5,"Review Cart"),b.Ob(),b.Pb(6,"ion-buttons",3),b.Pb(7,"ion-button",4),b.Xb("click",(function(){return t.openModel()})),b.Kb(8,"ion-icon",5),b.Ob(),b.Pb(9,"ion-button",6),b.Kb(10,"ion-icon",7),b.Pb(11,"ion-badge",8),b.nc(12),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Pb(13,"ion-content",9),b.lc(14,u,5,0,"div",10),b.lc(15,h,2,1,"div",11),b.lc(16,O,14,4,"div",11),b.Ob(),b.lc(17,C,13,2,"div",11)),2&o&&(b.zb(12),b.oc(t.quantity),b.zb(2),b.cc("ngIf",t.showMsg),b.zb(1),b.cc("ngIf",t.showCart),b.zb(1),b.cc("ngIf",t.showCart),b.zb(1),b.cc("ngIf",t.showCart))},directives:[e.o,e.K,e.f,e.p,e.S,r.h,e.J,e.e,e.d,e.j,i.k,i.j,e.g,e.B,e.i,c.m,c.i,c.c,e.r,e.q,e.U,c.h,c.b],styles:["ion-item[_ngcontent-%COMP%]{--border-color:#fff}"]}),o})()}];let y=(()=>{class o{}return o.\u0275mod=b.Hb({type:o}),o.\u0275inj=b.Gb({factory:function(t){return new(t||o)},imports:[[r.i.forChild(I)],r.i]}),o})();var z=n("tk/3");let k=(()=>{class o{}return o.\u0275mod=b.Hb({type:o}),o.\u0275inj=b.Gb({factory:function(t){return new(t||o)},providers:[d.a,a.a],imports:[[i.b,c.d,e.L,z.b,c.k,y]]}),o})()}}]);