/**
 * is-media-descriptor
 * Is given string a valid media descriptor (including media query)?
 * Version: 1.1.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-media-descriptor
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).isMediaDescriptor=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var o=[],n=!0,f=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){f=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(f)throw r}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const o=[],n=[],f=(e,t)=>{if(e===t)return 0;const f=e;e.length>t.length&&(e=t,t=f);let r=e.length,i=t.length;for(;r>0&&e.charCodeAt(~-r)===t.charCodeAt(~-i);)r--,i--;let s,l,a,u,c=0;for(;c<r&&e.charCodeAt(c)===t.charCodeAt(c);)c++;if(r-=c,i-=c,0===r)return i;let d=0,m=0;for(;d<r;)n[d]=e.charCodeAt(c+d),o[d]=++d;for(;m<i;)for(s=t.charCodeAt(c+m),a=m++,l=m,d=0;d<r;d++)u=s===n[d]?a:a+1,a=o[d],l=o[d]=a>l?u>l?l+1:u:u>a?a+1:u;return l};var r=f,i=f;r.default=i;var s=["all","aural","braille","embossed","handheld","print","projection","screen","speech","tty","tv"];return function(o,n){var f=Object.assign({},{offset:0},n);if(f.offset&&!Number.isInteger(f.offset))throw new Error("is-media-descriptor: [THROW_ID_01] opts.offset must be an integer, it was given as ".concat(f.offset," (type ").concat(e(f.offset),")"));if(f.offset||(f.offset=0),"string"!=typeof o)return[];if(!o.trim().length)return[];var i=[],l=0,a=o.length,u=o.trim();if(o!==o.trim()){var c=[];if(!o[0].trim().length)for(var d=0,m=o.length;d<m;d++)if(o[d].trim().length){c.push([0+f.offset,d+f.offset]),l=d;break}if(!o[o.length-1].trim().length)for(var h=o.length;h--;)if(o[h].trim().length){c.push([h+1+f.offset,o.length+f.offset]),a=h+1;break}i.push({idxFrom:c[0][0],idxTo:c[c.length-1][1],message:"Remove whitespace.",fix:{ranges:c}})}if(s.includes(u))return i;if(["only","not"].includes(u))i.push({idxFrom:l+f.offset,idxTo:a+f.offset,message:"Missing media type or condition.",fix:null});else if(!u.match(/^\w+$/g)||u.includes("(")||u.includes(")")){var g=!1,p=t(Array.from(u).reduce((function(e,t,o){return")"===t?(!g&&e[1]+1>e[0]&&(g=!0),[e[0],e[1]+1]):"("===t?[e[0]+1,e[1]]:(";"===t&&i.push({idxFrom:o+f.offset,idxTo:o+1+f.offset,message:"Semicolon found!",fix:null}),e)}),[0,0]),2),x=p[0],y=p[1];if(g&&x===y&&i.push({idxFrom:l+f.offset,idxTo:a+f.offset,message:"Some closing brackets are before their opening counterparts.",fix:null}),x>y?i.push({idxFrom:l+f.offset,idxTo:a+f.offset,message:"More opening brackets than closing.",fix:null}):y>x&&i.push({idxFrom:l+f.offset,idxTo:a+f.offset,message:"More closing brackets than opening.",fix:null}),i.length)return i;!function(e,t,o){for(var n=null,f=!0,r=[],i=null,l=!1,a=0,u=e.length;a<=u;a++){if(e[a],e[a],e[a]&&e[a].trim().length&&null!==i){if("("===e[i-1]||")"===e[a])o.push({idxFrom:i+t.offset,idxTo:a+t.offset,message:"Bad whitespace.",fix:{ranges:[[i+t.offset,a+t.offset]]}});else if(i<a-1||" "!==e[a-1]){var c=i+t.offset,d=a+t.offset,m=" ";i!==a-1&&(" "===e[i]?(c++,m=null):" "===e[a-1]&&(d--,m=null)),o.push({idxFrom:i+t.offset,idxTo:a+t.offset,message:"Bad whitespace.",fix:{ranges:[m?[c,d," "]:[c,d]]}})}i=null}if(e[a]&&!e[a].trim().length&&null===i&&(i=a),null!==n&&(!e[a]||!e[a].trim().length||"():".includes(e[a]))){var h=e.slice(n,a);if(r.push(h),f)if(["only","not"].includes(h.toLowerCase()))r.length>1&&["only","not"].includes(r[r.length-1])&&o.push({idxFrom:n+t.offset,idxTo:a+t.offset,message:'"'.concat(h,'" instead of a media type.'),fix:null});else if(["and"].includes(h.toLowerCase()))r.length>1&&["only","not"].includes(r[r.length-2])&&o.push({idxFrom:n+t.offset,idxTo:a+t.offset,message:'"'.concat(h,'" instead of a media type.'),fix:null});else{if(!s.includes(h.toLowerCase())){var g=e.slice(n,a),p='Unrecognised "'.concat(g,'".');return g.includes("-")&&(p='Brackets missing around "'.concat(g,'"').concat(":"===e[a]?" and its value":"",".")),g&&g.length&&1===g.length&&(p='Strange symbol "'.concat(g,'".')),void o.push({idxFrom:n+t.offset,idxTo:a+t.offset,message:p,fix:null})}f=!1}else"and"===h?f=!0:o.push({idxFrom:n+t.offset,idxTo:a+t.offset,message:'Unrecognised media type "'.concat(e.slice(n,a),'".'),fix:null});n=null,l=!1}null===n&&e[a]&&e[a].trim().length&&")"!==e[a]&&("("===e[a]?l=!0:l||(n=a))}}(u,f,i)}else for(var b=0,v=s.length;b<v;b++){if(1===r(s[b],u)){i.push({idxFrom:l+f.offset,idxTo:a+f.offset,message:'Did you mean "'.concat(s[b],'"?'),fix:{ranges:[[l+f.offset,a+f.offset,s[b]]]}});break}b===v-1&&i.push({idxFrom:l+f.offset,idxTo:a+f.offset,message:'Unrecognised media type "'.concat(u,'".'),fix:null})}return i}}));
