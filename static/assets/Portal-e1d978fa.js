import{S as C,i as E,s as b,f as p,F as L,g as v,b as d,w as k,M as O,c as $,d as _,l as S,G as j,j as z,k as h,n as q,m as D,t as g,e as y,E as M,x as F,N as G,O as H,Q,z as R,H as T,p as w,q as N,r as U,R as V,T as W,U as A,V as B,W as I,u as J}from"./index-8ceaf788.js";function K(n){const e=t=>{n&&!n.contains(t.target)&&!t.defaultPrevented&&n.dispatchEvent(new CustomEvent("click_outside",n))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function P(n){let e,t,a,r,l,s,o,c,u,f;return{c(){e=p("div"),t=p("span"),a=L(n[0]),r=v(),l=p("a"),l.textContent="Settings",s=v(),o=p("a"),o.textContent="Logout",d(t,"class","svelte-1o88q56"),d(l,"href","#/admin/settings"),d(l,"class","link hover svelte-1o88q56"),d(o,"href","/api/auth/logout"),d(o,"class","link hover svelte-1o88q56"),d(e,"class","hidden svelte-1o88q56"),k(e,"open",n[1])},m(i,m){$(i,e,m),_(e,t),_(t,a),_(e,r),_(e,l),_(e,s),_(e,o),u||(f=[F(K.call(null,e)),S(e,"click_outside",n[3])],u=!0)},p(i,m){m&1&&j(a,i[0]),m&2&&k(e,"open",i[1])},i(i){i&&(c||G(()=>{c=H(e,Q,{y:5}),c.start()}))},o:q,d(i){i&&y(e),u=!1,R(f)}}}function X(n){let e,t,a=(n[0].at(0)??" ").toUpperCase()+"",r,l,s,o=n[1],c,u,f=P(n);return{c(){e=p("div"),t=p("button"),r=L(a),l=v(),s=p("div"),f.c(),d(t,"class","user-button svelte-1o88q56"),k(t,"modal-open",n[1]),O(s,"position","relative")},m(i,m){$(i,e,m),_(e,t),_(t,r),_(e,l),_(e,s),f.m(s,null),c||(u=S(t,"click",n[2]),c=!0)},p(i,[m]){m&1&&a!==(a=(i[0].at(0)??" ").toUpperCase()+"")&&j(r,a),m&2&&k(t,"modal-open",i[1]),m&2&&b(o,o=i[1])?(z(),h(f,1,1,q),D(),f=P(i),f.c(),g(f,1),f.m(s,null)):f.p(i,m)},i(i){g(f)},o(i){h(f)},d(i){i&&y(e),f.d(i),c=!1,u()}}}function Y(n,e,t){let a="",r=!1;return M(async()=>{const o=await fetch("/api/auth/me"),{email:c}=await o.json();t(0,a=c)}),[a,r,()=>t(1,r=!r),()=>t(1,r=!1)]}class Z extends C{constructor(e){super(),E(this,e,Y,X,b,{})}}function x(n){let e,t,a,r,l,s,o,c;return a=new T({props:{width:"32",height:"32"}}),o=new Z({}),{c(){e=p("nav"),t=p("a"),w(a.$$.fragment),r=v(),l=p("h3"),l.textContent="Enable",s=v(),w(o.$$.fragment),d(t,"href","#/admin"),d(t,"class","logo svelte-1f4e2pu"),d(e,"class","navbar svelte-1f4e2pu")},m(u,f){$(u,e,f),_(e,t),N(a,t,null),_(t,r),_(t,l),_(e,s),N(o,e,null),c=!0},p:q,i(u){c||(g(a.$$.fragment,u),g(o.$$.fragment,u),c=!0)},o(u){h(a.$$.fragment,u),h(o.$$.fragment,u),c=!1},d(u){u&&y(e),U(a),U(o)}}}class le extends C{constructor(e){super(),E(this,e,null,x,b,{})}}function ee(n){let e,t,a;const r=n[2].default,l=V(r,n,n[1],null);return{c(){e=p("div"),t=p("div"),l&&l.c(),d(t,"class","portal-inner"),d(e,"class","portal-clone svelte-1tufk5f")},m(s,o){$(s,e,o),_(e,t),l&&l.m(t,null),n[3](t),a=!0},p(s,[o]){l&&l.p&&(!a||o&2)&&W(l,r,s,s[1],a?B(r,s[1],o,null):A(s[1]),null)},i(s){a||(g(l,s),a=!0)},o(s){h(l,s),a=!1},d(s){s&&y(e),l&&l.d(s),n[3](null)}}}function te(n,e,t){let{$$slots:a={},$$scope:r}=e,l,s;M(()=>{s=document.createElement("div"),s.className="portal",document.body.appendChild(s),s.appendChild(l)}),I(()=>{document.body.removeChild(s)});function o(c){J[c?"unshift":"push"](()=>{l=c,t(0,l)})}return n.$$set=c=>{"$$scope"in c&&t(1,r=c.$$scope)},[l,r,a,o]}class ne extends C{constructor(e){super(),E(this,e,te,ee,b,{})}}export{le as N,ne as P,K as c};
