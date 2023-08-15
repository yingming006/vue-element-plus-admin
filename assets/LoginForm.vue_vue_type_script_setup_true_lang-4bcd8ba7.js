import{F as e}from"./Form-45f4982e.js";import{d as o,b as a,m as t,u as s,q as r,e as l,F as n,I as i,r as d,S as c,o as u,i as m,a as p,K as f,a2 as g,k as h}from"./index-bac2eb83.js";import{E as w}from"./el-button-212aa495.js";import{b as v}from"./tsxHelper-95b22a8b.js";import{E as b}from"./el-link-3964ff74.js";import{u as R}from"./useForm-c813207f.js";import{l as y,g as P,a as j}from"./index-9d06f6af.js";import{u as I}from"./useValidator-1defee34.js";function x(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)}const k="#999",E="var(--el-color-primary)",F=o({__name:"LoginForm",emits:["to-register"],setup(o,{emit:f}){const{required:F}=I(),z=a(),A=t(),{currentRoute:C,addRoute:q,push:D}=s(),{setStorage:S}=g(),{t:V}=h(),_={username:[F()],password:[F()]},L=r([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>l("h2",{class:"text-2xl font-bold text-center w-[100%]"},[V("login.login")])}}},{field:"username",label:V("login.username"),value:"admin",component:"Input",colProps:{span:24},componentProps:{placeholder:V("login.usernamePlaceholder")}},{field:"password",label:V("login.password"),value:"admin",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:V("login.passwordPlaceholder")}},{field:"tool",colProps:{span:24},formItemProps:{slots:{default:()=>{let e;return l(n,null,[l("div",{class:"flex justify-between items-center w-[100%]"},[l(v,{modelValue:O.value,"onUpdate:modelValue":e=>O.value=e,label:V("login.remember"),size:"small"},null),l(b,{type:"primary",underline:!1},x(e=V("login.forgetPassword"))?e:{default:()=>[e]})])])}}}},{field:"login",colProps:{span:24},formItemProps:{slots:{default:()=>{let e,o;return l(n,null,[l("div",{class:"w-[100%]"},[l(w,{loading:N.value,type:"primary",class:"w-[100%]",onClick:G},x(e=V("login.login"))?e:{default:()=>[e]})]),l("div",{class:"w-[100%] mt-15px"},[l(w,{class:"w-[100%]",onClick:Q},x(o=V("login.register"))?o:{default:()=>[o]})])])}}}},{field:"other",component:"Divider",label:V("login.otherLogin"),componentProps:{contentPosition:"center"}},{field:"otherIcon",colProps:{span:24},formItemProps:{slots:{default:()=>l(n,null,[l("div",{class:"flex justify-between w-[100%]"},[l(i,{icon:"ant-design:github-filled",size:30,class:"cursor-pointer ant-icon",color:k,hoverColor:E},null),l(i,{icon:"ant-design:wechat-filled",size:30,class:"cursor-pointer ant-icon",color:k,hoverColor:E},null),l(i,{icon:"ant-design:alipay-circle-filled",size:30,color:k,hoverColor:E,class:"cursor-pointer ant-icon"},null),l(i,{icon:"ant-design:weibo-circle-filled",size:30,color:k,hoverColor:E,class:"cursor-pointer ant-icon"},null)])])}}}]),O=d(!1),{formRegister:U,formMethods:H}=R(),{getFormData:K,getElFormExpose:M}=H,N=d(!1),B=d("");c((()=>C.value),(e=>{var o;B.value=null==(o=null==e?void 0:e.query)?void 0:o.redirect}),{immediate:!0});const G=async()=>{await A.generateRoutes("none").catch((()=>{})),A.getAddRouters.forEach((e=>{q(e)})),A.setIsAddRouters(!0),D({path:B.value||A.addRouters[0].path});const e=await M();await(null==e?void 0:e.validate((async e=>{if(e){N.value=!0;const e=await K();try{const o=await y(e);o&&(S(z.getUserInfo,o.data),z.getDynamicRouter?J():(await A.generateRoutes("none").catch((()=>{})),A.getAddRouters.forEach((e=>{q(e)})),A.setIsAddRouters(!0),D({path:B.value||A.addRouters[0].path})))}finally{N.value=!1}}})))},J=async()=>{const e=await K(),o={roleName:e.username},a="admin"===e.username?await P(o):await j(o);if(a){const o=a.data||[];S("roleRouters",o),"admin"===e.username?await A.generateRoutes("admin",o).catch((()=>{})):await A.generateRoutes("test",o).catch((()=>{})),A.getAddRouters.forEach((e=>{q(e)})),A.setIsAddRouters(!0),D({path:B.value||A.addRouters[0].path})}},Q=()=>{f("to-register")};return(o,a)=>(u(),m(p(e),{schema:L,rules:_,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:p(U)},null,8,["schema","onRegister"]))}});export{F as _};
