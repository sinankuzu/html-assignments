(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[56919],{733756:(e,n,l)=>{l.d(n,{Z:()=>c});var i=l(30700),t=l(883119),s=l(785893);const o={__style:{borderRadius:"4px",padding:"10px 14px"}},r={borderWidth:"1px",borderStyle:"solid",borderColor:"white"},a={__style:{borderRadius:"4px",padding:"10px 14px 9px 8px",whiteSpace:"nowrap"}},c=({accessibilityLabel:e,color:n,customStyles:l,forwardedRef:c,icon:d,inline:p=!1,minHeight:u=40,minWidth:h=70,onTouch:_,pressState:x,shape:m,text:f})=>{const y=(e=>"primary"===e||"transparent"===e||"dark"===e?"inverse":"default")(n),b=(({color:e,icon:n})=>n?a:"transparent"===e?{__style:{...o.__style,...r}}:o)({color:n,icon:d}),g=(0,s.jsx)(t.xu,{position:"relative",children:(0,s.jsx)(t.xu,{color:n,display:p?"inlineBlock":"flex",justifyContent:"center",minHeight:u,minWidth:h,dangerouslySetInlineStyle:"pill"===m?(w=l,{__style:{borderRadius:"24px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"14px",paddingRight:"14px",...w}}):b,children:(0,s.jsxs)(t.kC,{alignItems:"center",justifyContent:"center",children:[d&&(0,s.jsx)(t.xu,{paddingX:"check"===d?2:0,children:(0,s.jsx)(t.JO,{accessibilityLabel:e,color:y,icon:d,inline:!0,size:"check"===d?16:20})}),(0,s.jsx)(t.xv,{color:y,inline:!0,size:"300",lineClamp:1,weight:"bold",children:f})]})})});var w;return _?(0,s.jsx)(i.Z,{onTouch:_,rounding:"pill"===m?"pill":2,pressState:x||"none",children:(0,s.jsx)(t.xu,{ref:c,children:g})}):g}},856919:(e,n,l)=>{l.d(n,{MZ:()=>S,di:()=>D,Ai:()=>C});var i=l(667294),t=l(474635),s=l(205443),o=l(733756),r=l(735079),a=l(954571),c=l(250059),d=l(149230),p=l(407043),u=l(48714),h=l(276775);const _=({children:e,external:n,externalQueryParams:l,target:i,href:t})=>{const{logContextEvent:s}=(0,p.v)(),o=(0,h.k6)(),r=(0,h.TH)();if(!t)return null;const a=(0,c.Z)(t);return e({navigate:e=>{e.preventDefault(),(0,d.Z)({url:a})||n?(0,u.lI)({href:a,queryParams:l,location:r},s,null):(0,u.G3)({event:e,href:t,history:o,target:"blank"===i?"blank":null})}})};var x=l(883119),m=l(785893);const f=({children:e,external:n,externalQueryParams:l,inline:i=!1,newTab:t,nofollow:s,onTouch:o,onBlur:r,onFocus:a,pressState:d,rounding:p,to:u})=>(0,m.jsx)(_,{external:n,target:t?"blank":null,externalQueryParams:l,href:u,children:({navigate:n})=>(0,m.jsx)(x.rU,{onBlur:r?({event:e})=>r(e):void 0,onFocus:a?({event:e})=>a(e):void 0,underline:"none",href:(0,c.Z)(u),inline:i,onClick:({event:e,dangerouslyDisableOnNavigation:l})=>{l(),null==o||o(e),e.defaultPrevented||n(e)},rel:s?"nofollow":"none",rounding:p,tapStyle:(Array.isArray(d)?d:[d]).includes("compress")?"compress":"none",children:e})}),y=({external:e,externalQueryParams:n,newTab:l,onTouch:i,to:t,...s})=>(0,m.jsx)(_,{external:e,target:l?"blank":null,externalQueryParams:n,href:t,children:({navigate:e})=>(0,m.jsx)(o.Z,{onTouch:n=>{null==i||i(n),n.defaultPrevented||e(n)},...s})});var b=l(949372),g=l(965708),w=l(30287),v=l(968228),j=l(266725),P=l(780280),k=l(281180),A=l(957161),T=l(622096);const Z=(e,n=!1)=>function({isAppUpsellDisabled:l,...o}){const{children:c,clientTrackingParams:d,deeplinkUri:p,external:u,onTouch:h,refresh:_,to:f,viewParameter:y,viewType:Z}=o,S=(0,b.Z)(),[C,D]=(0,i.useState)(!1),z=(0,g.Z)(),{userAgent:{platform:O},locale:I}=(0,P.B)(),L=(0,k.Tt)(),U=()=>{(0,j.j)({event_type:1701,view_type:Z,view_parameter:y}),C&&D(!1)};return(0,m.jsxs)(x.xu,{"data-test-id":"deeplink-wrapper",children:[C&&(0,m.jsx)(t.Z,{within:"deep-link-app-upsell-modal",children:({handleOpenApp:e})=>(0,m.jsx)(s.Z,{clientTrackingParams:d,isOpen:!0,onDismiss:()=>{},onOpenInApp:()=>{(0,A.Nh)("deeplinkBehavior","branchfallback"),e({deepLinkUri:p}),U()},shouldTrackDismiss:!0,to:f,viewParameter:y,viewType:Z})}),(0,m.jsx)(r.Z,{children:i=>(0,m.jsx)(e,{...o,onTouch:e=>{const t=S&&!l&&z&&!u&&!_&&!(0,w.FP)(window)&&!("ios"===O&&(I||"").startsWith("ar"))&&(0,v.kp)((0,a.Z)(null==L?void 0:L.created_at));var s;t?(e.stopPropagation(),e.preventDefault(),D(!0)):"branchfallback"!==(0,A.qn)("deeplinkBehavior")||(0,T.qn)("fallbackAttempt")||(e.stopPropagation(),e.preventDefault(),(0,T.Nh)("fallbackAttempt",1),i(p,`${window.location.origin}${s=f,"string"==typeof s?s:`${s.pathname||""}${s.search?`?${s.search}`:""}`}`),U()),n&&t||!h||h(e)},children:c})})]})},S=Z(f),C=Z(y),D=Z(o.Z,!0)},205443:(e,n,l)=>{l.d(n,{Z:()=>h});var i=l(702664),t=l(104788),s=l(430322),o=l(898781),r=l(287072),a=l(968228),c=l(194095),d=l(883119),p=l(785893);const u=({isOpen:e,onDismiss:n,onOpenInApp:l,to:c})=>{const u=(0,o.ZP)(),{isTablet:h,userAgent:_,userAgentPlatform:x}=(0,i.useSelector)((({session:e})=>e)),m=(0,a.Rp)({platform:x,userAgent:_}),f=(0,r.Z)({href:null!=c?c:""}),y=h?60:40;return(0,p.jsx)(s.default,{accessibilityModalLabel:"",isOpen:e,mobileHideCloseIcon:!0,type:"app_upsell_v1",overrideZDepth:101,closeOnOutsideClick:!1,onDismiss:()=>{},children:(0,p.jsxs)(d.xu,{padding:3,"data-test-id":"appUpsell-iframe",children:[(0,p.jsx)(d.xu,{display:"inlineBlock",position:"absolute",children:(0,p.jsx)(d.xu,{"data-test-id":"appUpsell-continue",children:(0,p.jsx)(d.hU,{accessibilityLabel:u._('close icon background', 'accesibility label for close icon on a overlay', 'accesibility label for close icon on a overlay'),icon:"cancel",onClick:({event:e,dangerouslyDisableOnNavigation:l})=>{n({event:e}),f&&!e.defaultPrevented&&(l(),f({event:e}))},size:"lg"})})}),(0,p.jsxs)(d.xu,{paddingX:2,paddingY:6,children:[(0,p.jsx)(d.xu,{paddingY:2,justifyContent:"center",display:"flex",children:m?(0,p.jsx)(t.Z,{size:y}):(0,p.jsx)(d.JO,{color:"brandPrimary",icon:"pinterest",accessibilityLabel:"Pinterest App",size:y})}),(0,p.jsxs)(d.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",children:[(0,p.jsx)(d.xu,{paddingY:2,children:(0,p.jsx)(d.X6,{align:"center",size:"400",children:m?u._('Try Pinterest Lite', 'mweb.app_upsell.lite_app_upsell_title', 'Mobile Web App Upsell title informing the value of downloading the lite app'):u._('The best experience is on the app', 'mweb.unauth.app_upsell.app_value_prop', 'Mobile Web App Upsell title on Pin click informing the value of downloading an pp')})}),(0,p.jsx)(d.xv,{align:"center",size:"300",children:m?u._('A space-saving way to discover new ideas', 'mweb.app_upsell.lite_app_value_prop', 'Mobile Web App Upsell subheading informing the user the value of downloading the lite app'):u._('Free, unlimited access to ideas', 'Value proposition on mobile web home page', 'Value proposition on mobile web home page')}),(0,p.jsx)(d.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{display:"grid"}},justifyContent:"center",marginTop:8,children:(0,p.jsx)(d.zx,{fullWidth:!0,size:"lg",color:"red",onClick:l,text:u._('Get the app', 'mweb.app_upsell.app_upsell_button_text', 'Button to get the Pinterest Lite app')})})]})]})]})})};function h({clientTrackingParams:e,isOpen:n,onDismiss:l,onOpenInApp:i,shouldTrackDismiss:t,to:s,viewParameter:o,viewType:r}){return(0,p.jsx)(c.Z,{clientTrackingParams:e,viewType:r,viewParameter:o,children:(0,p.jsx)(u,{isOpen:n,onDismiss:e=>{t&&(0,c.y)(),l(e)},onOpenInApp:()=>{(0,c.y)(),i()},to:s})})}},194095:(e,n,l)=>{l.d(n,{Z:()=>p,y:()=>d});var i=l(667294),t=l(807609),s=l(674806),o=l(30287),r=l(622096),a=l(957161),c=l(785893);const d=()=>{(0,a.Nh)("appUpsell",Date.now()),(0,a.qn)("firstUpsellTime")||(0,a.Nh)("firstUpsellTime",Date.now()),(0,r.Nh)("showedAppUpsellCurrentSession",!0)};function p({children:e,clientTrackingParams:n,viewParameter:l,viewType:r}){return(0,t.Z)()||(0,o.FP)(window)?null:(0,c.jsx)(s.Z,{viewType:r,viewParameter:l,component:13106,clientTrackingParams:n,children:(0,c.jsx)(i.Fragment,{children:e})})}},104788:(e,n,l)=>{l.d(n,{Z:()=>t});var i=l(785893);function t({size:e,noCircle:n}){return(0,i.jsxs)("svg",{height:e,style:{display:"block"},viewBox:n?"3 3 70 70":"-3 -3 82 82",width:e,children:[n?null:(0,i.jsx)("circle",{cx:"38",cy:"38",fill:"white",r:"40"}),(0,i.jsx)("path",{d:"M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z",fill:"#fb7072",fillRule:"evenodd"})]})}},283698:(e,n,l)=>{function i(e){return"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"requestAnimationFrame")||e&&e(),window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{e&&e()}))}))}l.d(n,{Z:()=>i})},966476:(e,n,l)=>{l.d(n,{Z:()=>t});var i=l(667294);const t=()=>{const[e,n]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{n(!0)}),[]),e}},430322:(e,n,l)=>{l.r(n),l.d(n,{default:()=>x});var i=l(667294),t=l(124580),s=l(283698),o=l(223815),r=l(50286),a=l(898781),c=l(494349),d=l(780280),p=l(883119),u=l(968121),h=l(867820),_=l(785893);function x({_dangerouslyDisableScrollBoundaryContainer:e,accessibilityModalLabel:n,align:l="center",allowScroll:x=!1,children:m,closeOnOutsideClick:f=!0,footer:y,heading:b,mobileAccessibilityCloseIconLabel:g,mobileHideCloseIcon:w,mobileIsFullscreen:v,isOpen:j,mobileIsSlideUp:P,modalStyle:k,onDismiss:A,overrideZDepth:T,subHeading:Z,type:S}){const C=(0,a.ZP)(),{isRTL:D}=(0,d.B)(),z=(0,i.useRef)(!1),[O,I]=(0,i.useState)(!1),{setAppFocusState:L}=(0,c.I)(),U=(0,r.ZP)();(0,i.useEffect)((()=>{(0,h.My)(`mweb_unauth.mobile_modal.${S||"unknown_type"}.did_mount.is_open.${String(!!j)}`)}),[j,S]),(0,i.useEffect)((()=>(z.current=(0,s.Z)((()=>{z.current&&I(!0)})),()=>{"undefined"!=typeof window&&Object.prototype.hasOwnProperty.call(window,"cancelAnimationFrame")&&z.current&&(window.cancelAnimationFrame(z.current),z.current=null)})),[]),(0,i.useEffect)((()=>(j?(t.Z.pause(),L(!1)):(t.Z.resume(),L(!0)),()=>{j&&(t.Z.resume(),L(!0))})),[L,j]);const B=j&&!x;(0,i.useEffect)((()=>(B&&(()=>{if(document.body){const{body:{style:e}}=document;e.overflow="hidden",e.touchAction="none"}})(),()=>{B&&(()=>{if(document.body){const{body:{style:e}}=document;e.overflow="visible",e.touchAction="auto"}})()})),[B]);const F=(0,u.bf)();if(!j)return null;const M=P?(0,u.Vf)({isFullscreen:v,isTablet:"tablet"===U,isShowing:O,type:S}):(0,u.JN)({isFullscreen:v,isTablet:"tablet"===U,modalStyle:k,type:S});return(0,_.jsx)(o.Z,{children:(0,_.jsx)(p.mh,{children:(0,_.jsxs)(p.xu,{"aria-label":n,display:"inlineBlock",zIndex:T?new p.Ry(T):u.ZM,position:"relative",role:"dialog",children:[(0,_.jsx)(p.iP,{accessibilityLabel:C._('Mobile Signup Modal Mask', 'mweb.signup_modal.mask', 'The acessibility label for the mask of mobile signup modal'),onTap:({event:e})=>{const n=e,l=A?"with":"without",i=S||"unknown_type";(0,h.tj)(`mweb_unauth.mobile_modal.wash_tap.${i}.${l}_dismissal`,{x:n.clientX,y:n.clientY}),f&&A&&A()},tapStyle:"none",children:(0,_.jsx)(p.xu,{position:"fixed",top:!0,left:!0,dangerouslySetInlineStyle:F})}),(0,_.jsxs)(p.xu,{position:"fixed",color:"default",dangerouslySetInlineStyle:M,children:[(0,_.jsxs)(p.kC,{alignItems:"center",justifyContent:"start",width:"100%",gap:{row:2,column:0},children:[g&&!w?(0,_.jsx)(p.xu,{padding:2,children:(0,_.jsx)(p.hU,{accessibilityLabel:g,iconColor:"darkGray",icon:"cancel",onClick:A,padding:4,size:"sm"})}):null,b?(0,_.jsx)(p.kC.Item,{flex:"grow",children:(0,_.jsx)(p.kC,{direction:"column",alignItems:"center",justifyContent:"center",children:(0,_.jsxs)(p.xu,{dangerouslySetInlineStyle:g&&!w?(0,u.ju)(D):{__style:{}},children:[v?b:(0,_.jsx)(p.xv,{align:l,weight:"bold",size:"400",children:b}),Z?(0,_.jsx)(p.xv,{align:l,children:Z}):null]})})}):null]}),(0,_.jsxs)(p.xu,{overflow:e?"visible":"auto",children:[m,y]})]})]})})})}},954571:(e,n,l)=>{l.d(n,{Z:()=>i});function i(e){if(!e)return!1;const n=new Date(e);return n.setDate(n.getDate()+28),(new Date).getTime()<n.getTime()}},807609:(e,n,l)=>{l.d(n,{Z:()=>s});var i=l(411465),t=l(966476);const s=()=>{const e=(0,i.Z)(),n=(0,t.Z)();return e&&!n}},411465:(e,n,l)=>{l.d(n,{G:()=>r,Z:()=>a});var i=l(667294),t=l(276775),s=l(785893);const o=(0,i.createContext)(!0);function r({children:e}){const n=(0,t.TH)(),[l,r]=(0,i.useState)(!0),a=(0,i.useRef)(n);return(0,i.useEffect)((()=>{a.current!==n&&(a.current=n,r(!1))}),[n]),(0,s.jsx)(o.Provider,{value:l,children:e})}function a(){return(0,i.useContext)(o)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/56919-d60ffca2ceeb2e31.mjs.map