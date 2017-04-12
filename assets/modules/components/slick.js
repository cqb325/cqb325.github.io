define(["module", "react", "Label", "Row", "Col", "Table", "../components/slick/demo1", "../components/slick/demo2", "../components/slick/demo3", "../components/slick/demo4", "../components/slick/demo5"], function (module, React, Label, Row, Col, Table, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                    "Slick 幻灯片"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "一组轮播的区域。",
                    React.createElement("br", null),
                    "用于一组图片或卡片轮播"
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
                    "Slick"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "current", desc: "当前索引", type: "number", default: "0" }, { param: "layout", desc: "布局horizontal，vertical", type: "string", default: "horizontal" }, { param: "autoPlay", desc: "自动播放", type: "boolean", default: "false" }, { param: "effect", desc: "特效名称slide、fade、normal", type: "string", default: "slide" }, { param: "onShow", desc: "跳转到下一个的回调", type: "function", default: "" }, { param: "onShown", desc: "特效完成的回调", type: "function", default: "" }, { param: "delay", desc: "特效的延迟时间", type: "number", default: "3000" }] }),
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
                            "play()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "播放"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getActive()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取当前的索引"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Number",
                                " 当前的索引"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "jumpTo(index, callback)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "跳转到指定索引"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "index ",
                                "Number",
                                " 要跳转的索引"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "callback ",
                                "function",
                                "  跳转完成后的回调"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Slick.Item"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "active", desc: "激活状态", type: "boolean", default: "false" }] })
            );
        }
    });

    module.exports = Page;
});
