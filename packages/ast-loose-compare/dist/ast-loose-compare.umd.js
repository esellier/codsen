/**
 * ast-loose-compare
 * Compare anything: AST, objects, arrays and strings
 * Version: 1.4.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/ast-loose-compare
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).astLooseCompare=r()}(this,function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=1/0,n="[object Symbol]",o=/^\s+|\s+$/g,u="[\\ud800-\\udfff]",c="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",i="\\ud83c[\\udffb-\\udfff]",f="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+c+"|"+i+")"+"?",p="[\\ufe0e\\ufe0f]?"+l+("(?:\\u200d(?:"+[f,a,s].join("|")+")[\\ufe0e\\ufe0f]?"+l+")*"),y="(?:"+[f+c+"?",c,a,s,u].join("|")+")",h=RegExp(i+"(?="+i+")|"+y+p,"g"),b=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),d="object"==typeof r&&r&&r.Object===Object&&r,v="object"==typeof self&&self&&self.Object===Object&&self,_=d||v||Function("return this")();function g(t,r,e){if(r!=r)return function(t,r,e,n){for(var o=t.length,u=e+(n?1:-1);n?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,j,e);for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1}function j(t){return t!=t}function O(t){return function(t){return b.test(t)}(t)?function(t){return t.match(h)||[]}(t):function(t){return t.split("")}(t)}var w=Object.prototype.toString,A=_.Symbol,m=A?A.prototype:void 0,S=m?m.toString:void 0;function x(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&w.call(t)==n}(t))return S?S.call(t):"";var r=t+"";return"0"==r&&1/t==-e?"-0":r}function $(t,r,e){var n=t.length;return e=void 0===e?n:e,!r&&e>=n?t:function(t,r,e){var n=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(e=e>o?o:e)<0&&(e+=o),o=r>e?0:e-r>>>0,r>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+r];return u}(t,r,e)}var k=function(t,r,e){var n;if((t=null==(n=t)?"":x(n))&&(e||void 0===r))return t.replace(o,"");if(!t||!(r=x(r)))return t;var u=O(t),c=O(r);return $(u,function(t,r){for(var e=-1,n=t.length;++e<n&&g(r,t[e],0)>-1;);return e}(u,c),function(t,r){for(var e=t.length;e--&&g(r,t[e],0)>-1;);return e}(u,c)+1).join("")},P="[object Object]";var E,F,I=Function.prototype,N=Object.prototype,M=I.toString,B=N.hasOwnProperty,R=M.call(Object),U=N.toString,W=(E=Object.getPrototypeOf,F=Object,function(t){return E(F(t))});var C,D=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||U.call(t)!=P||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=W(t);if(null===r)return!0;var e=B.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&M.call(e)==R},L=(function(t,e){var n=200,o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",i="[object Boolean]",f="[object Date]",a="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object RegExp]",b="[object Set]",d="[object String]",v="[object Symbol]",_="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",w="[object Int8Array]",A="[object Int16Array]",m="[object Int32Array]",S="[object Uint8Array]",x="[object Uint8ClampedArray]",$="[object Uint16Array]",k="[object Uint32Array]",P=/\w*$/,E=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[_]=I[g]=I[i]=I[f]=I[j]=I[O]=I[w]=I[A]=I[m]=I[l]=I[p]=I[y]=I[h]=I[b]=I[d]=I[v]=I[S]=I[x]=I[$]=I[k]=!0,I["[object Error]"]=I[a]=I["[object WeakMap]"]=!1;var N="object"==typeof r&&r&&r.Object===Object&&r,M="object"==typeof self&&self&&self.Object===Object&&self,B=N||M||Function("return this")(),R=e&&!e.nodeType&&e,U=R&&t&&!t.nodeType&&t,W=U&&U.exports===R;function C(t,r){return t.set(r[0],r[1]),t}function D(t,r){return t.add(r),t}function L(t,r,e,n){var o=-1,u=t?t.length:0;for(n&&u&&(e=t[++o]);++o<u;)e=r(e,t[o],o,t);return e}function T(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function z(t){var r=-1,e=Array(t.size);return t.forEach(function(t,n){e[++r]=[n,t]}),e}function V(t,r){return function(e){return t(r(e))}}function G(t){var r=-1,e=Array(t.size);return t.forEach(function(t){e[++r]=t}),e}var K,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=B["__core-js_shared__"],X=(K=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=W?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,ut=V(Object.getPrototypeOf,Object),ct=Object.create,it=J.propertyIsEnumerable,ft=q.splice,at=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=V(Object.keys,Object),pt=Ut(B,"DataView"),yt=Ut(B,"Map"),ht=Ut(B,"Promise"),bt=Ut(B,"Set"),dt=Ut(B,"WeakMap"),vt=Ut(Object,"create"),_t=Tt(pt),gt=Tt(yt),jt=Tt(ht),Ot=Tt(bt),wt=Tt(dt),At=nt?nt.prototype:void 0,mt=At?At.valueOf:void 0;function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function $t(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function kt(t){this.__data__=new xt(t)}function Pt(t,r){var e=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Gt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var u in t)!r&&!Z.call(t,u)||o&&("length"==u||Dt(u,n))||e.push(u);return e}function Et(t,r,e){var n=t[r];Z.call(t,r)&&zt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ft(t,r){for(var e=t.length;e--;)if(zt(t[e][0],r))return e;return-1}function It(t,r,e,n,o,u,E){var F;if(n&&(F=u?n(t,o,u,E):n(t)),void 0!==F)return F;if(!Ht(t))return t;var N=Vt(t);if(N){if(F=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,F)}else{var M=Ct(t),B=M==a||M==s;if(Kt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(M==y||M==c||B&&!u){if(T(t))return u?t:{};if(F=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(r=ut(t),Ht(r)?ct(r):{});var r}(B?{}:t),!r)return function(t,r){return Bt(t,Wt(t),r)}(t,function(t,r){return t&&Bt(r,Jt(r),t)}(F,t))}else{if(!I[M])return u?t:{};F=function(t,r,e,n){var o=t.constructor;switch(r){case _:return Mt(t);case i:case f:return new o(+t);case g:return function(t,r){var e=r?Mt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case j:case O:case w:case A:case m:case S:case x:case $:case k:return function(t,r){var e=r?Mt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return L(r?e(z(t),!0):z(t),C,new t.constructor)}(t,n,e);case p:case d:return new o(t);case h:return(a=new(c=t).constructor(c.source,P.exec(c))).lastIndex=c.lastIndex,a;case b:return function(t,r,e){return L(r?e(G(t),!0):G(t),D,new t.constructor)}(t,n,e);case v:return u=t,mt?Object(mt.call(u)):{}}var u;var c,a}(t,M,It,r)}}E||(E=new kt);var R=E.get(t);if(R)return R;if(E.set(t,F),!N)var U=e?function(t){return function(t,r,e){var n=r(t);return Vt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Jt,Wt)}(t):Jt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(U||t,function(o,u){U&&(o=t[u=o]),Et(F,u,It(o,r,e,n,u,t,E))}),F}function Nt(t){return!(!Ht(t)||(r=t,X&&X in r))&&(qt(t)||T(t)?rt:E).test(Tt(t));var r}function Mt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Bt(t,r,e,n){e||(e={});for(var o=-1,u=r.length;++o<u;){var c=r[o],i=n?n(e[c],t[c],c,e,t):void 0;Et(e,c,void 0===i?t[c]:i)}return e}function Rt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Ut(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Nt(e)?e:void 0}St.prototype.clear=function(){this.__data__=vt?vt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var r=this.__data__;if(vt){var e=r[t];return e===o?void 0:e}return Z.call(r,t)?r[t]:void 0},St.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:Z.call(r,t)},St.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?o:r,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var r=this.__data__,e=Ft(r,t);return!(e<0||(e==r.length-1?r.pop():ft.call(r,e,1),0))},xt.prototype.get=function(t){var r=this.__data__,e=Ft(r,t);return e<0?void 0:r[e][1]},xt.prototype.has=function(t){return Ft(this.__data__,t)>-1},xt.prototype.set=function(t,r){var e=this.__data__,n=Ft(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},$t.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||xt),string:new St}},$t.prototype.delete=function(t){return Rt(this,t).delete(t)},$t.prototype.get=function(t){return Rt(this,t).get(t)},$t.prototype.has=function(t){return Rt(this,t).has(t)},$t.prototype.set=function(t,r){return Rt(this,t).set(t,r),this},kt.prototype.clear=function(){this.__data__=new xt},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof xt){var o=e.__data__;if(!yt||o.length<n-1)return o.push([t,r]),this;e=this.__data__=new $t(o)}return e.set(t,r),this};var Wt=at?V(at,Object):function(){return[]},Ct=function(t){return tt.call(t)};function Dt(t,r){return!!(r=null==r?u:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function Lt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||J)}function Tt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,r){return t===r||t!=t&&r!=r}(pt&&Ct(new pt(new ArrayBuffer(1)))!=g||yt&&Ct(new yt)!=l||ht&&"[object Promise]"!=Ct(ht.resolve())||bt&&Ct(new bt)!=b||dt&&"[object WeakMap]"!=Ct(new dt))&&(Ct=function(t){var r=tt.call(t),e=r==y?t.constructor:void 0,n=e?Tt(e):void 0;if(n)switch(n){case _t:return g;case gt:return l;case jt:return"[object Promise]";case Ot:return b;case wt:return"[object WeakMap]"}return r});var Vt=Array.isArray;function Gt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!qt(t)}var Kt=st||function(){return!1};function qt(t){var r=Ht(t)?tt.call(t):"";return r==a||r==s}function Ht(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Jt(t){return Gt(t)?Pt(t):function(t){if(!Lt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return It(t,!0,!0)}}(C={exports:{}},C.exports),C.exports);const T=Array.isArray;function z(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function V(t,r){return function t(r,e,n){const o=L(r);let u,c,i,f,a;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,T(o))for(u=0,c=o.length;u<c;u++){const r=`${n.path}.${u}`;void 0!==o[u]?(n.parent=L(o),i=t(e(o[u],void 0,Object.assign({},n,{path:z(r)})),e,Object.assign({},n,{path:z(r)})),Number.isNaN(i)&&u<o.length?(o.splice(u,1),u-=1):o[u]=i):o.splice(u,1)}else if(D(o))for(u=0,c=(f=Object.keys(o)).length;u<c;u++){a=f[u];const r=`${n.path}.${a}`;0===n.depth&&null!=a&&(n.topmostKey=a),n.parent=L(o),i=t(e(a,o[a],Object.assign({},n,{path:z(r)})),e,Object.assign({},n,{path:z(r)})),Number.isNaN(i)?delete o[a]:o[a]=i}return o}(t,r,{})}function G(t){function r(t){return"string"==typeof t}const e=Array.isArray;let n=!0;return!!(e(t)||D(t)||r(t))&&(r(t)?0===k(t).length:(t=V(t,(t,e)=>{const o=void 0!==e?e:t;return r(o)&&""!==k(o)&&(n=!1),o}),n))}var K="[object String]",q=Object.prototype.toString,H=Array.isArray;var J=function(t){return"string"==typeof t||!H(t)&&function(t){return!!t&&"object"==typeof t}(t)&&q.call(t)==K};return function r(e,n,o){function u(t){return null!=t}var c,i;if(void 0===o){if(!u(e)||!u(n))return}else if(!u(e)||!u(n))return!1;if(o=o||!0,t(e)!==t(n))return!(!G(e)||!G(n));if(Array.isArray(e)&&Array.isArray(n)){if(!(n.length>0))return!!(0===n.length&&0===e.length||G(n)&&G(e))||(o=!1,!1);for(c=0,i=n.length;c<i;c++)if(Array.isArray(n[c])||D(n[c])){if(!(o=r(e[c],n[c],o)))return!1}else if(n[c]!==e[c])return!(!G(n[c])||!G(e[c]))||(o=!1,!1)}else if(D(e)&&D(n)){if(!(Object.keys(n).length>0))return!!(0===Object.keys(n).length&&0===Object.keys(e).length||G(n)&&G(e))||(o=!1,!1);var f=Object.keys(n);for(c=0,i=f.length;c<i;c++)if(Array.isArray(n[f[c]])||D(n[f[c]])||J(n[f[c]])){if(!(o=r(e[f[c]],n[f[c]],o)))return!1}else if(!(n[f[c]]===e[f[c]]||G(n[f[c]])&&G(e[f[c]])))return o=!1,!1}else{if(!J(e)||!J(n))return!(!G(n)||!G(e))||(o=!1,!1);if(e!==n)return!(!G(n)||!G(e))||(o=!1,!1)}return o}});
