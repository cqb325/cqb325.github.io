define(["module", "react", "Label", "Row", "Col", "../business-component/simple-list-page/demo1"], function (module, React, Label, Row, Col, Demo1) {
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
                    "列表页"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "统一的列表页面，整合列表数据，分页和查询。",
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
