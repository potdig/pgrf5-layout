import{S as ee,i as te,s as ne,C as se,g as h,m as b,h as p,j as d,k as w,l as J,v as O,p as S,e as j,a as C,b as V,c as I,w as K,x as L,f as A,y as M,n as re,q as oe,A as le}from"../Stack-Ci9wXNEO.js";import{c as ae,a as fe}from"../run-CFCC9f5W.js";import{B as ue,H as ie,I as z,F as $e,t as me,T as W,V as ce,a as X,A as Y}from"../Video-ByKYPItg.js";import{r as pe,S as _e}from"../rome-B_zv3UUl.js";function N(o,t,n){const e=o.slice();return e[10]=t[n],e}function P(o,t,n){const e=o.slice();return e[13]=t[n],e[15]=n,e}function ge(o){var m;let t,n,e,r,l,a,f,u;return n=new ce({props:{width:o[6],height:o[7]}}),r=new z({props:{dense:!0,label:pe(o[15]+1),$$slots:{default:[de]},$$scope:{ctx:o}}}),a=new _e({props:{id:(m=o[13])==null?void 0:m.id}}),{c(){t=j("div"),h(n.$$.fragment),e=S(),h(r.$$.fragment),l=S(),h(a.$$.fragment),f=S(),C(t,"class","runner svelte-to8vq8")},m(c,v){V(c,t,v),b(n,t,null),I(t,e),b(r,t,null),I(t,l),b(a,t,null),I(t,f),u=!0},p(c,v){var q;const k={};v&65544&&(k.$$scope={dirty:v,ctx:c}),r.$set(k);const H={};v&8&&(H.id=(q=c[13])==null?void 0:q.id),a.$set(H)},i(c){u||(p(n.$$.fragment,c),p(r.$$.fragment,c),p(a.$$.fragment,c),u=!0)},o(c){d(n.$$.fragment,c),d(r.$$.fragment,c),d(a.$$.fragment,c),u=!1},d(c){c&&A(t),w(n),w(r),w(a)}}}function de(o){var l,a;let t,n,e,r;return t=new X({props:{value:(l=o[13])==null?void 0:l.players[0].name}}),e=new Y({props:{userId:(a=o[13])==null?void 0:a.players[0].id}}),{c(){h(t.$$.fragment),n=S(),h(e.$$.fragment)},m(f,u){b(t,f,u),V(f,n,u),b(e,f,u),r=!0},p(f,u){var v,k;const m={};u&8&&(m.value=(v=f[13])==null?void 0:v.players[0].name),t.$set(m);const c={};u&8&&(c.userId=(k=f[13])==null?void 0:k.players[0].id),e.$set(c)},i(f){r||(p(t.$$.fragment,f),p(e.$$.fragment,f),r=!0)},o(f){d(t.$$.fragment,f),d(e.$$.fragment,f),r=!1},d(f){f&&A(n),w(t,f),w(e,f)}}}function Q(o){let t,n,e=o[15]<2&&ge(o);return{c(){e&&e.c(),t=le()},m(r,l){e&&e.m(r,l),V(r,t,l),n=!0},p(r,l){r[15]<2&&e.p(r,l)},i(r){n||(p(e),n=!0)},o(r){d(e),n=!1},d(r){r&&A(t),e&&e.d(r)}}}function ve(o){let t,n,e,r,l;return t=new X({props:{value:o[10].name}}),e=new Y({props:{account:o[10].social}}),{c(){h(t.$$.fragment),n=S(),h(e.$$.fragment),r=S()},m(a,f){b(t,a,f),V(a,n,f),b(e,a,f),V(a,r,f),l=!0},p(a,f){const u={};f&32&&(u.value=a[10].name),t.$set(u);const m={};f&32&&(m.account=a[10].social),e.$set(m)},i(a){l||(p(t.$$.fragment,a),p(e.$$.fragment,a),l=!0)},o(a){d(t.$$.fragment,a),d(e.$$.fragment,a),l=!1},d(a){a&&(A(n),A(r)),w(t,a),w(e,a)}}}function U(o){let t,n;return t=new z({props:{label:"Commentator",$$slots:{default:[ve]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),n=!0},p(e,r){const l={};r&65568&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function he(o){let t,n;return t=new W({props:{value:o[4]}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),n=!0},p(e,r){const l={};r&16&&(l.value=e[4]),t.$set(l)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function be(o){let t,n;return t=new W({props:{value:o[2],status:o[1]}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),n=!0},p(e,r){const l={};r&4&&(l.value=e[2]),r&2&&(l.status=e[1]),t.$set(l)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function we(o){let t,n,e,r,l,a,f,u,m,c,v,k,H,q,T,F,D;t=new ue({}),e=new ie({});let y=O(o[3]),_=[];for(let s=0;s<y.length;s+=1)_[s]=Q(P(o,y,s));const Z=s=>d(_[s],1,1,()=>{_[s]=null});let E=O(o[5]),g=[];for(let s=0;s<E.length;s+=1)g[s]=U(N(o,E,s));const R=s=>d(g[s],1,1,()=>{g[s]=null});return k=new z({props:{label:"EST",$$slots:{default:[he]},$$scope:{ctx:o}}}),q=new z({props:{label:"Current Time",$$slots:{default:[be]},$$scope:{ctx:o}}}),F=new $e({}),{c(){h(t.$$.fragment),n=S(),h(e.$$.fragment),r=S(),l=j("main"),a=j("div");for(let s=0;s<_.length;s+=1)_[s].c();f=S(),u=j("div"),m=j("div");for(let s=0;s<g.length;s+=1)g[s].c();c=S(),v=j("div"),h(k.$$.fragment),H=S(),h(q.$$.fragment),T=S(),h(F.$$.fragment),C(a,"id","runners"),C(a,"class","svelte-to8vq8"),C(m,"id","commentators"),C(m,"class","svelte-to8vq8"),C(v,"id","times"),C(v,"class","svelte-to8vq8"),C(u,"id","others"),C(u,"class","svelte-to8vq8"),C(l,"class","svelte-to8vq8")},m(s,i){b(t,s,i),V(s,n,i),b(e,s,i),V(s,r,i),V(s,l,i),I(l,a);for(let B=0;B<_.length;B+=1)_[B]&&_[B].m(a,null);I(l,f),I(l,u),I(u,m);for(let B=0;B<g.length;B+=1)g[B]&&g[B].m(m,null);I(u,c),I(u,v),b(k,v,null),I(v,H),b(q,v,null),V(s,T,i),b(F,s,i),D=!0},p(s,i){if(i&200){y=O(s[3]);let $;for($=0;$<y.length;$+=1){const x=P(s,y,$);_[$]?(_[$].p(x,i),p(_[$],1)):(_[$]=Q(x),_[$].c(),p(_[$],1),_[$].m(a,null))}for(K(),$=y.length;$<_.length;$+=1)Z($);L()}if(i&32){E=O(s[5]);let $;for($=0;$<E.length;$+=1){const x=N(s,E,$);g[$]?(g[$].p(x,i),p(g[$],1)):(g[$]=U(x),g[$].c(),p(g[$],1),g[$].m(m,null))}for(K(),$=E.length;$<g.length;$+=1)R($);L()}const B={};i&65552&&(B.$$scope={dirty:i,ctx:s}),k.$set(B);const G={};i&65542&&(G.$$scope={dirty:i,ctx:s}),q.$set(G)},i(s){if(!D){p(t.$$.fragment,s),p(e.$$.fragment,s);for(let i=0;i<y.length;i+=1)p(_[i]);for(let i=0;i<E.length;i+=1)p(g[i]);p(k.$$.fragment,s),p(q.$$.fragment,s),p(F.$$.fragment,s),D=!0}},o(s){d(t.$$.fragment,s),d(e.$$.fragment,s),_=_.filter(Boolean);for(let i=0;i<_.length;i+=1)d(_[i]);g=g.filter(Boolean);for(let i=0;i<g.length;i+=1)d(g[i]);d(k.$$.fragment,s),d(q.$$.fragment,s),d(F.$$.fragment,s),D=!1},d(s){s&&(A(n),A(r),A(l),A(T)),w(t,s),w(e,s),M(_,s),M(g,s),w(k),w(q),w(F,s)}}}function ke(o){let t,n;return t=new se({props:{$$slots:{default:[we]},$$scope:{ctx:o}}}),{c(){h(t.$$.fragment)},m(e,r){b(t,e,r),n=!0},p(e,[r]){const l={};r&65598&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){w(t,e)}}}function qe(o,t,n){let e,r,l,a,f,u,m,c,v=re,k=()=>(v(),v=oe(f,T=>n(5,c=T)),f);J(o,fe,T=>n(8,u=T)),J(o,me,T=>n(9,m=T)),o.$$.on_destroy.push(()=>v());const H=`${1920*.48}px`,q=`${1080*.48}px`;return o.$$.update=()=>{o.$$.dirty&256&&n(4,e=(u==null?void 0:u.estimate)??""),o.$$.dirty&256&&n(3,r=(u==null?void 0:u.teams)??[]),o.$$.dirty&512&&n(2,l=m==null?void 0:m.time),o.$$.dirty&512&&n(1,a=m==null?void 0:m.state),o.$$.dirty&256&&k(n(0,f=ae((u==null?void 0:u.id)??"")))},[f,a,l,r,e,c,H,q,u,m]}class Be extends ee{constructor(t){super(),te(this,t,qe,ke,ne,{})}}new Be({target:document.getElementById("app")});
