import{j as c,H as P,L as en,R as Se,K as Y,bC as nn,bF as tn,d as je,bG as te,bH as Pe,bk as Ee,r as X,C as Ue,G as ge,bI as pn,bJ as rn,bK as an,bL as An}from"./index-cf22a9d8.js";/**
* vee-validate v4.7.4
* (c) 2023 Abdelrahman Awad
* @license MIT
*/function de(e){return typeof e=="function"}function Ve(e){return e==null}const oe=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function ln(e){return Number(e)>=0}function Fn(e){const n=parseFloat(e);return isNaN(n)?e:n}const Sn={};function En(e){return Sn[e]}const Oe=Symbol("vee-validate-form"),wn=Symbol("vee-validate-field-instance"),we=Symbol("Default empty value"),jn=typeof window<"u";function Ne(e){return de(e)&&!!e.__locatorRef}function be(e){return!!e&&de(e.validate)}function fe(e){return e==="checkbox"||e==="radio"}function Mn(e){return oe(e)||Array.isArray(e)}function un(e){return Array.isArray(e)?e.length===0:oe(e)&&Object.keys(e).length===0}function Me(e){return/^\[.+\]$/i.test(e)}function In(e){return on(e)&&e.multiple}function on(e){return e.tagName==="SELECT"}function _n(e,n){const t=![!1,null,void 0,0].includes(n.multiple)&&!Number.isNaN(n.multiple);return e==="select"&&"multiple"in n&&t}function kn(e,n){return!_n(e,n)&&n.type!=="file"&&!fe(n.type)}function sn(e){return ze(e)&&e.target&&"submit"in e.target}function ze(e){return e?!!(typeof Event<"u"&&de(Event)&&e instanceof Event||e&&e.srcElement):!1}function We(e,n){return n in e&&e[n]!==we}function U(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var t,r,a;if(Array.isArray(e)){if(t=e.length,t!=n.length)return!1;for(r=t;r--!==0;)if(!U(e[r],n[r]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(r of e.entries())if(!n.has(r[0]))return!1;for(r of e.entries())if(!U(r[1],n.get(r[0])))return!1;return!0}if(qe(e)&&qe(n))return!(e.size!==n.size||e.name!==n.name||e.lastModified!==n.lastModified||e.type!==n.type);if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(r of e.entries())if(!n.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(t=e.length,t!=n.length)return!1;for(r=t;r--!==0;)if(e[r]!==n[r])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(a=Object.keys(e),t=a.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[r]))return!1;for(r=t;r--!==0;){var i=a[r];if(!U(e[i],n[i]))return!1}return!0}return e!==e&&n!==n}function qe(e){return jn?e instanceof File:!1}function Ye(e,n,t){typeof t.value=="object"&&(t.value=k(t.value)),!t.enumerable||t.get||t.set||!t.configurable||!t.writable||n==="__proto__"?Object.defineProperty(e,n,t):e[n]=t.value}function k(e){if(typeof e!="object")return e;var n=0,t,r,a,i=Object.prototype.toString.call(e);if(i==="[object Object]"?a=Object.create(e.__proto__||null):i==="[object Array]"?a=Array(e.length):i==="[object Set]"?(a=new Set,e.forEach(function(u){a.add(k(u))})):i==="[object Map]"?(a=new Map,e.forEach(function(u,f){a.set(k(f),k(u))})):i==="[object Date]"?a=new Date(+e):i==="[object RegExp]"?a=new RegExp(e.source,e.flags):i==="[object DataView]"?a=new e.constructor(k(e.buffer)):i==="[object ArrayBuffer]"?a=e.slice(0):i.slice(-6)==="Array]"&&(a=new e.constructor(e)),a){for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)Ye(a,r[n],Object.getOwnPropertyDescriptor(e,r[n]));for(n=0,r=Object.getOwnPropertyNames(e);n<r.length;n++)Object.hasOwnProperty.call(a,t=r[n])&&a[t]===e[t]||Ye(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}function De(e){return Me(e)?e.replace(/\[|\]/gi,""):e}function N(e,n,t){return e?Me(n)?e[De(n)]:(n||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((a,i)=>Mn(a)&&i in a?a[i]:t,e):t}function ae(e,n,t){if(Me(n)){e[De(n)]=t;return}const r=n.split(/\.|\[(\d+)\]/).filter(Boolean);let a=e;for(let i=0;i<r.length;i++){if(i===r.length-1){a[r[i]]=t;return}(!(r[i]in a)||Ve(a[r[i]]))&&(a[r[i]]=ln(r[i+1])?[]:{}),a=a[r[i]]}}function Ce(e,n){if(Array.isArray(e)&&ln(n)){e.splice(Number(n),1);return}oe(e)&&delete e[n]}function Fe(e,n){if(Me(n)){delete e[De(n)];return}const t=n.split(/\.|\[(\d+)\]/).filter(Boolean);let r=e;for(let i=0;i<t.length;i++){if(i===t.length-1){Ce(r,t[i]);break}if(!(t[i]in r)||Ve(r[t[i]]))break;r=r[t[i]]}const a=t.map((i,u)=>N(e,t.slice(0,u).join(".")));for(let i=a.length-1;i>=0;i--)if(un(a[i])){if(i===0){Ce(e,t[0]);continue}Ce(a[i-1],t[i-1])}}function $(e){return Object.keys(e)}function Le(e,n=void 0){const t=tn();return(t==null?void 0:t.provides[e])||rn(e,n)}function Re(e,n,t){if(Array.isArray(e)){const r=[...e],a=r.findIndex(i=>U(i,n));return a>=0?r.splice(a,1):r.push(n),r}return U(e,n)?t:n}function Je(e,n=0){let t=null,r=[];return function(...a){return t&&window.clearTimeout(t),t=window.setTimeout(()=>{const i=e(...a);r.forEach(u=>u(i)),r=[]},n),new Promise(i=>r.push(i))}}function Cn(e,n){return oe(n)&&n.number?Fn(e):e}function Te(e,n){let t;return async function(...a){const i=e(...a);t=i;const u=await i;return i!==t||(t=void 0,n(u,a)),u}}function Bn({get:e,set:n}){const t=X(k(e()));return Y(e,r=>{U(r,t.value)||(t.value=k(r))},{deep:!0}),Y(t,r=>{U(r,e())||n(k(r))},{deep:!0}),t}const Ie=(e,n,t)=>n.slots.default?typeof e=="string"||!e?n.slots.default(t()):{default:()=>{var r,a;return(a=(r=n.slots).default)===null||a===void 0?void 0:a.call(r,t())}}:n.slots.default;function Be(e){if(cn(e))return e._value}function cn(e){return"_value"in e}function $e(e){if(!ze(e))return e;const n=e.target;if(fe(n.type)&&cn(n))return Be(n);if(n.type==="file"&&n.files){const t=Array.from(n.files);return n.multiple?t:t[0]}if(In(n))return Array.from(n.options).filter(t=>t.selected&&!t.disabled).map(Be);if(on(n)){const t=Array.from(n.options).find(r=>r.selected);return t?Be(t):n.value}return n.value}function dn(e){const n={};return Object.defineProperty(n,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?oe(e)&&e._$$isNormalized?e:oe(e)?Object.keys(e).reduce((t,r)=>{const a=Nn(e[r]);return e[r]!==!1&&(t[r]=Xe(a)),t},n):typeof e!="string"?n:e.split("|").reduce((t,r)=>{const a=Rn(r);return a.name&&(t[a.name]=Xe(a.params)),t},n):n}function Nn(e){return e===!0?[]:Array.isArray(e)||oe(e)?e:[e]}function Xe(e){const n=t=>typeof t=="string"&&t[0]==="@"?Tn(t.slice(1)):t;return Array.isArray(e)?e.map(n):e instanceof RegExp?[e]:Object.keys(e).reduce((t,r)=>(t[r]=n(e[r]),t),{})}const Rn=e=>{let n=[];const t=e.split(":")[0];return e.includes(":")&&(n=e.split(":").slice(1).join(":").split(",")),{name:t,params:n}};function Tn(e){const n=t=>N(t,e)||t[e];return n.__locatorRef=e,n}function Pn(e){return Array.isArray(e)?e.filter(Ne):$(e).filter(n=>Ne(e[n])).map(n=>e[n])}const Un={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let zn=Object.assign({},Un);const Ge=()=>zn;async function fn(e,n,t={}){const r=t==null?void 0:t.bails,a={name:(t==null?void 0:t.name)||"{field}",rules:n,label:t==null?void 0:t.label,bails:r??!0,formData:(t==null?void 0:t.values)||{}},u=(await Dn(a,e)).errors;return{errors:u,valid:!u.length}}async function Dn(e,n){if(be(e.rules))return Ln(n,e.rules,{bails:e.bails});if(de(e.rules)||Array.isArray(e.rules)){const u={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:n},f=Array.isArray(e.rules)?e.rules:[e.rules],y=f.length,s=[];for(let E=0;E<y;E++){const V=f[E],p=await V(n,u);if(typeof p!="string"&&p)continue;const R=typeof p=="string"?p:vn(u);if(s.push(R),e.bails)return{errors:s}}return{errors:s}}const t=Object.assign(Object.assign({},e),{rules:dn(e.rules)}),r=[],a=Object.keys(t.rules),i=a.length;for(let u=0;u<i;u++){const f=a[u],y=await $n(t,n,{name:f,params:t.rules[f]});if(y.error&&(r.push(y.error),e.bails))return{errors:r}}return{errors:r}}async function Ln(e,n,t){var r;return{errors:await n.validate(e,{abortEarly:(r=t.bails)!==null&&r!==void 0?r:!0}).then(()=>[]).catch(i=>{if(i.name==="ValidationError")return i.errors;throw i})}}async function $n(e,n,t){const r=En(t.name);if(!r)throw new Error(`No such validator '${t.name}' exists.`);const a=Gn(t.params,e.formData),i={field:e.label||e.name,name:e.name,label:e.label,value:n,form:e.formData,rule:Object.assign(Object.assign({},t),{params:a})},u=await r(n,a,i);return typeof u=="string"?{error:u}:{error:u?void 0:vn(i)}}function vn(e){const n=Ge().generateMessage;return n?n(e):"Field is invalid"}function Gn(e,n){const t=r=>Ne(r)?r(n):r;return Array.isArray(e)?e.map(t):Object.keys(e).reduce((r,a)=>(r[a]=t(e[a]),r),{})}async function Hn(e,n){const t=await e.validate(n,{abortEarly:!1}).then(()=>[]).catch(i=>{if(i.name!=="ValidationError")throw i;return i.inner||[]}),r={},a={};for(const i of t){const u=i.errors;r[i.path]={valid:!u.length,errors:u},u.length&&(a[i.path]=u[0])}return{valid:!t.length,results:r,errors:a}}async function Kn(e,n,t){const a=$(e).map(async s=>{var E,V,p;const j=(E=t==null?void 0:t.names)===null||E===void 0?void 0:E[s],R=await fn(N(n,s),e[s],{name:(j==null?void 0:j.name)||s,label:j==null?void 0:j.label,values:n,bails:(p=(V=t==null?void 0:t.bailsMap)===null||V===void 0?void 0:V[s])!==null&&p!==void 0?p:!0});return Object.assign(Object.assign({},R),{path:s})});let i=!0;const u=await Promise.all(a),f={},y={};for(const s of u)f[s.path]={valid:s.valid,errors:s.errors},s.valid||(i=!1,y[s.path]=s.errors[0]);return{valid:i,results:f,errors:y}}let Qe=0;function Wn(e,n){const{value:t,initialValue:r,setInitialValue:a}=mn(e,n.modelValue,n.form),{errorMessage:i,errors:u,setErrors:f}=Yn(e,n.form),y=qn(t,r,u),s=Qe>=Number.MAX_SAFE_INTEGER?0:++Qe;function E(V){var p;"value"in V&&(t.value=V.value),"errors"in V&&f(V.errors),"touched"in V&&(y.touched=(p=V.touched)!==null&&p!==void 0?p:y.touched),"initialValue"in V&&a(V.initialValue)}return{id:s,path:e,value:t,initialValue:r,meta:y,errors:u,errorMessage:i,setState:E}}function mn(e,n,t){const r=X(c(n));function a(){return t?N(t.meta.value.initialValues,c(e),c(r)):c(r)}function i(s){if(!t){r.value=s;return}t.stageInitialValue(c(e),s,!0)}const u=P(a);if(!t)return{value:X(a()),initialValue:u,setInitialValue:i};const f=n?c(n):N(t.values,c(e),c(u));return t.stageInitialValue(c(e),f,!0),{value:P({get(){return N(t.values,c(e))},set(s){t.setFieldValue(c(e),s)}}),initialValue:u,setInitialValue:i}}function qn(e,n,t){const r=Ue({touched:!1,pending:!1,valid:!0,validated:!!c(t).length,initialValue:P(()=>c(n)),dirty:P(()=>!U(c(e),c(n)))});return Y(t,a=>{r.valid=!a.length},{immediate:!0,flush:"sync"}),r}function Yn(e,n){function t(a){return a?Array.isArray(a)?a:[a]:[]}if(!n){const a=X([]);return{errors:a,errorMessage:P(()=>a.value[0]),setErrors:i=>{a.value=t(i)}}}const r=P(()=>n.errorBag.value[c(e)]||[]);return{errors:r,errorMessage:P(()=>r.value[0]),setErrors:a=>{n.setFieldErrorBag(c(e),t(a))}}}function Jn(e,n,t){return fe(t==null?void 0:t.type)?Zn(e,n,t):yn(e,n,t)}function yn(e,n,t){const{initialValue:r,validateOnMount:a,bails:i,type:u,checkedValue:f,label:y,validateOnValueUpdate:s,uncheckedValue:E,controlled:V,keepValueOnUnmount:p,modelPropName:j,syncVModel:R,form:H}=Xn(c(e),t),Q=V?Le(Oe):void 0,M=H||Q;let z=!1;const{id:v,value:m,initialValue:A,meta:h,setState:O,errors:S,errorMessage:B}=Wn(e,{modelValue:r,form:M});R&&xn({value:m,prop:j,handleChange:C});const W=()=>{h.touched=!0},x=P(()=>{let d=c(n);const I=c(M==null?void 0:M.schema);return I&&!be(I)&&(d=Qn(I,c(e))||d),be(d)||de(d)||Array.isArray(d)?d:dn(d)});async function ee(d){var I,G;return M!=null&&M.validateSchema?(I=(await M.validateSchema(d)).results[c(e)])!==null&&I!==void 0?I:{valid:!0,errors:[]}:fn(m.value,x.value,{name:c(e),label:c(y),values:(G=M==null?void 0:M.values)!==null&&G!==void 0?G:{},bails:i})}const K=Te(async()=>(h.pending=!0,h.validated=!0,ee("validated-only")),d=>(z&&(d.valid=!0,d.errors=[]),O({errors:d.errors}),h.pending=!1,d)),J=Te(async()=>ee("silent"),d=>(z&&(d.valid=!0),h.valid=d.valid,d));function T(d){return(d==null?void 0:d.mode)==="silent"?J():K()}function C(d,I=!0){const G=$e(d);m.value=G,!s&&I&&K()}en(()=>{if(a)return K();(!M||!M.validateSchema)&&J()});function D(d){h.touched=d}let q,ve=k(m.value);function re(){q=Y(m,(d,I)=>{if(U(d,I)&&U(d,ve))return;(s?K:J)(),ve=k(d)},{deep:!0})}re();function le(d){var I;q==null||q();const G=d&&"value"in d?d.value:A.value;O({value:k(G),initialValue:k(G),touched:(I=d==null?void 0:d.touched)!==null&&I!==void 0?I:!1,errors:(d==null?void 0:d.errors)||[]}),h.pending=!1,h.validated=!1,J(),ge(()=>{re()})}function se(d){m.value=d}function me(d){O({errors:Array.isArray(d)?d:[d]})}const ie={id:v,name:e,label:y,value:m,meta:h,errors:S,errorMessage:B,type:u,checkedValue:f,uncheckedValue:E,bails:i,keepValueOnUnmount:p,resetField:le,handleReset:()=>le(),validate:T,handleChange:C,handleBlur:W,setState:O,setTouched:D,setErrors:me,setValue:se};if(an(wn,ie),Se(n)&&typeof c(n)!="function"&&Y(n,(d,I)=>{U(d,I)||(h.validated?K():J())},{deep:!0}),!M)return ie;M.register(ie),nn(()=>{z=!0,M.unregister(ie)});const _e=P(()=>{const d=x.value;return!d||de(d)||be(d)||Array.isArray(d)?{}:Object.keys(d).reduce((I,G)=>{const ye=Pn(d[G]).map(ue=>ue.__locatorRef).reduce((ue,ce)=>{const pe=N(M.values,ce)||M.values[ce];return pe!==void 0&&(ue[ce]=pe),ue},{});return Object.assign(I,ye),I},{})});return Y(_e,(d,I)=>{if(!Object.keys(d).length)return;!U(d,I)&&(h.validated?K():J())}),ie}function Xn(e,n){const t=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:e,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,modelPropName:"modelValue",syncVModel:!0,controlled:!0});if(!n)return t();const r="valueProp"in n?n.valueProp:n.checkedValue,a="standalone"in n?!n.standalone:n.controlled;return Object.assign(Object.assign(Object.assign({},t()),n||{}),{controlled:a??!0,checkedValue:r})}function Qn(e,n){if(e)return e[n]}function Zn(e,n,t){const r=t!=null&&t.standalone?void 0:Le(Oe),a=t==null?void 0:t.checkedValue,i=t==null?void 0:t.uncheckedValue;function u(f){const y=f.handleChange,s=P(()=>{const V=c(f.value),p=c(a);return Array.isArray(V)?V.findIndex(j=>U(j,p))>=0:U(p,V)});function E(V,p=!0){var j;if(s.value===((j=V==null?void 0:V.target)===null||j===void 0?void 0:j.checked)){p&&f.validate();return}let R=$e(V);r||(R=Re(c(f.value),c(a),c(i))),y(R,p)}return Object.assign(Object.assign({},f),{checked:s,checkedValue:a,uncheckedValue:i,handleChange:E})}return u(yn(e,n,t))}function xn({prop:e,value:n,handleChange:t}){const r=tn();if(!r)return;const a=e||"modelValue",i=`update:${a}`;a in r.props&&(Y(n,u=>{U(u,Ze(r,a))||r.emit(i,u)}),Y(()=>Ze(r,a),u=>{if(u===we&&n.value===void 0)return;const f=u===we?void 0:u;U(f,Cn(n.value,r.props.modelModifiers))||t(f)}))}function Ze(e,n){return e.props[n]}je({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>Ge().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:we},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(e,n){const t=te(e,"rules"),r=te(e,"name"),a=te(e,"label"),i=te(e,"uncheckedValue"),u=te(e,"keepValue"),{errors:f,value:y,errorMessage:s,validate:E,handleChange:V,handleBlur:p,setTouched:j,resetField:R,handleReset:H,meta:Q,checked:M,setErrors:z}=Jn(r,t,{validateOnMount:e.validateOnMount,bails:e.bails,standalone:e.standalone,type:n.attrs.type,initialValue:nt(e,n),checkedValue:n.attrs.value,uncheckedValue:i,label:a,validateOnValueUpdate:!1,keepValueOnUnmount:u}),v=function(B,W=!0){V(B,W),n.emit("update:modelValue",y.value)},m=S=>{fe(n.attrs.type)||(y.value=$e(S))},A=function(B){m(B),n.emit("update:modelValue",y.value)},h=P(()=>{const{validateOnInput:S,validateOnChange:B,validateOnBlur:W,validateOnModelUpdate:x}=et(e),ee=[p,n.attrs.onBlur,W?E:void 0].filter(Boolean),K=[D=>v(D,S),n.attrs.onInput].filter(Boolean),J=[D=>v(D,B),n.attrs.onChange].filter(Boolean),T={name:e.name,onBlur:ee,onInput:K,onChange:J};T["onUpdate:modelValue"]=D=>v(D,x),fe(n.attrs.type)&&M&&(T.checked=M.value);const C=xe(e,n);return kn(C,n.attrs)&&(T.value=y.value),T});function O(){return{field:h.value,value:y.value,meta:Q,errors:f.value,errorMessage:s.value,validate:E,resetField:R,handleChange:v,handleInput:A,handleReset:H,handleBlur:p,setTouched:j,setErrors:z}}return n.expose({setErrors:z,setTouched:j,reset:R,validate:E,handleChange:V}),()=>{const S=Pe(xe(e,n)),B=Ie(S,n,O);return S?Ee(S,Object.assign(Object.assign({},n.attrs),h.value),B):B}}});function xe(e,n){let t=e.as||"";return!e.as&&!n.slots.default&&(t="input"),t}function et(e){var n,t,r,a;const{validateOnInput:i,validateOnChange:u,validateOnBlur:f,validateOnModelUpdate:y}=Ge();return{validateOnInput:(n=e.validateOnInput)!==null&&n!==void 0?n:i,validateOnChange:(t=e.validateOnChange)!==null&&t!==void 0?t:u,validateOnBlur:(r=e.validateOnBlur)!==null&&r!==void 0?r:f,validateOnModelUpdate:(a=e.validateOnModelUpdate)!==null&&a!==void 0?a:y}}function nt(e,n){return fe(n.attrs.type)?We(e,"modelValue")?e.modelValue:void 0:We(e,"modelValue")?e.modelValue:n.attrs.value}let tt=0;function rt(e){var n;const t=tt++,r=new Set;let a=!1;const i=X({}),u=X(!1),f=X(0),y=[],s=Ue(k(c(e==null?void 0:e.initialValues)||{})),{errorBag:E,setErrorBag:V,setFieldErrorBag:p}=lt(e==null?void 0:e.initialErrors),j=P(()=>$(E.value).reduce((l,o)=>{const g=E.value[o];return g&&g.length&&(l[o]=g[0]),l},{}));function R(l){const o=i.value[l];return Array.isArray(o)?o[0]:o}function H(l){return!!i.value[l]}const Q=P(()=>$(i.value).reduce((l,o)=>{const g=R(o);return g&&(l[o]={name:c(g.name)||"",label:c(g.label)||""}),l},{})),M=P(()=>$(i.value).reduce((l,o)=>{var g;const b=R(o);return b&&(l[o]=(g=b.bails)!==null&&g!==void 0?g:!0),l},{})),z=Object.assign({},(e==null?void 0:e.initialErrors)||{}),v=(n=e==null?void 0:e.keepValuesOnUnmount)!==null&&n!==void 0?n:!1,{initialValues:m,originalInitialValues:A,setInitialValues:h}=at(i,s,e==null?void 0:e.initialValues),O=it(i,s,A,j),S=P(()=>[...r,...$(i.value)].reduce((l,o)=>{const g=N(s,o);return ae(l,o,g),l},{})),B=e==null?void 0:e.validationSchema,W=Je(Ke,5),x=Je(Ke,5),ee=Te(async l=>await l==="silent"?W():x(),(l,[o])=>{const g=C.fieldsByPath.value||{},b=$(C.errorBag.value);return[...new Set([...$(l.results),...$(g),...b])].reduce((F,w)=>{const L=g[w],ne=(l.results[w]||{errors:[]}).errors,Z={errors:ne,valid:!ne.length};if(F.results[w]=Z,Z.valid||(F.errors[w]=Z.errors[0]),!L)return re(w,ne),F;if(q(L,he=>he.meta.valid=Z.valid),o==="silent")return F;const On=Array.isArray(L)?L.some(he=>he.meta.validated):L.meta.validated;return o==="validated-only"&&!On||q(L,he=>he.setState({errors:Z.errors})),F},{valid:l.valid,results:{},errors:{}})});function K(l){return function(g,b){return function(F){return F instanceof Event&&(F.preventDefault(),F.stopPropagation()),I($(i.value).reduce((w,L)=>(w[L]=!0,w),{})),u.value=!0,f.value++,Ae().then(w=>{const L=k(s);if(w.valid&&typeof g=="function"){const ne=k(S.value);return g(l?ne:L,{evt:F,controlledValues:ne,setErrors:le,setFieldError:re,setTouched:I,setFieldTouched:d,setValues:me,setFieldValue:se,resetForm:ye,resetField:G})}!w.valid&&typeof b=="function"&&b({values:L,evt:F,errors:w.errors,results:w.results})}).then(w=>(u.value=!1,w),w=>{throw u.value=!1,w})}}}const T=K(!1);T.withControlled=K(!0);const C={formId:t,fieldsByPath:i,values:s,controlledValues:S,errorBag:E,errors:j,schema:B,submitCount:f,meta:O,isSubmitting:u,fieldArrays:y,keepValuesOnUnmount:v,validateSchema:c(B)?ee:void 0,validate:Ae,register:pe,unregister:hn,setFieldErrorBag:p,validateField:ke,setFieldValue:se,setValues:me,setErrors:le,setFieldError:re,setFieldTouched:d,setTouched:I,resetForm:ye,resetField:G,handleSubmit:T,stageInitialValue:Vn,unsetInitialValue:gn,setFieldInitialValue:He,useFieldModel:_e};function D(l){return Array.isArray(l)}function q(l,o){return Array.isArray(l)?l.forEach(o):o(l)}function ve(l){Object.values(i.value).forEach(o=>{o&&q(o,l)})}function re(l,o){p(l,o)}function le(l){V(l)}function se(l,o,{force:g}={force:!1}){var b;const _=i.value[l],F=k(o);if(!_){ae(s,l,F);return}if(D(_)&&((b=_[0])===null||b===void 0?void 0:b.type)==="checkbox"&&!Array.isArray(o)){const L=k(Re(N(s,l)||[],o,void 0));ae(s,l,L);return}let w=F;!D(_)&&_.type==="checkbox"&&!g&&!a&&(w=k(Re(N(s,l),o,c(_.uncheckedValue)))),ae(s,l,w)}function me(l){$(s).forEach(o=>{delete s[o]}),$(l).forEach(o=>{se(o,l[o])}),y.forEach(o=>o&&o.reset())}function ie(l){const{value:o}=mn(l,void 0,C);return Y(o,()=>{H(c(l))||Ae({mode:"validated-only"})},{deep:!0}),r.add(c(l)),o}function _e(l){return Array.isArray(l)?l.map(ie):ie(l)}function d(l,o){const g=i.value[l];g&&q(g,b=>b.setTouched(o))}function I(l){$(l).forEach(o=>{d(o,!!l[o])})}function G(l,o){const g=i.value[l];g&&q(g,b=>b.resetField(o))}function ye(l){a=!0,ve(g=>g.resetField());const o=l!=null&&l.values?l.values:A.value;h(o),me(o),l!=null&&l.touched&&I(l.touched),le((l==null?void 0:l.errors)||{}),f.value=(l==null?void 0:l.submitCount)||0,ge(()=>{a=!1})}function ue(l,o){const g=An(l),b=o;if(!i.value[b]){i.value[b]=g;return}const _=i.value[b];_&&!Array.isArray(_)&&(i.value[b]=[_]),i.value[b]=[...i.value[b],g]}function ce(l,o){const g=o,b=i.value[g];if(b){if(!D(b)&&l.id===b.id){delete i.value[g];return}if(D(b)){const _=b.findIndex(F=>F.id===l.id);if(_===-1)return;b.splice(_,1),b.length||delete i.value[g]}}}function pe(l){const o=c(l.name);ue(l,o),Se(l.name)&&Y(l.name,async(b,_)=>{await ge(),ce(l,_),ue(l,b),(j.value[_]||j.value[b])&&(re(_,void 0),ke(b)),await ge(),H(_)||Fe(s,_)});const g=c(l.errorMessage);g&&(z==null?void 0:z[o])!==g&&ke(o),delete z[o]}function hn(l){const o=c(l.name),g=i.value[o],b=!!g&&D(g);ce(l,o),ge(()=>{var _;const F=(_=c(l.keepValueOnUnmount))!==null&&_!==void 0?_:c(v),w=N(s,o);if(b&&(g===i.value[o]||!i.value[o])&&!F)if(Array.isArray(w)){const ne=w.findIndex(Z=>U(Z,c(l.checkedValue)));if(ne>-1){const Z=[...w];Z.splice(ne,1),se(o,Z,{force:!0})}}else w===c(l.checkedValue)&&Fe(s,o);if(!H(o)){if(re(o,void 0),F||b&&Array.isArray(w)&&!un(w))return;Fe(s,o)}})}async function Ae(l){const o=(l==null?void 0:l.mode)||"force";if(o==="force"&&ve(F=>F.meta.validated=!0),C.validateSchema)return C.validateSchema(o);const g=await Promise.all(Object.values(i.value).map(F=>{const w=Array.isArray(F)?F[0]:F;return w?w.validate(l).then(L=>({key:c(w.name),valid:L.valid,errors:L.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),b={},_={};for(const F of g)b[F.key]={valid:F.valid,errors:F.errors},F.errors.length&&(_[F.key]=F.errors[0]);return{valid:g.every(F=>F.valid),results:b,errors:_}}async function ke(l){const o=i.value[l];return o?Array.isArray(o)?o.map(g=>g.validate())[0]:o.validate():Promise.resolve({errors:[],valid:!0})}function gn(l){Fe(m.value,l)}function Vn(l,o,g=!1){ae(s,l,o),He(l,o),g&&!(e!=null&&e.initialValues)&&ae(A.value,l,k(o))}function He(l,o){ae(m.value,l,k(o))}async function Ke(){const l=c(B);return l?be(l)?await Hn(l,s):await Kn(l,s,{names:Q.value,bailsMap:M.value}):{valid:!0,results:{},errors:{}}}const bn=T((l,{evt:o})=>{sn(o)&&o.target.submit()});return en(()=>{if(e!=null&&e.initialErrors&&le(e.initialErrors),e!=null&&e.initialTouched&&I(e.initialTouched),e!=null&&e.validateOnMount){Ae();return}C.validateSchema&&C.validateSchema("silent")}),Se(B)&&Y(B,()=>{var l;(l=C.validateSchema)===null||l===void 0||l.call(C,"validated-only")}),an(Oe,C),Object.assign(Object.assign({},C),{handleReset:()=>ye(),submitForm:bn})}function it(e,n,t,r){const a={touched:"some",pending:"some",valid:"every"},i=P(()=>!U(n,c(t)));function u(){const y=Object.values(e.value).flat(1).filter(Boolean);return $(a).reduce((s,E)=>{const V=a[E];return s[E]=y[V](p=>p.meta[E]),s},{})}const f=Ue(u());return pn(()=>{const y=u();f.touched=y.touched,f.valid=y.valid,f.pending=y.pending}),P(()=>Object.assign(Object.assign({initialValues:c(t)},f),{valid:f.valid&&!$(r.value).length,dirty:i.value}))}function at(e,n,t){const r=X(k(c(t))||{}),a=X(k(c(t))||{});function i(u,f=!1){r.value=k(u),a.value=k(u),f&&$(e.value).forEach(y=>{const s=e.value[y],E=Array.isArray(s)?s.some(p=>p.meta.touched):s==null?void 0:s.meta.touched;if(!s||E)return;const V=N(r.value,y);ae(n,y,k(V))})}return Se(t)&&Y(t,u=>{i(u,!0)},{deep:!0}),{initialValues:r,originalInitialValues:a,setInitialValues:i}}function lt(e){const n=X({});function t(i){return Array.isArray(i)?i:i?[i]:[]}function r(i,u){if(!u){delete n.value[i];return}n.value[i]=t(u)}function a(i){n.value=$(i).reduce((u,f)=>{const y=i[f];return y&&(u[f]=t(y)),u},{})}return e&&a(e),{errorBag:n,setErrorBag:a,setFieldErrorBag:r}}je({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(e,n){const t=te(e,"initialValues"),r=te(e,"validationSchema"),a=te(e,"keepValues"),{errors:i,values:u,meta:f,isSubmitting:y,submitCount:s,controlledValues:E,validate:V,validateField:p,handleReset:j,resetForm:R,handleSubmit:H,setErrors:Q,setFieldError:M,setFieldValue:z,setValues:v,setFieldTouched:m,setTouched:A,resetField:h}=rt({validationSchema:r.value?r:void 0,initialValues:t,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount,keepValuesOnUnmount:a}),O=H((T,{evt:C})=>{sn(C)&&C.target.submit()},e.onInvalidSubmit),S=e.onSubmit?H(e.onSubmit,e.onInvalidSubmit):O;function B(T){ze(T)&&T.preventDefault(),j(),typeof n.attrs.onReset=="function"&&n.attrs.onReset()}function W(T,C){return H(typeof T=="function"&&!C?T:C,e.onInvalidSubmit)(T)}function x(){return k(u)}function ee(){return k(f.value)}function K(){return k(i.value)}function J(){return{meta:f.value,errors:i.value,values:u,isSubmitting:y.value,submitCount:s.value,controlledValues:E.value,validate:V,validateField:p,handleSubmit:W,handleReset:j,submitForm:O,setErrors:Q,setFieldError:M,setFieldValue:z,setValues:v,setFieldTouched:m,setTouched:A,resetForm:R,resetField:h,getValues:x,getMeta:ee,getErrors:K}}return n.expose({setFieldError:M,setErrors:Q,setFieldValue:z,setValues:v,setFieldTouched:m,setTouched:A,resetForm:R,validate:V,validateField:p,resetField:h,getValues:x,getMeta:ee,getErrors:K}),function(){const C=e.as==="form"?e.as:Pe(e.as),D=Ie(C,n,J);if(!e.as)return D;const q=e.as==="form"?{novalidate:!0}:{};return Ee(C,Object.assign(Object.assign(Object.assign({},q),n.attrs),{onSubmit:S,onReset:B}),D)}}});function ut(e){const n=Le(Oe,void 0),t=X([]),r=()=>{},a={fields:t,remove:r,push:r,swap:r,insert:r,update:r,replace:r,prepend:r,move:r};if(!n||!c(e))return a;const i=n.fieldArrays.find(v=>c(v.path)===c(e));if(i)return i;let u=0;function f(){const v=N(n==null?void 0:n.values,c(e),[])||[];t.value=v.map(s),y()}f();function y(){const v=t.value.length;for(let m=0;m<v;m++){const A=t.value[m];A.isFirst=m===0,A.isLast=m===v-1}}function s(v){const m=u++;return{key:m,value:Bn({get(){const h=N(n==null?void 0:n.values,c(e),[])||[],O=t.value.findIndex(S=>S.key===m);return O===-1?v:h[O]},set(h){const O=t.value.findIndex(S=>S.key===m);O!==-1&&H(O,h)}}),isFirst:!1,isLast:!1}}function E(v){const m=c(e),A=N(n==null?void 0:n.values,m);if(!A||!Array.isArray(A))return;const h=[...A];h.splice(v,1),n==null||n.unsetInitialValue(m+`[${v}]`),n==null||n.setFieldValue(m,h),t.value.splice(v,1),y()}function V(v){const m=c(e),A=N(n==null?void 0:n.values,m),h=Ve(A)?[]:A;if(!Array.isArray(h))return;const O=[...h];O.push(v),n==null||n.stageInitialValue(m+`[${O.length-1}]`,v),n==null||n.setFieldValue(m,O),t.value.push(s(v)),y()}function p(v,m){const A=c(e),h=N(n==null?void 0:n.values,A);if(!Array.isArray(h)||!(v in h)||!(m in h))return;const O=[...h],S=[...t.value],B=O[v];O[v]=O[m],O[m]=B;const W=S[v];S[v]=S[m],S[m]=W,n==null||n.setFieldValue(A,O),t.value=S,y()}function j(v,m){const A=c(e),h=N(n==null?void 0:n.values,A);if(!Array.isArray(h)||h.length<v)return;const O=[...h],S=[...t.value];O.splice(v,0,m),S.splice(v,0,s(m)),n==null||n.setFieldValue(A,O),t.value=S,y()}function R(v){const m=c(e);n==null||n.setFieldValue(m,v),f()}function H(v,m){const A=c(e),h=N(n==null?void 0:n.values,A);!Array.isArray(h)||h.length-1<v||(n==null||n.setFieldValue(`${A}[${v}]`,m),n==null||n.validate({mode:"validated-only"}))}function Q(v){const m=c(e),A=N(n==null?void 0:n.values,m),h=Ve(A)?[]:A;if(!Array.isArray(h))return;const O=[v,...h];n==null||n.stageInitialValue(m+`[${O.length-1}]`,v),n==null||n.setFieldValue(m,O),t.value.unshift(s(v)),y()}function M(v,m){const A=c(e),h=N(n==null?void 0:n.values,A),O=Ve(h)?[]:[...h];if(!Array.isArray(h)||!(v in h)||!(m in h))return;const S=[...t.value],B=S[v];S.splice(v,1),S.splice(m,0,B);const W=O[v];O.splice(v,1),O.splice(m,0,W),n==null||n.setFieldValue(A,O),t.value=S,y()}const z={fields:t,remove:E,push:V,swap:p,insert:j,update:H,replace:R,prepend:Q,move:M};return n.fieldArrays.push(Object.assign({path:e,reset:f},z)),nn(()=>{const v=n.fieldArrays.findIndex(m=>c(m.path)===c(e));v>=0&&n.fieldArrays.splice(v,1)}),z}je({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(e,n){const{push:t,remove:r,swap:a,insert:i,replace:u,update:f,prepend:y,move:s,fields:E}=ut(te(e,"name"));function V(){return{fields:E.value,push:t,remove:r,swap:a,insert:i,update:f,replace:u,prepend:y,move:s}}return n.expose({push:t,remove:r,swap:a,insert:i,update:f,replace:u,prepend:y,move:s}),()=>Ie(void 0,n,V)}});je({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,n){const t=rn(Oe,void 0),r=P(()=>t==null?void 0:t.errors.value[e.name]);function a(){return{message:r.value}}return()=>{if(!r.value)return;const i=e.as?Pe(e.as):e.as,u=Ie(i,n,a),f=Object.assign({role:"alert"},n.attrs);return!i&&(Array.isArray(u)||!u)&&(u!=null&&u.length)?u:(Array.isArray(u)||!u)&&!(u!=null&&u.length)?Ee(i||"span",f,r.value):Ee(i,f,u)}}});export{Jn as a,rt as u};