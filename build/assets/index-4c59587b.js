import{s as r,F as n,T as g,j as e,B as b,b as w,c as p,r as A,u as B}from"./index-d235c36b.js";import{B as v}from"./index-ebe3b400.js";import{u as F}from"./index-13b29bcb.js";import{u as M,m as $,b as f,r as C,F as D}from"./react-toastify.esm-c1f13023.js";import{G}from"./index-a2b43141.js";import{T as x}from"./index-80f56cec.js";import{C as k}from"./ClipLoader-a3c62db1.js";import{T as R,a as L}from"./Tabs-cf68de01.js";import"./index.esm-1e4be125.js";import"./InfoIcon-34912e05.js";import"./useSlotProps-aadac426.js";const P=({onClose:s})=>{const[a]=M(t=>[t.graphStyle]),i=()=>{localStorage.setItem("graphStyle",a),s()};return e.jsxs(V,{direction:"column",children:[e.jsx(z,{children:"Default graph view:"}),e.jsx(G,{}),e.jsx(n,{mt:308,children:e.jsx(b,{kind:"big",onClick:i,children:"Save changes"})})]})},V=r(n)`
  display: flex;
  gap: 10px;
  padding: 36px;
`,z=r(g)`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 400;
`,W=({initialValues:s})=>{const a=$({defaultValues:s,mode:"onSubmit"}),{isSubmitting:i}=a.formState,t=f(l=>l.setAppMetaData),d=a.handleSubmit(async l=>{try{(await C(l)).status==="success"&&t(l)}catch(c){console.warn(c)}});return e.jsx(D,{...a,children:e.jsx(E,{id:"add-node-form",onSubmit:d,children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-title-id",label:"Graph Title",maxLength:50,name:"title",placeholder:"Type graph title here...",rules:{...w}})}),e.jsx(n,{pt:20,children:e.jsx(x,{id:"cy-about-id",label:"Graph Description",maxLength:50,name:"description",placeholder:"Type graph description here..."})})]}),e.jsx(n,{mt:210,py:24,children:i?e.jsx(K,{children:e.jsx(k,{color:p.white,size:20})}):e.jsx(b,{disabled:i,id:"add-node-submit-cta",kind:"big",type:"submit",children:"Save changes"})})]})})})},K=r(n).attrs({align:"center",background:"primaryButton",borderRadius:8,justify:"center"})`
  padding: 16px 24px;
  opacity: 0.5;
`,E=r.form`
  padding: 36px;
`,m=s=>{const{children:a,value:i,index:t,...d}=s;return i===t?e.jsx(U,{"aria-labelledby":`simple-tab-${t}`,hidden:i!==t,id:`simple-tabpanel-${t}`,role:"tabpanel",...d,children:a}):null};function u(s){return{id:`simple-tab-${s}`,"aria-controls":`simple-tabpanel-${s}`}}const H=({onClose:s})=>{const[a,i]=A.useState(0),[t,d]=B(o=>[o.isAdmin,o.setPubKey,o.pubKey]),l=f(o=>o.appMetaData),c=()=>t?"Admin Settings":"Settings",j=({children:o})=>e.jsxs(q,{children:[e.jsxs(n,{direction:"row",pt:3,children:[e.jsx(J,{children:c()}),y()]}),o]}),y=()=>!d||t?null:e.jsx(e.Fragment,{}),S=(o,T)=>{i(T)};return e.jsxs(Y,{direction:"column",children:[e.jsx(j,{children:e.jsxs(I,{"aria-label":"settings tabs",onChange:S,value:a,children:[t&&e.jsx(h,{disableRipple:!0,label:"General",...u(0)}),e.jsx(h,{color:p.white,disableRipple:!0,label:"Appearance",...u(1)})]})}),t&&e.jsx(e.Fragment,{children:e.jsx(m,{index:0,value:a,children:e.jsx(W,{initialValues:l})})}),e.jsx(m,{index:t?1:0,value:a,children:e.jsx(P,{onClose:s})})]})},I=r(R)`
  && {
    .MuiTabs-indicator {
      background: ${p.primaryBlue};
    }
  }
`,q=r(n)`
  background: rgb(22, 24, 30);
  padding: 40px 36px 0 0;
`,h=r(L)`
  && {
    padding: 30px 0 24px;
    color: ${p.GRAY6};
    margin-left: 36px;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    text-align: left;

    &.Mui-selected {
      color: ${p.white};
    }
  }
`,U=r(n)`
  display: flex;
  flex: 1;
  min-height: 495px;
  max-height: 495px;
  height: fit-content;
  min-width: 480px;
`,Y=r(n)`
  min-height: 0;
  flex: 1;
`,J=r(g)`
  font-size: 22px;
  font-weight: 600;
  font-family: Barlow;
  padding: 0 0 0 36px;
`,re=()=>{const{close:s}=F("settings");return e.jsx(v,{background:"BG1",id:"settings",noWrap:!0,onClose:s,children:e.jsx(H,{onClose:s})})};export{re as SettingsModal};