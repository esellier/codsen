/**
 * string-find-heads-tails
 * Finds where are arbitrary templating marker heads and tails located
 * Version: 3.16.13
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-find-heads-tails/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).stringFindHeadsTails=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(r){e(t,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function i(t){return"string"==typeof t?t.length>0?[t]:[]:t}function a(e){return e&&"object"===t(e)&&!Array.isArray(e)}function o(t){return"string"==typeof t}function s(t,e,r,n,i,a){var o="function"==typeof r?r():r;if(e<0&&i&&"EOL"===o)return o;if(e>=t.length&&!i)return!1;for(var s=i?1:r.length,c=!1,h=!1,l=n.maxMismatches,f=e,u=!1,g=!1,d=!1;t[f];){var m=a(f);if(n.trimBeforeMatching&&""===t[f].trim()){if(!t[m]&&i&&"EOL"===r)return!0;f=a(f)}else if(!n.i&&n.trimCharsBeforeMatching.includes(t[f])||n.i&&n.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[f].toLowerCase())){if(i&&"EOL"===r&&!t[m])return!0;f=a(f)}else{var y=m>f?r[r.length-s]:r[s-1];if(!n.i&&t[f]===y||n.i&&t[f].toLowerCase()===y.toLowerCase()){if(u||(u=!0),h||(h=!0),s===r.length?g=!0:1===s&&(d=!0),(s-=1)<1)return f}else{if(!(n.maxMismatches&&l&&f))return!(0!==f||1!==s||n.lastMustMatch||!h)&&0;l-=1;for(var p=0;p<=l;p++){var w=m>f?r[r.length-s+1+p]:r[s-2-p],b=t[a(f)];if(w&&(!n.i&&t[f]===w||n.i&&t[f].toLowerCase()===w.toLowerCase())&&(!n.firstMustMatch||s!==r.length)){s-=2,u=!0;break}if(b&&w&&(!n.i&&b===w||n.i&&b.toLowerCase()===w.toLowerCase())&&(!n.firstMustMatch||s!==r.length)){s-=1,u=!0;break}if(void 0===w&&l>=0&&u&&(!n.firstMustMatch||g)&&(!n.lastMustMatch||d))return f}u||(c=f)}if(!1!==c&&c!==f&&(c=!1),s<1)return f;f=a(f)}}return s>0?!(!i||"EOL"!==o)||!!(n.maxMismatches>=s&&h)&&(c||0):void 0}function c(e,r,c,h){return function(e,r,c,h,l){if(a(l)&&Object.prototype.hasOwnProperty.call(l,"trimBeforeMatching")&&"boolean"!=typeof l.trimBeforeMatching)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(l.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var f,u,g,d,m=n(n({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1}),l);if(m.trimCharsBeforeMatching=i(m.trimCharsBeforeMatching),m.trimCharsBeforeMatching=m.trimCharsBeforeMatching.map((function(t){return o(t)?t:String(t)})),!o(r))return!1;if(!r.length)return!1;if(!Number.isInteger(c)||c<0)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(t(c),", equal to:\n").concat(JSON.stringify(c,null,4)));if(o(h))f=[h];else if(Array.isArray(h))f=h;else if(h){if("function"!=typeof h)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(t(h),", equal to:\n").concat(JSON.stringify(h,null,4)));(f=[]).push(h)}else f=h;if(l&&!a(l))throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(t(l),'", and equal to:\n').concat(JSON.stringify(l,null,4)));if(m.trimCharsBeforeMatching.some((function(t,e){return t.length>1&&(g=e,d=t,!0)})))throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(g," is longer than 1 character, ").concat(d.length," (equals to ").concat(d,"). Please split it into separate characters and put into array as separate elements."));if(!f||!Array.isArray(f)||Array.isArray(f)&&!f.length||Array.isArray(f)&&1===f.length&&o(f[0])&&!f[0].trim()){if("function"==typeof m.cb){var y,p=c;if("matchLeftIncl"!==e&&"matchRight"!==e||(p+=1),"L"===e[5])for(var w=p;w--;){var b=r[w];if((!m.trimBeforeMatching||m.trimBeforeMatching&&void 0!==b&&b.trim())&&(!m.trimCharsBeforeMatching.length||void 0!==b&&!m.trimCharsBeforeMatching.includes(b))){y=w;break}}else if(e.startsWith("matchRight"))for(var O=p;O<r.length;O++){var I=r[O];if((!m.trimBeforeMatching||m.trimBeforeMatching&&I.trim())&&(!m.trimCharsBeforeMatching.length||!m.trimCharsBeforeMatching.includes(I))){y=O;break}}if(void 0===y)return!1;var T=r[y],A=y+1,W="";return A&&A>0&&(W=r.slice(0,A)),"L"===e[5]||y&&y>0&&(W=r.slice(y)),m.cb(T,W,y)}var _="";throw l||(_=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(e,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(_))}for(var v=0,M=f.length;v<M;v++){u="function"==typeof f[v];var x=f[v],C=void 0,D=void 0,E="",S=c;"matchRight"===e?S+=1:"matchLeft"===e&&(S-=1);var H=s(r,S,x,m,u,(function(t){return"L"===e[5]?t-1:t+1}));if(H&&u&&"function"==typeof x&&"EOL"===x())return!(!x()||m.cb&&!m.cb(C,E,D))&&x();if(Number.isInteger(H)&&(D=e.startsWith("matchLeft")?H-1:H+1,E="L"===e[5]?r.slice(0,H):r.slice(D)),D<0&&(D=void 0),r[D]&&(C=r[D]),Number.isInteger(H)&&(!m.cb||m.cb(C,E,D)))return x}return!1}("matchRightIncl",e,r,c,h)}function h(t){return"string"==typeof t}return function(e,r,a,o){if(o&&(!(s=o)||"object"!==t(s)||Array.isArray(s)))throw new TypeError("string-find-heads-tails: [THROW_ID_01] the fourth input argument, an Optional Options Object, must be a plain object! Currently it's equal to: ".concat(o," (type: ").concat(t(o),")"));var s,l,f,u={fromIndex:0,throwWhenSomethingWrongIsDetected:!0,allowWholeValueToBeOnlyHeadsOrTails:!0,source:"string-find-heads-tails",matchHeadsAndTailsStrictlyInPairsByTheirOrder:!1,relaxedAPI:!1},g=n(n({},u),o);if("string"==typeof g.fromIndex&&/^\d*$/.test(g.fromIndex))g.fromIndex=Number(g.fromIndex);else if(!Number.isInteger(g.fromIndex)||g.fromIndex<0)throw new TypeError("".concat(g.source," [THROW_ID_18] the fourth input argument must be a natural number or zero! Currently it's: ").concat(g.fromIndex));if(!h(e)||0===e.length){if(g.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ".concat(t(e),", equal to: ").concat(e))}if("string"!=typeof r&&!Array.isArray(r)){if(g.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_03] the second input argument, heads, must be either a string or an array of strings! Currently it's: ".concat(t(r),", equal to:\n").concat(JSON.stringify(r,null,4)))}if("string"==typeof r){if(0===r.length){if(g.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_04] the second input argument, heads, must be a non-empty string! Currently it's empty.")}r=i(r)}else if(Array.isArray(r)){if(0===r.length){if(g.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_05] the second input argument, heads, must be a non-empty array and contain at least one string! Currently it's empty.")}if(r.every((function(t,e){return l=t,f=e,h(t)}))){if(!r.every((function(t,e){return f=e,h(t)&&t.length>0&&""!==t.trim()}))){if(!g.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_07] the second input argument, heads, should not contain empty strings! For example, there's one detected at index ".concat(f," of heads array:\n").concat(JSON.stringify(r,null,4),"."));if(0===(r=r.filter((function(t){return h(t)&&t.length>0}))).length)return[]}}else{if(!g.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_06] the second input argument, heads, contains non-string elements! For example, element at ".concat(f,"th index is ").concat(t(l),", equal to:\n").concat(JSON.stringify(l,null,4),". Whole heads array looks like:\n").concat(JSON.stringify(r,null,4)));if(0===(r=r.filter((function(t){return h(t)&&t.length>0}))).length)return[]}}if(!h(a)&&!Array.isArray(a)){if(g.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_08] the third input argument, tails, must be either a string or an array of strings! Currently it's: ".concat(t(a),", equal to:\n").concat(JSON.stringify(a,null,4)))}if(h(a)){if(0===a.length){if(g.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_09] the third input argument, tails, must be a non-empty string! Currently it's empty.")}a=i(a)}else if(Array.isArray(a)){if(0===a.length){if(g.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_10] the third input argument, tails, must be a non-empty array and contain at least one string! Currently it's empty.")}if(a.every((function(t,e){return l=t,f=e,h(t)}))){if(!a.every((function(t,e){return f=e,h(t)&&t.length>0&&""!==t.trim()}))){if(!g.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_12] the third input argument, tails, should not contain empty strings! For example, there's one detected at index ".concat(f,". Whole tails array is equal to:\n").concat(JSON.stringify(a,null,4)));if(0===(a=a.filter((function(t){return h(t)&&t.length>0}))).length)return[]}}else{if(!g.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_11] the third input argument, tails, contains non-string elements! For example, element at ".concat(f,"th index is ").concat(t(l),", equal to:\n").concat(JSON.stringify(l,null,4),". Whole tails array is equal to:\n").concat(JSON.stringify(a,null,4)));if(0===(a=a.filter((function(t){return h(t)&&t.length>0}))).length)return[]}}var d=g.source===u.source;if(g.throwWhenSomethingWrongIsDetected&&!g.allowWholeValueToBeOnlyHeadsOrTails){if(i(r).includes(e))throw new Error("".concat(g.source).concat(d?": [THROW_ID_16]":""," the whole input string can't be equal to ").concat(h(r)?"":"one of ","heads (").concat(e,")!"));if(i(a).includes(e))throw new Error("".concat(g.source).concat(d?": [THROW_ID_17]":""," the whole input string can't be equal to ").concat(h(a)?"":"one of ","tails (").concat(e,")!"))}for(var m,y=r.concat(a).map((function(t){return t.charAt(0)})).reduce((function(t,e){return e.charCodeAt(0)>t[1]?[t[0],e.charCodeAt(0)]:e.charCodeAt(0)<t[0]?[e.charCodeAt(0),t[1]]:t}),[r[0].charCodeAt(0),r[0].charCodeAt(0)]),p=[],w=!1,b={},O=!1,I=g.fromIndex,T=e.length;I<T;I++){var A=e[I].charCodeAt(0);if(A<=y[1]&&A>=y[0]){var W=c(e,I,r);if(W&&g.matchHeadsAndTailsStrictlyInPairsByTheirOrder)for(var _=r.length;_--;)if(r[_]===W){m=_;break}if(W){if(!w){(b={}).headsStartAt=I,b.headsEndAt=I+W.length,w=!0,I+=W.length-1,O&&(O=!1);continue}if(g.throwWhenSomethingWrongIsDetected)throw new TypeError("".concat(g.source).concat(d?": [THROW_ID_19]":"",' When processing "').concat(e,'", we found heads (').concat(e.slice(I,I+W.length),') starting at character with index number "').concat(I,'" and there was another set of heads before it! Generally speaking, there should be "heads-tails-heads-tails", not "heads-heads-tails"!\nWe\'re talking about the area of the code:\n\n\n--------------------------------------starts\n').concat(e.slice(Math.max(I-200,0),I),"\n      ","[".concat(33,"m-------\x3e[",39,"m")," ","[".concat(31,"m",e.slice(I,I+W.length),"[",39,"m")," [",33,"m","<-------","[",39,"m\n").concat(e.slice(I+W.length,Math.min(T,I+200)),"\n--------------------------------------ends\n\n\nTo turn off this error being thrown, set opts.throwWhenSomethingWrongIsDetected to Boolean false."))}var v=c(e,I,a);if(w&&v&&g.matchHeadsAndTailsStrictlyInPairsByTheirOrder&&void 0!==m&&void 0!==a[m]&&a[m]!==v){for(var M=void 0,x=a.length;x--;)if(a[x]===v){M=x;break}throw new TypeError("".concat(g.source).concat(d?": [THROW_ID_20]":"",' When processing "').concat(e,'", we had "opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder" on. We found heads (').concat(r[m],") but the tails the followed it were not of the same index, ").concat(m," (").concat(a[m],") but ").concat(M," (").concat(v,")."))}if(v){if(w){b.tailsStartAt=I,b.tailsEndAt=I+v.length,p.push(b),b={},w=!1,I+=v.length-1;continue}g.throwWhenSomethingWrongIsDetected&&(O="".concat(g.source).concat(d?": [THROW_ID_21]":"",' When processing "').concat(e,'", we found tails (').concat(e.slice(I,I+v.length),') starting at character with index number "').concat(I,"\" but there were no heads preceding it. That's very naughty!"))}}if(g.throwWhenSomethingWrongIsDetected&&I===T-1){if(0!==Object.keys(b).length)throw new TypeError("".concat(g.source).concat(d?": [THROW_ID_22]":"",' When processing "').concat(e,"\", we reached the end of the string and yet didn't find any tails (").concat(JSON.stringify(a,null,4),") to match the last detected heads (").concat(e.slice(b.headsStartAt,b.headsEndAt),")!"));if(O)throw new Error(O)}}return p}}));
