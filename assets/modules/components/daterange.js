define(["module", "react", "Row", "Col", "Label", "Table", "../components/daterange/demo1", "../components/daterange/demo2", "../components/daterange/demo3", "../components/daterange/demo4", "../components/daterange/demo5", "../components/daterange/demo6", "../components/daterange/demo7"], function (module, React, Row, Col, Label, Table, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7) {
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
                    "DateRange 时间段选择器"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "选择一段时间的控件。"
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
                    "DateRange"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "disabled", desc: "禁用", type: "boolean", default: "false" }, { param: "readOnly", desc: "只读", type: "boolean", default: "false" }, { param: "value", desc: "默认时间段", type: "string/moment", default: "" }, { param: "sep", desc: "分割符", type: "string", default: "" }, { param: "maxRange", desc: "最多能选择的天数", type: "number", default: "" }, { param: "startDate", desc: "限定开始时间", type: "string", default: "" }, { param: "endDate", desc: "限定结束时间", type: "string", default: "" }, { param: "onSelectStart", desc: "第一个日期选中时触发", type: "function", default: "" }, { param: "onSelectEnd", desc: "第二个日期选中时触发", type: "function", default: "" }, { param: "onSelect", desc: "选中时间段完成时触发", type: "function", default: "" }, { param: "onChange", desc: "选中时间段完成时触发", type: "function", default: "" }, { param: "clear", desc: "是否显示清除按钮", type: "boolean", default: "false" }, { param: "shortcuts", desc: "快捷选中,默认有：一周内、一个月内、三个月内、半年内、<br/>一年内、一周后、一个月后、三个月后、半年后、一年后", type: "array", default: "" }, { param: "startName", desc: "作为表单时第一个日期的name", type: "string", default: "startDate" }, { param: "endName", desc: "作为表单时第二个日期的name", type: "string", default: "endDate" }] }),
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
                                " 选中的时间段"
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
                            "设置默认时间段"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "value ",
                                "String",
                                " 时间段"
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
