(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{yn2i:function(t,n,o){"use strict";o.r(n),o.d(n,"ManageAddressPageModule",(function(){return A}));var e=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),c=o("mrSG"),a=o("Af+r"),d=o("fXoL"),b=o("Wdxn"),l=o("Bl/W"),p=o("Nagw");function g(t,n){1&t&&(d.Pb(0),d.Rb(1,"h1"),d.qc(2,"No address found, add new address"),d.Qb(),d.Ob())}function h(t,n){1&t&&(d.Rb(0,"h2"),d.qc(1,"Manage Your Addresses"),d.Qb())}function u(t,n){if(1&t){const t=d.Sb();d.Rb(0,"ion-card",18),d.Rb(1,"ion-row"),d.Rb(2,"ion-col",19),d.qc(3),d.Qb(),d.Qb(),d.Rb(4,"ion-row",20),d.Rb(5,"ion-col",21),d.qc(6," Address: "),d.Qb(),d.Rb(7,"ion-col",22),d.qc(8),d.Qb(),d.Qb(),d.Rb(9,"ion-row",23),d.Rb(10,"ion-col",24),d.qc(11,"Pincode:"),d.Rb(12,"span",22),d.qc(13),d.Qb(),d.Qb(),d.Mb(14,"ion-col",25),d.Rb(15,"ion-col",24),d.qc(16,"City: "),d.Rb(17,"span",22),d.qc(18),d.Qb(),d.Qb(),d.Qb(),d.Rb(19,"ion-row",23),d.Rb(20,"ion-col",24),d.qc(21,"State:"),d.Rb(22,"span",22),d.qc(23),d.Qb(),d.Qb(),d.Mb(24,"ion-col",25),d.Rb(25,"ion-col",24),d.qc(26," Country:"),d.Rb(27,"span",22),d.qc(28),d.Qb(),d.Qb(),d.Qb(),d.Rb(29,"div",26),d.Rb(30,"button",27),d.Zb("click",(function(){d.lc(t);const o=n.$implicit;return d.bc().openEditModal(o)})),d.Mb(31,"img",28),d.Qb(),d.Rb(32,"button",29),d.Zb("click",(function(){d.lc(t);const o=n.$implicit;return d.bc().deleteAddress(o.addressId)})),d.Mb(33,"ion-icon",30),d.Qb(),d.Qb(),d.Qb()}if(2&t){const t=n.$implicit;d.Ab(3),d.sc(" ADDRESS TYPE: ",t.title," "),d.Ab(5),d.tc(" ",t.address1," ",t.address2," "),d.Ab(5),d.rc(t.pincode),d.Ab(5),d.rc(t.city),d.Ab(5),d.rc(t.state),d.Ab(5),d.rc(t.country)}}const f=[{path:"",component:(()=>{class t{constructor(t,n,o,e,i,r){this.modalController=t,this.common=n,this.api=o,this.alertController=e,this.router=i,this.cartservice=r}ngOnInit(){}ionViewWillEnter(){this.quantity=localStorage.getItem("grocericaQuantity"),this.getAddress()}openSearchModal(){this.common.openModal()}openModal(){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:a.a});return t.onDidDismiss().then(t=>{this.getAddress()}),yield t.present()}))}openEditModal(t){return Object(c.a)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:a.a,componentProps:{item:t}});return n.onDidDismiss().then(t=>{this.getAddress()}),yield n.present()}))}getAddress(){this.api.getAddress().subscribe(t=>{this.chooseAddress=!t.length,this.address=t},t=>{401===t.status&&(this.common.presentToast("Session expired, please login again"),this.router.navigate(["/login"]))})}deleteAddress(t){this.presentAlertConfirm(t)}presentAlertConfirm(t){return Object(c.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({cssClass:"my-custom-class",header:"Confirm!",message:"Delete Address",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:t=>{}},{text:"Okay",handler:()=>{this.api.deleteAddress(t).subscribe(t=>{this.common.presentToast(t.message),this.getAddress()},t=>{401===t.status&&this.common.presentToast(t.error.message),500===t.status&&this.common.presentToast("Something Went Wrong")})}}]});yield n.present()}))}}return t.\u0275fac=function(n){return new(n||t)(d.Lb(r.P),d.Lb(b.a),d.Lb(l.a),d.Lb(r.a),d.Lb(s.g),d.Lb(p.a))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-manage-address"]],decls:23,vars:4,consts:[["color","primary",2,"height","52px"],["slot","start"],["name","arrow-back","routerLink","/home"],["slot","end","tab","search",1,"cus-ion-buttons"],[3,"click"],["name","search",1,"search-icon"],["routerLink","/cart"],["name","cart",1,"cart-icon"],["slot","end",2,"border-radius","50%"],[1,"background"],[4,"ngIf","ngIfElse"],["manage",""],["style","margin-top: 15px;","class","category-card",4,"ngFor","ngForOf"],[2,"background-color","#050714"],["id","text-color",1,"order-total",2,"height","86px"],["vertical","bottom","horizontal","end","slot","fixed"],[1,"des-button",2,"border-radius","40px",3,"click"],["name","add",2,"color","white","font-weight","bold","font-size","50px"],[1,"category-card",2,"margin-top","15px"],[1,"AddressTYpe"],[2,"margin-top","15px"],["size","3",1,"Address"],[1,"AddressValue"],[2,"margin-top","0px"],["id","align",1,"Address"],["size","3"],[1,"FabPosition"],[1,"fab",2,"margin-right","15px",3,"click"],["src","../../assets/edit.png",2,"color","white","font-weight","bold","height","25px"],["id","back",1,"fab",3,"click"],["name","close",2,"color","white","font-weight","bold","font-size","26px"]],template:function(t,n){if(1&t&&(d.Rb(0,"ion-header"),d.Rb(1,"ion-toolbar",0),d.Rb(2,"ion-buttons",1),d.Mb(3,"ion-icon",2),d.Qb(),d.Rb(4,"ion-title"),d.qc(5,"ADDRESS"),d.Qb(),d.Rb(6,"ion-buttons",3),d.Rb(7,"ion-button",4),d.Zb("click",(function(){return n.openSearchModal()})),d.Mb(8,"ion-icon",5),d.Qb(),d.Rb(9,"ion-button",6),d.Mb(10,"ion-icon",7),d.Rb(11,"ion-badge",8),d.qc(12),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Rb(13,"ion-content",9),d.oc(14,g,3,0,"ng-container",10),d.oc(15,h,2,0,"ng-template",null,11,d.pc),d.oc(17,u,34,7,"ion-card",12),d.Qb(),d.Rb(18,"div",13),d.Mb(19,"ion-row",14),d.Qb(),d.Rb(20,"ion-fab",15),d.Rb(21,"ion-fab-button",16),d.Zb("click",(function(){return n.openModal()})),d.Mb(22,"ion-icon",17),d.Qb(),d.Qb()),2&t){const t=d.kc(16);d.Ab(12),d.rc(n.quantity),d.Ab(2),d.ec("ngIf",1==n.chooseAddress)("ngIfElse",t),d.Ab(3),d.ec("ngForOf",n.address)}},directives:[r.o,r.K,r.f,r.p,r.S,s.h,r.J,r.e,r.d,r.j,e.k,e.j,r.B,r.l,r.m,r.g,r.i],styles:[".background[_ngcontent-%COMP%]{--background:#050714}ion-badge[_ngcontent-%COMP%]{border-radius:50%;height:23px;width:23px;left:20px;font-weight:bolder;top:9px;padding:4px;background-color:#1bb916}h2[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-size:22px;line-height:50px;text-align:center;color:#fff}.AddressTYpe[_ngcontent-%COMP%]{border-bottom:1px solid #fff;font-weight:700;text-align:center;padding:20px}.Address[_ngcontent-%COMP%], .AddressTYpe[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-size:16px;color:#fff}.Address[_ngcontent-%COMP%], .AddressValue[_ngcontent-%COMP%]{text-align:left}.AddressValue[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:700;font-size:14px;color:#fff;padding-left:1px;padding-right:1px}#align[_ngcontent-%COMP%]{float:left;text-align:left}.FabPosition[_ngcontent-%COMP%]{margin-top:24px;text-align:end;margin-bottom:14px;margin-right:10px}.fab[_ngcontent-%COMP%]{border-radius:50%;height:39px;width:40px;background:#45ae20}#back[_ngcontent-%COMP%]{background:#d24444}ion-fab-button[_ngcontent-%COMP%]{height:70px;width:72px}.cus-ion-buttons[_ngcontent-%COMP%]{position:absolute;right:1px;top:6px}.cart-icon[_ngcontent-%COMP%]{font-size:24px}.category-card[_ngcontent-%COMP%]{background:#1f2238;border-radius:10px;box-shadow:1px 5px 14px 0 rgba(0,1,0,.8)}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(n){return new(n||t)},imports:[[s.i.forChild(f)],s.i]}),t})();var x=o("tk/3");let A=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(n){return new(n||t)},providers:[l.a,p.a],imports:[[e.b,i.d,i.k,x.b,r.L,m]]}),t})()}}]);