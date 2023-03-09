"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[1495],{82781:(W,C,t)=>{t.r(C),t.d(C,{default:()=>oe});var e=t(67294),x=t(97132),n=t(68547),A=t(185),m=t(49066),S=t(7681),L=t(35961),B=t(11276),v=t(74571),h=t(72735),E=t(16364),j=t(29728),d=t(14087),c=t(23293),p=t(45697),g=t.n(p),I=t(71893),Y=t(91216),J=t(82562),u=t(47560);const z=I.default.a`
  color: ${({theme:l})=>l.colors.primary600};
`,U=({config:l})=>{const{formatMessage:f}=(0,x.useIntl)();return e.createElement(S.K,{spacing:4},e.createElement(S.K,{spacing:1},e.createElement(h.Z,{variant:"delta",as:"h2"},f({id:(0,u.Z)("Settings.email.plugin.title.config"),defaultMessage:"Configuration"})),e.createElement(h.Z,null,f({id:(0,u.Z)("Settings.email.plugin.text.configuration"),defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:e.createElement(z,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},f({id:(0,u.Z)("link"),defaultMessage:"Link"}))}))),e.createElement(B.r,{gap:5},e.createElement(v.P,{col:6,s:12},e.createElement(E.o,{name:"shipper-email",label:f({id:(0,u.Z)("Settings.email.plugin.label.defaultFrom"),defaultMessage:"Default sender email"}),placeholder:f({id:(0,u.Z)("Settings.email.plugin.placeholder.defaultFrom"),defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:l.settings.defaultFrom})),e.createElement(v.P,{col:6,s:12},e.createElement(E.o,{name:"response-email",label:f({id:(0,u.Z)("Settings.email.plugin.label.defaultReplyTo"),defaultMessage:"Default response email"}),placeholder:f({id:(0,u.Z)("Settings.email.plugin.placeholder.defaultReplyTo"),defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:l.settings.defaultReplyTo})),e.createElement(v.P,{col:6,s:12},e.createElement(Y.P,{name:"email-provider",label:f({id:(0,u.Z)("Settings.email.plugin.label.provider"),defaultMessage:"Email provider"}),disabled:!0,onChange:()=>{},value:l.provider},e.createElement(J.W,{value:l.provider},l.provider)))))};U.propTypes={config:g().shape({provider:g().string,settings:g().shape({defaultFrom:g().string,defaultReplyTo:g().string})}).isRequired};const F=U;var a=t(53209);const i=a.Ry().shape({email:a.Z_().email(n.translatedErrors.email).required(n.translatedErrors.required)});var s=t(61321),b=t(78648),R=(l,f,y)=>new Promise((P,Z)=>{var H=o=>{try{O(y.next(o))}catch(M){Z(M)}},w=o=>{try{O(y.throw(o))}catch(M){Z(M)}},O=o=>o.done?P(o.value):Promise.resolve(o.value).then(H,w);O((y=y.apply(l,f)).next())});const T=b.Z.create({baseURL:""});T.interceptors.request.use(l=>R(void 0,null,function*(){return l.headers={Authorization:`Bearer ${n.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},l}),l=>{Promise.reject(l)}),T.interceptors.response.use(l=>l,l=>{var f;throw((f=l.response)==null?void 0:f.status)===401&&(n.auth.clearAppStorage(),window.location.reload()),l});const N=(0,n.wrapAxiosInstance)(T);var V=(l,f,y)=>new Promise((P,Z)=>{var H=o=>{try{O(y.next(o))}catch(M){Z(M)}},w=o=>{try{O(y.throw(o))}catch(M){Z(M)}},O=o=>o.done?P(o.value):Promise.resolve(o.value).then(H,w);O((y=y.apply(l,f)).next())});const k=()=>V(void 0,null,function*(){const{data:l}=yield N.get("/email/settings");return l.config}),$=l=>V(void 0,null,function*(){yield N.post("/email/test",l)});var le=t(67838);const X=()=>{const{formatMessage:l}=(0,x.useIntl)();return e.createElement(e.Fragment,null,e.createElement(n.SettingsPageTitle,{name:l({id:(0,u.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"})}),e.createElement(le.T,{id:"title",title:l({id:(0,u.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"}),subtitle:l({id:(0,u.Z)("Settings.email.plugin.subTitle"),defaultMessage:"Test the settings for the Email plugin"})}))};var ie=(l,f,y)=>new Promise((P,Z)=>{var H=o=>{try{O(y.next(o))}catch(M){Z(M)}},w=o=>{try{O(y.throw(o))}catch(M){Z(M)}},O=o=>o.done?P(o.value):Promise.resolve(o.value).then(H,w);O((y=y.apply(l,f)).next())});const re=()=>e.createElement(n.CheckPagePermissions,{permissions:s.Z.settings},e.createElement(se,null)),se=()=>{var l,f;const y=(0,n.useNotification)(),{formatMessage:P}=(0,x.useIntl)(),{lockApp:Z,unlockApp:H}=(0,n.useOverlayBlocker)(),{notifyStatus:w}=(0,d.G)();(0,n.useFocusWhenNavigate)();const[O,o]=(0,e.useState)({}),[M,q]=(0,e.useState)(!1),[_,ee]=(0,e.useState)(!1),[K,te]=(0,e.useState)(""),[de,ae]=(0,e.useState)(!1),[ce,ue]=(0,e.useState)({provider:"",settings:{defaultFrom:"",defaultReplyTo:"",testAddress:""}});(0,e.useEffect)(()=>{q(!0),k().then(D=>{var G;w(P({id:(0,u.Z)("Settings.email.plugin.notification.data.loaded"),defaultMessage:"Email settings data has been loaded"})),ue(D);const ne=(G=D==null?void 0:D.settings)==null?void 0:G.testAddress;ne&&te(ne)}).catch(()=>y({type:"warning",message:P({id:(0,u.Z)("Settings.email.plugin.notification.config.error"),defaultMessage:"Failed to retrieve the email config"})})).finally(()=>q(!1))},[P,y,w]),(0,e.useEffect)(()=>{O.email&&document.querySelector("#test-address-input").focus()},[O]),(0,e.useEffect)(()=>{i.validate({email:K},{abortEarly:!1}).then(()=>ae(!0)).catch(()=>ae(!1))},[K]);const pe=D=>{te(()=>D.target.value)},me=D=>ie(void 0,null,function*(){D.preventDefault();try{yield i.validate({email:K},{abortEarly:!1}),ee(!0),Z(),$({to:K}).then(()=>{y({type:"success",message:P({id:(0,u.Z)("Settings.email.plugin.notification.test.success"),defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:K})})}).catch(()=>{y({type:"warning",message:P({id:(0,u.Z)("Settings.email.plugin.notification.test.error"),defaultMessage:"Failed to send a test mail to {to}"},{to:K})})}).finally(()=>{ee(!1),H()})}catch(G){o((0,n.getYupInnerErrors)(G))}});return M?e.createElement(A.o,{labelledBy:"title","aria-busy":"true"},e.createElement(X,null),e.createElement(m.D,null,e.createElement(n.LoadingIndicatorPage,null))):e.createElement(A.o,{labelledBy:"title","aria-busy":_},e.createElement(X,null),e.createElement(m.D,null,e.createElement("form",{onSubmit:me},e.createElement(S.K,{spacing:7},e.createElement(L.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(F,{config:ce})),e.createElement(L.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(S.K,{spacing:4},e.createElement(h.Z,{variant:"delta",as:"h2"},P({id:(0,u.Z)("Settings.email.plugin.title.test"),defaultMessage:"Test email delivery"})),e.createElement(B.r,{gap:5,alignItems:"end"},e.createElement(v.P,{col:6,s:12},e.createElement(E.o,{id:"test-address-input",name:"test-address",onChange:pe,label:P({id:(0,u.Z)("Settings.email.plugin.label.testAddress"),defaultMessage:"Recipient email"}),value:K,error:((l=O.email)==null?void 0:l.id)&&P({id:(0,u.Z)(`${(f=O.email)==null?void 0:f.id}`),defaultMessage:"This is an invalid email"}),placeholder:P({id:(0,u.Z)("Settings.email.plugin.placeholder.testAddress"),defaultMessage:"ex: developer@example.com"})})),e.createElement(v.P,{col:7,s:12},e.createElement(j.z,{loading:_,disabled:!de,type:"submit",startIcon:e.createElement(c.Z,null)},P({id:(0,u.Z)("Settings.email.plugin.button.test-email"),defaultMessage:"Send test email"}))))))))))},oe=re},49066:(W,C,t)=>{t.d(C,{D:()=>A});var e=t(67294),x=t(45697),n=t(35961);const A=({children:m})=>e.createElement(n.x,{paddingLeft:10,paddingRight:10},m);A.propTypes={children:x.node.isRequired}},67838:(W,C,t)=>{t.d(C,{T:()=>z});var e=t(67294),x=t(71893),n=t(45697),A=t(72735),m=t(35961),S=t(46273);const L=a=>{const r=(0,e.useRef)(null),[i,s]=(0,e.useState)(!0),b=([R])=>{s(R.isIntersecting)};return(0,e.useEffect)(()=>{const R=r.current,T=new IntersectionObserver(b,a);return R&&T.observe(r.current),()=>{R&&T.disconnect()}},[r,a]),[r,i]};var B=t(98402);const v=(a,r)=>{const i=(0,B.useCallbackRef)(r);(0,e.useLayoutEffect)(()=>{const s=new ResizeObserver(i);return Array.isArray(a)?a.forEach(b=>{b.current&&s.observe(b.current)}):a.current&&s.observe(a.current),()=>{s.disconnect()}},[a,i])};var h=Object.defineProperty,E=Object.defineProperties,j=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(a,r,i)=>r in a?h(a,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[r]=i,I=(a,r)=>{for(var i in r||(r={}))c.call(r,i)&&g(a,i,r[i]);if(d)for(var i of d(r))p.call(r,i)&&g(a,i,r[i]);return a},Y=(a,r)=>E(a,j(r)),J=(a,r)=>{var i={};for(var s in a)c.call(a,s)&&r.indexOf(s)<0&&(i[s]=a[s]);if(a!=null&&d)for(var s of d(a))r.indexOf(s)<0&&p.call(a,s)&&(i[s]=a[s]);return i};const u=()=>{const a=(0,e.useRef)(null),[r,i]=(0,e.useState)(null),[s,b]=L({root:null,rootMargin:"0px",threshold:0});return v(s,()=>{s.current&&i(s.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{a.current&&i(a.current.getBoundingClientRect())},[a]),{containerRef:s,isVisible:b,baseHeaderLayoutRef:a,headerSize:r}},z=a=>{const{containerRef:r,isVisible:i,baseHeaderLayoutRef:s,headerSize:b}=u();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:b==null?void 0:b.height},ref:r},i&&e.createElement(F,I({ref:s},a))),!i&&e.createElement(F,Y(I({},a),{sticky:!0,width:b==null?void 0:b.width})))};z.displayName="HeaderLayout";const U=(0,x.default)(m.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${a=>a.width}px;
  z-index: 4;
  box-shadow: ${({theme:a})=>a.shadows.tableShadow};
`,F=e.forwardRef((a,r)=>{var i=a,{navigationAction:s,primaryAction:b,secondaryAction:R,subtitle:T,title:Q,sticky:N,width:V}=i,k=J(i,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const $=typeof T=="string";return N?e.createElement(U,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:V,"data-strapi-header-sticky":!0},e.createElement(S.k,{justifyContent:"space-between"},e.createElement(S.k,null,s&&e.createElement(m.x,{paddingRight:3},s),e.createElement(m.x,null,e.createElement(A.Z,I({variant:"beta",as:"h1"},k),Q),$?e.createElement(A.Z,{variant:"pi",textColor:"neutral600"},T):T),R?e.createElement(m.x,{paddingLeft:4},R):null),e.createElement(S.k,null,b?e.createElement(m.x,{paddingLeft:2},b):void 0))):e.createElement(m.x,{ref:r,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:s?6:8,background:"neutral100","data-strapi-header":!0},s?e.createElement(m.x,{paddingBottom:2},s):null,e.createElement(S.k,{justifyContent:"space-between"},e.createElement(S.k,null,e.createElement(A.Z,I({as:"h1",variant:"alpha"},k),Q),R?e.createElement(m.x,{paddingLeft:4},R):null),b),$?e.createElement(A.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},T):T)});F.displayName="BaseHeaderLayout",F.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},F.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,sticky:n.bool,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired,width:n.number},z.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},z.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired}},185:(W,C,t)=>{t.d(C,{o:()=>j});var e=t(67294),x=t(45697),n=t(71893),A=Object.defineProperty,m=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,B=(d,c,p)=>c in d?A(d,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):d[c]=p,v=(d,c)=>{for(var p in c||(c={}))S.call(c,p)&&B(d,p,c[p]);if(m)for(var p of m(c))L.call(c,p)&&B(d,p,c[p]);return d},h=(d,c)=>{var p={};for(var g in d)S.call(d,g)&&c.indexOf(g)<0&&(p[g]=d[g]);if(d!=null&&m)for(var g of m(d))c.indexOf(g)<0&&L.call(d,g)&&(p[g]=d[g]);return p};const E=n.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,j=d=>{var c=d,{labelledBy:p}=c,g=h(c,["labelledBy"]);const I=p||"main-content-title";return e.createElement(E,v({"aria-labelledby":I,id:"main-content",tabIndex:-1},g))};j.defaultProps={labelledBy:void 0},j.propTypes={labelledBy:x.string}},23293:(W,C,t)=>{t.d(C,{Z:()=>B});var e=t(67294),x=Object.defineProperty,n=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,S=(v,h,E)=>h in v?x(v,h,{enumerable:!0,configurable:!0,writable:!0,value:E}):v[h]=E,L=(v,h)=>{for(var E in h||(h={}))A.call(h,E)&&S(v,E,h[E]);if(n)for(var E of n(h))m.call(h,E)&&S(v,E,h[E]);return v};function B(v){return e.createElement("svg",L({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v),e.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),e.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),e.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}}]);
