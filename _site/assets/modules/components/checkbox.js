define(["module", "react", "Label", "../components/checkbox/demo1", "../components/checkbox/demo2", "../components/checkbox/demo3", "../components/checkbox/demo4", "../components/checkbox/demo5", "../components/checkbox/demo6"], function (module, React, Label, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6) {
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
                    "CheckBox 复选框"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "多选框。"
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
                        React.createElement(Demo5, null)
                    )
                ),
                React.createElement(
                    Label,
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
            );
        }
    });

    module.exports = Page;
});
