(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{uZhx:function(t,e,n){"use strict";n.r(e),n.d(e,"ChooseAddressPageModule",(function(){return v}));var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),s=n("Bg0J"),c=n("tyNb"),a=n("mrSG"),d=n("Af+r"),l=n("fXoL"),b=n("Wdxn"),p=n("Nagw"),h=n("Bl/W"),f=n("59dN"),g=n("4Xmu");function u(t,e){1&t&&(l.Pb(0,"h1"),l.nc(1,"Choose your delivery address"),l.Ob())}function m(t,e){1&t&&(l.Pb(0,"div",21),l.Kb(1,"img",22),l.Kb(2,"br"),l.Kb(3,"br"),l.Pb(4,"h6",23),l.nc(5," Looks like you don't have any address mapped, let's add new one."),l.Ob(),l.Ob())}const O=function(t,e){return{back2:t,back1:e}};function P(t,e){if(1&t){const t=l.Qb();l.Pb(0,"ion-card",24),l.Xb("click",(function(){l.ic(t);const n=e.$implicit;return l.Zb().onSelect(n)})),l.Pb(1,"ion-row"),l.Pb(2,"ion-col",25),l.nc(3),l.Ob(),l.Ob(),l.Pb(4,"ion-row",26),l.Pb(5,"ion-col",27),l.nc(6," Address: "),l.Ob(),l.Pb(7,"ion-col",28),l.nc(8),l.Ob(),l.Ob(),l.Pb(9,"ion-row",29),l.Pb(10,"ion-col",30),l.nc(11,"Pincode:"),l.Pb(12,"span",28),l.nc(13),l.Ob(),l.Ob(),l.Kb(14,"ion-col",31),l.Pb(15,"ion-col",30),l.nc(16,"City: "),l.Pb(17,"span",28),l.nc(18),l.Ob(),l.Ob(),l.Ob(),l.Pb(19,"ion-row",29),l.Pb(20,"ion-col",30),l.nc(21,"State:"),l.Pb(22,"span",28),l.nc(23),l.Ob(),l.Ob(),l.Kb(24,"ion-col",31),l.Pb(25,"ion-col",30),l.nc(26," Country:"),l.Pb(27,"span",28),l.nc(28),l.Ob(),l.Ob(),l.Ob(),l.Pb(29,"div",32),l.Pb(30,"p"),l.nc(31),l.Ob(),l.Ob(),l.Ob()}if(2&t){const t=e.$implicit;l.cc("ngClass",l.fc(9,O,1==t.selected,0==t.selected)),l.zb(3),l.pc(" ADDRESS TYPE: ",t.title," "),l.zb(5),l.qc(" ",t.address1," ",t.address2," "),l.zb(5),l.oc(t.pincode),l.zb(5),l.oc(t.city),l.zb(5),l.oc(t.state),l.zb(5),l.oc(t.country),l.zb(3),l.pc("Mobile:",t.mobile,"")}}const x=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i,r,s,c,a,d,l){this.common=t,this.cartApi=e,this.api=n,this.loadingController=o,this.router=i,this.webIntent=r,this.userInfor=s,this.datePipe=c,this.localNotifications=a,this.platform=d,this.modalController=l,this.contactLess=!1,this.todaysDate=new Date,this.checkSelectAddress=!1,this.convertDate=this.datePipe.transform(this.todaysDate,"yyyyMMddHHmmss"),this.platform.ready().then(()=>{this.localNotifications.on("trigger").subscribe(t=>{})})}ngOnInit(){localStorage.getItem("updatedprice")?this.cartValue=localStorage.getItem("updatedprice"):this.cartApi.viewCart().subscribe(t=>{this.cartValue=t.netTotal}),this.userInfor.getUserDetails().subscribe(t=>{this.userDetail=t})}openModel(){this.common.openModal()}ionViewWillEnter(){this.quantity=localStorage.getItem("grocericaQuantity"),this.getAddress()}getAddress(){this.api.getAddress().subscribe(t=>{this.address=t;for(let e=0;e<this.address.length;e++)this.address[e].selected=!1})}openModalPage(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:d.a,componentProps:{selector:"CHOOSE"}});return t.onDidDismiss().then(t=>{this.getAddress()}),yield t.present()}))}onSelect(t){for(let e=0;e<this.address.length;e++)if(this.address[e].selected=!1,this.address[e].addressId==t.addressId){this.address[e].selected=!0,this.checkSelectAddress=!0,localStorage.setItem("grocericaSelectedAddress",JSON.stringify(this.address[e]));const t=JSON.parse(localStorage.getItem("grocericaSelectedAddress"));this.orderAddress=t.addressId,this.verifyPincode=t}}verifyEvent(t){this.contactLess=t.detail.checked}verifyPin(t){return Object(a.a)(this,void 0,void 0,(function*(){0!=this.checkSelectAddress?this.cartApi.verifyPincode(this.verifyPincode.pincode).subscribe(e=>{"COD"==t?this.codOrder("COD"):this.upiOrder("UPI")},t=>{500!==t.status||this.common.presentToast("Currently we dont accept order in this area")}):this.common.presentToast("Please select address to place order")}))}codOrder(t){return Object(a.a)(this,void 0,void 0,(function*(){if(this.cartValue<200)return void this.common.presentToast(" Minimum amount \u20b9200 is required to continue");const e=yield this.loadingController.create({message:"Please wait..."}),n=localStorage.getItem("couponCode"),o=this.cartApi.placeOrder(this.orderAddress,this.cartValue,this.contactLess,t,n);e.present(),o.subscribe(t=>{localStorage.setItem("grocericaOrderId",t[0].orderId),localStorage.removeItem("updatedprice"),localStorage.removeItem("grocericaCategory"),localStorage.removeItem("couponCode"),e.dismiss(),this.common.presentToast("Order Successfully Placed"),this.common.scheduleNotification(t),this.router.navigate(["/order-placed",t[0].orderId])},t=>{e.dismiss(),500==t.status&&this.common.presentToast("Please Select Address"),this.common.presentToast("Something went wrong")})}))}upiOrder(t){this.convertDate=this.convertDate+this.userDetail.mobile+this.userDetail.userId,this.webIntent.startActivityForResult({action:this.webIntent.ACTION_VIEW,url:"upi://pay?pa=8999090358@ybl&pn=Connect Bazar&tid="+this.convertDate+"&tr=orderPayment&am=1&cu=INR&tn=ConnectBazar"}).then(e=>{"Success"!=e.extras.Status&&"SUCCESS"!=e.extras.Status||this.codOrder(t)},t=>{alert("error")})}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(b.a),l.Jb(p.a),l.Jb(h.a),l.Jb(r.N),l.Jb(c.g),l.Jb(f.a),l.Jb(g.a),l.Jb(o.d),l.Jb(s.a),l.Jb(r.R),l.Jb(r.P))},t.\u0275cmp=l.Db({type:t,selectors:[["app-choose-address"]],decls:28,vars:4,consts:[["color","primary",2,"height","60px"],["slot","start"],["name","arrow-back","routerLink","/home"],["slot","end","tab","search"],[2,"margin-top","13px",3,"click"],["name","search",1,"search-icon"],["routerLink","/cart",2,"margin-left","6px","margin-top","13px","position","relative"],["name","cart",2,"font-size","38px"],["slot","end",2,"border-radius","50%"],[1,"appBackground"],[4,"ngIf"],["class","flex-head",4,"ngIf"],["style","margin-top: 15px",3,"ngClass","click",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],[1,"des-button",2,"border-radius","40px",3,"click"],["name","add",2,"color","white","font-weight","bold","font-size","30px"],[1,"cart-background",2,"padding-left","20px","height","80px"],[3,"ionChange"],[2,"color","#fff","font-family","OpenSans-Light","font-weight","bold","font-size","20px","margin-left","10px"],[1,"cart-background"],[1,"placeorder","des-button",3,"click"],[1,"flex-head"],["src","../../assets/not-found.png","alt","not found","width","40%"],[2,"margin","0 10px","text-align","center"],[2,"margin-top","15px",3,"ngClass","click"],[1,"AddressTYpe"],[2,"margin-top","5px"],["size","3",1,"Address"],[1,"AddressValue"],[2,"margin-top","0px"],["id","align",1,"Address"],["size","3"],[1,"mob"]],template:function(t,e){1&t&&(l.Pb(0,"ion-header"),l.Pb(1,"ion-toolbar",0),l.Pb(2,"ion-buttons",1),l.Kb(3,"ion-icon",2),l.Ob(),l.Kb(4,"ion-title"),l.Pb(5,"ion-buttons",3),l.Pb(6,"ion-button",4),l.Xb("click",(function(){return e.openModel()})),l.Kb(7,"ion-icon",5),l.Ob(),l.Pb(8,"ion-button",6),l.Kb(9,"ion-icon",7),l.Pb(10,"ion-badge",8),l.nc(11),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Ob(),l.Pb(12,"ion-content",9),l.lc(13,u,2,0,"h1",10),l.lc(14,m,6,0,"div",11),l.lc(15,P,32,12,"ion-card",12),l.Pb(16,"ion-fab",13),l.Pb(17,"ion-fab-button",14),l.Xb("click",(function(){return e.openModalPage()})),l.Kb(18,"ion-icon",15),l.Ob(),l.Ob(),l.Ob(),l.Pb(19,"div",16),l.Kb(20,"br"),l.Pb(21,"ion-checkbox",17),l.Xb("ionChange",(function(t){return e.verifyEvent(t)})),l.Ob(),l.Pb(22,"ion-label",18),l.nc(23,"Opt for Contactless Delivery"),l.Ob(),l.Ob(),l.Pb(24,"ion-row",19),l.Pb(25,"ion-col"),l.Pb(26,"button",20),l.Xb("click",(function(){return e.verifyPin("COD")})),l.nc(27,"Confirm Order"),l.Ob(),l.Ob(),l.Ob()),2&t&&(l.zb(11),l.oc(e.quantity),l.zb(2),l.cc("ngIf",(null==e.address?null:e.address.length)>0),l.zb(1),l.cc("ngIf",0==(null==e.address?null:e.address.length)),l.zb(1),l.cc("ngForOf",e.address))},directives:[r.o,r.K,r.f,r.p,r.S,c.h,r.J,r.e,r.d,r.j,o.k,o.j,r.l,r.m,r.h,r.b,r.s,r.B,r.i,r.g,o.i],styles:["h1[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-size:29px;line-height:30px;text-align:center;color:#fff}.AddressTYpe[_ngcontent-%COMP%]{border-bottom:1px solid #fff;font-weight:700;text-align:center}.Address[_ngcontent-%COMP%], .AddressTYpe[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-size:16px;color:#fff}.Address[_ngcontent-%COMP%], .AddressValue[_ngcontent-%COMP%]{text-align:left}.AddressValue[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-weight:bolder;font-size:14px;color:#fff;padding-left:1px;padding-right:1px}#align[_ngcontent-%COMP%]{float:left;text-align:left}.mob[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-size:16px;text-align:center;color:#fff;margin-top:10px;border-top:1px solid #fff}.fab[_ngcontent-%COMP%]{border-radius:50%;height:40px;width:36px;background:#45ae20}#back[_ngcontent-%COMP%]{background:#d24444}ion-fab-button[_ngcontent-%COMP%]{height:50px;width:54px}.back1[_ngcontent-%COMP%]{background:#1f2238;border-radius:10px;box-shadow:1px 5px 14px 0 rgba(0,1,0,.8)}.back2[_ngcontent-%COMP%]{background:#07556d}.bottom[_ngcontent-%COMP%]{background:#1f2238;border-radius:10px;box-shadow:1px 5px 14px 0 rgba(0,1,0,.8)}.placeorder[_ngcontent-%COMP%]{height:48px;font-family:OpenSans-Light;font-size:20px;text-align:center;margin-left:5%;width:90%;border-radius:9px;color:#fff;background-color:#6b00c2}.flex-head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:100%}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[c.i.forChild(x)],c.i]}),t})();var C=n("tk/3");let v=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},providers:[b.a,g.a,p.a,f.a,o.d,s.a,h.a],imports:[[o.b,i.d,r.L,i.k,C.b,y]]}),t})()}}]);