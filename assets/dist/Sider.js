define(["module", "react", "classnames", "utils/omit", "FontIcon"], function (module, React, classnames, omit, FontIcon) {
    "use strict";

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

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

    var Sider = function (_React$Component) {
        _inherits(Sider, _React$Component);

        function Sider(props) {
            _classCallCheck(this, Sider);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sider).call(this, props));

            var collapsed = void 0;
            if (props['collapsed'] != undefined) {
                collapsed = props.collapsed;
            } else {
                collapsed = props.defaultCollapsed;
            }
            _this.state = {
                collapsed: collapsed
            };

            _this.toggle = _this.toggle.bind(_this);
            return _this;
        }

        _createClass(Sider, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.collapsed != this.state.collapsed) {
                    this.setState({
                        collapsed: nextProps.collapsed
                    });
                }
            }
        }, {
            key: "setCollapsed",
            value: function setCollapsed(collapsed) {
                if (this.props.collapsed !== this.state.collapsed) {
                    this.setState({
                        collapsed: collapsed
                    });

                    if (this.props.onCollapse) {
                        this.props.onCollapse(collapsed);
                    }
                }
            }
        }, {
            key: "toggle",
            value: function toggle() {
                var collapsed = !this.state.collapsed;
                this.setCollapsed(collapsed);
            }
        }, {
            key: "render",
            value: function render() {
                var _classnames;

                var _props = this.props;
                var prefixCls = _props.prefixCls;
                var className = _props.className;
                var collapsible = _props.collapsible;
                var trigger = _props.trigger;
                var style = _props.style;
                var width = _props.width;
                var collapsedWidth = _props.collapsedWidth;

                var divProps = omit(this.props, ['collapsed', 'defaultCollapsed', 'onCollapse', 'name']);

                className = classnames(className, prefixCls, (_classnames = {}, _defineProperty(_classnames, prefixCls + "-collapsed", !!this.state.collapsed), _defineProperty(_classnames, prefixCls + "-has-trigger", !!trigger), _classnames));

                style = _extends({
                    flex: "0 0 " + (this.state.collapsed ? collapsedWidth : width) + "px"
                }, style);

                var iconObj = {
                    'expanded': React.createElement(FontIcon, { icon: "angle-left" }),
                    'collapsed': React.createElement(FontIcon, { icon: "angle-right" })
                };
                var status = this.state.collapsed ? 'collapsed' : 'expanded';
                var defaultTrigger = iconObj[status];
                var triggerDom = trigger !== null ? React.createElement(
                    "div",
                    { className: prefixCls + "-trigger", onClick: this.toggle },
                    trigger || defaultTrigger
                ) : null;

                return React.createElement(
                    "div",
                    _extends({ className: className }, divProps, { style: style }),
                    this.props.children,
                    collapsible && triggerDom
                );
            }
        }]);

        return Sider;
    }(React.Component);

    Sider.defaultProps = {
        width: 200,
        collapsedWidth: 64,
        name: 'Sider',
        prefixCls: 'cm-layout-sider',
        collapsible: false,
        defaultCollapsed: false
    };

    module.exports = Sider;
});
