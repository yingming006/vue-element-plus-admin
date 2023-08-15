import{cn as e,co as t,cp as n}from"./index-677a4f27.js";function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,i=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>i(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,f=u("undefined");const d=c("ArrayBuffer");const p=u("string"),h=u("function"),m=u("number"),y=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==i(e))return!1;const t=s(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=c("Date"),w=c("File"),E=c("Blob"),O=c("FileList"),R=c("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function A(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,j=e=>!f(e)&&e!==T;const N=(v="undefined"!=typeof Uint8Array&&s(Uint8Array),e=>v&&e instanceof v);var v;const C=c("HTMLFormElement"),x=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=c("RegExp"),U=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},_="abcdefghijklmnopqrstuvwxyz",F="0123456789",L={DIGIT:F,ALPHA:_,ALPHA_DIGIT:_+_.toUpperCase()+F};const B=c("AsyncFunction"),D={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=i(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:p,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:g,isUndefined:f,isDate:b,isFile:w,isBlob:E,isRegExp:P,isFunction:h,isStream:e=>y(e)&&h(e.pipe),isURLSearchParams:R,isTypedArray:N,isFileList:O,forEach:S,merge:function e(){const{caseless:t}=j(this)&&this||{},n={},r=(r,o)=>{const s=t&&A(n,o)||o;g(n[s])&&g(r)?n[s]=e(n[s],r):g(r)?n[s]=e({},r):l(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&S(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(S(t,((t,o)=>{n&&h(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:C,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:U,freezeMethods:e=>{U(e,((t,n)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];h(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:A,global:T,isContextDefined:j,ALPHABET:L,generateString:(e=16,t=L.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return S(e,((e,t)=>{const s=n(e,r+1);!f(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:B,isThenable:e=>e&&(y(e)||h(e))&&h(e.then)&&h(e.catch)};function k(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}D.inherits(k,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const q=k.prototype,I={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{I[e]={value:e}})),Object.defineProperties(k,I),Object.defineProperty(q,"isAxiosError",{value:!0}),k.from=(e,t,n,r,o,s)=>{const i=Object.create(q);return D.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),k.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function M(e){return D.isPlainObject(e)||D.isArray(e)}function z(e){return D.endsWith(e,"[]")?e.slice(0,-2):e}function H(e,t,n){return e?e.concat(t).map((function(e,t){return e=z(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const J=D.toFlatObject(D,{},null,(function(e){return/^is[A-Z]/.test(e)}));function W(e,t,n){if(!D.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!D.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&D.isSpecCompliantForm(t);if(!D.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(D.isDate(e))return e.toISOString();if(!a&&D.isBlob(e))throw new k("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(e)||D.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(D.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(D.isArray(e)&&function(e){return D.isArray(e)&&!e.some(M)}(e)||(D.isFileList(e)||D.endsWith(n,"[]"))&&(a=D.toArray(e)))return n=z(n),a.forEach((function(e,r){!D.isUndefined(e)&&null!==e&&t.append(!0===i?H([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!M(e)||(t.append(H(o,n,s),c(e)),!1)}const l=[],f=Object.assign(J,{defaultVisitor:u,convertValue:c,isVisitable:M});if(!D.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!D.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),D.forEach(n,(function(n,s){!0===(!(D.isUndefined(n)||null===n)&&o.call(t,n,D.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function K(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function V(e,t){this._pairs=[],e&&W(e,this,t)}const G=V.prototype;function $(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function X(e,t,n){if(!t)return e;const r=n&&n.encode||$,o=n&&n.serialize;let s;if(s=o?o(t,n):D.isURLSearchParams(t)?t.toString():new V(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}G.append=function(e,t){this._pairs.push([e,t])},G.toString=function(e){const t=e?function(t){return e.call(this,t,K)}:K;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const Q=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Z={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:V,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function ee(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&D.isArray(r)?r.length:s,a)return D.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&D.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&D.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(D.isFormData(e)&&D.isFunction(e.entries)){const n={};return D.forEachEntry(e,((e,r)=>{t(function(e){return D.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const te={"Content-Type":void 0};const ne={transitional:Z,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=D.isObject(e);o&&D.isHTMLForm(e)&&(e=new FormData(e));if(D.isFormData(e))return r&&r?JSON.stringify(ee(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return W(e,new Y.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Y.isNode&&D.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=D.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return W(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(D.isString(e))try{return(t||JSON.parse)(e),D.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ne.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&D.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw k.from(o,k.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Y.classes.FormData,Blob:Y.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};D.forEach(["delete","get","head"],(function(e){ne.headers[e]={}})),D.forEach(["post","put","patch"],(function(e){ne.headers[e]=D.merge(te)}));const re=ne,oe=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),se=Symbol("internals");function ie(e){return e&&String(e).trim().toLowerCase()}function ae(e){return!1===e||null==e?e:D.isArray(e)?e.map(ae):String(e)}function ce(e,t,n,r,o){return D.isFunction(r)?r.call(this,t,n):(o&&(t=n),D.isString(t)?D.isString(r)?-1!==t.indexOf(r):D.isRegExp(r)?r.test(t):void 0:void 0)}class ue{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ie(t);if(!o)throw new Error("header name must be a non-empty string");const s=D.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ae(e))}const s=(e,t)=>D.forEach(e,((e,n)=>o(e,n,t)));return D.isPlainObject(e)||e instanceof this.constructor?s(e,t):D.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&oe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ie(e)){const n=D.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(D.isFunction(t))return t.call(this,e,n);if(D.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ie(e)){const n=D.findKey(this,e);return!(!n||void 0===this[n]||t&&!ce(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ie(e)){const o=D.findKey(n,e);!o||t&&!ce(0,n[o],o,t)||(delete n[o],r=!0)}}return D.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ce(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return D.forEach(this,((r,o)=>{const s=D.findKey(n,o);if(s)return t[s]=ae(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ae(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return D.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&D.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[se]=this[se]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ie(e);t[r]||(!function(e,t){const n=D.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return D.isArray(e)?e.forEach(r):r(e),this}}ue.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),D.freezeMethods(ue.prototype),D.freezeMethods(ue);const le=ue;function fe(e,t){const n=this||re,r=t||n,o=le.from(r.headers);let s=r.data;return D.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function de(e){return!(!e||!e.__CANCEL__)}function pe(e,t,n){k.call(this,null==e?"canceled":e,k.ERR_CANCELED,t,n),this.name="CanceledError"}D.inherits(pe,k,{__CANCEL__:!0});const he=Y.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),D.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),D.isString(r)&&i.push("path="+r),D.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function me(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ye=Y.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=D.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ge(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const be={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=le.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}D.isFormData(r)&&(Y.isStandardBrowserEnv||Y.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=me(e.baseURL,e.url);function l(){if(!c)return;const r=le.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new k("Request failed with status code "+n.status,[k.ERR_BAD_REQUEST,k.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),X(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new k("Request aborted",k.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new k("Network Error",k.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Z;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new k(t,r.clarifyTimeoutError?k.ETIMEDOUT:k.ECONNABORTED,e,c)),c=null},Y.isStandardBrowserEnv){const t=(e.withCredentials||ye(u))&&e.xsrfCookieName&&he.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&D.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),D.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",ge(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new pe(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===Y.protocols.indexOf(f)?n(new k("Unsupported protocol "+f+":",k.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};D.forEach(be,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const we=e=>{e=D.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=D.isString(n)?be[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new k(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(D.hasOwnProp(be,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!D.isFunction(r))throw new TypeError("adapter is not a function");return r};function Ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pe(null,e)}function Oe(e){Ee(e),e.headers=le.from(e.headers),e.data=fe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return we(e.adapter||re.adapter)(e).then((function(t){return Ee(e),t.data=fe.call(e,e.transformResponse,t),t.headers=le.from(t.headers),t}),(function(t){return de(t)||(Ee(e),t&&t.response&&(t.response.data=fe.call(e,e.transformResponse,t.response),t.response.headers=le.from(t.response.headers))),Promise.reject(t)}))}const Re=e=>e instanceof le?e.toJSON():e;function Se(e,t){t=t||{};const n={};function r(e,t,n){return D.isPlainObject(e)&&D.isPlainObject(t)?D.merge.call({caseless:n},e,t):D.isPlainObject(t)?D.merge({},t):D.isArray(t)?t.slice():t}function o(e,t,n){return D.isUndefined(t)?D.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!D.isUndefined(t))return r(void 0,t)}function i(e,t){return D.isUndefined(t)?D.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Re(e),Re(t),!0)};return D.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);D.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Ae="1.4.0",Te={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Te[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const je={};Te.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new k(function(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),k.ERR_DEPRECATED);return t&&!je[o]&&(je[o]=!0),!e||e(r,o,s)}};const Ne={assertOptions:function(e,t,n){if("object"!=typeof e)throw new k("options must be an object",k.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new k("option "+s+" must be "+n,k.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new k("Unknown option "+s,k.ERR_BAD_OPTION)}},validators:Te},ve=Ne.validators;class Ce{constructor(e){this.defaults=e,this.interceptors={request:new Q,response:new Q}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Se(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;void 0!==n&&Ne.assertOptions(n,{silentJSONParsing:ve.transitional(ve.boolean),forcedJSONParsing:ve.transitional(ve.boolean),clarifyTimeoutError:ve.transitional(ve.boolean)},!1),null!=r&&(D.isFunction(r)?t.paramsSerializer={serialize:r}:Ne.assertOptions(r,{encode:ve.function,serialize:ve.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&D.merge(o.common,o[t.method]),s&&D.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=le.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Oe.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=Oe.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return X(me((e=Se(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],(function(e){Ce.prototype[e]=function(t,n){return this.request(Se(n||{},{method:e,url:t,data:(n||{}).data}))}})),D.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Se(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ce.prototype[e]=t(),Ce.prototype[e+"Form"]=t(!0)}));const xe=Ce;class Pe{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new pe(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Pe((function(t){e=t})),cancel:e}}}const Ue=Pe;const _e={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_e).forEach((([e,t])=>{_e[t]=e}));const Fe=_e;const Le=function e(t){const n=new xe(t),o=r(xe.prototype.request,n);return D.extend(o,xe.prototype,n,{allOwnKeys:!0}),D.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(Se(t,n))},o}(re);Le.Axios=xe,Le.CanceledError=pe,Le.CancelToken=Ue,Le.isCancel=de,Le.VERSION=Ae,Le.toFormData=W,Le.AxiosError=k,Le.Cancel=Le.CanceledError,Le.all=function(e){return Promise.all(e)},Le.spread=function(e){return function(t){return e.apply(null,t)}},Le.isAxiosError=function(e){return D.isObject(e)&&!0===e.isAxiosError},Le.mergeConfig=Se,Le.AxiosHeaders=le,Le.formToJSON=e=>ee(D.isHTMLForm(e)?new FormData(e):e),Le.HttpStatusCode=Fe,Le.default=Le;const Be=Le,{interceptors:De,baseUrl:ke}=e,qe=ke.pro,{requestInterceptors:Ie,responseInterceptors:Me}=De,ze=new Map,He=Be.create({...e,baseURL:qe});He.interceptors.request.use((e=>{const t=new AbortController,n=e.url||"";return e.signal=t.signal,ze.set(n,t),e})),He.interceptors.response.use((e=>{const t=e.config.url||"";return ze.delete(t),e.data}),(e=>e)),He.interceptors.request.use(Ie||t),He.interceptors.response.use(Me||n);const Je={request:e=>new Promise(((t,n)=>{var r;(null==(r=e.interceptors)?void 0:r.requestInterceptors)&&(e=e.interceptors.requestInterceptors(e)),He.request(e).then((e=>{t(e)})).catch((e=>{n(e)}))})),cancelRequest:e=>{var t;const n=Array.isArray(e)?e:[e];for(const r of n)null==(t=ze.get(r))||t.abort(),ze.delete(r)},cancelAllRequest(){for(const[e,t]of ze)t.abort();ze.clear()}},{defaultHeaders:We}=e,Ke=e=>{const{url:t,method:n,params:r,data:o,headersType:s,responseType:i}=e;return Je.request({url:t,method:n,params:r,data:o,responseType:i,headers:{"Content-Type":s||We}})},Ve={get:e=>Ke({method:"get",...e}),post:e=>Ke({method:"post",...e}),delete:e=>Ke({method:"delete",...e}),put:e=>Ke({method:"put",...e}),cancelRequest:e=>Je.cancelRequest(e),cancelAllRequest:()=>Je.cancelAllRequest()};export{Ve as r};
