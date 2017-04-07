define(["module", "react", "Label", "../components/affix/demo1"], function (module, React, Label, Demo1) {
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
                    "Affix 固钉"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "固钉。"
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
                    )
                )
            );
        }
    });

    module.exports = Page;
});
