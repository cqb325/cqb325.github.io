define(["module", "react", "Row", "Col", "Label", "../components/select/demo1", "../components/select/demo2", "../components/select/demo3", "../components/select/demo4", "../components/select/demo5"], function (module, React, Row, Col, Label, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                )
            );
        }
    });

    module.exports = Page;
});
