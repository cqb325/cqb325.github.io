define(["module", "react", "Label", "Row", "Col", "Table", "../components/dialog/demo1", "../components/dialog/demo2", "../components/dialog/demo3"], function (module, React, Label, Row, Col, Table, Demo1, Demo2, Demo3) {
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
                    "Dialog 对话框"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "模态对话框",
                    React.createElement("br", null)
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
                    "Dialog"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "title", desc: "标题", type: "string", default: "" }, { param: "hasFooter", desc: "是否显示footer区域", type: "boolean", default: "false" }, { param: "okButtonText", desc: "确认按钮的文字", type: "string", default: "确 定" }, { param: "cancelButtonText", desc: "取消按钮的文字", type: "string", default: "取 消" }, { param: "footers", desc: "footer区域的按钮同Panel", type: "object", default: "" }, { param: "onConfirm", desc: "点击按钮时触发", type: "function", default: "" }, { param: "onClose", desc: "Dialog关闭时触发", type: "function", default: "" }, { param: "onOpen", desc: "Dialog显示时触发", type: "function", default: "" }, { param: "hasCloseBtn", desc: "Dialog是否使用右上角的关闭", type: "boolean", default: "true" }] }),
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
                            "open(orign)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "打开对话框"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "orign ",
                                "html Element",
                                " 可选  指定该值对话框从该元素的坐标慢慢打开"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "close()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "关闭对话框"
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
                    ),
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
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getPanel()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取dialog的panel"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Panel",
                                " Panel对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getContainer()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取dialog的容器"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "HTMLElement",
                                " Dialog容器"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "isOpen()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "是否打开状态"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Boolean",
                                " 打开状态"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
