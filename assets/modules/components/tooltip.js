define(["module", "react", "Label", "Table", "../components/tooltip/demo1", "../components/tooltip/demo2", "../components/tooltip/demo3", "../components/tooltip/demo4"], function (module, React, Label, Table, Demo1, Demo2, Demo3, Demo4) {
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
                    "Tooltip 文字提示"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "简单的文字提示气泡框。",
                    React.createElement("br", null),
                    "鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。"
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "代码演示"
                ),
                React.createElement(
                    Label,
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
                    Label,
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
                ),
                React.createElement(
                    "h2",
                    { className: "page-h2" },
                    "API"
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Tooltip"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "title", desc: "提示信息", type: "string", default: "" }, { param: "theme", desc: "主题default、black、primary、error", type: "string", default: "black" }, { param: "delay", desc: "鼠标移走后延迟响应时间", type: "number", default: "0" }, { param: "trigger", desc: "触发类型 click or hover", type: "string", default: "hover" }, { param: "onVisibleChange", desc: "显隐改变时触发", type: "function", default: "" }, { param: "align", desc: "显示的位置为12个方向", type: "string", default: "top" }] }),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Methods"
                ),
                React.createElement(
                    "ul",
                    { className: "code-methods" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setTitle(title)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置标题"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "title ",
                                "String",
                                " 标题"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
