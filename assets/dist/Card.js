define(["module", "react", 'react-dom', "classnames", "core/BaseComponent"], function (module, React, ReactDOM, classnames, BaseComponent) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Card = function (_BaseComponent) {
        _inherits(Card, _BaseComponent);

        function Card(props) {
            _classCallCheck(this, Card);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Card).call(this, props));

            _this.addState({
                title: props.title || null,
                content: null
            });
            return _this;
        }

        _createClass(Card, [{
            key: "setTitle",
            value: function setTitle(title) {
                this.setState({ title: title });
            }
        }, {
            key: "setContent",
            value: function setContent(content) {
                this.setState({ content: content });
            }
        }, {
            key: "_renderHeader",
            value: function _renderHeader() {
                if (!this.props.title && !this.props.tools) {
                    return null;
                }

                return React.createElement(
                    "div",
                    { className: "cm-card-head" },
                    React.createElement(
                        "h3",
                        { className: "cm-card-head-title" },
                        this.state.title
                    ),
                    React.createElement(
                        "div",
                        { className: "cm-card-tools" },
                        this.props.tools
                    )
                );
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames("cm-card", className, {
                    "cm-card-bordered": this.props.border === undefined ? true : this.props.border
                });

                var head = this._renderHeader();
                var loadding = this.props.loadding;
                var content = null;
                if (loadding && !this.state.content) {
                    content = React.createElement(
                        "div",
                        null,
                        React.createElement("p", { className: "cm-card-loading-block", style: { width: "94%" } }),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("span", { className: "cm-card-loading-block", style: { width: "28%" } }),
                            React.createElement("span", { className: "cm-card-loading-block", style: { width: "62%" } })
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("span", { className: "cm-card-loading-block", style: { width: "22%" } }),
                            React.createElement("span", { className: "cm-card-loading-block", style: { width: "66%" } })
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("span", { className: "cm-card-loading-block", style: { width: "56%" } }),
                            React.createElement("span", { className: "cm-card-loading-block", style: { width: "39%" } })
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement("span", { className: "cm-card-loading-block", style: { width: "21%" } }),
                            React.createElement("span", { className: "cm-card-loading-block", style: { width: "15%" } }),
                            React.createElement("span", { className: "cm-card-loading-block", style: { width: "40%" } })
                        )
                    );
                } else {
                    content = this.state.content || this.props.children;
                }

                return React.createElement(
                    "div",
                    { className: className, style: style },
                    head,
                    React.createElement(
                        "div",
                        { className: "cm-card-body", style: this.props.bodyStyle },
                        content
                    )
                );
            }
        }]);

        return Card;
    }(BaseComponent);

    module.exports = Card;
});
