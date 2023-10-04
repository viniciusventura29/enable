import{S as G,i as X,s as Q,f as d,g as k,h as ye,b as l,c as D,l as W,t as M,j as $e,k as T,m as be,e as O,o as pe,p as I,q as P,r as S,I as Ce,u as Me,v as Ne,B as Ae,F as B,w as K,d as a,x as Fe,y as Te,G as R,z as we,H as Be,n as L,a as C,J as ke,C as ae,D as je,E as Ee,K as de}from"./index-3c6817a0.js";import{P as qe,c as Ie,N as Pe}from"./Portal-0ebf484e.js";import{C as Se,B as De}from"./BackToProjects-cdbc550f.js";function me(r){let e,t;return e=new qe({props:{$$slots:{default:[ze]},$$scope:{ctx:r}}}),{c(){I(e.$$.fragment)},m(n,s){P(e,n,s),t=!0},p(n,s){const i={};s&2079&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){t||(M(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){S(e,n)}}}function Oe(r){let e,t;return e=new Be({props:{width:"32",height:"32"}}),{c(){I(e.$$.fragment)},m(n,s){P(e,n,s),t=!0},p:L,i(n){t||(M(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){S(e,n)}}}function ze(r){let e,t,n,s,i,c,o,f,u,$,j,g,b,_,p,v,y,N;function A(w){r[9](w)}let E={maxLength:"35",type:"text",placeholder:"Feature name",error:r[1].name,$$slots:{default:[Oe]},$$scope:{ctx:r}};return r[0].name!==void 0&&(E.value=r[0].name),i=new Ce({props:E}),Me.push(()=>Ne(i,"value",A)),p=new Ae({props:{text:"Create",loading:r[4]}}),{c(){e=d("div"),t=d("form"),n=d("span"),n.textContent="New feature",s=k(),I(i.$$.fragment),o=k(),f=d("p"),u=B("Feature identifier: "),$=d("strong"),j=B(r[2]),g=k(),b=d("p"),b.textContent="This is a unique identifier for this feature across all your projects.",_=k(),I(p.$$.fragment),l(n,"class","svelte-138efei"),l($,"class","svelte-138efei"),l(f,"class","svelte-138efei"),l(b,"class","help svelte-138efei"),l(t,"class","modal-content svelte-138efei"),l(e,"class","hidden svelte-138efei"),K(e,"open",r[3])},m(w,m){D(w,e,m),a(e,t),a(t,n),a(t,s),P(i,t,null),a(t,o),a(t,f),a(f,u),a(f,$),a($,j),a(t,g),a(t,b),a(t,_),P(p,t,null),v=!0,y||(N=[W(t,"submit",r[5]),Fe(Ie.call(null,e)),W(e,"click_outside",r[10])],y=!0)},p(w,m){const F={};m&2&&(F.error=w[1].name),m&2048&&(F.$$scope={dirty:m,ctx:w}),!c&&m&1&&(c=!0,F.value=w[0].name,Te(()=>c=!1)),i.$set(F),(!v||m&4)&&R(j,w[2]);const z={};m&16&&(z.loading=w[4]),p.$set(z),(!v||m&8)&&K(e,"open",w[3])},i(w){v||(M(i.$$.fragment,w),M(p.$$.fragment,w),v=!0)},o(w){T(i.$$.fragment,w),T(p.$$.fragment,w),v=!1},d(w){w&&O(e),S(i),S(p),y=!1,we(N)}}}function He(r){let e,t,n,s,i,c,o=r[3]&&me(r);return{c(){e=d("button"),e.innerHTML="<span>Feature</span>",t=k(),o&&o.c(),n=ye(),l(e,"class","btn-secondary")},m(f,u){D(f,e,u),D(f,t,u),o&&o.m(f,u),D(f,n,u),s=!0,i||(c=W(e,"click",r[8]),i=!0)},p(f,[u]){f[3]?o?(o.p(f,u),u&8&&M(o,1)):(o=me(f),o.c(),M(o,1),o.m(n.parentNode,n)):o&&($e(),T(o,1,1,()=>{o=null}),be())},i(f){s||(M(o),s=!0)},o(f){T(o),s=!1},d(f){f&&(O(e),O(t),O(n)),o&&o.d(f),i=!1,c()}}}function Le(r,e,t){let{projectId:n}=e,{projectName:s}=e,i={name:"",project_id:n},c=pe.make(i),o="",f=!1,u=!1;async function $(_){_.preventDefault(),t(4,u=!0);const p=await fetch("/api/features",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});if(!p.ok){t(1,c=pe.apply(c,await p.json())),t(4,u=!1);return}location.reload()}const j=()=>t(3,f=!0);function g(_){r.$$.not_equal(i.name,_)&&(i.name=_,t(0,i))}const b=()=>t(3,f=!1);return r.$$set=_=>{"projectId"in _&&t(6,n=_.projectId),"projectName"in _&&t(7,s=_.projectName)},r.$$.update=()=>{r.$$.dirty&129&&(i.name.length>0?t(2,o=`${s}_${i.name}`.toLowerCase().split(" ").join("_")):t(2,o=""))},[i,c,o,f,u,$,n,s,j,g,b]}class Je extends G{constructor(e){super(),X(this,e,Le,He,Q,{projectId:6,projectName:7})}}function Ke(r){let e,t,n,s,i,c;return{c(){e=C("svg"),t=C("path"),n=C("path"),s=C("path"),i=C("path"),c=C("path"),l(t,"stroke","none"),l(t,"d","M0 0h24v24H0z"),l(t,"fill","none"),l(n,"d","M4 13h5"),l(s,"d","M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"),l(i,"d","M20 8v8"),l(c,"d","M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"class","icon icon-tabler icon-tabler-api"),l(e,"width","24"),l(e,"height","24"),l(e,"viewBox","0 0 24 24"),l(e,"stroke-width","2"),l(e,"stroke","currentColor"),l(e,"fill","none"),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round")},m(o,f){D(o,e,f),a(e,t),a(e,n),a(e,s),a(e,i),a(e,c)},p:L,i:L,o:L,d(o){o&&O(e)}}}class Re extends G{constructor(e){super(),X(this,e,null,Ke,Q,{})}}function Ge(r){let e,t,n,s,i,c;return n=new Re({}),{c(){e=d("button"),t=d("span"),I(n.$$.fragment),l(t,"class","svelte-16ad7zl"),l(e,"class","btn-secondary svelte-16ad7zl"),K(e,"selected",r[0])},m(o,f){D(o,e,f),a(e,t),P(n,t,null),s=!0,i||(c=W(e,"click",r[1]),i=!0)},p(o,[f]){(!s||f&1)&&K(e,"selected",o[0])},i(o){s||(M(n.$$.fragment,o),s=!0)},o(o){T(n.$$.fragment,o),s=!1},d(o){o&&O(e),S(n),i=!1,c()}}}function Xe(r,e,t){let{selected:n=!1}=e;function s(i){ke.call(this,r,i)}return r.$$set=i=>{"selected"in i&&t(0,n=i.selected)},[n,s]}class Qe extends G{constructor(e){super(),X(this,e,Xe,Ge,Q,{selected:0})}}function Ue(r){let e,t,n,s,i,c,o,f,u,$,j,g,b,_,p,v,y,N,A;return{c(){e=d("div"),t=d("div"),n=d("span"),n.textContent='import { EnableClient } from "@enable/ts-sdk";',s=k(),i=d("span"),i.textContent=`export const features = new EnableClient(${`{ url: "${location.origin}", token: env.ENABLE_TOKEN }`});`,c=k(),o=d("span"),f=k(),u=d("span"),u.textContent="...",$=k(),j=d("span"),g=k(),b=d("span"),b.textContent='import { features } from "config";',_=k(),p=d("span"),v=B('const isActive = features.isActive("'),y=B(r[0]),N=B('"); // '),A=B(r[1]),l(t,"class","code svelte-1f8w8fv"),l(e,"class","api-type-container svelte-1f8w8fv")},m(E,w){D(E,e,w),a(e,t),a(t,n),a(t,s),a(t,i),a(t,c),a(t,o),a(t,f),a(t,u),a(t,$),a(t,j),a(t,g),a(t,b),a(t,_),a(t,p),a(p,v),a(p,y),a(p,N),a(p,A)},p(E,w){w&1&&R(y,E[0]),w&2&&R(A,E[1])},d(E){E&&O(e)}}}function Ve(r){let e,t,n,s,i=location.origin+"",c,o,f,u,$,j,g,b=JSON.stringify({active:r[1]},null,2)+"",_;return{c(){e=d("div"),t=d("div"),n=d("code"),s=B('curl -i -H "Authorization: Bearer ENABLE_TOKEN" -X GET '),c=B(i),o=B("/api/feature/"),f=B(r[0]),u=k(),$=d("span"),$.textContent="Response",j=k(),g=d("code"),_=B(b),l(n,"class","svelte-1f8w8fv"),l(t,"class","container svelte-1f8w8fv"),l($,"class","label svelte-1f8w8fv"),l(g,"class","svelte-1f8w8fv"),l(e,"class","api-type-container svelte-1f8w8fv")},m(p,v){D(p,e,v),a(e,t),a(t,n),a(n,s),a(n,c),a(n,o),a(n,f),a(e,u),a(e,$),a(e,j),a(e,g),a(g,_)},p(p,v){v&1&&R(f,p[0]),v&2&&b!==(b=JSON.stringify({active:p[1]},null,2)+"")&&R(_,b)},d(p){p&&O(e)}}}function We(r){let e,t,n,s,i,c,o,f,u,$,j,g;function b(v,y){if(v[2]==="rest")return Ve;if(v[2]==="ts-sdk")return Ue}let _=b(r),p=_&&_(r);return{c(){e=d("div"),t=d("div"),n=d("span"),s=B("REST API"),c=k(),o=d("span"),f=B("Typescript SDK"),$=k(),p&&p.c(),l(n,"role","tab"),l(n,"tabindex","0"),l(n,"aria-selected",i=r[2]==="rest"),l(n,"class","svelte-1f8w8fv"),l(o,"role","tab"),l(o,"tabindex","0"),l(o,"aria-selected",u=r[2]==="ts-sdk"),l(o,"class","svelte-1f8w8fv"),l(t,"class","tab-controls svelte-1f8w8fv"),l(e,"class","defs svelte-1f8w8fv")},m(v,y){D(v,e,y),a(e,t),a(t,n),a(n,s),a(t,c),a(t,o),a(o,f),a(e,$),p&&p.m(e,null),j||(g=[W(n,"click",r[3]),W(o,"click",r[4])],j=!0)},p(v,[y]){y&4&&i!==(i=v[2]==="rest")&&l(n,"aria-selected",i),y&4&&u!==(u=v[2]==="ts-sdk")&&l(o,"aria-selected",u),_===(_=b(v))&&p?p.p(v,y):(p&&p.d(1),p=_&&_(v),p&&(p.c(),p.m(e,null)))},i:L,o:L,d(v){v&&O(e),p&&p.d(),j=!1,we(g)}}}function Ye(r,e,t){let{name:n=""}=e,{active:s=!1}=e,i="rest";const c=()=>t(2,i="rest"),o=()=>t(2,i="ts-sdk");return r.$$set=f=>{"name"in f&&t(0,n=f.name),"active"in f&&t(1,s=f.active)},[n,s,i,c,o]}class Ze extends G{constructor(e){super(),X(this,e,Ye,We,Q,{name:0,active:1})}}function xe(r){let e,t,n,s,i,c=r[0].feature_id+"",o,f,u,$,j,g=r[0].active?"Active":"Disabled",b,_,p,v,y,N,A,E,w;return n=new Se({props:{text:r[0].feature_id}}),u=new Qe({props:{selected:r[1]}}),u.$on("click",r[3]),N=new Ze({props:{name:r[0].feature_id,active:r[0].active}}),{c(){e=d("div"),t=d("div"),I(n.$$.fragment),s=k(),i=d("span"),o=B(c),f=k(),I(u.$$.fragment),$=k(),j=d("span"),b=B(g),_=k(),p=d("button"),p.innerHTML='<div class="ball svelte-piq3xe"></div>',v=k(),y=d("div"),I(N.$$.fragment),l(i,"class","name svelte-piq3xe"),l(j,"class","tag svelte-piq3xe"),K(j,"tag-active",r[0].active),l(p,"class","toggle svelte-piq3xe"),K(p,"active",r[0].active),l(t,"class","feature svelte-piq3xe"),l(y,"class","no-h svelte-piq3xe"),K(y,"show",r[1]),l(e,"class","feature-container svelte-piq3xe")},m(m,F){D(m,e,F),a(e,t),P(n,t,null),a(t,s),a(t,i),a(i,o),a(t,f),P(u,t,null),a(t,$),a(t,j),a(j,b),a(t,_),a(t,p),a(e,v),a(e,y),P(N,y,null),A=!0,E||(w=W(p,"click",r[2]),E=!0)},p(m,[F]){const z={};F&1&&(z.text=m[0].feature_id),n.$set(z),(!A||F&1)&&c!==(c=m[0].feature_id+"")&&R(o,c);const Y={};F&2&&(Y.selected=m[1]),u.$set(Y),(!A||F&1)&&g!==(g=m[0].active?"Active":"Disabled")&&R(b,g),(!A||F&1)&&K(j,"tag-active",m[0].active),(!A||F&1)&&K(p,"active",m[0].active);const J={};F&1&&(J.name=m[0].feature_id),F&1&&(J.active=m[0].active),N.$set(J),(!A||F&2)&&K(y,"show",m[1])},i(m){A||(M(n.$$.fragment,m),M(u.$$.fragment,m),M(N.$$.fragment,m),A=!0)},o(m){T(n.$$.fragment,m),T(u.$$.fragment,m),T(N.$$.fragment,m),A=!1},d(m){m&&O(e),S(n),S(u),S(N),E=!1,w()}}}function et(r,e,t){let{feature:n}=e,s=!1;function i(o){ke.call(this,r,o)}const c=()=>t(1,s=!s);return r.$$set=o=>{"feature"in o&&t(0,n=o.feature)},[n,s,i,c]}class tt extends G{constructor(e){super(),X(this,e,et,xe,Q,{feature:0})}}function ve(r,e,t){const n=r.slice();return n[3]=e[t],n}function _e(r){let e,t;function n(){return r[2](r[3])}return e=new tt({props:{feature:r[3]}}),e.$on("click",n),{c(){I(e.$$.fragment)},m(s,i){P(e,s,i),t=!0},p(s,i){r=s;const c={};i&1&&(c.feature=r[3]),e.$set(c)},i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){T(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function nt(r){let e,t,n=ae(r[0]),s=[];for(let c=0;c<n.length;c+=1)s[c]=_e(ve(r,n,c));const i=c=>T(s[c],1,1,()=>{s[c]=null});return{c(){e=d("div");for(let c=0;c<s.length;c+=1)s[c].c();l(e,"class","feature-list svelte-1oo10f7")},m(c,o){D(c,e,o);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(e,null);t=!0},p(c,[o]){if(o&3){n=ae(c[0]);let f;for(f=0;f<n.length;f+=1){const u=ve(c,n,f);s[f]?(s[f].p(u,o),M(s[f],1)):(s[f]=_e(u),s[f].c(),M(s[f],1),s[f].m(e,null))}for($e(),f=n.length;f<s.length;f+=1)i(f);be()}},i(c){if(!t){for(let o=0;o<n.length;o+=1)M(s[o]);t=!0}},o(c){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)T(s[o]);t=!1},d(c){c&&O(e),je(s,c)}}}function st(r,e,t){let{features:n=[]}=e;async function s(c){(await fetch("/api/features/toggle",{method:"POST",body:JSON.stringify({id:c}),headers:{"Content-Type":"application/json"}})).ok&&t(0,n=n.map(f=>(f.id==c&&(f.active=!f.active),f)))}const i=c=>s(c.id);return r.$$set=c=>{"features"in c&&t(0,n=c.features)},[n,s,i]}class at extends G{constructor(e){super(),X(this,e,st,nt,Q,{features:0})}}function lt(r){let e,t,n,s,i,c,o,f,u,$,j;return{c(){e=C("svg"),t=C("path"),n=C("path"),s=C("path"),i=C("path"),c=C("path"),o=C("path"),f=C("path"),u=C("path"),$=C("path"),j=C("path"),l(t,"stroke","none"),l(t,"d","M0 0h24v24H0z"),l(t,"fill","none"),l(n,"d","M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"),l(s,"d","M4 6l8 0"),l(i,"d","M16 6l4 0"),l(c,"d","M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"),l(o,"d","M4 12l2 0"),l(f,"d","M10 12l10 0"),l(u,"d","M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"),l($,"d","M4 18l11 0"),l(j,"d","M19 18l1 0"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"class","icon icon-tabler icon-tabler-adjustments-horizontal"),l(e,"width","24"),l(e,"height","24"),l(e,"viewBox","0 0 24 24"),l(e,"stroke-width","2"),l(e,"stroke","currentColor"),l(e,"fill","none"),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round")},m(g,b){D(g,e,b),a(e,t),a(e,n),a(e,s),a(e,i),a(e,c),a(e,o),a(e,f),a(e,u),a(e,$),a(e,j)},p:L,i:L,o:L,d(g){g&&O(e)}}}class rt extends G{constructor(e){super(),X(this,e,null,lt,Q,{})}}function it(r){let e,t,n,s;return{c(){e=C("svg"),t=C("path"),n=C("path"),s=C("path"),l(t,"stroke","none"),l(t,"d","M0 0h24v24H0z"),l(t,"fill","none"),l(n,"d","M12 5l0 14"),l(s,"d","M5 12l14 0"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"class","icon icon-tabler icon-tabler-plus"),l(e,"width","24"),l(e,"height","24"),l(e,"viewBox","0 0 24 24"),l(e,"stroke-width","2"),l(e,"stroke","currentColor"),l(e,"fill","none"),l(e,"stroke-linecap","round"),l(e,"stroke-linejoin","round")},m(i,c){D(i,e,c),a(e,t),a(e,n),a(e,s)},p:L,i:L,o:L,d(i){i&&O(e)}}}class ot extends G{constructor(e){super(),X(this,e,null,it,Q,{})}}function he(r,e,t){const n=r.slice();return n[5]=e[t],n}function ge(r){let e,t=r[5].name+"",n,s;return{c(){e=d("option"),n=B(t),e.__value=s=r[5].id,de(e,e.__value)},m(i,c){D(i,e,c),a(e,n)},p(i,c){c&2&&t!==(t=i[5].name+"")&&R(n,t),c&2&&s!==(s=i[5].id)&&(e.__value=s,de(e,e.__value))},d(i){i&&O(e)}}}function ct(r){let e,t,n,s,i,c,o,f,u=r[1].project.name+"",$,j,g,b,_,p,v,y,N,A,E,w,m,F,z,Y,J,re,ee,Z,ie,se,oe,x,ne,le,ce;t=new Pe({}),i=new De({});let te=ae(r[1].envs),q=[];for(let h=0;h<te.length;h+=1)q[h]=ge(he(r,te,h));return m=new rt({}),J=new ot({}),Z=new Je({props:{projectId:r[0].id,projectName:r[1].project.name}}),x=new at({props:{features:r[2]}}),{c(){e=d("div"),I(t.$$.fragment),n=k(),s=d("div"),I(i.$$.fragment),c=k(),o=d("header"),f=d("h1"),$=B(u),j=k(),g=d("div"),b=d("div"),_=d("span"),_.textContent="Change environment",p=k(),v=d("select");for(let h=0;h<q.length;h+=1)q[h].c();y=k(),N=d("div"),A=d("span"),A.textContent="Project settings",E=k(),w=d("button"),I(m.$$.fragment),F=k(),z=d("div"),Y=d("button"),I(J.$$.fragment),re=k(),ee=d("div"),I(Z.$$.fragment),ie=k(),se=d("button"),se.innerHTML="<span>Environment</span>",oe=k(),I(x.$$.fragment),l(_,"class","svelte-1yb8r5u"),l(b,"class","tooltip svelte-1yb8r5u"),l(A,"class","svelte-1yb8r5u"),l(w,"class","btn-secondary"),l(N,"class","tooltip svelte-1yb8r5u"),l(Y,"class","btn-secondary"),l(se,"class","btn-secondary"),l(ee,"class","new-options svelte-1yb8r5u"),l(z,"class","new-container svelte-1yb8r5u"),l(g,"class","project-actions svelte-1yb8r5u"),l(o,"class","page-header"),l(s,"class","page")},m(h,U){D(h,e,U),P(t,e,null),a(e,n),a(e,s),P(i,s,null),a(s,c),a(s,o),a(o,f),a(f,$),a(o,j),a(o,g),a(g,b),a(b,_),a(b,p),a(b,v);for(let V=0;V<q.length;V+=1)q[V]&&q[V].m(v,null);a(g,y),a(g,N),a(N,A),a(N,E),a(N,w),P(m,w,null),a(g,F),a(g,z),a(z,Y),P(J,Y,null),a(z,re),a(z,ee),P(Z,ee,null),a(ee,ie),a(ee,se),a(s,oe),P(x,s,null),ne=!0,le||(ce=W(v,"change",r[3]),le=!0)},p(h,[U]){if((!ne||U&2)&&u!==(u=h[1].project.name+"")&&R($,u),U&2){te=ae(h[1].envs);let H;for(H=0;H<te.length;H+=1){const ue=he(h,te,H);q[H]?q[H].p(ue,U):(q[H]=ge(ue),q[H].c(),q[H].m(v,null))}for(;H<q.length;H+=1)q[H].d(1);q.length=te.length}const V={};U&1&&(V.projectId=h[0].id),U&2&&(V.projectName=h[1].project.name),Z.$set(V);const fe={};U&4&&(fe.features=h[2]),x.$set(fe)},i(h){ne||(M(t.$$.fragment,h),M(i.$$.fragment,h),M(m.$$.fragment,h),M(J.$$.fragment,h),M(Z.$$.fragment,h),M(x.$$.fragment,h),ne=!0)},o(h){T(t.$$.fragment,h),T(i.$$.fragment,h),T(m.$$.fragment,h),T(J.$$.fragment,h),T(Z.$$.fragment,h),T(x.$$.fragment,h),ne=!1},d(h){h&&O(e),S(t),S(i),je(q,h),S(m),S(J),S(Z),S(x),le=!1,ce()}}}function ft(r,e,t){let{params:n={id:""}}=e,s={project:{name:""},envs:[]},i=[],c=null;Ee(async()=>{const f=await fetch(`/api/projects/meta/${n.id}`);t(1,s=await f.json()),c=s.envs[0];const u=c==null?void 0:c.id,$=await fetch(`/api/features/${u}`);t(2,i=(await $.json()).features)});async function o(f){if(c=s.envs.find($=>$.id===f.target.value),!c)return;const u=await fetch(`/api/features/${c.id}`);t(2,i=(await u.json()).features)}return r.$$set=f=>{"params"in f&&t(0,n=f.params)},[n,s,i,o]}class mt extends G{constructor(e){super(),X(this,e,ft,ct,Q,{params:0})}}export{mt as default};
