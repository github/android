'use strict';(function(k){"object"==typeof exports&&"object"==typeof module?k(require("../../lib/codemirror"),require("../python/python"),require("../stex/stex"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../python/python","../stex/stex","../../addon/mode/overlay"],k):k(CodeMirror)})(function(k){k.defineMode("rst",function(h,g){var d=/^\*\*[^\*\s](?:[^\*]*[^\*\s])?\*\*/,l=/^\*[^\*\s](?:[^\*]*[^\*\s])?\*/,x=/^``[^`\s](?:[^`]*[^`\s])``/,
y=/^(?:[\d]+(?:[\.,]\d+)*)/,v=/^(?:\s\+[\d]+(?:[\.,]\d+)*)/,r=/^(?:\s\-[\d]+(?:[\.,]\d+)*)/,f=/^[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:[\d\w.-]+)\.(?:\w{2,6})(?:\/[\d\w\#\%\&\-\.\,\/\:\=\?\~]+)*/;h=k.getMode(h,g.backdrop||"rst-base");return k.overlayMode(h,{token:function(c){if(c.match(d)&&c.match(/\W+|$/,!1))return"strong";if(c.match(l)&&c.match(/\W+|$/,!1))return"em";if(c.match(x)&&c.match(/\W+|$/,!1))return"string-2";if(c.match(y))return"number";if(c.match(v))return"positive";if(c.match(r))return"negative";
if(c.match(f))return"link";for(;!(null==c.next()||c.match(d,!1)||c.match(l,!1)||c.match(x,!1)||c.match(y,!1)||c.match(v,!1)||c.match(r,!1)||c.match(f,!1)););return null}},!0)},"python","stex");k.defineMode("rst-base",function(h){function g(b){var a=Array.prototype.slice.call(arguments,1);return b.replace(/{(\d+)}/g,function(b,c){return"undefined"!=typeof a[c]?a[c]:b})}function d(b,a){var e=null;if(b.sol()&&b.match(H,!1))c(a,r,{mode:z,local:k.startState(z)});else if(b.sol()&&b.match(I))c(a,l),e="meta";
else if(b.sol()&&b.match(J))c(a,d),e="header";else if(a.ctx.phase==m||b.match(m,!1))switch(n(a)){case 0:c(a,d,f(m,1));b.match(/^:/);e="meta";break;case 1:c(a,d,f(m,2));b.match(D);e="keyword";b.current().match(/^(?:math|latex)/)&&(a.tmp_stex=!0);break;case 2:c(a,d,f(m,3));b.match(/^:`/);e="meta";break;case 3:a.tmp_stex&&(a.tmp_stex=void 0,a.tmp={mode:A,local:k.startState(A)});if(a.tmp){if("`"==b.peek()){c(a,d,f(m,4));a.tmp=void 0;break}e=a.tmp.mode.token(b,a.tmp.local);break}c(a,d,f(m,4));b.match(E);
e="string";break;case 4:c(a,d,f(m,5));b.match(/^`/);e="meta";break;case 5:c(a,d,f(m,6));b.match(F);break;default:c(a,d)}else if(a.ctx.phase==p||b.match(p,!1))switch(n(a)){case 0:c(a,d,f(p,1));b.match(/^`/);e="meta";break;case 1:c(a,d,f(p,2));b.match(E);e="string";break;case 2:c(a,d,f(p,3));b.match(/^`:/);e="meta";break;case 3:c(a,d,f(p,4));b.match(D);e="keyword";break;case 4:c(a,d,f(p,5));b.match(/^:/);e="meta";break;case 5:c(a,d,f(p,6));b.match(F);break;default:c(a,d)}else if(a.ctx.phase==t||b.match(t,
!1))switch(n(a)){case 0:c(a,d,f(t,1));b.match(/^:/);e="meta";break;case 1:c(a,d,f(t,2));b.match(D);e="keyword";break;case 2:c(a,d,f(t,3));b.match(/^:/);e="meta";break;case 3:c(a,d,f(t,4));b.match(F);break;default:c(a,d)}else if(a.ctx.phase==B||b.match(B,!1))switch(n(a)){case 0:c(a,d,f(B,1));b.match(G);e="variable-2";break;case 1:c(a,d,f(B,2));b.match(/^_?_?/)&&(e="link");break;default:c(a,d)}else if(b.match(K))c(a,d),e="quote";else if(b.match(L))c(a,d),e="quote";else if(b.match(M)){if(c(a,d),!b.peek()||
b.peek().match(/^\W$/))e="link"}else if(a.ctx.phase==q||b.match(q,!1))switch(n(a)){case 0:!b.peek()||b.peek().match(/^\W$/)?c(a,d,f(q,1)):b.match(q);break;case 1:c(a,d,f(q,2));b.match(/^`/);e="link";break;case 2:c(a,d,f(q,3));b.match(E);break;case 3:c(a,d,f(q,4));b.match(/^`_/);e="link";break;default:c(a,d)}else b.match(N)?c(a,y):b.next()&&c(a,d);return e}function l(b,a){var e=null;if(a.ctx.phase==u||b.match(u,!1))switch(n(a)){case 0:c(a,l,f(u,1));b.match(G);e="variable-2";break;case 1:c(a,l,f(u,
2));b.match(O);break;case 2:c(a,l,f(u,3));b.match(P);e="keyword";break;case 3:c(a,l,f(u,4));b.match(Q);e="meta";break;default:c(a,d)}else if(a.ctx.phase==w||b.match(w,!1))switch(n(a)){case 0:c(a,l,f(w,1));b.match(R);e="keyword";b.current().match(/^(?:math|latex)/)?a.tmp_stex=!0:b.current().match(/^python/)&&(a.tmp_py=!0);break;case 1:c(a,l,f(w,2));b.match(S);e="meta";if(b.match(/^latex\s*$/)||a.tmp_stex)a.tmp_stex=void 0,c(a,r,{mode:A,local:k.startState(A)});break;case 2:c(a,l,f(w,3));if(b.match(/^python\s*$/)||
a.tmp_py)a.tmp_py=void 0,c(a,r,{mode:z,local:k.startState(z)});break;default:c(a,d)}else if(a.ctx.phase==C||b.match(C,!1))switch(n(a)){case 0:c(a,l,f(C,1));b.match(T);b.match(U);e="link";break;case 1:c(a,l,f(C,2));b.match(V);e="meta";break;default:c(a,d)}else b.match(W)?(c(a,d),e="quote"):b.match(X)?(c(a,d),e="quote"):(b.eatSpace(),b.eol()?c(a,d):(b.skipToEnd(),c(a,x),e="comment"));return e}function x(b,a){return v(b,a,"comment")}function y(b,a){return v(b,a,"meta")}function v(b,a,e){if(b.eol()||
b.eatSpace())return b.skipToEnd(),e;c(a,d);return null}function r(b,a){if(a.ctx.mode&&a.ctx.local)return b.sol()?(b.eatSpace()||c(a,d),null):a.ctx.mode.token(b,a.ctx.local);c(a,d);return null}function f(b,a,c,d){return{phase:b,stage:a,mode:c,local:d}}function c(b,a,c){b.tok=a;b.ctx=c||{}}function n(b){return b.ctx.stage||0}var z=k.getMode(h,"python"),A=k.getMode(h,"stex"),F=new RegExp(g("^{0}","(?:\\s*|\\W|$)")),D=new RegExp(g("^{0}","(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)"));
h=g("(?:{0}|`{1}`)","(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)","(?:[^\\W\\d_](?:[\\w\\s!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)");var E=new RegExp(g("^{0}","(?:[^\\`]+)")),J=/^([!'#$%&"()*+,-./:;<=>?@\[\\\]^_`{|}~])\1{3,}\s*$/,I=new RegExp(g("^\\.\\.{0}","\\s+")),C=new RegExp(g("^_{0}:{1}|^__:{1}",h,"(?:\\s*|\\W|$)")),w=new RegExp(g("^{0}::{1}",h,"(?:\\s*|\\W|$)")),u=new RegExp(g("^\\|{0}\\|{1}{2}::{3}","(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)","\\s+",h,"(?:\\s*|\\W|$)")),W=
new RegExp(g("^\\[(?:\\d+|#{0}?|\\*)]{1}",h,"(?:\\s*|\\W|$)")),X=new RegExp(g("^\\[{0}\\]{1}",h,"(?:\\s*|\\W|$)")),B=new RegExp(g("^\\|{0}\\|","(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)")),K=new RegExp(g("^\\[(?:\\d+|#{0}?|\\*)]_",h)),L=new RegExp(g("^\\[{0}\\]_",h)),M=new RegExp(g("^{0}__?",h)),q=new RegExp(g("^`{0}`_","(?:[^\\`]+)")),m=new RegExp(g("^:{0}:`{1}`{2}","(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)","(?:[^\\`]+)","(?:\\s*|\\W|$)")),p=new RegExp(g("^`{1}`:{0}:{2}","(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)",
"(?:[^\\`]+)","(?:\\s*|\\W|$)")),t=new RegExp(g("^:{0}:{1}","(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)","(?:\\s*|\\W|$)")),R=new RegExp(g("^{0}",h)),S=new RegExp(g("^::{0}","(?:\\s*|\\W|$)")),G=new RegExp(g("^\\|{0}\\|","(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)")),O=new RegExp(g("^{0}","\\s+")),P=new RegExp(g("^{0}",h)),Q=new RegExp(g("^::{0}","(?:\\s*|\\W|$)")),T=/^_/,U=new RegExp(g("^{0}|_",h)),V=new RegExp(g("^:{0}","(?:\\s*|\\W|$)")),N=/^::\s*$/,H=/^\s+(?:>>>|In \[\d+\]:)\s/;
return{startState:function(){return{tok:d,ctx:f(void 0,0)}},copyState:function(b){var a=b.ctx,c=b.tmp;a.local&&(a={mode:a.mode,local:k.copyState(a.mode,a.local)});c&&(c={mode:c.mode,local:k.copyState(c.mode,c.local)});return{tok:b.tok,ctx:a,tmp:c}},innerMode:function(b){return b.tmp?{state:b.tmp.local,mode:b.tmp.mode}:b.ctx.mode?{state:b.ctx.local,mode:b.ctx.mode}:null},token:function(b,a){return a.tok(b,a)}}},"python","stex");k.defineMIME("text/x-rst","rst")});
