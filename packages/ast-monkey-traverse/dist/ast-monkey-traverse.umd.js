/**
 * @name ast-monkey-traverse
 * @fileoverview Utility library to traverse AST
 * @version 3.0.2
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-traverse/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).astMonkeyTraverse={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={exports:{}};!function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,c="[object Arguments]",u="[object Boolean]",a="[object Date]",i="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",h="[object RegExp]",_="[object Set]",v="[object String]",d="[object Symbol]",b="[object WeakMap]",j="[object ArrayBuffer]",g="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",A="[object Int8Array]",m="[object Int16Array]",x="[object Int32Array]",S="[object Uint8Array]",$="[object Uint8ClampedArray]",P="[object Uint16Array]",T="[object Uint32Array]",I=/\w*$/,k=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,F={};F[c]=F["[object Array]"]=F[j]=F[g]=F[u]=F[a]=F[w]=F[O]=F[A]=F[m]=F[x]=F[s]=F[l]=F[p]=F[h]=F[_]=F[v]=F[d]=F[S]=F[$]=F[P]=F[T]=!0,F["[object Error]"]=F[i]=F[b]=!1;var N="object"==typeof self&&self&&self.Object===Object&&self,M="object"==typeof e&&e&&e.Object===Object&&e||N||Function("return this")(),B=r&&!r.nodeType&&r,U=B&&t&&!t.nodeType&&t,D=U&&U.exports===B;function K(t,e){return t.set(e[0],e[1]),t}function R(t,e){return t.add(e),t}function z(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function C(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function L(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function V(t,e){return function(r){return t(e(r))}}function W(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var G,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=M["__core-js_shared__"],X=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=D?M.Buffer:void 0,nt=M.Symbol,ot=M.Uint8Array,ct=V(Object.getPrototypeOf,Object),ut=Object.create,at=J.propertyIsEnumerable,it=q.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Ut(M,"DataView"),yt=Ut(M,"Map"),ht=Ut(M,"Promise"),_t=Ut(M,"Set"),vt=Ut(M,"WeakMap"),dt=Ut(Object,"create"),bt=Ct(pt),jt=Ct(yt),gt=Ct(ht),wt=Ct(_t),Ot=Ct(vt),At=nt?nt.prototype:void 0,mt=At?At.valueOf:void 0;function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){this.__data__=new St(t)}function Tt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Wt(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Rt(u,n))||r.push(u);return r}function It(t,e,r){var n=t[e];Z.call(t,e)&&Lt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function kt(t,e){for(var r=t.length;r--;)if(Lt(t[r][0],e))return r;return-1}function Et(t,e,r,n,o,y,b){var k;if(n&&(k=y?n(t,o,y,b):n(t)),void 0!==k)return k;if(!Ht(t))return t;var E=Vt(t);if(E){if(k=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,k)}else{var N=Kt(t),M=N==i||N==f;if(Gt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(N==p||N==c||M&&!y){if(C(t))return y?t:{};if(k=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(e=ct(t),Ht(e)?ut(e):{});var e}(M?{}:t),!e)return function(t,e){return Mt(t,Dt(t),e)}(t,function(t,e){return t&&Mt(e,Jt(e),t)}(k,t))}else{if(!F[N])return y?t:{};k=function(t,e,r,n){var o=t.constructor;switch(e){case j:return Nt(t);case u:case a:return new o(+t);case g:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case O:case A:case m:case x:case S:case $:case P:case T:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case s:return function(t,e,r){return z(e?r(L(t),!0):L(t),K,new t.constructor)}(t,n,r);case l:case v:return new o(t);case h:return function(t){var e=new t.constructor(t.source,I.exec(t));return e.lastIndex=t.lastIndex,e}(t);case _:return function(t,e,r){return z(e?r(W(t),!0):W(t),R,new t.constructor)}(t,n,r);case d:return c=t,mt?Object(mt.call(c)):{}}var c}(t,N,Et,e)}}b||(b=new Pt);var B=b.get(t);if(B)return B;if(b.set(t,k),!E)var U=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Dt)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(U||t,(function(o,c){U&&(o=t[c=o]),It(k,c,Et(o,e,r,n,c,t,b))})),k}function Ft(t){return!(!Ht(t)||(e=t,X&&X in e))&&(qt(t)||C(t)?et:k).test(Ct(t));var e}function Nt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Mt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var u=e[o],a=n?n(r[u],t[u],u,r,t):void 0;It(r,u,void 0===a?t[u]:a)}return r}function Bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(r)?r:void 0}xt.prototype.clear=function(){this.__data__=dt?dt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Z.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=kt(e,t);return!(r<0)&&(r==e.length-1?e.pop():it.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=kt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return kt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=kt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},$t.prototype.clear=function(){this.__data__={hash:new xt,map:new(yt||St),string:new xt}},$t.prototype.delete=function(t){return Bt(this,t).delete(t)},$t.prototype.get=function(t){return Bt(this,t).get(t)},$t.prototype.has=function(t){return Bt(this,t).has(t)},$t.prototype.set=function(t,e){return Bt(this,t).set(t,e),this},Pt.prototype.clear=function(){this.__data__=new St},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new $t(n)}return r.set(t,e),this};var Dt=ft?V(ft,Object):function(){return[]},Kt=function(t){return tt.call(t)};function Rt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function Ct(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(pt&&Kt(new pt(new ArrayBuffer(1)))!=g||yt&&Kt(new yt)!=s||ht&&Kt(ht.resolve())!=y||_t&&Kt(new _t)!=_||vt&&Kt(new vt)!=b)&&(Kt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Ct(r):void 0;if(n)switch(n){case bt:return g;case jt:return s;case gt:return y;case wt:return _;case Ot:return b}return e});var Vt=Array.isArray;function Wt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var Gt=st||function(){return!1};function qt(t){var e=Ht(t)?tt.call(t):"";return e==i||e==f}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Wt(t)?Tt(t):function(t){if(!zt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Et(t,!0,!0)}}(r,r.exports);var n=r.exports;var o,c,u=Object.prototype,a=Function.prototype.toString,i=u.hasOwnProperty,f=a.call(Object),s=u.toString,l=(o=Object.getPrototypeOf,c=Object,function(t){return o(c(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=s.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=l(t);if(null===e)return!0;var r=i.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&a.call(r)==f};
/**
 * @name ast-monkey-util
 * @fileoverview Utility library of AST helper functions
 * @version 2.0.2
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-util/}
 */function y(t){if(t.includes(".")){const e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(let r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}t.traverse=function(t,e){return function t(e,r,o,c){const u=n(e);let a;const i={depth:-1,path:"",...o};if(i.depth+=1,Array.isArray(u))for(let e=0,o=u.length;e<o&&!c.now;e++){const o=i.path?`${i.path}.${e}`:`${e}`;void 0!==u[e]?(i.parent=n(u),i.parentType="array",i.parentKey=y(o),a=t(r(u[e],void 0,{...i,path:o},c),r,{...i,path:o},c),Number.isNaN(a)&&e<u.length?(u.splice(e,1),e-=1):u[e]=a):u.splice(e,1)}else if(p(u))for(const e in u){if(c.now&&null!=e)break;const o=i.path?`${i.path}.${e}`:e;0===i.depth&&null!=e&&(i.topmostKey=e),i.parent=n(u),i.parentType="object",i.parentKey=y(o),a=t(r(e,u[e],{...i,path:o},c),r,{...i,path:o},c),Number.isNaN(a)?delete u[e]:u[e]=a}return u}(t,e,{},{now:!1})},t.version="3.0.2",Object.defineProperty(t,"__esModule",{value:!0})}));
