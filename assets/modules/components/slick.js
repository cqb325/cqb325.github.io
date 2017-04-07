define(["module", "react", "Label", "Row", "Col", "../components/slick/demo1", "../components/slick/demo2", "../components/slick/demo3", "../components/slick/demo4", "../components/slick/demo5"], function (module, React, Label, Row, Col, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                )
            );
        }
    });

    module.exports = Page;
});
