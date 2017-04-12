define(["module", "react", "Label", "Table", "../components/panel/demo1", "../components/panel/demo2"], function (module, React, Label, Table, Demo1, Demo2) {
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
                    "Panel 面板"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "通用内容容器。",
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
                    "Panel"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "title", desc: "标题", type: "string", default: "" }, { param: "content", desc: "内容", type: "string", default: "" }, { param: "tools", desc: "按钮", type: "object {align: '', components: []}", default: "" }, { param: "footers", desc: "footer区域的按钮同tools", type: "object", default: "" }, { param: "grid", desc: "Panel的宽度 grid={1/4}", type: "number/object", default: "" }] }),
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
                            "设置Panel的标题"
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
                            "设置Panel的内容"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "content ",
                                "String",
                                " 内容"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setTitleAndContent(title, content)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置Panel的标题和内容"
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
                            ),
                            React.createElement(
                                "li",
                                null,
                                "content ",
                                "String",
                                " 内容"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
