import{k as e}from"./index-677a4f27.js";const{t:r}=e(),n=()=>({required:e=>({required:!0,message:e||r("common.required")}),lengthRange:(e,r,n)=>{const{min:o,max:t,message:s}=n;e.length<o||e.length>t?r(new Error(s)):r()},notSpace:(e,r,n)=>{-1!==e.indexOf(" ")?r(new Error(n)):r()},notSpecialCharacters:(e,r,n)=>{/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/gi.test(e)?r(new Error(n)):r()},isEqual:(e,r,n,o)=>{e===r?n():n(new Error(o))}});export{n as u};
