!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist",r(r.s=4)}([function(e,t,n){},function(e,t){var n=document.getElementById("menu"),o=document.querySelector(".menu"),r=0;o.style.display="none",n.onclick=function(e){e.target&&(r++,o.style.display=r%2==1?"block":"none")}},function(e,t){var n=document.querySelector(".slider"),o=document.querySelector("#slider_1"),r=document.querySelector("#slider_2"),l=document.querySelector("#slider_3");n.onclick=function(e){switch(e.target.id){case"button_1":o.style.display="block",r.style.display="none",l.style.display="none";break;case"button_2":o.style.display="none",r.style.display="block",l.style.display="none";break;case"button_3":o.style.display="none",r.style.display="none",l.style.display="block"}}},function(e,t){var n=document.querySelector(".menu");document.querySelector(".nav");n.style.display="block",window.onresize=function(){var e=window.innerWidth;n.style.display="580"<e?"block":"none"}},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3)}]);