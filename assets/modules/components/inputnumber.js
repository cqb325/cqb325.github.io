define(["module", "react", "Label", "Row", "Col", "Table", "../components/inputnumber/demo1", "../components/inputnumber/demo2", "../components/inputnumber/demo3", "../components/inputnumber/demo4", "../components/inputnumber/demo5", "../components/inputnumber/demo6", "../components/inputnumber/demo7"], function (module, React, Label, Row, Col, Table, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7) {
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
                    "InputNumber 数字框"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "数字框。"
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
                        { grid: 0.5 },
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
                                React.createElement(Demo3, null)
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
                                React.createElement(Demo7, null)
                            )
                        )
                    ),
                    React.createElement(
                        Col,
                        { grid: 0.5 },
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
                                React.createElement(Demo4, null)
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
                    "InputNumber"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "value", desc: "默认值", type: "string/number", default: "0" }, { param: "min", desc: "最小值", type: "string/number", default: "" }, { param: "max", desc: "最大值", type: "string/number", default: "" }, { param: "step", desc: "步长", type: "string/number", default: "1" }, { param: "disabled", desc: "禁用", type: "boolean", default: "false" }, { param: "onChange", desc: "值变化回调", type: "function", default: "" }, { param: "formatter", desc: "格式化函数", type: "function", default: "" }, { param: "parser", desc: "解析函数", type: "function", default: "" }, { param: "itemClassName", desc: "input上的class", type: "string", default: "" }, { param: "size", desc: "大小支持large和small", type: "string", default: "" }, { param: "name", desc: "作为表单元素的name", type: "string", default: "" }] }),
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
                            "setMin(min)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置最小值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "min ",
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
                            "setMax(max)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置最大值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "max ",
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
                            "setStep(step)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "重新设置步长"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "step ",
                                "Number",
                                " 步长值"
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
                            "设置值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "value ",
                                "Number",
                                " 当前值"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getFormatedValue()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取格式化值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "String",
                                " 当前格式化后的值"
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
                            "获取值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "String",
                                " 当前值"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
