define(["module", "react", "Row", "Col", "Label", "Table", "../components/datetime/demo1", "../components/datetime/demo2", "../components/datetime/demo3", "../components/datetime/demo4", "../components/datetime/demo5", "../components/datetime/demo6", "../components/datetime/demo7"], function (module, React, Row, Col, Label, Table, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7) {
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
                    "DateTime 时间选择器"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "选择日期和时间的控件。"
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
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo7, null)
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
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo6, null)
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
                    "DateTime"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "disabled", desc: "禁用", type: "boolean", default: "false" }, { param: "readOnly", desc: "只读", type: "boolean", default: "false" }, { param: "value", desc: "默认时间", type: "string/moment", default: "" }, { param: "view", desc: "显示状态 datetime,date,time", type: "string", default: "" }, { param: "format", desc: "格式化 moment的格式化规则", type: "string", default: "" }, { param: "startDate", desc: "限定开始时间", type: "string", default: "" }, { param: "endDate", desc: "限定结束时间", type: "string", default: "" }, { param: "onSelectDate", desc: "选中日期时触发", type: "function", default: "" }, { param: "onChange", desc: "选中日期时触发", type: "function", default: "" }, { param: "placeholder", desc: "未选择时的placeholder", type: "string", default: "" }, { param: "theme", desc: "主题 dark ", type: "string", default: "" }] }),
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
                            "获取当前选中的日期"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "String",
                                " 选中的日期"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setValue(value)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置默认显示日期"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "value ",
                                "String",
                                " 日期 格式与当前的view或format一致"
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
                            "隐藏操作"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "show()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "显示日期面板"
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
