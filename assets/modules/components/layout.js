define(["module", "react", "Label", "../components/layout/demo1"], function (module, React, Label, Demo1) {
    "use strict";

    var Page = React.createClass({
        displayName: "Page",
        render: function render() {
            return React.createElement(
                "div",
                { className: "main-container" },
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "Layout 布局"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "可协助进行页面级整体布局。采用flex布局 注意浏览器兼容性",
                    React.createElement("br", null),
                    React.createElement(
                        "ol",
                        { style: { paddingLeft: 15, listStyle: 'circle' } },
                        React.createElement(
                            "li",
                            null,
                            "Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身。"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Header：顶部布局，自带默认样式。"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Sider：侧边栏，自带默认样式及基本功能。"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Content：内容部分，自带默认样式。"
                        ),
                        React.createElement(
                            "li",
                            null,
                            "Footer：底部布局，自带默认样式。"
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "代码演示"
                ),
                React.createElement(
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo1, null)
                    )
                )
            );
        }
    });

    module.exports = Page;
});
