define(["module", "react", 'react-dom', "classnames", "core/BaseComponent", 'utils/Dom', 'Panel', 'Button', "velocity"], function (module, React, ReactDOM, classnames, BaseComponent, Dom, Panel, Button, velocity) {
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

    var PropTypes = React.PropTypes;

    var MessageBox = function (_BaseComponent) {
        _inherits(MessageBox, _BaseComponent);

        function MessageBox(props) {
            _classCallCheck(this, MessageBox);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MessageBox).call(this, props));

            _this.addState({
                title: props.title || "",
                msg: props.msg || "",
                visibility: false,
                type: props.type || "info"
            });

            var confirmText = props.confirmText || "确 定";
            var cancelText = props.cancelText || "取 消";

            var confirmTheme = props.confirmTheme || "primary";
            var cancelTheme = props.cancelTheme || "default";

            var confirmIcon = props.confirmIcon || "check";
            var cancelIcon = props.cancelIcon || "close";

            if (props.footers) {
                _this.footers = props.footers;
            } else {
                _this.confirm = _this.confirm.bind(_this);
                _this.cancle = _this.cancle.bind(_this);

                var components = [React.createElement(
                    Button,
                    { theme: confirmTheme, raised: true, icon: confirmIcon, onClick: _this.confirm },
                    confirmText
                )];
                if (props.type === "confirm") {
                    components.push(React.createElement(
                        Button,
                        { theme: cancelTheme, raised: true, icon: cancelIcon, className: "ml-10", onClick: _this.cancle },
                        cancelText
                    ));
                }
                _this.footers = {
                    components: components
                };
            }

            _this.backdrop = null;

            //保存的数据
            _this.data = null;

            _this.panel = null;
            return _this;
        }

        _createClass(MessageBox, [{
            key: "setData",
            value: function setData(data) {
                this.data = data;
            }
        }, {
            key: "getData",
            value: function getData() {
                return this.data;
            }
        }, {
            key: "cancle",
            value: function cancle() {
                if (this.state.type === "confirm" && this.props.confirm) {
                    this.props.confirm.apply(this, [false]);
                    this.hide();
                } else {
                    this.hide();
                }
            }
        }, {
            key: "hide",
            value: function hide() {
                velocity(this.container, "fadeOut", { duration: 300 });

                if (this.props.onHide) {
                    this.props.onHide();
                }
                this.emit("hide");
                this.backdrop.style.display = "none";
            }
        }, {
            key: "confirm",
            value: function confirm() {
                if (this.props.confirm) {
                    if (this.state.type === "confirm") {
                        if (this.props.confirm.apply(this, [true])) {
                            this.hide();
                        }
                    } else {
                        this.props.confirm.apply(this, []);
                        this.hide();
                    }
                } else {
                    this.hide();
                }
            }
        }, {
            key: "show",
            value: function show(msg, title) {
                var _this2 = this;

                // this.setState({
                //     title: this.state.title || title,
                //     msg: msg,
                //     visibility: true
                // });

                this.panel.setTitleAndContent(this.state.title || title, msg);

                if (!this.backdrop) {
                    var ele = Dom.query(".shadow-backdrop");
                    if (ele) {
                        this.backdrop = ele;
                    } else {
                        this.backdrop = document.createElement("div");
                        this.backdrop.setAttribute("class", "shadow-backdrop");
                        document.body.appendChild(this.backdrop);
                    }
                }

                this.backdrop.style.display = "block";

                window.setTimeout(function () {
                    var ele = ReactDOM.findDOMNode(_this2.panel);
                    Dom.dom(_this2.container).show();

                    var w = ele.clientWidth;
                    var h = ele.clientHeight;
                    ele.style.marginLeft = -w / 2 + "px";
                    ele.style.marginTop = -h / 2 + "px";
                    Dom.dom(_this2.container).show();
                    velocity(_this2.container, "fadeIn", { duration: 300 });

                    if (_this2.props.onShow) {
                        _this2.props.onShow();
                    }
                    _this2.emit("show");
                }, 0);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;

                this.container = document.createElement("div");
                document.body.appendChild(this.container);
                Dom.dom(this.container).addClass("cm-popup-warp");
                Dom.dom(this.container).hide();

                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames("cm-messageBox", className, this.state.type);
                var props = _extends({}, this.props);
                props.className = className;

                props.footers = this.footers;
                style = _extends({}, style);
                props.style = style;

                window.setTimeout(function () {
                    ReactDOM.render(React.createElement(Panel, _extends({ ref: function ref(_ref) {
                            _this3.panel = _ref;
                        } }, props, { content: _this3.state.msg })), _this3.container);
                }, 0);
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement("div", null);
            }
        }]);

        return MessageBox;
    }(BaseComponent);

    MessageBox.propTypes = {
        /**
         * 标题
         * @attribute title
         * @type {String}
         */
        title: PropTypes.string,
        /**
         * 信息
         * @attribute msg
         * @type {String}
         */
        msg: PropTypes.string,
        /**
         * 类型
         * @attribute type
         * @type {String}
         */
        type: PropTypes.oneOf(["info", "confirm", "error", "warning"]),
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
        style: PropTypes.object
    };

    module.exports = MessageBox;
});
