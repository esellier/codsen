/**
 * @name array-of-arrays-into-ast
 * @fileoverview Turns an array of arrays of data into a nested tree of plain objects
 * @version 3.0.2
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/array-of-arrays-into-ast/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).arrayOfArraysIntoAst={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n={exports:{}};!function(t,n){var r="__lodash_hash_undefined__",o=9007199254740991,c="[object Arguments]",u="[object Boolean]",i="[object Date]",a="[object Function]",f="[object GeneratorFunction]",s="[object Map]",y="[object Number]",p="[object Object]",l="[object Promise]",h="[object RegExp]",b="[object Set]",g="[object String]",_="[object Symbol]",d="[object WeakMap]",v="[object ArrayBuffer]",j="[object DataView]",k="[object Float32Array]",O="[object Float64Array]",w="[object Int8Array]",A="[object Int16Array]",m="[object Int32Array]",S="[object Uint8Array]",E="[object Uint8ClampedArray]",x="[object Uint16Array]",$="[object Uint32Array]",M=/\w*$/,T=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[v]=I[j]=I[u]=I[i]=I[k]=I[O]=I[w]=I[A]=I[m]=I[s]=I[y]=I[p]=I[h]=I[b]=I[g]=I[_]=I[S]=I[E]=I[x]=I[$]=!0,I["[object Error]"]=I[a]=I[d]=!1;var K="object"==typeof self&&self&&self.Object===Object&&self,P="object"==typeof e&&e&&e.Object===Object&&e||K||Function("return this")(),B=n&&!n.nodeType&&n,C=B&&t&&!t.nodeType&&t,N=C&&C.exports===B;function R(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function U(t,e,n,r){var o=-1,c=t?t.length:0;for(r&&c&&(n=t[++o]);++o<c;)n=e(n,t[o],o,t);return n}function W(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function V(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function z(t,e){return function(n){return t(e(n))}}function G(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var H,J=Array.prototype,L=Function.prototype,q=Object.prototype,Q=P["__core-js_shared__"],X=(H=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",Y=L.toString,Z=q.hasOwnProperty,tt=q.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=N?P.Buffer:void 0,rt=P.Symbol,ot=P.Uint8Array,ct=z(Object.getPrototypeOf,Object),ut=Object.create,it=q.propertyIsEnumerable,at=J.splice,ft=Object.getOwnPropertySymbols,st=nt?nt.isBuffer:void 0,yt=z(Object.keys,Object),pt=Ct(P,"DataView"),lt=Ct(P,"Map"),ht=Ct(P,"Promise"),bt=Ct(P,"Set"),gt=Ct(P,"WeakMap"),_t=Ct(Object,"create"),dt=Wt(pt),vt=Wt(lt),jt=Wt(ht),kt=Wt(bt),Ot=Wt(gt),wt=rt?rt.prototype:void 0,At=wt?wt.valueOf:void 0;function mt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function St(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xt(t){this.__data__=new St(t)}function $t(t,e){var n=zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Gt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Dt(u,r))||n.push(u);return n}function Mt(t,e,n){var r=t[e];Z.call(t,e)&&Vt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Tt(t,e){for(var n=t.length;n--;)if(Vt(t[n][0],e))return n;return-1}function Ft(t,e,n,r,o,l,d){var T;if(r&&(T=l?r(t,o,l,d):r(t)),void 0!==T)return T;if(!Lt(t))return t;var F=zt(t);if(F){if(T=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,T)}else{var K=Rt(t),P=K==a||K==f;if(Ht(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(K==p||K==c||P&&!l){if(W(t))return l?t:{};if(T=function(t){return"function"!=typeof t.constructor||Ut(t)?{}:(e=ct(t),Lt(e)?ut(e):{});var e}(P?{}:t),!e)return function(t,e){return Pt(t,Nt(t),e)}(t,function(t,e){return t&&Pt(e,qt(e),t)}(T,t))}else{if(!I[K])return l?t:{};T=function(t,e,n,r){var o=t.constructor;switch(e){case v:return Kt(t);case u:case i:return new o(+t);case j:return function(t,e){var n=e?Kt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case k:case O:case w:case A:case m:case S:case E:case x:case $:return function(t,e){var n=e?Kt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case s:return function(t,e,n){return U(e?n(V(t),!0):V(t),R,new t.constructor)}(t,r,n);case y:case g:return new o(t);case h:return function(t){var e=new t.constructor(t.source,M.exec(t));return e.lastIndex=t.lastIndex,e}(t);case b:return function(t,e,n){return U(e?n(G(t),!0):G(t),D,new t.constructor)}(t,r,n);case _:return c=t,At?Object(At.call(c)):{}}var c}(t,K,Ft,e)}}d||(d=new xt);var B=d.get(t);if(B)return B;if(d.set(t,T),!F)var C=n?function(t){return function(t,e,n){var r=e(t);return zt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,qt,Nt)}(t):qt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(C||t,(function(o,c){C&&(o=t[c=o]),Mt(T,c,Ft(o,e,n,r,c,t,d))})),T}function It(t){return!(!Lt(t)||(e=t,X&&X in e))&&(Jt(t)||W(t)?et:T).test(Wt(t));var e}function Kt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Pt(t,e,n,r){n||(n={});for(var o=-1,c=e.length;++o<c;){var u=e[o],i=r?r(n[u],t[u],u,n,t):void 0;Mt(n,u,void 0===i?t[u]:i)}return n}function Bt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return It(n)?n:void 0}mt.prototype.clear=function(){this.__data__=_t?_t(null):{}},mt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},mt.prototype.get=function(t){var e=this.__data__;if(_t){var n=e[t];return n===r?void 0:n}return Z.call(e,t)?e[t]:void 0},mt.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:Z.call(e,t)},mt.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?r:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,n=Tt(e,t);return!(n<0)&&(n==e.length-1?e.pop():at.call(e,n,1),!0)},St.prototype.get=function(t){var e=this.__data__,n=Tt(e,t);return n<0?void 0:e[n][1]},St.prototype.has=function(t){return Tt(this.__data__,t)>-1},St.prototype.set=function(t,e){var n=this.__data__,r=Tt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new mt,map:new(lt||St),string:new mt}},Et.prototype.delete=function(t){return Bt(this,t).delete(t)},Et.prototype.get=function(t){return Bt(this,t).get(t)},Et.prototype.has=function(t){return Bt(this,t).has(t)},Et.prototype.set=function(t,e){return Bt(this,t).set(t,e),this},xt.prototype.clear=function(){this.__data__=new St},xt.prototype.delete=function(t){return this.__data__.delete(t)},xt.prototype.get=function(t){return this.__data__.get(t)},xt.prototype.has=function(t){return this.__data__.has(t)},xt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof St){var r=n.__data__;if(!lt||r.length<199)return r.push([t,e]),this;n=this.__data__=new Et(r)}return n.set(t,e),this};var Nt=ft?z(ft,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function Ut(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||q)}function Wt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Vt(t,e){return t===e||t!=t&&e!=e}(pt&&Rt(new pt(new ArrayBuffer(1)))!=j||lt&&Rt(new lt)!=s||ht&&Rt(ht.resolve())!=l||bt&&Rt(new bt)!=b||gt&&Rt(new gt)!=d)&&(Rt=function(t){var e=tt.call(t),n=e==p?t.constructor:void 0,r=n?Wt(n):void 0;if(r)switch(r){case dt:return j;case vt:return s;case jt:return l;case kt:return b;case Ot:return d}return e});var zt=Array.isArray;function Gt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Jt(t)}var Ht=st||function(){return!1};function Jt(t){var e=Lt(t)?tt.call(t):"";return e==a||e==f}function Lt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function qt(t){return Gt(t)?$t(t):function(t){if(!Ut(t))return yt(t);var e=[];for(var n in Object(t))Z.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return Ft(t,!0,!0)}}(n,n.exports);var r=n.exports,o=1/0,c=9007199254740991,u=17976931348623157e292,i=NaN,a="[object Arguments]",f="[object Function]",s="[object GeneratorFunction]",y="[object String]",p="[object Symbol]",l=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,g=/^0o[0-7]+$/i,_=/^(?:0|[1-9]\d*)$/,d=parseInt;function v(t){return t!=t}function j(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,(function(e){return t[e]}))}var k,O,w=Object.prototype,A=w.hasOwnProperty,m=w.toString,S=w.propertyIsEnumerable,E=(k=Object.keys,O=Object,function(t){return k(O(t))}),x=Math.max;function $(t,e){var n=F(t)||function(t){return function(t){return P(t)&&I(t)}(t)&&A.call(t,"callee")&&(!S.call(t,"callee")||m.call(t)==a)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var c in t)!e&&!A.call(t,c)||o&&("length"==c||T(c,r))||n.push(c);return n}function M(t){if((e=t)!==("function"==typeof(n=e&&e.constructor)&&n.prototype||w))return E(t);var e,n,r=[];for(var o in Object(t))A.call(t,o)&&"constructor"!=o&&r.push(o);return r}function T(t,e){return!!(e=null==e?c:e)&&("number"==typeof t||_.test(t))&&t>-1&&t%1==0&&t<e}var F=Array.isArray;function I(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}(t.length)&&!function(t){var e=K(t)?m.call(t):"";return e==f||e==s}(t)}function K(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function P(t){return!!t&&"object"==typeof t}var B=function(t,e,n,r){var c;t=I(t)?t:(c=t)?j(c,function(t){return I(t)?$(t):M(t)}(c)):[],n=n&&!r?function(t){var e=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||P(t)&&m.call(t)==p}(t))return i;if(K(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=K(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=b.test(t);return n||g.test(t)?d(t.slice(2),n?2:8):h.test(t)?i:+t}(t))===o||t===-1/0){return(t<0?-1:1)*u}return t==t?t:0}(t),n=e%1;return e==e?n?e-n:e:0}(n):0;var a=t.length;return n<0&&(n=x(a+n,0)),function(t){return"string"==typeof t||!F(t)&&P(t)&&m.call(t)==y}(t)?n<=a&&t.indexOf(e,n)>-1:!!a&&function(t,e,n){if(e!=e)return function(t,e,n,r){for(var o=t.length,c=n+(r?1:-1);r?c--:++c<o;)if(e(t[c],c,t))return c;return-1}(t,v,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}(t,e,n)>-1},C="__lodash_hash_undefined__",N="[object Function]",R="[object GeneratorFunction]",D=/^\[object .+?Constructor\]$/,U="object"==typeof self&&self&&self.Object===Object&&self,W="object"==typeof e&&e&&e.Object===Object&&e||U||Function("return this")();function V(t,e){return!!(t?t.length:0)&&function(t,e,n){if(e!=e)return function(t,e,n,r){var o=t.length,c=n+(r?1:-1);for(;r?c--:++c<o;)if(e(t[c],c,t))return c;return-1}(t,G,n);var r=n-1,o=t.length;for(;++r<o;)if(t[r]===e)return r;return-1}(t,e,0)>-1}function z(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function G(t){return t!=t}function H(t,e){return t.has(e)}function J(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var L,q=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=W["__core-js_shared__"],Z=(L=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",tt=Q.toString,et=X.hasOwnProperty,nt=X.toString,rt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=q.splice,ct=gt(W,"Map"),ut=gt(W,"Set"),it=gt(Object,"create");function at(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ft(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function st(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function yt(t){var e=-1,n=t?t.length:0;for(this.__data__=new st;++e<n;)this.add(t[e])}function pt(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!=n&&r!=r)return o;return-1}function lt(t){if(!_t(t)||function(t){return!!Z&&Z in t}(t))return!1;var e=function(t){var e=_t(t)?nt.call(t):"";return e==N||e==R}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?rt:D;return e.test(function(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}at.prototype.clear=function(){this.__data__=it?it(null):{}},at.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},at.prototype.get=function(t){var e=this.__data__;if(it){var n=e[t];return n===C?void 0:n}return et.call(e,t)?e[t]:void 0},at.prototype.has=function(t){var e=this.__data__;return it?void 0!==e[t]:et.call(e,t)},at.prototype.set=function(t,e){return this.__data__[t]=it&&void 0===e?C:e,this},ft.prototype.clear=function(){this.__data__=[]},ft.prototype.delete=function(t){var e=this.__data__,n=pt(e,t);return!(n<0)&&(n==e.length-1?e.pop():ot.call(e,n,1),!0)},ft.prototype.get=function(t){var e=this.__data__,n=pt(e,t);return n<0?void 0:e[n][1]},ft.prototype.has=function(t){return pt(this.__data__,t)>-1},ft.prototype.set=function(t,e){var n=this.__data__,r=pt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},st.prototype.clear=function(){this.__data__={hash:new at,map:new(ct||ft),string:new at}},st.prototype.delete=function(t){return bt(this,t).delete(t)},st.prototype.get=function(t){return bt(this,t).get(t)},st.prototype.has=function(t){return bt(this,t).has(t)},st.prototype.set=function(t,e){return bt(this,t).set(t,e),this},yt.prototype.add=yt.prototype.push=function(t){return this.__data__.set(t,C),this},yt.prototype.has=function(t){return this.__data__.has(t)};var ht=ut&&1/J(new ut([,-0]))[1]==1/0?function(t){return new ut(t)}:function(){};function bt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function gt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return lt(n)?n:void 0}function _t(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var dt=function(t){return t&&t.length?function(t,e,n){var r=-1,o=V,c=t.length,u=!0,i=[],a=i;if(n)u=!1,o=z;else if(c>=200){var f=e?null:ht(t);if(f)return J(f);u=!1,o=H,a=new yt}else a=e?[]:i;t:for(;++r<c;){var s=t[r],y=e?e(s):s;if(s=n||0!==s?s:0,u&&y==y){for(var p=a.length;p--;)if(a[p]===y)continue t;e&&a.push(y),i.push(s)}else o(a,y,n)||(a!==i&&a.push(y),i.push(s))}return i}(t):[]};var vt=Object.prototype,jt=Function.prototype.toString,kt=vt.hasOwnProperty,Ot=jt.call(Object),wt=vt.toString,At=function(t,e){return function(n){return t(e(n))}}(Object.getPrototypeOf,Object);var mt=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=wt.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=At(t);if(null===e)return!0;var n=kt.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&jt.call(n)==Ot},St={exports:{}};!function(t,n){var r=n&&!n.nodeType&&n,o=r&&t&&!t.nodeType&&t,c=o&&o.exports===r&&("object"==typeof e&&e&&e.Object===Object&&e).process,u=function(){try{return c&&c.binding("util")}catch(t){}}(),i=u&&u.isDate;var a=Object.prototype.toString;var f=i?function(t){return function(e){return t(e)}}(i):function(t){return function(t){return!!t&&"object"==typeof t}(t)&&"[object Date]"==a.call(t)};t.exports=f}(St,St.exports);var Et=St.exports;const xt=new Map,$t=(t,e)=>{if(!Array.isArray(t))switch(typeof t){case"string":t=[t];break;case"undefined":t=[];break;default:throw new TypeError(`Expected '${e}' to be a string or an array, but got a type of '${typeof t}'`)}return t.filter((t=>{if("string"!=typeof t){if(void 0===t)return!1;throw new TypeError(`Expected '${e}' to be an array of strings, but found a type of '${typeof t}' in the array`)}return!0}))},Mt=(t,e)=>{e={caseSensitive:!1,...e};const n=t+JSON.stringify(e);if(xt.has(n))return xt.get(n);const r="!"===t[0];r&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=r,xt.set(n,o),o};function Tt(t,e,n){return((t,e,n,r)=>{if(t=$t(t,"inputs"),0===(e=$t(e,"patterns")).length)return[];e=e.map((t=>Mt(t,n)));const{allPatterns:o}=n||{},c=[];for(const n of t){let t;const u=[...e].fill(!1);for(const[r,o]of e.entries())if(o.test(n)&&(u[r]=!0,t=!o.negated,!t))break;if(!(!1===t||void 0===t&&e.some((t=>!t.negated))||o&&u.some(((t,n)=>!t&&!e[n].negated)))&&(c.push(n),r))break}return c})(t,e,n,!0).length>0}
/**
 * @name util-nonempty
 * @fileoverview Is the input (plain object, array, string or whatever) not empty?
 * @version 4.0.2
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/util-nonempty/}
 */function Ft(t){return null!=t&&(Array.isArray(t)||"string"==typeof t?!!t.length:mt(t)?!!Object.keys(t).length:"number"==typeof t)}
/**
 * @name object-merge-advanced
 * @fileoverview Recursively, deeply merge of anything (objects, arrays, strings or nested thereof), which weighs contents by type hierarchy to ensure the maximum content is retained
 * @version 13.0.2
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/object-merge-advanced/}
 */const It={arrayVsArrayAllMustBeFound:"any",caseSensitive:!0};function Kt(t,e,n){if(!t.length||!e.length)return!1;const r={...It,...n},o="string"==typeof t?[t]:Array.from(t);return"string"==typeof e?o.some((t=>Tt(t,e,{caseSensitive:r.caseSensitive}))):"any"===r.arrayVsArrayAllMustBeFound?e.some((t=>o.some((e=>Tt(e,t,{caseSensitive:r.caseSensitive}))))):e.every((t=>o.some((e=>Tt(e,t,{caseSensitive:r.caseSensitive})))))}function Pt(t){return"string"==typeof t}function Bt(t){return"boolean"==typeof t}const Ct=Array.isArray;function Nt(t){return!!t&&t.some((t=>"string"==typeof t))}function Rt(t,e){return 0===Object.keys(t).length||0===Object.keys(e).length||Object.keys(t).every((t=>Object.keys(e).includes(t)))||Object.keys(e).every((e=>Object.keys(t).includes(e)))}function Dt(t){return null===t?"null":Et(t)?"date":mt(t)?"object":Ct(t)?"array":typeof t}const Ut={cb:null,mergeObjectsOnlyWhenKeysetMatches:!0,ignoreKeys:[],hardMergeKeys:[],hardArrayConcatKeys:[],mergeArraysContainingStringsToBeEmpty:!1,oneToManyArrayObjectMerge:!1,hardMergeEverything:!1,hardArrayConcat:!1,ignoreEverything:!1,concatInsteadOfMerging:!0,dedupeStringsInArrayValues:!1,mergeBoolsUsingOrNotAnd:!0,useNullAsExplicitFalse:!1};function Wt(t,e,n,o){const c={...Ut,...o};let u;if("string"==typeof c.ignoreKeys&&(c.ignoreKeys=[c.ignoreKeys]),"string"==typeof c.hardMergeKeys&&(c.hardMergeKeys=[c.hardMergeKeys]),c.hardMergeKeys.includes("*")&&(c.hardMergeEverything=!0),c.ignoreKeys.includes("*")&&(c.ignoreEverything=!0),c.useNullAsExplicitFalse&&(null===e||null===n))return"function"==typeof c.cb?c.cb(e,n,null,{path:t.path,key:t.key,type:t.type}):null;let i=Ct(e)||mt(e)?r(e):e;const a=Ct(n)||mt(n)?r(n):n;let f;c.ignoreEverything?f=i:c.hardMergeEverything&&(f=a);const s=c.hardMergeEverything||c.ignoreEverything;if(!Ct(i)){if(mt(i)){if(Ft(i)){if(Ct(a)){if(Ft(a)){const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:u,key:t.key,type:t.type}):o}const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:u,key:t.key,type:t.type}):o}if(mt(a)){Object.keys(a).forEach((e=>{u=t.path&&t.path.length?`${t.path}.${e}`:`${e}`,i[e]=i.hasOwnProperty(e)?Kt(e,c.ignoreKeys)?Wt({path:u,key:e,type:[Dt(i),Dt(a)]},i[e],a[e],{...c,ignoreEverything:!0}):Kt(e,c.hardMergeKeys)?Wt({path:u,key:e,type:[Dt(i),Dt(a)]},i[e],a[e],{...c,hardMergeEverything:!0}):Kt(e,c.hardArrayConcatKeys)?Wt({path:u,key:e,type:[Dt(i),Dt(a)]},i[e],a[e],{...c,hardArrayConcat:!0}):Wt({path:u,key:e,type:[Dt(i[e]),Dt(a[e])]},i[e],a[e],c):a[e]}));const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):i}const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}if(Ct(a)||mt(a)||Ft(a)){const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}if(Et(i)){if(isFinite(i)){if(Et(a)){if(isFinite(a)){const o=s?f:i>a?i:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}const o=s?f:a||i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}if(Et(a)){const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}if(Pt(i)){if(Ft(i)){if((Ct(a)||mt(a)||Pt(a))&&Ft(a)){const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}if(null!=a&&!Bt(a)){const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}if("number"==typeof i){if(Ft(a)){const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}if(Bt(i)){if(Bt(a)){if(c.mergeBoolsUsingOrNotAnd){const o=s?f:i||a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}const o=s?f:i&&a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}if(null!=a){const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}if(null===i){if(null!=a){const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}{const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:t.path,key:t.key,type:t.type}):o}}if(!Ft(i)){if(Ft(a)){const o=s?f:a;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:u,key:t.key,type:t.type}):o}const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:u,key:t.key,type:t.type}):o}if(!Ct(a)||!Ft(a)){const o=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:u,key:t.key,type:t.type}):o}{if(c.mergeArraysContainingStringsToBeEmpty&&(Nt(i)||Nt(a))){const o=s?f:[];return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:u,key:t.key,type:t.type}):o}if(c.hardArrayConcat){const o=s?f:i.concat(a);return"function"==typeof c.cb?c.cb(r(e),r(n),o,{path:u,key:t.key,type:t.type}):o}let o=[];for(let e=0,n=Math.max(i.length,a.length);e<n;e++)u=t.path&&t.path.length?`${t.path}.${e}`:`${e}`,mt(i[e])&&mt(a[e])&&(c.mergeObjectsOnlyWhenKeysetMatches&&Rt(i[e],a[e])||!c.mergeObjectsOnlyWhenKeysetMatches)?o.push(Wt({path:u,key:t.key,type:[Dt(i),Dt(a)]},i[e],a[e],c)):!c.oneToManyArrayObjectMerge||1!==i.length&&1!==a.length?c.concatInsteadOfMerging?(e<i.length&&o.push(i[e]),e<a.length&&o.push(a[e])):(e<i.length&&o.push(i[e]),e<a.length&&!B(i,a[e])&&o.push(a[e])):o.push(1===i.length?Wt({path:u,key:t.key,type:[Dt(i),Dt(a)]},i[0],a[e],c):Wt({path:u,key:t.key,type:[Dt(i),Dt(a)]},i[e],a[0],c));c.dedupeStringsInArrayValues&&o.every((t=>Pt(t)))&&(o=dt(o).sort()),i=r(o)}const y=s?f:i;return"function"==typeof c.cb?c.cb(r(e),r(n),y,{path:t.path,key:t.key,type:t.type}):y}const Vt={dedupe:!0};t.defaults=Vt,t.generateAst=function(t,e){if(!Array.isArray(t))throw new Error(`array-of-arrays-into-ast: [THROW_ID_01] input must be array. Currently it's of a type ${typeof t} equal to:\n${JSON.stringify(t,null,4)}`);if(0===t.length)return{};const n={...Vt,...e};let r={};return t.forEach((t=>{let e=null;for(let n=t.length;n--;)e={[t[n]]:[e]};r=function(t,e,n){if(!arguments.length)throw new TypeError("object-merge-advanced/mergeAdvanced(): [THROW_ID_01] Both inputs are missing");return Wt({key:null,path:"",type:[Dt(t),Dt(e)]},t,e,n)}(r,e,{concatInsteadOfMerging:!n.dedupe})})),o=r,Object.keys(o).sort().reduce(((t,e)=>(t[e]=o[e],t)),{});var o},t.version="3.0.2",Object.defineProperty(t,"__esModule",{value:!0})}));
