import{S as m,i as g,s as k,a as c,b as e,c as w,d as i,n as p,e as v,f as b,w as z,l as T,j as H,k as d,m as q,t as _,p as y,q as C,r as B,g as P}from"./index-8ceaf788.js";function S(a){let t,r,n,o;return{c(){t=c("svg"),r=c("path"),n=c("path"),o=c("path"),e(r,"stroke","none"),e(r,"d","M0 0h24v24H0z"),e(r,"fill","none"),e(n,"d","M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"),e(o,"d","M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"class","icon icon-tabler icon-tabler-copy"),e(t,"width","24"),e(t,"height","24"),e(t,"viewBox","0 0 24 24"),e(t,"stroke-width","2"),e(t,"stroke","currentColor"),e(t,"fill","none"),e(t,"stroke-linecap","round"),e(t,"stroke-linejoin","round")},m(s,l){w(s,t,l),i(t,r),i(t,n),i(t,o)},p,i:p,o:p,d(s){s&&v(t)}}}class A extends m{constructor(t){super(),g(this,t,null,S,k,{})}}function D(a){let t,r,n;return{c(){t=c("svg"),r=c("path"),n=c("path"),e(r,"stroke","none"),e(r,"d","M0 0h24v24H0z"),e(r,"fill","none"),e(n,"d","M5 12l5 5l10 -10"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"class","icon icon-tabler icon-tabler-check"),e(t,"width","24"),e(t,"height","24"),e(t,"viewBox","0 0 24 24"),e(t,"stroke-width","2"),e(t,"stroke","currentColor"),e(t,"fill","none"),e(t,"stroke-linecap","round"),e(t,"stroke-linejoin","round")},m(o,s){w(o,t,s),i(t,r),i(t,n)},p,i:p,o:p,d(o){o&&v(t)}}}class E extends m{constructor(t){super(),g(this,t,null,D,k,{})}}function F(a){let t,r;return t=new E({}),{c(){y(t.$$.fragment)},m(n,o){C(t,n,o),r=!0},i(n){r||(_(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){B(t,n)}}}function G(a){let t,r;return t=new A({}),{c(){y(t.$$.fragment)},m(n,o){C(t,n,o),r=!0},i(n){r||(_(t.$$.fragment,n),r=!0)},o(n){d(t.$$.fragment,n),r=!1},d(n){B(t,n)}}}function I(a){let t,r,n,o,s,l,h;const M=[G,F],f=[];function j(u,x){return u[0]?1:0}return n=j(a),o=f[n]=M[n](a),{c(){t=b("button"),r=b("span"),o.c(),e(r,"class","svelte-1nr8pyd"),e(t,"class","svelte-1nr8pyd"),z(t,"copied",a[0])},m(u,x){w(u,t,x),i(t,r),f[n].m(r,null),s=!0,l||(h=T(t,"click",a[1]),l=!0)},p(u,[x]){let $=n;n=j(u),n!==$&&(H(),d(f[$],1,1,()=>{f[$]=null}),q(),o=f[n],o||(o=f[n]=M[n](u),o.c()),_(o,1),o.m(r,null)),(!s||x&1)&&z(t,"copied",u[0])},i(u){s||(_(o),s=!0)},o(u){d(o),s=!1},d(u){u&&v(t),f[n].d(),l=!1,h()}}}function J(a,t,r){let{text:n=""}=t,o=!1;function s(){navigator.clipboard.writeText(n),r(0,o=!0),setTimeout(()=>r(0,o=!1),1500)}return a.$$set=l=>{"text"in l&&r(2,n=l.text)},[o,s,n]}class Q extends m{constructor(t){super(),g(this,t,J,I,k,{text:2})}}function K(a){let t,r,n,o,s;return{c(){t=c("svg"),r=c("path"),n=c("path"),o=c("path"),s=c("path"),e(r,"stroke","none"),e(r,"d","M0 0h24v24H0z"),e(r,"fill","none"),e(n,"d","M5 12l14 0"),e(o,"d","M5 12l4 4"),e(s,"d","M5 12l4 -4"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"class","icon icon-tabler icon-tabler-arrow-narrow-left"),e(t,"width","24"),e(t,"height","24"),e(t,"viewBox","0 0 24 24"),e(t,"stroke-width","2"),e(t,"stroke","currentColor"),e(t,"fill","none"),e(t,"stroke-linecap","round"),e(t,"stroke-linejoin","round")},m(l,h){w(l,t,h),i(t,r),i(t,n),i(t,o),i(t,s)},p,i:p,o:p,d(l){l&&v(t)}}}class L extends m{constructor(t){super(),g(this,t,null,K,k,{})}}function N(a){let t,r,n,o,s;return r=new L({}),{c(){t=b("a"),y(r.$$.fragment),n=P(),o=b("span"),o.textContent="Back to projects",e(t,"href","#/admin"),e(t,"class","back hover svelte-1lh6k85")},m(l,h){w(l,t,h),C(r,t,null),i(t,n),i(t,o),s=!0},p,i(l){s||(_(r.$$.fragment,l),s=!0)},o(l){d(r.$$.fragment,l),s=!1},d(l){l&&v(t),B(r)}}}class R extends m{constructor(t){super(),g(this,t,null,N,k,{})}}export{R as B,Q as C};