(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(149),s=a(153),o=a(166),l=a(167),d=a.n(l),c=function(){return i.a.createElement(n.b,{query:"2426393806",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})},u=a(155);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"Hello"),i.a.createElement("p",null,"In Progress"),i.a.createElement("p",null,"This site under construction"),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(c,null)))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(150);var d=i.a.createContext({}),c=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(e,t,a){var r;e.exports=(r=a(152))&&r.default||r},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Vince Magno"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},153:function(e,t,a){"use strict";var r=a(151),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(149),d=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"#333",marginBottom:"0"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var c=d,u=function(){return n.a.createElement("div",{style:{background:"coral",paddingTop:"10px"}},n.a.createElement("ul",{style:{listStyle:"none",display:"flex",justifyContent:"space-evenly"}},n.a.createElement("li",null,n.a.createElement(l.a,{to:"/",class:"menu"},"Home")),n.a.createElement("li",null,n.a.createElement(l.a,{to:"/about",class:"menu"},"About")),n.a.createElement("li",null,n.a.createElement(l.a,{to:"/clients",class:"menu"},"Clients")),n.a.createElement("li",null,n.a.createElement(l.a,{to:"/contact",class:"menu"},"Contact"))))},f=(a(154),function(e){var t=e.children;return n.a.createElement(l.b,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement(u,null),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear()," Vince Magno")))},data:r})});f.propTypes={children:o.a.node.isRequired};t.a=f},155:function(e,t,a){"use strict";var r=a(156),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(157),d=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Vince Magno",description:"Software Developer.",author:"@magnowv"}}}}},166:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAB70lEQVQoz0WRXUhTYRjHdxENisKL0uM87zln57BpTmsQhTdRd91UVHSTrZC0gqVzH5lOtoGJztNyOJPlWoSghsOKQkLsQ6zugorog8rCboKg2+485/33vCPthYc/z9fveR5eh4Oe37speOF4pZ04W81jAYlHmqt4+GQVYqckRMmERppJAxK6TksQOVIeprqelmq0HN72R3M5jzj+vQ03utXvPx/tQjGhWy+LO/Cx1IDPsw14M1mPd9M+vCb9RLFXE/V4XqjDl7uNWBqvw4cZn9DVlYc7MRisebIGdN43jW+/5v1ItjE7Fqjhvxf8/OmYF8ETlSj2qji6vwLnj21HJiTj0L4K3KTYwaatfDFfyw3Zad1OarhnGo/XgVN97mV8bUK+x22X0h6O93vx40Ejkq0uvKCNZtMGJlJuLIx6MdQu05a1MDtkcQHPX1att3TBrYT2H5iLKsvTV3SMdak2bcFTbS5cv6SgEFdR6NXQfUbCzICOkaiCuWGPaKbNNfIZv9bJrCnqHQ6zdeDGTIitlAYNjMdVWzSJ6aMEFEPmsp6yPxJTkI0wAhuYz3kx2acjRzGzXV69068LfbYGdBzYvaU/dc6FqyFmmR00NcwwRJD0RRkDQRmZTlY+lfJlX1iafKrh2Yhix+mn9/g2twrWX4ZcDOQtwsH/AAAAAElFTkSuQmCC",aspectRatio:2.807017543859649,src:"/static/e2c4d5951f4ecd1d234be0110f04dba9/4465b/undercon.png",srcSet:"/static/e2c4d5951f4ecd1d234be0110f04dba9/48d69/undercon.png 75w,\n/static/e2c4d5951f4ecd1d234be0110f04dba9/500db/undercon.png 150w,\n/static/e2c4d5951f4ecd1d234be0110f04dba9/4465b/undercon.png 300w,\n/static/e2c4d5951f4ecd1d234be0110f04dba9/1b440/undercon.png 450w,\n/static/e2c4d5951f4ecd1d234be0110f04dba9/8d7dc/undercon.png 600w,\n/static/e2c4d5951f4ecd1d234be0110f04dba9/b78fc/undercon.png 900w,\n/static/e2c4d5951f4ecd1d234be0110f04dba9/888a5/undercon.png 1280w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},167:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(75)),l=r(a(76)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+r+"<img "+o+l+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,w=e.Tag,v=e.itemProp,E="boolean"==typeof y?"lightgray":y,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),R=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(m){var A=m;return d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),E&&d.default.createElement(w,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),A.base64&&d.default.createElement(b,(0,l.default)({src:A.base64},L)),A.tracedSVG&&d.default.createElement(b,(0,l.default)({src:A.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,A.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},A))}}))}if(h){var T=h,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete I.display,d.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},E&&d.default.createElement(w,{title:t,style:{backgroundColor:E,width:T.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:T.height}}),T.base64&&d.default.createElement(b,(0,l.default)({src:T.base64},L)),T.tracedSVG&&d.default.createElement(b,(0,l.default)({src:T.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,T.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),d.default.createElement(b,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:T.width,height:T.height},T))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var E=y;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-35f4d42340e1ee926f26.js.map