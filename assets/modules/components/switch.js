define(["module", "react", "Label", "Table", "../components/switch/demo1", "../components/switch/demo2", "../components/switch/demo3", "../components/switch/demo4", "../components/switch/demo5"], function (module, React, Label, Table, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                    "Switch 开关"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "开关选择器。",
                    React.createElement("br", null),
                    "需要表示开关状态/两种状态之间的切换时使用。"
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
                    ),
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo5, null)
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
                    "Switch"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "checked", desc: "是否选中", type: "boolean", default: "false" }, { param: "disabled", desc: "是否禁用", type: "boolean", default: "false" }, { param: "onChange", desc: "选中状态变化时触发", type: "function", default: "" }, { param: "size", desc: "switch的尺寸 small", type: "string", default: "" }, { param: "checkedText", desc: "选中时的提示字符串", type: "string", default: "" }, { param: "unCheckedText", desc: "未选中时的提示字符串", type: "string", default: "" }, { param: "name", desc: "作为form表单元素的name", type: "string", default: "" }] }),
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
                            "toggleSwitch()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "改变Switch的状态"
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
