webpackJsonp([45],{674:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(11),i=n.n(l),c=n(722),u=n(886),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"main-container"},i.a.createElement("h1",{className:"page-h1"},"Layout \u5e03\u5c40"),i.a.createElement("blockquote",{className:"page-tip"},"\u53ef\u534f\u52a9\u8fdb\u884c\u9875\u9762\u7ea7\u6574\u4f53\u5e03\u5c40\u3002\u91c7\u7528flex\u5e03\u5c40 \u6ce8\u610f\u6d4f\u89c8\u5668\u517c\u5bb9\u6027",i.a.createElement("br",null),i.a.createElement("ol",{style:{paddingLeft:15,listStyle:"circle"}},i.a.createElement("li",null,"Layout\uff1a\u5e03\u5c40\u5bb9\u5668\uff0c\u5176\u4e0b\u53ef\u5d4c\u5957 Header Sider Content Footer \u6216 Layout \u672c\u8eab\u3002"),i.a.createElement("li",null,"Header\uff1a\u9876\u90e8\u5e03\u5c40\uff0c\u81ea\u5e26\u9ed8\u8ba4\u6837\u5f0f\u3002"),i.a.createElement("li",null,"Sider\uff1a\u4fa7\u8fb9\u680f\uff0c\u81ea\u5e26\u9ed8\u8ba4\u6837\u5f0f\u53ca\u57fa\u672c\u529f\u80fd\u3002"),i.a.createElement("li",null,"Content\uff1a\u5185\u5bb9\u90e8\u5206\uff0c\u81ea\u5e26\u9ed8\u8ba4\u6837\u5f0f\u3002"),i.a.createElement("li",null,"Footer\uff1a\u5e95\u90e8\u5e03\u5c40\uff0c\u81ea\u5e26\u9ed8\u8ba4\u6837\u5f0f\u3002"))),i.a.createElement("h1",{className:"page-h1"},"\u4ee3\u7801\u6f14\u793a"),i.a.createElement(c.a,{className:"code-col"},i.a.createElement(c.a,{className:"code-box"},i.a.createElement(u.a,null))))}}]),t}(l.PureComponent);t.default=f},717:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(11),i=(n.n(l),n(129)),c=n.n(i),u=n(388),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"openCloseCode",value:function(){var e=c.a.findDOMNode(this.refs.collapse);u.a.dom(e).toggleClass("active");var t=c.a.findDOMNode(this.refs.boxSrc);u.a.dom(t).toggleClass("active")}}]),t}(l.PureComponent);t.a=f},718:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(11),i=n.n(l),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=window.Prism,s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){u.highlightElement(this.refs.code,!1)}},{key:"render",value:function(){var e=this.props.children;return i.a.createElement("pre",{ref:"code",className:"language-jsx"},e)}}]),t}(l.PureComponent);t.a=s},720:function(e,t,n){"use strict";function r(e){if(document.createStyleSheet)for(var t=document.createStyleSheet(),n=e.replace(/\/\*[^\*]*\*\//g,"").replace(/@[^{]*\{/g,"").match(/[^\{\}]+\{[^\}]+\}/g),r=0;r<n.length;r++){var o=n[r].match(/(.*)\s*\{\s*(.*)\}/);if(o)try{t.addRule(o[1],o[2])}catch(e){}}else{var a=document.createElement("style");a.type="text/css",a.innerHTML=e,document.head.appendChild(a)}}function o(e,t,n){i[t]=!0,r("@media screen and (min-width: "+u[n]+"em) { ."+s+"-"+t+"{width: "+e+"%} }")}function a(e,t,n){c[t]=!0,r("@media screen and (min-width: "+u[n]+"em) { ."+f+"-"+t+"{margin-left: "+e+"%} }")}function l(e,t,n){if(!e||e<=0)return"";e=(100*e).toFixed(4),e=e.substr(0,e.length-1),n=n||p;var r=n+"-"+e.replace(".","-");return"grid"===t?(i[r]||o(e,r,n),s+"-"+r):(c[r]||a(e,r,n),f+"-"+r)}var i={},c={},u={sm:"35.5",md:"48",lg:"64",xl:"80"},s="cm-grid",f="cm-offset",p="md",m={};m.setOptions=function(e){e&&(e.gridPre&&(s=e.gridPre),e.offsetPre&&(f=e.offsetPre),e.responsive&&(p=e.responsive))},m.getGrid=function(e){if(!e)return"";"number"===typeof e&&(e={width:e});var t=e,n=t.width,r=t.offset,o=t.responsive,a=l(n,"grid",o),i=l(r,"offset",o);return s+" "+s+"-1 "+a+" "+i},function(){var e=[];e.push("."+s+"{display: inline-block;zoom: 1;letter-spacing: normal;\n        word-spacing: normal;text-rendering: auto;box-sizing: border-box;}"),e.push("."+s+"-1{width:100%}"),r(e.join(""))}(),t.a=m},722:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(11),i=n.n(l),c=n(120),u=n.n(c),s=n(720),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){var e,n,a,l;r(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.displayName="Label",l=n,o(a,l)}return a(t,e),f(t,[{key:"render",value:function(){var e=u()("cm-label",this.props.className,s.a.getGrid(this.props.grid)),t=this.props.component||"div";return i.a.createElement(t,{className:e,style:this.props.style},this.props.children)}}]),t}(l.PureComponent);p.displayName="Label",t.a=p},886:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(11),i=n.n(l),c=n(717),u=n(349),s=n(398),f=n(399),p=n(718),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=s.a.Header,y=s.a.Content,h=s.a.Footer,b=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"code-box-demo"},i.a.createElement(s.a,{className:"demo-layout"},i.a.createElement(d,null,"Header"),i.a.createElement(y,null,"Content"),i.a.createElement(h,null,"Footer")),i.a.createElement(s.a,{className:"demo-layout mt-30"},i.a.createElement(d,null,"Header"),i.a.createElement(s.a,null,i.a.createElement(f.a,null,"Sider"),i.a.createElement(y,null,"Content")),i.a.createElement(h,null,"Footer")),i.a.createElement(s.a,{className:"demo-layout mt-30"},i.a.createElement(d,null,"Header"),i.a.createElement(s.a,null,i.a.createElement(y,null,"Content"),i.a.createElement(f.a,null,"Sider")),i.a.createElement(h,null,"Footer")),i.a.createElement(s.a,{className:"demo-layout mt-30"},i.a.createElement(f.a,null,"Sider"),i.a.createElement(s.a,null,i.a.createElement(d,null,"Header"),i.a.createElement(y,null,"Content"),i.a.createElement(h,null,"Footer")))),i.a.createElement("div",{className:"code-box-desc"},i.a.createElement("div",{className:"code-box-title"},"\u57fa\u672c\u7528\u6cd5"),i.a.createElement("div",null,"\u57fa\u672c\u5e03\u5c40",i.a.createElement(u.a,{icon:"chevron-circle-down",ref:"collapse",className:"collapse",onClick:this.openCloseCode.bind(this)}))),i.a.createElement("div",{className:"code-box-src",ref:"boxSrc"},i.a.createElement(p.a,null,'\nimport Layout from \'r-cmui/components/Layout\';\nimport Sider from \'r-cmui/components/Layout/Sider\';\nconst {Header, Content, Footer} = Layout;\n\n\nReactDOM.render(\n<div>\n    <Layout className="demo-layout">\n        <Header>Header</Header>\n        <Content>Content</Content>\n        <Footer>Footer</Footer>\n    </Layout>\n\n    <Layout className="demo-layout mt-30">\n        <Header>Header</Header>\n        <Layout>\n            <Sider>Sider</Sider>\n            <Content>Content</Content>\n        </Layout>\n        <Footer>Footer</Footer>\n    </Layout>\n\n    <Layout className="demo-layout mt-30">\n        <Header>Header</Header>\n        <Layout>\n            <Content>Content</Content>\n            <Sider>Sider</Sider>\n        </Layout>\n        <Footer>Footer</Footer>\n    </Layout>\n\n    <Layout className="demo-layout mt-30">\n        <Sider>Sider</Sider>\n        <Layout>\n            <Header>Header</Header>\n            <Content>Content</Content>\n            <Footer>Footer</Footer>\n        </Layout>\n    </Layout>\n</div>, mountNode);\n')))}}]),t}(c.a);t.a=b}});
//# sourceMappingURL=45.16f8cc34.chunk.js.map