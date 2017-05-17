define(["module", "react", "Row", "Col", "Label", "../components/daterange/demo1", "../components/daterange/demo2", "../components/daterange/demo3", "../components/daterange/demo4", "../components/daterange/demo5", "../components/daterange/demo6", "../components/daterange/demo7"], function (module, React, Row, Col, Label, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Demo7) {
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
                    "DateRange 时间段选择器"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "选择一段时间的控件。"
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
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo7, null)
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
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo6, null)
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
