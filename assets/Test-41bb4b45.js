import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-18b1f8d8.js";import{k as t,d4 as a,d as s,r,z as d,Y as l,o as u,i as p,w as i,e as n,A as o,a as m,Z as f,P as _}from"./index-bac2eb83.js";import{E as y}from"./el-button-212aa495.js";import{E as c}from"./el-divider-c4af4ee8.js";import{E as j,a as v}from"./el-col-5ab02a02.js";import"./el-card-fe26acfa.js";import"./el-popper-12f138e6.js";import"./constants-e7e982b2.js";import"./use-form-item-feca586f.js";import"./use-form-common-props-6ba8704f.js";const g=e=>{const{t:s}=t(),r=a.currentRoute.value.meta.permission||[];if(!e)throw new Error(s("permission.hasPermission"));return!!r.includes(e)},w=s({__name:"Test",setup(t){const a=r("add");return setTimeout((()=>{a.value="view"}),3e3),(t,s)=>{const r=d("Permission"),w=l("hasPermi");return u(),p(m(e),null,{default:i((()=>[n(m(c),null,{default:i((()=>[o("组件方式判断（已经全局注册，支持动态修改）")])),_:1}),n(m(v),{gutter:20},{default:i((()=>[n(m(j),{span:8},{default:i((()=>[o(" 新增权限： "),n(r,{permission:"add"},{default:i((()=>[n(m(y),{type:"primary"},{default:i((()=>[o(" Add ")])),_:1})])),_:1})])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 删除权限： "),n(r,{permission:"delete"},{default:i((()=>[n(m(y),{type:"danger"},{default:i((()=>[o(" Delete ")])),_:1})])),_:1})])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 3秒后切换查看权限： "),n(r,{permission:a.value},{default:i((()=>[n(m(y),{type:"primary"},{default:i((()=>[o(" View ")])),_:1})])),_:1},8,["permission"])])),_:1})])),_:1}),n(m(c),null,{default:i((()=>[o("指令方式判断（已经全局注册，不支持动态修改）")])),_:1}),n(m(v),{gutter:20},{default:i((()=>[n(m(j),{span:8},{default:i((()=>[o(" 新增权限： "),f((u(),p(m(y),{type:"primary"},{default:i((()=>[o(" Add ")])),_:1})),[[w,"add"]])])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 删除权限： "),f((u(),p(m(y),{type:"danger"},{default:i((()=>[o(" Delete ")])),_:1})),[[w,"delete"]])])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 3秒后切换查看权限（无法动态修改）： "),f((u(),p(m(y),{type:"primary"},{default:i((()=>[o(" View ")])),_:1})),[[w,a.value]])])),_:1})])),_:1}),n(m(c),null,{default:i((()=>[o("函数方式判断")])),_:1}),n(m(v),{gutter:20},{default:i((()=>[n(m(j),{span:8},{default:i((()=>[o(" 新增权限： "),m(g)("add")?(u(),p(m(y),{key:0,type:"primary"},{default:i((()=>[o(" Add ")])),_:1})):_("",!0)])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 删除权限： "),m(g)("delete")?(u(),p(m(y),{key:0,type:"danger"},{default:i((()=>[o(" Delete ")])),_:1})):_("",!0)])),_:1}),n(m(j),{span:8},{default:i((()=>[o(" 3秒后切换查看权限： "),m(g)(m(a.value))?(u(),p(m(y),{key:0,type:"primary"},{default:i((()=>[o(" View ")])),_:1})):_("",!0)])),_:1})])),_:1})])),_:1})}}});export{w as default};
