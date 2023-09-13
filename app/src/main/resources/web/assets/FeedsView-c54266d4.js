import{b as _e,u as pe,_ as fe,a as he}from"./list-3f4b71c4.js";import{d as me,p as ge,r,u as ve,C as ye,n as ke,D as be,L as k,ce as $e,H as Ce,t as q,cf as we,i as Te,ac as Fe,bC as O,E as Ee,G as De,cg as Se,J as Ve,K as Ie,M as Ae,a3 as Qe,ch as qe,N as Be,o as a,c as l,e as t,x as p,j as d,F as V,O as b,w as f,l as I,g as c,y as Le,P as Me,A as W,z as Ne,at as Ue,R as Ge,f as Re,S as ze,T as He,X,a7 as Ke,a8 as Pe,Y as Ye,B as Z,U as x,V as je,W as Je,m as Oe,a9 as We,Z as Xe,$ as Ze,a0 as xe}from"./index-df35a132.js";import{_ as et}from"./Breadcrumb-120bdd32.js";import{n as tt}from"./list-6498ebd9.js";import{a as st}from"./tags-ecacebdb.js";import"./vee-validate.esm-aa1410cb.js";const nt={class:"v-toolbar"},ot=["disabled","onClick"],at={class:"filters"},lt=["label"],dt={class:"form-label"},it={type:"filter"},ct=["label","selected","onClick"],ut={class:"buttons"},rt=["onClick"],_t={class:"table-responsive"},pt={class:"table"},ft=["checked"],ht=t("th",null,"ID",-1),mt=t("th",null,null,-1),gt=t("th",null,null,-1),vt=["onClick"],yt=["checked"],kt=["src"],bt=["href","onClick"],$t={class:"nowrap"},Ct={class:"action-btns"},wt=["onClick"],Tt=["onClick"],Ft={class:"nowrap"},Et={class:"nowrap"},Dt={key:0},St={colspan:"8"},Vt={class:"no-data-placeholder"},m="FEED_ENTRY",A=50,Ut=me({__name:"FeedsView",setup(It){var j,J;const B=ge(),h=r([]),L=r(),{t:Q}=ve(),i=ye({text:"",feeds:[],tags:[]}),M=ke().query,F=r(parseInt(((j=M.page)==null?void 0:j.toString())??"1")),E=r(0),$=r([]),ee=r([]),g=r(be(((J=M.q)==null?void 0:J.toString())??"")),N=r(""),{addToTags:U}=st(m,h,$),{deleteItems:G}=_e($e,()=>{z(),h.value.some(e=>e.tags.length)&&k.emit("refetch_tags",m)},h),D=r(!1),{selectAll:te,toggleSelect:R,checked:se}=pe(h),{loading:ne,load:oe,refetch:z}=Ce({handle:(e,n)=>{n?q(Q(n),"error"):e&&(h.value=e.feedEntries.map(_=>({..._,checked:!1})),E.value=e.feedEntryCount)},document:we,variables:()=>({offset:(F.value-1)*A,limit:A,query:N.value}),appApi:!0});function ae(e){X(Pe,{id:e.id,name:e.title,gql:Ke`
      mutation deleteFeedEntry($id: ID!) {
        deleteFeedEntries(ids: [$id])
      }
    `,appApi:!0,typeName:"FeedEntry",done:()=>{e.tags.length&&k.emit("refetch_tags",m)}})}Te({handle:async(e,n)=>{if(n)q(Q(n),"error");else if(e){$.value=e.tags,ee.value=e.feeds;const _=Fe(g.value);i.tags=[];const v=[],y=[];_.forEach(o=>{if(o.name==="text")i.text=o.value;else if(o.name==="tag"){const u=e.tags.find(w=>O(w.name)===o.value);u?(i.tags.push(u),v.push(u.id)):v.push("invalid")}else if(o.name==="feed"){const u=e.feeds.find(w=>O(w.name)===o.value);u?(i.feeds.push(u),y.push(u.id)):y.push("invalid")}});const C=[..._].filter(o=>o.name!=="tag"&&o.name!=="feed");v.forEach(o=>{C.push({name:"tag_id",op:"",value:o})}),y.forEach(o=>{C.push({name:"feed_id",op:"",value:o})}),N.value=Ee(C),await De(),oe()}},document:Se,variables:{type:m},appApi:!0});function le(e){X(Ye,{tagType:m,tags:$.value,item:{key:e.id,title:"",size:0},selected:$.value.filter(n=>e.tags.some(_=>_.id===n.id))})}Ve(F,e=>{Z(B,`/feeds?page=${e}&q=${x(g.value)}`)});function de(e){i.tags.includes(e)?je(i.tags,n=>n.id===e.id):i.tags.push(e)}function ie(){g.value=Je(i),H(),L.value.dismiss()}function H(){Z(B,`/feeds?q=${x(g.value)}`)}const K=e=>{e===m&&z()},P=e=>{D.value=!1,q(e.error||Q("feeds_synced"))};Ie(()=>{k.on("refetch_by_tag_type",K),k.on("feeds_fetched",P)}),Ae(()=>{k.off("refetch_by_tag_type",K),k.off("feeds_fetched",P)});function ce(e){Oe.push(Y(e))}function Y(e){return`/feeds/${e.feedId}/entries/${e.id}`}const{mutate:ue}=Qe({document:qe,appApi:!0});function re(){D.value=!0,ue({id:""})}return(e,n)=>{const _=et,v=We,y=Xe,C=fe,o=Ze,u=xe,w=he,T=Be("tooltip");return a(),l(V,null,[t("div",nt,[p(_,{current:()=>`${e.$t("page_title.feeds")} (${E.value})`},null,8,["current"]),d(se)?(a(),l(V,{key:0},[b((a(),l("md-icon-button",{onClick:n[0]||(n[0]=f((...s)=>d(G)&&d(G)(...s),["stop"]))},[p(v)])),[[T,e.$t("delete")]]),b((a(),l("md-icon-button",{onClick:n[1]||(n[1]=f((...s)=>d(U)&&d(U)(...s),["stop"]))},[p(y)])),[[T,e.$t("add_to_tags")]])],64)):I("",!0),t("md-outlined-button",{disabled:D.value,onClick:f(re,["prevent"])},c(D.value?e.$t("syncing"):e.$t("sync_feeds")),9,ot),p(C,{ref_key:"searchInputRef",ref:L,modelValue:g.value,"onUpdate:modelValue":n[3]||(n[3]=s=>g.value=s),search:H},{filters:Le(()=>[t("div",at,[b(t("md-outlined-text-field",{label:e.$t("keywords"),"onUpdate:modelValue":n[2]||(n[2]=s=>i.text=s),"keyup.enter":"applyAndDoSearch"},null,8,lt),[[Me,i.text]]),t("label",dt,c(e.$t("tags")),1),t("md-chip-set",it,[(a(!0),l(V,null,W($.value,s=>(a(),l("md-filter-chip",{key:s.id,label:s.name,selected:i.tags.includes(s),onClick:S=>de(s)},null,8,ct))),128))]),t("div",ut,[t("md-filled-button",{onClick:f(ie,["stop"])},c(e.$t("search")),9,rt)])])]),_:1},8,["modelValue"])]),t("div",_t,[t("table",pt,[t("thead",null,[t("tr",null,[t("th",null,[t("md-checkbox",{"touch-target":"wrapper",onChange:n[4]||(n[4]=(...s)=>d(R)&&d(R)(...s)),checked:d(te)},null,40,ft)]),ht,mt,t("th",null,c(e.$t("title")),1),gt,t("th",null,c(e.$t("source")),1),t("th",null,c(e.$t("tags")),1),t("th",null,c(e.$t("published_at")),1)])]),t("tbody",null,[(a(!0),l(V,null,W(h.value,s=>(a(),l("tr",{key:s.id,class:Ne({selected:s.checked}),onClick:f(S=>s.checked=!s.checked,["stop"])},[t("td",null,[t("md-checkbox",{"touch-target":"wrapper",checked:s.checked},null,8,yt)]),t("td",null,[p(o,{id:s.id,raw:s},null,8,["id","raw"])]),t("td",null,[s.image?(a(),l("img",{key:0,src:d(Ue)(s.image)+"&w=300&h=300",width:"50",height:"50"},null,8,kt)):I("",!0)]),t("td",null,[t("a",{href:Y(s),onClick:f(S=>ce(s),["prevent"])},c(s.title||e.$t("no_content")),9,bt)]),t("td",$t,[t("div",Ct,[b((a(),l("md-icon-button",{onClick:f(S=>ae(s),["stop"])},[p(v)],8,wt)),[[T,e.$t("delete")]]),b((a(),l("md-icon-button",{onClick:f(S=>le(s),["stop"])},[p(y)],8,Tt)),[[T,e.$t("add_to_tags")]])])]),t("td",Ft,c(s.author),1),t("td",null,[p(u,{tags:s.tags,tagType:m},null,8,["tags"])]),t("td",Et,[b((a(),l("span",null,[Re(c(d(ze)(s.publishedAt)),1)])),[[T,d(Ge)(s.publishedAt)]])])],10,vt))),128))]),h.value.length?I("",!0):(a(),l("tfoot",Dt,[t("tr",null,[t("td",St,[t("div",Vt,c(e.$t(d(tt)(d(ne)))),1)])])]))])]),E.value>A?(a(),He(w,{key:0,modelValue:F.value,"onUpdate:modelValue":n[5]||(n[5]=s=>F.value=s),total:E.value,limit:A},null,8,["modelValue","total"])):I("",!0)],64)}}});export{Ut as default};