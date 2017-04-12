define(["module", "react", "Row", "Col", "Label", "Table", "../components/button/demo1", "../components/button/demo2", "../components/button/demo3", "../components/button/demo4", "../components/button/demo5"], function (module, React, Row, Col, Label, Table, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                    "Button 按钮"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "按钮用于开始一个即时操作。响应用户点击行为，触发相应的业务逻辑。"
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
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo5, null)
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
                    "Button"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "theme", desc: "主题default primary success warning danger", type: "string", default: "default" }, { param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "disabled", desc: "禁用", type: "boolean", default: "false" }, { param: "raised", desc: "升起效果", type: "string/bool", default: "false" }, { param: "flat", desc: "无边框效果", type: "string/bool", default: "false" }, { param: "href", desc: "链接地址", type: "string", default: "" }, { param: "icon", desc: "按钮的图标", type: "string", default: "" }, { param: "iconAlign", desc: "图标位置 left right", type: "string", default: "left" }, { param: "size", desc: "按钮尺寸 large small", type: "string", default: "" }, { param: "target", desc: "跳转的目标通a标签的target", type: "string", default: "" }, { param: "onClick", desc: "点击后触发", type: "function", default: "" }] }),
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
                            "disable()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "禁用"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "enable()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "激活"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setText(text)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置按钮的文字"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "text ",
                                String,
                                " 要设置的按钮文字"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getActive()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取激活状态"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Boolean",
                                " true 激活 其他为失活"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setActive(active)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置激活状态 在ButtonGroup中使用"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "active ",
                                "Boolean",
                                " true激活 false 失活"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
