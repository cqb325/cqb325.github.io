define(["module", "react", "react-dom"], function (module, React, ReactDOM) {
    "use strict";

    var Page = React.createClass({
        displayName: "Page",
        render: function render() {
            return React.createElement(
                "div",
                { className: "content" },
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "开始使用"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "使用方式"
                )
            );
        }
    });

    module.exports = Page;
});
