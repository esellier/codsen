/**
 * string-extract-class-names
 * Extract class (or id) name from a string
 * Version: 5.9.29
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-extract-class-names/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).stringExtractClassNames=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}Function.prototype.toString.call(Object);var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,r,n){t(n={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&n.path)}},n.exports),n.exports}((function(n,e){var o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",i="[object Boolean]",a="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object Promise]",d="[object RegExp]",_="[object Set]",b="[object String]",v="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",m="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",A="[object Int8Array]",x="[object Int16Array]",S="[object Int32Array]",E="[object Uint8Array]",T="[object Uint8ClampedArray]",I="[object Uint16Array]",$="[object Uint32Array]",C=/\w*$/,F=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,B={};B[c]=B["[object Array]"]=B[j]=B[m]=B[i]=B[a]=B[w]=B[O]=B[A]=B[x]=B[S]=B[l]=B[p]=B[y]=B[d]=B[_]=B[b]=B[v]=B[E]=B[T]=B[I]=B[$]=!0,B["[object Error]"]=B[f]=B[g]=!1;var D="object"==t(r)&&r&&r.Object===Object&&r,W="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,k=D||W||Function("return this")(),R=e&&!e.nodeType&&e,U=R&&n&&!n.nodeType&&n,q=U&&U.exports===R;function M(t,r){return t.set(r[0],r[1]),t}function N(t,r){return t.add(r),t}function z(t,r,n,e){var o=-1,u=t?t.length:0;for(e&&u&&(n=t[++o]);++o<u;)n=r(n,t[o],o,t);return n}function H(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function J(t){var r=-1,n=Array(t.size);return t.forEach((function(t,e){n[++r]=[e,t]})),n}function L(t,r){return function(n){return t(r(n))}}function V(t){var r=-1,n=Array(t.size);return t.forEach((function(t){n[++r]=t})),n}var G,K=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=k["__core-js_shared__"],Z=(G=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",tt=Q.toString,rt=X.hasOwnProperty,nt=X.toString,et=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=q?k.Buffer:void 0,ut=k.Symbol,ct=k.Uint8Array,it=L(Object.getPrototypeOf,Object),at=Object.create,ft=X.propertyIsEnumerable,st=K.splice,lt=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,yt=L(Object.keys,Object),ht=Ut(k,"DataView"),dt=Ut(k,"Map"),_t=Ut(k,"Promise"),bt=Ut(k,"Set"),vt=Ut(k,"WeakMap"),gt=Ut(Object,"create"),jt=Ht(ht),mt=Ht(dt),wt=Ht(_t),Ot=Ht(bt),At=Ht(vt),xt=ut?ut.prototype:void 0,St=xt?xt.valueOf:void 0;function Et(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Tt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function It(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function $t(t){this.__data__=new Tt(t)}function Ct(r,n){var e=Lt(r)||function(r){return function(r){return function(r){return!!r&&"object"==t(r)}(r)&&Vt(r)}(r)&&rt.call(r,"callee")&&(!ft.call(r,"callee")||nt.call(r)==c)}(r)?function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}(r.length,String):[],o=e.length,u=!!o;for(var i in r)!n&&!rt.call(r,i)||u&&("length"==i||Nt(i,o))||e.push(i);return e}function Ft(t,r,n){var e=t[r];rt.call(t,r)&&Jt(e,n)&&(void 0!==n||r in t)||(t[r]=n)}function Pt(t,r){for(var n=t.length;n--;)if(Jt(t[n][0],r))return n;return-1}function Bt(t,r,n,e,o,u,h){var g;if(e&&(g=u?e(t,o,u,h):e(t)),void 0!==g)return g;if(!Qt(t))return t;var F=Lt(t);if(F){if(g=function(t){var r=t.length,n=t.constructor(r);r&&"string"==typeof t[0]&&rt.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!r)return function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(t,g)}else{var P=Mt(t),D=P==f||P==s;if(Gt(t))return function(t,r){if(r)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,r);if(P==y||P==c||D&&!u){if(H(t))return u?t:{};if(g=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(r=it(t),Qt(r)?at(r):{});var r}(D?{}:t),!r)return function(t,r){return kt(t,qt(t),r)}(t,function(t,r){return t&&kt(r,Xt(r),t)}(g,t))}else{if(!B[P])return u?t:{};g=function(t,r,n,e){var o=t.constructor;switch(r){case j:return Wt(t);case i:case a:return new o(+t);case m:return function(t,r){var n=r?Wt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,e);case w:case O:case A:case x:case S:case E:case T:case I:case $:return function(t,r){var n=r?Wt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,e);case l:return function(t,r,n){return z(r?n(J(t),!0):J(t),M,new t.constructor)}(t,e,n);case p:case b:return new o(t);case d:return function(t){var r=new t.constructor(t.source,C.exec(t));return r.lastIndex=t.lastIndex,r}(t);case _:return function(t,r,n){return z(r?n(V(t),!0):V(t),N,new t.constructor)}(t,e,n);case v:return u=t,St?Object(St.call(u)):{}}var u}(t,P,Bt,r)}}h||(h=new $t);var W=h.get(t);if(W)return W;if(h.set(t,g),!F)var k=n?function(t){return function(t,r,n){var e=r(t);return Lt(t)?e:function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t}(e,n(t))}(t,Xt,qt)}(t):Xt(t);return function(t,r){for(var n=-1,e=t?t.length:0;++n<e&&!1!==r(t[n],n,t););}(k||t,(function(o,u){k&&(o=t[u=o]),Ft(g,u,Bt(o,r,n,e,u,t,h))})),g}function Dt(t){return!(!Qt(t)||(r=t,Z&&Z in r))&&(Kt(t)||H(t)?et:F).test(Ht(t));var r}function Wt(t){var r=new t.constructor(t.byteLength);return new ct(r).set(new ct(t)),r}function kt(t,r,n,e){n||(n={});for(var o=-1,u=r.length;++o<u;){var c=r[o],i=e?e(n[c],t[c],c,n,t):void 0;Ft(n,c,void 0===i?t[c]:i)}return n}function Rt(r,n){var e,o,u=r.__data__;return("string"==(o=t(e=n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e)?u["string"==typeof n?"string":"hash"]:u.map}function Ut(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return Dt(n)?n:void 0}Et.prototype.clear=function(){this.__data__=gt?gt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var r=this.__data__;if(gt){var n=r[t];return n===o?void 0:n}return rt.call(r,t)?r[t]:void 0},Et.prototype.has=function(t){var r=this.__data__;return gt?void 0!==r[t]:rt.call(r,t)},Et.prototype.set=function(t,r){return this.__data__[t]=gt&&void 0===r?o:r,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var r=this.__data__,n=Pt(r,t);return!(n<0)&&(n==r.length-1?r.pop():st.call(r,n,1),!0)},Tt.prototype.get=function(t){var r=this.__data__,n=Pt(r,t);return n<0?void 0:r[n][1]},Tt.prototype.has=function(t){return Pt(this.__data__,t)>-1},Tt.prototype.set=function(t,r){var n=this.__data__,e=Pt(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},It.prototype.clear=function(){this.__data__={hash:new Et,map:new(dt||Tt),string:new Et}},It.prototype.delete=function(t){return Rt(this,t).delete(t)},It.prototype.get=function(t){return Rt(this,t).get(t)},It.prototype.has=function(t){return Rt(this,t).has(t)},It.prototype.set=function(t,r){return Rt(this,t).set(t,r),this},$t.prototype.clear=function(){this.__data__=new Tt},$t.prototype.delete=function(t){return this.__data__.delete(t)},$t.prototype.get=function(t){return this.__data__.get(t)},$t.prototype.has=function(t){return this.__data__.has(t)},$t.prototype.set=function(t,r){var n=this.__data__;if(n instanceof Tt){var e=n.__data__;if(!dt||e.length<199)return e.push([t,r]),this;n=this.__data__=new It(e)}return n.set(t,r),this};var qt=lt?L(lt,Object):function(){return[]},Mt=function(t){return nt.call(t)};function Nt(t,r){return!!(r=null==r?u:r)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<r}function zt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||X)}function Ht(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Jt(t,r){return t===r||t!=t&&r!=r}(ht&&Mt(new ht(new ArrayBuffer(1)))!=m||dt&&Mt(new dt)!=l||_t&&Mt(_t.resolve())!=h||bt&&Mt(new bt)!=_||vt&&Mt(new vt)!=g)&&(Mt=function(t){var r=nt.call(t),n=r==y?t.constructor:void 0,e=n?Ht(n):void 0;if(e)switch(e){case jt:return m;case mt:return l;case wt:return h;case Ot:return _;case At:return g}return r});var Lt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!Kt(t)}var Gt=pt||function(){return!1};function Kt(t){var r=Qt(t)?nt.call(t):"";return r==f||r==s}function Qt(r){var n=t(r);return!!r&&("object"==n||"function"==n)}function Xt(t){return Vt(t)?Ct(t):function(t){if(!zt(t))return yt(t);var r=[];for(var n in Object(t))rt.call(t,n)&&"constructor"!=n&&r.push(n);return r}(t)}n.exports=function(t){return Bt(t,!0,!0)}}));function n(t,r){return function(t,r,n){if("string"!=typeof t||!t.length)return null;if(r&&"number"==typeof r||(r=0),!t[r+1])return null;if(t[r+1]&&(!n&&t[r+1].trim()||n&&(t[r+1].trim()||"\n\r".includes(t[r+1]))))return r+1;if(t[r+2]&&(!n&&t[r+2].trim()||n&&(t[r+2].trim()||"\n\r".includes(t[r+2]))))return r+2;for(var e=r+1,o=t.length;e<o;e++)if(t[e]&&(!n&&t[e].trim()||n&&(t[e].trim()||"\n\r".includes(t[e]))))return e;return null}(t,r,!1)}function e(t,r){return function(t,r,n){if("string"!=typeof t||!t.length)return null;if(r&&"number"==typeof r||(r=0),r<1)return null;if(t[~-r]&&(!n&&t[~-r].trim()||n&&(t[~-r].trim()||"\n\r".includes(t[~-r]))))return~-r;if(t[r-2]&&(!n&&t[r-2].trim()||n&&(t[r-2].trim()||"\n\r".includes(t[r-2]))))return r-2;for(var e=r;e--;)if(t[e]&&(!n&&t[e].trim()||n&&(t[e].trim()||"\n\r".includes(t[e]))))return e;return null}(t,r,!1)}return function(r){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("string"!=typeof r)throw new TypeError("string-extract-class-names: [THROW_ID_02] first input should be string, not ".concat(t(r),", currently equal to ").concat(JSON.stringify(r,null,4)));if("boolean"!=typeof o)throw new TypeError("string-extract-class-names: [THROW_ID_03] second input argument should be a Boolean, not ".concat(t(r),", currently equal to ").concat(JSON.stringify(r,null,4)));var u,c=".# ~\\!@$%^&*()+=,/';:\"?><[]{}|`";function i(t){return"string"==typeof t&&t.length&&(t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>96&&t.charCodeAt(0)<123)}for(var a=null,f=[],s=0,l=r.length;s<l;s++)null!==a&&s>=a&&(c.includes(r[s])||!r[s].trim())&&(s>a+1&&(o?f.push([a,s]):f.push("".concat(u||"").concat(r.slice(a,s))),u&&(u=void 0)),a=null),null!==a||"."!==r[s]&&"#"!==r[s]||(a=s),r.startsWith("class",s)&&"["===r[e(r,s)]&&"="===r[n(r,s+4)]&&(i(r[n(r,n(r,s+4))])?a=n(r,n(r,s+4)):"'\"".includes(r[n(r,n(r,s+4))])&&i(r[n(r,n(r,n(r,s+4)))])&&(a=n(r,n(r,n(r,s+4)))),u="."),r.startsWith("id",s)&&"["===r[e(r,s)]&&"="===r[n(r,s+1)]&&(i(r[n(r,n(r,s+1))])?a=n(r,n(r,s+1)):"'\"".includes(r[n(r,n(r,s+1))])&&i(r[n(r,n(r,n(r,s+1)))])&&(a=n(r,n(r,n(r,s+1)))),u="#"),s+1===l&&null!==a&&s>a&&(o?f.push([a,l]):f.push(r.slice(a,l)));return f}}));
