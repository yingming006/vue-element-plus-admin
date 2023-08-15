import{aq as e,d as t,N as s,S as n,r,x as a,o,c as i,e as l,O as c,a as h,n as u,f as d,P as g,j as p,_ as f}from"./index-677a4f27.js";import{E as m}from"./el-input-240d8b27.js";const b=(e,t)=>e.push.apply(e,t),y=e=>e.sort(((e,t)=>e.i-t.i||e.j-t.j)),w=e=>{const t={};let s=1;return e.forEach((e=>{t[e]=s,s+=1})),t};const k={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},x=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,M=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,v=/^[A-Z\xbf-\xdf]+$/,S=/^[^a-z\xdf-\xff]+$/,I=/^[a-z\xdf-\xff]+$/,T=/^[^A-Z\xbf-\xdf]+$/,j=/[a-z\xdf-\xff]/,A=/[A-Z\xbf-\xdf]/,C=/[^A-Za-z\xbf-\xdf]/gi,D=/^\d+$/,E=(new Date).getFullYear(),P={recentYear:/19\d\d|200\d|201\d|202\d/g},L=[" ",",",";",":","|","/","\\","_",".","-"],R=L.length;class z{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return y(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let r=n+5;r<=n+9&&!(r>=e.length);r+=1){const a=e.slice(n,+r+1||9e9),o=s.exec(a);if(null!=o){const e=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);null!=e&&t.push({pattern:"date",token:a,i:n,j:r,separator:o[2],year:e.year,month:e.month,day:e.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=e=>Math.abs(e.year-E);for(let r=0;r<=Math.abs(e.length-4);r+=1)for(let a=r+3;a<=r+7&&!(a>=e.length);a+=1){const o=e.slice(r,+a+1||9e9);if(s.exec(o)){const e=[],s=o.length;if(k[s].forEach((([t,s])=>{const n=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,t),10),parseInt(o.slice(t,s),10),parseInt(o.slice(s),10)]);null!=n&&e.push(n)})),e.length>0){let s=e[0],i=n(e[0]);e.slice(1).forEach((e=>{const t=n(e);t<i&&(s=e,i=t)})),t.push({pattern:"date",token:o,i:r,j:a,separator:"",year:s.year,month:s.month,day:s.day})}}}return t}filterNoise(e){return e.filter((t=>{let s=!1;const n=e.length;for(let r=0;r<n;r+=1){const n=e[r];if(t!==n&&n.i<=t.i&&n.j>=t.j){s=!0;break}}return!s}))}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let r=0,a=e.length;r<a;r+=1){const a=e[r];if(a>99&&a<1e3||a>2050)return null;a>31&&(s+=1),a>12&&(t+=1),a<=0&&(n+=1)}return s>=2||3===t||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[e,s]=t[n];if(1e3<=e&&e<=2050){const t=this.mapIntegersToDayMonth(s);return null!=t?{year:e,month:t.month,day:t.day}:null}}for(let n=0;n<s;n+=1){const[e,s]=t[n],r=this.mapIntegersToDayMonth(s);if(null!=r)return{year:this.twoToFourDigitYear(e),month:r.month,day:r.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const e=t[s],n=e[0],r=e[1];if(n>=1&&n<=31&&r>=1&&r<=12)return{day:n,month:r}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const N=new Uint32Array(65536),O=(e,t)=>{if(e.length<t.length){const s=t;t=e,e=s}return 0===t.length?e.length:e.length<=32?((e,t)=>{const s=e.length,n=t.length,r=1<<s-1;let a=-1,o=0,i=s,l=s;for(;l--;)N[e.charCodeAt(l)]|=1<<l;for(l=0;l<n;l++){let e=N[t.charCodeAt(l)];const s=e|o;e|=(e&a)+a^a,o|=~(e|a),a&=e,o&r&&i++,a&r&&i--,o=o<<1|1,a=a<<1|~(s|o),o&=s}for(l=s;l--;)N[e.charCodeAt(l)]=0;return i})(e,t):((e,t)=>{const s=t.length,n=e.length,r=[],a=[],o=Math.ceil(s/32),i=Math.ceil(n/32);for(let p=0;p<o;p++)a[p]=-1,r[p]=0;let l=0;for(;l<i-1;l++){let o=0,i=-1;const c=32*l,h=Math.min(32,n)+c;for(let t=c;t<h;t++)N[e.charCodeAt(t)]|=1<<t;for(let e=0;e<s;e++){const s=N[t.charCodeAt(e)],n=a[e/32|0]>>>e&1,l=r[e/32|0]>>>e&1,c=s|o,h=((s|l)&i)+i^i|s|l;let u=o|~(h|i),d=i&h;u>>>31^n&&(a[e/32|0]^=1<<e),d>>>31^l&&(r[e/32|0]^=1<<e),u=u<<1|n,d=d<<1|l,i=d|~(c|u),o=u&c}for(let t=c;t<h;t++)N[e.charCodeAt(t)]=0}let c=0,h=-1;const u=32*l,d=Math.min(32,n-u)+u;for(let p=u;p<d;p++)N[e.charCodeAt(p)]|=1<<p;let g=n;for(let p=0;p<s;p++){const e=N[t.charCodeAt(p)],s=a[p/32|0]>>>p&1,o=r[p/32|0]>>>p&1,i=e|c,l=((e|o)&h)+h^h|e|o;let u=c|~(l|h),d=h&l;g+=u>>>n-1&1,g-=d>>>n-1&1,u>>>31^s&&(a[p/32|0]^=1<<p),d>>>31^o&&(r[p/32|0]^=1<<p),u=u<<1|s,d=d<<1|o,h=d|~(i|u),c=u&i}for(let p=u;p<d;p++)N[e.charCodeAt(p)]=0;return g})(e,t)},$=(e,t,s)=>{let n=0;const r=Object.keys(t).find((t=>{const r=((e,t,s)=>{const n=e.length<=t.length,r=e.length<=s;return n||r?Math.ceil(e.length/4):s})(e,t,s);if(Math.abs(e.length-t.length)>r)return!1;const a=O(e,t),o=a<=r;return o&&(n=a),o}));return r?{levenshteinDistance:n,levenshteinDistanceEntry:r}:{}};var q={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},F={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class W{constructor(e=[]){this.parents=e,this.children=new Map}addSub(e,...t){const s=e.charAt(0);this.children.has(s)||this.children.set(s,new W([...this.parents,s]));let n=this.children.get(s);for(let r=1;r<e.length;r+=1){const t=e.charAt(r);n.hasChild(t)||n.addChild(t),n=n.getChild(t)}return n.subs=(n.subs||[]).concat(t),this}getChild(e){return this.children.get(e)}isTerminal(){return!!this.subs}addChild(e){this.hasChild(e)||this.children.set(e,new W([...this.parents,e]))}hasChild(e){return this.children.has(e)}}var G=(e,t)=>(Object.entries(e).forEach((([e,s])=>{s.forEach((s=>{t.addSub(s,e)}))})),t);const Y=new class{constructor(){this.matchers={},this.l33tTable=q,this.trieNodeRoot=G(q,new W),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=F,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=512,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable,this.trieNodeRoot=G(e.l33tTable,new W)),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),void 0!==e.useLevenshteinDistance&&(this.useLevenshteinDistance=e.useLevenshteinDistance),void 0!==e.levenshteinThreshold&&(this.levenshteinThreshold=e.levenshteinThreshold),void 0!==e.l33tMaxSubstitutions&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),void 0!==e.maxLength&&(this.maxLength=e.maxLength)}setTranslations(e){if(!this.checkCustomTranslations(e))throw new Error("Invalid translations object fallback to keys");this.translations=e}checkCustomTranslations(e){let t=!0;return Object.keys(F).forEach((s=>{if(s in e){const n=s;Object.keys(F[n]).forEach((s=>{s in e[n]||(t=!1)}))}else t=!1})),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach((s=>{e[s]=w(this.dictionary[s]),t[s]=this.getRankedDictionariesMaxWordSize(this.dictionary[s])})),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=e.map((e=>"string"!=typeof e?e.toString().length:e.length));return 0===t.length?0:t.reduce(((e,t)=>Math.max(e,t)),-1/0)}buildSanitizedRankedDictionary(e){const t=[];return e.forEach((e=>{const s=typeof e;"string"!==s&&"number"!==s&&"boolean"!==s||t.push(e.toString().toLowerCase())})),w(t)}extendUserInputsDictionary(e){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...e];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(e,t){this.matchers[e]||(this.matchers[e]=t)}};class _{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map((t=>({...t,token:t.token.split("").reverse().join(""),reversed:!0,i:e.length-1-t.j,j:e.length-1-t.i})))}}class V{constructor({substr:e,buffer:t,limit:s,trieRoot:n}){this.finalPasswords=[],this.substr=e,this.buffer=t,this.limit=s,this.trieRoot=n}getAllPossibleSubsAtIndex(e){const t=[];let s=this.trieRoot;for(let n=e;n<this.substr.length;n+=1){const e=this.substr.charAt(n);if(s=s.getChild(e),!s)break;t.push(s)}return t}helper({onlyFullSub:e,isFullSub:t,index:s,subIndex:n,changes:r}){if(this.finalPasswords.length>=this.limit)return;if(s===this.substr.length)return void(e===t&&this.finalPasswords.push({password:this.buffer.join(""),changes:r}));const a=[...this.getAllPossibleSubsAtIndex(s)];let o=!1;for(let i=s+a.length-1;i>=s;i-=1){const l=a[i-s];if(l.isTerminal()){o=!0;const s=l.subs;for(const a of s){this.buffer.push(a);const s=r.concat({i:n,letter:a,substitution:l.parents.join("")});if(this.helper({onlyFullSub:e,isFullSub:t,index:i+1,subIndex:n+a.length,changes:s}),this.buffer.pop(),this.finalPasswords.length>=this.limit)return}}}if(!e||!o){const a=this.substr.charAt(s);this.buffer.push(a),this.helper({onlyFullSub:e,isFullSub:t&&!o,index:s+1,subIndex:n+1,changes:r}),this.buffer.pop()}}getAll(){return this.helper({onlyFullSub:!0,isFullSub:!0,index:0,subIndex:0,changes:[]}),this.helper({onlyFullSub:!1,isFullSub:!0,index:0,subIndex:0,changes:[]}),this.finalPasswords}}class U{constructor(e){this.defaultMatch=e}isAlreadyIncluded(e,t){return e.some((e=>Object.entries(e).every((([e,s])=>"subs"===e||s===t[e]))))}match({password:e}){const t=[],s=(n=e,r=Y.l33tMaxSubstitutions,a=Y.trieNodeRoot,new V({substr:n,buffer:[],limit:r,trieRoot:a}).getAll());var n,r,a;let o=!1,i=!0;return s.forEach((s=>{if(o)return;const n=this.defaultMatch({password:s.password,useLevenshtein:i});i=!1,n.forEach((n=>{o||(o=0===n.i&&n.j===e.length-1);const r=((e,t,s)=>{const n=e.changes.filter((e=>e.i<t)).reduce(((e,t)=>e-t.letter.length+t.substitution.length),t),r=e.changes.filter((e=>e.i>=t&&e.i<=s)),a=r.reduce(((e,t)=>e-t.letter.length+t.substitution.length),s-t+n),o=[],i=[];return r.forEach((e=>{o.findIndex((t=>t.letter===e.letter&&t.substitution===e.substitution))<0&&(o.push({letter:e.letter,substitution:e.substitution}),i.push(`${e.substitution} -> ${e.letter}`))})),{i:n,j:a,subs:o,subDisplay:i.join(", ")}})(s,n.i,n.j),a=e.slice(r.i,+r.j+1||9e9),i={...n,l33t:!0,token:a,...r},l=this.isAlreadyIncluded(t,i);a.toLowerCase()===n.matchedWord||l||t.push(i)}))})),t.filter((e=>e.token.length>1))}}class B{constructor(){this.l33t=new U(this.defaultMatch),this.reverse=new _(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return y(t)}defaultMatch({password:e,useLevenshtein:t=!0}){const s=[],n=e.length,r=e.toLowerCase();return Object.keys(Y.rankedDictionaries).forEach((a=>{const o=Y.rankedDictionaries[a],i=Y.rankedDictionariesMaxWordSize[a],l=Math.min(i,n);for(let c=0;c<n;c+=1){const i=Math.min(c+l,n);for(let l=c;l<i;l+=1){const i=r.slice(c,+l+1||9e9),h=i in o;let u={};const d=0===c&&l===n-1;Y.useLevenshteinDistance&&d&&!h&&t&&(u=$(i,o,Y.levenshteinThreshold));const g=0!==Object.keys(u).length;if(h||g){const t=o[g?u.levenshteinDistanceEntry:i];s.push({pattern:"dictionary",i:c,j:l,token:e.slice(c,+l+1||9e9),matchedWord:i,rank:t,dictionaryName:a,reversed:!1,l33t:!1,...u})}}}})),s}}class H{match({password:e,regexes:t=P}){const s=[];return Object.keys(t).forEach((n=>{const r=t[n];let a;for(r.lastIndex=0;a=r.exec(e);)if(a){const e=a[0];s.push({pattern:"regex",token:e,i:a.index,j:a.index+a[0].length-1,regexName:n,regexMatch:a})}})),y(s)}}var Z={nCk(e,t){let s=e;if(t>s)return 0;if(0===t)return 1;let n=1;for(let r=1;r<=t;r+=1)n*=s,n/=r,s-=1;return n},log10:e=>0===e?0:Math.log(e)/Math.log(10),log2:e=>Math.log(e)/Math.log(2),factorial(e){let t=1;for(let s=2;s<=e;s+=1)t*=s;return t}};var X=e=>{const t=e.replace(C,"");if(t.match(T)||t.toLowerCase()===t)return 1;const s=[x,M,S],n=s.length;for(let r=0;r<n;r+=1){const e=s[r];if(t.match(e))return 2}return(e=>{const t=e.split(""),s=t.filter((e=>e.match(A))).length,n=t.filter((e=>e.match(j))).length;let r=0;const a=Math.min(s,n);for(let o=1;o<=a;o+=1)r+=Z.nCk(s+n,o);return r})(t)};const K=(e,t)=>{let s=0,n=e.indexOf(t);for(;n>=0;)s+=1,n=e.indexOf(t,n+t.length);return s};var J=({l33t:e,subs:t,token:s})=>{if(!e)return 1;let n=1;return t.forEach((e=>{const{subbedCount:t,unsubbedCount:r}=(({sub:e,token:t})=>{const s=t.toLowerCase();return{subbedCount:K(s,e.substitution),unsubbedCount:K(s,e.letter)}})({sub:e,token:s});if(0===t||0===r)n*=2;else{const e=Math.min(r,t);let s=0;for(let n=1;n<=e;n+=1)s+=Z.nCk(r+t,n);n*=s}})),n};const Q=({token:e,graph:t,turns:s})=>{const n=Object.keys(Y.graphs[t]).length,r=(e=>{let t=0;return Object.keys(e).forEach((s=>{const n=e[s];t+=n.filter((e=>!!e)).length})),t/=Object.entries(e).length,t})(Y.graphs[t]);let a=0;const o=e.length;for(let i=2;i<=o;i+=1){const e=Math.min(s,i-1);for(let t=1;t<=e;t+=1)a+=Z.nCk(i-1,t-1)*n*r**t}return a};const ee={bruteforce:({token:e})=>{let t,s=10**e.length;return s===Number.POSITIVE_INFINITY&&(s=Number.MAX_VALUE),t=1===e.length?11:51,Math.max(s,t)},date:({year:e,separator:t})=>{let s=365*Math.max(Math.abs(e-E),20);return t&&(s*=4),s},dictionary:({rank:e,reversed:t,l33t:s,subs:n,token:r,dictionaryName:a})=>{const o=e,i=X(r),l=J({l33t:s,subs:n,token:r});let c;return c="diceware"===a?3888:o*i*l*(t?2:1),{baseGuesses:o,uppercaseVariations:i,l33tVariations:l,calculation:c}},regex:({regexName:e,regexMatch:t,token:s})=>{const n={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};return e in n?n[e]**s.length:"recentYear"===e?Math.max(Math.abs(parseInt(t[0],10)-E),20):0},repeat:({baseGuesses:e,repeatCount:t})=>e*t,sequence:({token:e,ascending:t})=>{const s=e.charAt(0);let n=0;return n=["a","A","z","Z","0","1","9"].includes(s)?4:s.match(/\d/)?10:26,t||(n*=2),n*e.length},spatial:({graph:e,token:t,shiftedCount:s,turns:n})=>{let r=Q({token:t,graph:e,turns:n});if(s){const e=t.length-s;if(0===s||0===e)r*=2;else{let t=0;for(let n=1;n<=Math.min(s,e);n+=1)t+=Z.nCk(s+e,n);r*=t}}return Math.round(r)},separator:()=>R};var te=(e,t)=>{const s={};if("guesses"in e&&null!=e.guesses)return e;const n=((e,t)=>{let s=1;return e.token.length<t.length&&(s=1===e.token.length?10:50),s})(e,t),r=((e,t)=>ee[e]?ee[e](t):Y.matchers[e]&&"scoring"in Y.matchers[e]?Y.matchers[e].scoring(t):0)(e.pattern,e);let a=0;"number"==typeof r?a=r:"dictionary"===e.pattern&&(a=r.calculation,s.baseGuesses=r.baseGuesses,s.uppercaseVariations=r.uppercaseVariations,s.l33tVariations=r.l33tVariations);const o=Math.max(a,n);return{...e,...s,guesses:o,guessesLog10:Z.log10(o)}};const se={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(e,t){const s=[];for(let n=0;n<e;n+=1){let e=[];"object"===t&&(e={}),s.push(e)}return s},makeBruteforceMatch(e,t){return{pattern:"bruteforce",token:this.password.slice(e,+t+1||9e9),i:e,j:t}},update(e,t){const s=e.j,n=te(e,this.password);let r=n.guesses;t>1&&(r*=this.optimal.pi[n.i-1][t-1]);let a=Z.factorial(t)*r;this.excludeAdditive||(a+=1e4**(t-1));let o=!1;Object.keys(this.optimal.g[s]).forEach((e=>{const n=this.optimal.g[s][e];parseInt(e,10)<=t&&n<=a&&(o=!0)})),o||(this.optimal.g[s][t]=a,this.optimal.m[s][t]=n,this.optimal.pi[s][t]=r)},bruteforceUpdate(e){let t=this.makeBruteforceMatch(0,e);this.update(t,1);for(let s=1;s<=e;s+=1){t=this.makeBruteforceMatch(s,e);const n=this.optimal.m[s-1];Object.keys(n).forEach((e=>{"bruteforce"!==n[e].pattern&&this.update(t,parseInt(e,10)+1)}))}},unwind(e){const t=[];let s=e-1,n=0,r=1/0;const a=this.optimal.g[s];for(a&&Object.keys(a).forEach((e=>{const t=a[e];t<r&&(n=parseInt(e,10),r=t)}));s>=0;){const e=this.optimal.m[s][n];t.unshift(e),s=e.i-1,n-=1}return t}};var ne={mostGuessableMatchSequence(e,t,s=!1){se.password=e,se.excludeAdditive=s;const n=e.length;let r=se.fillArray(n,"array");t.forEach((e=>{r[e.j].push(e)})),r=r.map((e=>e.sort(((e,t)=>e.i-t.i)))),se.optimal={m:se.fillArray(n,"object"),pi:se.fillArray(n,"object"),g:se.fillArray(n,"object")};for(let l=0;l<n;l+=1)r[l].forEach((e=>{e.i>0?Object.keys(se.optimal.m[e.i-1]).forEach((t=>{se.update(e,parseInt(t,10)+1)})):se.update(e,1)})),se.bruteforceUpdate(l);const a=se.unwind(n),o=a.length,i=this.getGuesses(e,o);return{password:e,guesses:i,guessesLog10:Z.log10(i),sequence:a}},getGuesses(e,t){const s=e.length;let n=0;return n=0===e.length?1:se.optimal.g[s-1][t],n}};function re({isLazy:e=!1,isAnchored:t=!1,flags:s=""}){return new RegExp(`${t?"^":""}(.+${e?"?":""})\\1+${t?"$":""}`,s)}class ae{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const r=this.getGreedyMatch(e,n),a=this.getLazyMatch(e,n);if(null==r)break;const{match:o,baseToken:i}=this.setMatchToken(r,a);if(o){const e=o.index+o[0].length-1,r=this.getBaseGuesses(i,t);s.push(this.normalizeMatch(i,e,o,r)),n=e+1}}return s.some((e=>e instanceof Promise))?Promise.all(s):s}normalizeMatch(e,t,s,n){const r={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then((e=>({...r,baseGuesses:e}))):{...r,baseGuesses:n}}getGreedyMatch(e,t){const s=re({isLazy:!1,flags:"g"});return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=re({isLazy:!0,flags:"g"});return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=re({isLazy:!0,isAnchored:!0});let n,r="";if(t&&e[0].length>t[0].length){n=e;const t=s.exec(n[0]);t&&(r=t[1])}else n=t,n&&(r=n[1]);return{match:n,baseToken:r}}getBaseGuesses(e,t){const s=t.match(e);if(s instanceof Promise)return s.then((t=>ne.mostGuessableMatchSequence(e,t).guesses));return ne.mostGuessableMatchSequence(e,s).guesses}}class oe{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(1===e.length)return[];let s=0,n=null;const r=e.length;for(let a=1;a<r;a+=1){const r=e.charCodeAt(a)-e.charCodeAt(a-1);if(null==n&&(n=r),r!==n){const o=a-1;this.update({i:s,j:o,delta:n,password:e,result:t}),s=o,n=r}}return this.update({i:s,j:r-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:r}){if(t-e>1||1===Math.abs(s)){const a=Math.abs(s);if(a>0&&a<=this.MAX_DELTA){const a=n.slice(e,+t+1||9e9),{sequenceName:o,sequenceSpace:i}=this.getSequence(a);return r.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:o,sequenceSpace:i,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return I.test(e)?(t="lower",s=26):v.test(e)?(t="upper",s=26):D.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class ie{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(Y.graphs).forEach((s=>{const n=Y.graphs[s];b(t,this.helper(e,n,s))})),y(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const r=[];let a=0;const o=e.length;for(;a<o-1;){let i=a+1,l=null,c=0;for(n=this.checkIfShifted(s,e,a);;){const h=t[e.charAt(i-1)]||[];let u=!1,d=-1,g=-1;if(i<o){const t=e.charAt(i),s=h.length;for(let e=0;e<s;e+=1){const s=h[e];if(g+=1,s){const e=s.indexOf(t);if(-1!==e){u=!0,d=g,1===e&&(n+=1),l!==d&&(c+=1,l=d);break}}}}if(!u){i-a>2&&r.push({pattern:"spatial",i:a,j:i-1,token:e.slice(a,i),graph:s,turns:c,shiftedCount:n}),a=i;break}i+=1}}return r}}const le=new RegExp(`[${L.join("")}]`);class ce{static getMostUsedSeparatorChar(e){const t=[...e.split("").filter((e=>le.test(e))).reduce(((e,t)=>{const s=e.get(t);return s?e.set(t,s+1):e.set(t,1),e}),new Map).entries()].sort((([e,t],[s,n])=>n-t));if(!t.length)return;const s=t[0];return s[1]<2?void 0:s[0]}static getSeparatorRegex(e){return new RegExp(`([^${e}\n])(${e})(?!${e})`,"g")}match({password:e}){const t=[];if(0===e.length)return t;const s=ce.getMostUsedSeparatorChar(e);if(void 0===s)return t;const n=ce.getSeparatorRegex(s);for(const r of e.matchAll(n)){if(void 0===r.index)continue;const e=r.index+1;t.push({pattern:"separator",token:s,i:e,j:e})}return t}}class he{constructor(){this.matchers={date:z,dictionary:B,regex:H,repeat:ae,sequence:oe,spatial:ie,separator:ce}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(Y.matchers)].forEach((n=>{if(!this.matchers[n]&&!Y.matchers[n])return;const r=(new(this.matchers[n]?this.matchers[n]:Y.matchers[n].Matching)).match({password:e,omniMatch:this});r instanceof Promise?(r.then((e=>{b(t,e)})),s.push(r)):b(t,r)})),s.length>0?new Promise(((e,n)=>{Promise.all(s).then((()=>{e(y(t))})).catch((e=>{n(e)}))})):y(t)}}const ue=2678400,de=32140800,ge={second:1,minute:60,hour:3600,day:86400,month:ue,year:de,century:321408e4};class pe{translate(e,t){let s=e;void 0!==t&&1!==t&&(s+="s");const{timeEstimation:n}=Y.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/(100/3600),onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach((e=>{const n=t[e];s[e]=this.displayTime(n)})),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<10000000005?3:4}displayTime(e){let t,s="centuries";const n=Object.keys(ge),r=n.findIndex((t=>e<ge[t]));return r>-1&&(s=n[r-1],0!==r?t=Math.round(e/ge[s]):s="ltSecond"),this.translate(s,t)}}var fe=()=>null,me=()=>({warning:Y.translations.warnings.dates,suggestions:[Y.translations.suggestions.dates]});const be=(e,t)=>{let s=null;const n=e.dictionaryName,r="lastnames"===n||n.toLowerCase().includes("firstnames");return"passwords"===n?s=((e,t)=>{let s=null;return!t||e.l33t||e.reversed?e.guessesLog10<=4&&(s=Y.translations.warnings.similarToCommon):s=e.rank<=10?Y.translations.warnings.topTen:e.rank<=100?Y.translations.warnings.topHundred:Y.translations.warnings.common,s})(e,t):n.includes("wikipedia")?s=((e,t)=>{let s=null;return t&&(s=Y.translations.warnings.wordByItself),s})(0,t):r?s=((e,t)=>t?Y.translations.warnings.namesByThemselves:Y.translations.warnings.commonNames)(0,t):"userInputs"===n&&(s=Y.translations.warnings.userInputs),s};var ye=(e,t)=>{const s=be(e,t),n=[],r=e.token;return r.match(x)?n.push(Y.translations.suggestions.capitalization):r.match(S)&&r.toLowerCase()!==r&&n.push(Y.translations.suggestions.allUppercase),e.reversed&&e.token.length>=4&&n.push(Y.translations.suggestions.reverseWords),e.l33t&&n.push(Y.translations.suggestions.l33t),{warning:s,suggestions:n}},we=e=>"recentYear"===e.regexName?{warning:Y.translations.warnings.recentYears,suggestions:[Y.translations.suggestions.recentYears,Y.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},ke=e=>{let t=Y.translations.warnings.extendedRepeat;return 1===e.baseToken.length&&(t=Y.translations.warnings.simpleRepeat),{warning:t,suggestions:[Y.translations.suggestions.repeated]}},xe=()=>({warning:Y.translations.warnings.sequences,suggestions:[Y.translations.suggestions.sequences]}),Me=e=>{let t=Y.translations.warnings.keyPattern;return 1===e.turns&&(t=Y.translations.warnings.straightRow),{warning:t,suggestions:[Y.translations.suggestions.longerKeyboardPattern]}},ve=()=>null;const Se={warning:null,suggestions:[]};class Ie{constructor(){this.matchers={bruteforce:fe,date:me,dictionary:ye,regex:we,repeat:ke,sequence:xe,spatial:Me,separator:ve},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(Y.translations.suggestions.useWords,Y.translations.suggestions.noNeed)}getFeedback(e,t){if(0===t.length)return this.defaultFeedback;if(e>2)return Se;const s=Y.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let r=this.getMatchFeedback(n,1===t.length);return null!=r?r.suggestions.unshift(s):r={warning:null,suggestions:[s]},r}getLongestMatch(e){let t=e[0];return e.slice(1).forEach((e=>{e.token.length>t.token.length&&(t=e)})),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):Y.matchers[e.pattern]&&"feedback"in Y.matchers[e.pattern]?Y.matchers[e.pattern].feedback(e,t):Se}}const Te=()=>(new Date).getTime(),je=(e,t)=>{const s=Te(),n=((e,t)=>(t&&Y.extendUserInputsDictionary(t),(new he).match(e)))(e,t);if(n instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return((e,t,s)=>{const n=new Ie,r=new pe,a=ne.mostGuessableMatchSequence(t,e),o=Te()-s,i=r.estimateAttackTimes(a.guesses);return{calcTime:o,...a,...i,feedback:n.getFeedback(i.score,a.sequence)}})(n,e,s)},Ae=["data-score"],Ce=f(t({__name:"InputPassword",props:{strength:s.bool.def(!1),modelValue:s.string.def("")},emits:["update:modelValue"],setup(t,{emit:s}){const f=t,{getPrefixCls:b}=p(),y=b("input-password");n((()=>f.modelValue),(e=>{e!==h(x)&&(x.value=e)}));const{configGlobal:w}={configGlobal:e("configGlobal",{})},k=r("password"),x=r(f.modelValue);n((()=>x.value),(e=>{s("update:modelValue",e)}));const M=a((()=>{const e=h(x),t=je(h(x));return e?t.score:-1}));return(e,s)=>{var n;return o(),i("div",{class:u([h(y),`${h(y)}--${null==(n=h(w))?void 0:n.size}`])},[l(h(m),c(e.$attrs,{modelValue:x.value,"onUpdate:modelValue":s[0]||(s[0]=e=>x.value=e),showPassword:"",type:k.value}),null,16,["modelValue","type"]),t.strength?(o(),i("div",{key:0,class:u([`${h(y)}__bar`,"relative h-6px mt-10px mb-6px mr-auto ml-auto"])},[d("div",{class:u(`${h(y)}__bar--fill`),"data-score":M.value},null,10,Ae)],2)):g("",!0)],2)}}}),[["__scopeId","data-v-427211f7"]]);export{Ce as I};
