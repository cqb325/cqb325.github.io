define(["module", "react", "Label", "Row", "Col", "Table", "../components/progress/demo1", "../components/progress/demo2", "../components/progress/demo3", "../components/progress/demo4", "../components/progress/demo5", "../components/progress/demo6", "../components/progress/demo7"], function (module, React, Label, Row, Col, Table, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7) {
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
                    "Progress 进度条"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "展示操作的当前进度。",
                    React.createElement("br", null),
                    "在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态"
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
                    "Progress"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "value", desc: "进度值", type: "number", default: "0" }, { param: "min", desc: "最小值", type: "number", default: "0" }, { param: "max", desc: "最大值", type: "number", default: "100" }, { param: "radius", desc: "半径", type: "number", default: "60" }, { param: "strokeWidth", desc: "圆形线条粗细值", type: "number", default: "10" }, { param: "status", desc: "状态", type: "string", default: "" }, { param: "showPercent", desc: "是否显示进度文字", type: "boolean", default: "true" }, { param: "active", desc: "动效状态激活", type: "boolean", default: "false" }, { param: "type", desc: "普通进度line 还是圆形进度circle", type: "string", default: "" }, { param: "format", desc: "进度结果格式化", type: "function", default: "" }] }),
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
                            "getMin()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取最小值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Number",
                                " 最小值"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getMax()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取最大值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Number",
                                " 最大值"
                            )
                        )
                    ),
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
                            "获取当前值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Number",
                                " 当前进度值"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "update(value)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "更新当前进度"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "value ",
                                "Number"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
