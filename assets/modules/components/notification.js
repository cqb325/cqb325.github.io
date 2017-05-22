define(["module", "react", "Label", "Row", "Col", "Table", "../components/notification/demo1", "../components/notification/demo2", "../components/notification/demo3", "../components/notification/demo4", "../components/notification/demo5", "../components/notification/demo6", "../components/notification/demo7"], function (module, React, Label, Row, Col, Table, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7) {
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
                    "Notification 通知框"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "通知框。"
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
                    "Notification config参数信息"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "key", desc: "该通知的标识，未填写时自动生成", type: "string", default: "" }, { param: "dock", desc: "通知停靠的位置", type: "string", default: "topRight" }, { param: "title", desc: "标题", type: "string", default: "" }, { param: "desc", desc: "描述", type: "string", default: "" }, { param: "icon", desc: "自定义图标", type: "ReactElement", default: "" }, { param: "btn", desc: "自定义按钮", type: "ReactElement", default: "" }, { param: "duration", desc: "延迟自动关闭时间 单位s", type: "number", default: "4.5" }, { param: "onClose", desc: "关闭回调", type: "function", default: "" }] }),
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
                            "success(config)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "打开success通知"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "config ",
                                "Object",
                                " 通知配置信息"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "info(config)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "打开 info 通知"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "config ",
                                "Object",
                                " 通知配置信息"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "warning(config)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "打开 warning 通知"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "config ",
                                "Object",
                                " 通知配置信息"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "error(config)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "打开 error 通知"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "config ",
                                "Object",
                                " 通知配置信息"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "question(config)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "打开 question 通知"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "config ",
                                "Object",
                                " 通知配置信息"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "open(config)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "打开通知"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "config ",
                                "Object",
                                " 通知配置信息"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "close(key)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "关闭通知"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "key ",
                                "String",
                                " 通知的key"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getNotification(key)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取通知key"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "key ",
                                "String",
                                " 通知的key"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
