import{o as y,e as T,f as a,d as V,r as S,bW as w,a2 as M,bX as B,bY as Q,j as h,x as A,F as Z,A as x,k as d,M as E,bz as G,ai as k,$ as L,T as H,X as N,_ as j,u as C,i as X,t as F,ab as z,bD as R,aN as W,V as Y}from"./index-5e3ce573.js";import{u as J,a as K}from"./vee-validate.esm-e8a787ff.js";const O={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},P=a("path",{fill:"currentColor",d:"M18.45 15.6L17 14.15L18.55 12L15 7H9.85l-2-2H15q.5 0 .925.213t.725.637l3.525 5q.35.525.35 1.15t-.35 1.15L18.45 15.6ZM5 19q-.825 0-1.413-.588T3 17V7q0-.275.063-.5t.187-.45L2.1 4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l17 17q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-3.15-3.15q-.225.125-.45.188T15 19H5Zm4.575-6.6Zm3.85-1.825ZM14.2 17L5 7.8V17h9.2Z"},null,-1),U=[P];function ee(_,s){return y(),T("svg",O,U)}const te={name:"material-symbols-label-off-outline-rounded",render:ee},se={slot:"headline"},ae={slot:"content"},oe=["label","selected"],ne=["label","selected"],de={type:"filter"},le=["label","selected","onClick"],ie={slot:"actions"},ue=["disabled"],re=V({__name:"AddToTagsModal",props:{type:{type:String,required:!0},tags:{type:Array,default:()=>[]},query:{type:String,required:!0}},setup(_){const s=_,{handleSubmit:l}=J(),i=S("add_to_tags");function g(e){const{button:r}=e.detail,q=r.dataset.value;i.value=q}const{value:o,errorMessage:n}=K("selectedTags",w().test("required",()=>"valid.required",e=>e.length),{initialValue:[]}),{mutate:m,loading:u,onDone:p}=M({document:B,appApi:!0}),{mutate:f,loading:t,onDone:v}=M({document:Q,appApi:!0}),b=()=>{L.emit("items_tags_updated",{type:s.type}),L.emit("refetch_tags",s.type),k()};v(b),p(b);function I(e){o.value.includes(e)?H(o.value,r=>r.id===e.id):o.value.push(e)}const $=l(()=>{i.value==="add_to_tags"?f({type:s.type,tagIds:o.value.map(e=>e.id),query:s.query}):m({type:s.type,tagIds:o.value.map(e=>e.id),query:s.query})});return(e,r)=>{const q=N,D=te;return y(),T("md-dialog",null,[a("div",se,h(e.$t("tags")),1),a("div",ae,[a("md-outlined-segmented-button-set",{onSegmentedButtonSetSelection:g},[a("md-outlined-segmented-button",{label:e.$t("add_to_tags"),selected:i.value==="add_to_tags"},[A(q,{slot:"icon"})],8,oe),a("md-outlined-segmented-button",{label:e.$t("remove_from_tags"),selected:i.value==="remove_from_tags"},[A(D,{slot:"icon"})],8,ne)],32),a("md-chip-set",de,[(y(!0),T(Z,null,x(_.tags,c=>(y(),T("md-filter-chip",{key:c.id,label:c.name,selected:d(o).includes(c),onClick:_e=>I(c)},null,8,le))),128))]),E(a("div",{class:"invalid-feedback"},h(d(n)?e.$t(d(n)):""),513),[[G,d(n)]])]),a("div",ie,[a("md-outlined-button",{value:"cancel",onClick:r[0]||(r[0]=(...c)=>d(k)&&d(k)(...c))},h(e.$t("cancel")),1),a("md-filled-button",{value:"save",disabled:d(t)||d(u),onClick:r[1]||(r[1]=(...c)=>d($)&&d($)(...c)),autofocus:""},h(e.$t("save")),9,ue)])])}}});const ce=j(re,[["__scopeId","data-v-96663e05"]]),pe=(_,s,l)=>{const{t:i}=C();return{addToTags:(g,o)=>{let n=o;if(!g){const m=s.value.filter(u=>u.checked);if(m.length===0){F(i("select_first"),"error");return}n=`ids:${m.map(u=>u.id).join(",")}`}Y(ce,{type:_,tags:l.value,query:n})}}},ve=(_,s,l,i)=>{const g=S([]),{t:o}=C();return X({handle:async(n,m)=>{if(m)F(o(m),"error");else if(n){g.value=n.tags;const u=z(s.value);l.tags=[];const p=[];u.forEach(t=>{if(t.name==="text")l.text=t.value;else if(t.name==="tag"){const v=n.tags.find(b=>R(b.name)===t.value);v?(l.tags.push(v),p.push(v.id)):p.push("invalid")}else t.name==="bucket_id"&&(l.bucketId=t.value)});const f=[...u].filter(t=>t.name!=="tag");p.forEach(t=>{f.push({name:"tag_id",op:"",value:t})}),i(f)}},document:W,variables:{type:_},appApi:!0}),{tags:g}};export{pe as a,ve as u};