define(["module", "react", "classnames", 'utils/grids'], function (module, React, classnames, grids) {
    "use strict";

    var Row = React.createClass({
        displayName: "Row",
        render: function render() {
            var className = classnames("cm-col", this.props.className, grids.getGrid(this.props.grid));
            var eleName = this.props.component || "div";
            return React.createElement(eleName, {
                className: className,
                style: this.props.style
            }, this.props.children);
        }
    });

    module.exports = Row;
});
