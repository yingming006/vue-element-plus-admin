import{t as e,f as l,e as n}from"./tree-b59d36bb.js";import{q as o}from"./index-677a4f27.js";const t=e=>{const l=o({searchSchema:[],tableColumns:[],formSchema:[],detailSchema:[]}),n=d(e);l.searchSchema=n||[];const t=i(e);l.tableColumns=t||[];const c=a(e);l.formSchema=c;const s=r(e);return l.detailSchema=s,{allSchemas:l}},d=e=>{var l,n;const o=[],t=e.length;for(let d=0;d<t;d++){const t=e[d];if(!(null==(l=null==t?void 0:t.search)?void 0:l.hidden)){const e={component:(null==(n=null==t?void 0:t.search)?void 0:n.component)||"Input",...t.search,field:t.field,label:t.label};delete e.hidden,o.push(e)}}return o},i=n=>{const o=e(n,{conversion:e=>{var l;if(!(null==(l=null==e?void 0:e.table)?void 0:l.hidden))return{...e.table,...e}}});return l(o,(e=>(void 0===e.children&&delete e.children,!!e.field)))},a=e=>{var l,n;const o=[],t=e.length;for(let d=0;d<t;d++){const t=e[d];if(!(null==(l=null==t?void 0:t.form)?void 0:l.hidden)){const e={component:(null==(n=null==t?void 0:t.form)?void 0:n.component)||"Input",...t.form,field:t.field,label:t.label};delete e.hidden,o.push(e)}}return o},r=e=>{const l=[];return n(e,(e=>{var n,o;if(!(null==(n=null==e?void 0:e.detail)?void 0:n.hidden)){const n={...e.detail,field:e.field,label:(null==(o=e.detail)?void 0:o.label)||e.label};delete n.hidden,l.push(n)}})),l};export{t as u};
