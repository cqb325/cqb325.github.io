define(["module", "react", "classnames"], function (module, React, classnames) {
    "use strict";

    var Col = React.createClass({
        displayName: "Col",
        render: function render() {
            var className = classnames("cm-row", this.props.className);
            var eleName = this.props.component || "div";
            return React.createElement(eleName, {
                className: className,
                style: this.props.style
            }, this.props.children);
        }
    });

    module.exports = Col;
});
