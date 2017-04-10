define(["module", "react", "Row", "Col", "Label", "../components/button/demo1", "../components/button/demo2", "../components/button/demo3", "../components/button/demo4", "../components/button/demo5"], function (module, React, Row, Col, Label, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                    "Button 按钮"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "按钮用于开始一个即时操作。响应用户点击行为，触发相应的业务逻辑。"
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
                    "Input"
                ),
                React.createElement(
                    "table",
                    { className: "cm-table table-bordered" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "th",
                                null,
                                "参数"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "说明"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "类型"
                            ),
                            React.createElement(
                                "th",
                                null,
                                "默认值"
                            )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "theme"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "theme"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "string"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "default"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
