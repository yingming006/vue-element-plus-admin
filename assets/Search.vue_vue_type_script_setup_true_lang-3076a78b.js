import{F as e,i as o}from"./Form-45f4982e.js";import{d as s,N as a,o as t,c as n,i,w as l,a as r,P as d,F as c,A as h,t as u,k as m,r as p,x as f,S as g,D as w,e as b,W as v,a0 as x,bF as y,c$ as E,d0 as S,s as F}from"./index-bac2eb83.js";import{u as j}from"./useForm-c813207f.js";import{E as k}from"./el-button-212aa495.js";import{u as L}from"./useIcon-4f5f25cf.js";const R=s({__name:"ActionButton",props:{showSearch:a.bool.def(!0),showReset:a.bool.def(!0),showExpand:a.bool.def(!1),visible:a.bool.def(!0),searchLoading:a.bool.def(!1),resetLoading:a.bool.def(!1)},emits:["search","reset","expand"],setup(e,{emit:o}){const{t:s}=m(),a=()=>{o("search")},p=()=>{o("reset")},f=()=>{o("expand")};return(o,m)=>(t(),n(c,null,[e.showSearch?(t(),i(r(k),{key:0,type:"primary",loading:e.searchLoading,icon:r(L)({icon:"ep:search"}),onClick:a},{default:l((()=>[h(u(r(s)("common.query")),1)])),_:1},8,["loading","icon"])):d("",!0),e.showReset?(t(),i(r(k),{key:1,loading:e.resetLoading,icon:r(L)({icon:"ep:refresh-right"}),onClick:p},{default:l((()=>[h(u(r(s)("common.reset")),1)])),_:1},8,["loading","icon"])):d("",!0),e.showExpand?(t(),i(r(k),{key:2,icon:r(L)({icon:e.visible?"ep:arrow-down":"ep:arrow-up"}),text:"",onClick:f},{default:l((()=>[h(u(r(s)(e.visible?"common.shrink":"common.expand")),1)])),_:1},8,["icon"])):d("",!0)],64))}}),_=s({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:a.bool.def(!1),labelWidth:a.oneOfType([String,Number]).def("auto"),layout:a.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttonPosition:a.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:a.bool.def(!0),showReset:a.bool.def(!0),showExpand:a.bool.def(!1),expandField:a.string.def(""),inline:a.bool.def(!0),removeNoValueItem:a.bool.def(!0),model:{type:Object,default:()=>({})},searchLoading:a.bool.def(!1),resetLoading:a.bool.def(!1)},emits:["search","reset","register","validate"],setup(s,{expose:a,emit:i}){const l=s,h=p(!0),u=p(l.model),m=f((()=>{const e=r(A);let o=x(e.schema);if(e.showExpand&&e.expandField&&!r(h)){const s=y(o,(o=>o.field===e.expandField));o.map(((e,o)=>(e.hidden=o>=s,e)))}return"inline"===e.layout&&(o=o.concat([{field:"action",formItemProps:{labelWidth:"0px",slots:{default:()=>b("div",null,[b(R,{showSearch:e.showSearch,showReset:e.showReset,showExpand:e.showExpand,searchLoading:e.searchLoading,resetLoading:e.resetLoading,visible:h.value,onExpand:D,onReset:W,onSearch:N},null)])}}}])),o})),{formRegister:k,formMethods:L}=j(),{getElFormExpose:_,getFormData:O,getFormExpose:C}=L,P=p({}),V=p({}),A=f((()=>{const e={...l};return Object.assign(e,r(V)),e}));g((()=>r(m)),(async(e=[])=>{u.value=o(e,r(u))}),{immediate:!0,deep:!0});const I=async()=>{const e=await O();return r(A).removeNoValueItem?Object.keys(e).reduce(((o,s)=>{const a=e[s];return E(a)||(S(a)?Object.keys(a).length>0&&(o[s]=a):o[s]=a),o}),{}):e},N=async()=>{const e=await _();await(null==e?void 0:e.validate((async e=>{if(e){const e=await I();i("search",e)}})))},W=async()=>{const e=await _();null==e||e.resetFields();const o=await I();i("reset",o)},q=f((()=>({textAlign:r(A).buttonPosition}))),D=async()=>{h.value=!r(h)},B={getElFormExpose:_,setProps:(e={})=>{V.value=Object.assign(r(V),e),P.value=e},setSchema:e=>{const{schema:o}=r(A);for(const s of o)for(const o of e)s.field===o.field&&F(s,o.path,o.value)},setValues:async(e={})=>{u.value=Object.assign(l.model,r(u),e);const o=await C();null==o||o.setValues(e)},delSchema:e=>{const{schema:o}=r(A),s=y(o,(o=>o.field===e));s>-1&&o.splice(s,1)},addSchema:(e,o)=>{const{schema:s}=r(A);void 0===o?s.push(e):s.splice(o,0,e)}};w((()=>{i("register",B)})),a(B);const M=(e,o,s)=>{i("validate",e,o,s)};return(o,a)=>(t(),n(c,null,[b(r(e),{model:u.value,"is-custom":!1,"label-width":A.value.labelWidth,"hide-required-asterisk":"",inline:A.value.inline,"is-col":A.value.isCol,schema:m.value,onRegister:r(k),onValidate:M},null,8,["model","label-width","inline","is-col","schema","onRegister"]),"bottom"===s.layout?(t(),n("div",{key:0,style:v(q.value)},[b(R,{"show-reset":A.value.showReset,"show-search":A.value.showSearch,"show-expand":A.value.showExpand,"search-loading":A.value.searchLoading,"reset-loading":A.value.resetLoading,onExpand:D,onReset:W,onSearch:N},null,8,["show-reset","show-search","show-expand","search-loading","reset-loading"])],4)):d("",!0)],64))}});export{_};
