define(["module", "react", "Row", "Col", "Label", "Table", "../components/accordion/demo1", "../components/accordion/demo2", "../components/accordion/demo3"], function (module, React, Row, Col, Label, Table, Demo1, Demo2, Demo3) {
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
                    "Accordion 折叠面板"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "可以折叠/展开的内容区域。"
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
                        { grid: 1, className: "code-col" },
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo1, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo2, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo3, null)
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
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "theme", desc: "主题default primary success warning danger", type: "string", default: "default" }, { param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "onOpen", desc: "面板项展开回调", type: "function", default: "" }, { param: "onCollapse", desc: "面板项折叠回调", type: "function", default: "" }, { param: "onOpened", desc: "面板项展开后回调", type: "function", default: "" }, { param: "onCollapsed", desc: "面板项折叠后回调", type: "function", default: "" }, { param: "bordered", desc: "是否添加边框", type: "boolean", default: "false" }] }),
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
                            "activeByIndex(index)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据index索引展开"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "index ",
                                Number,
                                " 面板项的索引"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "activeItem(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据item对象或item的key值打开面板"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                String / Object,
                                " item对象或item的key值"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getItem(key)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取Item对象"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "key ",
                                String,
                                " item的key值"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                Object,
                                " item对象"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
