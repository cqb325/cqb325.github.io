webpackJsonp([46],{682:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(9),l=o.n(i),c=o(733),s=o(887),d=o(888),m=o(889),u=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-container"},l.a.createElement("h1",{className:"page-h1"},"Grid \u6805\u683c"),l.a.createElement("blockquote",{className:"page-tip"},"\u65e0\u6781\u6805\u683c\u3002"),l.a.createElement("h1",{className:"page-h1"},"\u4ee3\u7801\u6f14\u793a"),l.a.createElement(c.a,{grid:1,className:"code-col"},l.a.createElement(c.a,{className:"code-box"},l.a.createElement(s.a,null))),l.a.createElement(c.a,{grid:1,className:"code-col"},l.a.createElement(c.a,{className:"code-box"},l.a.createElement(d.a,null))),l.a.createElement(c.a,{grid:1,className:"code-col"},l.a.createElement(c.a,{className:"code-box"},l.a.createElement(m.a,null))))}}]),t}(i.PureComponent);t.default=f},728:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(9),l=(o.n(i),o(129)),c=o.n(l),s=o(388),d=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),m=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),d(t,[{key:"openCloseCode",value:function(){var e=c.a.findDOMNode(this.refs.collapse);s.a.dom(e).toggleClass("active");var t=c.a.findDOMNode(this.refs.boxSrc);s.a.dom(t).toggleClass("active")}}]),t}(i.PureComponent);t.a=m},729:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(9),l=o.n(i),c=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),s=window.Prism,d=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){s.highlightElement(this.refs.code,!1)}},{key:"render",value:function(){var e=this.props.children;return l.a.createElement("pre",{ref:"code",className:"language-jsx"},e)}}]),t}(i.PureComponent);t.a=d},731:function(e,t,o){"use strict";function r(e){if(document.createStyleSheet)for(var t=document.createStyleSheet(),o=e.replace(/\/\*[^\*]*\*\//g,"").replace(/@[^{]*\{/g,"").match(/[^\{\}]+\{[^\}]+\}/g),r=0;r<o.length;r++){var n=o[r].match(/(.*)\s*\{\s*(.*)\}/);if(n)try{t.addRule(n[1],n[2])}catch(e){}}else{var a=document.createElement("style");a.type="text/css",a.innerHTML=e,document.head.appendChild(a)}}function n(e,t,o){l[t]=!0,r("@media screen and (min-width: "+s[o]+"em) { ."+d+"-"+t+"{width: "+e+"%} }")}function a(e,t,o){c[t]=!0,r("@media screen and (min-width: "+s[o]+"em) { ."+m+"-"+t+"{margin-left: "+e+"%} }")}function i(e,t,o){if(!e||e<=0)return"";e=(100*e).toFixed(4),e=e.substr(0,e.length-1),o=o||u;var r=o+"-"+e.replace(".","-");return"grid"===t?(l[r]||n(e,r,o),d+"-"+r):(c[r]||a(e,r,o),m+"-"+r)}var l={},c={},s={sm:"35.5",md:"48",lg:"64",xl:"80"},d="cm-grid",m="cm-offset",u="md",f={};f.setOptions=function(e){e&&(e.gridPre&&(d=e.gridPre),e.offsetPre&&(m=e.offsetPre),e.responsive&&(u=e.responsive))},f.getGrid=function(e){if(!e)return"";"number"===typeof e&&(e={width:e});var t=e,o=t.width,r=t.offset,n=t.responsive,a=i(o,"grid",n),l=i(r,"offset",n);return d+" "+d+"-1 "+a+" "+l},function(){var e=[];e.push("."+d+"{display: inline-block;zoom: 1;letter-spacing: normal;\n        word-spacing: normal;text-rendering: auto;box-sizing: border-box;}"),e.push("."+d+"-1{width:100%}"),r(e.join(""))}(),t.a=f},733:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(9),l=o.n(i),c=o(87),s=o.n(c),d=o(731),m=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=function(e){function t(){var e,o,a,i;r(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return o=a=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.displayName="Label",i=o,n(a,i)}return a(t,e),m(t,[{key:"render",value:function(){var e=s()("cm-label",this.props.className,d.a.getGrid(this.props.grid)),t=this.props.component||"div";return l.a.createElement(t,{className:e,style:this.props.style},this.props.children)}}]),t}(i.PureComponent);u.displayName="Label",t.a=u},749:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(9),l=o.n(i),c=o(87),s=o.n(c),d=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),m=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),d(t,[{key:"renderCols",value:function(){var e=this;return l.a.Children.map(this.props.children,function(t){if("Col"===(t&&t.type&&t.type.displayName?t.type.displayName:"")){var o=Object.assign({gutter:e.props.gutter},t.props);return l.a.cloneElement(t,o)}return t})}},{key:"render",value:function(){var e=s()("cm-row",this.props.className),t=this.props.component||"div",o=this.props.style||{};return this.props.gutter&&(o.marginLeft=-this.props.gutter,o.marginRight=-this.props.gutter),l.a.createElement(t,{className:e,style:o},this.renderCols())}}]),t}(i.PureComponent);t.a=m},750:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(9),l=o.n(i),c=o(87),s=o.n(c),d=o(731),m=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),m(t,[{key:"render",value:function(){var e=s()("cm-col",this.props.className,d.a.getGrid(this.props.grid)),t=this.props.component||"div",o=this.props.style||{};return this.props.gutter&&(o.paddingLeft=this.props.gutter/2,o.paddingRight=this.props.gutter/2),l.a.createElement(t,{className:e,style:o},this.props.children)}}]),t}(i.PureComponent);u.displayName="Col",t.a=u},887:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(9),l=o.n(i),c=o(728),s=o(203),d=o(749),m=o(750),u=o(729),f=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"code-box-demo"},l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:1,className:"demo-col"},"grid(1)")),l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:.25,className:"demo-col"},"grid(1/4)"),l.a.createElement(m.a,{grid:.25,className:"demo-col lighter"},"grid(1/4)"),l.a.createElement(m.a,{grid:.25,className:"demo-col"},"grid(1/4)"),l.a.createElement(m.a,{grid:.25,className:"demo-col lighter"},"grid(1/4)")),l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:1/3,className:"demo-col"},"grid(1/3)"),l.a.createElement(m.a,{grid:1/3,className:"demo-col lighter"},"grid(1/3)"),l.a.createElement(m.a,{grid:1/3,className:"demo-col"},"grid(1/3)")),l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:.5,className:"demo-col"},"grid(1/2)"),l.a.createElement(m.a,{grid:.5,className:"demo-col lighter"},"grid(1/2)")),l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:5/6,className:"demo-col"},"grid(5/6)"),l.a.createElement(m.a,{grid:1/6,className:"demo-col lighter"},"grid(1/6)"))),l.a.createElement("div",{className:"code-box-desc"},l.a.createElement("div",{className:"code-box-title"},"\u57fa\u672c\u7528\u6cd5"),l.a.createElement("div",null,"\u5e03\u5c40\u7684\u6805\u683c\u5316\u7cfb\u7edf\uff0c\u6211\u4eec\u662f\u57fa\u4e8e\u884c\uff08row\uff09\u548c\u5217\uff08col\uff09\u6765\u5b9a\u4e49\u4fe1\u606f\u533a\u5757\u7684\u5916\u90e8\u6846\u67b6\uff0c\u4ee5\u4fdd\u8bc1\u9875\u9762\u7684\u6bcf\u4e2a\u533a\u57df\u80fd\u591f\u7a33\u5065\u5730\u6392\u5e03\u8d77\u6765",l.a.createElement(s.a,{icon:"chevron-circle-down",ref:"collapse",className:"collapse",onClick:this.openCloseCode.bind(this)}))),l.a.createElement("div",{className:"code-box-src",ref:"boxSrc"},l.a.createElement(u.a,null,'\nimport Row from \'r-cmui/components/Row\';\nimport Col from \'r-cmui/components/Col\';\n\nReactDOM.render(\n<div>\n    <Row className="demo-row">\n        <Col grid={1} className="demo-col">grid(1)</Col>\n    </Row>\n    <Row className="demo-row">\n        <Col grid={1/4} className="demo-col">grid(1/4)</Col>\n        <Col grid={1/4} className="demo-col lighter">grid(1/4)</Col>\n        <Col grid={1/4} className="demo-col">grid(1/4)</Col>\n        <Col grid={1/4} className="demo-col lighter">grid(1/4)</Col>\n    </Row>\n    <Row className="demo-row">\n        <Col grid={1/3} className="demo-col">grid(1/3)</Col>\n        <Col grid={1/3} className="demo-col lighter">grid(1/3)</Col>\n        <Col grid={1/3} className="demo-col">grid(1/3)</Col>\n    </Row>\n    <Row className="demo-row">\n        <Col grid={1/2} className="demo-col">grid(1/2)</Col>\n        <Col grid={1/2} className="demo-col lighter">grid(1/2)</Col>\n    </Row>\n    <Row className="demo-row">\n        <Col grid={5/6} className="demo-col">grid(5/6)</Col>\n        <Col grid={1/6} className="demo-col lighter">grid(1/6)</Col>\n    </Row>\n</div>, mountNode);\n')))}}]),t}(c.a);t.a=p},888:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(9),l=o.n(i),c=o(728),s=o(203),d=o(749),m=o(750),u=o(729),f=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"code-box-demo"},l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:.25,className:"demo-col"},"grid(1/4)"),l.a.createElement(m.a,{grid:{width:.25,offset:.5},className:"demo-col"},"grid{{width: 1/4, offset: 1/2}}")),l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:{width:1/3,offset:.5},className:"demo-col"},"grid{{width: 1/3, offset: 1/2}}")),l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:{width:.5,offset:1/6},className:"demo-col"},"grid{{width: 1/2, offset: 1/6}}"))),l.a.createElement("div",{className:"code-box-desc"},l.a.createElement("div",{className:"code-box-title"},"\u5de6\u53f3\u504f\u79fb"),l.a.createElement("div",null,"\u4f7f\u7528 grid \u7684 offset \u53ef\u4ee5\u5c06\u5217\u5411\u53f3\u4fa7\u504f\u3002\u4f8b\u5982\uff0coffset=",.5," \u5c06\u5143\u7d20\u5411\u53f3\u4fa7\u504f\u79fb\u4e86 50% \u7684\u5bbd\u5ea6\u3002",l.a.createElement(s.a,{icon:"chevron-circle-down",ref:"collapse",className:"collapse",onClick:this.openCloseCode.bind(this)}))),l.a.createElement("div",{className:"code-box-src",ref:"boxSrc"},l.a.createElement(u.a,null,'\nimport Row from \'r-cmui/components/Row\';\nimport Col from \'r-cmui/components/Col\';\n\nReactDOM.render(\n<div>\n    <Row className="demo-row">\n        <Col grid={1/4} className="demo-col">grid(1/4)</Col>\n        <Col grid={{width: 1/4, offset: 1/2}} className="demo-col">{\'grid{{width: 1/4, offset: 1/2}}\'}</Col>\n    </Row>\n    <Row className="demo-row">\n        <Col grid={{width: 1/3, offset: 1/2}} className="demo-col">{\'grid{{width: 1/3, offset: 1/2}}\'}</Col>\n    </Row>\n    <Row className="demo-row">\n        <Col grid={{width: 1/2, offset: 1/6}} className="demo-col">{\'grid{{width: 1/2, offset: 1/6}}\'}</Col>\n    </Row>\n</div>, mountNode);\n')))}}]),t}(c.a);t.a=p},889:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o(9),l=o.n(i),c=o(728),s=o(203),d=o(749),m=o(750),u=o(729),f=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"code-box-demo"},l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:{width:.25,responsive:"sm"},className:"demo-col"},"grid(1/4)"),l.a.createElement(m.a,{grid:{width:.25,responsive:"sm"},className:"demo-col lighter"},"grid(1/4)"),l.a.createElement(m.a,{grid:{width:.25,responsive:"sm"},className:"demo-col"},"grid(1/4)"),l.a.createElement(m.a,{grid:{width:.25,responsive:"sm"},className:"demo-col lighter"},"grid(1/4)")),l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:{width:.25,responsive:"lg"},className:"demo-col"},"grid(1/4)"),l.a.createElement(m.a,{grid:{width:.25,responsive:"lg"},className:"demo-col lighter"},"grid(1/4)"),l.a.createElement(m.a,{grid:{width:.25,responsive:"lg"},className:"demo-col"},"grid(1/4)"),l.a.createElement(m.a,{grid:{width:.25,responsive:"lg"},className:"demo-col lighter"},"grid(1/4)")),l.a.createElement(d.a,{className:"demo-row"},l.a.createElement(m.a,{grid:{width:.25,responsive:"xl"},className:"demo-col"},"grid(1/4)"),l.a.createElement(m.a,{grid:{width:.25,responsive:"xl"},className:"demo-col lighter"},"grid(1/4)"),l.a.createElement(m.a,{grid:{width:.25,responsive:"xl"},className:"demo-col"},"grid(1/4)"),l.a.createElement(m.a,{grid:{width:.25,responsive:"xl"},className:"demo-col lighter"},"grid(1/4)"))),l.a.createElement("div",{className:"code-box-desc"},l.a.createElement("div",{className:"code-box-title"},"\u54cd\u5e94\u5f0f\u5e03\u5c40"),l.a.createElement("div",null,"\u6805\u683c\u5e03\u5c40 \u4e3a\u54cd\u5e94\u5f0f\u5e03\u5c40\u9884\u8bbe\u4e86\u56db\u4e2a\u5c3a\u5bf8\uff0csm/md/lg/xl\u3002",l.a.createElement(s.a,{icon:"chevron-circle-down",ref:"collapse",className:"collapse",onClick:this.openCloseCode.bind(this)}))),l.a.createElement("div",{className:"code-box-src",ref:"boxSrc"},l.a.createElement(u.a,null,'\nimport Row from \'r-cmui/components/Row\';\nimport Col from \'r-cmui/components/Col\';\n\nReactDOM.render(\n<div>\n    <Row className="demo-row">\n        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col lighter">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: "sm"}} className="demo-col lighter">grid(1/4)</Col>\n    </Row>\n\n    <Row className="demo-row">\n        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col lighter">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: "lg"}} className="demo-col lighter">grid(1/4)</Col>\n    </Row>\n\n    <Row className="demo-row">\n        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col lighter">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col">grid(1/4)</Col>\n        <Col grid={{width: 1/4, responsive: "xl"}} className="demo-col lighter">grid(1/4)</Col>\n    </Row>\n</div>, mountNode);\n')))}}]),t}(c.a);t.a=p}});
//# sourceMappingURL=46.fc31355f.chunk.js.map