/**
 * array-group-str-omit-num-char
 * Groups array of strings by omitting number characters
 * Version: 2.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-group-str-omit-num-char
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).arrayGroupStrOmitNumChar=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var n=r(function(t,r){var n,o,i,a,s,c,u,f,l,p,h,y,g,d,_,m,b,v,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:e,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=s&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),_=l&&"function"==typeof Array.prototype[Symbol.iterator],m=_&&Object.getPrototypeOf([][Symbol.iterator]()),b=l&&"function"==typeof String.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":s&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":s&&i===g?"Set Iterator":_&&i===m?"Array Iterator":b&&i===v?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})});function o(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,a,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function i(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function a(t){return t!=t}var s=Array.prototype.splice;function c(t,e,r,n){var a,c=n?i:o,u=-1,f=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(a=r,function(t){return a(t)})));++u<f;)for(var p=0,h=e[u],y=r?r(h):h;(p=c(l,y,p,n))>-1;)l!==t&&s.call(l,p,1),s.call(t,p,1);return t}var u=function(t,e){return t&&t.length&&e&&e.length?c(t,e):t},f=r(function(t,r){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",s="[object Boolean]",c="[object Date]",u="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",_="[object Symbol]",m="[object ArrayBuffer]",b="[object DataView]",v="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",T="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",W=/\w*$/,I=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,R={};R[a]=R["[object Array]"]=R[m]=R[b]=R[s]=R[c]=R[v]=R[w]=R[j]=R[O]=R[$]=R[l]=R[p]=R[h]=R[y]=R[g]=R[d]=R[_]=R[T]=R[S]=R[A]=R[E]=!0,R["[object Error]"]=R[u]=R["[object WeakMap]"]=!1;var k="object"==typeof e&&e&&e.Object===Object&&e,x="object"==typeof self&&self&&self.Object===Object&&self,P=k||x||Function("return this")(),M=r&&!r.nodeType&&r,C=M&&t&&!t.nodeType&&t,F=C&&C.exports===M;function D(t,e){return t.set(e[0],e[1]),t}function H(t,e){return t.add(e),t}function J(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function L(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function Z(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function K(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var q,B=Array.prototype,U=Function.prototype,G=Object.prototype,z=P["__core-js_shared__"],Q=(q=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",X=U.toString,Y=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=F?P.Buffer:void 0,nt=P.Symbol,ot=P.Uint8Array,it=K(Object.getPrototypeOf,Object),at=Object.create,st=G.propertyIsEnumerable,ct=B.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=K(Object.keys,Object),pt=Ct(P,"DataView"),ht=Ct(P,"Map"),yt=Ct(P,"Promise"),gt=Ct(P,"Set"),dt=Ct(P,"WeakMap"),_t=Ct(Object,"create"),mt=Lt(pt),bt=Lt(ht),vt=Lt(yt),wt=Lt(gt),jt=Lt(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new St(t)}function Wt(t,e){var r=Kt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Y.call(t,"callee")&&(!st.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Ht(i,n))||r.push(i);return r}function It(t,e,r){var n=t[e];Y.call(t,e)&&Zt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Nt(t,e){for(var r=t.length;r--;)if(Zt(t[r][0],e))return r;return-1}function Rt(t,e,r,n,o,i,I){var N;if(n&&(N=i?n(t,o,i,I):n(t)),void 0!==N)return N;if(!Ut(t))return t;var k=Kt(t);if(k){if(N=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,N)}else{var x=Dt(t),P=x==u||x==f;if(qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==h||x==a||P&&!i){if(L(t))return i?t:{};if(N=function(t){return"function"!=typeof t.constructor||Jt(t)?{}:(e=it(t),Ut(e)?at(e):{});var e}(P?{}:t),!e)return function(t,e){return Pt(t,Ft(t),e)}(t,function(t,e){return t&&Pt(e,Gt(e),t)}(N,t))}else{if(!R[x])return i?t:{};N=function(t,e,r,n){var o=t.constructor;switch(e){case m:return xt(t);case s:case c:return new o(+t);case b:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case v:case w:case j:case O:case $:case T:case S:case A:case E:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return J(e?r(Z(t),!0):Z(t),D,new t.constructor)}(t,n,r);case p:case d:return new o(t);case y:return(u=new(a=t).constructor(a.source,W.exec(a))).lastIndex=a.lastIndex,u;case g:return function(t,e,r){return J(e?r(V(t),!0):V(t),H,new t.constructor)}(t,n,r);case _:return i=t,$t?Object($t.call(i)):{}}var i;var a,u}(t,x,Rt,e)}}I||(I=new Et);var M=I.get(t);if(M)return M;if(I.set(t,N),!k)var C=r?function(t){return function(t,e,r){var n=e(t);return Kt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Ft)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(C||t,function(o,i){C&&(o=t[i=o]),It(N,i,Rt(o,e,r,n,i,t,I))}),N}function kt(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(Bt(t)||L(t)?et:I).test(Lt(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=n?n(r[a],t[a],a,r,t):void 0;It(r,a,void 0===s?t[a]:s)}return r}function Mt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return kt(r)?r:void 0}Tt.prototype.clear=function(){this.__data__=_t?_t(null):{}},Tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Tt.prototype.get=function(t){var e=this.__data__;if(_t){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},Tt.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:Y.call(e,t)},Tt.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?o:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Nt(e,t);return!(r<0||(r==e.length-1?e.pop():ct.call(e,r,1),0))},St.prototype.get=function(t){var e=this.__data__,r=Nt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Nt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new Tt,map:new(ht||St),string:new Tt}},At.prototype.delete=function(t){return Mt(this,t).delete(t)},At.prototype.get=function(t){return Mt(this,t).get(t)},At.prototype.has=function(t){return Mt(this,t).has(t)},At.prototype.set=function(t,e){return Mt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var o=r.__data__;if(!ht||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new At(o)}return r.set(t,e),this};var Ft=ut?K(ut,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Ht(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Lt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Zt(t,e){return t===e||t!=t&&e!=e}(pt&&Dt(new pt(new ArrayBuffer(1)))!=b||ht&&Dt(new ht)!=l||yt&&"[object Promise]"!=Dt(yt.resolve())||gt&&Dt(new gt)!=g||dt&&"[object WeakMap]"!=Dt(new dt))&&(Dt=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Lt(r):void 0;if(n)switch(n){case mt:return b;case bt:return l;case vt:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Kt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Bt(t)}var qt=ft||function(){return!1};function Bt(t){var e=Ut(t)?tt.call(t):"";return e==u||e==f}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Vt(t)?Wt(t):function(t){if(!Jt(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Rt(t,!0,!0)}}),l="[object Object]";var p,h,y=Function.prototype,g=Object.prototype,d=y.toString,_=g.hasOwnProperty,m=d.call(Object),b=g.toString,v=(p=Object.getPrototypeOf,h=Object,function(t){return p(h(t))});var w=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||b.call(t)!=l||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=v(t);if(null===e)return!0;var r=_.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&d.call(r)==m};const j=Array.isArray;function O(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function $(t,e){return function t(e,r,n){const o=f(e);let i,a,s,c,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,j(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=f(o),n.parentType="array",s=t(r(o[i],void 0,Object.assign({},n,{path:O(e)})),r,Object.assign({},n,{path:O(e)})),Number.isNaN(s)&&i<o.length?(o.splice(i,1),i-=1):o[i]=s):o.splice(i,1)}else if(w(o))for(i=0,a=(c=Object.keys(o)).length;i<a;i++){u=c[i];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=f(o),n.parentType="object",s=t(r(u,o[u],Object.assign({},n,{path:O(e)})),r,Object.assign({},n,{path:O(e)})),Number.isNaN(s)?delete o[u]:o[u]=s}return o}(t,e,{})}var T="__lodash_hash_undefined__",S=9007199254740991,A="[object Function]",E="[object GeneratorFunction]",W=/^\[object .+?Constructor\]$/,I="object"==typeof e&&e&&e.Object===Object&&e,N="object"==typeof self&&self&&self.Object===Object&&self,R=I||N||Function("return this")();function k(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,M,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function x(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function P(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function M(t){return t!=t}function C(t){return function(e){return t(e)}}function F(t,e){return t.has(e)}var D,H=Array.prototype,J=Function.prototype,L=Object.prototype,Z=R["__core-js_shared__"],K=(D=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+D:"",V=J.toString,q=L.hasOwnProperty,B=L.toString,U=RegExp("^"+V.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=H.splice,z=Math.max,Q=Math.min,X=ct(R,"Map"),Y=ct(Object,"create");function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.__data__=new rt;++e<r;)this.add(t[e])}function ot(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function it(t){return!(!ft(t)||(e=t,K&&K in e))&&(ut(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?U:W).test(function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function at(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}(t.length)&&!ut(t)}(t)}(t)?t:[]}function st(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return it(r)?r:void 0}function ut(t){var e=ft(t)?B.call(t):"";return e==A||e==E}function ft(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}tt.prototype.clear=function(){this.__data__=Y?Y(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var e=this.__data__;if(Y){var r=e[t];return r===T?void 0:r}return q.call(e,t)?e[t]:void 0},tt.prototype.has=function(t){var e=this.__data__;return Y?void 0!==e[t]:q.call(e,t)},tt.prototype.set=function(t,e){return this.__data__[t]=Y&&void 0===e?T:e,this},et.prototype.clear=function(){this.__data__=[]},et.prototype.delete=function(t){var e=this.__data__,r=ot(e,t);return!(r<0||(r==e.length-1?e.pop():G.call(e,r,1),0))},et.prototype.get=function(t){var e=this.__data__,r=ot(e,t);return r<0?void 0:e[r][1]},et.prototype.has=function(t){return ot(this.__data__,t)>-1},et.prototype.set=function(t,e){var r=this.__data__,n=ot(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},rt.prototype.clear=function(){this.__data__={hash:new tt,map:new(X||et),string:new tt}},rt.prototype.delete=function(t){return st(this,t).delete(t)},rt.prototype.get=function(t){return st(this,t).get(t)},rt.prototype.has=function(t){return st(this,t).has(t)},rt.prototype.set=function(t,e){return st(this,t).set(t,e),this},nt.prototype.add=nt.prototype.push=function(t){return this.__data__.set(t,T),this},nt.prototype.has=function(t){return this.__data__.has(t)};var lt=function(t,e){return e=z(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=z(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=P(t,at);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?x:k,o=t[0].length,i=t.length,a=i,s=Array(i),c=1/0,u=[];a--;){var f=t[a];a&&e&&(f=P(f,C(e))),c=Q(f.length,c),s[a]=!r&&(e||o>=120&&f.length>=120)?new nt(a&&f):void 0}f=t[0];var l=-1,p=s[0];t:for(;++l<o&&u.length<c;){var h=f[l],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?F(p,y):n(u,y,r))){for(a=i;--a;){var g=s[a];if(!(g?F(g,y):n(t[a],y,r)))continue t}p&&p.push(y),u.push(h)}}return u}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var ht=r(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function s(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function c(t,e){if(s(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(i),r,n);var o=e[0],a=c(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var s=i(n[a]);if(!("number"==typeof s&&o(r)&&s<r.length||(t.includeInheritedProps?s in Object(r):e(r,s))))return!1;r=r[s]}return!0},a.ensureExists=function(t,e,r){return u(t,e,r,!0)},a.set=function(t,e,r,n){return u(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,c;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(c in i)s(i,c)&&delete i[c]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=c(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return s(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var s=a();return s.create=a,s.withInheritedProps=a({includeInheritedProps:!0}),s}()}),yt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function gt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+yt(t)}gt.indicator=yt;var dt=gt,_t=/[|\\{}()[\]^$+*?.]/g,mt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(_t,"\\$&")};const bt=new Map;function vt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(bt.has(n))return bt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=mt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,bt.set(n,i),i}var wt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>vt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function jt(t,e,r){return function t(e,r,o,i=!0){const a=Object.prototype.hasOwnProperty;function s(t){return null!=t}function c(t){return"Object"===n(t)}function f(t,e){return e=pt(e),Array.from(t).filter(t=>!e.some(e=>wt.isMatch(t,e,{caseSensitive:!0})))}const l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!s(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=s(o)&&c(o)?Object.assign({},h,o):Object.assign({},h),s(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=pt(y.ignoreKeys):y.ignoreKeys=[],s(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=pt(y.ignorePaths):y.ignorePaths=[],s(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=pt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(c(y.schema[t])){const e={};$(y.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return p(i)||c(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),s(r)||(r={}),i&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(s(y.schema)&&Object.keys(y.schema).length>0){if(0!==f(u(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=u(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(s(r)&&Object.keys(r).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==f(u(Object.keys(e),Object.keys(r)),y.ignoreKeys).length){const t=u(Object.keys(e),Object.keys(r));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==f(u(Object.keys(r),Object.keys(e)),y.ignoreKeys).length){const t=u(Object.keys(r),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];$(e,(t,o,i)=>{let s=o,u=t;if("array"===i.parentType&&(u=void 0,s=t),p(g)&&g.length&&g.some(t=>i.path.startsWith(t)))return s;if(u&&y.ignoreKeys.some(t=>wt.isMatch(u,t)))return s;if(y.ignorePaths.some(t=>wt.isMatch(i.path,t)))return s;const f=!(!c(s)&&!p(s)&&p(i.parent));let h=!1;c(y.schema)&&a.call(y.schema,ht.get(i.path))&&(h=!0);let d=!1;if(c(r)&&ht.has(r,ht.get(i.path))&&(d=!0),y.enforceStrictKeyset&&f&&!h&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(i,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(s,null,4)}\n\n`);if(h){const t=pt(y.schema[i.path]).map(String).map(t=>t.toLowerCase());if(ht.set(y.schema,i.path,t),lt(t,l).length)g.push(i.path);else if(!0!==s&&!1!==s&&!t.includes(n(s).toLowerCase())||(!0===s||!1===s)&&!t.includes(String(s))&&!t.includes("boolean")){if(!p(s)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"!==n(s)?'"':""}${JSON.stringify(s,null,0)}${"string"!==n(s)?'"':""} (type: ${n(s).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=s.length;e<r;e++)if(!t.includes(n(s[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path}.${e}, the ${dt(e+1)} element (equal to ${JSON.stringify(s[e],null,0)}) is of a type ${n(s[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=ht.get(r,i.path);if(y.acceptArrays&&p(s)&&!y.acceptArraysIgnore.includes(t)){if(!s.every(e=>n(e).toLowerCase()===n(r[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to be array, but not all of its elements are ${n(r[t]).toLowerCase()}-type`)}else if(n(s)!==n(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"===n(s).toLowerCase()?"":'"'}${JSON.stringify(s,null,0)}${"string"===n(s).toLowerCase()?"":'"'} which is not ${n(e).toLowerCase()} but ${n(s).toLowerCase()}`)}return s})}(t,e,r)}wt.isMatch=((t,e,r)=>{const n=vt(e,r),o=n.test(t);return n.negated?!o:o});var Ot=200,$t="__lodash_hash_undefined__",Tt="[object Function]",St="[object GeneratorFunction]",At=/^\[object .+?Constructor\]$/,Et="object"==typeof e&&e&&e.Object===Object&&e,Wt="object"==typeof self&&self&&self.Object===Object&&self,It=Et||Wt||Function("return this")();function Nt(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,kt,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function Rt(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function kt(t){return t!=t}function xt(t,e){return t.has(e)}function Pt(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var Mt=Array.prototype,Ct=Function.prototype,Ft=Object.prototype,Dt=It["__core-js_shared__"],Ht=function(){var t=/[^.]+$/.exec(Dt&&Dt.keys&&Dt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Jt=Ct.toString,Lt=Ft.hasOwnProperty,Zt=Ft.toString,Kt=RegExp("^"+Jt.call(Lt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Vt=Mt.splice,qt=ne(It,"Map"),Bt=ne(It,"Set"),Ut=ne(Object,"create");function Gt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function zt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Qt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Xt(t){var e=-1,r=t?t.length:0;for(this.__data__=new Qt;++e<r;)this.add(t[e])}function Yt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function te(t){return!(!oe(t)||(e=t,Ht&&Ht in e))&&(function(t){var e=oe(t)?Zt.call(t):"";return e==Tt||e==St}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Kt:At).test(function(t){if(null!=t){try{return Jt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}Gt.prototype.clear=function(){this.__data__=Ut?Ut(null):{}},Gt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Gt.prototype.get=function(t){var e=this.__data__;if(Ut){var r=e[t];return r===$t?void 0:r}return Lt.call(e,t)?e[t]:void 0},Gt.prototype.has=function(t){var e=this.__data__;return Ut?void 0!==e[t]:Lt.call(e,t)},Gt.prototype.set=function(t,e){return this.__data__[t]=Ut&&void 0===e?$t:e,this},zt.prototype.clear=function(){this.__data__=[]},zt.prototype.delete=function(t){var e=this.__data__,r=Yt(e,t);return!(r<0||(r==e.length-1?e.pop():Vt.call(e,r,1),0))},zt.prototype.get=function(t){var e=this.__data__,r=Yt(e,t);return r<0?void 0:e[r][1]},zt.prototype.has=function(t){return Yt(this.__data__,t)>-1},zt.prototype.set=function(t,e){var r=this.__data__,n=Yt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Qt.prototype.clear=function(){this.__data__={hash:new Gt,map:new(qt||zt),string:new Gt}},Qt.prototype.delete=function(t){return re(this,t).delete(t)},Qt.prototype.get=function(t){return re(this,t).get(t)},Qt.prototype.has=function(t){return re(this,t).has(t)},Qt.prototype.set=function(t,e){return re(this,t).set(t,e),this},Xt.prototype.add=Xt.prototype.push=function(t){return this.__data__.set(t,$t),this},Xt.prototype.has=function(t){return this.__data__.has(t)};var ee=Bt&&1/Pt(new Bt([,-0]))[1]==1/0?function(t){return new Bt(t)}:function(){};function re(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ne(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return te(r)?r:void 0}function oe(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var ie=function(t){return t&&t.length?function(t,e,r){var n=-1,o=Nt,i=t.length,a=!0,s=[],c=s;if(r)a=!1,o=Rt;else if(i>=Ot){var u=e?null:ee(t);if(u)return Pt(u);a=!1,o=xt,c=new Xt}else c=e?[]:s;t:for(;++n<i;){var f=t[n],l=e?e(f):f;if(f=r||0!==f?f:0,a&&l==l){for(var p=c.length;p--;)if(c[p]===l)continue t;e&&c.push(l),s.push(f)}else o(c,l,r)||(c!==s&&c.push(l),s.push(f))}return s}(t):[]},ae=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},se=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},ce=r(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}});ce.suffix;const ue=Array.isArray;function fe(t,e){if(!ue(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null},n=Object.assign({},r,e);let o,i;if(jt(n,r,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),n.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(o=e,i=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${ce(o)} range (${JSON.stringify(t[o],null,4)}) has not two but ${i} elements!`);if(!t.every((t,e)=>!(!ae(t[0],{includeZero:!0})||!ae(t[1],{includeZero:!0}))||(o=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${ce(o)} range (${JSON.stringify(t[o],null,4)}) does not consist of only natural numbers!`);const a=t.length*t.length;let s=0;return Array.from(t).sort((t,e)=>(n.progressFn&&(s++,n.progressFn(Math.floor(100*s/a))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}const le=Array.isArray;function pe(t,e,r){let n=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===e)return t;if(!le(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);le(e)&&(ae(e[0],{includeZero:!0})||se(e[0],{includeZero:!0}))&&(ae(e[1],{includeZero:!0})||se(e[1],{includeZero:!0}))&&(e=[e]);const i=e.length;let a=0;e.forEach((t,s)=>{if(r&&(n=Math.floor(a/i*10))!==o&&(o=n,r(n)),!le(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${ce(s)} element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!ae(t[0],{includeZero:!0})){if(!se(t[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${ce(s)} element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);e[s][0]=Number.parseInt(e[s][0],10)}if(!ae(t[1],{includeZero:!0})){if(!se(t[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${ce(s)} element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);e[s][1]=Number.parseInt(e[s][1],10)}a++});const s=function(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(e){if(!w(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if((o=Object.assign({},n,e)).progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] the second input argument must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.progressFn,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=f(n);const i=f(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let a,s,c;const u=(a=o.progressFn?fe(i,{progressFn:t=>{(c=Math.floor(t/5))!==s&&(s=c,o.progressFn(c))}}):fe(i)).length-1;for(let t=u;t>0;t--)o.progressFn&&(c=Math.floor(78*(1-t/u))+21)!==s&&c>s&&(s=c,o.progressFn(c)),(a[t][0]<=a[t-1][0]||!o.joinRangesThatTouchEdges&&a[t][0]<a[t-1][1]||o.joinRangesThatTouchEdges&&a[t][0]<=a[t-1][1])&&(a[t-1][0]=Math.min(a[t][0],a[t-1][0]),a[t-1][1]=Math.max(a[t][1],a[t-1][1]),void 0!==a[t][2]&&(a[t-1][0]>=a[t][0]||a[t-1][1]<=a[t][1])&&null!==a[t-1][2]&&(null===a[t][2]&&null!==a[t-1][2]?a[t-1][2]=null:void 0!==a[t-1][2]?2===o.mergeType&&a[t-1][0]===a[t][0]?a[t-1][2]=a[t][2]:a[t-1][2]+=a[t][2]:a[t-1][2]=a[t][2]),a.splice(t,1),t=a.length);return a}(e,{progressFn:t=>{r&&(n=10+Math.floor(t/10))!==o&&(o=n,r(n))}}),c=s.length;if(c>0){const e=t.slice(s[c-1][1]);t=s.reduce((e,i,a,s)=>{r&&(n=20+Math.floor(a/c*80))!==o&&(o=n,r(n));const u=0===a?0:s[a-1][1],f=s[a][0];return e+t.slice(u,f)+(function(t){return null!=t}(s[a][2])?s[a][2]:"")},""),t+=e}return t}var he=Array.isArray;return function(e,r){if(!he(e))throw new Error("array-group-str-omit-num-char: [THROW_ID_01] the first input argument must be an array!");var n,o,i={wildcard:"*",dedupePlease:!0};if(null!=r){if(!w(r))throw new Error("array-group-str-omit-num-char: [THROW_ID_02] the second input argument, options object must be a plain object! It was given as ".concat(t(r),", equal to:\n").concat(JSON.stringify(r,null,4)));jt(n=Object.assign({},i,r),i,{msg:"array-group-str-omit-num-char: [THROW_ID_03*]"})}else n=Object.assign({},i);for(var a=(o=n.dedupePlease?ie(e):Array.from(e)).length,s={},c=0;c<a;c++){var u=o[c].match(/\d+/gm);u?function(){var t=o[c].replace(/\d+/gm,n.wildcard);s.hasOwnProperty(t)?(u.forEach(function(e,r){s[t].elementsWhichWeCanReplaceWithWildcards[r]&&e!==s[t].elementsWhichWeCanReplaceWithWildcards[r]&&(s[t].elementsWhichWeCanReplaceWithWildcards[r]=!1)}),s[t].count++):s[t]={count:1,elementsWhichWeCanReplaceWithWildcards:Array.from(u)}}():s[o[c]]={count:1}}var f={};return Object.keys(s).forEach(function(t){var e=t;if(he(s[t].elementsWhichWeCanReplaceWithWildcards)&&s[t].elementsWhichWeCanReplaceWithWildcards.some(function(t){return!1!==t})){for(var r=[],o=0,i=0;i<s[t].elementsWhichWeCanReplaceWithWildcards.length;i++)o=e.indexOf(n.wildcard,o+n.wildcard.length),!1!==s[t].elementsWhichWeCanReplaceWithWildcards[i]&&r.push([o,o+n.wildcard.length,s[t].elementsWhichWeCanReplaceWithWildcards[i]]);e=pe(e,r)}f[e]=s[t].count}),f}});
