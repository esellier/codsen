!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.objectNoNewKeys=e()}(this,function(){"use strict";var t="[object Object]";var e,r,n=Function.prototype,o=Object.prototype,a=n.toString,i=o.hasOwnProperty,c=a.call(Object),s=o.toString,u=(e=Object.getPrototypeOf,r=Object,function(t){return e(r(t))});var f=function(e){if(!function(t){return!!t&&"object"==typeof t}(e)||s.call(e)!=t||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(e))return!1;var r=u(e);if(null===r)return!0;var n=i.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==c},p="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function l(t,e){return t(e={exports:{}},e.exports),e.exports}var h=l(function(t,e){var r,n,o,a,i,c,s,u,f,l,h,y,g,b,d,v,m,_,j,w;t.exports=(r="function"==typeof Promise,n="object"==typeof self?self:p,o="undefined"!=typeof Symbol,a="undefined"!=typeof Map,i="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,u="undefined"!=typeof DataView,f=o&&void 0!==Symbol.iterator,l=o&&void 0!==Symbol.toStringTag,h=i&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),b=y&&Object.getPrototypeOf((new Map).entries()),d=f&&"function"==typeof Array.prototype[Symbol.iterator],v=d&&Object.getPrototypeOf([][Symbol.iterator]()),m=f&&"function"==typeof String.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf(""[Symbol.iterator]()),j=8,w=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===n)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var o=l&&t[Symbol.toStringTag];if("string"==typeof o)return o;var f=Object.getPrototypeOf(t);return f===RegExp.prototype?"RegExp":f===Date.prototype?"Date":r&&f===Promise.prototype?"Promise":i&&f===Set.prototype?"Set":a&&f===Map.prototype?"Map":s&&f===WeakSet.prototype?"WeakSet":c&&f===WeakMap.prototype?"WeakMap":u&&f===DataView.prototype?"DataView":a&&f===b?"Map Iterator":i&&f===g?"Set Iterator":d&&f===v?"Array Iterator":m&&f===_?"String Iterator":null===f?"Object":Object.prototype.toString.call(t).slice(j,w)})});function y(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,b,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function g(t,e,r,n){for(var o=r-1,a=t.length;++o<a;)if(n(t[o],e))return o;return-1}function b(t){return t!=t}var d=Array.prototype.splice;function v(t,e,r,n){var o,a=n?g:y,i=-1,c=e.length,s=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(s=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++i<c;)for(var u=0,f=e[i],p=r?r(f):f;(u=a(s,p,u,n))>-1;)s!==t&&d.call(s,u,1),d.call(t,u,1);return t}var m=function(t,e){return t&&t.length&&e&&e.length?v(t,e):t},_=l(function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,a="[object Arguments]",i="[object Boolean]",c="[object Date]",s="[object Function]",u="[object GeneratorFunction]",f="[object Map]",l="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",b="[object String]",d="[object Symbol]",v="[object ArrayBuffer]",m="[object DataView]",_="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",A="[object Uint8Array]",S="[object Uint8ClampedArray]",k="[object Uint16Array]",T="[object Uint32Array]",E=/\w*$/,N=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,I={};I[a]=I["[object Array]"]=I[v]=I[m]=I[i]=I[c]=I[_]=I[j]=I[w]=I[O]=I[$]=I[f]=I[l]=I[h]=I[y]=I[g]=I[b]=I[d]=I[A]=I[S]=I[k]=I[T]=!0,I["[object Error]"]=I[s]=I["[object WeakMap]"]=!1;var M="object"==typeof p&&p&&p.Object===Object&&p,x="object"==typeof self&&self&&self.Object===Object&&self,K=M||x||Function("return this")(),L=e&&!e.nodeType&&e,C=L&&t&&!t.nodeType&&t,V=C&&C.exports===L;function W(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function F(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function H(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function R(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function B(t,e){return function(r){return t(e(r))}}function U(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var J,q=Array.prototype,z=Function.prototype,G=Object.prototype,Q=K["__core-js_shared__"],X=(J=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",Y=z.toString,Z=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=V?K.Buffer:void 0,nt=K.Symbol,ot=K.Uint8Array,at=B(Object.getPrototypeOf,Object),it=Object.create,ct=G.propertyIsEnumerable,st=q.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,pt=B(Object.keys,Object),lt=Ct(K,"DataView"),ht=Ct(K,"Map"),yt=Ct(K,"Promise"),gt=Ct(K,"Set"),bt=Ct(K,"WeakMap"),dt=Ct(Object,"create"),vt=Ht(lt),mt=Ht(ht),_t=Ht(yt),jt=Ht(gt),wt=Ht(bt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){this.__data__=new St(t)}function Et(t,e){var r=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Z.call(t,i)||o&&("length"==i||Dt(i,n))||r.push(i);return r}function Nt(t,e,r){var n=t[e];Z.call(t,e)&&Rt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Pt(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}function It(t,e,r,n,o,p,N){var P;if(n&&(P=p?n(t,o,p,N):n(t)),void 0!==P)return P;if(!zt(t))return t;var M=Bt(t);if(M){if(P=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,P)}else{var x=Wt(t),K=x==s||x==u;if(Jt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==h||x==a||K&&!p){if(H(t))return p?t:{};if(P=function(t){return"function"!=typeof t.constructor||Ft(t)?{}:(e=at(t),zt(e)?it(e):{});var e}(K?{}:t),!e)return function(t,e){return Kt(t,Vt(t),e)}(t,function(t,e){return t&&Kt(e,Gt(e),t)}(P,t))}else{if(!I[x])return p?t:{};P=function(t,e,r,n){var o=t.constructor;switch(e){case v:return xt(t);case i:case c:return new o(+t);case m:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case j:case w:case O:case $:case A:case S:case k:case T:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return F(e?r(R(t),!0):R(t),W,new t.constructor)}(t,n,r);case l:case b:return new o(t);case y:return(u=new(s=t).constructor(s.source,E.exec(s))).lastIndex=s.lastIndex,u;case g:return function(t,e,r){return F(e?r(U(t),!0):U(t),D,new t.constructor)}(t,n,r);case d:return a=t,$t?Object($t.call(a)):{}}var a;var s,u}(t,x,It,e)}}N||(N=new Tt);var L=N.get(t);if(L)return L;if(N.set(t,P),!M)var C=r?function(t){return function(t,e,r){var n=e(t);return Bt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Vt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(C||t,function(o,a){C&&(o=t[a=o]),Nt(P,a,It(o,e,r,n,a,t,N))}),P}function Mt(t){return!(!zt(t)||(e=t,X&&X in e))&&(qt(t)||H(t)?et:N).test(Ht(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Kt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var i=e[o],c=n?n(r[i],t[i],i,r,t):void 0;Nt(r,i,void 0===c?t[i]:c)}return r}function Lt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}At.prototype.clear=function(){this.__data__=dt?dt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Pt(e,t);return!(r<0||(r==e.length-1?e.pop():st.call(e,r,1),0))},St.prototype.get=function(t){var e=this.__data__,r=Pt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Pt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Pt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},kt.prototype.clear=function(){this.__data__={hash:new At,map:new(ht||St),string:new At}},kt.prototype.delete=function(t){return Lt(this,t).delete(t)},kt.prototype.get=function(t){return Lt(this,t).get(t)},kt.prototype.has=function(t){return Lt(this,t).has(t)},kt.prototype.set=function(t,e){return Lt(this,t).set(t,e),this},Tt.prototype.clear=function(){this.__data__=new St},Tt.prototype.delete=function(t){return this.__data__.delete(t)},Tt.prototype.get=function(t){return this.__data__.get(t)},Tt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof St){var o=n.__data__;if(!ht||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new kt(o)}return n.set(t,e),this};var Vt=ut?B(ut,Object):function(){return[]},Wt=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Ht(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Rt(t,e){return t===e||t!=t&&e!=e}(lt&&Wt(new lt(new ArrayBuffer(1)))!=m||ht&&Wt(new ht)!=f||yt&&"[object Promise]"!=Wt(yt.resolve())||gt&&Wt(new gt)!=g||bt&&"[object WeakMap]"!=Wt(new bt))&&(Wt=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Ht(r):void 0;if(n)switch(n){case vt:return m;case mt:return f;case _t:return"[object Promise]";case jt:return g;case wt:return"[object WeakMap]"}return e});var Bt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var Jt=ft||function(){return!1};function qt(t){var e=zt(t)?tt.call(t):"";return e==s||e==u}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Ut(t)?Et(t):function(t){if(!Ft(t))return pt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return It(t,!0,!0)}});const j=Array.isArray;function w(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function O(t,e){return function t(e,r,n){const o=_(e);let a,i,c,s,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,j(o))for(a=0,i=o.length;a<i;a++){const e=`${n.path}.${a}`;void 0!==o[a]?(n.parent=_(o),c=t(r(o[a],void 0,Object.assign({},n,{path:w(e)})),r,Object.assign({},n,{path:w(e)})),Number.isNaN(c)&&a<o.length?(o.splice(a,1),a-=1):o[a]=c):o.splice(a,1)}else if(f(o))for(a=0,i=(s=Object.keys(o)).length;a<i;a++){u=s[a];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=_(o),c=t(r(u,o[u],Object.assign({},n,{path:w(e)})),r,Object.assign({},n,{path:w(e)})),Number.isNaN(c)?delete o[u]:o[u]=c}return o}(t,e,{})}var $="__lodash_hash_undefined__",A=9007199254740991,S="[object Function]",k="[object GeneratorFunction]",T=/^\[object .+?Constructor\]$/,E="object"==typeof p&&p&&p.Object===Object&&p,N="object"==typeof self&&self&&self.Object===Object&&self,P=E||N||Function("return this")();function I(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,K,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function M(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function x(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function K(t){return t!=t}function L(t){return function(e){return t(e)}}function C(t,e){return t.has(e)}var V,W=Array.prototype,D=Function.prototype,F=Object.prototype,H=P["__core-js_shared__"],R=(V=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",B=D.toString,U=F.hasOwnProperty,J=F.toString,q=RegExp("^"+B.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=W.splice,G=Math.max,Q=Math.min,X=ct(P,"Map"),Y=ct(Object,"create");function Z(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.__data__=new et;++e<r;)this.add(t[e])}function nt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ot(t){return!(!ut(t)||(e=t,R&&R in e))&&(st(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?q:T).test(function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function at(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}(t.length)&&!st(t)}(t)}(t)?t:[]}function it(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ot(r)?r:void 0}function st(t){var e=ut(t)?J.call(t):"";return e==S||e==k}function ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}Z.prototype.clear=function(){this.__data__=Y?Y(null):{}},Z.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Z.prototype.get=function(t){var e=this.__data__;if(Y){var r=e[t];return r===$?void 0:r}return U.call(e,t)?e[t]:void 0},Z.prototype.has=function(t){var e=this.__data__;return Y?void 0!==e[t]:U.call(e,t)},Z.prototype.set=function(t,e){return this.__data__[t]=Y&&void 0===e?$:e,this},tt.prototype.clear=function(){this.__data__=[]},tt.prototype.delete=function(t){var e=this.__data__,r=nt(e,t);return!(r<0||(r==e.length-1?e.pop():z.call(e,r,1),0))},tt.prototype.get=function(t){var e=this.__data__,r=nt(e,t);return r<0?void 0:e[r][1]},tt.prototype.has=function(t){return nt(this.__data__,t)>-1},tt.prototype.set=function(t,e){var r=this.__data__,n=nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},et.prototype.clear=function(){this.__data__={hash:new Z,map:new(X||tt),string:new Z}},et.prototype.delete=function(t){return it(this,t).delete(t)},et.prototype.get=function(t){return it(this,t).get(t)},et.prototype.has=function(t){return it(this,t).has(t)},et.prototype.set=function(t,e){return it(this,t).set(t,e),this},rt.prototype.add=rt.prototype.push=function(t){return this.__data__.set(t,$),this},rt.prototype.has=function(t){return this.__data__.has(t)};var ft=function(t,e){return e=G(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=G(r.length-e,0),a=Array(o);++n<o;)a[n]=r[e+n];n=-1;for(var i=Array(e+1);++n<e;)i[n]=r[n];return i[e]=a,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,i)}}(function(t){var e=x(t,at);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?M:I,o=t[0].length,a=t.length,i=a,c=Array(a),s=1/0,u=[];i--;){var f=t[i];i&&e&&(f=x(f,L(e))),s=Q(f.length,s),c[i]=!r&&(e||o>=120&&f.length>=120)?new rt(i&&f):void 0}f=t[0];var p=-1,l=c[0];t:for(;++p<o&&u.length<s;){var h=f[p],y=e?e(h):h;if(h=r||0!==h?h:0,!(l?C(l,y):n(u,y,r))){for(i=a;--i;){var g=c[i];if(!(g?C(g,y):n(t[i],y,r)))continue t}l&&l.push(y),u.push(h)}}return u}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var lt=l(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function a(t){var e=parseInt(t);return e.toString()===t?e:t}function i(t){t=t||{};var i=function(t){return Object.keys(i).reduce(function(e,r){return"create"===r?e:("function"==typeof i[r]&&(e[r]=i[r].bind(i,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function s(t,e){if(c(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(a),r,n);var o=e[0],i=s(t,o);return 1===e.length?(void 0!==i&&n||(t[o]=r),i):(void 0===i&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return i.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var i=0;i<n.length;i++){var c=a(n[i]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},i.ensureExists=function(t,e,r){return u(t,e,r,!0)},i.set=function(t,e,r,n){return u(t,e,r,n)},i.insert=function(t,e,r,n){var a=i.get(t,e);n=~~n,o(a)||(a=[],i.set(t,e,a)),a.splice(n,0,r)},i.empty=function(t,e){var a,s;if(!r(e)&&null!=t&&(a=i.get(t,e))){if("string"==typeof a)return i.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(a))return i.set(t,e,!1);if("number"==typeof a)return i.set(t,e,0);if(o(a))a.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(a))return i.set(t,e,null);for(s in a)c(a,s)&&delete a[s]}}},i.push=function(t,e){var r=i.get(t,e);o(r)||(r=[],i.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},i.coalesce=function(t,e,r){for(var n,o=0,a=e.length;o<a;o++)if(void 0!==(n=i.get(t,e[o])))return n;return r},i.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return i.get(t,e.split("."),r);var n=a(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:i.get(t[n],e.slice(1),r)},i.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return i.del(t,e.split("."));var n=a(e[0]);return c(t,n)?1!==e.length?i.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},i}var c=i();return c.create=i,c.withInheritedProps=i({includeInheritedProps:!0}),c}()}),ht=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function yt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+ht(t)}yt.indicator=ht;var gt=yt,bt=/[|\\{}()[\]^$+*?.]/g,dt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(bt,"\\$&")};const vt=new Map;function mt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(vt.has(n))return vt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=dt(t).replace(/\\\*/g,".*");const a=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return a.negated=o,vt.set(n,a),a}var _t=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>mt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function jt(t,e,r){return function t(e,r,n,o=!0){function a(t){return null!=t}function i(t){return"Object"===h(t)}function c(t,e){return e=pt(e),Array.from(t).filter(t=>!e.some(e=>_t.isMatch(t,e,{caseSensitive:!0})))}function s(t){if(t.includes(".")){const e=t.split(".");return e.pop(),e.join(".")}return t}const u=["any","anything","every","everything","all","whatever","whatevs"],f=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const p={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let l;if(l=a(n)&&i(n)?Object.assign({},p,n):Object.assign({},p),a(l.ignoreKeys)&&l.ignoreKeys?l.ignoreKeys=pt(l.ignoreKeys):l.ignoreKeys=[],a(l.ignorePaths)&&l.ignorePaths?l.ignorePaths=pt(l.ignorePaths):l.ignorePaths=[],a(l.acceptArraysIgnore)&&l.acceptArraysIgnore?l.acceptArraysIgnore=pt(l.acceptArraysIgnore):l.acceptArraysIgnore=[],l.msg="string"==typeof l.msg?l.msg.trim():l.msg,":"===l.msg[l.msg.length-1]&&(l.msg=l.msg.slice(0,l.msg.length-1).trim()),l.schema&&(Object.keys(l.schema).forEach(t=>{if(i(l.schema[t])){const e={};O(l.schema[t],(r,n,o)=>{const a=void 0!==n?n:r;return f(a)||i(a)||(e[`${t}.${o.path}`]=a),a}),delete l.schema[t],l.schema=Object.assign(l.schema,e)}}),Object.keys(l.schema).forEach(t=>{f(l.schema[t])||(l.schema[t]=[l.schema[t]]),l.schema[t]=l.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(l,p,{enforceStrictKeyset:!1},!1),l.enforceStrictKeyset)if(a(l.schema)&&Object.keys(l.schema).length>0){if(0!==c(m(Object.keys(e),Object.keys(r).concat(Object.keys(l.schema))),l.ignoreKeys).length){const t=m(Object.keys(e),Object.keys(r).concat(Object.keys(l.schema)));throw new TypeError(`${l.msg}: ${l.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${l.msg}: Both ${l.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==c(m(Object.keys(e),Object.keys(r)),l.ignoreKeys).length){const t=m(Object.keys(e),Object.keys(r));throw new TypeError(`${l.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==c(m(Object.keys(r),Object.keys(e)),l.ignoreKeys).length){const t=m(Object.keys(r),Object.keys(e));throw new TypeError(`${l.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const y=[];O(e,(t,e,n)=>{const o=void 0!==e?e:t;if(f(y)&&y.length&&y.some(t=>n.path.startsWith(t)))return o;if(!(!l.enforceStrictKeyset||!i(o)&&!f(o)&&f(n.parent)||a(l.schema)&&i(l.schema)&&(!i(l.schema)||Object.keys(l.schema).length&&(f(n.parent)||Object.prototype.hasOwnProperty.call(l.schema,n.path))&&(!f(n.parent)||lt.has(l.schema,s(n.path))))||a(r)&&i(r)&&(!i(r)||Object.keys(r).length&&(l.acceptArrays||lt.has(r,n.path))&&(!l.acceptArrays||(f(n.parent)||lt.has(r,n.path))&&(!f(n.parent)||lt.has(r,s(n.path)))))))throw new TypeError(`${l.msg}: ${l.optsVarName}.${n.path} is neither covered by reference object (second input argument), nor ${l.optsVarName}.schema! To stop this error, turn off ${l.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${l.optsVarName}.schema).`);if(i(l.schema)&&Object.keys(l.schema).length&&Object.prototype.hasOwnProperty.call(l.schema,n.path)){const t=pt(l.schema[n.path]).map(String).map(t=>t.toLowerCase());if(lt.set(l.schema,n.path,t),ft(t,u).length)y.push(n.path);else if(!0!==o&&!1!==o&&!t.includes(h(o).toLowerCase())||(!0===o||!1===o)&&!t.includes(String(o))&&!t.includes("boolean")){if(!f(o)||!l.acceptArrays)throw new TypeError(`${l.msg}: ${l.optsVarName}.${n.path} was customised to ${"string"!==h(o)?'"':""}${JSON.stringify(o,null,0)}${"string"!==h(o)?'"':""} (type: ${h(o).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=o.length;e<r;e++)if(!t.includes(h(o[e]).toLowerCase()))throw new TypeError(`${l.msg}: ${l.optsVarName}.${n.path}.${e}, the ${gt(e+1)} element (equal to ${JSON.stringify(o[e],null,0)}) is of a type ${h(o[e]).toLowerCase()}, but only the following are allowed by the ${l.optsVarName}.schema: ${t.join(", ")}`)}}else if(a(r)&&Object.keys(r).length&&lt.has(r,n.path)&&h(o)!==h(lt.get(r,n.path))&&(!l.ignoreKeys||!l.ignoreKeys.some(e=>_t.isMatch(t,e)))&&(!l.ignorePaths||!l.ignorePaths.some(t=>_t.isMatch(n.path,t)))){const e=lt.get(r,n.path);if(!l.acceptArrays||!f(o)||l.acceptArraysIgnore.includes(t))throw new TypeError(`${l.msg}: ${l.optsVarName}.${n.path} was customised to ${"string"===h(o).toLowerCase()?"":'"'}${JSON.stringify(o,null,0)}${"string"===h(o).toLowerCase()?"":'"'} which is not ${h(e).toLowerCase()} but ${h(o).toLowerCase()}`);if(!o.every(e=>h(e).toLowerCase()===h(r[t]).toLowerCase()))throw new TypeError(`${l.msg}: ${l.optsVarName}.${n.path} was customised to be array, but not all of its elements are ${h(r[t]).toLowerCase()}-type`)}return o})}(t,e,r)}return _t.isMatch=((t,e,r)=>{const n=mt(e,r),o=n.test(t);return n.negated?!o:o}),function(t,e,r){var n=Array.isArray,o={mode:2};if(Number.isFinite(r))throw Number.isInteger(r)?new TypeError('object-no-new-keys/objectNoNewKeys(): [THROW_ID_02] Please pass a plain object with a key "mode" set to 1 or 2, not the number '.concat(r," directly! Computer doesn't like that.")):new TypeError("object-no-new-keys/objectNoNewKeys(): [THROW_ID_03] The third argument, options object, is not only not an object, it's not even an integer! It's currently: ".concat(r," and computer doesn't like it very much."));var a=Object.assign({},o,r);if("string"==typeof a.mode&&(a.mode=parseInt(a.mode,10)),1!==a.mode&&2!==a.mode)throw new TypeError('object-no-new-keys/objectNoNewKeys(): [THROW_ID_01] opts.mode was customised to be a wrong thing, "'.concat(a.mode,'" while it should be either natural number 1 or 2.'));return jt(a,o,{msg:"object-no-new-keys/objectNoNewKeys(): [THROW_ID_04*]"}),function t(e,r,o,a){var i;if(void 0===a&&(a={path:"",res:[]}),f(e))f(r)?Object.keys(e).forEach(function(c){Object.prototype.hasOwnProperty.call(r,c)?(f(e[c])||n(e[c]))&&(i={path:a.path.length>0?"".concat(a.path,".").concat(c):c,res:a.res},a.res=t(e[c],r[c],o,i).res):(i=a.path.length>0?"".concat(a.path,".").concat(c):c,a.res.push(i))}):a.res=a.res.concat(Object.keys(e).map(function(t){return a.path.length>0?"".concat(a.path,".").concat(t):t}));else if(n(e))if(n(r))for(var c=0,s=e.length;c<s;c++)i={path:"".concat(a.path.length>0?a.path:"","[").concat(c,"]"),res:a.res},2===o.mode?a.res=t(e[c],r[0],o,i).res:a.res=t(e[c],r[c],o,i).res;else a.res=a.res.concat(e.map(function(t,e){return"".concat(a.path.length>0?a.path:"","[").concat(e,"]")}));return a}(t,e,a).res}});
