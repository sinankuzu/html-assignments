(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[7937],{408330:(e,t,o)=>{o.d(t,{eN:()=>c,_:()=>u,kB:()=>l});var n=o(172071),s=o(966113),a=o(276775);const r=["/resource/:name/:method/","/resource/commerce/:name/:method/","/:username/pins/follow/","/email/remove/","/about/trademark/form/:claim_type/","/about/copyright/dmca-pin/web-result/:id/","/about/copyright/dmca-pin/pin/:id/","/about/copyright/dmca-pin/","/about/koplg/","/about/:lawName/","/about/radtc/","/suspension-appeal/netzdg/","/website/confirm/","/oauth/","/app-factory-oauth/","/settings/extension/uninstall/","/offsite/","/amp/(.*)"];var i=o(826067);const c=e=>e&&(0,i.Qg)(e)&&s.Z.settings.PASSWORD_RESET_URL!==e?(0,i.Qc)(e).relative:"/",l=e=>{const t=(0,i.Jx)(e);return(e=>{const t=new URL(e,window.location.origin);return r.some((e=>!!(0,a.LX)(t.pathname,{path:e,exact:!0})))})(t)||(0,i.OM)(t)===i.vx.TRUSTED_DIFFERENT_ORIGIN},u=({forceFullPageNavigation:e,history:t,next:o,noLocationReplace:s})=>{const a=(0,i.Jx)(o);l(o)||!t||e?(e&&n.Z.increment("webapp.duplo.navigateOnLogin.forceFullPageNavigation",1),window.location.assign(a)):s?t.push(c(a)):t.replace(c(a))}},630135:(e,t,o)=>{o.d(t,{E:()=>r,S:()=>i});var n=o(667294),s=o(957161);const a="_loggingInNotHome",r=e=>{e?(0,s.Nh)(a,1):(0,s.L_)(a)},i=()=>{const[e,t]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{t(!0)}),[]),e&&(0,s.qn)(a)}},967053:(e,t,o)=>{o.d(t,{Pt:()=>k,f0:()=>E,lq:()=>T});var n=o(667294),s=o(702664),a=o(231486),r=o(6637),i=o(371415),c=o(383690),l=o(743413),u=o(983360),_=o(628551),d=o(290148),g=o(81759),h=o(408330),m=o(957191),p=o(630135),f=o(643010),w=o(539278),v=o(330102),y=o(297507),R=o(3223),b=o(693099),C=o(867820),A=o(226198),x=o(408285),P=o(957161);const L=(e,t,o)=>({type:u.Df,payload:{user:e,active:t,triggerable:o}}),E=()=>{const e=(0,s.useDispatch)(),t=(0,s.useSelector)((({session:e})=>e)),o=(0,c.Z)();return(0,n.useCallback)((async(n,s,c="/",u={isAutologin:!1,isSwitchAccount:!1,noLocationReplace:!1,recaptchaV3Token:"default",noImmediateRedirect:!1,useAlternativeResourceCall:!1,trigger:"other",accountUnlinked:!1})=>{o();const{country:f,country_from_hostname:E,country_from_ip:k,region_from_ip:T,isTablet:S,isMobile:D}=t,N=!S&&!D,{isAutologin:O,isSwitchAccount:Z,noLocationReplace:U,recaptchaV3Token:I,noImmediateRedirect:j,useAlternativeResourceCall:M,trigger:z,accountUnlinked:F}=u;let q={get_user:!0,...n,app_type_from_client:6,recaptchaV3Token:I};const B=(0,g.t_)();B&&(q={...q,visited_pages_before_login:B});let H=r.Z.create("UserSessionResource",q).callCreate();if(M&&n.username_or_email&&n.password){const e=new FormData;e.append("username",n.username_or_email),e.append("password",n.password);const t={method:"POST",body:e,credentials:"include",headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":(0,_.getCsrfToken)()||"","X-Requested-With":"XMLHttpRequest"}};H=fetch("/resource/UserSessionResource/create/",t).then((e=>{if(200!==e.status){const t=new Error(e.statusText);throw t.response=e,t}return e.json()})).catch((e=>Promise.reject(e)))}try{O&&(0,C.dy)({event:"login_api_call_start",provider:n.google_open_id_token?"google":"facebook"}),(0,C.De)({action:O?"autologin":"login",event:"attempt",type:(0,d.lp)(n),trigger:z});const t=await H;O&&(0,C.dy)({event:"login_api_call_success",provider:n.google_open_id_token?"google":"facebook"}),e(L(t.resource_response.data.user,t.client_context.active_experiments,t.client_context.triggerable_experiments)),e((0,m.OD)(t.client_context.placed_experiences)),(0,i.Z)("authentication.login_success"),(0,C.De)({action:O?"autologin":"login",event:"success",type:(0,d.lp)(n),trigger:z}),a.zN(A.e7.name),a.zN(A.x3.name),(0,P.Nh)(b.AA,1),"/"!==c&&(0,p.E)(!0),Z?(0,x.Dm)().then((()=>{var e,o;const n=`/${(null===(e=t.resource_response)||void 0===e||null===(o=e.data)||void 0===o?void 0:o.user.username)||""}`+(F?`?message=${w.aU}`:"");window.location.href=n})):O&&!N||j||(0,h._)({forceFullPageNavigation:N,history:s,next:c,noLocationReplace:U}),(0,R.c_)({country:f,countryFromHostName:E,countryFromIp:k})&&(0,y.yP)({id:l.gC,eventCategory:"Logins",eventName:"Mobile"}),(0,R.$r)({country:f,countryFromHostName:E,countryFromIp:k,regionFromIp:T})&&(0,y.jw)({id:"flashtalking-m-login",eventCategory:"Logins",eventName:"Mobile"}),(0,R.NR)(f,T)&&(0,y.EN)({pixelId:v.Rj,eventCategory:"Logins",eventName:"Mobile"}),(0,R.Fc)({country:f,countryFromHostName:E,countryFromIp:k})&&(0,y.Be)({pixelId:v.HO,eventCategory:"Logins",eventName:"Mobile"})}catch(W){if(O&&(0,C.dy)({event:"login_api_call_failure",provider:n.google_open_id_token?"google":"facebook"}),1201!==W.api_error_code||O||N)throw(0,C.De)({action:O?"autologin":"login",event:"fail",type:(0,d.lp)(n),trigger:z}),Z&&(0,i.Z)("authentication.login_error"),W;n.google_open_id_token&&(n.gplus_id_token=n.google_open_id_token),s&&s.push({pathname:"/login/mfa/",state:{creds:n,next:c,phoneNumber:W.data.phone_number_end}})}}),[e,t,o])},k=(e={logoutOnAbort:!1})=>async(t,o)=>{const{session:n}=o(),{redirectUrl:s,localStorageItems:c,logoutOnAbort:l,reason:u="user_initiated",source:_}=e,d=!n.isTablet&&!n.isMobile;(0,C.tj)("logout.attempt",{tags:{app:"web_mobile",reason:u,source:_}});try{await r.Z.create("UserSessionResource",{disable_auth_failure_redirect:!0}).callDelete()}catch(g){if(!l||"abort"!==(null==g?void 0:g.type))throw(0,C.tj)("logout.error",{tags:{app:"web_mobile",reason:u,source:_}}),g;(0,i.Z)("logout.logout_ignored")}if((0,i.Z)("logout.logout_success"),(0,C.tj)("logout",{tags:{app:"web_mobile",reason:u,source:_}}),a.t8(A.e7,"True",(0,a.kZ)(A.e7)),(0,p.E)(!1),(0,P.L_)(f.Uf),(0,P.L_)(b.E9),(0,P.L_)(x.RH),(0,P.L_)(void 0),(0,P.L_)("_epik_localstore"),c)for(const e in c)(0,P.Nh)(e,c[e]);await(0,x.Dm)(),s?window.location.href=s:d&&(window.location.href="/")},T=()=>{const e=(0,s.useDispatch)(),t=(0,c.Z)();return o=>{t(),e(L(o.resource_response.data.user,o.client_context.placed_experiences,o.client_context.active_experiments)),e((0,m.OD)(o.client_context.placed_experiences))}}},332730:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(56641),s=o(954931),a=o(867820);const r=e=>{(0,s.Z)(e)||(e="/",(0,a.My)("url_reset")),(0,n.Z)(e,!1)}},539278:(e,t,o)=>{o.d(t,{Di:()=>d,Jl:()=>l,R:()=>u,ZP:()=>f,aU:()=>g,j2:()=>_,pN:()=>h,rL:()=>w,vW:()=>p});var n=o(116303),s=o(499128),a=o(349700),r=o(826067),i=o(883119),c=o(785893);const l=7e3,u="permanent_account_closure",_="account_deletion_email_sent",d="account_deactivated",g="unlink_successful",h="account_switch_to_settings";function m(e,t,o){return(0,c.jsx)(i.xv,{align:o||"center",children:(0,a.nk)(e,{username:(0,c.jsx)(i.xv,{inline:!0,weight:"bold",children:t})})})}function p({i18n:e,message:t,multipleAccounts:o,username:n=""}){switch(t){case u:return e._('Your account has been deleted. We\'re sad to see you go', 'unauthLoginPage.accountDeletedToast.message', 'Confirmation message after a user has successfully deleted their account');case _:return m(o?e._('An email has been sent with final steps to delete your account, {{username}} and its linked accounts', 'accountDeletedEmailToast.message.multipleAccounts', 'Confirmation message after a user has successfully requested multiple accounts deletion'):e._('An email has been sent with final steps to delete your account, {{username}}', 'accountDeletedEmailToast.message.singleAccount', 'Confirmation message after a user has successfully requested a single account deletion'),n);case d:return m(o?e._('The account, {{username}}, and its associated linked accounts have been deactivated', 'unauthLoginPage.deactivatedToast.message.multipleAccounts', 'Confirmation message after a user has successfully deactivated multiple accounts'):e._('The account, {{username}}, has been deactivated', 'unauthLoginPage.deactivatedToast.message.singleAccount', 'Confirmation message after a user has successfully deactivated a single account'),n);case g:return m(e._('Success! You\'ve unlinked this business account. You are currently in {{username}}.', 'authHomeFeedPage.unlinkAccountToast.message', 'Confirmation message after a user has successfully unlinked business account'),n,"start");case h:return m(e._('You\'ve switched into and are currently in the account {{username}}', 'accountSettings.switchAccountToAccountChanges', 'Confirmation message after a user has successfully switched accounts and got redirected to Account Changes'),n,"start");default:return""}}function f(e,t,o=""){if(!t||!t.search)return"";const n=(0,r.mB)(t.search).message,s=(0,r.mB)(t.search).username||o;return p({i18n:e,message:n,multipleAccounts:"true"===(0,r.mB)(t.search).multiple_accounts,username:s})}function w({showOneToast:e,i18n:t,location:o,history:a,username:i,fullName:u,avatarUrl:_}){if(!o||!o.search)return;const d=f(t,o,i||""),m=(0,r.mB)(o.search).message,p=m===h||m===g;d&&(e((({hideToast:e})=>(0,c.jsx)(s.ZP,{duration:l,onHide:e,text:d,iconThumbnail:p?(0,c.jsx)(n.Z,{name:u||"",src:_||"",size:"md"}):null}))),a.replace(o.hash?`${o.pathname}${o.hash}`:o.pathname))}},620707:(e,t,o)=>{function n(e,t){if("object"==typeof e&&"object"==typeof t){const o=Object.keys(e),n=Object.keys(t);return o.length===n.length&&o.every((o=>e[o]===t[o]))}return e===t}o.d(t,{Ak:()=>n,_Y:()=>s,qe:()=>i,xZ:()=>r});const s=(e,t)=>e.length===t.length&&e.every(((e,o)=>n(e,t[o]))),a=(e,t)=>e.length===t.length&&e.every(((e,o)=>e===t[o])),r=(e,t=a)=>o=>{const n=[];return function(...s){const a=this,r=n.find((e=>e.context===a&&t(e.args,s)));if(r)return r.result;const i={context:a,args:s,result:o.apply(this,s)};return n.push(i),e&&n.length>e&&n.shift(),i.result}},i=r(1);r()},290148:(e,t,o)=>{o.d(t,{Ny:()=>d,ZP:()=>h,eD:()=>p,lp:()=>m});var n=o(231486),s=o(794230),a=o(704115),r=o(332730),i=o(6637),c=o(704177),l=o(966113),u=o(226198),_=o(867820);const d=Object.freeze({SOFT_BANNED:0,RATE_LIMITED:1,LOGIN_ASSISTANCE:2,PASSWORD_RESET_SENT:3,PREVENT_FACEBOOK_REGISTER:4,PREVENT_GOOGLE_REGISTER:5,SUSPENDED:6});class g{static defaultLoginRedirectUrl(){return window.location.pathname===l.Z.settings.PASSWORD_RESET_URL||window.location.pathname===l.Z.settings.LOGIN_URL||window.location.pathname.startsWith(l.Z.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname+window.location.search}static defaultSocialLoginRedirectUrl(){return window.location.pathname.startsWith(l.Z.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname}static isExceedRecaptchaLocalLimit(){const e=c.ZP.localStorage.getItem("urh");if(e&&e.indexOf("|")>-1){const t=e.split("|");return 3===t.length&&(new Date).getTime()/1e3-parseInt(t[0],10)<=3600}return!1}static updateRecaptchaTimeStamp(){const e=c.ZP.localStorage.getItem("urh");let t=[];e&&(t=e.split("|"),3===t.length&&t.shift());const o=((new Date).getTime()/1e3).toString();t.push(o);const n=t.join("|");c.ZP.localStorage.setItem("urh",n)}static isFullyLoggedIn(e,t){return e&&1===t}static handleRedirect(e){if(!e){e="/";const t=(0,a.Z)();if(t){const o=t.next;o&&(e=o,delete t.next),e=(0,s.Z)(e,t)}}(0,r.Z)(e)}static handleRedirectWithFallbackWindowLocation(){this.handleRedirect(this.defaultLoginRedirectUrl())}static handleSignupRedirect(e,t){c.ZP.localStorage.setItem("signupTime",Date.now()),!t&&e&&"/"!==e?g.handleRedirect(e):g.handleRedirect("/")}static storeLoginCredentialsToBrowser(e){if(navigator.credentials&&e.username_or_email)try{const t=new window.PasswordCredential({id:e.username_or_email,password:e.password});navigator.credentials.store(t).then((()=>{(0,_.My)("navigatorCredentials.store.success")}))}catch(t){(0,_.My)("navigatorCredentials.store.error")}}static retrieveLoginCredentialsFromBrowser(){const e=window.navigator.credentials;if(!e)return new Promise(((e,t)=>{t()}));return e.get({password:!0,mediation:"silent"})}static attemptLoginWithBrowserCredentials(e,t,o){if(!e)return new Promise(((e,t)=>{t("No credentials")}));let n,s;e.password?(s="include",n=new FormData,n.append("username",e.id),n.append("password",e.password)):s=e;return fetch("/resource/UserSessionResource/create/",{method:"POST",body:n,credentials:s,headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":t||"","X-Pinterest-AppState":o,"X-Requested-With":"XMLHttpRequest"}}).then((e=>{if(200!==e.status){const t=new Error(e.statusText);throw t.response=e,t}return(0,_.My)("navigatorCredentials.login.success"),e.json()})).catch((e=>((0,_.My)("navigatorCredentials.login.failure"),Promise.reject(e))))}static fetchRecentlyLoggedOutUser(e){if(e)return Promise.reject();const t=i.Z.create("UnauthUserDataResource");return new Promise(((e,o)=>{t.callGet().then((t=>{const s=t.resource_response.data,a=!!n.U2(u.x3);return s?(s.connected_to_facebook||s.connected_to_google||s.has_password||(0,_.My)("unauth.personalized_login.no_login_methods_found"),(0,_.My)("unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_"+(a?"true":"false")),e(s)):((0,_.My)("unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_"+(a?"true":"false")),o({}))})).catch((e=>{if(e.message){const t=e.message.replace(/\s/g,"_").toLowerCase();(0,_.My)(`unauth.personalized_login.fetch_user_info.error.${t}`)}else(0,_.My)("unauth.personalized_login.fetch_user_info.error.unknown");return o(e)}))}))}static handleLoginMfa(e,t,o){(0,_.My)("multi_step_login"),g.storeLoginCredentialsToBrowser(e),o?o(e,t):(0,_.My)("unauth.login.error.CLIENT_ERROR.null_mfa_handler")}}const h=g;function m(e){return e.facebook_id?"facebook":e.google_open_id_token?"google_one_tap":e.gplus_id_token?"google":e.line_id_token?"line":e.username_or_email?"email":"other"}function p(e){return e.mfa_token?"mfa_token":e.mfa_resend?"mfa_resend":m(e)}},383690:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(667294),s=o(773285);const a=()=>{const e=(0,s.F)();return(0,n.useCallback)((()=>{e.flush()}),[e])}},780280:(e,t,o)=>{o.d(t,{B:()=>_,LC:()=>l,P2:()=>c,fH:()=>u,gf:()=>d});var n=o(667294),s=o(608832),a=o(620707),r=o(785893);const i=(0,n.createContext)();function c({children:e,value:t}){const[o,c]=(0,n.useState)(t),l=(0,n.useMemo)((()=>({requestContext:o,updateRequestContext:e=>{const t={...o,...e};(0,a.Ak)(o,e)||c(t),(0,s.J)(t)}})),[o]);return(0,r.jsx)(i.Provider,{value:l,children:e})}const l=({children:e})=>{const t=(0,n.useContext)(i);if(!t)throw new Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)},u=({children:e})=>{const t=(0,n.useContext)(i);if(!t)throw new Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t.requestContext)};function _(){const e=(0,n.useContext)(i);if(!e)throw new Error("useRequestContext must be used within a RequestContextProvider");return e.requestContext}function d(){const e=(0,n.useContext)(i);if(!e)throw new Error("useUpdateRequestContext must be used within a RequestContextProvider");return e.updateRequestContext}},608832:(e,t,o)=>{let n;function s(e){n=e}function a(){return n}o.d(t,{J:()=>s,l:()=>a})},50286:(e,t,o)=>{o.d(t,{HG:()=>c,Mm:()=>s,Wb:()=>i,ZP:()=>l,ml:()=>r});var n=o(780280);function s(e){const{isMobile:t,isTablet:o}=e.userAgent;return o?"tablet":t?"phone":"desktop"}const a=()=>s((0,n.B)()),r=()=>"phone"===a(),i=()=>"tablet"===a(),c=()=>"desktop"===a(),l=a}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/7937-f95c506c8fd9b964.mjs.map