/**
 * ranges-push
 * Manage the array of ranges referencing the index ranges within the string
 * Version: 3.7.12
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-push
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).rangesPush=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t=!0,r){if(!(r.trim()||e.length&&"\n"!==r&&" "!==r&&" "===(t?e[e.length-1]:e[0])||e.length&&"\n"===(t?e[e.length-1]:e[0])&&"\n"!==r&&" "!==r))if(t){if(("\n"===r||" "===r)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(" "===r||"\n"===r?r:" ")}else{if(("\n"===r||" "===r)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(" "===r||"\n"===r?r:" ")}}function l(e,t){if("string"==typeof e&&e.length){let r,n,s=!1;if(e.includes("\r\n")&&(s=!0),r=t&&"number"==typeof t?t:1,""===e.trim()){const t=[];for(n=r,Array.from(e).forEach(e=>{("\n"!==e||n)&&("\n"===e&&(n-=1),a(t,!0,e))});t.length>1&&" "===t[t.length-1];)t.pop();return t.join("")}const i=[];if(n=r,""===e[0].trim())for(let t=0,r=e.length;t<r&&!e[t].trim();t++)("\n"!==e[t]||n)&&("\n"===e[t]&&(n-=1),a(i,!0,e[t]));const o=[];if(n=r,""===e.slice(-1).trim())for(let t=e.length;t--&&!e[t].trim();)("\n"!==e[t]||n)&&("\n"===e[t]&&(n-=1),a(o,!1,e[t]));return s?`${i.join("")}${e.trim()}${o.join("")}`.replace(/\n/g,"\r\n"):i.join("")+e.trim()+o.join("")}return e}function u(e,t){if(!Array.isArray(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null,...t};let n,s;if(r.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(n=t,s=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${s} elements!`);if(!e.every((e,t)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=t,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const i=e.length*e.length;let o=0;return Array.from(e).sort((e,t)=>(r.progressFn&&(o+=1,r.progressFn(Math.floor(100*o/i))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}function g(e){return null!=e}function f(e){return Number.isInteger(e)&&e>=0}function p(e){return"string"==typeof e}function c(e){return/^\d*$/.test(e)?parseInt(e,10):e}return function(){function r(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var n=s(s({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),t);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(p(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!p(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,o,a;return n=r,(o=[{key:"add",value:function(t,r,n){for(var s=this,o=arguments.length,a=new Array(o>3?o-3:0),u=3;u<o;u++)a[u-3]=arguments[u];if(a.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(a,null,4)));if(g(t)||g(r)){if(g(t)&&!g(r)){if(Array.isArray(t)){if(t.length){if(t.some((function(e){return Array.isArray(e)})))return void t.forEach((function(e){Array.isArray(e)&&s.add.apply(s,i(e))}));t.length>1&&f(c(t[0]))&&f(c(t[1]))&&this.add.apply(this,i(t))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(t,null,0),') but second-one, "to" is not (').concat(JSON.stringify(r,null,0),")"))}if(!g(t)&&g(r))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(r,null,0),') but first-one, "from" is not (').concat(JSON.stringify(t,null,0),")"));var y=/^\d*$/.test(t)?parseInt(t,10):t,h=/^\d*$/.test(r)?parseInt(r,10):r;if(f(n)&&(n=String(n)),!f(y)||!f(h))throw f(y)&&y>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(h),'" equal to: ').concat(JSON.stringify(h,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(y),'" equal to: ').concat(JSON.stringify(y,null,4)));if(g(n)&&!p(n)&&!f(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(g(this.slices)&&Array.isArray(this.last())&&y===this.last()[1]){if(this.last()[1]=h,this.last()[2],null!==this.last()[2]&&g(n)){var m=!(g(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(m=l(m,this.opts.limitLinebreaksCount)),p(m)&&!m.length||(this.last()[2]=m)}}else{this.slices||(this.slices=[]);var d=void 0===n||p(n)&&!n.length?[y,h]:[y,h,this.opts.limitToBeAddedWhitespace?l(n,this.opts.limitLinebreaksCount):n];this.slices.push(d)}}}},{key:"push",value:function(e,t,r){for(var n=arguments.length,s=new Array(n>3?n-3:0),i=3;i<n;i++)s[i-3]=arguments[i];this.add.apply(this,[e,t,r].concat(s))}},{key:"current",value:function(){var e=this;return null!=this.slices?(this.slices=function(e,t){function r(e){return"string"==typeof e}function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e))return e;const s={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(t){if(!n(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(i={...s,...t},i.progressFn&&n(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i={...s};const o=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let a,l,g;a=i.progressFn?u(o,{progressFn:e=>{g=Math.floor(e/5),g!==l&&(l=g,i.progressFn(g))}}):u(o);const f=a.length-1;for(let e=f;e>0;e--)i.progressFn&&(g=Math.floor(78*(1-e/f))+21,g!==l&&g>l&&(l=g,i.progressFn(g))),(a[e][0]<=a[e-1][0]||!i.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||i.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:void 0!==a[e-1][2]?2===i.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a}(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map((function(t){return g(t[2])?[t[0],t[1],l(t[2],e.opts.limitLinebreaksCount)]:t})):this.slices):null}},{key:"wipe",value:function(){this.slices=void 0}},{key:"replace",value:function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!f(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(e[0],null,4)," should be an array and its first element should be an integer, a string index."));this.slices=Array.from(e)}else this.slices=void 0}},{key:"last",value:function(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}])&&t(n.prototype,o),a&&t(n,a),r}()}));
