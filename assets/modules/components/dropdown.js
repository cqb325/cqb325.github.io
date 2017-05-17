define(["module", "react", "Row", "Col", "Label", "Table", "../components/dropdown/demo1", "../components/dropdown/demo2", "../components/dropdown/demo3", "../components/dropdown/demo4"], function (module, React, Row, Col, Label, Table, Demo1, Demo2, Demo3, Demo4) {
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
                    "Dropdown 下拉"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "下拉内容。"
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
                        { grid: 0.5, className: "code-col" },
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo1, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo3, null)
                        )
                    ),
                    React.createElement(
                        Col,
                        { grid: 0.5, className: "code-col" },
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo2, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo4, null)
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
                    "Dropdown"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "action", desc: "触发类型click、hover", type: "string", default: "hover" }, { param: "onVisibleChange", desc: "显示变化事件", type: "function", default: "" }, { param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "overlay", desc: "下拉内容", type: "ReactElement", default: "" }, { param: "align", desc: "显示的位置", type: "string", default: "bottomLeft" }] }),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Methods"
                )
            );
        }
    });

    module.exports = Page;
});
