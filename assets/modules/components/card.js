define(["module", "react", "Label", "Table", "../components/card/demo1", "../components/card/demo2", "../components/card/demo3", "../components/card/demo4", "../components/card/demo5", "../components/card/demo6"], function (module, React, Label, Table, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6) {
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
                    "Card 卡片"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "通用卡片容器。",
                    React.createElement("br", null),
                    "最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。"
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
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo3, null)
                    )
                ),
                React.createElement(
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo4, null)
                    )
                ),
                React.createElement(
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo5, null)
                    )
                ),
                React.createElement(
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo6, null)
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
                    "Card"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "title", desc: "标题", type: "string", default: "" }, { param: "tools", desc: "按钮", type: "string/ReactElement", default: "" }, { param: "border", desc: "是否存在边框", type: "boolean", default: "true" }, { param: "loadding", desc: "内容占位等待加载", type: "boolean", default: "false" }, { param: "bodyStyle", desc: "内容区域的样式", type: "object", default: "" }] }),
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
                            "设置Card的标题"
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
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setContent(content)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置Card的内容"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "content ",
                                "String/ReactElement",
                                " 内容文字或React对象"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
