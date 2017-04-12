define(["module", "react", "Row", "Col", "Label", "Table", "../components/select/demo1", "../components/select/demo2", "../components/select/demo3", "../components/select/demo4", "../components/select/demo5"], function (module, React, Row, Col, Label, Table, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                    "Select 选择器"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "弹出一个下拉菜单给用户选择操作，用于代替原生的选择器。",
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
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo5, null)
                        )
                    ),
                    React.createElement(
                        Col,
                        { grid: 1, className: "code-col" },
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
                    "Select"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "valueField", desc: "value取值字段", type: "string", default: "id" }, { param: "textField", desc: "text取值字段", type: "string", default: "text" }, { param: "sep", desc: "分隔符", type: "string", default: "," }, { param: "value", desc: "默认值", type: "string", default: "" }, { param: "data", desc: "select的初始数据", type: "array", default: "" }, { param: "placeholder", desc: "未选择的placeholder", type: "string", default: "" }, { param: "optionsTpl", desc: "选择后的显示的模板", type: "string", default: "" }, { param: "name", desc: "作为form表单元素的name", type: "string", default: "" }, { param: "multi", desc: "是否多选", type: "boolean", default: "false" }, { param: "onChange", desc: "选择后值改变回调", type: "function", default: "" }, { param: "hasEmptyOption", desc: "Select是否存在空选项 单选时有效", type: "boolean", default: "false" }, { param: "choiceText", desc: "Select空选项的显示文字 单选时有效", type: "string", default: "--请选择--" }, { param: "url", desc: "数据源地址，指定会自动获取数据并展示数据", type: "string", default: "" }] }),
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
                            "获取当前值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "String",
                                " 选中的值，多选的话值用sep指定的符号分割"
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
                            "设置Select的值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "value ",
                                "String",
                                " 值，多选的话值用sep指定的符号分割"
                            )
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
                            "设置Select的初始数据"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "data ",
                                "Array",
                                " Select的初始选项数据"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
