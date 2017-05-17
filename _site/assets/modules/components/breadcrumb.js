define(["module", "react", "Row", "Col", "Label", "../components/breadcrumb/demo1", "../components/breadcrumb/demo2", "../components/breadcrumb/demo3"], function (module, React, Row, Col, Label, Demo1, Demo2, Demo3) {
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
                    "Breadcrumb 面包屑"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "显示当前页面在系统层级结构中的位置，并能向上返回。"
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
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
