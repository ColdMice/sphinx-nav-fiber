import{s as h,c as y,u as z,r as x,j as e,F as t,T as f,b as N,w as R,n as U,ae as V,af as g,d as G,a2 as q}from"./index-a86e8971.js";import{ao as J,B as j,ap as Y,l as H,u as K,F as Q}from"./react-toastify.esm-a6c446c9.js";import{B as W}from"./index-d8e76964.js";import{n as S}from"./toastMessage-be351725.js";import{u as X}from"./index-d3885f89.js";import{C as Z}from"./CheckIcon-c9d146f3.js";import{C as ee}from"./ClipLoader-0c6875fc.js";import{T as B}from"./index-be89188e.js";import{A as te}from"./index-44b66f75.js";import{i as v,O as L}from"./constants-84edb5fc.js";import"./index.esm-0e15041a.js";import"./InfoIcon-172362a7.js";import"./index-1f82fe1c.js";import"./Popover-6757eba1.js";import"./useSlotProps-0cc052d5.js";import"./Select-67651f2d.js";import"./Stack-7af311eb.js";import"./Popper-4fafa957.js";const ne=({onClick:n,loading:a})=>{const d=z(l=>l.budget),[c,m]=x.useState(10),s="node";return x.useEffect(()=>{(async()=>{try{const r=await Y(s);m(r.data.price)}catch(r){console.error("cannot fetch",r)}})()},[s]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(re,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(oe,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(se,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(d)," sats"]})]})]}),e.jsx(t,{children:e.jsx(j,{color:"secondary","data-testid":"check-icon",disabled:a,onClick:n,size:"large",startIcon:a?e.jsx(ee,{size:24}):e.jsx(Z,{}),type:"submit",variant:"contained",children:"Approve"})})]})},oe=h(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${y.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${y.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${y.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,se=h(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${y.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`,re=h(f)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ie=({type:n,onNextStep:a,onPrevStep:d,name:c,sourceLink:m})=>{const s=n==="Image"?c&&m:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ae,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(f,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...N}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(f,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(B,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...N}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(j,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(j,{color:"secondary",disabled:!s,onClick:a,size:"large",variant:"contained",children:"Next"})})]})]})},ae=h(f)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ce=({onNextStep:n,allowNextStep:a,onSelectType:d,selectedType:c})=>{const[m,s]=x.useState(v);x.useEffect(()=>{s(r=>r.value===c?r:L.find(o=>o.value===c)||v)},[c]);const l=r=>{d((r==null?void 0:r.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(le,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(te,{autoFocus:!0,onSelect:l,options:L,selectedValue:m})}),e.jsx(t,{children:e.jsx(j,{color:"secondary",disabled:!a,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},le=h(f)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,de=async(n,a,d,c)=>{var r;const m="node",s={};s.node_type=n.nodeType,s.name=n.name,n.nodeType==="Image"&&(s.node_data={source_link:n.sourceLink});let l="";await R(async()=>{const o=await G.enable();s.pubkey=o==null?void 0:o.pubkey,l=await q()});try{const o=await U.post(`/${m}`,JSON.stringify(s),{Authorization:l});if(o.error){const{message:u}=o.error;throw new Error(u)}c(n,(r=o==null?void 0:o.data)==null?void 0:r.ref_id),S(V),a()}catch(o){let u=g;if(o.status===400){const p=await o.json();u=p.errorCode||(p==null?void 0:p.status)||g}else o instanceof Error&&(u=o.message);S(u),a()}},Le=()=>{const[n,a]=x.useState(0),{close:d,visible:c}=X("addItem"),[m]=z(i=>[i.setBudget]),s=H({mode:"onChange"}),{watch:l,setValue:r,reset:o}=s,[u,p]=x.useState(!1),[E,I]=K(i=>[i.addNewNode,i.setSelectedNode]);x.useEffect(()=>()=>{a(0),o()},[c,o]);const w=l("nodeType"),O=l("name"),P=l("sourceLink"),_=()=>{d()},b=()=>{a(n+1)},A=()=>{a(n-1)},D=(i,$)=>{const T=$||`new-id-${Math.random()}`,k=i.nodeType.toLocaleLowerCase(),C={name:i.name,type:k,label:i.name,node_type:k,id:T,ref_id:T,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.sourceLink?{source_link:i.sourceLink}:{}};E(C),I(C)},F=s.handleSubmit(async i=>{p(!0);try{await de(i,_,m,D)}catch{S(g)}finally{p(!1)}}),M=i=>r("nodeType",i);return e.jsx(W,{id:"addItem",kind:"small",onClose:d,preventOutsideClose:!0,children:e.jsx(Q,{...s,children:e.jsxs("form",{id:"add-node-form",onSubmit:F,children:[n===0&&e.jsx(ce,{allowNextStep:!!w,onNextStep:b,onSelectType:M,selectedType:w}),n===1&&e.jsx(ie,{name:O,onNextStep:b,onPrevStep:A,sourceLink:P||"",type:w}),n===2&&e.jsx(ne,{loading:u,onClick:()=>null})]})})})};export{Le as AddItemModal};
