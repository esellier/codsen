/**
 * ranges-regex
 * Perform a regex search on string and get a ranges array of findings (or null)
 * Version: 2.0.39
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-regex
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).rangesRegex=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1};const r=Array.isArray;function n(t,n){if(!r(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},n);let i,u;if(o.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(i=e,u=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${i}th range (${JSON.stringify(t[i],null,4)}) has not two but ${u} elements!`);if(!t.every((t,r)=>!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(i=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${i}th range (${JSON.stringify(t[i],null,4)}) does not consist of only natural numbers!`);const a=t.length*t.length;let c=0;return Array.from(t).sort((t,e)=>(o.progressFn&&(c++,o.progressFn(Math.floor(100*c/a))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e){return t(e={exports:{}},e.exports),e.exports}var u=i((function(t,e){var r=200,n="__lodash_hash_undefined__",i=9007199254740991,u="[object Arguments]",a="[object Boolean]",c="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",g="[object RegExp]",h="[object Set]",b="[object String]",_="[object Symbol]",d="[object ArrayBuffer]",v="[object DataView]",j="[object Float32Array]",m="[object Float64Array]",w="[object Int8Array]",T="[object Int16Array]",O="[object Int32Array]",x="[object Uint8Array]",S="[object Uint8ClampedArray]",E="[object Uint16Array]",I="[object Uint32Array]",A=/\w*$/,R=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,$={};$[u]=$["[object Array]"]=$[d]=$[v]=$[a]=$[c]=$[j]=$[m]=$[w]=$[T]=$[O]=$[l]=$[p]=$[y]=$[g]=$[h]=$[b]=$[_]=$[x]=$[S]=$[E]=$[I]=!0,$["[object Error]"]=$[s]=$["[object WeakMap]"]=!1;var W="object"==typeof o&&o&&o.Object===Object&&o,D="object"==typeof self&&self&&self.Object===Object&&self,H=W||D||Function("return this")(),N=e&&!e.nodeType&&e,M=N&&t&&!t.nodeType&&t,J=M&&M.exports===N;function P(t,e){return t.set(e[0],e[1]),t}function k(t,e){return t.add(e),t}function Z(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function q(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function C(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function B(t,e){return function(r){return t(e(r))}}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var z,L=Array.prototype,V=Function.prototype,G=Object.prototype,K=H["__core-js_shared__"],Q=(z=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",X=V.toString,Y=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=J?H.Buffer:void 0,nt=H.Symbol,ot=H.Uint8Array,it=B(Object.getPrototypeOf,Object),ut=Object.create,at=G.propertyIsEnumerable,ct=L.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=B(Object.keys,Object),pt=Mt(H,"DataView"),yt=Mt(H,"Map"),gt=Mt(H,"Promise"),ht=Mt(H,"Set"),bt=Mt(H,"WeakMap"),_t=Mt(Object,"create"),dt=qt(pt),vt=qt(yt),jt=qt(gt),mt=qt(ht),wt=qt(bt),Tt=nt?nt.prototype:void 0,Ot=Tt?Tt.valueOf:void 0;function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){this.__data__=new St(t)}function At(t,e){var r=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&Y.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==u)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||kt(i,n))||r.push(i);return r}function Rt(t,e,r){var n=t[e];Y.call(t,e)&&Ct(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Ft(t,e){for(var r=t.length;r--;)if(Ct(t[r][0],e))return r;return-1}function $t(t,e,r,n,o,i,R){var F;if(n&&(F=i?n(t,o,i,R):n(t)),void 0!==F)return F;if(!Vt(t))return t;var W=Bt(t);if(W){if(F=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,F)}else{var D=Pt(t),H=D==s||D==f;if(zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(D==y||D==u||H&&!i){if(q(t))return i?t:{};if(F=function(t){return"function"!=typeof t.constructor||Zt(t)?{}:(e=it(t),Vt(e)?ut(e):{});var e}(H?{}:t),!e)return function(t,e){return Ht(t,Jt(t),e)}(t,function(t,e){return t&&Ht(e,Gt(e),t)}(F,t))}else{if(!$[D])return i?t:{};F=function(t,e,r,n){var o=t.constructor;switch(e){case d:return Dt(t);case a:case c:return new o(+t);case v:return function(t,e){var r=e?Dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case m:case w:case T:case O:case x:case S:case E:case I:return function(t,e){var r=e?Dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return Z(e?r(C(t),!0):C(t),P,new t.constructor)}(t,n,r);case p:case b:return new o(t);case g:return(s=new(u=t).constructor(u.source,A.exec(u))).lastIndex=u.lastIndex,s;case h:return function(t,e,r){return Z(e?r(U(t),!0):U(t),k,new t.constructor)}(t,n,r);case _:return i=t,Ot?Object(Ot.call(i)):{}}var i;var u,s}(t,D,$t,e)}}R||(R=new It);var N=R.get(t);if(N)return N;if(R.set(t,F),!W)var M=r?function(t){return function(t,e,r){var n=e(t);return Bt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Jt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(M||t,(function(o,i){M&&(o=t[i=o]),Rt(F,i,$t(o,e,r,n,i,t,R))})),F}function Wt(t){return!(!Vt(t)||(e=t,Q&&Q in e))&&(Lt(t)||q(t)?et:R).test(qt(t));var e}function Dt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Ht(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],a=n?n(r[u],t[u],u,r,t):void 0;Rt(r,u,void 0===a?t[u]:a)}return r}function Nt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Mt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Wt(r)?r:void 0}xt.prototype.clear=function(){this.__data__=_t?_t(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(_t){var r=e[t];return r===n?void 0:r}return Y.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:Y.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():ct.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=Ft(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Ft(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new xt,map:new(yt||St),string:new xt}},Et.prototype.delete=function(t){return Nt(this,t).delete(t)},Et.prototype.get=function(t){return Nt(this,t).get(t)},Et.prototype.has=function(t){return Nt(this,t).has(t)},Et.prototype.set=function(t,e){return Nt(this,t).set(t,e),this},It.prototype.clear=function(){this.__data__=new St},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,e){var n=this.__data__;if(n instanceof St){var o=n.__data__;if(!yt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Et(o)}return n.set(t,e),this};var Jt=st?B(st,Object):function(){return[]},Pt=function(t){return tt.call(t)};function kt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function Zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function qt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ct(t,e){return t===e||t!=t&&e!=e}(pt&&Pt(new pt(new ArrayBuffer(1)))!=v||yt&&Pt(new yt)!=l||gt&&"[object Promise]"!=Pt(gt.resolve())||ht&&Pt(new ht)!=h||bt&&"[object WeakMap]"!=Pt(new bt))&&(Pt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?qt(r):void 0;if(n)switch(n){case dt:return v;case vt:return l;case jt:return"[object Promise]";case mt:return h;case wt:return"[object WeakMap]"}return e});var Bt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Lt(t)}var zt=ft||function(){return!1};function Lt(t){var e=Vt(t)?tt.call(t):"";return e==s||e==f}function Vt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Ut(t)?At(t):function(t){if(!Zt(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return $t(t,!0,!0)}})),a="[object Object]";var c,s,f=Function.prototype,l=Object.prototype,p=f.toString,y=l.hasOwnProperty,g=p.call(Object),h=l.toString,b=(c=Object.getPrototypeOf,s=Object,function(t){return c(s(t))});var _=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||h.call(t)!=a||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=b(t);if(null===e)return!0;var r=y.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&p.call(r)==g};var d=i((function(t,e){var r="[object RegExp]",n="object"==typeof o&&o&&o.Object===Object&&o,i=e&&!e.nodeType&&e,u=i&&t&&!t.nodeType&&t,a=u&&u.exports===i&&n.process,c=function(){try{return a&&a.binding("util")}catch(t){}}(),s=c&&c.isRegExp;var f=Object.prototype.toString;var l=s?function(t){return function(e){return t(e)}}(s):function(t){return function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}(t)&&f.call(t)==r};t.exports=l}));return function(e,r,o){if(void 0===e)throw new TypeError("ranges-regex: [THROW_ID_01] The first input's argument must be a regex object! Currently it is missing!");if(!d(e))throw new TypeError("ranges-regex: [THROW_ID_02] The first input's argument must be a regex object! Currently its type is: ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));if("string"!=typeof r)throw new TypeError("ranges-regex: [THROW_ID_03] The second input's argument must be a string! Currently its type is: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(null!=o&&"string"!=typeof o)throw new TypeError("ranges-regex: [THROW_ID_04] The third input's argument must be a string or null! Currently its type is: ".concat(t(o),", equal to: ").concat(JSON.stringify(o,null,4)));if(0===r.length)return null;var i,a=[];if(null===o||"string"==typeof o&&o.length>0)for(;null!==(i=e.exec(r));)a.push([e.lastIndex-i[0].length,e.lastIndex,o]);else for(;null!==(i=e.exec(r));)a.push([e.lastIndex-i[0].length,e.lastIndex]);return a.length?function(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(e){if(!_(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if((i=Object.assign({},o,e)).progressFn&&_(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=u(o);const a=u(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let c,s,f;const l=(c=i.progressFn?n(a,{progressFn:t=>{(f=Math.floor(t/5))!==s&&(s=f,i.progressFn(f))}}):n(a)).length-1;for(let t=l;t>0;t--)i.progressFn&&(f=Math.floor(78*(1-t/l))+21)!==s&&f>s&&(s=f,i.progressFn(f)),(c[t][0]<=c[t-1][0]||!i.joinRangesThatTouchEdges&&c[t][0]<c[t-1][1]||i.joinRangesThatTouchEdges&&c[t][0]<=c[t-1][1])&&(c[t-1][0]=Math.min(c[t][0],c[t-1][0]),c[t-1][1]=Math.max(c[t][1],c[t-1][1]),void 0!==c[t][2]&&(c[t-1][0]>=c[t][0]||c[t-1][1]<=c[t][1])&&null!==c[t-1][2]&&(null===c[t][2]&&null!==c[t-1][2]?c[t-1][2]=null:void 0!==c[t-1][2]?2===i.mergeType&&c[t-1][0]===c[t][0]?c[t-1][2]=c[t][2]:c[t-1][2]+=c[t][2]:c[t-1][2]=c[t][2]),c.splice(t,1),t=c.length);return c}(a):null}}));
