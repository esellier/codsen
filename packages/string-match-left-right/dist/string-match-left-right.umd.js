/**
 * string-match-left-right
 * Do substrings match what's on the left or right of a given index?
 * Version: 3.7.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/string-match-left-right
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringMatchLeftRight={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,e){return t(e={exports:{}},e.exports),e.exports}var i=o(function(t,e){var r,o,i,a,c,u,s,f,l,h,p,y,g,d,b,m,v,_,w,j;t.exports=(r="function"==typeof Promise,o="object"==typeof self?self:n,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,h=i&&void 0!==Symbol.toStringTag,p=c&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=p&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],m=b&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===h||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var n=h&&t[Symbol.toStringTag];if("string"==typeof n)return n;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":s&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":b&&i===m?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})});function a(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,u,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function c(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function u(t){return t!=t}var s=Array.prototype.splice;function f(t,e,r,n){var o,i=n?c:a,u=-1,f=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++u<f;)for(var h=0,p=e[u],y=r?r(p):p;(h=i(l,y,h,n))>-1;)l!==t&&s.call(l,h,1),s.call(t,h,1);return t}var l=function(t,e){return t&&t.length&&e&&e.length?f(t,e):t},h=o(function(t,e){var r=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",h="[object Number]",p="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",m="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",$="[object Uint8Array]",A="[object Uint8ClampedArray]",E="[object Uint16Array]",M="[object Uint32Array]",T=/\w*$/,C=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,k={};k[a]=k["[object Array]"]=k[m]=k[v]=k[c]=k[u]=k[_]=k[w]=k[j]=k[O]=k[S]=k[l]=k[h]=k[p]=k[y]=k[g]=k[d]=k[b]=k[$]=k[A]=k[E]=k[M]=!0,k["[object Error]"]=k[s]=k["[object WeakMap]"]=!1;var I="object"==typeof n&&n&&n.Object===Object&&n,x="object"==typeof self&&self&&self.Object===Object&&self,N=I||x||Function("return this")(),P=e&&!e.nodeType&&e,B=P&&t&&!t.nodeType&&t,R=B&&B.exports===P;function W(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function H(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function F(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function V(t,e){return function(r){return t(e(r))}}function J(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var q,U=Array.prototype,Z=Function.prototype,G=Object.prototype,z=N["__core-js_shared__"],Q=(q=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",X=Z.toString,Y=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=R?N.Buffer:void 0,nt=N.Symbol,ot=N.Uint8Array,it=V(Object.getPrototypeOf,Object),at=Object.create,ct=G.propertyIsEnumerable,ut=U.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),ht=Bt(N,"DataView"),pt=Bt(N,"Map"),yt=Bt(N,"Promise"),gt=Bt(N,"Set"),dt=Bt(N,"WeakMap"),bt=Bt(Object,"create"),mt=Kt(ht),vt=Kt(pt),_t=Kt(yt),wt=Kt(gt),jt=Kt(dt),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(t){this.__data__=new At(t)}function Tt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Jt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Dt(i,n))||r.push(i);return r}function Ct(t,e,r){var n=t[e];Y.call(t,e)&&Ft(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Lt(t,e){for(var r=t.length;r--;)if(Ft(t[r][0],e))return r;return-1}function kt(t,e,r,n,o,i,C){var L;if(n&&(L=i?n(t,o,i,C):n(t)),void 0!==L)return L;if(!Zt(t))return t;var I=Vt(t);if(I){if(L=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,L)}else{var x=Wt(t),N=x==s||x==f;if(qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==p||x==a||N&&!i){if(K(t))return i?t:{};if(L=function(t){return"function"!=typeof t.constructor||Ht(t)?{}:(e=it(t),Zt(e)?at(e):{});var e}(N?{}:t),!e)return function(t,e){return Nt(t,Rt(t),e)}(t,function(t,e){return t&&Nt(e,Gt(e),t)}(L,t))}else{if(!k[x])return i?t:{};L=function(t,e,r,n){var o=t.constructor;switch(e){case m:return xt(t);case c:case u:return new o(+t);case v:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case S:case $:case A:case E:case M:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return H(e?r(F(t),!0):F(t),W,new t.constructor)}(t,n,r);case h:case d:return new o(t);case y:return(s=new(a=t).constructor(a.source,T.exec(a))).lastIndex=a.lastIndex,s;case g:return function(t,e,r){return H(e?r(J(t),!0):J(t),D,new t.constructor)}(t,n,r);case b:return i=t,St?Object(St.call(i)):{}}var i;var a,s}(t,x,kt,e)}}C||(C=new Mt);var P=C.get(t);if(P)return P;if(C.set(t,L),!I)var B=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Rt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(B||t,function(o,i){B&&(o=t[i=o]),Ct(L,i,kt(o,e,r,n,i,t,C))}),L}function It(t){return!(!Zt(t)||(e=t,Q&&Q in e))&&(Ut(t)||K(t)?et:C).test(Kt(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Nt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Ct(r,a,void 0===c?t[a]:c)}return r}function Pt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Bt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}$t.prototype.clear=function(){this.__data__=bt?bt(null):{}},$t.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$t.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},$t.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Y.call(e,t)},$t.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Lt(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},At.prototype.get=function(t){var e=this.__data__,r=Lt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Lt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Lt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new $t,map:new(pt||At),string:new $t}},Et.prototype.delete=function(t){return Pt(this,t).delete(t)},Et.prototype.get=function(t){return Pt(this,t).get(t)},Et.prototype.has=function(t){return Pt(this,t).has(t)},Et.prototype.set=function(t,e){return Pt(this,t).set(t,e),this},Mt.prototype.clear=function(){this.__data__=new At},Mt.prototype.delete=function(t){return this.__data__.delete(t)},Mt.prototype.get=function(t){return this.__data__.get(t)},Mt.prototype.has=function(t){return this.__data__.has(t)},Mt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof At){var o=n.__data__;if(!pt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Et(o)}return n.set(t,e),this};var Rt=st?V(st,Object):function(){return[]},Wt=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||L.test(t))&&t>-1&&t%1==0&&t<e}function Ht(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Kt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ft(t,e){return t===e||t!=t&&e!=e}(ht&&Wt(new ht(new ArrayBuffer(1)))!=v||pt&&Wt(new pt)!=l||yt&&"[object Promise]"!=Wt(yt.resolve())||gt&&Wt(new gt)!=g||dt&&"[object WeakMap]"!=Wt(new dt))&&(Wt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Kt(r):void 0;if(n)switch(n){case mt:return v;case vt:return l;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Vt=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Ut(t)}var qt=ft||function(){return!1};function Ut(t){var e=Zt(t)?tt.call(t):"";return e==s||e==f}function Zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Jt(t)?Tt(t):function(t){if(!Ht(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return kt(t,!0,!0)}}),p="[object Object]";var y,g,d=Function.prototype,b=Object.prototype,m=d.toString,v=b.hasOwnProperty,_=m.call(Object),w=b.toString,j=(y=Object.getPrototypeOf,g=Object,function(t){return y(g(t))});var O=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||w.call(t)!=p||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=j(t);if(null===e)return!0;var r=v.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&m.call(r)==_};const S=Array.isArray;function $(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function A(t,e){return function t(e,r,n){const o=h(e);let i,a,c,u,s;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,S(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=h(o),c=t(r(o[i],void 0,Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(O(o))for(i=0,a=(u=Object.keys(o)).length;i<a;i++){s=u[i];const e=`${n.path}.${s}`;0===n.depth&&null!=s&&(n.topmostKey=s),n.parent=h(o),c=t(r(s,o[s],Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(c)?delete o[s]:o[s]=c}return o}(t,e,{})}var E="__lodash_hash_undefined__",M=9007199254740991,T="[object Function]",C="[object GeneratorFunction]",L=/^\[object .+?Constructor\]$/,k="object"==typeof n&&n&&n.Object===Object&&n,I="object"==typeof self&&self&&self.Object===Object&&self,x=k||I||Function("return this")();function N(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,R,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function P(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function B(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function R(t){return t!=t}function W(t){return function(e){return t(e)}}function D(t,e){return t.has(e)}var H,K=Array.prototype,F=Function.prototype,V=Object.prototype,J=x["__core-js_shared__"],q=(H=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",U=F.toString,Z=V.hasOwnProperty,G=V.toString,z=RegExp("^"+U.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=K.splice,X=Math.max,Y=Math.min,tt=ft(x,"Map"),et=ft(Object,"create");function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.__data__=new ot;++e<r;)this.add(t[e])}function at(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ct(t){return!(!ht(t)||(e=t,q&&q in e))&&(lt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?z:L).test(function(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ut(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=M}(t.length)&&!lt(t)}(t)}(t)?t:[]}function st(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ct(r)?r:void 0}function lt(t){var e=ht(t)?G.call(t):"";return e==T||e==C}function ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}rt.prototype.clear=function(){this.__data__=et?et(null):{}},rt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},rt.prototype.get=function(t){var e=this.__data__;if(et){var r=e[t];return r===E?void 0:r}return Z.call(e,t)?e[t]:void 0},rt.prototype.has=function(t){var e=this.__data__;return et?void 0!==e[t]:Z.call(e,t)},rt.prototype.set=function(t,e){return this.__data__[t]=et&&void 0===e?E:e,this},nt.prototype.clear=function(){this.__data__=[]},nt.prototype.delete=function(t){var e=this.__data__,r=at(e,t);return!(r<0||(r==e.length-1?e.pop():Q.call(e,r,1),0))},nt.prototype.get=function(t){var e=this.__data__,r=at(e,t);return r<0?void 0:e[r][1]},nt.prototype.has=function(t){return at(this.__data__,t)>-1},nt.prototype.set=function(t,e){var r=this.__data__,n=at(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ot.prototype.clear=function(){this.__data__={hash:new rt,map:new(tt||nt),string:new rt}},ot.prototype.delete=function(t){return st(this,t).delete(t)},ot.prototype.get=function(t){return st(this,t).get(t)},ot.prototype.has=function(t){return st(this,t).has(t)},ot.prototype.set=function(t,e){return st(this,t).set(t,e),this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,E),this},it.prototype.has=function(t){return this.__data__.has(t)};var pt=function(t,e){return e=X(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=X(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=B(t,ut);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?P:N,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=B(f,W(e))),u=Y(f.length,u),c[a]=!r&&(e||o>=120&&f.length>=120)?new it(a&&f):void 0}f=t[0];var l=-1,h=c[0];t:for(;++l<o&&s.length<u;){var p=f[l],y=e?e(p):p;if(p=r||0!==p?p:0,!(h?D(h,y):n(s,y,r))){for(a=i;--a;){var g=c[a];if(!(g?D(g,y):n(t[a],y,r)))continue t}h&&h.push(y),s.push(p)}}return s}(e):[]});function yt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var gt=o(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(c(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(i),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return s(t,e,r,!0)},a.set=function(t,e,r,n){return s(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,u;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(u in i)c(i,u)&&delete i[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),dt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function bt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+dt(t)}bt.indicator=dt;var mt=bt,vt=/[|\\{}()[\]^$+*?.]/g,_t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(vt,"\\$&")};const wt=new Map;function jt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(wt.has(n))return wt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=_t(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,wt.set(n,i),i}var Ot=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>jt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function St(t,e,r){return function t(e,r,n,o=!0){const a=Object.prototype.hasOwnProperty;function c(t){return null!=t}function u(t){return"Object"===i(t)}function s(t,e){return e=yt(e),Array.from(t).filter(t=>!e.some(e=>Ot.isMatch(t,e,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],h=Array.isArray;if(!c(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const p={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=c(n)&&u(n)?Object.assign({},p,n):Object.assign({},p),c(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=yt(y.ignoreKeys):y.ignoreKeys=[],c(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=yt(y.ignorePaths):y.ignorePaths=[],c(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=yt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(u(y.schema[t])){const e={};A(y.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return h(i)||u(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{h(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),c(r)||(r={}),o&&t(y,p,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(c(y.schema)&&Object.keys(y.schema).length>0){if(0!==s(l(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(c(r)&&Object.keys(r).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==s(l(Object.keys(e),Object.keys(r)),y.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(r));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==s(l(Object.keys(r),Object.keys(e)),y.ignoreKeys).length){const t=l(Object.keys(r),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];A(e,(t,n,o)=>{const c=void 0!==n?n:t,s=void 0!==n?t:void 0;if(h(g)&&g.length&&g.some(t=>o.path.startsWith(t)))return c;if(s&&y.ignoreKeys.some(t=>Ot.isMatch(s,t)))return c;if(y.ignorePaths.some(t=>Ot.isMatch(o.path,t)))return c;const l=!(!u(c)&&!h(c)&&h(o.parent));let p=!1;u(y.schema)&&a.call(y.schema,gt.get(o.path))&&(p=!0);let d=!1;if(u(r)&&gt.has(r,gt.get(o.path))&&(d=!0),y.enforceStrictKeyset&&l&&!p&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(c,null,4)}\n\n`);if(p){const t=yt(y.schema[o.path]).map(String).map(t=>t.toLowerCase());if(gt.set(y.schema,o.path,t),pt(t,f).length)g.push(o.path);else if(!0!==c&&!1!==c&&!t.includes(i(c).toLowerCase())||(!0===c||!1===c)&&!t.includes(String(c))&&!t.includes("boolean")){if(!h(c)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"!==i(c)?'"':""}${JSON.stringify(c,null,0)}${"string"!==i(c)?'"':""} (type: ${i(c).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=c.length;e<r;e++)if(!t.includes(i(c[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path}.${e}, the ${mt(e+1)} element (equal to ${JSON.stringify(c[e],null,0)}) is of a type ${i(c[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=gt.get(r,o.path);if(y.acceptArrays&&h(c)&&!y.acceptArraysIgnore.includes(t)){if(!c.every(e=>i(e).toLowerCase()===i(r[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${i(r[t]).toLowerCase()}-type`)}else if(i(c)!==i(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"===i(c).toLowerCase()?"":'"'}${JSON.stringify(c,null,0)}${"string"===i(c).toLowerCase()?"":'"'} which is not ${i(e).toLowerCase()} but ${i(c).toLowerCase()}`)}return c})}(t,e,r)}Ot.isMatch=((t,e,r)=>{const n=jt(e,r),o=n.test(t);return n.negated?!o:o});var $t="[object AsyncFunction]",At="[object Function]",Et="[object GeneratorFunction]",Mt="[object Null]",Tt="[object Proxy]",Ct="[object Undefined]",Lt="object"==typeof n&&n&&n.Object===Object&&n,kt="object"==typeof self&&self&&self.Object===Object&&self,It=Lt||kt||Function("return this")(),xt=Object.prototype,Nt=xt.hasOwnProperty,Pt=xt.toString,Bt=It.Symbol,Rt=Bt?Bt.toStringTag:void 0;function Wt(t){return null==t?void 0===t?Ct:Mt:Rt&&Rt in Object(t)?function(t){var e=Nt.call(t,Rt),r=t[Rt];try{t[Rt]=void 0;var n=!0}catch(t){}var o=Pt.call(t);n&&(e?t[Rt]=r:delete t[Rt]);return o}(t):function(t){return Pt.call(t)}(t)}var Dt=function(t){if(!function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}(t))return!1;var e=Wt(t);return e==At||e==Et||e==$t||e==Tt};function Ht(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function Kt(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}var Ft=Array.isArray;function Vt(t){return null!=t}function Jt(t){return"string"==typeof t}function qt(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function Ut(t,e,r,n,o){var i="function"==typeof r?r():r;if(e>=t.length&&o&&"EOL"===i)return i;if(!(e<=t.length)){if(n.relaxedApi)return!1;throw new Error("string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ".concat(e," beyond the input string length, ").concat(t.length,"."))}for(var a=o?1:r.length,c=e,u=t.length;c<u;c++){var s=t[c];if(Ht(t[c])&&Kt(t[c+1])&&(s=t[c]+t[c+1]),Kt(t[c])&&Ht(t[c-1])&&(s=t[c-1]+t[c]),!n.trimBeforeMatching||""!==t[c].trim())if(!n.i&&n.trimCharsBeforeMatching.includes(s)||n.i&&n.trimCharsBeforeMatching.map(function(t){return t.toLowerCase()}).includes(s.toLowerCase()))2===s.length&&(c+=1);else{var f=r[r.length-a];if(Ht(f)&&Vt(r[r.length-a+1])&&Kt(r[r.length-a+1])&&(f=r[r.length-a]+r[r.length-a+1]),!(!n.i&&s===f||n.i&&s.toLowerCase()===f.toLowerCase()))return!1;if((a-=s.length)<1){var l=c-r.length+s.length;return l>=0&&Kt(t[l])&&Vt(t[l-1])&&Ht(t[l-1])&&(l-=1),l>=0?l:0}2===s.length&&Ht(t[c])&&(c+=1)}}return a>0?!(!o||"EOL"!==i):void 0}function Zt(t,e,r,n,o){var i="function"==typeof r?r():r;if(e<0&&o&&"EOL"===i)return i;if(e>=t.length){if(n.relaxedApi)return!1;throw new Error("string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ".concat(t.length," but the second argument is beyond it:\n").concat(JSON.stringify(e,null,4)))}for(var a=o?1:r.length,c=e+1;c--;)if(n.trimBeforeMatching&&""===t[c].trim()){if(0===c&&o&&"EOL"===r)return!0}else{var u=t[c];if(Kt(t[c])&&Ht(t[c-1])?u=t[c-1]+t[c]:Ht(t[c])&&Kt(t[c+1])&&(u=t[c]+t[c+1]),!n.i&&n.trimCharsBeforeMatching.includes(u)||n.i&&n.trimCharsBeforeMatching.map(function(t){return t.toLowerCase()}).includes(u.toLowerCase())){if(2===u.length&&(c-=1),o&&"EOL"===r&&0===c)return!0}else{var s=r[a-1];if(Kt(s)&&(s="".concat(r[a-2]).concat(r[a-1]),a-=1,c-=1),!(!n.i&&u===s||n.i&&u.toLowerCase()===s.toLowerCase()))return!1;if((a-=1)<1)return c>=0?c:0}}return a>0?!(!o||"EOL"!==i):void 0}function Gt(t,n,o,i,a){var c,u,s,f,l={i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},h=Object.assign({},l,a);if(h.trimCharsBeforeMatching=yt(h.trimCharsBeforeMatching),St(h,l,{msg:"string-match-left-right: [THROW_ID_07*]",schema:{cb:["null","undefined","function"]}}),h.trimCharsBeforeMatching=h.trimCharsBeforeMatching.map(function(t){return Jt(t)?t:String(t)}),h.trimCharsBeforeMatching.some(function(t,e){return t.length>1&&!qt(t)&&(c=e,u=t,!0)}))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(c," is longer than 1 character, ").concat(u.length," (equals to ").concat(u,"). Please split it into separate characters and put into array as separate elements."));if(!Jt(n)){if(h.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ").concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)))}if(0===n.length){if(h.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!"))}if(!r(o,{includeZero:!0})){if(h.relaxedApi)return!1;throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(e(o),", equal to:\n").concat(JSON.stringify(o,null,4)))}if(Jt(i))s=[i];else if(Ft(i))s=i;else if(Vt(i)){if(!Dt(i))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(e(i),", equal to:\n").concat(JSON.stringify(i,null,4)));(s=[]).push(i)}else s=i;if(Vt(a)&&!O(a))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(e(a),'", and equal to:\n').concat(JSON.stringify(a,null,4)));if(!Vt(s)||!Ft(s)||Ft(s)&&!s.length||Ft(s)&&1===s.length&&Jt(s[0])&&0===s[0].trim().length){if(h.cb){var p,y=o;if("matchRight"===t&&Ht(n[o])&&Kt(n[o+1])&&(y+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(y+=1),t.startsWith("matchLeft")){for(var g=y;g--;)if(!Kt(n[g])||!Ht(n[g-1])){var d=n[g];if(Ht(n[g])&&Kt(n[g+1])&&(d=n[g]+n[g+1]),(!h.trimBeforeMatching||h.trimBeforeMatching&&void 0!==d&&""!==d.trim())&&(0===h.trimCharsBeforeMatching.length||void 0!==d&&!h.trimCharsBeforeMatching.includes(d))){p=g;break}Kt(n[g-1])&&Ht(n[g-2])&&(g-=1)}}else if(t.startsWith("matchRight"))for(var b=y;b<n.length;b++){var m=n[b];if(Ht(n[b])&&Kt(n[b+1])&&(m=n[b]+n[b+1]),(!h.trimBeforeMatching||h.trimBeforeMatching&&""!==m.trim())&&(0===h.trimCharsBeforeMatching.length||!h.trimCharsBeforeMatching.includes(m))){p=b;break}Ht(n[b])&&Kt(n[b+1])&&(b+=1)}if(void 0===p)return!1;var v=n[p];Ht(n[p])&&Kt(n[p+1])&&(v=n[p]+n[p+1]),Kt(n[p])&&Ht(n[p-1])&&(v=n[p-1]+n[p],p-=1);var _,w=p+1;return Ht(n[p])&&Kt(n[p+1])&&(w+=1),w&&w>0&&(_=n.slice(0,w)),t.startsWith("matchLeft")?h.cb(v,_,p):(p&&p>0&&(_=n.slice(p)),h.cb(v,_,p))}var j="";throw Vt(a)||(j=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(t,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(j))}if(t.startsWith("matchLeft")){for(var S=0,$=s.length;S<$;S++){f="function"==typeof s[S];var A=s[S],E=o;"matchLeft"===t&&(qt(n[S-1])&&qt(n[S-2])?E-=2:E-=1);var M=Zt(n,E,A,h,f);if(M&&f&&"function"==typeof A&&"EOL"===A()){return!(!A()||h.cb&&!h.cb(void 0,void 0,void 0))&&A()}var T=void 0,C=void 0,L=void 0;if(Vt(M)&&M>0&&(C=n[T=M-1],L=n.slice(0,M)),Kt(n[T])&&Vt(n[T-1])&&Ht(n[T-1])&&(C=n[(T-=1)-1]+n[T]),Ht(n[T])&&Vt(n[T+1])&&Kt(n[T+1])&&(C=n[T]+n[T+1],L=n.slice(0,T+2)),!1!==M&&(!h.cb||h.cb(C,L,T)))return A}return!1}for(var k=0,I=s.length;k<I;k++){f="function"==typeof s[k];var x=s[k],N=o+("matchRight"===t?1:0);"matchRight"===t&&Ht(n[N-1])&&Kt(n[N])&&(N+=1);var P=Ut(n,N,x,h,f);if(P&&f&&"function"==typeof x&&"EOL"===x()){return!(!x()||h.cb&&!h.cb(void 0,void 0,void 0))&&x()}var B=void 0,R=void 0;Vt(P)&&Vt(n[P+x.length])&&(R=n[B=P+x.length],Ht(n[B])&&Kt(n[B+1])&&(R=n[B]+n[B+1]));var W=void 0;if(Vt(B)&&B>=0&&(W=n.slice(B)),!1!==P&&(!h.cb||h.cb(R,W,B)))return x}return!1}t.matchLeftIncl=function(t,e,r,n){return Gt("matchLeftIncl",t,e,r,n)},t.matchRightIncl=function(t,e,r,n){return Gt("matchRightIncl",t,e,r,n)},t.matchLeft=function(t,e,r,n){return Gt("matchLeft",t,e,r,n)},t.matchRight=function(t,e,r,n){return Gt("matchRight",t,e,r,n)},Object.defineProperty(t,"__esModule",{value:!0})});
