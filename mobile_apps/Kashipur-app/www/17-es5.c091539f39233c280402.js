function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{uZhx:function(e,t,n){"use strict";n.r(t),n.d(t,"ChooseAddressPageModule",(function(){return S}));var o=n("ofXK"),r=n("3Pt+"),i=n("TEn/"),s=n("Bg0J"),a=n("tyNb"),c=n("mrSG"),d=n("Af+r"),l=n("fXoL"),b=n("Wdxn"),u=n("Nagw"),f=n("Bl/W"),p=n("59dN"),h=n("4Xmu");function g(e,t){1&e&&(l.Pb(0,"h1"),l.nc(1,"Choose your delivery address"),l.Ob())}function m(e,t){1&e&&(l.Pb(0,"div",21),l.Kb(1,"img",22),l.Kb(2,"br"),l.Kb(3,"br"),l.Pb(4,"h6",23),l.nc(5," Looks like you don't have any address mapped, let's add new one."),l.Ob(),l.Ob())}var O=function(e,t){return{back2:e,back1:t}};function P(e,t){if(1&e){var n=l.Qb();l.Pb(0,"ion-card",24),l.Xb("click",(function(){l.ic(n);var e=t.$implicit;return l.Zb().onSelect(e)})),l.Pb(1,"ion-row"),l.Pb(2,"ion-col",25),l.nc(3),l.Ob(),l.Ob(),l.Pb(4,"ion-row",26),l.Pb(5,"ion-col",27),l.nc(6," Address: "),l.Ob(),l.Pb(7,"ion-col",28),l.nc(8),l.Ob(),l.Ob(),l.Pb(9,"ion-row",29),l.Pb(10,"ion-col",30),l.nc(11,"Pincode:"),l.Pb(12,"span",28),l.nc(13),l.Ob(),l.Ob(),l.Kb(14,"ion-col",31),l.Pb(15,"ion-col",30),l.nc(16,"City: "),l.Pb(17,"span",28),l.nc(18),l.Ob(),l.Ob(),l.Ob(),l.Pb(19,"ion-row",29),l.Pb(20,"ion-col",30),l.nc(21,"State:"),l.Pb(22,"span",28),l.nc(23),l.Ob(),l.Ob(),l.Kb(24,"ion-col",31),l.Pb(25,"ion-col",30),l.nc(26," Country:"),l.Pb(27,"span",28),l.nc(28),l.Ob(),l.Ob(),l.Ob(),l.Pb(29,"div",32),l.Pb(30,"p"),l.nc(31),l.Ob(),l.Ob(),l.Ob()}if(2&e){var o=t.$implicit;l.cc("ngClass",l.fc(9,O,1==o.selected,0==o.selected)),l.zb(3),l.pc(" ADDRESS TYPE: ",o.title," "),l.zb(5),l.qc(" ",o.address1," ",o.address2," "),l.zb(5),l.oc(o.pincode),l.zb(5),l.oc(o.city),l.zb(5),l.oc(o.state),l.zb(5),l.oc(o.country),l.zb(3),l.pc("Mobile:",o.mobile,"")}}var v,x,y,C=[{path:"",component:(v=function(){function e(t,n,o,r,i,s,a,c,d,l,b){var u=this;_classCallCheck(this,e),this.common=t,this.cartApi=n,this.api=o,this.loadingController=r,this.router=i,this.webIntent=s,this.userInfor=a,this.datePipe=c,this.localNotifications=d,this.platform=l,this.modalController=b,this.contactLess=!1,this.todaysDate=new Date,this.checkSelectAddress=!1,this.convertDate=this.datePipe.transform(this.todaysDate,"yyyyMMddHHmmss"),this.platform.ready().then((function(){u.localNotifications.on("trigger").subscribe((function(e){}))}))}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;localStorage.getItem("updatedprice")?this.cartValue=localStorage.getItem("updatedprice"):this.cartApi.viewCart().subscribe((function(t){e.cartValue=t.netTotal})),this.userInfor.getUserDetails().subscribe((function(t){e.userDetail=t}))}},{key:"openModel",value:function(){this.common.openModal()}},{key:"ionViewWillEnter",value:function(){this.quantity=localStorage.getItem("grocericaQuantity"),this.getAddress()}},{key:"getAddress",value:function(){var e=this;this.api.getAddress().subscribe((function(t){e.address=t;for(var n=0;n<e.address.length;n++)e.address[n].selected=!1}))}},{key:"openModalPage",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:d.a,componentProps:{selector:"CHOOSE"}});case 2:return(t=e.sent).onDidDismiss().then((function(e){n.getAddress()})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"onSelect",value:function(e){for(var t=0;t<this.address.length;t++)if(this.address[t].selected=!1,this.address[t].addressId==e.addressId){this.address[t].selected=!0,this.checkSelectAddress=!0,localStorage.setItem("grocericaSelectedAddress",JSON.stringify(this.address[t]));var n=JSON.parse(localStorage.getItem("grocericaSelectedAddress"));this.orderAddress=n.addressId,this.verifyPincode=n}}},{key:"verifyEvent",value:function(e){this.contactLess=e.detail.checked}},{key:"verifyPin",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0!=this.checkSelectAddress?this.cartApi.verifyPincode(this.verifyPincode.pincode).subscribe((function(t){"COD"==e?n.codOrder("COD"):n.upiOrder("UPI")}),(function(e){500!==e.status||n.common.presentToast("Currently we dont accept order in this area")})):this.common.presentToast("Please select address to place order");case 1:case"end":return t.stop()}}),t,this)})))}},{key:"codOrder",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,o,r,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.cartValue<200)){t.next=2;break}return t.abrupt("return",void this.common.presentToast(" Minimum amount \u20b9200 is required to continue"));case 2:return t.next=4,this.loadingController.create({message:"Please wait..."});case 4:n=t.sent,o=localStorage.getItem("couponCode"),r=this.cartApi.placeOrder(this.orderAddress,this.cartValue,this.contactLess,e,o),n.present(),r.subscribe((function(e){localStorage.setItem("grocericaOrderId",e[0].orderId),localStorage.removeItem("updatedprice"),localStorage.removeItem("grocericaCategory"),localStorage.removeItem("couponCode"),n.dismiss(),i.common.presentToast("Order Successfully Placed"),i.common.scheduleNotification(e),i.router.navigate(["/order-placed",e[0].orderId])}),(function(e){n.dismiss(),500==e.status&&i.common.presentToast("Please Select Address"),i.common.presentToast("Something went wrong")}));case 8:case"end":return t.stop()}}),t,this)})))}},{key:"upiOrder",value:function(e){var t=this;this.convertDate=this.convertDate+this.userDetail.mobile+this.userDetail.userId,this.webIntent.startActivityForResult({action:this.webIntent.ACTION_VIEW,url:"upi://pay?pa=8999090358@ybl&pn=Connect Bazar&tid="+this.convertDate+"&tr=orderPayment&am=1&cu=INR&tn=ConnectBazar"}).then((function(n){"Success"!=n.extras.Status&&"SUCCESS"!=n.extras.Status||t.codOrder(e)}),(function(e){alert("error")}))}}]),e}(),v.\u0275fac=function(e){return new(e||v)(l.Jb(b.a),l.Jb(u.a),l.Jb(f.a),l.Jb(i.N),l.Jb(a.g),l.Jb(p.a),l.Jb(h.a),l.Jb(o.d),l.Jb(s.a),l.Jb(i.R),l.Jb(i.P))},v.\u0275cmp=l.Db({type:v,selectors:[["app-choose-address"]],decls:28,vars:4,consts:[["color","primary",2,"height","60px"],["slot","start"],["name","arrow-back","routerLink","/home"],["slot","end","tab","search"],[2,"margin-top","13px",3,"click"],["name","search",1,"search-icon"],["routerLink","/cart",2,"margin-left","6px","margin-top","13px","position","relative"],["name","cart",2,"font-size","38px"],["slot","end",2,"border-radius","50%"],[1,"appBackground"],[4,"ngIf"],["class","flex-head",4,"ngIf"],["style","margin-top: 15px",3,"ngClass","click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[1,"des-button",2,"border-radius","40px",3,"click"],["name","add",2,"color","white","font-weight","bold","font-size","30px"],[1,"cart-background",2,"padding-left","20px","height","80px"],[3,"ionChange"],[2,"color","#fff","font-family","OpenSans-Light","font-weight","bold","font-size","20px","margin-left","10px"],[1,"cart-background"],[1,"placeorder","des-button",3,"click"],[1,"flex-head"],["src","../../assets/not-found.png","alt","not found","width","40%"],[2,"margin","0 10px","text-align","center"],[2,"margin-top","15px",3,"ngClass","click"],[1,"AddressTYpe"],[2,"margin-top","5px"],["size","3",1,"Address"],[1,"AddressValue"],[2,"margin-top","0px"],["id","align",1,"Address"],["size","3"],[1,"mob"]],template:function(e,t){1&e&&(l.Pb(0,"ion-header"),l.Pb(1,"ion-toolbar",0),l.Pb(2,"ion-buttons",1),l.Kb(3,"ion-icon",2),l.Ob(),l.Kb(4,"ion-title"),l.Pb(5,"ion-buttons",3),l.Pb(6,"ion-button",4),l.Xb("click",(function(){return t.openModel()})),l.Kb(7,"ion-icon",5),l.Ob(),l.Pb(8,"ion-button",6),l.Kb(9,"ion-icon",7),l.Pb(10,"ion-badge",8),l.nc(11),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Pb(12,"ion-content",9),l.lc(13,g,2,0,"h1",10),l.lc(14,m,6,0,"div",11),l.lc(15,P,32,12,"ion-card",12),l.Pb(16,"ion-fab",13),l.Pb(17,"ion-fab-button",14),l.Xb("click",(function(){return t.openModalPage()})),l.Kb(18,"ion-icon",15),l.Ob(),l.Ob(),l.Ob(),l.Pb(19,"div",16),l.Kb(20,"br"),l.Pb(21,"ion-checkbox",17),l.Xb("ionChange",(function(e){return t.verifyEvent(e)})),l.Ob(),l.Pb(22,"ion-label",18),l.nc(23,"Opt for Contactless Delivery"),l.Ob(),l.Ob(),l.Pb(24,"ion-row",19),l.Pb(25,"ion-col"),l.Pb(26,"button",20),l.Xb("click",(function(){return t.verifyPin("COD")})),l.nc(27,"Confirm Order"),l.Ob(),l.Ob(),l.Ob()),2&e&&(l.zb(11),l.oc(t.quantity),l.zb(2),l.cc("ngIf",(null==t.address?null:t.address.length)>0),l.zb(1),l.cc("ngIf",0==(null==t.address?null:t.address.length)),l.zb(1),l.cc("ngForOf",t.address))},directives:[i.o,i.K,i.f,i.p,i.S,a.h,i.J,i.e,i.d,i.j,o.k,o.j,i.l,i.m,i.h,i.b,i.s,i.B,i.i,i.g,o.i],styles:["h1[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-size:29px;line-height:30px;text-align:center;color:#fff}.AddressTYpe[_ngcontent-%COMP%]{border-bottom:1px solid #fff;font-weight:700;text-align:center}.Address[_ngcontent-%COMP%], .AddressTYpe[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-size:16px;color:#fff}.Address[_ngcontent-%COMP%], .AddressValue[_ngcontent-%COMP%]{text-align:left}.AddressValue[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-weight:bolder;font-size:14px;color:#fff;padding-left:1px;padding-right:1px}#align[_ngcontent-%COMP%]{float:left;text-align:left}.mob[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-size:16px;text-align:center;color:#fff;margin-top:10px;border-top:1px solid #fff}.fab[_ngcontent-%COMP%]{border-radius:50%;height:40px;width:36px;background:#45ae20}#back[_ngcontent-%COMP%]{background:#d24444}ion-fab-button[_ngcontent-%COMP%]{height:50px;width:54px}.back1[_ngcontent-%COMP%]{background:#1f2238;border-radius:10px;box-shadow:1px 5px 14px 0 rgba(0,1,0,.8)}.back2[_ngcontent-%COMP%]{background:#07556d}.bottom[_ngcontent-%COMP%]{background:#1f2238;border-radius:10px;box-shadow:1px 5px 14px 0 rgba(0,1,0,.8)}.placeorder[_ngcontent-%COMP%]{height:48px;font-family:OpenSans-Light;font-size:20px;text-align:center;margin-left:5%;width:90%;border-radius:9px;color:#fff;background-color:#6b00c2}.flex-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:100%}"]}),v)}],k=((x=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:x}),x.\u0275inj=l.Gb({factory:function(e){return new(e||x)},imports:[[a.i.forChild(C)],a.i]}),x),w=n("tk/3"),S=((y=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:y}),y.\u0275inj=l.Gb({factory:function(e){return new(e||y)},providers:[b.a,h.a,u.a,p.a,o.d,s.a,f.a],imports:[[o.b,r.d,i.L,r.k,w.b,k]]}),y)}}]);