define(["module", "react", "Label", "Row", "Col", "../business-component/table-form/demo1"], function (module, React, Label, Row, Col, Demo1) {
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
                    "表格表单"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "以表格形式展现的表单。",
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
                        { grid: 1, className: "code-col" },
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo1, null)
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
