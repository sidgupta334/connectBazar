(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"Af+r":function(e,t,i){"use strict";i.d(t,"a",(function(){return _}));var n=i("mrSG"),o=i("3Pt+"),s=i("fXoL"),r=i("TEn/"),d=i("Bl/W"),c=i("Bfh1"),l=i("Wdxn"),b=i("tyNb"),a=i("h+qT"),g=i("ofXK");const u=["map"];function h(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*title is required"),s.Ob())}function f(e,t){if(1&e&&(s.Pb(0,"div",23),s.lc(1,h,2,0,"div",22),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.f.title.errors.required)}}function p(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*Mobile no is required"),s.Ob())}function m(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"Enter valid *Mobile No"),s.Ob())}function O(e,t){if(1&e&&(s.Pb(0,"div",23),s.lc(1,p,2,0,"div",22),s.lc(2,m,2,0,"div",22),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.f.mobile.errors.required),s.zb(1),s.cc("ngIf",e.f.mobile.errors.pattern)}}function P(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*Address is required"),s.Ob())}function v(e,t){if(1&e&&(s.Pb(0,"div",23),s.lc(1,P,2,0,"div",22),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.f.address1.errors.required)}}function M(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*Landmark is required"),s.Ob())}function y(e,t){if(1&e&&(s.Pb(0,"div",23),s.lc(1,M,2,0,"div",22),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.f.address2.errors.required)}}function C(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*City is required"),s.Ob())}function A(e,t){if(1&e&&(s.Pb(0,"div",23),s.lc(1,C,2,0,"div",22),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.f.city.errors.required)}}function w(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*Pincode is required"),s.Ob())}function z(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"Enter valid *Pincode"),s.Ob())}function I(e,t){if(1&e&&(s.Pb(0,"div",23),s.lc(1,w,2,0,"div",22),s.lc(2,z,2,0,"div",22),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.f.pincode.errors.required),s.zb(1),s.cc("ngIf",e.f.pincode.errors.pattern)}}function x(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*state is required"),s.Ob())}function k(e,t){if(1&e&&(s.Pb(0,"div",23),s.lc(1,x,2,0,"div",22),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.f.state.errors.required)}}function q(e,t){1&e&&(s.Pb(0,"div"),s.nc(1,"*Country is required"),s.Ob())}function T(e,t){if(1&e&&(s.Pb(0,"div",23),s.lc(1,q,2,0,"div",22),s.Ob()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.f.country.errors.required)}}function F(e,t){if(1&e){const e=s.Qb();s.Nb(0),s.Pb(1,"ion-button",24),s.Xb("click",(function(){return s.ic(e),s.Zb().loadMap()})),s.nc(2,"Add Address From Map"),s.Ob(),s.Mb()}}function N(e,t){1&e&&(s.Nb(0),s.Pb(1,"div",25),s.Pb(2,"div",26),s.Kb(3,"img",27),s.Ob(),s.Kb(4,"div",28,29),s.Ob(),s.Mb())}function E(e,t){if(1&e){const e=s.Qb();s.Pb(0,"div"),s.Pb(1,"button",30),s.Xb("click",(function(){s.ic(e);const t=s.Zb(2);return t.registerAddress(t.AddressForm.value)})),s.nc(2," Save Address "),s.Ob(),s.Ob()}}function S(e,t){if(1&e){const e=s.Qb();s.Pb(0,"div"),s.Pb(1,"button",30),s.Xb("click",(function(){s.ic(e);const t=s.Zb(2);return t.updateAddress(t.AddressForm.value)})),s.nc(2," Update Address "),s.Ob(),s.Ob()}}function J(e,t){if(1&e&&(s.Nb(0),s.lc(1,E,3,0,"div",22),s.lc(2,S,3,0,"div",22),s.Mb()),2&e){const e=s.Zb();s.zb(1),s.cc("ngIf",e.showAddForm),s.zb(1),s.cc("ngIf",e.showEditForm)}}let _=(()=>{class e{constructor(e,t,i,n,o,s,r,d,c){this.viewCtrl=e,this.formBuilder=t,this.api=i,this.geolocation=n,this.loadingController=o,this.alert=s,this.router=r,this.nativeGeocoder=c,this.checkValid=!1,this.showAddForm=!0,this.mapButton=!0,this.showMap=!1,this.editAddress=d.get("item"),this.selecAddress=d.get("selector"),this.editAddress&&this.editTheAddress(this.editAddress),console.log(this.editAddress)}ngOnInit(){this.AddressForm=this.formBuilder.group({title:["",[o.l.required]],address1:["",[o.l.required]],address2:["",[o.l.required]],mobile:["",[o.l.pattern(/^[6-9]\d{9}$/)]],city:["",[o.l.required]],country:["",[o.l.required]],pincode:["",[o.l.required,o.l.pattern(/^[1-9][0-9]{5}$/)]],state:["",[o.l.required]]})}get f(){return this.AddressForm.controls}dismiss(){this.viewCtrl.dismiss()}loadMap(){this.mapButton=!1,this.showMap=!0,this.geolocation.getCurrentPosition().then(e=>{this.latitude=e.coords.latitude,this.longitude=e.coords.longitude,console.log("loap map response by getcurrent position ",e);const t={center:new google.maps.LatLng(e.coords.latitude,e.coords.longitude),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP};this.getAddressFromCoords(e.coords.latitude,e.coords.longitude),this.map=new google.maps.Map(this.mapElement.nativeElement,t),this.map.addListener("dragend",()=>{this.latitude=this.map.center.lat(),this.longitude=this.map.center.lng(),this.getAddressFromCoords(this.map.center.lat(),this.map.center.lng())})}).catch(e=>{console.log("Error getting location",e)})}getAddressFromCoords(e,t){console.log("getAddressFromCoords "+e+" "+t),console.log("Procedding to reverse geo coder"),this.nativeGeocoder.reverseGeocode(e,t,{useLocale:!0,maxResults:2}).then(e=>{console.log("Inside geo coder"),console.log("result ",e),this.city=e[1].locality,this.country=e[1].countryName,this.pincode=e[1].postalCode,this.state=e[1].administrativeArea,this.address="";const t=[];for(const[i,n]of Object.entries(e[0]))console.log("valueeee",n),n.length>0&&t.push(n);t.reverse();for(const i of t)this.address+=i+", ",console.log("response address reverse ",this.address);this.address=this.address.slice(0,-2)}).catch(e=>{this.address="Address Not Available!"})}registerAddress(e){return Object(n.a)(this,void 0,void 0,(function*(){if(this.checkValid=!0,this.AddressForm.invalid)return;const t=yield this.loadingController.create({message:"Please wait..."});t.present(),e.lattitude=JSON.stringify(this.latitude),e.longitude=JSON.stringify(this.longitude),this.api.registerAddress(e).subscribe(e=>Object(n.a)(this,void 0,void 0,(function*(){console.log(e),yield t.dismiss(),console.log("select address"+this.selecAddress),"CHOOSE"==this.selecAddress?(console.log("hello"),this.router.navigate(["/choose-address"]),this.alert.presentToast("Address Added Succuessfully"),this.dismiss()):(this.router.navigate(["/home"]),this.alert.presentToast("Address Added Succuessfully"),this.dismiss())})),e=>Object(n.a)(this,void 0,void 0,(function*(){console.log(e),yield t.dismiss(),console.log(e),400===e.status&&this.alert.presentToast("Invalid Details"),401===e.status&&this.alert.presentToast("Unauthorized"),500===e.status&&(yield t.dismiss(),this.alert.presentToast("Invalid Details"))})))}))}editTheAddress(e){console.log(e),this.showAddForm=!1,this.showEditForm=!0,this.addressId=e.addressId,this.title=e.title,this.address1=e.address1,this.address2=e.address2,this.addressTitle=e.addressTitle,this.mobile=e.mobile,this.city=e.city,this.country=e.country,this.pincode=e.pincode,this.state=e.state,this.latitude=e.latitude,this.longitude=e.longitude}updateAddress(e){e.lattitude=JSON.stringify(this.latitude),e.longitude=JSON.stringify(this.longitude),e.addressId=this.addressId,console.log(e),this.api.updateAddress(e).subscribe(e=>{console.log(e),this.alert.presentToast("Addres Updated Succuessfully"),this.dismiss()},e=>{console.log(e),500==e.status&&(this.alert.presentToast("Please Try again later "),this.dismiss())})}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(r.P),s.Jb(o.a),s.Jb(d.a),s.Jb(c.a),s.Jb(r.N),s.Jb(l.a),s.Jb(b.g),s.Jb(r.Q),s.Jb(a.a))},e.\u0275cmp=s.Db({type:e,selectors:[["app-modal"]],viewQuery:function(e,t){var i;1&e&&s.rc(u,!0),2&e&&s.gc(i=s.Yb())&&(t.mapElement=i.first)},decls:77,vars:20,consts:[["color","primary"],["slot","end","tab","search"],[2,"margin-left","6px","position","relative"],[2,"color","turquoise",3,"click"],[1,"background"],[2,"min-height","570px","background","#1f2238","box-shadow","1px 5px 14px 0px rgba(0, 1, 0, 0.8)"],[3,"formGroup"],["lines","none"],["position","fixed",2,"color","#fff"],["placeholder","Select","formControlName","title",2,"margin-left","40px","color","#fff",3,"ngModel","ngModelChange"],["value","OFFICE"],["value","HOME"],["value","OTHER"],["id","errorStyle","class","invalid-feedback",4,"ngIf"],[1,"ion-float-right"],["type","tel","formControlName","mobile","maxlength","10",3,"ngModel","ngModelChange"],["type","text","formControlName","address1",3,"ngModel","ngModelChange"],["type","text","formControlName","address2",3,"ngModel","ngModelChange"],["type","text","formControlName","city",3,"ngModel","ngModelChange"],["type","text","formControlName","pincode",3,"ngModel","ngModelChange"],["type","text","formControlName","state",3,"ngModel","ngModelChange"],["type","text","formControlName","country",3,"ngModel","ngModelChange"],[4,"ngIf"],["id","errorStyle",1,"invalid-feedback"],[1,"mapbutton","des-button",3,"click"],[1,"map-wrapper"],["id","map_center"],["src","../../assets/marker.png",2,"width","50px","background","transparent"],["id","map"],["map",""],["type","ngSubmit",1,"AddressSave",3,"click"]],template:function(e,t){1&e&&(s.Pb(0,"ion-header"),s.Pb(1,"ion-toolbar",0),s.Pb(2,"ion-title"),s.nc(3,"ADD/EDIT "),s.Ob(),s.Pb(4,"ion-buttons",1),s.Pb(5,"ion-button",2),s.Pb(6,"p",3),s.Xb("click",(function(){return t.dismiss()})),s.nc(7,"CLOSE"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(8,"ion-content",4),s.Pb(9,"ion-grid"),s.Pb(10,"ion-card",5),s.Pb(11,"form",6),s.Pb(12,"ion-row"),s.Pb(13,"ion-col"),s.Pb(14,"ion-item",7),s.Pb(15,"ion-label",8),s.nc(16," Address Type"),s.Ob(),s.Pb(17,"ion-select",9),s.Xb("ngModelChange",(function(e){return t.title=e})),s.Pb(18,"ion-select-option",10),s.nc(19,"OFFICE"),s.Ob(),s.Pb(20,"ion-select-option",11),s.nc(21,"HOME"),s.Ob(),s.Pb(22,"ion-select-option",12),s.nc(23,"OTHER"),s.Ob(),s.Ob(),s.Ob(),s.lc(24,f,2,1,"div",13),s.Ob(),s.Ob(),s.Pb(25,"ion-row"),s.Pb(26,"ion-col",14),s.Pb(27,"ion-item",7),s.Pb(28,"ion-label",8),s.nc(29," Mobile"),s.Ob(),s.Pb(30,"ion-input",15),s.Xb("ngModelChange",(function(e){return t.mobile=e})),s.Ob(),s.Ob(),s.lc(31,O,3,2,"div",13),s.Ob(),s.Ob(),s.Pb(32,"ion-row"),s.Pb(33,"ion-col"),s.Pb(34,"ion-item",7),s.Pb(35,"ion-label",8),s.nc(36," Address"),s.Ob(),s.Pb(37,"ion-input",16),s.Xb("ngModelChange",(function(e){return t.address1=e})),s.Ob(),s.Ob(),s.lc(38,v,2,1,"div",13),s.Ob(),s.Ob(),s.Pb(39,"ion-row"),s.Pb(40,"ion-col"),s.Pb(41,"ion-item",7),s.Pb(42,"ion-label",8),s.nc(43," Landmark"),s.Ob(),s.Pb(44,"ion-input",17),s.Xb("ngModelChange",(function(e){return t.address2=e})),s.Ob(),s.Ob(),s.lc(45,y,2,1,"div",13),s.Ob(),s.Ob(),s.Pb(46,"ion-row"),s.Pb(47,"ion-col"),s.Pb(48,"ion-item",7),s.Pb(49,"ion-label",8),s.nc(50," City"),s.Ob(),s.Pb(51,"ion-input",18),s.Xb("ngModelChange",(function(e){return t.city=e})),s.Ob(),s.Ob(),s.lc(52,A,2,1,"div",13),s.Ob(),s.Ob(),s.Pb(53,"ion-row"),s.Pb(54,"ion-col"),s.Pb(55,"ion-item",7),s.Pb(56,"ion-label",8),s.nc(57," Pincode"),s.Ob(),s.Pb(58,"ion-input",19),s.Xb("ngModelChange",(function(e){return t.pincode=e})),s.Ob(),s.Ob(),s.lc(59,I,3,2,"div",13),s.Ob(),s.Ob(),s.Pb(60,"ion-row"),s.Pb(61,"ion-col"),s.Pb(62,"ion-item",7),s.Pb(63,"ion-label",8),s.nc(64," State"),s.Ob(),s.Pb(65,"ion-input",20),s.Xb("ngModelChange",(function(e){return t.state=e})),s.Ob(),s.Ob(),s.lc(66,k,2,1,"div",13),s.Ob(),s.Ob(),s.Pb(67,"ion-row"),s.Pb(68,"ion-col"),s.Pb(69,"ion-item",7),s.Pb(70,"ion-label",8),s.nc(71," Country"),s.Ob(),s.Pb(72,"ion-input",21),s.Xb("ngModelChange",(function(e){return t.country=e})),s.Ob(),s.Ob(),s.lc(73,T,2,1,"div",13),s.Ob(),s.Ob(),s.lc(74,F,3,0,"ng-container",22),s.lc(75,N,6,0,"ng-container",22),s.lc(76,J,3,2,"ng-container",22),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.zb(11),s.cc("formGroup",t.AddressForm),s.zb(6),s.cc("ngModel",t.title),s.zb(7),s.cc("ngIf",t.checkValid&&t.f.title.errors),s.zb(6),s.cc("ngModel",t.mobile),s.zb(1),s.cc("ngIf",t.checkValid&&t.f.mobile.errors),s.zb(6),s.cc("ngModel",t.address1),s.zb(1),s.cc("ngIf",t.checkValid&&t.f.address1.errors),s.zb(6),s.cc("ngModel",t.address2),s.zb(1),s.cc("ngIf",t.checkValid&&t.f.address2.errors),s.zb(6),s.cc("ngModel",t.city),s.zb(1),s.cc("ngIf",t.checkValid&&t.f.city.errors),s.zb(6),s.cc("ngModel",t.pincode),s.zb(1),s.cc("ngIf",t.checkValid&&t.f.pincode.errors),s.zb(6),s.cc("ngModel",t.state),s.zb(1),s.cc("ngIf",t.checkValid&&t.f.pincode.errors),s.zb(6),s.cc("ngModel",t.country),s.zb(1),s.cc("ngIf",t.checkValid&&t.f.country.errors),s.zb(1),s.cc("ngIf",1==t.mapButton),s.zb(1),s.cc("ngIf",t.showMap),s.zb(1),s.cc("ngIf",0==t.mapButton))},directives:[r.o,r.K,r.J,r.f,r.e,r.j,r.n,r.g,o.m,o.i,o.c,r.B,r.i,r.r,r.s,r.D,r.T,o.h,o.b,r.E,g.k,r.q,r.U,o.e],styles:[".background[_ngcontent-%COMP%]{--background:#050714}.AddressSave[_ngcontent-%COMP%]{height:50px;font-size:18px}.AddressSave[_ngcontent-%COMP%], .mapbutton[_ngcontent-%COMP%]{color:#fff;background:#6b00c2;margin-top:10%;margin-left:10%;width:80%;text-align:center}.mapbutton[_ngcontent-%COMP%]{height:40px;font-size:14px}h1[_ngcontent-%COMP%]{margin-top:20px;font-size:18px;font-weight:700;text-align:center}#map_canvas[_ngcontent-%COMP%]{width:90%;height:80%;border:1px solid red}#address[_ngcontent-%COMP%]{padding:10px;font-size:18px;font-weight:700}#map[_ngcontent-%COMP%]{width:100%;height:50vh}.map-wrapper[_ngcontent-%COMP%]{position:relative}.map-wrapper[_ngcontent-%COMP%]   #map_center[_ngcontent-%COMP%]{position:absolute;z-index:99;height:40px;width:40px;top:50%;left:50%;margin-left:-21px;margin-top:-41px}ion-input[_ngcontent-%COMP%]{color:#fff}"]}),e})()}}]);