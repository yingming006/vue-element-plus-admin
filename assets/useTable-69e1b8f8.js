import{r as t,S as a,D as e,a as s,G as n,k as l,M as o}from"./index-677a4f27.js";import{E as c}from"./el-message-box-1f3cc988.js";import"./el-button-9714aca1.js";import"./el-input-240d8b27.js";import"./el-overlay-ed475e57.js";const{t:i}=l(),u=l=>{const{immediate:u=!0}=l,m=t(!1),r=t(1),d=t(10),g=t(0),p=t([]);a((()=>r.value),(()=>{w.getList()})),a((()=>d.value),(()=>{1===s(r)||(r.value=1),w.getList()})),e((()=>{u&&w.getList()}));const y=t(),v=t(),f=async()=>{await o();const t=s(y);return t},w={getList:async()=>{m.value=!0;try{const t=await(null==l?void 0:l.fetchDataApi());t&&(p.value=t.list,g.value=t.total||0)}catch(t){}finally{m.value=!1}},setProps:async(t={})=>{const a=await f();null==a||a.setProps(t)},setColumn:async t=>{const a=await f();null==a||a.setColumn(t)},addColumn:async(t,a)=>{const e=await f();null==e||e.addColumn(t,a)},delColumn:async t=>{const a=await f();null==a||a.delColumn(t)},getElTableExpose:async()=>(await f(),s(v)),refresh:()=>{w.getList()},delList:async t=>{const{fetchDelApi:a}=l;a&&c.confirm(i("common.delMessage"),i("common.delWarning"),{confirmButtonText:i("common.delOk"),cancelButtonText:i("common.delCancel"),type:"warning"}).then((async()=>{if(await a()){n.success(i("common.delSuccess"));const a=(s(g)%s(d)===t||1===s(d))&&s(r)>1?s(r)-1:s(r);r.value=a,w.getList()}}))}};return{tableRegister:(t,a)=>{y.value=t,v.value=s(a)},tableMethods:w,tableState:{currentPage:r,pageSize:d,total:g,dataList:p,loading:m}}};export{u};
