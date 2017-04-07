define(["module", "react", "classnames", "core/BaseComponent", "internal/TouchRipple", 'FontIcon', 'internal/EnhancedButton'], function (module, React, classnames, BaseComponent, TouchRipple, FontIcon, EnhancedButton) {
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

    var createFragment = React.addons.createFragment;

    var IconButton = function (_BaseComponent) {
        _inherits(IconButton, _BaseComponent);

        function IconButton(props) {
            _classCallCheck(this, IconButton);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IconButton).call(this, props));

            _this.addState({
                disabled: props.disabled
            });
            return _this;
        }

        /**
         * 禁用
         * @method disable
         * @param elem {Element} 显示的内容
         */


        _createClass(IconButton, [{
            key: "disable",
            value: function disable(elem) {
                this.setState({ disabled: true, show: elem });
            }
        }, {
            key: "enable",
            value: function enable(elem) {
                this.setState({ disabled: false, show: elem });
            }
        }, {
            key: "_handleClick",
            value: function _handleClick(e) {
                if (this.state.disabled) {
                    return;
                }
                if (this.props.onClick) {
                    this.props.onClick();
                }
                if (this.props.once) {
                    this.disable();
                }
            }
        }, {
            key: "createButtonChildren",
            value: function createButtonChildren() {
                var _props = this.props;
                var children = _props.children;
                var disabled = _props.disabled;
                var touchRippleColor = _props.touchRippleColor;
                var touchRippleOpacity = _props.touchRippleOpacity;


                var icon = this.props.icon ? React.createElement(
                    FontIcon,
                    { icon: this.props.icon },
                    children
                ) : children;

                return React.createElement(
                    EnhancedButton,
                    { centerRipple: true,
                        touchRippleColor: touchRippleColor || 'rgba(0, 0, 0, 0.27)',
                        opacity: touchRippleOpacity,
                        disabled: disabled,
                        style: { textAlign: "center" } },
                    icon
                );
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames(this.props.className, 'cm-button', 'cm-iconButton', this.state.theme);

                var link = this.props.href || "javascript:void(0)";

                var iconSize = this.props.style && this.props.style.fontSize ? parseInt(this.props.style.fontSize) : 24;
                var style = _extends({
                    fontSize: iconSize + 'px',
                    overflow: 'visible',
                    padding: iconSize / 2,
                    width: iconSize * 2,
                    height: iconSize * 2,
                    lineHeight: 'normal',
                    textAlign: 'center'
                }, this.props.style);

                return React.createElement(
                    "a",
                    { href: link, ref: "button",
                        disabled: this.state.disabled,
                        onClick: this._handleClick.bind(this),
                        className: className,
                        style: style },
                    this.createButtonChildren()
                );
            }
        }]);

        return IconButton;
    }(BaseComponent);

    module.exports = IconButton;
});
