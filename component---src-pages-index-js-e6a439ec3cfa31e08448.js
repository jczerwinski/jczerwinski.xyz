(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return h});n(173),n(48);var a=n(7),r=n.n(a),o=(n(249),n(0)),i=n.n(o),l=(n(145),n(150)),c=n.n(l),s=n(149),m=n.n(s),u=n(154),d=n(155),p=n(163),f=(n(147),n(161)),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c()(this,"props.data.site.siteMetadata.title"),t=c()(this,"props.data.site.siteMetadata.description"),n=c()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(d.a,{location:this.props.location},i.a.createElement(m.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),i.a.createElement(u.a,null),i.a.createElement("section",{style:{textAlign:"center"}},i.a.createElement("section",{style:{textAlign:"center",marginBottom:"4rem"}},i.a.createElement("h1",{style:{marginBottom:"3rem"}},"Portfolio"),i.a.createElement("p",null,"Explore a selection of my publically available work.")),i.a.createElement("section",{className:"portfolio-items"},n.map(function(e){return i.a.createElement("div",{className:"portfolio-item",key:e.node.frontmatter.title},i.a.createElement("h3",null,i.a.createElement("a",{href:e.node.frontmatter.link},e.node.frontmatter.title)),i.a.createElement("div",null,e.node.frontmatter.date),i.a.createElement("div",null,e.node.frontmatter.tags.map(function(e){return i.a.createElement(p.a,{pill:!0,style:{marginRight:".3rem",backgroundColor:Object(f.a)(e)},key:e},e)})),i.a.createElement("div",{style:{marginBottom:"1.618rem"},dangerouslySetInnerHTML:{__html:e.node.html}}),e.node.frontmatter.img&&i.a.createElement("div",{className:"image"},i.a.createElement("a",{style:{zIndex:9999,display:"inline-block"},href:e.node.frontmatter.link},i.a.createElement("img",{style:{maxWidth:"100%"},src:e.node.frontmatter.img.publicURL}))))}))))},t}(i.a.Component);t.default=g;var h="3013419219"},161:function(e,t,n){"use strict";var a=n(162),r=n.n(a);t.a=function(e){switch(r()(e)%5){case 0:return"var(--blue)";case 1:return"var(--secondary)";case 2:return"var(--success)";case 3:return"var(--info)";case 4:return"var(--warning)";default:return"var(--primary)"}}},162:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},249:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-e6a439ec3cfa31e08448.js.map