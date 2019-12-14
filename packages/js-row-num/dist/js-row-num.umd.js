/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 2.6.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/js-row-num
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).jsRowNum=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}const t=" ";function r(e,r=!0,n){if(!(n.trim().length||e.length&&"\n"!==n&&n!==t&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==n&&n!==t))if(r){if(("\n"===n||n===t)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(n===t||"\n"===n?n:" ")}else{if(("\n"===n||n===t)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(n===t||"\n"===n?n:" ")}}function n(e,t){if("string"==typeof e&&e.length){let n,o,i=!1;if(e.includes("\r\n")&&(i=!0),n=t&&"number"==typeof t?t:1,""===e.trim()){const t=[];for(o=n,Array.from(e).forEach(e=>{("\n"!==e||o)&&("\n"===e&&o--,r(t,!0,e))});t.length>1&&" "===t[t.length-1];)t.pop();return t.join("")}const s=[];if(o=n,""===e[0].trim())for(let t=0,n=e.length;t<n&&0===e[t].trim().length;t++)("\n"!==e[t]||o)&&("\n"===e[t]&&o--,r(s,!0,e[t]));const a=[];if(o=n,""===e.slice(-1).trim())for(let t=e.length;t--&&0===e[t].trim().length;)("\n"!==e[t]||o)&&("\n"===e[t]&&o--,r(a,!1,e[t]));return i?`${s.join("")}${e.trim()}${a.join("")}`.replace(/\n/g,"\r\n"):s.join("")+e.trim()+a.join("")}return e}
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */var o=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},i=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1};
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */const s=Array.isArray;function a(e,t){if(!s(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},t);let n,o;if(r.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(n=t,o=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${o} elements!`);if(!e.every((e,t)=>!(!i(e[0],{includeZero:!0})||!i(e[1],{includeZero:!0}))||(n=t,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const a=e.length*e.length;let u=0;return Array.from(e).sort((e,t)=>(r.progressFn&&(u++,r.progressFn(Math.floor(100*u/a))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",s="[object Boolean]",a="[object Date]",l="[object Function]",c="[object GeneratorFunction]",f="[object Map]",p="[object Number]",g="[object Object]",h="[object RegExp]",y="[object Set]",d="[object String]",m="[object Symbol]",b="[object ArrayBuffer]",_="[object DataView]",v="[object Float32Array]",w="[object Float64Array]",T="[object Int8Array]",O="[object Int16Array]",j="[object Int32Array]",$="[object Uint8Array]",S="[object Uint8ClampedArray]",R="[object Uint16Array]",I="[object Uint32Array]",E=/\w*$/,A=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,W={};W[i]=W["[object Array]"]=W[b]=W[_]=W[s]=W[a]=W[v]=W[w]=W[T]=W[O]=W[j]=W[f]=W[p]=W[g]=W[h]=W[y]=W[d]=W[m]=W[$]=W[S]=W[R]=W[I]=!0,W["[object Error]"]=W[l]=W["[object WeakMap]"]=!1;var x="object"==typeof u&&u&&u.Object===Object&&u,Z="object"==typeof self&&self&&self.Object===Object&&self,F=x||Z||Function("return this")(),D=t&&!t.nodeType&&t,H=D&&e&&!e.nodeType&&e,J=H&&H.exports===D;function C(e,t){return e.set(t[0],t[1]),e}function k(e,t){return e.add(t),e}function M(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function q(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function B(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function L(e,t){return function(r){return e(t(r))}}function P(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var K,G=Array.prototype,z=Function.prototype,U=Object.prototype,V=F["__core-js_shared__"],Q=(K=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",X=z.toString,Y=U.hasOwnProperty,ee=U.toString,te=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=J?F.Buffer:void 0,ne=F.Symbol,oe=F.Uint8Array,ie=L(Object.getPrototypeOf,Object),se=Object.create,ae=U.propertyIsEnumerable,ue=G.splice,le=Object.getOwnPropertySymbols,ce=re?re.isBuffer:void 0,fe=L(Object.keys,Object),pe=He(F,"DataView"),ge=He(F,"Map"),he=He(F,"Promise"),ye=He(F,"Set"),de=He(F,"WeakMap"),me=He(Object,"create"),be=qe(pe),_e=qe(ge),ve=qe(he),we=qe(ye),Te=qe(de),Oe=ne?ne.prototype:void 0,je=Oe?Oe.valueOf:void 0;function $e(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Re(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ie(e){this.__data__=new Se(e)}function Ee(e,t){var r=Le(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Pe(e)}(e)&&Y.call(e,"callee")&&(!ae.call(e,"callee")||ee.call(e)==i)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var s in e)!t&&!Y.call(e,s)||o&&("length"==s||ke(s,n))||r.push(s);return r}function Ae(e,t,r){var n=e[t];Y.call(e,t)&&Be(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Ne(e,t){for(var r=e.length;r--;)if(Be(e[r][0],t))return r;return-1}function We(e,t,r,n,o,u,A){var N;if(n&&(N=u?n(e,o,u,A):n(e)),void 0!==N)return N;if(!ze(e))return e;var x=Le(e);if(x){if(N=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&Y.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,N)}else{var Z=Ce(e),F=Z==l||Z==c;if(Ke(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(Z==g||Z==i||F&&!u){if(q(e))return u?e:{};if(N=function(e){return"function"!=typeof e.constructor||Me(e)?{}:(t=ie(e),ze(t)?se(t):{});var t}(F?{}:e),!t)return function(e,t){return Fe(e,Je(e),t)}(e,function(e,t){return e&&Fe(t,Ue(t),e)}(N,e))}else{if(!W[Z])return u?e:{};N=function(e,t,r,n){var o=e.constructor;switch(t){case b:return Ze(e);case s:case a:return new o(+e);case _:return function(e,t){var r=t?Ze(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case v:case w:case T:case O:case j:case $:case S:case R:case I:return function(e,t){var r=t?Ze(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case f:return function(e,t,r){return M(t?r(B(e),!0):B(e),C,new e.constructor)}(e,n,r);case p:case d:return new o(e);case h:return function(e){var t=new e.constructor(e.source,E.exec(e));return t.lastIndex=e.lastIndex,t}(e);case y:return function(e,t,r){return M(t?r(P(e),!0):P(e),k,new e.constructor)}(e,n,r);case m:return i=e,je?Object(je.call(i)):{}}var i}(e,Z,We,t)}}A||(A=new Ie);var D=A.get(e);if(D)return D;if(A.set(e,N),!x)var H=r?function(e){return function(e,t,r){var n=t(e);return Le(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ue,Je)}(e):Ue(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(H||e,(function(o,i){H&&(o=e[i=o]),Ae(N,i,We(o,t,r,n,i,e,A))})),N}function xe(e){return!(!ze(e)||(t=e,Q&&Q in t))&&(Ge(e)||q(e)?te:A).test(qe(e));var t}function Ze(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function Fe(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var s=t[o],a=n?n(r[s],e[s],s,r,e):void 0;Ae(r,s,void 0===a?e[s]:a)}return r}function De(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function He(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return xe(r)?r:void 0}$e.prototype.clear=function(){this.__data__=me?me(null):{}},$e.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},$e.prototype.get=function(e){var t=this.__data__;if(me){var r=t[e];return r===n?void 0:r}return Y.call(t,e)?t[e]:void 0},$e.prototype.has=function(e){var t=this.__data__;return me?void 0!==t[e]:Y.call(t,e)},$e.prototype.set=function(e,t){return this.__data__[e]=me&&void 0===t?n:t,this},Se.prototype.clear=function(){this.__data__=[]},Se.prototype.delete=function(e){var t=this.__data__,r=Ne(t,e);return!(r<0)&&(r==t.length-1?t.pop():ue.call(t,r,1),!0)},Se.prototype.get=function(e){var t=this.__data__,r=Ne(t,e);return r<0?void 0:t[r][1]},Se.prototype.has=function(e){return Ne(this.__data__,e)>-1},Se.prototype.set=function(e,t){var r=this.__data__,n=Ne(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Re.prototype.clear=function(){this.__data__={hash:new $e,map:new(ge||Se),string:new $e}},Re.prototype.delete=function(e){return De(this,e).delete(e)},Re.prototype.get=function(e){return De(this,e).get(e)},Re.prototype.has=function(e){return De(this,e).has(e)},Re.prototype.set=function(e,t){return De(this,e).set(e,t),this},Ie.prototype.clear=function(){this.__data__=new Se},Ie.prototype.delete=function(e){return this.__data__.delete(e)},Ie.prototype.get=function(e){return this.__data__.get(e)},Ie.prototype.has=function(e){return this.__data__.has(e)},Ie.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Se){var o=n.__data__;if(!ge||o.length<r-1)return o.push([e,t]),this;n=this.__data__=new Re(o)}return n.set(e,t),this};var Je=le?L(le,Object):function(){return[]},Ce=function(e){return ee.call(e)};function ke(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||N.test(e))&&e>-1&&e%1==0&&e<t}function Me(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||U)}function qe(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Be(e,t){return e===t||e!=e&&t!=t}(pe&&Ce(new pe(new ArrayBuffer(1)))!=_||ge&&Ce(new ge)!=f||he&&"[object Promise]"!=Ce(he.resolve())||ye&&Ce(new ye)!=y||de&&"[object WeakMap]"!=Ce(new de))&&(Ce=function(e){var t=ee.call(e),r=t==g?e.constructor:void 0,n=r?qe(r):void 0;if(n)switch(n){case be:return _;case _e:return f;case ve:return"[object Promise]";case we:return y;case Te:return"[object WeakMap]"}return t});var Le=Array.isArray;function Pe(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!Ge(e)}var Ke=ce||function(){return!1};function Ge(e){var t=ze(e)?ee.call(e):"";return t==l||t==c}function ze(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ue(e){return Pe(e)?Ee(e):function(e){if(!Me(e))return fe(e);var t=[];for(var r in Object(e))Y.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return We(e,!0,!0)}})),c="[object Object]";var f,p,g=Function.prototype,h=Object.prototype,y=g.toString,d=h.hasOwnProperty,m=y.call(Object),b=h.toString,_=(f=Object.getPrototypeOf,p=Object,function(e){return f(p(e))});var v=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||b.call(e)!=c||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=_(e);if(null===t)return!0;var r=d.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&y.call(r)==m};function w(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(t){if(!v(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(o=Object.assign({},n,t),o.progressFn&&v(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=l(n);const i=l(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let s,u,c;s=o.progressFn?a(i,{progressFn:e=>{c=Math.floor(e/5),c!==u&&(u=c,o.progressFn(c))}}):a(i);const f=s.length-1;for(let e=f;e>0;e--)o.progressFn&&(c=Math.floor(78*(1-e/f))+21,c!==u&&c>u&&(u=c,o.progressFn(c))),(s[e][0]<=s[e-1][0]||!o.joinRangesThatTouchEdges&&s[e][0]<s[e-1][1]||o.joinRangesThatTouchEdges&&s[e][0]<=s[e-1][1])&&(s[e-1][0]=Math.min(s[e][0],s[e-1][0]),s[e-1][1]=Math.max(s[e][1],s[e-1][1]),void 0!==s[e][2]&&(s[e-1][0]>=s[e][0]||s[e-1][1]<=s[e][1])&&null!==s[e-1][2]&&(null===s[e][2]&&null!==s[e-1][2]?s[e-1][2]=null:void 0!==s[e-1][2]?2===o.mergeType&&s[e-1][0]===s[e][0]?s[e-1][2]=s[e][2]:s[e-1][2]+=s[e][2]:s[e-1][2]=s[e][2]),s.splice(e,1),e=s.length);return s}function T(e){return null!=e}const O=Array.isArray,j=Number.isInteger;function $(e){return"string"==typeof e}function S(e){return o(e,{includeZero:!0})?parseInt(e,10):e}class R{constructor(e){const t=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},e);if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if($(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!$(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t}add(e,t,r,...s){if(s.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(s,null,4)}`);if(!T(e)&&!T(t))return;if(T(e)&&!T(t)){if(O(e)){if(e.length){if(e.some(e=>O(e)))return void e.forEach(e=>{O(e)&&this.add(...e)});e.length>1&&j(S(e[0]))&&j(S(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(t,null,0)})`)}if(!T(e)&&T(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(t,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const a=o(e,{includeZero:!0})?parseInt(e,10):e,u=o(t,{includeZero:!0})?parseInt(t,10):t;if(j(r)&&(r=String(r)),!i(a,{includeZero:!0})||!i(u,{includeZero:!0}))throw i(a,{includeZero:!0})?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof u}" equal to: ${JSON.stringify(u,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof a}" equal to: ${JSON.stringify(a,null,4)}`);if(T(r)&&!$(r)&&!j(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(T(this.slices)&&O(this.last())&&a===this.last()[1]){if(this.last()[1]=u,this.last()[2],null!==this.last()[2]&&T(r)){let e=!(T(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(e=n(e,this.opts.limitLinebreaksCount)),$(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===r||$(r)&&!r.length?[a,u]:[a,u,this.opts.limitToBeAddedWhitespace?n(r,this.opts.limitLinebreaksCount):r];this.slices.push(e)}}push(e,t,r,...n){this.add(e,t,r,...n)}current(){return null!=this.slices?(this.slices=w(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>T(e[2])?[e[0],e[1],n(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(O(e)&&e.length){if(!O(e[0])||!j(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=l(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}const I=Array.isArray;var E="\\";return function(t,r){if("string"!=typeof t||0===t.length)return t;function n(e){return/[0-9]/.test(e)}function s(t){return"object"===e(t)&&null!==t}var a=Object.assign({padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1},r);(!a.padStart||"number"!=typeof a.padStart||"number"==typeof a.padStart&&a.padStart<0)&&(a.padStart=0);var u,l,c=new R,f=t.length,p=null,g=null,h=null,y=1,d=!1,m=null;for(a.padStart&&f>45e3&&(a.padStart=4),u=0;u<f;u++){if(null===a.overrideRowNum&&("\n"===t[u]||"\r"===t[u]&&"\n"!==t[u+1])&&y++,!a.extractedLogContentsWereGiven&&null!==p&&p.start<u&&p.type===t[u]&&(p=null,g=null,h=null,m=null,d=!1),null===p&&(a.extractedLogContentsWereGiven||g&&g<u&&h&&h<u)&&t[u].trim().length&&('"'===t[u]||"'"===t[u]||"`"===t[u]?((p={}).start=u,p.type=t[u],d=!1):a.extractedLogContentsWereGiven&&n(t[u])&&null===m?m=u:t[u].trim().length&&"/"!==t[u]&&!a.extractedLogContentsWereGiven&&(g=null,h=null,m=null)),p&&Number.isInteger(p.start)&&p.start<u&&!d&&null===m&&n(t[u])&&(m=u),!Number.isInteger(m)||n(t[u])&&t[u+1]||!(u>m)&&t[u+1]||(c.push(m,n(t[u])?u+1:u,a.padStart?String(null!==a.overrideRowNum?a.overrideRowNum:y).padStart(a.padStart,"0"):"".concat(null!==a.overrideRowNum?a.overrideRowNum:y)),m=null,d=!0),p&&Number.isInteger(p.start)&&p.start<u&&!d&&(l=t[u],/[A-Za-z]/.test(l))&&("n"!==t[u]||t[u-1]!==E)){if("\\"===t[u-1]&&"u"===t[u]&&"0"===t[u+1]&&"0"===t[u+2]&&"1"===t[u+3]&&("b"===t[u+4]||"B"===t[u+5])&&"["===t[u+5]){var b=void 0;n(t[u+6])?b=u+6:"$"===t[u+6]&&"{"===t[u+7]&&n(t[u+8])&&(b=u+8);var _=void 0;if(b)for(var v=b;v<f;v++)if(!n(t[v])){_=v;break}var T=void 0;if("m"===t[_]?T=_:"}"===t[_]&&"m"===t[_+1]&&(T=_+1),!T){d=!0;continue}if("$"===t[T+1]&&"{"===t[T+2]&&"`"===t[T+3]){u=T+3;continue}}d=!0}!h&&t[u].trim().length&&g&&g<=u&&("("===t[u]?h=u:(g=null,m=null));var O=void 0;(s(a)&&a.triggerKeywords&&Array.isArray(a.triggerKeywords)&&a.triggerKeywords.some((function(e){if(t.startsWith(e,u))return O=e,!0}))||!(null===a.triggerKeywords||Array.isArray(a.triggerKeywords)&&a.triggerKeywords.length)&&["console.log"].some((function(e){if(t.startsWith(e,u))return O=e,!0})))&&(g=u+O.length,u=u+O.length-1)}return p=null,g=null,h=null,y=1,d=void 0,m=null,y=1,a.returnRangesOnly?c.current():c.current()?function(e,t,r){let n=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===t)return e;if(!I(t))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);I(t)&&(i(t[0],{includeZero:!0})||o(t[0],{includeZero:!0}))&&(i(t[1],{includeZero:!0})||o(t[1],{includeZero:!0}))&&(t=[t]);const a=t.length;let u=0;t.forEach((e,l)=>{if(r&&(n=Math.floor(u/a*10),n!==s&&(s=n,r(n))),!I(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${l}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!i(e[0],{includeZero:!0})){if(!o(e[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${l}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);t[l][0]=Number.parseInt(t[l][0],10)}if(!i(e[1],{includeZero:!0})){if(!o(e[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${l}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);t[l][1]=Number.parseInt(t[l][1],10)}u++});const l=w(t,{progressFn:e=>{r&&(n=10+Math.floor(e/10),n!==s&&(s=n,r(n)))}}),c=l.length;if(c>0){const t=e.slice(l[c-1][1]);e=l.reduce((t,o,i,a)=>{r&&(n=20+Math.floor(i/c*80),n!==s&&(s=n,r(n)));const u=0===i?0:a[i-1][1],l=a[i][0];return t+e.slice(u,l)+(function(e){return null!=e}(a[i][2])?a[i][2]:"")},""),e+=t}return e}(t,c.current()):t}}));
