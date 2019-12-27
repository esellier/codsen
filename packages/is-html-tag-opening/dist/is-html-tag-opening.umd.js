/**
 * is-html-tag-opening
 * Is given opening bracket a beginning of a tag?
 * Version: 1.5.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-tag-opening
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).isHtmlTagOpening=e()}(this,(function(){"use strict";function t(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function e(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}function r(t){return null!=t}function n(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function o(n,o,i,a,c){const u="function"==typeof i?i():i;if(o>=n.length&&c&&"EOL"===u)return u;if(!(o<=n.length)){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${o} beyond the input string length, ${n.length}.`)}{let s=c?1:i.length;for(let c=o,u=n.length;c<u;c++){let o=n[c];if(t(n[c])&&e(n[c+1])&&(o=n[c]+n[c+1]),e(n[c])&&t(n[c-1])&&(o=n[c-1]+n[c]),a.trimBeforeMatching&&""===n[c].trim())continue;if(!a.i&&a.trimCharsBeforeMatching.includes(o)||a.i&&a.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(o.toLowerCase())){2===o.length&&(c+=1);continue}let u=i[i.length-s];if(t(u)&&r(i[i.length-s+1])&&e(i[i.length-s+1])&&(u=i[i.length-s]+i[i.length-s+1]),!(!a.i&&o===u||a.i&&o.toLowerCase()===u.toLowerCase()))return!1;if(s-=o.length,s<1){let a=c-i.length+o.length;return a>=0&&e(n[a])&&r(n[a-1])&&t(n[a-1])&&(a-=1),a>=0?a:0}2===o.length&&t(n[c])&&(c+=1)}if(s>0)return!(!c||"EOL"!==u)}}function i(r,n,o,i,a){const c="function"==typeof o?o():o;if(n<0&&a&&"EOL"===c)return c;if(n>=r.length){if(i.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${r.length} but the second argument is beyond it:\n${JSON.stringify(n,null,4)}`)}let u=a?1:o.length;for(let c=n+1;c--;){if(i.trimBeforeMatching&&""===r[c].trim()){if(0===c&&a&&"EOL"===o)return!0;continue}let n=r[c];if(e(r[c])&&t(r[c-1])?n=r[c-1]+r[c]:t(r[c])&&e(r[c+1])&&(n=r[c]+r[c+1]),!i.i&&i.trimCharsBeforeMatching.includes(n)||i.i&&i.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(n.toLowerCase())){if(2===n.length&&(c-=1),a&&"EOL"===o&&0===c)return!0;continue}let s=o[u-1];if(e(s)&&(s=`${o[u-2]}${o[u-1]}`,u-=1,c-=1),!(!i.i&&n===s||i.i&&n.toLowerCase()===s.toLowerCase()))return!1;if(u-=1,u<1)return c>=0?c:0}return u>0?!(!a||"EOL"!==c):void 0}function a(a,c,u,s){return function(a,c,u,s,f){if("object"==typeof f&&null!==f&&Object.prototype.hasOwnProperty.call(f,"trimBeforeMatching")&&"boolean"!=typeof f.trimBeforeMatching)throw new Error(`string-match-left-right/${a}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(f.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const l=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},f);var h;let g,p,d,y;if(l.trimCharsBeforeMatching="string"==typeof(h=l.trimCharsBeforeMatching)?h.length>0?[h]:[]:h,l.trimCharsBeforeMatching=l.trimCharsBeforeMatching.map(t=>"string"==typeof t?t:String(t)),l.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!n(t)&&(g=e,p=t,!0)))throw new Error(`string-match-left-right/${a}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${g} is longer than 1 character, ${p.length} (equals to ${p}). Please split it into separate characters and put into array as separate elements.`);if("string"!=typeof c){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof c}, equal to:\n${JSON.stringify(c,null,4)}`)}if(0===c.length){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!(Number.isInteger(u)&&u>=0)){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof u}, equal to:\n${JSON.stringify(u,null,4)}`)}if("string"==typeof s)d=[s];else if(Array.isArray(s))d=s;else if(r(s)){if("function"!=typeof s)throw new Error(`string-match-left-right/${a}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`);d=[],d.push(s)}else d=s;if(r(f)&&"object"!=typeof f)throw new Error(`string-match-left-right/${a}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof f}", and equal to:\n${JSON.stringify(f,null,4)}`);if(!r(d)||!Array.isArray(d)||Array.isArray(d)&&!d.length||Array.isArray(d)&&1===d.length&&"string"==typeof d[0]&&0===d[0].trim().length){if("function"==typeof l.cb){let r,n=u;if("matchRight"===a&&t(c[u])&&e(c[u+1])&&(n+=1),"matchLeftIncl"!==a&&"matchRight"!==a||(n+=1),a.startsWith("matchLeft"))for(let o=n;o--;){if(e(c[o])&&t(c[o-1]))continue;let n=c[o];if(t(c[o])&&e(c[o+1])&&(n=c[o]+c[o+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&void 0!==n&&""!==n.trim())&&(0===l.trimCharsBeforeMatching.length||void 0!==n&&!l.trimCharsBeforeMatching.includes(n))){r=o;break}e(c[o-1])&&t(c[o-2])&&(o-=1)}else if(a.startsWith("matchRight"))for(let o=n;o<c.length;o++){let n=c[o];if(t(c[o])&&e(c[o+1])&&(n=c[o]+c[o+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&""!==n.trim())&&(0===l.trimCharsBeforeMatching.length||!l.trimCharsBeforeMatching.includes(n))){r=o;break}t(c[o])&&e(c[o+1])&&(o+=1)}if(void 0===r)return!1;let o=c[r];t(c[r])&&e(c[r+1])&&(o=c[r]+c[r+1]),e(c[r])&&t(c[r-1])&&(o=c[r-1]+c[r],r-=1);let i,s=r+1;return t(c[r])&&e(c[r+1])&&(s+=1),s&&s>0&&(i=c.slice(0,s)),a.startsWith("matchLeft")?l.cb(o,i,r):(r&&r>0&&(i=c.slice(r)),l.cb(o,i,r))}let n="";throw r(f)||(n=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${a}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${n}`)}if(a.startsWith("matchLeft")){for(let o=0,s=d.length;o<s;o++){y="function"==typeof d[o];const s=d[o];let f,h,g="",p=u;"matchLeft"===a&&(n(c[o-1])&&n(c[o-2])?p-=2:p-=1);const b=i(c,p,s,l,y);if(b&&y&&"function"==typeof s&&"EOL"===s())return!(!s()||l.cb&&!l.cb(f,g,h))&&s();if(r(b)&&b>0&&(h=b-1,f=c[h],g=c.slice(0,b)),e(c[h])&&r(c[h-1])&&t(c[h-1])&&(h-=1,f=c[h-1]+c[h]),t(c[h])&&r(c[h+1])&&e(c[h+1])&&(f=c[h]+c[h+1],g=c.slice(0,h+2)),!1!==b&&(!l.cb||l.cb(f,g,h)))return s}return!1}for(let n=0,i=d.length;n<i;n++){y="function"==typeof d[n];const i=d[n];let s=u+("matchRight"===a?1:0);"matchRight"===a&&t(c[s-1])&&e(c[s])&&(s+=1);const f=o(c,s,i,l,y);if(f&&y&&"function"==typeof i&&"EOL"===i()){let t,e,r;return!(!i()||l.cb&&!l.cb(t,e,r))&&i()}let h,g,p;if(r(f)&&r(c[f+i.length-1])&&(h=f+i.length,g=c[h],t(c[h])&&e(c[h+1])&&(g=c[h]+c[h+1])),r(h)&&h>=0&&(p=c.slice(h)),!1!==f&&(!l.cb||l.cb(g,p,h)))return i}return!1}("matchRight",a,c,u,s)}Function.prototype.toString.call(Object);var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e){t(e={exports:{}},e.exports)}((function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",h="[object Number]",g="[object Object]",p="[object RegExp]",d="[object Set]",y="[object String]",b="[object Symbol]",m="[object ArrayBuffer]",_="[object DataView]",v="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",A="[object Int32Array]",C="[object Uint8Array]",M="[object Uint8ClampedArray]",$="[object Uint16Array]",B="[object Uint32Array]",x=/\w*$/,E=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,I={};I[i]=I["[object Array]"]=I[m]=I[_]=I[a]=I[u]=I[v]=I[w]=I[j]=I[O]=I[A]=I[l]=I[h]=I[g]=I[p]=I[d]=I[y]=I[b]=I[C]=I[M]=I[$]=I[B]=!0,I["[object Error]"]=I[s]=I["[object WeakMap]"]=!1;var T="object"==typeof c&&c&&c.Object===Object&&c,k="object"==typeof self&&self&&self.Object===Object&&self,S=T||k||Function("return this")(),R=e&&!e.nodeType&&e,W=R&&t&&!t.nodeType&&t,D=W&&W.exports===R;function H(t,e){return t.set(e[0],e[1]),t}function P(t,e){return t.add(e),t}function F(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function q(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function N(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function U(t,e){return function(r){return t(e(r))}}function J(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var z,V=Array.prototype,G=Function.prototype,K=Object.prototype,Q=S["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=G.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=D?S.Buffer:void 0,nt=S.Symbol,ot=S.Uint8Array,it=U(Object.getPrototypeOf,Object),at=Object.create,ct=K.propertyIsEnumerable,ut=V.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=U(Object.keys,Object),ht=Wt(S,"DataView"),gt=Wt(S,"Map"),pt=Wt(S,"Promise"),dt=Wt(S,"Set"),yt=Wt(S,"WeakMap"),bt=Wt(Object,"create"),mt=qt(ht),_t=qt(gt),vt=qt(pt),wt=qt(dt),jt=qt(yt),Ot=nt?nt.prototype:void 0,At=Ot?Ot.valueOf:void 0;function Ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Bt(t){this.__data__=new Mt(t)}function xt(t,e){var r=Ut(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Jt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Pt(a,n))||r.push(a);return r}function Et(t,e,r){var n=t[e];Z.call(t,e)&&Nt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Lt(t,e){for(var r=t.length;r--;)if(Nt(t[r][0],e))return r;return-1}function It(t,e,r,n,o,c,E){var L;if(n&&(L=c?n(t,o,c,E):n(t)),void 0!==L)return L;if(!Gt(t))return t;var T=Ut(t);if(T){if(L=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,L)}else{var k=Ht(t),S=k==s||k==f;if(zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(k==g||k==i||S&&!c){if(q(t))return c?t:{};if(L=function(t){return"function"!=typeof t.constructor||Ft(t)?{}:(e=it(t),Gt(e)?at(e):{});var e}(S?{}:t),!e)return function(t,e){return St(t,Dt(t),e)}(t,function(t,e){return t&&St(e,Kt(e),t)}(L,t))}else{if(!I[k])return c?t:{};L=function(t,e,r,n){var o=t.constructor;switch(e){case m:return kt(t);case a:case u:return new o(+t);case _:return function(t,e){var r=e?kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case v:case w:case j:case O:case A:case C:case M:case $:case B:return function(t,e){var r=e?kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return F(e?r(N(t),!0):N(t),H,new t.constructor)}(t,n,r);case h:case y:return new o(t);case p:return function(t){var e=new t.constructor(t.source,x.exec(t));return e.lastIndex=t.lastIndex,e}(t);case d:return function(t,e,r){return F(e?r(J(t),!0):J(t),P,new t.constructor)}(t,n,r);case b:return i=t,At?Object(At.call(i)):{}}var i}(t,k,It,e)}}E||(E=new Bt);var R=E.get(t);if(R)return R;if(E.set(t,L),!T)var W=r?function(t){return function(t,e,r){var n=e(t);return Ut(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Kt,Dt)}(t):Kt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(W||t,(function(o,i){W&&(o=t[i=o]),Et(L,i,It(o,e,r,n,i,t,E))})),L}function Tt(t){return!(!Gt(t)||(e=t,X&&X in e))&&(Vt(t)||q(t)?et:E).test(qt(t));var e}function kt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function St(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Et(r,a,void 0===c?t[a]:c)}return r}function Rt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Wt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Tt(r)?r:void 0}Ct.prototype.clear=function(){this.__data__=bt?bt(null):{}},Ct.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Ct.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},Ct.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},Ct.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},Mt.prototype.clear=function(){this.__data__=[]},Mt.prototype.delete=function(t){var e=this.__data__,r=Lt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},Mt.prototype.get=function(t){var e=this.__data__,r=Lt(e,t);return r<0?void 0:e[r][1]},Mt.prototype.has=function(t){return Lt(this.__data__,t)>-1},Mt.prototype.set=function(t,e){var r=this.__data__,n=Lt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},$t.prototype.clear=function(){this.__data__={hash:new Ct,map:new(gt||Mt),string:new Ct}},$t.prototype.delete=function(t){return Rt(this,t).delete(t)},$t.prototype.get=function(t){return Rt(this,t).get(t)},$t.prototype.has=function(t){return Rt(this,t).has(t)},$t.prototype.set=function(t,e){return Rt(this,t).set(t,e),this},Bt.prototype.clear=function(){this.__data__=new Mt},Bt.prototype.delete=function(t){return this.__data__.delete(t)},Bt.prototype.get=function(t){return this.__data__.get(t)},Bt.prototype.has=function(t){return this.__data__.has(t)},Bt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Mt){var o=n.__data__;if(!gt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new $t(o)}return n.set(t,e),this};var Dt=st?U(st,Object):function(){return[]},Ht=function(t){return tt.call(t)};function Pt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||L.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function qt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Nt(t,e){return t===e||t!=t&&e!=e}(ht&&Ht(new ht(new ArrayBuffer(1)))!=_||gt&&Ht(new gt)!=l||pt&&"[object Promise]"!=Ht(pt.resolve())||dt&&Ht(new dt)!=d||yt&&"[object WeakMap]"!=Ht(new yt))&&(Ht=function(t){var e=tt.call(t),r=e==g?t.constructor:void 0,n=r?qt(r):void 0;if(n)switch(n){case mt:return _;case _t:return l;case vt:return"[object Promise]";case wt:return d;case jt:return"[object WeakMap]"}return e});var Ut=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Vt(t)}var zt=ft||function(){return!1};function Vt(t){var e=Gt(t)?tt.call(t):"";return e==s||e==f}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return Jt(t)?xt(t):function(t){if(!Ft(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return It(t,!0,!0)}}));function u(t,e){return function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!r&&t[e+1].trim().length||r&&(t[e+1].trim().length||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!r&&t[e+2].trim().length||r&&(t[e+2].trim().length||"\n\r".includes(t[e+2]))))return e+2;for(let n=e+1,o=t.length;n<o;n++)if(t[n]&&(!r&&t[n].trim().length||r&&(t[n].trim().length||"\n\r".includes(t[n]))))return n;return null}(t,e,!1)}var s="\\",f=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function l(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!"0123456789".includes(t)}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e?t.slice(e):t,n=!1;return/^<[\\ \t\r\n/]*\w+[\\ \t\r\n/]*>/g.test(r)?n=!0:/^<\s*\w+\s+\w+(?:-\w+)?\s*=\s*['"\w]/g.test(r)?n=!0:/^<\s*\/?\s*\w+\s*\/?\s*>/g.test(r)?n=!0:/^<[\\ \t\r\n/]*\w+(?:\s*\w+)*\s*\w+=['"]/g.test(r)?n=!0:"<"===t[e]&&t[e+1]&&(["/",s].includes(t[e+1])&&a(t,e+1,f,{cb:l,i:!0})||!l(t[e+1])&&a(t,e,f,{cb:l,i:!0,trimCharsBeforeMatching:["/",s,"!"," ","\t","\n","\r"]})||l(t[e+1])&&a(t,e,f,{cb:function(e,r,n){return(void 0===e||e.toUpperCase()===e.toLowerCase()&&!"0123456789".includes(e))&&("/"===t[u(t,n-1)]||">"===t[u(t,n-1)])},i:!0,trimCharsBeforeMatching:["/",s,"!"," ","\t","\n","\r"]}))&&(n=!0),"string"==typeof t&&e<t.length&&n}}));
