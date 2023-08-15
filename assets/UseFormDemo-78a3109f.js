import{F as e}from"./Form-4a29002e.js";import{_ as o}from"./ContentWrap.vue_vue_type_script_setup_true_lang-b307fd3d.js";import{d as l,q as t,r as a,o as i,c as m,e as s,w as r,a as n,A as f,t as p,F as d,k as u,_ as c}from"./index-677a4f27.js";import{u as b}from"./useForm-5aa660d0.js";import{E as _}from"./el-button-9714aca1.js";import{u as D}from"./useValidator-5ae30c32.js";import{g as v}from"./index-9b28d987.js";import"./el-col-646afbe4.js";import"./el-input-240d8b27.js";import"./use-form-item-9ddcfff9.js";import"./constants-906dcaf9.js";import"./use-form-common-props-e5991c3d.js";import"./el-popper-1541e61d.js";import"./el-tag-d32ce255.js";import"./tsxHelper-4886f0a6.js";import"./debounce-80c8bd7b.js";import"./el-input-number-ebecb242.js";import"./el-divider-c00b4b16.js";import"./InputPassword-55f120d3.js";import"./style.css_vue_type_style_index_0_src_true_lang-6dce68cd.js";import"./aria-ecee1d93.js";import"./index-0d1a2401.js";import"./el-card-8207ac7b.js";import"./index-dae5073b.js";const j=c(l({__name:"UseFormDemo",setup(l){const{required:c}=D(),{t:j}=u(),k=t([{field:"field1",label:j("formDemo.input"),component:"Input",formItemProps:{rules:[c()]}},{field:"field2",label:j("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]},formItemProps:{rules:[c()]}},{field:"field3",label:j("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:j("formDemo.checkbox"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:j("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:j("formDemo.timeSelect")}]),{formRegister:C,formMethods:h}=b(),{setProps:$,delSchema:g,addSchema:x,setValues:y,setSchema:P,getComponentExpose:F,getFormItemExpose:w,getElFormExpose:I}=h,S=e=>{$({labelWidth:e})},V=e=>{$({size:e})},E=e=>{$({disabled:e})},R=e=>{e?g("field2"):e||"field2"===k[1].field||x({field:"field2",label:j("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},W=async e=>{const o=await I();e?null==o||o.resetFields():y({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},z=a(7),U=()=>{P([{field:"field2",path:"label",value:`${j("formDemo.select")} ${z.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),z.value++},q=()=>{n(z)%2==0?x({field:`field${n(z)}`,label:`${j("formDemo.input")}${n(z)}`,component:"Input"}):x({field:`field${n(z)}`,label:`${j("formDemo.input")}${n(z)}`,component:"Input"},n(z)),z.value++},A=async()=>{const e=await I();null==e||e.validate((e=>{}))},G=async()=>{const e=await I();null==e||e.resetFields()},H=async()=>{const e=await v();e&&P([{field:"field2",path:"componentProps.options",value:e.data}])},M=async()=>{const e=await F("field1");null==e||e.focus()},O=async()=>{const e=await w("field1"),o=await F("field1");null==o||o.focus(),null==e||e.validate("focus",(e=>{}))},T=(e,o,l)=>{};return(l,t)=>(i(),m(d,null,[s(n(o),{title:`UseForm ${n(j)("formDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:r((()=>[s(n(_),{onClick:t[0]||(t[0]=e=>S(150))},{default:r((()=>[f(p(n(j)("formDemo.change"))+" labelWidth",1)])),_:1}),s(n(_),{onClick:t[1]||(t[1]=e=>S("auto"))},{default:r((()=>[f(p(n(j)("formDemo.restore"))+" labelWidth",1)])),_:1}),s(n(_),{onClick:t[2]||(t[2]=e=>V("large"))},{default:r((()=>[f(p(n(j)("formDemo.change"))+" size",1)])),_:1}),s(n(_),{onClick:t[3]||(t[3]=e=>V("default"))},{default:r((()=>[f(p(n(j)("formDemo.restore"))+" size",1)])),_:1}),s(n(_),{onClick:t[4]||(t[4]=e=>E(!0))},{default:r((()=>[f(p(n(j)("formDemo.disabled")),1)])),_:1}),s(n(_),{onClick:t[5]||(t[5]=e=>E(!1))},{default:r((()=>[f(p(n(j)("formDemo.disablement")),1)])),_:1}),s(n(_),{onClick:t[6]||(t[6]=e=>R(!0))},{default:r((()=>[f(p(n(j)("formDemo.delete"))+" "+p(n(j)("formDemo.select")),1)])),_:1}),s(n(_),{onClick:t[7]||(t[7]=e=>R(!1))},{default:r((()=>[f(p(n(j)("formDemo.add"))+" "+p(n(j)("formDemo.select")),1)])),_:1}),s(n(_),{onClick:t[8]||(t[8]=e=>W(!1))},{default:r((()=>[f(p(n(j)("formDemo.setValue")),1)])),_:1}),s(n(_),{onClick:t[9]||(t[9]=e=>W(!0))},{default:r((()=>[f(p(n(j)("formDemo.resetValue")),1)])),_:1}),s(n(_),{onClick:U},{default:r((()=>[f(p(n(j)("formDemo.set"))+" "+p(n(j)("formDemo.select"))+" label ",1)])),_:1}),s(n(_),{onClick:q},{default:r((()=>[f(p(n(j)("formDemo.add"))+" "+p(n(j)("formDemo.subitem")),1)])),_:1}),s(n(_),{onClick:A},{default:r((()=>[f(p(n(j)("formDemo.formValidation")),1)])),_:1}),s(n(_),{onClick:G},{default:r((()=>[f(p(n(j)("formDemo.verifyReset")),1)])),_:1}),s(n(_),{onClick:H},{default:r((()=>[f(p(`${n(j)("formDemo.select")} ${n(j)("searchDemo.dynamicOptions")}`),1)])),_:1}),s(n(_),{onClick:M},{default:r((()=>[f(p(`${n(j)("formDemo.input")} ${n(j)("formDemo.focus")}`),1)])),_:1}),s(n(_),{onClick:O},{default:r((()=>[f(p(`${n(j)("formDemo.input")} ${n(j)("formDemo.formValidation")}`),1)])),_:1})])),_:1},8,["title"]),s(n(o),{title:`UseForm ${n(j)("formDemo.example")}`},{default:r((()=>[s(n(e),{schema:k,onRegister:n(C),onValidate:T},null,8,["schema","onRegister"])])),_:1},8,["title"])],64))}}),[["__scopeId","data-v-9289bba8"]]);export{j as default};
