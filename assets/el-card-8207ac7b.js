import{ad as a,af as s,d as e,aj as t,o as r,c as d,n as o,a as l,an as n,A as c,t as y,P as p,f as h,W as i,ao as u,ay as f}from"./index-677a4f27.js";const v=a({header:{type:String,default:""},bodyStyle:{type:s([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),m=e({name:"ElCard"});const w=f(u(e({...m,props:v,setup(a){const s=t("card");return(a,e)=>(r(),d("div",{class:o([l(s).b(),l(s).is(`${a.shadow}-shadow`)])},[a.$slots.header||a.header?(r(),d("div",{key:0,class:o(l(s).e("header"))},[n(a.$slots,"header",{},(()=>[c(y(a.header),1)]))],2)):p("v-if",!0),h("div",{class:o(l(s).e("body")),style:i(a.bodyStyle)},[n(a.$slots,"default")],6)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]));export{w as E};
