function asyncGeneratorStep(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,o)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){asyncGeneratorStep(i,r,o,a,u,"next",e)}function u(e){asyncGeneratorStep(i,r,o,a,u,"throw",e)}a(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{kQdy:function(e,n,t){"use strict";t.r(n),t.d(n,"startInputShims",(function(){return l}));var r=t("gHap"),o=new WeakMap,i=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;o.has(e)!==t&&(t?u(e,n,r):c(e,n))},a=function(e){return e===e.getRootNode().activeElement},u=function(e,n,t){var r=n.parentNode,i=n.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,r.appendChild(i),o.set(e,i);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform="translate3d(".concat(a,"px,").concat(t,"px,0) scale(0)")},c=function(e,n){var t=o.get(e);t&&(o.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},s="input, textarea, [no-blur]",d=function(e,n){if("INPUT"===e.tagName&&!(e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)){var t=e.closest("ion-content");if(null!==t){var r=t.$ionPaddingTimer;r&&clearTimeout(r),n>0?t.style.setProperty("--keyboard-offset",n+"px"):t.$ionPaddingTimer=setTimeout((function(){t.style.setProperty("--keyboard-offset","0px")}),120)}}},l=function(e){var n=document,t=e.getNumber("keyboardHeight",290),o=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),l=e.getBoolean("scrollPadding",!0),f=Array.from(n.querySelectorAll("ion-input, ion-textarea")),v=new WeakMap,p=new WeakMap,m=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){var c,s,d,l,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.componentOnReady,!e.t0){e.next=4;break}return e.next=4,n.componentOnReady();case 4:c=n.shadowRoot||n,s=c.querySelector("input")||c.querySelector("textarea"),d=n.closest("ion-content"),l=d?null:n.closest("ion-footer"),s&&(d&&u&&!v.has(n)&&(f=function(e,n,t){if(!t||!n)return function(){};var r=function(t){a(n)&&i(e,n,t)},o=function(){return i(e,n,!1)},u=function(){return r(!0)},c=function(){return r(!1)};return t.addEventListener("ionScrollStart",u),t.addEventListener("ionScrollEnd",c),n.addEventListener("blur",o),function(){t.removeEventListener("ionScrollStart",u),t.removeEventListener("ionScrollEnd",c),n.addEventListener("ionBlur",o)}}(n,s,d),v.set(n,f)),(d||l)&&o&&!p.has(n)&&(m=function(e,n,t,o,u){var c,s=function(e){c=Object(r.k)(e)},d=function(s){if(c){var d,l=Object(r.k)(s);(function(e,n,t){if(n&&t){var r=n.x-t.x,o=n.y-t.y;return r*r+o*o>36}return!1})(0,c,l)||a(n)||(s.preventDefault(),s.stopPropagation(),(d=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r,o,a){var u,c,s,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r||o){e.next=2;break}return e.abrupt("return");case 2:if(u=function(e,n,t){return function(e,n,t,r){var o=e.top,i=e.bottom,a=n.top,u=a+15,c=Math.min(n.bottom,r-t)-15-i,s=u-o,d=Math.round(c<0?-c:s>0?-s:0),l=Math.min(d,o-a),f=Math.abs(l);return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:t,inputSafeY:4-(o-u)}}((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)}(n,r||o,a),!(r&&Math.abs(u.scrollAmount)<4)){e.next=7;break}t.focus(),e.next=16;break;case 7:if(i(n,t,!0,u.inputSafeY),t.focus(),"undefined"==typeof window){e.next=16;break}if(s=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==c&&clearTimeout(c),window.removeEventListener("ionKeyboardDidShow",d),window.removeEventListener("ionKeyboardDidShow",s),e.t0=r,!e.t0){e.next=7;break}return e.next=7,r.scrollByPoint(0,u.scrollAmount,u.scrollDuration);case 7:i(n,t,!1,u.inputSafeY),t.focus();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function e(){window.removeEventListener("ionKeyboardDidShow",e),window.addEventListener("ionKeyboardDidShow",s)},!r){e.next=15;break}return e.next=12,r.getScrollElement();case 12:if(l=e.sent,!(u.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)){e.next=15;break}return e.abrupt("return",("password"===t.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",d)):window.addEventListener("ionKeyboardDidShow",s),void(c=setTimeout(s,1e3))));case 15:s();case 16:case"end":return e.stop()}}),e)}))),function(e,n,t,r,o){return d.apply(this,arguments)})(e,n,t,o,u))}};return e.addEventListener("touchstart",s,!0),e.addEventListener("touchend",d,!0),function(){e.removeEventListener("touchstart",s,!0),e.removeEventListener("touchend",d,!0)}}(n,s,d,l,t),p.set(n,m)));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();c&&function(){var e=!0,n=!1,t=document;t.addEventListener("ionScrollStart",(function(){n=!0})),t.addEventListener("focusin",(function(){e=!0}),!0),t.addEventListener("touchend",(function(r){if(n)n=!1;else{var o=t.activeElement;if(o&&!o.matches(s)){var i=r.target;i!==o&&(i.matches(s)||i.closest(s)||(e=!1,setTimeout((function(){e||o.blur()}),50)))}}}),!1)}(),l&&function(e){var n=document;n.addEventListener("focusin",(function(n){d(n.target,e)})),n.addEventListener("focusout",(function(e){d(e.target,0)}))}(t);for(var h=0,w=f;h<w.length;h++){var y=w[h];m(y)}n.addEventListener("ionInputDidLoad",(function(e){m(e.detail)})),n.addEventListener("ionInputDidUnload",(function(e){!function(e){if(u){var n=v.get(e);n&&n(),v.delete(e)}if(o){var t=p.get(e);t&&t(),p.delete(e)}}(e.detail)}))}}}]);