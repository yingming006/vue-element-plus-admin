import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-18b1f8d8.js";import{d as t,a,q as o,e as l,o as i,i as r,w as s,L as p,K as n,k as m,_ as d}from"./index-bac2eb83.js";import{_ as u}from"./Table.vue_vue_type_script_lang-a40d35f4.js";import{a as c}from"./index-b84c43cd.js";import{E as b}from"./el-tag-de2ecaab.js";import{E as g}from"./el-button-212aa495.js";import{u as f}from"./useTable-778c2bf3.js";import"./el-card-fe26acfa.js";import"./el-popper-12f138e6.js";import"./constants-e7e982b2.js";import"./tsxHelper-95b22a8b.js";import"./el-input-6e48b06a.js";import"./use-form-item-feca586f.js";import"./use-form-common-props-6ba8704f.js";import"./debounce-71d3c3a1.js";import"./el-image-viewer-9c1de038.js";import"./el-dropdown-item-78e01f3d.js";import"./refs-8b80d585.js";import"./index-924da257.js";import"./el-message-box-09c07abf.js";import"./el-overlay-d879989e.js";import"./vnode-fc834d5c.js";import"./aria-ecee1d93.js";const j=d(t({__name:"TreeTable",setup(t){const{tableRegister:d,tableState:j}=f({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=j,o=await c({pageIndex:a(e),pageSize:a(t)});return{list:o.data.list,total:o.data.total}}}),{loading:_,dataList:y,total:D,currentPage:v,pageSize:x}=j,{t:w}=m(),S=o([{field:"selection",type:"selection"},{field:"index",label:w("tableDemo.index"),type:"index"},{field:"content",label:w("tableDemo.header"),children:[{field:"title",label:w("tableDemo.title")},{field:"author",label:w("tableDemo.author")},{field:"display_time",label:w("tableDemo.displayTime")},{field:"importance",label:w("tableDemo.importance"),formatter:(e,t,a)=>l(b,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[w(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:w("tableDemo.pageviews")}]},{field:"action",label:w("tableDemo.action"),slots:{default:e=>{let t;return l(g,{type:"primary",onClick:()=>z(e)},"function"==typeof(a=t=w("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!n(a)?t:{default:()=>[t]});var a}}}]),z=e=>{};return(t,o)=>(i(),r(a(e),{title:`${a(w)("router.treeTable")} ${a(w)("tableDemo.example")}`},{default:s((()=>[l(a(u),{pageSize:a(x),"onUpdate:pageSize":o[0]||(o[0]=e=>p(x)?x.value=e:null),currentPage:a(v),"onUpdate:currentPage":o[1]||(o[1]=e=>p(v)?v.value=e:null),columns:S,data:a(y),"row-key":"id",loading:a(_),sortable:"",pagination:{total:a(D)},onRegister:a(d)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1},8,["title"]))}}),[["__scopeId","data-v-052ba654"]]);export{j as default};
