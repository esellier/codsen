/**
 * string-find-malformed
 * Search for a malformed string. Think of Levenshtein distance but in search.
 * Version: 1.1.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-find-malformed
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringFindMalformed=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Function.prototype.toString.call(Object);var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e){t(e={exports:{}},e.exports)}((function(t,e){var r="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",i="[object Map]",a="[object Set]",u=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[i]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[a]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var p="object"==typeof c&&c&&c.Object===Object&&c,y="object"==typeof self&&self&&self.Object===Object&&self,h=p||y||Function("return this")(),b=e&&!e.nodeType&&e,d=b&&t&&!t.nodeType&&t,g=d&&d.exports===b;function _(t,e){return t.set(e[0],e[1]),t}function j(t,e){return t.add(e),t}function v(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function m(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function w(t,e){return function(r){return t(e(r))}}function A(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var T,k=Array.prototype,S=Function.prototype,C=Object.prototype,x=h["__core-js_shared__"],I=(T=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",D=S.toString,P=C.hasOwnProperty,E=C.toString,F=RegExp("^"+D.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),M=g?h.Buffer:void 0,W=h.Symbol,U=h.Uint8Array,$=w(Object.getPrototypeOf,Object),R=Object.create,B=C.propertyIsEnumerable,L=k.splice,H=Object.getOwnPropertySymbols,V=M?M.isBuffer:void 0,q=w(Object.keys,Object),N=dt(h,"DataView"),z=dt(h,"Map"),G=dt(h,"Promise"),J=dt(h,"Set"),K=dt(h,"WeakMap"),Q=dt(Object,"create"),X=mt(N),Y=mt(z),Z=mt(G),tt=mt(J),et=mt(K),rt=W?W.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){this.__data__=new it(t)}function ut(t,e){var n=wt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&At(t)}(t)&&P.call(t,"callee")&&(!B.call(t,"callee")||E.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,i=!!o;for(var c in t)!e&&!P.call(t,c)||i&&("length"==c||jt(c,o))||n.push(c);return n}function ft(t,e,r){var n=t[e];P.call(t,e)&&Ot(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function st(t,e){for(var r=t.length;r--;)if(Ot(t[r][0],e))return r;return-1}function lt(t,e,c,f,s,p,y){var h;if(f&&(h=p?f(t,s,p,y):f(t)),void 0!==h)return h;if(!St(t))return t;var b=wt(t);if(b){if(h=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&P.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,h)}else{var d=_t(t),g=d==n||d==o;if(Tt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==d||d==r||g&&!p){if(m(t))return p?t:{};if(h=function(t){return"function"!=typeof t.constructor||vt(t)?{}:(e=$(t),St(e)?R(e):{});var e}(g?{}:t),!e)return function(t,e){return ht(t,gt(t),e)}(t,function(t,e){return t&&ht(e,Ct(e),t)}(h,t))}else{if(!l[d])return p?t:{};h=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return yt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case i:return function(t,e,r){return v(e?r(O(t),!0):O(t),_,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,u.exec(t));return e.lastIndex=t.lastIndex,e}(t);case a:return function(t,e,r){return v(e?r(A(t),!0):A(t),j,new t.constructor)}(t,n,r);case"[object Symbol]":return c=t,nt?Object(nt.call(c)):{}}var c}(t,d,lt,e)}}y||(y=new at);var w=y.get(t);if(w)return w;if(y.set(t,h),!b)var T=c?function(t){return function(t,e,r){var n=e(t);return wt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Ct,gt)}(t):Ct(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(T||t,(function(r,n){T&&(r=t[n=r]),ft(h,n,lt(r,e,c,f,n,t,y))})),h}function pt(t){return!(!St(t)||(e=t,I&&I in e))&&(kt(t)||m(t)?F:f).test(mt(t));var e}function yt(t){var e=new t.constructor(t.byteLength);return new U(e).set(new U(t)),e}function ht(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var c=e[o],a=n?n(r[c],t[c],c,r,t):void 0;ft(r,c,void 0===a?t[c]:a)}return r}function bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return P.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:P.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():L.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return st(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ct.prototype.clear=function(){this.__data__={hash:new ot,map:new(z||it),string:new ot}},ct.prototype.delete=function(t){return bt(this,t).delete(t)},ct.prototype.get=function(t){return bt(this,t).get(t)},ct.prototype.has=function(t){return bt(this,t).has(t)},ct.prototype.set=function(t,e){return bt(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new it},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!z||n.length<199)return n.push([t,e]),this;r=this.__data__=new ct(n)}return r.set(t,e),this};var gt=H?w(H,Object):function(){return[]},_t=function(t){return E.call(t)};function jt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}function vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||C)}function mt(t){if(null!=t){try{return D.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ot(t,e){return t===e||t!=t&&e!=e}(N&&"[object DataView]"!=_t(new N(new ArrayBuffer(1)))||z&&_t(new z)!=i||G&&"[object Promise]"!=_t(G.resolve())||J&&_t(new J)!=a||K&&"[object WeakMap]"!=_t(new K))&&(_t=function(t){var e=E.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?mt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return i;case Z:return"[object Promise]";case tt:return a;case et:return"[object WeakMap]"}return e});var wt=Array.isArray;function At(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!kt(t)}var Tt=V||function(){return!1};function kt(t){var e=St(t)?E.call(t):"";return e==n||e==o}function St(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ct(t){return At(t)?ut(t):function(t){if(!vt(t))return q(t);var e=[];for(var r in Object(t))P.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}));function a(t,e){return function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!r&&t[e+1].trim()||r&&(t[e+1].trim()||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!r&&t[e+2].trim()||r&&(t[e+2].trim()||"\n\r".includes(t[e+2]))))return e+2;for(let n=e+1,o=t.length;n<o;n++)if(t[n]&&(!r&&t[n].trim()||r&&(t[n].trim()||"\n\r".includes(t[n]))))return n;return null}(t,e,!1)}function u(t){return"string"==typeof t}return function(e,r,i,c){if(!u(e))throw new TypeError("string-find-malformed: [THROW_ID_01] the first input argument, string where to look for, must be a string! Currently it's equal to: ".concat(e," (type: ").concat(t(e),")"));if(e.length){if(!u(r))throw new TypeError("string-find-malformed: [THROW_ID_02] the second input argument, string we should find, must be a string! Currently it's equal to: ".concat(r," (type: ").concat(t(r),")"));if(r.length){if("function"!=typeof i)throw new TypeError("string-find-malformed: [THROW_ID_03] the third input argument, a callback function, must be a function! Currently it's equal to: ".concat(i," (type: ").concat(t(i),")"));if(c&&(!(f=c)||"object"!==t(f)||Array.isArray(f)))throw new TypeError("string-find-malformed: [THROW_ID_04] the fourth input argument, an Optional Options Object, must be a plain object! Currently it's equal to: ".concat(c," (type: ").concat(t(c),")"));var f,s=n(n({},{stringOffset:0,maxDistance:1,ignoreWhitespace:!0}),c);if("string"==typeof s.stringOffset&&/^\d*$/.test(s.stringOffset))s.stringOffset=Number(s.stringOffset);else if(!Number.isInteger(s.stringOffset)||s.stringOffset<0)throw new TypeError("".concat(s.source," [THROW_ID_05] opts.stringOffset must be a natural number or zero! Currently it's: ").concat(s.fromIndex));for(var l,p=e.length,y=Math.min(r.length,s.maxDistance+1),h=[],b=s.maxDistance,d=0;d<p;d++)if(!s.ignoreWhitespace||e[d].trim()){for(var g=0,_=h.length;g<_;g++)l=!1,Array.isArray(h[g].pendingToCheck)&&h[g].pendingToCheck.length&&e[d]===h[g].pendingToCheck[0]?(l=!0,h[g].pendingToCheck.shift()):Array.isArray(h[g].pendingToCheck)&&h[g].pendingToCheck.length&&e[d]===h[g].pendingToCheck[1]?(l=!0,h[g].pendingToCheck.shift(),h[g].pendingToCheck.shift(),h[g].patienceLeft-=1):(h[g].patienceLeft-=1,e[a(e,d)]!==h[g].pendingToCheck[0]&&(h[g].pendingToCheck.shift(),e[d]===h[g].pendingToCheck[0]&&h[g].pendingToCheck.shift()));var j=(h=h.filter((function(t){return t.patienceLeft>=0}))).filter((function(t){return 0===t.pendingToCheck.length})).map((function(t){return t.startsAt}));if(Array.isArray(j)&&j.length){var v=Math.min.apply(Math,o(j)),m=d+(l?1:0);e.slice(v,m)!==r&&i({idxFrom:v+s.stringOffset,idxTo:m+s.stringOffset}),h=h.filter((function(t){return t.pendingToCheck.length}))}for(var O=0;O<y;O++)if(e[d]===r[O]){var w={startsAt:d,patienceLeft:b-O,pendingToCheck:Array.from(r.slice(O+1))};h.push(w);break}}}}}}));
