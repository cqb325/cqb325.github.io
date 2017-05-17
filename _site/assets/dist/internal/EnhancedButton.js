define(["module", "react", "internal/TouchRipple"], function (module, React, TouchRipple) {
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

    var Component = React.Component;
    var createFragment = React.addons.createFragment;

    var EnhancedButton = function (_Component) {
        _inherits(EnhancedButton, _Component);

        function EnhancedButton() {
            _classCallCheck(this, EnhancedButton);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(EnhancedButton).apply(this, arguments));
        }

        _createClass(EnhancedButton, [{
            key: "createButtonChildren",
            value: function createButtonChildren() {
                var _props = this.props;
                var children = _props.children;
                var disabled = _props.disabled;
                var centerRipple = _props.centerRipple;
                var touchRippleColor = _props.touchRippleColor;
                var touchRippleOpacity = _props.touchRippleOpacity;
                var initFull = _props.initFull;


                var touchRipple = !disabled ? React.createElement(
                    TouchRipple,
                    {
                        centerRipple: centerRipple,
                        color: touchRippleColor,
                        opacity: touchRippleOpacity,
                        initFull: initFull
                    },
                    children
                ) : undefined;

                return createFragment({
                    touchRipple: touchRipple,
                    children: touchRipple ? undefined : children
                });
            }
        }, {
            key: "handleClick",
            value: function handleClick(event) {
                if (!this.props.disabled) {
                    if (this.props.onClick) {
                        this.props.onClick(event);
                    }
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props2 = this.props;
                var disabled = _props2.disabled;
                var onClick = _props2.onClick;
                var style = _props2.style;


                var mergedStyles = _extends({
                    border: 10,
                    background: 'none',
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    cursor: disabled ? 'default' : 'pointer',
                    textDecoration: 'none',
                    outline: 'none',
                    font: 'inherit'
                }, style);

                var buttonChildren = this.createButtonChildren();

                var props = {
                    style: mergedStyles,
                    disabled: disabled,
                    onClick: this.handleClick.bind(this)
                };
                return React.createElement(
                    "span",
                    props,
                    buttonChildren
                );
            }
        }]);

        return EnhancedButton;
    }(Component);

    module.exports = EnhancedButton;
});
