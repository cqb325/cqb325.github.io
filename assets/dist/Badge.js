define(["module", "react", "react-dom", "classnames", "core/BaseComponent"], function (module, React, ReactDOM, classnames, BaseComponent) {
    "use strict";

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

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

    var Badge = function (_BaseComponent) {
        _inherits(Badge, _BaseComponent);

        function Badge(props) {
            _classCallCheck(this, Badge);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Badge).call(this, props));

            _this.addState({
                value: props.value,
                status: props.status
            });
            return _this;
        }

        _createClass(Badge, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.value !== this.state.value) {
                    this.setState({
                        value: nextProps.value
                    });
                }
            }
        }, {
            key: "renderCount",
            value: function renderCount() {
                if (this.state.status) {
                    var countName = classnames("cm-badge-status-dot", _defineProperty({}, "cm-badge-status-" + this.state.status, this.state.status));
                    return [React.createElement("span", { key: "1", className: countName }), React.createElement(
                        "span",
                        { key: "2", className: "cm-badge-status-text" },
                        this.props.text
                    )];
                } else {
                    var _countName = classnames("cm-badge-count", {
                        "cm-badge-dot": this.props.dot
                    });
                    if (this.state.value != undefined || this.props.dot) {
                        return React.createElement(
                            "sup",
                            { className: _countName },
                            this.props.dot ? null : this.state.value
                        );
                    } else {
                        return null;
                    }
                }
            }
        }, {
            key: "addCount",
            value: function addCount(num) {
                num = num || 0;
                var value = Math.max(this.state.value + num, 0);

                this.setState({
                    value: value
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames(className, "cm-badge", this.state.theme, {
                    "cm-badge-static": !React.Children.count(this.props.children) && !this.state.status,
                    "cm-badge-status": this.state.status
                });

                return React.createElement(
                    "span",
                    { className: className, style: style },
                    this.props.children,
                    this.renderCount()
                );
            }
        }]);

        return Badge;
    }(BaseComponent);

    module.exports = Badge;
});
