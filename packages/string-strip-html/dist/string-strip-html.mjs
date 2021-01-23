/**
 * string-strip-html
 * Strips HTML tags from strings. No parser, accepts mixed sources.
 * Version: 8.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-strip-html/
 */

import e from"lodash.isplainobject";import t from"lodash.trim";import n from"lodash.without";import{decode as r}from"html-entities";import{rApply as s}from"ranges-apply";import{Ranges as a}from"ranges-push";import{right as i}from"string-left-right";function l(e,t){if(!e)return[];if(Array.isArray(e))return e.filter((e=>"string"==typeof e&&e.trim()));if("string"==typeof e)return e.trim()?[e]:[];throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_03] ${t} must be array containing zero or more strings or something falsey. Currently it's equal to: ${e}, that a type of ${typeof e}.`)}function o(e,t,n){return!e||!e.quotes||!function(e,t,n,r){for(let s=t,a=e.length;s<a;s++){if(e.startsWith(n,s))return!0;if(e.startsWith(r,s))return!1}return!1}(t,n+1,e.quotes.value,">")}const p="8.0.0",g={ignoreTags:[],onlyStripTags:[],stripTogetherWithTheirContents:["script","style","xml"],skipHtmlDecoding:!1,trimOnlySpaces:!1,dumpLinkHrefsNearby:{enabled:!1,putOnNewLine:!1,wrapHeads:"",wrapTails:""},cb:null};function u(p,m){const h=Date.now(),c=new Set(["!doctype","abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"]),d=new Set(["a","b","i","p","q","s","u"]),f=new Set([".",",","?",";",")","…",'"',"»"]),y=[],b=[];let O=[],k={};k={attributes:[]};let A=null,T=null,B={},S={tagName:"",hrefValue:"",openingTagEnds:void 0},C="",v=!1,$=null;function W(e,t,n){if(Array.isArray(t.stripTogetherWithTheirContents)&&(t.stripTogetherWithTheirContents.includes(k.name)||t.stripTogetherWithTheirContents.includes("*")))if(Array.isArray(y)&&y.some((t=>t.name===k.name&&t.lastClosingBracketAt<e))){for(let r=y.length;r--;)if(y[r].name===k.name){(t.stripTogetherWithTheirContents.includes(k.name)||t.stripTogetherWithTheirContents.includes("*"))&&(O=O.filter((([t,n])=>(t<y[r].lastOpeningBracketAt||t>=e+1)&&(n<=y[r].lastOpeningBracketAt||n>e+1))));let s=e+1;k.lastClosingBracketAt&&(s=k.lastClosingBracketAt+1),O.push([y[r].lastOpeningBracketAt,s]),f.has(p[e])&&t.cb?t.cb({tag:k,deleteFrom:y[r].lastOpeningBracketAt,deleteTo:e+1,insert:null,rangesArr:n,proposedReturn:[y[r].lastOpeningBracketAt,e,null]}):t.cb&&t.cb({tag:k,deleteFrom:y[r].lastOpeningBracketAt,deleteTo:e,insert:"",rangesArr:n,proposedReturn:[y[r].lastOpeningBracketAt,e,""]}),y.splice(r,1);break}}else y.push(k)}function w(e,t,n,r,s,a){let i="";if(Number.isInteger(n)&&n<s&&(i+=e.slice(n,s)),Number.isInteger(r)&&r>a+1){const t=e.slice(a+1,r);t.includes("\n")&&"<"===e[r]?i+=" ":i+=t}if(!f.has(e[t])&&"!"!==e[t]){const e=i.match(/\n/g);return Array.isArray(e)&&e.length?1===e.length?"\n":2===e.length?"\n\n":"\n\n\n":" "}return""}function q(e){if(e.dumpLinkHrefsNearby.enabled&&S.tagName&&S.tagName===k.name&&k.lastOpeningBracketAt&&(S.openingTagEnds&&k.lastOpeningBracketAt>S.openingTagEnds||!S.openingTagEnds)&&(v=!0),v){const t=e.dumpLinkHrefsNearby.putOnNewLine?"\n\n":"";C=`${t}${S.hrefValue}${t}`}}if("string"!=typeof p)throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_01] Input must be string! Currently it's: ${(typeof p).toLowerCase()}, equal to:\n${JSON.stringify(p,null,4)}`);if(m&&!e(m))throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_02] Optional Options Object must be a plain object! Currently it's: ${(typeof m).toLowerCase()}, equal to:\n${JSON.stringify(m,null,4)}`);function E(){v&&(S={tagName:"",hrefValue:"",openingTagEnds:void 0},v=!1)}const L={...g,...m};if(Object.prototype.hasOwnProperty.call(L,"returnRangesOnly"))throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_03] opts.returnRangesOnly has been removed from the API since v.5 release.");L.ignoreTags=l(L.ignoreTags,"opts.ignoreTags"),L.onlyStripTags=l(L.onlyStripTags,"opts.onlyStripTags");const H=!!L.onlyStripTags.length;if(L.onlyStripTags.length&&L.ignoreTags.length&&(L.onlyStripTags=n(L.onlyStripTags,...L.ignoreTags)),e(L.dumpLinkHrefsNearby)||(L.dumpLinkHrefsNearby={...g.dumpLinkHrefsNearby}),L.dumpLinkHrefsNearby=g.dumpLinkHrefsNearby,m&&Object.prototype.hasOwnProperty.call(m,"dumpLinkHrefsNearby")&&null!=m.dumpLinkHrefsNearby)if(e(m.dumpLinkHrefsNearby))L.dumpLinkHrefsNearby={...g.dumpLinkHrefsNearby,...m.dumpLinkHrefsNearby};else if(m.dumpLinkHrefsNearby)throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_04] Optional Options Object's key dumpLinkHrefsNearby was set to ${typeof m.dumpLinkHrefsNearby}, equal to ${JSON.stringify(m.dumpLinkHrefsNearby,null,4)}. The only allowed value is a plain object. See the API reference.`);L.stripTogetherWithTheirContents?"string"==typeof L.stripTogetherWithTheirContents&&L.stripTogetherWithTheirContents.length&&(L.stripTogetherWithTheirContents=[L.stripTogetherWithTheirContents]):L.stripTogetherWithTheirContents=[];const N={};if(L.stripTogetherWithTheirContents&&Array.isArray(L.stripTogetherWithTheirContents)&&L.stripTogetherWithTheirContents.length&&!L.stripTogetherWithTheirContents.every(((e,t)=>"string"==typeof e||(N.el=e,N.i=t,!1))))throw new TypeError(`string-strip-html/stripHtml(): [THROW_ID_05] Optional Options Object's key stripTogetherWithTheirContents was set to contain not just string elements! For example, element at index ${N.i} has a value ${N.el} which is not string but ${(typeof N.el).toLowerCase()}.`);L.cb||(L.cb=({rangesArr:e,proposedReturn:t})=>{t&&e.push(...t)});const P=new a({limitToBeAddedWhitespace:!0,limitLinebreaksCount:2});if(!L.skipHtmlDecoding)for(;p!==r(p);)p=r(p);for(let n=0,r=p.length;n<r;n++){if(Object.keys(k).length>1&&k.lastClosingBracketAt&&k.lastClosingBracketAt<n&&" "!==p[n]&&null===$&&($=n),">"===p[n]&&(!k||Object.keys(k).length<2)&&n>1)for(let e=n;e--;)if(void 0===p[e-1]||">"===p[e]){const s=void 0===p[e-1]?e:e+1,a=p.slice(s,n+1);if(p!==`<${t(a.trim(),"/>")}>`&&[...c].some((e=>t(a.trim().split(/\s+/).filter((e=>e.trim())).filter(((e,t)=>0===t)),"/>").toLowerCase()===e))&&""===u(`<${a.trim()}>`,L).result){b.length&&b[b.length-1][0]===k.lastOpeningBracketAt||b.push([s,n+1]),O.length&&O[O.length-1][0]===k.lastOpeningBracketAt||O.push([s,n+1]);const e=w(p,n,s,n+1,s,n+1);let t=n+1;if(p[t]&&!p[t].trim())for(let e=t;e<r;e++)if(p[e].trim()){t=e;break}L.cb({tag:k,deleteFrom:s,deleteTo:t,insert:e,rangesArr:P,proposedReturn:[s,t,e]})}break}if("/"!==p[n]||k.quotes&&k.quotes.value||!Number.isInteger(k.lastOpeningBracketAt)||Number.isInteger(k.lastClosingBracketAt)||(k.slashPresent=n),'"'===p[n]||"'"===p[n])if(k.nameStarts&&k.quotes&&k.quotes.value&&k.quotes.value===p[n]){let e;B.valueEnds=n,B.value=p.slice(B.valueStarts,n),k.attributes.push(B),B={},k.quotes=void 0,L.dumpLinkHrefsNearby.enabled&&k.attributes.some((t=>{if(t.name&&"href"===t.name.toLowerCase())return e=`${L.dumpLinkHrefsNearby.wrapHeads||""}${t.value}${L.dumpLinkHrefsNearby.wrapTails||""}`,!0}))&&(S={tagName:k.name,hrefValue:e,openingTagEnds:void 0})}else!k.quotes&&k.nameStarts&&(k.quotes={},k.quotes.value=p[n],k.quotes.start=n,B.nameStarts&&B.nameEnds&&B.nameEnds<n&&B.nameStarts<n&&!B.valueStarts&&(B.name=p.slice(B.nameStarts,B.nameEnds)));if(!(void 0===k.nameStarts||void 0!==k.nameEnds||p[n].trim()&&(R=p[n],/[-_A-Za-z0-9]/.test(R)))){if(k.nameEnds=n,k.name=p.slice(k.nameStarts,k.nameEnds+(">"!==p[n]&&"/"!==p[n]&&void 0===p[n+1]?1:0)),"!"!==p[k.nameStarts-1]&&!k.name.replace(/-/g,"").length||/^\d+$/.test(k.name[0])){k={};continue}if("<"===p[n]){q(L);const e=w(p,n,k.leftOuterWhitespace,n,k.lastOpeningBracketAt,n);(L.stripTogetherWithTheirContents.includes(k.name)||L.stripTogetherWithTheirContents.includes("*"))&&(O=O.filter((([e,t])=>!(e===k.leftOuterWhitespace&&t===n)))),L.cb({tag:k,deleteFrom:k.leftOuterWhitespace,deleteTo:n,insert:`${e}${C}${e}`,rangesArr:P,proposedReturn:[k.leftOuterWhitespace,n,`${e}${C}${e}`]}),E(),W(n,L,P)}}if(k.quotes&&k.quotes.start&&k.quotes.start<n&&!k.quotes.end&&B.nameEnds&&B.equalsAt&&!B.valueStarts&&(B.valueStarts=n),k.quotes||!B.nameEnds||"="!==p[n]||B.valueStarts||B.equalsAt||(B.equalsAt=n),!k.quotes&&B.nameStarts&&B.nameEnds&&!B.valueStarts&&p[n].trim()&&"="!==p[n]&&(k.attributes.push(B),B={}),k.quotes||!B.nameStarts||B.nameEnds||(p[n].trim()?"="===p[n]?B.equalsAt||(B.nameEnds=n,B.equalsAt=n,B.name=p.slice(B.nameStarts,B.nameEnds)):("/"===p[n]||">"===p[n]||"<"===p[n])&&(B.nameEnds=n,B.name=p.slice(B.nameStarts,B.nameEnds),k.attributes.push(B),B={}):(B.nameEnds=n,B.name=p.slice(B.nameStarts,B.nameEnds))),k.quotes||!(k.nameEnds<n)||p[n-1].trim()||!p[n].trim()||"<>/!".includes(p[n])||B.nameStarts||k.lastClosingBracketAt||(B.nameStarts=n),null!==k.lastOpeningBracketAt&&k.lastOpeningBracketAt<n&&"/"===p[n]&&k.onlyPlausible&&(k.onlyPlausible=!1),null!==k.lastOpeningBracketAt&&k.lastOpeningBracketAt<n&&"/"!==p[n]&&(void 0===k.onlyPlausible&&(k.onlyPlausible=!(p[n].trim()&&"<"!==p[n]||k.slashPresent)),p[n].trim()&&void 0===k.nameStarts&&"<"!==p[n]&&"/"!==p[n]&&">"!==p[n]&&"!"!==p[n]&&(k.nameStarts=n,k.nameContainsLetters=!1)),k.nameStarts&&!k.quotes&&p[n].toLowerCase()!==p[n].toUpperCase()&&(k.nameContainsLetters=!0),">"===p[n]&&o(k,p,n)&&void 0!==k.lastOpeningBracketAt&&(k.lastClosingBracketAt=n,$=null,Object.keys(B).length&&(k.attributes.push(B),B={}),L.dumpLinkHrefsNearby.enabled&&S.tagName&&!S.openingTagEnds&&(S.openingTagEnds=n)),void 0!==k.lastOpeningBracketAt)if(void 0===k.lastClosingBracketAt){if(k.lastOpeningBracketAt<n&&"<"!==p[n]&&(void 0===p[n+1]||"<"===p[n+1])&&k.nameContainsLetters){if(k.name=p.slice(k.nameStarts,k.nameEnds?k.nameEnds:n+1).toLowerCase(),b.length&&b[b.length-1][0]===k.lastOpeningBracketAt||b.push([k.lastOpeningBracketAt,n+1]),L.ignoreTags.includes(k.name)||k.onlyPlausible&&!c.has(k.name)){k={},B={};continue}if((c.has(k.name)||d.has(k.name))&&(!1===k.onlyPlausible||!0===k.onlyPlausible&&k.attributes.length)||void 0===p[n+1]){q(L);const e=w(p,n,k.leftOuterWhitespace,n+1,k.lastOpeningBracketAt,k.lastClosingBracketAt);L.cb({tag:k,deleteFrom:k.leftOuterWhitespace,deleteTo:n+1,insert:`${e}${C}${e}`,rangesArr:P,proposedReturn:[k.leftOuterWhitespace,n+1,`${e}${C}${e}`]}),E(),W(n,L,P)}if(!O.length||O[O.length-1][0]!==k.lastOpeningBracketAt&&O[O.length-1][1]!==n+1)if(L.stripTogetherWithTheirContents.includes(k.name)||L.stripTogetherWithTheirContents.includes("*")){let e;for(let t=y.length;t--;)y[t].name===k.name&&(e=y[t]);e?(O=O.filter((([t])=>t!==e.lastOpeningBracketAt)),O.push([e.lastOpeningBracketAt,n+1])):O.push([k.lastOpeningBracketAt,n+1])}else O.push([k.lastOpeningBracketAt,n+1])}}else if(n>k.lastClosingBracketAt&&p[n].trim()||void 0===p[n+1]){let e=k.lastClosingBracketAt===n?n+1:n;if(L.trimOnlySpaces&&e===r-1&&null!==$&&$<n&&(e=$),b.length&&b[b.length-1][0]===k.lastOpeningBracketAt||b.push([k.lastOpeningBracketAt,k.lastClosingBracketAt+1]),!H&&L.ignoreTags.includes(k.name)||H&&!L.onlyStripTags.includes(k.name))L.cb({tag:k,deleteFrom:null,deleteTo:null,insert:null,rangesArr:P,proposedReturn:null}),k={},B={};else if(!k.onlyPlausible||0===k.attributes.length&&k.name&&(c.has(k.name.toLowerCase())||d.has(k.name.toLowerCase()))||k.attributes&&k.attributes.some((e=>e.equalsAt))){O.length&&O[O.length-1][0]===k.lastOpeningBracketAt||O.push([k.lastOpeningBracketAt,k.lastClosingBracketAt+1]);const t=w(p,n,k.leftOuterWhitespace,e,k.lastOpeningBracketAt,k.lastClosingBracketAt);let r;C="",v=!1,q(L),r="string"==typeof C&&C.length?`${t}${C}${"\n\n"===t?"\n":t}`:t,0!==k.leftOuterWhitespace&&i(p,e-1)||(r=""),L.cb({tag:k,deleteFrom:k.leftOuterWhitespace,deleteTo:e,insert:r,rangesArr:P,proposedReturn:[k.leftOuterWhitespace,e,r]}),E(),W(n,L,P)}else k={};">"!==p[n]&&(k={})}if("<"===p[n]&&"<"!==p[n-1]&&!"'\"".includes(p[n+1])&&(!"'\"".includes(p[n+2])||/\w/.test(p[n+1]))&&("c"!==p[n+1]||":"!==p[n+2])&&("%"!==p[n+1]||"@"!==p[n+2])&&("f"!==p[n+1]||"m"!==p[n+2]||"t"!==p[n+3]||":"!==p[n+4])&&("s"!==p[n+1]||"q"!==p[n+2]||"l"!==p[n+3]||":"!==p[n+4])&&("x"!==p[n+1]||":"!==p[n+2])&&("f"!==p[n+1]||"n"!==p[n+2]||":"!==p[n+3])&&o(k,p,n)){if(">"===p[i(p,n)])continue;if(k.nameEnds&&k.nameEnds<n&&!k.lastClosingBracketAt&&(!0===k.onlyPlausible&&k.attributes&&k.attributes.length||!1===k.onlyPlausible)){const e=w(p,n,k.leftOuterWhitespace,n,k.lastOpeningBracketAt,n);L.cb({tag:k,deleteFrom:k.leftOuterWhitespace,deleteTo:n,insert:e,rangesArr:P,proposedReturn:[k.leftOuterWhitespace,n,e]}),W(n,L,P),k={},B={}}if(void 0!==k.lastOpeningBracketAt&&k.onlyPlausible&&k.name&&!k.quotes&&(k.lastOpeningBracketAt=void 0,k.name=void 0,k.onlyPlausible=!1),!(void 0!==k.lastOpeningBracketAt&&k.onlyPlausible||k.quotes)&&(k.lastOpeningBracketAt=n,k.slashPresent=!1,k.attributes=[],k.leftOuterWhitespace=null===A?n:L.trimOnlySpaces&&0===A?T||n:A,"!--"==`${p[n+1]}${p[n+2]}${p[n+3]}`||"![CDATA["==`${p[n+1]}${p[n+2]}${p[n+3]}${p[n+4]}${p[n+5]}${p[n+6]}${p[n+7]}${p[n+8]}`)){let e,t=!0;"-"===p[n+2]&&(t=!1);for(let s=n;s<r;s++)if((!e&&t&&"]]>"==`${p[s-2]}${p[s-1]}${p[s]}`||!t&&"--\x3e"==`${p[s-2]}${p[s-1]}${p[s]}`)&&(e=s),e&&(e<s&&p[s].trim()||void 0===p[s+1])){let t=s;(void 0===p[s+1]&&!p[s].trim()||">"===p[s])&&(t+=1),b.length&&b[b.length-1][0]===k.lastOpeningBracketAt||b.push([k.lastOpeningBracketAt,e+1]),O.length&&O[O.length-1][0]===k.lastOpeningBracketAt||O.push([k.lastOpeningBracketAt,e+1]);const r=w(p,s,k.leftOuterWhitespace,t,k.lastOpeningBracketAt,e);L.cb({tag:k,deleteFrom:k.leftOuterWhitespace,deleteTo:t,insert:r,rangesArr:P,proposedReturn:[k.leftOuterWhitespace,t,r]}),n=s-1,">"===p[s]&&(n=s),k={},B={};break}}}""===p[n].trim()?null===A&&(A=n,void 0!==k.lastOpeningBracketAt&&k.lastOpeningBracketAt<n&&k.nameStarts&&k.nameStarts<k.lastOpeningBracketAt&&n===k.lastOpeningBracketAt+1&&!y.some((e=>e.name===k.name))&&(k.onlyPlausible=!0,k.name=void 0,k.nameStarts=void 0)):null!==A&&(!k.quotes&&B.equalsAt>A-1&&B.nameEnds&&B.equalsAt>B.nameEnds&&'"'!==p[n]&&"'"!==p[n]&&(e(B)&&k.attributes.push(B),B={},k.equalsSpottedAt=void 0),A=null)," "===p[n]?null===T&&(T=n):null!==T&&(T=null)}var R;if(p&&(L.trimOnlySpaces&&" "===p[0]||!L.trimOnlySpaces&&!p[0].trim()))for(let e=0,t=p.length;e<t;e++){if(L.trimOnlySpaces&&" "!==p[e]||!L.trimOnlySpaces&&p[e].trim()){P.push([0,e]);break}p[e+1]||P.push([0,e+1])}if(p&&(L.trimOnlySpaces&&" "===p[p.length-1]||!L.trimOnlySpaces&&!p[p.length-1].trim()))for(let e=p.length;e--;)if(L.trimOnlySpaces&&" "!==p[e]||!L.trimOnlySpaces&&p[e].trim()){P.push([e+1,p.length]);break}const I=P.current();if((!m||!m.cb)&&I){if(I[0]&&!I[0][0]){P.ranges[0]=[P.ranges[0][0],P.ranges[0][1]]}if(I[I.length-1]&&I[I.length-1][1]===p.length){if(P.ranges){let e=P.ranges[P.ranges.length-1][0];p[e-1]&&(L.trimOnlySpaces&&" "===p[e-1]||!L.trimOnlySpaces&&!p[e-1].trim())&&(e-=1);const t=P.ranges[P.ranges.length-1][2];P.ranges[P.ranges.length-1]=[e,P.ranges[P.ranges.length-1][1]],t&&t.trim()&&P.ranges[P.ranges.length-1].push(t.trimEnd())}}}return{log:{timeTakenInMilliseconds:Date.now()-h},result:s(p,P.current()),ranges:P.current(),allTagLocations:b,filteredTagLocations:O}}export{g as defaults,u as stripHtml,p as version};
