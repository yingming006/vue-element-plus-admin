import{_ as e}from"./Highlight.vue_vue_type_script_lang-02e9210d.js";import{d as s,N as r,z as t,o,c as l,n as a,a as i,e as c,f as p,t as n,P as d,F as m,B as f,j as x,w as _,A as g}from"./index-bac2eb83.js";const h=s({__name:"Infotip",props:{title:r.string.def(""),schema:{type:Array,required:!0,default:()=>[]},showIndex:r.bool.def(!0),highlightColor:r.string.def("var(--el-color-primary)")},emits:["click"],setup(s,{emit:r}){const{getPrefixCls:h}=x(),y=h("infotip"),b=e=>{r("click",e)};return(r,x)=>{const h=t("Icon");return o(),l("div",{class:a([i(y),"p-20px mb-20px border-1px border-solid border-[var(--el-color-primary)] bg-[var(--el-color-primary-light-9)]"])},[s.title?(o(),l("div",{key:0,class:a([`${i(y)}__header`,"flex items-center"])},[c(h,{icon:"bi:exclamation-circle-fill",size:22,color:"var(--el-color-primary)"}),p("span",{class:a([`${i(y)}__title`,"pl-5px text-16px font-bold"])},n(s.title),3)],2)):d("",!0),p("div",{class:a(`${i(y)}__content`)},[(o(!0),l(m,null,f(s.schema,((r,t)=>(o(),l("p",{key:t,class:"text-14px mt-15px"},[c(i(e),{keys:"string"==typeof r?[]:r.keys,color:s.highlightColor,onClick:b},{default:_((()=>[g(n(s.showIndex?`${t+1}、`:"")+n("string"==typeof r?r:r.label),1)])),_:2},1032,["keys","color"])])))),128))],2)],2)}}});export{h as _};
