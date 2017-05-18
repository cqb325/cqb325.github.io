define(["module", "react", "classnames", "core/BaseComponent", 'FontIcon', 'internal/EnhancedButton'], function (module, React, classnames, BaseComponent, FontIcon, EnhancedButton) {
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

    var PropTypes = React.PropTypes;

    var Button = function (_BaseComponent) {
        _inherits(Button, _BaseComponent);

        function Button(props) {
            _classCallCheck(this, Button);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

            _this.handleMouseDown = function (event) {
                if (event.button === 0 && !_this.props.disabled) {
                    _this.setState({
                        raised: true
                    });
                }
            };

            _this.handleMouseUp = function () {
                if (!_this.props.disabled) {
                    _this.setState({
                        raised: false
                    });
                }
            };

            _this.addState({
                disabled: props.disabled,
                raised: false,
                text: null,
                active: _this.props.active || false
            });
            return _this;
        }

        /**
         * 禁用
         * @method disable
         * @param elem {Element} 显示的内容
         */


        _createClass(Button, [{
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
            key: "setText",
            value: function setText(text) {
                this.setState(text);
            }
        }, {
            key: "_handleClick",
            value: function _handleClick(e) {
                if (this.state.disabled) {
                    return;
                }
                if (this.props.onClick) {
                    this.props.onClick(e);
                }
                this.emit("click");
                if (this.props.once) {
                    this.disable();
                }
            }
        }, {
            key: "setActive",
            value: function setActive(active) {
                this.setState({ active: active });
            }
        }, {
            key: "getActive",
            value: function getActive() {
                return this.state.active;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
                if (this.props["data-itemBind"]) {
                    this.props["data-itemBind"](this);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames(this.props.className, 'cm-button', this.state.theme, this.props.size, {
                    "cm-iconButton": this.props.iconButton,
                    raised: this.props.raised && this.state.raised,
                    flat: this.props.flat,
                    "active": this.state.active
                });

                var link = this.props.href || "javascript:void(0)";

                var props = this.props;
                var iconPosition = this.props.iconAlign || "left";
                var icon = this.props.icon ? React.createElement(FontIcon, { icon: this.props.icon, className: iconPosition }) : null;

                var nodes = iconPosition === "left" ? React.createElement(
                    EnhancedButton,
                    null,
                    icon,
                    props.children
                ) : React.createElement(
                    EnhancedButton,
                    null,
                    props.children,
                    icon
                );

                return React.createElement(
                    "a",
                    { href: link, ref: "button",
                        disabled: this.state.disabled,
                        onClick: this._handleClick.bind(this),
                        onMouseUp: this.handleMouseUp,
                        onMouseDown: this.handleMouseDown,
                        className: className,
                        style: this.props.style,
                        target: this.props.target },
                    nodes
                );
            }
        }]);

        return Button;
    }(BaseComponent);

    Button.propTypes = {
        /**
         * 自定义class
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
        /**
         * 自定义样式
         * @attribute style
         * @type {Object}
         */
        style: PropTypes.object,
        /**
         * 禁用
         * @attribute disabled
         * @type {Boolean}
         */
        disabled: PropTypes.bool,
        /**
         * 主题
         * @attribute theme
         * @type {String}
         */
        theme: PropTypes.string,
        /**
         * 升起效果
         * @attribute raised
         * @type {string/bool}
         */
        raised: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        /**
         * 无边框效果
         * @attribute flat
         * @type {string/bool}
         */
        flat: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        /**
         * 链接地址
         * @attribute href
         * @type {string}
         */
        href: PropTypes.string,
        /**
         * 图标
         * @attribute icon
         * @type {string}
         */
        icon: PropTypes.string,
        /**
         * 图标位置
         * @attribute iconAlign
         * @type {string}
         */
        iconAlign: PropTypes.oneOf(["left", "right"]),
        /**
         * 按钮尺寸
         * @attribute size
         * @type {string}
         */
        size: PropTypes.oneOf(["default", "large", "small"]),
        /**
         * 跳转的目标通a标签的target
         * @attribute target
         * @type {string}
         */
        target: PropTypes.string
    };

    module.exports = Button;
});
