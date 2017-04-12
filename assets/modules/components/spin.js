define(["module", "react", "Label", "Row", "Col", "Table", "../components/spin/demo1", "../components/spin/demo2", "../components/spin/demo3", "../components/spin/demo4"], function (module, React, Label, Row, Col, Table, Demo1, Demo2, Demo3, Demo4) {
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
                    "Spin 加载中"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "用于页面和区块的加载中状态。",
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
                    "Spin.WaterSpin"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "percent", desc: "百分比", type: "number", default: "0" }, { param: "onFinish", desc: "达到100%时触发", type: "function", default: "" }, { param: "size", desc: "尺寸", type: "number", default: "250" }] }),
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
                            "getPercent()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取百分比"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Number",
                                " 当前的百分比"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Spin.SVGSpin"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "spinning", desc: "是否显示spin", type: "boolean", default: "false" }] }),
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
                            "show()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "显示Spin"
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
                            "隐藏Spin"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Spin.CssSpin"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "spinning", desc: "是否显示spin", type: "boolean", default: "false" }] }),
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
                            "show()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "显示Spin"
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
                            "隐藏Spin"
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
