(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,i){"use strict";i("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7xcA":function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"html":"<p>I’m Casper De Bock, a 16 year old beat producer. I’m eager to learn new techniques and enhance my capabilities. All tips and tricks are welcome @ <a href=\\"https://twitter.com/casperdebock\\">Twitter</a>, <a href=\\"https://soundcloud.com/pheh-981959370\\">Soundcloud</a>, <a href=\\"https://www.instagram.com/casperdebock/\\">Instagram</a>.</p>"}}]}}}')},"9eSz":function(e,t,i){"use strict";i("rGqo"),i("yt8O"),i("Btvt"),i("XfO3"),i("EK0E"),i("INYr"),i("0mN4");var a=i("TqRt");t.__esModule=!0,t.default=void 0;var r,n=a(i("PJYZ")),s=a(i("VbXa")),o=a(i("8OQS")),d=a(i("pVnL")),l=a(i("q1tI")),c=a(i("17x9")),u=function(e){var t=(0,d.default)({},e),i=t.resolutions,a=t.sizes,r=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},L=function(e){var t=e.media;return!!t&&(N&&!!window.matchMedia(t).matches)},M=function(e){var t=e.fluid,i=e.fixed;return g(t||i).src},g=function(e){if(N&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(L);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},w=Object.create({}),I=function(e){var t=u(e),i=M(t);return w[i]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,N="undefined"!=typeof window,D=N&&window.IntersectionObserver,p=new WeakMap;function f(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:n}),l.default.createElement("source",{media:r,srcSet:i,sizes:n}))}))}function y(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function j(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function h(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function S(e,t){var i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:i)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var C=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),p.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return i&&(i.observe(e),p.set(e,t)),function(){i.unobserve(e),p.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+l+s+o+i+a+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=function(e){var t=e.src,i=e.imageVariants,a=e.generateSources,r=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(E,(0,d.default)({src:t},r,{ariaHidden:n}));return i.length>1?l.default.createElement("picture",null,a(i),s):s},E=l.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,L=e.draggable,M=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":M,sizes:i,srcSet:a,src:r},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:L,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));E.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var A=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=N&&I(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!m&&D&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||N&&(m||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)(i)),i.handleRef=i.handleRef.bind((0,n.default)(i)),i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:I(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=I(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),i=M(t),w[i]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,L=void 0===c?{}:c,M=e.placeholderClassName,w=e.fluid,I=e.fixed,m=e.backgroundColor,N=e.durationFadeIn,D=e.Tag,p=e.itemProp,y=e.loading,S=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,d.default)({opacity:C?1:0,transition:A?"opacity "+N+"ms":"none"},o),z="boolean"==typeof m?"lightgray":m,Y={transitionDelay:N+"ms"},k=(0,d.default)({opacity:this.state.imgLoaded?0:1},A&&Y,{},o,{},L),v={title:t,alt:this.state.isVisible?"":i,style:k,className:M,itemProp:p};if(w){var O=w,G=g(w);return l.default.createElement(D,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},l.default.createElement(D,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),z&&l.default.createElement(D,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&Y)}),G.base64&&l.default.createElement(b,{ariaHidden:!0,src:G.base64,spreadProps:v,imageVariants:O,generateSources:h}),G.tracedSVG&&l.default.createElement(b,{ariaHidden:!0,src:G.tracedSVG,spreadProps:v,imageVariants:O,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,f(O),l.default.createElement(E,{alt:i,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:p,loading:y,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:i,title:t,loading:y},G,{imageVariants:O}))}}))}if(I){var U=I,P=g(I),B=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete B.display,l.default.createElement(D,{className:(a||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},z&&l.default.createElement(D,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},A&&Y)}),P.base64&&l.default.createElement(b,{ariaHidden:!0,src:P.base64,spreadProps:v,imageVariants:U,generateSources:h}),P.tracedSVG&&l.default.createElement(b,{ariaHidden:!0,src:P.tracedSVG,spreadProps:v,imageVariants:U,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,f(U),l.default.createElement(E,{alt:i,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:p,loading:y,draggable:S})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:i,title:t,loading:y},P,{imageVariants:U}))}}))}return null},t}(l.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});A.propTypes={resolutions:T,sizes:z,fixed:c.default.oneOfType([T,c.default.arrayOf(T)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Y=A;t.default=Y},INYr:function(e,t,i){"use strict";var a=i("XKFU"),r=i("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),a(a.P+a.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i("nGyu")(n)},OGtf:function(e,t,i){var a=i("XKFU"),r=i("eeVq"),n=i("vhPU"),s=/"/g,o=function(e,t,i,a){var r=String(n(e)),o="<"+t;return""!==i&&(o+=" "+i+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var i={};i[e]=t(o),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",i)}},QL0L:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"firstName":"Casper","lastName":"De Bock","avatar":{"childImageSharp":{"fluid":{"src":"/CasperDeBock/static/77f1373dc065b9065e74190cdaa98c6a/3e83c/profilePicture.png","srcSet":"/CasperDeBock/static/77f1373dc065b9065e74190cdaa98c6a/630fb/profilePicture.png 300w,\\n/CasperDeBock/static/77f1373dc065b9065e74190cdaa98c6a/45a45/profilePicture.png 601w,\\n/CasperDeBock/static/77f1373dc065b9065e74190cdaa98c6a/3e83c/profilePicture.png 1201w,\\n/CasperDeBock/static/77f1373dc065b9065e74190cdaa98c6a/5f9b4/profilePicture.png 1229w","aspectRatio":0.6060606060606061,"base64":"data:image/png;base64,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","sizes":"(max-width: 1201px) 100vw, 1201px"}}}}}}]}}}')},RXBc:function(e,t,i){"use strict";i.r(t);var a=i("q1tI"),r=i.n(a),n=i("vrFN"),s=i("QL0L"),o=i("vOnD"),d=i("9eSz"),l=i.n(d),c=i("rHsj"),u=i("f/V8"),L=i.n(u),M=i("fhmS"),g=i.n(M),w=o.a.div.withConfig({displayName:"Hero__HeroSection",componentId:"sc-1nhivnl-0"})(["min-height:100vh;background:var(--color-hero-bg);.container{display:flex;align-items:center;}&::before{content:'';background:url(",");height:10px;width:100%;position:absolute;background-repeat:repeat-x;animation:roll-in 1s ease;}@media (max-width:1200px){overflow:hidden;}@media (max-width:992px){height:100vh;.container{display:block;}}@keyframes roll-in{from{top:-10px;width:0;opacity:0;}to{top:0;width:100%;opacity:1;}}"],g.a),I=o.a.div.withConfig({displayName:"Hero__AvatarContainer",componentId:"sc-1nhivnl-1"})(["width:601px;position:absolute;right:0;top:10vh;h1{display:inline-block;width:auto;position:absolute;bottom:-1.4rem;left:10%;z-index:3;}z-index:1;@media (max-width:992px){position:relative;width:120%;top:0;right:auto;margin-left:-10%;h1{display:none;}}"]),m=Object(o.a)(l.a).withConfig({displayName:"Hero__Avatar",componentId:"sc-1nhivnl-2"})(["-webkit-filter:grayscale(100%) contrast(120%) brightness(110%);z-index:2;"]),N=o.a.div.withConfig({displayName:"Hero__Circle",componentId:"sc-1nhivnl-3"})(["width:8rem;height:8rem;border-radius:8rem;background:var(--color-orange);position:absolute;top:210px;right:140px;z-index:-1;@media (max-width:992px){top:20%;right:20%;}"]),D=o.a.img.withConfig({displayName:"Hero__Slogan",componentId:"sc-1nhivnl-4"})(["position:absolute;bottom:10%;left:5%;width:6rem;animation:rotate 20s linear infinite;@media (max-width:1500px){left:-1em;}@media (max-width:992px){top:40%;left:-3rem;}@keyframes rotate{from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(360deg)}}"]),p=o.a.h1.withConfig({displayName:"Hero__BigTitle",componentId:"sc-1nhivnl-5"})(["font-size:10rem;-webkit-text-stroke:",";color:",";line-height:1em;@media (max-width:1200px){font-size:8rem;}@media (max-width:992px){font-size:20vw;text-align:center;display:block;padding:4rem 0;}"],(function(e){return e.outline?"2px var(--color-black)":null}),(function(e){return e.outline?"transparent":"var(--color-black)"})),f=o.a.h1.withConfig({displayName:"Hero__MediumTitle",componentId:"sc-1nhivnl-6"})(["font-size:6rem;color:var(--color-orange);"]),y=o.a.div.withConfig({displayName:"Hero__ScrollDown",componentId:"sc-1nhivnl-7"})(["position:absolute;bottom:0;font-size:.9rem;text-transform:uppercase;font-family:'Roboto',sans-serif;display:inline-block;line-height:1rem;min-height:calc(1.5rem + 40px);letter-spacing:.2em;color:var(--color-black);.scroll{margin-top:.5rem;margin-left:calc(50% - 1px);width:2px;height:40px;background:var(--color-black);animation:pulse 2s infinite;}@media (max-width:992px){display:none;}@keyframes pulse{0%{height:0;}50%{height:40px;transform:translate(0,0);opacity:1;}80%{transform:translate(0,40px);height:0;opacity:.5;}100%{height:0;}}"]);var j=function(){var e=s.data.allMarkdownRemark.edges[0].node.frontmatter,t=e.avatar,i=e.firstName,a=e.lastName,n=r.a.useState(!1),o=n[0],d=n[1];return r.a.createElement(w,null,r.a.createElement("div",{className:"container",style:{minHeight:"100vh"}},r.a.createElement(p,null,r.a.createElement(c.a,{start:!0,type:"fade-in-up",timeout:200},r.a.createElement("span",{style:{WebkitTextStroke:"2px #171717",color:"transparent",display:"block"}},i)),r.a.createElement(c.a,{start:!0,type:"fade-in-up",timeout:500},a)),r.a.createElement(I,null,r.a.createElement(m,{fluid:t.childImageSharp.fluid,alt:"Casper De Bock",fadeIn:!1,onLoad:function(){return d(!0)},className:o?"anim--fade-in-up":""}),r.a.createElement(f,null,"This is me"),r.a.createElement(c.a,{start:!0,type:"pop",timeout:1e3},r.a.createElement(N,null))),r.a.createElement(y,null,"Scroll Down ",r.a.createElement("div",{className:"scroll"}))),r.a.createElement(D,{src:L.a,alt:"I make beats & I love it"}))},h=i("7xcA"),S=o.a.div.withConfig({displayName:"About__AboutSection",componentId:"sc-1stvmhh-0"})(["background:var(--color-bg);padding-top:16rem;p{width:50%;}@media (max-width:1200px){p{width:80%;}padding-top:8rem;}@media (max-width:768px){p{width:100%;}}a{font-family:'Merriweather',serif;font-weight:normal;}"]);var C=function(){var e=h.data.allMarkdownRemark.edges[0].node.html;return r.a.createElement(S,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})))},x=i("jcIW"),b=(i("91GP"),o.a.div.withConfig({displayName:"Track__TrackContainer",componentId:"b92tkj-0"})(["padding:4rem 0;@media (max-width:768px){text-align:center;}"])),E=o.a.h1.withConfig({displayName:"Track__TrackTitle",componentId:"b92tkj-1"})(["font-size:6rem;color:transparent;-webkit-text-stroke:2px var(--color-black);@media (max-width:768px){font-size:4rem;letter-spacing:.05em;padding-bottom:1rem;}"]),A=o.a.div.withConfig({displayName:"Track__MediaPlayer",componentId:"b92tkj-2"})(["display:flex;align-items:center;@media (max-width:768px){display:block;}"]),T=o.a.button.withConfig({displayName:"Track__PlayButton",componentId:"b92tkj-3"})(["background:var(--color-orange);color:white;font-size:1rem;padding:.75em 0;min-width:100px;outline:none;text-transform:uppercase;text-align:center;letter-spacing:.2em;&:hover{cursor:pointer;}@media (max-width:768px){display:block;margin:0 auto 1rem auto;}"]),z=o.a.div.withConfig({displayName:"Track__Timeline",componentId:"b92tkj-4"})(["width:50%;height:.75rem;background:white;@media (max-width:1200px){width:100%;}@media (max-width:768px){display:none;}"]),Y=o.a.div.withConfig({displayName:"Track__Playhead",componentId:"b92tkj-5"})(["background:var(--color-black);height:100%;pointer-events:none;"]),k=o.a.span.withConfig({displayName:"Track__Timestamp",componentId:"b92tkj-6"})(["padding:0 1.5rem;letter-spacing:.1em;@media (max-width:768px){padding:0;}"]);var v=function(e){var t=r.a.useState(!1),i=t[0],a=t[1],n=r.a.useState(0),s=n[0],o=n[1],d=r.a.useState({current:"0:00",total:"0:00"}),l=d[0],c=d[1];function u(e){var t=Math.floor(e%60);return[Math.floor((e-e%60)/60),t<10?"0"+t:t].join(":")}return r.a.createElement(b,null,r.a.createElement(E,null,e.title),r.a.createElement("audio",{preload:"auto",src:e.track,id:e.id,onTimeUpdate:function(e){var t=e.target.duration,i=e.target.currentTime;c(Object.assign({},l,{current:u(i)})),i/t!=1&&o(i/t*100)},onLoadedData:function(e){c(Object.assign({},l,{total:u(e.target.duration)}))}}),r.a.createElement(A,null,r.a.createElement(T,{onClick:function(e){i?i&&(e.target.parentNode.parentNode.children[1].pause(),a(!1)):(e.target.parentNode.parentNode.children[1].play(),a(!0))},style:{background:i?"var(--color-black)":"var(--color-orange)"}},i?"stop":"play"),r.a.createElement(k,null,l.current,"/",l.total),r.a.createElement(z,{onClick:function(e){e.stopPropagation();var t=e.target.getBoundingClientRect().left,i=(e.clientX-t)/e.target.getBoundingClientRect().width*100,a=i/100*e.target.parentNode.parentNode.children[1].duration;o(i),c(Object.assign({},l,{current:u(a)})),e.target.parentNode.parentNode.children[1].currentTime=a}},r.a.createElement(Y,{style:{width:s+"%"}}))))},O=o.a.div.withConfig({displayName:"Tracks__TracksSection",componentId:"sc-17d7fu0-0"})(["background:var(--color-bg);padding:6rem 0;position:relative;z-index:1;overflow:hidden;@media (max-width:768px){padding:4rem 0;}"]);var G=function(){var e=x.data;return r.a.createElement(O,null,r.a.createElement("div",{className:"container"},e.allMarkdownRemark.edges.map((function(e,t){return r.a.createElement(v,{id:e.node.frontmatter.id,title:e.node.frontmatter.title,track:e.node.frontmatter.src.publicURL,key:t})}))))},U=o.a.div.withConfig({displayName:"Footer__FooterComponent",componentId:"sc-1xqajj9-0"})(["background:var(--color-hero-bg);width:100%;text-align:center;letter-spacing:.2em;padding:3rem 0;a{color:var(--color-black);}a:hover{color:var(--color-orange);}"]);var P=function(){return r.a.createElement(U,null,r.a.createElement("small",null,"Website by ",r.a.createElement("a",{href:"https://gilles.design"},"Gilles De Praetere")))};i("/Cf1"),t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(n.a,{title:"Home"}),r.a.createElement(j,null),r.a.createElement(C,null),r.a.createElement(G,null),r.a.createElement(P,null))}},"f/V8":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0ic2xvZ2FuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDEuNzIiIGhlaWdodD0iMTQxLjQyIiB2aWV3Qm94PSIwIDAgMTQxLjcyIDE0MS40MiI+CiAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02Ny44NCwxNi45OGwtNC4wOC40TDYyLjA4LjQsNjYuMTYsMFoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8yIiBkYXRhLW5hbWU9IlBhdGggMiIgZD0iTTkxLjgsMi44bC0uNDgsMTIuNDZMOTguOTQsNS40bDUuMDksMS44NUw5OC4yLDIzLjI5bC0zLjg4LTEuNDEsMS4zNi0zLjc0LDMuMTYtNy41My04LjAzLDEwLTIuNTUtLjkzLjI2LTEyLjgzTDg2LjEsMTQuNjYsODQuNzQsMTguNGwtMy44Ny0xLjQxTDg2LjcuOTVaIiBmaWxsPSIjZjUzZTI2Ii8+CiAgPHBhdGggaWQ9IlBhdGhfMyIgZGF0YS1uYW1lPSJQYXRoIDMiIGQ9Ik0xMTEuMDksMjkuOTNsLTQuMjItMy43NC0yLjg1LDEuNzNMMTAwLjczLDI1bDE2LTguNjIsMi44OSwyLjU3LTYuNiwxNi45NS0zLjMxLTIuOTNabS0xLjM3LTUuNDYsMi43NSwyLjQzLDIuNTUtNS42NVoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF80IiBkYXRhLW5hbWU9IlBhdGggNCIgZD0iTTEyMy4wNyw0MC4yNGwtMi40NS0uNTQtMy45LDIuMjUtMi4wNS0zLjU2LDE0Ljc5LTguNTIsMi4wNSwzLjU2LTYuNTIsMy43NiwyLjU5LjE2LDYuNDguNTIsMi41NCw0LjQxLTkuNDItMS4yMy01LjM3LDkuNzUtMi40My00LjIyWiIgZmlsbD0iI2Y1M2UyNiIvPgogIDxwYXRoIGlkPSJQYXRoXzUiIGRhdGEtbmFtZT0iUGF0aCA1IiBkPSJNMTMxLjg5LDYyLjI3bC0xLjQzLTYuMzEtMy45OC45LDEuNjgsNy40NS0zLjA5LjctMi41OS0xMS40NiwxNi42NC0zLjc2LDIuNiwxMS40OS0zLjEuNy0xLjY5LTcuNDgtMy41MS43OSwxLjQzLDYuMzFaIiBmaWxsPSIjZjUzZTI2Ii8+CiAgPHBhdGggaWQ9IlBhdGhfNiIgZGF0YS1uYW1lPSJQYXRoIDYiIGQ9Ik0xMjUuMDYsNzYuNzhsMTYuNjEsMy44OS0xLjQsNS45N2E4LjYxNSw4LjYxNSwwLDAsMS0yLjMyLDQuNiw0LjQ1MSw0LjQ1MSwwLDAsMS01Ljg2LS4yNCwzLjUyNSwzLjUyNSwwLDAsMS0uOTQtMi4wNiwzLjYsMy42LDAsMCwxLTEuNzUsMS43LDMuODE3LDMuODE3LDAsMCwxLTIuNDUuMTYsNC41MTEsNC41MTEsMCwwLDEtMy4zMS0yLjQxLDcuNTc4LDcuNTc4LDAsMCwxLS4xOC00Ljg3Wm02LjEzLDUuNjYtMy45OC0uOTMtLjYyLDIuNjJhMi41NSwyLjU1LDAsMCwwLC4xMSwxLjc4LDEuNzcsMS43NywwLDAsMCwxLjI2LjkxLDEuODkzLDEuODkzLDAsMCwwLDIuNTctMS41OFptMi42Mi42Mi0uNDksMi4wOWEzLjA1MiwzLjA1MiwwLDAsMCwuMDQsMS45OCwxLjcxMiwxLjcxMiwwLDAsMCwxLjI1Ljg4LDEuODY0LDEuODY0LDAsMCwwLDEuNjYtLjI1LDMuMywzLjMsMCwwLDAsLjkyLTEuODRsLjQ2LTEuOTZaIiBmaWxsPSIjZjUzZTI2Ii8+CiAgPHBhdGggaWQ9IlBhdGhfNyIgZGF0YS1uYW1lPSJQYXRoIDciIGQ9Ik0xMjEuMjQsMTA2LjExbDMuMjgtNS41OEwxMjEsOTguNDdsLTMuODcsNi41OS0yLjczLTEuNiw1Ljk2LTEwLjEzLDE0LjcxLDguNjUtNS45NywxMC4xNS0yLjc0LTEuNjEsMy44OS02LjYxLTMuMS0xLjgyLTMuMjgsNS41OFoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF84IiBkYXRhLW5hbWU9IlBhdGggOCIgZD0iTTEwNy4yMiwxMTUuMDFsNC4xOS0zLjc3LTEuNC0zLjAzLDMuMjctMi45NCw2Ljc2LDE2Ljg3LTIuODcsMi41OS0xNi4xLTguNDYsMy4yOC0yLjk2Wm01LjU4LS43NS0yLjczLDIuNDUsNS4zMywzLjE3WiIgZmlsbD0iI2Y1M2UyNiIvPgogIDxwYXRoIGlkPSJQYXRoXzkiIGRhdGEtbmFtZT0iUGF0aCA5IiBkPSJNOTMuMjUsMTM1LjE3bDQuNjQtMi4xNi01Ljg2LTEyLjU5LDMuNzMtMS43Myw1Ljg2LDEyLjU5LDQuNTYtMi4xMiwxLjM0LDIuODgtMTIuOTMsNi4wMVoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xMCIgZGF0YS1uYW1lPSJQYXRoIDEwIiBkPSJNNzYuMDUsMTI4Ljk3YTEuNywxLjcsMCwwLDAsLjgxLDEuMzEsNy44Myw3LjgzLDAsMCwwLDIuMzYuNzUsMjIuOCwyMi44LDAsMCwxLDIuNzQuN2MyLjMzLjgsMy42MiwyLjE0LDMuODUsNC4wMmE0LjA1NCw0LjA1NCwwLDAsMS0uNSwyLjU5LDUuMzg0LDUuMzg0LDAsMCwxLTIuMTEsMS45Nyw5LjA4LDkuMDgsMCwwLDEtMy4yOSwxLjAzLDcuOTI3LDcuOTI3LDAsMCwxLTMuMzYtLjIzLDUuMTI1LDUuMTI1LDAsMCwxLTIuNDgtMS41Nyw0Ljg0NSw0Ljg0NSwwLDAsMS0xLjE1LTIuNjVsNC4wNy0uNTJhMi4wNTUsMi4wNTUsMCwwLDAsLjg0LDEuNTIsMi40ODYsMi40ODYsMCwwLDAsMS43OS4zNSwyLjg1OSwyLjg1OSwwLDAsMCwxLjY3LS43LDEuNDMxLDEuNDMxLDAsMCwwLS4zNy0yLjQsOS4wNDEsOS4wNDEsMCwwLDAtMi41OS0uNzgsMTUuMjc3LDE1LjI3NywwLDAsMS0zLjA0LS44NSw0LjksNC45LDAsMCwxLTMuMy00LjAxLDQuMTYsNC4xNiwwLDAsMSwxLjIzLTMuNyw3LjUxNyw3LjUxNywwLDAsMSw0LjQzLTEuODUsOS4yNjksOS4yNjksMCwwLDEsMy44Mi4yNiw1LjcxMyw1LjcxMywwLDAsMSwyLjc3LDEuNyw1LjMsNS4zLDAsMCwxLDEuMjIsMi44NWwtNC4wOS41MmEyLjYzMywyLjYzMywwLDAsMC0uOTYtMS45MiwzLjMyNSwzLjMyNSwwLDAsMC0yLjM3LS4zNSwyLjY2OCwyLjY2OCwwLDAsMC0xLjU0LjY0QTEuNDM4LDEuNDM4LDAsMCwwLDc2LjA1LDEyOC45N1oiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xMSIgZGF0YS1uYW1lPSJQYXRoIDExIiBkPSJNNTQuMDMsMTMxLjM1YTEwLjY2NywxMC42NjcsMCwwLDEsLjM4LDIuMTMsNC40NzMsNC40NzMsMCwwLDEtLjI2LDEuODYsNC4zODEsNC4zODEsMCwwLDEtMi4zOSwyLjY4LDQuODMzLDQuODMzLDAsMCwxLTMuNzIuMDEsNC41NTEsNC41NTEsMCwwLDEtMi42MS0yLjE5LDMuODM5LDMuODM5LDAsMCwxLS4yLTMuMTgsNC43MjcsNC43MjcsMCwwLDEsMy41Ny0yLjgybDEuMDUtLjI4LTEuNDUtMy43MmE2LjE1OCw2LjE1OCwwLDAsMC0xLjU3LDIuNDRsLTMuMTItMS4xM2E4Ljg0NSw4Ljg0NSwwLDAsMSwzLjM4LTQuNjdsLTEuNDMtMy42OSw0LjE0LDEuNS40NCwxLjEyYTguMTE3LDguMTE3LDAsMCwxLDIuMTgtLjEzLDguOTczLDguOTczLDAsMCwxLDIuMjcuNTIsNS45LDUuOSwwLDAsMSwzLjM2LDIuNjMsNC40NDIsNC40NDIsMCwwLDEsLjI1LDMuODEsMy45MTgsMy45MTgsMCwwLDEtMS4zLDEuODEsOS4zMzMsOS4zMzMsMCwwLDEtMi45NywxLjMxWm0tMy4xLDIuODlhMy41NTksMy41NTksMCwwLDAtLjE2LTIuMThsLS45MS4yYTIuNTU3LDIuNTU3LDAsMCwwLS45OC40MiwxLjY5MiwxLjY5MiwwLDAsMC0uNTUuODEsMS4zNTgsMS4zNTgsMCwwLDAsLjAzLDEuMDEsMS4yMDUsMS4yMDUsMCwwLDAsLjc0LjY5LDEuMzMzLDEuMzMzLDAsMCwwLDEuMTEtLjA0QTEuNjMxLDEuNjMxLDAsMCwwLDUwLjkzLDEzNC4yNFptMi41Mi05LjY3YTQuMjg3LDQuMjg3LDAsMCwwLTIuMDEtLjIybDEuNyw0LjMzLjEyLS4wM2EyLjkxNCwyLjkxNCwwLDAsMCwxLjI2LTEuNTEsMi4xMjUsMi4xMjUsMCwwLDAtLjAxLTEuNTVBMS43NTIsMS43NTIsMCwwLDAsNTMuNDUsMTI0LjU3WiIgZmlsbD0iI2Y1M2UyNiIvPgogIDxwYXRoIGlkPSJQYXRoXzEyIiBkYXRhLW5hbWU9IlBhdGggMTIiIGQ9Ik0zMi44OSwxMDguNjRsMi45OSwyLjhMMjQuMjMsMTIzLjlsLTIuOTktMi44WiIgZmlsbD0iI2Y1M2UyNiIvPgogIDxwYXRoIGlkPSJQYXRoXzEzIiBkYXRhLW5hbWU9IlBhdGggMTMiIGQ9Ik0yMC4wNSw5NS45OCwxNyw4OS41bDIuODYtMS4zNSw0LjgsMTAuMkw5LjIyLDEwNS42Miw3LjQ3LDEwMS45WiIgZmlsbD0iI2Y1M2UyNiIvPgogIDxwYXRoIGlkPSJQYXRoXzE0IiBkYXRhLW5hbWU9IlBhdGggMTQiIGQ9Ik04Ljc1LDcyLjQyYTEwLjAyNCwxMC4wMjQsMCwwLDEsNC41MS4yOCw2LjgyNyw2LjgyNywwLDAsMSwzLjMxLDIuMTcsNy4yNzUsNy4yNzUsMCwwLDEsMS41OSwzLjY5LDcuNDA2LDcuNDA2LDAsMCwxLS40MywzLjk3LDYuODgyLDYuODgyLDAsMCwxLTIuNDUsMy4wMiw5Ljc1Myw5Ljc1MywwLDAsMS00LjA5LDEuNmwtLjk1LjE0YTEwLjE2MywxMC4xNjMsMCwwLDEtNC41MS0uMjcsNi44Miw2LjgyLDAsMCwxLTMuMzEtMi4xOCw3LjM4OCw3LjM4OCwwLDAsMS0xLjYtMy43Miw3LjI4OSw3LjI4OSwwLDAsMSwuNDYtMy45OEE2Ljk3Myw2Ljk3MywwLDAsMSwzLjgsNzQuMWE5Ljg2MSw5Ljg2MSwwLDAsMSw0LjE4LTEuNThabS0uMTEsNC4yNGE3LjIsNy4yLDAsMCwwLTMuNywxLjQsMi43MjYsMi43MjYsMCwwLDAtLjk1LDIuNmMuMywyLjA0LDEuOTksMi45LDUuMDcsMi41NmwxLjI0LS4xN2E3LjMxNiw3LjMxNiwwLDAsMCwzLjY5LTEuMzgsMi43NiwyLjc2LDAsMCwwLC45OC0yLjY0LDIuNjg2LDIuNjg2LDAsMCwwLTEuNjYtMi4xOSw3LjA5Myw3LjA5MywwLDAsMC0zLjg5LS4yOVoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xNSIgZGF0YS1uYW1lPSJQYXRoIDE1IiBkPSJNMTMuNjMsNjAuMzMsMi4wMSw1NC43OGwuODEtNC41MiwxNS43Nyw4LjY4LS44LDQuNDNMMCw2NS45NGwuODEtNC40OVoiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xNiIgZGF0YS1uYW1lPSJQYXRoIDE2IiBkPSJNMTkuNDYsMzcuODRsLTMuMDEsNS43MywzLjYxLDEuOSwzLjU1LTYuNzcsMi44LDEuNDdMMjAuOTUsNTAuNTgsNS44NSw0Mi42NWw1LjQ3LTEwLjQzLDIuODEsMS40OC0zLjU2LDYuNzksMy4xOSwxLjY3LDMuMDEtNS43M1oiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xNyIgZGF0YS1uYW1lPSJQYXRoIDE3IiBkPSJNMzcuODUsMjguNDJsLTMuMTIsMi42NkwyMy42NiwxOC4xbDMuMTItMi42NloiIGZpbGw9IiNmNTNlMjYiLz4KICA8cGF0aCBpZD0iUGF0aF8xOCIgZGF0YS1uYW1lPSJQYXRoIDE4IiBkPSJNNDYuOTksNy4wOCw0Mi40Miw5LjM5bDYuMjcsMTIuMzktMy42NywxLjg2TDM4Ljc1LDExLjI1bC00LjQ5LDIuMjctMS40My0yLjgzTDQ1LjU2LDQuMjVaIiBmaWxsPSIjZjUzZTI2Ii8+Cjwvc3ZnPgo="},fhmS:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTE3IiBoZWlnaHQ9IjciIHZpZXdCb3g9IjAgMCAxMTcgNyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IHdpZHRoPSIxMTciIGhlaWdodD0iNyIgZmlsbD0ibm9uZSIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9IlJlcGVhdF9HcmlkXzIiIGRhdGEtbmFtZT0iUmVwZWF0IEdyaWQgMiIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9IlBvbHlnb25fMSIgZGF0YS1uYW1lPSJQb2x5Z29uIDEiIGQ9Ik00LDAsOCw3SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDcpIHJvdGF0ZSgxODApIiBmaWxsPSIjMWIxYjFjIi8+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMykiPgogICAgICA8cGF0aCBpZD0iUG9seWdvbl8xLTIiIGRhdGEtbmFtZT0iUG9seWdvbiAxIiBkPSJNNCwwLDgsN0gwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA3KSByb3RhdGUoMTgwKSIgZmlsbD0iIzFiMWIxYyIvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYpIj4KICAgICAgPHBhdGggaWQ9IlBvbHlnb25fMS0zIiBkYXRhLW5hbWU9IlBvbHlnb24gMSIgZD0iTTQsMCw4LDdIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDggNykgcm90YXRlKDE4MCkiIGZpbGw9IiMxYjFiMWMiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5KSI+CiAgICAgIDxwYXRoIGlkPSJQb2x5Z29uXzEtNCIgZGF0YS1uYW1lPSJQb2x5Z29uIDEiIGQ9Ik00LDAsOCw3SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDcpIHJvdGF0ZSgxODApIiBmaWxsPSIjMWIxYjFjIi8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MikiPgogICAgICA8cGF0aCBpZD0iUG9seWdvbl8xLTUiIGRhdGEtbmFtZT0iUG9seWdvbiAxIiBkPSJNNCwwLDgsN0gwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA3KSByb3RhdGUoMTgwKSIgZmlsbD0iIzFiMWIxYyIvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjUpIj4KICAgICAgPHBhdGggaWQ9IlBvbHlnb25fMS02IiBkYXRhLW5hbWU9IlBvbHlnb24gMSIgZD0iTTQsMCw4LDdIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDggNykgcm90YXRlKDE4MCkiIGZpbGw9IiMxYjFiMWMiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4KSI+CiAgICAgIDxwYXRoIGlkPSJQb2x5Z29uXzEtNyIgZGF0YS1uYW1lPSJQb2x5Z29uIDEiIGQ9Ik00LDAsOCw3SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDcpIHJvdGF0ZSgxODApIiBmaWxsPSIjMWIxYjFjIi8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MSkiPgogICAgICA8cGF0aCBpZD0iUG9seWdvbl8xLTgiIGRhdGEtbmFtZT0iUG9seWdvbiAxIiBkPSJNNCwwLDgsN0gwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA3KSByb3RhdGUoMTgwKSIgZmlsbD0iIzFiMWIxYyIvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA0KSI+CiAgICAgIDxwYXRoIGlkPSJQb2x5Z29uXzEtOSIgZGF0YS1uYW1lPSJQb2x5Z29uIDEiIGQ9Ik00LDAsOCw3SDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IDcpIHJvdGF0ZSgxODApIiBmaWxsPSIjMWIxYjFjIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"},jcIW:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"src":{"publicURL":"/CasperDeBock/static/LeBron-Casquette-dcbd8114e032b6068804dbf2eb317700.mp3"},"id":6,"title":"LeBron"}}},{"node":{"frontmatter":{"src":{"publicURL":"/CasperDeBock/static/Idontwannedie-Casquette-d312fd9e5bf462b14dcb5fe7d6b6e1de.mp3"},"id":5,"title":"I dont wanne die"}}},{"node":{"frontmatter":{"src":{"publicURL":"/CasperDeBock/static/InDustrie-Casquette-b18467e4652f56b80d80bc857fce16a2.mp3"},"id":3,"title":"InDustrie"}}},{"node":{"frontmatter":{"src":{"publicURL":"/CasperDeBock/static/Christmas-Casquette-717eb8a6853aedb4d65f9720e4a1df3b.mp3"},"id":2,"title":"Christmas"}}},{"node":{"frontmatter":{"src":{"publicURL":"/CasperDeBock/static/PIETER-Casquette-f592d9dbe51899e830c9527712b2764b.mp3"},"id":4,"title":"PIETER"}}},{"node":{"frontmatter":{"src":{"publicURL":"/CasperDeBock/static/WANNE-BE-WITH-YOU-Casquette-6f0873a9a797790a3a0347be232faa0b.mp3"},"id":1,"title":"Wanne be with you"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-874a9d719058fafa66b8.js.map