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
                )
            );
        }
    });

    module.exports = Page;
});
