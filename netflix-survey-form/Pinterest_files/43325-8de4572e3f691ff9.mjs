(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[43325],{182666:e=>{e.exports="https://s.pinimg.com/webapp/btn_base-3772d107.png"},843325:(e,t,o)=>{o.d(t,{Z:()=>Y});var n=o(667294),i=o(702664),s=o(721809),a=o(867820),r=o(773285),l=o(276775),c=o(898781),h=o(467570),d=o(883119),u=o(785893);function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}const g={defaultButton:{display:"flex",alignItems:"center",backgroundColor:"#1877F2",border:"none",height:"40px",transition:"opacity .2s linear",width:"100%",minWidth:"240px",borderRadius:"20px",padding:"0px 0px 0px 8px"},roundedButton:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#FFF",border:"none",height:"48px",transition:"opacity .2s linear",width:"48px",marginBottom:"8px",borderRadius:"50%"},buttonText:{fontFamily:"Helvetica, Arial, sans-serif",fontWeight:"bold",color:"#fff",fontSize:"16px",paddingRight:"8px",letterSpacing:"0.25px"}};class _ extends n.Component{constructor(...e){super(...e),p(this,"state",{fbReady:!1,showSocialAuthDisabledModal:!1}),p(this,"connectCallback",(({creds:e,data:t})=>{this.props.onFacebookConnectSuccess(e,t)})),p(this,"handleConnectClick",(()=>{(0,a.My)("unauth_mweb.facebook_connect.button_click");const{onTouch:e,mwebFacebookDisabled:t}=this.props;e&&e(),t?this.setState({showSocialAuthDisabledModal:!0}):this.state.fbReady&&(0,h.JF)().then(this.connectCallback,this.props.onFacebookConnectError)})),p(this,"renderRoundButton",(()=>(0,u.jsxs)(d.kC,{alignItems:"center",direction:"column",justifyContent:"start",children:[(0,u.jsx)("button",{onClick:this.handleConnectClick,style:g.roundedButton,type:"button",children:(0,u.jsx)(d.JO,{accessibilityLabel:this.props.i18n._('facebook', 'accessible label for facebook icon', 'accessible label for facebook icon'),color:"shopping",icon:"facebook",inline:!0,size:20})}),(0,u.jsx)(d.xv,{color:"inverse",size:"200",children:this.props.i18n._('Facebook', 'Facebook company name', 'Facebook company name')})]})))}componentDidMount(){this.props.mwebFacebookDisabled||((0,h.we)(this.props.locale).then((()=>{this.setState({fbReady:!0})})),window.addEventListener("message",this.handleMessageEvent,!1))}handleMessageEvent(e){(0,h.s0)(e,(e=>(0,a.My)(`unauth_mweb.${e}`)))}componentWillUnmount(){window.removeEventListener("message",this.handleMessageEvent)}renderPersonalizedButton(){const{checkExperiment:e,isRerequest:t}=this.props,o=`${this.props.type||"continue"}_with`,n="rounded",i=this.props.fbUseContinueAs?"true":"false";return(0,u.jsxs)(d.xu,{bottom:!0,left:!0,right:!0,top:!0,dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},position:"absolute",rounding:5,children:[t?(0,u.jsx)("div",{className:"fb-login-button","data-width":"100%","data-max-rows":"1","data-size":"large","data-button-type":o,"data-layout":n,"data-show-faces":"false","data-auth-type":"rerequest","data-scope":h.$.join(","),"data-auto-logout-link":"false","data-use-continue-as":e("pcons_mweb_fb_shadow_test").group.startsWith("enabled_no_continue")?"false":i,"shadow-test":e("pcons_mweb_fb_shadow_test").anyEnabled?"true":"false"}):(0,u.jsx)("div",{className:"fb-login-button","data-width":"100%","data-max-rows":"1","data-size":"large","data-button-type":o,"data-layout":n,"data-show-faces":"false","data-scope":h.$.join(","),"data-auto-logout-link":"false","data-use-continue-as":e("pcons_mweb_fb_shadow_test").group.startsWith("enabled_no_continue")?"false":i,"shadow-test":e("pcons_mweb_fb_shadow_test").anyEnabled?"true":"false"}),this.state.showSocialAuthDisabledModal&&(0,u.jsx)(s.Z,{type:"facebook",onDismiss:()=>this.setState({showSocialAuthDisabledModal:!1})})]})}render(){const{isRounded:e}=this.props;return e?this.renderRoundButton():(0,u.jsxs)(d.xu,{position:"relative","data-test-id":"FacebookConnectContainer",children:[this.renderPersonalizedButton(),(0,u.jsxs)("button",{onClick:this.handleConnectClick,style:g.defaultButton,type:"button","data-test-id":"FacebookConnectButton",children:[(0,u.jsx)(d.xu,{color:"default",rounding:3,dangerouslySetInlineStyle:{__style:{paddingTop:"5px",paddingLeft:"3px",paddingRight:"2px",marginLeft:"4px",marginRight:"4.4px"}},children:(0,u.jsx)(d.JO,{accessibilityLabel:this.props.i18n._('facebook', 'accessible label for facebook icon', 'accessible label for facebook icon'),color:"shopping",icon:"facebook",inline:!0,size:19})}),(0,u.jsx)(d.xu,{alignItems:"center",display:"flex",justifyContent:"center",flex:"grow",marginEnd:1,children:(0,u.jsx)("span",{style:g.buttonText,children:this.props.buttonText})})]}),this.state.showSocialAuthDisabledModal&&(0,u.jsx)(s.Z,{type:"facebook",onDismiss:()=>this.setState({showSocialAuthDisabledModal:!1})})]})}}function b(e){var t;const o=(0,c.ZP)(),{checkExperiment:n}=(0,r.F)(),{locale:s}=(0,i.useSelector)((e=>e.session)),{anyEnabled:a}=n("mweb_facebook_disabled");return(null===(t=(0,l.k6)().location.state)||void 0===t?void 0:t.isAppFactoryOAuth)?null:(0,u.jsx)(_,{...e,i18n:o,locale:s,mwebFacebookDisabled:a,checkExperiment:n})}var m=o(7111),x=o(30700),f=o(176532),w=o(160585),k=o(182666),y=o.n(k),L=o(966113),A=o(829407),T=o(826067),C=o(780280),E=o(957161);const j={defaultButton:{display:"flex",alignItems:"center",backgroundColor:"#00C300",border:"none",height:"40px",transition:"opacity .2s linear",width:"100%",borderRadius:"20px",padding:"0px 0px 0px 8px"},lineLogo:{borderRadius:"12px",backgroundColor:"#00C300",width:"32px",height:"32px"},buttonText:{fontWeight:"bold",color:"#fff",fontSize:"16px",paddingRight:"33px"}},P=({buttonText:e,onLineConnectSuccess:t,onLineConnectError:o,onTouch:n})=>{const i=(0,c.ZP)(),{checkExperiment:s}=(0,r.F)(),{anyEnabled:l}=s("mweb_line_oauth_jp"),{anyEnabled:h}=s("mweb_line_oauth_jp_android"),p=l||h,g=(0,w.Z)(10),{locale:_}=(0,C.B)();let b;const m=e=>{const n=(0,T.mB)(e);if(n.state&&n.code&&n.state===g){b&&!b.closed&&b.close();const e=`${window.location.origin}/oauth/line/redirect`;(0,f.Z)({url:"/oauth/line/verify",type:"POST",data:{code:n.code,redirect_uri:e}}).promise.then((({ok:e,responseText:n})=>{if(e&&n){const e=JSON.parse(n),{id_token:o,access_token:i}=e;o&&i&&t({line_id_token:o,line_access_token:i},{line_id_token:o,line_access_token:i})}else o()}))}},x=e=>{e.isTrusted&&e.origin===window.location.origin&&e.data&&m(String(e.data))},k=e=>{if(e.isTrusted&&e.url.startsWith(window.location.origin)&&"lineOAuthOneTimeCode"===e.key){const e=(0,E.qn)("lineOAuthOneTimeCode");e&&m(e)}};(0,A.Z)((()=>()=>{window.removeEventListener("message",x),window.removeEventListener("storage",k),(0,E.L_)("lineOAuthOneTimeCode"),b&&!b.closed&&b.close()}));const P=j.defaultButton;return p?(0,u.jsx)(d.xu,{position:"relative","data-test-id":"LineConnectContainer",children:(0,u.jsxs)("button",{onClick:()=>{(0,a.My)("unauth_mweb.line_connect.button_click"),n&&n();const e=`${window.location.origin}/oauth/line/redirect`;window.addEventListener("message",x,!1),window.addEventListener("storage",k),b=window.open(`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${L.Z.settings.LINE_CLIENT_ID}&redirect_uri=${encodeURIComponent(e)}&state=${g}&ui_locales=${_}&scope=profile%20openid%20email`,"_blank")},style:P,type:"button","data-test-id":"line-connect-button",children:[(0,u.jsx)("img",{style:j.lineLogo,src:y(),alt:i._('line', 'accessible label for line icon', 'accessible label for line icon')}),(0,u.jsx)(d.kC,{alignItems:"center",justifyContent:"center",flex:"grow",children:(0,u.jsx)("span",{style:j.buttonText,children:e})})]})}):null};var S=o(638543),v=o(474635),z=o(53987);function B(){const e=(0,c.ZP)(),t=(0,l.TH)(),{userAgentPlatform:o}=(0,i.useSelector)((({session:e})=>e)),{pathname:n}=t;return(0,u.jsx)(d.xu,{"data-test-id":"continue-app-button",marginBottom:2,children:(0,u.jsx)(v.Z,{componentType:13196,within:"unauth-signup-modal",children:({handleOpenApp:i})=>(0,u.jsx)(d.zx,{text:e._('Get Pinterest App', 'unauth.modal.get_app.button_text', 'App download button text'),color:"red",fullWidth:!0,onClick:()=>{(0,a.My)("mweb.unauth.signup_modal.download_app_button.click"),n&&i({deepLinkUri:!(0,z.cD)(t)||"ios"!==o&&"ipad"!==o?n.substr(1):"user"+n})}})})})}var F=o(499128),R=o(50286),O=o(634123),D=o(738759),Z=o(400660),M=o(185894),I=o(597897),U=o(584595),N=o(45169),W=o(169347),H=o(266725),$=o(967053),q=o(760547),J=o(343341);function K(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class G extends n.PureComponent{constructor(...e){super(...e),K(this,"state",{isLoading:!1,showRegisterLoading:!1,signupPlatform:"default"}),K(this,"onRegisterSuccess",(e=>{const{navigateToUrl:t,next:o}=this.props;this.trackSignupLoginEvent(7487,e),(0,a.NC)("signup_via_login_buttons"),["facebook","google"].includes(e)&&(o&&t(o),t("/")),this.setState({showRegisterLoading:!1})})),K(this,"onRegisterFailure",((e,t)=>{this.trackSignupLoginEvent(7488,t),this.props.showToast((({hideToast:t})=>(0,u.jsx)(F.ZP,{text:e.message||this.props.i18n._('Sorry! Something went wrong on our end.', 'Error logging on', 'Error logging on'),onHide:t}))),this.setState({isLoading:!1,showRegisterLoading:!1})})),K(this,"handlePostLoginRegistration",((e,t)=>{const{beforeRegister:o,checkExperiment:n}=this.props;o&&n("mweb_unauth_signup_confirmation").anyEnabled?o(e,t):t()})),K(this,"onLoginError",((e,t,o,n)=>{this.setState({isLoading:!1}),!t||t.api_error_code!==U.xN&&t.api_error_code!==U.lg&&t.api_error_code!==U.Pv?t?((0,a.My)(`mweb_login_button_skip_register.api_error_code.${t.api_error_code}`),this.props.showToast((({hideToast:e})=>(0,u.jsx)(F.ZP,{text:t.api_error_code&&t.message?t.message:this.props.i18n._('Sorry, we can\'t log you in.', 'Error message when user having trouble login in.', 'Error message when user having trouble login in.'),onHide:e})))):((0,a.My)("unauth_mweb.login.unexpected_error"),this.props.showToast((({hideToast:e})=>(0,u.jsx)(F.ZP,{text:this.props.i18n._('Sorry, we can\'t log you in.', 'Error message when user having trouble login in.', 'Error message when user having trouble login in.'),onHide:e})))):"facebook"!==n||o.email?"line"===n?t.api_error_code===U.Pv?this.redirectToLineEmailCollect(o):this.registerAfterLoginError(e,t,o,n):this.handlePostLoginRegistration(o.email||"",(()=>this.registerAfterLoginError(e,t,o,n))):(0,h.uP)("email").then((({hasPerm:i})=>{this.handlePostLoginRegistration("",(()=>this.redirectToEmailCollect(o,e,t,n))),(0,a.My)(`unauth_mweb.reg_via_fb.has_email_perm.${String(!!i)}`)})).catch((i=>{this.handlePostLoginRegistration("",(()=>this.registerAfterLoginError(e,t,o,n)))}))})),K(this,"getAuxDataSignupLoginMethod",(e=>{switch(e){case"facebook":return 2;case"google":return 3;case"line":return 8;default:return}})),K(this,"getViewParameterType",(e=>{switch(e){case"facebook":return 3205;case"google":return 3204;case"line":return 3556;default:return}})),K(this,"trackSignupLoginEvent",((e,t)=>{const{isAuthenticated:o,isLimitedLoginUser:n}=this.props;(0,H.j)({event_type:e,view_type:10,view_parameter:this.getViewParameterType(t),aux_data:{...o?{login_state:n?2:1}:{},signup_login_method:this.getAuxDataSignupLoginMethod(t)}})})),K(this,"trackButtonTap",(e=>{const{isAuthenticated:t,isLimitedLoginUser:o,viewParameter:n}=this.props;(0,H.So)({view_type:10,view_parameter:n,element:e,aux_data:{...t?{login_state:o?2:1}:{}}})})),K(this,"registerAfterLoginError",((e,t,o,n)=>{const{checkExperiment:i,deviceType:s,flushExp:r}=this.props;if((0,a.My)("unauth_mweb.facebook_signup_attempt"),o.gender||(0,a.My)("unauth_mweb.facebook_signup_attempt.nogender"),this.includeAgeStep(n,o)&&("line"!==n||i("desktop"===s?"web_unauth_line_age_collection":"mweb_unauth_line_age_collection").anyEnabled))r(),this.props.history.push({pathname:"/signup/thirdpartyage/",state:{signupOptions:"facebook"===n?{...o,email_source_site:N.E_.FACEBOOK}:o,signupPlatform:n}});else{"facebook"===n&&o.birthday&&(o.birthday=String((0,W.r)(o.birthday||""))),this.setState({isLoading:!0,showRegisterLoading:!0,signupPlatform:n}),this.trackSignupLoginEvent(7537,n);const e="facebook"===n?{...o,email_source_site:N.E_.FACEBOOK,birthday_source_site:N.E_.FACEBOOK}:o;this.props.register(e).then((()=>this.onRegisterSuccess(n)),(e=>this.onRegisterFailure(e,n)))}})),K(this,"redirectToEmailCollect",((e,t,o,n)=>{const{country:i}=this.props;this.props.history.push({pathname:"/signup/fbemailcollect/",state:{signupOptions:e,isGDPREUCountry:(0,N.NN)(i),country:i,includeAgeStep:this.includeAgeStep("facebook",e)}})})),K(this,"redirectToLineEmailCollect",(e=>{this.props.history.push({pathname:"/signup/line-email-collect/",state:{signupOptions:e}})})),K(this,"includeAgeStep",((e,t)=>"facebook"!==e||!t.birthday||!(0,W.h)(t.birthday||"",18))),K(this,"handleFacebookError",(()=>{const{fbConnectHandler:e}=this.props;e&&e("error"),this.props.showToast((({hideToast:e})=>(0,u.jsx)(F.ZP,{text:this.props.i18n._('Unable to connect to Facebook', 'Error logging on with Facebook', 'Error logging on with Facebook'),onHide:e})))})),K(this,"handleLineError",(()=>{this.props.showToast((({hideToast:e})=>(0,u.jsx)(F.ZP,{text:this.props.i18n._('Unable to connect to Line', 'Error logging on with Line', 'Error logging on with Line'),onHide:e})))})),K(this,"handleSignupTouch",(({event:e})=>{const{from:t,history:o,isBusiness:n,next:i,onSignupTouch:s,setLoginSignupFrom:r,location:l,isRedirectToNextParamAfterSignup:c}=this.props;e&&(e.stopPropagation(),e.preventDefault()),(0,a.NC)("press_email_signup"),(0,a.LW)({action:"click",pageLocation:l,item:"email-signup-button"}),s&&s(),t&&r(t),this.trackButtonTap(31),o.push({pathname:n?"/business/signup/step1/":"/signup/step1/",search:l.search,state:{next:i,isRedirectToNextParamAfterSignup:c}})})),K(this,"handleLoginTouch",(({event:e})=>{const{isBusiness:t,footerCTA:o,from:n,history:i,next:s,onLoginTouch:r,location:l,isRedirectToNextParamAfterSignup:c}=this.props;e.stopPropagation(),e.preventDefault(),r&&r(),n&&this.props.setLoginSignupFrom(n),(0,a.LW)({action:"click",pageLocation:l,item:"login-button"}),this.trackButtonTap(30);const h=o||"button";(0,a.My)(`unauth_mweb.login_buttons.footer.${h}`),(0,a.NC)("press_login"),i.push({pathname:t?"/business/login/":"/login/",search:l.search,state:{next:s,isRedirectToNextParamAfterSignup:c}})})),K(this,"handleFacebookTouch",(()=>{const{onFacebookTouch:e,location:t}=this.props;e&&e(),(0,a.LW)({action:"click",pageLocation:t,item:"facebook-connect-button"}),this.trackButtonTap(68)})),K(this,"handleLineTouch",(()=>{this.trackButtonTap(12277),(0,a.LW)({action:"click",pageLocation:this.props.location,item:"line-connect-button"})})),K(this,"login",(e=>(t,o)=>{const{fbConnectHandler:n,history:i,login:s,next:r,location:l,noImmediateRedirect:c}=this.props,h="google"===e?"gsi_btn":"other",d=l.state&&l.state.switch_account?{switchAccount:!0,trigger:h}:{noImmediateRedirect:c,trigger:h};"facebook"===e&&n&&n("success"),(0,a.NC)(e+"_login_success"),this.trackSignupLoginEvent(7534,e),s(t,i,r,d).then((()=>{this.trackSignupLoginEvent(7536,e)})).catch((n=>{this.trackSignupLoginEvent(7535,e),this.onLoginError(t,n,o,e)})),this.setState({isLoading:!0,showRegisterLoading:!1,signupPlatform:e})})),K(this,"renderRegularButtons",(()=>{const{isBusiness:e,locale:t,googleText:o,facebookText:i,lineText:s,showEmailButton:a,fbButtonType:r,isRerequest:l,isAuthenticated:c,showAppInstallButton:h}=this.props;let p=this.props.i18n._('Continue with email', 'Sign up button', 'Sign up button'),g=2;return e&&(p=this.props.i18n._('Create account', 'Button text for creating a business account', 'Button text for creating a business account'),g=-2),(0,u.jsxs)(n.Fragment,{children:[h&&(0,u.jsx)(B,{}),a&&(0,u.jsx)(d.xu,{"data-test-id":"continue-email-button",marginBottom:g,children:(0,u.jsx)(d.zx,{fullWidth:!0,color:h?"gray":"red",text:p,onClick:this.handleSignupTouch})}),i&&(0,u.jsx)(d.xu,{marginBottom:2,"data-test-id":"facebook-connect-button",children:(0,u.jsx)(b,{buttonText:i,locale:t,onFacebookConnectError:this.handleFacebookError,onFacebookConnectSuccess:this.login("facebook"),type:r,fbUseContinueAs:this.props.fbUseContinueAs,onTouch:this.handleFacebookTouch,isRerequest:l})}),o&&(0,u.jsx)(d.xu,{marginBottom:2,"data-test-id":"google-connect-button",children:(0,u.jsx)(S.Z,{isAuthenticated:c,onGoogleConnectSuccess:this.login("google")})}),s&&(0,u.jsx)(d.xu,{marginBottom:2,"data-test-id":"line-connect-button",children:(0,u.jsx)(P,{buttonText:s,onLineConnectError:this.handleLineError,onLineConnectSuccess:this.login("line"),onTouch:this.handleLineTouch})})]})}))}renderFooterCTA(){const{footerCTA:e,increasedSpaceBelow:t,isMobileHomepage:o,removeLoginContainerPaddingY:n,textIsDark:i}=this.props;return"member_link"===e?(0,u.jsx)(d.xu,{marginTop:-4,"data-test-id":"login-member",children:(0,u.jsx)(x.Z,{pressState:"none",onTouch:e=>this.handleLoginTouch({event:e}),children:(0,u.jsx)(d.xu,{paddingY:n?0:4,marginBottom:t?-1:-2,children:(0,u.jsx)(d.xv,{align:"center",size:"200",weight:"bold",color:o&&!i?"light":"dark",children:this.props.i18n._('Already a member? Log in', 'Link on mobile web sign up modal to direct unauth users to the login page', 'Link on mobile web sign up modal to direct unauth users to the login page')})})})}):"not_you_link"===e?(0,u.jsx)(d.xu,{marginTop:-3,"data-test-id":"LoginButtonsNotYoucontainer",children:(0,u.jsx)(x.Z,{pressState:"none",onTouch:e=>this.handleLoginTouch({event:e}),children:(0,u.jsxs)(d.xv,{size:"200",inline:!0,color:"default",children:[this.props.i18n._('Not you? ', 'Text for if the user is shown the wrong Facebook profile image for their account', 'Text for if the user is shown the wrong Facebook profile image for their account'),(0,u.jsx)(d.xv,{color:"default",inline:!0,size:"200",weight:"bold",children:this.props.i18n._('Log in as a different user.', 'Clickable text that takes the user to the login page', 'Clickable text that takes the user to the login page')})]})})}):(0,u.jsx)(d.xu,{marginBottom:5,"data-test-id":"login-button",children:(0,u.jsx)(d.zx,{fullWidth:!0,color:"transparent",onClick:this.handleLoginTouch,text:this.props.i18n._('Log in', 'Login page button', 'Login page button')})})}renderRoundedButtons(){const{locale:e,fbButtonType:t,isRerequest:o}=this.props;return(0,u.jsxs)(d.kC,{alignItems:"center",direction:"column",justifyContent:"start",children:[(0,u.jsx)(d.xu,{marginBottom:4,children:(0,u.jsx)(d.xv,{align:"center",color:"inverse",size:"200",children:this.props.i18n._('Sign up to get started', 'Sign up CTA', 'Sign up CTA')})}),(0,u.jsxs)(d.kC,{alignItems:"stretch",justifyContent:"start",direction:"row",children:[(0,u.jsxs)(d.xu,{"data-test-id":"signup-button",rounding:"circle",display:"flex",direction:"column",alignItems:"center",marginBottom:4,marginEnd:4,children:[(0,u.jsx)("button",{onClick:this.handleSignupTouch,style:{border:"none",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#FFF",height:"48px",width:"48px",marginBottom:"8px",borderRadius:"50%",cursor:"pointer"},type:"button",children:(0,u.jsx)(d.JO,{accessibilityLabel:this.props.i18n._('Continue with email', 'Sign up with email button', 'Sign up with email button'),icon:"gmail",color:"default",inline:!0,size:16})}),(0,u.jsx)(d.xv,{color:"inverse",size:"200",children:this.props.i18n._('Email', 'Icon text for continuing with email', 'Icon text for continuing with email')})]}),(0,u.jsx)(d.xu,{marginEnd:4,children:(0,u.jsx)(b,{locale:e,onFacebookConnectError:this.handleFacebookError,onFacebookConnectSuccess:this.login("facebook"),type:t,fbUseContinueAs:this.props.fbUseContinueAs,onTouch:this.handleFacebookTouch,isRerequest:o,isRounded:!0})}),(0,u.jsx)(S.Z,{onGoogleConnectSuccess:this.login("google")})]})]})}render(){const{isBusiness:e,showTextDivider:t,roundButtons:o,showLoginButtons:n,secondaryAccountFlowEnabled:i}=this.props,{showRegisterLoading:s,isLoading:a,signupPlatform:r}=this.state,l=e?i?6:-5:0;return(0,u.jsxs)(d.xu,{marginTop:l,maxWidth:400,marginStart:"auto",marginEnd:"auto","data-test-id":"LoginButtonsContainer",children:[t&&(0,u.jsx)(d.xu,{marginBottom:3,marginTop:3,children:(0,u.jsx)(d.xv,{align:"center",size:"100",weight:"bold",children:this.props.i18n._('OR', 'Separator for email login button and social login button', 'Separator for email login button and social login button')})}),(0,u.jsx)(d.xu,{marginBottom:6,children:o?this.renderRoundedButtons():this.renderRegularButtons()}),n&&this.renderFooterCTA(),a&&(s?(0,u.jsx)(D.Z,{platform:"line"===r?"default":r}):(0,u.jsx)(m.Z,{}))]})}}K(G,"defaultProps",{next:"/",fbUseContinueAs:!0,footerCTA:"button"});const Y=(0,i.connect)((({session:e,users:t={}},o)=>({country:e.country,locale:e.locale,isAuthenticated:e.isAuthenticated,isLimitedLoginUser:(0,Z.xT)(t[e.userId]),isTablet:e.isTablet})),(()=>({})))((function(e){const t=(0,l.k6)(),o=(0,l.TH)(),s=(0,c.ZP)(),{showToast:a}=(0,J.F9)(),h=(0,i.useDispatch)(),d=(0,$.f0)(),{showEmailButton:p,showLoginButtons:g}=e,_=(0,I.U)(),b=(0,r.F)(),{checkExperiment:m}=b,x=(0,R.ZP)(),f=(0,q.m)(),w=(0,O.Z)();return(0,n.useEffect)((()=>{_&&(g&&_.load(new URL("login.js","file://")),p&&_.load(new URL("signup.js","file://")))}),[]),(0,u.jsx)(G,{...e,history:t,location:o,i18n:s,login:d,navigateToUrl:w,register:f,setLoginSignupFrom:e=>h((0,M.rm)(e)),showToast:a,deviceType:x,flushExp:()=>b.flush(),checkExperiment:m})}))},160585:(e,t,o)=>{function n(e=5){const t="abcdefghijklmnopqrstuvwxyz1234567890";return new Array(e).fill("").map((()=>t[Math.floor(Math.random()*t.length)])).join("")}o.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/43325-8de4572e3f691ff9.mjs.map