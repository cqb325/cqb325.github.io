define(["module", "react", "Label", "Table", "../components/messagebox/demo1", "../components/messagebox/demo2"], function (module, React, Label, Table, Demo1, Demo2) {
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
                    "MessageBox 消息框"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "消息框。",
                    React.createElement("br", null)
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
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo2, null)
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
                    "MessageBox"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "title", desc: "标题", type: "string", default: "" }, { param: "msg", desc: "提示的内容", type: "string", default: "" }, { param: "type", desc: "消息框的类型info、confirm", type: "string", default: "info" }, { param: "confirmText", desc: "确认按钮的文字", type: "string", default: "确 定" }, { param: "cancelText", desc: "取消按钮的文字", type: "string", default: "取 消" }, { param: "confirmTheme", desc: "确认按钮的主题", type: "string", default: "primary" }, { param: "cancelTheme", desc: "取消按钮的主题", type: "string", default: "default" }, { param: "confirmIcon", desc: "确认按钮的图标", type: "string", default: "check" }, { param: "cancelIcon", desc: "取消按钮的图标", type: "string", default: "close" }, { param: "footers", desc: "footer区域的按钮同Panel", type: "object", default: "" }, { param: "confirm", desc: "点击按钮时触发", type: "function", default: "" }, { param: "onHide", desc: "消息框隐藏时触发", type: "function", default: "" }, { param: "onShow", desc: "消息框显示时触发", type: "function", default: "" }] }),
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
                            "show(msg, title)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "显示消息框并设置内容或标题"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "msg ",
                                "String",
                                " 内容"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "title ",
                                "String",
                                " 标题"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "hide()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "关闭消息框"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setData(data)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置消息框的附带数据"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "data ",
                                "any",
                                " 附带数据"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getData()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取消息框的附带数据"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "any",
                                " 消息框的附带数据"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
