import{c as te}from"/notebooks_test/build/_shared/chunk-2NH4LW52.js";var je=te((dn,Ue)=>{function be(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var n=e[t];typeof n=="object"&&!Object.isFrozen(n)&&be(n)}),e}var Ie=be,gt=be;Ie.default=gt;var re=class{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}};function K(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function P(e,...t){let n=Object.create(null);for(let s in e)n[s]=e[s];return t.forEach(function(s){for(let g in s)n[g]=s[g]}),n}var ft="</span>",me=e=>!!e.kind,de=class{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=K(t)}openNode(t){if(!me(t))return;let n=t.kind;t.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(t){me(t)&&(this.buffer+=ft)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}},W=class{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){let n={kind:t,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(s=>this._walk(t,s)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{W._collapse(n)}))}},pe=class extends W{constructor(t){super(),this.options=t}addKeyword(t,n){t!==""&&(this.openNode(n),this.addText(t),this.closeNode())}addText(t){t!==""&&this.add(t)}addSublanguage(t,n){let s=t.root;s.kind=n,s.sublanguage=!0,this.add(s)}toHTML(){return new de(this,this.options).value()}finalize(){return!0}};function ht(e){return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function V(e){return e?typeof e=="string"?e:e.source:null}function dt(...e){return e.map(n=>V(n)).join("")}function pt(...e){return"("+e.map(n=>V(n)).join("|")+")"}function Et(e){return new RegExp(e.toString()+"|").exec("").length-1}function bt(e,t){let n=e&&e.exec(t);return n&&n.index===0}var xt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function _t(e,t="|"){let n=0;return e.map(s=>{n+=1;let g=n,h=V(s),b="";for(;h.length>0;){let i=xt.exec(h);if(!i){b+=h;break}b+=h.substring(0,i.index),h=h.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?b+="\\"+String(Number(i[1])+g):(b+=i[0],i[0]==="("&&n++)}return b}).map(s=>`(${s})`).join(t)}var vt=/\b\B/,Be="[a-zA-Z]\\w*",xe="[a-zA-Z_]\\w*",_e="\\b\\d+(\\.\\d+)?",De="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Te="\\b(0b[01]+)",Nt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Rt=(e={})=>{let t=/^#![ ]*\//;return e.binary&&(e.begin=dt(t,/.*\b/,e.binary,/\b.*/)),P({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,s)=>{n.index!==0&&s.ignoreMatch()}},e)},q={begin:"\\\\[\\s\\S]",relevance:0},yt={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[q]},wt={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[q]},Pe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ie=function(e,t,n={}){let s=P({className:"comment",begin:e,end:t,contains:[]},n);return s.contains.push(Pe),s.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),s},Mt=ie("//","$"),mt=ie("/\\*","\\*/"),Ot=ie("#","$"),At={className:"number",begin:_e,relevance:0},kt={className:"number",begin:De,relevance:0},St={className:"number",begin:Te,relevance:0},Lt={className:"number",begin:_e+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},It={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[q,{begin:/\[/,end:/\]/,relevance:0,contains:[q]}]}]},Bt={className:"title",begin:Be,relevance:0},Dt={className:"title",begin:xe,relevance:0},Tt={begin:"\\.\\s*"+xe,relevance:0},Pt=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})},ne=Object.freeze({__proto__:null,MATCH_NOTHING_RE:vt,IDENT_RE:Be,UNDERSCORE_IDENT_RE:xe,NUMBER_RE:_e,C_NUMBER_RE:De,BINARY_NUMBER_RE:Te,RE_STARTERS_RE:Nt,SHEBANG:Rt,BACKSLASH_ESCAPE:q,APOS_STRING_MODE:yt,QUOTE_STRING_MODE:wt,PHRASAL_WORDS_MODE:Pe,COMMENT:ie,C_LINE_COMMENT_MODE:Mt,C_BLOCK_COMMENT_MODE:mt,HASH_COMMENT_MODE:Ot,NUMBER_MODE:At,C_NUMBER_MODE:kt,BINARY_NUMBER_MODE:St,CSS_NUMBER_MODE:Lt,REGEXP_MODE:It,TITLE_MODE:Bt,UNDERSCORE_TITLE_MODE:Dt,METHOD_GUARD:Tt,END_SAME_AS_BEGIN:Pt});function Ct(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function Ht(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Ct,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Ut(e,t){Array.isArray(e.illegal)&&(e.illegal=pt(...e.illegal))}function jt(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function $t(e,t){e.relevance===void 0&&(e.relevance=1)}var Gt=["of","and","for","in","not","or","if","then","parent","list","value"],Kt="keyword";function Ce(e,t,n=Kt){let s={};return typeof e=="string"?g(n,e.split(" ")):Array.isArray(e)?g(n,e):Object.keys(e).forEach(function(h){Object.assign(s,Ce(e[h],t,h))}),s;function g(h,b){t&&(b=b.map(i=>i.toLowerCase())),b.forEach(function(i){let a=i.split("|");s[a[0]]=[h,Ft(a[0],a[1])]})}}function Ft(e,t){return t?Number(t):zt(e)?0:1}function zt(e){return Gt.includes(e.toLowerCase())}function Wt(e,{plugins:t}){function n(i,a){return new RegExp(V(i),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}class s{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,a]),this.matchAt+=Et(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);let a=this.regexes.map(l=>l[1]);this.matcherRe=n(_t(a),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;let l=this.matcherRe.exec(a);if(!l)return null;let u=l.findIndex((w,U)=>U>0&&w!==void 0),_=this.matchIndexes[u];return l.splice(0,u),Object.assign(l,_)}}class g{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];let l=new s;return this.rules.slice(a).forEach(([u,_])=>l.addRule(u,_)),l.compile(),this.multiRegexes[a]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,l){this.rules.push([a,l]),l.type==="begin"&&this.count++}exec(a){let l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let u=l.exec(a);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){let _=this.getMatcher(0);_.lastIndex=this.lastIndex+1,u=_.exec(a)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}function h(i){let a=new g;return i.contains.forEach(l=>a.addRule(l.begin,{rule:l,type:"begin"})),i.terminatorEnd&&a.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&a.addRule(i.illegal,{type:"illegal"}),a}function b(i,a){let l=i;if(i.isCompiled)return l;[jt].forEach(_=>_(i,a)),e.compilerExtensions.forEach(_=>_(i,a)),i.__beforeBegin=null,[Ht,Ut,$t].forEach(_=>_(i,a)),i.isCompiled=!0;let u=null;if(typeof i.keywords=="object"&&(u=i.keywords.$pattern,delete i.keywords.$pattern),i.keywords&&(i.keywords=Ce(i.keywords,e.case_insensitive)),i.lexemes&&u)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return u=u||i.lexemes||/\w+/,l.keywordPatternRe=n(u,!0),a&&(i.begin||(i.begin=/\B|\b/),l.beginRe=n(i.begin),i.endSameAsBegin&&(i.end=i.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(l.endRe=n(i.end)),l.terminatorEnd=V(i.end)||"",i.endsWithParent&&a.terminatorEnd&&(l.terminatorEnd+=(i.end?"|":"")+a.terminatorEnd)),i.illegal&&(l.illegalRe=n(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(_){return Vt(_==="self"?i:_)})),i.contains.forEach(function(_){b(_,l)}),i.starts&&b(i.starts,a),l.matcher=h(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=P(e.classNameAliases||{}),b(e)}function He(e){return e?e.endsWithParent||He(e.starts):!1}function Vt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return P(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:He(e)?P(e,{starts:e.starts?P(e.starts):null}):Object.isFrozen(e)?P(e):e}var qt="10.7.3";function Xt(e){return Boolean(e||e==="")}function Yt(e){let t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,K(this.code);let s={};return this.autoDetect?(s=e.highlightAuto(this.code),this.detectedLanguage=s.language):(s=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),s.value},autoDetect(){return!this.language||Xt(this.autodetect)},ignoreIllegals(){return!0}},render(s){return s("pre",{},[s("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(s){s.component("highlightjs",t)}}}}var Jt={"after:highlightElement":({el:e,result:t,text:n})=>{let s=Oe(e);if(!s.length)return;let g=document.createElement("div");g.innerHTML=t.value,t.value=Zt(s,Oe(g),n)}};function Ee(e){return e.nodeName.toLowerCase()}function Oe(e){let t=[];return function n(s,g){for(let h=s.firstChild;h;h=h.nextSibling)h.nodeType===3?g+=h.nodeValue.length:h.nodeType===1&&(t.push({event:"start",offset:g,node:h}),g=n(h,g),Ee(h).match(/br|hr|img|input/)||t.push({event:"stop",offset:g,node:h}));return g}(e,0),t}function Zt(e,t,n){let s=0,g="",h=[];function b(){return!e.length||!t.length?e.length?e:t:e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:t[0].event==="start"?e:t}function i(u){function _(w){return" "+w.nodeName+'="'+K(w.value)+'"'}g+="<"+Ee(u)+[].map.call(u.attributes,_).join("")+">"}function a(u){g+="</"+Ee(u)+">"}function l(u){(u.event==="start"?i:a)(u.node)}for(;e.length||t.length;){let u=b();if(g+=K(n.substring(s,u[0].offset)),s=u[0].offset,u===e){h.reverse().forEach(a);do l(u.splice(0,1)[0]),u=b();while(u===e&&u.length&&u[0].offset===s);h.reverse().forEach(i)}else u[0].event==="start"?h.push(u[0].node):h.pop(),l(u.splice(0,1)[0])}return g+K(n.substr(s))}var Ae={},fe=e=>{console.error(e)},ke=(e,...t)=>{console.log(`WARN: ${e}`,...t)},m=(e,t)=>{Ae[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Ae[`${e}/${t}`]=!0)},he=K,Se=P,Le=Symbol("nomatch"),Qt=function(e){let t=Object.create(null),n=Object.create(null),s=[],g=!0,h=/(^(<[^>]+>|\t|)+|\n)/gm,b="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]},a={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:pe};function l(r){return a.noHighlightRe.test(r)}function u(r){let o=r.className+" ";o+=r.parentNode?r.parentNode.className:"";let E=a.languageDetectRe.exec(o);if(E){let v=I(E[1]);return v||(ke(b.replace("{}",E[1])),ke("Falling back to no-highlight mode for this block.",r)),v?E[1]:"no-highlight"}return o.split(/\s+/).find(v=>l(v)||I(v))}function _(r,o,E,v){let R="",j="";typeof o=="object"?(R=r,E=o.ignoreIllegals,j=o.language,v=void 0):(m("10.7.0","highlight(lang, code, ...args) has been deprecated."),m("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),j=r,R=o);let A={code:R,language:j};J("before:highlight",A);let k=A.result?A.result:w(A.language,A.code,E,v);return k.code=A.code,J("after:highlight",k),k}function w(r,o,E,v){function R(c,f){let p=$.case_insensitive?f[0].toLowerCase():f[0];return Object.prototype.hasOwnProperty.call(c.keywords,p)&&c.keywords[p]}function j(){if(!d.keywords){y.addText(N);return}let c=0;d.keywordPatternRe.lastIndex=0;let f=d.keywordPatternRe.exec(N),p="";for(;f;){p+=N.substring(c,f.index);let x=R(d,f);if(x){let[M,ee]=x;if(y.addText(p),p="",Q+=ee,M.startsWith("_"))p+=f[0];else{let ut=$.classNameAliases[M]||M;y.addKeyword(f[0],ut)}}else p+=f[0];c=d.keywordPatternRe.lastIndex,f=d.keywordPatternRe.exec(N)}p+=N.substr(c),y.addText(p)}function A(){if(N==="")return;let c=null;if(typeof d.subLanguage=="string"){if(!t[d.subLanguage]){y.addText(N);return}c=w(d.subLanguage,N,!0,Me[d.subLanguage]),Me[d.subLanguage]=c.top}else c=D(N,d.subLanguage.length?d.subLanguage:null);d.relevance>0&&(Q+=c.relevance),y.addSublanguage(c.emitter,c.language)}function k(){d.subLanguage!=null?A():j(),N=""}function S(c){return c.className&&y.openNode($.classNameAliases[c.className]||c.className),d=Object.create(c,{parent:{value:d}}),d}function T(c,f,p){let x=bt(c.endRe,p);if(x){if(c["on:end"]){let M=new re(c);c["on:end"](f,M),M.isMatchIgnored&&(x=!1)}if(x){for(;c.endsParent&&c.parent;)c=c.parent;return c}}if(c.endsWithParent)return T(c.parent,f,p)}function st(c){return d.matcher.regexIndex===0?(N+=c[0],1):(ge=!0,0)}function at(c){let f=c[0],p=c.rule,x=new re(p),M=[p.__beforeBegin,p["on:begin"]];for(let ee of M)if(ee&&(ee(c,x),x.isMatchIgnored))return st(f);return p&&p.endSameAsBegin&&(p.endRe=ht(f)),p.skip?N+=f:(p.excludeBegin&&(N+=f),k(),!p.returnBegin&&!p.excludeBegin&&(N=f)),S(p),p.returnBegin?0:f.length}function lt(c){let f=c[0],p=o.substr(c.index),x=T(d,c,p);if(!x)return Le;let M=d;M.skip?N+=f:(M.returnEnd||M.excludeEnd||(N+=f),k(),M.excludeEnd&&(N=f));do d.className&&y.closeNode(),!d.skip&&!d.subLanguage&&(Q+=d.relevance),d=d.parent;while(d!==x.parent);return x.starts&&(x.endSameAsBegin&&(x.starts.endRe=x.endRe),S(x.starts)),M.returnEnd?0:f.length}function ot(){let c=[];for(let f=d;f!==$;f=f.parent)f.className&&c.unshift(f.className);c.forEach(f=>y.openNode(f))}let Z={};function we(c,f){let p=f&&f[0];if(N+=c,p==null)return k(),0;if(Z.type==="begin"&&f.type==="end"&&Z.index===f.index&&p===""){if(N+=o.slice(f.index,f.index+1),!g){let x=new Error("0 width match regex");throw x.languageName=r,x.badRule=Z.rule,x}return 1}if(Z=f,f.type==="begin")return at(f);if(f.type==="illegal"&&!E){let x=new Error('Illegal lexeme "'+p+'" for mode "'+(d.className||"<unnamed>")+'"');throw x.mode=d,x}else if(f.type==="end"){let x=lt(f);if(x!==Le)return x}if(f.type==="illegal"&&p==="")return 1;if(ue>1e5&&ue>f.index*3)throw new Error("potential infinite loop, way more iterations than matches");return N+=p,p.length}let $=I(r);if(!$)throw fe(b.replace("{}",r)),new Error('Unknown language: "'+r+'"');let ct=Wt($,{plugins:s}),ce="",d=v||ct,Me={},y=new a.__emitter(a);ot();let N="",Q=0,G=0,ue=0,ge=!1;try{for(d.matcher.considerAll();;){ue++,ge?ge=!1:d.matcher.considerAll(),d.matcher.lastIndex=G;let c=d.matcher.exec(o);if(!c)break;let f=o.substring(G,c.index),p=we(f,c);G=c.index+p}return we(o.substr(G)),y.closeAllNodes(),y.finalize(),ce=y.toHTML(),{relevance:Math.floor(Q),value:ce,language:r,illegal:!1,emitter:y,top:d}}catch(c){if(c.message&&c.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:c.message,context:o.slice(G-100,G+100),mode:c.mode},sofar:ce,relevance:0,value:he(o),emitter:y};if(g)return{illegal:!1,relevance:0,value:he(o),emitter:y,language:r,top:d,errorRaised:c};throw c}}function U(r){let o={relevance:0,emitter:new a.__emitter(a),value:he(r),illegal:!1,top:i};return o.emitter.addText(r),o}function D(r,o){o=o||a.languages||Object.keys(t);let E=U(r),v=o.filter(I).filter(ye).map(S=>w(S,r,!1));v.unshift(E);let R=v.sort((S,T)=>{if(S.relevance!==T.relevance)return T.relevance-S.relevance;if(S.language&&T.language){if(I(S.language).supersetOf===T.language)return 1;if(I(T.language).supersetOf===S.language)return-1}return 0}),[j,A]=R,k=j;return k.second_best=A,k}function X(r){return a.tabReplace||a.useBR?r.replace(h,o=>o===`
`?a.useBR?"<br>":o:a.tabReplace?o.replace(/\t/g,a.tabReplace):o):r}function O(r,o,E){let v=o?n[o]:E;r.classList.add("hljs"),v&&r.classList.add(v)}let ae={"before:highlightElement":({el:r})=>{a.useBR&&(r.innerHTML=r.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`))},"after:highlightElement":({result:r})=>{a.useBR&&(r.value=r.value.replace(/\n/g,"<br>"))}},z=/^(<[^>]+>|\t)+/gm,Ve={"after:highlightElement":({result:r})=>{a.tabReplace&&(r.value=r.value.replace(z,o=>o.replace(/\t/g,a.tabReplace)))}};function Y(r){let o=null,E=u(r);if(l(E))return;J("before:highlightElement",{el:r,language:E}),o=r;let v=o.textContent,R=E?_(v,{language:E,ignoreIllegals:!0}):D(v);J("after:highlightElement",{el:r,result:R,text:v}),r.innerHTML=R.value,O(r,E,R.language),r.result={language:R.language,re:R.relevance,relavance:R.relevance},R.second_best&&(r.second_best={language:R.second_best.language,re:R.second_best.relevance,relavance:R.second_best.relevance})}function qe(r){r.useBR&&(m("10.3.0","'useBR' will be removed entirely in v11.0"),m("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),a=Se(a,r)}let le=()=>{if(le.called)return;le.called=!0,m("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(Y)};function Xe(){m("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),oe=!0}let oe=!1;function Ne(){if(document.readyState==="loading"){oe=!0;return}document.querySelectorAll("pre code").forEach(Y)}function Ye(){oe&&Ne()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Ye,!1);function Je(r,o){let E=null;try{E=o(e)}catch(v){if(fe("Language definition for '{}' could not be registered.".replace("{}",r)),g)fe(v);else throw v;E=i}E.name||(E.name=r),t[r]=E,E.rawDefinition=o.bind(null,e),E.aliases&&Re(E.aliases,{languageName:r})}function Ze(r){delete t[r];for(let o of Object.keys(n))n[o]===r&&delete n[o]}function Qe(){return Object.keys(t)}function et(r){m("10.4.0","requireLanguage will be removed entirely in v11."),m("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");let o=I(r);if(o)return o;throw new Error("The '{}' language is required, but not loaded.".replace("{}",r))}function I(r){return r=(r||"").toLowerCase(),t[r]||t[n[r]]}function Re(r,{languageName:o}){typeof r=="string"&&(r=[r]),r.forEach(E=>{n[E.toLowerCase()]=o})}function ye(r){let o=I(r);return o&&!o.disableAutodetect}function tt(r){r["before:highlightBlock"]&&!r["before:highlightElement"]&&(r["before:highlightElement"]=o=>{r["before:highlightBlock"](Object.assign({block:o.el},o))}),r["after:highlightBlock"]&&!r["after:highlightElement"]&&(r["after:highlightElement"]=o=>{r["after:highlightBlock"](Object.assign({block:o.el},o))})}function nt(r){tt(r),s.push(r)}function J(r,o){let E=r;s.forEach(function(v){v[E]&&v[E](o)})}function rt(r){return m("10.2.0","fixMarkup will be removed entirely in v11.0"),m("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),X(r)}function it(r){return m("10.7.0","highlightBlock will be removed entirely in v12.0"),m("10.7.0","Please use highlightElement now."),Y(r)}Object.assign(e,{highlight:_,highlightAuto:D,highlightAll:Ne,fixMarkup:rt,highlightElement:Y,highlightBlock:it,configure:qe,initHighlighting:le,initHighlightingOnLoad:Xe,registerLanguage:Je,unregisterLanguage:Ze,listLanguages:Qe,getLanguage:I,registerAliases:Re,requireLanguage:et,autoDetection:ye,inherit:Se,addPlugin:nt,vuePlugin:Yt(e).VuePlugin}),e.debugMode=function(){g=!1},e.safeMode=function(){g=!0},e.versionString=qt;for(let r in ne)typeof ne[r]=="object"&&Ie(ne[r]);return Object.assign(e,ne),e.addPlugin(ae),e.addPlugin(Jt),e.addPlugin(Ve),e},en=Qt({});Ue.exports=en});var $e=te((pn,ve)=>{(function(){var e;typeof ve<"u"?e=ve.exports=s:e=function(){return this||(0,eval)("this")}(),e.format=s,e.vsprintf=n,typeof console<"u"&&typeof console.log=="function"&&(e.printf=t);function t(){console.log(s.apply(null,arguments))}function n(g,h){return s.apply(null,[g].concat(h))}function s(g){for(var h=1,b=[].slice.call(arguments),i=0,a=g.length,l="",u,_=!1,w,U,D=!1,X,O=function(){return b[h++]},ae=function(){for(var z="";/\d/.test(g[i]);)z+=g[i++],u=g[i];return z.length>0?parseInt(z):null};i<a;++i)if(u=g[i],_)switch(_=!1,u=="."?(D=!1,u=g[++i]):u=="0"&&g[i+1]=="."?(D=!0,i+=2,u=g[i]):D=!0,X=ae(),u){case"b":l+=parseInt(O(),10).toString(2);break;case"c":w=O(),typeof w=="string"||w instanceof String?l+=w:l+=String.fromCharCode(parseInt(w,10));break;case"d":l+=parseInt(O(),10);break;case"f":U=String(parseFloat(O()).toFixed(X||6)),l+=D?U:U.replace(/^0/,"");break;case"j":l+=JSON.stringify(O());break;case"o":l+="0"+parseInt(O(),10).toString(8);break;case"s":l+=O();break;case"x":l+="0x"+parseInt(O(),10).toString(16);break;case"X":l+="0x"+parseInt(O(),10).toString(16).toUpperCase();break;default:l+=u;break}else u==="%"?_=!0:l+=u;return l}})()});var Ke=te((En,Ge)=>{"use strict";var tn=$e(),C=H(Error);Ge.exports=C;C.eval=H(EvalError);C.range=H(RangeError);C.reference=H(ReferenceError);C.syntax=H(SyntaxError);C.type=H(TypeError);C.uri=H(URIError);C.create=H;function H(e){return t.displayName=e.displayName||e.name,t;function t(n){return n&&(n=tn.apply(null,arguments)),new e(n)}}});var hn=te(F=>{var L=je(),se=Ke();F.highlight=ze;F.highlightAuto=nn;F.registerLanguage=rn;F.listLanguages=sn;F.registerAlias=an;B.prototype.addText=cn;B.prototype.addKeyword=ln;B.prototype.addSublanguage=on;B.prototype.openNode=un;B.prototype.closeNode=gn;B.prototype.closeAllNodes=We;B.prototype.finalize=We;B.prototype.toHTML=fn;var Fe="hljs-";function ze(e,t,n){var s=L.configure({}),g=n||{},h=g.prefix,b;if(typeof e!="string")throw se("Expected `string` for name, got `%s`",e);if(!L.getLanguage(e))throw se("Unknown language: `%s` is not registered",e);if(typeof t!="string")throw se("Expected `string` for value, got `%s`",t);if(h==null&&(h=Fe),L.configure({__emitter:B,classPrefix:h}),b=L.highlight(t,{language:e,ignoreIllegals:!0}),L.configure(s||{}),b.errorRaised)throw b.errorRaised;return{relevance:b.relevance,language:b.language,value:b.emitter.rootNode.children}}function nn(e,t){var n=t||{},s=n.subset||L.listLanguages(),g=n.prefix,h=s.length,b=-1,i,a,l,u;if(g==null&&(g=Fe),typeof e!="string")throw se("Expected `string` for value, got `%s`",e);for(a={relevance:0,language:null,value:[]},i={relevance:0,language:null,value:[]};++b<h;)u=s[b],L.getLanguage(u)&&(l=ze(u,e,t),l.language=u,l.relevance>a.relevance&&(a=l),l.relevance>i.relevance&&(a=i,i=l));return a.language&&(i.secondBest=a),i}function rn(e,t){L.registerLanguage(e,t)}function sn(){return L.listLanguages()}function an(e,t){var n=e,s;t&&(n={},n[e]=t);for(s in n)L.registerAliases(n[s],{languageName:s})}function B(e){this.options=e,this.rootNode={children:[]},this.stack=[this.rootNode]}function ln(e,t){this.openNode(t),this.addText(e),this.closeNode()}function on(e,t){var n=this.stack,s=n[n.length-1],g=e.rootNode.children,h=t?{type:"element",tagName:"span",properties:{className:[t]},children:g}:g;s.children=s.children.concat(h)}function cn(e){var t=this.stack,n,s;e!==""&&(n=t[t.length-1],s=n.children[n.children.length-1],s&&s.type==="text"?s.value+=e:n.children.push({type:"text",value:e}))}function un(e){var t=this.stack,n=this.options.classPrefix+e,s=t[t.length-1],g={type:"element",tagName:"span",properties:{className:[n]},children:[]};s.children.push(g),t.push(g)}function gn(){this.stack.pop()}function fn(){return""}function We(){}});export default hn();
