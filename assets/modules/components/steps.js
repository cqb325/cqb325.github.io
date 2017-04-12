define(["module", "react", "Label", "Table", "../components/steps/demo1", "../components/steps/demo2", "../components/steps/demo3", "../components/steps/demo4", "../components/steps/demo5"], function (module, React, Label, Table, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                    "Steps 步骤条"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "引导用户按照流程完成任务的导航条。",
                    React.createElement("br", null),
                    "当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。"
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
                    Label,
                    { className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo5, null)
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
                    "Steps"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "current", desc: "默认当前步骤", type: "number", default: "0" }, { param: "onFinished", desc: "步骤完成时触发", type: "function", default: "" }, { param: "onChange", desc: "步骤发生变化时触发", type: "function", default: "" }, { param: "size", desc: "步骤的尺寸 small", type: "string", default: "" }, { param: "layout", desc: "步骤条的布局 为空横向，vertical为竖直", type: "string", default: "" }] }),
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
                            "setActive(current)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "激活第current个步骤"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "current ",
                                "Number",
                                " 步骤索引"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "prev()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "跳转到上一步"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "next()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "跳转到下一步"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Steps.Step"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "title", desc: "步骤标题", type: "string", default: "" }, { param: "description", desc: "步骤描述", type: "string", default: "" }, { param: "content", desc: "步骤内容", type: "string", default: "" }, { param: "icon", desc: "图标", type: "string", default: "" }] })
            );
        }
    });

    module.exports = Page;
});
