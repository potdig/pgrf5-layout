import{S as Z,i as y,s as R,C as ee,g,m as d,h as i,j as c,k as h,l as z,p as v,e as j,a as A,u as te,b as k,c as V,w as x,x as E,f as B,n as ne,q as se,v as F,A as Q,y as U}from"../Stack-Ci9wXNEO.js";import{c as re,a as oe}from"../run-CFCC9f5W.js";import{B as le,H as fe,I as N,V as ae,F as ue,t as ie,T as W,a as X,A as Y}from"../Video-ByKYPItg.js";function G(f,s,l){const e=f.slice();return e[10]=s[l],e}function J(f,s,l){const e=f.slice();return e[13]=s[l],e}function K(f){let s,l,e=F(f[1]),n=[];for(let t=0;t<e.length;t+=1)n[t]=L(J(f,e,t));const a=t=>c(n[t],1,1,()=>{n[t]=null});return{c(){for(let t=0;t<n.length;t+=1)n[t].c();s=Q()},m(t,o){for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,o);k(t,s,o),l=!0},p(t,o){if(o&2){e=F(t[1]);let r;for(r=0;r<e.length;r+=1){const $=J(t,e,r);n[r]?(n[r].p($,o),i(n[r],1)):(n[r]=L($),n[r].c(),i(n[r],1),n[r].m(s.parentNode,s))}for(x(),r=e.length;r<n.length;r+=1)a(r);E()}},i(t){if(!l){for(let o=0;o<e.length;o+=1)i(n[o]);l=!0}},o(t){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)c(n[o]);l=!1},d(t){t&&B(s),U(n,t)}}}function $e(f){let s,l,e,n,a;return s=new X({props:{value:f[13].name}}),e=new Y({props:{userId:f[13].id}}),{c(){g(s.$$.fragment),l=v(),g(e.$$.fragment),n=v()},m(t,o){d(s,t,o),k(t,l,o),d(e,t,o),k(t,n,o),a=!0},p(t,o){const r={};o&2&&(r.value=t[13].name),s.$set(r);const $={};o&2&&($.userId=t[13].id),e.$set($)},i(t){a||(i(s.$$.fragment,t),i(e.$$.fragment,t),a=!0)},o(t){c(s.$$.fragment,t),c(e.$$.fragment,t),a=!1},d(t){t&&(B(l),B(n)),h(s,t),h(e,t)}}}function L(f){let s,l;return s=new N({props:{label:"Runner",$$slots:{default:[$e]},$$scope:{ctx:f}}}),{c(){g(s.$$.fragment)},m(e,n){d(s,e,n),l=!0},p(e,n){const a={};n&65538&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){l||(i(s.$$.fragment,e),l=!0)},o(e){c(s.$$.fragment,e),l=!1},d(e){h(s,e)}}}function M(f){let s,l,e=F(f[5]),n=[];for(let t=0;t<e.length;t+=1)n[t]=P(G(f,e,t));const a=t=>c(n[t],1,1,()=>{n[t]=null});return{c(){for(let t=0;t<n.length;t+=1)n[t].c();s=Q()},m(t,o){for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(t,o);k(t,s,o),l=!0},p(t,o){if(o&32){e=F(t[5]);let r;for(r=0;r<e.length;r+=1){const $=G(t,e,r);n[r]?(n[r].p($,o),i(n[r],1)):(n[r]=P($),n[r].c(),i(n[r],1),n[r].m(s.parentNode,s))}for(x(),r=e.length;r<n.length;r+=1)a(r);E()}},i(t){if(!l){for(let o=0;o<e.length;o+=1)i(n[o]);l=!0}},o(t){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)c(n[o]);l=!1},d(t){t&&B(s),U(n,t)}}}function ce(f){let s,l,e,n,a;return s=new X({props:{value:f[10].name}}),e=new Y({props:{account:f[10].social}}),{c(){g(s.$$.fragment),l=v(),g(e.$$.fragment),n=v()},m(t,o){d(s,t,o),k(t,l,o),d(e,t,o),k(t,n,o),a=!0},p(t,o){const r={};o&32&&(r.value=t[10].name),s.$set(r);const $={};o&32&&($.account=t[10].social),e.$set($)},i(t){a||(i(s.$$.fragment,t),i(e.$$.fragment,t),a=!0)},o(t){c(s.$$.fragment,t),c(e.$$.fragment,t),a=!1},d(t){t&&(B(l),B(n)),h(s,t),h(e,t)}}}function P(f){let s,l;return s=new N({props:{label:"Commentator",$$slots:{default:[ce]},$$scope:{ctx:f}}}),{c(){g(s.$$.fragment)},m(e,n){d(s,e,n),l=!0},p(e,n){const a={};n&65568&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){l||(i(s.$$.fragment,e),l=!0)},o(e){c(s.$$.fragment,e),l=!1},d(e){h(s,e)}}}function me(f){let s,l;return s=new W({props:{value:f[4]}}),{c(){g(s.$$.fragment)},m(e,n){d(s,e,n),l=!0},p(e,n){const a={};n&16&&(a.value=e[4]),s.$set(a)},i(e){l||(i(s.$$.fragment,e),l=!0)},o(e){c(s.$$.fragment,e),l=!1},d(e){h(s,e)}}}function pe(f){let s,l;return s=new W({props:{value:f[3],status:f[2]}}),{c(){g(s.$$.fragment)},m(e,n){d(s,e,n),l=!0},p(e,n){const a={};n&8&&(a.value=e[3]),n&4&&(a.status=e[2]),s.$set(a)},i(e){l||(i(s.$$.fragment,e),l=!0)},o(e){c(s.$$.fragment,e),l=!1},d(e){h(s,e)}}}function _e(f){let s,l,e,n,a,t,o,r,$,w,S,C,H,I,b,T,q;s=new le({}),e=new fe({});let m=f[1]&&K(f),p=f[5]&&M(f);return w=new N({props:{label:"EST",$$slots:{default:[me]},$$scope:{ctx:f}}}),C=new N({props:{label:"Current Time",$$slots:{default:[pe]},$$scope:{ctx:f}}}),I=new ae({props:{width:f[6],height:f[7]}}),T=new ue({}),{c(){g(s.$$.fragment),l=v(),g(e.$$.fragment),n=v(),a=j("main"),t=j("div"),o=j("div"),m&&m.c(),r=v(),p&&p.c(),$=v(),g(w.$$.fragment),S=v(),g(C.$$.fragment),H=v(),g(I.$$.fragment),b=v(),g(T.$$.fragment),A(o,"id","infos"),A(o,"class","svelte-1oufx1d"),A(t,"id","sidebar"),A(t,"class","svelte-1oufx1d"),te(a,"grid-template-columns","1fr "+f[6]),A(a,"class","svelte-1oufx1d")},m(u,_){d(s,u,_),k(u,l,_),d(e,u,_),k(u,n,_),k(u,a,_),V(a,t),V(t,o),m&&m.m(o,null),V(o,r),p&&p.m(o,null),V(o,$),d(w,o,null),V(o,S),d(C,o,null),V(a,H),d(I,a,null),k(u,b,_),d(T,u,_),q=!0},p(u,_){u[1]?m?(m.p(u,_),_&2&&i(m,1)):(m=K(u),m.c(),i(m,1),m.m(o,r)):m&&(x(),c(m,1,1,()=>{m=null}),E()),u[5]?p?(p.p(u,_),_&32&&i(p,1)):(p=M(u),p.c(),i(p,1),p.m(o,$)):p&&(x(),c(p,1,1,()=>{p=null}),E());const D={};_&65552&&(D.$$scope={dirty:_,ctx:u}),w.$set(D);const O={};_&65548&&(O.$$scope={dirty:_,ctx:u}),C.$set(O)},i(u){q||(i(s.$$.fragment,u),i(e.$$.fragment,u),i(m),i(p),i(w.$$.fragment,u),i(C.$$.fragment,u),i(I.$$.fragment,u),i(T.$$.fragment,u),q=!0)},o(u){c(s.$$.fragment,u),c(e.$$.fragment,u),c(m),c(p),c(w.$$.fragment,u),c(C.$$.fragment,u),c(I.$$.fragment,u),c(T.$$.fragment,u),q=!1},d(u){u&&(B(l),B(n),B(a),B(b)),h(s,u),h(e,u),m&&m.d(),p&&p.d(),h(w),h(C),h(I),h(T,u)}}}function ge(f){let s,l;return s=new ee({props:{$$slots:{default:[_e]},$$scope:{ctx:f}}}),{c(){g(s.$$.fragment)},m(e,n){d(s,e,n),l=!0},p(e,[n]){const a={};n&65598&&(a.$$scope={dirty:n,ctx:e}),s.$set(a)},i(e){l||(i(s.$$.fragment,e),l=!0)},o(e){c(s.$$.fragment,e),l=!1},d(e){h(s,e)}}}function de(f,s,l){let e,n,a,t,o,r,$,w,S=ne,C=()=>(S(),S=se(o,b=>l(5,w=b)),o);z(f,oe,b=>l(8,r=b)),z(f,ie,b=>l(9,$=b)),f.$$.on_destroy.push(()=>S());const H=`${1920*.84}px`,I=`${1080*.84}px`;return f.$$.update=()=>{var b;f.$$.dirty&256&&l(4,e=(r==null?void 0:r.estimate)??""),f.$$.dirty&512&&l(3,n=$==null?void 0:$.time),f.$$.dirty&512&&l(2,a=$==null?void 0:$.state),f.$$.dirty&256&&l(1,t=(b=r==null?void 0:r.teams[0])==null?void 0:b.players),f.$$.dirty&256&&C(l(0,o=re((r==null?void 0:r.id)??"")))},[o,t,a,n,e,w,H,I,r,$]}class he extends Z{constructor(s){super(),y(this,s,de,ge,R,{})}}new he({target:document.getElementById("app")});
