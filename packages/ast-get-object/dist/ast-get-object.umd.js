/**
 * @name ast-get-object
 * @fileoverview Getter/setter for nested parsed HTML AST's, querying objects by key/value pairs
 * @version 3.0.2
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-get-object/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).astGetObject={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={exports:{}};!function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",u="[object Function]",s="[object GeneratorFunction]",f="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",h="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",v="[object WeakMap]",_="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",m="[object Float64Array]",O="[object Int8Array]",S="[object Int16Array]",A="[object Int32Array]",$="[object Uint8Array]",T="[object Uint8ClampedArray]",W="[object Uint16Array]",M="[object Uint32Array]",k=/\w*$/,x=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,P={};P[i]=P["[object Array]"]=P[_]=P[j]=P[a]=P[c]=P[w]=P[m]=P[O]=P[S]=P[A]=P[f]=P[l]=P[p]=P[h]=P[g]=P[d]=P[b]=P[$]=P[T]=P[W]=P[M]=!0,P["[object Error]"]=P[u]=P[v]=!1;var F="object"==typeof self&&self&&self.Object===Object&&self,N="object"==typeof e&&e&&e.Object===Object&&e||F||Function("return this")(),I=r&&!r.nodeType&&r,D=I&&t&&!t.nodeType&&t,H=D&&D.exports===I;function J(t,e){return t.set(e[0],e[1]),t}function L(t,e){return t.add(e),t}function R(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function z(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function B(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function U(t,e){return function(r){return t(e(r))}}function C(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var V,K=Array.prototype,G=Function.prototype,q=Object.prototype,Q=N["__core-js_shared__"],X=(V=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=G.toString,Z=q.hasOwnProperty,tt=q.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=H?N.Buffer:void 0,nt=N.Symbol,ot=N.Uint8Array,it=U(Object.getPrototypeOf,Object),at=Object.create,ct=q.propertyIsEnumerable,ut=K.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=U(Object.keys,Object),pt=Dt(N,"DataView"),yt=Dt(N,"Map"),ht=Dt(N,"Promise"),gt=Dt(N,"Set"),dt=Dt(N,"WeakMap"),bt=Dt(Object,"create"),vt=zt(pt),_t=zt(yt),jt=zt(ht),wt=zt(gt),mt=zt(dt),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Wt(t){this.__data__=new $t(t)}function Mt(t,e){var r=Ut(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ct(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Lt(a,n))||r.push(a);return r}function kt(t,e,r){var n=t[e];Z.call(t,e)&&Bt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function xt(t,e){for(var r=t.length;r--;)if(Bt(t[r][0],e))return r;return-1}function Et(t,e,r,n,o,y,v){var x;if(n&&(x=y?n(t,o,y,v):n(t)),void 0!==x)return x;if(!Gt(t))return t;var E=Ut(t);if(E){if(x=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,x)}else{var F=Jt(t),N=F==u||F==s;if(Vt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(F==p||F==i||N&&!y){if(z(t))return y?t:{};if(x=function(t){return"function"!=typeof t.constructor||Rt(t)?{}:(e=it(t),Gt(e)?at(e):{});var e}(N?{}:t),!e)return function(t,e){return Nt(t,Ht(t),e)}(t,function(t,e){return t&&Nt(e,qt(e),t)}(x,t))}else{if(!P[F])return y?t:{};x=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Ft(t);case a:case c:return new o(+t);case j:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case m:case O:case S:case A:case $:case T:case W:case M:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return R(e?r(B(t),!0):B(t),J,new t.constructor)}(t,n,r);case l:case d:return new o(t);case h:return function(t){var e=new t.constructor(t.source,k.exec(t));return e.lastIndex=t.lastIndex,e}(t);case g:return function(t,e,r){return R(e?r(C(t),!0):C(t),L,new t.constructor)}(t,n,r);case b:return i=t,St?Object(St.call(i)):{}}var i}(t,F,Et,e)}}v||(v=new Wt);var I=v.get(t);if(I)return I;if(v.set(t,x),!E)var D=r?function(t){return function(t,e,r){var n=e(t);return Ut(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,qt,Ht)}(t):qt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(D||t,(function(o,i){D&&(o=t[i=o]),kt(x,i,Et(o,e,r,n,i,t,v))})),x}function Pt(t){return!(!Gt(t)||(e=t,X&&X in e))&&(Kt(t)||z(t)?et:x).test(zt(t));var e}function Ft(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Nt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;kt(r,a,void 0===c?t[a]:c)}return r}function It(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Pt(r)?r:void 0}At.prototype.clear=function(){this.__data__=bt?bt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},$t.prototype.clear=function(){this.__data__=[]},$t.prototype.delete=function(t){var e=this.__data__,r=xt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},$t.prototype.get=function(t){var e=this.__data__,r=xt(e,t);return r<0?void 0:e[r][1]},$t.prototype.has=function(t){return xt(this.__data__,t)>-1},$t.prototype.set=function(t,e){var r=this.__data__,n=xt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new At,map:new(yt||$t),string:new At}},Tt.prototype.delete=function(t){return It(this,t).delete(t)},Tt.prototype.get=function(t){return It(this,t).get(t)},Tt.prototype.has=function(t){return It(this,t).has(t)},Tt.prototype.set=function(t,e){return It(this,t).set(t,e),this},Wt.prototype.clear=function(){this.__data__=new $t},Wt.prototype.delete=function(t){return this.__data__.delete(t)},Wt.prototype.get=function(t){return this.__data__.get(t)},Wt.prototype.has=function(t){return this.__data__.has(t)},Wt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof $t){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Tt(n)}return r.set(t,e),this};var Ht=st?U(st,Object):function(){return[]},Jt=function(t){return tt.call(t)};function Lt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function Rt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||q)}function zt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Bt(t,e){return t===e||t!=t&&e!=e}(pt&&Jt(new pt(new ArrayBuffer(1)))!=j||yt&&Jt(new yt)!=f||ht&&Jt(ht.resolve())!=y||gt&&Jt(new gt)!=g||dt&&Jt(new dt)!=v)&&(Jt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?zt(r):void 0;if(n)switch(n){case vt:return j;case _t:return f;case jt:return y;case wt:return g;case mt:return v}return e});var Ut=Array.isArray;function Ct(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Kt(t)}var Vt=ft||function(){return!1};function Kt(t){var e=Gt(t)?tt.call(t):"";return e==u||e==s}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function qt(t){return Ct(t)?Mt(t):function(t){if(!Rt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Et(t,!0,!0)}}(r,r.exports);var n=r.exports;var o,i,a=Object.prototype,c=Function.prototype.toString,u=a.hasOwnProperty,s=c.call(Object),f=a.toString,l=(o=Object.getPrototypeOf,i=Object,function(t){return o(i(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=f.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=l(t);if(null===e)return!0;var r=u.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&c.call(r)==s},y={exports:{}};!function(t,r){t.exports=function(){var t="function"==typeof Promise,r="object"==typeof self?self:e,n="undefined"!=typeof Symbol,o="undefined"!=typeof Map,i="undefined"!=typeof Set,a="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,u="undefined"!=typeof DataView,s=n&&void 0!==Symbol.iterator,f=n&&void 0!==Symbol.toStringTag,l=i&&"function"==typeof Set.prototype.entries,p=o&&"function"==typeof Map.prototype.entries,y=l&&Object.getPrototypeOf((new Set).entries()),h=p&&Object.getPrototypeOf((new Map).entries()),g=s&&"function"==typeof Array.prototype[Symbol.iterator],d=g&&Object.getPrototypeOf([][Symbol.iterator]()),b=s&&"function"==typeof String.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf(""[Symbol.iterator]()),_=8,j=-1;function w(e){var n=typeof e;if("object"!==n)return n;if(null===e)return"null";if(e===r)return"global";if(Array.isArray(e)&&(!1===f||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var s=f&&e[Symbol.toStringTag];if("string"==typeof s)return s;var l=Object.getPrototypeOf(e);return l===RegExp.prototype?"RegExp":l===Date.prototype?"Date":t&&l===Promise.prototype?"Promise":i&&l===Set.prototype?"Set":o&&l===Map.prototype?"Map":c&&l===WeakSet.prototype?"WeakSet":a&&l===WeakMap.prototype?"WeakMap":u&&l===DataView.prototype?"DataView":o&&l===h?"Map Iterator":i&&l===y?"Set Iterator":g&&l===d?"Array Iterator":b&&l===v?"String Iterator":null===l?"Object":Object.prototype.toString.call(e).slice(_,j)}return w}()}(y);var h=y.exports;
/**
 * @name ast-monkey-util
 * @fileoverview Utility library of AST helper functions
 * @version 2.0.2
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-util/}
 */function g(t){if(t.includes(".")){const e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(let r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}
/**
 * @name ast-monkey-traverse
 * @fileoverview Utility library to traverse AST
 * @version 3.0.2
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-traverse/}
 */
/**
 * @name ast-contains-only-empty-space
 * @fileoverview Does AST contain only empty space?
 * @version 3.0.2
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-contains-only-empty-space/}
 */
function d(t){if("string"==typeof t)return!t.trim();if(!["object","string"].includes(typeof t)||!t)return!1;let e=!0;return t=function t(e,r,o,i){const a=n(e);let c;const u={depth:-1,path:"",...o};if(u.depth+=1,Array.isArray(a))for(let e=0,o=a.length;e<o&&!i.now;e++){const o=u.path?`${u.path}.${e}`:`${e}`;void 0!==a[e]?(u.parent=n(a),u.parentType="array",u.parentKey=g(o),c=t(r(a[e],void 0,{...u,path:o},i),r,{...u,path:o},i),Number.isNaN(c)&&e<a.length?(a.splice(e,1),e-=1):a[e]=c):a.splice(e,1)}else if(p(a))for(const e in a){if(i.now&&null!=e)break;const o=u.path?`${u.path}.${e}`:e;0===u.depth&&null!=e&&(u.topmostKey=e),u.parent=n(a),u.parentType="object",u.parentKey=g(o),c=t(r(e,a[e],{...u,path:o},i),r,{...u,path:o},i),Number.isNaN(c)?delete a[e]:a[e]=c}return a}(t,((t,r,n,o)=>{const i=void 0!==r?r:t;return"string"==typeof i&&i.trim()&&(e=!1,o.now=!0),i}),{},{now:!1}),e}const b=new Map,v=(t,e)=>{if(!Array.isArray(t))switch(typeof t){case"string":t=[t];break;case"undefined":t=[];break;default:throw new TypeError(`Expected '${e}' to be a string or an array, but got a type of '${typeof t}'`)}return t.filter((t=>{if("string"!=typeof t){if(void 0===t)return!1;throw new TypeError(`Expected '${e}' to be an array of strings, but found a type of '${typeof t}' in the array`)}return!0}))},_=(t,e)=>{e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(b.has(r))return b.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,b.set(r,o),o};function j(t,e,r){return((t,e,r,n)=>{if(t=v(t,"inputs"),0===(e=v(e,"patterns")).length)return[];e=e.map((t=>_(t,r)));const{allPatterns:o}=r||{},i=[];for(const r of t){let t;const a=[...e].fill(!1);for(const[n,o]of e.entries())if(o.test(r)&&(a[n]=!0,t=!o.negated,!t))break;if(!(!1===t||void 0===t&&e.some((t=>!t.negated))||o&&a.some(((t,r)=>!t&&!e[r].negated)))&&(i.push(r),n))break}return i})(t,e,r,!0).length>0}
/**
 * @name ast-compare
 * @fileoverview Compare anything: AST, objects, arrays, strings and nested thereof
 * @version 3.0.2
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-compare/}
 */function w(t,e,r){let n,o,i,a=0;const c={hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1,...r};if(c.hungryForWhitespace&&c.matchStrictly&&p(t)&&d(t)&&p(e)&&!Object.keys(e).length)return!0;if((!c.hungryForWhitespace||c.hungryForWhitespace&&!d(t)&&d(e))&&p(t)&&0!==Object.keys(t).length&&p(e)&&0===Object.keys(e).length||h(t)!==h(e)&&(!c.hungryForWhitespace||c.hungryForWhitespace&&!d(t)))return!1;if("string"==typeof t&&"string"==typeof e)return!!(c.hungryForWhitespace&&d(t)&&d(e))||(c.verboseWhenMismatches?t===e||`Given string ${e} is not matched! We have ${t} on the other end.`:c.useWildcards?j(t,e,{caseSensitive:!0}):t===e);if(Array.isArray(t)&&Array.isArray(e)){if(c.hungryForWhitespace&&d(e)&&(!c.matchStrictly||c.matchStrictly&&t.length===e.length))return!0;if(!c.hungryForWhitespace&&e.length>t.length||c.matchStrictly&&e.length!==t.length)return!!c.verboseWhenMismatches&&`The length of a given array, ${JSON.stringify(e,null,4)} is ${e.length} but the length of an array on the other end, ${JSON.stringify(t,null,4)} is ${t.length}`;if(0===e.length)return 0===t.length||!!c.verboseWhenMismatches&&`The given array has no elements, but the array on the other end, ${JSON.stringify(t,null,4)} does have some`;for(let r=0,n=e.length;r<n;r++){i=!1;for(let n=a,o=t.length;n<o;n++)if(a+=1,!0===w(t[n],e[r],c)){i=!0;break}if(!i)return!!c.verboseWhenMismatches&&`The given array ${JSON.stringify(e,null,4)} is not a subset of an array on the other end, ${JSON.stringify(t,null,4)}`}}else{if(!p(t)||!p(e))return!(!(c.hungryForWhitespace&&d(t)&&d(e))||c.matchStrictly&&(!c.matchStrictly||(u=e,p(u)?Object.keys(u).length:!Array.isArray(u)&&"string"!=typeof u||u.length)))||t===e;if(n=new Set(Object.keys(e)),o=new Set(Object.keys(t)),c.matchStrictly&&n.size!==o.size){if(!c.verboseWhenMismatches)return!1;const t=new Set([...n].filter((t=>!o.has(t)))),e=t.size?` First object has unique keys: ${JSON.stringify(t,null,4)}.`:"",r=new Set([...o].filter((t=>!n.has(t))));return`When matching strictly, we found that both objects have different amount of keys.${e}${r.size?` Second object has unique keys:\n        ${JSON.stringify(r,null,4)}.`:""}`}for(const r of n){if(!Object.prototype.hasOwnProperty.call(t,r))return!c.useWildcards||c.useWildcards&&!r.includes("*")?!!c.verboseWhenMismatches&&`The given object has key "${r}" which the other-one does not have.`:!!Object.keys(t).some((t=>j(t,r,{caseSensitive:!0})))||!!c.verboseWhenMismatches&&`The given object has key "${r}" which the other-one does not have.`;if(null!=t[r]&&h(t[r])!==h(e[r])){if(!(d(t[r])&&d(e[r])&&c.hungryForWhitespace))return!!c.verboseWhenMismatches&&`The given key ${r} is of a different type on both objects. On the first-one, it's ${h(e[r])}, on the second-one, it's ${h(t[r])}`}else if(!0!==w(t[r],e[r],c))return!!c.verboseWhenMismatches&&`The given piece ${JSON.stringify(e[r],null,4)} and ${JSON.stringify(t[r],null,4)} don't match.`}}var u;return!0}function m(t){return null!=t}function O(t,e,r,o=[]){if(!m(t))throw new Error("ast-get-object: [THROW_ID_01] First argument is missing!");if(!m(e))throw new Error("ast-get-object: [THROW_ID_02] Second argument is missing!");let i=!1;m(r)&&Array.isArray(r)&&(i=!0);let a=n(t);return p(a)?w(a,e)?i?r.length>0&&(a=r[0],r.shift()):o.push(a):Object.keys(a).forEach((t=>{(Array.isArray(a[t])||p(a[t]))&&(i?a[t]=O(a[t],e,r,o):O(a[t],e,r,o))})):Array.isArray(a)&&a.forEach(((t,n)=>{(p(a[n])||Array.isArray(a[n]))&&(i?a[n]=O(a[n],e,r,o):O(a[n],e,r,o))})),!1!==(c=r)&&m(c)?a:o;var c}t.getObj=function(t,e,r){return O(t,e,r)},t.version="3.0.2",Object.defineProperty(t,"__esModule",{value:!0})}));
