function z(){}function q(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function it(){return Object.create(null)}function W(t){t.forEach(B)}function rt(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let _;function ct(t,e){return t===e?!0:(_||(_=document.createElement("a")),_.href=e,t===_.href)}function lt(t){return Object.keys(t).length===0}function O(t,...e){if(t==null){for(const i of e)i(void 0);return z}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(O(e,n))}function ut(t,e,n,i){if(t){const r=C(t,e,n,i);return t[0](r)}}function C(t,e,n,i){return t[1]&&i?q(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)c[o]=e.dirty[o]|r[o];return c}return e.dirty|r}return e.dirty}function ft(t,e,n,i,r,c){if(r){const s=C(e,n,i,c);t.p(s,r)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let b=!1;function ht(){b=!0}function _t(){b=!1}function G(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function I(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:G(1,r,D=>e[n[D]].claim_order,u))-1;i[l]=n[a]+1;const A=a+1;n[A]=l,r=Math.max(A,r)}const c=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);c.reverse(),s.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<s.length;l++){for(;u<c.length&&s[l].claim_order>=c[u].claim_order;)u++;const a=u<c.length?c[u]:null;t.insertBefore(s[l],a)}}function R(t,e){t.appendChild(e)}function F(t,e){if(b){for(I(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function J(t,e,n){b&&!n?F(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function pt(){return T(" ")}function yt(){return T("")}function k(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function gt(t){return t.dataset.svelteH}function xt(t){return Array.from(t.childNodes)}function L(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,e,n,i,r=!1){L(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Q(t,e,n,i){return j(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||c.push(o.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function wt(t,e,n){return Q(t,e,n,v)}function V(t,e){return j(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function Et(t){return V(t," ")}function H(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return-1}function vt(t,e){const n=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(e);L(t);const r=t.splice(n,i-n+1);p(r[0]),p(r[r.length-1]);const c=r.slice(1,r.length-1);if(c.length===0)return new g(e);for(const s of c)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(e,c)}function Tt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Nt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let m;function X(){if(m===void 0){m=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{m=!0}}return m}function At(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=v("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=X();let c;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=k(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=k(i.contentWindow,"resize",e),e()}),R(t,i),()=>{(r||c&&i.contentWindow)&&c(),p(i)}}function Y(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function kt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}class Z{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=K(n.nodeName):this.e=v(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(p)}}class g extends Z{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)J(this.t,this.n[n],e)}}function Ht(t,e){return new t(e)}let y;function x(t){y=t}function N(){if(!y)throw new Error("Function called outside component initialization");return y}function Mt(t){N().$$.on_mount.push(t)}function St(t){N().$$.after_update.push(t)}function Ct(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=Y(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}const h=[],M=[];let d=[];const S=[],P=Promise.resolve();let E=!1;function $(){E||(E=!0,P.then(et))}function Lt(){return $(),P}function tt(t){d.push(t)}const w=new Set;let f=0;function et(){if(f!==0)return;const t=y;do{try{for(;f<h.length;){const e=h[f];f++,x(e),nt(e.$$)}}catch(e){throw h.length=0,f=0,e}for(x(null),h.length=0,f=0;M.length;)M.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];w.has(n)||(w.add(n),n())}d.length=0}while(h.length);for(;S.length;)S.pop()();E=!1,w.clear(),x(t)}function nt(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tt)}}function jt(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{W as A,gt as B,mt as C,ct as D,k as E,vt as F,Ct as G,g as H,tt as I,At as J,kt as K,it as L,et as M,rt as N,lt as O,jt as P,y as Q,x as R,B as S,h as T,$ as U,ht as V,_t as W,pt as a,St as b,Et as c,p as d,yt as e,v as f,wt as g,xt as h,J as i,bt as j,Nt as k,T as l,V as m,Tt as n,Mt as o,M as p,Ht as q,ut as r,st as s,Lt as t,ft as u,dt as v,at as w,F as x,z as y,ot as z};
