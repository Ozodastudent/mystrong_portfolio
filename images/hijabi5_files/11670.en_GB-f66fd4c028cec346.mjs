(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[11670],{989881:(e,r,t)=>{var n=t(247816),i=t(899291)(n);e.exports=i},121078:(e,r,t)=>{var n=t(862488),i=t(137285);e.exports=function e(r,t,o,a,s){var c=-1,l=r.length;for(o||(o=i),s||(s=[]);++c<l;){var u=r[c];t>0&&o(u)?t>1?e(u,t-1,o,a,s):n(s,u):a||(s[s.length]=u)}return s}},247816:(e,r,t)=>{var n=t(228483),i=t(3674);e.exports=function(e,r){return e&&n(e,r,i)}},297786:(e,r,t)=>{var n=t(671811),i=t(240327);e.exports=function(e,r){for(var t=0,o=(r=n(r,e)).length;null!=e&&t<o;)e=e[i(r[t++])];return t&&t==o?e:void 0}},200013:e=>{e.exports=function(e,r){return null!=e&&r in Object(e)}},702958:(e,r,t)=>{var n=t(646384),i=t(690939);e.exports=function(e,r,t,o){var a=t.length,s=a,c=!o;if(null==e)return!s;for(e=Object(e);a--;){var l=t[a];if(c&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++a<s;){var u=(l=t[a])[0],d=e[u],p=l[1];if(c&&l[2]){if(void 0===d&&!(u in e))return!1}else{var g=new n;if(o)var _=o(d,p,u,e,r,g);if(!(void 0===_?i(p,d,3,o,g):_))return!1}}return!0}},267206:(e,r,t)=>{var n=t(191573),i=t(716432),o=t(406557),a=t(701469),s=t(139601);e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?a(e)?i(e[0],e[1]):n(e):s(e)}},269199:(e,r,t)=>{var n=t(989881),i=t(498612);e.exports=function(e,r){var t=-1,o=i(e)?Array(e.length):[];return n(e,(function(e,n,i){o[++t]=r(e,n,i)})),o}},191573:(e,r,t)=>{var n=t(702958),i=t(301499),o=t(542634);e.exports=function(e){var r=i(e);return 1==r.length&&r[0][2]?o(r[0][0],r[0][1]):function(t){return t===e||n(t,e,r)}}},716432:(e,r,t)=>{var n=t(690939),i=t(227361),o=t(379095),a=t(115403),s=t(689162),c=t(542634),l=t(240327);e.exports=function(e,r){return a(e)&&s(r)?c(l(e),r):function(t){var a=i(t,e);return void 0===a&&a===r?o(t,e):n(r,a,3)}}},882689:(e,r,t)=>{var n=t(829932),i=t(297786),o=t(267206),a=t(269199),s=t(571131),c=t(307518),l=t(285022),u=t(406557),d=t(701469);e.exports=function(e,r,t){r=r.length?n(r,(function(e){return d(e)?function(r){return i(r,1===e.length?e[0]:e)}:e})):[u];var p=-1;r=n(r,c(o));var g=a(e,(function(e,t,i){return{criteria:n(r,(function(r){return r(e)})),index:++p,value:e}}));return s(g,(function(e,r){return l(e,r,t)}))}},840371:e=>{e.exports=function(e){return function(r){return null==r?void 0:r[e]}}},379152:(e,r,t)=>{var n=t(297786);e.exports=function(e){return function(r){return n(r,e)}}},571131:e=>{e.exports=function(e,r){var t=e.length;for(e.sort(r);t--;)e[t]=e[t].value;return e}},671811:(e,r,t)=>{var n=t(701469),i=t(115403),o=t(555514),a=t(479833);e.exports=function(e,r){return n(e)?e:i(e,r)?[e]:o(a(e))}},626393:(e,r,t)=>{var n=t(733448);e.exports=function(e,r){if(e!==r){var t=void 0!==e,i=null===e,o=e==e,a=n(e),s=void 0!==r,c=null===r,l=r==r,u=n(r);if(!c&&!u&&!a&&e>r||a&&s&&l&&!c&&!u||i&&s&&l||!t&&l||!o)return 1;if(!i&&!a&&!u&&e<r||u&&t&&o&&!i&&!a||c&&t&&o||!s&&o||!l)return-1}return 0}},285022:(e,r,t)=>{var n=t(626393);e.exports=function(e,r,t){for(var i=-1,o=e.criteria,a=r.criteria,s=o.length,c=t.length;++i<s;){var l=n(o[i],a[i]);if(l)return i>=c?l:l*("desc"==t[i]?-1:1)}return e.index-r.index}},899291:(e,r,t)=>{var n=t(498612);e.exports=function(e,r){return function(t,i){if(null==t)return t;if(!n(t))return e(t,i);for(var o=t.length,a=r?o:-1,s=Object(t);(r?a--:++a<o)&&!1!==i(s[a],a,s););return t}}},301499:(e,r,t)=>{var n=t(689162),i=t(3674);e.exports=function(e){for(var r=i(e),t=r.length;t--;){var o=r[t],a=e[o];r[t]=[o,a,n(a)]}return r}},900222:(e,r,t)=>{var n=t(671811),i=t(135694),o=t(701469),a=t(565776),s=t(541780),c=t(240327);e.exports=function(e,r,t){for(var l=-1,u=(r=n(r,e)).length,d=!1;++l<u;){var p=c(r[l]);if(!(d=null!=e&&t(e,p)))break;e=e[p]}return d||++l!=u?d:!!(u=null==e?0:e.length)&&s(u)&&a(p,u)&&(o(e)||i(e))}},137285:(e,r,t)=>{var n=t(562705),i=t(135694),o=t(701469),a=n?n.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||i(e)||!!(a&&e&&e[a])}},115403:(e,r,t)=>{var n=t(701469),i=t(733448),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,r){if(n(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!i(e))||(a.test(e)||!o.test(e)||null!=r&&e in Object(r))}},689162:(e,r,t)=>{var n=t(513218);e.exports=function(e){return e==e&&!n(e)}},542634:e=>{e.exports=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}}},624523:(e,r,t)=>{var n=t(288306);e.exports=function(e){var r=n(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}},555514:(e,r,t)=>{var n=t(624523),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=n((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(i,(function(e,t,n,i){r.push(n?i.replace(o,"$1"):t||e)})),r}));e.exports=a},240327:(e,r,t)=>{var n=t(733448);e.exports=function(e){if("string"==typeof e||n(e))return e;var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r}},227361:(e,r,t)=>{var n=t(297786);e.exports=function(e,r,t){var i=null==e?void 0:n(e,r);return void 0===i?t:i}},379095:(e,r,t)=>{var n=t(200013),i=t(900222);e.exports=function(e,r){return null!=e&&i(e,r,n)}},288306:(e,r,t)=>{var n=t(883369);function i(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(i.Cache||n),t}i.Cache=n,e.exports=i},139601:(e,r,t)=>{var n=t(840371),i=t(379152),o=t(115403),a=t(240327);e.exports=function(e){return o(e)?n(a(e)):i(e)}},189734:(e,r,t)=>{var n=t(121078),i=t(882689),o=t(105976),a=t(816612),s=o((function(e,r){if(null==e)return[];var t=r.length;return t>1&&a(e,r[0],r[1])?r=[]:t>2&&a(r[0],r[1],r[2])&&(r=[r[0]]),i(e,n(r,1),[])}));e.exports=s},442279:(e,r)=>{function t(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function n(e,r){return e===r}function i(e){var r=arguments.length<=1||void 0===arguments[1]?n:arguments[1],t=null,i=null;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return null!==t&&t.length===o.length&&o.every((function(e,n){return r(e,t[n])}))||(i=e.apply(void 0,o)),t=o,i}}function o(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every((function(e){return"function"==typeof e}))){var t=r.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return r}function a(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return function(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=0,c=i.pop(),l=o(i),u=e.apply(void 0,[function(){return s++,c.apply(void 0,arguments)}].concat(n)),d=function(e,r){for(var n=arguments.length,i=Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var a=l.map((function(t){return t.apply(void 0,[e,r].concat(i))}));return u.apply(void 0,t(a))};return d.resultFunc=c,d.recomputations=function(){return s},d.resetRecomputations=function(){return s=0},d}}var s=r.P1=a(i)},918301:(e,r,t)=>{t.d(r,{CB:()=>g,y9:()=>p});var n=t(667294),i=t(121151),o=t(6637),a=t(898781),s=t(883119),c=t(785893);const l=({onConfirm:e})=>{const r=(0,a.ZP)(),[t,l]=(0,n.useState)(!1),u=()=>{l(!0),o.Z.create("ApiResource",{url:"/v3/users/email/verify/resend/"}).callCreate()};return(0,c.jsx)(i.ZP,{accessibilityModalLabel:r.bt("Verify your email", "Verify your email", "Accessible label for email verification being required", undefined, true),onDismiss:e,heading:r.bt("Verify your email", "Verify your email", "Accessible label for email verification being required", undefined, true),footer:(0,c.jsxs)(s.kC,{justifyContent:"end",gap:{row:2,column:0},children:[t?(0,c.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"gray",text:r.bt("Email sent", "Email sent", "Button text for verification email being sent", undefined, true),disabled:t,onClick:u}):(0,c.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"gray",text:r.bt("Resend email", "Resend email", "Button text for resending email verification email", undefined, true),disabled:t,onClick:u}),(0,c.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"red",text:r.bt("OK", "Got it", "Button text for acknowledging email verificaiton is required", undefined, true),onClick:e})]}),role:"alertdialog",children:(0,c.jsx)(s.xu,{padding:8,children:(0,c.jsx)(s.xv,{align:"center",size:"300",children:r.bt("Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Inform users that they need to verify their email to keep their account secure and continue using Pinterest", undefined, true)})})})};var u=t(425288);const{Provider:d,useHook:p}=(0,u.Z)("EmailVerificationReminderModal");function g({children:e}){const[r,t]=(0,n.useState)(!1),i=(0,n.useMemo)((()=>({showEmailVerificationReminderModal:()=>{t(!0)}})),[]);return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(d,{value:i,children:e}),r&&(0,c.jsx)(l,{onConfirm:()=>{t(!1)}})]})}},55259:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(794230),i=t(619937);const o={campaignFilter:"all",adGroupFilter:"all",adFilter:"all"},a=e=>{let r={};return e&&(r={objectiveTypes:[e]}),r},s={overview:()=>"/",reporting:e=>{const r=e.objectiveType||null;delete e.objectiveType;const t={...e,...a(r)};return(0,n.Z)("/reporting/campaigns/",t)},reportingAdGroup:e=>{const{campaignId:r,objectiveType:t,showAllEntities:i,adGroupId:s,message:c}=e,l=s?{adGroupIds:[s]}:{},u={campaignIds:[r],...i?o:{},...a(t),...l,message:c};return(0,n.Z)("/reporting/adgroups/",u)},campaign:e=>{const{id:r,objectiveType:t}=e;return(0,n.Z)("/reporting/adgroups/",{campaignIds:[r],...a(t)})},editCampaign:e=>e.isAutomatedCampaign?s.editAutomated({campaignId:e.id,view:"campaign"}):s.editV2({campaignId:e.id,view:"campaign"}),adgroup:e=>{const{id:r,objectiveType:t,showAllEntities:i,pinPromotionId:s,campaignId:c}=e;if("TEMPORARY_SHOPPING"===t||"CATALOG_SALES"===t)return(0,n.Z)("/reporting/productgroups/",{adGroupIds:[r],...a(t)});{const e=i?o:{},l=c?{campaignIds:[c]}:{},u=s?{pinPromotionIds:[s]}:{};return(0,n.Z)("/reporting/ads/",{adGroupIds:[r],...a(t),...e,...u,...l})}},editAdGroup:e=>e.isAutomatedCampaign?s.editAutomated({campaignId:e.id,view:"campaign"}):s.editV2({adGroupId:e.id,view:"adgroup"}),pinPromotion:e=>{const{id:r,adFilter:t}=e,i=t?{adFilter:t}:{};return(0,n.Z)("/reporting/ads/",{pinPromotionIds:[r],...i})},editPinPromotion:e=>{const r=e.isCreatingPins?{isCreatingPins:!0}:{},t=e.pinPromotionId?{pinPromotionId:e.pinPromotionId}:{};return s.editV2({adGroupId:e.adGroupId,view:"ad",...t,...r})},productGroup:e=>{const{id:r,name:t}=e;return(0,n.Z)("/reporting/productgroups/",{productGroupIds:[r],name:t})},campaigns:()=>"/reporting/campaigns/",adgroups:()=>"/reporting/adgroups/",ads:()=>"/reporting/ads/",productgroups:()=>"/reporting/productgroups/",campaignNegativeKeywords:()=>"/reporting/campaignNegativeKeywords/",campaignSearchQueries:()=>"/reporting/campaignSearchQueries/",adGroupNegativeKeywords:()=>"/reporting/adGroupNegativeKeywords/",adGroupPositiveKeywords:()=>"/reporting/adGroupPositiveKeywords/",adGroupSearchQueries:()=>"/reporting/adGroupSearchQueries/",ad:e=>s.pinPromotion(e),campaignMode:e=>(0,n.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),create:e=>{const{campaignId:r,objectiveType:t,partialCreate:i,catalogsFeedId:o,managedClientId:a}=e,s={};return r&&i&&(s.campaignId=r),t&&(s.objectiveType=t),"CATALOG_SALES"===t&&o&&(s.catalogsFeedId=o),a&&(s.managedClientId=a),(0,n.Z)("/ads/create/",s)},createAutomated:e=>(0,n.Z)("/automated/ads/create/",e),editV2:e=>(0,n.Z)("/ads/edit/",e),editAutomated:e=>(0,n.Z)("/automated/ads/edit/",e),duplicateCampaign:e=>(0,n.Z)("/ads/duplicate/",e),audiences:e=>(0,n.Z)("/audiences/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),audience_debug:()=>"/audience_debug/",prepaid_spend_campaign_breakdown:()=>"/billing/prepaid_spend_campaign_breakdown/",billing:e=>{const{page:r,subSection:t,nextStepUrl:o}=e;switch(r){case i.kM.BILLING_HISTORY:return"/billing/history/";case i.kM.ORDER_LINES:return"/billing/order_lines/";case i.kM.PROMOTIONS:return"/billing/promotions/";case i.kM.DOCUMENTS:return"/billing/documents/";case i.kM.PREPAID_CAMPAIGN_SPEND:return"/billing/prepaid_campaign_spend_summary/";default:const e={};return t&&(e.section=t),o&&(e.next_step_link_url=o),(0,n.Z)("/billing/",e)}},bulk:e=>{const{subSection:r,page:t,jobStarted:o}=e||{};switch(t){case i.fm.UPLOAD_TEMPLATE:return(0,n.Z)("/bulk_editor/upload_template/",{section:r});case i.fm.DOWNLOAD_TEMPLATE:return(0,n.Z)("/bulk_editor/download_template/",{section:r});case i.fm.HISTORY:return(0,n.Z)("/bulk_editor/history/",{section:r,job_started:o});case i.fm.RESOURCES:return(0,n.Z)("/bulk_editor/resources/",{section:r});default:return"/bulk_editor/"}},history:e=>(0,n.Z)("/history/",e),shopping:e=>s.reporting(a("TEMPORARY_SHOPPING")),pinterest_tag:e=>{const{page:r,subSection:t,platform:o}=e;switch(r){case i.qp.PINTEREST_EVENT_HISTORY:return"/conversions/event-history/";case i.qp.CONVERSION_HEALTH:return"/conversions/health/";case i.qp.PINTEREST_TAG:return(0,n.Z)("/conversions/tag/",{subPage:t,platform:o});case i.qp.PINTEREST_TAG_EVENTS:return"/conversions/tag-events/";case i.qp.PINTEREST_TAG_HEALTH:return"/conversions/tag-health/";case i.qp.CONVERSION_UPLOAD:return(0,n.Z)("/conversions/upload/",{subPage:t});case i.qp.UPLOAD_HISTORY:return(0,n.Z)("/conversions/history/",{subPage:t});case i.qp.PCA_UPLOAD_HISTORY:return(0,n.Z)("/conversions/pca_history/",{subPage:t});case i.qp.PCA_UPLOAD:return(0,n.Z)("/conversions/pca_upload/",{subPage:t});case i.qp.CONVERSIONS_API_ACCESS_TOKEN:return"/conversions/access_token/";case i.qp.CONVERSIONS_API_DEDUPLICATION:return"/conversions/deduplication/";default:return"/conversions/tag/"}},"pin-builder":e=>(0,n.Z)("/pin-builder/",e),purchases:()=>s.reporting(a("PURCHASE")),awareness_reserved:()=>s.reporting(a("IMPRESSION")),engagement:()=>s.reporting(a("BILLABLE_ENGAGEMENT")),videos:()=>s.reporting(a("TEMPORARY_BIDDED_CPM_VIDEO")),videos_reserved:()=>s.reporting(a("TEMPORARY_IMPRESSION_VIDEO")),videos_cpv:()=>s.reporting(a("TEMPORARY_MRC_CPV_VIDEO")),conversions:()=>s.reporting(a("WEB_CONVERSION")),accounts_manager:()=>"/accounts_manager/",reporting_preferences:e=>(0,n.Z)("/reporting/preferences/",e),report_builder:e=>(0,n.Z)("/report-center/builder/",e),report_history:e=>(0,n.Z)("/report-center/history/",e),report_unsubscribe:e=>(0,n.Z)("/report-center/unsubscribe/",e),report_download:e=>(0,n.Z)("/report-center/download/",e),media_planner:()=>"/media_planner/",awareness:()=>s.reporting(a("AWARENESS")),traffic:()=>s.reporting(a("TRAFFIC")),app_installs:()=>s.reporting(a("APP_INSTALL")),catalog_sales:()=>s.reporting(a("CATALOG_SALES")),web_conversion:()=>s.reporting(a("WEB_CONVERSION")),video_view:()=>s.reporting(a("VIDEO_VIEW")),quick_promote:e=>(0,n.Z)("/quick-promote/",e),quick_promote_on_www:()=>"/advertiser/quick-promote/",recommendations:e=>(0,n.Z)("/recommendations/",e),catalog_view:()=>"/product-catalogs/data-source"},c=s},756306:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(667294),i=t(121093),o=t(883119),a=t(785893);class s extends n.Component{constructor(...e){var r,t,n;super(...e),n={paused:!1,showPulsar:!1},(t="state")in(r=this)?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n}componentDidMount(){this.mountPulsar(),this.props.onExperienceMount&&this.experience&&this.props.onExperienceMount(this.experience)}componentWillUnmount(){clearTimeout(this.timer)}mountPulsar(){if(!this.experience)return;const{display_data:e}=this.experience;e.has_pulsar&&this.setState({showPulsar:!0})}renderPulsar(){const{anchor:e}=this.props,{paused:r}=this.state;if(!e)return null;const t=e.getBoundingClientRect(),{height:n,width:i}=t,s=-(68+n/2),c=-(68-i/2);return(0,a.jsx)(o.xu,{position:"absolute",zIndex:new o.Ry(1),dangerouslySetInlineStyle:{__style:{marginTop:s,marginLeft:c,cursor:"pointer",pointerEvents:"none"}},children:(0,a.jsx)(o.o3,{paused:r})})}renderFlyout(e){const{anchor:r,flyoutSize:t,idealDirection:n,textOverflow:i}=this.props;return(0,a.jsx)(o.J2,{anchor:r,color:"blue",idealDirection:n||"down",onDismiss:()=>{},shouldFocus:!1,showCaret:!0,size:t,children:(0,a.jsx)(o.xu,{column:12,padding:3,children:(0,a.jsx)(o.xv,{color:"inverse",overflow:i,weight:"bold",children:e})})})}render(){const{experienceIds:e,placementId:r,shouldTimeoutDismiss:t}=this.props,{showPulsar:n}=this.state;return(0,a.jsx)(i.Z,{eligibleIds:e,placementId:r,eligibleTypes:[8],children:({complete:e,dismiss:r,experience:i})=>{this.experience=i;const{display_data:s}=i;return s.has_pulsar||s.has_tooltip?(t&&s.disappearTime&&s.disappearTime>0&&(this.timer=setTimeout((()=>(r(),null)),s.disappearTime)),(0,a.jsxs)(o.xu,{zIndex:new o.Ry(10),children:[n&&this.renderPulsar(),s.has_tooltip&&(!s.has_pulsar||this.state.paused)&&this.renderFlyout(s.text)]})):(e(),null)}})}}},869636:(e,r,t)=>{t.d(r,{Z:()=>d});var n=t(667294),i=t(702664),o=t(442279),a=t(123159),s=t(780280),c=t(172071);const l=(0,o.P1)((e=>e.experiences),((e,r)=>r),((e,r)=>e[r])),u=(e,r)=>"function"==typeof r?r(e):r,d=(e,r={},t=!1)=>{const[o,d]=(0,n.useReducer)(u,r),{isBot:p}=(0,s.B)(),{fetchExperienceForPlacements:g,mountPlacement:_,triggerExperimentsForPlacement:f,unmountPlacement:h}=(0,a.M)();(0,n.useDebugValue)(`Placement Hook ID - ${e}`),(0,n.useEffect)((()=>{const r=Object.assign({},o),n=t&&null!=r&&r.advertiser_id?{advertiserId:r.advertiser_id}:void 0;return _(e,r,n),()=>{h(e)}}),[]),(0,n.useEffect)((()=>{Object.keys(o).length>0&&g([e],p,o)}),[o]);const m=(0,i.useSelector)((r=>l(r,e))),v=(0,i.useSelector)((r=>r.experiencesMulti[e])),x=m?m.triggerable_placed_exps:[];(0,n.useEffect)((()=>{((e,r,t={})=>{c.Z.increment(`${e}.${r}`,1,t)})("experienceservice","placementHookExperimentTrigger.1",{platform:"web",placement_id:e,...x}),f(e,o)}),[JSON.stringify(x)]);return{experience:m,experiencesMulti:v,setExtraContext:d}}},940589:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(643913);function i(e){const{query:r,rs:t,scope:i,guideAdded:o,filters:a,user:s}=e;if(!r)return"/";const c={q:r,rs:t};if(a&&(c.filters=a),s&&(c.user=s),o&&o.term&&(c.add_refine=`${o.term}|guide|word|${o.index}`),window.location.pathname.startsWith("/explore"))return`/search/pins/?${(0,n.Z)(c)}`;let l=i;return["pins","buyable_pins","my_pins","boards","users","idea_pins"].includes(l)||(l="pins"),l?`/search/${l}/?${(0,n.Z)(c)}`:`${window.location.pathname}?${(0,n.Z)(c)}`}},883851:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(215292),i=t(883119),o=t(785893);function a(e,r){return r?"primary":e?"tertiary":void 0}function s({colors:e,isSelected:r,onClick:t}){return(0,o.jsx)(n.q,{children:({hovered:n,onMouseEnter:s,onMouseLeave:c})=>(0,o.jsx)(i.kC,{alignItems:"center",height:64,justifyContent:"start",children:(0,o.jsx)(i.iP,{mouseCursor:"pointer",onMouseEnter:s,onMouseLeave:c,onTap:t,rounding:"pill",children:(0,o.jsx)(i.xu,{alignItems:"center",color:a(n,r),display:"flex",height:64,justifyContent:"center",rounding:"pill",width:92,children:(0,o.jsx)(i.xu,{alignItems:"center",color:"default",display:"flex",height:60,justifyContent:"center",rounding:"pill",width:88,children:(0,o.jsx)(i.xu,{display:"flex",height:56,overflow:"hidden",rounding:"pill",width:84,wrap:!0,children:e.map(((e,r)=>(0,o.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:e}},height:28,width:42},`${e}-${r}`)))})})})})})})}},796668:(e,r,t)=>{t.d(r,{W:()=>u,Z:()=>p});var n=t(667294),i=t(756306),o=t(883851),a=t(898781),s=t(407043),c=t(883119),l=t(785893);const u=[["#F0E3DC","#F8D7D8","#F2D7BE","#F7C3AF"],["#DEBAB0","#E0999A","#DDA67C","#D98A64"],["#9A6B52","#A25847","#B37143","#BF6951"],["#683929","#34261F","#64281B","#4F2221"]],d=[{display:"Range 1",swatch_hex_colors:["#F0E3DC","#F8D7D8","#F2D7BE","#F7C3AF"],term:"skin_color_bucket_id:1"},{display:"Range 2",swatch_hex_colors:["#DEBAB0","#E0999A","#DDA67C","#D98A64"],term:"skin_color_bucket_id:2"},{display:"Range 3",swatch_hex_colors:["#9A6B52","#A25847","#B37143","#BF6951"],term:"skin_color_bucket_id:3"},{display:"Range 4",swatch_hex_colors:["#683929","#34261F","#64281B","#4F2221"],term:"skin_color_bucket_id:4"}];function p({currentlyAppliedFiltersParamTerm:e,filterTones:r=d,onClickApplyFilters:t,query:p,showHeaderText:g=!0}){const{logContextEvent:_}=(0,s.v)(),f=(0,a.ZP)(),h=(0,n.useRef)(null),m=(0,n.useRef)(null),v=e?f.bt("Some ideas in this skin tone range", "Some ideas in this skin tone range", "SkinToneFilters.copy.termSelected", undefined, true):f.bt("Pick a skin tone range", "Pick a skin tone range", "SkinToneFilters.copy.noTermSelected", undefined, true);return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsxs)(c.kC,{alignItems:g?"center":"start",direction:"column",justifyContent:"start",children:[g&&(0,l.jsx)(c.xu,{marginBottom:2,children:(0,l.jsx)(c.xv,{color:"default",overflow:"normal",weight:"bold",children:v})}),(0,l.jsx)(c.xu,{display:"flex",flex:"none",paddingX:1,ref:h,children:r.map((({term:r},n)=>(0,l.jsx)(c.xu,{"data-test-id":"skin-tone-option",dangerouslySetInlineStyle:{__style:{padding:"0 2px"}},children:(0,l.jsx)(o.Z,{colors:u[n],isSelected:e===r,onClick:()=>(r=>{var n;const i=e===r?"":r;_({event_type:101,component:47,element:10418,view_type:2,aux_data:{entered_query:p,filter_type:"skin_tone",value:i}}),null===(n=m.current)||void 0===n||n.complete(),t(i)})(r)})},r)))})]}),h&&(0,l.jsx)(i.Z,{anchor:h.current,experienceIds:[502978],idealDirection:"right",onExperienceMount:e=>{e.complete&&502978===e.experience_id&&(m.current=e)},placementId:29})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/11670.en_GB-f66fd4c028cec346.mjs.map