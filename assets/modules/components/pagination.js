define(["module", "react", "Label", "Table", "../components/pagination/demo1", "../components/pagination/demo2", "../components/pagination/demo3", "../components/pagination/demo4"], function (module, React, Label, Table, Demo1, Demo2, Demo3, Demo4) {
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
                    "Pagination 分页"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "分页显示数据或者内容时使用。"
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
                    "h2",
                    { className: "page-h2" },
                    "API"
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Pagination"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "current", desc: "当前选中的页号", type: "number", default: "" }, { param: "total", desc: "记录总数", type: "number", default: "" }, { param: "pageSize", desc: "每页记录数", type: "number", default: "" }, { param: "displayInfo", desc: "是否限制具体页数总记录跳转等信息", type: "boolean", default: "true" }, { param: "onShowSizeChange", desc: "pageSize变化时触发", type: "function", default: "" }, { param: "onChange", desc: "页号变化时触发", type: "function", default: "" }, { param: "shape", desc: "页号的形状 目前只有circle", type: "string", default: "" }] }),
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
                            "update(data)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "更新组件状态"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "data ",
                                "Object",
                                " 包含pageSize、total、current信息的json对象"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
