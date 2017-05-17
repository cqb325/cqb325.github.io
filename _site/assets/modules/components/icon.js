define(["module", "react", "Label", "../components/icon/demo1", "../components/icon/demo2", "../components/icon/demo3", "../components/icon/demo12"], function (module, React, Label, Demo1, Demo2, Demo3, Demo12) {
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
                    "FontIcon 字体图标"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "语义化的矢量图形。"
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "代码演示"
                ),
                React.createElement(
                    Label,
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
                        React.createElement(Demo12, null)
                    )
                ),
                React.createElement(
                    Label,
                    { grid: 0.5, className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo2, null)
                    )
                )
            );
        }
    });

    module.exports = Page;
});
