(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[39120],{584818:e=>{var i,n,l,t,a,r,s,o,d,u,c={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"TodayArticleModule",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"Pin",kind:"LinkedField",name:"contentPin",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:"images170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:a=[n={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:'images(spec:"170x")'},{alias:"images236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:a,storageKey:'images(spec:"236x")'},{alias:"images736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:a,storageKey:'images(spec:"736x")'},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"originPinner",plural:!1,selections:u=[i,r={alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"imageSmallUrl",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},d={alias:null,args:null,concreteType:"VerifiedIdentity",kind:"LinkedField",name:"verifiedIdentity",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"verified",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[i,o,s,r,d],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"pageCount",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"contentPinOfficialUser",plural:!1,selections:u,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"displayType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"feedSource",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"headerPinId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageUrls",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"showCreator",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subtitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,concreteType:"Pin",kind:"LinkedField",name:"videoPin",plural:!1,selections:[i,{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"videos",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoList",kind:"LinkedField",name:"videoList",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoDetail",kind:"LinkedField",name:"v720P",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"thumbnail",storageKey:null},l,t],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"TodayArticle",abstractKey:null};c.hash="d859dbc0b497c167c2ef2fd55c578dd3",e.exports=c},118725:(e,i,n)=>{n.d(i,{Z:()=>o});var l=n(702664),t=n(70598),a=n(281180),r=n(5226),s=n(785893);function o({user:e,invertColors:i,isSecondaryButton:n,onTap:o,size:d,viewParameter:u,viewType:c}){const g=(0,l.useDispatch)(),{id:h}=e,m=(0,a.kW)(),p=m[h]?m[h].explicitly_followed_by_me:e.explicitly_followed_by_me;return(0,s.jsx)(t.Z,{id:h,onFollow:()=>{g((0,r.ZN)(h)),o&&o()},onUnfollow:()=>{g((0,r.fv)(h)),o&&o()},size:d,invertColors:i,isSecondaryButton:n,isFollowed:p,isUserFollowButton:!0,followEventType:45,unfollowEventType:46,viewParameter:u,viewType:c})}},458843:(e,i,n)=>{n.d(i,{Z:()=>l});const l=e=>{switch(e.action){case"PUSH":case"REPLACE":return"click";case"POP":return e.location.key?"click":"deeplink";default:return null}}},959322:(e,i,n)=>{n.d(i,{Z:()=>T});var l=n(702664),t=n(98207),a=n(116303),r=n(118725),s=n(757141),o=n(198125),d=n(112690),u=n(50286),c=n(780280),g=n(883119),h=n(785893);const m=Math.floor(24),p=({articleId:e,imageUrls:i,subtitle:n,title:l,viewParameter:t,viewType:p,user:v})=>{const{isAuthenticated:x}=(0,c.B)(),y=(0,u.HG)(),{isHovering:f,handleMouseEnter:_,handleMouseLeave:w}=(0,o.Z)(),I=(0,d.Z)();if(!v||!i||i.length<=0)return null;const{full_name:j,image_medium_url:P,image_small_url:b}=v,k=P||b||"",S=Math.min(i.length,3),T={aux_data:{today_article_id:e},component:13525,object_id_str:e,view_parameter:t,view_type:p};return(0,h.jsxs)(g.xu,{borderStyle:"shadow",color:"default",onMouseEnter:y?_:void 0,onMouseLeave:y?w:void 0,overflow:"hidden",rounding:8,children:[f&&(0,h.jsx)(s.Z,{}),(0,h.jsx)(g.xu,{display:"flex",position:"relative",width:"100%",dangerouslySetInlineStyle:{__style:{paddingTop:"45%"}},children:(0,h.jsx)(g.xu,{display:"flex",height:"100%",direction:"row",left:!0,position:"absolute",top:!0,width:"100%",children:i.slice(0,S).map(((e,i)=>(0,h.jsx)(g.xu,{width:100/S+"%",children:(0,h.jsx)(g.Ee,{alt:"",color:"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,src:e},i)})))})}),(0,h.jsxs)(g.xu,{flex:"none",paddingX:5,paddingY:6,position:"relative",width:"100%",children:[(0,h.jsx)(g.xu,{height:48,position:"absolute",width:48,dangerouslySetInlineStyle:{__style:{left:`calc(50% - ${m}px)`,top:`-${m}px`}},children:(0,h.jsx)(a.Z,{name:null!=j?j:"",outline:!0,size:"fit",src:k})}),l&&(0,h.jsx)(g.xu,{marginTop:2,children:(0,h.jsx)(g.X6,{size:"400",align:"center",children:l})}),n&&(0,h.jsx)(g.xu,{marginTop:2,children:(0,h.jsx)(g.xv,{align:"center",size:"100",children:n})}),x&&(0,h.jsx)(g.xu,{display:"flex",justifyContent:"center",marginTop:3,children:(0,h.jsx)(r.Z,{isSecondaryButton:!0,onTap:()=>{I({...T,element:62,event_type:y?101:102})},size:"lg",user:v,viewParameter:t,viewType:p})})]})]})};var v=n(235626),x=n(784641),y=n(606441);function f({articleId:e,gridIndex:i,pinId:n,pinOfficialUserId:l,showCreator:t,title:a,viewParameter:r,viewType:s}){const o=(0,y.N)(n);if(!o)return null;const{id:d,images:u,origin_pinner:c,pinner:g,tracking_params:m}=o,p=(null==u?void 0:u["736x"])||(null==u?void 0:u["236x"])||(null==u?void 0:u["170x"]);if(!p)return null;const f=(0,x.xt)(l,null==c?void 0:c.id,null==g?void 0:g.id);return(0,h.jsx)(v.Z,{articleId:e,creatorId:f,gridIndex:i,pinId:d,imageHeight:p.height,imageUrl:p.url,imageWidth:p.width,showCreator:t,title:a,trackingParams:m,viewParameter:r,viewType:s})}var _=n(775007);const w=({articleId:e,gridIndex:i,pinId:n,title:l,viewParameter:t,viewType:a})=>{const r=(0,y.N)(n),s=null==r?void 0:r.pinner,o=null==r?void 0:r.story_pin_data;if(!r)return null;const d=(null==o?void 0:o.page_count)||"",{images:u}=r,c=(null==u?void 0:u["736x"])||(null==u?void 0:u["236x"])||(null==u?void 0:u["170x"]);if(!c)return null;const g=(null==s?void 0:s.image_medium_url)||(null==s?void 0:s.image_small_url)||"",m=(null==s?void 0:s.full_name)||"",p=Boolean(g||m);return(0,h.jsx)(_.Z,{articleId:e,imageHeight:c.height,imageWidth:c.width,imageUrl:c.url,gridIndex:i,hasPinnerAttribution:p,pageCount:d,pinId:r.id,pinnerImageSrc:g,pinnerName:m,pinTrackingParams:r.tracking_params,title:l,viewParameter:t,viewType:a})};var I=n(588979);function j({articleId:e,gridIndex:i,pinOfficialUserId:n,showCreator:l,title:t,videoPinId:a,viewParameter:r,viewType:s}){var o,d;const u=(0,y.N)(a);if(!u)return null;const{description:c,images:g,origin_pinner:m,pinner:p,tracking_params:v}=u,f=(0,x.xt)(n,null==m?void 0:m.id,null==p?void 0:p.id),_=(null==g?void 0:g["736x"])||(null==g?void 0:g["236x"])||(null==g?void 0:g["170x"])||{},{url:w,height:j,width:P}=null!=_?_:{},b=null===(o=u.videos)||void 0===o||null===(d=o.video_list)||void 0===d?void 0:d.V_720P,{height:k,thumbnail:S,url:T,width:C}=null!=b?b:{};return(0,h.jsx)(I.Z,{articleId:e,creatorId:f,gridIndex:i,height:k,pinDescription:c,pinImageHeight:j,pinImageUrl:w,pinImageWidth:P,showCreator:l,title:t,trackingParams:v,thumbnail:S,url:T,videoPinId:a,viewParameter:r,viewType:s,width:C})}var P=n(452985),b=n(465110),k=n(802201),S=n(281180);const T=({gridIndex:e,id:i,isTodayArticlePage:n,article:a,subtitleSize:r,subtitleWeight:s,titleSize:o,viewParameter:d,viewType:u})=>{const c=(0,S.kW)(),g=(0,k.AF)(),m=(0,l.useSelector)((({todayArticles:e})=>a||e[i]));if(!m)return null;const{article_creator_user:v,content_pin:y,content_pin_official_user:_,display_type:I,feed_source:T,header_pin_id:C,image_urls:Z,show_creator:U,subtitle:F,title:L,video_pin:z}=m,H=c[v||""],A=y||z,K=A?g[A].tracking_params:void 0;let V=null,W=(0,x.T7)(T,L,i);switch(I){case 0:V=(0,h.jsx)(t.Z,{imageUrls:Z,subtitle:F,subtitleSize:r||"300",subtitleWeight:s,title:L,titleSize:o||"500"});break;case 1:V=(0,h.jsx)(P.Z,{imageUrls:Z,subtitle:F,subtitleSize:r||"300",title:L,titleSize:o||"500"});break;case 2:z&&(V=(0,h.jsx)(j,{articleId:i,gridIndex:e,pinOfficialUserId:_,showCreator:U,title:L,videoPinId:z,viewParameter:d,viewType:u}),W=`/pin/${z}`);break;case 3:V=(0,h.jsx)(f,{articleId:i,gridIndex:e,pinId:y,pinOfficialUserId:_,showCreator:U,title:L,viewParameter:d,viewType:u}),W=`/pin/${C}`;break;case 6:V=(0,h.jsx)(w,{articleId:i,gridIndex:e,pinId:y,title:L,viewParameter:d,viewType:u}),W=`/pin/${C}`;break;case 8:H?(V=(0,h.jsx)(p,{articleId:i,imageUrls:Z,subtitle:F,title:L,user:H,viewParameter:d,viewType:u}),W=`/${encodeURIComponent(H.username)}/`):V=null;break;default:V=null}return V?(0,h.jsx)(b.y,{ArticleModule:V,clientTrackingParams:K,displayType:I,gridIndex:e,id:i,isTodayArticlePage:n,onArticleTapUrl:W,pinId:A,viewParameter:d,viewType:u}):null}},139463:(e,i,n)=>{n.d(i,{Z:()=>u,e:()=>c});var l=n(667294),t=n(722767),a=n(867405),r=n(883119),s=n(606441),o=n(785893);function d(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}class u extends l.PureComponent{constructor(...e){super(...e),d(this,"state",{isPlaying:!1,isVideoReady:!1,isVisibleForPlaying:!1,startLoading:!1}),d(this,"handleVisibilityChanged",(e=>{const{intersectionRatio:i}=e[0],{isPlaying:n,isVideoReady:l,startLoading:t}=this.state;i>=.8?(this.setState({isVisibleForPlaying:!0}),this.videoRef&&(t?l&&!n&&this.videoRef.play():(this.videoRef.load(),this.setState({startLoading:!0})))):(this.setState({isVisibleForPlaying:!1}),this.videoRef&&l&&this.videoRef.pause())})),d(this,"handleVideoPause",(()=>this.setState({isPlaying:!1}))),d(this,"handleVideoPlay",(()=>this.setState({isPlaying:!0}))),d(this,"getVideoRef",(e=>this.videoRef=e)),d(this,"setIsVideoReadyTrue",(()=>{this.setState({isVideoReady:!0}),this.videoRef&&!this.state.isPlaying&&this.state.isVisibleForPlaying&&this.videoRef.play()}))}render(){const{height:e,thumbnail:i,url:n,width:l,pinDescription:s,pinImageHeight:d,pinImageUrl:u,pinImageWidth:c}=this.props,g=(null!=e?e:1)/(null!=l?l:1);return n?(0,o.jsx)(t.Z,{options:{threshold:[0,.5,.8,1]},onVisibilityChange:this.handleVisibilityChanged,children:(0,o.jsx)(r.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingBottom:100*g+"%"}},children:(0,o.jsx)(r.xu,{position:"absolute",top:!0,left:!0,bottom:!0,right:!0,children:(0,o.jsx)("video",{height:"100%",muted:!0,onCanPlay:this.setIsVideoReadyTrue,onPause:this.handleVideoPause,onPlay:this.handleVideoPlay,playsInline:!0,poster:i,preload:"none",ref:this.getVideoRef,src:n,width:"100%"})})})}):(0,o.jsx)(r.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingBottom:"100%"}},children:(0,o.jsx)(a.Z,{description:s,imageUrl:u,imageHeight:d,imageWidth:c})})}}function c({pinId:e}){var i,n;const l=(0,s.N)(e);if(!l)return null;const t=l.images&&(l.images.orig||l.images["736x"]||l.images["290x"]||l.images["236x"]),{description:a}=l,{url:r,height:d,width:c}=null!=t?t:{},g=null===(i=l.videos)||void 0===i||null===(n=i.video_list)||void 0===n?void 0:n.V_720P,{height:h,thumbnail:m,url:p,width:v}=null!=g?g:{};return(0,o.jsx)(u,{height:h,thumbnail:m,url:p,width:v,pinDescription:a,pinImageUrl:r,pinImageHeight:d,pinImageWidth:c})}},920231:(e,i,n)=>{n.d(i,{Z:()=>g});var l=n(667294),t=n(319915);function a({flexible:e,gutterWidth:i,id:n,itemWidth:l,maxColumns:t,minColumns:a}){const r=n.replace(/\:/g,"\\:"),s=l+i;return`\n    .gridCentered {\n      margin-left: auto;\n      margin-right: auto;\n    }\n\n    .gridCentered .static {\n      position: absolute !important;\n      visibility: hidden !important;\n    }\n\n    ${Array.from({length:t+1-a},((e,i)=>i+a)).map((n=>{const o=n===t?null:(n+1)*s-1;return`\n      @media (min-width: ${n===a?0:n*s}px) ${o?`and (max-width: ${o}px)`:""} {\n        #${r} .static:nth-child(-n+${n}) {\n          position: static !important;\n          visibility: visible !important;\n          float: left;\n          display: block;\n        }\n\n        ${e?`\n      #${r} .static {\n        width: calc(100% / ${n}) !important;\n      }\n    `:`\n      #${r} {\n        width: ${n*s}px;\n      }\n\n      #${r} .static {\n        padding: 0 ${i/2}px;\n        width: ${l}px !important;\n      }\n    `}\n      }\n    `})).join("")}\n  `}var r=n(757184),s=n(391254),o=n(50286),d=n(883119),u=n(444445),c=n(785893);function g({cacheKey:e,columnWidth:i,comp:n,gutterWidth:g,id:h,layout:m,items:p,loadItems:v,masonryRef:x,minCols:y,scrollContainerRef:f,serverRender:_,resetPositions:w,virtualize:I=!0}){const j="desktop"!==(0,o.ZP)(),P=_?"serverRenderedFlexible":"flexible",b=(0,l.useCallback)((()=>(null==f?void 0:f.current)||window),[f]),k=(0,r.Z)(e),[S,T]=(0,l.useState)(!1);(0,l.useEffect)((()=>{w&&!S&&(null==k||k.reset(),T(!0))}),[k,w,S]);const C=(0,l.useCallback)((e=>(0,c.jsx)(t.Z,{name:"MobileGridItem",children:(0,c.jsx)(n,{...e})})),[n]);return(0,c.jsxs)("div",{id:h,className:"gridCentered",children:[_&&h&&(0,c.jsx)(s.Z,{unsafeCSS:a({flexible:j,gutterWidth:g||0,id:h,itemWidth:i||u.yF,maxColumns:p.length||u.g5,minColumns:y||u.yc})}),(0,c.jsx)(d.Rk,{columnWidth:i,comp:C,gutterWidth:g||1,layout:j?P:null!=m?m:"basic",items:p,loadItems:v,measurementStore:(0,r.Z)(e),minCols:y||u.yc,ref:e=>{x&&(x.current=e)},scrollContainer:b,virtualize:I})]})}},757184:(e,i,n)=>{n.d(i,{Z:()=>a});var l=n(883119);const t={};function a(e){if(null!=e)return t[e]&&t[e].screenWidth===window.innerWidth||(t[e]={screenWidth:window.innerWidth,cache:l.Rk.createMeasurementStore()}),t[e].cache}},198125:(e,i,n)=>{n.d(i,{Z:()=>t});var l=n(667294);function t(){const[e,i]=(0,l.useState)(!1);return{isHovering:e,handleMouseEnter:(0,l.useCallback)((()=>i(!0)),[i]),handleMouseLeave:(0,l.useCallback)((()=>i(!1)),[i])}}},98207:(e,i,n)=>{n.d(i,{Z:()=>o});var l=n(757141),t=n(198125),a=n(50286),r=n(883119),s=n(785893);const o=({imageUrls:e,subtitle:i,subtitleSize:n,subtitleWeight:o,title:d,titleSize:u})=>{var c;const g=(0,a.HG)(),{isHovering:h,handleMouseEnter:m,handleMouseLeave:p}=(0,t.Z)();return!e||e.length<=0?null:(0,s.jsxs)(r.xu,{borderStyle:"shadow",color:"default",overflow:"hidden",position:"relative",rounding:8,dangerouslySetInlineStyle:{__style:{paddingTop:"75%"}},onMouseEnter:g?m:void 0,onMouseLeave:g?p:void 0,children:[h&&(0,s.jsx)(l.Z,{}),(0,s.jsx)(r.xu,{position:"absolute",top:!0,left:!0,bottom:!0,right:!0,children:(0,s.jsx)(r.Ee,{alt:d,color:"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,src:null!==(c=e[0])&&void 0!==c?c:"",children:(0,s.jsx)(r.xu,{height:"100%",width:"100%",dangerouslySetInlineStyle:{__style:{background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)"}},display:"flex",alignItems:"end",paddingY:6,paddingX:5,children:(0,s.jsxs)(r.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",width:"100%",children:[i&&(0,s.jsx)(r.xu,{marginBottom:1,children:(0,s.jsx)(r.xv,{color:"light",size:n,align:"center",weight:o,children:i})}),(0,s.jsx)(r.X6,{color:"light",size:u,align:"center",children:d})]})})})})]})}},235626:(e,i,n)=>{n.d(i,{Z:()=>g});var l=n(609943),t=n(757141),a=n(510552),r=n(198125),s=n(825077),o=n(50286),d=n(276775),u=n(883119),c=n(785893);const g=function({articleId:e,creatorId:i,creatorFullName:n,creatorImgSrc:g,creatorIsVerified:h,gridIndex:m,imageHeight:p,imageWidth:v,imageUrl:x,pinId:y,showCreator:f,trackingParams:_,title:w,viewParameter:I,viewType:j}){const P=(0,d.TH)(),{isHovering:b,handleMouseEnter:k,handleMouseLeave:S}=(0,r.Z)(),T=(0,o.HG)();return(0,c.jsxs)(u.xu,{borderStyle:"shadow",position:"relative",color:"default",onMouseEnter:T?k:void 0,onMouseLeave:T?S:void 0,overflow:"hidden",rounding:8,children:[b&&(0,c.jsx)(t.Z,{}),(0,c.jsx)(s.dL,{auxData:{grid_index:m,today_article_id:e},loggingId:y,objectIdStr:y,slotIndex:m,impressionData:{imageURL:x},component:13525,trackingParams:(0,l.Z)((P.state||{}).trackingParams,_),viewParameter:I,viewType:j,children:({impressionTrackerRef:e})=>(0,c.jsx)(u.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingTop:"number"==typeof p&&"number"==typeof v?p/v*100+"%":"100%"}},ref:e,children:(0,c.jsx)(u.xu,{position:"absolute",top:!0,left:!0,right:!0,bottom:!0,children:(0,c.jsx)(u.Ee,{alt:w,color:"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,src:null!=x?x:""})})})}),(0,c.jsxs)(u.xu,{paddingX:6,paddingY:4,display:"flex",justifyContent:"center",direction:"column",children:[(0,c.jsx)(u.X6,{align:"center",size:"400",children:w}),f&&(i||n)&&(0,c.jsx)(u.xu,{display:"flex",marginTop:3,justifyContent:"center",children:(0,c.jsx)(a.Z,{userId:i,creatorFullName:n,creatorImgSrc:g,creatorIsVerified:h})})]})]})}},775007:(e,i,n)=>{n.d(i,{Z:()=>u});var l=n(116303),t=n(609943),a=n(252745),r=n(825077),s=n(276775),o=n(883119),d=n(785893);const u=({articleId:e,gridIndex:i,hasPinnerAttribution:n,imageHeight:u,imageWidth:c,imageUrl:g,pageCount:h,pinId:m,pinnerImageSrc:p,pinnerName:v,pinTrackingParams:x,title:y,viewParameter:f,viewType:_})=>{const w=(0,s.TH)();return(0,d.jsxs)(o.xu,{borderStyle:"shadow",color:"default",overflow:"hidden",paddingY:6,rounding:8,children:[(0,d.jsx)(o.xu,{paddingX:6,display:"flex",justifyContent:"center",children:(0,d.jsx)(o.X6,{align:"center",size:"400",children:y})}),(0,d.jsx)(r.dL,{auxData:{grid_index:i,today_article_id:e},loggingId:m,objectIdStr:m,slotIndex:i,impressionData:{imageURL:g},component:13525,trackingParams:(0,t.Z)((w.state||{}).trackingParams,x),viewParameter:f,viewType:_,children:({impressionTrackerRef:e})=>(0,d.jsxs)(o.xu,{marginTop:4,paddingX:12,ref:e,children:[(0,d.jsx)(o.zd,{rounding:8,children:(0,d.jsx)(o.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{paddingTop:"number"==typeof u&&"number"==typeof c?u/c*100+"%":"100%"}},children:(0,d.jsx)(o.xu,{position:"absolute",top:!0,left:!0,right:!0,bottom:!0,children:(0,d.jsx)(o.Ee,{alt:"",color:"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,src:null!=g?g:"",children:(0,d.jsx)(o.xu,{position:"relative",marginStart:1,marginTop:1,children:(0,d.jsx)(a.Z,{icon:"idea-pin",text:h.toString()})})})})})}),n&&(0,d.jsxs)(o.xu,{alignItems:"center",display:"flex",marginTop:2,maxWidth:"100%",children:[(0,d.jsx)(o.xu,{flex:"none",height:44,width:44,marginEnd:2,children:(0,d.jsx)(l.Z,{name:"",outline:!0,size:"fit",src:p})}),(0,d.jsx)(o.xv,{lineClamp:1,children:v})]})]})})]})}},588979:(e,i,n)=>{n.d(i,{Z:()=>h});var l=n(609943),t=n(757141),a=n(510552),r=n(198125),s=n(139463),o=n(825077),d=n(50286),u=n(276775),c=n(883119),g=n(785893);const h=function({articleId:e,creatorId:i,creatorFullName:n,creatorImgSrc:h,creatorIsVerified:m,gridIndex:p,height:v,pinDescription:x,pinImageHeight:y,pinImageUrl:f,pinImageWidth:_,showCreator:w,thumbnail:I,title:j,trackingParams:P,url:b,videoPinId:k,viewParameter:S,viewType:T,width:C}){const Z=(0,u.TH)(),U=(0,d.HG)(),{isHovering:F,handleMouseEnter:L,handleMouseLeave:z}=(0,r.Z)();return(0,g.jsxs)(c.xu,{borderStyle:"shadow",color:"default",direction:"column",display:"flex",flex:"none",overflow:"hidden",rounding:8,dangerouslySetInlineStyle:{__style:{transform:"translate3d(0, 0, 0)"}},onMouseEnter:U?L:void 0,onMouseLeave:U?z:void 0,children:[F&&(0,g.jsx)(t.Z,{}),(0,g.jsx)(o.dL,{auxData:{grid_index:p,today_article_id:e},loggingId:k,objectIdStr:k,slotIndex:p,impressionData:{imageURL:f},component:13525,trackingParams:(0,l.Z)((Z.state||{}).trackingParams,P),viewParameter:S,viewType:T,children:({impressionTrackerRef:e})=>(0,g.jsx)(c.xu,{ref:e,children:(0,g.jsx)(s.Z,{height:v,thumbnail:I,url:b,width:C,pinDescription:x,pinImageUrl:f,pinImageHeight:y,pinImageWidth:_})})}),(0,g.jsxs)(c.xu,{paddingX:6,paddingY:4,display:"flex",justifyContent:"center",direction:"column",children:[(0,g.jsx)(c.X6,{align:"center",size:"400",children:j}),w&&(i||n)&&(0,g.jsx)(c.xu,{display:"flex",marginTop:3,justifyContent:"center",children:(0,g.jsx)(a.Z,{userId:i,creatorFullName:n,creatorImgSrc:h,creatorIsVerified:m})})]})]})}},452985:(e,i,n)=>{n.d(i,{Z:()=>d});var l=n(757141),t=n(198125),a=n(50286),r=n(276602),s=n(883119),o=n(785893);function d({imageUrls:e,rounding:i,subtitle:n,subtitleSize:d,title:u,titleSize:c}){const g=(0,a.HG)(),h=(0,r.EV)();let m=0;const p=()=>{m-=1,0===m&&(null==h||h.markConstraintComplete("idea_module_loaded"))},{isHovering:v,handleMouseEnter:x,handleMouseLeave:y}=(0,t.Z)();if(!e||e.length<=0)return null;const f=e.slice(0,3);return h&&(m=f.length),(0,o.jsxs)(s.xu,{borderStyle:"shadow",color:"default",overflow:"hidden",position:"relative",rounding:null!=i?i:8,dangerouslySetInlineStyle:{__style:{paddingTop:"75%"}},onMouseEnter:g?x:void 0,onMouseLeave:g?y:void 0,children:[v&&(0,o.jsx)(l.Z,{}),(0,o.jsxs)(s.xu,{display:"flex",direction:"column",position:"absolute",top:!0,left:!0,bottom:!0,right:!0,children:[(0,o.jsx)(s.kC,{alignItems:"stretch",justifyContent:"start",height:"100%",width:"100%",children:f.map(((e,i)=>(0,o.jsx)(s.xu,{width:100/f.length+"%",dangerouslySetInlineStyle:{__style:{WebkitMaskImage:"-webkit-radial-gradient(white, black)"}},children:(0,o.jsx)(s.Ee,{alt:"",color:"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,role:"presentation",src:null!=e?e:"",onLoad:p})},i)))}),(0,o.jsxs)(s.xu,{flex:"none",paddingX:5,paddingY:6,width:"100%",children:[n&&(0,o.jsx)(s.xu,{marginBottom:1,children:(0,o.jsx)(s.xv,{size:d,align:"center",weight:g?"bold":"normal",children:n})}),(0,o.jsx)(s.X6,{size:c,align:"center",children:u})]})]})]})}},465110:(e,i,n)=>{n.d(i,{i:()=>P,y:()=>w});var l,t=n(458843),a=n(98207),r=n(235626),s=n(775007),o=n(588979),d=n(452985),u=n(112690),c=n(825077),g=n(867820),h=n(50286),m=n(780280),p=n(784641),v=n(883119),x=n(167912),y=n(276775),f=n(785893);const _=new Set([3,2,6]),w=({ArticleModule:e,clientTrackingParams:i,id:n,displayType:l,gridIndex:a,isTodayArticlePage:r=!1,onArticleTapUrl:s,pinId:o,viewParameter:d,viewType:m})=>{const p=(0,y.k6)(),x=(0,y.TH)(),w=(0,u.Z)(),j=(0,h.HG)();return(0,f.jsx)(c.Y4,{auxData:{grid_index:a.toString(),today_article_id:n},loggingId:n,objectIdStr:n,slotIndex:a,viewParameter:d||3372,viewType:m||1,children:({impressionTrackerRef:u})=>(0,f.jsx)(v.xu,{ref:u,"data-test-id":"suggested-articles-link",children:(0,f.jsx)(I,{href:s,isTodayArticlePage:r,onTap:()=>{w({event_type:j?101:102,view_type:m||1,view_parameter:d||3372,component:13525,aux_data:{today_article_id:n,grid_index:a.toString()}}),(0,g.LW)({action:"click",pageLocation:x,item:"suggested-articles-link"}),"number"==typeof l&&_.has(l)&&i&&o&&w({event_type:j?101:102,view_type:m||1,view_parameter:d||3372,object_id_str:o,clientTrackingParams:i,aux_data:{today_article_id:o,grid_index:a.toString(),cosmic_ray_count:"4",closeup_navigation_type:(0,t.Z)(p)}}),p.push(s)},children:e})})})},I=({children:e,href:i,isTodayArticlePage:n,onTap:l})=>{const{isAuthenticated:t}=(0,m.B)(),a=(0,h.HG)();return t?(0,f.jsx)(v.iP,{onTap:({event:e,dangerouslyDisableOnNavigation:i})=>{i(),l({event:e})},tapStyle:"compress",children:a?(0,f.jsx)(v.xu,{width:n?void 0:408,minHeight:n?void 0:306,children:e}):e}):(0,f.jsx)(v.iP,{href:i,onTap:({event:e,dangerouslyDisableOnNavigation:i})=>{i(),l({event:e})},role:"link",children:a?(0,f.jsx)(v.xu,{width:n?void 0:408,minHeight:n?void 0:306,children:e}):e})},j=void 0!==l?l:l=n(584818),P=({containerKey:e,gridIndex:i,subtitleSize:n,titleSize:l,viewParameter:t,viewType:u})=>{var c,g,h,m,v,y,_,I,P,b,k,S,T,C,Z,U;const{contentPinOfficialUser:F,contentPin:L,displayType:z,feedSource:H,headerPinId:A,id:K,imageUrls:V,showCreator:W,subtitle:M,title:R,videoPin:D}=(0,x.useFragment)(j,e);let E=null,N=(0,p.T7)(null!=H?H:0,null!=R?R:"",null!=K?K:"");const{description:B,images170x:O,images236x:$,images736x:X,pinner:G,storyPinData:Y,trackingParams:J}=null!=L?L:{},q=null!==(c=null!==(g=null!==(h=null==X?void 0:X.url)&&void 0!==h?h:null==$?void 0:$.url)&&void 0!==g?g:null==O?void 0:O.url)&&void 0!==c?c:"",Q=null!==(m=null!==(v=null==X?void 0:X.width)&&void 0!==v?v:null==$?void 0:$.width)&&void 0!==m?m:null==O?void 0:O.width,ee=null!==(y=null!==(_=null==X?void 0:X.height)&&void 0!==_?_:null==$?void 0:$.height)&&void 0!==y?y:null==O?void 0:O.height,{originPinner:ie}=null!=L?L:{},ne=F||ie||G;switch(z){case 0:E=(0,f.jsx)(a.Z,{imageUrls:V,subtitle:null!=M?M:"",subtitleSize:n||"300",title:null!=R?R:"",titleSize:l||"500"});break;case 1:E=(0,f.jsx)(d.Z,{imageUrls:V,subtitle:null!=M?M:"",subtitleSize:n||"300",title:null!=R?R:"",titleSize:l||"500"});break;case 2:const{entityId:e,videos:c}=null!=D?D:{},g=null!==(I=null==c||null===(P=c.videoList)||void 0===P?void 0:P.v720P)&&void 0!==I?I:{};var le;if(e)E=(0,f.jsx)(o.Z,{articleId:null!=K?K:"",creatorFullName:null==ne?void 0:ne.fullName,creatorImgSrc:(null==ne?void 0:ne.imageMediumUrl)||(null==ne?void 0:ne.imageSmallUrl),creatorIsVerified:Boolean(null==ne||null===(le=ne.verifiedIdentity)||void 0===le?void 0:le.verified),gridIndex:i,height:g.height,pinDescription:B,pinImageUrl:q,pinImageHeight:ee,pinImageWidth:Q,showCreator:Boolean(W),thumbnail:g.thumbnail,title:null!=R?R:"",trackingParams:J,url:g.url,videoPinId:e,viewParameter:t,viewType:u,width:g.width}),N=`/pin/${e}`;break;case 3:if(!q)return null;E=(0,f.jsx)(r.Z,{articleId:null!=K?K:"",creatorFullName:null==ne?void 0:ne.fullName,creatorImgSrc:(null==ne?void 0:ne.imageMediumUrl)||(null==ne?void 0:ne.imageSmallUrl),creatorIsVerified:Boolean(null==ne||null===(b=ne.verifiedIdentity)||void 0===b?void 0:b.verified),imageUrl:q,imageHeight:null!=ee?ee:0,imageWidth:null!=Q?Q:0,gridIndex:i,pinId:null!==(k=null==L?void 0:L.entityId)&&void 0!==k?k:"",showCreator:Boolean(W),title:null!=R?R:"",trackingParams:J,viewParameter:t,viewType:u}),N=A?`/pin/${A}`:N;break;case 6:if(!q)return null;const h=null!==(S=null!==(T=null==G?void 0:G.imageMediumUrl)&&void 0!==T?T:null==G?void 0:G.imageSmallUrl)&&void 0!==S?S:"",m=null!==(C=null==G?void 0:G.fullName)&&void 0!==C?C:"",p=Boolean(h||m);return(0,f.jsx)(s.Z,{articleId:null!=K?K:"",gridIndex:i,hasPinnerAttribution:p,imageUrl:q,imageHeight:null!=ee?ee:0,imageWidth:null!=Q?Q:0,pageCount:null!==(Z=null==Y?void 0:Y.pageCount)&&void 0!==Z?Z:"",pinId:null!==(U=null==L?void 0:L.entityId)&&void 0!==U?U:"",pinnerImageSrc:h,pinnerName:m,pinTrackingParams:J,title:null!=R?R:"",viewParameter:t,viewType:u});default:E=null}return E?(0,f.jsx)(w,{ArticleModule:E,displayType:z,gridIndex:i,id:null!=K?K:"",onArticleTapUrl:N,viewParameter:t,viewType:u}):null}},757141:(e,i,n)=>{n.d(i,{Z:()=>r});var l=n(883119),t=n(785893);const a=new l.Ry(1);function r(){return(0,t.jsx)(l.xu,{opacity:.1,color:"transparentDarkGray",position:"absolute",top:!0,left:!0,bottom:!0,right:!0,zIndex:a})}},510552:(e,i,n)=>{n.d(i,{Z:()=>d});var l=n(667294),t=n(116303),a=n(993786),r=n(281180),s=n(883119),o=n(785893);const d=function({userId:e,creatorFullName:i,creatorImgSrc:n,creatorIsVerified:d}){var u;const c=null!==(u=(0,r.mN)()(null!=e?e:""))&&void 0!==u?u:{},{fullNameFromStore:g,imgSrcFromStore:h,isVerifiedFromStore:m}=function(e){const{full_name:i,image_medium_url:n,image_small_url:l,verified_identity:t}=e;return{fullNameFromStore:i,imgSrcFromStore:n||l,isVerifiedFromStore:Boolean(null==t?void 0:t.verified)}}(c),p=e?g:i,v=e?h:n,x=e?m:d;return(0,o.jsx)(s.kC,{alignContent:"center",alignItems:"center",flex:"none",justifyContent:"center",width:"100%",children:p&&(0,o.jsxs)(l.Fragment,{children:[(0,o.jsx)(s.xu,{paddingX:1,children:(0,o.jsx)(t.Z,{name:p,size:"sm",src:null!=v?v:""})}),(0,o.jsx)(s.xu,{minWidth:0,paddingX:1,children:(0,o.jsx)(s.xv,{lineClamp:1,size:"300",weight:"bold",children:p})}),x&&(0,o.jsx)(s.xu,{paddingX:1,children:(0,o.jsx)(a.Z,{hasVerifiedIdentity:x,iconOnly:!0,size:"xs"})})]})})}},993786:(e,i,n)=>{n.d(i,{Z:()=>u});var l=n(667294),t=n(966113),a=n(898781),r=n(883119),s=n(785893);const o={xs:12,sm:16,md:20,lg:24};function d({children:e}){const i=(0,a.ZP)();return(0,s.jsx)(r.u,{link:(0,s.jsx)(r.rU,{href:t.Z.settings.HELP_SHOPPING_WITH_PINTEREST,target:"blank",children:(0,s.jsx)(r.xv,{color:"inverse",size:"100",weight:"bold",children:i._('Learn more', 'verifiedBadge.tooltip.link', 'Learn more about Pinterest\'s Merchant Guidelines')})}),text:i._('This retailer meets Pinterest\'s Merchant Guidelines', 'merchantVerification.badge.tooltip', 'Badge indicating that a merchant or user is verified'),children:e})}function u({hasVerifiedIdentity:e,iconOnly:i,isVerifiedMerchant:n,showText:t,size:u}){const c=(0,a.ZP)(),g=(0,s.jsxs)(r.kC,{alignItems:"center",justifyContent:"start",children:[(0,s.jsx)(r.JO,{accessibilityLabel:c._('Merchant verification badge icon', 'merchantVerification.badge.icon', 'Badge indicating that a merchant or user is verified'),color:"shopping",icon:"workflow-status-ok",inline:!0,size:o[u]}),t&&(0,s.jsx)(r.xu,{marginStart:2,children:(0,s.jsx)(r.xv,{color:"shopping",inline:!0,weight:"bold",children:c._('Verified merchant', 'creator.header.verifiedMerchant', 'this merchant is a verified merchant')})})]});return(0,s.jsxs)(l.Fragment,{children:[n&&!i&&(0,s.jsx)(d,{children:g}),n&&i&&g,e&&!n&&(0,s.jsx)(r.JO,{accessibilityLabel:c._('Domain verification icon', 'domainVerification.badge.icon', 'Badge indicating that a merchant or user is verified'),color:"error",icon:"check-circle",size:o[u]})]})}},5226:(e,i,n)=>{n.d(i,{KF:()=>d,ZN:()=>r,fv:()=>o,yA:()=>s});var l=n(6637),t=n(482546);function a(e,i){return l.Z.create("UserFollowResource",{user_id:e,aux_data:i?{pin_id:i}:void 0})}function r(e,i=null){return n=>{a(e,i).callCreate().catch((()=>n((0,t.P_)(e,!1)))),n((0,t.P_)(e,!0))}}function s(e,i=null){return async n=>{n((0,t.P_)(e,!0)),await a(e,i).callCreate().catch((i=>{throw n((0,t.P_)(e,!1)),i}))}}function o(e,i=null){return n=>{a(e,i).callDelete().catch((()=>n((0,t.P_)(e,!0)))),n((0,t.P_)(e,!1))}}function d(e,i=null){return async n=>{n((0,t.P_)(e,!1)),await a(e,i).callDelete().catch((i=>{throw n((0,t.P_)(e,!0)),i}))}}},482546:(e,i,n)=>{n.d(i,{Ge:()=>s,JS:()=>t,P_:()=>a,h2:()=>o,h6:()=>d});var l=n(6637);function t(e){return{type:"UPDATE_USER_PIN_COUNT",payload:e}}const a=(e,i)=>({type:"USER_FOLLOW",payload:{id:e,value:i}}),r=(e,i)=>({type:"USER_BLOCK",payload:{id:e,value:i}}),s=(e,i)=>n=>(n(r(e,!0)),l.Z.create("UserBlockResource",{blocked_user_id:e,orbac_subject_id:i}).callCreate().catch((()=>n(r(e,!1))))),o=e=>i=>(i(r(e,!1)),l.Z.create("UserBlockResource",{blocked_user_id:e}).callDelete().catch((()=>i(r(e,!0)))));function d(e){return{type:"UPDATE_USER_SCHEDULED_PIN_COUNT",payload:e}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/39120-813e8e8a18c74b2d.mjs.map