import{S as T,i as S,s as z,a as q,b as u,c as j,d as f,n as N,e as b,f as k,g as P,h as R,l as F,t as $,j as L,k as w,m as K,o as O,p as y,q as C,r as M,I as U,u as V,v as W,B as X,w as A,x as Y,y as Z,z as ee,A as Q,C as E,D as te,E as ne,F as H,G as I}from"./index-8ceaf788.js";import{P as le,c as re,N as se}from"./Portal-e1d978fa.js";import{T as ae}from"./Tag-24fc776e.js";function oe(c){let e,n,t,l,o;return{c(){e=q("svg"),n=q("path"),t=q("path"),l=q("path"),o=q("path"),u(n,"stroke","none"),u(n,"d","M0 0h24v24H0z"),u(n,"fill","none"),u(t,"d","M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5"),u(l,"d","M16 19h6"),u(o,"d","M19 16v6"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"class","icon icon-tabler icon-tabler-folder-plus"),u(e,"width","24"),u(e,"height","24"),u(e,"viewBox","0 0 24 24"),u(e,"stroke-width","2"),u(e,"stroke","currentColor"),u(e,"fill","none"),u(e,"stroke-linecap","round"),u(e,"stroke-linejoin","round")},m(s,a){j(s,e,a),f(e,n),f(e,t),f(e,l),f(e,o)},p:N,i:N,o:N,d(s){s&&b(e)}}}class ce extends T{constructor(e){super(),S(this,e,null,oe,z,{})}}function x(c){let e,n;return e=new le({props:{$$slots:{default:[fe]},$$scope:{ctx:c}}}),{c(){y(e.$$.fragment)},m(t,l){C(e,t,l),n=!0},p(t,l){const o={};l&271&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function ue(c){let e,n;return e=new ae({}),{c(){y(e.$$.fragment)},m(t,l){C(e,t,l),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function ie(c){let e,n;return e=new ce({}),{c(){y(e.$$.fragment)},m(t,l){C(e,t,l),n=!0},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function fe(c){let e,n,t,l,o,s,a,r,i,d,_;function m(p){c[6](p)}let h={type:"text",placeholder:"Project name",error:c[1].name,$$slots:{default:[ue]},$$scope:{ctx:c}};return c[0].name!==void 0&&(h.value=c[0].name),o=new U({props:h}),V.push(()=>W(o,"value",m)),r=new X({props:{loading:c[3],text:"Create",$$slots:{default:[ie]},$$scope:{ctx:c}}}),{c(){e=k("div"),n=k("form"),t=k("span"),t.textContent="New project",l=P(),y(o.$$.fragment),a=P(),y(r.$$.fragment),u(t,"class","svelte-1uyxs2l"),u(n,"class","modal-content svelte-1uyxs2l"),u(e,"class","hidden svelte-1uyxs2l"),A(e,"open",c[2])},m(p,g){j(p,e,g),f(e,n),f(n,t),f(n,l),C(o,n,null),f(n,a),C(r,n,null),i=!0,d||(_=[F(n,"submit",c[5]),Y(re.call(null,e)),F(e,"click_outside",c[7])],d=!0)},p(p,g){const B={};g&2&&(B.error=p[1].name),g&256&&(B.$$scope={dirty:g,ctx:p}),!s&&g&1&&(s=!0,B.value=p[0].name,Z(()=>s=!1)),o.$set(B);const v={};g&8&&(v.loading=p[3]),g&256&&(v.$$scope={dirty:g,ctx:p}),r.$set(v),(!i||g&4)&&A(e,"open",p[2])},i(p){i||($(o.$$.fragment,p),$(r.$$.fragment,p),i=!0)},o(p){w(o.$$.fragment,p),w(r.$$.fragment,p),i=!1},d(p){p&&b(e),M(o),M(r),d=!1,ee(_)}}}function pe(c){let e,n,t,l,o,s,a=c[2]&&x(c);return{c(){e=k("button"),e.innerHTML="<span>Create project +</span>",n=P(),a&&a.c(),t=R(),u(e,"class","btn-secondary")},m(r,i){j(r,e,i),j(r,n,i),a&&a.m(r,i),j(r,t,i),l=!0,o||(s=F(e,"click",c[4]),o=!0)},p(r,[i]){r[2]?a?(a.p(r,i),i&4&&$(a,1)):(a=x(r),a.c(),$(a,1),a.m(t.parentNode,t)):a&&(L(),w(a,1,1,()=>{a=null}),K())},i(r){l||($(a),l=!0)},o(r){w(a),l=!1},d(r){r&&(b(e),b(n),b(t)),a&&a.d(r),o=!1,s()}}}function me(c,e,n){let t={name:""},l=O.make(t),o=!1,s=!1;async function a(){n(2,o=!0)}async function r(_){_.preventDefault(),n(3,s=!0);const m=await fetch("/api/projects",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});if(!m.ok){n(1,l=O.apply(l,await m.json())),n(3,s=!1);return}const{project:h}=await m.json();Q(`#/admin/project/${h.id}`),n(3,s=!1)}function i(_){c.$$.not_equal(t.name,_)&&(t.name=_,n(0,t))}return[t,l,o,s,a,r,i,()=>n(2,o=!1)]}class de extends T{constructor(e){super(),S(this,e,me,pe,z,{})}}function _e(c){let e,n,t;return{c(){e=q("svg"),n=q("path"),t=q("path"),u(n,"stroke","none"),u(n,"d","M0 0h24v24H0z"),u(n,"fill","none"),u(t,"d","M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"class","icon icon-tabler icon-tabler-folder"),u(e,"width","24"),u(e,"height","24"),u(e,"viewBox","0 0 24 24"),u(e,"stroke-width","2"),u(e,"stroke","currentColor"),u(e,"fill","none"),u(e,"stroke-linecap","round"),u(e,"stroke-linejoin","round")},m(l,o){j(l,e,o),f(e,n),f(e,t)},p:N,i:N,o:N,d(l){l&&b(e)}}}class $e extends T{constructor(e){super(),S(this,e,null,_e,z,{})}}function G(c,e,n){const t=c.slice();return t[2]=e[n],t}function J(c){let e,n,t,l,o=c[2].name+"",s,a,r,i=c[2].feature_count+"",d,_,m,h,p,g;t=new $e({});function B(){return c[1](c[2])}return{c(){e=k("button"),n=k("span"),y(t.$$.fragment),l=P(),s=H(o),a=P(),r=k("span"),d=H(i),_=H(" features"),m=P(),u(n,"class","svelte-e33twq"),u(r,"class","svelte-e33twq"),u(e,"class","project svelte-e33twq")},m(v,D){j(v,e,D),f(e,n),C(t,n,null),f(n,l),f(n,s),f(e,a),f(e,r),f(r,d),f(r,_),f(e,m),h=!0,p||(g=F(e,"click",B),p=!0)},p(v,D){c=v,(!h||D&1)&&o!==(o=c[2].name+"")&&I(s,o),(!h||D&1)&&i!==(i=c[2].feature_count+"")&&I(d,i)},i(v){h||($(t.$$.fragment,v),h=!0)},o(v){w(t.$$.fragment,v),h=!1},d(v){v&&b(e),M(t),p=!1,g()}}}function he(c){let e,n,t=E(c[0]),l=[];for(let s=0;s<t.length;s+=1)l[s]=J(G(c,t,s));const o=s=>w(l[s],1,1,()=>{l[s]=null});return{c(){e=k("div");for(let s=0;s<l.length;s+=1)l[s].c();u(e,"class","projects svelte-e33twq")},m(s,a){j(s,e,a);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null);n=!0},p(s,[a]){if(a&1){t=E(s[0]);let r;for(r=0;r<t.length;r+=1){const i=G(s,t,r);l[r]?(l[r].p(i,a),$(l[r],1)):(l[r]=J(i),l[r].c(),$(l[r],1),l[r].m(e,null))}for(L(),r=t.length;r<l.length;r+=1)o(r);K()}},i(s){if(!n){for(let a=0;a<t.length;a+=1)$(l[a]);n=!0}},o(s){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)w(l[a]);n=!1},d(s){s&&b(e),te(l,s)}}}function ge(c,e,n){let t=[];return ne(async()=>{const o=await fetch("/api/projects"),{projects:s}=await o.json();n(0,t=s)}),[t,o=>Q(`#/admin/project/${o.id}`)]}class ve extends T{constructor(e){super(),S(this,e,ge,he,z,{})}}function we(c){let e,n,t,l,o,s,a,r,i,d,_;return n=new se({}),r=new de({}),d=new ve({}),{c(){e=k("div"),y(n.$$.fragment),t=P(),l=k("div"),o=k("header"),s=k("h1"),s.textContent="Projects",a=P(),y(r.$$.fragment),i=P(),y(d.$$.fragment),u(o,"class","page-header"),u(l,"class","page")},m(m,h){j(m,e,h),C(n,e,null),f(e,t),f(e,l),f(l,o),f(o,s),f(o,a),C(r,o,null),f(l,i),C(d,l,null),_=!0},p:N,i(m){_||($(n.$$.fragment,m),$(r.$$.fragment,m),$(d.$$.fragment,m),_=!0)},o(m){w(n.$$.fragment,m),w(r.$$.fragment,m),w(d.$$.fragment,m),_=!1},d(m){m&&b(e),M(n),M(r),M(d)}}}class Pe extends T{constructor(e){super(),S(this,e,null,we,z,{})}}export{Pe as default};