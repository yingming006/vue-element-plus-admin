import{ac as e,x as a,a_ as t,ca as o,r as l,b4 as n,S as s,bs as r,aW as i,ad as u,aN as p,af as d,bi as c,bg as f,ah as v,d as m,aC as y,au as x,aj as b,bp as g,cb as h,cc as w,at as S,M as k,ak as z,D as C,ba as I,Z as F,b3 as $,o as E,c as B,P,F as M,n as j,a as V,an as _,f as A,i as R,w as N,$ as H,H as O,O as T,e as W,aM as K,aG as L,aA as D,t as Z,W as G,ao as U,aB as Y,ay as q}from"./index-677a4f27.js";import{u as J,a as Q}from"./use-form-item-9ddcfff9.js";import{u as X,a as ee}from"./use-form-common-props-e5991c3d.js";import{i as ae}from"./el-popper-1541e61d.js";const te=()=>e&&/firefox/i.test(window.navigator.userAgent),oe="update:modelValue",le="change",ne="input",se=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),re=["class","style"],ie=/^on[A-Z]/,ue=(e={})=>{const{excludeListeners:l=!1,excludeKeys:n}=e,s=a((()=>((null==n?void 0:n.value)||[]).concat(re))),r=t();return a(r?()=>{var e;return o(Object.entries(null==(e=r.proxy)?void 0:e.$attrs).filter((([e])=>!(s.value.includes(e)||l&&ie.test(e)))))}:()=>({}))};let pe;const de=`\n  height:0 !important;\n  visibility:hidden !important;\n  ${te()?"":"overflow:hidden !important;"}\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`,ce=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function fe(e,a=1,t){var o;pe||(pe=document.createElement("textarea"),document.body.appendChild(pe));const{paddingSize:l,borderSize:n,boxSizing:s,contextStyle:r}=function(e){const a=window.getComputedStyle(e),t=a.getPropertyValue("box-sizing"),o=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),l=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:ce.map((e=>`${e}:${a.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:l,boxSizing:t}}(e);pe.setAttribute("style",`${r};${de}`),pe.value=e.value||e.placeholder||"";let u=pe.scrollHeight;const p={};"border-box"===s?u+=n:"content-box"===s&&(u-=l),pe.value="";const d=pe.scrollHeight-l;if(i(a)){let e=d*a;"border-box"===s&&(e=e+l+n),u=Math.max(e,u),p.minHeight=`${e}px`}if(i(t)){let e=d*t;"border-box"===s&&(e=e+l+n),u=Math.min(e,u)}return p.height=`${u}px`,null==(o=pe.parentNode)||o.removeChild(pe),pe=void 0,p}const ve=u({id:{type:String,default:void 0},size:p,disabled:Boolean,modelValue:{type:d([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:d([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:c},prefixIcon:{type:c},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:d([Object,Array,String]),default:()=>f({})}}),me={[oe]:e=>v(e),input:e=>v(e),change:e=>v(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},ye=["role"],xe=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],be=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],ge=m({name:"ElInput",inheritAttrs:!1});const he=q(U(m({...ge,props:ve,emits:me,setup(o,{expose:i,emit:u}){const p=o,d=y(),c=x(),f=a((()=>{const e={};return"combobox"===p.containerRole&&(e["aria-haspopup"]=d["aria-haspopup"],e["aria-owns"]=d["aria-owns"],e["aria-expanded"]=d["aria-expanded"]),e})),v=a((()=>["textarea"===p.type?pe.b():ie.b(),ie.m(ne.value),ie.is("disabled",re.value),ie.is("exceed",Ne.value),{[ie.b("group")]:c.prepend||c.append,[ie.bm("group","append")]:c.append,[ie.bm("group","prepend")]:c.prepend,[ie.m("prefix")]:c.prefix||p.prefixIcon,[ie.m("suffix")]:c.suffix||p.suffixIcon||p.clearable||p.showPassword,[ie.bm("suffix","password-clear")]:Ve.value&&_e.value},d.class])),m=a((()=>[ie.e("wrapper"),ie.is("focus",ze.value)])),U=ue({excludeKeys:a((()=>Object.keys(f.value)))}),{form:q,formItem:te}=J(),{inputId:le}=Q(p,{formItemContext:te}),ne=X(),re=ee(),ie=b("input"),pe=b("textarea"),de=n(),ce=n(),ve=l(!1),me=l(!1),ge=l(!1),he=l(),we=n(p.inputStyle),Se=a((()=>de.value||ce.value)),{wrapperRef:ke,isFocused:ze,handleFocus:Ce,handleBlur:Ie}=function(e,{afterFocus:a,afterBlur:o}={}){const i=t(),{emit:u}=i,p=n(),d=l(!1);return s(p,(e=>{e&&(e.setAttribute("role","button"),e.setAttribute("tabindex","-1"))})),r(p,"click",(()=>{var a;null==(a=e.value)||a.focus()})),{wrapperRef:p,isFocused:d,handleFocus:e=>{d.value||(d.value=!0,u("focus",e),null==a||a())},handleBlur:e=>{var a;e.relatedTarget&&(null==(a=p.value)?void 0:a.contains(e.relatedTarget))||(d.value=!1,u("blur",e),null==o||o())}}}(Se,{afterBlur(){var e;p.validateEvent&&(null==(e=null==te?void 0:te.validate)||e.call(te,"blur").catch((e=>z())))}}),Fe=a((()=>{var e;return null!=(e=null==q?void 0:q.statusIcon)&&e})),$e=a((()=>(null==te?void 0:te.validateState)||"")),Ee=a((()=>$e.value&&g[$e.value])),Be=a((()=>ge.value?h:w)),Pe=a((()=>[d.style,p.inputStyle])),Me=a((()=>[p.inputStyle,we.value,{resize:p.resize}])),je=a((()=>ae(p.modelValue)?"":String(p.modelValue))),Ve=a((()=>p.clearable&&!re.value&&!p.readonly&&!!je.value&&(ze.value||ve.value))),_e=a((()=>p.showPassword&&!re.value&&!p.readonly&&!!je.value&&(!!je.value||ze.value))),Ae=a((()=>p.showWordLimit&&!!U.value.maxlength&&("text"===p.type||"textarea"===p.type)&&!re.value&&!p.readonly&&!p.showPassword)),Re=a((()=>je.value.length)),Ne=a((()=>!!Ae.value&&Re.value>Number(U.value.maxlength))),He=a((()=>!!c.suffix||!!p.suffixIcon||Ve.value||p.showPassword||Ae.value||!!$e.value&&Fe.value)),[Oe,Te]=function(e){const a=l();return[function(){if(null==e.value)return;const{selectionStart:t,selectionEnd:o,value:l}=e.value;if(null==t||null==o)return;const n=l.slice(0,Math.max(0,t)),s=l.slice(Math.max(0,o));a.value={selectionStart:t,selectionEnd:o,value:l,beforeTxt:n,afterTxt:s}},function(){if(null==e.value||null==a.value)return;const{value:t}=e.value,{beforeTxt:o,afterTxt:l,selectionStart:n}=a.value;if(null==o||null==l||null==n)return;let s=t.length;if(t.endsWith(l))s=t.length-l.length;else if(t.startsWith(o))s=o.length;else{const e=o[n-1],a=t.indexOf(e,n-1);-1!==a&&(s=a+1)}e.value.setSelectionRange(s,s)}]}(de);S(ce,(e=>{if(Ke(),!Ae.value||"both"!==p.resize)return;const a=e[0],{width:t}=a.contentRect;he.value={right:`calc(100% - ${t+15+6}px)`}}));const We=()=>{const{type:a,autosize:t}=p;if(e&&"textarea"===a&&ce.value)if(t){const e=Y(t)?t.minRows:void 0,a=Y(t)?t.maxRows:void 0,o=fe(ce.value,e,a);we.value={overflowY:"hidden",...o},k((()=>{ce.value.offsetHeight,we.value=o}))}else we.value={minHeight:fe(ce.value).minHeight}},Ke=(e=>{let a=!1;return()=>{var t;if(a||!p.autosize)return;null===(null==(t=ce.value)?void 0:t.offsetParent)||(e(),a=!0)}})(We),Le=()=>{const e=Se.value,a=p.formatter?p.formatter(je.value):je.value;e&&e.value!==a&&(e.value=a)},De=async e=>{Oe();let{value:a}=e.target;p.formatter&&(a=p.parser?p.parser(a):a),me.value||(a!==je.value?(u(oe,a),u("input",a),await k(),Le(),Te()):Le())},Ze=e=>{u("change",e.target.value)},Ge=e=>{u("compositionstart",e),me.value=!0},Ue=e=>{var a;u("compositionupdate",e);const t=null==(a=e.target)?void 0:a.value,o=t[t.length-1]||"";me.value=!se(o)},Ye=e=>{u("compositionend",e),me.value&&(me.value=!1,De(e))},qe=()=>{ge.value=!ge.value,Je()},Je=async()=>{var e;await k(),null==(e=Se.value)||e.focus()},Qe=e=>{ve.value=!1,u("mouseleave",e)},Xe=e=>{ve.value=!0,u("mouseenter",e)},ea=e=>{u("keydown",e)},aa=()=>{u(oe,""),u("change",""),u("clear"),u("input","")};return s((()=>p.modelValue),(()=>{var e;k((()=>We())),p.validateEvent&&(null==(e=null==te?void 0:te.validate)||e.call(te,"change").catch((e=>z())))})),s(je,(()=>Le())),s((()=>p.type),(async()=>{await k(),Le(),We()})),C((()=>{!p.formatter&&p.parser,Le(),k(We)})),i({input:de,textarea:ce,ref:Se,textareaStyle:Me,autosize:I(p,"autosize"),focus:Je,blur:()=>{var e;return null==(e=Se.value)?void 0:e.blur()},select:()=>{var e;null==(e=Se.value)||e.select()},clear:aa,resizeTextarea:We}),(e,a)=>F((E(),B("div",T(V(f),{class:V(v),style:V(Pe),role:e.containerRole,onMouseenter:Xe,onMouseleave:Qe}),[P(" input "),"textarea"!==e.type?(E(),B(M,{key:0},[P(" prepend slot "),e.$slots.prepend?(E(),B("div",{key:0,class:j(V(ie).be("group","prepend"))},[_(e.$slots,"prepend")],2)):P("v-if",!0),A("div",{ref_key:"wrapperRef",ref:ke,class:j(V(m))},[P(" prefix slot "),e.$slots.prefix||e.prefixIcon?(E(),B("span",{key:0,class:j(V(ie).e("prefix"))},[A("span",{class:j(V(ie).e("prefix-inner"))},[_(e.$slots,"prefix"),e.prefixIcon?(E(),R(V(O),{key:0,class:j(V(ie).e("icon"))},{default:N((()=>[(E(),R(H(e.prefixIcon)))])),_:1},8,["class"])):P("v-if",!0)],2)],2)):P("v-if",!0),A("input",T({id:V(le),ref_key:"input",ref:de,class:V(ie).e("inner")},V(U),{type:e.showPassword?ge.value?"text":"password":e.type,disabled:V(re),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:p.form,onCompositionstart:Ge,onCompositionupdate:Ue,onCompositionend:Ye,onInput:De,onFocus:a[0]||(a[0]=(...e)=>V(Ce)&&V(Ce)(...e)),onBlur:a[1]||(a[1]=(...e)=>V(Ie)&&V(Ie)(...e)),onChange:Ze,onKeydown:ea}),null,16,xe),P(" suffix slot "),V(He)?(E(),B("span",{key:1,class:j(V(ie).e("suffix"))},[A("span",{class:j(V(ie).e("suffix-inner"))},[V(Ve)&&V(_e)&&V(Ae)?P("v-if",!0):(E(),B(M,{key:0},[_(e.$slots,"suffix"),e.suffixIcon?(E(),R(V(O),{key:0,class:j(V(ie).e("icon"))},{default:N((()=>[(E(),R(H(e.suffixIcon)))])),_:1},8,["class"])):P("v-if",!0)],64)),V(Ve)?(E(),R(V(O),{key:1,class:j([V(ie).e("icon"),V(ie).e("clear")]),onMousedown:L(V(D),["prevent"]),onClick:aa},{default:N((()=>[W(V(K))])),_:1},8,["class","onMousedown"])):P("v-if",!0),V(_e)?(E(),R(V(O),{key:2,class:j([V(ie).e("icon"),V(ie).e("password")]),onClick:qe},{default:N((()=>[(E(),R(H(V(Be))))])),_:1},8,["class"])):P("v-if",!0),V(Ae)?(E(),B("span",{key:3,class:j(V(ie).e("count"))},[A("span",{class:j(V(ie).e("count-inner"))},Z(V(Re))+" / "+Z(V(U).maxlength),3)],2)):P("v-if",!0),V($e)&&V(Ee)&&V(Fe)?(E(),R(V(O),{key:4,class:j([V(ie).e("icon"),V(ie).e("validateIcon"),V(ie).is("loading","validating"===V($e))])},{default:N((()=>[(E(),R(H(V(Ee))))])),_:1},8,["class"])):P("v-if",!0)],2)],2)):P("v-if",!0)],2),P(" append slot "),e.$slots.append?(E(),B("div",{key:1,class:j(V(ie).be("group","append"))},[_(e.$slots,"append")],2)):P("v-if",!0)],64)):(E(),B(M,{key:1},[P(" textarea "),A("textarea",T({id:V(le),ref_key:"textarea",ref:ce,class:V(pe).e("inner")},V(U),{tabindex:e.tabindex,disabled:V(re),readonly:e.readonly,autocomplete:e.autocomplete,style:V(Me),"aria-label":e.label,placeholder:e.placeholder,form:p.form,onCompositionstart:Ge,onCompositionupdate:Ue,onCompositionend:Ye,onInput:De,onFocus:a[2]||(a[2]=(...e)=>V(Ce)&&V(Ce)(...e)),onBlur:a[3]||(a[3]=(...e)=>V(Ie)&&V(Ie)(...e)),onChange:Ze,onKeydown:ea}),null,16,be),V(Ae)?(E(),B("span",{key:0,style:G(he.value),class:j(V(ie).e("count"))},Z(V(Re))+" / "+Z(V(U).maxlength),7)):P("v-if",!0)],64))],16,ye)),[[$,"hidden"!==e.type]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{le as C,he as E,ne as I,oe as U,te as a,se as i,ue as u};
