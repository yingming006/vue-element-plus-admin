import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-b307fd3d.js";import{d as t,e as a,r as i,o,i as l,w as r,a as s,k as m}from"./index-677a4f27.js";import{_ as p}from"./Table.vue_vue_type_script_lang-3d733ff4.js";import{g as n}from"./index-365c7f07.js";import{E as u}from"./el-tag-d32ce255.js";import"./el-card-8207ac7b.js";import"./el-popper-1541e61d.js";import"./constants-906dcaf9.js";import"./tsxHelper-4886f0a6.js";import"./el-input-240d8b27.js";import"./use-form-item-9ddcfff9.js";import"./use-form-common-props-e5991c3d.js";import"./el-button-9714aca1.js";import"./debounce-80c8bd7b.js";import"./el-image-viewer-df5c6948.js";import"./el-dropdown-item-64252988.js";import"./refs-5e6607af.js";import"./index-dae5073b.js";const d=t({__name:"TableImagePreview",setup(t){const{t:d}=m(),b=[{field:"title",label:d("tableDemo.title")},{field:"image_uri",label:d("tableDemo.preview")},{field:"author",label:d("tableDemo.author")},{field:"display_time",label:d("tableDemo.displayTime")},{field:"importance",label:d("tableDemo.importance"),formatter:(e,t,i)=>a(u,{type:1===i?"success":2===i?"warning":"danger"},{default:()=>[d(1===i?"tableDemo.important":2===i?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:d("tableDemo.pageviews")}],c=i(!0);let f=i([]);return(async e=>{const t=await n(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{c.value=!1}));t&&(f.value=t.data.list)})(),(t,i)=>(o(),l(s(e),{title:s(d)("router.PicturePreview")},{default:r((()=>[a(s(p),{columns:b,data:s(f),loading:c.value,preview:["image_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{d as default};
