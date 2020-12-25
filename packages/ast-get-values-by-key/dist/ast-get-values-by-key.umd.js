/**
 * ast-get-values-by-key
 * Read or edit parsed HTML (or AST in general)
 * Version: 2.8.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-get-values-by-key/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).astGetValuesByKey={})}(this,(function(t){"use strict";function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;arguments.length>n;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);r>e;e++)n[e]=t[e];return n}function a(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0;return function(){return t.length>n?{done:!1,value:t[n++]}:{done:!0}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t){var r={exports:{}};return t(r,r.exports),r.exports}((function(t,r){var e="__lodash_hash_undefined__",n=9007199254740991,o="[object Arguments]",a="[object Boolean]",c="[object Date]",u="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",v="[object RegExp]",h="[object Set]",b="[object String]",d="[object Symbol]",_="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",O="[object Float32Array]",w="[object Float64Array]",m="[object Int8Array]",A="[object Int16Array]",S="[object Int32Array]",x="[object Uint8Array]",P="[object Uint8ClampedArray]",E="[object Uint16Array]",T="[object Uint32Array]",$=/\w*$/,I=/^\[object .+?Constructor\]$/,M=/^(?:0|[1-9]\d*)$/,N={};N[o]=N["[object Array]"]=N[g]=N[j]=N[a]=N[c]=N[O]=N[w]=N[m]=N[A]=N[S]=N[s]=N[l]=N[p]=N[v]=N[h]=N[b]=N[d]=N[x]=N[P]=N[E]=N[T]=!0,N["[object Error]"]=N[u]=N[_]=!1;var k="object"==typeof self&&self&&self.Object===Object&&self,B="object"==typeof i&&i&&i.Object===Object&&i||k||Function("return this")(),D=r&&!r.nodeType&&r,F=D&&t&&!t.nodeType&&t,U=F&&F.exports===D;function K(t,r){return t.set(r[0],r[1]),t}function R(t,r){return t.add(r),t}function C(t,r,e,n){var o=-1,a=t?t.length:0;for(n&&a&&(e=t[++o]);++o<a;)e=r(e,t[o],o,t);return e}function V(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function z(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function G(t,r){return function(e){return t(r(e))}}function L(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var W,J=Array.prototype,q=Function.prototype,H=Object.prototype,Q=B["__core-js_shared__"],X=(W=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"",Y=q.toString,Z=H.hasOwnProperty,tt=H.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=U?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,at=G(Object.getPrototypeOf,Object),it=Object.create,ct=H.propertyIsEnumerable,ut=J.splice,ft=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=G(Object.keys,Object),pt=Ft(B,"DataView"),yt=Ft(B,"Map"),vt=Ft(B,"Promise"),ht=Ft(B,"Set"),bt=Ft(B,"WeakMap"),dt=Ft(Object,"create"),_t=Vt(pt),gt=Vt(yt),jt=Vt(vt),Ot=Vt(ht),wt=Vt(bt),mt=nt?nt.prototype:void 0,At=mt?mt.valueOf:void 0;function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){this.__data__=new xt(t)}function Tt(t,r){var e=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Lt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==o)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,a=!!n;for(var i in t)!r&&!Z.call(t,i)||a&&("length"==i||Rt(i,n))||e.push(i);return e}function $t(t,r,e){var n=t[r];Z.call(t,r)&&zt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function It(t,r){for(var e=t.length;e--;)if(zt(t[e][0],r))return e;return-1}function Mt(t,r,e,n,i,y,_){var I;if(n&&(I=y?n(t,i,y,_):n(t)),void 0!==I)return I;if(!qt(t))return t;var M=Gt(t);if(M){if(I=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,I)}else{var k=Kt(t),B=k==u||k==f;if(Wt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(k==p||k==o||B&&!y){if(V(t))return y?t:{};if(I=function(t){return"function"!=typeof t.constructor||Ct(t)?{}:(r=at(t),qt(r)?it(r):{});var r}(B?{}:t),!r)return function(t,r){return Bt(t,Ut(t),r)}(t,function(t,r){return t&&Bt(r,Ht(r),t)}(I,t))}else{if(!N[k])return y?t:{};I=function(t,r,e,n){var o=t.constructor;switch(r){case g:return kt(t);case a:case c:return new o(+t);case j:return function(t,r){var e=r?kt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case O:case w:case m:case A:case S:case x:case P:case E:case T:return function(t,r){var e=r?kt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case s:return function(t,r,e){return C(r?e(z(t),!0):z(t),K,new t.constructor)}(t,n,e);case l:case b:return new o(t);case v:return function(t){var r=new t.constructor(t.source,$.exec(t));return r.lastIndex=t.lastIndex,r}(t);case h:return function(t,r,e){return C(r?e(L(t),!0):L(t),R,new t.constructor)}(t,n,e);case d:return i=t,At?Object(At.call(i)):{}}var i}(t,k,Mt,r)}}_||(_=new Et);var D=_.get(t);if(D)return D;if(_.set(t,I),!M)var F=e?function(t){return function(t,r,e){var n=r(t);return Gt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Ht,Ut)}(t):Ht(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(F||t,(function(o,a){F&&(o=t[a=o]),$t(I,a,Mt(o,r,e,n,a,t,_))})),I}function Nt(t){return!(!qt(t)||(r=t,X&&X in r))&&(Jt(t)||V(t)?rt:I).test(Vt(t));var r}function kt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Bt(t,r,e,n){e||(e={});for(var o=-1,a=r.length;++o<a;){var i=r[o],c=n?n(e[i],t[i],i,e,t):void 0;$t(e,i,void 0===c?t[i]:c)}return e}function Dt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Ft(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Nt(e)?e:void 0}St.prototype.clear=function(){this.__data__=dt?dt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var r=this.__data__;if(dt){var n=r[t];return n===e?void 0:n}return Z.call(r,t)?r[t]:void 0},St.prototype.has=function(t){var r=this.__data__;return dt?void 0!==r[t]:Z.call(r,t)},St.prototype.set=function(t,r){return this.__data__[t]=dt&&void 0===r?e:r,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var r=this.__data__,e=It(r,t);return e>=0&&(e==r.length-1?r.pop():ut.call(r,e,1),!0)},xt.prototype.get=function(t){var r=this.__data__,e=It(r,t);return 0>e?void 0:r[e][1]},xt.prototype.has=function(t){return It(this.__data__,t)>-1},xt.prototype.set=function(t,r){var e=this.__data__,n=It(e,t);return 0>n?e.push([t,r]):e[n][1]=r,this},Pt.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||xt),string:new St}},Pt.prototype.delete=function(t){return Dt(this,t).delete(t)},Pt.prototype.get=function(t){return Dt(this,t).get(t)},Pt.prototype.has=function(t){return Dt(this,t).has(t)},Pt.prototype.set=function(t,r){return Dt(this,t).set(t,r),this},Et.prototype.clear=function(){this.__data__=new xt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var e=this.__data__;if(e instanceof xt){var n=e.__data__;if(!yt||199>n.length)return n.push([t,r]),this;e=this.__data__=new Pt(n)}return e.set(t,r),this};var Ut=ft?G(ft,Object):function(){return[]},Kt=function(t){return tt.call(t)};function Rt(t,r){return!!(r=null==r?n:r)&&("number"==typeof t||M.test(t))&&t>-1&&t%1==0&&r>t}function Ct(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||H)}function Vt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,r){return t===r||t!=t&&r!=r}(pt&&Kt(new pt(new ArrayBuffer(1)))!=j||yt&&Kt(new yt)!=s||vt&&Kt(vt.resolve())!=y||ht&&Kt(new ht)!=h||bt&&Kt(new bt)!=_)&&(Kt=function(t){var r=tt.call(t),e=r==p?t.constructor:void 0,n=e?Vt(e):void 0;if(n)switch(n){case _t:return j;case gt:return s;case jt:return y;case Ot:return h;case wt:return _}return r});var Gt=Array.isArray;function Lt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&n>=t}(t.length)&&!Jt(t)}var Wt=st||function(){return!1};function Jt(t){var r=qt(t)?tt.call(t):"";return r==u||r==f}function qt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Ht(t){return Lt(t)?Tt(t):function(t){if(!Ct(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return Mt(t,!0,!0)}}));var u,f,s=Object.prototype,l=Function.prototype.toString,p=s.hasOwnProperty,y=l.call(Object),v=s.toString,h=(u=Object.getPrototypeOf,f=Object,function(t){return u(f(t))});var b=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=v.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=h(t);if(null===r)return!0;var e=p.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&l.call(e)==y};function d(t){if(t.includes(".")){var r=t.lastIndexOf(".");if(!t.slice(0,r).includes("."))return t.slice(0,r);for(var e=r-1;e--;)if("."===t[e])return t.slice(e+1,r)}return null}var _=new Map;function g(t,r){r=n({caseSensitive:!1},r);var e=t+JSON.stringify(r);if(_.has(e))return _.get(e);var o="!"===t[0];o&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");var a=RegExp("^"+t+"$",r.caseSensitive?"":"i");return a.negated=o,_.set(e,a),a}var j=function(t,r,e){if(!Array.isArray(t)||!Array.isArray(r))throw new TypeError("Expected two arrays, got "+typeof t+" "+typeof r);if(0===r.length)return t;var n="!"===r[0][0];r=r.map((function(t){return g(t,e)}));for(var o,i=[],c=a(t);!(o=c()).done;){for(var u,f=o.value,s=n,l=a(r);!(u=l()).done;){var p=u.value;p.test(f)&&(s=!p.negated)}s&&i.push(f)}return i};j.isMatch=function(t,r,e){var n=Array.isArray(t)?t:[t],o=Array.isArray(r)?r:[r];return n.some((function(t){return o.every((function(r){var n=g(r,e),o=n.test(t);return n.negated?!o:o}))}))};t.getByKey=function(t,r,e){var o;void 0!==e&&(o=Array.isArray(e)?c(e):[c(e)]);var a=[],i=function t(r,e,o,a){var i,u=c(r),f=n({depth:-1,path:""},o);if(f.depth+=1,Array.isArray(u))for(var s=0,l=u.length;l>s&&!a.now;s++){var p=f.path?f.path+"."+s:""+s;void 0!==u[s]?(f.parent=c(u),f.parentType="array",f.parentKey=d(p),i=t(e(u[s],void 0,n(n({},f),{},{path:p}),a),e,n(n({},f),{},{path:p}),a),Number.isNaN(i)&&u.length>s?(u.splice(s,1),s-=1):u[s]=i):u.splice(s,1)}else if(b(u))for(var y in u){if(a.now&&null!=y)break;var v=f.path?f.path+"."+y:y;0===f.depth&&null!=y&&(f.topmostKey=y),f.parent=c(u),f.parentType="object",f.parentKey=d(v),i=t(e(y,u[y],n(n({},f),{},{path:v}),a),e,n(n({},f),{},{path:v}),a),Number.isNaN(i)?delete u[y]:u[y]=i}return u}(t,(function(t,e,n){var i=void 0!==e?e:t;if(void 0!==e&&j.isMatch(t,r,{caseSensitive:!0}))if(void 0===o)a.push({val:e,path:n.path});else if(o.length>0)return o.shift();return i}),{},{now:!1});return void 0===o?a:i},t.version="2.8.1",Object.defineProperty(t,"__esModule",{value:!0})}));
