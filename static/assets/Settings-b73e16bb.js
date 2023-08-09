import{S as P,i as S,s as q,I as V,u as W,v as X,B as F,f as $,p as k,g as w,b as d,c as N,q as C,d as p,l as E,y as Y,t as g,k as _,e as B,r as y,K as J,L as K,n as M,a as x,h as Z,j as Q,m as R,F as D,w as I,x as ee,G as U,z as te,C as L,D as ne,E as se,P as le}from"./index-8ceaf788.js";import{C as re,B as ae}from"./BackToProjects-fa774be7.js";import{P as oe,c as ie,N as ce}from"./Portal-e1d978fa.js";import{T as ue}from"./Tag-24fc776e.js";function fe(c){let e,t;return e=new ue({}),{c(){k(e.$$.fragment)},m(n,u){C(e,n,u),t=!0},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function pe(c){let e;return{c(){e=$("span"),e.textContent="+"},m(t,n){N(t,e,n)},p:M,d(t){t&&B(e)}}}function de(c){let e,t,n,u,s,o,f,l;function a(i){c[4](i)}let r={error:c[1],placeholder:"Credential name",$$slots:{default:[fe]},$$scope:{ctx:c}};return c[0]!==void 0&&(r.value=c[0]),t=new V({props:r}),W.push(()=>X(t,"value",a)),s=new F({props:{text:"Create",loading:c[2],$$slots:{default:[pe]},$$scope:{ctx:c}}}),{c(){e=$("form"),k(t.$$.fragment),u=w(),k(s.$$.fragment),d(e,"class","svelte-1kujczk")},m(i,m){N(i,e,m),C(t,e,null),p(e,u),C(s,e,null),o=!0,f||(l=E(e,"submit",c[3]),f=!0)},p(i,[m]){const j={};m&2&&(j.error=i[1]),m&128&&(j.$$scope={dirty:m,ctx:i}),!n&&m&1&&(n=!0,j.value=i[0],Y(()=>n=!1)),t.$set(j);const h={};m&4&&(h.loading=i[2]),m&128&&(h.$$scope={dirty:m,ctx:i}),s.$set(h)},i(i){o||(g(t.$$.fragment,i),g(s.$$.fragment,i),o=!0)},o(i){_(t.$$.fragment,i),_(s.$$.fragment,i),o=!1},d(i){i&&B(e),y(t),y(s),f=!1,l()}}}function me(c,e,t){const{addNotification:n}=J(),u=K();let s="",o="",f=!1;async function l(r){if(r.preventDefault(),t(1,o=""),t(2,f=!0),s.length<3){t(1,o="Please pick a name with at least 3 characters"),t(2,f=!1);return}(await fetch("/api/credentials",{method:"POST",body:JSON.stringify({name:s}),headers:{"Content-Type":"application/json"}})).ok?(n({type:"success",position:"top-right",removeAfter:3e3,text:"Credential created with success.",id:"credential-created"}),u("created"),t(0,s="")):n({type:"error",position:"top-right",removeAfter:3e3,text:"Could not create credential.",id:"credential-created-error"}),t(2,f=!1)}function a(r){s=r,t(0,s)}return[s,o,f,l,a]}class $e extends P{constructor(e){super(),S(this,e,me,de,q,{})}}function ge(c){let e,t,n,u,s,o,f;return{c(){e=x("svg"),t=x("path"),n=x("path"),u=x("path"),s=x("path"),o=x("path"),f=x("path"),d(t,"stroke","none"),d(t,"d","M0 0h24v24H0z"),d(t,"fill","none"),d(n,"d","M4 7l16 0"),d(u,"d","M10 11l0 6"),d(s,"d","M14 11l0 6"),d(o,"d","M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"),d(f,"d","M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","icon icon-tabler icon-tabler-trash"),d(e,"width","24"),d(e,"height","24"),d(e,"viewBox","0 0 24 24"),d(e,"stroke-width","2"),d(e,"stroke","currentColor"),d(e,"fill","none"),d(e,"stroke-linecap","round"),d(e,"stroke-linejoin","round")},m(l,a){N(l,e,a),p(e,t),p(e,n),p(e,u),p(e,s),p(e,o),p(e,f)},p:M,i:M,o:M,d(l){l&&B(e)}}}class _e extends P{constructor(e){super(),S(this,e,null,ge,q,{})}}function O(c){let e,t;return e=new oe({props:{$$slots:{default:[he]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},m(n,u){C(e,n,u),t=!0},p(n,u){const s={};u&131&&(s.$$scope={dirty:u,ctx:n}),e.$set(s)},i(n){t||(g(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){y(e,n)}}}function he(c){let e,t,n,u,s,o,f,l,a,r,i,m,j,h,A,v;return i=new F({props:{text:"Confirm"}}),i.$on("click",c[4]),{c(){e=$("div"),t=$("p"),n=$("span"),u=D("Are you sure you want to delete "),s=D(c[0]),o=D("?"),f=w(),l=$("span"),l.textContent="This operation cannot be undone",a=D("."),r=w(),k(i.$$.fragment),m=w(),j=$("button"),j.textContent="Cancel",d(n,"class",""),d(l,"class","red label svelte-dq3y7g"),d(j,"class","cancel svelte-dq3y7g"),d(e,"class","hidden svelte-dq3y7g"),I(e,"open",c[1])},m(b,T){N(b,e,T),p(e,t),p(t,n),p(n,u),p(n,s),p(n,o),p(t,f),p(t,l),p(t,a),p(e,r),C(i,e,null),p(e,m),p(e,j),h=!0,A||(v=[E(j,"click",c[5]),ee(ie.call(null,e)),E(e,"click_outside",c[6])],A=!0)},p(b,T){(!h||T&1)&&U(s,b[0]),(!h||T&2)&&I(e,"open",b[1])},i(b){h||(g(i.$$.fragment,b),h=!0)},o(b){_(i.$$.fragment,b),h=!1},d(b){b&&B(e),y(i),A=!1,te(v)}}}function ve(c){let e,t,n,u,s,o,f,l;n=new _e({});let a=c[1]&&O(c);return{c(){e=$("button"),t=$("span"),k(n.$$.fragment),u=w(),a&&a.c(),s=Z(),d(t,"class","svelte-dq3y7g"),d(e,"class","trash svelte-dq3y7g")},m(r,i){N(r,e,i),p(e,t),C(n,t,null),N(r,u,i),a&&a.m(r,i),N(r,s,i),o=!0,f||(l=E(e,"click",c[3]),f=!0)},p(r,[i]){r[1]?a?(a.p(r,i),i&2&&g(a,1)):(a=O(r),a.c(),g(a,1),a.m(s.parentNode,s)):a&&(Q(),_(a,1,1,()=>{a=null}),R())},i(r){o||(g(n.$$.fragment,r),g(a),o=!0)},o(r){_(n.$$.fragment,r),_(a),o=!1},d(r){r&&(B(e),B(u),B(s)),y(n),a&&a.d(r),f=!1,l()}}}function be(c,e,t){const n=K();let{label:u=""}=e,s=!1;const o=()=>t(1,s=!0),f=()=>{t(1,s=!1),n("confirm")},l=()=>t(1,s=!1),a=()=>t(1,s=!1);return c.$$set=r=>{"label"in r&&t(0,u=r.label)},[u,s,n,o,f,l,a]}class we extends P{constructor(e){super(),S(this,e,be,ve,q,{label:0})}}function G(c,e,t){const n=c.slice();return n[5]=e[t],n}function H(c){let e,t,n,u,s=c[5].name+"",o,f,l,a,r,i,m,j,h;t=new le({}),r=new re({props:{text:c[5].token}});function A(){return c[3](c[5])}return m=new we({props:{label:`the credential ${c[5].name}`}}),m.$on("confirm",A),{c(){e=$("li"),k(t.$$.fragment),n=w(),u=$("span"),o=D(s),f=w(),l=$("span"),l.textContent="••••••••••••••••••••••••••••••••••••••••••",a=w(),k(r.$$.fragment),i=w(),k(m.$$.fragment),j=w(),d(u,"class","name svelte-j2gxj4"),d(l,"class","pass svelte-j2gxj4"),d(e,"class","svelte-j2gxj4")},m(v,b){N(v,e,b),C(t,e,null),p(e,n),p(e,u),p(u,o),p(e,f),p(e,l),p(e,a),C(r,e,null),p(e,i),C(m,e,null),p(e,j),h=!0},p(v,b){c=v,(!h||b&1)&&s!==(s=c[5].name+"")&&U(o,s);const T={};b&1&&(T.text=c[5].token),r.$set(T);const z={};b&1&&(z.label=`the credential ${c[5].name}`),m.$set(z)},i(v){h||(g(t.$$.fragment,v),g(r.$$.fragment,v),g(m.$$.fragment,v),h=!0)},o(v){_(t.$$.fragment,v),_(r.$$.fragment,v),_(m.$$.fragment,v),h=!1},d(v){v&&B(e),y(t),y(r),y(m)}}}function ke(c){let e,t,n,u,s=L(c[0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=H(G(c,s,l));const f=l=>_(o[l],1,1,()=>{o[l]=null});return n=new $e({}),n.$on("created",c[1]),{c(){e=$("ul");for(let l=0;l<o.length;l+=1)o[l].c();t=w(),k(n.$$.fragment),d(e,"class","svelte-j2gxj4")},m(l,a){N(l,e,a);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(e,null);N(l,t,a),C(n,l,a),u=!0},p(l,[a]){if(a&5){s=L(l[0]);let r;for(r=0;r<s.length;r+=1){const i=G(l,s,r);o[r]?(o[r].p(i,a),g(o[r],1)):(o[r]=H(i),o[r].c(),g(o[r],1),o[r].m(e,null))}for(Q(),r=s.length;r<o.length;r+=1)f(r);R()}},i(l){if(!u){for(let a=0;a<s.length;a+=1)g(o[a]);g(n.$$.fragment,l),u=!0}},o(l){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)_(o[a]);_(n.$$.fragment,l),u=!1},d(l){l&&(B(e),B(t)),ne(o,l),y(n,l)}}}function Ce(c,e,t){const{addNotification:n}=J();let u=[];const s=async()=>{const l=await fetch("/api/credentials");t(0,u=await l.json())},o=async l=>{(await fetch(`/api/credentials/${l}`,{method:"DELETE"})).ok?(n({type:"success",position:"top-right",removeAfter:3e3,text:"Credential removed with success.",id:"credential-removed"}),s()):n({type:"error",position:"top-right",removeAfter:3e3,text:"Could not remove credential.",id:"credential-removed"})};return se(s),[u,s,o,l=>o(l.id)]}class ye extends P{constructor(e){super(),S(this,e,Ce,ke,q,{})}}function je(c){let e,t,n,u,s,o,f,l;return f=new ye({}),{c(){e=$("div"),t=$("section"),n=$("h2"),n.textContent="Credentials",u=w(),s=$("p"),s.textContent=`Generate and delete credentials for external access, such as integrating
      the enable API with your applications`,o=w(),k(f.$$.fragment),d(s,"class","svelte-ciyjsr"),d(t,"class","svelte-ciyjsr")},m(a,r){N(a,e,r),p(e,t),p(t,n),p(t,u),p(t,s),p(t,o),C(f,t,null),l=!0},p:M,i(a){l||(g(f.$$.fragment,a),l=!0)},o(a){_(f.$$.fragment,a),l=!1},d(a){a&&B(e),y(f)}}}class Ne extends P{constructor(e){super(),S(this,e,null,je,q,{})}}function Be(c){let e,t,n,u,s,o,f,l,a,r;return t=new ce({}),s=new ae({}),a=new Ne({}),{c(){e=$("div"),k(t.$$.fragment),n=w(),u=$("div"),k(s.$$.fragment),o=w(),f=$("header"),f.innerHTML="<h1>Settings</h1>",l=w(),k(a.$$.fragment),d(f,"class","page-header"),d(u,"class","page")},m(i,m){N(i,e,m),C(t,e,null),p(e,n),p(e,u),C(s,u,null),p(u,o),p(u,f),p(u,l),C(a,u,null),r=!0},p:M,i(i){r||(g(t.$$.fragment,i),g(s.$$.fragment,i),g(a.$$.fragment,i),r=!0)},o(i){_(t.$$.fragment,i),_(s.$$.fragment,i),_(a.$$.fragment,i),r=!1},d(i){i&&B(e),y(t),y(s),y(a)}}}class Se extends P{constructor(e){super(),S(this,e,null,Be,q,{})}}export{Se as default};
