import{S as q,i as z,s as D,a as N,b as i,c as j,d as f,n as T,e as b,f as g,g as P,h as V,l as H,t as $,j as Q,k as v,m as R,o as L,p as y,q as C,r as M,I as W,u as X,v as Y,B as Z,w as O,x as ee,y as te,z as ne,A as U,C as x,D as re,E as le,F as A,G as E}from"./index-5b9bd855.js";import{P as se,c as ae,N as oe}from"./Portal-6961e4b0.js";import{T as ce}from"./Tag-3ebaae4a.js";function ie(a){let e,n,t,r,c;return{c(){e=N("svg"),n=N("path"),t=N("path"),r=N("path"),c=N("path"),i(n,"stroke","none"),i(n,"d","M0 0h24v24H0z"),i(n,"fill","none"),i(t,"d","M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5"),i(r,"d","M16 19h6"),i(c,"d","M19 16v6"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"class","icon icon-tabler icon-tabler-folder-plus"),i(e,"width","24"),i(e,"height","24"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","2"),i(e,"stroke","currentColor"),i(e,"fill","none"),i(e,"stroke-linecap","round"),i(e,"stroke-linejoin","round")},m(s,o){j(s,e,o),f(e,n),f(e,t),f(e,r),f(e,c)},p:T,i:T,o:T,d(s){s&&b(e)}}}class ue extends q{constructor(e){super(),z(this,e,null,ie,D,{})}}function I(a){let e,n;return e=new se({props:{$$slots:{default:[me]},$$scope:{ctx:a}}}),{c(){y(e.$$.fragment)},m(t,r){C(e,t,r),n=!0},p(t,r){const c={};r&271&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function fe(a){let e,n;return e=new ce({}),{c(){y(e.$$.fragment)},m(t,r){C(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function pe(a){let e,n;return e=new ue({}),{c(){y(e.$$.fragment)},m(t,r){C(e,t,r),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function me(a){let e,n,t,r,c,s,o,l,p,_,d;function m(u){a[6](u)}let w={maxLength:"35",type:"text",placeholder:"Project name",error:a[1].name,$$slots:{default:[fe]},$$scope:{ctx:a}};return a[0].name!==void 0&&(w.value=a[0].name),c=new W({props:w}),X.push(()=>Y(c,"value",m)),l=new Z({props:{loading:a[3],text:"Create",$$slots:{default:[pe]},$$scope:{ctx:a}}}),{c(){e=g("div"),n=g("form"),t=g("span"),t.textContent="New project",r=P(),y(c.$$.fragment),o=P(),y(l.$$.fragment),i(t,"class","svelte-1uyxs2l"),i(n,"class","modal-content svelte-1uyxs2l"),i(e,"class","hidden svelte-1uyxs2l"),O(e,"open",a[2])},m(u,h){j(u,e,h),f(e,n),f(n,t),f(n,r),C(c,n,null),f(n,o),C(l,n,null),p=!0,_||(d=[H(n,"submit",a[5]),ee(ae.call(null,e)),H(e,"click_outside",a[7])],_=!0)},p(u,h){const B={};h&2&&(B.error=u[1].name),h&256&&(B.$$scope={dirty:h,ctx:u}),!s&&h&1&&(s=!0,B.value=u[0].name,te(()=>s=!1)),c.$set(B);const S={};h&8&&(S.loading=u[3]),h&256&&(S.$$scope={dirty:h,ctx:u}),l.$set(S),(!p||h&4)&&O(e,"open",u[2])},i(u){p||($(c.$$.fragment,u),$(l.$$.fragment,u),p=!0)},o(u){v(c.$$.fragment,u),v(l.$$.fragment,u),p=!1},d(u){u&&b(e),M(c),M(l),_=!1,ne(d)}}}function de(a){let e,n,t,r,c,s,o=a[2]&&I(a);return{c(){e=g("button"),e.innerHTML="<span>Create project +</span>",n=P(),o&&o.c(),t=V(),i(e,"class","btn-secondary")},m(l,p){j(l,e,p),j(l,n,p),o&&o.m(l,p),j(l,t,p),r=!0,c||(s=H(e,"click",a[4]),c=!0)},p(l,[p]){l[2]?o?(o.p(l,p),p&4&&$(o,1)):(o=I(l),o.c(),$(o,1),o.m(t.parentNode,t)):o&&(Q(),v(o,1,1,()=>{o=null}),R())},i(l){r||($(o),r=!0)},o(l){v(o),r=!1},d(l){l&&(b(e),b(n),b(t)),o&&o.d(l),c=!1,s()}}}function _e(a,e,n){let t={name:""},r=L.make(t),c=!1,s=!1;async function o(){n(2,c=!0)}async function l(d){d.preventDefault(),n(3,s=!0);const m=await fetch("/api/projects",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(!m.ok){n(1,r=L.apply(r,await m.json())),n(3,s=!1);return}const{project:w}=await m.json();U(`#/admin/project/${w.id}`),n(3,s=!1)}function p(d){a.$$.not_equal(t.name,d)&&(t.name=d,n(0,t))}return[t,r,c,s,o,l,p,()=>n(2,c=!1)]}class $e extends q{constructor(e){super(),z(this,e,_e,de,D,{})}}function he(a){let e,n,t;return{c(){e=N("svg"),n=N("path"),t=N("path"),i(n,"stroke","none"),i(n,"d","M0 0h24v24H0z"),i(n,"fill","none"),i(t,"d","M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"class","icon icon-tabler icon-tabler-folder"),i(e,"width","24"),i(e,"height","24"),i(e,"viewBox","0 0 24 24"),i(e,"stroke-width","2"),i(e,"stroke","currentColor"),i(e,"fill","none"),i(e,"stroke-linecap","round"),i(e,"stroke-linejoin","round")},m(r,c){j(r,e,c),f(e,n),f(e,t)},p:T,i:T,o:T,d(r){r&&b(e)}}}class ge extends q{constructor(e){super(),z(this,e,null,he,D,{})}}function G(a,e,n){const t=a.slice();return t[2]=e[n],t}function J(a){let e,n,t,r,c,s,o=a[2].name+"",l,p,_,d=K(a[2].feature_count)+"",m,w,u,h,B;r=new ge({});function S(){return a[1](a[2])}return{c(){e=g("button"),n=g("span"),t=g("span"),y(r.$$.fragment),c=P(),s=g("h4"),l=A(o),p=P(),_=g("span"),m=A(d),w=P(),i(s,"class","svelte-18gi6rw"),i(n,"class","title svelte-18gi6rw"),i(_,"class","label svelte-18gi6rw"),i(e,"class","project svelte-18gi6rw")},m(k,F){j(k,e,F),f(e,n),f(n,t),C(r,t,null),f(n,c),f(n,s),f(s,l),f(e,p),f(e,_),f(_,m),f(e,w),u=!0,h||(B=H(e,"click",S),h=!0)},p(k,F){a=k,(!u||F&1)&&o!==(o=a[2].name+"")&&E(l,o),(!u||F&1)&&d!==(d=K(a[2].feature_count)+"")&&E(m,d)},i(k){u||($(r.$$.fragment,k),u=!0)},o(k){v(r.$$.fragment,k),u=!1},d(k){k&&b(e),M(r),h=!1,B()}}}function ve(a){let e,n,t=x(a[0]),r=[];for(let s=0;s<t.length;s+=1)r[s]=J(G(a,t,s));const c=s=>v(r[s],1,1,()=>{r[s]=null});return{c(){e=g("div");for(let s=0;s<r.length;s+=1)r[s].c();i(e,"class","projects svelte-18gi6rw")},m(s,o){j(s,e,o);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);n=!0},p(s,[o]){if(o&1){t=x(s[0]);let l;for(l=0;l<t.length;l+=1){const p=G(s,t,l);r[l]?(r[l].p(p,o),$(r[l],1)):(r[l]=J(p),r[l].c(),$(r[l],1),r[l].m(e,null))}for(Q(),l=t.length;l<r.length;l+=1)c(l);R()}},i(s){if(!n){for(let o=0;o<t.length;o+=1)$(r[o]);n=!0}},o(s){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)v(r[o]);n=!1},d(s){s&&b(e),re(r,s)}}}function K(a){return a===1?"1 feature":a===0?"no features":`${a} features`}function we(a,e,n){let t=[];return le(async()=>{const c=await fetch("/api/projects"),{projects:s}=await c.json();n(0,t=s)}),[t,c=>U(`#/admin/project/${c.id}`)]}class ke extends q{constructor(e){super(),z(this,e,we,ve,D,{})}}function je(a){let e,n,t,r,c,s,o,l,p,_,d;return n=new oe({}),l=new $e({}),_=new ke({}),{c(){e=g("div"),y(n.$$.fragment),t=P(),r=g("div"),c=g("header"),s=g("h1"),s.textContent="Projects",o=P(),y(l.$$.fragment),p=P(),y(_.$$.fragment),i(c,"class","page-header"),i(r,"class","page")},m(m,w){j(m,e,w),C(n,e,null),f(e,t),f(e,r),f(r,c),f(c,s),f(c,o),C(l,c,null),f(r,p),C(_,r,null),d=!0},p:T,i(m){d||($(n.$$.fragment,m),$(l.$$.fragment,m),$(_.$$.fragment,m),d=!0)},o(m){v(n.$$.fragment,m),v(l.$$.fragment,m),v(_.$$.fragment,m),d=!1},d(m){m&&b(e),M(n),M(l),M(_)}}}class Ce extends q{constructor(e){super(),z(this,e,null,je,D,{})}}export{Ce as default};