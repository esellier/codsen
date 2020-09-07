/**
 * is-media-descriptor
 * Is given string a valid media descriptor (including media query)?
 * Version: 1.2.16
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/is-media-descriptor/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isMediaDescriptor=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function o(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function r(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var o=[],r=!0,n=!1,i=void 0;try{for(var f,s=e[Symbol.iterator]();!(r=(f=s.next()).done)&&(o.push(f.value),!t||o.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var f=[],s=[],a=function(e,t){if(e===t)return 0;var o=e;e.length>t.length&&(e=t,t=o);for(var r=e.length,n=t.length;r>0&&e.charCodeAt(~-r)===t.charCodeAt(~-n);)r--,n--;for(var i,a,l,c,u=0;u<r&&e.charCodeAt(u)===t.charCodeAt(u);)u++;if(n-=u,0===(r-=u))return n;for(var m=0,p=0;m<r;)s[m]=e.charCodeAt(u+m),f[m]=++m;for(;p<n;)for(i=t.charCodeAt(u+p),l=p++,a=p,m=0;m<r;m++)c=i===s[m]?l:l+1,l=f[m],a=f[m]=l>a?c>a?a+1:c:c>l?l+1:c;return a},l=a,c=a;l.default=c;var u=["all","aural","braille","embossed","handheld","print","projection","screen","speech","tty","tv"],m=["width","min-width","max-width","height","min-height","max-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","orientation","resolution","min-resolution","max-resolution","scan","grid","update","overflow-block","overflow-inline","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","color-gamut","pointer","hover","any-pointer","any-hover"],p=/^\w+$/g;return function(t,o){var i=r(r({},{offset:0}),o);if(i.offset&&!Number.isInteger(i.offset))throw new Error("is-media-descriptor: [THROW_ID_01] opts.offset must be an integer, it was given as ".concat(i.offset," (type ").concat(e(i.offset),")"));if(i.offset||(i.offset=0),"string"!=typeof t)return[];if(!t.trim())return[];var f=[],s=0,a=t.length,c=t.trim();if(t!==t.trim()){var d=[];if(!t[0].trim())for(var h=0,g=t.length;h<g;h++)if(t[h].trim()){d.push([0+i.offset,h+i.offset]),s=h;break}if(!t[t.length-1].trim())for(var b=t.length;b--;)if(t[b].trim()){d.push([b+1+i.offset,t.length+i.offset]),a=b+1;break}f.push({idxFrom:d[0][0],idxTo:d[d.length-1][1],message:"Remove whitespace.",fix:{ranges:d}})}if(u.includes(c))return f;if(["only","not"].includes(c))f.push({idxFrom:s+i.offset,idxTo:a+i.offset,message:"Missing media type or condition.",fix:null});else if(!c.match(p)||c.includes("(")||c.includes(")")){var x=!1,y=n(Array.from(c).reduce((function(e,t,o){return")"===t?(!x&&e[1]+1>e[0]&&(x=!0),[e[0],e[1]+1]):"("===t?[e[0]+1,e[1]]:(";"===t&&f.push({idxFrom:o+i.offset,idxTo:o+1+i.offset,message:"Semicolon found!",fix:null}),e)}),[0,0]),2),v=y[0],w=y[1];if(x&&v===w&&f.push({idxFrom:s+i.offset,idxTo:a+i.offset,message:"Some closing brackets are before their opening counterparts.",fix:null}),v>w?f.push({idxFrom:s+i.offset,idxTo:a+i.offset,message:"More opening brackets than closing.",fix:null}):w>v&&f.push({idxFrom:s+i.offset,idxTo:a+i.offset,message:"More closing brackets than opening.",fix:null}),!f.length&&c.match(/\(\s*\)/g))for(var O,C=null,T=0,A=c.length;T<A;T++)"("===c[T]?(C=T,O=!1):")"===c[T]?O?O=!0:f.push({idxFrom:C+i.offset,idxTo:T+1+i.offset,message:"Empty bracket pair.",fix:null}):c[T].trim()&&(O=!0);if(f.length)return f;!function(t,o){if("string"!=typeof t)throw new Error("string-process-comma-separated: [THROW_ID_01] input must be string! It was given as ".concat(e(t),", equal to:\n").concat(JSON.stringify(t,null,4)));if(t.length&&(o.cb||o.errCb)){var n=r(r({},{from:0,to:t.length,offset:0,leadingWhitespaceOK:!1,trailingWhitespaceOK:!1,oneSpaceAfterCommaOK:!1,innerWhitespaceAllowed:!1,separator:",",cb:null,errCb:null}),o);Number.isInteger(o.from)||(n.from=0),Number.isInteger(o.to)||(n.to=t.length),Number.isInteger(o.offset)||(n.offset=0);for(var i=null,f=null,s=!1,a=[],l=null,c=!0,u=n.from;u<n.to;u++){if(t[u].trim()&&t[u]!==n.separator&&(l=u),null!==i||!t[u].trim()||n.separator&&t[u]===n.separator||(s||(s=!0),a.length&&(a.length>1&&a.forEach((function(e,t){t&&n.errCb([[e+n.offset,e+1+n.offset]],"Remove separator.",c)})),a=[]),i=u),Number.isInteger(i)&&(u>i&&n.separator&&t[u]===n.separator||u+1===n.to)&&(t.slice(i,u+1===n.to&&t[u]!==n.separator&&t[u].trim()?u+1:u),"function"==typeof n.cb&&n.cb(i+n.offset,(u+1===n.to&&t[u]!==n.separator&&t[u].trim()?u+1:l+1)+n.offset),i=null),t[u].trim()||null!==f||(f=u),null!==f&&(t[u].trim()||u+1===n.to)){if(f===n.from)n.leadingWhitespaceOK||"function"!=typeof n.errCb||n.errCb([[f+n.offset,(u+1===n.to?u+1:u)+n.offset]],"Remove whitespace.",c);else if(t[u].trim()||u+1!==n.to){if(!(n.oneSpaceAfterCommaOK&&t[u].trim()&&u>n.from+1&&" "===t[u-1]&&","===t[u-2]||n.innerWhitespaceAllowed&&s&&t[f-1]&&t[u].trim()&&t[u]!==n.separator&&t[f-1]!==n.separator)){var m=f,p=u;u+1!==n.to||t[u]===n.separator||t[u].trim()||(p+=1);var d="";n.oneSpaceAfterCommaOK&&(" "===t[f]&&t[f-1]===n.separator?m+=1:" "!==t[f]&&(d=" "));var h="Remove whitespace.";!n.innerWhitespaceAllowed&&s&&t[f-1]&&t[u].trim()&&t[u]!==n.separator&&t[f-1]!==n.separator&&(c=!1,h="Bad whitespace."),d.length?n.errCb([[m+n.offset,p+n.offset,d]],h,c):n.errCb([[m+n.offset,p+n.offset]],h,c),c=!0}}else n.trailingWhitespaceOK||"function"!=typeof n.errCb||n.errCb([[f+n.offset,u+1+n.offset]],"Remove whitespace.",c);f=null}t[u]===n.separator&&(s?a.push(u):n.errCb([[u+n.offset,u+1+n.offset]],"Remove separator.",c)),u+1===n.to&&a.forEach((function(e){n.errCb([[e+n.offset,e+1+n.offset]],"Remove separator.",c)}))}}}(c,{offset:i.offset,leadingWhitespaceOK:!1,trailingWhitespaceOK:!1,oneSpaceAfterCommaOK:!0,innerWhitespaceAllowed:!0,separator:",",cb:function(e,t){!function(e,t,o){for(var r=null,n=[],i=null,f=!0,s=!0,a=!0,l=!1,c=[],d=t.idxFrom;d<=t.idxTo;d++){if(")"===e[d]){var h=c.pop(),g=e.slice(h+1,d);g.includes("(")||g.includes(")")||g.match(p)&&(m.includes(g.toLowerCase().trim())||o.push({idxFrom:h+1+t.offset,idxTo:d+t.offset,message:'Unrecognised "'.concat(g.trim(),'".'),fix:null}));var b=new RegExp(u.join("|"),"gi");(g.match(b)||[]).forEach((function(r){var n=e.indexOf(r);o.push({idxFrom:n+t.offset,idxTo:n+r.length+t.offset,message:'Media type "'.concat(r,'" inside brackets.'),fix:null})}))}if("("===e[d]&&c.push(d),e[d]&&e[d].trim().length&&null!==i){if("("===e[i-1]||")"===e[d])o.push({idxFrom:i+t.offset,idxTo:d+t.offset,message:"Bad whitespace.",fix:{ranges:[[i+t.offset,d+t.offset]]}});else if(i<d-1||" "!==e[d-1]){var x=i+t.offset,y=d+t.offset,v=" ";i!==d-1&&(" "===e[i]?(x+=1,v=null):" "===e[d-1]&&(y-=1,v=null)),o.push({idxFrom:i+t.offset,idxTo:d+t.offset,message:"Bad whitespace.",fix:{ranges:[v?[x,y," "]:[x,y]]}})}i=null}if(e[d]&&!e[d].trim().length&&null===i&&(i=d),!(null===r||e[d]&&e[d].trim().length||c.length)){var w=e.slice(r,d);if(n.push(w.toLowerCase()),!l||(f||s)&&"and"!==w)if(a&&["not","only"].includes(w))a=!1,s=!1;else if(f||s){if(w.startsWith("("))if(s);else{var O='Media condition "'.concat(e.slice(r,d),"\" can't be here.");"not"===n[n.length-2]&&(O='"not" can be only in front of media type.'),o.push({idxFrom:r+t.offset,idxTo:d+t.offset,message:O,fix:null})}else{if(!f){var C='Expected brackets on "'.concat(w,'".'),T=null,A=d+t.offset;if(["not","else","or"].includes(w.toLowerCase()))C='"'.concat(w,"\" can't be here.");else if(u.includes(w.toLowerCase()))C="Unexpected media type, try using a comma.";else if(m.includes(w.toLowerCase()))C="Missing brackets.",T={ranges:[[r+t.offset,r+t.offset,"("],[d+t.offset,d+t.offset,")"]]};else if(e.slice(d).trim().startsWith(":")){var F=w.slice(0,d).trim();C='Expected brackets on "'.concat(F,'" and its value.'),A=r+F.length+t.offset}o.push({idxFrom:r+t.offset,idxTo:A,message:C,fix:T});break}if(u.includes(w.toLowerCase()))f=!1,s=!1;else{var S='Unrecognised "'.concat(w,'".');w.match(/\w/g)?["and","only","or","not"].includes(w.toLowerCase())&&(S='"'.concat(w,'" instead of a media type.')):S="Strange symbol".concat(1===w.trim().length?"":"s",' "').concat(w,'".'),o.push({idxFrom:r+t.offset,idxTo:d+t.offset,message:S,fix:null})}}l=!0}else o.push({idxFrom:r+t.offset,idxTo:d+t.offset,message:'Unrecognised media type "'.concat(e.slice(r,d),'".'),fix:null});else"and"!==w.toLowerCase()?o.push({idxFrom:r+t.offset,idxTo:d+t.offset,message:'Expected "and", found "'.concat(w,'".'),fix:null}):e[d]||o.push({idxFrom:r+t.offset,idxTo:d+t.offset,message:'Dangling "'.concat(w,'".'),fix:{ranges:[[e.slice(0,r).trimEnd().length+t.offset,d+t.offset]]}}),l=!1,s=!0;r=null,a&&(a=!1)}null===r&&e[d]&&e[d].trim().length&&")"!==e[d]&&(e[d],r=d)}}(c,r(r({},i),{},{idxFrom:e-i.offset,idxTo:t-i.offset}),f)},errCb:function(e,t){}})}else for(var F=0,S=u.length;F<S;F++){if(1===l(u[F],c)){f.push({idxFrom:s+i.offset,idxTo:a+i.offset,message:'Did you mean "'.concat(u[F],'"?'),fix:{ranges:[[s+i.offset,a+i.offset,u[F]]]}});break}F===S-1&&f.push({idxFrom:s+i.offset,idxTo:a+i.offset,message:'Unrecognised media type "'.concat(c,'".'),fix:null})}return f}}));
