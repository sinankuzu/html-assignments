(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[87072,96991,8575],{762587:e=>{function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,r,n,s){r=r||"&",n=n||"=";var a={};if("string"!=typeof e||0===e.length)return a;var i=/\+/g;e=e.split(r);var o=1e3;s&&"number"==typeof s.maxKeys&&(o=s.maxKeys);var l=e.length;o>0&&l>o&&(l=o);for(var c=0;c<l;++c){var u,h,d,p,_=e[c].replace(i,"%20"),m=_.indexOf(n);m>=0?(u=_.substr(0,m),h=_.substr(m+1)):(u=_,h=""),d=decodeURIComponent(u),p=decodeURIComponent(h),t(a,d)?Array.isArray(a[d])?a[d].push(p):a[d]=[a[d],p]:a[d]=p}return a}},712361:e=>{var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,n,s){return r=r||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(s){var a=encodeURIComponent(t(s))+n;return Array.isArray(e[s])?e[s].map((function(e){return a+encodeURIComponent(t(e))})).join(r):a+encodeURIComponent(t(e[s]))})).join(r):s?encodeURIComponent(t(s))+n+encodeURIComponent(t(e)):""}},817673:(e,t,r)=>{t.decode=t.parse=r(762587),t.encode=t.stringify=r(712361)},52511:function(e,t,r){var n;e=r.nmd(e),function(s){t&&t.nodeType,e&&e.nodeType;var a="object"==typeof r.g&&r.g;a.global!==a&&a.window!==a&&a.self;var i,o=2147483647,l=36,c=/^xn--/,u=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,d={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,_=String.fromCharCode;function m(e){throw RangeError(d[e])}function f(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function A(e,t){var r=e.split("@"),n="";return r.length>1&&(n=r[0]+"@",e=r[1]),n+f((e=e.replace(h,".")).split("."),t).join(".")}function I(e){for(var t,r,n=[],s=0,a=e.length;s<a;)(t=e.charCodeAt(s++))>=55296&&t<=56319&&s<a?56320==(64512&(r=e.charCodeAt(s++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),s--):n.push(t);return n}function O(e){return f(e,(function(e){var t="";return e>65535&&(t+=_((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=_(e)})).join("")}function g(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function E(e,t,r){var n=0;for(e=r?p(e/700):e>>1,e+=p(e/t);e>455;n+=l)e=p(e/35);return p(n+36*e/(e+38))}function T(e){var t,r,n,s,a,i,c,u,h,d,_,f=[],A=e.length,I=0,g=128,T=72;for((r=e.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&m("not-basic"),f.push(e.charCodeAt(n));for(s=r>0?r+1:0;s<A;){for(a=I,i=1,c=l;s>=A&&m("invalid-input"),((u=(_=e.charCodeAt(s++))-48<10?_-22:_-65<26?_-65:_-97<26?_-97:l)>=l||u>p((o-I)/i))&&m("overflow"),I+=u*i,!(u<(h=c<=T?1:c>=T+26?26:c-T));c+=l)i>p(o/(d=l-h))&&m("overflow"),i*=d;T=E(I-a,t=f.length+1,0==a),p(I/t)>o-g&&m("overflow"),g+=p(I/t),I%=t,f.splice(I++,0,g)}return O(f)}function v(e){var t,r,n,s,a,i,c,u,h,d,f,A,O,T,v,R=[];for(A=(e=I(e)).length,t=128,r=0,a=72,i=0;i<A;++i)(f=e[i])<128&&R.push(_(f));for(n=s=R.length,s&&R.push("-");n<A;){for(c=o,i=0;i<A;++i)(f=e[i])>=t&&f<c&&(c=f);for(c-t>p((o-r)/(O=n+1))&&m("overflow"),r+=(c-t)*O,t=c,i=0;i<A;++i)if((f=e[i])<t&&++r>o&&m("overflow"),f==t){for(u=r,h=l;!(u<(d=h<=a?1:h>=a+26?26:h-a));h+=l)v=u-d,T=l-d,R.push(_(g(d+v%T,0))),u=p(v/T);R.push(_(g(u,0))),a=E(r,O,n==s),r=0,++n}++r,++t}return R.join("")}i={version:"1.3.2",ucs2:{decode:I,encode:O},decode:T,encode:v,toASCII:function(e){return A(e,(function(e){return u.test(e)?"xn--"+v(e):e}))},toUnicode:function(e){return A(e,(function(e){return c.test(e)?T(e.slice(4).toLowerCase()):e}))}},void 0===(n=function(){return i}.call(t,r,t,e))||(e.exports=n)}()},608575:(e,t,r)=>{var n=r(52511),s=r(762502);function a(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=O,t.resolve=function(e,t){return O(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?O(e,!1,!0).resolveObject(t):t},t.format=function(e){s.isString(e)&&(e=O(e));return e instanceof a?e.format():a.prototype.format.call(e)},t.Url=a;var i=/^([a-z0-9.+-]+:)/i,o=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),u=["'"].concat(c),h=["%","/","?",";","#"].concat(u),d=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,_=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},f={javascript:!0,"javascript:":!0},A={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},I=r(817673);function O(e,t,r){if(e&&s.isObject(e)&&e instanceof a)return e;var n=new a;return n.parse(e,t,r),n}a.prototype.parse=function(e,t,r){if(!s.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var a=e.indexOf("?"),o=-1!==a&&a<e.indexOf("#")?"?":"#",c=e.split(o);c[0]=c[0].replace(/\\/g,"/");var O=e=c.join(o);if(O=O.trim(),!r&&1===e.split("#").length){var g=l.exec(O);if(g)return this.path=O,this.href=O,this.pathname=g[1],g[2]?(this.search=g[2],this.query=t?I.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var E=i.exec(O);if(E){var T=(E=E[0]).toLowerCase();this.protocol=T,O=O.substr(E.length)}if(r||E||O.match(/^\/\/[^@\/]+@[^@\/]+/)){var v="//"===O.substr(0,2);!v||E&&f[E]||(O=O.substr(2),this.slashes=!0)}if(!f[E]&&(v||E&&!A[E])){for(var R,S,N=-1,P=0;P<d.length;P++){-1!==(b=O.indexOf(d[P]))&&(-1===N||b<N)&&(N=b)}-1!==(S=-1===N?O.lastIndexOf("@"):O.lastIndexOf("@",N))&&(R=O.slice(0,S),O=O.slice(S+1),this.auth=decodeURIComponent(R)),N=-1;for(P=0;P<h.length;P++){var b;-1!==(b=O.indexOf(h[P]))&&(-1===N||b<N)&&(N=b)}-1===N&&(N=O.length),this.host=O.slice(0,N),O=O.slice(N),this.parseHost(),this.hostname=this.hostname||"";var y="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!y)for(var D=this.hostname.split(/\./),C=(P=0,D.length);P<C;P++){var k=D[P];if(k&&!k.match(p)){for(var U="",L=0,w=k.length;L<w;L++)k.charCodeAt(L)>127?U+="x":U+=k[L];if(!U.match(p)){var x=D.slice(0,P),G=D.slice(P+1),M=k.match(_);M&&(x.push(M[1]),G.unshift(M[2])),G.length&&(O="/"+G.join(".")+O),this.hostname=x.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),y||(this.hostname=n.toASCII(this.hostname));var j=this.port?":"+this.port:"",Z=this.hostname||"";this.host=Z+j,this.href+=this.host,y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==O[0]&&(O="/"+O))}if(!m[T])for(P=0,C=u.length;P<C;P++){var B=u[P];if(-1!==O.indexOf(B)){var F=encodeURIComponent(B);F===B&&(F=escape(B)),O=O.split(B).join(F)}}var H=O.indexOf("#");-1!==H&&(this.hash=O.substr(H),O=O.slice(0,H));var $=O.indexOf("?");if(-1!==$?(this.search=O.substr($),this.query=O.substr($+1),t&&(this.query=I.parse(this.query)),O=O.slice(0,$)):t&&(this.search="",this.query={}),O&&(this.pathname=O),A[T]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){j=this.pathname||"";var W=this.search||"";this.path=j+W}return this.href=this.format(),this},a.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",a=!1,i="";this.host?a=e+this.host:this.hostname&&(a=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(a+=":"+this.port)),this.query&&s.isObject(this.query)&&Object.keys(this.query).length&&(i=I.stringify(this.query));var o=this.search||i&&"?"+i||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||A[t])&&!1!==a?(a="//"+(a||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):a||(a=""),n&&"#"!==n.charAt(0)&&(n="#"+n),o&&"?"!==o.charAt(0)&&(o="?"+o),t+a+(r=r.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(o=o.replace("#","%23"))+n},a.prototype.resolve=function(e){return this.resolveObject(O(e,!1,!0)).format()},a.prototype.resolveObject=function(e){if(s.isString(e)){var t=new a;t.parse(e,!1,!0),e=t}for(var r=new a,n=Object.keys(this),i=0;i<n.length;i++){var o=n[i];r[o]=this[o]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var l=Object.keys(e),c=0;c<l.length;c++){var u=l[c];"protocol"!==u&&(r[u]=e[u])}return A[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!A[e.protocol]){for(var h=Object.keys(e),d=0;d<h.length;d++){var p=h[d];r[p]=e[p]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||f[e.protocol])r.pathname=e.pathname;else{for(var _=(e.pathname||"").split("/");_.length&&!(e.host=_.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==_[0]&&_.unshift(""),_.length<2&&_.unshift(""),r.pathname=_.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var m=r.pathname||"",I=r.search||"";r.path=m+I}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var O=r.pathname&&"/"===r.pathname.charAt(0),g=e.host||e.pathname&&"/"===e.pathname.charAt(0),E=g||O||r.host&&e.pathname,T=E,v=r.pathname&&r.pathname.split("/")||[],R=(_=e.pathname&&e.pathname.split("/")||[],r.protocol&&!A[r.protocol]);if(R&&(r.hostname="",r.port=null,r.host&&(""===v[0]?v[0]=r.host:v.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===_[0]?_[0]=e.host:_.unshift(e.host)),e.host=null),E=E&&(""===_[0]||""===v[0])),g)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,v=_;else if(_.length)v||(v=[]),v.pop(),v=v.concat(_),r.search=e.search,r.query=e.query;else if(!s.isNullOrUndefined(e.search)){if(R)r.hostname=r.host=v.shift(),(y=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=y.shift(),r.host=r.hostname=y.shift());return r.search=e.search,r.query=e.query,s.isNull(r.pathname)&&s.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!v.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var S=v.slice(-1)[0],N=(r.host||e.host||v.length>1)&&("."===S||".."===S)||""===S,P=0,b=v.length;b>=0;b--)"."===(S=v[b])?v.splice(b,1):".."===S?(v.splice(b,1),P++):P&&(v.splice(b,1),P--);if(!E&&!T)for(;P--;P)v.unshift("..");!E||""===v[0]||v[0]&&"/"===v[0].charAt(0)||v.unshift(""),N&&"/"!==v.join("/").substr(-1)&&v.push("");var y,D=""===v[0]||v[0]&&"/"===v[0].charAt(0);R&&(r.hostname=r.host=D?"":v.length?v.shift():"",(y=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=y.shift(),r.host=r.hostname=y.shift()));return(E=E||r.host&&v.length)&&!D&&v.unshift(""),v.length?r.pathname=v.join("/"):(r.pathname=null,r.path=null),s.isNull(r.pathname)&&s.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},a.prototype.parseHost=function(){var e=this.host,t=o.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},762502:e=>{e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},397066:(e,t,r)=>{r.d(t,{b:()=>u,h:()=>h});var n=r(983722),s=r(768559),a=r(43760),i=r(966113),o=r(619937),l=r(48714),c=r(366284);const u=({href:e,pinId:t,pin:r,location:a,auxData:u},h)=>{if(r&&r.is_promoted){var d,p;const g=(0,s.Z)(r,a),E=(0,l.nS)({url:e,pinId:t,csrId:null,clientTrackingParams:g,auxData:u}),T=(0,n.Z)();if((0,c.G6)(null!==(d=null==T?void 0:T.userAgent.browserName)&&void 0!==d?d:"")){var _,m;const{group:n}=null!==(_=null==T?void 0:T.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==_?_:{};let s=null!=T&&null!==(m=T.userAgent)&&void 0!==m&&m.browserVersion?T.userAgent.browserVersion:"0.0";if(s=parseFloat(s.split(".")[0]+"."+s.split(".")[1]),void 0!==r.campaign_id&&s>=14.1&&["enabled_safari"].includes(n)){var f;const n=r.attribution_source_id?((e,t,r)=>{const n=document.createElement("a");return n.setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block",n.setAttribute(o.$N.ATTRIBUTION_SOURCE_ID,e),n.setAttribute(o.$N.ATTRIBUTE_DESTINATION,r),n.setAttribute(o.$N.ATTRIBUTE_ON,r),n.click(),e})(r.attribution_source_id,E,e):((e,t,r)=>{const n=document.createElement("a");n.setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block";const s=""+(e%32*8+Math.floor(((new Date).getTime()-16409952e5)/864e5)%8);return n.setAttribute(o.$N.ATTRIBUTION_SOURCE_ID,s),n.setAttribute(o.$N.ATTRIBUTE_DESTINATION,r),n.setAttribute(o.$N.ATTRIBUTE_ON,r),n.click(),s})(null!==(f=r.pin_promotion_id)&&void 0!==f?f:0,E,e);return h({event_type:101,clientTrackingParams:g,object_id_str:t||"",aux_data:{pin_id:t||"",click_measurement_ppid:r.pin_promotion_id||"",click_measurement_campaign_id:r.campaign_id||"",is_pcm:!0,attribution_source_id:n,page_url:e}}),!0}}else if((0,c.i7)(null!==(p=null==T?void 0:T.userAgent.browserName)&&void 0!==p?p:"")){var A,I;const{group:n}=null!==(A=null==T?void 0:T.experimentsClient.checkExperiment("m10n_event_conversion_measurement_chrome"))&&void 0!==A?A:{},s=null!=T&&null!==(I=T.userAgent)&&void 0!==I&&I.browserVersion?parseInt(T.userAgent.browserVersion.split(".")[0],10):0;if(void 0!==r.attribution_source_id&&s>=101&&["enabled"].includes(n)){var O;const n=((e,t,r)=>{const n=new URL(`${i.Z.settings.CANONICAL_MAIN_URL}/attribution_source/`);n.searchParams.set(o.NR.ATTRIBUTION_SOURCE_EVENT_ID,e),n.searchParams.set(o.NR.ATTRIBUTION_DESTINATION,r),n.searchParams.set(o.NR.ATTRIBUTION_EXPIRY,""+o.uV);const s=document.createElement("a");return s.setAttribute("href",t),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener nofollow noreferrer"),s.style.cursor="pointer",s.style.display="block",s.setAttribute(o.NR.ATTRIBUTION_SOURCE,n.toString()),s.click(),e})(null!==(O=r.attribution_source_id)&&void 0!==O?O:"0",E,e);return h({event_type:101,clientTrackingParams:g,object_id_str:t||"",aux_data:{pin_id:t||"",click_measurement_ppid:r.pin_promotion_id||"",click_measurement_campaign_id:r.campaign_id||"",is_arapi:!0,attribution_source_id:n,page_url:e}}),!0}}}return!1},h=({href:e,pinId:t,pin:r,location:n,auxData:i},o)=>{if("undefined"!=typeof window&&window.Windows)(0,a.Z)({url:e,pinId:t,pin:r,location:n,auxData:i});else{if(u({href:e,pinId:t,pin:r,location:n,auxData:i},o))return;(0,l.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:(0,s.Z)(r,n),auxData:i})}}},619937:(e,t,r)=>{r.d(t,{$N:()=>T,GY:()=>I,MZ:()=>m,NR:()=>g,Vn:()=>O,fm:()=>n,kM:()=>a,q6:()=>s,qp:()=>A,uV:()=>E,vJ:()=>f});const n={DOWNLOAD_TEMPLATE:"DOWNLOAD_TEMPLATE",UPLOAD_TEMPLATE:"UPLOAD_TEMPLATE",HISTORY:"HISTORY",RESOURCES:"RESOURCES"},s={GENERAL:"GENERAL",CAMPAIGNS:"CAMPAIGNS",AD_GROUPS:"AD_GROUPS",ADS:"ADS",KEYWORDS:"KEYWORDS",PRODUCT_GROUPS:"PRODUCT_GROUPS",ERROR_CODES:"ERROR_CODES"},a={BILLING_HISTORY:"BILLING_HISTORY",BILLING_FORMS:"BILLING_FORMS",ORDER_LINES:"ORDER_LINES",PROMOTIONS:"PROMOTIONS",DOCUMENTS:"DOCUMENTS"},i="Shopify",o="WordPress",l="WooCommerce",c="Weebly",u="Tealium",h="Magento",d="Squarespace",p="Ecwid",_="Bigcommerce",m={GOOGLE_TAG_MANAGER:"Google Tag Manager",SHOPIFY:"Shopify",WOO_COMMERCE:"WooCommerce",WORDPRESS:"WordPress",SQUARESPACE:"Squarespace",WEEBLY:"Weebly",TEALIUM:"Tealium",MAGENTO:"Magento",ECWID:"Ecwid",BIG_COMMERCE:"BigCommerce"},f={["Google Tag Manager"]:m.GOOGLE_TAG_MANAGER,[i]:m.SHOPIFY,[l]:m.WOO_COMMERCE,[o]:m.WORDPRESS,[d]:m.SQUARESPACE,[c]:m.WEEBLY,[u]:m.TEALIUM,[h]:m.MAGENTO,[p]:m.ECWID,[_]:m.BIG_COMMERCE},A={PINTEREST_TAG:"PINTEREST_TAG",PINTEREST_TAG_EVENTS:"PINTEREST_TAG_EVENTS",PINTEREST_TAG_HISTORY:"PINTEREST_TAG_HISTORY",PINTEREST_TAG_HEALTH:"PINTEREST_TAG_HEALTH",CONVERSION_UPLOAD:"CONVERSION_UPLOAD",UPLOAD_HISTORY:"UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD:"PCA_UPLOAD",CONVERSIONS_API:"CONVERSIONS_API",CONVERSIONS_API_ACCESS_TOKEN:"CONVERSIONS_API_ACCESS_TOKEN"},I={PINTEREST_TAG_DASHBOARD:"PINTEREST_TAG_DASHBOARD",PINTEREST_TAG_LANDING:"PINTEREST_TAG_LANDING",PINTEREST_TAG_INSTRUCTIONS:"PINTEREST_TAG_INSTRUCTIONS",PINTEREST_TAG_HISTORY:"PINTEREST_TAG_HISTORY",CONVERSION_UPLOAD_LANDING:"CONVERSION_UPLOAD_LANDING",CONVERSION_UPLOAD_VALIDATION:"CONVERSION_UPLOAD_VALIDATION",CONVERSION_UPLOAD_HISTORY:"CONVERSION_UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD_LANDING:"PCA_UPLOAD_LANDING",PCA_UPLOAD_VALIDATION:"PCA_UPLOAD_VALIDATION"},O={UNREAD:"UNREAD",READ:"READ",ACCEPTED:"ACCEPTED",REJECTED:"REJECTED",DISMISSED:"DISMISSED",INVALID:"INVALID",MUTED:"MUTED",SNOOZED:"SNOOZED",PMP_REPORTED:"PMP_REPORTED",EMAILED:"EMAILED",BULK_DOWNLOADED:"BULK_DOWNLOADED",FILTERED:"FILTERED",PUSHED:"PUSHED"},g={ATTRIBUTION_DESTINATION:"destination",ATTRIBUTION_EXPIRY:"expiry",ATTRIBUTION_SOURCE:"attributionsrc",ATTRIBUTION_SOURCE_EVENT_ID:"source_event_id"},E=604800,T={ATTRIBUTION_SOURCE_ID:"attributionsourceid",ATTRIBUTE_DESTINATION:"attributiondestination",ATTRIBUTE_ON:"attributeon"}},768559:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(826067);const s=/\/today\/(article|best|trending)\/[\w-]+\/(\d+)/,a=/\/discover\/article\/[\w-]+\/(\d+)/,i=(e,t)=>t?e.substring(t.length).split("/")[0]:e,o=(e,t,r,o)=>{var l,c;if(!e)return"";let u="";const h=t.board&&t.board.url;switch(e){case"/":case"/homefeed/":return"UserHomefeedResource";case t.pinner&&`/${t.pinner.username}/pins/`:return"UserPinsResource";case t.pinner&&`/${t.pinner.username}/`:case/\/_activity\//.test(e)&&e:return"UserActivityPinsResource";case/\/_created\//.test(e)&&e:return t.story_pin_data_id?"UserStoryPinsFeedResource":"UserActivityPinsResource";case/\/_community\//.test(e)&&e:return"UserDiscoveredPinsResource";case/\/_shop\//.test(e)&&e:return"StoreFrontFeedResource";case/\/_saved\//.test(e)&&e:return"BoardlessPinsResource";case t.pinner&&`/${t.pinner.username}/_shopping_list/`:return"ShoppingListFeedResource";case/\/visual-search\//.test(e)&&e:return"VisualLiveSearchResource";case/\/pin\//.test(e)&&e:u="/pin/";const d=i(e,u);if(t.id!==d)return t.call_to_create_source_pin_id?`ApiResource_callToCreatePins_${d}`:`RelatedPinFeedResource_${d}`;break;case/\/search\//.test(e)&&e:if(r){return`SearchResource_${((0,n.mB)(r,{shouldDecode:!1}).q||"").toLowerCase()}`}if(o)return`SearchResource_${encodeURIComponent(o.q||"").toLowerCase()}`;break;case a.test(e)&&e:return`ExploreArticleResource_${(null===(l=e.match(a))||void 0===l?void 0:l[2])||"unknown"}`;case/\/discover\/article\//.test(e)&&e:u="/discover/article/";return`ExploreArticleResource_${i(e,u)}`;case/\/categories\//.test(e)&&e:u="/categories/";return`CategoryFeedResource_${i(e,u)}`;case/\/discover\/topics\//.test(e)&&e:return"CategoryFeedResource";case/\/news_hub\//.test(e)&&e:u="/news_hub/";return`NewsHubDetailsResource_${i(e,u)}`;case/\/_tools\/more-ideas\//.test(e)&&e:return"BoardContentRecommendationResource";case/\/topics\//.test(e)&&e:u="/topics/";return`TopicFeedResource_${i(e,u)}`;case t.pinner&&`/${t.pinner.username}/products/`:return"StoreFrontFeedResource";case/\/source\//.test(e)&&e:u="/source/";return`DomainFeedResource_${i(e,u)}`;case/\/explore\//.test(e)&&e:u="/explore/";return`SearchResource_${i(e,u)}`;case h:case!!h&&/\/more_ideas\//.test(e)&&e:return"BoardFeedResource";case h&&e.indexOf(h)>-1&&e:return"BoardSectionPinsResource";case/\/following\//.test(e)&&e:return"FollowingFeedResource";case/\/brand_catalog\//.test(e)&&e:return"BrandCatalogFeedResource";case s.test(e)&&e:return`TodayArticleFeedResource_${(null===(c=e.match(s))||void 0===c?void 0:c[2])||"unknown"}`;case/\/today\//.test(e):return"TodayTabResource";case/\story_feed\//.test(e)&&e:if(r){const{feed_type:e,request_params:t}=(0,n.mB)(r);return`StoryFeedResource_${e}_${t}`}break;case/\/your-shop\//.test(e)&&e:return"PersonalBoutiqueResource"}return""},l=(e,t,r)=>{if(!e||!e.tracking_params||!t)return;if(!e.tracking_params_map)return`${e.tracking_params}~0`;const{pathname:n,search:s,query:a}=t,i=o(n,e,s,a),l=e.tracking_params_map||{},c=Object.keys(l);let u;if((n||"").startsWith("/pin/")){const e=c.find((e=>"PinResource"!==e));u=e?l[e]:l.PinResource}else u=l[i];let h;if(!u&&r&&r.length){const t=(e=>{let t=null==e?void 0:e.pathname;return t?(t.match(/\/search\//)&&null!=e&&e.search&&(t+=e.search),t.toLowerCase()):""})(r[r.length-1].location);h=o(t,e,s,a),u=l[h]}return u||(u=`${e.tracking_params||""}~0`),u}},48714:(e,t,r)=>{r.d(t,{nS:()=>E,iw:()=>v,gV:()=>O,G3:()=>R,lI:()=>S,Gj:()=>T,Jd:()=>I,$3:()=>g});var n=r(231486),s=r(56641),a=r(768559),i=r(250059);const o=e=>"string"!=typeof e&&e?e.state:null;var l=r(643913),c=r(547239),u=r(508847),h=r(102500),d=r(43760),p=r(579164),_=r(307640),m=r(397066),f=r(623568),A=r(226198);const I=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},O=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),g=({location:e,pin:t,surface:r})=>!(0,f.jL)(t)&&(({location:e,pinId:t,surface:r})=>{const n=Boolean(r),s=_.ZF.includes(r),a=e.pathname.includes(t);return n&&!s||a})({location:e,pinId:t.id,surface:r}),E=e=>{const t=Math.round(1e3*Math.random())+"",r=Math.round(1e3*Math.random())+"";n.t8((0,A.GS)(t),r);const s=`${t}-${r}`,{queryParams:a,url:i}=e;let o={token:s,url:i};if(!a){const{pinId:t,csrId:r,clientTrackingParams:n,auxData:s}=e;o={...o,pin:null!=t?t:void 0,csr:r&&!t?r:void 0,client_tracking_params:n,aux_data:s?JSON.stringify(s):void 0}}a&&(o={...o,...a});return`/offsite/?${(0,l.Z)(o)}`},T=e=>{(0,s.Z)(E(e),!0)},v=async({isMounted:e,pin:t,location:r,spamCheckCallback:n,href:s})=>{const i=await(0,h.Z)({check_only:!0,client_tracking_params:(0,a.Z)(t,r),pin_id:null==t?void 0:t.id,url:s}).callGet({showError:!1});if(!i.resource_response.error&&e){const e=i.resource_response.data||{},{message:t,redirect_status:r,url:s}=e;n({blocked:["blocked","suspicious","porn"].includes(r),message:t,redirectStatus:r,sanitized_url:s})}},R=({event:e,onHistoryChange:t,href:r,history:n,target:a})=>{const l=(0,i.Z)(r),h=o(r),d=(0,c.Z)(l);d===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===a?(0,s.Z)(l,"blank"===a):n&&d===p.Z.SAME_ORIGIN&&(n.push((0,u.Z)({url:l}),null!=h?h:{}),t&&t({event:e}))},S=({href:e,pinId:t,pin:r,location:n,auxData:s,spamCheck:i,queryParams:o},l,c)=>{"undefined"!=typeof window&&window.Windows?(0,d.Z)({url:e,pinId:t,pin:r,location:n,auxData:s}):r?(({spamCheck:e,auxData:t,location:r,pin:n,pinId:s,href:i},o,l)=>{if(null!=e&&e.blocked)null==l||l(e);else{if((0,m.b)({href:i,pinId:s,pin:n,location:r,auxData:t},o))return;T({url:i,pinId:s,csrId:null,clientTrackingParams:(0,a.Z)(n,r),auxData:t})}})({spamCheck:i,auxData:s,location:n,pin:r,pinId:t,href:e},l,c):T({url:e,pinId:t,queryParams:o})}},102500:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(6637);function s(e){return n.Z.create("ApiResource",{url:"/v3/offsite/",data:e})}},287072:(e,t,r)=>{r.d(t,{Z:()=>u,p:()=>h});var n=r(667294),s=r(250059),a=r(149230),i=r(407043),o=r(643074),l=r(48714),c=r(276775);function u(e){var t;const{externalData:r,href:u,onHistoryChange:h,target:d}=e,{logContextEvent:p}=(0,i.v)(),[_,m]=(0,n.useState)(null),[f,A]=(0,n.useState)(!1),I=(0,c.k6)(),O=(0,c.TH)(),g=(0,a.Z)({url:(0,s.Z)(u)}),{showWarning:E}=null!==(t=(0,o.s)())&&void 0!==t?t:{};return(0,n.useEffect)((()=>(A(!0),()=>{A(!1)})),[]),(0,n.useEffect)((()=>{g&&null!=r&&r.pin&&null===_&&f&&(0,l.$3)({location:O,pin:r.pin,surface:r.surface})&&(0,l.iw)({isMounted:f,pin:r.pin,location:O,spamCheckCallback:e=>m(e),href:(0,s.Z)(u)})}),[null==r?void 0:r.pin,null==r?void 0:r.surface,u,g,f,O,_]),({event:e})=>{var t;(0,l.gV)({isOffsiteUrl:g,event:e})||(e.preventDefault(),u&&(g||null!=r&&r.dangerouslyForceOffsiteUrl?(0,l.lI)({auxData:null==r?void 0:r.auxData,href:(0,s.Z)(u),pinId:null==r||null===(t=r.pin)||void 0===t?void 0:t.id,pin:null==r?void 0:r.pin,queryParams:null==r?void 0:r.queryParams,location:O,spamCheck:_},p,E):(0,l.G3)({event:e,href:u,history:I,onHistoryChange:h,target:"blank"===d?"blank":null})))}}const h=({children:e,...t})=>e({handleClick:u(t)})},623568:(e,t,r)=>{r.d(t,{Js:()=>a,NK:()=>f,Nc:()=>A,VX:()=>i,Zt:()=>_,_J:()=>c,_Q:()=>s,cL:()=>d,dZ:()=>g,hb:()=>m,hy:()=>l,iR:()=>n,jL:()=>o,o:()=>I,pU:()=>O,rM:()=>p,sV:()=>u,sY:()=>h});const n=e=>!!e&&!!e.video_list,s=e=>!!e.promoted_is_lead_ad,a=(e,t)=>{let r=e&&e.url?e.url.split("/")[1]:"";return t&&t.full_name&&(r=t.full_name),r},i=e=>{var t;return e.rich_summary&&e.rich_summary.products&&e.rich_summary.products.length>0||(null===(t=e.rich_metadata)||void 0===t?void 0:t.products)&&e.rich_metadata.products.length>0||!1},o=e=>!!e.promoter&&!e.is_downstream_promotion,l=e=>!!e,c=e=>!!e.video_status&&5!==e.video_status,u=e=>["email","messages","deep_linking"].includes(e),h=e=>!!e&&"gif"===e,d=({embedSrc:e,embedSubtype:t,embedType:r})=>!!e&&!h(r)&&!(e=>"pinstory"===e)(t),p=({link:e,mobileLink:t,trackedLink:r})=>!t&&!r&&!e,_=({link:e,mobileLink:t,origImageUrl:r,trackedLink:n})=>t||n||e||r||"",m=({isStoryPin:e,isVideoPin:t})=>e?"storyPin":t?"video":"image",f=(e,t)=>({deeplinkUri:{android:`pin/${e}/repin`,iOS:`repin/${e}`},mwebUri:{pathname:`/pin/${e}/repin/`,state:{trackingParams:t.state?t.state.trackingParams:""}}});function A(e){var t,r;return!n(e.videos)&&!l(e.story_pin_data_id)&&0!==Object.keys((null===(t=e.aggregated_pin_data)||void 0===t||null===(r=t.creator_analytics)||void 0===r?void 0:r["30d_realtime"])||{}).length}function I(e){var t;return 0!==Object.keys((null===(t=e.creator_analytics)||void 0===t?void 0:t["30d_realtime"])||{}).length}function O(e){var t;return 0!==Object.keys((null===(t=e.public_creator_analytics)||void 0===t?void 0:t.all_time_realtime)||{}).length}function g(e){var t,r;return!(null===(t=e.creator_analytics)||void 0===t||null===(r=t["30d_realtime"])||void 0===r||!r.is_realtime)}},250059:(e,t,r)=>{r.d(t,{Z:()=>n});const n=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},149230:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(954931);const s=({url:e})=>!(!e||!e.match(/^https{0,1}:\/\//)||(0,n.Z)(e))},508847:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(567831);const s=(e,t)=>0===e.lastIndexOf(t,0),a=({url:e})=>{const t=(0,n.Z)("/");return s(e,t)?e.substr(t.length-1):e}},43760:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(768559),s=r(102500),a=r(48714);function i({url:e,pinId:t,pin:r,location:i,auxData:o}){const l={check_only:!0,client_tracking_params:r?(0,n.Z)(r,i):void 0,pin_id:r?r.id:t,url:e,aux_data:JSON.stringify(o)};(0,s.Z)(l).callGet().then((s=>{if(s&&s.resource_response&&!s.resource_response.error){const{resource_response:e}=s,{redirect_status:t,url:r}=e.data;if(!["blocked","suspicious","porn"].includes(t)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(r);window.Windows.System.Launcher.launchUriAsync(e)}return}}if(r){const s=(0,n.Z)(r,i);(0,a.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:s,auxData:o})}else(0,a.Gj)({url:e,pinId:t})}))}},307640:(e,t,r)=>{r.d(t,{UP:()=>o,Wv:()=>s,ZF:()=>n,zI:()=>a,zl:()=>i});const n=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],s=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],a=[...s,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],i=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],o=["BaseBoardPinGrid"]},643074:(e,t,r)=>{r.d(t,{Z:()=>A,s:()=>f});var n=r(667294),s=r(121151),a=r(966113),i=r(608575),o=r(898781),l=r(349700),c=r(883119),u=r(785893);const h=()=>{var e;const t=(0,o.ZP)(),{dismissWarning:r}=null!==(e=f())&&void 0!==e?e:{};return(0,u.jsx)(c.xu,{paddingX:3,children:(0,u.jsx)(c.zx,{fullWidth:!0,color:"red",onClick:r,text:t._('Okay', 'Dismiss a modal stating that clicking through to a link has been blocked', 'Dismiss a modal stating that clicking through to a link has been blocked')})})},d=()=>{const e=(0,o.ZP)();return(0,u.jsx)(c.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(c.rU,{target:"blank",href:a.Z.settings.POLICY_COMMUNITY_GUIDELINES_SPAM_AND_QUALITY,inline:!0,underline:"hover",children:e._('Learn more', 'Link text leading to policy website', 'Link text leading to policy website')})})},p=({message:e,sanitized_url:t})=>{var r;const n=(0,o.ZP)(),{dismissWarning:a}=null!==(r=f())&&void 0!==r?r:{};return(0,u.jsx)(s.ZP,{accessibilityModalLabel:n._('We have blocked this link', 'Modal label when clicking a spammy link', 'Modal label when clicking a spammy link'),onDismiss:a,heading:n._('Heads up!', 'Modal heading when clicking through to a link has been blocked', 'Modal heading when clicking through to a link has been blocked'),footer:(0,u.jsx)(h,{}),children:(0,u.jsxs)(c.xu,{padding:6,children:[(0,u.jsx)(c.xv,{children:(0,l.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,u.jsx)(d,{},"learnMoreLink")})}),(0,u.jsxs)(c.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,u.jsx)(c.xu,{marginEnd:3,children:(0,u.jsx)(c.JO,{accessibilityLabel:n._('Blocked link address', 'Icon label preceding a block url', 'Icon label preceding a block url'),color:"error",icon:"report",inline:!0,size:24})}),(0,u.jsx)(c.xv,{inline:!0,lineClamp:1,weight:"bold",children:i.parse(t).hostname})]})]})})};var _=r(425288);const{Provider:m,useMaybeHook:f}=(0,_.Z)("SpammyClickthrough");function A({children:e}){const[t,r]=(0,n.useState)(null),s=(0,n.useCallback)((()=>{r(null)}),[r]),a=(0,n.useCallback)((e=>{r(e)}),[r]),i=(0,n.useMemo)((()=>({dismissWarning:s,showWarning:a})),[s,a]);return(0,u.jsxs)(m,{value:i,children:[t&&(0,u.jsx)(p,{...t}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/87072-1bc395c04ee4ba0a.mjs.map