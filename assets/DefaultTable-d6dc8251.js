import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-b307fd3d.js";import{d as t,J as a,e as o,r as l,o as s,i,w as r,a as m,K as p,k as n}from"./index-677a4f27.js";import{_ as d}from"./Table.vue_vue_type_script_lang-3d733ff4.js";import{g as b}from"./index-365c7f07.js";import{E as c}from"./el-tag-d32ce255.js";import{E as u}from"./el-button-9714aca1.js";import"./el-card-8207ac7b.js";import"./el-popper-1541e61d.js";import"./constants-906dcaf9.js";import"./tsxHelper-4886f0a6.js";import"./el-input-240d8b27.js";import"./use-form-item-9ddcfff9.js";import"./use-form-common-props-e5991c3d.js";import"./debounce-80c8bd7b.js";import"./el-image-viewer-df5c6948.js";import"./el-dropdown-item-64252988.js";import"./refs-5e6607af.js";import"./index-dae5073b.js";const f=t({__name:"DefaultTable",setup(t){const{t:f}=n(),j=[{field:"title",label:f("tableDemo.title")},{field:"author",label:f("tableDemo.author")},{field:"display_time",label:f("tableDemo.displayTime"),sortable:!0},{field:"importance",label:f("tableDemo.importance"),formatter:(e,t,o)=>a(c,{type:1===o?"success":2===o?"warning":"danger"},(()=>f(1===o?"tableDemo.important":2===o?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:f("tableDemo.pageviews")},{field:"action",label:f("tableDemo.action"),slots:{default:e=>{let t;return o(u,{type:"primary",onClick:()=>D(e)},"function"==typeof(a=t=f("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!p(a)?t:{default:()=>[t]});var a}}}],g=l(!0);let _=l([]);(async e=>{const t=await b(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{g.value=!1}));t&&(_.value=t.data.list)})();const D=e=>{};return(t,a)=>(s(),i(m(e),{title:m(f)("tableDemo.table"),message:m(f)("tableDemo.tableDes")},{default:r((()=>[o(m(d),{columns:j,data:m(_),loading:g.value,defaultSort:{prop:"display_time",order:"descending"}},null,8,["data","loading"])])),_:1},8,["title","message"]))}});export{f as default};
