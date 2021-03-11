/**
 * codsen-tokenizer
 * HTML and CSS lexer aimed at code with fatal errors, accepts mixed coding languages
 * Version: 5.3.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/codsen-tokenizer/
 */

import{matchRight as t,matchRightIncl as e,matchLeft as a,matchLeftIncl as r}from"string-match-left-right";import i from"lodash.clonedeep";import{right as l,left as n}from"string-left-right";import{isAttrClosing as s}from"is-html-attribute-closing";import{allHtmlAttribs as u}from"html-all-known-attributes";import{isAttrNameChar as o}from"is-char-suitable-for-html-attr-name";import{isOpening as p}from"is-html-tag-opening";const d=new Set(["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]),c="{}%-$_()*|#",g="{}|#",b="%()$_*#",m="({",h="})",y=[")|(","|(",")(","()","}{","{}","%)","*)","||","--"],f=".,;!?";function A(t){return!(!t||!(t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>96&&t.charCodeAt(0)<123))}function V(t){let e="";for(let a=0,r=t.length;a<r;a++)e="["===t[a]?`]${e}`:"]"===t[a]?`[${e}`:"{"===t[a]?`}${e}`:"}"===t[a]?`{${e}`:"("===t[a]?`)${e}`:")"===t[a]?`(${e}`:"<"===t[a]?`>${e}`:">"===t[a]?`<${e}`:"“"===t[a]?`”${e}`:"”"===t[a]?`“${e}`:`${t[a]}${e}`;return e}function v(t){return d.has(t.toLowerCase())||["doctype","cdata","xml"].includes(t.toLowerCase())}function S(t,e,a,r){for(let i=e,l=t.length;i<l;i++){if(t.startsWith(a,i))return!0;if(t.startsWith(r,i))return!1}return!1}function E(t){return t&&"object"==typeof t&&!Array.isArray(t)}const C=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],k=new Set(["a","abbr","acronym","audio","b","bdi","bdo","big","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","label","map","mark","meter","noscript","object","output","picture","progress","q","ruby","s","samp","script","select","slot","small","span","strong","sub","sup","svg","template","textarea","time","u","tt","var","video","wbr"]),N=["{","}",","],x="'\"“”",O=/[\w-]/;function L(t){if(t&&t.length)for(let e=t.length;e--;)if("esp"===t[e].type)return e}function w(t,e,a){let r=t[e];const i=t.length,l=a[L(a)];for(let n=e+1;n<i&&(!m.includes(t[n])||!h.includes(t[n-1]))&&!(r.length>1&&(r.includes("<")||r.includes("{")||r.includes("[")||r.includes("("))&&"("===t[n])&&(c.includes(t[n])||l&&l.guessedClosingLump.includes(t[n])||"<"===t[e]&&"/"===t[n]||">"===t[n]&&"--"===r&&Array.isArray(a)&&a.length&&"esp"===a[a.length-1].type&&"<"===a[a.length-1].openingLump[0]&&"-"===a[a.length-1].openingLump[2]&&"-"===a[a.length-1].openingLump[3]||!l&&n>e&&"!=@".includes(t[n]));n++)r+=t[n];if(r&&Array.isArray(a)&&a.length&&"esp"===a[a.length-1].type&&a[a.length-1].guessedClosingLump&&r.length>a[a.length-1].guessedClosingLump.length){if(r.endsWith(a[a.length-1].openingLump))return r.slice(0,r.length-a[a.length-1].openingLump.length);let t=new Set(a[a.length-1].guessedClosingLump),e=0;for(let a=0,i=r.length;a<i;a++){if(!t.has(r[a])&&e>1)return r.slice(0,a);t.has(r[a])&&(e+=1,t=new Set([...t].filter((t=>t!==r[a]))))}}return r}function M(r,i,l,n){return!(("<"!==r[i]||!t(r,i,["!--"],{maxMismatches:1,firstMustMatch:!0,trimBeforeMatching:!0})&&!e(r,i,["<![endif]"],{i:!0,maxMismatches:2,trimBeforeMatching:!0})||t(r,i,["![cdata","<"],{i:!0,maxMismatches:1,trimBeforeMatching:!0})||"comment"===l.type&&"not"===l.kind)&&("-"!==r[i]||!e(r,i,["--\x3e"],{trimBeforeMatching:!0})||"comment"===l.type&&(l.closing||"not"===l.kind)||a(r,i,"<",{trimBeforeMatching:!0,trimCharsBeforeMatching:["-","!"]})||Array.isArray(n)&&n.length&&"esp"===n[n.length-1].type&&"<"===n[n.length-1].openingLump[0]&&"-"===n[n.length-1].openingLump[2]&&"-"===n[n.length-1].openingLump[3]))}function Q(t,e,a,r,i){return i&&("/"===t[e]&&"*"===t[e+1]||"*"===t[e]&&"/"===t[e+1])}function $(t,e,a=!1){if(!e.length)return;const r=a?e[0]:e[e.length-1];return"esp"===r.type&&(t.includes(r.guessedClosingLump)||Array.from(t).every((t=>r.guessedClosingLump.includes(t)))||r.guessedClosingLump&&r.guessedClosingLump.length>2&&r.guessedClosingLump[r.guessedClosingLump.length-1]===t[t.length-1]&&r.guessedClosingLump[r.guessedClosingLump.length-2]===t[t.length-2])?t.length:void 0}const F="\\";function q(e,a,r,i,s){return!(!e[a]||!e[a].trim().length||i.length&&"text"!==r.type||r.kind&&["doctype","xml"].includes(r.kind)||s&&"<"!==e[a]||!("<"===e[a]&&(p(e,a,{allowCustomTagNames:!0})||">"===e[l(e,a)]||t(e,a,["doctype","xml","cdata"],{i:!0,trimBeforeMatching:!0,trimCharsBeforeMatching:["?","!","["," ","-"]}))||A(e[a])&&(!e[a-1]||!A(e[a-1])&&!["<","/","!",F].includes(e[n(e,a)]))&&p(e,a,{allowCustomTagNames:!1,skipOpeningBracket:!0}))||!("esp"!==r.type||r.tail&&r.tail.includes(e[a])))}function B(t,e,a,r,i){return!!(c.includes(t[e])&&t[e+1]&&c.includes(t[e+1])&&!(b.includes(t[e])&&b.includes(t[e+1]))&&(t[e]!==t[e+1]||g.includes(t[e]))&&"rule"!==a.type&&"at"!==a.type&&!("-"===t[e]&&"-{(".includes(t[e+1]))&&!("})".includes(t[e])&&"-".includes(t[e+1]))&&!("%"===t[e]&&"%"===t[e+1]&&"0123456789".includes(t[e-1])&&(!t[e+2]||f.includes(t[e+2])||!t[e+2].trim().length))&&!(i&&("{}".includes(t[e])||"{}".includes(t[l(t,e)])))||"<"===t[e]&&("/"===t[e+1]&&c.includes(t[e+2])||c.includes(t[e+1])&&!["-"].includes(t[e+1]))||"<"===t[e]&&("%"===t[e+1]||t.startsWith("jsp:",e+1)||t.startsWith("cms:",e+1)||t.startsWith("c:",e+1))||t.startsWith("${jspProp",e)||">})".includes(t[e])&&Array.isArray(r)&&r.length&&"esp"===r[r.length-1].type&&r[r.length-1].openingLump.includes(V(t[e]))&&(">"!==t[e]||!S(t,e+1,">","<"))||"-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]&&Array.isArray(r)&&r.length&&"esp"===r[r.length-1].type&&"<"===r[r.length-1].openingLump[0]&&"-"===r[r.length-1].openingLump[2]&&"-"===r[r.length-1].openingLump[3])}const W="5.3.0",P=/^\s*!?\s*[a-zA-Z0-9]+(?:[\s;}<>'"]|$)/gm,T={tagCb:null,tagCbLookahead:0,charCb:null,charCbLookahead:0,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100};function R(p,d){const b=Date.now();if("string"!=typeof p)throw void 0===p?new Error("codsen-tokenizer: [THROW_ID_01] the first input argument is completely missing! It should be given as string."):new Error(`codsen-tokenizer: [THROW_ID_02] the first input argument must be string! It was given as "${typeof p}", equal to:\n${JSON.stringify(p,null,4)}`);if(d&&!E(d))throw new Error(`codsen-tokenizer: [THROW_ID_03] the second input argument, an options object, should be a plain object but it was given as type ${typeof d}, equal to ${JSON.stringify(d,null,4)}`);if(d&&E(d)&&d.tagCb&&"function"!=typeof d.tagCb)throw new Error(`codsen-tokenizer: [THROW_ID_04] the opts.tagCb, callback function, should be a function but it was given as type ${typeof d.tagCb}, equal to ${JSON.stringify(d.tagCb,null,4)}`);if(d&&E(d)&&d.charCb&&"function"!=typeof d.charCb)throw new Error(`codsen-tokenizer: [THROW_ID_05] the opts.charCb, callback function, should be a function but it was given as type ${typeof d.charCb}, equal to ${JSON.stringify(d.charCb,null,4)}`);if(d&&E(d)&&d.reportProgressFunc&&"function"!=typeof d.reportProgressFunc)throw new Error(`codsen-tokenizer: [THROW_ID_06] the opts.reportProgressFunc, callback function, should be a function but it was given as type ${typeof d.reportProgressFunc}, equal to ${JSON.stringify(d.reportProgressFunc,null,4)}`);const m={...T,...d};let h=0,f=0;const F=p.length,W=Math.floor(F/2);let R=0,_=!1,H=!1,D=!1;const I=[],z=[];let j={};function J(){j={type:null,start:null,end:null,value:null},G()}const U={attribName:"",attribNameRecognised:!1,attribNameStartsAt:null,attribNameEndsAt:null,attribOpeningQuoteAt:null,attribClosingQuoteAt:null,attribValueRaw:null,attribValue:[],attribValueStartsAt:null,attribValueEndsAt:null,attribStarts:null,attribEnds:null,attribLeft:null};let Z={...U};function G(){Z=i(U)}function K(t){Z.attribValue.length&&Z.attribValue[~-Z.attribValue.length].start&&!Z.attribValue[~-Z.attribValue.length].end&&(Z.attribValue[~-Z.attribValue.length].end=t.start,Z.attribValue[~-Z.attribValue.length].value=p.slice(Z.attribValue[~-Z.attribValue.length].start,t.start)),Z.attribValue.push(t)}const X={start:null,end:null,property:null,propertyStarts:null,propertyEnds:null,value:null,valueStarts:null,valueEnds:null,important:null,importantStarts:null,importantEnds:null,colon:null,semi:null};let Y,tt,et,at={...X};function rt(){at={...X}}function it(t){Z&&"style"===Z.attribName?Z.attribValue.push({...t}):j&&Array.isArray(j.properties)&&j.properties.push({...t})}J();let lt=null;const nt=[];function st(t){return!(!Array.isArray(nt)||!nt.length||nt[~-nt.length].type!==t)}function ut(t){const e=(l(p,t)||t)+1;K({type:"comment",start:t,end:e,value:p.slice(t,e),closing:!0,kind:"block",language:"css"}),R=e,st("block")&&nt.pop()}function ot(t,e,a){const r=t.shift(),l=[];for(let e=0;e<a&&t[e];e++)l.push(i(t[e]));"function"==typeof e&&e(r,l)}function pt(t){m.tagCb&&(I.push(t),I.length>m.tagCbLookahead&&ot(I,m.tagCb,m.tagCbLookahead))}function dt(t,e){if(!["text","esp"].includes(t.type)&&null!==t.start&&t.start<e&&(p[~-e]&&!p[~-e].trim()||"<"===p[e]))if(t.end=null!==n(p,e)?n(p,e)+1:e,t.value=p.slice(t.start,t.end),"tag"!==t.type||"/>".includes(p[~-t.end]))pt(t),J(),p[~-e]&&!p[~-e].trim()&&gt("text",n(p,e)+1);else{let a=t.tagNameEndsAt||e;if(Array.isArray(t.attribs)&&t.attribs.length)for(let e=0,r=t.attribs.length;e<r;e++){if(!t.attribs[e].attribNameRecognised||!t.attribs[e].attribEnds){t.attribs=0===e?[]:t.attribs.splice(0,e);break}a=t.attribs[e].attribEnds,p[a+1]&&!p[a].trim()&&p[a+1].trim()&&(a+=1)}t.end=a,t.value=p.slice(t.start,t.end),t.tagNameEndsAt||(t.tagNameEndsAt=a),t.tagNameStartsAt&&t.tagNameEndsAt&&!t.tagName&&(t.tagName=p.slice(t.tagNameStartsAt,a),t.recognised=v(t.tagName)),pt(t),gt("text",a)}null!==j.start&&(null===j.end&&j.start!==e&&(j.end=e,j.value=p.slice(j.start,j.end)),null!==j.start&&j.end&&(st("at")?nt[~-nt.length].token.rules.push(j):pt(j)),J())}function ct(t,e=null){return"tag"===t?{type:t,start:e,end:null,value:null,tagNameStartsAt:null,tagNameEndsAt:null,tagName:null,recognised:null,closing:!1,void:!1,pureHTML:!0,kind:null,attribs:[]}:"comment"===t?{type:t,start:e,end:null,value:null,closing:!1,kind:"simple",language:"html"}:"rule"===t?{type:t,start:e,end:null,value:null,left:null,nested:!1,openingCurlyAt:null,closingCurlyAt:null,selectorsStart:null,selectorsEnd:null,selectors:[],properties:[]}:"at"===t?{type:t,start:e,end:null,value:null,left:null,nested:!1,openingCurlyAt:null,closingCurlyAt:null,identifier:null,identifierStartsAt:null,identifierEndsAt:null,query:null,queryStartsAt:null,queryEndsAt:null,rules:[]}:"esp"===t?{type:t,start:e,end:null,value:null,head:null,headStartsAt:null,headEndsAt:null,tail:null,tailStartsAt:null,tailEndsAt:null}:{type:"text",start:e,end:null,value:null}}function gt(t,e){G(),j=ct(t,e)}function bt(t){rt(),"number"==typeof t?(at.propertyStarts=t,at.start=t):at={...X,...t}}function mt(t){return!"'\"".includes(p[t])||!(Z.attribOpeningQuoteAt||Z.attribValueStartsAt)||s(p,Z.attribOpeningQuoteAt||Z.attribValueStartsAt,t)}for(let d=0;d<=F;d++){!R&&p[d]&&m.reportProgressFunc&&(F>1e3&&F<2e3?d===W&&m.reportProgressFunc(Math.floor((m.reportProgressFuncTo-m.reportProgressFuncFrom)/2)):F>=2e3&&(h=m.reportProgressFuncFrom+Math.floor(d/F*(m.reportProgressFuncTo-m.reportProgressFuncFrom)),h!==f&&(f=h,m.reportProgressFunc(h))));const b=n(p,d),T=l(p,d);if(H&&j.type&&!["rule","at","text","comment"].includes(j.type)&&(H=!1),R&&d>=R&&(R=0),A(p[d])&&A(p[~-d])&&A(p[d+1])){at&&at.valueStarts&&!at.valueEnds&&!at.importantStarts&&p.startsWith("important",d)&&(at.valueEnds=d,at.value=p.slice(at.valueStarts,d),at.importantStarts=d);continue}if(" \t\r\n".includes(p[d])&&p[d]===p[~-d]&&p[d]===p[d+1])continue;if(!R&&st("at")&&E(nt[~-nt.length].token)&&nt[~-nt.length].token.openingCurlyAt&&!nt[~-nt.length].token.closingCurlyAt)if("}"===p[d]){if(!j.type||"text"===j.type||"rule"===j.type&&null===j.openingCurlyAt){"rule"===j.type&&(j.end=b+1,j.value=p.slice(j.start,j.end),pt(j),st("at")&&nt[~-nt.length].token.rules.push(j),J(),null!==b&&b<~-d&&gt("text",b+1)),dt(j,d);const t=nt.pop();j=t.token,j.closingCurlyAt=d,j.end=d+1,j.value=p.slice(j.start,j.end),pt(j),st("at")&&nt[~-nt.length].token.rules.push(j),J(),R=d+1}}else"text"===j.type&&p[d]&&p[d].trim()&&(j.end=d,j.value=p.slice(j.start,j.end),st("at")?nt[~-nt.length].token.rules.push(j):pt(j),J());if(j.end&&j.end===d&&("style"!==j.tagName||j.closing||(H=!0),et?(Z=et,Z.attribValue.push(j),j=i(tt),et=void 0,tt=void 0):(dt(j,d),nt.length=0)),R||(["tag","at"].includes(j.type)&&"cdata"!==j.kind?!p[d]||!x.includes(p[d])&&!"()".includes(p[d])||x.includes(p[b])&&p[b]===p[T]||!mt(d)||(st("simple")&&nt[~-nt.length].value===V(p[d])?nt.pop():nt.push({type:"simple",value:p[d],position:d})):"comment"===j.type&&["only","not"].includes(j.kind)?["[","]"].includes(p[d])&&(st("simple")&&nt[~-nt.length].value===V(p[d])?nt.pop():nt.push({type:"simple",value:p[d],position:d})):"esp"!==j.type||!"'\"`()".includes(p[d])||['"',"'","`"].includes(p[b])&&p[b]===p[T]||(st("simple")&&nt[~-nt.length].value===V(p[d])?(nt.pop(),R=d+1):"]})>".includes(p[d])||nt.push({type:"simple",value:p[d],position:d}))),!R&&"at"===j.type&&null!=j.start&&d>=j.start&&!j.identifierStartsAt&&p[d]&&p[d].trim()&&"@"!==p[d]&&(j.identifierStartsAt=d),!R&&"at"===j.type&&j.queryStartsAt&&!j.queryEndsAt&&"{;".includes(p[d])&&(j.queryEndsAt="{"===p[d]?p[~-d]&&p[~-d].trim()?d:null!==b?b+1:d:n(p,d+1)||0,j.queryStartsAt&&j.queryEndsAt&&(j.query=p.slice(j.queryStartsAt,j.queryEndsAt)),j.end=";"===p[d]?d+1:d,j.value=p.slice(j.start,j.end),";"===p[d]?pt(j):(j.openingCurlyAt=d,nt.push({type:"at",token:j})),J(),R=d+1),!R&&"at"===j.type&&j.identifier&&p[d]&&p[d].trim()&&!j.queryStartsAt&&(j.queryStartsAt=d),!R&&j&&"at"===j.type&&j.identifierStartsAt&&d>=j.start&&p[d]&&(!p[d].trim()||"()".includes(p[d]))&&!j.identifierEndsAt&&(j.identifierEndsAt=d,j.identifier=p.slice(j.identifierStartsAt,d)),"rule"===j.type)if(Y&&(N.includes(p[d])||p[d]&&T&&!p[d].trim()&&N.includes(p[T])))j.selectors.push({value:p.slice(Y,d),selectorStarts:Y,selectorEnds:d}),Y=void 0,j.selectorsEnd=d;else if("{"===p[d]&&j.openingCurlyAt&&!j.closingCurlyAt)for(let t=d;t--;)if(!p[t].trim()||"{}\"';".includes(p[t])){at&&at.start&&!at.end&&(at.end=t+1,at.property=p.slice(at.start,at.end),it(at),rt(),j.end=t+1,j.value=p.slice(j.start,j.end),pt(j),gt("@"===p[t+1]?"at":"rule",t+1),j.left=n(p,t+1),j.selectorsStart=t+1,d=t+1);break}const I=L(nt);if(!R&&p[d])if(q(p,d,j,nt,H)){j.type&&null!==j.start&&("rule"===j.type&&at&&at.start&&(at.importantStarts&&!at.importantEnds&&(at.importantEnds=d,at.important=p.slice(at.importantStarts,d)),at.propertyStarts&&!at.propertyEnds&&(at.propertyEnds=d,at.property||(at.property=p.slice(at.propertyStarts,d))),at.end||(at.end=d),at.valueStarts&&!at.valueEnds&&(at.valueEnds=d,at.value||(at.value=p.slice(at.valueStarts,d))),it(at),rt()),dt(j,d),J()),gt("tag",d),H&&(H=!1);const t="?![-/";let e="",a=!1;if(T)for(let r=T;r<F&&(!a&&p[r]&&p[r].trim()&&p[r].toUpperCase()!==p[r].toLowerCase()&&(a=!0),!a||!p[r]||p[r].trim()&&(/\w/.test(p[r])||t.includes(p[r]))&&"["!==p[r]);r++)t.includes(p[r])||(e+=p[r].trim().toLowerCase());"doctype"===e?j.kind="doctype":"cdata"===e?j.kind="cdata":"xml"===e?j.kind="xml":k.has(e)&&(j.kind="inline",e&&(R=d))}else if(!_&&M(p,d,j,nt))null!=j.start&&dt(j,d),gt("comment",d),"-"===p[d]?j.closing=!0:e(p,d,["<![endif]--\x3e"],{i:!0,trimBeforeMatching:!0,maxMismatches:2})&&(j.closing=!0,j.kind="only"),H&&(H=!1);else if(!_&&Q(p,d,0,0,H))null!=j.start&&dt(j,d),gt("comment",d),j.language="css",j.kind="/"===p[d]&&"/"===p[d+1]?"line":"block",j.value=p.slice(d,d+2),j.end=d+2,j.closing="*"===p[d]&&"/"===p[d+1],D=!0,j.closing&&(D=!1),R=d+2;else if(!_&&("number"==typeof I&&nt[I]&&"esp"===nt[I].type&&nt[I].openingLump&&nt[I].guessedClosingLump&&nt[I].guessedClosingLump.length>1&&nt[I].guessedClosingLump.includes(p[d])&&nt[I].guessedClosingLump.includes(p[d+1])&&!(nt[I+1]&&"'\"".includes(nt[I+1].value)&&p.indexOf(nt[I+1].value,d)>0&&nt[I].guessedClosingLump.includes(p[l(p,p.indexOf(nt[I+1].value,d))]))||B(p,d,j,nt,H)&&(!st("simple")||!["'",'"'].includes(nt[~-nt.length].value)||Z&&Z.attribStarts&&!Z.attribEnds))){const t=w(p,d,nt);if(!y.includes(t)){let e,a;if(nt.length&&(e=$(t,nt))){if("esp"===j.type){if(j.end||(j.end=d+e,j.value=p.slice(j.start,j.end),j.tail=p.slice(d,d+e),j.tailStartsAt=d,j.tailEndsAt=j.end,">"===p[d]&&"/"===p[b]&&(j.tailStartsAt=b,j.tail=p.slice(j.tailStartsAt,d+1))),R=j.tailEndsAt,tt){Array.isArray(tt.attribs)||(tt.attribs=[]),et?(Z=et,Z.attribValue.push({...j})):tt.attribs.push({...j}),j=i(tt),tt=void 0,et=void 0,nt.pop();continue}dt(j,d),J()}nt.pop()}else if(nt.length&&(e=$(t,nt,!0)))"esp"===j.type&&(j.end||(j.end=d+(e||0),j.value=p.slice(j.start,j.end)),j.tailStartsAt||(j.tailStartsAt=d),!j.tailEndsAt&&e&&(j.tailEndsAt=j.tailStartsAt+e,j.tail=p.slice(d,d+e)),dt(j,d),J()),nt.length=0;else if(Z&&Z.attribValue&&Z.attribValue.length&&Z.attribValue[~-Z.attribValue.length].start&&Array.from(p.slice(Z.attribValue[~-Z.attribValue.length].start,d)).some(((e,r)=>t.includes(V(e))&&(g.includes(e)||!r)&&(a={char:e,idx:r})))&&"tag"===j.type&&Z&&Z.attribValueStartsAt&&!Z.attribValueEndsAt&&Z.attribValue[~-Z.attribValue.length]&&"text"===Z.attribValue[~-Z.attribValue.length].type){j.pureHTML=!1;const e=Z.attribValue[~-Z.attribValue.length],r=ct("esp",e.start);a&&a.idx||(r.head=a.char,r.headStartsAt=e.start,r.headEndsAt=r.headStartsAt+1,r.tailStartsAt=d,r.tailEndsAt=d+t.length,r.tail=t,Z.attribValue[~-Z.attribValue.length]=r)}else st("esp")&&nt.pop(),et&&(Array.isArray(et.attribValue)||(et.attribValue=[]),et.attribValue.push(j)),nt.push({type:"esp",openingLump:t,guessedClosingLump:V(t),position:d}),null!==j.start&&("tag"===j.type?(!j.tagNameStartsAt||j.tagName&&j.tagNameEndsAt||(j.tagNameEndsAt=d,j.tagName=p.slice(j.tagNameStartsAt,d),j.recognised=v(j.tagName)),tt=i(j),Z.attribStarts&&!Z.attribEnds&&(et=i(Z))):et?et&&Array.isArray(et.attribValue)&&et.attribValue.length&&"esp"===et.attribValue[~-et.attribValue.length].type&&!et.attribValue[~-et.attribValue.length].end&&(et.attribValue[~-et.attribValue.length].end=d,et.attribValue[~-et.attribValue.length].value=p.slice(et.attribValue[~-et.attribValue.length].start,d)):dt(j,d)),gt("esp",d),j.head=t,j.headStartsAt=d,j.headEndsAt=d+t.length,tt&&tt.pureHTML&&(tt.pureHTML=!1),et&&Array.isArray(et.attribValue)&&et.attribValue.length&&(et.attribValue[~-et.attribValue.length].start===j.start?et.attribValue.pop():"text"!==et.attribValue[~-et.attribValue.length].type||et.attribValue[~-et.attribValue.length].end||(et.attribValue[~-et.attribValue.length].end=d,et.attribValue[~-et.attribValue.length].value=p.slice(et.attribValue[~-et.attribValue.length].start,d)));R=d+(e||t.length)}}else _||!H||D||!p[d]||!p[d].trim()||"{}".includes(p[d])||j.type&&!["text"].includes(j.type)?j.type||(gt("text",d),R=_&&p.indexOf("<\/script>",d)?p.indexOf("<\/script>",d):d):(j.type&&dt(j,d),gt("@"===p[d]?"at":"rule",d),j.left=lt,j.nested=nt.some((t=>"at"===t.type)));let U,X;if(R||!at.start&&"!"!==p[d]||(U=";'\"{}<>".includes(p[l(p,d-1)]),X=e(p,d,["!important"],{i:!0,trimBeforeMatching:!0,maxMismatches:2})),R||!at||!(at.semi&&at.semi<d&&at.semi<d)&&((!at.valueStarts||at.valueEnds||"!"===p[T]||T&&!U)&&(!at.importantStarts||at.importantEnds)||at.valueEnds&&";"===p[T]||p[d]&&p[d].trim()&&(at.valueEnds||";"!==p[d])&&((!";}/".includes(p[yt=d])||Z&&Z.attribName&&"style"===Z.attribName)&&!("/;'\"><".includes(p[yt])&&Z&&"style"===Z.attribName&&mt(yt))))||(at.importantStarts&&!at.importantEnds&&(at.importantEnds=n(p,d)+1,at.important=p.slice(at.importantStarts,at.importantEnds)),at.valueStarts&&!at.valueEnds&&(at.valueEnds=d,at.value=p.slice(at.valueStarts,d)),";"===p[d]?(at.semi=d,at.end=d+1):";"===p[T]&&(at.semi=T,at.end=at.semi+1,R=at.end),at.end||(at.end=d),it(at),rt(),R||p[d]&&!p[d].trim()||";"!==p[d]||(R=d)),!R&&at&&at.valueStarts&&!at.valueEnds)if(!p[d]||U||X||"!"===p[l(p,d-1)]||";}".includes(p[d])&&(!Z||!Z.attribName||"style"!==Z.attribName)||";'\"".includes(p[d])&&Z&&"style"===Z.attribName&&mt(d)||T&&!p[d].trim()&&(p.slice(d,T).includes("\n")||p.slice(d,T).includes("\r")))!lt||"'\"".includes(p[d])&&T&&"'\";".includes(p[T])||(at.valueEnds=lt+1,at.value=p.slice(at.valueStarts,lt+1)),";"===p[d]?at.semi=d:p[d]&&!p[d].trim()&&";"===p[T]&&(at.semi=T),at.semi&&(at.end=at.semi+1),at.semi||U||X||"!"===p[l(p,d-1)]||at.end||(at.end=d),at.end&&(at.end>d&&(R=at.end),it(at),rt());else if(":"===p[d]&&at&&at.colon&&at.colon<d&&lt&&at.colon+1<lt){let t=[];if(l(p,at.colon)&&(t=p.slice(l(p,at.colon),lt+1).split(/\s+/)),2===t.length){at.valueEnds=at.valueStarts+t[0].length,at.value=p.slice(at.valueStarts,at.valueEnds),at.end=at.valueEnds,it(at);const e=at.end,a=lt+1-t[1].length;rt(),it({type:"text",start:e,end:a,value:p.slice(e,a)}),at.start=a,at.propertyStarts=a}}else"/"===p[d]&&"*"===p[T]&&(at.valueStarts&&!at.valueEnds&&(at.valueEnds=d,at.value=p.slice(at.valueStarts,d)),at.end||(at.end=d),it(at),rt());if(!R&&at&&at.start&&!at.end&&";"===p[d]&&(at.semi=d,at.end=d+1,at.propertyEnds||(at.propertyEnds=d),at.propertyStarts&&at.propertyEnds&&!at.property&&(at.property=p.slice(at.propertyStarts,at.propertyEnds)),it(at),rt(),R=d),at&&at.importantStarts&&!at.importantEnds&&p[d]&&!p[d].trim()&&(at.importantEnds=d,at.important=p.slice(at.importantStarts,d)),!R&&at&&at.valueEnds&&!at.importantStarts&&("!"===p[d]||A(p[d])&&p.slice(d).match(P))&&(at.importantStarts=d,(p[d-1]&&p[d-1].trim()&&p[d-2]&&!p[d-2].trim()||"1"===p[d-1]&&p[d-2]&&!/\d/.test(p[d-2]))&&(at.valueEnds=n(p,d-1)+1,at.value=p.slice(at.valueStarts,at.valueEnds),at.importantStarts--,at.important=p[d-1]+at.important)),!R&&at&&at.colon&&!at.valueStarts&&p[d]&&p[d].trim())if(";}'\"".includes(p[d])&&mt(d)){let t;";"===p[d]&&(at.semi=d),at.end||(at.end=at.semi?at.semi+1:n(p,d)+1,t=at.end),it(at),rt(),t&&t<d&&it({type:"text",start:t,end:d,value:p.slice(t,d)})}else"!"===p[d]?at.importantStarts=d:at.valueStarts=d;if(R||"rule"!==j.type||!p[d]||!p[d].trim()||"{}".includes(p[d])||Y||j.openingCurlyAt||(",".includes(p[d])?j.selectorsEnd=d+1:(Y=d,null===j.selectorsStart&&(j.selectorsStart=d))),!R&&at&&at.propertyStarts&&at.propertyStarts<d&&!at.propertyEnds&&(!p[d]||!p[d].trim()||!O.test(p[d])&&(":"===p[d]||!T||!":/}".includes(p[T])||"}"===p[d]&&"}"===p[T])||"!"===p[d])&&("/"!==p[d]||"/"!==p[d-1])&&(at.propertyEnds=d,at.property=p.slice(at.propertyStarts,d),at.valueStarts&&(at.end=d),("};".includes(p[d])||p[d]&&!p[d].trim()&&":"!==p[T])&&(";"===p[d]&&(at.semi=d),at.end||(at.end=at.semi?at.semi+1:d),it(at),rt()),p[d]&&p[d].trim()&&O.test(p[at.propertyStarts])&&!O.test(p[d])&&!":'\"".includes(p[d]))){const t=p.indexOf(";",d),e=p.indexOf(":",d);(-1!==e||-1===t)&&-1!==e&&-1!==t&&e<t||"{}".includes(p[d])||!T||"!".includes(p[d])&&!A(p[T])?-1!==e&&-1!==t&&e<t?at.propertyEnds=null:"!"===p[d]&&(at.importantStarts=d):(at.colon=d,at.valueStarts=T)}if(!R&&at&&at.propertyEnds&&!at.valueStarts&&":"===p[d]&&(at.colon=d,T||(at.end=d+1,p[d+1]&&(it(at),rt(),j.properties&&(j.properties.push({type:"text",start:d+1,end:null,value:null}),R=d+1))),at.propertyEnds&&lt&&at.propertyEnds!==lt+1&&!O.test(p[at.propertyEnds])&&(at.propertyEnds=lt+1,at.property=p.slice(at.propertyStarts,at.propertyEnds))),!R&&"rule"===j.type&&p[d]&&p[d].trim()&&!"{}".includes(p[d])&&j.selectorsEnd&&j.openingCurlyAt&&!at.propertyStarts&&!at.importantStarts&&(Array.isArray(j.properties)&&j.properties.length&&j.properties[~-j.properties.length].start&&!j.properties[~-j.properties.length].end&&(j.properties[~-j.properties.length].end=d,j.properties[~-j.properties.length].value=p.slice(j.properties[~-j.properties.length].start,d)),";"===p[d]?(bt({start:d,end:d+1,semi:d}),it(at),rt()):bt("!"===p[d]?{start:d,importantStarts:d}:d),R=d),R||!Z||"style"!==Z.attribName||!Z.attribOpeningQuoteAt||Z.attribClosingQuoteAt||at.start||!p[d]||!p[d].trim()||"'\"".includes(p[d])||st("block")||("/"===p[d]&&"*"===p[T]?(K({type:"comment",start:d,end:T+1,value:p.slice(d,T+1),closing:!1,kind:"block",language:"css"}),nt.push({type:"block",value:p.slice(d,T+1),position:d}),R=T+1):"*"===p[d]&&"/"===p[T]?ut(d):(Array.isArray(Z.attribValue)&&Z.attribValue.length&&!Z.attribValue[~-Z.attribValue.length].end&&(Z.attribValue[~-Z.attribValue.length].end=d,Z.attribValue[~-Z.attribValue.length].value=p.slice(Z.attribValue[~-Z.attribValue.length].start,d)),";"===p[d]?(bt({start:d,end:d+1,semi:d}),R=d):bt(X?{start:d,importantStarts:d}:d))),"comment"===j.type&&["only","not"].includes(j.kind),!R)if("tag"!==j.type||nt.length||">"!==p[d])if("comment"===j.type&&"html"===j.language&&!nt.length&&"simple"===j.kind&&("<"===p[j.start]&&"-"===p[d]&&(a(p,d,"!-",{trimBeforeMatching:!0})||r(p,d,"!-",{trimBeforeMatching:!0})&&"-"!==p[d+1])||"-"===p[j.start]&&">"===p[d]&&a(p,d,"--",{trimBeforeMatching:!0,maxMismatches:1})))"-"===p[d]&&(t(p,d,["[if","(if","{if"],{i:!0,trimBeforeMatching:!0})||t(p,d,["if"],{i:!0,trimBeforeMatching:!0})&&(S(p,d,"]",">")||p.includes("mso",d)&&!p.slice(d,p.indexOf("mso")).includes("<")&&!p.slice(d,p.indexOf("mso")).includes(">")))?j.kind="only":"-"!==p[j.start]&&e(p,d,["-<![endif"],{i:!0,trimBeforeMatching:!0,maxMismatches:2})?(j.kind="not",j.closing=!0):"simple"!==j.kind||"html"!==j.language||j.closing||">"!==p[T]?"html"===j.language&&(j.end=d+1,"!"===p[b]&&"-"===p[T]&&(j.end=T+1),j.value=p.slice(j.start,j.end)):(j.end=T+1,j.kind="simplet",j.closing=null);else if("comment"!==j.type||"html"!==j.language||">"!==p[d]||nt.length&&"<"!==p[T]){if("comment"===j.type&&"css"===j.language&&"*"===p[d]&&"/"===p[d+1])j.end=d+1,j.value=p.slice(j.start,j.end);else if("esp"===j.type&&null===j.end&&"string"==typeof j.head&&"string"==typeof j.tail&&j.tail.includes(p[d])){let t="";for(let e=d;e<F&&c.includes(p[e]);e++)t+=p[e];if(t.length>j.head.length){const e=j.head[0];if(t.endsWith(j.head))j.end=d+t.length-j.head.length,j.value=p.slice(j.start,j.end),R=j.end;else if(t.startsWith(j.tail))j.end=d+j.tail.length,j.value=p.slice(j.start,j.end),R=j.end;else if(!j.tail.includes(e)&&t.includes(e)||t.endsWith(j.head)||t.startsWith(j.tail)){const a=t.slice(0,t.indexOf(e)),r=t.slice(t.indexOf(e));a.length&&r.length&&j.tail.split("").every((t=>a.includes(t)))&&(j.end=d+a.length,j.value=p.slice(j.start,j.end),R=j.end)}else j.end=d+t.length,j.value=p.slice(j.start,j.end),R=j.end}else j.end=d+t.length,j.value=p.slice(j.start,j.end),st("esp")&&nt.pop(),R=j.end}}else Array.isArray(nt)&&nt.length&&"["===nt[~-nt.length].value&&nt.pop(),!["simplet","not"].includes(j.kind)&&t(p,d,["\x3c!--\x3e","\x3c!----\x3e"],{trimBeforeMatching:!0,maxMismatches:1,lastMustMatch:!0})?j.kind="not":(j.end=d+1,j.value=p.slice(j.start,j.end));else j.end=d+1,j.value=p.slice(j.start,j.end);if(R||"tag"!==j.type||!j.tagNameStartsAt||j.tagNameEndsAt||p[d]&&/[.\-_a-z0-9\u00B7\u00C0-\uFFFD]/i.test(p[d])||(j.tagNameEndsAt=d,j.tagName=p.slice(j.tagNameStartsAt,d).toLowerCase(),j.tagName&&"script"===j.tagName.toLowerCase()&&(_=!_),"xml"===j.tagName&&j.closing&&!j.kind&&(j.kind="xml"),C.includes(j.tagName)&&(j.void=!0),j.recognised=v(j.tagName),R=d),R||"tag"!==j.type||j.tagNameStartsAt||null==j.start||!(j.start<d||"<"!==p[j.start])||("/"===p[d]?(j.closing=!0,R=d):A(p[d])&&(j.tagNameStartsAt=d,j.closing||(j.closing=!1,R=d))),!R&&"tag"===j.type&&"cdata"!==j.kind&&Z.attribNameStartsAt&&d>Z.attribNameStartsAt&&null===Z.attribNameEndsAt&&!o(p[d])&&(Z.attribNameEndsAt=d,Z.attribName=p.slice(Z.attribNameStartsAt,d),Z.attribNameRecognised=u.has(Z.attribName),Z.attribName.startsWith("mc:")&&(j.pureHTML=!1),p[d]&&!p[d].trim()&&"="===p[T]||(p[d]&&!p[d].trim()||">"===p[d]||"/"===p[d]&&">"===p[T])&&("'\"".includes(p[T])||(Z.attribEnds=d,j.attribs.push(i(Z)),G()))),!R&&p[d]&&"tag"===j.type&&"cdata"!==j.kind&&j.tagNameEndsAt&&d>j.tagNameEndsAt&&null===Z.attribStarts&&o(p[d])&&(Z.attribStarts=d,Z.attribLeft=lt,Z.attribNameStartsAt=d),R||"rule"!==j.type||("{"!==p[d]||j.openingCurlyAt?"}"===p[d]&&j.openingCurlyAt&&!j.closingCurlyAt&&(j.closingCurlyAt=d,j.end=d+1,j.value=p.slice(j.start,j.end),Array.isArray(j.properties)&&j.properties.length&&j.properties[~-j.properties.length].start&&!j.properties[~-j.properties.length].end&&(j.properties[~-j.properties.length].end=d,j.properties[~-j.properties.length].value=p.slice(j.properties[~-j.properties.length].start,d)),at.start&&(j.properties.push(at),rt()),pt(j),st("at")&&nt[~-nt.length].token.rules.push(j),J()):j.openingCurlyAt=d),!R&&Z.attribName&&Array.isArray(Z.attribValue)&&Z.attribValue.length&&!Z.attribValue[~-Z.attribValue.length].end&&"*"===p[d]&&"/"===p[T]&&ut(d),(!R&&Z&&Z.attribValueStartsAt&&!Z.attribValueEndsAt&&!at.propertyStarts&&d>=Z.attribValueStartsAt&&Array.isArray(Z.attribValue)&&(!Z.attribValue.length||Z.attribValue[~-Z.attribValue.length].end&&Z.attribValue[~-Z.attribValue.length].end<=d)||!R&&"rule"===j.type&&j.openingCurlyAt&&!j.closingCurlyAt&&!at.propertyStarts)&&(";"===p[d]&&(Z&&Array.isArray(Z.attribValue)&&Z.attribValue.length&&Z.attribValue[~-Z.attribValue.length].semi&&Z.attribValue[~-Z.attribValue.length].semi<d||j&&"rule"===j.type&&Array.isArray(j.properties)&&j.properties.length&&j.properties[~-j.properties.length].semi&&j.properties[~-j.properties.length].semi<d)?(bt({start:d,semi:d}),R=d+1):(p[d]&&!p[d].trim()||st("block"))&&(Z.attribName?Z.attribValue.push({type:"text",start:d,end:null,value:null}):"rule"!==j.type||Array.isArray(j.properties)&&j.properties.length&&!j.properties[~-j.properties.length].end||j.properties.push({type:"text",start:d,end:null,value:null}))),!R&&"tag"===j.type&&Z.attribValueStartsAt&&d>=Z.attribValueStartsAt&&null===Z.attribValueEndsAt)if(x.includes(p[d]))nt.some((t=>"esp"===t.type))||p[d]&&p.includes(">",d)&&!s(p,Z.attribOpeningQuoteAt||Z.attribValueStartsAt,d)?Array.isArray(Z.attribValue)&&Z.attribValue.length&&"text"===Z.attribValue[~-Z.attribValue.length].type||at.propertyStarts||Z.attribValue.push({type:"text",start:d,end:null,value:null}):(Z.attribClosingQuoteAt=d,Z.attribValueEndsAt=d,Z.attribValueStartsAt&&(Z.attribValueRaw=p.slice(Z.attribValueStartsAt,d)),Z.attribEnds=d+1,at.propertyStarts&&(Z.attribValue.push(i(at)),rt()),Array.isArray(Z.attribValue)&&Z.attribValue.length&&!Z.attribValue[~-Z.attribValue.length].end&&(Z.attribValue[~-Z.attribValue.length].property||(Z.attribValue[~-Z.attribValue.length].end=d,Z.attribValue[~-Z.attribValue.length].value=p.slice(Z.attribValue[~-Z.attribValue.length].start,d))),p[Z.attribOpeningQuoteAt]!==p[d]&&(nt.pop(),nt.pop()),Z.attribValue[~-Z.attribValue.length]&&!Z.attribValue[~-Z.attribValue.length].end&&(Z.attribValue[~-Z.attribValue.length].end=d),j.attribs.push(i(Z)),G());else if(null===Z.attribOpeningQuoteAt&&(p[d]&&!p[d].trim()||["/",">"].includes(p[d])||c.includes(p[d])&&c.includes(p[d+1])))Z.attribValueEndsAt=d,Z.attribValueRaw=p.slice(Z.attribValueStartsAt,d),Array.isArray(Z.attribValue)&&Z.attribValue.length&&!Z.attribValue[~-Z.attribValue.length].end&&(Z.attribValue[~-Z.attribValue.length].end=d,Z.attribValue[~-Z.attribValue.length].value=p.slice(Z.attribValue[~-Z.attribValue.length].start,Z.attribValue[~-Z.attribValue.length].end)),Z.attribEnds=d,j.attribs.push(i(Z)),G(),nt.pop(),">"===p[d]&&(j.end=d+1,j.value=p.slice(j.start,j.end));else if("="!==p[d]||null===b||!T||!("'\"".includes(p[T])||p[~-d]&&A(p[~-d]))||Z&&Z.attribOpeningQuoteAt&&(/\//.test(p.slice(Z.attribOpeningQuoteAt+1,d))||/mailto:/.test(p.slice(Z.attribOpeningQuoteAt+1,d))||/\w\?\w/.test(p.slice(Z.attribOpeningQuoteAt+1,d))))"/"===p[d]&&">"===p[T]?(Z.attribValueStartsAt&&(Z.attribValueStartsAt=null),Z.attribEnds||(Z.attribEnds=d)):!Z||"style"===Z.attribName||!Z.attribStarts||Z.attribEnds||at.propertyStarts||Array.isArray(Z.attribValue)&&Z.attribValue.length&&!(Z.attribValue[~-Z.attribValue.length].end&&Z.attribValue[~-Z.attribValue.length].end<=d)||Z.attribValue.push({type:"text",start:d,end:null,value:null});else{let t,e;for(let a=b;a>=Z.attribValueStartsAt;a--)t||!p[a]||p[a].trim()||(t=!0,e&&p.slice(a,e)),t&&p[a]&&p[a].trim()&&(t=!1,e||(e=a+1));if(e){Z.attribValueEndsAt=e,Z.attribValueStartsAt&&(Z.attribValueRaw=p.slice(Z.attribValueStartsAt,e),Array.isArray(Z.attribValue)&&Z.attribValue.length&&!Z.attribValue[~-Z.attribValue.length].end&&(Z.attribValue[~-Z.attribValue.length].end=Z.attribValueEndsAt,Z.attribValue[~-Z.attribValue.length].value=p.slice(Z.attribValue[~-Z.attribValue.length].start,Z.attribValueEndsAt))),Z.attribEnds=e,p[Z.attribOpeningQuoteAt]!==p[d]&&nt.pop(),j.attribs.push(i(Z)),G(),d=~-e;continue}if(Z.attribOpeningQuoteAt&&("'\"".includes(p[T])||u.has(p.slice(Z.attribOpeningQuoteAt+1,d).trim()))){d=Z.attribOpeningQuoteAt,Z.attribEnds=Z.attribOpeningQuoteAt+1,Z.attribValueStartsAt=null,nt.pop(),j.attribs.push(i(Z)),G();continue}}else"esp"===j.type&&et&&tt&&et.attribOpeningQuoteAt&&et.attribValueStartsAt&&"'\"".includes(p[d])&&p[et.attribOpeningQuoteAt]===p[d]&&s(p,et.attribOpeningQuoteAt,d)&&(j.end=d,j.value=p.slice(j.start,d),et&&!Array.isArray(et.attribValue)&&(et.attribValue=[]),et.attribValue.push(j),et.attribValueEndsAt=d,et.attribValueRaw=p.slice(et.attribValueStartsAt,d),et.attribClosingQuoteAt=d,et.attribEnds=d+1,j=i(tt),j.attribs.push(et),et=void 0,tt=void 0,nt.pop(),nt.pop(),nt.pop());if(!R&&"tag"===j.type&&!Z.attribValueStartsAt&&Z.attribNameEndsAt&&Z.attribNameEndsAt<=d&&p[d]&&p[d].trim())if("="!==p[d]||x.includes(p[T])||"=".includes(p[T])||c.includes(p[T])){if(x.includes(p[d])){const t=T;!(t&&x.includes(p[t])&&p[d]!==p[t]&&p.length>t+2&&p.slice(t+1).includes(p[t]))||p.indexOf(p[t],t+1)&&l(p,p.indexOf(p[t],t+1))&&p[d]===p[l(p,p.indexOf(p[t],t+1))]||Array.from(p.slice(t+1,p.indexOf(p[t]))).some((t=>`<>=${p[d]}`.includes(t)))?Z.attribOpeningQuoteAt?(s(p,Z.attribOpeningQuoteAt,d)&&(Z.attribClosingQuoteAt=d),Z.attribOpeningQuoteAt&&Z.attribClosingQuoteAt&&(Z.attribValueRaw=Z.attribOpeningQuoteAt<~-Z.attribClosingQuoteAt?p.slice(Z.attribOpeningQuoteAt+1,Z.attribClosingQuoteAt):"",Z.attribEnds=d+1,j.attribs.push(i(Z)),G())):(Z.attribOpeningQuoteAt=d,!p[d+1]||p[d+1]===p[d]&&mt(d+1)||(Z.attribValueStartsAt=d+1)):nt.pop()}}else{const t=x.split("").map((t=>p.indexOf(t,T))).filter((t=>t>0)).length?Math.min(...x.split("").map((t=>p.indexOf(t,T))).filter((t=>t>0))):void 0;T&&p.slice(T).includes("=")&&u.has(p.slice(T,T+p.slice(T).indexOf("=")).trim().toLowerCase())?(Z.attribEnds=d+1,j.attribs.push({...Z}),G()):t&&!p.slice(T,t).includes("=")&&p.includes(p[t],t+1)&&!Array.from(p.slice(t+1,p.indexOf(p[t],t+1))).some((t=>"<>=".includes(t)))||(Z.attribValueStartsAt=T,nt.push({type:"simple",value:null,position:Z.attribValueStartsAt}))}if(!R&&">"===p[d]&&"%"!==p[d-1]&&"tag"===j.type&&Z.attribStarts&&!Z.attribEnds){let t=!1;if(p[d+1])for(let e=d+1;e<F;e++){if(Z.attribOpeningQuoteAt&&p[e]===p[Z.attribOpeningQuoteAt]){e!==d+1&&"="!==p[~-e]&&(t=!0);break}if(">"===p[e])break;if("<"===p[e]){t=!0,nt.pop();break}if(!p[e+1]){t=!0;break}}else t=!0;t&&(j.end=d+1,j.value=p.slice(j.start,j.end),Z.attribValueStartsAt&&d&&Z.attribValueStartsAt<d&&p.slice(Z.attribValueStartsAt,d).trim()?(Z.attribValueEndsAt=d,Z.attribValueRaw=p.slice(Z.attribValueStartsAt,d),Array.isArray(Z.attribValue)&&Z.attribValue.length&&!Z.attribValue[~-Z.attribValue.length].end&&(Z.attribValue[~-Z.attribValue.length].end=d,Z.attribValue[~-Z.attribValue.length].value=p.slice(Z.attribValue[~-Z.attribValue.length].start,d))):Z.attribValueStartsAt=null,null===Z.attribEnds&&(Z.attribEnds=d),Z&&(j.attribs.push(i(Z)),G()))}p[d]&&m.charCb&&(ht={type:j.type,chr:p[d],i:d},m.charCb&&(z.push(ht),z.length>m.charCbLookahead&&ot(z,m.charCb,m.charCbLookahead))),p[d]||null===j.start||(j.end=d,j.value=p.slice(j.start,j.end),Z&&Z.attribName&&(Z.attribEnds||(Z.attribEnds=d),j.attribs.push({...Z}),G()),j&&Array.isArray(j.properties)&&j.properties.length&&!j.properties[~-j.properties.length].end&&(j.properties[~-j.properties.length].end=d,j.properties[~-j.properties.length].start&&!j.properties[~-j.properties.length].value&&(j.properties[~-j.properties.length].value=p.slice(j.properties[~-j.properties.length].start,d))),at&&at.propertyStarts&&(at.end||(at.end=d),it(at),rt()),pt(j)),p[d]&&p[d].trim()&&(lt=d)}var ht,yt;if(z.length)for(let t=0,e=z.length;t<e;t++)ot(z,m.charCb,m.charCbLookahead);if(I.length)for(let t=0,e=I.length;t<e;t++)ot(I,m.tagCb,m.tagCbLookahead);return{timeTakenInMilliseconds:Date.now()-b}}const _={matchLayerLast:$};export{T as defaults,R as tokenizer,_ as util,W as version};
