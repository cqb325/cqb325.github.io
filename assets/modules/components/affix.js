define(["module", "react", "Label", "Row", "Col", "Table", "../components/affix/demo1", "../components/affix/demo2"], function (module, React, Label, Row, Col, Table, Demo1, Demo2) {
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
                    "Affix 固钉"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "固钉。"
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "代码演示"
                ),
                React.createElement(
                    Row,
                    null,
                    React.createElement(
                        Col,
                        { grid: 0.5 },
                        React.createElement(
                            Label,
                            { className: "code-col" },
                            React.createElement(
                                Label,
                                { className: "code-box" },
                                React.createElement(Demo1, null)
                            )
                        )
                    ),
                    React.createElement(
                        Col,
                        { grid: 0.5 },
                        React.createElement(
                            Label,
                            { className: "code-col" },
                            React.createElement(
                                Label,
                                { className: "code-box" },
                                React.createElement(Demo2, null)
                            )
                        )
                    )
                ),
                React.createElement(
                    "h2",
                    { className: "page-h2" },
                    "API"
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Button"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "target", desc: "容器选择器", type: "string", default: "" }] })
            );
        }
    });

    module.exports = Page;
});
