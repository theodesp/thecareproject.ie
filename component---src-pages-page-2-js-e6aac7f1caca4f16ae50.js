(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(146),i=n(163),u=n(143);t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(u.a,null,a.a.createElement("h1",null,"Hi from the second page"),a.a.createElement("p",null,"Welcome to page 2"),a.a.createElement(o.Link,{to:"/"},"Go back to the homepage")))}},142:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=m,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=r(n(160)),o=r(n(169)),i=r(n(7)),u=r(n(51)),s=r(n(52)),c=r(n(4)),l=r(n(0)),p=n(22),d=n(146);function m(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(a.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,u=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),f=t.replace,h=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=m(n);return l.default.createElement(p.Link,(0,o.default)({to:g,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),b(n,{state:c,replace:f})),!0}},h))},t}(l.default.Component);h.propTypes=(0,o.default)({},f,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g=h;t.default=g;var b=function(e,t){window.___navigate(m(e),t)};t.navigate=b;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(m(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(m(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},143:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var r=n(141),a=r.c.div.withConfig({displayName:"global__Container",componentId:"sc-1t5oudw-0"})(["max-width:1200px;width:100%;margin:0 auto;padding:0 16px;@media (min-width:","){max-width:540px;}@media (min-width:","){max-width:720px;}@media (min-width:","){max-width:960px;}@media (min-width:","){max-width:1200px;}",";"],function(e){return e.theme.screen.xs},function(e){return e.theme.screen.sm},function(e){return e.theme.screen.md},function(e){return e.theme.screen.lg},function(e){return e.fluid&&"\n    max-width: 1200px !important;\n  "}),o=r.c.section.withConfig({displayName:"global__Section",componentId:"sc-1t5oudw-1"})(["padding:128px 0;overflow:hidden;@media (max-width:","){padding:96px 0;}",";"],function(e){return e.theme.screen.md},function(e){return e.accent&&"background-color: "+("secondary"===e.accent?e.theme.color.white.dark:e.theme.color.primary)})},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(142),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(161),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var d=a.a.createContext({}),m=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},161:function(e,t,n){var r;e.exports=(r=n(185))&&r.default||r},163:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(141),s=n(170),c=n.n(s),l={description:"An absurd gatsby starter",title:"Absurd",url:"",author:"ajayns",keywords:["gatsby","site","absurd"],twitter:{id:"@ajayns08",img:""},facebook:{id:"",img:""}},p=function(){return a.a.createElement(c.a,null,a.a.createElement("meta",{property:"fb:app_id",content:l.facebook.id}),a.a.createElement("meta",{property:"og:title",content:l.title}),a.a.createElement("meta",{property:"og:type",content:"website"}),a.a.createElement("meta",{property:"og:url",content:l.url}),a.a.createElement("meta",{property:"og:image",content:l.facebook.img}),a.a.createElement("meta",{property:"og:description",content:l.description}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:"@hackinoutco"}),a.a.createElement("meta",{name:"twitter:site",content:"@hackinoutco"}),a.a.createElement("meta",{name:"twitter:title",content:l.title}),a.a.createElement("meta",{name:"twitter:description",content:l.description}),a.a.createElement("meta",{name:"twitter:domain",content:l.url}),a.a.createElement("meta",{name:"twitter:image:src",content:l.img}),a.a.createElement("meta",{name:"description",content:l.description}),a.a.createElement("meta",{name:"keywords",content:l.keywords.join(", ")}),a.a.createElement("meta",{name:"author",content:l.author}),a.a.createElement("title",null,l.title),a.a.createElement("html",{lang:"en"}))},d={font:{primary:"'Prata', serif",secondary:"'Average', serif"},font_size:{small:"font-size: 20px; line-height: 30px",regular:"font-size: 24px; line-height: 32px",large:"font-size: 30px; line-height: 40px",larger:"font-size: 36px; line-height: 48px",xlarge:"font-size: 48px; line-height: 56px"},color:{white:{regular:"#FFFFFF",dark:"#F6F6F6"},black:{lighter:"#ABA8AF",light:"#564F62",regular:"#211E26"},primary:"#251f9d"},screen:{xs:"575px",sm:"767px",md:"991px",lg:"1199px"}},m=(n(150),n(171)),f=n.n(m);function h(){var e=f()(["\n  ",";\n\n  body {\n    font-family: ",";\n  }\n\n  h1, h2, h3, p {\n    margin: 0;\n    font-weight: normal;\n  }\n\n  h1, h2 {\n    font-family: ",";\n  }\n\n  h1 {\n    ",";\n  }\n\n  h2 {\n    ",";\n  }\n\n  h3 {\n    ",";\n  }\n\n  p {\n    ",";\n    color: ",";\n  }\n\n  @media (max-width: ",") {\n    h1 {\n      ",";\n    }\n\n    h2 {\n      ",";\n    }\n\n    h3 {\n      ",";\n    }\n\n    p {\n      ",";\n    }\n  }\n\n  button {\n    border: none;\n    background: none;\n    outline: none;\n    padding: 0;\n    cursor: pointer;\n  }\n\n  a {\n    cursor: pointer;\n  }\n"]);return h=function(){return e},e}var g=Object(u.b)(h(),"\n  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}\n",function(e){return e.theme.font.secondary},function(e){return e.theme.font.primary},function(e){return e.theme.font_size.xlarge},function(e){return e.theme.font_size.larger},function(e){return e.theme.font_size.large},function(e){return e.theme.font_size.regular},function(e){return e.theme.color.black.light},function(e){return e.theme.screen.sm},function(e){return e.theme.font_size.larger},function(e){return e.theme.font_size.large},function(e){return e.theme.font_size.regular},function(e){return e.theme.font_size.small}),b=function(e){var t=e.children;return a.a.createElement(u.a,{theme:d},a.a.createElement(a.a.Fragment,null,a.a.createElement(p,null),a.a.createElement(g,null),t))};b.propTypes={children:i.a.node.isRequired};var y=b;n.d(t,"a",function(){return y})},169:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},185:function(e,t,n){"use strict";n.r(t);n(32);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),u=n(54),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-page-2-js-e6aac7f1caca4f16ae50.js.map