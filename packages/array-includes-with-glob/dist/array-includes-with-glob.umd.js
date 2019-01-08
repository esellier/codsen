/**
 * array-includes-with-glob
 * like _.includes but with wildcards
 * Version: 2.8.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/array-includes-with-glob
 */

!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r=r||self).arrayIncludesWithGlob=t()}(this,function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(t)}var t=/[|\\{}()[\]^$+*?.]/g,e=function(r){if("string"!=typeof r)throw new TypeError("Expected a string");return r.replace(t,"\\$&")};const n=new Map;function o(r,t){const o=Object.assign({caseSensitive:!1},t),a=r+JSON.stringify(o);if(n.has(a))return n.get(a);const s="!"===r[0];s&&(r=r.slice(1)),r=e(r).replace(/\\\*/g,".*");const i=new RegExp(`^${r}$`,o.caseSensitive?"":"i");return i.negated=s,n.set(a,i),i}var a=(r,t,e)=>{if(!Array.isArray(r)||!Array.isArray(t))throw new TypeError(`Expected two arrays, got ${typeof r} ${typeof t}`);if(0===t.length)return r;const n="!"===t[0][0];t=t.map(r=>o(r,e));const a=[];for(const e of r){let r=n;for(const n of t)n.test(e)&&(r=!n.negated);r&&a.push(e)}return a};a.isMatch=((r,t,e)=>{const n=o(t,e),a=n.test(r);return n.negated?!a:a});var s=Array.isArray;return function(t,e,n){function o(r){return"string"==typeof r}var i=Object.assign({},{arrayVsArrayAllMustBeFound:"any"},n);if(0===arguments.length)throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_02] second argument missing!");if(!s(t)){if(!o(t))throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_03] first argument must be an array! It was given as ".concat(r(t)));t=[t]}if(!o(e)&&!s(e))throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_04] second argument must be a string or array of strings! It was given as ".concat(r(e)));if("any"!==i.arrayVsArrayAllMustBeFound&&"all"!==i.arrayVsArrayAllMustBeFound)throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_05] opts.arrayVsArrayAllMustBeFound was customised to an unrecognised value, ".concat(i.arrayVsArrayAllMustBeFound,'. It must be equal to either "any" or "all".'));if(0===t.length)return!1;var u=t.filter(function(r){return null!=r});return 0!==u.length&&(o(e)?u.some(function(r){return a.isMatch(r,e,{caseSensitive:!0})}):"any"===i.arrayVsArrayAllMustBeFound?e.some(function(r){return u.some(function(t){return a.isMatch(t,r,{caseSensitive:!0})})}):e.every(function(r){return u.some(function(t){return a.isMatch(t,r,{caseSensitive:!0})})}))}});
