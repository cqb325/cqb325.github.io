define(["module", "react", "Label", "../components/icon/demo4", "../components/icon/demo5", "../components/icon/demo6", "../components/icon/demo7", "../components/icon/demo8", "../components/icon/demo9", "../components/icon/demo10", "../components/icon/demo11"], function (module, React, Label, Demo4, Demo5, Demo6, Demo7, Demo8, Demo9, Demo10, Demo11) {
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
                    "h1",
                    { className: "page-h1" },
                    "Web Application Icons"
                ),
                React.createElement(
                    Label,
                    { grid: 1 },
                    React.createElement(Demo4, null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "Accessibility Icons"
                ),
                React.createElement(
                    Label,
                    { grid: 1 },
                    React.createElement(Demo5, null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "Hand Icons"
                ),
                React.createElement(
                    Label,
                    { grid: 1 },
                    React.createElement(Demo6, null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "Transportation Icons"
                ),
                React.createElement(
                    Label,
                    { grid: 1 },
                    React.createElement(Demo7, null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "Gender Icons"
                ),
                React.createElement(
                    Label,
                    { grid: 1 },
                    React.createElement(Demo8, null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "File Type Icons"
                ),
                React.createElement(
                    Label,
                    { grid: 1 },
                    React.createElement(Demo9, null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "Spinner Icons"
                ),
                React.createElement(
                    Label,
                    { grid: 1 },
                    React.createElement(Demo10, null)
                ),
                React.createElement(Demo11, null)
            );
        }
    });

    module.exports = Page;
});
