
/*! jQuery v2.2.2 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.2",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof module&&module.exports?module.exports=b():a.numeral=b()}(this,function(){function a(a,b){this._input=a,this._value=b}var b,c,d="2.0.6",e={},f={},g={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},h={currentLocale:g.currentLocale,zeroFormat:g.zeroFormat,nullFormat:g.nullFormat,defaultFormat:g.defaultFormat,scalePercentBy100:g.scalePercentBy100};return b=function(d){var f,g,i,j;if(b.isNumeral(d))f=d.value();else if(0===d||"undefined"==typeof d)f=0;else if(null===d||c.isNaN(d))f=null;else if("string"==typeof d)if(h.zeroFormat&&d===h.zeroFormat)f=0;else if(h.nullFormat&&d===h.nullFormat||!d.replace(/[^0-9]+/g,"").length)f=null;else{for(g in e)if(j="function"==typeof e[g].regexps.unformat?e[g].regexps.unformat():e[g].regexps.unformat,j&&d.match(j)){i=e[g].unformat;break}i=i||b._.stringToNumber,f=i(d)}else f=Number(d)||null;return new a(d,f)},b.version=d,b.isNumeral=function(b){return b instanceof a},b._=c={numberToFormat:function(a,c,d){var e,g,h,i,j,k,l,m=f[b.options.currentLocale],n=!1,o=!1,p=0,q="",r=1e12,s=1e9,t=1e6,u=1e3,v="",w=!1;if(a=a||0,g=Math.abs(a),b._.includes(c,"(")?(n=!0,c=c.replace(/[\(|\)]/g,"")):(b._.includes(c,"+")||b._.includes(c,"-"))&&(j=b._.includes(c,"+")?c.indexOf("+"):0>a?c.indexOf("-"):-1,c=c.replace(/[\+|\-]/g,"")),b._.includes(c,"a")&&(e=c.match(/a(k|m|b|t)?/),e=e?e[1]:!1,b._.includes(c," a")&&(q=" "),c=c.replace(new RegExp(q+"a[kmbt]?"),""),g>=r&&!e||"t"===e?(q+=m.abbreviations.trillion,a/=r):r>g&&g>=s&&!e||"b"===e?(q+=m.abbreviations.billion,a/=s):s>g&&g>=t&&!e||"m"===e?(q+=m.abbreviations.million,a/=t):(t>g&&g>=u&&!e||"k"===e)&&(q+=m.abbreviations.thousand,a/=u)),b._.includes(c,"[.]")&&(o=!0,c=c.replace("[.]",".")),h=a.toString().split(".")[0],i=c.split(".")[1],k=c.indexOf(","),p=(c.split(".")[0].split(",")[0].match(/0/g)||[]).length,i?(b._.includes(i,"[")?(i=i.replace("]",""),i=i.split("["),v=b._.toFixed(a,i[0].length+i[1].length,d,i[1].length)):v=b._.toFixed(a,i.length,d),h=v.split(".")[0],v=b._.includes(v,".")?m.delimiters.decimal+v.split(".")[1]:"",o&&0===Number(v.slice(1))&&(v="")):h=b._.toFixed(a,0,d),q&&!e&&Number(h)>=1e3&&q!==m.abbreviations.trillion)switch(h=String(Number(h)/1e3),q){case m.abbreviations.thousand:q=m.abbreviations.million;break;case m.abbreviations.million:q=m.abbreviations.billion;break;case m.abbreviations.billion:q=m.abbreviations.trillion}if(b._.includes(h,"-")&&(h=h.slice(1),w=!0),h.length<p)for(var x=p-h.length;x>0;x--)h="0"+h;return k>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===c.indexOf(".")&&(h=""),l=h+v+(q?q:""),n?l=(n&&w?"(":"")+l+(n&&w?")":""):j>=0?l=0===j?(w?"-":"+")+l:l+(w?"-":"+"):w&&(l="-"+l),l},stringToNumber:function(a){var b,c,d,e=f[h.currentLocale],g=a,i={thousand:3,million:6,billion:9,trillion:12};if(h.zeroFormat&&a===h.zeroFormat)c=0;else if(h.nullFormat&&a===h.nullFormat||!a.replace(/[^0-9]+/g,"").length)c=null;else{c=1,"."!==e.delimiters.decimal&&(a=a.replace(/\./g,"").replace(e.delimiters.decimal,"."));for(b in i)if(d=new RegExp("[^a-zA-Z]"+e.abbreviations[b]+"(?:\\)|(\\"+e.currency.symbol+")?(?:\\))?)?$"),g.match(d)){c*=Math.pow(10,i[b]);break}c*=(a.split("-").length+Math.min(a.split("(").length-1,a.split(")").length-1))%2?1:-1,a=a.replace(/[^0-9\.]+/g,""),c*=Number(a)}return c},isNaN:function(a){return"number"==typeof a&&isNaN(a)},includes:function(a,b){return-1!==a.indexOf(b)},insert:function(a,b,c){return a.slice(0,c)+b+a.slice(c)},reduce:function(a,b){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof b)throw new TypeError(b+" is not a function");var c,d=Object(a),e=d.length>>>0,f=0;if(3===arguments.length)c=arguments[2];else{for(;e>f&&!(f in d);)f++;if(f>=e)throw new TypeError("Reduce of empty array with no initial value");c=d[f++]}for(;e>f;f++)f in d&&(c=b(c,d[f],f,d));return c},multiplier:function(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)},correctionFactor:function(){var a=Array.prototype.slice.call(arguments);return a.reduce(function(a,b){var d=c.multiplier(b);return a>d?a:d},1)},toFixed:function(a,b,c,d){var e,f,g,h,i=a.toString().split("."),j=b-(d||0);return e=2===i.length?Math.min(Math.max(i[1].length,j),b):j,g=Math.pow(10,e),h=(c(a+"e+"+e)/g).toFixed(e),d>b-e&&(f=new RegExp("\\.?0{1,"+(d-(b-e))+"}$"),h=h.replace(f,"")),h}},b.options=h,b.formats=e,b.locales=f,b.locale=function(a){return a&&(h.currentLocale=a.toLowerCase()),h.currentLocale},b.localeData=function(a){if(!a)return f[h.currentLocale];if(a=a.toLowerCase(),!f[a])throw new Error("Unknown locale : "+a);return f[a]},b.reset=function(){for(var a in g)h[a]=g[a]},b.zeroFormat=function(a){h.zeroFormat="string"==typeof a?a:null},b.nullFormat=function(a){h.nullFormat="string"==typeof a?a:null},b.defaultFormat=function(a){h.defaultFormat="string"==typeof a?a:"0.0"},b.register=function(a,b,c){if(b=b.toLowerCase(),this[a+"s"][b])throw new TypeError(b+" "+a+" already registered.");return this[a+"s"][b]=c,c},b.validate=function(a,c){var d,e,f,g,h,i,j,k;if("string"!=typeof a&&(a+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",a)),a=a.trim(),a.match(/^\d+$/))return!0;if(""===a)return!1;try{j=b.localeData(c)}catch(l){j=b.localeData(b.locale())}return f=j.currency.symbol,h=j.abbreviations,d=j.delimiters.decimal,e="."===j.delimiters.thousands?"\\.":j.delimiters.thousands,k=a.match(/^[^\d]+/),null!==k&&(a=a.substr(1),k[0]!==f)?!1:(k=a.match(/[^\d]+$/),null!==k&&(a=a.slice(0,-1),k[0]!==h.thousand&&k[0]!==h.million&&k[0]!==h.billion&&k[0]!==h.trillion)?!1:(i=new RegExp(e+"{2}"),a.match(/[^\d.,]/g)?!1:(g=a.split(d),g.length>2?!1:g.length<2?!!g[0].match(/^\d+.*\d$/)&&!g[0].match(i):1===g[0].length?!!g[0].match(/^\d+$/)&&!g[0].match(i)&&!!g[1].match(/^\d+$/):!!g[0].match(/^\d+.*\d$/)&&!g[0].match(i)&&!!g[1].match(/^\d+$/))))},b.fn=a.prototype={clone:function(){return b(this)},format:function(a,c){var d,f,g,i=this._value,j=a||h.defaultFormat;if(c=c||Math.round,0===i&&null!==h.zeroFormat)f=h.zeroFormat;else if(null===i&&null!==h.nullFormat)f=h.nullFormat;else{for(d in e)if(j.match(e[d].regexps.format)){g=e[d].format;break}g=g||b._.numberToFormat,f=g(i,j,c)}return f},value:function(){return this._value},input:function(){return this._input},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b,c,e){return a+Math.round(d*b)}var d=c.correctionFactor.call(null,this._value,a);return this._value=c.reduce([this._value,a],b,0)/d,this},subtract:function(a){function b(a,b,c,e){return a-Math.round(d*b)}var d=c.correctionFactor.call(null,this._value,a);return this._value=c.reduce([a],b,Math.round(this._value*d))/d,this},multiply:function(a){function b(a,b,d,e){var f=c.correctionFactor(a,b);return Math.round(a*f)*Math.round(b*f)/Math.round(f*f)}return this._value=c.reduce([this._value,a],b,1),this},divide:function(a){function b(a,b,d,e){var f=c.correctionFactor(a,b);return Math.round(a*f)/Math.round(b*f)}return this._value=c.reduce([this._value,a],b),this},difference:function(a){return Math.abs(b(this._value).subtract(a).value())}},b.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),function(){b.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(a,c,d){var e,f=b._.includes(c," BPS")?" ":"";return a=1e4*a,c=c.replace(/\s?BPS/,""),e=b._.numberToFormat(a,c,d),b._.includes(e,")")?(e=e.split(""),e.splice(-1,0,f+"BPS"),e=e.join("")):e=e+f+"BPS",e},unformat:function(a){return+(1e-4*b._.stringToNumber(a)).toFixed(15)}})}(),function(){var a={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},c={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},d=a.suffixes.concat(c.suffixes.filter(function(b){return a.suffixes.indexOf(b)<0})),e=d.join("|");e="("+e.replace("B","B(?!PS)")+")",b.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(e)},format:function(d,e,f){var g,h,i,j,k=b._.includes(e,"ib")?c:a,l=b._.includes(e," b")||b._.includes(e," ib")?" ":"";for(e=e.replace(/\s?i?b/,""),h=0;h<=k.suffixes.length;h++)if(i=Math.pow(k.base,h),j=Math.pow(k.base,h+1),null===d||0===d||d>=i&&j>d){l+=k.suffixes[h],i>0&&(d/=i);break}return g=b._.numberToFormat(d,e,f),g+l},unformat:function(d){var e,f,g=b._.stringToNumber(d);if(g){for(e=a.suffixes.length-1;e>=0;e--){if(b._.includes(d,a.suffixes[e])){f=Math.pow(a.base,e);break}if(b._.includes(d,c.suffixes[e])){f=Math.pow(c.base,e);break}}g*=f||1}return g}})}(),function(){b.register("format","currency",{regexps:{format:/(\$)/},format:function(a,c,d){var e,f,g,h=b.locales[b.options.currentLocale],i={before:c.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:c.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(c=c.replace(/\s?\$\s?/,""),e=b._.numberToFormat(a,c,d),a>=0?(i.before=i.before.replace(/[\-\(]/,""),i.after=i.after.replace(/[\-\)]/,"")):0>a&&!b._.includes(i.before,"-")&&!b._.includes(i.before,"(")&&(i.before="-"+i.before),g=0;g<i.before.length;g++)switch(f=i.before[g]){case"$":e=b._.insert(e,h.currency.symbol,g);break;case" ":e=b._.insert(e," ",g+h.currency.symbol.length-1)}for(g=i.after.length-1;g>=0;g--)switch(f=i.after[g]){case"$":e=g===i.after.length-1?e+h.currency.symbol:b._.insert(e,h.currency.symbol,-(i.after.length-(1+g)));break;case" ":e=g===i.after.length-1?e+" ":b._.insert(e," ",-(i.after.length-(1+g)+h.currency.symbol.length-1))}return e}})}(),function(){b.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(a,c,d){var e,f="number"!=typeof a||b._.isNaN(a)?"0e+0":a.toExponential(),g=f.split("e");return c=c.replace(/e[\+|\-]{1}0/,""),e=b._.numberToFormat(Number(g[0]),c,d),e+"e"+g[1]},unformat:function(a){function c(a,c,d,e){var f=b._.correctionFactor(a,c),g=a*f*(c*f)/(f*f);return g}var d=b._.includes(a,"e+")?a.split("e+"):a.split("e-"),e=Number(d[0]),f=Number(d[1]);return f=b._.includes(a,"e-")?f*=-1:f,b._.reduce([e,Math.pow(10,f)],c,1)}})}(),function(){b.register("format","ordinal",{regexps:{format:/(o)/},format:function(a,c,d){var e,f=b.locales[b.options.currentLocale],g=b._.includes(c," o")?" ":"";return c=c.replace(/\s?o/,""),g+=f.ordinal(a),e=b._.numberToFormat(a,c,d),e+g}})}(),function(){b.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(a,c,d){var e,f=b._.includes(c," %")?" ":"";return b.options.scalePercentBy100&&(a=100*a),c=c.replace(/\s?\%/,""),e=b._.numberToFormat(a,c,d),b._.includes(e,")")?(e=e.split(""),e.splice(-1,0,f+"%"),e=e.join("")):e=e+f+"%",e},unformat:function(a){var c=b._.stringToNumber(a);return b.options.scalePercentBy100?.01*c:c}})}(),function(){b.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(a,b,c){var d=Math.floor(a/60/60),e=Math.floor((a-60*d*60)/60),f=Math.round(a-60*d*60-60*e);return d+":"+(10>e?"0"+e:e)+":"+(10>f?"0"+f:f)},unformat:function(a){var b=a.split(":"),c=0;return 3===b.length?(c+=60*Number(b[0])*60,c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}})}(),b});/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){var o,r,i;!function(a,c){r=[t,n(7)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return r(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(6),u=n(5);t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i;!function(a,c){r=[t,n(0),n(2),n(1)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=r(e),s=r(n),f=r(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){i(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=n},function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function r(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(4);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n}])});/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function e(n,t){for(var r=null==n?0:n.length;r--&&t(n[r],r,n)!==!1;);return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;
    return!0}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!!(null==n?0:n.length)&&y(n,t,0)>-1}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
    return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function p(n){return n.split("")}function _(n){return n.match(Bt)||[]}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function g(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function y(n,t,r){return t===t?q(n,t,r):g(n,b,r)}function d(n,t,r,e){
    for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function b(n){return n!==n}function w(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:Sn}function m(n){return function(t){return null==t?Y:t[n]}}function x(n){return function(t){return null==n?Y:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==Y&&(r=r===Y?i:r+i);
    }return r}function O(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function I(n,t){return c(t,function(t){return[t,n[t]]})}function R(n){return function(t){return n(t)}}function z(n,t){return c(t,function(t){return n[t]})}function E(n,t){return n.has(t)}function S(n,t){for(var r=-1,e=n.length;++r<e&&y(t,n[r],0)>-1;);return r}function W(n,t){for(var r=n.length;r--&&y(t,n[r],0)>-1;);return r}function L(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function C(n){return"\\"+Gr[n]}function U(n,t){
    return null==n?Y:n[t]}function B(n){return Dr.test(n)}function T(n){return Mr.test(n)}function $(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function D(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function M(n,t){return function(r){return n(t(r))}}function F(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==un||(n[r]=un,i[u++]=r)}return i}function N(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function P(n){
    var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function q(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function Z(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function K(n){return B(n)?G(n):se(n)}function V(n){return B(n)?H(n):p(n)}function G(n){for(var t=Tr.lastIndex=0;Tr.test(n);)++t;return t}function H(n){return n.match(Tr)||[]}function J(n){return n.match($r)||[]}var Y,Q="4.17.20",X=200,nn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",tn="Expected a function",rn="__lodash_hash_undefined__",en=500,un="__lodash_placeholder__",on=1,fn=2,cn=4,an=1,ln=2,sn=1,hn=2,pn=4,_n=8,vn=16,gn=32,yn=64,dn=128,bn=256,wn=512,mn=30,xn="...",jn=800,An=16,kn=1,On=2,In=3,Rn=1/0,zn=9007199254740991,En=1.7976931348623157e308,Sn=NaN,Wn=4294967295,Ln=Wn-1,Cn=Wn>>>1,Un=[["ary",dn],["bind",sn],["bindKey",hn],["curry",_n],["curryRight",vn],["flip",wn],["partial",gn],["partialRight",yn],["rearg",bn]],Bn="[object Arguments]",Tn="[object Array]",$n="[object AsyncFunction]",Dn="[object Boolean]",Mn="[object Date]",Fn="[object DOMException]",Nn="[object Error]",Pn="[object Function]",qn="[object GeneratorFunction]",Zn="[object Map]",Kn="[object Number]",Vn="[object Null]",Gn="[object Object]",Hn="[object Promise]",Jn="[object Proxy]",Yn="[object RegExp]",Qn="[object Set]",Xn="[object String]",nt="[object Symbol]",tt="[object Undefined]",rt="[object WeakMap]",et="[object WeakSet]",ut="[object ArrayBuffer]",it="[object DataView]",ot="[object Float32Array]",ft="[object Float64Array]",ct="[object Int8Array]",at="[object Int16Array]",lt="[object Int32Array]",st="[object Uint8Array]",ht="[object Uint8ClampedArray]",pt="[object Uint16Array]",_t="[object Uint32Array]",vt=/\b__p \+= '';/g,gt=/\b(__p \+=) '' \+/g,yt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,dt=/&(?:amp|lt|gt|quot|#39);/g,bt=/[&<>"']/g,wt=RegExp(dt.source),mt=RegExp(bt.source),xt=/<%-([\s\S]+?)%>/g,jt=/<%([\s\S]+?)%>/g,At=/<%=([\s\S]+?)%>/g,kt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ot=/^\w*$/,It=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/[\\^$.*+?()[\]{}|]/g,zt=RegExp(Rt.source),Et=/^\s+|\s+$/g,St=/^\s+/,Wt=/\s+$/,Lt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ct=/\{\n\/\* \[wrapped with (.+)\] \*/,Ut=/,? & /,Bt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Tt=/\\(\\)?/g,$t=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Dt=/\w*$/,Mt=/^[-+]0x[0-9a-f]+$/i,Ft=/^0b[01]+$/i,Nt=/^\[object .+?Constructor\]$/,Pt=/^0o[0-7]+$/i,qt=/^(?:0|[1-9]\d*)$/,Zt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kt=/($^)/,Vt=/['\n\r\u2028\u2029\\]/g,Gt="\\ud800-\\udfff",Ht="\\u0300-\\u036f",Jt="\\ufe20-\\ufe2f",Yt="\\u20d0-\\u20ff",Qt=Ht+Jt+Yt,Xt="\\u2700-\\u27bf",nr="a-z\\xdf-\\xf6\\xf8-\\xff",tr="\\xac\\xb1\\xd7\\xf7",rr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",er="\\u2000-\\u206f",ur=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ir="A-Z\\xc0-\\xd6\\xd8-\\xde",or="\\ufe0e\\ufe0f",fr=tr+rr+er+ur,cr="['\u2019]",ar="["+Gt+"]",lr="["+fr+"]",sr="["+Qt+"]",hr="\\d+",pr="["+Xt+"]",_r="["+nr+"]",vr="[^"+Gt+fr+hr+Xt+nr+ir+"]",gr="\\ud83c[\\udffb-\\udfff]",yr="(?:"+sr+"|"+gr+")",dr="[^"+Gt+"]",br="(?:\\ud83c[\\udde6-\\uddff]){2}",wr="[\\ud800-\\udbff][\\udc00-\\udfff]",mr="["+ir+"]",xr="\\u200d",jr="(?:"+_r+"|"+vr+")",Ar="(?:"+mr+"|"+vr+")",kr="(?:"+cr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+cr+"(?:D|LL|M|RE|S|T|VE))?",Ir=yr+"?",Rr="["+or+"]?",zr="(?:"+xr+"(?:"+[dr,br,wr].join("|")+")"+Rr+Ir+")*",Er="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Sr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wr=Rr+Ir+zr,Lr="(?:"+[pr,br,wr].join("|")+")"+Wr,Cr="(?:"+[dr+sr+"?",sr,br,wr,ar].join("|")+")",Ur=RegExp(cr,"g"),Br=RegExp(sr,"g"),Tr=RegExp(gr+"(?="+gr+")|"+Cr+Wr,"g"),$r=RegExp([mr+"?"+_r+"+"+kr+"(?="+[lr,mr,"$"].join("|")+")",Ar+"+"+Or+"(?="+[lr,mr+jr,"$"].join("|")+")",mr+"?"+jr+"+"+kr,mr+"+"+Or,Sr,Er,hr,Lr].join("|"),"g"),Dr=RegExp("["+xr+Gt+Qt+or+"]"),Mr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Fr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Nr=-1,Pr={};
    Pr[ot]=Pr[ft]=Pr[ct]=Pr[at]=Pr[lt]=Pr[st]=Pr[ht]=Pr[pt]=Pr[_t]=!0,Pr[Bn]=Pr[Tn]=Pr[ut]=Pr[Dn]=Pr[it]=Pr[Mn]=Pr[Nn]=Pr[Pn]=Pr[Zn]=Pr[Kn]=Pr[Gn]=Pr[Yn]=Pr[Qn]=Pr[Xn]=Pr[rt]=!1;var qr={};qr[Bn]=qr[Tn]=qr[ut]=qr[it]=qr[Dn]=qr[Mn]=qr[ot]=qr[ft]=qr[ct]=qr[at]=qr[lt]=qr[Zn]=qr[Kn]=qr[Gn]=qr[Yn]=qr[Qn]=qr[Xn]=qr[nt]=qr[st]=qr[ht]=qr[pt]=qr[_t]=!0,qr[Nn]=qr[Pn]=qr[rt]=!1;var Zr={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a",
    "\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae",
    "\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g",
    "\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O",
    "\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w",
    "\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},Kr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Gr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hr=parseFloat,Jr=parseInt,Yr="object"==typeof global&&global&&global.Object===Object&&global,Qr="object"==typeof self&&self&&self.Object===Object&&self,Xr=Yr||Qr||Function("return this")(),ne="object"==typeof exports&&exports&&!exports.nodeType&&exports,te=ne&&"object"==typeof module&&module&&!module.nodeType&&module,re=te&&te.exports===ne,ee=re&&Yr.process,ue=function(){
    try{var n=te&&te.require&&te.require("util").types;return n?n:ee&&ee.binding&&ee.binding("util")}catch(n){}}(),ie=ue&&ue.isArrayBuffer,oe=ue&&ue.isDate,fe=ue&&ue.isMap,ce=ue&&ue.isRegExp,ae=ue&&ue.isSet,le=ue&&ue.isTypedArray,se=m("length"),he=x(Zr),pe=x(Kr),_e=x(Vr),ve=function p(x){function q(n){if(oc(n)&&!yh(n)&&!(n instanceof Bt)){if(n instanceof H)return n;if(yl.call(n,"__wrapped__"))return to(n)}return new H(n)}function G(){}function H(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,
    this.__index__=0,this.__values__=Y}function Bt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Wn,this.__views__=[]}function Gt(){var n=new Bt(this.__wrapped__);return n.__actions__=Uu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Uu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Uu(this.__views__),n}function Ht(){if(this.__filtered__){var n=new Bt(this);n.__dir__=-1,
    n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Jt(){var n=this.__wrapped__.value(),t=this.__dir__,r=yh(n),e=t<0,u=r?n.length:0,i=Ai(0,u,this.__views__),o=i.start,f=i.end,c=f-o,a=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Vl(c,this.__takeCount__);if(!r||!e&&u==c&&p==c)return du(n,this.__actions__);var _=[];n:for(;c--&&h<p;){a+=t;for(var v=-1,g=n[a];++v<s;){var y=l[v],d=y.iteratee,b=y.type,w=d(g);if(b==On)g=w;else if(!w){if(b==kn)continue n;break n}}_[h++]=g}return _}function Yt(n){
    var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Qt(){this.__data__=es?es(null):{},this.size=0}function Xt(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function nr(n){var t=this.__data__;if(es){var r=t[n];return r===rn?Y:r}return yl.call(t,n)?t[n]:Y}function tr(n){var t=this.__data__;return es?t[n]!==Y:yl.call(t,n)}function rr(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=es&&t===Y?rn:t,this}function er(n){
    var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function ur(){this.__data__=[],this.size=0}function ir(n){var t=this.__data__,r=Er(t,n);return!(r<0)&&(r==t.length-1?t.pop():Sl.call(t,r,1),--this.size,!0)}function or(n){var t=this.__data__,r=Er(t,n);return r<0?Y:t[r][1]}function fr(n){return Er(this.__data__,n)>-1}function cr(n,t){var r=this.__data__,e=Er(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function ar(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){
    var e=n[t];this.set(e[0],e[1])}}function lr(){this.size=0,this.__data__={hash:new Yt,map:new(Xl||er),string:new Yt}}function sr(n){var t=wi(this,n).delete(n);return this.size-=t?1:0,t}function hr(n){return wi(this,n).get(n)}function pr(n){return wi(this,n).has(n)}function _r(n,t){var r=wi(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function vr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new ar;++t<r;)this.add(n[t])}function gr(n){return this.__data__.set(n,rn),this}function yr(n){
    return this.__data__.has(n)}function dr(n){this.size=(this.__data__=new er(n)).size}function br(){this.__data__=new er,this.size=0}function wr(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}function mr(n){return this.__data__.get(n)}function xr(n){return this.__data__.has(n)}function jr(n,t){var r=this.__data__;if(r instanceof er){var e=r.__data__;if(!Xl||e.length<X-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new ar(e)}return r.set(n,t),this.size=r.size,this}function Ar(n,t){
    var r=yh(n),e=!r&&gh(n),u=!r&&!e&&bh(n),i=!r&&!e&&!u&&Ah(n),o=r||e||u||i,f=o?O(n.length,ll):[],c=f.length;for(var a in n)!t&&!yl.call(n,a)||o&&("length"==a||u&&("offset"==a||"parent"==a)||i&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Wi(a,c))||f.push(a);return f}function kr(n){var t=n.length;return t?n[Xe(0,t-1)]:Y}function Or(n,t){return Yi(Uu(n),$r(t,0,n.length))}function Ir(n){return Yi(Uu(n))}function Rr(n,t,r){(r===Y||Kf(n[t],r))&&(r!==Y||t in n)||Cr(n,t,r)}function zr(n,t,r){var e=n[t];
    yl.call(n,t)&&Kf(e,r)&&(r!==Y||t in n)||Cr(n,t,r)}function Er(n,t){for(var r=n.length;r--;)if(Kf(n[r][0],t))return r;return-1}function Sr(n,t,r,e){return vs(n,function(n,u,i){t(e,n,r(n),i)}),e}function Wr(n,t){return n&&Bu(t,Fc(t),n)}function Lr(n,t){return n&&Bu(t,Nc(t),n)}function Cr(n,t,r){"__proto__"==t&&Ul?Ul(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Tr(n,t){for(var r=-1,e=t.length,u=el(e),i=null==n;++r<e;)u[r]=i?Y:$c(n,t[r]);return u}function $r(n,t,r){return n===n&&(r!==Y&&(n=n<=r?n:r),
    t!==Y&&(n=n>=t?n:t)),n}function Dr(n,t,e,u,i,o){var f,c=t&on,a=t&fn,l=t&cn;if(e&&(f=i?e(n,u,i,o):e(n)),f!==Y)return f;if(!ic(n))return n;var s=yh(n);if(s){if(f=Ii(n),!c)return Uu(n,f)}else{var h=Is(n),p=h==Pn||h==qn;if(bh(n))return ku(n,c);if(h==Gn||h==Bn||p&&!i){if(f=a||p?{}:Ri(n),!c)return a?$u(n,Lr(f,n)):Tu(n,Wr(f,n))}else{if(!qr[h])return i?n:{};f=zi(n,h,c)}}o||(o=new dr);var _=o.get(n);if(_)return _;o.set(n,f),jh(n)?n.forEach(function(r){f.add(Dr(r,t,e,r,n,o))}):mh(n)&&n.forEach(function(r,u){
    f.set(u,Dr(r,t,e,u,n,o))});var v=l?a?gi:vi:a?Nc:Fc,g=s?Y:v(n);return r(g||n,function(r,u){g&&(u=r,r=n[u]),zr(f,u,Dr(r,t,e,u,n,o))}),f}function Mr(n){var t=Fc(n);return function(r){return Zr(r,n,t)}}function Zr(n,t,r){var e=r.length;if(null==n)return!e;for(n=cl(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===Y&&!(u in n)||!i(o))return!1}return!0}function Kr(n,t,r){if("function"!=typeof n)throw new sl(tn);return Es(function(){n.apply(Y,r)},t)}function Vr(n,t,r,e){var u=-1,i=o,a=!0,l=n.length,s=[],h=t.length;
    if(!l)return s;r&&(t=c(t,R(r))),e?(i=f,a=!1):t.length>=X&&(i=E,a=!1,t=new vr(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p);if(p=e||0!==p?p:0,a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function Gr(n,t){var r=!0;return vs(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Yr(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===Y?o===o&&!yc(o):r(o,f)))var f=o,c=i}return c}function Qr(n,t,r,e){var u=n.length;for(r=jc(r),r<0&&(r=-r>u?0:u+r),
    e=e===Y||e>u?u:jc(e),e<0&&(e+=u),e=r>e?0:Ac(e);r<e;)n[r++]=t;return n}function ne(n,t){var r=[];return vs(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function te(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Si),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?te(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function ee(n,t){return n&&ys(n,t,Fc)}function ue(n,t){return n&&ds(n,t,Fc)}function se(n,t){return i(t,function(t){return rc(n[t])})}function ve(n,t){t=ju(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Qi(t[r++])];
    return r&&r==e?n:Y}function ye(n,t,r){var e=t(n);return yh(n)?e:a(e,r(n))}function de(n){return null==n?n===Y?tt:Vn:Cl&&Cl in cl(n)?ji(n):qi(n)}function be(n,t){return n>t}function we(n,t){return null!=n&&yl.call(n,t)}function me(n,t){return null!=n&&t in cl(n)}function xe(n,t,r){return n>=Vl(t,r)&&n<Kl(t,r)}function je(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=el(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,R(t))),s=Vl(p.length,s),l[a]=!r&&(t||u>=120&&p.length>=120)?new vr(a&&p):Y}p=n[0];
    var _=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],y=t?t(g):g;if(g=r||0!==g?g:0,!(v?E(v,y):e(h,y,r))){for(a=i;--a;){var d=l[a];if(!(d?E(d,y):e(n[a],y,r)))continue n}v&&v.push(y),h.push(g)}}return h}function Ae(n,t,r,e){return ee(n,function(n,u,i){t(e,r(n),u,i)}),e}function ke(t,r,e){r=ju(r,t),t=Ki(t,r);var u=null==t?t:t[Qi(mo(r))];return null==u?Y:n(u,t,e)}function Oe(n){return oc(n)&&de(n)==Bn}function Ie(n){return oc(n)&&de(n)==ut}function Re(n){return oc(n)&&de(n)==Mn}function ze(n,t,r,e,u){
    return n===t||(null==n||null==t||!oc(n)&&!oc(t)?n!==n&&t!==t:Ee(n,t,r,e,ze,u))}function Ee(n,t,r,e,u,i){var o=yh(n),f=yh(t),c=o?Tn:Is(n),a=f?Tn:Is(t);c=c==Bn?Gn:c,a=a==Bn?Gn:a;var l=c==Gn,s=a==Gn,h=c==a;if(h&&bh(n)){if(!bh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new dr),o||Ah(n)?si(n,t,r,e,u,i):hi(n,t,c,r,e,u,i);if(!(r&an)){var p=l&&yl.call(n,"__wrapped__"),_=s&&yl.call(t,"__wrapped__");if(p||_){var v=p?n.value():n,g=_?t.value():t;return i||(i=new dr),u(v,g,r,e,i)}}return!!h&&(i||(i=new dr),pi(n,t,r,e,u,i));
    }function Se(n){return oc(n)&&Is(n)==Zn}function We(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=cl(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===Y&&!(c in n))return!1}else{var s=new dr;if(e)var h=e(a,l,c,n,t,s);if(!(h===Y?ze(l,a,an|ln,e,s):h))return!1}}return!0}function Le(n){return!(!ic(n)||Ti(n))&&(rc(n)?jl:Nt).test(Xi(n))}function Ce(n){return oc(n)&&de(n)==Yn}function Ue(n){return oc(n)&&Is(n)==Qn;
    }function Be(n){return oc(n)&&uc(n.length)&&!!Pr[de(n)]}function Te(n){return"function"==typeof n?n:null==n?Sa:"object"==typeof n?yh(n)?Pe(n[0],n[1]):Ne(n):Da(n)}function $e(n){if(!$i(n))return Zl(n);var t=[];for(var r in cl(n))yl.call(n,r)&&"constructor"!=r&&t.push(r);return t}function De(n){if(!ic(n))return Pi(n);var t=$i(n),r=[];for(var e in n)("constructor"!=e||!t&&yl.call(n,e))&&r.push(e);return r}function Me(n,t){return n<t}function Fe(n,t){var r=-1,e=Vf(n)?el(n.length):[];return vs(n,function(n,u,i){
    e[++r]=t(n,u,i)}),e}function Ne(n){var t=mi(n);return 1==t.length&&t[0][2]?Mi(t[0][0],t[0][1]):function(r){return r===n||We(r,n,t)}}function Pe(n,t){return Ci(n)&&Di(t)?Mi(Qi(n),t):function(r){var e=$c(r,n);return e===Y&&e===t?Mc(r,n):ze(t,e,an|ln)}}function qe(n,t,r,e,u){n!==t&&ys(t,function(i,o){if(u||(u=new dr),ic(i))Ze(n,t,o,r,qe,e,u);else{var f=e?e(Gi(n,o),i,o+"",n,t,u):Y;f===Y&&(f=i),Rr(n,o,f)}},Nc)}function Ze(n,t,r,e,u,i,o){var f=Gi(n,r),c=Gi(t,r),a=o.get(c);if(a)return Rr(n,r,a),Y;var l=i?i(f,c,r+"",n,t,o):Y,s=l===Y;
    if(s){var h=yh(c),p=!h&&bh(c),_=!h&&!p&&Ah(c);l=c,h||p||_?yh(f)?l=f:Gf(f)?l=Uu(f):p?(s=!1,l=ku(c,!0)):_?(s=!1,l=Eu(c,!0)):l=[]:_c(c)||gh(c)?(l=f,gh(f)?l=Oc(f):ic(f)&&!rc(f)||(l=Ri(c))):s=!1}s&&(o.set(c,l),u(l,c,e,i,o),o.delete(c)),Rr(n,r,l)}function Ke(n,t){var r=n.length;if(r)return t+=t<0?r:0,Wi(t,r)?n[t]:Y}function Ve(n,t,r){t=t.length?c(t,function(n){return yh(n)?function(t){return ve(t,1===n.length?n[0]:n)}:n}):[Sa];var e=-1;return t=c(t,R(bi())),A(Fe(n,function(n,r,u){return{criteria:c(t,function(t){
    return t(n)}),index:++e,value:n}}),function(n,t){return Wu(n,t,r)})}function Ge(n,t){return He(n,t,function(t,r){return Mc(n,r)})}function He(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=ve(n,o);r(f,o)&&iu(i,ju(o,n),f)}return i}function Je(n){return function(t){return ve(t,n)}}function Ye(n,t,r,e){var u=e?d:y,i=-1,o=t.length,f=n;for(n===t&&(t=Uu(t)),r&&(f=c(n,R(r)));++i<o;)for(var a=0,l=t[i],s=r?r(l):l;(a=u(f,s,a,e))>-1;)f!==n&&Sl.call(f,a,1),Sl.call(n,a,1);return n}function Qe(n,t){for(var r=n?t.length:0,e=r-1;r--;){
    var u=t[r];if(r==e||u!==i){var i=u;Wi(u)?Sl.call(n,u,1):vu(n,u)}}return n}function Xe(n,t){return n+Ml(Jl()*(t-n+1))}function nu(n,t,r,e){for(var u=-1,i=Kl(Dl((t-n)/(r||1)),0),o=el(i);i--;)o[e?i:++u]=n,n+=r;return o}function tu(n,t){var r="";if(!n||t<1||t>zn)return r;do t%2&&(r+=n),t=Ml(t/2),t&&(n+=n);while(t);return r}function ru(n,t){return Ss(Zi(n,t,Sa),n+"")}function eu(n){return kr(na(n))}function uu(n,t){var r=na(n);return Yi(r,$r(t,0,r.length))}function iu(n,t,r,e){if(!ic(n))return n;t=ju(t,n);
    for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=Qi(t[u]),a=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return n;if(u!=o){var l=f[c];a=e?e(l,c,f):Y,a===Y&&(a=ic(l)?l:Wi(t[u+1])?[]:{})}zr(f,c,a),f=f[c]}return n}function ou(n){return Yi(na(n))}function fu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=el(u);++e<u;)i[e]=n[e+t];return i}function cu(n,t){var r;return vs(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function au(n,t,r){
    var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Cn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!yc(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return lu(n,t,Sa,r)}function lu(n,t,r,e){var u=0,i=null==n?0:n.length;if(0===i)return 0;t=r(t);for(var o=t!==t,f=null===t,c=yc(t),a=t===Y;u<i;){var l=Ml((u+i)/2),s=r(n[l]),h=s!==Y,p=null===s,_=s===s,v=yc(s);if(o)var g=e||_;else g=a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):!p&&!v&&(e?s<=t:s<t);g?u=l+1:i=l}return Vl(i,Ln)}function su(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){
    var o=n[r],f=t?t(o):o;if(!r||!Kf(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function hu(n){return"number"==typeof n?n:yc(n)?Sn:+n}function pu(n){if("string"==typeof n)return n;if(yh(n))return c(n,pu)+"";if(yc(n))return ps?ps.call(n):"";var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function _u(n,t,r){var e=-1,u=o,i=n.length,c=!0,a=[],l=a;if(r)c=!1,u=f;else if(i>=X){var s=t?null:js(n);if(s)return N(s);c=!1,u=E,l=new vr}else l=t?[]:a;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,c&&p===p){for(var _=l.length;_--;)if(l[_]===p)continue n;
    t&&l.push(p),a.push(h)}else u(l,p,r)||(l!==a&&l.push(p),a.push(h))}return a}function vu(n,t){return t=ju(t,n),n=Ki(n,t),null==n||delete n[Qi(mo(t))]}function gu(n,t,r,e){return iu(n,t,r(ve(n,t)),e)}function yu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?fu(n,e?0:i,e?i+1:u):fu(n,e?i+1:0,e?u:i)}function du(n,t){var r=n;return r instanceof Bt&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function bu(n,t,r){var e=n.length;if(e<2)return e?_u(n[0]):[];
    for(var u=-1,i=el(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Vr(i[u]||o,n[f],t,r));return _u(te(i,1),t,r)}function wu(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){r(o,n[e],e<i?t[e]:Y)}return o}function mu(n){return Gf(n)?n:[]}function xu(n){return"function"==typeof n?n:Sa}function ju(n,t){return yh(n)?n:Ci(n,t)?[n]:Ws(Rc(n))}function Au(n,t,r){var e=n.length;return r=r===Y?e:r,!t&&r>=e?n:fu(n,t,r)}function ku(n,t){if(t)return n.slice();var r=n.length,e=Il?Il(r):new n.constructor(r);
    return n.copy(e),e}function Ou(n){var t=new n.constructor(n.byteLength);return new Ol(t).set(new Ol(n)),t}function Iu(n,t){return new n.constructor(t?Ou(n.buffer):n.buffer,n.byteOffset,n.byteLength)}function Ru(n){var t=new n.constructor(n.source,Dt.exec(n));return t.lastIndex=n.lastIndex,t}function zu(n){return hs?cl(hs.call(n)):{}}function Eu(n,t){return new n.constructor(t?Ou(n.buffer):n.buffer,n.byteOffset,n.length)}function Su(n,t){if(n!==t){var r=n!==Y,e=null===n,u=n===n,i=yc(n),o=t!==Y,f=null===t,c=t===t,a=yc(t);
    if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Wu(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var c=Su(u[e],i[e]);if(c){if(e>=f)return c;return c*("desc"==r[e]?-1:1)}}return n.index-t.index}function Lu(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Kl(i-o,0),l=el(c+a),s=!e;++f<c;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l;
    }function Cu(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Kl(i-f,0),s=el(l+a),h=!e;++u<l;)s[u]=n[u];for(var p=u;++c<a;)s[p+c]=t[c];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Uu(n,t){var r=-1,e=n.length;for(t||(t=el(e));++r<e;)t[r]=n[r];return t}function Bu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):Y;c===Y&&(c=n[f]),u?Cr(r,f,c):zr(r,f,c)}return r}function Tu(n,t){return Bu(n,ks(n),t)}function $u(n,t){return Bu(n,Os(n),t);
    }function Du(n,r){return function(e,u){var i=yh(e)?t:Sr,o=r?r():{};return i(e,n,bi(u,2),o)}}function Mu(n){return ru(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:Y,o=u>2?r[2]:Y;for(i=n.length>3&&"function"==typeof i?(u--,i):Y,o&&Li(r[0],r[1],o)&&(i=u<3?Y:i,u=1),t=cl(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Fu(n,t){return function(r,e){if(null==r)return r;if(!Vf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=cl(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function Nu(n){return function(t,r,e){
    for(var u=-1,i=cl(t),o=e(t),f=o.length;f--;){var c=o[n?f:++u];if(r(i[c],c,i)===!1)break}return t}}function Pu(n,t,r){function e(){return(this&&this!==Xr&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=t&sn,i=Ku(n);return e}function qu(n){return function(t){t=Rc(t);var r=B(t)?V(t):Y,e=r?r[0]:t.charAt(0),u=r?Au(r,1).join(""):t.slice(1);return e[n]()+u}}function Zu(n){return function(t){return l(Oa(oa(t).replace(Ur,"")),n,"")}}function Ku(n){return function(){var t=arguments;switch(t.length){
    case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=_s(n.prototype),e=n.apply(r,t);return ic(e)?e:r}}function Vu(t,r,e){function u(){for(var o=arguments.length,f=el(o),c=o,a=di(u);c--;)f[c]=arguments[c];var l=o<3&&f[0]!==a&&f[o-1]!==a?[]:F(f,a);
    return o-=l.length,o<e?ui(t,r,Ju,u.placeholder,Y,f,l,Y,Y,e-o):n(this&&this!==Xr&&this instanceof u?i:t,this,f)}var i=Ku(t);return u}function Gu(n){return function(t,r,e){var u=cl(t);if(!Vf(t)){var i=bi(r,3);t=Fc(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:Y}}function Hu(n){return _i(function(t){var r=t.length,e=r,u=H.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new sl(tn);if(u&&!o&&"wrapper"==yi(i))var o=new H([],!0)}for(e=o?e:r;++e<r;){
    i=t[e];var f=yi(i),c="wrapper"==f?As(i):Y;o=c&&Bi(c[0])&&c[1]==(dn|_n|gn|bn)&&!c[4].length&&1==c[9]?o[yi(c[0])].apply(o,c[3]):1==i.length&&Bi(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&yh(e))return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function Ju(n,t,r,e,u,i,o,f,c,a){function l(){for(var y=arguments.length,d=el(y),b=y;b--;)d[b]=arguments[b];if(_)var w=di(l),m=L(d,w);if(e&&(d=Lu(d,e,u,_)),i&&(d=Cu(d,i,o,_)),
    y-=m,_&&y<a){return ui(n,t,Ju,l.placeholder,r,d,F(d,w),f,c,a-y)}var x=h?r:this,j=p?x[n]:n;return y=d.length,f?d=Vi(d,f):v&&y>1&&d.reverse(),s&&c<y&&(d.length=c),this&&this!==Xr&&this instanceof l&&(j=g||Ku(j)),j.apply(x,d)}var s=t&dn,h=t&sn,p=t&hn,_=t&(_n|vn),v=t&wn,g=p?Y:Ku(n);return l}function Yu(n,t){return function(r,e){return Ae(r,n,t(e),{})}}function Qu(n,t){return function(r,e){var u;if(r===Y&&e===Y)return t;if(r!==Y&&(u=r),e!==Y){if(u===Y)return e;"string"==typeof r||"string"==typeof e?(r=pu(r),
    e=pu(e)):(r=hu(r),e=hu(e)),u=n(r,e)}return u}}function Xu(t){return _i(function(r){return r=c(r,R(bi())),ru(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ni(n,t){t=t===Y?" ":pu(t);var r=t.length;if(r<2)return r?tu(t,n):t;var e=tu(t,Dl(n/K(t)));return B(t)?Au(V(e),0,n).join(""):e.slice(0,n)}function ti(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=el(l+c),h=this&&this!==Xr&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];
    return n(h,o?e:this,s)}var o=r&sn,f=Ku(t);return i}function ri(n){return function(t,r,e){return e&&"number"!=typeof e&&Li(t,r,e)&&(r=e=Y),t=xc(t),r===Y?(r=t,t=0):r=xc(r),e=e===Y?t<r?1:-1:xc(e),nu(t,r,e,n)}}function ei(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=kc(t),r=kc(r)),n(t,r)}}function ui(n,t,r,e,u,i,o,f,c,a){var l=t&_n,s=l?o:Y,h=l?Y:o,p=l?i:Y,_=l?Y:i;t|=l?gn:yn,t&=~(l?yn:gn),t&pn||(t&=~(sn|hn));var v=[n,t,u,p,s,_,h,f,c,a],g=r.apply(Y,v);return Bi(n)&&zs(g,v),g.placeholder=e,
    Hi(g,n,t)}function ii(n){var t=fl[n];return function(n,r){if(n=kc(n),r=null==r?0:Vl(jc(r),292),r&&Pl(n)){var e=(Rc(n)+"e").split("e");return e=(Rc(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oi(n){return function(t){var r=Is(t);return r==Zn?D(t):r==Qn?P(t):I(t,n(t))}}function fi(n,t,r,e,u,i,o,f){var c=t&hn;if(!c&&"function"!=typeof n)throw new sl(tn);var a=e?e.length:0;if(a||(t&=~(gn|yn),e=u=Y),o=o===Y?o:Kl(jc(o),0),f=f===Y?f:jc(f),a-=u?u.length:0,t&yn){var l=e,s=u;
    e=u=Y}var h=c?Y:As(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Ni(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=p[9]===Y?c?0:n.length:Kl(p[9]-a,0),!f&&t&(_n|vn)&&(t&=~(_n|vn)),t&&t!=sn)_=t==_n||t==vn?Vu(n,t,f):t!=gn&&t!=(sn|gn)||u.length?Ju.apply(Y,p):ti(n,t,r,e);else var _=Pu(n,t,r);return Hi((h?bs:zs)(_,p),n,t)}function ci(n,t,r,e){return n===Y||Kf(n,_l[r])&&!yl.call(e,r)?t:n}function ai(n,t,r,e,u,i){return ic(n)&&ic(t)&&(i.set(t,n),qe(n,t,Y,ai,i),i.delete(t)),n}function li(n){return _c(n)?Y:n}function si(n,t,r,e,u,i){
    var o=r&an,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return!1;var a=i.get(n),l=i.get(t);if(a&&l)return a==t&&l==n;var s=-1,p=!0,_=r&ln?new vr:Y;for(i.set(n,t),i.set(t,n);++s<f;){var v=n[s],g=t[s];if(e)var y=o?e(g,v,s,t,n,i):e(v,g,s,n,t,i);if(y!==Y){if(y)continue;p=!1;break}if(_){if(!h(t,function(n,t){if(!E(_,t)&&(v===n||u(v,n,r,e,i)))return _.push(t)})){p=!1;break}}else if(v!==g&&!u(v,g,r,e,i)){p=!1;break}}return i.delete(n),i.delete(t),p}function hi(n,t,r,e,u,i,o){switch(r){case it:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;
    n=n.buffer,t=t.buffer;case ut:return!(n.byteLength!=t.byteLength||!i(new Ol(n),new Ol(t)));case Dn:case Mn:case Kn:return Kf(+n,+t);case Nn:return n.name==t.name&&n.message==t.message;case Yn:case Xn:return n==t+"";case Zn:var f=D;case Qn:var c=e&an;if(f||(f=N),n.size!=t.size&&!c)return!1;var a=o.get(n);if(a)return a==t;e|=ln,o.set(n,t);var l=si(f(n),f(t),e,u,i,o);return o.delete(n),l;case nt:if(hs)return hs.call(n)==hs.call(t)}return!1}function pi(n,t,r,e,u,i){var o=r&an,f=vi(n),c=f.length;if(c!=vi(t).length&&!o)return!1;
    for(var a=c;a--;){var l=f[a];if(!(o?l in t:yl.call(t,l)))return!1}var s=i.get(n),h=i.get(t);if(s&&h)return s==t&&h==n;var p=!0;i.set(n,t),i.set(t,n);for(var _=o;++a<c;){l=f[a];var v=n[l],g=t[l];if(e)var y=o?e(g,v,l,t,n,i):e(v,g,l,n,t,i);if(!(y===Y?v===g||u(v,g,r,e,i):y)){p=!1;break}_||(_="constructor"==l)}if(p&&!_){var d=n.constructor,b=t.constructor;d!=b&&"constructor"in n&&"constructor"in t&&!("function"==typeof d&&d instanceof d&&"function"==typeof b&&b instanceof b)&&(p=!1)}return i.delete(n),
    i.delete(t),p}function _i(n){return Ss(Zi(n,Y,ho),n+"")}function vi(n){return ye(n,Fc,ks)}function gi(n){return ye(n,Nc,Os)}function yi(n){for(var t=n.name+"",r=is[t],e=yl.call(is,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function di(n){return(yl.call(q,"placeholder")?q:n).placeholder}function bi(){var n=q.iteratee||Wa;return n=n===Wa?Te:n,arguments.length?n(arguments[0],arguments[1]):n}function wi(n,t){var r=n.__data__;return Ui(t)?r["string"==typeof t?"string":"hash"]:r.map;
    }function mi(n){for(var t=Fc(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Di(u)]}return t}function xi(n,t){var r=U(n,t);return Le(r)?r:Y}function ji(n){var t=yl.call(n,Cl),r=n[Cl];try{n[Cl]=Y;var e=!0}catch(n){}var u=wl.call(n);return e&&(t?n[Cl]=r:delete n[Cl]),u}function Ai(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Vl(t,n+o);break;case"takeRight":n=Kl(n,t-o)}}return{start:n,end:t}}function ki(n){var t=n.match(Ct);
    return t?t[1].split(Ut):[]}function Oi(n,t,r){t=ju(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=Qi(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&uc(u)&&Wi(o,u)&&(yh(n)||gh(n)))}function Ii(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&yl.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ri(n){return"function"!=typeof n.constructor||$i(n)?{}:_s(Rl(n))}function zi(n,t,r){var e=n.constructor;switch(t){case ut:return Ou(n);
    case Dn:case Mn:return new e(+n);case it:return Iu(n,r);case ot:case ft:case ct:case at:case lt:case st:case ht:case pt:case _t:return Eu(n,r);case Zn:return new e;case Kn:case Xn:return new e(n);case Yn:return Ru(n);case Qn:return new e;case nt:return zu(n)}}function Ei(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Lt,"{\n/* [wrapped with "+t+"] */\n")}function Si(n){return yh(n)||gh(n)||!!(Wl&&n&&n[Wl])}function Wi(n,t){var r=typeof n;
    return t=null==t?zn:t,!!t&&("number"==r||"symbol"!=r&&qt.test(n))&&n>-1&&n%1==0&&n<t}function Li(n,t,r){if(!ic(r))return!1;var e=typeof t;return!!("number"==e?Vf(r)&&Wi(t,r.length):"string"==e&&t in r)&&Kf(r[t],n)}function Ci(n,t){if(yh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!yc(n))||(Ot.test(n)||!kt.test(n)||null!=t&&n in cl(t))}function Ui(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Bi(n){
    var t=yi(n),r=q[t];if("function"!=typeof r||!(t in Bt.prototype))return!1;if(n===r)return!0;var e=As(r);return!!e&&n===e[0]}function Ti(n){return!!bl&&bl in n}function $i(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||_l)}function Di(n){return n===n&&!ic(n)}function Mi(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==Y||n in cl(r)))}}function Fi(n){var t=Wf(n,function(n){return r.size===en&&r.clear(),n}),r=t.cache;return t}function Ni(n,t){var r=n[1],e=t[1],u=r|e,i=u<(sn|hn|dn),o=e==dn&&r==_n||e==dn&&r==bn&&n[7].length<=t[8]||e==(dn|bn)&&t[7].length<=t[8]&&r==_n;
    if(!i&&!o)return n;e&sn&&(n[2]=t[2],u|=r&sn?0:pn);var f=t[3];if(f){var c=n[3];n[3]=c?Lu(c,f,t[4]):f,n[4]=c?F(n[3],un):t[4]}return f=t[5],f&&(c=n[5],n[5]=c?Cu(c,f,t[6]):f,n[6]=c?F(n[5],un):t[6]),f=t[7],f&&(n[7]=f),e&dn&&(n[8]=null==n[8]?t[8]:Vl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Pi(n){var t=[];if(null!=n)for(var r in cl(n))t.push(r);return t}function qi(n){return wl.call(n)}function Zi(t,r,e){return r=Kl(r===Y?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Kl(u.length-r,0),f=el(o);++i<o;)f[i]=u[r+i];
    i=-1;for(var c=el(r+1);++i<r;)c[i]=u[i];return c[r]=e(f),n(t,this,c)}}function Ki(n,t){return t.length<2?n:ve(n,fu(t,0,-1))}function Vi(n,t){for(var r=n.length,e=Vl(t.length,r),u=Uu(n);e--;){var i=t[e];n[e]=Wi(i,r)?u[i]:Y}return n}function Gi(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}function Hi(n,t,r){var e=t+"";return Ss(n,Ei(e,no(ki(e),r)))}function Ji(n){var t=0,r=0;return function(){var e=Gl(),u=An-(e-r);if(r=e,u>0){if(++t>=jn)return arguments[0]}else t=0;
    return n.apply(Y,arguments)}}function Yi(n,t){var r=-1,e=n.length,u=e-1;for(t=t===Y?e:t;++r<t;){var i=Xe(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function Qi(n){if("string"==typeof n||yc(n))return n;var t=n+"";return"0"==t&&1/n==-Rn?"-0":t}function Xi(n){if(null!=n){try{return gl.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function no(n,t){return r(Un,function(r){var e="_."+r[0];t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function to(n){if(n instanceof Bt)return n.clone();var t=new H(n.__wrapped__,n.__chain__);
    return t.__actions__=Uu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function ro(n,t,r){t=(r?Li(n,t,r):t===Y)?1:Kl(jc(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=el(Dl(e/t));u<e;)o[i++]=fu(n,u,u+=t);return o}function eo(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function uo(){var n=arguments.length;if(!n)return[];for(var t=el(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return a(yh(r)?Uu(r):[r],te(t,1));
    }function io(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),fu(n,t<0?0:t,e)):[]}function oo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),t=e-t,fu(n,0,t<0?0:t)):[]}function fo(n,t){return n&&n.length?yu(n,bi(t,3),!0,!0):[]}function co(n,t){return n&&n.length?yu(n,bi(t,3),!0):[]}function ao(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&Li(n,t,r)&&(r=0,e=u),Qr(n,t,r,e)):[]}function lo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:jc(r);
    return u<0&&(u=Kl(e+u,0)),g(n,bi(t,3),u)}function so(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==Y&&(u=jc(r),u=r<0?Kl(e+u,0):Vl(u,e-1)),g(n,bi(t,3),u,!0)}function ho(n){return(null==n?0:n.length)?te(n,1):[]}function po(n){return(null==n?0:n.length)?te(n,Rn):[]}function _o(n,t){return(null==n?0:n.length)?(t=t===Y?1:jc(t),te(n,t)):[]}function vo(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function go(n){return n&&n.length?n[0]:Y}function yo(n,t,r){
    var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:jc(r);return u<0&&(u=Kl(e+u,0)),y(n,t,u)}function bo(n){return(null==n?0:n.length)?fu(n,0,-1):[]}function wo(n,t){return null==n?"":ql.call(n,t)}function mo(n){var t=null==n?0:n.length;return t?n[t-1]:Y}function xo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==Y&&(u=jc(r),u=u<0?Kl(e+u,0):Vl(u,e-1)),t===t?Z(n,t,u):g(n,b,u,!0)}function jo(n,t){return n&&n.length?Ke(n,jc(t)):Y}function Ao(n,t){return n&&n.length&&t&&t.length?Ye(n,t):n;
    }function ko(n,t,r){return n&&n.length&&t&&t.length?Ye(n,t,bi(r,2)):n}function Oo(n,t,r){return n&&n.length&&t&&t.length?Ye(n,t,Y,r):n}function Io(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=bi(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return Qe(n,u),r}function Ro(n){return null==n?n:Yl.call(n)}function zo(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&Li(n,t,r)?(t=0,r=e):(t=null==t?0:jc(t),r=r===Y?e:jc(r)),fu(n,t,r)):[]}function Eo(n,t){
    return au(n,t)}function So(n,t,r){return lu(n,t,bi(r,2))}function Wo(n,t){var r=null==n?0:n.length;if(r){var e=au(n,t);if(e<r&&Kf(n[e],t))return e}return-1}function Lo(n,t){return au(n,t,!0)}function Co(n,t,r){return lu(n,t,bi(r,2),!0)}function Uo(n,t){if(null==n?0:n.length){var r=au(n,t,!0)-1;if(Kf(n[r],t))return r}return-1}function Bo(n){return n&&n.length?su(n):[]}function To(n,t){return n&&n.length?su(n,bi(t,2)):[]}function $o(n){var t=null==n?0:n.length;return t?fu(n,1,t):[]}function Do(n,t,r){
    return n&&n.length?(t=r||t===Y?1:jc(t),fu(n,0,t<0?0:t)):[]}function Mo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===Y?1:jc(t),t=e-t,fu(n,t<0?0:t,e)):[]}function Fo(n,t){return n&&n.length?yu(n,bi(t,3),!1,!0):[]}function No(n,t){return n&&n.length?yu(n,bi(t,3)):[]}function Po(n){return n&&n.length?_u(n):[]}function qo(n,t){return n&&n.length?_u(n,bi(t,2)):[]}function Zo(n,t){return t="function"==typeof t?t:Y,n&&n.length?_u(n,Y,t):[]}function Ko(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){
    if(Gf(n))return t=Kl(n.length,t),!0}),O(t,function(t){return c(n,m(t))})}function Vo(t,r){if(!t||!t.length)return[];var e=Ko(t);return null==r?e:c(e,function(t){return n(r,Y,t)})}function Go(n,t){return wu(n||[],t||[],zr)}function Ho(n,t){return wu(n||[],t||[],iu)}function Jo(n){var t=q(n);return t.__chain__=!0,t}function Yo(n,t){return t(n),n}function Qo(n,t){return t(n)}function Xo(){return Jo(this)}function nf(){return new H(this.value(),this.__chain__)}function tf(){this.__values__===Y&&(this.__values__=mc(this.value()));
    var n=this.__index__>=this.__values__.length;return{done:n,value:n?Y:this.__values__[this.__index__++]}}function rf(){return this}function ef(n){for(var t,r=this;r instanceof G;){var e=to(r);e.__index__=0,e.__values__=Y,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function uf(){var n=this.__wrapped__;if(n instanceof Bt){var t=n;return this.__actions__.length&&(t=new Bt(this)),t=t.reverse(),t.__actions__.push({func:Qo,args:[Ro],thisArg:Y}),new H(t,this.__chain__)}return this.thru(Ro);
    }function of(){return du(this.__wrapped__,this.__actions__)}function ff(n,t,r){var e=yh(n)?u:Gr;return r&&Li(n,t,r)&&(t=Y),e(n,bi(t,3))}function cf(n,t){return(yh(n)?i:ne)(n,bi(t,3))}function af(n,t){return te(vf(n,t),1)}function lf(n,t){return te(vf(n,t),Rn)}function sf(n,t,r){return r=r===Y?1:jc(r),te(vf(n,t),r)}function hf(n,t){return(yh(n)?r:vs)(n,bi(t,3))}function pf(n,t){return(yh(n)?e:gs)(n,bi(t,3))}function _f(n,t,r,e){n=Vf(n)?n:na(n),r=r&&!e?jc(r):0;var u=n.length;return r<0&&(r=Kl(u+r,0)),
    gc(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&y(n,t,r)>-1}function vf(n,t){return(yh(n)?c:Fe)(n,bi(t,3))}function gf(n,t,r,e){return null==n?[]:(yh(t)||(t=null==t?[]:[t]),r=e?Y:r,yh(r)||(r=null==r?[]:[r]),Ve(n,t,r))}function yf(n,t,r){var e=yh(n)?l:j,u=arguments.length<3;return e(n,bi(t,4),r,u,vs)}function df(n,t,r){var e=yh(n)?s:j,u=arguments.length<3;return e(n,bi(t,4),r,u,gs)}function bf(n,t){return(yh(n)?i:ne)(n,Lf(bi(t,3)))}function wf(n){return(yh(n)?kr:eu)(n)}function mf(n,t,r){return t=(r?Li(n,t,r):t===Y)?1:jc(t),
    (yh(n)?Or:uu)(n,t)}function xf(n){return(yh(n)?Ir:ou)(n)}function jf(n){if(null==n)return 0;if(Vf(n))return gc(n)?K(n):n.length;var t=Is(n);return t==Zn||t==Qn?n.size:$e(n).length}function Af(n,t,r){var e=yh(n)?h:cu;return r&&Li(n,t,r)&&(t=Y),e(n,bi(t,3))}function kf(n,t){if("function"!=typeof t)throw new sl(tn);return n=jc(n),function(){if(--n<1)return t.apply(this,arguments)}}function Of(n,t,r){return t=r?Y:t,t=n&&null==t?n.length:t,fi(n,dn,Y,Y,Y,Y,t)}function If(n,t){var r;if("function"!=typeof t)throw new sl(tn);
    return n=jc(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=Y),r}}function Rf(n,t,r){t=r?Y:t;var e=fi(n,_n,Y,Y,Y,Y,Y,t);return e.placeholder=Rf.placeholder,e}function zf(n,t,r){t=r?Y:t;var e=fi(n,vn,Y,Y,Y,Y,Y,t);return e.placeholder=zf.placeholder,e}function Ef(n,t,r){function e(t){var r=h,e=p;return h=p=Y,d=t,v=n.apply(e,r)}function u(n){return d=n,g=Es(f,t),b?e(n):v}function i(n){var r=n-y,e=n-d,u=t-r;return w?Vl(u,_-e):u}function o(n){var r=n-y,e=n-d;return y===Y||r>=t||r<0||w&&e>=_;
    }function f(){var n=ih();return o(n)?c(n):(g=Es(f,i(n)),Y)}function c(n){return g=Y,m&&h?e(n):(h=p=Y,v)}function a(){g!==Y&&xs(g),d=0,h=y=p=g=Y}function l(){return g===Y?v:c(ih())}function s(){var n=ih(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===Y)return u(y);if(w)return xs(g),g=Es(f,t),e(y)}return g===Y&&(g=Es(f,t)),v}var h,p,_,v,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new sl(tn);return t=kc(t)||0,ic(r)&&(b=!!r.leading,w="maxWait"in r,_=w?Kl(kc(r.maxWait)||0,t):_,m="trailing"in r?!!r.trailing:m),
    s.cancel=a,s.flush=l,s}function Sf(n){return fi(n,wn)}function Wf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new sl(tn);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Wf.Cache||ar),r}function Lf(n){if("function"!=typeof n)throw new sl(tn);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:
    return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Cf(n){return If(2,n)}function Uf(n,t){if("function"!=typeof n)throw new sl(tn);return t=t===Y?t:jc(t),ru(n,t)}function Bf(t,r){if("function"!=typeof t)throw new sl(tn);return r=null==r?0:Kl(jc(r),0),ru(function(e){var u=e[r],i=Au(e,0,r);return u&&a(i,u),n(t,this,i)})}function Tf(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new sl(tn);return ic(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),
    Ef(n,t,{leading:e,maxWait:t,trailing:u})}function $f(n){return Of(n,1)}function Df(n,t){return sh(xu(t),n)}function Mf(){if(!arguments.length)return[];var n=arguments[0];return yh(n)?n:[n]}function Ff(n){return Dr(n,cn)}function Nf(n,t){return t="function"==typeof t?t:Y,Dr(n,cn,t)}function Pf(n){return Dr(n,on|cn)}function qf(n,t){return t="function"==typeof t?t:Y,Dr(n,on|cn,t)}function Zf(n,t){return null==t||Zr(n,t,Fc(t))}function Kf(n,t){return n===t||n!==n&&t!==t}function Vf(n){return null!=n&&uc(n.length)&&!rc(n);
    }function Gf(n){return oc(n)&&Vf(n)}function Hf(n){return n===!0||n===!1||oc(n)&&de(n)==Dn}function Jf(n){return oc(n)&&1===n.nodeType&&!_c(n)}function Yf(n){if(null==n)return!0;if(Vf(n)&&(yh(n)||"string"==typeof n||"function"==typeof n.splice||bh(n)||Ah(n)||gh(n)))return!n.length;var t=Is(n);if(t==Zn||t==Qn)return!n.size;if($i(n))return!$e(n).length;for(var r in n)if(yl.call(n,r))return!1;return!0}function Qf(n,t){return ze(n,t)}function Xf(n,t,r){r="function"==typeof r?r:Y;var e=r?r(n,t):Y;return e===Y?ze(n,t,Y,r):!!e;
    }function nc(n){if(!oc(n))return!1;var t=de(n);return t==Nn||t==Fn||"string"==typeof n.message&&"string"==typeof n.name&&!_c(n)}function tc(n){return"number"==typeof n&&Pl(n)}function rc(n){if(!ic(n))return!1;var t=de(n);return t==Pn||t==qn||t==$n||t==Jn}function ec(n){return"number"==typeof n&&n==jc(n)}function uc(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=zn}function ic(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function oc(n){return null!=n&&"object"==typeof n}function fc(n,t){
    return n===t||We(n,t,mi(t))}function cc(n,t,r){return r="function"==typeof r?r:Y,We(n,t,mi(t),r)}function ac(n){return pc(n)&&n!=+n}function lc(n){if(Rs(n))throw new il(nn);return Le(n)}function sc(n){return null===n}function hc(n){return null==n}function pc(n){return"number"==typeof n||oc(n)&&de(n)==Kn}function _c(n){if(!oc(n)||de(n)!=Gn)return!1;var t=Rl(n);if(null===t)return!0;var r=yl.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&gl.call(r)==ml}function vc(n){
    return ec(n)&&n>=-zn&&n<=zn}function gc(n){return"string"==typeof n||!yh(n)&&oc(n)&&de(n)==Xn}function yc(n){return"symbol"==typeof n||oc(n)&&de(n)==nt}function dc(n){return n===Y}function bc(n){return oc(n)&&Is(n)==rt}function wc(n){return oc(n)&&de(n)==et}function mc(n){if(!n)return[];if(Vf(n))return gc(n)?V(n):Uu(n);if(Ll&&n[Ll])return $(n[Ll]());var t=Is(n);return(t==Zn?D:t==Qn?N:na)(n)}function xc(n){if(!n)return 0===n?n:0;if(n=kc(n),n===Rn||n===-Rn){return(n<0?-1:1)*En}return n===n?n:0}function jc(n){
    var t=xc(n),r=t%1;return t===t?r?t-r:t:0}function Ac(n){return n?$r(jc(n),0,Wn):0}function kc(n){if("number"==typeof n)return n;if(yc(n))return Sn;if(ic(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=ic(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Et,"");var r=Ft.test(n);return r||Pt.test(n)?Jr(n.slice(2),r?2:8):Mt.test(n)?Sn:+n}function Oc(n){return Bu(n,Nc(n))}function Ic(n){return n?$r(jc(n),-zn,zn):0===n?n:0}function Rc(n){return null==n?"":pu(n)}function zc(n,t){var r=_s(n);
    return null==t?r:Wr(r,t)}function Ec(n,t){return v(n,bi(t,3),ee)}function Sc(n,t){return v(n,bi(t,3),ue)}function Wc(n,t){return null==n?n:ys(n,bi(t,3),Nc)}function Lc(n,t){return null==n?n:ds(n,bi(t,3),Nc)}function Cc(n,t){return n&&ee(n,bi(t,3))}function Uc(n,t){return n&&ue(n,bi(t,3))}function Bc(n){return null==n?[]:se(n,Fc(n))}function Tc(n){return null==n?[]:se(n,Nc(n))}function $c(n,t,r){var e=null==n?Y:ve(n,t);return e===Y?r:e}function Dc(n,t){return null!=n&&Oi(n,t,we)}function Mc(n,t){return null!=n&&Oi(n,t,me);
    }function Fc(n){return Vf(n)?Ar(n):$e(n)}function Nc(n){return Vf(n)?Ar(n,!0):De(n)}function Pc(n,t){var r={};return t=bi(t,3),ee(n,function(n,e,u){Cr(r,t(n,e,u),n)}),r}function qc(n,t){var r={};return t=bi(t,3),ee(n,function(n,e,u){Cr(r,e,t(n,e,u))}),r}function Zc(n,t){return Kc(n,Lf(bi(t)))}function Kc(n,t){if(null==n)return{};var r=c(gi(n),function(n){return[n]});return t=bi(t),He(n,r,function(n,r){return t(n,r[0])})}function Vc(n,t,r){t=ju(t,n);var e=-1,u=t.length;for(u||(u=1,n=Y);++e<u;){var i=null==n?Y:n[Qi(t[e])];
    i===Y&&(e=u,i=r),n=rc(i)?i.call(n):i}return n}function Gc(n,t,r){return null==n?n:iu(n,t,r)}function Hc(n,t,r,e){return e="function"==typeof e?e:Y,null==n?n:iu(n,t,r,e)}function Jc(n,t,e){var u=yh(n),i=u||bh(n)||Ah(n);if(t=bi(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:ic(n)&&rc(o)?_s(Rl(n)):{}}return(i?r:ee)(n,function(n,r,u){return t(e,n,r,u)}),e}function Yc(n,t){return null==n||vu(n,t)}function Qc(n,t,r){return null==n?n:gu(n,t,xu(r))}function Xc(n,t,r,e){return e="function"==typeof e?e:Y,
    null==n?n:gu(n,t,xu(r),e)}function na(n){return null==n?[]:z(n,Fc(n))}function ta(n){return null==n?[]:z(n,Nc(n))}function ra(n,t,r){return r===Y&&(r=t,t=Y),r!==Y&&(r=kc(r),r=r===r?r:0),t!==Y&&(t=kc(t),t=t===t?t:0),$r(kc(n),t,r)}function ea(n,t,r){return t=xc(t),r===Y?(r=t,t=0):r=xc(r),n=kc(n),xe(n,t,r)}function ua(n,t,r){if(r&&"boolean"!=typeof r&&Li(n,t,r)&&(t=r=Y),r===Y&&("boolean"==typeof t?(r=t,t=Y):"boolean"==typeof n&&(r=n,n=Y)),n===Y&&t===Y?(n=0,t=1):(n=xc(n),t===Y?(t=n,n=0):t=xc(t)),n>t){
    var e=n;n=t,t=e}if(r||n%1||t%1){var u=Jl();return Vl(n+u*(t-n+Hr("1e-"+((u+"").length-1))),t)}return Xe(n,t)}function ia(n){return Jh(Rc(n).toLowerCase())}function oa(n){return n=Rc(n),n&&n.replace(Zt,he).replace(Br,"")}function fa(n,t,r){n=Rc(n),t=pu(t);var e=n.length;r=r===Y?e:$r(jc(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function ca(n){return n=Rc(n),n&&mt.test(n)?n.replace(bt,pe):n}function aa(n){return n=Rc(n),n&&zt.test(n)?n.replace(Rt,"\\$&"):n}function la(n,t,r){n=Rc(n),t=jc(t);
    var e=t?K(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return ni(Ml(u),r)+n+ni(Dl(u),r)}function sa(n,t,r){n=Rc(n),t=jc(t);var e=t?K(n):0;return t&&e<t?n+ni(t-e,r):n}function ha(n,t,r){n=Rc(n),t=jc(t);var e=t?K(n):0;return t&&e<t?ni(t-e,r)+n:n}function pa(n,t,r){return r||null==t?t=0:t&&(t=+t),Hl(Rc(n).replace(St,""),t||0)}function _a(n,t,r){return t=(r?Li(n,t,r):t===Y)?1:jc(t),tu(Rc(n),t)}function va(){var n=arguments,t=Rc(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function ga(n,t,r){return r&&"number"!=typeof r&&Li(n,t,r)&&(t=r=Y),
    (r=r===Y?Wn:r>>>0)?(n=Rc(n),n&&("string"==typeof t||null!=t&&!xh(t))&&(t=pu(t),!t&&B(n))?Au(V(n),0,r):n.split(t,r)):[]}function ya(n,t,r){return n=Rc(n),r=null==r?0:$r(jc(r),0,n.length),t=pu(t),n.slice(r,r+t.length)==t}function da(n,t,r){var e=q.templateSettings;r&&Li(n,t,r)&&(t=Y),n=Rc(n),t=zh({},t,e,ci);var u,i,o=zh({},t.imports,e.imports,ci),f=Fc(o),c=z(o,f),a=0,l=t.interpolate||Kt,s="__p += '",h=al((t.escape||Kt).source+"|"+l.source+"|"+(l===At?$t:Kt).source+"|"+(t.evaluate||Kt).source+"|$","g"),p="//# sourceURL="+(yl.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Nr+"]")+"\n";
    n.replace(h,function(t,r,e,o,f,c){return e||(e=o),s+=n.slice(a,c).replace(Vt,C),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),a=c+t.length,t}),s+="';\n";var _=yl.call(t,"variable")&&t.variable;_||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(vt,""):s).replace(gt,"$1").replace(yt,"$1;"),s="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";
    var v=Yh(function(){return ol(f,p+"return "+s).apply(Y,c)});if(v.source=s,nc(v))throw v;return v}function ba(n){return Rc(n).toLowerCase()}function wa(n){return Rc(n).toUpperCase()}function ma(n,t,r){if(n=Rc(n),n&&(r||t===Y))return n.replace(Et,"");if(!n||!(t=pu(t)))return n;var e=V(n),u=V(t);return Au(e,S(e,u),W(e,u)+1).join("")}function xa(n,t,r){if(n=Rc(n),n&&(r||t===Y))return n.replace(Wt,"");if(!n||!(t=pu(t)))return n;var e=V(n);return Au(e,0,W(e,V(t))+1).join("")}function ja(n,t,r){if(n=Rc(n),
    n&&(r||t===Y))return n.replace(St,"");if(!n||!(t=pu(t)))return n;var e=V(n);return Au(e,S(e,V(t))).join("")}function Aa(n,t){var r=mn,e=xn;if(ic(t)){var u="separator"in t?t.separator:u;r="length"in t?jc(t.length):r,e="omission"in t?pu(t.omission):e}n=Rc(n);var i=n.length;if(B(n)){var o=V(n);i=o.length}if(r>=i)return n;var f=r-K(e);if(f<1)return e;var c=o?Au(o,0,f).join(""):n.slice(0,f);if(u===Y)return c+e;if(o&&(f+=c.length-f),xh(u)){if(n.slice(f).search(u)){var a,l=c;for(u.global||(u=al(u.source,Rc(Dt.exec(u))+"g")),
    u.lastIndex=0;a=u.exec(l);)var s=a.index;c=c.slice(0,s===Y?f:s)}}else if(n.indexOf(pu(u),f)!=f){var h=c.lastIndexOf(u);h>-1&&(c=c.slice(0,h))}return c+e}function ka(n){return n=Rc(n),n&&wt.test(n)?n.replace(dt,_e):n}function Oa(n,t,r){return n=Rc(n),t=r?Y:t,t===Y?T(n)?J(n):_(n):n.match(t)||[]}function Ia(t){var r=null==t?0:t.length,e=bi();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new sl(tn);return[e(n[0]),n[1]]}):[],ru(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e);
    }})}function Ra(n){return Mr(Dr(n,on))}function za(n){return function(){return n}}function Ea(n,t){return null==n||n!==n?t:n}function Sa(n){return n}function Wa(n){return Te("function"==typeof n?n:Dr(n,on))}function La(n){return Ne(Dr(n,on))}function Ca(n,t){return Pe(n,Dr(t,on))}function Ua(n,t,e){var u=Fc(t),i=se(t,u);null!=e||ic(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=se(t,Fc(t)));var o=!(ic(e)&&"chain"in e&&!e.chain),f=rc(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){
    var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Uu(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Ba(){return Xr._===this&&(Xr._=xl),this}function Ta(){}function $a(n){return n=jc(n),ru(function(t){return Ke(t,n)})}function Da(n){return Ci(n)?m(Qi(n)):Je(n)}function Ma(n){return function(t){return null==n?Y:ve(n,t)}}function Fa(){return[]}function Na(){return!1}function Pa(){return{};
    }function qa(){return""}function Za(){return!0}function Ka(n,t){if(n=jc(n),n<1||n>zn)return[];var r=Wn,e=Vl(n,Wn);t=bi(t),n-=Wn;for(var u=O(e,t);++r<n;)t(r);return u}function Va(n){return yh(n)?c(n,Qi):yc(n)?[n]:Uu(Ws(Rc(n)))}function Ga(n){var t=++dl;return Rc(n)+t}function Ha(n){return n&&n.length?Yr(n,Sa,be):Y}function Ja(n,t){return n&&n.length?Yr(n,bi(t,2),be):Y}function Ya(n){return w(n,Sa)}function Qa(n,t){return w(n,bi(t,2))}function Xa(n){return n&&n.length?Yr(n,Sa,Me):Y}function nl(n,t){
    return n&&n.length?Yr(n,bi(t,2),Me):Y}function tl(n){return n&&n.length?k(n,Sa):0}function rl(n,t){return n&&n.length?k(n,bi(t,2)):0}x=null==x?Xr:ge.defaults(Xr.Object(),x,ge.pick(Xr,Fr));var el=x.Array,ul=x.Date,il=x.Error,ol=x.Function,fl=x.Math,cl=x.Object,al=x.RegExp,ll=x.String,sl=x.TypeError,hl=el.prototype,pl=ol.prototype,_l=cl.prototype,vl=x["__core-js_shared__"],gl=pl.toString,yl=_l.hasOwnProperty,dl=0,bl=function(){var n=/[^.]+$/.exec(vl&&vl.keys&&vl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:"";
    }(),wl=_l.toString,ml=gl.call(cl),xl=Xr._,jl=al("^"+gl.call(yl).replace(Rt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Al=re?x.Buffer:Y,kl=x.Symbol,Ol=x.Uint8Array,Il=Al?Al.allocUnsafe:Y,Rl=M(cl.getPrototypeOf,cl),zl=cl.create,El=_l.propertyIsEnumerable,Sl=hl.splice,Wl=kl?kl.isConcatSpreadable:Y,Ll=kl?kl.iterator:Y,Cl=kl?kl.toStringTag:Y,Ul=function(){try{var n=xi(cl,"defineProperty");return n({},"",{}),n}catch(n){}}(),Bl=x.clearTimeout!==Xr.clearTimeout&&x.clearTimeout,Tl=ul&&ul.now!==Xr.Date.now&&ul.now,$l=x.setTimeout!==Xr.setTimeout&&x.setTimeout,Dl=fl.ceil,Ml=fl.floor,Fl=cl.getOwnPropertySymbols,Nl=Al?Al.isBuffer:Y,Pl=x.isFinite,ql=hl.join,Zl=M(cl.keys,cl),Kl=fl.max,Vl=fl.min,Gl=ul.now,Hl=x.parseInt,Jl=fl.random,Yl=hl.reverse,Ql=xi(x,"DataView"),Xl=xi(x,"Map"),ns=xi(x,"Promise"),ts=xi(x,"Set"),rs=xi(x,"WeakMap"),es=xi(cl,"create"),us=rs&&new rs,is={},os=Xi(Ql),fs=Xi(Xl),cs=Xi(ns),as=Xi(ts),ls=Xi(rs),ss=kl?kl.prototype:Y,hs=ss?ss.valueOf:Y,ps=ss?ss.toString:Y,_s=function(){
    function n(){}return function(t){if(!ic(t))return{};if(zl)return zl(t);n.prototype=t;var r=new n;return n.prototype=Y,r}}();q.templateSettings={escape:xt,evaluate:jt,interpolate:At,variable:"",imports:{_:q}},q.prototype=G.prototype,q.prototype.constructor=q,H.prototype=_s(G.prototype),H.prototype.constructor=H,Bt.prototype=_s(G.prototype),Bt.prototype.constructor=Bt,Yt.prototype.clear=Qt,Yt.prototype.delete=Xt,Yt.prototype.get=nr,Yt.prototype.has=tr,Yt.prototype.set=rr,er.prototype.clear=ur,er.prototype.delete=ir,
    er.prototype.get=or,er.prototype.has=fr,er.prototype.set=cr,ar.prototype.clear=lr,ar.prototype.delete=sr,ar.prototype.get=hr,ar.prototype.has=pr,ar.prototype.set=_r,vr.prototype.add=vr.prototype.push=gr,vr.prototype.has=yr,dr.prototype.clear=br,dr.prototype.delete=wr,dr.prototype.get=mr,dr.prototype.has=xr,dr.prototype.set=jr;var vs=Fu(ee),gs=Fu(ue,!0),ys=Nu(),ds=Nu(!0),bs=us?function(n,t){return us.set(n,t),n}:Sa,ws=Ul?function(n,t){return Ul(n,"toString",{configurable:!0,enumerable:!1,value:za(t),
    writable:!0})}:Sa,ms=ru,xs=Bl||function(n){return Xr.clearTimeout(n)},js=ts&&1/N(new ts([,-0]))[1]==Rn?function(n){return new ts(n)}:Ta,As=us?function(n){return us.get(n)}:Ta,ks=Fl?function(n){return null==n?[]:(n=cl(n),i(Fl(n),function(t){return El.call(n,t)}))}:Fa,Os=Fl?function(n){for(var t=[];n;)a(t,ks(n)),n=Rl(n);return t}:Fa,Is=de;(Ql&&Is(new Ql(new ArrayBuffer(1)))!=it||Xl&&Is(new Xl)!=Zn||ns&&Is(ns.resolve())!=Hn||ts&&Is(new ts)!=Qn||rs&&Is(new rs)!=rt)&&(Is=function(n){var t=de(n),r=t==Gn?n.constructor:Y,e=r?Xi(r):"";
    if(e)switch(e){case os:return it;case fs:return Zn;case cs:return Hn;case as:return Qn;case ls:return rt}return t});var Rs=vl?rc:Na,zs=Ji(bs),Es=$l||function(n,t){return Xr.setTimeout(n,t)},Ss=Ji(ws),Ws=Fi(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(It,function(n,r,e,u){t.push(e?u.replace(Tt,"$1"):r||n)}),t}),Ls=ru(function(n,t){return Gf(n)?Vr(n,te(t,1,Gf,!0)):[]}),Cs=ru(function(n,t){var r=mo(t);return Gf(r)&&(r=Y),Gf(n)?Vr(n,te(t,1,Gf,!0),bi(r,2)):[]}),Us=ru(function(n,t){
    var r=mo(t);return Gf(r)&&(r=Y),Gf(n)?Vr(n,te(t,1,Gf,!0),Y,r):[]}),Bs=ru(function(n){var t=c(n,mu);return t.length&&t[0]===n[0]?je(t):[]}),Ts=ru(function(n){var t=mo(n),r=c(n,mu);return t===mo(r)?t=Y:r.pop(),r.length&&r[0]===n[0]?je(r,bi(t,2)):[]}),$s=ru(function(n){var t=mo(n),r=c(n,mu);return t="function"==typeof t?t:Y,t&&r.pop(),r.length&&r[0]===n[0]?je(r,Y,t):[]}),Ds=ru(Ao),Ms=_i(function(n,t){var r=null==n?0:n.length,e=Tr(n,t);return Qe(n,c(t,function(n){return Wi(n,r)?+n:n}).sort(Su)),e}),Fs=ru(function(n){
    return _u(te(n,1,Gf,!0))}),Ns=ru(function(n){var t=mo(n);return Gf(t)&&(t=Y),_u(te(n,1,Gf,!0),bi(t,2))}),Ps=ru(function(n){var t=mo(n);return t="function"==typeof t?t:Y,_u(te(n,1,Gf,!0),Y,t)}),qs=ru(function(n,t){return Gf(n)?Vr(n,t):[]}),Zs=ru(function(n){return bu(i(n,Gf))}),Ks=ru(function(n){var t=mo(n);return Gf(t)&&(t=Y),bu(i(n,Gf),bi(t,2))}),Vs=ru(function(n){var t=mo(n);return t="function"==typeof t?t:Y,bu(i(n,Gf),Y,t)}),Gs=ru(Ko),Hs=ru(function(n){var t=n.length,r=t>1?n[t-1]:Y;return r="function"==typeof r?(n.pop(),
    r):Y,Vo(n,r)}),Js=_i(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Tr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Bt&&Wi(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Qo,args:[u],thisArg:Y}),new H(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(Y),n})):this.thru(u)}),Ys=Du(function(n,t,r){yl.call(n,r)?++n[r]:Cr(n,r,1)}),Qs=Gu(lo),Xs=Gu(so),nh=Du(function(n,t,r){yl.call(n,r)?n[r].push(t):Cr(n,r,[t])}),th=ru(function(t,r,e){var u=-1,i="function"==typeof r,o=Vf(t)?el(t.length):[];
    return vs(t,function(t){o[++u]=i?n(r,t,e):ke(t,r,e)}),o}),rh=Du(function(n,t,r){Cr(n,r,t)}),eh=Du(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),uh=ru(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Li(n,t[0],t[1])?t=[]:r>2&&Li(t[0],t[1],t[2])&&(t=[t[0]]),Ve(n,te(t,1),[])}),ih=Tl||function(){return Xr.Date.now()},oh=ru(function(n,t,r){var e=sn;if(r.length){var u=F(r,di(oh));e|=gn}return fi(n,e,t,r,u)}),fh=ru(function(n,t,r){var e=sn|hn;if(r.length){var u=F(r,di(fh));e|=gn;
    }return fi(t,e,n,r,u)}),ch=ru(function(n,t){return Kr(n,1,t)}),ah=ru(function(n,t,r){return Kr(n,kc(t)||0,r)});Wf.Cache=ar;var lh=ms(function(t,r){r=1==r.length&&yh(r[0])?c(r[0],R(bi())):c(te(r,1),R(bi()));var e=r.length;return ru(function(u){for(var i=-1,o=Vl(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);return n(t,this,u)})}),sh=ru(function(n,t){return fi(n,gn,Y,t,F(t,di(sh)))}),hh=ru(function(n,t){return fi(n,yn,Y,t,F(t,di(hh)))}),ph=_i(function(n,t){return fi(n,bn,Y,Y,Y,t)}),_h=ei(be),vh=ei(function(n,t){
    return n>=t}),gh=Oe(function(){return arguments}())?Oe:function(n){return oc(n)&&yl.call(n,"callee")&&!El.call(n,"callee")},yh=el.isArray,dh=ie?R(ie):Ie,bh=Nl||Na,wh=oe?R(oe):Re,mh=fe?R(fe):Se,xh=ce?R(ce):Ce,jh=ae?R(ae):Ue,Ah=le?R(le):Be,kh=ei(Me),Oh=ei(function(n,t){return n<=t}),Ih=Mu(function(n,t){if($i(t)||Vf(t))return Bu(t,Fc(t),n),Y;for(var r in t)yl.call(t,r)&&zr(n,r,t[r])}),Rh=Mu(function(n,t){Bu(t,Nc(t),n)}),zh=Mu(function(n,t,r,e){Bu(t,Nc(t),n,e)}),Eh=Mu(function(n,t,r,e){Bu(t,Fc(t),n,e);
    }),Sh=_i(Tr),Wh=ru(function(n,t){n=cl(n);var r=-1,e=t.length,u=e>2?t[2]:Y;for(u&&Li(t[0],t[1],u)&&(e=1);++r<e;)for(var i=t[r],o=Nc(i),f=-1,c=o.length;++f<c;){var a=o[f],l=n[a];(l===Y||Kf(l,_l[a])&&!yl.call(n,a))&&(n[a]=i[a])}return n}),Lh=ru(function(t){return t.push(Y,ai),n($h,Y,t)}),Ch=Yu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=wl.call(t)),n[t]=r},za(Sa)),Uh=Yu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=wl.call(t)),yl.call(n,t)?n[t].push(r):n[t]=[r]},bi),Bh=ru(ke),Th=Mu(function(n,t,r){
    qe(n,t,r)}),$h=Mu(function(n,t,r,e){qe(n,t,r,e)}),Dh=_i(function(n,t){var r={};if(null==n)return r;var e=!1;t=c(t,function(t){return t=ju(t,n),e||(e=t.length>1),t}),Bu(n,gi(n),r),e&&(r=Dr(r,on|fn|cn,li));for(var u=t.length;u--;)vu(r,t[u]);return r}),Mh=_i(function(n,t){return null==n?{}:Ge(n,t)}),Fh=oi(Fc),Nh=oi(Nc),Ph=Zu(function(n,t,r){return t=t.toLowerCase(),n+(r?ia(t):t)}),qh=Zu(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Zh=Zu(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Kh=qu("toLowerCase"),Vh=Zu(function(n,t,r){
    return n+(r?"_":"")+t.toLowerCase()}),Gh=Zu(function(n,t,r){return n+(r?" ":"")+Jh(t)}),Hh=Zu(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Jh=qu("toUpperCase"),Yh=ru(function(t,r){try{return n(t,Y,r)}catch(n){return nc(n)?n:new il(n)}}),Qh=_i(function(n,t){return r(t,function(t){t=Qi(t),Cr(n,t,oh(n[t],n))}),n}),Xh=Hu(),np=Hu(!0),tp=ru(function(n,t){return function(r){return ke(r,n,t)}}),rp=ru(function(n,t){return function(r){return ke(n,r,t)}}),ep=Xu(c),up=Xu(u),ip=Xu(h),op=ri(),fp=ri(!0),cp=Qu(function(n,t){
    return n+t},0),ap=ii("ceil"),lp=Qu(function(n,t){return n/t},1),sp=ii("floor"),hp=Qu(function(n,t){return n*t},1),pp=ii("round"),_p=Qu(function(n,t){return n-t},0);return q.after=kf,q.ary=Of,q.assign=Ih,q.assignIn=Rh,q.assignInWith=zh,q.assignWith=Eh,q.at=Sh,q.before=If,q.bind=oh,q.bindAll=Qh,q.bindKey=fh,q.castArray=Mf,q.chain=Jo,q.chunk=ro,q.compact=eo,q.concat=uo,q.cond=Ia,q.conforms=Ra,q.constant=za,q.countBy=Ys,q.create=zc,q.curry=Rf,q.curryRight=zf,q.debounce=Ef,q.defaults=Wh,q.defaultsDeep=Lh,
    q.defer=ch,q.delay=ah,q.difference=Ls,q.differenceBy=Cs,q.differenceWith=Us,q.drop=io,q.dropRight=oo,q.dropRightWhile=fo,q.dropWhile=co,q.fill=ao,q.filter=cf,q.flatMap=af,q.flatMapDeep=lf,q.flatMapDepth=sf,q.flatten=ho,q.flattenDeep=po,q.flattenDepth=_o,q.flip=Sf,q.flow=Xh,q.flowRight=np,q.fromPairs=vo,q.functions=Bc,q.functionsIn=Tc,q.groupBy=nh,q.initial=bo,q.intersection=Bs,q.intersectionBy=Ts,q.intersectionWith=$s,q.invert=Ch,q.invertBy=Uh,q.invokeMap=th,q.iteratee=Wa,q.keyBy=rh,q.keys=Fc,q.keysIn=Nc,
    q.map=vf,q.mapKeys=Pc,q.mapValues=qc,q.matches=La,q.matchesProperty=Ca,q.memoize=Wf,q.merge=Th,q.mergeWith=$h,q.method=tp,q.methodOf=rp,q.mixin=Ua,q.negate=Lf,q.nthArg=$a,q.omit=Dh,q.omitBy=Zc,q.once=Cf,q.orderBy=gf,q.over=ep,q.overArgs=lh,q.overEvery=up,q.overSome=ip,q.partial=sh,q.partialRight=hh,q.partition=eh,q.pick=Mh,q.pickBy=Kc,q.property=Da,q.propertyOf=Ma,q.pull=Ds,q.pullAll=Ao,q.pullAllBy=ko,q.pullAllWith=Oo,q.pullAt=Ms,q.range=op,q.rangeRight=fp,q.rearg=ph,q.reject=bf,q.remove=Io,q.rest=Uf,
    q.reverse=Ro,q.sampleSize=mf,q.set=Gc,q.setWith=Hc,q.shuffle=xf,q.slice=zo,q.sortBy=uh,q.sortedUniq=Bo,q.sortedUniqBy=To,q.split=ga,q.spread=Bf,q.tail=$o,q.take=Do,q.takeRight=Mo,q.takeRightWhile=Fo,q.takeWhile=No,q.tap=Yo,q.throttle=Tf,q.thru=Qo,q.toArray=mc,q.toPairs=Fh,q.toPairsIn=Nh,q.toPath=Va,q.toPlainObject=Oc,q.transform=Jc,q.unary=$f,q.union=Fs,q.unionBy=Ns,q.unionWith=Ps,q.uniq=Po,q.uniqBy=qo,q.uniqWith=Zo,q.unset=Yc,q.unzip=Ko,q.unzipWith=Vo,q.update=Qc,q.updateWith=Xc,q.values=na,q.valuesIn=ta,
    q.without=qs,q.words=Oa,q.wrap=Df,q.xor=Zs,q.xorBy=Ks,q.xorWith=Vs,q.zip=Gs,q.zipObject=Go,q.zipObjectDeep=Ho,q.zipWith=Hs,q.entries=Fh,q.entriesIn=Nh,q.extend=Rh,q.extendWith=zh,Ua(q,q),q.add=cp,q.attempt=Yh,q.camelCase=Ph,q.capitalize=ia,q.ceil=ap,q.clamp=ra,q.clone=Ff,q.cloneDeep=Pf,q.cloneDeepWith=qf,q.cloneWith=Nf,q.conformsTo=Zf,q.deburr=oa,q.defaultTo=Ea,q.divide=lp,q.endsWith=fa,q.eq=Kf,q.escape=ca,q.escapeRegExp=aa,q.every=ff,q.find=Qs,q.findIndex=lo,q.findKey=Ec,q.findLast=Xs,q.findLastIndex=so,
    q.findLastKey=Sc,q.floor=sp,q.forEach=hf,q.forEachRight=pf,q.forIn=Wc,q.forInRight=Lc,q.forOwn=Cc,q.forOwnRight=Uc,q.get=$c,q.gt=_h,q.gte=vh,q.has=Dc,q.hasIn=Mc,q.head=go,q.identity=Sa,q.includes=_f,q.indexOf=yo,q.inRange=ea,q.invoke=Bh,q.isArguments=gh,q.isArray=yh,q.isArrayBuffer=dh,q.isArrayLike=Vf,q.isArrayLikeObject=Gf,q.isBoolean=Hf,q.isBuffer=bh,q.isDate=wh,q.isElement=Jf,q.isEmpty=Yf,q.isEqual=Qf,q.isEqualWith=Xf,q.isError=nc,q.isFinite=tc,q.isFunction=rc,q.isInteger=ec,q.isLength=uc,q.isMap=mh,
    q.isMatch=fc,q.isMatchWith=cc,q.isNaN=ac,q.isNative=lc,q.isNil=hc,q.isNull=sc,q.isNumber=pc,q.isObject=ic,q.isObjectLike=oc,q.isPlainObject=_c,q.isRegExp=xh,q.isSafeInteger=vc,q.isSet=jh,q.isString=gc,q.isSymbol=yc,q.isTypedArray=Ah,q.isUndefined=dc,q.isWeakMap=bc,q.isWeakSet=wc,q.join=wo,q.kebabCase=qh,q.last=mo,q.lastIndexOf=xo,q.lowerCase=Zh,q.lowerFirst=Kh,q.lt=kh,q.lte=Oh,q.max=Ha,q.maxBy=Ja,q.mean=Ya,q.meanBy=Qa,q.min=Xa,q.minBy=nl,q.stubArray=Fa,q.stubFalse=Na,q.stubObject=Pa,q.stubString=qa,
    q.stubTrue=Za,q.multiply=hp,q.nth=jo,q.noConflict=Ba,q.noop=Ta,q.now=ih,q.pad=la,q.padEnd=sa,q.padStart=ha,q.parseInt=pa,q.random=ua,q.reduce=yf,q.reduceRight=df,q.repeat=_a,q.replace=va,q.result=Vc,q.round=pp,q.runInContext=p,q.sample=wf,q.size=jf,q.snakeCase=Vh,q.some=Af,q.sortedIndex=Eo,q.sortedIndexBy=So,q.sortedIndexOf=Wo,q.sortedLastIndex=Lo,q.sortedLastIndexBy=Co,q.sortedLastIndexOf=Uo,q.startCase=Gh,q.startsWith=ya,q.subtract=_p,q.sum=tl,q.sumBy=rl,q.template=da,q.times=Ka,q.toFinite=xc,q.toInteger=jc,
    q.toLength=Ac,q.toLower=ba,q.toNumber=kc,q.toSafeInteger=Ic,q.toString=Rc,q.toUpper=wa,q.trim=ma,q.trimEnd=xa,q.trimStart=ja,q.truncate=Aa,q.unescape=ka,q.uniqueId=Ga,q.upperCase=Hh,q.upperFirst=Jh,q.each=hf,q.eachRight=pf,q.first=go,Ua(q,function(){var n={};return ee(q,function(t,r){yl.call(q.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),q.VERSION=Q,r(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){q[n].placeholder=q}),r(["drop","take"],function(n,t){Bt.prototype[n]=function(r){
    r=r===Y?1:Kl(jc(r),0);var e=this.__filtered__&&!t?new Bt(this):this.clone();return e.__filtered__?e.__takeCount__=Vl(r,e.__takeCount__):e.__views__.push({size:Vl(r,Wn),type:n+(e.__dir__<0?"Right":"")}),e},Bt.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==kn||r==In;Bt.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:bi(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){
    var r="take"+(t?"Right":"");Bt.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Bt.prototype[n]=function(){return this.__filtered__?new Bt(this):this[r](1)}}),Bt.prototype.compact=function(){return this.filter(Sa)},Bt.prototype.find=function(n){return this.filter(n).head()},Bt.prototype.findLast=function(n){return this.reverse().find(n)},Bt.prototype.invokeMap=ru(function(n,t){return"function"==typeof n?new Bt(this):this.map(function(r){
    return ke(r,n,t)})}),Bt.prototype.reject=function(n){return this.filter(Lf(bi(n)))},Bt.prototype.slice=function(n,t){n=jc(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Bt(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==Y&&(t=jc(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Bt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Bt.prototype.toArray=function(){return this.take(Wn)},ee(Bt.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=q[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);
    u&&(q.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Bt,c=o[0],l=f||yh(t),s=function(n){var t=u.apply(q,a([n],o));return e&&h?t[0]:t};l&&r&&"function"==typeof c&&1!=c.length&&(f=l=!1);var h=this.__chain__,p=!!this.__actions__.length,_=i&&!h,v=f&&!p;if(!i&&l){t=v?t:new Bt(this);var g=n.apply(t,o);return g.__actions__.push({func:Qo,args:[s],thisArg:Y}),new H(g,h)}return _&&v?n.apply(this,o):(g=this.thru(s),_?e?g.value()[0]:g.value():g)})}),r(["pop","push","shift","sort","splice","unshift"],function(n){
    var t=hl[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);q.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(yh(u)?u:[],n)}return this[r](function(r){return t.apply(yh(r)?r:[],n)})}}),ee(Bt.prototype,function(n,t){var r=q[t];if(r){var e=r.name+"";yl.call(is,e)||(is[e]=[]),is[e].push({name:t,func:r})}}),is[Ju(Y,hn).name]=[{name:"wrapper",func:Y}],Bt.prototype.clone=Gt,Bt.prototype.reverse=Ht,Bt.prototype.value=Jt,q.prototype.at=Js,
    q.prototype.chain=Xo,q.prototype.commit=nf,q.prototype.next=tf,q.prototype.plant=ef,q.prototype.reverse=uf,q.prototype.toJSON=q.prototype.valueOf=q.prototype.value=of,q.prototype.first=q.prototype.head,Ll&&(q.prototype[Ll]=rf),q},ge=ve();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Xr._=ge,define(function(){return ge})):te?((te.exports=ge)._=ge,ne._=ge):Xr._=ge}).call(this);
// JSFILE common.js 
/*global window, $, Uint32Array, location, document, jQuery, Set, console, BigInt, setTimeout, ClipboardJS, alert, numeral, gtag, _, 

init_countdown_to_new_request, init_time_to_new_request, init_page, init_calc_func, init_numbers, init_low, init_high, init_lines, init_length, init_sides, init_range, init_unique, init_order_matters, init_sorted, init_from, init_to, init_step, init_csv, init_oddeven, init_oddqty, init_start, init_sets, init_addfilters, init_totals_only, init_last_roll_only, init_page_title, init_r1, init_true_seed, init_usejs, init_numtype, init_number_function */

function trackPageview() {
		
}

function logDummy(){
	
}

if (!Date.now) {
    Date.now = function() { return new Date().getTime(); };
}

function getQuickRandInt(low, high){
	return Math.floor(Math.random() * (high-low+1) + low);
}


//this method uses Crypto
function getRandInt(low, high){
	
	if (window.crypto) {
		
		var randomBuffer = new Uint32Array(1);
	
		window.crypto.getRandomValues(randomBuffer);
	
		//chg to float, just like a Math.random output
		var randomFloat = randomBuffer[0] / (0xffffffff + 1);
			
		low = Math.ceil(low);
		high = Math.floor(high);
		
		return Math.floor(randomFloat * (high - low + 1)) + low;
		
	} else {
		return getRandInt_MathRandom(low, high);
	}
	
}

//this method uses Math.random
function getRandInt_MathRandom(low, high){
	return Math.floor(Math.random() * (high-low+1) + low);
}

function getRandInts(numbers, low, high, unique){
	
	if (typeof unique === "undefined") unique = true;
	
	var MAX_TRIES_PER_NUM = 100;
	
	var number_okay = true;
	
	var numbers_generated = [];
	
	var rand_num;
	
	for (var i = 0; i< numbers; i++) {

		var try_num = 0;	
				
		do  {
			
			try_num ++;
			
			number_okay = true;
			
			rand_num = getRandInt(low, high);
			
			//if unique number required
			if (unique) {
				if (numbers_generated.indexOf(rand_num)>=0) {
					number_okay = false;
				}
			}
			
			
		} while (!number_okay && try_num < MAX_TRIES_PER_NUM);
		
		numbers_generated.push(rand_num);
		
	}
	
	return numbers_generated;
	
}

function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


/* converts given string to dec or float based on radix 2, 8, or 16 */
function parseRadixFloat(str, radix)
{
        var parts = str.toString().split(".");
        if ( parts.length > 1 )
        {
			if (parts[0] == "") {
				parts[0] = "0";
			}
			
            return parseInt(parts[0], radix) + parseInt(parts[1], radix) / Math.pow(radix, parts[1].length);
        }
        return parseInt(parts[0], radix);
}

function hexToDec(str){
	return parseRadixFloat(str, 16);
}
function binToDec(str){
	return parseRadixFloat(str, 2);
}
function octToDec(str){
	return parseRadixFloat(str, 8);
}

function decTo(val, num_type) {
	var dec = val;
	if (num_type === "hex") {
		dec = decToHex(val);
	} else if (num_type === "octal") {
		dec = decToOct(val);
	} else if (num_type === "binary") {
		dec = decToBin(val);
	} else if (num_type === "rgb") {
		dec = decToRgb(val);
	} else {
		dec = parseFloat(val);	
	}
	return dec;
}

function decFrom(val, num_type) {
	var dec = val;
	if (num_type === "hex") {
		dec = hexToDec(val);
	} else if (num_type === "octal") {
		dec = octToDec(val);
	} else if (num_type === "binary") {
		dec = binToDec(val);
	} else if (num_type === "rgb") {
		dec = rgbStrToDec(val);
	} else {
		dec = parseFloat(val);	
	}
	return dec;
}

function hexToRgb(hex){
	
	var dec_parts = [];
	var part_size;

	if (hex) { 
	 	if (hex.length>0) {
			
			if (hex.length == 3) {
				//3 letter hex
				part_size = 1;
			} else {
				hex = hex.toString().padStart(6, "0");
				part_size = 2;	
			}
							
			for (var i = hex.length-1; i >=0; i-=part_size) {
				var part = (part_size === 2 ? hex.charAt(i-1) : hex.charAt(i)) + hex.charAt(i); 
				//if(part.length == 1) part+= part; //assume missing letter
				dec_parts.push(hexToDec(part));	 			
			}
			
			 
	 	}
	}
	
	return dec_parts.reverse().join(",");
}

function rgbStrToHex(rgb){
	if (rgb) {
		rgb = rgb.toString().split(",");
		var r = rgb[0] ? parseInt(rgb[0]) || 0 : 0;
		var g = rgb[1] ? parseInt(rgb[1]) || 0 : 0;
		var b = rgb[2] ? parseInt(rgb[2]) || 0 : 0;
		return rgbToHex(r, g, b);
	}
	return "000000";
}



function rgbToHex(r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgbStrToDec(n){
	var hex = rgbStrToHex(n);
	return hexToDec(hex);
}
function decToRgb(n){
	return hexToRgb(decToHex(n));
}
function decToBin(n){
	return parseInt(n).toString(2);
}
function decToHex(n){
	return parseInt(n).toString(16);
}
function decToOct(n){
	return parseInt(n).toString(8);
}

function decToHT(n){
	var retval = "";
	switch (parseInt(n)) {
		case 0: 	retval = "T";	
					break;
		case 1: 	retval = "H";	
					break;
		case 2: 	retval = "S";	
					break;
		default: 
			break;
	}
	return retval;	
}

function HTString(s){
	var retval = "";
	switch (s.toUpperCase()) {
		case "H": 	retval = "Heads";	
					break;
		case "T": 	retval = "Tails";	
					break;
		case "S": 	retval = "Side";	
					break;
		default: 
			break;
	}
	return retval;
}

function isFairDice(s){
	switch (parseInt(s)) {
		case 4:
		case 6:
		case 8:
		case 10:
		case 12:
		case 20:
		case 48:
		case 100:
			return true;
		default:
			return false;		
	}
}

function shortfor(slug) {
	if (slug === "dec") { 
		slug = "decimal";
	} else if (slug === "bin") { 
		slug = "binary";
	} else if (slug === "oct") { 
		slug = "octal";
	} else {
		slug = slug;	
	}
	return slug;
}

/*
function shuffle (a){ //shuffle array
	for(var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x){};
	return a;
};
*/

String.prototype.shuffle = function () {
    var a = this.split("");
	a = shuffle(a);
    return a.join("");
};


function sortArray(arr){
	arr.sort(function(a,b){return a - b});	
}

function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

function getQS() {
	var retval = "";
	var str = window.location.search;	
	if (str != "" && str.charAt(0) === '?') {
		retval = str.substr(1);
	}	
	return retval;
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function sendResultsToPhone(){
	window.location = "http://www.goclipboard.com#!init_text=" + $("#resultVal").html();
}	

function selectText( containerid ) {

	var node = document.getElementById( containerid );

	if ( document.selection ) {
		var range = document.body.createTextRange();
		range.moveToElementText( node  );
		range.select();
	} else if ( window.getSelection ) {
		var range = document.createRange();
		range.selectNodeContents( node );
		window.getSelection().removeAllRanges();
		window.getSelection().addRange( range );
	}
}

function isCurrLocationWihoutHash(url){
	//returns true if the new url is the same except the hash 
	var curr_url = window.location.pathname + window.location.search;
	
	return curr_url === url;	
	
}

function isCurrHash(hash){
	return hash === window.location.hash;		
}

function isObjectEmpty(o){
	return o ? Object.keys(o).length <= 0 : 1;
}

function objectToQueryString(params){
	//TODO check this function as it changes space to + signs in magic filters
	//however this function is not called anymore
	//if you use this function again, make sure to check the bug mentioned
	if (jQuery) {
		return jQuery.param(params);
	}
	return "";	
}

function querystringToObject(qs) {
	try { 
	
	var json = qs ? JSON.parse('{"' + qs.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { 
	 return key===""?value:decodeURIComponent(value); }) : {};
	
	return json;
	} catch (e) {
		return {};	
	}
}

function total_xdigit_combinations(x, base){	
	if (typeof base === "undefined") base = 10;
	return Math.pow(base, x);	
}

function total_xdigit_combinations_hex(x){	
	return Math.pow(16, x);	
}

function total_xdigit_combinations_bin(x){	
	return Math.pow(2, x);	
}

function total_possible_1tox_combinations(n, l, h, unique, order_matters) {
	if (typeof order_matters === "undefined") order_matters = false;
	if (typeof unique === "undefined") unique = true;
	
	var nums_in_range = h - l + 1;
	return total_possible_combinations(nums_in_range, n, unique, order_matters);
}

function total_possible_combinations(n, r, unique, order_matters){
	if (typeof order_matters === "undefined") order_matters = false;
	if (typeof unique === "undefined") unique = true;
	
	//safe guard against too many combinations
	if (r > 100) {
		return Infinity;
	}
	
	if (r > n) {
		unique = false; //more numbers being generated than possible therefore asssume not unique 	
	}
		
	if (unique) {	
					
		if (!order_matters) { //n choose r
			return nChooser(n ,r);
		} else {
			return nPickr(n ,r); 	//n Pick r
		}
		
	} else {
		
		if (order_matters) {
			return Math.pow(n, r);
		} else {
			return CombinationsWithRepetion(n ,r);
		}
			
	}
}

function nChooser(n ,r){
	var comb = 1;		
	for (var i = 0; i < r ; i++){
		comb = comb * (n - i);			
	}
	return comb / factorial(r);
}

function nPickr(n ,r){
	var comb = 1;		
	for (var i = 0; i < r ; i++){
		comb = comb * (n - i);			
	}
	return comb;
}

function CombinationsWithRepetion(n ,r){
	return nChooser(r+n-1 ,r);
}

function factorial(n) {	
	var f = 1;		
	for (var i = 1; i<= n; i++){
		f = f * i;	
	}		
	return f;		
}

if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return String(this) + padString.slice(0,targetLength);
        }
    };
}

function safeParseInt(x) {
  var parsed = parseInt(x);
  if (isNaN(parsed)) { return 0; }
  return parsed;
}

function getBooleanValue(val, default_value) {
	
	if (typeof default_value === "undefined") default_value = 0;

	if (val === false || val === "0" || val === "false" || (val && parseFloat(val) === 0)) {
		return false;
	} else if (val === true || val === "1" || val === "true" || (val && parseFloat(val) === 1)) {
		return true;
	} else {
		return default_value;
	}

}

function getSeparator(name) {
	
	var separator = " ";	
	
	if (name === "csv") {
		separator = ",";	
	} else if (name === "nl") {
		separator = "\n";	//changed this from <br /> tag to \n Dec-21-2020, then changed white-space to pre for resultval
	} else if (name === "ns") {
		separator = "";	
	}
		
	return separator;
	
}

function arrayHasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

function arrayUnique(array){
	return Array.from(new Set(array));
}


function digitsInNum(num){
	//digits in num
	return num.toString().length;
};

function intArrayGreaterThan(a, b){
	
	//returns -1 if a<b , 1 if a>b , 0 if a = b
	
	//e.g. 
	//[1, 2, 3] = [1, 2, 3] < [2, 3, 4] < [2, 4, 5]
	
	
	//use smaller length to compare
	var len = a.length <= b.length ? a.length : b.length;
	
	for(var i=0; i< len; i++) {
		if (a[i] < b[i]) {
			//found a small element
			return -1;
		} else if (a[i] > b[i]) {
			//found a larger element
			return 1;	
		}
		//keep going
	}
	
	//no larger or smaller elements found
	//all elements are equal
	
	return 0;
	
}

function intArrayEqualTo(a, b){
	if (a.length == b.length && intArrayGreaterThan(a,b) === 0) {
		return 1;
	} else {
		return 0;	
	}
}

//check if an integer array is in a given set of integer arrays
function isIntArrayInArray(a, arrays){	
	for(var i=0; i< arrays.length; i++) {	
		if(intArrayEqualTo(a, arrays[i])) {
			return 1;			
		}		
	}	
	return 0;
}

function inArray(num, array){
	if ($.inArray(num, array) === -1) 
	{
		return false;
	} else {
		return true;
	}
}

function stringContains(string, substring) {

	return (string+"").indexOf(substring) !== -1;

}

function stringStartsWith(string, substring) {
//console.log(stringStartsWith, string, substring);
	//string begins with substring
	return (string+"").indexOf(substring) === 0;

}

function stringEndsWith(string, substring) {
	
	string = string+"";
	substring = substring + "";

	return string.substring(string.length - substring.length) === substring;

}

function splitNumberIntoDigits(num) {
	var digits = num.toString().split("");
	return digits;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function formatDateForFileName(date, include_timestamp) {
	
	if (typeof include_timestamp === "undefined") include_timestamp = false;
	
    var d = date;
	var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
		mt = d.getTime();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

	var fmt = [year, month, day].join('');
	
	if (include_timestamp) {
		fmt = fmt + "_" + mt;	
	}
	
    return fmt;
}

function arrayToCSV(arr, include_line_numbers) {
	
	if (typeof include_line_numbers === "undefined") include_line_numbers = false;
	
	var csv = "";
	
	if (include_line_numbers) {
		csv = "Line_Num,Numbers\n";
	}
	
//console.time("b");
	for(var i =0; i<arr.length; i++) {
		if (include_line_numbers) {
			csv += (i+1)+",";
		}
		if (Array.isArray(arr[i])) {
			csv += arr[i].join(",") + "\n";			
		} else {
			csv += arr[i] + "\n";			
		}
	}	

	// csv = arr.join("\n");

//console.timeEnd("b");

	return csv;	
}


function brToNewLine(str){
	var regex = /<br\s*[\/]?>/gi;
	str = str.replace(regex, "\n");
	return str;
}

function nextOdd(i){
	if (i % 2 ==0) {
		return i+1;	
	} else {
		return i;	
	}
}

function prevOdd(i){
	if (i % 2 ==0) {
		return i-1;	
	} else {
		return i;	
	}
}


function nextEven(i){
	if (i % 2 == 0) {
		return i;	
	} else {
		return i+1;	
	}
}

function prevEven(i){
	if (i % 2 == 0) {
		return i;	
	} else {
		return i-1;	
	}
}

function validateOddEven(val, default_value){
	if (val === "" || val === "odd" || val === "even" || val === "half_odd" || val === "custom_odd") {
		//good	
	} else {
		val = default_value;	
	}
	
	return val;
}

function validateCSV(val, default_value){
	if (val === "" || val === "csv" || val === "nl" || val === "ns") {
		//good	
	} else {
		val = default_value;	
	}
	
	return val;
}

var entityMap = {
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': '&quot;',
"'": '&#39;',
"/": '&#x2F;'
};

function escapeHtml(string) {
return String(string).replace(/[&<>"'\/]/g, function (s) {
	return entityMap[s];
});
}

function parseIntValue(val, default_val){
	if (typeof default_val === "undefined") {default_val = 0;}
	var int_val = parseInt(val);
	if (isNaN(int_val)) {
		int_val = default_val;
	}
	return int_val;
}

function parseFloatValue(val, default_val){
	if (typeof default_val === "undefined") {default_val = 0;}
	var int_val = parseFloat(val);
	if (isNaN(int_val)) {
		int_val = default_val;
	}
	return int_val;
}

function arrayDiff(array_first, array_second){	

	var array_difference = [];

	// difference will contain duplicates
	var array_difference = array_first.filter(function(x) {
		if(array_second.indexOf(x) == -1)
			return true;
		else
			return false;
	});

	return array_difference;
}

function isLetter(str) {
	return str.length === 1 && str.match(/[a-z]/i);
}

function isAllowedAscii(str) {
	var retval = false;
	if (str.length === 1) {
		var n = str.charCodeAt(0);
		if (n >= 33 && n <= 126) {
			retval = true;
		}
	}
	return retval;
}


function isSimpleRange(range) {
	//true if range is simple numeric range
	//e.g. 1-100 5-10 5:10 etc	
	
	var range_split = splitRange(range);
	
	if (range_split.length == 2 
		&& $.isNumeric(range_split[0])
		&& $.isNumeric(range_split[1])
	) {
		return range_split;	
	}
	
	return false;
	
}

function splitRange(range){
	
	var range_split = [];
						
	//trim spaces
	var trimmed = $.trim(range);
	
	//replace multiple dashes or colons with single
	trimmed = trimmed.replace(/-+/g, "-");
	trimmed = trimmed.replace(/:+/g, ":");
	
	if(trimmed.indexOf(":") > -1) {
		//split using colon
		range_split = trimmed.split(/[:]/);
	} else {
	 
		//see if range uses dashes
	
		//see if range begins with a dash
		if (trimmed[0] == "-") {
			//range begins with a negative number	
			trimmed = trimmed.substr(1); //remove negative sign
			trimmed = trimmed.replace(/-/g, ":"); //replace remaining - with :
			trimmed = "-" + trimmed; //add neg sign back
			range_split = trimmed.split(/[:]/); //split using :
		} else {
			range_split = trimmed.split(/[-]/);	//split using -		
		}		
		
	}
	
	return range_split;
}

function numbers_string_to_array (numbers, options){

	var options = options || {};

	if (typeof options.separator_re === "undefined") {
		var re = /[\s,]+/; //use white-space or comma to separate
	} else {
		var re = options.separator_re;
	}

	//expanding a large range can cause memory issues
	//rng has been programmed to work with ranges instead, so it does not need to expand a range into single items
	var expand_range = true;

	if (options.expand_range === false) {
		expand_range = false;
	}

	var items_in_list = 0; //to count the items when ranges aren't expanded 
	
	var num_array = [];
	
	var num_split = $.trim(numbers).split(re);
				
	//create number pool with dashed ranges and single numbers from user
	for (var i=0; i<num_split.length; i++){

		var item = num_split[i];
		
		//split only ranges 
		//not negative numbers (e.g. -10)
		if (isNumeric(item)) {
			num_array.push(getNumberIfNumeric(item));
			items_in_list++;
		} else {		
				
			var range_split = splitRange(item);
			
			//if it is a pair separated by a hyphen that represents a valid range
			if (range_split.length === 2
				&& (isNumeric(range_split[0]) || isAllowedAscii(range_split[0])) 
				&& (isNumeric(range_split[1]) || isAllowedAscii(range_split[1])) 				
				) {

				//if any of these is a non numeric ascii
				var use_ascii = !(isNumeric(range_split[0]) && isNumeric(range_split[1]));

				//generate range
				var range_start = use_ascii ? range_split[0].charCodeAt(0) : parseInt(range_split[0]);
				var range_end = use_ascii ? range_split[1].charCodeAt(0) : parseInt(range_split[1]);

				//swap low/high
				if (range_start > range_end) {
					var tmp = range_end;
					range_end = range_start;
					range_start = tmp;
				}
				
				if (expand_range) {

					//push range as single items
					for(var k=range_start; k<=range_end; k++){
						num_array.push( use_ascii ? escapeHtml(String.fromCharCode(k)) : k );
					}

				} else {

					if (use_ascii) {
						//expand ascii ranges anyway
						for(var k=range_start; k<=range_end; k++){
							num_array.push( escapeHtml(String.fromCharCode(k)) );
						}
					} else {
						//keep range as range of format [low, high]
						//this is so that the large ranges dont need to be stored as single items of an array, 
						num_array.push([range_start, range_end]);
					}
				}

				items_in_list += range_end-range_start+1;

			} else {

				//TODO: may be push this as one item
				//e.g. f-9 do not break it into two items?
				//e.g. 7-8-9 -> 7-8-9				
				num_array.push(escapeHtml(item));

				//split and add all as single items
				//e.g 7-8-9 -> 7 8 9 
				// for (k=0; k<range_split.length; k++){
				// 	if (range_split[k] != "") {							
				// 		num_array.push(escapeHtml(range_split[k]));
				// 	}
				// }

				items_in_list++;

			}
		
		}
		
	}		
	
	return num_array;
	
	
}

function maxOf(n1, n2){
	return n1 > n2 ? n1 : n2;
}

function minOf(n1, n2){
	return n1 < n2 ? n1 : n2;
}

function countDecimalPlaces(num){
	var numstr = num.toString();
	var indexOfDot = numstr.indexOf(".");
	return indexOfDot > -1 ? numstr.length - indexOfDot - 1 : 0;
}

function arraySortedCopy(array){
	var sorted_array = arrayCopy(array);
	sortArray(sorted_array);
	return sorted_array;
}

function arrayCopy(array){
	return array.slice();
}

function arrayMin(array){
	var min = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
		}
	}
	return min;
}

function arrayMax(array){
	var max = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}

function arraySum(array){
	array = array || [];
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		if (isNumeric(array[i])) {
			sum += parseFloat(array[i]);
		}
		
	}
	return sum;
}

function arrayTotal(arr){
	var total_sum = 0;
	var max_decimal_places = 0;

	for (var i = 0; i < arr.length; i++) {
		var num = parseFloatValue(arr[i]);
		total_sum += num;
		logDummy(num);		
		//use original number to count decimal places
		max_decimal_places = maxOf(max_decimal_places, countDecimalPlaces(arr[i]));
	}

	return total_sum.toFixed(max_decimal_places);
}

function arrayAvg(arr){
	var avg = 0;

	if (arr.length) {
		var total_sum =0;
		for (var i = 0; i < arr.length; i++) {
			var num = parseFloatValue(arr[i]);
			total_sum += num;			
		}
		avg = total_sum/arr.length;
	}

	return avg; 
}

//return total sum of individual digits
function maxSumOfDigits(str){

	str = str + "";

	var total_sum = 0;

	for (var i = 0; i < str.length; i++) {
		total_sum += parseIntValue(str[i]);
	}

	return total_sum;

}

//returns minimum sum of digits
//the least possible single digit sum 
function minSumOfDigits(str){

	str = str+"";

	var total_sum = 0;

	var sum_str = str;

	do {

		total_sum = 0;

		for (var i = 0; i < sum_str.length; i++) {
			total_sum += parseIntValue(sum_str[i]);
		}

		sum_str = total_sum.toString();

		logDummy(sum_str);		

	} while (sum_str.length > 1);

	return total_sum;

}

function digitStats(str, calc_min){

	if (typeof calc_min == "undefined")  calc_min = true;

	str = str + "";

	var max_sum = 0;
	var total_sum = 0;

	var sum_str = str;

	var iteration = 1;

	do {

		//reset sum on every iteration
		//the previous sum becomes the new string
		total_sum = 0;

		for (var i = 0; i < sum_str.length; i++) {
			total_sum += parseIntValue(sum_str[i]);
		}

		if (iteration === 1) {
			//this is the sum on first iteration
			//after adding all digits
			max_sum = total_sum;
		}

		sum_str = total_sum.toString();

		logDummy(sum_str);
		
		iteration++;

		//keep going until total_sum reduces to a single digit, and if calc_min true requested
	} while (sum_str.length > 1 && calc_min);

	return {
		max_sum: max_sum,
		min_sum: total_sum,
		count: str.length,
		avg: max_sum/str.length
	};

}

function roundTo(num, decimal_places) {
	return Math.round(num * Math.pow(10, decimal_places)) / Math.pow(10, decimal_places);
}

function countOddElements(arr){
	var odd_count = 0;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]%2 != 0) {
			odd_count++;
		}
	}
	return odd_count;
}

function hasOddElements(arr){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]%2 != 0) {
			return true;
		}
	}	
}

function hasEvenElements(arr){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]%2 == 0) {
			return true;
		}
	}	
}

function getOddEvenTitle(val){
	var retval = "";
	if (typeof val === "undefined") {
		retval = "";
	} else {
		retval = val.replace(/_/g, ' ');
	}	
	return retval;
}

function getOrderMattersTitle(val){
	var retval = "combinations";
	if (val == "true") {
		retval = "permutations";
	} 
	return retval;
}

function getUniqueTitle(val){
	var retval = "";
	if (val === "true") {
		retval = "unique";
	} 
	return retval;
}

function getReplacementTitle(val){
	var retval = "";
	if (val === "false") {
		retval = "with replacement";
	} 
	return retval;
}


function niceNumber(num){
	return numeral(num).format('0,0.0a');
}

function formattedNumber(num){
	num = num === "undefined" ? 0 : num;
	return num.toLocaleString();
}

function changeIntArrayToStringArray(array) {
	//change include list items to strings
	for(var i = 0; i< array.length; i++){
		array[i] = array[i]+"";
	}
}

function isArray(arr){
	return Array.isArray(arr);
}

function getNumberIfNumeric(num){
	if (isNumeric(num)) {
		return _.toNumber(num);
	} else {
		return num+""; //return string
	}
}

function isNumeric(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}

//get n random items from a list
//where each item has a weight
//sum of weights dont need to sum to 1 as calculation is based on total_weight
function weightedRands(numbers, weights, total_weight) {
	var ret_arr = [];
	for (var n=0; n <numbers; n++) {
		var i, sum=0, r=getRandInt(0, total_weight);
		for (i in weights) {
		  sum += weights[i];
		  if (r <= sum) { ret_arr.push(i); break; };
		}
	}

	return ret_arr;	
}

//return random item based on weight
//e.g. spec = {0:0.8, 1:0.1, 2:0.1}
//weights must sum to 1
function weightedRandItem(spec) {
	var i, sum=0, r=Math.random();
	for (i in spec) {
	  sum += spec[i];
	  if (r <= sum) return i;
	}
}

function getMixedListCountAndWeights(list){
//return count of total items in a list of mixed list
//that has ranges
//e.g. [1, 2, [6-10]] -> items: 7
	var total_weight = 0;
	var weighted_list = {};
	for (var i =0; i< list.length; i++) {
		var item_count = 1;
		if ($.isArray(list[i])) {
			//item is a range
			item_count = list[i][1]-list[i][0]+1;
		}
		weighted_list[i] = item_count;
		total_weight += item_count;
	} 

	return {weighted_list: weighted_list, total_weight: total_weight, list_item_count: total_weight};
}


function rangeDigitStats(low, high){

	var total_sum = 0;
	var total_count = 0;
	
	for (var i=low; i<=high; i++) {
		var digit_stats = digitStats(i, false);
		total_sum += digit_stats["max_sum"];
		total_count += digit_stats["count"];
	}

	var min_sum = minSumOfDigits(total_sum);

	return {
		max_sum: total_sum,
		min_sum: min_sum,
		count: total_count,
		avg: total_sum/total_count
	}
}

function rangeSum(low, high){

	var total_sum = 0;
	
	total_sum = ((high * (high+1))/2) - (((low-1) * (low))/2)  ;	

	return total_sum;

}

function rangeSumBigInt(low, high){

	var total_sum = 0;

	if (typeof BigInt !== "undefined") {

		high = BigInt(high);
		low = BigInt(low);
		total_sum = BigInt(0);

		//n denotes bigint type
		total_sum = ((high * (high+BigInt(1)))/BigInt(2)) - (((low-BigInt(1)) * (low))/BigInt(2))  ;	

	} else {
		total_sum = ((high * (high+1))/2) - (((low-1) * (low))/2)  ;
	}

	return total_sum;

}

function rangeStats(low, high){

	var total_sum = 0;
	var total_count = high-low+1;

	////console.time("a");
	// // for (var i=low; i<=high; i++) {
	// // 	total_sum += i;
	// // }
	////console.timeEnd("a");

//console.time("b");
	total_sum = rangeSum(low, high);
//console.timeEnd("b");

	return {
		sum: total_sum,
		count: total_count,
		avg: total_sum/total_count
	};
}

function rangeStatsBigInt(low, high){

	var total_sum = 0;
	var total_count = high-low+1;

	////console.time("a");
	// // for (var i=low; i<=high; i++) {
	// // 	total_sum += i;
	// // }
	////console.timeEnd("a");

//console.time("b");
	total_sum = rangeSum(low, high);
//console.timeEnd("b");

	if (typeof total_sum === "bigint") {
		total_count = BigInt(total_count);
	}

	return {
		sum: total_sum,
		count: total_count,
		avg: total_sum/total_count
	};
}

function arrayStats(array){

	var total_sum = 0;
	var total_count = 0;

	for (var i=0; i<array.length; i++) {
		if (isNumeric(array[i])) {
			//only count numeric elements
			total_sum += parseFloat(array[i]);
			total_count ++;
		}
	}

	return {
		sum: total_sum,
		count: total_count,
		avg: total_sum/total_count
	};

}


function consecutiveStats(array, options){
	//uses first element of list only to use as the max count of consecutive numbers
	//returns true if there are more than max count of consecutive numbers

	var options = options || {};
	var sorted_array = [];

	if (options.page_type === "numlist"){ 
		//treat numbers on numlist as permutations
		sorted_array = array;
	} else {
		sorted_array = arraySortedCopy(array);
	}
	

	//console.log(sorted_array);

	var consecutive_counts = [1];
	var consecutive_pairs = 0;

	for (var i = 1; i<sorted_array.length; i++) {
		if (sorted_array[i] - sorted_array[i-1] === 1) {
			if (consecutive_counts[consecutive_counts.length-1] == 1) {
				//found starting of a new consecutive pair
				consecutive_pairs++;
			}
			//increment count of last consecutive pair
			consecutive_counts[consecutive_counts.length-1]++;			

		} else {
			//push starting of a new sequence
			consecutive_counts.push(1);			
		}
	}

	return {
		counts: consecutive_counts,
		sequences: consecutive_pairs,
		largest_sequence: arrayMax(consecutive_counts)
	};

}


//return stats for arrays that contains mixed ranges
//e.g. [1, 2, 3, [4-10]]
function mixedListStats(array){

	//console.log("mixedListStats");
	//console.log(array);

	var total_sum = 0;
	var total_count = 0;

	for (var i=0; i<array.length; i++) {
		if (isArray(array[i])) {
			//an array containg range i.e. [low, high]
			var low = array[i][0];
			var high = array[i][1];
			var range_stats = rangeStats(low, high);
			total_sum += range_stats["sum"];
			total_count += range_stats["count"];
		} else {
			//single item			
			if (isNumeric(array[i])) {
				total_sum += parseFloat(array[i]);
				total_count += 1;
			}			
		}
		
	}

//console.log(Number.isSafeInteger(total_sum));

	return {
		sum: total_sum,
		count: total_count,
		avg:  total_count ? total_sum/total_count : 0 
	};

}


//return stats for arrays that contains mixed ranges
//e.g. [1, 2, 3, [4-10]]
function mixedListStatsBigInt(array){

	//console.log("mixedListStats");
	//console.log(array);

	var total_sum = 0;
	var total_count = 0;

	if (typeof BigInt !== "undefined") {

		total_sum = BigInt(0);
		total_count = BigInt(0);
	}

	for (var i=0; i<array.length; i++) {
		if (isArray(array[i])) {
			//an array containg range i.e. [low, high]
			var low = array[i][0];
			var high = array[i][1];
			var range_stats = rangeStats(low, high);
			total_sum += range_stats["sum"];
			total_count += range_stats["count"];
		} else {
			//single item
			if (typeof total_sum === "bigint") {
				try {
					total_sum += BigInt(array[i]);
					total_count += BigInt(1);
				} catch (e) {}
			} else{
				if (isNumeric(array[i])) {
					total_sum += parseFloat(array[i]);
					total_count += 1;
				}
			}
		}
		
	}

//console.log(Number.isSafeInteger(total_sum));

	return {
		sum: total_sum,
		count: total_count,
		avg:  total_count ? total_sum/total_count : 0 
	};

}

function mixedListDigitStats(array){

	var total_max_sum = 0;
	var total_min_sum = 0;
	var total_count = 0;

	for (var i=0; i<array.length; i++) {
		if (isArray(array[i])) {
			//an array containg range i.e. [low, high]
			var range_stats = rangeDigitStats(array[i][0], array[i][1]);

			total_max_sum += range_stats["max_sum"];
			total_min_sum += range_stats["min_sum"];
			total_count += range_stats["count"];
		} else {
			//single item

			var digit_stats = digitStats(array[i], false);
			total_max_sum += digit_stats["max_sum"];
			total_min_sum += digit_stats["min_sum"];
			total_count += digit_stats["count"];
		}
		
	}

	//use max_sum to find the min sum
	var min_sum = minSumOfDigits(total_max_sum);

	return {
		max_sum: total_max_sum,
		min_sum: min_sum,
		count: total_count,
		avg: total_count ? total_max_sum/total_count : 0
	};

}

// // Returns true if passed BigInt is a prime number
// function isPrime(p) {
// 	for (var i = 2n; i * i <= p; i++) {
// 		//console.log(i, i*i, p, p%i);
// 		if (p % i === 0n) return false;
// 	}
// 	return true
// }



// // Takes a BigInt as an argument, returns nth prime number as BigInt
// function nthPrime(nth) {
// 	var maybePrime = 2n
// 	var prime = 0n

// 	while (nth >= 0n) {
// 		if (isPrime(maybePrime)) {
// 		nth--
// 		prime = maybePrime
// 		}
// 		maybePrime++
// 	}

// 	return prime
// }


// // Returns true if passed int is a prime number
// function isPrime(p) {
// 	//loop from i=2..sqrt(p) as long as i <= sqrt(p)
// 	//divide p by i, if it divides, it's not a prime
// 	for (var i = 2; i * i <= p; i++) {
// 		//console.log(i, i*i, p, p%i);
// 		if (p % i === 0) return false;
// 	}
// 	return true
// }

// Returns true if passed int is a prime number
function isPrime(p) {

//console.log("isPrime", p);

	if (p == 1) {
		return false;
	}
	if (p == 2) {
		return true;
	}
	if (p % 2 === 0){
		return false;
	}	
	//loop from i=2..sqrt(p) as long as i <= sqrt(p)
	//divide p by i, if it divides, it's not a prime
	for (var i = 3; i * i <= p; i+=2) {
		if (p % i === 0) return false;
	}
	return true;
}


// Takes a int as an argument, returns nth prime number as int
function nthPrime(nth) {
	var maybePrime = 2;
	var prime = 0;

	while (nth >= 0) {
		if (isPrime(maybePrime)) {
		nth--;
		prime = maybePrime;
		}
		maybePrime++;
	}

	return prime;
}


//note that possible prime numbers can only end with 1, 3, 7, or 9 i.e. odd numbers that do not divide by 5
function nextPrime(p){

 	var foundPrime = false;
	var currentNum = p;

	while (!foundPrime) {
		var currentNum = nextPossiblePrime(currentNum);
		if (isPrime(currentNum)) {
			foundPrime = true;
		}
	}

	return currentNum;

}

function nextPossiblePrime(p){

	var next_possible_prime = p;

	if (p === 1) {
		return 2;
	}

	if (p % 2 == 0 ) {
		//an even number
		//add 1 to make it odd		
		next_possible_prime = p + 1;
	} else {
		//odd number 
		//add 2 for next odd number
		next_possible_prime = p + 2;
	}

	if (next_possible_prime !== 5 && next_possible_prime % 5 == 0) {
		//if this odd number is divisible by 5
		//try the next odd
		next_possible_prime += 2;
	}

	return next_possible_prime;

}

function nextPrimes(p, n){
	//return n prime numbers after p

	//start with the next prime number
	var primes = [nextPrime(p)]; 

	//then get n-1 next prime numbers
	for (var i = 0; i < n-1; i++) {
		primes.push(nextPrime(primes[primes.length-1]));
	}

	return primes;
}

function allPrimesBetween(l, h){
	//return prime numbers between l and h

	//get next prime number after l-1
	var primes = [nextPrime(l-1)]; 
	var foundAllPrimes = false;
	//while last prime number generated is less than h
	while (!foundAllPrimes) {
		var next_prime = nextPrime(primes[primes.length-1]);
		if (next_prime <= h) {
			primes.push(next_prime);
		} else {
			foundAllPrimes = true;
		}		
	}

	return primes;
}


function getOddEvenElementsFromList(list){

	var odd_list = [];
	var even_list = [];

	for (var i =0; i < list.length; i++) {
		if (list[i] % 2 == 0) {
			even_list.push(list[i]);
		} else {
			odd_list.push(list[i]);
		}
	}

	return {
		odd_list : odd_list,
		even_list: even_list
	};

}

function findPrimeNumbersInList(array){
	//returns the prime numbers from the list
	var primes = [];

	for (var i=0; i < array.length; i++) {
		if (isNumeric(array[i]) && isPrime(array[i])) {
			primes.push(array[i]);
		}
	}

	return primes;

}

function countPrimes(array){
	return findPrimeNumbersInList(array).length;
}

function findOddNumbersInList(array){
	//returns the prime numbers from the list
	var odds = [];

	for (var i=0; i < array.length; i++) {
		if (isNumeric(array[i]) && isOdd(array[i])) {
			odds.push(array[i]);
		}
	}

	return odds;

}

function countOddNumbers(array){
	return findOddNumbersInList(array).length;
}

function isOdd(num){
	if (num % 2 == 1) {
		return true;
	} else {
		return false;
	}
}


function isDivisibleByAnyFromList(num, list){
	//console.log("isDivisibleBy");
	//console.log(num, list);

	//returns true if num is divisible by any number in the list
	for (var i =0; i< list.length; i++) {
		if (num % list[i] === 0) {
			return true;
		}
	}

	return false;

}

function isDivisibleByAllFromList(num, list){
	//console.log("isDivisibleBy");
	//console.log(num, list);

	//returns true if num is divisible by all numbers in the list
	for (var i =0; i< list.length; i++) {
		if (num % list[i] !== 0) {
			return false;
		}
	}

	return true;

}

function countDivisibleBy(array, list){
	//count how many items in array are divisible by any number in the list
}

function getNLowestNumbersFrom(n, low, high, exclude) {
	//return n lowest numbers from low-high excluding the numbers in exclude
	var lowest_nums = [];

	for (var i = low; i<=high && lowest_nums.length < n; i++ ) {
		if (! inArray(i, exclude)) {
			lowest_nums.push(i);
		}
	}

	return lowest_nums;

}

function arraySubtractFromAllNumbers(num, array){
	//returns an array after subtracting num from all number elements of the array
	var new_array = [];
	for (var i=0; i < array.length; i++) {
		if (isNumeric(array[i]) ) {
			new_array.push(array[i] - num);
		} else{
			new_array.push(array[i]);
		}
	}
	return new_array;
}


function allStringsStartWithAnyFromList(list, array, options){	
	//returns true if all strings in array start with any element from list	
	for(var a=0; a< array.length; a++) {		
		if (!stringStartsWithAny(array[a], list)) {			
			return false;
		}		
	}
	return true;
}

function allStringsEndWithAnyFromList(list, array, options){	
	//returns true if all strings in array end with any element from list	
	for(var a=0; a< array.length; a++) {
		if (!stringEndsWithAny(array[a], list)) {			
			return false;
		}
	}
	return true;
}

function stringStartsWithAny(string, list){
	//returns true if string starts with any item in list
	for(var i=0; i< list.length; i++) {	
		if (stringStartsWith(string, list[i])) {			
			return true;
		}
	}
	return false;
}

function stringEndsWithAny(string, list){
	//returns true if string ends with any item in list
	for(var i=0; i< list.length; i++) {	
		if (stringEndsWith(string, list[i])) {			
			return true;
		}
	}
	return false;
}

function stringContainsAny(string, list){
	//returns true if string contains any item in list
	for(var i=0; i< list.length; i++) {	
		if (stringContains(string, list[i])) {			
			return true;
		}
	}
	return false;
}

function stringContainsAll(string, list){
	//returns true if string contains all items in list
	for(var i=0; i< list.length; i++) {	
		if (!stringContains(string, list[i])) {			
			return false;
		}
	}
	return true;
}

function allStringsContainAllFromList(list, array, options){
	//returns true if all string elements of list are in all string elements of array	
	for(var a=0; a< array.length; a++) {		
		if (! stringContainsAll(array[a], list)) {
			return false;
		}		
	}
	return true;
}

function allStringsContainAnyFromList(list, array, options){
	//returns true if any string element from list is in all string elements of array	
	for(var a=0; a< array.length; a++) {
		if (! stringContainsAny(array[a], list)) {
			return false;
		}
	}
	return true;
}

function allStringsContainNoneFromList(list, array, options){
	//returns true if no string element from list is in any string elements of array	
	for(var a=0; a< array.length; a++) {
		if (stringContainsAny(array[a], list)) {
			return false;
		}
	}
	return true;
}

function anyStringsContainAnyFromList(list, array, options){
	//returns true if any string element from list is in any string element of array	
	for(var a=0; a< array.length; a++) {		
		if (stringContainsAny(array[a], list)) {
			return true;
		}		
	}
	return false;
}


function arrayContainsAllFromList(list, array, options){
	//returns true if all elements of list are in array
	for(var i=0; i< list.length; i++) {	
		if (! inArray(list[i], array)) {
			return false;
		}
	}
	return true;
}

function arrayContainsAnyFromList(list, array, options){
	//returns true if any element of list is in array
	for(var i=0; i< list.length; i++) {	
		if (inArray(list[i], array)) {
			return true;
		}
	}
	return false;
}

function arrayContainsNoneFromList(list, array, options){
	//returns true if any element of list is in array
	for(var i=0; i< list.length; i++) {	
		if (inArray(list[i], array)) {
			return false;
		}
	}
	return true;
}

// JSFILE calc_functions.js 
/* This is the file containing functions that are used by calculators */

function calc_sum_of_digits(options){

	///////////

	//this code does not expand the ranges, and simply adds digits in the str
	//e.g 1-10 -> 2 -> 2

	//var str = options.range || "";

	// return maxSumOfDigits(str) + " = " + minSumOfDigits(str);

	////////////

	//this code adds every number in the range, and then processes the digit in the sum
	//e.g. 1-10 -> 55 -> 1

	// var str = calc_sum_of_numbers(options);

	// return maxSumOfDigits(str) + " = " + minSumOfDigits(str);

	////////////

	//this code process every number and its digits individually
	//e.g 1-10 -> 46 -> 1

	var str = options.range || "";
	var sum = "";

	if (str) {

		var nums = numbers_string_to_array(str, {expand_range: false});		
		var range_stats = mixedListDigitStats(nums);

		//console.log(range_stats);

		sum = range_stats["max_sum"] + " ~ " + range_stats["min_sum"];
		;

	}

	return sum.toString();

	}

	function calc_sum_of_numbers(options){

	var str = options.range || "";
	var sum = "";

	if (str) {

		var nums = numbers_string_to_array(str, {expand_range: false});		
		var range_stats = mixedListStats(nums);

		//console.log(range_stats);

		sum = range_stats["sum"];

	}

	return sum.toString();

	}

	function calc_avg_of_numbers(options){ 

	var str = options.range || "";
	var avg = "";
	var count = "";
	var sum = "";

	if (str) {

		var nums = numbers_string_to_array(str, {expand_range: false});		
		var range_stats = mixedListStats(nums);
		
		sum = range_stats["sum"];
		count = range_stats["count"];
		avg = range_stats["avg"];

	}

	return " Average: " + avg.toString()  + "\n" + "Count: "+count.toString() + "\n" + "Sum: "+sum.toString() ;

	}

	function calc_isPrime(options){

	var str = options.range || "";

	var result = "";

	if (str) {

		var array = numbers_string_to_array(str, {expand_range: false});		
		
		for (var i=0; i<array.length; i++) {
			if (isArray(array[i])) {
				//an array containg range i.e. [low, high]
				var low = array[i][0];
				var high = array[i][1];
				var range_stats = rangeStats(low, high);
				for (var r = low; r<= high; r++){
					result += r+" "+isPrime(r)+"\n";
				}

			} else {
				//single item	
				result += array[i]+" "+isPrime(array[i])+"\n";		
							
			}
			
		}

	}

	return result;

	}



	/* FILTER FUNCTIONS */

	function filter_containsAll(list, array, options){

	options = options || {};

	if (options && options.use_type === "string") {
		return allStringsContainAllFromList(list, array);
	} else {
		return arrayContainsAllFromList(list, array);
	}
	
	}

	function filter_containsAny(list, array, options){

	var options = options || {};

	if (options && options.use_type === "string") {
		//console.log("includesAnyInStringArray");
		return allStringsContainAnyFromList(list, array);
	} else {
		return arrayContainsAnyFromList(list, array);
	}

	}

	function filter_containsNone(list, array, options){

	var options = options || {};
	
	if (options && options.use_type === "string") {
		return allStringsContainNoneFromList(list, array);
	} else {
		return arrayContainsNoneFromList(list, array);
	}

	}

	function filter_digits_containsAll(list, array, options){

	options = options || {};

	return allStringsContainAllFromList(list, array);
		
	}

	function filter_digits_containsAny(list, array, options){

	var options = options || {};

	return allStringsContainAnyFromList(list, array);
	
	}

	function filter_digits_containsNone(list, array, options){

	var options = options || {};	
	
	return allStringsContainNoneFromList(list, array);	

	}


	function filter_startsWith(list, array, options){

	var options = options || {};

	if (options && options.use_type === "string") {
		//console.log("includesAnyInStringArray");
		return allStringsStartWithAnyFromList(list, array);
	} else {
		return allStringsStartWithAnyFromList(list, array);
	}

	}

	function filter_endsWith(list, array, options){	

	var options = options || {};

	if (options && options.use_type === "string") {
		//console.log("includesAnyInStringArray");
		return allStringsEndWithAnyFromList(list, array);
	} else {
		return allStringsEndWithAnyFromList(list, array);
	}

	}




	function filter_sumOfAllNumbersIs(list, array, options){
	//returns true if (sum of all numbers in array) is one of the numbers in list
	var stats = arrayStats(array);

	var sum = stats["sum"];

	if ( inArray(sum, list)) {
		return true;
	}

	return false;

	}

	function filter_sumOfAllDigitsIs(list, array, options){
	//returns true if (sum of all digits of the numbers in array) is one of the numbers in list
	var stats = mixedListDigitStats(array);

	for (var i = 0; i< list.length; i++) {
		if (list[i] < 10) {
			//use min_sum to compare
			//i.e. for single digit sum
			if (stats["min_sum"] == list[i]) {
				return true;
			}
		} else {
			//use max_sum to compare
			if (stats["max_sum"] == list[i]) {
				return true;
			}
		}
	}

	return false;
	}


	function filter_digitSumOfEveryNumberIs(list, array, options){
	//returns true if (sum of all digits every number in array) is one of the numbers in list
	
	for (var i = 0; i< array.length; i++) {
		//send single element of array as an array
			if (!filter_sumOfAllDigitsIs(list, [array[i]])) {
			return false;
		}
	}

	return true;

	}

	function filter_digitSumIs(num, list, options){	
	//returns true if (sum of all digits of num) is one of the numbers in list
	//send num as 1 element array
		return filter_digitSumOfEveryNumberIs(list, [num]);
	}


	function filter_consecutiveNumbersAtMost(list, array, options){
	//uses first element of list only to use as the max count of consecutive numbers
	//returns true if there are at most max count of consecutive numbers in any sequence
	var max_consecutive = list[0];

	//console.log("consecutiveNumbersLessThan");

		var consecutive_stats = consecutiveStats(array, options);

	if (consecutive_stats["largest_sequence"] > max_consecutive) {
		//found a consecutive pair that has atleast  
		//max_consecutive elements
		return false;
	} else {
		return true;
	}

	}


	function filter_consecutiveNumbersAtLeast(list, array, options){
	//uses first element of list only to use as the max count of consecutive numbers
	//returns true if there are at most max count of consecutive numbers in any sequence
	var min_consecutive = list[0];

	//console.log("consecutiveNumbersLessThan");

		var consecutive_stats = consecutiveStats(array, options);

	if (consecutive_stats["largest_sequence"] < min_consecutive) {
		//did not find a sequence with atleast min_consecutive elements
		return false;
	} else {
		return true;
	}

	}

	function filter_consecutiveSequencesAtMost(list, array, options){
	//uses first element of list only to use as the max count of sequences
	//returns true if there are at most max_sequences
	var max_sequences = list[0];

	//console.log("consecutiveSequencesAtMost");

		var consecutive_stats = consecutiveStats(array, options);

	if (consecutive_stats["sequences"] > max_sequences) {
		//found more than max_sequences
		//with consecutive elements
		return false;
	} else {
		return true;
	}

	}

	function filter_consecutiveSequencesAtLeast(list, array, options){
	//uses first element of list only to use as the max count of sequences
	//returns true if there are at most max_sequences
	var min_sequences = list[0];

	//console.log("consecutiveSequencesAtLeast");

		var consecutive_stats = consecutiveStats(array, options);

	if (consecutive_stats["sequences"] < min_sequences) {
		//did not find at least min_sequences
		//with consecutive elements
		return false;
	} else {
		return true;
	}

	}

	function filter_consecutiveSequenceAtMost1WithAtMost(list, array, options){
	//uses first element of list only to use as the max count of consecutive numbers	
	//returns true if there is only one sequence of at most max_consecutive elements
	var max_consecutive = list[0];

	//console.log("consecutiveNumbersLessThan");

		var consecutive_stats = consecutiveStats(array, options);

	if (consecutive_stats["sequences"] <= 1 && consecutive_stats["largest_sequence"] <= max_consecutive) {
		//at most one sequence with at most   
		//max_consecutive elements
		return true;
	} else {
		return false;
	}

	}
  
	function filter_allNumbersArePrime(list, array, options){
	//returns true if all numbers in array are prime numbers
	for (var i=0; i < array.length; i++) {
		if (isNumeric(array[i]) && !isPrime(array[i])) {
			return false;
		}
	}
	return true;
	}

	function filter_countOfOddNumbersIs(list, array, options){
	//returns true if (count of prime numbers in array) is one of the numbers in list
	var count = 0;

	for (var i=0; i < array.length; i++) {
		if (isOdd(array[i])) {
			count++;
		}
	}

	if ( inArray(count, list)) {
		return true;
	} else {
		return false;
	}
	
	}

	function filter_countOfPrimeNumbersIs(list, array, options){
	//returns true if (count of prime numbers in array) is one of the numbers in list
	var prime_count = 0;

	for (var i=0; i < array.length; i++) {
		if (isNumeric(array[i]) && isPrime(array[i])) {
			prime_count++;
		}
	}

	if ( inArray(prime_count, list)) {
		return true;
	} else {
		return false;
	}
	
	}

	function filter_countOfPrimeNumbersIsAtLeast(list, array, options){
	//uses first element of list only to use as the min count of primes
	//returns true if there are at least min_primes
	var min_primes = list[0];
	
	var prime_count = 0;

	for (var i=0; i < array.length; i++) {
		if (isNumeric(array[i]) && isPrime(array[i])) {
			prime_count++;
		}
		if (prime_count >= min_primes) {
			return true;
		}
	}
	
	return false;	
	
	}

	function filter_allNumbersAreDivisibleByAnyFromList(list, array, options){
	//returns true if all numbers in array are divisible by any number in the list
	for (var i=0; i < array.length; i++) {
		if (isNumeric(array[i]) && !isDivisibleByAnyFromList(array[i], list)) {
			return false;
		}
	}
	return true;
	}

	function filter_allNumbersAreDivisibleByAllFromList(list, array, options){
	//returns true if all numbers in array are divisible by all the numbers in the list
	for (var i=0; i < array.length; i++) {
		if (isNumeric(array[i]) && !isDivisibleByAllFromList(array[i], list)) {
			return false;
		}
	}
	return true;
	}

	function filter_allNumbersAreNotDivisibleByAnyFromList(list, array, options){
	//console.log("allNumbersAreDivisibleBy");
	//console.log(list, array);
	//returns true if all numbers in array are not divisible by any number in the list
	for (var i=0; i < array.length; i++) {
		if (isNumeric(array[i]) && isDivisibleByAnyFromList(array[i], list)) {
			return false;
		}
	}
	return true;
	}

	function filter_isOdd(elem, list, options){
	return isOdd(elem);
	}

	function filter_isPrime(elem, list, options){
	return isPrime(elem);
	}

	function filter_elemStartsWith(elem, list, options){
	return stringStartsWithAny(elem, list);
	}

	function filter_elemEndsWith(elem, list, options){
	return stringEndsWithAny(elem, list);
	}

	function filter_elemContainsAll(elem, list, options){
	return stringContainsAll(elem, list);
	}

	function filter_elemContainsAny(elem, list, options){
	return stringContainsAny(elem, list);
	}

	function filter_elemContainsNone(elem, list, options){
	return !stringContainsAny(elem, list);
	}

	function filter_isDivisibleByAnyFromList(elem, list, options){
	//returns true if elem is divisible by any item in list
	return isDivisibleByAnyFromList(elem, list);
	}

	function filter_isDivisibleByAllFromList(elem, list, options){
	//returns true if elem is divisible by all items in list
	return isDivisibleByAllFromList(elem, list);
	}

	function filter_isNotDivisibleByAnyFromList(elem, list, options){
	//returns false if elem is divisible by any item in list
	return !isDivisibleByAnyFromList(elem, list);
	}

	function filter_countOddNumbers(array, options){
	return countOddNumbers(array);
	}

	function filter_countPrimes(array, options){
	return countPrimes(array);
	}

// JSFILE app_init.js 

var accessibility_ON_header = $.cookie("accessibility");
	
if (typeof accessibility_ON_header === "undefined") { //not in cookie 	
	
	if (getQueryStringParameterByName("accessibility") === "on") { //check query string
		accessibility_ON_header = 1;
		//store in cookie
		//$.cookie("accessibility", 1);
		$.cookie("accessibility", 1, { expires: 60, path: '/' }); //expires in 60 days
	} else {
		accessibility_ON_header = 0;
	}
}

// JSFILE numgen_common.js 
var user_click_event_count = 0;

//reload after countdown_to_new_request number of events
//countdown reduced to 7 as there is no more page reloads
//but ads will be refreshed after these many times
var countdown_to_new_request = 11; //7 //10000; //100; //30; //50; 
// 10000 = practically no reload

//reload after this time
//set to 0 for no time based reload
//var time_to_new_request = 3600000; //27000; //milli seconds //practically an hour so it doesnot reload
var time_to_new_request = 0;

var last_user_event = "";
var last_reload_event = "";
var change_page = false;
var loading_numbers = false;
var start_loop_on_load = false;

var first_event_timestamp = Math.floor(Date.now());
var last_event_timestamp = Math.floor(Date.now());

var LOOP_SPEED = 50; //50;
var LOOP_SPEED_FIRST_LOOP = 100; //100;

var MAX_LENGTH = 100000;
var MAX_TRIES_PER_LINE = 100;
var MAX_TRIES_PER_NUM = 1000;

var accessibility_msg = "0000000"; //accessibility issue where kishor gets confused when numbers and texts are mixed, so we will replace all errors with 000000;
var accessibility_ON = typeof accessibility_ON_header !== "undefined" ? accessibility_ON_header : 0;

var global_result_content = ""; //to avoid passing back huge chunks of content

var user_events = {user_event: "", url_event: "", reload_event: ""};

var needs_reload = false;

var hash = "";

var result_loop = false;
var result_loop_start_requested = false;

var dont_trigger_hashchange = false;

//should be 6000, but reduced to make it more fun
//var SIDEPROB = 6000; //probability of landing on side is 1 in SIDEPROB
var SIDEPROB = 600; //probability of landing on side is 1 in SIDEPROB

var MAX_CODE_PAGES = 3; //page code to append e.g. code=1, 2, 3 etc. for reloads

var Ads = {};

$(document).ready(function(){	

	//override
	if (typeof init_countdown_to_new_request !== "undefined") {
		countdown_to_new_request = init_countdown_to_new_request;
	}


	//set init_time_to_new_request in the domain settings
	if (typeof init_time_to_new_request !== "undefined") {
		time_to_new_request = init_time_to_new_request;
	}

	if (time_to_new_request) {

		setTimeout(setCountdownTimer, time_to_new_request); 
	}
	
});

function setCountdownTimer(){
	
	//update user clicks to trigger new refresh on next click
	user_click_event_count = countdown_to_new_request;

	if (time_to_new_request) {
		setTimeout(setCountdownTimer, time_to_new_request); //will set countdown_to_new_request to user_click_event_count so that new request can be made on next user click
	}
}

function accessibilityMsg(msg) {
	if (accessibility_ON) {
		return accessibility_msg;
	} else {
		return msg;	
	}
}

function hideResult() {
	
        $("#resultVal").css("visibility","hidden");
        $("#resultVal").css("visibility","hidden");
	
}

function touchBtnMouseDown(){
	logDummy("touch mouse down");
	trackRNGClickEvent('touchstart', init_page);
	closeSettings();
	//resultStartStop({use_js_only: true});

	//since we use adRefresh now and not page reload
	//we can turn off use_js_only
	resultStartStop({use_js_only: false});
}

function touchBtnMouseUp(){
	logDummy("touch mouse up");
	resultStartStop({use_js_only: true, event: "mouseup"});
}

function updateFilterStatus(id, status_html, action){
	//status_html is either html to add or the id to remove

	if (typeof action === "undefined"){
		action = "update";
	}

	if (action === "add"){
	//console.log("add len");
	//console.log($("#result-top-left-msg").find("#" + id).length);
		//if already present then remove
		if ($("#result-top-left-msg").find("#" + id).length){
			$("#result-top-left-msg").find("#" + id).remove();
		}
		$("#result-top-left-msg").prepend(status_html);
		
	} else if (action === "remove"){
		$("#result-top-left-msg").find("#" + id).remove();
	} else {
		//just replace 
		$("#result-top-left-msg").html(status_html);
	}
	
}

function processOnGo(){
//console.log("processOnGo");
//console.log($("#filters_row_container").find(".additional_filter_row").length);
	//if filters applied, show filter msg, else hide
	// if ($("#filters_row_container").find(".additional_filter_row").length) {
	// 	$("#result-top-left-msg").html("<a onclick='addFilterBtnClicked();'>Magic Filters On</a>");
	// } else {
	// 	$("#result-top-left-msg").html("");
	// }
}

function goBtnClicked(){	
	closeSettings();
	processOnGo();
	user_click_event_count++;
	if(init_calc_func == "resultNewPNC" 
		|| init_calc_func == "resultNewPNCList" 
		|| init_calc_func == "resultNewList" 
	){
		updateResult("Loading...");
		updateProgress("Generating...");
		setTimeout(function(){
			callPageCalcFunc();
		}, 500);
	} else {
		callPageCalcFunc();
	}		
}

function startBtnClicked(){
	closeSettings();
	processOnGo();
	resultStartStop();
}

function stopBtnClicked(){
	resultStartStop();
}

var stop_one_requested = false;
var stopped_numbers = [];
function resultStopOne(options){

	trackRNGClickEvent('stopone', user_event);

	if (result_loop) {

		var n = $("#numbers").val();
		n = validateIntInput(n, 5);

		if (stopped_numbers.length < n) {
			//more numbers pending
			logDummy("pending");
			
			stop_one_requested = true;
		} else {
			logDummy("not pending");
			//loop needs to be stopped
			resultStartStop();
		}

	}

}

function resultStopAll(){

	trackRNGClickEvent('stopall', user_event);
	logDummy("stopall");	

	//stop All one by one

	var n = $("#numbers").val();
	n = validateIntInput(n, 5);

	if (result_loop) {
		// if loop is still running

		if (stopped_numbers.length < n) {
		//not all numbers generated		
			
			//stop the next one
			resultStopOne();

			var flash_interval = getRandInt(200, 500);

			logDummy("flash_interval"+ flash_interval);
			

			//then stop another when after a set time 
			//until all of them are stopped
			//once all of them are stopped
			//resultStartStop will be called by getNumbers to stop the loop
			setTimeout(function() {
				//if still not done then call stopAll again
				//make sure it's not 
				if (stopped_numbers.length < n) {					
					resultStopAll();
				}
			} 
			, flash_interval);
			
			// setTimeout(function() {
			// 		//if still not done then call stopAll again
			// 		//make sure it's not 
			// 		if (stopped_numbers.length < n) {
			// 			resultStartStop();
			// 		}
			// 	} 
			// , 300);
			
		}			
		
	} else {
		resultStartStop({forceStop: true});
	}

}

var stopnow_requested = false;
function resultStopNow(){
	trackRNGClickEvent('stopnow', user_event);
	logDummy("stopnow");
	
	if (stopped_numbers.length > 0) {
		//stop one engaged
		//it will be processed and stopped in getNumbers
		stopnow_requested = true;	
	} else {
		resultStartStop({forceStop: true});
	}
}


function resultStartStop(options){

	var n = $("#numbers").val();
	n = validateIntInput(n, 5);
	
	var l = $("#length").val();
	l = validateIntInput(l, 1);

	// if (stopped_numbers.length > 0) {

	// 	if (stopped_numbers.length < n) {
	// 	//stopall requested when stop one is engaged but not all numbers generated	
			
	// 		resultStopOne();
			
	// 		setTimeout(function() {
	// 				//if still not done then call stopAll again
	// 				//make sure it's not 
	// 				if (stopped_numbers.length < n) {
	// 					resultStartStop();
	// 				}
	// 			} 
	// 		, 300);
			
	// 	}
			
	// 	return;
	// }

	stop_one_requested = false;
	stopped_numbers = [];

	if (typeof options === "undefined") { options = {}; }
	
	if (result_loop || options.event === "mouseup" || options.forceStop) {
		//already in loop
		//stop loop
		result_loop = false;
		resetStopButtons();	
                                $("#submitBtn" ).show();
                                $("#forbiden" ).hide();
		//TODO removed this updateHashParam call 
		//its not needed anymore, as start=true is never added to hash anymore
		//however, check the function updateHashParam as it also changes spaces to + sign that was causing issues with magic filters
		//updateHashParam("start", "false", true);		
		return;
	} else {

		user_click_event_count++;		
	
		if ((n * l ) > 10000) {
			//alert("Cannot use Start/Stop for these many numbers");
			callPageCalcFunc({use_js_only: true});					
			return;
		}	

		//not in loop yet
		//perform 1 iteration
		result_loop_start_requested = true; //this is to indicate that hash needs to be set 
		callPageCalcFunc(options);
		result_loop_start_requested = false;

		//begin loop
		result_loop = true;	
		setTimeout(resultLoop, LOOP_SPEED_FIRST_LOOP);
                                $("#submitBtn" ).hide();
                                $("#forbiden" ).show();
	}
	
}

function resultLoop(){
	if (result_loop) {
		callPageCalcFunc({use_js_only: true});
		setTimeout(resultLoop, LOOP_SPEED);
	}
}


function resultRefresh() {
	
	hideResult();
	
	window.location = window.location;	
		
}



function checkNewEvent(event_type, event_name){
		
	var retval = false;
	
	//check if same event
	if (user_events[event_type] != "" && user_events[event_type] != event_name) {
		retval = true;
	}
	
	user_events[event_type] = event_name;
	
	return retval;
	
}

function checkNewReloadEvent(reload_event){
	
	var retval = false;
	
	//check if same event
	if (last_reload_event != "" && last_reload_event != reload_event) {
		retval = true;
	}
	
	last_reload_event = reload_event;
	
	return retval;
	
}



function checkNewUserEvent(user_event){
	
	var retval = false;
	
	//check if same event
	if (last_user_event != "" && last_user_event != user_event) {
		retval = true;
	}
	
	last_user_event = user_event;
	
	return retval;
	
}

var result_height = 0;

function updateResult(result){

	//$("#resultVal").html(result);
	//loading_numbers = false;
	if (result_loop || result_loop_start_requested) { 
		$("#resultVal").html(result);
	loading_numbers = false;
	} else {
		$("#resultVal").animate({opacity: 0}, 200, function() {
			//Animation complete
			$("#resultVal").html(result).animate({opacity: 1}, 200, function(){
				loading_numbers = false;
			});		
	});
	}
	
	//starting loop or just pressed go btn
	if (result_loop_start_requested || !result_loop) {
		
		
	}	
	
	//strating loop or in the loop
	if (result_loop_start_requested || result_loop) {

		//adjust height, as when the user loops, certain results may jerk the height up/down
		var new_result_height = $(".result").height();
		
		if (new_result_height > result_height) {
			new_result_height = new_result_height+20; //add a grace of 20 px to completely remove the jerk movement
			$(".result");
			result_height = new_result_height;
		}

	}

	
	
}

function validateIntInput (val, default_val) {	
	//changed to parseFloat to allow for large numbers
	var retval = parseFloat(val); //parseInt(val);	
	if (isNaN(retval)) {		
		retval = default_val;
	}	
	return retval;		
}

var forceReloadPage = false;

function forceReload(func_name){
	forceReloadPage = true;
	func_name();	
}


function initHash(){
	hash = window.location.hash.substr(2);
}

function getHash(){
	var retval = "";
	var hash = window.location.hash;	
	if (hash != "" && hash.charAt(1) === '!') {
		retval = window.location.hash.substr(2);
	}	
	return retval;
}

function emptyDataHash() {
	if (window.location.hash === "") { //empty hash also valid
		return true;
	} else {
		return false;
	}
}


function validDataHash() {
	if (window.location.hash === "") { //empty hash also valid
		return true;
	} else {
		if (getHash() !== "") {
			return true;
		} else {
			return false;	
		}
	}
}

function updateHashParam(key, val, _dont_trigger_hashchange) {

	if (typeof _dont_trigger_hashchange == "undefined") {
		_dont_trigger_hashchange = false;
	} 

	var hash_params = getDataFromHash();

	hash_params[key] = val;

	dont_trigger_hashchange = _dont_trigger_hashchange;

	//TODO check this function as it changes space to + signs in magic filters
	//however this function is not called anymore
	//if you use this function again, make sure to check the bug mentioned
	setHashData(objectToQueryString(hash_params));

}

function setHashData(params){
	window.location.hash = "#!"+params;
}


function setHash(hash){
//console.log(hash);
	window.location.hash = hash;
}

function dataHashChange() {
	if (dont_trigger_hashchange) {
		//no trigger on hashchange requested
		//chg title etc
		setPageData();
		
	} else {
		if (validDataHash()) {
			if (needs_reload){
				window.location.reload();	
			} else {
				setPageData();
				callPageCalcFunc();
			}
		}
	}
	dont_trigger_hashchange = false; //reset
}

function onPageHashChange(){
	dataHashChange();
}


//accepts params with default values
function getDataFromPage(params) {

	var hash = getHash();
	
	if (hash === "") {hash = getQS()} //try reading qs
	
	if (hash !== "") {
		
		var hash_params = querystringToObject(hash);		
			
		//copy values to params
		for (var key in hash_params){
			params[key] = hash_params[key];			
		}
	
	} 	

}


function getDataFromHash() {

	var params = {};

	var hash = getHash();

	if (hash !== "") {
		
		var hash_params = querystringToObject(hash);		
			
		//copy values to params
		for (var key in hash_params){
			params[key] = hash_params[key];			
		}
	
	} 
	
	return params;

}

function setPageData () {

	var params = 	{
					numbers : init_numbers, 
					low : init_low, 
					high : init_high, 
					lines : init_lines,
					length : init_length,
					sides : init_sides,
					range : init_range,
					unique : init_unique,
					order_matters : init_order_matters,
					sorted : init_sorted,
					from : init_from,
					to : init_to,
					step : init_step,
					csv : init_csv,
					oddeven : init_oddeven,
					oddqty : init_oddqty,
					start : init_start,
					sets : init_sets,
					addfilters : init_addfilters, //additional filters
					totals_only: init_totals_only,
					last_roll_only: init_last_roll_only
					}; //default values from page
	
	getDataFromPage(params); //update params from hash or qs
	
	$("#numbers").val(params.numbers);
	$("#low").val(params.low);
	$("#high").val(params.high);
	$("#txt_line").val(params.lines);
	$("#length").val(params.length);
	$("#sides").val(params.sides);
	$("#numlist").val(params.range);
	$("#from").val(params.from);
	$("#to").val(params.to);
	$("#step").val(params.step);
	$("#csv").val(validateCSV(params.csv, init_csv));
	$("#oddqty").val(params.oddqty);

	$("#oddeven").val(validateOddEven(params.oddeven, init_oddeven));	
	//$('input:radio[name="oddeven"]').filter('[value="'+validateOddEven(params.oddeven, init_oddeven)+'"]').attr('checked', true);
	
	
	if (getBooleanValue(params.totals_only, init_totals_only)) {
		$("#totals_only").prop("checked", true);
	} else {
		$("#totals_only").prop("checked", false);
	}

	if (getBooleanValue(params.last_roll_only, init_last_roll_only)) {
		$("#last_roll_only").prop("checked", true);
	} else {
		$("#last_roll_only").prop("checked", false);
	}
	
	if (getBooleanValue(params.unique, init_unique)) {
		$("#unique").val("1");
	} else {
		$("#unique").val("0");
	}
	
	if (getBooleanValue(params.order_matters, init_order_matters)) {
		$("#order_matters").val("1");
	} else {
		$("#order_matters").val("0");
	}
	
	if (getBooleanValue(params.sorted, init_sorted)) {
		$("#sorted").val("1");
	} else {
		$("#sorted").val("0");
	}
	
	if (params.start === "true") {
		start_loop_on_load = true;
	} else {
		start_loop_on_load = false;
	}

	//sets
	if (typeof (params.sets) !== "undefined") {
		//use the sets from hash even the value is empty (as long there is a value for sets in hash)
		//to override the default values of sets

		if (init_page === "rad") {
			displayAdditionalSets(getSets(params.sets), 'dice');
		} else {
			displayAdditionalSets(getSets(params.sets));
		}
	}	

	//console.log(params.addfilters);

	//additional filters
	if (typeof (params.addfilters) !== "undefined") {
		//use the filters from hash even the value is empty (as long there is a value for filters in hash)
		//to override the default values of filters
		
		displayAdditionalFilters(parseAdditionalFilters(params.addfilters));
		
	}	

	if (init_page === "decision" && params.range) {
		//load decisions from range
		var decisions = params.range.split(",");
		if (decisions.length) {
			$("#inputs_row").html(""); //reset existing inputs
			var inputs_html = "";
			for (var i =0; i< decisions.length; i++) {
				if (i)  { inputs_html += " or "; }				
				inputs_html += '<input id="d'+(i+1)+'" type="text" value="'+escapeHtml(decisions[i])+'" class="decision_input" />';
			}
			$("#inputs_row").html(inputs_html); 
		}
	}
	
	if(!emptyDataHash()) { 				
		var title = init_page_title.replace(/{{u}}/g, getUniqueTitle(params.unique)).replace(/{{r}}/g, getReplacementTitle(params.unique)).replace(/{{odd}}/g, getOddEvenTitle(params.oddeven)).replace(/{{om}}/g, getOrderMattersTitle(params.order_matters)).replace(/{{n}}/g, params.numbers).replace(/{{l}}/g, params.low).replace(/{{h}}/g, params.high).replace(/{{s}}/g, params.sides).replace(/{{L}}/g, params.length);
		$("#page_title").html(title);
		document.title = title;
	}
	
}

function callPageCalcFunc(options){
	window[init_calc_func](options);
}

function initApp(){
	
	/*	
	var clipboard = new ClipboardJS('.clipboard_btn');

	clipboard.on('success', function(e) {
		//alert('Copied');
		e.clearSelection();
	});
	
	clipboard.on('error', function(e) {
		alert('Press Ctrl + C to copy');
	});
	*/


	var clipboard = new ClipboardJS('.clipboard_btn', {
		text: function(trigger) {
			//return trigger.getAttribute('aria-label');
			trackRNGClickEvent('copy', user_event);
			return getNumbersToCopy();
		}
	});
	
	
	clipboard.on('success', function(e) {
	
		e.clearSelection();
		
		$("#snackbar").html("Copied").addClass("show");

		  // After 3 seconds, remove the show class from DIV
		  setTimeout(function(){ $("#snackbar").removeClass("show").html(""); }, 3000);
		
	});

	clipboard.on('error', function(e) {
		alert('Could not copy to clipboard. Please use Ctrl + C to copy manually.');
	});


	$("#oddqty").focus(function(){        
        $('#oddeven_custom_odd').prop('checked',true);
    });
	
	//load fb scripts after a few seconds afetr the page has loaded
	var screen_width = $(window).width();	

	
}



function showFontDialog(){
	$('#fontModal').modal('show');
}

function showOddEvenDialog() {
	$('#oddevenModal').modal('show');

}

function refreshAds(){

	logDummy("refreshAds");	

	//remove status of the ads 
	//this is done to avoid the exception caused by goolgeads 
	//All ins elements in the DOM with class=adsbygoogle already have ads in them
		
	// $("#top_ad > ins").removeAttr("data-adsbygoogle-status");
	//$("#incontent_ad > ins").removeAttr("data-adsbygoogle-status");
	//$("#bottom_ad > ins").removeAttr("data-adsbygoogle-status");

	$(".adsbygoogle").removeAttr("data-adsbygoogle-status");		
	$(".adsbygoogle").html("");	
	
	//$(".adsbygoogle").css("height", "");	
	//$(".adsbygoogle").html("");	
	// $(".adsbygoogle").css("width", "");
	// $(".adsbygoogle").html("");		

	setTimeout(function() {
		//then refresh ads after a set time

		var num_ad_elements = $(".google_ad_ins").length;

		for (var i = 0; i<num_ad_elements; i++) {

			if(window.adsbygoogle) {
				window.adsbygoogle.push({});
			}

			//(adsbygoogle = window.adsbygoogle || []).push({});

		}

		//(adsbygoogle = window.adsbygoogle || []).push({});
		// (adsbygoogle = window.adsbygoogle || []).push({});
		// (adsbygoogle = window.adsbygoogle || []).push({});
		
	}, 100);

	
}

function initPage(time_to_func_call){
	
	if (typeof time_to_func_call === "undefined") {
		time_to_func_call = 50;
	}

	//save ad html code
	logDummy($("#top_ad").html());
	Ads.top = $("#top_ad").html();	
	Ads.incontent = $("#incontent_ad").html();
	Ads.bottom = $("#bottom_ad").html();


	setPageData();
	$("#resultVal").html("Loading..");
	
	if (start_loop_on_load) {
		setTimeout(resultStartStop, time_to_func_call);
	} else { 
		setTimeout(callPageCalcFunc, time_to_func_call);
	}
	
	$(window).on('hashchange',function(){ 
		onPageHashChange();
	});
	

	$("#oddeven").on("change", function(){
		oddEvenSelectChanged($(this));
	});

	$("#oddeven").on("focus", function(){
		oddEvenSelectFocused($(this));
	});

	$("#oddeven").on("blur", function(){
		oddEvenSelectBlur($(this));
	});

	$("#touchBtn").on({ 'touchstart mousedown' : function(){ 
		touchBtnMouseDown();
		} 
	});

	$("#touchBtn").on({ 'touchend mouseup' : function(){ 
		touchBtnMouseUp();
		} 
	});
		

	$(	".game_shortcuts a "
	).on('click', function(e){
		e.preventDefault();
		handleShortcutClick($(e.target));		
	});
			
}

/* ref code for time tracking */
//var time_interval = Math.floor(Date.now()) - last_event_timestamp;
//last_event_timestamp = Math.floor(Date.now());

//trackRNGClickEvent('click-count', 'generated random numbers - after - '+Math.floor(time_interval/1000));

//var total_time_on_page = Math.floor(Date.now()) - first_event_timestamp;

//trackRNGClickEvent('click-count', 'generated random numbers - '+user_click_event_count+ ' in '+Math.floor(total_time_on_page/1000));

//trackRNGClickEvent('click-count', 'stayed on page '+Math.floor(total_time_on_page/1000));

function oddEvenSelectChanged(elem) {
	logDummy("changed");
	logDummy(elem);	
	logDummy(elem.val());

	if (elem.val() == "unknown") {

	} else if (elem.val() == "custom_odd") {
		showOddEvenDialog();
	}
}

var prev_oddeven_option = "";

function oddEvenSelectFocused(elem) {
	logDummy("focused");

	//do this on focus
	//to allow triggering onchange event even if the same option is selected again
	//we need to do this to open the oddevenModal when custom_odd is selected
	//rest option selected to default option

	//save what option was selected before we set it to null
	prev_oddeven_option = elem.val();
	elem.val("unknown");
	//elem.blur(); //not needed // causes issues in firefox
}

function oddEvenSelectBlur(elem) {
	logDummy("blur");
	logDummy(elem.val());
	if (elem.val() == null) {
		elem.val(prev_oddeven_option);
	}
}


function updateCombinatoricsXdigit(x, base) {
	var content = "<strong>Possible "+x+" digit combinations</strong>";
	var total_combinations = total_xdigit_combinations(x, base);	

	content += "<br /><br />" + total_combinations.toLocaleString() + " (~ " + numeral(total_combinations).format('0,0.0a') + ")";
	
	$("#combinatorics .content").html(content);
}


function updateCombinatorics(n, l, h, unique, format) {

	if (typeof format == "undefined") {format = "";};


	var content = "<strong>Select "+n+(unique ? " unique " : " non-unique ")+"numbers from "+l+" to "+h+"</strong>";

	if (format == "list") {
		content = "<strong>Select "+n+(unique ? " unique " : " non-unique ")+"items from a list of "+(h-l+1)+" items.</strong>";
	}

	var total_combinations = total_possible_1tox_combinations(n, l, h, unique);	
	var total_combinations_ordered = total_possible_1tox_combinations(n, l, h, unique, true);
	
	content += "<br /><br />Total possible combinations:";
	content += "<br /><br />If order does not matter (e.g. lottery numbers)<br /><strong>" + total_combinations.toLocaleString() + " (~ " + numeral(total_combinations).format('0,0.0a') + ")</strong>";
	content += "<br /><br />If order matters (e.g. pick3 numbers, pin-codes, permutations)<br /><strong>" + total_combinations_ordered.toLocaleString() + " (~ " + numeral(total_combinations_ordered).format('0,0.0a') + ")</strong>";
	
	$("#combinatorics .content").html(content);
}


// function trackPageview(page) {		
// 	if(typeof _gaq !== "undefined"){						
// 		_gaq.push(['_trackPageview', page]);
// 	}
// }


// function trackEvent(name, value) {	
// 	if(typeof _gaq !== "undefined"){			
// 		_gaq.push(['_trackEvent', name, value]);
// 	}
// }

function trackPageview(page) {	
	if(typeof gtag !== "undefined"){	
		gtag('event', 'page_view', {
			page_path: page		
		});
	}
}


function trackEvent(name, value) {
//console.log("sending ", name, value);
	if(typeof gtag !== "undefined"){
		gtag('event', value, {
			'event_category' : name
		});
	} 
}


function trackRNGClickEvent(name, value){
	//do not track the first event
	// if (user_click_event_count > 1) {
	// 	trackEvent(name, value);
	// }
	//track every event now, previously first event was omitted becasue of page loads
	trackEvent(name, value);
}





function numbers_string_to_rgb_sets (numbers){
	
	var num_array = [];
	
	//replace brackets in case user added brackets and then split using , or space
	var num_split = numbers.replace(/[\(\)]/g, '').split(/[\s,]+/);
				
	//create number pool with dashed ranges and single numbers from user
	for (var i=0; i<num_split.length; i+=3){
		
		var rgb_set = num_split.slice(i, i+3); 
				
		num_array.push(rgb_set.join(","));
		
	}	
	
	return num_array;
	
}



function getCombinationsFromListOrRange(filters, csv){	
	
	var total_lines = filters.total_lines;
	var numbers = filters.numbers;
	var low = filters.low;
	var high = filters.high;
	var oddeven = filters.oddeven;	
	var oddqty = filters.oddqty;
	var unique = filters.unique;
	var order_matters = filters.order_matters;
	var sorted = filters.sorted;
	var list_of_numbers = filters.list_of_numbers;
	var use_list = filters.use_list;
	var additional_sets = filters.sets || [];
	var additional_filters = filters.addfilters || {};
	var sorted_line = order_matters ? false : sorted;


	//console.log(list_of_numbers);

	//console.log("additional_filters");
	//console.log(additional_filters);

	additional_filters = processAdditionalFilters(additional_filters);

	//console.log(additional_filters);
	//console.log(_.isEmpty(additional_filters));

	if (typeof use_list === "undefined") { use_list = false; }
	if (typeof oddeven === "undefined") { oddeven = ""; }
	if (typeof sorted === "undefined") { sorted = false; }

	var separator = getSeparator(csv);

	

	var numbers_content = "";
	
	var user_num_arr;

	if (use_list) {

		user_num_arr = numbers_string_to_array(list_of_numbers, {separator_re: filters.separator_re, expand_range: false});

	}	
		
	if (total_lines * numbers > 1000001) {
	
		numbers_content = "Caution: Too many numbers";
		
	} else {
				
		loading_numbers = true;
							
		numbers_content = "";		

		var lines_generated_ints = []; //array of array of integers
		var lines_generated_ints_sorted = []; //array of array of integers
		var lines_generated_sets_ints = []; //contains multi dimensional array for sets per row

		var try_number = 0;		
		
		//generate lines
		for (var j=0; j < total_lines && try_number <= MAX_TRIES_PER_LINE; j++){
			
			try_number = 0;
			
			var line_ok = true;
			var loaded_numbers = []; //main numbers for this line			
			var loaded_numbers_sorted = [];

			var loaded_sets = []; //set numbers for this line
	
			do {
				
				try_number++;				

				//delete loaded_numbers;
				loaded_numbers = [];
				
				line_ok = true;	
						
				//if order_matters, override sorted to false within a line

				if (use_list) {
					
					loaded_numbers = getNumbersArrayFromList({numbers: numbers, oddeven: oddeven, oddqty: oddqty, unique: unique, sorted: sorted_line, addfilters: additional_filters}, user_num_arr);
									
				} else {

					//console.log("calling getNumbersArray");

					loaded_numbers = getNumbersArray({numbers: numbers, low: low, high: high, oddeven: oddeven, unique: unique, oddqty: oddqty, sorted: sorted_line, addfilters: additional_filters});
					
				}
				
				//console.log("validating");

				if (!validateLineThroughFilters(additional_filters, loaded_numbers) ) {
					line_ok = false;

					//skip the rest of the stuff and 
					//loop again
					continue;
				}

				//console.log("generating sets");

				for (var as = 0; as < additional_sets.length; as++ ) {
					var set_params = additional_sets[as]; //get numbers, low and high
					var set_numbers = getNumbersArray({numbers: set_params[0], low: set_params[1], high: set_params[2], oddeven: oddeven, unique: unique, oddqty: oddqty, sorted: sorted_line});
					 
					loaded_sets.push(set_numbers);					
				}
				
				loaded_numbers_sorted = loaded_numbers.slice(0);
				sortArray(loaded_numbers_sorted);


				//sort numbers if order does not matter, to make sure we generate unique lines
				if ( ! order_matters ){
					
					if (isIntArrayInArray(loaded_numbers_sorted, lines_generated_ints_sorted)) {
						line_ok = false;
					}
					
				} else {
					
					if (isIntArrayInArray(loaded_numbers, lines_generated_ints)) {
						line_ok = false;
					}
					
				}
			
			
			} while(!line_ok && try_number <= MAX_TRIES_PER_LINE);
			
			
			if (try_number > MAX_TRIES_PER_LINE) { //could not generate a combination
				//logDummy("could not ");
			} else { 			
				
				lines_generated_ints.push(loaded_numbers);	
				lines_generated_sets_ints.push(loaded_sets);			
				
				if ( ! order_matters ){					
					//if order does not matter, also keep the sorted lines to compare
					lines_generated_ints_sorted.push(loaded_numbers_sorted);
				}				
				
			} 
			
		}
		
		if(sorted) {			
			lines_generated_ints.sort(intArrayGreaterThan);
		}

		//store for download use
		download_numbers = [];
		
		//create content
		for (var i=0; i<lines_generated_ints.length; i++){
			
			var line_str = lines_generated_ints[i].join(separator);

			for (var as = 0; as < additional_sets.length; as++ ) {
				line_str += separator + lines_generated_sets_ints[i][as].join(separator);
			}
			
			download_numbers.push(line_str);
			
			numbers_content += '<div class="line" id="line_' + (i+1) + '">'; 
			
			/*if (numbered) {
				numbers_content += '<span class="line_number">Line '+(i+1)+'</span>';
			}*/								
					
			//disabling escapeHtml, causes <br /> tags in RNG when newLine is selected
			//escapeHtml moved to the numbers_string_to_array function
			numbers_content +=  line_str; //escapeHtml(line_str); 	
			
			numbers_content += '</div><!-- close line -->';
			
		}	
		
	
	}//no errors
		
	return numbers_content;
	
}


function getAllCombinationsFromListOrRange(filters, csv){	
	
	var total_lines = filters.total_lines;
	var numbers = filters.numbers;
	var low = filters.low;
	var high = filters.high;
	var oddeven = filters.oddeven;	
	var oddqty = filters.oddqty;
	var unique = filters.unique;
	var order_matters = filters.order_matters;
	var sorted = filters.sorted;
	var list_of_numbers = filters.list_of_numbers;
	var use_list = filters.use_list;
	var additional_sets = filters.sets || [];
	var additional_filters = filters.addfilters || {};
	var sorted_line = order_matters ? false : sorted;


	//console.log(list_of_numbers);

	//console.log("additional_filters");
	//console.log(additional_filters);

	additional_filters = processAdditionalFilters(additional_filters);

	//console.log(additional_filters);
	//console.log(_.isEmpty(additional_filters));
	
	if (typeof use_list === "undefined") { use_list = false; }
	if (typeof oddeven === "undefined") { oddeven = ""; }
	if (typeof sorted === "undefined") { sorted = false; }

	var separator = getSeparator(csv);

	var numbers_content = [];
	
	var user_num_arr;

	if (use_list) {

		user_num_arr = numbers_string_to_array(list_of_numbers, {separator_re: filters.separator_re});
		if (unique) {
			//user_num_arr = arrayUnique(user_num_arr);			
		}
		low = 0;
		high = user_num_arr.length-1;

	}	

	var oddeven_values = processOddEvenFilter(oddeven, oddqty, numbers);
	oddeven = oddeven_values[0];
	oddqty = oddeven_values[1];

	//console.log(oddeven, oddqty);

	var total_expected_combinations = total_possible_1tox_combinations(numbers, low, high, unique, order_matters);

		
	if (total_lines * numbers > 1000001) {
	
		numbers_content = ["Caution: Too many numbers"];
		
	} else {
				
		loading_numbers = true;
							
		numbers_content = [];

		// for (var i=1; i<=high; i++) {			
		// 	for (var j=1+i; j<=high; j++) {
		// 		for (var k=j+i; k<=high; k++) {
		// 			//console.log(i + " " + j + " " + k);
		// 		}
		// 	}
		// }

		//var for_loop_code_for_combinations = 'for (var i=1; i<=high; i++) {for (var j=1+i; j<=high; j++) {for (var k=j+i; k<=high; k++) {//console.log(i + " " + j + " " + k);}}}';
		var for_loop_code_for_combinations = "";
		//generate dynamic for loop code to run, it is going to need 'numbers' nested for loops
		for (var i = 0; i <numbers; i++) {
			var var_name = 'i'+i;
			var counter_start = low;
			if (unique) {
				if (order_matters) {
					//this has problems, as duplicates will be allowed in this
					//so there is a check below that removes duplicates later
					counter_start = low; //if order_matters (permutations), then start each nested loop from 1
				} else {
					counter_start = (i > 0 ? '1+i'+(i-1) : low); 
				}
				
			} else {
				//replacement allowed
				if (order_matters) {
					counter_start = low; //if order_matters (permutations), then start each nested loop from 1
				} else {
					counter_start = (i > 0 ? '0+i'+(i-1) : low); 
				}				
			}
			for_loop_code_for_combinations += 'for (var '+var_name+'='+counter_start+'; '+var_name+'<=high; '+var_name+'++) {';
		}

		//add print statement
		//for_loop_code_for_combinations += '//console.log(';
		for_loop_code_for_combinations += "line_ok = 1;";	
		for_loop_code_for_combinations += "line_numbers = [";		
		for (var i = 0; i <numbers; i++) {	
			var var_name = 'i'+i;
			// if (use_list) {
			// 	//read items from the list
			// 	for_loop_code_for_combinations += "user_num_arr["+var_name + "],";
			// } else {
				//the numbers are the items
				// for_loop_code_for_combinations += var_name + ",";
			// }

			//only keep indexes for now even for the list
			//indexes will be replaced with items later below		
			for_loop_code_for_combinations += var_name + ",";
			
		}
		//for_loop_code_for_combinations += ');';
		for_loop_code_for_combinations += '];';


		//check for duplicates before indexes are replaced with items
		//the list may have duplicates that we will need to keep 
		if (unique && order_matters) {
			//check line for duplicates
			for_loop_code_for_combinations += 'if (arrayHasDuplicates(line_numbers)) line_ok = 0;';	
		}

		

		//at this point replace indexes with items from list
		if (use_list) {
			for_loop_code_for_combinations += 'for (var l = 0; l < line_numbers.length; l++) {line_numbers[l] = user_num_arr[line_numbers[l]];}';
		}	
		
		//validate line through filters
		if (!_.isEmpty(additional_filters)){
			for_loop_code_for_combinations += 'if (!validateLineThroughFilters(additional_filters, line_numbers) ) {line_ok = 0;}';
		}


		//check if line is unique
		//this will take a very long time for large number of combinations
		//so do it only for a few thousand combinations
		if (total_expected_combinations <= 10000) {
			for_loop_code_for_combinations += 'if (isIntArrayInArray(line_numbers.join(separator), numbers_content)) line_ok = 0;';
		}
		
		if (oddeven == "odd") {
			//check for any even numbers
			for_loop_code_for_combinations += 'if (hasEvenElements(line_numbers)) {line_ok = 0;}';
		} else if (oddeven == "even") {
			//check for any odd numbers
			for_loop_code_for_combinations += 'if (hasOddElements(line_numbers)) {line_ok = 0;}';
		} else if (oddeven == "half_odd" || oddeven == "custom_odd" ) { //this has been set above as per the oddeven filters
			//check for qty of odd numbers
			for_loop_code_for_combinations += 'if (countOddElements(line_numbers) != oddqty) {line_ok = 0;}';
		}
		
		

		for_loop_code_for_combinations += 'if (line_ok) {';
		for_loop_code_for_combinations += 'numbers_content.push(line_numbers.join(separator));';
		for_loop_code_for_combinations += '}';

		//add closing brackets
		for (var i = 0; i <numbers; i++) {			
			for_loop_code_for_combinations += '}';
		}

		//console.log("printing var code");
		//console.log(for_loop_code_for_combinations);

		//console.log("running var code");
		eval(for_loop_code_for_combinations);

		// //generate lines
		// for (var j=0; j < total_lines && try_number <= MAX_TRIES_PER_LINE; j++){
			
		// 	try_number = 0;
			
		// 	var line_ok = true;
		// 	var loaded_numbers = []; //main numbers for this line			
		// 	var loaded_numbers_sorted = [];

		// 	var loaded_sets = []; //set numbers for this line
	
						

		// 		//delete loaded_numbers;
		// 		loaded_numbers = [];
				
				
						
		// 		//if order_matters, override sorted to false within a line

		// 		if (use_list) {
					
		// 			loaded_numbers = getNumbersArrayFromList({numbers: numbers, oddeven: oddeven, oddqty: oddqty, unique: unique, sorted: sorted_line}, user_num_arr);
									
		// 		} else {

		// 			loaded_numbers = getNumbersArray({numbers: numbers, low: low, high: high, oddeven: oddeven, unique: unique, oddqty: oddqty, sorted: sorted_line});

		// 		}				

		// 		for (var as = 0; as < additional_sets.length; as++ ) {
		// 			var set_params = additional_sets[as]; //get numbers, low and high
		// 			var set_numbers = getNumbersArray({numbers: set_params[0], low: set_params[1], high: set_params[2], oddeven: oddeven, unique: unique, oddqty: oddqty, sorted: sorted_line});				
					 
		// 			loaded_sets.push(set_numbers);					
		// 		}
				
		// 		loaded_numbers_sorted = loaded_numbers.slice(0);
		// 		sortArray(loaded_numbers_sorted);

				
		// 		lines_generated_ints.push(loaded_numbers);	
				
			
		// }
		
		// if(sorted) {			
		// 	lines_generated_ints.sort(intArrayGreaterThan);
		// }
		
		// //store for download use
		// download_numbers = [];
		
		// //create content
		// for (var i=0; i<lines_generated_ints.length; i++){
			
		// 	var line_str = lines_generated_ints[i].join(separator);

		// 	for (var as = 0; as < additional_sets.length; as++ ) {
		// 		line_str += separator + lines_generated_sets_ints[i][as].join(separator);
		// 	}
			
		// 	download_numbers.push(line_str);
			
		// 	numbers_content += '<div class="line" id="line_' + (i+1) + '">'; 
			
		// 	/*if (numbered) {
		// 		numbers_content += '<span class="line_number">Line '+(i+1)+'</span>';
		// 	}*/								
					
		// 	//disabling escapeHtml, causes <br /> tags in RNG when newLine is selected
		// 	//escapeHtml moved to the numbers_string_to_array function
		// 	numbers_content +=  line_str; //escapeHtml(line_str); 	
			
		// 	numbers_content += '</div><!-- close line -->';
			
		// }	
		
	
	}//no errors

	
	//array push and join is faster than concatenation
	//here is the code to test
	// for (var n = 10; n <= 10000000; n*=10) {
		
	// 	var iterations = n;

	// 	//console.log("strings", iterations);
	// //console.time("push-join");
	// 	arr = [];
	// 	for (var i = 0; i< iterations; i++) {
	// 		arr.push("a b c d e f g h i j k l m");
	// 	}
	// //console.time("join-only");
	// 	content = arr.join(",");
	// //console.timeEnd("join-only");
	// //console.timeEnd("push-join");
	
	// 	content = "";
	
	// //console.time("concatenate");	
	// 	for (var i = 0; i< iterations; i++) {
	// 		content += "a b c d e f g h i j k l m";
	// 	}
	// //console.timeEnd("concatenate");

	// }

	download_numbers = numbers_content;

	return {content: numbers_content, user_list_used: user_num_arr};
	
}

function getFunctionResults(filters){
	
	//numbers_content = getCombinationsFromListOrRange(filters, csv);
			
	logDummy(filters);

	var numbers_content = "";

	if (window["calc_"+filters.function_name]) {
		numbers_content = window["calc_"+filters.function_name](filters);
	}

	return numbers_content;
	
}	


function getCombinatorResults(filters, list_of_download_numbers, csv){

	filters.list_of_numbers = list_of_download_numbers;
	filters.use_list = true;
	
	var numbers_content = getCombinationsFromListOrRange(filters, csv);
			
	return numbers_content;
	
}	

function getNumbersMultipleLines (filters, csv) {	
	
	var numbers_content = getCombinationsFromListOrRange(filters, csv);
			
	return numbers_content;
	
}	

function getNumbersMultipleLinesPNC (filters, csv) {	
	
	var numbers_content = getAllCombinationsFromListOrRange(filters, csv);
			
	return numbers_content;
	
}	

function getNumbersMultipleLinesPNCList (filters, list_of_numbers, csv) {	
	
	filters.list_of_numbers = list_of_numbers;
	filters.use_list = true;

	var numbers_content = getAllCombinationsFromListOrRange(filters, csv);
			
	return numbers_content;
	
}	


function getConverterResults(list_of_numbers, num_type, num_type_to, csv){

	var separator = getSeparator(csv);
	
	var numbers_content = "";

	if (num_type === "rgb") {
		var user_num_arr = numbers_string_to_rgb_sets(list_of_numbers);
	} else {
		var user_num_arr = numbers_string_to_array(list_of_numbers);
	}
	
	numbers_content += '<div class="line table-row">';
	numbers_content += '<div class="table-cell">'+num_type+'</div>';
	numbers_content += '<div class="table-cell">'+num_type_to+'</div>';
	numbers_content += '</div>';
	
	for (var i=0; i< user_num_arr.length; i++){	
	
		var val = user_num_arr[i];
		var dec = decFrom(val, num_type);
		
	
		numbers_content += '<div class="line table-row">'; 
		
		numbers_content += '<div class="table-cell">'; 
		numbers_content += decTo(dec, num_type) + " ";
		numbers_content += '</div>';
		
	
		if (!isNaN(dec)) { 	
		
			var conv_val = decTo(dec, num_type_to);
			
			if (num_type === "rgb" && num_type_to === "hex") {
				conv_val = conv_val.toString().padStart(6, "0");	
			}
		
			numbers_content += '<div class="table-cell">'; 
			numbers_content += conv_val;
			numbers_content += '</div>';
			
		} else {
			numbers_content += '<div class="table-cell">'; 
			numbers_content += 'invalid';
			numbers_content += '</div>';
				
		}
		
		numbers_content += "</div>";
		
	}
	
	return numbers_content;
	
}


var global_heads_counts = [];

function getNumbers_Dice(filters) {

	"use strict";
	
	var times = filters.len;
	var sets = filters.sets;		
	var max_high = filters.max_high;	
	var total_coins_per_row = filters.total_coins_per_row;
	var totals_only = filters.totals_only;
	var last_roll_only = filters.last_roll_only;
	var get_counts = filters.get_counts;


	var result = "";	
	var numlist = [];
	var heads_counts = [];

	if (get_counts) {
		//initialize head counts
		for (var i = 1 ; i <= max_high; i++) {
			heads_counts[""+i] = 0;
		}
	}

	var use_coins = true;	
				
	var total_coins_to_display = (last_roll_only ? total_coins_per_row : total_coins_per_row * times);

	if (total_coins_to_display <= 1000) {
		use_coins = true;	
	} else {
		use_coins = false;	
	}

	//var decs = getNumbersArray({numbers: len, low: dec_low, high: dec_high, oddeven: 0, unique: 0});
				
	for (var t = 0; t < times; t++) { 
									
		//var nums = getNumbers(coins, 0, 1, 0, 0);				
		var seq = [];
		var seq_sum = 0;									
		var hex = "";

		/*
		for (var c = 0; c< coins; c++) {

			var side = getRandInt(low, high);				
		
			seq.push(side);	
			heads_counts[""+side]++;
			
			seq_sum += side;

		}
		*/

		for (var as = 0; as < sets.length; as++ ) {
			var set_params = sets[as]; //get numbers, low and high

			var numbers = set_params[0];
			var low = set_params[1];
			var high = set_params[2];

			for (var j =0; j< numbers; j++) {
				
				var side = getRandInt(low, high);				
		
				seq.push(side);	

				if (get_counts) {
					heads_counts[""+side]++;
				}

				seq_sum += side;

				var dice_class = isFairDice(high) ? "dice" : "num";

				hex += "<span class='"+dice_class+" d"+high+" _"+side+"'><span>"+side+"</span></span>";

				/*
				if (use_coins) {

					hex += "<span class='dice d"+high+" _"+side+"'><span>"+side+"</span></span>";

				} else {							
					hex += side + " ";						
				}
				*/

			}					 
								
		}
	
				
		if(total_coins_per_row > 1 && totals_only) {
			hex = "";
		}
		
		var sum_box = "";
		
		if (total_coins_per_row > 1) { //more than one dice
			//show sum
			sum_box = "<span class='seq_sum'>"+seq_sum+"</span>";
		}

		//to adjust dice size
		//if more than 5 dice rolled 
		//or if more than 2 rows will show
		if (total_coins_per_row > 5 || (times > 1 && !last_roll_only))  {
			var col_group = "10" ; //0";
		} else {
			var col_group = total_coins_per_row;
		}
		
		if (!last_roll_only || (last_roll_only && t == times - 1)) {

			result += "<div class='roll-group col-"+col_group+"'>"+hex+sum_box+"</div> ";

			/*
			if (use_coins) {
				result += "<div class='roll-group col-"+col_group+"'>"+hex+sum_box+"</div> ";
			} else {
				result += "<div class='roll-group col-"+col_group+"'><span class='numbers'>"+hex+"</span>"+sum_box+"</div> ";
			}
			*/
		
		}
	
	}//for t times

	global_heads_counts = heads_counts;
	download_numbers = numlist;

	return result;
		
}


function getNumbers_N_of_L(filters) {

	var n = filters.numbers;
	var len = filters.len;
	var dec_low = filters.low;
	var dec_high = filters.high;
	var num_type = filters.num_type;	

	var additional_filters = filters.addfilters || {};
	
	var result = "";	
	var numlist = [];
				
	if (n > 0) {
		
		/*
		//use this if 0 not allowed as first digit
		//get first digit
		result = getNumbers(1, 1, 9);
		if (n > 1) {
			//get rest of the digits
			result  += " " + getNumbers(n-1, 0, 9);
		}*/
		
							
		for (var i = 0; i < n; i++) { 
			
			var try_num = 0;
			var num_okay = true;

			do {

				try_num++;

				num_okay = true;

				var decs = getNumbersArray({numbers: len, low: dec_low, high: dec_high, oddeven: 0, unique: 0, addfilters: additional_filters});
				
				var hex = "";				
				for (var j = 0; j < decs.length; j++) {
					hex += (decToHex(decs[j])).toUpperCase();						
				}

				//filter like contains all will need to be programmed
				// //process number through additional filters
				// if (!validateLineThroughFilters(additional_filters, [hex], {page_type: "numlist"}) ) {
				// 	num_okay = false;						
				// }
		
			} while (!num_okay && try_num < MAX_TRIES_PER_NUM);
			
			if (num_okay) {

				numlist.push(hex);
				
				if (num_type === "hex") {
					if (len === 6) {
						hex = "<span style='background-color: #"+hex+";' class='num-icon'></span>" + hex;	
					}
				}

				result += "<div style='margin: 5px;' id='input_no'>" + hex + " " + "</div>";
			
			}

		}
                
//                                for (var i = 0; i < n; i++) { 
//			
//			var try_num = 0;
//			var num_okay = true;
//
//			do {
//
//				try_num++;
//
//				num_okay = true;
//
//				var decs = getNumbersArray({numbers: len, low: dec_low, high: dec_high, oddeven: 0, unique: 0, addfilters: additional_filters});
//				
//				var hex1 = "";				
//				for (var j = 0; j < decs.length; j++) {
//					hex1 += (decToHex(decs[j])).toUpperCase();						
//				}
//
//				//filter like contains all will need to be programmed
//				// //process number through additional filters
//				// if (!validateLineThroughFilters(additional_filters, [hex], {page_type: "numlist"}) ) {
//				// 	num_okay = false;						
//				// }
//		
//			} while (!num_okay && try_num < MAX_TRIES_PER_NUM);
//			
//			if (num_okay) {
//
//				numlist.push(hex1);
//				
//				if (num_type === "hex") {
//					if (len === 6) {
//						hex1 = "<span style='background-color: #"+hex1+";' class='num-icon'></span>" + hex;	
//					}
//				}
//
//				result += "<br><div style='margin: 5px;' id='input_no1'>" + hex1 + " " + "</div>";
//			
//			}
//
//		}
		
	}	
	
	download_numbers = numlist;

	return result;
		
}

function getNumbers(filters, csv) {

	var ret_numbers = "";

	logDummy("gn");	

	var separator = getSeparator(csv);

	var additional_filters = filters.addfilters || {};	

	filters.include = filters.include || [];
	filters.exclude = filters.exclude || [];

	//total numbers request originally
	//stopped + unstopped numbers
	var orig_numbers = filters.numbers;

	var numbers_generated = [];

	if (stopped_numbers.length > 0 && stopped_numbers.length < orig_numbers) {
		//if there are stopped_numbers
		//add them to exclude array only if unique requested		
		// if (filters.unique) {				
		// 	filters.exclude = _.union(filters.exclude, stopped_numbers);
		// }

		// //adjust total numbers to be generated
		// filters.numbers = filters.numbers - stopped_numbers.length;

		filters.stopped_numbers = stopped_numbers;	
		
	} 		

	if (stopped_numbers.length >= orig_numbers) {
		//all numbers have been stopped
		numbers_generated = stopped_numbers;
		resultStartStop();
	} else {

		//generate numbers
		var try_number = 0;
		var line_ok = true;
		
		do {
			
			try_number++;

			line_ok = true;

			
			// //setup magic filters
			// if (!_.isEmpty(additional_filters)) {
			// 	if (additional_filters["containsall"]) {
			// 		filters.include = _.union(filters.include, additional_filters["containsall"]);	
			// 	}
			// 	if (additional_filters["containsany"]) {

			// 		//generate a random from the "any" list
			// 		var rand_any = getNumbersArrayFromList({numbers: 1, oddeven: filters.oddeven, oddqty: filters.oddqty, unique: filters.unique, sorted: filters.sorted}, additional_filters["containsany"])

			// 		filters.include = _.union(filters.include, rand_any);

			// 	}	
			// 	if (additional_filters["containsnone"]) {

			// 		filters.exclude = _.union(filters.exclude, additional_filters["containsnone"]);
										
			// 	}
			// 	//console.log("filters.include");				
			// 	//console.log(filters.include);				
			// 	//console.log(additional_filters["containsall"]);
			// }

			//generate new numbers
			//excluding stopped numbers	
			numbers_generated = getNumbersArray (filters);

			//validate line - new numbers combined with stopped numbers
			var line_numbers = numbers_generated.concat(stopped_numbers); 

			//console.log("validatingg");

			//validate generated numbers through filters

			if (!_.isEmpty(additional_filters)) {
				//do not validate filters that have been programmed above
				//to avoid conflict e.g. containsany can conflict with containsnone
				if (!validateLineThroughFilters(additional_filters, line_numbers, {do_not_validate : ["containsall", "containsany", "containsnone"] } ) ) {
					line_ok = false;
					//console.log("valid false");
				}
			}

		} while(!line_ok && try_number <= MAX_TRIES_PER_LINE);

		if (try_number > MAX_TRIES_PER_LINE) { //coul
			//could not generate a valid line
			//console.log("lines stopping");
			//console.log(stopped_numbers);
			//console.log(numbers_generated);
			resultStartStop({forceStop: true});
			return "Try again...";


		}
	}	

	

	

	logDummy("ng" + numbers_generated.toString());	
	
	if (isArray(numbers_generated)) {
		//contains numbers

		if (
			(stop_one_requested || stopped_numbers.length > 0)
			&& stopped_numbers.length < orig_numbers
		) {
			
			//if stop one requested or 
			//if there are stopped_numbers i.e. stopone has been engaged
			//and if not all numbers have been generated 

			var new_nums = numbers_generated;

			if (stop_one_requested) {

				logDummy("nn " + new_nums.toString());
				var num = new_nums[0];

				//push the first new num to stopped_numbers
				stopped_numbers.push(num);	
				
				//remove the element from new nums
				new_nums = new_nums.slice(1);

				logDummy("nnn " + new_nums.toString());

				logDummy("sn " + stopped_numbers.toString());
				stop_one_requested = false;	
			} 

			logDummy("nnnn " + new_nums.toString());

			var combined_nums = [];

			if (stopnow_requested) {
				combined_nums = stopped_numbers.concat(numbers_generated).join(separator);
				stopnow_requested = false;
				logDummy('stopping');
				//give some time for these numbers to display 
				//before the loop is stopped
				//else there will be a time gap between the last numbers
				//and currently displayed numbers
				setTimeout(function(){
					resultStartStop({forceStop: true});
				}, 50);				
				
			} else {
				combined_nums = "<span class='stopped_numbers'>" + stopped_numbers.join(separator) + "</span>" + separator + new_nums.join(separator);
			}

			logDummy("cn " + combined_nums.toString());

			ret_numbers = combined_nums;

		} else {
			ret_numbers = numbers_generated.join(separator);
		}

	} else {
		//probably an error msg
		ret_numbers = numbers_generated;
	}

	//console.log(ret_numbers);
		
	return ret_numbers;

}

function buildFromSeed(r, low, high) {
	
	//scramble given string r to generate a number between low and high
	
	//select a rand from low to high
	var rn_1 = Math.floor(Math.random() * (high-low+1) + low);
	
	//digits in rn_1
	var p = rn_1.toString().length;	
	
	//build a p digit number from string r
	var rn = parseInt(r.toString().shuffle().slice(-p));
		
	if (rn >= low && rn <= high) { 
		//number ok	
	} else {
		//just return a rand number
		rn = rn_1;
	}
	
	return rn;
	
}

function getNumbersArrayFromList(filters, list){

	var numbers = filters.numbers;
	var oddeven = filters.oddeven;	
	var oddqty = filters.oddqty;
	var unique = filters.unique;
	var sorted = filters.sorted;
	var include = filters.include || [];
	var exclude = filters.exclude || [];	

	var this_stopped_numbers = filters.stopped_numbers || [];

	var additional_filters = filters.addfilters || {};

	if (typeof unique === "undefined") unique = true;
	if (typeof oddeven === "undefined") oddeven = "";
	if (typeof sorted === "undefined") sorted = false;


	var all_number_filters = getAdditionalFiltersThatApplyToAllNumbers(additional_filters);
	var count_number_filters = getAdditionalFiltersThatCountNumbers(additional_filters);

	//setup magic filters
	if (!_.isEmpty(additional_filters)) {

		//console.log("add filters in getNumbersArray");

		if (additional_filters["containsall"]) {
			include = _.union(include, additional_filters["containsall"]);	
		}
		if (additional_filters["containsany"]) {

			//generate a random from the "containsany" list
			var rand_any = getNumbersArrayFromList({numbers: 1, oddeven: oddeven, oddqty: oddqty, unique: unique, sorted: sorted}, additional_filters["containsany"])

			include = _.union(include, rand_any);

		}	
		if (additional_filters["containsnone"]) {

			exclude = _.union(exclude, additional_filters["containsnone"]);
								
		}
		
		if (additional_filters["prime_numbers"]) {

			//check how many prime numbers are already in the include list
			var primes_in_include_list = findPrimeNumbersInList(include);

			//replace include with only primes in the list
			include = primes_in_include_list;
							
		}
		
	}

	//remove numbers to exclude and stopped_numbers from include
	include = _.difference(include, exclude);
	include = _.difference(include, this_stopped_numbers);

	
	
	var oddeven_values = processOddEvenFilter(oddeven, oddqty, numbers);

	oddeven = oddeven_values[0];
	oddqty = oddeven_values[1];

	//separate lists of odd/even include numbers
	var oddevenlist = {};

	if (oddeven !== "" && include.length > 0) {
		var oddevenlist = getOddEvenElementsFromList(include);

		if (oddeven === "odd") {
			//keep only odd numbers to include
			include = oddevenlist.odd_list;
		} else if (oddeven === "even") {
			//keep only even numbers to include
			include = oddevenlist.even_list;
		}

	}

	// //this won't work anymore due to how the additional filters apply
	// //instead use these to actiavte the additional filters that work for odd/even
	// if (oddeven == "half_odd" || oddeven == "custom_odd" ) {

	// 	//RECURSIVE CALL TO getNumbersArrayList

	// 	var odd_arr = getNumbersArrayFromList({numbers: oddqty, oddeven: "odd", unique: unique, include: oddevenlist.odd_list, exclude: exclude}, list);

	// 	var even_arr = getNumbersArrayFromList({numbers: numbers-oddqty, oddeven: "even", unique: unique, include: oddevenlist.even_list, exclude: exclude}, list);		
		
	// 	var combined_arr = odd_arr.concat(even_arr);

	// 	if (sorted) {
	// 		sortArray(combined_arr);
	// 	} else {
	// 		shuffle(combined_arr);
	// 	}

	// 	return combined_arr;
	// }

	if (oddeven == "half_odd" || oddeven == "custom_odd" ) {
		//if not already present
		if (!additional_filters["odd_numbers_count"]) {
			//add this filter 
			additional_filters["odd_numbers_count"] = [oddqty];
		}
		
	}
	

	//list returned contains ranges
	//e.g. [1, 2, [5, 50], [20, 100]] 
	//create a weighted list as each item in the list is not of eqaul weight, ranges in the list have weight that is equal to items in the range

	var processedList = getMixedListCountAndWeights(list);

	var weighted_list = processedList.weighted_list;
	var total_weight = processedList.total_weight;
	var list_item_count = processedList.list_item_count;
	
	if (numbers > list_item_count){
		
		//numbers_content = "Too many numbers per line";
		unique = false; //more items than in the list, so assume not-unique requested
		
	} 		

	var numbers_generated = [];

	if (this_stopped_numbers && this_stopped_numbers.length > 0) {
		numbers_generated = numbers_generated.concat(this_stopped_numbers);
	}

	if (include && include.length > 0) {
		numbers_generated = numbers_generated.concat(include);
	}
	
	for (var i = numbers_generated.length; i< numbers; i++) {
				
		var number_okay = true;
		var try_num = 0;	
	
		var rand_num = "";
		
		do  {
			
			number_okay = true;	
			
			try_num++;

			//get a random value from a weighted list
			var rand_index =  weightedRands(1, weighted_list, total_weight)[0];

			var list_item = list[rand_index];
			
			if (isArray(list_item)) {
				//if list item is a range like [low, high]
				//then go one level down to get a random number from the range
				var sub_range_low = list_item[0];
				var sub_range_high = list_item[1];
				rand_num = getRandInt(sub_range_low, sub_range_high);
			} else {
				//else single item
				rand_num = list_item;
			}
			
			// rand_num = list_item;
			
			//console.log(rand_num);

			
			
			if (oddeven === "odd" && rand_num % 2 === 0) {
				number_okay = false; 
			} else if (oddeven === "even" && rand_num % 2 === 1) {
				number_okay = false; 
			} 


			if (!passesThroughAllElementFilters(rand_num, all_number_filters)) {
				number_okay = false;
			}

			if (!passesThroughCountElementFilters(rand_num, numbers_generated, numbers, count_number_filters)) {
				number_okay = false;
			}

			// if (!number_okay) {
			// 	// //console.log("notokay trying"+rand_indices[i]);
			
			// 	// rand_indices[i]++; //try a different index	
			// 	// if (rand_indices[i] >= list.length) {
			// 	// 	rand_indices[i] = 0;
			// 	// }
			// }	
			
			//if unique number required
			if (unique) {
				if (inArray(rand_num, numbers_generated)) { //not unique			
					number_okay = false; 
				}
			}//unique
			
			if(number_okay) {
				numbers_generated.push(rand_num);
			}					
	
		} while (!number_okay && try_num < MAX_TRIES_PER_NUM);
						
		//numbers_generated.push(rand_num);

	} 

	// if stopped_numbers numbers were added
	// remove them from the beginning of the array
	// before returning the new numbers
	if (this_stopped_numbers && this_stopped_numbers.length > 0) {
		numbers_generated = numbers_generated.slice(this_stopped_numbers.length);
	}
	
	if (sorted) {
		sortArray(numbers_generated);
	} else {
		//shuffle to shuffle the include numbers that always get added to the front of the array
		shuffle(numbers_generated);
	}

	//trim the array if the array generated is larger than the numbers requested
	//its possible because of the include filter
	if (numbers_generated.length > numbers) {
		numbers_generated = numbers_generated.slice(0, numbers);
	}

	return numbers_generated;

}

// function getNumbersArrayFromList_nonFilters(filters, list){

// 	var numbers = filters.numbers;
// 	var oddeven = filters.oddeven;	
// 	var oddqty = filters.oddqty;
// 	var unique = filters.unique;
// 	var sorted = filters.sorted;
// 	var include = filters.include || [];
// 	var exclude = filters.exclude || [];	

// 	var additional_filters = filters.addfilters || {};

// 	////console.log(include);	
// 	include = _.difference(include, exclude);

// 	//console.log("in getNumbersArrayFromList");

// 	if (typeof unique === "undefined") unique = true;
// 	if (typeof oddeven === "undefined") oddeven = "";
// 	if (typeof sorted === "undefined") sorted = false;

// 	var oddeven_values = processOddEvenFilter(oddeven, oddqty, numbers);
	
// 	oddeven = oddeven_values[0];
// 	oddqty = oddeven_values[1];

// 	//separate lists of odd/even include numbers
// 	var oddevenlist = {};

// 	if (oddeven !== "" && include.length > 0) {
// 		var oddevenlist = getOddEvenElementsFromList(include);

// 		if (oddeven === "odd") {
// 			//keep only odd numbers to include
// 			include = oddevenlist.odd_list;
// 		} else if (oddeven === "even") {
// 			//keep only even numbers to include
// 			include = oddevenlist.even_list;
// 		}

// 	}


// 	if (oddeven == "half_odd" || oddeven == "custom_odd" ) {

// 		//RECURSIVE CALL TO getNumbersArrayList

// 		var odd_arr = getNumbersArrayFromList({numbers: oddqty, oddeven: "odd", unique: unique, include: oddevenlist.odd_list, exclude: exclude}, list);

// 		var even_arr = getNumbersArrayFromList({numbers: numbers-oddqty, oddeven: "even", unique: unique, include: oddevenlist.even_list, exclude: exclude}, list);		
		
// 		var combined_arr = odd_arr.concat(even_arr);

// 		if (sorted) {
// 			sortArray(combined_arr);
// 		} else {
// 			shuffle(combined_arr);
// 		}

// 		return combined_arr;
// 	}
	

// 	//list returned contains ranges
// 	//e.g. [1, 2, [5, 50], [20, 100]] 
// 	//create a weighted list as each item in the list is not of eqaul weight, ranges in the list have weight that is equal to items in the range

// 	var processedList = getMixedListCountAndWeights(list);

// 	var weighted_list = processedList.weighted_list;
// 	var total_weight = processedList.total_weight;
// 	var list_item_count = processedList.list_item_count;
	
// 	if (numbers > list_item_count){
		
// 		//numbers_content = "Too many numbers per line";
// 		unique = false; //more items than in the list, so assume not-unique requested
		
// 	} 		

// 	var loaded_numbers = [];
	
// 	// var rand_indices = getRandInts(numbers, 0, list.length-1);	
// 	// var rand_indices = weightedRands(numbers, weighted_list, total_weight);

// 	for (i=0; i< numbers; i++){	
				
// 		var number_okay = true;
// 		var try_num = 0;	
	
// 		var rand_num = "";
		
// 		do  {
			
// 			number_okay = true;	
			
// 			try_num++;

// 			//get a random value from a weighted list
// 			var rand_index =  weightedRands(1, weighted_list, total_weight)[0];

// 			var list_item = list[rand_index];
			
// 			if (isArray(list_item)) {
// 				//if list item is a range like [low, high]
// 				//then go one level down to get a random number from the range
// 				var sub_range_low = list_item[0];
// 				var sub_range_high = list_item[1];
// 				rand_num = getRandInt(sub_range_low, sub_range_high);
// 			} else {
// 				//else single item
// 				rand_num = list_item;
// 			}
			
// 			// rand_num = list_item;
			
// 			//console.log(rand_num);

// 			//if unique number required
// 			if (unique) {
// 				if (inArray(rand_num, loaded_numbers)) { //not unique						
// 					number_okay = false; 
// 				}
// 			}//unique
			
// 			if (oddeven === "odd" && rand_num % 2 === 0) {
// 				number_okay = false; 
// 			} else if (oddeven === "even" && rand_num % 2 === 1) {
// 				number_okay = false; 
// 			} 
			
// 			// if (!number_okay) {
// 			// 	// //console.log("notokay trying"+rand_indices[i]);
			
// 			// 	// rand_indices[i]++; //try a different index	
// 			// 	// if (rand_indices[i] >= list.length) {
// 			// 	// 	rand_indices[i] = 0;
// 			// 	// }
// 			// }				
			
// 			if(number_okay) {
// 				loaded_numbers.push(rand_num);
// 			}					
	
// 		} while (!number_okay && try_num < MAX_TRIES_PER_NUM);
						
// 		//loaded_numbers.push(rand_num);

// 	} 
	
// 	if (sorted) {
// 		sortArray(loaded_numbers);
// 	}

// 	return loaded_numbers;

// }


// function getNumbersArrayFromList_20201230(filters, list){

// 	var numbers = filters.numbers;
// 	var oddeven = filters.oddeven;	
// 	var oddqty = filters.oddqty;
// 	var unique = filters.unique;
// 	var sorted = filters.sorted;	

// 	if (typeof unique === "undefined") unique = true;
// 	if (typeof oddeven === "undefined") oddeven = "";
// 	if (typeof sorted === "undefined") sorted = false;

// 	oddqty = oddqty == undefined ? -1 : parseInt(oddqty);

// 	if (oddeven == "custom_odd" && (oddqty == -1 || isNaN(oddqty))) {
// 		oddqty =  0;
// 		oddeven = "";
// 	} 

// 	if (oddeven == "half_odd" || oddeven == "custom_odd" ) {

// 		//calculate how many odd numbers
// 		if (oddeven == "half_odd") {
// 			oddqty = Math.ceil(0.5 * numbers);
// 		} else if (oddeven == "custom_odd") {
// 			if (oddqty < 0)  {
// 				oddqty = 0;
// 			} else if (oddqty > numbers)  {
// 				oddqty = numbers;
// 			}			
// 		}

// 		var odd_arr = getNumbersArrayFromList({numbers: oddqty, oddeven: "odd", unique: unique}, list);
// 		var even_arr = getNumbersArrayFromList({numbers: numbers-oddqty, oddeven: "even", unique: unique}, list);		
		
// 		var combined_arr = odd_arr.concat(even_arr);

// 		if (sorted) {
// 			sortArray(combined_arr);
// 		} else {
// 			shuffle(combined_arr);
// 		}

// 		return combined_arr;
// 	}



	

// 	//list returned contains ranges
// 	//e.g. [1, 2, [5, 50], [20, 100]] 
// 	//create a weighted list as each item in the list is not of eqaul weight, ranges in the list have weight that is equal to items in the range
	

// 	var processedList = getMixedListCountAndWeights(list);

// 	var weighted_list = processedList.weighted_list;
// 	var total_weight = processedList.total_weight;
// 	var list_item_count = processedList.list_item_count;
	
// 	if (numbers > list_item_count){
		
// 		//numbers_content = "Too many numbers per line";
// 		unique = false; //more items than in the list, so assume not-unique requested
		
// 	} 		

// 	var loaded_numbers = [];
	
// 	// var rand_indices = getRandInts(numbers, 0, list.length-1);	
// 	// var rand_indices = weightedRands(numbers, weighted_list, total_weight);

// 	for (i=0; i< numbers; i++){	
				
// 		var number_okay = true;
// 		var try_num = 0;	
	
// 		var rand_num = "";
		
// 		do  {
			
// 			number_okay = true;	
			
// 			try_num++;

// 			//get a random value from a weighted list
// 			var rand_index =  weightedRands(1, weighted_list, total_weight)[0];

// 			var list_item = list[rand_index];
			
// 			if (isArray(list_item)) {
// 				//if list item is a range like [low, high]
// 				//then go one level down to get a random number from the range
// 				var sub_range_low = list_item[0];
// 				var sub_range_high = list_item[1];
// 				rand_num = getRandInt(sub_range_low, sub_range_high);
// 			} else {
// 				//else single item
// 				rand_num = list_item;
// 			}
			
// 			// rand_num = list_item;
			
// 			//console.log(rand_num);

// 			//if unique number required
// 			if (unique) {
// 				if (inArray(rand_num, loaded_numbers)) { //not unique						
// 					number_okay = false; 
// 				}
// 			}//unique
			
// 			if (oddeven === "odd" && rand_num % 2 === 0) {
// 				number_okay = false; 
// 			} else if (oddeven === "even" && rand_num % 2 === 1) {
// 				number_okay = false; 
// 			} 
			
// 			// if (!number_okay) {
// 			// 	// //console.log("notokay trying"+rand_indices[i]);
			
// 			// 	// rand_indices[i]++; //try a different index	
// 			// 	// if (rand_indices[i] >= list.length) {
// 			// 	// 	rand_indices[i] = 0;
// 			// 	// }
// 			// }				
			
// 			if(number_okay) {
// 				loaded_numbers.push(rand_num);
// 			}					
	
// 		} while (!number_okay && try_num < MAX_TRIES_PER_NUM);
						
// 		//loaded_numbers.push(rand_num);

// 	} 
	
// 	if (sorted) {
// 		sortArray(loaded_numbers);
// 	}

// 	return loaded_numbers;

// }


function processOddEvenFilter(oddeven, oddqty, numbers){

	oddeven = oddeven == undefined ? "" : oddeven;
	oddqty = oddqty == undefined ? -1 : parseInt(oddqty);

	if (oddeven == "custom_odd" && (oddqty == -1 || isNaN(oddqty))) {
		oddqty =  -1;
		oddeven = "";
	} 

	//reset oddqty to -1 if oddeven set to blank
	if (oddeven == "") {
		oddqty = -1;
	}

	if (oddeven == "even") {
		oddqty = 0; 
	}

	if (oddeven == "half_odd" || oddeven == "custom_odd" ) {

		//calculate how many odd numbers
		if (oddeven == "half_odd") {
			oddqty = Math.ceil(0.5 * numbers);
		} else if (oddeven == "custom_odd") {
			if (oddqty < 0)  {
				oddqty = 0;
			} else if (oddqty > numbers)  {
				oddqty = numbers;
			}			
		}
	}

	return [oddeven, oddqty];

}

function getNumbersArray (filters) {

	var numbers = filters.numbers;
	var low = filters.low;
	var high = filters.high;
	var oddeven = filters.oddeven;	
	var oddqty = filters.oddqty;
	var unique = filters.unique;
	var sorted = filters.sorted;
	var include = filters.include || [];
	var exclude = filters.exclude || [];

	var this_stopped_numbers = filters.stopped_numbers || [];

	var additional_filters = filters.addfilters || {};

//console.log(additional_filters);

	if (typeof unique === "undefined") unique = true;
	if (typeof oddeven === "undefined") oddeven = "";
	if (typeof sorted === "undefined") sorted = false;

	
	var all_number_filters = getAdditionalFiltersThatApplyToAllNumbers(additional_filters);
	var count_number_filters = getAdditionalFiltersThatCountNumbers(additional_filters);

	//setup magic filters
	if (!_.isEmpty(additional_filters)) {

		//console.log("add filters in getNumbersArray");

		if (additional_filters["containsall"]) {
			include = _.union(include, additional_filters["containsall"]);	
		}
		if (additional_filters["containsany"]) {

			//generate a random from the "containsany" list
			var rand_any = getNumbersArrayFromList({numbers: 1, oddeven: oddeven, oddqty: oddqty, unique: unique, sorted: sorted}, additional_filters["containsany"])

			include = _.union(include, rand_any);

		}	
		if (additional_filters["containsnone"]) {

			exclude = _.union(exclude, additional_filters["containsnone"]);
								
		}
		
		if (additional_filters["prime_numbers"]) {

			//check how many prime numbers are already in the include list
			var primes_in_include_list = findPrimeNumbersInList(include);

			//replace include with only primes in the list
			include = primes_in_include_list;
							
		}
		
	}

	//remove numbers to exclude and stopped_numbers from include
	include = _.difference(include, exclude);
	include = _.difference(include, this_stopped_numbers);

	
	
	var oddeven_values = processOddEvenFilter(oddeven, oddqty, numbers);

	oddeven = oddeven_values[0];
	oddqty = oddeven_values[1];

	//separate lists of odd/even include numbers
	var oddevenlist = {};

	if (oddeven !== "" && include.length > 0) {
		var oddevenlist = getOddEvenElementsFromList(include);

		if (oddeven === "odd") {
			//keep only odd numbers to include
			include = oddevenlist.odd_list;
		} else if (oddeven === "even") {
			//keep only even numbers to include
			include = oddevenlist.even_list;
		}

	}


	// //this won't work anymore due to how the additional filters apply
	// //instead use these to actiavte the additional filters that work for odd/even
	// if (oddeven == "half_odd" || oddeven == "custom_odd" ) {

	// 	//RECURSIVE CALL TO getNumbersArray

	// 	// send additional filters that can be applied to all numbers

	// 	var odd_arr = getNumbersArray ({numbers: oddqty, low: low, high: high, oddeven: "odd", unique: unique, include: oddevenlist.odd_list, exclude: exclude, addfilters: all_number_filters, stopped_numbers: this_stopped_numbers});

	// 	var even_arr = getNumbersArray ({numbers: numbers-oddqty, low: low, high: high, oddeven: "even", unique: unique, include: oddevenlist.even_list, exclude: exclude, addfilters: all_number_filters, stopped_numbers: this_stopped_numbers});
		
	// 	var combined_arr = odd_arr.concat(even_arr);
		
	// 	if (sorted) {
	// 		sortArray(combined_arr);
	// 	} else {
	// 		shuffle(combined_arr);
	// 	}

	// 	return combined_arr;
	// }


	
	if (oddeven == "half_odd" || oddeven == "custom_odd" ) {
		//if not already present
		if (!additional_filters["odd_numbers_count"]) {
			//add this filter 
			additional_filters["odd_numbers_count"] = [oddqty];
		}
		
	}

	var reverse_generate = false;
	
	//changed to parseFloat to allow for large numbers
	numbers = parseFloat(numbers);
	low = parseFloat(low);
	high = parseFloat(high);	
	
	var range = high-low+1;

	
	//assume range is odd
	var odd_numbers_in_range = Math.floor(range/2);
	var even_numbers_in_range = odd_numbers_in_range;
	
	if (range % 2 == 1) { //if range is odd
		if (low % 2 == 0) { //if begins with an even number
			even_numbers_in_range++;	
		} else {
			odd_numbers_in_range++;	
		}
	} 
	

	if (numbers > range) { 
		unique = false;
	}		
	
	if (oddeven === "odd" && numbers > odd_numbers_in_range) {
		unique = false;
	}
	
	if (oddeven === "even" && numbers > even_numbers_in_range) {
		unique = false;
	}
	
	
	if (unique) {
		var MAX_NUMBERS = 100000;
	} else {
		var MAX_NUMBERS = 10000000;
	}
	
	
	if (numbers > MAX_NUMBERS) {
		return accessibilityMsg("Too many numbers");
	}
	
	
	// if (unique && numbers > ((high - low)/2) ){
	// 	//generating more than half
	// 	//then reverse and generate numbers to exclude
		
	// 	//reverse generate only if no odd even selections are made
	// 	//else it wont work
	// 	if (oddeven === "" && include.length == 0 && exclude.length == 0) {
	// 		numbers = range - numbers;
	// 		reverse_generate = true;
	// 	}		
		
	// }	

	//reverse generate not working with additonal filters
	//turn it off for now
	reverse_generate = false;

	var numbers_generated = [];

	if (this_stopped_numbers && this_stopped_numbers.length > 0) {
		numbers_generated = numbers_generated.concat(this_stopped_numbers);
	}

	if (include && include.length > 0) {
		numbers_generated = numbers_generated.concat(include);
	}
	
	var number_okay = true;
	var tried_all_possible_numbers = false;
	var next_number_in_sequence = low;
	var switch_to_every_possible_number = false;
	
	for (var i = numbers_generated.length; i< numbers; i++) {
	
		//these are used when switching to the every possible number scenario
		//where a random number could not be generated in MAX_TRIES
		switch_to_every_possible_number = false;
		next_number_in_sequence = low;
		tried_all_possible_numbers = false;

		var try_num = 0;	
				
		do  {
			
			number_okay = true;	
			
			try_num++;			
									
			var rand_num = 0;	
			
			if (!switch_to_every_possible_number) {

				//try random number

				var temp_high = high;
				var temp_low = low;

				if (additional_filters["sum_of_numbers"]){	

					//adjust the total sum needed by the 
					//sum of numbers that might already be selected in the loop
					var total_sum_needed = additional_filters["sum_of_numbers"][0];					

					if (!unique) {
						if (total_sum_needed < low*numbers || total_sum_needed > high*numbers)  
						{
							//sum not possible when not unique
							return [];
						}
					} else {
						var lowest_possible_sum = Number(rangeSum(low, low+numbers-1));
						var largest_possible_sum = Number(rangeSum(high-numbers+1, high));
						//console.log("largest_possible_sum", largest_possible_sum);
						if (total_sum_needed < lowest_possible_sum || total_sum_needed > largest_possible_sum)  
						{
							//sum not possible
							return [];
						}
					}

					var sum_so_far = arrayStats(numbers_generated)["sum"];
					var sum_remaining = total_sum_needed - sum_so_far;
					var numbers_remaining = numbers - numbers_generated.length;

					var avg_needed = sum_remaining / numbers_remaining;

					//this does not work because all numbers generted are close to avg
					// temp_low = Math.ceil(avg_needed - (numbers_remaining /2));
					// temp_high = Math.ceil(avg_needed + (numbers_remaining /2));
					
					// //console.log(temp_low, temp_high);

					// the least value that can be alloted to 
					// numbers_remaining-1 numbers
					// e.g. 
					// total sum = 100
					// 90, y, x1, x2, x3
					// so the minimum that can be allotted to x1, x2, x3 is 3,2,1 -> 6, so y needs to pick a value from 1-4.

					
					//this min_alloted uses the sum of least numbers from low to low+numbers_remaining-1-1, even if one those numbers have already been used

					//rangeSum returns bigint so need to convert back to number
					// var min_allotted = unique ? Number(rangeSum(low, low+numbers_remaining-1-1)) : low*(numbers_remaining-1);

					//we can modify min_allotted to use the lowest numbers that haven't been used yet
					var mins_list = getNLowestNumbersFrom(numbers_remaining-1, low, high, numbers_generated);

					var min_allotted = unique ? arraySum(mins_list) : low*(numbers_remaining-1);

					//so y needs to pick a number between low and ( total_sum_needed - min_allotted - sum_so_far)
					temp_high = total_sum_needed - sum_so_far - min_allotted;

					
					//if low numbers are generated at the beginning,
					//we wont be able to achieve the total sum by the time we reach the last number

					//so try to maintain the average by selecting a number that is above the average needed according to the total_sum and numbers
					// temp_low = Math.floor((avg_needed);

					//or try to include the numbers a little bit below the avg..
					//by spreading the average by a factor of numbers_remaining
					temp_low = Math.ceil(avg_needed - (numbers_remaining /2));

					// if (numbers_remaining > 1) {
					// temp_low = Math.ceil(temp_low - (numbers_remaining/2)) + 1; //to try a bigger range
					// }

					/* this works but not needed as the calculation of possible numbers is done above now
					// //the min required high range for this spot is the max value that can go in this spot
					// //e.g. x5, x4, x3, x2, x1 
					// //unique: x5 must take a value between 'low' and at least 'low+5-1' (so the min high range for x5 is 'low+5-1')
					// //non-unique: x5 must take value greater than equal to low, 
					// var min_high = unique ? low+numbers_remaining-1 : low;					
					// if (temp_high < min_high) {
					// 	//console.log("temp high too low");
					// 	return [];
					// }
					*/

					
					temp_high = minOf(temp_high, high);
					temp_high = maxOf(temp_high, low);

					temp_low = maxOf(temp_low, low);
					temp_low = minOf(temp_low, high);

					if (numbers_remaining == 1) {
						
						//at this point temp_high and temp_low will be equal to the sum_remaining
						//however if this number has already been picked then it will just loop endlessly and then fail
						if (temp_high == temp_low && inArray(temp_high, numbers_generated)) {
							//console.log("will loop forever");
							return [];
						}

						//if this last remaining number 
						//is already added, there is no point of trying this again a 1000 times
						//return an empty []
						
					}

				}

				//console.log(temp_low, temp_high);

				var use_seed_to_build = Math.floor( Math.random() * (5-0+1) + 0) === 0 ? true : false; //use seed to build (prob of 1/6), or use the generator 

				if (use_seed_to_build && init_r1.length > 0) {
					//add true randomness by building a number from a server seed
					rand_num = buildFromSeed(init_r1, temp_low, temp_high);			
				} else {
					
					//add true randomness
					//get current time in milliseconds, fetch last 5 digits, shuffle them and then pick the last digit
					//use this last digit to iterate 'digit' many times to get the next random number
					var d = Date.now();
		
					d = d+init_true_seed;
		
					var slice_factor = 1;
					if (numbers < 6) {
						slice_factor = 2;
					}
					var true_random_pos = parseInt(d.toString().shuffle().slice(-slice_factor)) + 1 ; //add 1 to avoid '0' as loop wont run at all		
			
					for (var r=0; r<true_random_pos; r++) {				
						var mrand = Math.random();				
						rand_num = Math.floor(mrand * (temp_high-temp_low+1) + temp_low);	
					}
				}
				
			} else {

				//could not generate a valid random number
				//trying all numbers in sequence				
				rand_num = next_number_in_sequence++;

			}
									
			
			//oddeven
			if (oddeven === "odd" && rand_num % 2 == 0) {
				if (rand_num == high) {						
					rand_num = rand_num - 1;
				} else {
					rand_num = rand_num + 1;
				}
			} else if (oddeven === "even" && rand_num % 2 == 1) {
				if (rand_num == high) {						
					rand_num = rand_num - 1;
				} else {
					rand_num = rand_num + 1;
				}
			} 


			// if (minSumOfDigits(rand_num+"") != 9) {
			// 	number_okay = false;
			// }
			
			// else if (oddeven === "half_odd") {
				
			// 	//make sure numbers at odd indexes are odd and even indexes are even
			// 	//but since there are more even indexes in unsymmetric ranges (since index starts at 0)
			// 	//we make sure that even indexes are odd and odd indexes are even
								
			// 	if (i % 2 == 1) { //odd index
					
			// 		if (rand_num % 2 == 1) {//and odd number, change to even number
			// 			if (rand_num == high) {						
			// 				rand_num = rand_num - 1;
			// 			} else {
			// 				rand_num = rand_num + 1;
			// 			}
			// 		}
					
			// 	} else { //even index
					
			// 		if (rand_num % 2 == 0) {//and even number, change to odd number
			// 			if (rand_num == high) {						
			// 				rand_num = rand_num - 1;
			// 			} else {
			// 				rand_num = rand_num + 1;
			// 			}
			// 		}
					
					
			// 	}
				
			// } 	

			
			// if (additional_filters["prime_numbers"]) {
			// 	//if all numbers prime 
			// 	//console.log("is number prime");
			// 	if (!isPrime(rand_num)) {
			// 		number_okay = false;
			// 	}
			// }

			if (!passesThroughAllElementFilters(rand_num, all_number_filters)) {
				number_okay = false;
			}

			if (!passesThroughCountElementFilters(rand_num, numbers_generated, numbers, count_number_filters)) {
				number_okay = false;
			}
			
						
			//if unique number required
			if (unique) {
				if (inArray(rand_num, numbers_generated)) { //not unique
					number_okay = false;
				}
			}	
			
			if (!reverse_generate) {
				if (exclude && exclude.length > 0) {
					if (exclude.indexOf(rand_num) >= 0) {
						number_okay = false;
					}
				}
			}
		
			/*
			//randomly decide to keep or skip this number
			//in an attempt to add more randomness
			var keep = Math.floor(Math.random() * (4-1+1) + 1);		
			if (keep == 4) { //1/4 probability of keeping
				number_okay = false;
			}*/

			if (!switch_to_every_possible_number && try_num >= MAX_TRIES_PER_NUM-3) {
				//could not generate a random number
				//try every possible number

				switch_to_every_possible_number = true;

				//set low as the first number in sequence
				next_number_in_sequence = low;
				
			}
			
			if (next_number_in_sequence >= high){
				//tried all possible numbers
				tried_all_possible_numbers = true;	
			}
			
			//console.log("getNumbersArray dowhile ", number_okay, numbers_generated, try_num, switch_to_every_possible_number,  tried_all_possible_numbers );

		} while (!number_okay && !tried_all_possible_numbers) ; //while a valid number is not found
		
		if (number_okay) {
			numbers_generated.push(rand_num);
		}

		//console.log("getNumbersArray for" , i, numbers_generated);
	
	}
	
	if (reverse_generate) {
		//exclude the numbers that are actually generated 
		//console.log("reverse generating");
		var reverse_set = [];
		for (var i = low; i<= high; i++) {
			if (numbers_generated.indexOf(i)>=0) {
				//exclude	
			} else {
				reverse_set.push(i);	
			}
		}
		
		numbers_generated = reverse_set;
		
		shuffle(numbers_generated);
				
	}	
	
	//download_numbers = numbers_generated;

	//console.log("numbers_generated1 ", numbers_generated)

	// if stopped_numbers numbers were added
	// remove them from the beginning of the array
	// before returning the new numbers
	if (this_stopped_numbers && this_stopped_numbers.length > 0) {
		numbers_generated = numbers_generated.slice(this_stopped_numbers.length);
	}

	//console.log("numbers_generated2 ", numbers_generated)

	if (sorted) {
		sortArray(numbers_generated);
	} else {
		//shuffle to shuffle the include numbers that always get added to the front of the array
		shuffle(numbers_generated);
	}

	//console.log("numbers_generated3 ", numbers_generated)

	//trim the array if the array generated is larger than the numbers requested
	//its possible because of the include filter
	if (numbers_generated.length > numbers) {
		numbers_generated = numbers_generated.slice(0, numbers);
	}
	
	//console.log("numbers_generated ", numbers_generated)

	return numbers_generated;
	
}

// function _getNumbersArray_reverseGenerate (numbers, low, high, oddeven, unique) {

// 	var reverse_generate = false;
	
// 	//changed to parseFloat to allow for large numbers
// 	numbers = parseFloat(numbers);
// 	low = parseFloat(low);
// 	high = parseFloat(high);	
	
// 	var range = high-low+1;
	
// 	var MAX_TRIES_PER_NUM = 100;
	
// 	//assume range is odd
// 	var odd_numbers_in_range = Math.floor(range/2);
// 	var even_numbers_in_range = odd_numbers_in_range;
	
// 	if (range % 2 == 1) { //if range is odd
// 		if (low % 2 == 0) { //if begins with an even number
// 			even_numbers_in_range++;	
// 		} else {
// 			odd_numbers_in_range++;	
// 		}
// 	} 
	

// 	if (numbers > range) { 
// 		unique = false;
// 	}		
	
// 	if (oddeven === "odd" && numbers > odd_numbers_in_range) {
// 		unique = false;
// 	}
	
// 	if (oddeven === "even" && numbers > even_numbers_in_range) {
// 		unique = false;
// 	}
	
	
// 	if (unique) {
// 		var MAX_NUMBERS = 100000;
// 	} else {
// 		var MAX_NUMBERS = 10000000;
// 	}
	
	
// 	if (numbers > MAX_NUMBERS) {
// 		return accessibilityMsg("Too many numbers");
// 	}
	
	
// 	if (unique && numbers > ((high - low)/2) ){
// 		//generating more than half
// 		//then reverse and generate numbers to exclude
		
// 		//reverse generate only if no odd even selections are made
// 		//else it wont work
// 		if (oddeven === "" ) {
// 			numbers = range - numbers;
// 			reverse_generate = true;
// 		}		
		
// 	}
	
	
// 	var numbers_generated = [];

// 	var number_okay = true;
	
// 	for (var i = 0; i< numbers; i++) {
	
// 		var try_num = 0;	
				
// 		do  {
			
// 			try_num++;	
			
// 			number_okay = true;		
									
// 			var rand_num = 0;	
					
									
// 			var use_seed_to_build = Math.floor( Math.random() * (5-0+1) + 0) === 0 ? true : false; //use seed to build (prob of 1/6), or use the generator 

// 			if (use_seed_to_build && init_r1.length > 0) {
// 				//add true randomness by building a number from a server seed
// 				rand_num = buildFromSeed(init_r1, low, high);			
// 			} else {
				
// 				//add true randomness
// 				//get current time in milliseconds, fetch last 5 digits, shuffle them and then pick the last digit
// 				//use this last digit to iterate 'digit' many times to get the next random number
// 				var d = Date.now();
	
// 				d = d+init_true_seed;
	
// 				var slice_factor = 1;
// 				if (numbers < 6) {
// 					slice_factor = 2;
// 				}
// 				var true_random_pos = parseInt(d.toString().shuffle().slice(-slice_factor)) + 1 ; //add 1 to avoid '0' as loop wont run at all		
		 
// 				for (var r=0; r<true_random_pos; r++) {				
// 					var mrand = Math.random();				
// 					rand_num = Math.floor(mrand * (high-low+1) + low);	
// 				}
// 			}
			
// 			//oddeven
// 			if (oddeven === "odd" && rand_num % 2 == 0) {
// 				if (rand_num == high) {						
// 					rand_num = rand_num - 1;
// 				} else {
// 					rand_num = rand_num + 1;
// 				}
// 			} else if (oddeven === "even" && rand_num % 2 == 1) {
// 				if (rand_num == high) {						
// 					rand_num = rand_num - 1;
// 				} else {
// 					rand_num = rand_num + 1;
// 				}
// 			} else if (oddeven === "half_odd") {
				
// 				//make sure numbers at odd indexes are odd and even indexes are even
// 				//but since there are more even indexes in unsymmetric ranges (since index starts at 0)
// 				//we make sure that even indexes are odd and odd indexes are even
								
// 				if (i % 2 == 1) { //odd index
					
// 					if (rand_num % 2 == 1) {//and odd number, change to even number
// 						if (rand_num == high) {						
// 							rand_num = rand_num - 1;
// 						} else {
// 							rand_num = rand_num + 1;
// 						}
// 					}
					
// 				} else { //even index
					
// 					if (rand_num % 2 == 0) {//and even number, change to odd number
// 						if (rand_num == high) {						
// 							rand_num = rand_num - 1;
// 						} else {
// 							rand_num = rand_num + 1;
// 						}
// 					}
					
					
// 				}
				
// 			} 	
			
// 			//if unique number required
// 			if (unique) {
// 				if (numbers_generated.indexOf(rand_num)>=0) {
// 					number_okay = false;
// 				}
// 			}				
		
// 			/*
// 			//randomly decide to keep or skip this number
// 			//in an attempt to add more randomness
// 			var keep = Math.floor(Math.random() * (4-1+1) + 1);		
// 			if (keep == 4) { //1/4 probability of keeping
// 				number_okay = false;
// 			}*/
			
// 		} while (!number_okay && try_num < MAX_TRIES_PER_NUM); //while a unique number is not found
	
// 		numbers_generated.push(rand_num);
	
// 	}

	
	
// 	if (reverse_generate) {
// 		//exclude the numbers that are actually generated 
// 		var reverse_set = [];
// 		for (var i = low; i<= high; i++) {
// 			if (numbers_generated.indexOf(i)>=0) {
// 				//exclude	
// 			} else {
// 				reverse_set.push(i);	
// 			}
// 		}
		
// 		numbers_generated = reverse_set;
		
// 		shuffle(numbers_generated);
				
// 	}	
	
// 	//download_numbers = numbers_generated;
	
// 	return numbers_generated;
	
// }

function landOnEdge(){

	if (getRandInt(1, SIDEPROB) === 1) {
		return true;
	} else {
		return false;
	}

}

function getHTLabel(side){
	side = parseInt(side);
	return side === 1 ? "Heads" : (side === 2 ? "Tails" : "Edge");
}

function getCoinSide(allow_side_landing){

	if (typeof allow_side_landing == "undefined") {
		allow_side_landing = true;
	}

	if (allow_side_landing && landOnEdge()) {
		//return side 
		return 3;
	} else {
		//return a number between 1 and 2
		return getNumbersArray({numbers: 1, low: 1, high: 2})[0];
	}

}

function parseAdditionalFilters(sets_string) {
	var sets = [];
	if (sets_string) {
		sets = sets_string.split(ADDITIONAL_SET_SEPARATOR);
	}
	return sets;
}


function getSets(sets_string) {
	var sets = [];
	if (sets_string) {
		sets = sets_string.split(ADDITIONAL_SET_SEPARATOR);
	}
	return sets;
}

//format sets for combinator
function getFormattedSets(sets){

	var formatted_sets_str = "";
	for (var s = 0; s<sets.length; s++) {
		var set_params = sets[s].split("-");
		//change numbers-low-high to -> numbers{low-high}
		//e.g. 2-1-12 -> 2{1-12}
		formatted_sets_str += " " + ADDITIONAL_SET_SEPARATOR + " " + set_params[0] + "{"+ set_params[1]+"-"+set_params[2] + "}";	
	}
	//then connect each set with a +
	//e.g. 2-1-12 and 3-1-24 -> +2{1-12} +3{1-24}
	return formatted_sets_str;
}

function getSetsString(sets){
	var s_arr = [];
	for (var as = 0; as < sets.length; as++ ) {
		var set_string = sets[as].join("-"); //get numbers, low and high
		s_arr.push(set_string);
	}
	return s_arr.join(ADDITIONAL_SET_SEPARATOR).trim();
}

function getAdditionalFiltersString(sets){
	var s_arr = [];
	for (var as in sets) {
		if (as) { //not empty
		var set_string = as + ADDITIONAL_FILTERS_SEPARATOR + sets[as];
		//console.log(set_string);
		s_arr.push(set_string);
	}
	}
	return s_arr.join(ADDITIONAL_SET_SEPARATOR).trim();
}

function getCodeAppendedUrl(url){

	var ret_url = url;

	var r = safeParseInt(getUrlParameter("code"));

	if (r >= MAX_CODE_PAGES) {
		r = 0;
	} else {
		r++;	
	}
	
	if (r) {
		ret_url = url + "?code=" + r;
	}

	return ret_url;
}

function handleShortcutClick(obj){

	if (obj.data("type") == "dice") {	
		
		setHashData("numbers="+obj.data("nums"));

	}
}

function uniqueNumbersPossible(numbers, low, high, oddeven){

	var unique = true;

	numbers = parseFloat(numbers);
	low = parseFloat(low);
	high = parseFloat(high);	
	
	var range = high-low+1;

	//assume range is odd
	var odd_numbers_in_range = Math.floor(range/2);
	var even_numbers_in_range = odd_numbers_in_range;
	
	if (range % 2 == 1) { //if range is odd
		if (low % 2 == 0) { //if begins with an even number
			even_numbers_in_range++;	
		} else {
			odd_numbers_in_range++;	
		}
	} 
	

	if (numbers > range) { 
		unique = false;
	}		
	
	if (oddeven === "odd" && numbers > odd_numbers_in_range) {
		unique = false;
	}
	
	if (oddeven === "even" && numbers > even_numbers_in_range) {
		unique = false;
	}

	return unique;

}

// JSFILE result_area_js.js 

var download_numbers; 

var user_event;

var DICE_LINK = "/dice";
var RNP_LINK = "/randomnumber";
var LEFTRIGHT_LINK = "/randomdirection";
var UPDOWN_LINK = "/randomupdown";
var TF_LINK = "/randomtruefalse";
var _01_LINK = "/random0or1";
var AB_LINK = "/random-decision-A-or-B";
var ABC_LINK = "/random-decision-A-B-or-C";
var YESNO_LINK = "/random-yes-or-no";
var CT_LINK = "/coin-toss";
var HT_LINK = "/random-heads-or-tails";

var ADDITIONAL_SET_SEPARATOR = "|"
var ADDITIONAL_FILTERS_SEPARATOR = "-val-"

var MAX_LINES_TO_PRELOAD = 5;
var MAX_LINES_TO_PRELOAD_COMBINATOR = 100;
var MAX_SETS_TO_PRELOAD = 10;
var MAXLINES = 100000;
var BULK_BATCH_LIMIT = 10000000; 

var ADDITIONAL_FILTERS_GROUPS = {
	"Set of numbers": { filters: ["containsall", "containsany", "containsnone"] },
	"Each number": { filters: ["digits_containsall", "digits_containsany", "digits_containsnone", "startswith", "endswith"] },
	"Sum": { filters: ["sum_of_numbers", "sum_of_digits", "sum_of_digits_all"] },
	"Odd/Prime": { filters: ["odd_numbers_count", "prime_numbers", "prime_digits", "prime_numbers_count", "prime_numbers_atleast"] },
	"Division": { filters: ["numbers_divisible", "numbers_divisible_all", "numbers_divisible_not"] },
	"Sequences": { filters: ["consecutive_countatmost", "consecutive_countatleast", "consecutive_seqatmost", "consecutive_seqatleast", "consecutive_1seqatmost"] },

}

//numlist_use_type = "digits" //number will be split into digits and filter executed
var ADDITIONAL_FILTERS = {
	"containsall": { title: "Contain All of", func: filter_containsAll, numlist_display: false },
	"containsany": { title: "Contain Any of", func: filter_containsAny, numlist_display: false },
	"containsnone": { title: "Do not contain any of ", func: filter_containsNone },

	//filters that work on each number as string

	"digits_containsall": { title: "Contains All of", func: filter_digits_containsAll, filter_type: "all", number_filter_func: filter_elemContainsAll, numlist_use_type: "string", },
	"digits_containsany": { title: "Contains Any of", func: filter_digits_containsAny, filter_type: "all", number_filter_func: filter_elemContainsAny, numlist_use_type: "string" },
	"digits_containsnone": { title: "Does not contain any of ", func: filter_digits_containsNone, filter_type: "all", number_filter_func: filter_elemContainsNone, numlist_use_type: "string" },


	"startswith": { title: "Starts with", func: filter_startsWith, filter_type: "all", number_filter_func: filter_elemStartsWith, numlist_use_type: "string" },
	"endswith": { title: "Ends with", func: filter_endsWith, filter_type: "all", number_filter_func: filter_elemEndsWith, numlist_use_type: "string" },

	/////////////


	"odd_numbers_count": { title: "Count of odd numbers is ", func: filter_countOfOddNumbersIs, filter_type: "count", number_filter_func: filter_isOdd, count_number_func: filter_countOddNumbers, numlist_use_type: "digits", numlist_title: "Count of odd digits is " },

	"numbers_divisible": { title: "Divisible by any of ", func: filter_allNumbersAreDivisibleByAnyFromList, filter_type: "all", number_filter_func: filter_isDivisibleByAnyFromList},
	"numbers_divisible_all": { title: "Divisible by all of", func: filter_allNumbersAreDivisibleByAllFromList, filter_type: "all", number_filter_func: filter_isDivisibleByAllFromList},
	"numbers_divisible_not": { title: "Not Divisible by any of", func: filter_allNumbersAreNotDivisibleByAnyFromList, filter_type: "all", number_filter_func: filter_isNotDivisibleByAnyFromList},

	"sum_of_numbers": { title: "Sum of all numbers is ", func: filter_sumOfAllNumbersIs, numlist_use_type: "digits", numlist_title: "Sum of all digits is ", when_one_number: "sum_of_digits" },
	"sum_of_digits": { title: "Digit sum of all numbers (together) is ", func: filter_sumOfAllDigitsIs, numlist_use_type: "digits", numlist_title: "Digit sum of all digits is " },
	"sum_of_digits_all": { title: "Digit sum of every number (individual) is ", func: filter_digitSumOfEveryNumberIs, filter_type: "all", number_filter_func: filter_digitSumIs, numlist_use_type: "digits", numlist_display: false },

	"consecutive_countatmost": { title: "Consecutive numbers in a sequence at most", func: filter_consecutiveNumbersAtMost, numlist_use_type: "digits",  numlist_title: "Consecutive digits in a sequence at most " },
	"consecutive_countatleast": { title: "Consecutive numbers in a sequence at least", func: filter_consecutiveNumbersAtLeast, numlist_use_type: "digits", numlist_title: "Consecutive digits in a sequence at least" },
	"consecutive_seqatmost": { title: "Consecutive sequences at most", func: filter_consecutiveSequencesAtMost, numlist_use_type: "digits" },
	"consecutive_seqatleast": { title: "Consecutive sequences at least", func: filter_consecutiveSequencesAtLeast, numlist_use_type: "digits" },
	"consecutive_1seqatmost": { title: "At most one consecutive sequence of at most ", func: filter_consecutiveSequenceAtMost1WithAtMost, numlist_use_type: "digits" },
	
	"prime_numbers": { title: "All prime numbers ", func: filter_allNumbersArePrime, filter_type: "all", number_filter_func: filter_isPrime, numlist_title: "Prime numbers ", empty_ok: true},
	"prime_digits": { title: "All digits are prime ", func: filter_allNumbersArePrime, filter_type: "all", number_filter_func: filter_isPrime, numlist_use_type: "digits", display: false, empty_ok: true, numlist_display: true },
	"prime_numbers_count": { title: "Count of Prime numbers is ", func: filter_countOfPrimeNumbersIs, filter_type: "count", number_filter_func: filter_isPrime, count_number_func: filter_countPrimes, numlist_use_type: "digits", numlist_title: "Count of prime digits is " },
	"prime_numbers_atleast": { title: "Count of Prime numbers is at least", func: filter_countOfPrimeNumbersIsAtLeast, filter_type: "count", number_filter_func: filter_isPrime, count_number_func: filter_countPrimes, numlist_title: "Count of prime digits is at least" },
	
};

function hideOddEvenCustomOptions(){
	$(".custom-control.oddeven_half_odd").hide();
	$(".custom-control.oddeven_custom_odd").hide();
}

function hideSortOptions(){
	$("#sorted").hide();	
}


function titleDice(page_params){
		
	var numbers = parseInt(page_params.numbers);
	var sides = parseInt(page_params.sides);
	var length = parseInt(page_params.length);

	var title = "Roll ";	
	
	if (numbers === 1) {
		title += " a " + (sides === 6 ? "Die" : "D"+sides) ; 
	} else {
		title += numbers + " " + (sides === 6 ? "Dice" : "D"+sides + " Dice");	
	}
	
	if (length > 1) {
		title += " " + length + " times";
	}
		
	$("#page_title").html(title);
	document.title = title;
	
	
}

function buildRollUrl(s, n, l){
	var url = "/";
	var die_singular = "die";
	var die_plural = "dice";
	if (s !== 6) {
		die_singular = "d"+s+"-die";
		die_plural = "d"+s+"-dice";
	}
	if (n > 1) {
		url = "/roll-"+n+"-"+die_plural+ ( l > 1 ? "-" + l + "-times" : "");
	} else {		
		url = "/roll-a-"+die_singular+ ( l > 1 ? "-" + l + "-times" : "");
	}
	
	return url;
}

function resultNewDice_20200720(options) {

	var useJS = init_usejs;

	if (typeof options === "undefined") { options = {}; }

	if (typeof options.use_js_only !== "undefined") {
		useJS = options.use_js_only;
	}		
	
	//get data
	var n = $("#numbers").val();
	var l = $("#length").val();
	var s = $("#sides").val();
	//var high = s;
	var low = 1;
	
	var totals_only = $("#totals_only").prop("checked");
	
	var last_roll_only = $("#last_roll_only").prop("checked");
	
	var heads_counts = {}; //counts of each side rolled
	
	n = validateIntInput(n, 1);
	l = validateIntInput(l, 1);	
	s = validateIntInput(s, 6);

	//additonal sets requested by user
	var additional_sets = getAdditionalSets('dice');

	var additional_sets_str = "";

	var sets = [[n, s]];

	
	
	//merge all sets
	if (additional_sets.length > 0) {
		sets = sets.concat(additional_sets);
		additional_sets_str = getSetsString(additional_sets);
	}

	var total_coins_per_row = 0;
	var max_side = 1;

	for (var as = 0; as < sets.length; as++ ) {
		total_coins_per_row += sets[as][0];
		if (sets[as][1] > max_side) {
			max_side = sets[as][1];
		}
	}

	if (result_loop) {
		//in a start stop loop
		//just use js for results
		useJS = true;
	}
	
	var new_hash = "#!" + "numbers="+n+"&sides="+s+"&length="+l+"&sets="+additional_sets_str+"&last_roll_only="+last_roll_only+"&totals_only="+totals_only + "&start=" + result_loop_start_requested;

	//build events			
	user_event = 'roll-d'+s+'-'+n+'-'+l+"-sets-"+additional_sets_str+"-last_roll-"+last_roll_only+"-totals-only-"+totals_only+"-start-"+result_loop_start_requested;
	
	//disabled reload on input change
	//var reload_event = 'roll-d'+s+'-'+n+'-'+l;
	var reload_event = '';

	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;
	
	if (!useJS) { 		
	
		//build urls
		var newurlpage = "/rolladie";
		var qs_params = "";
		
		if (s === 6 && n <= 10) {
			newurlpage = buildRollUrl(s, n, 1); //only use number of dice in url
			qs_params = "";
		} else if (s <= 20 || s === 48 || s === 120) {
			newurlpage = buildRollUrl(s, 1, 1); //only use number of sides in url
			qs_params = "";
		}

		var url_event = newurlpage + qs_params;	
		var newurl = newurlpage + qs_params + new_hash;

		//check events
		var isNewUrlEvent = checkNewEvent("url_event", url_event);


		//PROCESS
		
		//if (isNewUrlEvent) {
		/*if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
			window.location = newurl;			
		} else 
		*/ 
		if (isNewReloadEvent) { //should reload but won't reload because the url is the same
						
			var tmpurl = getCodeAppendedUrl("/");
					
			window.location = tmpurl + new_hash;
			
		} else {
			//not a urlevent
			//not a reload event
			//could be a new event

			if (user_click_event_count >= countdown_to_new_request) {
				
				//if time is up, regardless of new event or not
				
				var tmpurl = getCodeAppendedUrl("/");
					
				window.location = tmpurl + new_hash;

			}
			
			/*
			if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
				//if not a new event and time is up, simply reload
				//dont do this on new event, to avoid onhashchange events			
				trackRNGClickEvent('reload', user_event);
				window.location.reload();	

			} */
			
			else {
				
				//time is not up yet
				//or a new event (but not a new reload event)
			
				//usejs to load numbers
				useJS = true;
					
			}
		}

	}//not useJS
		
		
	if (useJS)  {

		//load numbers
		
		if (!loading_numbers) {	
		
			loading_numbers = true;

			//initialize head counts
			for (var i = 1 ; i <= max_side; i++) {
				heads_counts[""+i] = 0;
			}

			var times = l;
							
			var use_coins = true;	
				
			var total_coins_to_display = (last_roll_only ? total_coins_per_row : total_coins_per_row * times);

			if (total_coins_to_display <= 1000) {
				use_coins = true;	
			} else {
				use_coins = false;	
			}
				
				

			/**** UPDATE RESULT  ****/

			var result = "";

			if ( (n*l) > 1000000) {
				result= "Too Many";
			} else { 	
								
				loading_numbers = true;		
				
				for (var t = 0; t < times; t++) { 
									
					//var nums = getNumbers(coins, 0, 1, 0, 0);				
					var seq = [];
					var seq_sum = 0;									
					var hex = "";

					/*
					for (var c = 0; c< coins; c++) {

						var side = getRandInt(low, high);				
					
						seq.push(side);	
						heads_counts[""+side]++;
						
						seq_sum += side;

					}
					*/

					for (var as = 0; as < sets.length; as++ ) {
						var set_params = sets[as]; //get numbers, low and high

						var numbers = set_params[0];
						var high = set_params[1];

						for (var j =0; j< numbers; j++) {
							
							var side = getRandInt(low, high);				
					
							seq.push(side);	
							heads_counts[""+side]++;
							
							seq_sum += side;

							hex += "<span class='dice d"+high+" _"+side+"'><span>"+side+"</span></span>";

							/*
							if (use_coins) {

								hex += "<span class='dice d"+high+" _"+side+"'><span>"+side+"</span></span>";

							} else {							
								hex += side + " ";						
							}
							*/

						}					 
											
					}


					
					for (var i = 0; i< seq.length; i++) {

						var side = seq[i];

						
					}
					
					if(total_coins_per_row > 1 && totals_only) {
						hex = "";
					}
					
					var sum_box = "";
					
					if (total_coins_per_row > 1) { //more than one dice
						//show sum
						sum_box = "<span class='seq_sum'>"+seq_sum+"</span>";
					}

					//to adjust dice size
					//if more than 5 dice rolled 
					//or if more than 2 rows will show
					if (total_coins_per_row > 5 || (times > 1 && !last_roll_only))  {
						var col_group = "5" ; //0";
					} else {
						var col_group = total_coins_per_row;
					}
					
					if (!last_roll_only || (last_roll_only && t == times - 1)) {

						result += "<div class='roll-group col-"+col_group+"'>"+hex+sum_box+"</div> ";

						/*
						if (use_coins) {
							result += "<div class='roll-group col-"+col_group+"'>"+hex+sum_box+"</div> ";
						} else {
							result += "<div class='roll-group col-"+col_group+"'><span class='numbers'>"+hex+"</span>"+sum_box+"</div> ";
						}
						*/
					
					}
				
				}//for t times


				if (!result_loop) { //dont do these if in a loop

					$("#count_stats").html("Generated: <br />");			
					for (var i = 1; i <= max_side; i++) {				
						$("#count_stats").append((i)+" : "+heads_counts[""+i]+" times<br />");
					}
				}
				
			}//if not too many

			updateResult(result);
			
			/**** END UPDATE RESULT  ****/

			if (!result_loop) { //dont do these if in a loop
				
				user_click_event_count++;	
			
						
				trackRNGClickEvent('dice pageview', user_event);

				//change window hash for bookmarking
				if (isNewUserEvent) {
					dont_trigger_hashchange = true;
					setHash(new_hash);
				}
				
				//updateCombinatorics(n, l, h, unique);

			}	

		}//not already loading

	}//useJS
		
}	



function resultDivisible(){
	
	var n = parseInt($("#numbers").val());
	var l = parseInt($("#low").val());
	var h = parseInt($("#high").val());
			
    var divisible = parseInt($("#divisible").val());
	
	if (!loading_numbers) {
		
		loading_numbers = true;
		
		var result = "";
		
		var divisions = Math.ceil(((h - l) + 1) / divisible);
		
		
		if (n < divisions) { //possible to get these numbers
		
			var temp_nums = getNumbers({numbers: n, low: 0, high: divisions-1, oddeven: 0, unique: 1});

			
			var nums = temp_nums.split(" ");
						
			var lowest_multiple = l - (l % divisible); //lowest possible number in the given range
					
			for (var i = 0; i< nums.length; i++) {
				var num = parseInt(nums[i]);				
				var new_num = lowest_multiple + (num * divisible) ;
								
				result += new_num + " ";		
			}
		
		} else {
			result = accessibilityMsg("Invalid Range");	
		}
				
		updateResult(result);
	}
		
}

function resultNewListBinary() {	
	resultNewList("binary");
}


function resultNewList(numtype) {	
	
	if (typeof numtype === "undefined") {
		numtype = init_numtype;
	}
	
	var numlist = [];
	
	var l = $("#low").val();
	var h = $("#high").val();
	var step = $("#step").val();
	var csv = $("#csv").val();
	var oddeven = getOddEven();	

	l = validateIntInput(l, 0);
	h = validateIntInput(h, 100);
	step = validateIntInput(step, 1);
	
	if (l > h) {
		//swap
		var t = l;
		l = h;
		h = t;	
	}
	
	var range = h - l + 1;
	
	
	if (range > 1000001) {
		
		$("#resultVal").html("Too many... loading..");
		
	}

	//additonal filters requested by user
	var additional_filters = getAdditionalFilters();
	var additional_filters_str = getAdditionalFiltersString(additional_filters);

	//process ranges
	additional_filters = processAdditionalFilters(additional_filters);

	//use maximum decimal places in the inputs to round to
	var max_decimals = Math.max(countDecimalPlaces(l), countDecimalPlaces(h), countDecimalPlaces(step));	
				
	//console.log(max_decimals);

	user_event = numtype+'-list-'+l+'-'+h;
	
	//build events			
	user_event = numtype+'-list-'+l+'-'+h+"-csv-"+csv+"-oddeven-"+oddeven+"-step-"+step+"-af-"+additional_filters_str;

	var reload_event = numtype+'-list-'+l+'-'+h;
	
	//build urls
	
	var rng_url = "/numberlist";
	
	

	if (numtype == "binary") {
		rng_url = "/numberlist/binary-numbers"
	} else if (numtype == "hex") {
		rng_url = "/numberlist/hex-numbers"
	} else if (numtype == "octal") {
		rng_url = "/numberlist/octal-numbers"
	} 
			
	var newurlpage = rng_url;
	var qs_params = "";	
	
	var url_event = newurlpage + qs_params;	

	var new_hash = "#!" + "low="+l+"&high="+h+"&csv="+csv+"&oddeven="+oddeven+"&step="+step+"&addfilters="+additional_filters_str;	

	var newurl = newurlpage + qs_params + new_hash;
	
	//check events
	
	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewUrlEvent = checkNewEvent("url_event", url_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;
	
    var useJS = true;

	//PROCESS
		
	/*if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
		window.location = newurl;			
	} else 
	*/
	if (forceReloadPage 
		|| isNewReloadEvent 
		|| user_click_event_count >= countdown_to_new_request ) { //should reload but won't reload because the url is the same
		
		// var tmpurl = getCodeAppendedUrl(rng_url);
						
		// window.location = tmpurl + new_hash;		
		
		
		refreshAds();

		if (isNewReloadEvent) {
			trackRNGClickEvent('newevent', init_page);
		} else if (user_click_event_count >= countdown_to_new_request) {
			trackRNGClickEvent('reload', user_event);
		} 

		user_click_event_count = 0;
		useJS = true;	
		
	} else {

		useJS = true;

	} 
	
	
	if (useJS)  {

		//not a urlevent
		//not a reload event
		//could be a new event

		//load numbers
		if (!loading_numbers) {
			
			loading_numbers = true;
			
			user_click_event_count++;
			
			trackRNGClickEvent('numlist', user_event);
			
			//change window hash for bookmarking
			if (isNewUserEvent) {
				dont_trigger_hashchange = true;
				setHash(new_hash);
			}
			
			var separator = getSeparator(csv);
			var start = l;
			var increment = 1;

			var total_numbers_generated = 0;
			
			/*
			if (oddeven === "odd") {
				start = nextOdd(l);	
				increment = nextEven(step);
			} else if (oddeven === "even") {
				start = nextEven(l);
				increment = nextEven(step);
			} else {
				increment = step;	
			}
			*/
			
			increment = step;	
			
			//$("#resultVal").html("");				
			var result = "";
			var num_okay = true;

			try {

				for(var i = start ; i<= h; i+=increment) {

					if (total_numbers_generated > BULK_BATCH_LIMIT) {
						alert("Too many numbers, please generate them in batches of "+niceNumber(BULK_BATCH_LIMIT) + " ("+formattedNumber(BULK_BATCH_LIMIT)+")");
						break;
					}

					
					if (total_numbers_generated%1000000 == 0) {
						//console.log("Generated "+total_numbers_generated.toLocaleString()+" numbers");
					}

					num_okay = true;
	
					var num = i;
					
					var rem = num % 2;
					
					if (oddeven === "odd" && !rem) {
						num_okay= false;
					} else if (oddeven === "even" && rem) {
						num_okay= false;
					} 

				//console.log("validating", [num]);

					//process number through additional filters
					if (!validateLineThroughFilters(additional_filters, [num], {page_type: "numlist"}) ) {
						num_okay = false;							
					}

					
					if(num_okay) {	
						
						if (numtype == "binary") {
							num = decToBin(num);
						} else if (numtype == "hex") {
							num = decToHex(num);
						} else if (numtype == "octal") {
							num = decToOct(num);
						}
	
						if (max_decimals > 0) {
							num = roundTo(num, max_decimals);  
						}

						numlist.push(num);	
						total_numbers_generated++;
						//result += num + separator;	
					}

				}
				
				
			}
			catch(e) { 
				//console.log("error is", e);
			}

			//$("#result_textarea").html(result);
			//$("#result_textarea_div").show();
			//$("#result_html_div").hide();
			
			updateProgress("Generated "+formattedNumber(numlist.length)+" numbers");

			if (numlist.length > 100100) {
				updateResult(getDownloadResultsMsg(formattedNumber(numlist.length)));
			} else {
				updateResult(numlist.join(separator));
			}
			
			
			loading_numbers = false;

		}
		
	}
	
	download_numbers = numlist;
	
}	

// function resultNewList__(numtype) {	
	
// 	if (typeof numtype === "undefined") {
// 		numtype = init_numtype;
// 	}
	
// 	var numlist = [];
	
// 	var l = $("#low").val();
// 	var h = $("#high").val();
// 	var step = $("#step").val();
// 	var csv = $("#csv").val();
// 	var oddeven = getOddEven();	

// 	l = validateIntInput(l, 0);
// 	h = validateIntInput(h, 100);
// 	step = validateIntInput(step, 1);
	
// 	if (l > h) {
// 		//swap
// 		var t = l;
// 		l = h;
// 		h = t;	
// 	}
	
// 	var range = h - l + 1;
	
	
// 	if (range > 1000001) {
		
// 		$("#resultVal").html("Too many... loading..");
		
// 	}

// 	//additonal filters requested by user
// 	var additional_filters = getAdditionalFilters();
// 	var additional_filters_str = getAdditionalFiltersString(additional_filters);

// 	//process ranges
// 	additional_filters = processAdditionalFilters(additional_filters);

// 	//use maximum decimal places in the inputs to round to
// 	max_decimals = Math.max(countDecimalPlaces(l), countDecimalPlaces(h), countDecimalPlaces(step));	
				
// 	//console.log(max_decimals);

// 	user_event = numtype+'-list-'+l+'-'+h;
	
// 	//build events			
// 	user_event = numtype+'-list-'+l+'-'+h+"-csv-"+csv+"-oddeven-"+oddeven+"-step-"+step+"-af-"+additional_filters_str;

// 	var reload_event = numtype+'-list-'+l+'-'+h;
	
// 	//build urls
	
// 	var rng_url = "/numberlist";
	
	

// 	if (numtype == "binary") {
// 		rng_url = "/numberlist/binary-numbers"
// 	} else if (numtype == "hex") {
// 		rng_url = "/numberlist/hex-numbers"
// 	} else if (numtype == "octal") {
// 		rng_url = "/numberlist/octal-numbers"
// 	} 
			
// 	var newurlpage = rng_url;
// 	var qs_params = "";	
	
// 	var url_event = newurlpage + qs_params;	

// 	var new_hash = "#!" + "low="+l+"&high="+h+"&csv="+csv+"&oddeven="+oddeven+"&step="+step+"&addfilters="+additional_filters_str;	

// 	var newurl = newurlpage + qs_params + new_hash;
	
// 	//check events
	
// 	var isNewUserEvent = checkNewEvent("user_event", user_event);
// 	var isNewUrlEvent = checkNewEvent("url_event", url_event);
// 	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
// 	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;
	
// 	//PROCESS
		
// 	/*if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
// 		window.location = newurl;			
// 	} else 
// 	*/
// 	if (isNewReloadEvent || forceReloadPage) { //should reload but won't reload because the url is the same
		
// 		var tmpurl = getCodeAppendedUrl(rng_url);
						
// 		window.location = tmpurl + new_hash;		
			
		
// 	} else {
// 		//not a urlevent
// 		//not a reload event
// 		//could be a new event
		
// 		if (!isNewUserEvent && user_click_event_count >= (countdown_to_new_request)){			
// 			//if not a new event and time is up, simply reload
// 			//dont do this on new event, to avoid onhashchange events			
// 			trackRNGClickEvent('reload', user_event);
			
// 			var tmpurl = getCodeAppendedUrl(rng_url);
						
// 			window.location = tmpurl + new_hash;

// 		} else {
			
// 			//time is not up yet
// 			//or a new event (but not a new reload event)
		
// 			//load numbers
// 			if (!loading_numbers) {
				
// 				loading_numbers = true;
				
// 				user_click_event_count++;
				
// 				trackRNGClickEvent('numlist', user_event);
				
// 				//change window hash for bookmarking
// 				if (isNewUserEvent) {
// 					dont_trigger_hashchange = true;
// 					setHash(new_hash);
// 				}
				
// 				var separator = getSeparator(csv);
// 				var start = l;
// 				var increment = 1;

// 				var total_numbers_generated = 0;
				
// 				/*
// 				if (oddeven === "odd") {
// 					start = nextOdd(l);	
// 					increment = nextEven(step);
// 				} else if (oddeven === "even") {
// 					start = nextEven(l);
// 					increment = nextEven(step);
// 				} else {
// 					increment = step;	
// 				}
// 				*/
				
// 				increment = step;	
				
// 				//$("#resultVal").html("");				
// 				var result = "";
// 				var num_okay = true;

// 				try {

// 					for(var i = start ; i<= h; i+=increment) {

// 						if (total_numbers_generated > BULK_BATCH_LIMIT) {
// 							alert("Too many numbers, please generate them in batches of "+niceNumber(BULK_BATCH_LIMIT) + " ("+formattedNumber(BULK_BATCH_LIMIT)+")");
// 							break;
// 						}

						
// 						if (total_numbers_generated%1000000 == 0) {
// 							//console.log("Generated "+total_numbers_generated.toLocaleString()+" numbers");
// 						}

// 						num_okay = true;
		
// 						var num = i;
						
// 						var rem = num % 2;
						
// 						if (oddeven === "odd" && !rem) {
// 							num_okay= false;
// 						} else if (oddeven === "even" && rem) {
// 							num_okay= false;
// 						} 

// 						//process number through additional filters
// 						if (!validateLineThroughFilters(additional_filters, [num], {page_type: "numlist"}) ) {
// 							num_okay = false;							
// 						}

						
// 						if(num_okay) {	
							
// 							if (numtype == "binary") {
// 								num = decToBin(num);
// 							} else if (numtype == "hex") {
// 								num = decToHex(num);
// 							} else if (numtype == "octal") {
// 								num = decToOct(num);
// 							}
		
// 							if (max_decimals > 0) {
// 								num = roundTo(num, max_decimals);  
// 							}

// 							numlist.push(num);	
// 							total_numbers_generated++;
// 							//result += num + separator;	
// 						}

// 					}
					
					
// 				}
// 				catch(e) { 
// 					//console.log("error is", e);
// 				}

// 				//$("#result_textarea").html(result);
// 				//$("#result_textarea_div").show();
// 				//$("#result_html_div").hide();
				
// 				updateProgress("Generated "+formattedNumber(numlist.length)+" numbers");

// 				if (numlist.length > 100100) {
// 					updateResult(getDownloadResultsMsg(formattedNumber(numlist.length)));
// 				} else {
// 					updateResult(numlist.join(separator));
// 				}
				
				
// 				loading_numbers = false;

// 			}
			
			
// 		}
		
// 	}
	
// 	download_numbers = numlist;
	
// }	

function getResultCell(content, label, link, cell_class){

	if (typeof cell_class == "undefined") {cell_class = "";} 

	var cell = "";
	cell += "<a href='"+link+"'>";
	cell += "<div class='result_cell "+cell_class+"'>";
	cell += "<span class='content'>"+content+"</span>";
	cell += "<span class='label'>"+label+"</span>";
	cell += "</div>";
	cell += "</a>";

	return cell;

}

function resultLuckyX(num) {

	if (typeof num === "undefined") num = init_numbers; 
	
	if (num === 5 ) {
		resultLucky5();
	} else if (num === 6 ) {
		resultLucky6();
	} else if (num === 7 ) {
		resultLucky7();
	} else {

		var result = "";
		var nums = [];
		for (var i = 0; i < num; i++) {
			var rand_int = getRandInt(1, 100);
			var numx = getNumbers({numbers: 1, low: 1, high: rand_int});
			nums.push(numx);
			result += getResultCell(numx, "1-"+rand_int, RNP_LINK+"#!numbers=1&low=1&high="+rand_int);
		}

		download_numbers = nums.join(",");

		updateResult(result);
	}
}

function resultLucky5() {

	var result = "";	
	
	var num1 = getNumbers({numbers: 1, low: 1, high: 10});
	result = getResultCell(num1, "1-10", RNP_LINK+"#!numbers=1&low=1&high=10");

	var num2 = getNumbers({numbers: 1, low: 1, high: 20});
	result += getResultCell(num2, "1-20", RNP_LINK+"#!numbers=1&low=1&high=20");

	var num3 = getNumbers({numbers: 1, low: 1, high: 50});
	result += getResultCell(num3, "1-50", RNP_LINK+"#!numbers=1&low=1&high=50");

	var num4 = getNumbers({numbers: 1, low: 1, high: 100});
	result += getResultCell(num4, "1-100", RNP_LINK+"#!numbers=1&low=1&high=100");

	var rand_int = getRandInt(1, 69);

	var num5 = getNumbers({numbers: 1, low: 1, high: rand_int});
	result += getResultCell(num5, "1-"+rand_int, RNP_LINK+"#!numbers=1&low=1&high="+rand_int);

	download_numbers = num1+","+num2+","+num3+","+num4+","+num5;

	updateResult(result);

}

function resultLucky6() {

	var result = "";
	
	var num1 = getNumbers({numbers: 1, low: 1, high: 10});
	result = getResultCell(num1, "1-10", RNP_LINK+"#!numbers=1&low=1&high=10");

	var num2 = getNumbers({numbers: 1, low: 1, high: 20});
	result += getResultCell(num2, "1-20", RNP_LINK+"#!numbers=1&low=1&high=20");

	var num3 = getNumbers({numbers: 1, low: 1, high: 50});
	result += getResultCell(num3, "1-50", RNP_LINK+"#!numbers=1&low=1&high=50");

	var num4 = getNumbers({numbers: 1, low: 1, high: 100});
	result += getResultCell(num4, "1-100", RNP_LINK+"#!numbers=1&low=1&high=100");

	var rand_int = getRandInt(1, 100);

	var num5 = getNumbers({numbers: 1, low: 1, high: rand_int});
	result += getResultCell(num5, "1-"+rand_int, RNP_LINK+"#!numbers=1&low=1&high="+rand_int);

	rand_int = getRandInt(1, 100);

	var num6 = getNumbers({numbers: 1, low: 1, high: rand_int})
	result += getResultCell(num6, "1-"+rand_int, RNP_LINK+"#!numbers=1&low=1&high="+rand_int);

	download_numbers = num1+","+num2+","+num3+","+num4+","+num5+","+num6;

	updateResult(result);

}

function resultLucky7() {

	var result = "";
	
	var num1 = getNumbers({numbers: 1, low: 1, high: 10});
	result = getResultCell(num1, "1-10", RNP_LINK+"#!numbers=1&low=1&high=10");

	var num2 = getNumbers({numbers: 1, low: 1, high: 20});
	result += getResultCell(num2, "1-20", RNP_LINK+"#!numbers=1&low=1&high=20");

	var num3 = getNumbers({numbers: 1, low: 21, high: 30});
	result += getResultCell(num3, "21-30", RNP_LINK+"#!numbers=1&low=21&high=30");

	var num4 = getNumbers({numbers: 1, low: 31, high: 40});
	result += getResultCell(num4, "31-40", RNP_LINK+"#!numbers=1&low=31&high=40");

	var num5 = getNumbers({numbers: 1, low: 41, high: 50});
	result += getResultCell(num5, "41-50", RNP_LINK+"#!numbers=1&low=41&high=50");

	var num6 = getNumbers({numbers: 1, low: 51, high: 69});
	result += getResultCell(num6, "51-69", RNP_LINK+"#!numbers=1&low=51&high=69");

	var rand_int = getRandInt(1, 69);

	var num7 = getNumbers({numbers: 1, low: 1, high: rand_int});
	result += getResultCell(num7, "1-"+rand_int, RNP_LINK+"#!numbers=1&low=1&high="+rand_int);
	
	download_numbers = num1+","+num2+","+num3+","+num4+","+num5+","+num6+","+num7;

	updateResult(result);

}


function resultNewQuickpicksRR() {

	var result = "";		
	
	var num1 = getNumbers({numbers: 5, low: 1, high: 69});	
	result = getResultCell(num1, "Powerball", "http://www.lotterynumbergenerator.net/powerball-number-generator");
	
	var num2 = getNumbers({numbers: 1, low: 1, high: 26});
	result += getResultCell(num2, "1-26", RNP_LINK+"#!numbers=1&low=1&high=26");

	result += "<br />";

	var num3 = getNumbers({numbers: 5, low: 1, high: 70});	
	result += getResultCell(num3, "Mega Millions", RNP_LINK+"#!numbers=5&low=1&high=70");
	
	var num4 = getNumbers({numbers: 1, low: 1, high: 25});
	result += getResultCell(num4, "1-25", RNP_LINK+"#!numbers=1&low=1&high=25");

	result += "<br />";	

	var num5 = getNumbers({numbers: 5, low: 1, high: 50});	
	result += getResultCell(num5, "Euro Millions", RNP_LINK+"#!numbers=5&low=1&high=50");
	
	var num6 = getNumbers({numbers: 2, low: 1, high: 12});
	result += getResultCell(num6, "1-12", RNP_LINK+"#!numbers=2&low=1&high=12");
	
	result += "<br />";

	var num7 = getNumbers({numbers: 6, low: 1, high: 49});	
	result += getResultCell(num7, "6 49", RNP_LINK+"#!numbers=6&low=1&high=49");

	result += "<br />";

	var num8 = getNumbers({numbers: 7, low: 1, high: 50});	
	result += getResultCell(num8, "7 50", RNP_LINK+"#!numbers=7&low=1&high=50");
	 

	download_numbers = num1+","+num2+"\n"+num3+","+num4+"\n"+num5+","+num6+"\n"+num7+"\n"+num8;

	updateResult(result);

}


function resultNewRRHome() {

	var result = "";		
	
	
	var leftright = (getNumbers({numbers: 1, low: 1, high: 2}) === "1" ? "Left" : "Right");
	result += getResultCell(leftright, "Left/Right", LEFTRIGHT_LINK);

	var num1 = getNumbers({numbers: 1, low: 1, high: 10});	
	result += getResultCell(num1, "1-10", RNP_LINK+"#!numbers=1&low=1&high=10");		

	var yesno = (getNumbers({numbers: 1, low: 1, high: 2}) === "1" ? "Yes" : "No");
	result += getResultCell(yesno, "Yes/No", YESNO_LINK);

	var num2 = getNumbers({numbers: 1, low: 1, high: 100});
	result += getResultCell(num2, "1-100", RNP_LINK+"#!numbers=1&low=1&high=100");

	var dice_num = getNumbers({numbers: 1, low: 1, high: 6});
	var dice = '<span class="dice _'+dice_num+'"><img src="/images/dice/dice'+dice_num+'.jpg" style="height: 45px;"></span>';
	result += getResultCell(dice, "Dice Roll", DICE_LINK); 

	var coin_num = getNumbers({numbers: 1, low: 1, high: 2});
	var coin = '<span class="coin _'+coin_num+'"><img src="/images/coin/coin'+coin_num+'.png" style="height: 45px;"></span>';
	var ht = (getNumbers({numbers: 1, low: 1, high: 2}) === "1" ? "H" : "T");
	result += getResultCell(coin, "Coin Toss", HT_LINK, "coin");  
	
	result += getResultCell(getNumbers({numbers: 1, low: 1, high: 2}) === "1" ? "Up" : "Down", "Up/Down", UPDOWN_LINK);
	result += getResultCell(getNumbers({numbers: 1, low: 1, high: 2}) === "1" ? "T" : "F", "True/False", TF_LINK);
	result += getResultCell(getNumbers({numbers: 1, low: 1, high: 2}) === "1" ? "A" : "B", "A or B", AB_LINK);
	result += getResultCell(getNumbers({numbers: 1, low: 1, high: 3}) === "1" ? "Z" : getNumbers({numbers: 1, low: 1, high: 2}) === "1" ? "X" : "Y", "X, Y or Z", ABC_LINK);

	result += getResultCell(getNumbers({numbers: 1, low: 1, high: 2}) === "1" ? "0" : "1", "Binary", _01_LINK);
	result += getResultCell(getNumbers({numbers: 1, low: 1, high: 3}), "Ternary", ABC_LINK);

	result += getResultCell(getNumbers({numbers: 5, low: 1, high: 69}), "Quick picks", "/quickpicks", "small");

	result += getResultCell(getNumbers({numbers: 1, low: 1, high: 999}), "More", "/randomizers");

	download_numbers = num1+","+num2+","+dice_num+","+yesno+","+coin_num;

	updateResult(result);

}

function resultDiceRR() {

	var result = "";				
	
	var dice_num = getNumbersArray({numbers: 1, low: 1, high: 6})[0];
	var dice = '<span class="dice _'+dice_num+'"><img src="/images/dice/dice'+dice_num+'.jpg"></span>';
	result += dice; 

	updateResult(result);

}

function resultCoinRR() {

	var result = "";	

	var coin_num = getCoinSide();
	
	var coin_label = coin_num === 1 ? "Heads" : (coin_num === 2 ? "Tails" : "Edge");
	var coin = '<span class="coin _'+coin_num+'"><img src="/images/coin/coin'+coin_num+'.png"></span>';

	result = getResultCell(coin, coin_label, CT_LINK);  

	updateResult(result);

}

function resultNewHT_() {

	var result = "";	

	var coin_num = getCoinSide();
	
	var coin_label = coin_num === 1 ? "Heads" : (coin_num === 2 ? "Tails" : "Edge");
	var coin = '<span class="coin _'+coin_num+'"><img src="/images/coin/coin'+coin_num+'.png"></span>';

	result = getResultCell(coin, coin_label, CT_LINK);  

	updateResult(result);

}


function resultNewHT(options) {

	var useJS = init_usejs;

	if (typeof options === "undefined") { options = {}; }

	if (typeof options.use_js_only !== "undefined") {
		useJS = options.use_js_only;
	}		
	
	//get data
	var n = $("#numbers").val();
	var l = $("#length").val();
	var s = 3; //3 sides for a coin with side landing
	//var high = s;
	var low = 1;
	
	var totals_only = $("#totals_only").prop("checked");
	
	var last_roll_only = $("#last_roll_only").prop("checked");
	
	var heads_counts = {}; //counts of each side rolled
	
	n = validateIntInput(n, 1);
	l = validateIntInput(l, 1);	

	//additonal sets requested by user
	var additional_sets = getAdditionalSets('dice');

	var additional_sets_str = "";

	var sets = [[n, s]];

	
	
	//merge all sets
	if (additional_sets.length > 0) {
		sets = sets.concat(additional_sets);
		additional_sets_str = getSetsString(additional_sets);
	}

	var total_coins_per_row = 0;
	var max_side = 1;

	for (var as = 0; as < sets.length; as++ ) {
		total_coins_per_row += sets[as][0];
		if (sets[as][1] > max_side) {
			max_side = sets[as][1];
		}
	}

	if (result_loop) {
		//in a start stop loop
		//just use js for results
		useJS = true;
	}
	
	var new_hash = "#!" + "numbers="+n+"&sides="+s+"&length="+l+"&sets="+additional_sets_str+"&last_roll_only="+last_roll_only+"&totals_only="+totals_only + "&start=" + result_loop_start_requested;

	//build events			
	user_event = 'roll-d'+s+'-'+n+'-'+l+"-sets-"+additional_sets_str+"-last_roll-"+last_roll_only+"-totals-only-"+totals_only+"-start-"+result_loop_start_requested;
	
	//disabled reload on input change
	//var reload_event = 'roll-d'+s+'-'+n+'-'+l;
	var reload_event = '';

	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;
	
	if (!useJS) { 		
	
		//build urls
		var newurlpage = "/";
		var qs_params = "";
		
		if (s === 6 && n <= 10) {
			newurlpage = buildRollUrl(s, n, 1); //only use number of dice in url
			qs_params = "";
		} else if (s <= 20 || s === 48 || s === 120) {
			newurlpage = buildRollUrl(s, 1, 1); //only use number of sides in url
			qs_params = "";
		}

		var url_event = newurlpage + qs_params;	
		var newurl = newurlpage + qs_params + new_hash;

		//check events
		var isNewUrlEvent = checkNewEvent("url_event", url_event);


		//PROCESS
		
		//if (isNewUrlEvent) {
		/*if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
			window.location = newurl;			
		} else 
		*/ 
		if (isNewReloadEvent) { //should reload but won't reload because the url is the same
						
			var tmpurl = getCodeAppendedUrl("/");
					
			window.location = tmpurl + new_hash;
			
		} else {
			//not a urlevent
			//not a reload event
			//could be a new event

			if (user_click_event_count >= countdown_to_new_request) {
				
				//if time is up, regardless of new event or not
				
				var tmpurl = getCodeAppendedUrl("/");
					
				window.location = tmpurl + new_hash;

			}
			
			/*
			if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
				//if not a new event and time is up, simply reload
				//dont do this on new event, to avoid onhashchange events			
				trackRNGClickEvent('reload', user_event);
				window.location.reload();	

			} */
			
			else {
				
				//time is not up yet
				//or a new event (but not a new reload event)
			
				//usejs to load numbers
				useJS = true;
					
			}
		}

	}//not useJS
		
		
	if (useJS)  {

		//load numbers
		
		if (!loading_numbers) {	
		
			loading_numbers = true;

			//initialize head counts
			for (var i = 1 ; i <= max_side; i++) {
				heads_counts[""+i] = 0;
			}

			var times = l;
							
			var use_coins = true;	
				
			var total_coins_to_display = (last_roll_only ? total_coins_per_row : total_coins_per_row * times);

			if (total_coins_to_display <= 1000) {
				use_coins = true;	
			} else {
				use_coins = false;	
			}
				
				

			/**** UPDATE RESULT  ****/

			var result = "";

			if ( (n*l) > 1000000) {
				result= "Too Many";
			} else { 	
								
				loading_numbers = true;		
				
				for (var t = 0; t < times; t++) { 
									
					//var nums = getNumbers(coins, 0, 1, 0, 0);				
					var seq = [];
					var seq_sum = 0;									
					var hex = "";

					/*
					for (var c = 0; c< coins; c++) {

						var side = getRandInt(low, high);				
					
						seq.push(side);	
						heads_counts[""+side]++;
						
						seq_sum += side;

					}
					*/

					for (var as = 0; as < sets.length; as++ ) {
						var set_params = sets[as]; //get numbers, low and high

						var numbers = set_params[0];
						var high = set_params[1];

						for (var j =0; j< numbers; j++) {
							
							var side = getCoinSide();				
					
							seq.push(side);	
							heads_counts[""+side]++;
							
							seq_sum += side;

							var coin_label = getHTLabel(side);
							var coin = '<span class="coin _'+side+'"><img src="/images/coin/coin'+side+'.png"></span>';

							//hex += "<span class='dice d"+high+" _"+side+"'><span>"+side+"</span></span>";

							hex += getResultCell(coin, coin_label, CT_LINK, "coin _"+side);

							/*
							if (use_coins) {

								hex += "<span class='dice d"+high+" _"+side+"'><span>"+side+"</span></span>";

							} else {							
								hex += side + " ";						
							}
							*/

						}					 
											
					}


					
					for (var i = 0; i< seq.length; i++) {

						var side = seq[i];

						
					}
					
					if(total_coins_per_row > 1 && totals_only) {
						hex = "";
					}
					
					var sum_box = "";
					
					if (total_coins_per_row > 1) { //more than one dice
						//show sum
						sum_box = "<span class='seq_sum'>"+seq_sum+"</span>";
						//sum_box = ""; //no need for sums for coins
					}

					//to adjust dice size
					//if more than 5 dice rolled 
					//or if more than 2 rows will show
					if (total_coins_per_row > 5 || (times > 1 && !last_roll_only))  {
						var col_group = "5" ; //0";
					} else {
						var col_group = total_coins_per_row;
					}
					
					if (!last_roll_only || (last_roll_only && t == times - 1)) {

						result += "<div class='roll-group col-"+col_group+"'>"+hex+sum_box+"</div> ";

						/*
						if (use_coins) {
							result += "<div class='roll-group col-"+col_group+"'>"+hex+sum_box+"</div> ";
						} else {
							result += "<div class='roll-group col-"+col_group+"'><span class='numbers'>"+hex+"</span>"+sum_box+"</div> ";
						}
						*/
					
					}
				
				}//for t times


				if (!result_loop) { //dont do these if in a loop

					$("#count_stats").html("Generated: <br />");			
					for (var i = 1; i <= max_side; i++) {				
						$("#count_stats").append(getHTLabel(i)+" : "+heads_counts[""+i]+" times<br />");
					}
				}
				
			}//if not too many

			updateResult(result);
			
			/**** END UPDATE RESULT  ****/

			if (!result_loop) { //dont do these if in a loop
				
				user_click_event_count++;	
			
						
				trackRNGClickEvent('dice pageview', user_event);

				//change window hash for bookmarking
				if (isNewUserEvent) {
					dont_trigger_hashchange = true;
					setHash(new_hash);
				}
				
				//updateCombinatorics(n, l, h, unique);

			}	

		}//not already loading

	}//useJS
		
}	

function resultNew(options) {
	if (typeof options === "undefined") { options = {}; }
	options.generator = "rnp";
	resultNewAny(options);
}

function setupFlashButtons(){
	$("#stopone-button").addClass("visible");
	$("#stopall-button").addClass("visible");
	$("#stopnow-button").addClass("visible");
	$("#stop-button").removeClass("visible");
	$("#start-button").addClass("hidden");
}

function setupStopButtons(){
	$("#stopone-button").removeClass("visible");
	$("#stopall-button").removeClass("visible");
	$("#stopnow-button").removeClass("visible");
	$("#stop-button").addClass("visible");
	$("#start-button").addClass("hidden");
}

function resetStopButtons(){
	$("#stopone-button").removeClass("visible");
	$("#stopall-button").removeClass("visible");
	$("#stopnow-button").removeClass("visible");
	$("#stop-button").removeClass("visible");
	$("#start-button").removeClass("hidden");
}

function closeSettings(){
	$("#go-btn-container").removeClass("floating");
	$("#modalBackground").hide();
}

function openSettings(){
	$("#go-btn-container").addClass("floating");
	$("#modalBackground").show();
}

function toggleSettings(){
	if ($("#go-btn-container").hasClass("floating") )  {
		closeSettings(); 
	} else {
		openSettings();
	}
}

// function resultNewAny_nonRNG(options) {
	
// 	var useJS = init_usejs;

// 	if (typeof options === "undefined") { options = {}; }

// 	if (typeof options.use_js_only !== "undefined") {
// 		useJS = options.use_js_only;
// 	}	

// 	var generator = options.generator || "rnp";

// 	//get data
// 	var n = $("#numbers").val();
// 	var l = $("#low").val();
// 	var h = $("#high").val();	
// 	var range = $("#numlist").val();
// 	var unique = getBooleanValue($("#unique").val(), true);
// 	var csv = $("#csv").val();
// 	var oddeven = getOddEven();
// 	var oddqty = getOddQty();
// 	var sorted = getBooleanValue($("#sorted").val(), false);
// 	var totals_only = $("#totals_only").prop("checked");	
// 	var last_roll_only = $("#last_roll_only").prop("checked");

// 	//N_of_L specific values
// 	var len = $("#length").val();
// 	var num_type = options.num_type;
// 	var digit_term = options.digit_term;
// 	var number_term = options.number_term;
// 	var generic_slug = options.generic_slug;
// 	var dec_low = options.dec_low;
// 	var dec_high = options.dec_high;
		
// 	n = validateIntInput(n, init_numbers);
// 	l = validateIntInput(l, init_low);
// 	h = validateIntInput(h, init_high); //999999999999999000000 //9999999999999999999; //validateIntInput(h, 100);	
// 	len = validateIntInput(len, init_length);

// 	if (h > 9999999999999999) {
		
// 	}

	
// 	//process data   	
// 	if (n > 1000000000) {
// 		n = 5;	//done for kishore
// 	}
	
// 	if (l > h) {
// 		//swap
// 		var t = l;
// 		l = h;
// 		h = t;	
// 	}	


// 	//additonal sets requested by user
// 	var additional_sets = getAdditionalSets('dice');
// 	var additional_sets_str = "";

// 	//additonal filters requested by user
// 	var additional_filters = getAdditionalFilters();
// 	var additional_filters_str = getAdditionalFiltersString(additional_filters);

// 	var sets = [[n, l, h]]; //first default set


// 	//merge all sets
// 	if (additional_sets.length > 0) {
// 		sets = sets.concat(additional_sets);
// 		additional_sets_str = getSetsString(additional_sets);
// 	}

// 	//total elements per row
// 	var total_coins_per_row = 0;

// 	//max high among sets
// 	var max_high = 1;

// 	for (var as = 0; as < sets.length; as++ ) {
// 		total_coins_per_row += sets[as][0];
// 		if (sets[as][2] > max_high) {
// 			max_high = sets[as][2];
// 		}
// 	}


	
// 	if (result_loop) {
// 		//in a start stop loop
// 		//just use js for results
// 		useJS = true;
// 	}

// 	if (result_loop_start_requested) {
// 		if (n > 1 && (init_page === "rnp" || init_page === "rad" )) {
// 			setupFlashButtons();
// 		} else {
// 			setupStopButtons();
// 		}
// 	} 

	
	
// 	var new_hash = "#!";
// 	var reload_event = "";
// 	var generator_base_url = "/";

// 	//build events and hash

// 	if (generator === "n_of_l") {

// 		generator_base_url = "/"+generic_slug;

// 		new_hash = "#!" + "numbers=" + n + "&length=" + len +"&addfilters="+additional_filters_str;

// 		user_event = 'random-'+num_type+'-number-'+len+'-'+n+"-af-"+additional_filters_str;

// 		reload_event = user_event;

// 	} else if (generator === "rad") {

// 		generator_base_url = "/";

// 		new_hash = "#!" + "numbers="+n+"&high="+h+"&length="+len+"&sets="+additional_sets_str+"&addfilters="+additional_filters_str+"&last_roll_only="+last_roll_only+"&totals_only="+totals_only;

// 		user_event = 'roll-d'+h+'-'+n+'-'+len+"-sets-"+additional_sets_str+"-af-"+additional_filters_str+"-last_roll-"+last_roll_only+"-totals-only-"+totals_only;

// 		reload_event = 'roll-d'+h+'-'+n+'-'+len;

// 	} else if (generator === "function") {

// 		generator_base_url = "/functions/function";

// 		new_hash = "#!" + "function_name=" + options.function_name + "&range=" + range+"&addfilters="+additional_filters_str;

// 		user_event = 'function-'+options.function_name+'-range-'+range+"-af-"+additional_filters_str;

// 		reload_event = user_event;

// 	} else {
// 		//default rnp

// 		generator_base_url = "/randomnumbergenerator";

// 		new_hash = "#!" + "numbers=" + n + "&low=" + l + "&high=" + h 
// 	+ "&unique=" + unique + "&csv=" + csv + "&oddeven=" + oddeven + "&oddqty=" + oddqty+"&sorted="+sorted+"&addfilters="+additional_filters_str;	

// 		user_event = 'random-numbers-'+n+'-'+l+'-'+h+"-unique-"+unique+"-oddeven-"+oddeven+"-csv-"+csv+"-oddqty-"+oddqty+"-sorted-"+sorted+"-af-"+additional_filters_str;

// 		reload_event = 'random-numbers-'+n+'-'+l+'-'+h;
// 	}
		

// 	var isNewUserEvent = checkNewEvent("user_event", user_event);
// 	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
// 	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;	

// 	if (!uniqueNumbersPossible(n, l, h, oddeven)) {
// 		unique = false;
// 	}

// 	if (!useJS) { 		
	
// 		//build urls
				
// 		var newurlpage = generator_base_url;

// 		if (generator === "function") {
// 			newurlpage = "/functions/"+options.function_name;
// 		} else if (generator === "rad") {
// 			if (h === 6 && n <= 10) {
// 				newurlpage = buildRollUrl(h, n, 1); //only use number of dice in url				
// 			} else if (h <= 20 || h === 48 || h === 120) {
// 				newurlpage = buildRollUrl(h, 1, 1); //only use number of sides in url				
// 			}
// 		} else if (generator === "n_of_l") {
// 			newurlpage = getNewUrl_N_of_L(generic_slug, len, digit_term, number_term);
// 		} else {
// 			newurlpage = getNewUrl_RNP(n, l, h);
// 		}
	
// 		var url_event = newurlpage;	
// 		var newurl = newurlpage + new_hash;
		
// 		//check events			
// 		var isNewUrlEvent = checkNewEvent("url_event", url_event);		
	
// 		//for urls coming directly
// 		//of the form randomnumberbetween 
// 		//on second event direct to proper page as this page may have low coverage
// 		if (!isNewUserEvent && user_click_event_count == 1 && window.location.pathname.indexOf("between") !== -1 && !isCurrLocationWihoutHash(url_event))  {		
// 			window.location = newurl;
// 			return;
// 		}
			
		
// 		//PROCESS
		
// 		//if (isNewUrlEvent) {
// 		if (forceReloadPage 
// 			|| isNewReloadEvent 
// 			|| user_click_event_count >= countdown_to_new_request 
// 		) {

// 			/* 
// 				this part reloads the page
// 				replaced with refreshAds mechanism instead 	
				
// 				// if (isCurrLocationWihoutHash(url_event)) {
// 				// 	//should reload but won't reload because the url is the same
// 				// 	var tmpurl = generator_base_url;	
// 				// 	tmpurl = getCodeAppendedUrl(tmpurl) + new_hash;
// 				// 	newurl = tmpurl;
// 				// }

// 				// if (result_loop_start_requested) {
// 				// 	newurl += "&start=true";
// 				// }

// 				// if (user_click_event_count >= countdown_to_new_request){	
// 				// 	trackRNGClickEvent('reload', user_event);
// 				// }

// 				// window.location = newurl;	

// 			*/	

			
// 			refreshAds();

// 			if (isNewReloadEvent) {
// 				trackRNGClickEvent('newevent', init_page);
// 			} else if (user_click_event_count >= countdown_to_new_request) {
// 				trackRNGClickEvent('reload', user_event);
// 			} 

// 			user_click_event_count = 0;
// 			useJS = true;		
			

// 		}
// 		// else if (isNewReloadEvent || 
// 		// 	(!isNewUserEvent && user_click_event_count >= countdown_to_new_request)
// 		// 	) { //should reload but won't reload because the url is the same
			

// 		// 	var tmpurl = "/randomnumbergenerator";		
			
// 		// 	// //find a diff url
// 		// 	// do {
// 		// 	// 	var r = getQuickRandInt(1,3);
// 		// 	// 	if (r == 1 && n <= 10) {
// 		// 	// 		tmpurl = "/pick"+n+"randomnumbers";
// 		// 	// 	} else if (r == 1 && n <= 20) {
// 		// 	// 		tmpurl = "/"+n+"randomnumbers";
// 		// 	// 	} else if ( r == 2) {
// 		// 	// 		tmpurl = "/randomnumbergenerator";
// 		// 	// 	} else {
// 		// 	// 		tmpurl = "/randomnumbers";
// 		// 	// 	}
// 		// 	// } while (isCurrLocationWihoutHash(tmpurl));
			
// 		// 	tmpurl = getCodeAppendedUrl(tmpurl);
			
// 		// 	if (result_loop_start_requested) {
// 		// 		new_hash += "&start=true";
// 		// 	}

// 		// 	window.location = tmpurl + new_hash;			
			
// 		// } 
// 		else {
// 			// //not a urlevent
// 			// //not a reload event
// 			// //could be a new event
			
// 			// if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
// 			// 	//if not a new event and time is up, simply reload
// 			// 	//dont do this on new event, to avoid onhashchange events			
// 			// 	trackRNGClickEvent('reload', user_event);
// 			// 	window.location.reload();	
// 			// } else {
				
// 			// 	//time is not up yet
// 			// 	//or a new event (but not a new reload event)
			
// 			// 	//usejs to load numbers
// 			// 	useJS = true;
					
// 			// }

// 			useJS = true;

// 		}
	
// 	}//not useJS
		
		
// 	if (useJS)  {
		
// 		//load numbers
		
// 		if (!loading_numbers) {	
		
// 			loading_numbers = true;

// 			var result = "";
// 			download_numbers = "";			
			
// 			/**** UPDATE RESULT  ****/

// 			if (generator === "function") {
// 				result = getFunctionResults({function_name: options.function_name, range: range, addfilters: additional_filters});
// 				//download numbers auotmatically set in function above
// 				//download_numbers = download_numbers;	
// 			} else if (generator === "rad") {
// 				result = getNumbers_Dice({len: len, sets: sets, addfilters: additional_filters, max_high: max_high, total_coins_per_row: total_coins_per_row, totals_only: totals_only, last_roll_only: last_roll_only, get_counts: !result_loop });
// 				//download numbers auotmatically set in function above					
// 			} else if (generator === "n_of_l") {
// 				result = getNumbers_N_of_L({numbers: n, len: len, low: dec_low, high: dec_high, num_type: num_type, oddeven: oddeven, unique: unique, oddqty: oddqty, sorted: sorted, addfilters: additional_filters });
// 				//download numbers auotmatically set in function above
// 				//download_numbers = download_numbers;	
// 			} else {	
				
// 				result = getNumbers({numbers: n, low: l, high: h, oddeven: oddeven, unique: unique, oddqty: oddqty, sorted: sorted, addfilters: additional_filters }, csv);

// 				//send stopped numbers back to always include in the result
// 				//result = stopped_numbers.toString() + " " + result;

// 				// if (stopped_numbers.length > 0) {
// 				// 	result = result + "<span class='stopped_numbers'>" + stopped_numbers.toString() + "</span>";
// 				// }

// 				download_numbers = result;					
// 			}			
												

// 			updateResult(result);
			

// 			/**** END UPDATE RESULT  ****/
			
// 			if (!result_loop) { //dont do these if in a loop				
							
// 				trackRNGClickEvent('click', user_event);
// 				if (result_loop_start_requested) {
// 					trackRNGClickEvent('start', user_event);
// 				}
				
// 				//reset min-height that might have been set in updateResult to avoid flicker
// 				//reset it so it does not stick for new results				
// 				//$(".result").css("min-height", "auto");

// 				//add classes to modify font-size etc
// 				//safe to do class changes at beginning of loop or go btn			
// 				$("#resultVal").removeClass("xlarge large medium") ;
// 				if (generator === "rnp") {
// 					if (n <= 1 && h <= 1000) {
// 						$("#resultVal").addClass("xlarge");
// 					} else if (n <= 2 && h <= 1000) {
// 						$("#resultVal").addClass("large");
// 					} else if (n <= 5 && h <= 100) {
// 						$("#resultVal").addClass("medium");
// 					} 
// 				} else if (generator === "n_of_l") {
// 					if (n <= 1 && len <= 4) {
// 						$("#resultVal").addClass("xlarge");
// 					} else if (n <= 1 && len <= 7) {
// 						$("#resultVal").addClass("large");
// 					} else if (n <= 1 && len <= 10) {
// 						$("#resultVal").addClass("medium");
// 					} else if (n <= 2 && len <= 3) {
// 						$("#resultVal").addClass("large");
// 					} else if (n <= 2 && len <= 5) {
// 						$("#resultVal").addClass("medium");
// 					}
// 				}	

// 				//change window hash for bookmarking
// 				if (isNewUserEvent) {
// 					dont_trigger_hashchange = true;
// 					setHash(new_hash);
// 				}
				
// 				if (generator === "n_of_l") {
// 					updateCombinatoricsXdigit(len, dec_high - dec_low + 1);
// 				} else {
// 					updateCombinatorics(n, l, h, unique);
// 				}

// 			}	
			
// 		}
			
// 	}//useJS	
	
// }


function resultNewAny(options) {
	
	var useJS = init_usejs;

	if (typeof options === "undefined") { options = {}; }

	if (typeof options.use_js_only !== "undefined") {
		useJS = options.use_js_only;
	}	

	var generator = options.generator || "rnp";

	//get data
	var n = $("#numbers").val();
	var l = $("#low").val();
	var h = $("#high").val();	
	var lines = parseInt($("#txt_line").val());
	var range = $("#numlist").val();
	var unique = getBooleanValue($("#unique").val(), true);
	var csv = $("#csv").val();
	var oddeven = getOddEven();
	var oddqty = getOddQty();
	var sorted = getBooleanValue($("#sorted").val(), false);
	var order_matters = getBooleanValue($("#order_matters").val(), false);
	var totals_only = $("#totals_only").prop("checked");	
	var last_roll_only = $("#last_roll_only").prop("checked");

	//N_of_L specific values
	var len = $("#length").val();
	var num_type = options.num_type;
	var digit_term = options.digit_term;
	var number_term = options.number_term;
	var generic_slug = options.generic_slug;
	var dec_low = options.dec_low;
	var dec_high = options.dec_high;
		
	n = validateIntInput(n, init_numbers);
	l = validateIntInput(l, init_low);
	h = validateIntInput(h, init_high); //999999999999999000000 //9999999999999999999; //validateIntInput(h, 100);	
	lines = validateIntInput(lines, 5);	
	len = validateIntInput(len, init_length);

	if (isNaN(lines) || lines < 1) {
		lines = 1;
	}
	
	if (lines > MAXLINES) {
		lines = MAXLINES;
	}

	if (h > 9999999999999999) {
		
	}

	
	//process data   	
	if (n > 1000000000) {
		n = 5;	//done for kishore
	}
	
	if (l > h) {
		//swap
		var t = l;
		l = h;
		h = t;	
	}	


	//console.log("generator", generator);

	var sets = [[n, l, h]]; //first default set

	//additonal sets requested by user
	var additional_sets = getAdditionalSets(generator);
	var additional_sets_str = "";		

	//merge all sets
	if (additional_sets.length > 0) {
		sets = sets.concat(additional_sets);
		additional_sets_str = getSetsString(additional_sets);
	}

	//additonal filters requested by user
	var additional_filters = getAdditionalFilters();
	var additional_filters_str = getAdditionalFiltersString(additional_filters);

	//process ranges
	additional_filters = processAdditionalFilters(additional_filters);
	
	
	//total elements per row
	var total_coins_per_row = 0;

	//max high among sets e.g. [5,1,50], [2,1,26] -> 50
	var max_high = 1;

	for (var as = 0; as < sets.length; as++ ) {
		total_coins_per_row += sets[as][0];
		if (sets[as][2] > max_high) {
			max_high = sets[as][2];
		}
	}


	
	if (result_loop) {
		//in a start stop loop
		//just use js for results
		useJS = true;
	}

	if (result_loop_start_requested) {
		if (n > 1 && (init_page === "rnp" || init_page === "rad" )) {
			setupFlashButtons();
		} else {
			setupStopButtons();
		}
	} 

	
	
	var new_hash = "#!";
	var reload_event = "";
	var generator_base_url = "/";

	//build events and hash

	var click_label = generator; //use generator name as default click type for analytics

	if (generator === "n_of_l") {

		generator_base_url = "/"+generic_slug;

		new_hash = "#!" + "numbers=" + n + "&length=" + len +"&addfilters="+additional_filters_str;

		user_event = 'random-'+num_type+'-number-'+len+'-'+n+"-af-"+additional_filters_str;

		reload_event = user_event;

		click_label = generator+"_"+num_type;

	} else if (generator === "rad") {

		generator_base_url = "/";

		new_hash = "#!" + "numbers="+n+"&high="+h+"&length="+len+"&sets="+additional_sets_str+"&addfilters="+additional_filters_str+"&last_roll_only="+last_roll_only+"&totals_only="+totals_only;

		user_event = 'roll-d'+h+'-'+n+'-'+len+"-sets-"+additional_sets_str+"-af-"+additional_filters_str+"-last_roll-"+last_roll_only+"-totals-only-"+totals_only;

		reload_event = 'roll-d'+h+'-'+n+'-'+len;

	} else if (generator === "function") {

		generator_base_url = "/functions/function";

		new_hash = "#!" + "function_name=" + options.function_name + "&range=" + range+"&addfilters="+additional_filters_str;

		user_event = 'function-'+options.function_name+'-range-'+range+"-af-"+additional_filters_str;

		reload_event = user_event;

	} else if (generator === "rng") {
		//rng

		generator_base_url = "/randomnumbergenerator/combinations-generator";

		new_hash = "#!" + "numbers="+n+"&lines="+lines+"&low="+l+"&high="+h+"&unique="+unique+"&order_matters="+order_matters+"&csv="+csv+"&oddeven="+oddeven+"&oddqty="+oddqty+"&sorted="+sorted+"&sets="+additional_sets_str+"&addfilters="+additional_filters_str;			

		user_event = 'rng-'+n+'-'+lines+'-'+l+'-'+h+"-unique-"+unique+"-order_matters-"+order_matters+"-csv-"+csv+"-oddeven-"+oddeven+"-oddqty-"+oddqty+"-sorted-"+sorted+"-sets-"+additional_sets_str+"-af-"+additional_filters_str;		

		reload_event = 'rng-'+n+'-'+lines+'-'+l+'-'+h;

	} else {
		//default rnp

		generator_base_url = "/randomnumbergenerator";

		new_hash = "#!" + "numbers=" + n + "&low=" + l + "&high=" + h 
	+ "&unique=" + unique + "&csv=" + csv + "&oddeven=" + oddeven + "&oddqty=" + oddqty+"&sorted="+sorted+"&addfilters="+additional_filters_str;	

		user_event = 'random-numbers-'+n+'-'+l+'-'+h+"-unique-"+unique+"-oddeven-"+oddeven+"-csv-"+csv+"-oddqty-"+oddqty+"-sorted-"+sorted+"-af-"+additional_filters_str;

		reload_event = 'random-numbers-'+n+'-'+l+'-'+h;
	}
		

	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;	

	if (!uniqueNumbersPossible(n, l, h, oddeven)) {
		unique = false;
	}

	if (!useJS) { 		
	
		//build urls
				
		var newurlpage = generator_base_url;

		if (generator === "function") {
			newurlpage = "/functions/"+options.function_name;
		} else if (generator === "rad") {
			if (h === 6 && n <= 10) {
				newurlpage = buildRollUrl(h, n, 1); //only use number of dice in url				
			} else if (h <= 20 || h === 48 || h === 120) {
				newurlpage = buildRollUrl(h, 1, 1); //only use number of sides in url				
			}
		} else if (generator === "n_of_l") {
			newurlpage = getNewUrl_N_of_L(generic_slug, len, digit_term, number_term);
		} else if (generator === "rng") {
			newurlpage = generator_base_url;
		} else {
			newurlpage = getNewUrl_RNP(n, l, h);
		}
	
		var url_event = newurlpage;	
		var newurl = newurlpage + new_hash;
		
		//check events			
		var isNewUrlEvent = checkNewEvent("url_event", url_event);		
	
		//for urls coming directly
		//of the form randomnumberbetween 
		//on second event direct to proper page as this page may have low coverage
		if (generator === "rnp" && !isNewUserEvent && user_click_event_count == 1 && window.location.pathname.indexOf("between") !== -1 && !isCurrLocationWihoutHash(url_event))  {		
			window.location = newurl;
			return;
		}
			
		
		//PROCESS
		
		//if (isNewUrlEvent) {
		if (forceReloadPage 
			|| isNewReloadEvent 
			|| user_click_event_count >= countdown_to_new_request 
		) {

			/* 
				this part reloads the page
				replaced with refreshAds mechanism instead 	
				
				// if (isCurrLocationWihoutHash(url_event)) {
				// 	//should reload but won't reload because the url is the same
				// 	var tmpurl = generator_base_url;	
				// 	tmpurl = getCodeAppendedUrl(tmpurl) + new_hash;
				// 	newurl = tmpurl;
				// }

				// if (result_loop_start_requested) {
				// 	newurl += "&start=true";
				// }

				// if (user_click_event_count >= countdown_to_new_request){	
				// 	trackRNGClickEvent('reload', user_event);
				// }

				// window.location = newurl;	

			*/	

			
			refreshAds();

			if (isNewReloadEvent) {
				trackRNGClickEvent('newevent', init_page);
			} else if (user_click_event_count >= countdown_to_new_request) {
				trackRNGClickEvent('reload', user_event);
			} 

			user_click_event_count = 0;
			useJS = true;		
			

		}
		// else if (isNewReloadEvent || 
		// 	(!isNewUserEvent && user_click_event_count >= countdown_to_new_request)
		// 	) { //should reload but won't reload because the url is the same
			

		// 	var tmpurl = "/randomnumbergenerator";		
			
		// 	// //find a diff url
		// 	// do {
		// 	// 	var r = getQuickRandInt(1,3);
		// 	// 	if (r == 1 && n <= 10) {
		// 	// 		tmpurl = "/pick"+n+"randomnumbers";
		// 	// 	} else if (r == 1 && n <= 20) {
		// 	// 		tmpurl = "/"+n+"randomnumbers";
		// 	// 	} else if ( r == 2) {
		// 	// 		tmpurl = "/randomnumbergenerator";
		// 	// 	} else {
		// 	// 		tmpurl = "/randomnumbers";
		// 	// 	}
		// 	// } while (isCurrLocationWihoutHash(tmpurl));
			
		// 	tmpurl = getCodeAppendedUrl(tmpurl);
			
		// 	if (result_loop_start_requested) {
		// 		new_hash += "&start=true";
		// 	}

		// 	window.location = tmpurl + new_hash;			
			
		// } 
		else {
			// //not a urlevent
			// //not a reload event
			// //could be a new event
			
			// if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
			// 	//if not a new event and time is up, simply reload
			// 	//dont do this on new event, to avoid onhashchange events			
			// 	trackRNGClickEvent('reload', user_event);
			// 	window.location.reload();	
			// } else {
				
			// 	//time is not up yet
			// 	//or a new event (but not a new reload event)
			
			// 	//usejs to load numbers
			// 	useJS = true;
					
			// }

			useJS = true;

		}
	
	}//not useJS
		
		
	if (useJS)  {
		
		//load numbers
		
		if (!loading_numbers) {	
		
			loading_numbers = true;

			var result = "";
			download_numbers = "";			
			
			/**** UPDATE RESULT  ****/

			if (generator === "function") {
				result = getFunctionResults({function_name: options.function_name, range: range, addfilters: additional_filters});
				//download numbnumers auotmatically set in function above
				//download_numbers = download_numbers;	
			} else if (generator === "rad") {
				result = getNumbers_Dice({len: len, sets: sets, addfilters: additional_filters, max_high: max_high, total_coins_per_row: total_coins_per_row, totals_only: totals_only, last_roll_only: last_roll_only, get_counts: !result_loop });
				//download numbers auotmatically set in function above					
			} else if (generator === "n_of_l") {
				result = getNumbers_N_of_L({numbers: n, len: len, low: dec_low, high: dec_high, num_type: num_type, oddeven: oddeven, unique: unique, oddqty: oddqty, sorted: sorted, addfilters: additional_filters });
				//download numbers auotmatically set in function above
				//download_numbers = download_numbers;	
			} else if (generator === "rng") {
				result = getNumbersMultipleLines({total_lines: lines, numbers: n, low: l, high: h, oddeven: oddeven, oddqty: oddqty, unique: unique, order_matters: order_matters, sorted: sorted, sets: additional_sets, addfilters: additional_filters}, csv);	
			} else {	
				
				result = getNumbers({numbers: n, low: l, high: h, oddeven: oddeven, unique: unique, oddqty: oddqty, sorted: sorted, addfilters: additional_filters }, csv);

				//send stopped numbers back to always include in the result
				//result = stopped_numbers.toString() + " " + result;

				// if (stopped_numbers.length > 0) {
				// 	result = result + "<span class='stopped_numbers'>" + stopped_numbers.toString() + "</span>";
				// }

				download_numbers = result;					
			}			
												

			updateResult(result);
			

			/**** END UPDATE RESULT  ****/
			
			if (!result_loop) { //dont do these if in a loop				
							
				trackRNGClickEvent(click_label, user_event);
				if (result_loop_start_requested) {
					trackRNGClickEvent('start', user_event);
				}
				
				//reset min-height that might have been set in updateResult to avoid flicker
				//reset it so it does not stick for new results				
				//$(".result").css("min-height", "auto");

				//add classes to modify font-size etc
				//safe to do class changes at beginning of loop or go btn			
				$("#resultVal").removeClass("xlarge large medium") ;
				if (generator === "rnp") {
					if (n <= 1 && h <= 1000) {
						$("#resultVal").addClass("xlarge");
					} else if (n <= 2 && h <= 1000) {
						$("#resultVal").addClass("large");
					} else if (n <= 5 && h <= 100) {
						$("#resultVal").addClass("medium");
					} 
				} else if (generator === "n_of_l") {
					if (n <= 1 && len <= 4) {
						$("#resultVal").addClass("xlarge");
					} else if (n <= 1 && len <= 7) {
						$("#resultVal").addClass("large");
					} else if (n <= 1 && len <= 10) {
						$("#resultVal").addClass("medium");
					} else if (n <= 2 && len <= 3) {
						$("#resultVal").addClass("large");
					} else if (n <= 2 && len <= 5) {
						$("#resultVal").addClass("medium");
					}
				}	

				//change window hash for bookmarking
				if (isNewUserEvent) {
					dont_trigger_hashchange = true;
					setHash(new_hash);
				}
				
				if (generator === "n_of_l") {
					updateCombinatoricsXdigit(len, dec_high - dec_low + 1);
				} else {
					updateCombinatorics(n, l, h, unique);
				}

			}	
			
		}
			
	}//useJS	
	
}


function resultNewFunc(options) {
	if (typeof options === "undefined") { options = {}; }
	options.generator = "function";
	options.function_name = init_number_function;	
	resultNewAny(options);	
}

function resultNewDice(options) {
	if (typeof options === "undefined") { options = {}; }
	options.generator = "rad";
	resultNewAny(options);	
}

function resultNewRNP(options) {

	/* this is the orig resultNew function 
		archived 20200526
		resultNewAny fucntion now handles other cases 
	*/	
	
	var useJS = init_usejs;

	if (typeof options === "undefined") { options = {}; }

	if (typeof options.use_js_only !== "undefined") {
		useJS = options.use_js_only;
	}	


	//get data
	var n = $("#numbers").val();
	var l = $("#low").val();
	var h = $("#high").val();
	var unique = getBooleanValue($("#unique").val(), true);
	var csv = $("#csv").val();
	var oddeven = getOddEven();
	var oddqty = getOddQty();
	var sorted = getBooleanValue($("#sorted").val(), false);

		
	n = validateIntInput(n, 5);
	l = validateIntInput(l, 0);
	h = validateIntInput(h, 100); //999999999999999000000 //9999999999999999999; //validateIntInput(h, 100);	

	
	if (h > 9999999999999999) {
		
	}

	
	//process data   	
	if (n > 1000000000) {
		n = 5;	//done for kishore
	}
	
	if (l > h) {
		//swap
		var t = l;
		l = h;
		h = t;	
	}	
	
	if (result_loop) {
		//in a start stop loop
		//just use js for results
		useJS = true;
	}
	
	var new_hash = "#!" + "numbers=" + n + "&low=" + l + "&high=" + h 
	+ "&unique=" + unique + "&csv=" + csv + "&oddeven=" + oddeven + "&oddqty=" + oddqty+"&sorted="+sorted;	
		
	//build events
	user_event = 'random-numbers-'+n+'-'+l+'-'+h+"-unique-"+unique+"-oddeven-"+oddeven+"-csv-"+csv+"-oddqty-"+oddqty+"-sorted-"+sorted;
	var reload_event = 'random-numbers-'+n+'-'+l+'-'+h;
	
	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;	

	if (!useJS) { 		
	
		//build urls
				
		var newurlpage = "/randomnumbergenerator";
		var qs_params = "";	
		
		if (n > 1 && n <= 7 && (h >= 45 && h <= 70) ) { //probably lottery numbers
			
			// newurlpage = "/" + n + "randomnumbersbetween" + "1" + "and" + h; //use 1 for low, hash will contain actual 'low' value
			// qs_params = "";
			
		} else if (n == 1 && l == 1 && (h <= 100 || h == 100 || h == 1000)) {		
			
			// newurlpage = "/randomnumbergenerator/" + l + "-" + h;		
			// qs_params = "";
			
		} else if (n == 1) {		
			
			// newurlpage = "/randomnumber";
			
			// if (h > 0 && h <= 100) { 
			// 	qs_params = "?high=" + h;
			// } else if (h > 0 && h <= 10000) { 
			// 	//qs_params = "?high=" + Math.round(h/100) * 100;
			// } else {
			// 	qs_params = "";
			// }
			
			
		} else if (n > 1 && n <= 10 && h <= 100) {		
			
			// newurlpage = "/pick"+n+"randomnumbers";		
			// qs_params = "";
			
		} else if (n > 0 && n <= 20) {		
			
			// newurlpage = "/"+n+"randomnumbers";		
			// qs_params = "";
			
		} 	
	
		var url_event = newurlpage + qs_params;	
		var newurl = newurlpage + qs_params + new_hash;
		
		//check events			
		var isNewUrlEvent = checkNewEvent("url_event", url_event);		
	
		//for urls coming directly
		//of the form randomnumberbetween 
		//on second event direct to proper page as this page may have low coverage
		if (!isNewUserEvent && user_click_event_count == 1 && window.location.pathname.indexOf("between") !== -1 && !isCurrLocationWihoutHash(url_event))  {		
			window.location = newurl;
			return;
		}
			
		
		//PROCESS
		
		//if (isNewUrlEvent) {
		if (forceReloadPage 
			|| isNewReloadEvent 
			|| user_click_event_count >= countdown_to_new_request 
		) {

			if (isCurrLocationWihoutHash(url_event)) {
				//should reload but won't reload because the url is the same
				var tmpurl = "/randomnumbergenerator";	
				tmpurl = getCodeAppendedUrl(tmpurl) + new_hash;
				newurl = tmpurl;
			}

			if (result_loop_start_requested) {
				newurl += "&start=true";
			}

			window.location = newurl;

		}
		// else if (isNewReloadEvent || 
		// 	(!isNewUserEvent && user_click_event_count >= countdown_to_new_request)
		// 	) { //should reload but won't reload because the url is the same
			

		// 	var tmpurl = "/randomnumbergenerator";		
			
		// 	// //find a diff url
		// 	// do {
		// 	// 	var r = getQuickRandInt(1,3);
		// 	// 	if (r == 1 && n <= 10) {
		// 	// 		tmpurl = "/pick"+n+"randomnumbers";
		// 	// 	} else if (r == 1 && n <= 20) {
		// 	// 		tmpurl = "/"+n+"randomnumbers";
		// 	// 	} else if ( r == 2) {
		// 	// 		tmpurl = "/randomnumbergenerator";
		// 	// 	} else {
		// 	// 		tmpurl = "/randomnumbers";
		// 	// 	}
		// 	// } while (isCurrLocationWihoutHash(tmpurl));
			
		// 	tmpurl = getCodeAppendedUrl(tmpurl);
			
		// 	if (result_loop_start_requested) {
		// 		new_hash += "&start=true";
		// 	}

		// 	window.location = tmpurl + new_hash;			
			
		// } 
		else {
			// //not a urlevent
			// //not a reload event
			// //could be a new event
			
			// if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
			// 	//if not a new event and time is up, simply reload
			// 	//dont do this on new event, to avoid onhashchange events			
			// 	trackRNGClickEvent('reload', user_event);
			// 	window.location.reload();	
			// } else {
				
			// 	//time is not up yet
			// 	//or a new event (but not a new reload event)
			
			// 	//usejs to load numbers
			// 	useJS = true;
					
			// }

			useJS = true;

		}
	
	}//not useJS
		
		
	if (useJS)  {
		
		//load numbers
		
		if (!loading_numbers) {	
		
			loading_numbers = true;
			
			/**** UPDATE RESULT  ****/
			
			var line = getNumbers({numbers: n, low: l, high: h, oddeven: oddeven, unique: unique, oddqty: oddqty, sorted: sorted}, csv);
			
			var result = line;

			//safe to do changes at beginning of loop or go btn
			$("#resultVal").removeClass("large medium") ;
			if (n <= 2 && h <= 1000) {
				$("#resultVal").addClass("large");
			} else if (n <= 5 && h <= 100) {
				$("#resultVal").addClass("medium");
			} 
			
			updateResult(result);

			download_numbers = result;	

			/**** END UPDATE RESULT  ****/
			
			if (!result_loop) { //dont do these if in a loop				
							
				trackRNGClickEvent('rnp', user_event);			

				if (result_loop_start_requested) {
					trackRNGClickEvent('start', user_event);
				}

				//change window hash for bookmarking
				if (isNewUserEvent) {
					dont_trigger_hashchange = true;
					setHash(new_hash);
				}
				
				updateCombinatorics(n, l, h, unique);

			}	
			
		}
			
	}//useJS	
	
}

function resultNewConverter() {
	
	var result = "";
	
	var range = $("#numlist").val();
	
	var num_type = $("#from").val();
	var num_type_to = $("#to").val();
	
	var csv = $("#csv").prop("checked");
	
	//build events			
	user_event = 'convert-'+num_type+'-'+num_type_to+'-'+range;
	var reload_event = 'convert-'+num_type+'-'+num_type_to;
	
	//build urls
	
	var generic_slug = "/converters/numberconverter";
			
	var newurlpage = "/"+generic_slug;
	var qs_params = "";
	
	newurlpage = "/converters/" + num_type + "converter/" + num_type + "to" + num_type_to;
	qs_params = "";
	
	
	var url_event = newurlpage + qs_params;	
	var new_hash = "#!" + "range="+range;	
	var newurl = newurlpage + qs_params + new_hash;
	
	//check events
	
	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewUrlEvent = checkNewEvent("url_event", url_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;
	
	//PROCESS
		
	if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
		window.location = newurl;			
	} else if (isNewReloadEvent) { //should reload but won't reload because the url is the same
		var tmpurl = "/hexcode/hexconverter";		
		//find a diff url
		do {
			var r = getQuickRandInt(1,10);
			if (r >= 9) {
				tmpurl = "/hexcode/hexconverter";
			} else {
				tmpurl = "/hexcode/hexconverter?code="+r;
			}
		} while (isCurrLocationWihoutHash(tmpurl));
		
		window.location = tmpurl + new_hash;			
		
	} else {
		//not a urlevent
		//not a reload event
		//could be a new event
		
		if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
			//if not a new event and time is up, simply reload
			//dont do this on new event, to avoid onhashchange events			
			trackRNGClickEvent('reload', user_event);
			window.location.reload();	
		} else {
			
			//time is not up yet
			//or a new event (but not a new reload event)
		
			//load numbers
			if (!loading_numbers) {
							
				loading_numbers = true;			
				
				user_click_event_count++;
				
				trackRNGClickEvent('convert', user_event);
				
				//change window hash for bookmarking
				if (isNewUserEvent) {
					dont_trigger_hashchange = true;
					setHash(new_hash);
				}
							
				result = getConverterResults(range, num_type, num_type_to, csv);
				updateResult(result);
				
			}//loading numbers
		
		} 
		
	}
	
}

function resultNewHex(options) {
	if (typeof options === "undefined") { options = {}; }
	options.generator = "n_of_l";
	options.num_type = "hex";
	options.digit_term = "digit";
	options.number_term = "hex-codes";
	options.generic_slug = "hex-code-generator";
	options.dec_low = 0;
	options.dec_high = 15;
	resultNewAny(options);
	// resultNew_N_of_L("hex", "digit", "hex-codes", "hex-code-generator", 0, 15);
}

function resultNewBin(options) {
	if (typeof options === "undefined") { options = {}; }
	options.generator = "n_of_l";
	options.num_type = "bin";
	options.digit_term = "bit";
	options.number_term = "binary-number";
	options.generic_slug = "binary-number-generator";
	options.dec_low = 0;
	options.dec_high = 1;
	resultNewAny(options);
	// resultNew_N_of_L("bin", "bit", "binary-number", "binary-number-generator", 0, 1);
}

function resultNewHex_() {
	resultNew_N_of_L("hex", "digit", "hex-codes", "hex-code-generator", 0, 15);
}

function resultNewBin_() {
	resultNew_N_of_L("bin", "bit", "binary-number", "binary-number-generator", 0, 1);
}


function resultNewCode() {
	
	var numlist = [];
	
	var n = $("#numbers").val();
	var l = $("#length").val();
			
	user_event = 'random-code-'+n+'-'+l;
	
	var isNewEvent = checkNewUserEvent(user_event);
	
	user_click_event_count++;
	
	trackRNGClickEvent('pin', user_event);
		
    n = validateIntInput(n, 1);
	l = validateIntInput(l, 4);		
		
	if ( (!isNewEvent) && user_click_event_count < countdown_to_new_request) {
		
		//use js
		if (!loading_numbers) {
			
			if (l > MAX_LENGTH) {
				result= "Too Long";
			} else { 			 
			
				loading_numbers = true;			
				
				var result = "";				
			
				for (var i = 0; i < n; i++) { 
					
					/*		
					var nums = getNumbers(l, 0, 9, 0, 0);				
					var decs = nums.split(" ");
					*/
												
					var decs = getNumbersArray({numbers: l, low: 0, high: 9, oddeven: 0, unique: 0});
							
					var hex = "";				
					for (var j = 0; j < decs.length; j++) {
						hex += decs[j];						
					}
					
					numlist.push(hex);
					
					result += hex + " ";
				
				}
				
			}
			
			download_numbers = numlist;
			
			updateResult(result);
		}
		
	} else {
		
		//use reload		
		if (n != undefined && n > 1) {
			window.location = "/" + n + "-random-"+l+"-digit-codes";
		} else {		
			window.location = "/" + l + "-digit-code-generator";
		}
	}
	
}



/* NOT COMPLETE */
/* generate n numbers of length l of type num_type */
function resultNew_N_of_L(num_type, digit_term, number_term, generic_slug, dec_low, dec_high) {
	
	
	//get data
	var n = $("#numbers").val();
	var len = $("#length").val();
	
	n = validateIntInput(n, init_numbers);
	len = validateIntInput(len, init_length);
	
	//process data
	
	//build events
	user_event = 'random-'+num_type+'-number-'+len+'-'+n;	
	var reload_event = user_event;
			
	//build urls
	
	var newurlpage = "/"+generic_slug;
	var qs_params = "";
	
	if (len > 0 && len <= 20) { 
		
		newurlpage = "/" + "random-"+len+"-"+digit_term+"-"+number_term+"-generator"; 
		qs_params = "";
		
	}
	
	var url_event = newurlpage + qs_params;	
	var new_hash = "#!" + "numbers=" + n + "&length=" + len;
	var newurl = newurlpage + qs_params + new_hash;
	
	
	//check events
	
	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewUrlEvent = checkNewEvent("url_event", url_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;
	
	
	//for urls coming directly
	//of the form "random-x-digit-number-generator" 
	//on second event direct to proper page as this page may have low coverage
	/*
	if (!isNewUserEvent && user_click_event_count == 1 && window.location.pathname.indexOf("-digit") !== -1 && !isCurrLocationWihoutHash(url_event))  {		
		window.location = newurl;
		return;
	}
	*/
	
	//PROCESS
	
	if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
		window.location = newurl;			
	} else if (isNewReloadEvent) { //should reload but won't reload because the url is the same
		var tmpurl = "/"+generic_slug;		
		//find a diff url
		do {
			var r = getQuickRandInt(1,10);
			if (r >= 9) {
				//tmpurl = "/randomdigits";
			} else {
				tmpurl = tmpurl +"?code="+r;
			}
		} while (isCurrLocationWihoutHash(tmpurl));
		
		window.location = tmpurl + new_hash;			
		
	} else {
		//not a urlevent
		//not a reload event
		//could be a new event
		
		if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
			//if not a new event and time is up, simply reload
			//dont do this on new event, to avoid onhashchange events			
			trackRNGClickEvent('reload', user_event);
			window.location.reload();	
		} else {
			
			//time is not up yet
			//or a new event (but not a new reload event)
		
			var numlist = [];

			//load numbers
			if (!loading_numbers) {
							
				loading_numbers = true;					
				
				var result = "";	
				
				if (n > 0) {
					
					/*
					//use this if 0 not allowed as first digit
					//get first digit
					result = getNumbers(1, 1, 9);
					if (n > 1) {
						//get rest of the digits
						result  += " " + getNumbers(n-1, 0, 9);
					}*/
					
										
					for (var i = 0; i < n; i++) { 
						
						/*
						var nums = getNumbers(len, dec_low, dec_high, 0, 0);				
						var decs = nums.split(" ");
						*/
						
						var decs = getNumbersArray({numbers: len, low: dec_low, high: dec_high, oddeven: 0, unique: 0});
						
										
						var hex = "";				
						for (var j = 0; j < decs.length; j++) {
							hex += (decToHex(decs[j])).toUpperCase();						
						}
						
						numlist.push(hex);
						
						if (num_type === "hex") {
							if (len === 6) {
								hex = "<span style='background-color: #"+hex+"; width: 20px; height: 20px; display: inline-block; margin: 0 5px 0 0;' class='num-icon'></span>" + hex;	
							}
						}
						result += "<div style='display: inline-block; margin: 5px;'>" + hex + " " + "</div>";
					
					}
					
					
					//result = getNumbers(n, 0, 9, 0, 0);
					
				}	
				
				download_numbers = numlist;
				
				updateResult(result);

				if (!result_loop) { //dont do these if in a loop	
				
					trackRNGClickEvent('n_of_l_'+num_type, user_event);									
					
					//change window hash for bookmarking
					if (isNewUserEvent) {
						dont_trigger_hashchange = true;
						setHash(new_hash);						
					}

					updateCombinatoricsXdigit(len, dec_high - dec_low + 1);	

				}	
				
			}//loading numbers
		
		} 
		
	}	
							
}

function resultNewXDigit(options) {
	if (typeof options === "undefined") { options = {}; }
	options.generator = "n_of_l";
	options.num_type = "xdigit";
	options.digit_term = "digit";
	options.number_term = "number";
	options.generic_slug = "randomdigits";
	options.dec_low = 0;
	options.dec_high = 9;
	resultNewAny(options);
	// resultNew_N_of_L("xdigit", "digit", "number", "randomdigits", 0, 9);
}


function resultNewXDigit_() {
	resultNew_N_of_L("xdigit", "digit", "number", "randomdigits", 0, 9);
}


function resultDecisionNew() {
	
	var n = $("#numbers").val();
	var l = $("#txt_line").val();
	var csv = ","; //$("#csv").val();

	//to allows weights, e.g. Yes,No,No will put more weight on No
	var unique = false; //getBooleanValue($("#unique").val(), true);

	n = validateIntInput(n, 1);
	l = validateIntInput(l, 1);

	var decisions = [];

	//$("#set_row find("input");

	$(".decision_input").each(function( index ) {
		var d = $( this ).val();
		//d = sanitizeChoice(d);
		decisions.push(d);
	});
	
	var total_ds = decisions.length;

	var range = decisions.join(","); 

	//build events	
	user_event = 'random-decision-'+range+'-'+n+'-'+l+"-unique-"+unique+"-csv-"+csv+"-start-"+result_loop_start_requested;
	var reload_event = 'random-decision-'+range;	

	//build urls
		
	var rng_url = "/random-decision-maker";
				
	var newurlpage = rng_url;
	var qs_params = "";	

	var url_event = newurlpage + qs_params;

	var new_hash = "#!" + "numbers=" + n + "&lines=" + l + "&range=" + range + "&unique=" + unique + "&csv=" + csv + "&start=" + result_loop_start_requested;	
	
	var newurl = newurlpage + qs_params + new_hash;

	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewUrlEvent = checkNewEvent("url_event", url_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;
	
	trackRNGClickEvent('decision', user_event);	
			
	if (total_ds > 0) {


		if (isNewReloadEvent) { //should reload but won't reload because the url is the same
					
			var tmpurl = getCodeAppendedUrl(rng_url);
					
			window.location = tmpurl + new_hash;			
					
		
		} else {

			//not a urlevent
			//not a reload event
			//could be a new event
						
				
			//time is not up yet
			//or a new event (but not a new reload event)
		
			//load numbers
			if (!loading_numbers) {
							
				loading_numbers = true;			
				
				user_click_event_count++;
				
				trackRNGClickEvent('decision', user_event);
				
				//change window hash for bookmarking
				if (isNewUserEvent) {
					dont_trigger_hashchange = true;
					setHash(new_hash);
				}				
				
				var result = "";
			
				result = getCombinatorResults({total_lines: l, numbers: n, unique: unique, separator_re: ","}, range, csv);
				
				result = sanitizeChoice(result);

				updateResult(result);										
				
				
			}//loading numbers		
			
			
		}
		
	}


}


function resultDecisionNew_() {
	
	var d1 = $("#d1").val();
	var d2 = $("#d2").val();
	
	var decision_inputs = $(".decision_input");
	var total_ds = decision_inputs.length;
	
	user_event = 'random-decision-'+d1+'-or-'+d2;
			
	var isNewEvent = checkNewUserEvent(user_event);
	
	trackRNGClickEvent('click', user_event);	
			
	if (total_ds > 0) {
		
		if ( (!isNewEvent)) {
			//use js
			
			if (!loading_numbers) {
				loading_numbers = true;
				var result = "";
				
				var choice = getNumbers({numbers: 1, low: 1, high: total_ds, oddeven: 0, unique: 0});
				
				result = escapeHtml($("#d"+choice).val());
								
				updateResult(result);
			}
			
		} else {	
			//use reload		
			window.location = "/random-decision?d1=" + encodeURIComponent(d1) + "&d2=" + encodeURIComponent(d2);
		}
	}
}

function getOddEven(){
	var oddeven = $("#oddeven").val();	
	//var oddeven = $('input:radio[name=oddeven]:checked').val();	
	return oddeven;
}

function getOddQty(){
	//var oddeven = $("#oddeven").val();	
	return validateIntInput($("#oddqty").val(), 0);
}

function resultNewRNG(options) {
	if (typeof options === "undefined") { options = {}; }
	options.generator = "rng";
	resultNewAny(options);	
}

function resultNewRNG_(options) {
	
	var useJS = init_usejs;

	if (typeof options === "undefined") { options = {}; }

	if (typeof options.use_js_only !== "undefined") {
		useJS = options.use_js_only;
	}		
	
	var result = "";
	
	var n = $("#numbers").val(); 
	var lines = parseInt($("#txt_line").val());
	var l = $("#low").val();
	var h = $("#high").val();	
	var unique = getBooleanValue($("#unique").val(), true);
	var csv = $("#csv").val();	
	var oddeven = getOddEven();
	var oddqty = getOddQty();
	var order_matters = getBooleanValue($("#order_matters").val(), false);
	var sorted = getBooleanValue($("#sorted").val(), false);
	
	n = validateIntInput(n, 5);
	l = validateIntInput(l, 0);
	h = validateIntInput(h, 100);
	lines = validateIntInput(lines, 5);	
	
	
	if (isNaN(lines) || lines < 1) {
		lines = 1;
	}
	
	if (lines > MAXLINES) {
		lines = MAXLINES;
	}

	if (l > h) {
		//swap
		var t = l;
		l = h;
		h = t;	
	}
			
	var range = l+"-"+h;

	//additonal sets requested by user
	var additional_sets = getAdditionalSets();

	var additional_sets_str = getSetsString(additional_sets);
	
	var new_hash = "#!" + "numbers="+n+"&lines="+lines+"&low="+l+"&high="+h+"&unique="+unique+"&order_matters="+order_matters+"&csv="+csv+"&oddeven="+oddeven+"&oddqty="+oddqty+"&sorted="+sorted+"&sets="+additional_sets_str;	
	
			
	//build events			
	user_event = 'rng-'+n+'-'+lines+'-'+range+"-unique-"+unique+"-order_matters-"+order_matters+"-csv-"+csv+"-oddeven-"+oddeven+"-oddqty-"+oddqty+"-sorted-"+sorted+"-sets-"+additional_sets_str;
	var reload_event = 'rng-'+n+'-'+lines+'-'+range;
	
	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;

	if (!useJS) { 

		//build urls
			
		var rng_url = "/randomnumbergenerator/combinations-generator";
					
		var newurlpage = rng_url;
		var qs_params = "";	

		/*
		if (n > 1 && n <= 7 && (h >= 45 && h <= 70) ) { //probably lottery numbers
			
			newurlpage = rng_url;
			qs_params = "?numbers="+n+"&high="+h;
			
		} else if (h > 0 && h <= 100 ) {
			
			newurlpage = rng_url + "/1-"+h;
			qs_params = "";
			
		} else if (h > 0 && h <= 10000 ) {
				
			newurlpage = rng_url + "1-"+ Math.round(h/100) * 100;
			qs_params = "";
			
		}	
		*/

		var url_event = newurlpage + qs_params;	
		var newurl = newurlpage + qs_params + new_hash;

		//check events		
		var isNewUrlEvent = checkNewEvent("url_event", url_event);

		//PROCESS
		
		/*if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
			window.location = newurl;			
		} else 
		*/
		if (forceReloadPage 
			|| isNewReloadEvent 
			|| user_click_event_count >= countdown_to_new_request 
		) {

			/* 
				this part reloads the page
				replaced with refreshAds mechanism instead 

				// if (isCurrLocationWihoutHash(url_event)) {
				// 		//should reload but won't reload because the url is the same
				// 		var tmpurl = rng_url;	
				// 		tmpurl = getCodeAppendedUrl(tmpurl) + new_hash;
				// 		newurl = tmpurl;
				// 	}
				
				// if (user_click_event_count >= countdown_to_new_request){	
				// 	trackRNGClickEvent('reload', user_event);
				// }
							
				// window.location = newurl;	

			*/
			
			refreshAds();

			if (isNewReloadEvent) {
				trackRNGClickEvent('newevent', init_page);
			} else if (user_click_event_count >= countdown_to_new_request) {
				trackRNGClickEvent('reload', user_event);
			} 

			user_click_event_count = 0;
			useJS = true;	

			
		} else {
			//not a urlevent
			//not a reload event
			//could be a new event
			
			// if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
			// 	//if not a new event and time is up, simply reload
			// 	//dont do this on new event, to avoid onhashchange events			
			// 	trackRNGClickEvent('reload', user_event);
			// 	window.location.reload();	
			// } else {
				
			// 	//time is not up yet
			// 	//or a new event (but not a new reload event)
			
			// 	//usejs to load numbers
			// 	useJS = true;
			
			// } 
			
			useJS = true;

		}

	}//not useJS


	if (useJS)  {

		//load numbers
		if (!loading_numbers) {
									
			loading_numbers = true;			
					
			/**** UPDATE RESULT  ****/

			result = getNumbersMultipleLines({total_lines: lines, numbers: n, low: l, high: h, oddeven: oddeven, oddqty: oddqty, unique: unique, order_matters: order_matters, sorted: sorted, sets: additional_sets}, csv);
				
			updateResult(result);
			
			/**** END UPDATE RESULT  ****/

			if (!result_loop) { //dont do these if in a loop
				
							
				trackRNGClickEvent('click', user_event);
		

				//change window hash for bookmarking
				if (isNewUserEvent) {
					dont_trigger_hashchange = true;
					setHash(new_hash);
				}
				
				updateCombinatorics(n, l, h, unique);

			}	
			
		}//loading numbers

	}//useJS
	
	
}

// function resultNewPNC_(options) {
	
// 	var useJS = init_usejs;

// 	if (typeof options === "undefined") { options = {}; }

// 	if (typeof options.use_js_only !== "undefined") {
// 		useJS = options.use_js_only;
// 	}		
	
// 	var result = "";
	
// 	var n = $("#numbers").val(); 
// 	var lines = parseInt($("#txt_line").val());
// 	var l = $("#low").val();
// 	var h = $("#high").val();	
// 	var unique = getBooleanValue($("#unique").val(), true);
// 	var csv = $("#csv").val();	
// 	var oddeven = getOddEven();
// 	var oddqty = getOddQty();
// 	var order_matters = getBooleanValue($("#order_matters").val(), false);
// 	var sorted = getBooleanValue($("#sorted").val(), false);
	
// 	n = validateIntInput(n, 5);
// 	l = validateIntInput(l, 0);
// 	h = validateIntInput(h, 100);
// 	lines = validateIntInput(lines, 5);	
	
	
// 	if (isNaN(lines) || lines < 1) {
// 		lines = 1;
// 	}
	
// 	if (lines > MAXLINES) {
// 		lines = MAXLINES;
// 	}

// 	if (l > h) {
// 		//swap
// 		var t = l;
// 		l = h;
// 		h = t;	
// 	}
			
// 	var range = l+"-"+h;

// 	//additonal sets requested by user
// 	var additional_sets = getAdditionalSets();

// 	var additional_sets_str = getSetsString(additional_sets);
	
// 	var new_hash = "#!" + "numbers="+n+"&lines="+lines+"&low="+l+"&high="+h+"&unique="+unique+"&order_matters="+order_matters+"&csv="+csv+"&oddeven="+oddeven+"&oddqty="+oddqty+"&sorted="+sorted+"&sets="+additional_sets_str;	
	
			
// 	//build events			
// 	user_event = 'rng-'+n+'-'+lines+'-'+range+"-unique-"+unique+"-order_matters-"+order_matters+"-csv-"+csv+"-oddeven-"+oddeven+"-oddqty-"+oddqty+"-sorted-"+sorted+"-sets-"+additional_sets_str;
// 	var reload_event = 'rng-'+n+'-'+lines+'-'+range;
	
// 	var isNewUserEvent = checkNewEvent("user_event", user_event);
// 	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
// 	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;

// 	if (!useJS) { 

// 		//build urls
			
// 		var rng_url = "/permutations-and-combinations";
					
// 		var newurlpage = rng_url;
// 		var qs_params = "";	

// 		/*
// 		if (n > 1 && n <= 7 && (h >= 45 && h <= 70) ) { //probably lottery numbers
			
// 			newurlpage = rng_url;
// 			qs_params = "?numbers="+n+"&high="+h;
			
// 		} else if (h > 0 && h <= 100 ) {
			
// 			newurlpage = rng_url + "/1-"+h;
// 			qs_params = "";
			
// 		} else if (h > 0 && h <= 10000 ) {
				
// 			newurlpage = rng_url + "1-"+ Math.round(h/100) * 100;
// 			qs_params = "";
			
// 		}	
// 		*/

// 		var url_event = newurlpage + qs_params;	
// 		var newurl = newurlpage + qs_params + new_hash;

// 		//check events		
// 		var isNewUrlEvent = checkNewEvent("url_event", url_event);

// 		//PROCESS
		
// 		/*if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
// 			window.location = newurl;			
// 		} else 
// 		*/
// 		if (forceReloadPage 
// 			|| isNewReloadEvent 
// 			|| user_click_event_count >= countdown_to_new_request 
// 		) {

// 			/* 
// 				this part reloads the page
// 				replaced with refreshAds mechanism instead 

// 				// if (isCurrLocationWihoutHash(url_event)) {
// 				// 		//should reload but won't reload because the url is the same
// 				// 		var tmpurl = rng_url;	
// 				// 		tmpurl = getCodeAppendedUrl(tmpurl) + new_hash;
// 				// 		newurl = tmpurl;
// 				// 	}
				
// 				// if (user_click_event_count >= countdown_to_new_request){	
// 				// 	trackRNGClickEvent('reload', user_event);
// 				// }
							
// 				// window.location = newurl;	

// 			*/
			
// 			refreshAds();

// 			if (isNewReloadEvent) {
// 				trackRNGClickEvent('newevent', init_page);
// 			} else if (user_click_event_count >= countdown_to_new_request) {
// 				trackRNGClickEvent('reload', user_event);
// 			} 

// 			user_click_event_count = 0;
// 			useJS = true;	

			
// 		} else {
// 			//not a urlevent
// 			//not a reload event
// 			//could be a new event
			
// 			// if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
// 			// 	//if not a new event and time is up, simply reload
// 			// 	//dont do this on new event, to avoid onhashchange events			
// 			// 	trackRNGClickEvent('reload', user_event);
// 			// 	window.location.reload();	
// 			// } else {
				
// 			// 	//time is not up yet
// 			// 	//or a new event (but not a new reload event)
			
// 			// 	//usejs to load numbers
// 			// 	useJS = true;
			
// 			// } 
			
// 			useJS = true;

// 		}

// 	}//not useJS


// 	if (useJS)  {

// 		//load numbers
// 		if (!loading_numbers) {
									
// 			loading_numbers = true;			
					
// 			/**** UPDATE RESULT  ****/
// 			//console.log("ml all");
// 			updateResult("Loading...");
// 			result = getNumbersMultipleLinesPNC({total_lines: lines, numbers: n, low: l, high: h, oddeven: oddeven, oddqty: oddqty, unique: unique, order_matters: order_matters, sorted: sorted, sets: additional_sets}, csv);
				
// 			var combinations_count = 0;
// 			if (isArray(result)) {
// 				combinations_count = result.length.toLocaleString();
// 			}			

// 			updateProgress("Generated "+formattedNumber(combinations_count)+" combinations");
// 			if (result.length > 100000) {
// 				updateResult('<div class="info">Results are ready to download.<br />Too many rows ('+formattedNumber(combinations_count)+') to display.<br />Click <a href="#" onclick="downloadLines(); return false;" class="download_link"><i class="material-icons">get_app</i>Download</a> to save as txt file.</div>');
// 			} else {
// 				updateResult(result.join("\n"));
// 			}
			
// 			/**** END UPDATE RESULT  ****/

// 			if (!result_loop) { //dont do these if in a loop
				
							
// 				trackRNGClickEvent('click', user_event);
		

// 				//change window hash for bookmarking
// 				if (isNewUserEvent) {
// 					dont_trigger_hashchange = true;
// 					setHash(new_hash);
// 				}
				
// 				updateCombinatorics(n, l, h, unique);

// 			}	
			
// 		}//loading numbers

// 	}//useJS
	
	
// }



function resultNewPNC(options) {
	
	var useJS = init_usejs;

	if (typeof options === "undefined") { options = {}; }

	if (typeof options.use_js_only !== "undefined") {
		useJS = options.use_js_only;
	}		
	
	var result = "";
	var result_set = [];
	
	var n = $("#numbers").val(); 
	var lines = parseInt($("#txt_line").val());
	var l = $("#low").val();
	var h = $("#high").val();
	var range = $("#numlist").val();	
	var unique = getBooleanValue($("#unique").val(), true);
	var csv = $("#csv").val();	
	var oddeven = getOddEven();
	var oddqty = getOddQty();
	var order_matters = getBooleanValue($("#order_matters").val(), false);
	var sorted = getBooleanValue($("#sorted").val(), false);
	
	n = validateIntInput(n, 5);
	l = validateIntInput(l, 0);		
	h = validateIntInput(h, 100);
	lines = validateIntInput(lines, 5);	
		
	if (isNaN(lines) || lines < 1) {
		lines = 1;
	}
	
	if (lines > MAXLINES) {
		lines = MAXLINES;
	}

	if (l > h) {
		//swap
		var t = l;
		l = h;
		h = t;	
	}

	var using_custom_list = false;

	//console.log("range", range);
		
	if (typeof range !== "undefined") {
		using_custom_list = true;
		
	} 

	//console.log(using_custom_list);

	var eventprefix = "pnc";
	var rng_url = "/permutations-and-combinations"; 		

	if (using_custom_list) {
		eventprefix = "pnclist";
		rng_url = "/permutations-and-combinations/list"; 
		range = range;
	} else {
		range = l+"-"+h;
	}

	//additonal sets requested by user
	var additional_sets = getAdditionalSets();
	var additional_sets_str = getSetsString(additional_sets);

	//additonal filters requested by user
	var additional_filters = getAdditionalFilters();
	var additional_filters_str = getAdditionalFiltersString(additional_filters);
	
	//console.log("afs", additional_filters_str);

	var new_hash = "#!" + "numbers="+n+"&lines="+lines+"&low="+l+"&high="+h+"&range="+range+"&unique="+unique+"&order_matters="+order_matters+"&csv="+csv+"&oddeven="+oddeven+"&oddqty="+oddqty+"&sorted="+sorted+"&sets="+additional_sets_str+"&addfilters="+additional_filters_str;	
	
	//build events			
	user_event = eventprefix+n+'-'+lines+'-'+range+"-unique-"+unique+"-order_matters-"+order_matters+"-csv-"+csv+"-oddeven-"+oddeven+"-oddqty-"+oddqty+"-sorted-"+sorted+"-sets-"+additional_sets_str+"-af-"+additional_filters_str;
	var reload_event = eventprefix+n+'-'+lines+'-'+range;
	
	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;

	if (!useJS) { 

		//build urls	
					
		var newurlpage = rng_url;
		var qs_params = "";	

		var url_event = newurlpage + qs_params;	
		var newurl = newurlpage + qs_params + new_hash;

		//check events		
		var isNewUrlEvent = checkNewEvent("url_event", url_event);

		//PROCESS
		
		/*if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
			window.location = newurl;			
		} else 
		*/
		if (forceReloadPage 
			|| isNewReloadEvent 
			|| user_click_event_count >= countdown_to_new_request 
		) {

			/* 
				this part reloads the page
				replaced with refreshAds mechanism instead 

				// if (isCurrLocationWihoutHash(url_event)) {
				// 		//should reload but won't reload because the url is the same
				// 		var tmpurl = rng_url;	
				// 		tmpurl = getCodeAppendedUrl(tmpurl) + new_hash;
				// 		newurl = tmpurl;
				// 	}
				
				// if (user_click_event_count >= countdown_to_new_request){	
				// 	trackRNGClickEvent('reload', user_event);
				// }
							
				// window.location = newurl;	

			*/
			
			refreshAds();

			if (isNewReloadEvent) {
				trackRNGClickEvent('newevent', init_page);
			} else if (user_click_event_count >= countdown_to_new_request) {
				trackRNGClickEvent('reload', user_event);
			} 

			user_click_event_count = 0;
			useJS = true;	

			
		} else {
			//not a urlevent
			//not a reload event
			//could be a new event
			
			// if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
			// 	//if not a new event and time is up, simply reload
			// 	//dont do this on new event, to avoid onhashchange events			
			// 	trackRNGClickEvent('reload', user_event);
			// 	window.location.reload();	
			// } else {
				
			// 	//time is not up yet
			// 	//or a new event (but not a new reload event)
			
			// 	//usejs to load numbers
			// 	useJS = true;
			
			// } 
			
			useJS = true;

		}

	}//not useJS


	if (useJS)  {

		//load numbers
		if (!loading_numbers) {
									
			loading_numbers = true;			
					
			/**** UPDATE RESULT  ****/
			//console.log("ml all");
			updateResult("Loading...");

			if (!using_custom_list) {
				result_set = getAllCombinationsFromListOrRange({total_lines: lines, numbers: n, low: l, high: h, oddeven: oddeven, oddqty: oddqty, unique: unique, order_matters: order_matters, sorted: sorted, sets: additional_sets, addfilters: additional_filters}, csv);
			} else {
				result_set = getAllCombinationsFromListOrRange({total_lines: lines, numbers: n, oddeven: oddeven, oddqty: oddqty, unique: unique, order_matters: order_matters, sorted: sorted, sets: additional_sets, addfilters: additional_filters, list_of_numbers: range, use_list: true}, csv);
			}

			result = result_set["content"];
			var user_list_used = result_set["user_list_used"];		

			var combinations_count = 0;
			if (isArray(result)) {
				combinations_count = result.length.toLocaleString();
			}			

			updateProgress("Generated "+combinations_count+" combinations");
			if (result.length > 100000) {
				updateResult(getDownloadResultsMsg(combinations_count));
			} else {
				updateResult(result.join("\n"));
			}
			
			/**** END UPDATE RESULT  ****/

			if (!result_loop) { //dont do these if in a loop
				
							
				trackRNGClickEvent(eventprefix, user_event);
		

				//change window hash for bookmarking
				if (isNewUserEvent) {
					dont_trigger_hashchange = true;
					setHash(new_hash);
				}
				
				if (!using_custom_list) {
					updateCombinatorics(n, l, h, unique);
				} else{
					updateCombinatorics(n, 1, user_list_used.length, unique, "list");
				}
				

			}	
			
		}//loading numbers

	}//useJS
	
	
}




function resultNewRandomizer(options) {
	
	var useJS = init_usejs;

	if (typeof options === "undefined") { options = {}; }

	if (typeof options.use_js_only !== "undefined") {
		useJS = options.use_js_only;
	}		
	
	var result = "";
	
	var n = $("#numbers").val();
	var l = $("#txt_line").val();
	var range = $("#numlist").val();
	var unique = getBooleanValue($("#unique").val(), true);
	var csv = $("#csv").val();
	var oddeven = getOddEven();	
	var oddqty = getOddQty();
	var order_matters = getBooleanValue($("#order_matters").val(), false);
	var sorted = getBooleanValue($("#sorted").val(), false);
	
	n = validateIntInput(n, 5);
	l = validateIntInput(l, 2);

	//additonal filters requested by user
	var additional_filters = getAdditionalFilters();
	var additional_filters_str = getAdditionalFiltersString(additional_filters);

	//process ranges
	additional_filters = processAdditionalFilters(additional_filters);
	
	var new_hash = "#!" + "numbers="+n+"&lines="+l+"&range="+range+"&unique="+unique+"&order_matters="+order_matters+"&csv="+csv+"&oddeven="+oddeven+"&oddqty="+oddqty+"&sorted="+sorted+"&addfilters="+additional_filters_str;	

	//build events			
	user_event = 'randomize-'+n+'-'+l+'-'+range+"-unique-"+unique+"-order_matters-"+order_matters+"-csv-"+csv+"-oddeven-"+oddeven+"-oddqty-"+oddqty+"-sorted-"+sorted+"-af-"+additional_filters_str;

	var reload_event = 'randomize-'+n+'-'+l+'-'+range;

	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;
	
	if (!useJS) {  
		
		//build urls
	
		var rng_url = "/numberlistrandomizer";
				
		var newurlpage = rng_url;
		var qs_params = "";	
		
		/*
		if (n > 1 && n <= 7 && (h >= 45 && h <= 70) ) { //probably lottery numbers
			
			newurlpage = "/numberrandomizer";
			qs_params = "?numbers="+n+"&high="+h;
			
		} */
		
		var url_event = newurlpage + qs_params;			
		var newurl = newurlpage + qs_params + new_hash;

		//check events		
		var isNewUrlEvent = checkNewEvent("url_event", url_event);		
		
		//PROCESS
			
		/*if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
			window.location = newurl;			
		} else 
		*/
		if (forceReloadPage 
			|| isNewReloadEvent 
			|| user_click_event_count >= countdown_to_new_request 
		) {

			/* 
				this part reloads the page
				replaced with refreshAds mechanism instead 

				// if (isCurrLocationWihoutHash(url_event)) {
				// 		//should reload but won't reload because the url is the same
				// 		var tmpurl = rng_url;	
				// 		tmpurl = getCodeAppendedUrl(tmpurl) + new_hash;
				// 		newurl = tmpurl;
				// 	}
				
				// if (user_click_event_count >= countdown_to_new_request){	
				// 	trackRNGClickEvent('reload', user_event);
				// }
							
				// window.location = newurl;	

			*/
			
			refreshAds();

			if (isNewReloadEvent) {
				trackRNGClickEvent('newevent', init_page);
			} else if (user_click_event_count >= countdown_to_new_request) {
				trackRNGClickEvent('reload', user_event);
			} 

			user_click_event_count = 0;
			useJS = true;	

			
		} else {
			//not a urlevent
			//not a reload event
			//could be a new event
			
			// if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
			// 	//if not a new event and time is up, simply reload
			// 	//dont do this on new event, to avoid onhashchange events			
			// 	trackRNGClickEvent('reload', user_event);
			// 	window.location.reload();	
			// } else {
				
			// 	//time is not up yet
			// 	//or a new event (but not a new reload event)
			
			// 	//usejs to load numbers
			// 	useJS = true;
			
			// } 
			
			useJS = true;

		}

	}

	if (useJS)  {

		//load numbers
		if (!loading_numbers) {
									
			loading_numbers = true;			
					
			/**** UPDATE RESULT  ****/

			var range_split = isSimpleRange(range);
			
			if (range_split === false) { 
				
				result = getCombinatorResults({total_lines: l, numbers: n, unique: unique, order_matters: order_matters, oddeven: oddeven, oddqty: oddqty, sorted: sorted, addfilters: additional_filters}, range, csv);
				
				updateResult(result);
			} else {
				
				result = getNumbersMultipleLines({total_lines: l, numbers: n, low: range_split[0], high: range_split[1], oddeven: oddeven, oddqty: oddqty, unique: unique, order_matters: order_matters, sorted: sorted, addfilters: additional_filters}, csv);					

				updateResult(result);
				updateCombinatorics(n, range_split[0], range_split[1], unique);
			}
			
			/**** END UPDATE RESULT  ****/
				
							
			trackRNGClickEvent('randomizer', user_event);
	

			//change window hash for bookmarking
			if (isNewUserEvent) {
				dont_trigger_hashchange = true;
				setHash(new_hash);
			}
								
			
		}//loading numbers

	}//useJS
			
	
}

function resultNewPNCList_(options) {	
	
	var useJS = init_usejs;

	if (typeof options === "undefined") { options = {}; }

	if (typeof options.use_js_only !== "undefined") {
		useJS = options.use_js_only;
	}		
	
	var result = "";
	
	var n = $("#numbers").val();
	var l = $("#txt_line").val();
	var range = $("#numlist").val();
	var unique = getBooleanValue($("#unique").val(), true);
	var csv = $("#csv").val();
	var oddeven = getOddEven();	
	var oddqty = getOddQty();
	var order_matters = getBooleanValue($("#order_matters").val(), false);
	var sorted = getBooleanValue($("#sorted").val(), false);
	
	n = validateIntInput(n, 5);
	l = validateIntInput(l, 2);
	
	var new_hash = "#!" + "numbers="+n+"&lines="+l+"&range="+range+"&unique="+unique+"&order_matters="+order_matters+"&csv="+csv+"&oddeven="+oddeven+"&oddqty="+oddqty+"&sorted="+sorted;	

	//build events			
	user_event = 'randomize-'+n+'-'+l+'-'+range+"-unique-"+unique+"-order_matters-"+order_matters+"-csv-"+csv+"-oddeven-"+oddeven+"-oddqty-"+oddqty+"-sorted-"+sorted;
	var reload_event = 'randomize-'+n+'-'+l+'-'+range;

	var isNewUserEvent = checkNewEvent("user_event", user_event);
	var isNewReloadEvent = checkNewEvent("reload_event", reload_event);
	var isOnloadEvent = user_click_event_count === 0 ? 1 : 0;
	
	if (!useJS) {  
		
		//build urls
	
		var rng_url = "/permutations-and-combinations/list";
				
		var newurlpage = rng_url;
		var qs_params = "";	
				
		var url_event = newurlpage + qs_params;			
		var newurl = newurlpage + qs_params + new_hash;

		//check events		
		var isNewUrlEvent = checkNewEvent("url_event", url_event);		
		
		//PROCESS
			
		/*if (isNewReloadEvent && !isCurrLocationWihoutHash(url_event)) {
			window.location = newurl;			
		} else 
		*/
		if (forceReloadPage 
			|| isNewReloadEvent 
			|| user_click_event_count >= countdown_to_new_request 
		) {

			/* 
				this part reloads the page
				replaced with refreshAds mechanism instead 

				// if (isCurrLocationWihoutHash(url_event)) {
				// 		//should reload but won't reload because the url is the same
				// 		var tmpurl = rng_url;	
				// 		tmpurl = getCodeAppendedUrl(tmpurl) + new_hash;
				// 		newurl = tmpurl;
				// 	}
				
				// if (user_click_event_count >= countdown_to_new_request){	
				// 	trackRNGClickEvent('reload', user_event);
				// }
							
				// window.location = newurl;	

			*/
			
			refreshAds();

			if (isNewReloadEvent) {
				trackRNGClickEvent('newevent', init_page);
			} else if (user_click_event_count >= countdown_to_new_request) {
				trackRNGClickEvent('reload', user_event);
			} 

			user_click_event_count = 0;
			useJS = true;	

			
		} else {
			//not a urlevent
			//not a reload event
			//could be a new event
			
			// if (!isNewUserEvent && user_click_event_count >= countdown_to_new_request){			
			// 	//if not a new event and time is up, simply reload
			// 	//dont do this on new event, to avoid onhashchange events			
			// 	trackRNGClickEvent('reload', user_event);
			// 	window.location.reload();	
			// } else {
				
			// 	//time is not up yet
			// 	//or a new event (but not a new reload event)
			
			// 	//usejs to load numbers
			// 	useJS = true;
			
			// } 
			
			useJS = true;

		}

	}

	if (useJS)  {

		//load numbers
		if (!loading_numbers) {
									
			loading_numbers = true;			
					
			/**** UPDATE RESULT  ****/

			
			result = getNumbersMultipleLinesPNCList({total_lines: l, numbers: n, unique: unique, order_matters: order_matters, oddeven: oddeven, oddqty: oddqty, sorted: sorted}, range, csv);
			updateResult(result);
		
			
			/**** END UPDATE RESULT  ****/
				
							
			trackRNGClickEvent('click', user_event);
	

			//change window hash for bookmarking
			if (isNewUserEvent) {
				dont_trigger_hashchange = true;
				setHash(new_hash);
			}
								
			
		}//loading numbers

	}//useJS
			
	
}

function resultNewPNCList(options) {	
	
	return resultNewPNC(options);
	
}

function downloadLines(){
	
	trackRNGClickEvent('download', user_event);
	
	var content = getNumbersToCopy();
	
	download("Lines_"+formatDateForFileName(new Date(), true)+".csv", content);
	
	
}

function getNumbersToCopy(){

	var content;
	var numbered = $("#numbered").prop("checked");

	if (download_numbers) {	
		
		if (isArray(download_numbers)) {

			if (!numbered) {
				//join main dimension with new lines
				//if its a 2D arr, the second dimension will automatically join using ","
				content = download_numbers.join("\n"); 
			} else {
				content = arrayToCSV(download_numbers, numbered);
			}
			//changed br separator to new line and white-space to pre for display, so no need to replace br tags
			//brToNewLine(arrayToCSV(download_numbers, numbered));
			
		} else {
			// content = brToNewLine(download_numbers);
			content = download_numbers;
		}
	} else {
	 	content = $("#resultVal").text();
	} 

	return content;

}

function magicFiltersChanged(){

}

function fontOptionsChanged(){

	var font_size = parseInt($("#result_font_size").val());
	var font_color = escapeHtml($("#result_font_color").val()).replace("#", "");

	if (font_size) {
		$("#resultVal").css("font-size", font_size+"px" );
		$("#result_html_div .result").css("max-height", "1000px");
		$("#result_html_div .result").css("min-height", "");
	} else {
		//reset to default
		$("#resultVal").css("font-size", "");
		$("#result_html_div .result").css("max-height", "");
		//remove this as well due to how the min-height is programmed to be remembered for the result
		$("#result_html_div .result").css("min-height", "");
	}

	if (font_color) {
		$("#resultVal").css("color", "#"+font_color);		
	} else {
		//reset to default
		$("#resultVal").css("color", "");		
	}

	

}

function toggleFullScreen(){
	if ($("body").hasClass("fullscreen")){
		$("body").removeClass("fullscreen");
		$("#result_html_div .result").css("min-height", "");
	} else {
		$("body").addClass("fullscreen");
		$("#result_html_div .result").css("min-height", "");
	}
}

function oddevenOptionsChanged(){

}

function sanitizeChoice(string){
	//replace words like kill, etc that are not preceded by don't 
	//replace them with don't kill, etc..

	// ' in don't is escaped html, therefore it won't match
	//return String(string).replace(/(?<!don\'t )\b(kill|die|murder)\b/gi, function (s) {
	// return String(string).replace(/(?<!do not )\b(kill|die|murder)\b/gi, function (s) {
	// 	return "do not "+s;
	// });

	return String(string).replace(/\b(kill|killing|die|murder|shoot|shooting|stab|stabbing)\b/gi, function (s) {
		return " Don't be crazy ";
	});

	// if (String(string).search(/\b(kill|die|murder)\b/gi)) {
	// 	return "Don't be crazy";
	// } else {
	// 	return string;
	// }

}

function removeAllAditionalSets() {
	//remove any existing sets if any
	$(".additional_set_row").remove();
}

function removeAllAditionalFilters() {
	//remove any existing sets if any
	$(".additional_filter_row").remove();
}


function displayAdditionalSets(additional_sets, format) {
	
	if (typeof format === "undefined") { format = "rng"; }

	removeAllAditionalSets();

	//show new sets
	for (var as = 0; as < additional_sets.length; as++ ) {
		var set_params = additional_sets[as].split("-"); //get numbers, low and high
		
		if (format === "dice") {
			if (set_params.length == 3) {
				addAdditionalSet(as, set_params[0], set_params[1], set_params[2], format);
			}
		} else {
			//validate set
			if (set_params.length == 3) {
				addAdditionalSet(as, set_params[0], set_params[1], set_params[2]);
			}
		}
		
		
	}
}

function displayAdditionalFilters(additional_sets, format) {
	
	if (typeof format === "undefined") { format = "rng"; }

	removeAllAditionalFilters();

	//show new sets
	for (var as = 0; as < additional_sets.length; as++ ) {
		var set_params = additional_sets[as].split(ADDITIONAL_FILTERS_SEPARATOR); //get numbers, low and high
		
		addAdditionalFilter(as, set_params[0], set_params[1]);
		
	}
}


function getAdditionalSets(format){

	if (typeof format === "undefined") { format = "rng"; }

	var additional_sets = [];

	if (format === "rad" || format === "dice") { 

		$(".additional_set_row" ).each(function( index ) {
			var inputs =  $( this ).find("input") ;

			var numbers = parseIntValue($(inputs[0]).val(), 1);
			var high = parseIntValue($(inputs[1]).val(), 6);

			additional_sets.push([numbers, 1, high]);

		});


	} else {

		$(".additional_set_row" ).each(function( index ) {
			var inputs =  $( this ).find("input") ;

			var numbers = parseIntValue($(inputs[0]).val(), 1);
			var low = parseIntValue($(inputs[1]).val(), 1);
			var high = parseIntValue($(inputs[2]).val(), 10);

			additional_sets.push([numbers, low, high]);

		});
	}

	return additional_sets;

}

function fixLineIfInvalid(filter, filter_values, line){

	var was_fixed = false;

	if (filter === "containsall"){

	}

	return was_fixed;
	
}

function passesThroughAllElementFilters(elem, all_element_filters){

	//console.log("passesThroughAllElementFilters");

	for (var filter in all_element_filters) {
				
		//filter applies to every number
		//validate number through the number_filter
		//e.g. isPrime(rand_num),
		//e.g. isDivisibleBy(rand_num, [3]) //divisible by 3
		//e.g. isDivisibleBy(rand_num, [3, 4]) //divisible by 3 or 4
		if (!ADDITIONAL_FILTERS[filter]["number_filter_func"](elem, all_element_filters[filter])) {
			return false;
		}

		//e.g.
		// if (!isPrime(rand_num, additional_filters[filter])) {
		// 	number_okay = false;
		// }

	}
	
	return true;

}

function passesThroughCountElementFilters(elem, list_generated, total_elements_needed, count_element_filters){

	for (var filter in count_element_filters) {
		//filters that count numbers 
		

		//e.g. prime_numbers_atleast
		var is_atleast_filter = _.endsWith(filter, "atleast");

		//e.g. prime_numbers_count
		var is_exactcount_filter = _.endsWith(filter, "count");

		
		//if the least count requested hasn't reached yet
		//and the count needed to reach the least count 
		//is equal to the remaining numbers
		//then force each remaining number to validate through this filter

		var count_reached = ADDITIONAL_FILTERS[filter]["count_number_func"](list_generated);

		var least_count_requested = 0;
		var max_count_requested = total_elements_needed;

		
		if (is_atleast_filter) {
			//give priority to the atleast value requested explicitily 
			least_count_requested = count_element_filters[filter][0];
			//e.g. count_element_filters["prime_numbers_atleast"][0], use the first value in the array
		} else {
			//else use the min of the counts list
			least_count_requested = arrayMin(count_element_filters[filter]);
			//e.g. count_element_filters["prime_numbers_count"] = "4, 2, 3" -> arrayMin(4, 2, 3) -> 2									
		}

		//will also need to check for max count
		//a.g. if max_count requested is low, then it's highly probable that the line will contain more than the max_count and won't validate later, so validate numbers now
		if (is_exactcount_filter) {
			max_count_requested = arrayMax(count_element_filters[filter]);
			//e.g. count_element_filters["prime_numbers_count"] = "4, 2, 3" -> arrayMax(4, 2, 3) -> 4	
		}				

		var count_needed_to_reach_least_count = least_count_requested - count_reached;

		if (count_needed_to_reach_least_count > 0 && count_needed_to_reach_least_count >= total_elements_needed - list_generated.length ) {

			//count remaining critical, validate each number
			//every remaining numbers must pass through filter

			//number okay if passes through filter
			if (!ADDITIONAL_FILTERS[filter]["number_filter_func"](elem, count_element_filters[filter])) {
				return false;
			}

			//e.g.
			// if (!isPrime(rand_num, additional_filters[filter])) {
			// 	number_okay = false;
			// }
			
		}

		if (max_count_requested >=0 && count_reached >= max_count_requested) {
			//max count reached, validate each number
			//every remaining number must NOT pass through this filter

			//number not okay if passes through filter/
			//as we dont need more numbers like these
			//as we have reached the max_count_requested
			if (ADDITIONAL_FILTERS[filter]["number_filter_func"](elem, count_element_filters[filter])) {
				return false;
			}

			//e.g.
			// if (isPrime(rand_num, additional_filters[filter])) {
			// 	number_okay = false;
			// }
				
		}

		

	}
	
	return true;

}



function validateLineThroughFilters(filters, line, options){

	var options = options || {};

	var fix_line_if_invalid = false;
	var do_not_validate = options.do_not_validate || [];

	var page_type = options.page_type || "";

	if (typeof options.fix_line_if_invalid !== "undefined"){
		fix_line_if_invalid = options.fix_line_if_invalid;
	}

	//validate line through each filter according to its rules
	var line_ok = true;
	//console.log("line", line);

	for (var filter in filters) {	
		//console.log(filter);
		//console.log(filters[filter]);

		//console.log(! inArray(filter, do_not_validate));

		//if this filter is not present in the do_not_validate list
		if (! inArray(filter, do_not_validate)) {

			//console.log("yes validating ");

			//check how to use the filter on the given page_type
			var use_type = ADDITIONAL_FILTERS[filter][page_type + "_use_type"]; 

		//console.log(page_type + "_use_type");
		//console.log(ADDITIONAL_FILTERS[filter]);

		//console.log(use_type);

			var line_old = line;

			if (use_type === "digits") {
				//split each number into an array of digits
				line = (line[0]+"").split("");
			} else if (use_type === "string") {
				//keep as array
			}
		
			//console.log(line_old);
			//console.log(line);

		//console.log("calling ", ADDITIONAL_FILTERS[filter]["func"]);
			
			//call the filter function to validate line
			//if any of the filters fail, return false
			if (!ADDITIONAL_FILTERS[filter]["func"](filters[filter], line, {use_type : use_type, page_type: page_type})) {
				
				//line invalid
				// if (fix_line_if_invalid) {
				// 	var was_fixed = fixLineIfInvalid(filter, filters[filter], line);
				// 	return was_fixed;
				// } else {
				// 	return false;
				// }			
				return false;
			} 			

		}

	}

	//console.log(line_ok);

	return line_ok;
}

function getAdditionalFiltersThatApplyToAllNumbers(filters){
	var new_filters = {};
	for (var filter in filters) {
		if (ADDITIONAL_FILTERS[filter]["filter_type"] === "all") {
			new_filters[filter] = filters[filter];
		}		
	}
	return new_filters;
}

function getAdditionalFiltersThatCountNumbers(filters){
	var new_filters = {};
	for (var filter in filters) {
		if (ADDITIONAL_FILTERS[filter]["filter_type"] === "count") {
			new_filters[filter] = filters[filter];
		}		
	}
	return new_filters;
}

function processAdditionalFilters(filters){
	var processed_filters = {};
	var filter_count = 0;
	for (var filter in filters) {
		if (ADDITIONAL_FILTERS[filter]) {
			var filter_val = $.trim(filters[filter]);

			//if filter value not empty or if empty_val for this filter is ok
			if (filter_val || ADDITIONAL_FILTERS[filter]["empty_ok"] === true) {

				var nums = parseInt($("#numbers").val());

				//if only one number is requested and a replacement function is specified when_one_number, then use that filter instead
				if (nums === 1 && ADDITIONAL_FILTERS[filter]["when_one_number"] ) {
					filter = ADDITIONAL_FILTERS[filter]["when_one_number"];
				} 

				processed_filters[filter] = numbers_string_to_array(filter_val);
				
				filter_count++;
			}
		}
		
	}

	if (!_.isEmpty(processed_filters)){
	//console.log("processed_filters");
	//console.log(processed_filters);

		updateFilterStatus("magic_filter_status", "<a id='magic_filter_status' onclick='addFilterBtnClicked();'>("+filter_count+") Magic Filters On</a>", "add");		
	} else{
		updateFilterStatus("magic_filter_status", "", "remove");	
	}

	return processed_filters;
}

function getAdditionalFilters(format){

	if (typeof format === "undefined") { format = "rng"; }

	var additional_filters = {};

	$(".additional_filter_row" ).each(function( index ) {
		var filter_name =  $( this ).find("select").val() ;
		var filter_value =  $( this ).find("textarea").val() ;
		additional_filters[filter_name] = filter_value;
	});
	
	return additional_filters;

}

function addFilterModalBtnClicked(){
	addAdditionalFilter(0, "", "");
}

function addFilterBtnClicked(){
	
	//if no filters have been added yet, add one to begin 
	if (!$("#filters_row_container").find(".additional_filter_row").length) {
		addAdditionalFilter(0, "", "");
	}

	//open the magic filters dialog
	$('#magicFiltersModal').modal('show');
	
}

function addRowBtnClicked_RNG(){
	addAdditionalSet(0,1,1,10);
	var y = $(window).scrollTop(); 
	//$("html, body").animate({ scrollTop: y + 50 }, 600);
	$("#numbers_row_container").animate({ scrollTop: $("#numbers_row_container").scrollTop() + 50 }, 600);
	callPageCalcFunc();
}

function addRowBtnClicked_Dice(){
	addAdditionalSet(0,1,0,6,'dice');
	var y = $(window).scrollTop(); 
	//$("html, body").animate({ scrollTop: y + 50 }, 600);	
	$("#numbers_row_container").animate({ scrollTop: $("#numbers_row_container").scrollTop() + 50 }, 600);
	callPageCalcFunc();
}

function removeAdditionalSet(index){
	
	$(".additional_set_row._"+index).animate({ opacity: 0 }, 600, function() {
		
			$(this).remove();
			//callPageCalcFunc();
		}
	);

	//$(".additional_set_row._"+index).remove();
	var y = $(window).scrollTop(); 
	//$("html, body").animate({ scrollTop: y - 50 }, 600);
	//$("#numbers_row_container").animate({ scrollTop: y - 50 }, 600);
	

}

function removeAdditionalFilter(index){
	
	$(".additional_filter_row._"+index).animate({ opacity: 0 }, 600, function() {
		
			$(this).remove();
			//callPageCalcFunc();
		}
	);

	//$(".additional_set_row._"+index).remove();
	var y = $(window).scrollTop(); 
	//$("html, body").animate({ scrollTop: y - 50 }, 600);
	//$("#numbers_row_container").animate({ scrollTop: y - 50 }, 600);
	

}

function buildAdditionalFilterInputs(filter_name, filter_value){


	var title_field = "title"; 

	var html = "<select>";
	html += '<option value="">Select magic filter</option>';

	for (var filter_group in ADDITIONAL_FILTERS_GROUPS){
		html += '<optgroup label="'+filter_group+'">';

	//console.log(filter_group);
	//console.log(ADDITIONAL_FILTERS_GROUPS[filter_group]["filters"]);
		for (var i = 0;  i < ADDITIONAL_FILTERS_GROUPS[filter_group]["filters"].length; i++) {

			var filter = ADDITIONAL_FILTERS_GROUPS[filter_group]["filters"][i];

		//console.log(filter);
		
			var title = ADDITIONAL_FILTERS[filter]["title"];
			var display = true;
	
			if (ADDITIONAL_FILTERS[filter]["display"] === false) {
				display = false;
			}
	
			if (init_page === "listxdigit") {
				if (ADDITIONAL_FILTERS[filter]["numlist_title"]) {
					title = ADDITIONAL_FILTERS[filter]["numlist_title"];
				}
				if (ADDITIONAL_FILTERS[filter]["numlist_display"] === false) {
					display = false;
				} else if (ADDITIONAL_FILTERS[filter]["numlist_display"] === true) {
					//override false, if explicitily true defined
					display = true;
				}
			}
	
			
			if (display) {
				html += '<option value="'+filter+'" '+(filter === filter_name ? 'selected' : '')+'>'+title+'</option>';
			}
		}
		

		html += '</optgroup>';
	}
	
	html += "</select>";

	html += '<textarea placeholder="e.g. 1, 2, 3-5">'+escapeHtml(filter_value)+'</textarea>';
	return html;
}

function addAdditionalFilter(index, filter_name, filter_value, format){

	if (typeof format === "undefined") { format = "rng"; }

	if (index === 0) {
		//find last index
		index = $(".additional_filter_row").length;
	}

	var input_html = "";	

	input_html = 
	'and '+buildAdditionalFilterInputs(filter_name, filter_value);

	//add new filter and fade in
	$('<div class="col-xs-12 additional_filter_row _'+index+'">'+
	input_html +
	'<a class="btn add_row_btn delete" onclick="removeAdditionalFilter('+index+');"><i class="material-icons">remove_circle</i></a>'+
	'</div>').hide().prependTo("#filters_row_container").fadeIn(999);

	// $("#filters_row_container").prepend(		
	// 	'<div class="col-xs-12 additional_filter_row _'+index+'">'+
	// 	input_html +
	// 	'<a class="btn add_row_btn delete" onclick="removeAdditionalFilter('+index+');"><i class="material-icons">remove_circle</i></a>'+
	// 	'</div>'
	// );	
	

}

function addAdditionalSet(index, numbers, low, high, format){

	if (typeof format === "undefined") { format = "rng"; }

	numbers = parseInt(numbers);
	low = parseInt(low);
	high = parseInt(high);

	if ( ! ( isNaN(numbers) || isNaN(low) || isNaN(high)) ) {

		if (index === 0) {
			//find last index
			index = $(".additional_set_row").length;
		}
	
		var input_html = "";
		

		if (format === "dice") {
			input_html = 		

			'and <input id="numbers_'+index+'" type="text" value="'+numbers+'" class="sml"> dice '+       
			'<input id="sides_'+index+'" type="text" value="'+high+'" class="sml"> sided ' ;

		} else {
			input_html = 
			'and <input type="text" id="total_nums_'+index+'" value="'+numbers+'" class="sml" />'+
			' numbers from '+
			'<input type="text" id="selectlow_'+index+'" value="'+low+'" class="low sml" />'+
			' to '+
			'<input type="text" id="selecthigh_'+index+'" value="'+high+'" class="high sml" />';
		}


		$("#numbers_row_container").append(		
			'<div class="col-xs-12 additional_set_row _'+index+'">'+
			input_html +
			'<a class="btn add_row_btn delete" onclick="removeAdditionalSet('+index+');"><i class="material-icons">remove_circle</i></a>'+
			'</div>'
		);

	}
	

}

function rollDice(sides){

	sides = safeParseInt(sides);

	if (sides) {

		trackRNGClickEvent('modal-roll-dice', sides);

		removeAllAditionalSets();

		//set main dice
		$("#numbers").val('1');
		$("#high").val(sides);
		$("#sides").val(sides); //sometime sides is used
		callPageCalcFunc({use_js_only: true});

	}

	hideDiceModal();
	

}

function addDice(sides){

	sides = safeParseInt(sides);

	if (sides) {

		trackRNGClickEvent('modal-add-dice', sides);

		addAdditionalSet(0, 1, 1, sides, 'dice');
		callPageCalcFunc({use_js_only: true});

	}

	hideDiceModal();
	

}

function hideDiceModal() {
	$('#diceAddModal').modal('hide');
}

function getNewUrl_RNP(n, l, h){

	var newurlpage = "/randomnumbergenerator";
	var qs_params = "";	
	
	if (n > 1 && n <= 7 && (h >= 45 && h <= 70) ) { //probably lottery numbers
		
		// newurlpage = "/" + n + "randomnumbersbetween" + "1" + "and" + h; //use 1 for low, hash will contain actual 'low' value
		// qs_params = "";
		
	} else if (n == 1 && l == 1 && (h <= 100 || h == 100 || h == 1000)) {		
		
		// newurlpage = "/randomnumbergenerator/" + l + "-" + h;		
		// qs_params = "";
		
	} else if (n == 1) {		
		
		// newurlpage = "/randomnumber";
		
		// if (h > 0 && h <= 100) { 
		// 	qs_params = "?high=" + h;
		// } else if (h > 0 && h <= 10000) { 
		// 	//qs_params = "?high=" + Math.round(h/100) * 100;
		// } else {
		// 	qs_params = "";
		// }
		
		
	} else if (n > 1 && n <= 10 && h <= 100) {		
		
		// newurlpage = "/pick"+n+"randomnumbers";		
		// qs_params = "";
		
	} else if (n > 0 && n <= 20) {		
		
		// newurlpage = "/"+n+"randomnumbers";		
		// qs_params = "";
		
	} 	

	return newurlpage + qs_params;

}

function getNewUrl_N_of_L(generic_slug, len, digit_term, number_term ){

	var newurlpage = "/"+generic_slug;
	var qs_params = "";
	
	if (len > 0 && len <= 20) { 
		
		newurlpage = "/" + "random-"+len+"-"+digit_term+"-"+number_term+"-generator"; 
		qs_params = "";
		
	}

	return newurlpage + qs_params;

}

function displayStats(){
	$("#count_stats").html("Generated: <br />");			
	for (var i = 1; i <= global_heads_counts.length-1; i++) {				
		$("#count_stats").append((i)+" : "+global_heads_counts[""+i]+" times<br />");
	}
}

function updateProgress(msg){
	$("#progress").html(msg);
}

function getDownloadResultsMsg(count){
	return '<div class="info">Results are ready to download.<br />Too many rows ('+count+') to display.<br />Click <a href="#" onclick="downloadLines(); return false;" class="download_link"><i class="material-icons">get_app</i>Download</a> to save as csv file.<br /><div style="font-size: 12px;margin: 5px; white-space: pre; ">Excel can trim large files, try to open them in a text editor<br> that can handle large files</div></div>';
}
$(document).ready(function (){

	initApp();
	
    if (typeof pageReady === "function") { 		
		pageReady();	
    }				
				
});

	APP_JS_LOADED = true;
	