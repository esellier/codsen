/**
 * object-all-values-equal-to
 * Does the AST/nested-plain-object/array/whatever contain only one kind of value?
 * Version: 1.4.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/object-all-values-equal-to
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).objectAllValuesEqualTo=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="[object Object]";var r,n,o=Function.prototype,i=Object.prototype,a=o.toString,c=i.hasOwnProperty,u=a.call(Object),s=i.toString,f=(r=Object.getPrototypeOf,n=Object,function(t){return r(n(t))});var l=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||s.call(t)!=e||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var r=f(t);if(null===r)return!0;var n=c.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==u},p="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(t,e){return t(e={exports:{}},e.exports),e.exports}var y=h(function(t,e){var r=200,n="__lodash_hash_undefined__",o=1,i=2,a=9007199254740991,c="[object Arguments]",u="[object Array]",s="[object AsyncFunction]",f="[object Boolean]",l="[object Date]",h="[object Error]",y="[object Function]",g="[object GeneratorFunction]",v="[object Map]",_="[object Number]",b="[object Null]",d="[object Object]",j="[object Proxy]",m="[object RegExp]",w="[object Set]",O="[object String]",$="[object Symbol]",A="[object Undefined]",S="[object ArrayBuffer]",k="[object DataView]",T=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,P={};P["[object Float32Array]"]=P["[object Float64Array]"]=P["[object Int8Array]"]=P["[object Int16Array]"]=P["[object Int32Array]"]=P["[object Uint8Array]"]=P["[object Uint8ClampedArray]"]=P["[object Uint16Array]"]=P["[object Uint32Array]"]=!0,P[c]=P[u]=P[S]=P[f]=P[k]=P[l]=P[h]=P[y]=P[v]=P[_]=P[d]=P[m]=P[w]=P[O]=P["[object WeakMap]"]=!1;var M="object"==typeof p&&p&&p.Object===Object&&p,N="object"==typeof self&&self&&self.Object===Object&&self,x=M||N||Function("return this")(),I=e&&!e.nodeType&&e,L=I&&t&&!t.nodeType&&t,z=L&&L.exports===I,C=z&&M.process,W=function(){try{return C&&C.binding&&C.binding("util")}catch(t){}}(),D=W&&W.isTypedArray;function V(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function F(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function K(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var R,B,H,U=Array.prototype,J=Function.prototype,q=Object.prototype,G=x["__core-js_shared__"],Q=J.toString,X=q.hasOwnProperty,Y=(R=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"",Z=q.toString,tt=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=z?x.Buffer:void 0,rt=x.Symbol,nt=x.Uint8Array,ot=q.propertyIsEnumerable,it=U.splice,at=rt?rt.toStringTag:void 0,ct=Object.getOwnPropertySymbols,ut=et?et.isBuffer:void 0,st=(B=Object.keys,H=Object,function(t){return B(H(t))}),ft=Wt(x,"DataView"),lt=Wt(x,"Map"),pt=Wt(x,"Promise"),ht=Wt(x,"Set"),yt=Wt(x,"WeakMap"),gt=Wt(Object,"create"),vt=Kt(ft),_t=Kt(lt),bt=Kt(pt),dt=Kt(ht),jt=Kt(yt),mt=rt?rt.prototype:void 0,wt=mt?mt.valueOf:void 0;function Ot(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new At;++e<r;)this.add(t[e])}function kt(t){var e=this.__data__=new $t(t);this.size=e.size}function Tt(t,e){var r=Ht(t),n=!r&&Bt(t),o=!r&&!n&&Ut(t),i=!r&&!n&&!o&&Xt(t),a=r||n||o||i,c=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],u=c.length;for(var s in t)!e&&!X.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Ft(s,u))||c.push(s);return c}function Et(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}function Pt(t){return null==t?void 0===t?A:b:at&&at in Object(t)?function(t){var e=X.call(t,at),r=t[at];try{t[at]=void 0;var n=!0}catch(t){}var o=Z.call(t);n&&(e?t[at]=r:delete t[at]);return o}(t):function(t){return Z.call(t)}(t)}function Mt(t){return Qt(t)&&Pt(t)==c}function Nt(t,e,r,n,a){return t===e||(null==t||null==e||!Qt(t)&&!Qt(e)?t!=t&&e!=e:function(t,e,r,n,a,s){var p=Ht(t),y=Ht(e),g=p?u:Vt(t),b=y?u:Vt(e),j=(g=g==c?d:g)==d,A=(b=b==c?d:b)==d,T=g==b;if(T&&Ut(t)){if(!Ut(e))return!1;p=!0,j=!1}if(T&&!j)return s||(s=new kt),p||Xt(t)?Lt(t,e,r,n,a,s):function(t,e,r,n,a,c,u){switch(r){case k:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case S:return!(t.byteLength!=e.byteLength||!c(new nt(t),new nt(e)));case f:case l:case _:return Rt(+t,+e);case h:return t.name==e.name&&t.message==e.message;case m:case O:return t==e+"";case v:var s=F;case w:var p=n&o;if(s||(s=K),t.size!=e.size&&!p)return!1;var y=u.get(t);if(y)return y==e;n|=i,u.set(t,e);var g=Lt(s(t),s(e),n,a,c,u);return u.delete(t),g;case $:if(wt)return wt.call(t)==wt.call(e)}return!1}(t,e,g,r,n,a,s);if(!(r&o)){var E=j&&X.call(t,"__wrapped__"),P=A&&X.call(e,"__wrapped__");if(E||P){var M=E?t.value():t,N=P?e.value():e;return s||(s=new kt),a(M,N,r,n,s)}}if(!T)return!1;return s||(s=new kt),function(t,e,r,n,i,a){var c=r&o,u=zt(t),s=u.length,f=zt(e).length;if(s!=f&&!c)return!1;for(var l=s;l--;){var p=u[l];if(!(c?p in e:X.call(e,p)))return!1}var h=a.get(t);if(h&&a.get(e))return h==e;var y=!0;a.set(t,e),a.set(e,t);for(var g=c;++l<s;){p=u[l];var v=t[p],_=e[p];if(n)var b=c?n(_,v,p,e,t,a):n(v,_,p,t,e,a);if(!(void 0===b?v===_||i(v,_,r,n,a):b)){y=!1;break}g||(g="constructor"==p)}if(y&&!g){var d=t.constructor,j=e.constructor;d!=j&&"constructor"in t&&"constructor"in e&&!("function"==typeof d&&d instanceof d&&"function"==typeof j&&j instanceof j)&&(y=!1)}return a.delete(t),a.delete(e),y}(t,e,r,n,a,s)}(t,e,r,n,Nt,a))}function xt(t){return!(!Gt(t)||(e=t,Y&&Y in e))&&(Jt(t)?tt:T).test(Kt(t));var e}function It(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||q,e!==n)return st(t);var e,r,n,o=[];for(var i in Object(t))X.call(t,i)&&"constructor"!=i&&o.push(i);return o}function Lt(t,e,r,n,a,c){var u=r&o,s=t.length,f=e.length;if(s!=f&&!(u&&f>s))return!1;var l=c.get(t);if(l&&c.get(e))return l==e;var p=-1,h=!0,y=r&i?new St:void 0;for(c.set(t,e),c.set(e,t);++p<s;){var g=t[p],v=e[p];if(n)var _=u?n(v,g,p,e,t,c):n(g,v,p,t,e,c);if(void 0!==_){if(_)continue;h=!1;break}if(y){if(!V(e,function(t,e){if(o=e,!y.has(o)&&(g===t||a(g,t,r,n,c)))return y.push(e);var o})){h=!1;break}}else if(g!==v&&!a(g,v,r,n,c)){h=!1;break}}return c.delete(t),c.delete(e),h}function zt(t){return function(t,e,r){var n=e(t);return Ht(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Yt,Dt)}function Ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Wt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return xt(r)?r:void 0}Ot.prototype.clear=function(){this.__data__=gt?gt(null):{},this.size=0},Ot.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ot.prototype.get=function(t){var e=this.__data__;if(gt){var r=e[t];return r===n?void 0:r}return X.call(e,t)?e[t]:void 0},Ot.prototype.has=function(t){var e=this.__data__;return gt?void 0!==e[t]:X.call(e,t)},Ot.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=gt&&void 0===e?n:e,this},$t.prototype.clear=function(){this.__data__=[],this.size=0},$t.prototype.delete=function(t){var e=this.__data__,r=Et(e,t);return!(r<0||(r==e.length-1?e.pop():it.call(e,r,1),--this.size,0))},$t.prototype.get=function(t){var e=this.__data__,r=Et(e,t);return r<0?void 0:e[r][1]},$t.prototype.has=function(t){return Et(this.__data__,t)>-1},$t.prototype.set=function(t,e){var r=this.__data__,n=Et(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},At.prototype.clear=function(){this.size=0,this.__data__={hash:new Ot,map:new(lt||$t),string:new Ot}},At.prototype.delete=function(t){var e=Ct(this,t).delete(t);return this.size-=e?1:0,e},At.prototype.get=function(t){return Ct(this,t).get(t)},At.prototype.has=function(t){return Ct(this,t).has(t)},At.prototype.set=function(t,e){var r=Ct(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},St.prototype.add=St.prototype.push=function(t){return this.__data__.set(t,n),this},St.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.clear=function(){this.__data__=new $t,this.size=0},kt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof $t){var o=n.__data__;if(!lt||o.length<r-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new At(o)}return n.set(t,e),this.size=n.size,this};var Dt=ct?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i}(ct(t),function(e){return ot.call(t,e)}))}:function(){return[]},Vt=Pt;function Ft(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function Kt(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Rt(t,e){return t===e||t!=t&&e!=e}(ft&&Vt(new ft(new ArrayBuffer(1)))!=k||lt&&Vt(new lt)!=v||pt&&"[object Promise]"!=Vt(pt.resolve())||ht&&Vt(new ht)!=w||yt&&"[object WeakMap]"!=Vt(new yt))&&(Vt=function(t){var e=Pt(t),r=e==d?t.constructor:void 0,n=r?Kt(r):"";if(n)switch(n){case vt:return k;case _t:return v;case bt:return"[object Promise]";case dt:return w;case jt:return"[object WeakMap]"}return e});var Bt=Mt(function(){return arguments}())?Mt:function(t){return Qt(t)&&X.call(t,"callee")&&!ot.call(t,"callee")},Ht=Array.isArray;var Ut=ut||function(){return!1};function Jt(t){if(!Gt(t))return!1;var e=Pt(t);return e==y||e==g||e==s||e==j}function qt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function Gt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Qt(t){return null!=t&&"object"==typeof t}var Xt=D?function(t){return function(e){return t(e)}}(D):function(t){return Qt(t)&&qt(t.length)&&!!P[Pt(t)]};function Yt(t){return null!=(e=t)&&qt(e.length)&&!Jt(e)?Tt(t):It(t);var e}t.exports=function(t,e){return Nt(t,e)}}),g=h(function(t,e){var r,n,o,i,a,c,u,s,f,l,h,y,g,v,_,b,d,j,m,w;t.exports=(r="function"==typeof Promise,n="object"==typeof self?self:p,o="undefined"!=typeof Symbol,i="undefined"!=typeof Map,a="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,f=o&&void 0!==Symbol.iterator,l=o&&void 0!==Symbol.toStringTag,h=a&&"function"==typeof Set.prototype.entries,y=i&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),v=y&&Object.getPrototypeOf((new Map).entries()),_=f&&"function"==typeof Array.prototype[Symbol.iterator],b=_&&Object.getPrototypeOf([][Symbol.iterator]()),d=f&&"function"==typeof String.prototype[Symbol.iterator],j=d&&Object.getPrototypeOf(""[Symbol.iterator]()),m=8,w=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===n)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var o=l&&t[Symbol.toStringTag];if("string"==typeof o)return o;var f=Object.getPrototypeOf(t);return f===RegExp.prototype?"RegExp":f===Date.prototype?"Date":r&&f===Promise.prototype?"Promise":a&&f===Set.prototype?"Set":i&&f===Map.prototype?"Map":u&&f===WeakSet.prototype?"WeakSet":c&&f===WeakMap.prototype?"WeakMap":s&&f===DataView.prototype?"DataView":i&&f===v?"Map Iterator":a&&f===g?"Set Iterator":_&&f===b?"Array Iterator":d&&f===j?"String Iterator":null===f?"Object":Object.prototype.toString.call(t).slice(m,w)})});function v(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,b,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function _(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function b(t){return t!=t}var d=Array.prototype.splice;function j(t,e,r,n){var o,i=n?_:v,a=-1,c=e.length,u=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(u=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<c;)for(var s=0,f=e[a],l=r?r(f):f;(s=i(u,l,s,n))>-1;)u!==t&&d.call(u,s,1),d.call(t,s,1);return t}var m=function(t,e){return t&&t.length&&e&&e.length?j(t,e):t},w=h(function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",u="[object Function]",s="[object GeneratorFunction]",f="[object Map]",l="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",v="[object String]",_="[object Symbol]",b="[object ArrayBuffer]",d="[object DataView]",j="[object Float32Array]",m="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",A="[object Uint8Array]",S="[object Uint8ClampedArray]",k="[object Uint16Array]",T="[object Uint32Array]",E=/\w*$/,P=/^\[object .+?Constructor\]$/,M=/^(?:0|[1-9]\d*)$/,N={};N[i]=N["[object Array]"]=N[b]=N[d]=N[a]=N[c]=N[j]=N[m]=N[w]=N[O]=N[$]=N[f]=N[l]=N[h]=N[y]=N[g]=N[v]=N[_]=N[A]=N[S]=N[k]=N[T]=!0,N["[object Error]"]=N[u]=N["[object WeakMap]"]=!1;var x="object"==typeof p&&p&&p.Object===Object&&p,I="object"==typeof self&&self&&self.Object===Object&&self,L=x||I||Function("return this")(),z=e&&!e.nodeType&&e,C=z&&t&&!t.nodeType&&t,W=C&&C.exports===z;function D(t,e){return t.set(e[0],e[1]),t}function V(t,e){return t.add(e),t}function F(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function R(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function B(t,e){return function(r){return t(e(r))}}function H(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var U,J=Array.prototype,q=Function.prototype,G=Object.prototype,Q=L["__core-js_shared__"],X=(U=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",Y=q.toString,Z=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=W?L.Buffer:void 0,nt=L.Symbol,ot=L.Uint8Array,it=B(Object.getPrototypeOf,Object),at=Object.create,ct=G.propertyIsEnumerable,ut=J.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=B(Object.keys,Object),pt=Ct(L,"DataView"),ht=Ct(L,"Map"),yt=Ct(L,"Promise"),gt=Ct(L,"Set"),vt=Ct(L,"WeakMap"),_t=Ct(Object,"create"),bt=Kt(pt),dt=Kt(ht),jt=Kt(yt),mt=Kt(gt),wt=Kt(vt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){this.__data__=new St(t)}function Et(t,e){var r=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ht(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Vt(a,n))||r.push(a);return r}function Pt(t,e,r){var n=t[e];Z.call(t,e)&&Rt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Mt(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}function Nt(t,e,r,n,o,p,P){var M;if(n&&(M=p?n(t,o,p,P):n(t)),void 0!==M)return M;if(!qt(t))return t;var x=Bt(t);if(x){if(M=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,M)}else{var I=Dt(t),L=I==u||I==s;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(I==h||I==i||L&&!p){if(K(t))return p?t:{};if(M=function(t){return"function"!=typeof t.constructor||Ft(t)?{}:(e=it(t),qt(e)?at(e):{});var e}(L?{}:t),!e)return function(t,e){return Lt(t,Wt(t),e)}(t,function(t,e){return t&&Lt(e,Gt(e),t)}(M,t))}else{if(!N[I])return p?t:{};M=function(t,e,r,n){var o=t.constructor;switch(e){case b:return It(t);case a:case c:return new o(+t);case d:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case m:case w:case O:case $:case A:case S:case k:case T:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return F(e?r(R(t),!0):R(t),D,new t.constructor)}(t,n,r);case l:case v:return new o(t);case y:return(s=new(u=t).constructor(u.source,E.exec(u))).lastIndex=u.lastIndex,s;case g:return function(t,e,r){return F(e?r(H(t),!0):H(t),V,new t.constructor)}(t,n,r);case _:return i=t,$t?Object($t.call(i)):{}}var i;var u,s}(t,I,Nt,e)}}P||(P=new Tt);var z=P.get(t);if(z)return z;if(P.set(t,M),!x)var C=r?function(t){return function(t,e,r){var n=e(t);return Bt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Wt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(C||t,function(o,i){C&&(o=t[i=o]),Pt(M,i,Nt(o,e,r,n,i,t,P))}),M}function xt(t){return!(!qt(t)||(e=t,X&&X in e))&&(Jt(t)||K(t)?et:P).test(Kt(t));var e}function It(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Lt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Pt(r,a,void 0===c?t[a]:c)}return r}function zt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return xt(r)?r:void 0}At.prototype.clear=function(){this.__data__=_t?_t(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(_t){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Mt(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},St.prototype.get=function(t){var e=this.__data__,r=Mt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Mt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Mt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},kt.prototype.clear=function(){this.__data__={hash:new At,map:new(ht||St),string:new At}},kt.prototype.delete=function(t){return zt(this,t).delete(t)},kt.prototype.get=function(t){return zt(this,t).get(t)},kt.prototype.has=function(t){return zt(this,t).has(t)},kt.prototype.set=function(t,e){return zt(this,t).set(t,e),this},Tt.prototype.clear=function(){this.__data__=new St},Tt.prototype.delete=function(t){return this.__data__.delete(t)},Tt.prototype.get=function(t){return this.__data__.get(t)},Tt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof St){var o=n.__data__;if(!ht||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new kt(o)}return n.set(t,e),this};var Wt=st?B(st,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Vt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||M.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Kt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Rt(t,e){return t===e||t!=t&&e!=e}(pt&&Dt(new pt(new ArrayBuffer(1)))!=d||ht&&Dt(new ht)!=f||yt&&"[object Promise]"!=Dt(yt.resolve())||gt&&Dt(new gt)!=g||vt&&"[object WeakMap]"!=Dt(new vt))&&(Dt=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Kt(r):void 0;if(n)switch(n){case bt:return d;case dt:return f;case jt:return"[object Promise]";case mt:return g;case wt:return"[object WeakMap]"}return e});var Bt=Array.isArray;function Ht(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Jt(t)}var Ut=ft||function(){return!1};function Jt(t){var e=qt(t)?tt.call(t):"";return e==u||e==s}function qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Ht(t)?Et(t):function(t){if(!Ft(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Nt(t,!0,!0)}});const O=Array.isArray;function $(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function A(t,e){return function t(e,r,n){const o=w(e);let i,a,c,u,s;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,O(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=w(o),c=t(r(o[i],void 0,Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(l(o))for(i=0,a=(u=Object.keys(o)).length;i<a;i++){s=u[i];const e=`${n.path}.${s}`;0===n.depth&&null!=s&&(n.topmostKey=s),n.parent=w(o),c=t(r(s,o[s],Object.assign({},n,{path:$(e)})),r,Object.assign({},n,{path:$(e)})),Number.isNaN(c)?delete o[s]:o[s]=c}return o}(t,e,{})}var S="__lodash_hash_undefined__",k=9007199254740991,T="[object Function]",E="[object GeneratorFunction]",P=/^\[object .+?Constructor\]$/,M="object"==typeof p&&p&&p.Object===Object&&p,N="object"==typeof self&&self&&self.Object===Object&&self,x=M||N||Function("return this")();function I(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,C,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function L(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function z(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function C(t){return t!=t}function W(t){return function(e){return t(e)}}function D(t,e){return t.has(e)}var V,F=Array.prototype,K=Function.prototype,R=Object.prototype,B=x["__core-js_shared__"],H=(V=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",U=K.toString,J=R.hasOwnProperty,q=R.toString,G=RegExp("^"+U.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=F.splice,X=Math.max,Y=Math.min,Z=st(x,"Map"),tt=st(Object,"create");function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.__data__=new nt;++e<r;)this.add(t[e])}function it(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function at(t){return!(!lt(t)||(e=t,H&&H in e))&&(ft(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?G:P).test(function(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ct(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=k}(t.length)&&!ft(t)}(t)}(t)?t:[]}function ut(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function st(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return at(r)?r:void 0}function ft(t){var e=lt(t)?q.call(t):"";return e==T||e==E}function lt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}et.prototype.clear=function(){this.__data__=tt?tt(null):{}},et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},et.prototype.get=function(t){var e=this.__data__;if(tt){var r=e[t];return r===S?void 0:r}return J.call(e,t)?e[t]:void 0},et.prototype.has=function(t){var e=this.__data__;return tt?void 0!==e[t]:J.call(e,t)},et.prototype.set=function(t,e){return this.__data__[t]=tt&&void 0===e?S:e,this},rt.prototype.clear=function(){this.__data__=[]},rt.prototype.delete=function(t){var e=this.__data__,r=it(e,t);return!(r<0||(r==e.length-1?e.pop():Q.call(e,r,1),0))},rt.prototype.get=function(t){var e=this.__data__,r=it(e,t);return r<0?void 0:e[r][1]},rt.prototype.has=function(t){return it(this.__data__,t)>-1},rt.prototype.set=function(t,e){var r=this.__data__,n=it(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},nt.prototype.clear=function(){this.__data__={hash:new et,map:new(Z||rt),string:new et}},nt.prototype.delete=function(t){return ut(this,t).delete(t)},nt.prototype.get=function(t){return ut(this,t).get(t)},nt.prototype.has=function(t){return ut(this,t).has(t)},nt.prototype.set=function(t,e){return ut(this,t).set(t,e),this},ot.prototype.add=ot.prototype.push=function(t){return this.__data__.set(t,S),this},ot.prototype.has=function(t){return this.__data__.has(t)};var pt=function(t,e){return e=X(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=X(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=z(t,ct);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?L:I,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=z(f,W(e))),u=Y(f.length,u),c[a]=!r&&(e||o>=120&&f.length>=120)?new ot(a&&f):void 0}f=t[0];var l=-1,p=c[0];t:for(;++l<o&&s.length<u;){var h=f[l],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?D(p,y):n(s,y,r))){for(a=i;--a;){var g=c[a];if(!(g?D(g,y):n(t[a],y,r)))continue t}p&&p.push(y),s.push(h)}}return s}(e):[]});function ht(t){return"string"==typeof t?t.length>0?[t]:[]:t}var yt=h(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(c(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(i),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return s(t,e,r,!0)},a.set=function(t,e,r,n){return s(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,u;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(u in i)c(i,u)&&delete i[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),gt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function vt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+gt(t)}vt.indicator=gt;var _t=vt,bt=/[|\\{}()[\]^$+*?.]/g,dt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(bt,"\\$&")};const jt=new Map;function mt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(jt.has(n))return jt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=dt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,jt.set(n,i),i}var wt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>mt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function Ot(t,e,r){return function t(e,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(t){return null!=t}function c(t){return"Object"===g(t)}function u(t,e){return e=ht(e),Array.from(t).filter(t=>!e.some(e=>wt.isMatch(t,e,{caseSensitive:!0})))}const s=["any","anything","every","everything","all","whatever","whatevs"],f=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const l={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let p;if(p=a(n)&&c(n)?Object.assign({},l,n):Object.assign({},l),a(p.ignoreKeys)&&p.ignoreKeys?p.ignoreKeys=ht(p.ignoreKeys):p.ignoreKeys=[],a(p.ignorePaths)&&p.ignorePaths?p.ignorePaths=ht(p.ignorePaths):p.ignorePaths=[],a(p.acceptArraysIgnore)&&p.acceptArraysIgnore?p.acceptArraysIgnore=ht(p.acceptArraysIgnore):p.acceptArraysIgnore=[],p.msg="string"==typeof p.msg?p.msg.trim():p.msg,":"===p.msg[p.msg.length-1]&&(p.msg=p.msg.slice(0,p.msg.length-1).trim()),p.schema&&(Object.keys(p.schema).forEach(t=>{if(c(p.schema[t])){const e={};A(p.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return f(i)||c(i)||(e[`${t}.${o.path}`]=i),i}),delete p.schema[t],p.schema=Object.assign(p.schema,e)}}),Object.keys(p.schema).forEach(t=>{f(p.schema[t])||(p.schema[t]=[p.schema[t]]),p.schema[t]=p.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(p,l,{enforceStrictKeyset:!1},!1),p.enforceStrictKeyset)if(a(p.schema)&&Object.keys(p.schema).length>0){if(0!==u(m(Object.keys(e),Object.keys(r).concat(Object.keys(p.schema))),p.ignoreKeys).length){const t=m(Object.keys(e),Object.keys(r).concat(Object.keys(p.schema)));throw new TypeError(`${p.msg}: ${p.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${p.msg}: Both ${p.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(m(Object.keys(e),Object.keys(r)),p.ignoreKeys).length){const t=m(Object.keys(e),Object.keys(r));throw new TypeError(`${p.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==u(m(Object.keys(r),Object.keys(e)),p.ignoreKeys).length){const t=m(Object.keys(r),Object.keys(e));throw new TypeError(`${p.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const h=[];A(e,(t,n,o)=>{const a=void 0!==n?n:t,u=void 0!==n?t:void 0;if(f(h)&&h.length&&h.some(t=>o.path.startsWith(t)))return a;if(u&&p.ignoreKeys.some(t=>wt.isMatch(u,t)))return a;if(p.ignorePaths.some(t=>wt.isMatch(o.path,t)))return a;const l=!(!c(a)&&!f(a)&&f(o.parent));let y=!1;c(p.schema)&&i.call(p.schema,yt.get(o.path))&&(y=!0);let v=!1;if(c(r)&&yt.has(r,yt.get(o.path))&&(v=!0),p.enforceStrictKeyset&&l&&!y&&!v)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${p.optsVarName}.schema! To stop this error, turn off ${p.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${p.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(p,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(y){const t=ht(p.schema[o.path]).map(String).map(t=>t.toLowerCase());if(yt.set(p.schema,o.path,t),pt(t,s).length)h.push(o.path);else if(!0!==a&&!1!==a&&!t.includes(g(a).toLowerCase())||(!0===a||!1===a)&&!t.includes(String(a))&&!t.includes("boolean")){if(!f(a)||!p.acceptArrays)throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"!==g(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==g(a)?'"':""} (type: ${g(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=a.length;e<r;e++)if(!t.includes(g(a[e]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path}.${e}, the ${_t(e+1)} element (equal to ${JSON.stringify(a[e],null,0)}) is of a type ${g(a[e]).toLowerCase()}, but only the following are allowed by the ${p.optsVarName}.schema: ${t.join(", ")}`)}}else if(v){const e=yt.get(r,o.path);if(p.acceptArrays&&f(a)&&!p.acceptArraysIgnore.includes(t)){if(!a.every(e=>g(e).toLowerCase()===g(r[t]).toLowerCase()))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${g(r[t]).toLowerCase()}-type`)}else if(g(a)!==g(e))throw new TypeError(`${p.msg}: ${p.optsVarName}.${o.path} was customised to ${"string"===g(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===g(a).toLowerCase()?"":'"'} which is not ${g(e).toLowerCase()} but ${g(a).toLowerCase()}`)}return a})}(t,e,r)}wt.isMatch=((t,e,r)=>{const n=mt(e,r),o=n.test(t);return n.negated?!o:o});var $t=Array.isArray;return function(e,r,n){if(void 0===e)throw new Error("object-all-values-equal-to: [THROW_ID_01] The first input is undefined! Please provide the first argument.");if(void 0===r)throw new Error("object-all-values-equal-to: [THROW_ID_02] The second input is undefined! Please provide the second argument.");if(null!=n&&!l(n))throw new Error("object-all-values-equal-to: [THROW_ID_03] The third argument, options object, was given not as a plain object but as a ".concat(t(n),", equal to:\n").concat(JSON.stringify(n,null,4)));var o={arraysMustNotContainPlaceholders:!0},i=Object.assign({},o,n);return Ot(i,o,{msg:"object-all-values-equal-to: [THROW_ID_04*]"}),function t(e,r,n){if($t(e)){if(0===e.length)return!0;if(n.arraysMustNotContainPlaceholders&&e.length>0&&e.some(function(t){return y(t,r)}))return!1;for(var o=e.length;o--;)if(!t(e[o],r,n))return!1;return!0}if(l(e)){var i=Object.keys(e);if(0===i.length)return!0;for(var a=i.length;a--;)if(!t(e[i[a]],r,n))return!1;return!0}return y(e,r)}(e,r,i)}});
