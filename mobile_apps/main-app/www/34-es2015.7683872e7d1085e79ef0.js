(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{D145:function(e,t,n){"use strict";n.r(t),n.d(t,"ViewfeedbackPageModule",(function(){return p}));var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),l=n("fXoL"),c=n("Wdxn"),b=n("Bl/W"),d=n("j7Is");const f=[{path:"",component:(()=>{class e{constructor(e,t){this.common=e,this.api=t}ngOnInit(){}openModel(){this.common.openModal()}ionViewWillEnter(){this.quantity=localStorage.getItem("grocericaQuantity"),this.feedbackDetails=JSON.parse(localStorage.getItem("viewFeedback"))}}return e.\u0275fac=function(t){return new(t||e)(l.Lb(c.a),l.Lb(b.a))},e.\u0275cmp=l.Fb({type:e,selectors:[["app-viewfeedback"]],decls:51,vars:10,consts:[["color","primary",2,"height","60px"],["slot","start"],["name","arrow-back",3,"routerLink"],[1,"appBackground"],[1,"order-row"],[1,"order-col"],[2,"font-weight","bold"],[1,"order-title"],["size","6"],["size","6","id","order-value"],["size","6","id","order-value",2,"color","#1FCA1C"],[1,"prodDesc",2,"font-size","24px"],[2,"margin-top","20px"],["size","6",1,"prodDesc"],["id","prodText"],["activeIcon","star","defaultIcon","star-outline","activeColor","#6B00C2","defaultColor","#f4f4f4","readonly","true","fontSize","32px",3,"rating"],["rating",""],["rating1",""],["rows","4","cols","20","disabled","true",1,"feedback"],[2,"text-align","center"],[1,"button",3,"routerLink"]],template:function(e,t){1&e&&(l.Rb(0,"ion-header"),l.Rb(1,"ion-toolbar",0),l.Rb(2,"ion-buttons",1),l.Mb(3,"ion-icon",2),l.Qb(),l.Rb(4,"ion-title"),l.qc(5,"View Your Feedback"),l.Qb(),l.Qb(),l.Qb(),l.Rb(6,"ion-content",3),l.Rb(7,"ion-grid"),l.Rb(8,"ion-row",4),l.Rb(9,"ion-col",5),l.qc(10,"Order ID: "),l.Rb(11,"span",6),l.qc(12),l.Qb(),l.Qb(),l.Qb(),l.Rb(13,"ion-row",7),l.Rb(14,"ion-col",8),l.qc(15,"Order Date"),l.Qb(),l.Rb(16,"ion-col",9),l.qc(17),l.Qb(),l.Rb(18,"ion-col",8),l.qc(19,"Delivery Date"),l.Qb(),l.Rb(20,"ion-col",9),l.qc(21),l.Qb(),l.Rb(22,"ion-col",8),l.qc(23,"Item Count"),l.Qb(),l.Rb(24,"ion-col",9),l.qc(25),l.Qb(),l.Rb(26,"ion-col",8),l.qc(27,"Order Value"),l.Qb(),l.Rb(28,"ion-col",10),l.qc(29),l.Qb(),l.Qb(),l.Qb(),l.Rb(30,"ion-grid"),l.Rb(31,"h1",11),l.qc(32,"View Your Feedback"),l.Qb(),l.Rb(33,"ion-row",12),l.Rb(34,"ion-col",13),l.Rb(35,"p",14),l.qc(36,"Delivery Standard"),l.Qb(),l.Qb(),l.Rb(37,"ion-col",8),l.Mb(38,"ionic5-star-rating",15,16),l.Qb(),l.Rb(40,"ion-col",13),l.Rb(41,"p",14),l.qc(42,"Order Quality"),l.Qb(),l.Qb(),l.Rb(43,"ion-col",8),l.Mb(44,"ionic5-star-rating",15,17),l.Qb(),l.Rb(46,"ion-textarea",18),l.qc(47),l.Qb(),l.Qb(),l.Qb(),l.Rb(48,"div",19),l.Rb(49,"ion-button",20),l.qc(50,"Back"),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.Ab(3),l.gc("routerLink","/view-order/",null==t.feedbackDetails?null:t.feedbackDetails.orderId,""),l.Ab(9),l.rc(null==t.feedbackDetails?null:t.feedbackDetails.orderId),l.Ab(5),l.rc(null==t.feedbackDetails?null:t.feedbackDetails.orderDate),l.Ab(4),l.rc(null==t.feedbackDetails?null:t.feedbackDetails.deliveryDate),l.Ab(4),l.rc(null==t.feedbackDetails?null:t.feedbackDetails.netQuantity),l.Ab(4),l.rc(null==t.feedbackDetails?null:t.feedbackDetails.finalTotal),l.Ab(9),l.fc("rating",null==t.feedbackDetails?null:t.feedbackDetails.deliveryFeedback),l.Ab(6),l.fc("rating",null==t.feedbackDetails?null:t.feedbackDetails.itemsFeedback),l.Ab(3),l.rc(null==t.feedbackDetails?null:t.feedbackDetails.feedback),l.Ab(2),l.gc("routerLink","/view-order/",null==t.feedbackDetails?null:t.feedbackDetails.orderId,""))},directives:[r.o,r.K,r.f,r.p,r.S,a.h,r.J,r.j,r.n,r.B,r.i,d.a,r.I,r.U,r.e],styles:[".prodDesc[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-weight:700;font-size:18px;color:#c2c2c2;text-align:center}#prodText[_ngcontent-%COMP%]{text-align:left}.feedback[_ngcontent-%COMP%]{font-style:normal;font-weight:700;color:#c2c2c2;border:1px solid #c2c2c2;height:120px}.button[_ngcontent-%COMP%], .feedback[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-size:18px}.button[_ngcontent-%COMP%]{width:50%;height:50px}.order-row[_ngcontent-%COMP%]{color:#fff;text-align:center;padding-right:10px;padding-left:10px;font-weight:700;font-family:OpenSans-Light;margin-top:10px;padding-bottom:10px;border-bottom:2px solid #7fffd4}.order-col[_ngcontent-%COMP%]{color:#fff;font-size:22px;font-weight:400}.order-title[_ngcontent-%COMP%]{font-family:OpenSans-Light;font-style:normal;font-size:17px;color:#fff;font-weight:700;padding-left:15px;padding-top:6px;border-bottom:2px solid #7fffd4}#order-value[_ngcontent-%COMP%]{text-align:end;padding-right:15px}"]}),e})()}];let s=(()=>{class e{}return e.\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({factory:function(t){return new(t||e)},imports:[[a.i.forChild(f)],a.i]}),e})(),p=(()=>{class e{}return e.\u0275mod=l.Jb({type:e}),e.\u0275inj=l.Ib({factory:function(t){return new(t||e)},imports:[[o.b,i.d,r.L,d.b,s]]}),e})()}}]);