/**
 * string-trim-spaces-only
 * Like String.trim() but you can choose granularly what to trim
 * Version: 2.8.20
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-trim-spaces-only/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).stringTrimSpacesOnly=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}return function(t,r){if("string"!=typeof t)throw new Error("string-trim-spaces-only: [THROW_ID_01] input must be string! It was given as ".concat(e(t),", equal to:\n").concat(JSON.stringify(t,null,4)));var o,i,c=n(n({},{classicTrim:!1,cr:!1,lf:!1,tab:!1,space:!0,nbsp:!1}),r);function s(e){return c.classicTrim&&!e.trim()||!c.classicTrim&&(c.space&&" "===e||c.cr&&"\r"===e||c.lf&&"\n"===e||c.tab&&"\t"===e||c.nbsp&&" "===e)}if(t.length){if(s(t[0]))for(var f=0,l=t.length;f<l;f++){if(!s(t[f])){o=f;break}if(f===t.length-1)return{res:"",ranges:[[0,t.length]]}}if(s(t[t.length-1]))for(var u=t.length;u--;)if(!s(t[u])){i=u+1;break}return o?i?{res:t.slice(o,i),ranges:[[0,o],[i,t.length]]}:{res:t.slice(o),ranges:[[0,o]]}:i?{res:t.slice(0,i),ranges:[[i,t.length]]}:{res:t,ranges:[]}}return{res:"",ranges:[]}}}));
