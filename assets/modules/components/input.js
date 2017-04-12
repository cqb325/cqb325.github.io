define(["module", "react", "Label", "Table", "../components/input/demo1"], function (module, React, Label, Table, Demo1) {
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
                    "Input 输入框"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "输入框。"
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
                ),
                React.createElement(
                    "h2",
                    { className: "page-h2" },
                    "API"
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Input"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "value", desc: "默认值", type: "string", default: "" }, { param: "type", desc: "input的类型 外加integer和number", type: "string", default: "text" }, { param: "trigger", desc: "change触发的事件", type: "string", default: "blur" }, { param: "onChange", desc: "值变化触发 时机同trigger", type: "function", default: "" }, { param: "grid", desc: "定义Input的长度如：grid={1/4}", type: "number/object", default: "" }] }),
                React.createElement(
                    "div",
                    { className: "mt-5" },
                    "其他属性同html的input标签"
                ),
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
                            "getValue()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "当前的值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "String",
                                " Input的值"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
