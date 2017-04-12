define(["module", "react", "Label", "Table", "../components/table/demo1"], function (module, React, Label, Table, Demo1) {
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
                    "Table 表格"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "表格。",
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
                    "h2",
                    { className: "page-h2" },
                    "API"
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Table"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "data", desc: "表格数据", type: "array", default: "" }, { param: "columns", desc: "表头字段信息", type: "Array", default: "" }, { param: "bordered", desc: "边框的表格", type: "boolean", default: "false" }, { param: "striped", desc: "是否交替显示背景", type: "boolean", default: "false" }, { param: "hover", desc: "鼠标滑过高亮", type: "boolean", default: "false" }] }),
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
                            "setData(data)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置表格数据"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "data ",
                                "Array",
                                " 表格数据"
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
                            "获取表格数据"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Array",
                                " 表格数据"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "addRow(row)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "添加行数据"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "row ",
                                "Object",
                                " 对应columns字段定义的json数据"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "removeRow(index)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "删除行"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "index ",
                                "Number",
                                " 行号"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "removeRows(field, value)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "删除行，根据字段和值进行匹配，删除匹配的数据"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "field ",
                                "String",
                                " 字段名称"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "value ",
                                "String",
                                " 对应的值"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "resetData(data)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "重置数据"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "data ",
                                "Object {columns: [], data: []}",
                                " 包含columns内容和表格数据的data"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "checkedAll(checked)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "勾选所有或取消勾选所有"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "checked ",
                                "Boolean",
                                " 如果是一个带有checkbox的列可以使用"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "checkRow(field, value)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据属性勾选行"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "field ",
                                "String",
                                " 字段名称"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "value ",
                                "String",
                                " 对应的值"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "unCheckRow(field, value)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据属性取消勾选行"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "field ",
                                "String",
                                " 字段名称"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "value ",
                                "String",
                                " 对应的值"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getAllChecked()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取所有勾选的数据"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Object {data: [], rows: []}",
                                " 勾选的数据"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Columns"
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
                            "[{name: \"\", type: \"\", text: \"\", tip: \"\", format: \"\"}]"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "表头格式"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "name ",
                                "String",
                                " 字段名称"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "type ",
                                "String",
                                " 为checkbox是为选择框列 为index是序号列"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "text ",
                                "String",
                                " 表头字符串"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "tip ",
                                "Boolean",
                                " 是否鼠标滑过提示"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "format ",
                                "function",
                                " 字段格式化 format(value, column, row)"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
