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

    var Dialog = function (_BaseComponent) {
        _inherits(Dialog, _BaseComponent);

        function Dialog(props) {
            _classCallCheck(this, Dialog);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).call(this, props));

            _this.title = props.title;
            _this.addState({
                visibility: false
            });

            _this.footers = props.hasFooter ? props.footers || {
                components: [React.createElement(
                    Button,
                    { theme: "success", raised: true, onClick: _this.btnHandler.bind(_this, true), icon: "save" },
                    props.okButtonText || "保 存"
                ), React.createElement(
                    Button,
                    { theme: "info", raised: true, onClick: _this.btnHandler.bind(_this, false), icon: "flask", className: "ml-10" },
                    props.cancleButtonText || "取 消"
                )]
            } : null;

            _this.backdrop = null;

            //保存的数据
            _this.data = null;
            return _this;
        }

        _createClass(Dialog, [{
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
            key: "setTitle",
            value: function setTitle(title) {
                this.title = title;
                this.panel.setTitle(title);
            }
        }, {
            key: "btnHandler",
            value: function btnHandler(flag) {
                if (this.props.onConfirm) {
                    var ret = this.props.onConfirm(flag);
                    if (ret) {
                        this.close();
                    }

                    return ret;
                }

                this.close();
                return true;
            }
        }, {
            key: "close",
            value: function close() {
                var _this2 = this;

                this.setState({
                    visibility: false
                });
                if (this.orign) {
                    var offset = Dom.dom(this.orign).offset();
                    var ele = ReactDOM.findDOMNode(this.panel);

                    velocity(ele, {
                        left: offset.left,
                        top: offset.top,
                        scale: 0
                    }, { duration: 300, complete: function complete() {
                            velocity(_this2.container, "fadeOut", { duration: 0 });
                        } });
                } else {
                    velocity(this.container, "fadeOut", { duration: 300 });
                }

                if (this.props.onClose) {
                    this.props.onClose();
                }
                this.emit("close");
                this.backdrop.style.display = "none";
            }
        }, {
            key: "open",
            value: function open(orign) {
                var _this3 = this;

                this.setState({
                    visibility: true
                });

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
                    Dom.dom(_this3.container).show();
                    var ele = ReactDOM.findDOMNode(_this3.panel);
                    var w = ele.clientWidth;
                    var h = ele.clientHeight;
                    ele.style.marginLeft = -w / 2 + "px";
                    ele.style.marginTop = -h / 2 + "px";
                    Dom.dom(_this3.container).hide();

                    if (orign) {
                        velocity(_this3.container, "fadeIn", { duration: 0 });
                        _this3.orign = orign;
                        var offset = Dom.dom(orign).offset();
                        Dom.dom(ele).css({
                            left: offset.left + "px",
                            top: offset.top + "px"
                        });
                        var bodyw = document.documentElement.clientWidth;
                        var bodyH = document.documentElement.clientHeight;
                        velocity(ele, {
                            scale: 0
                        }, { duration: 0, complete: function complete() {
                                velocity(ele, {
                                    scale: 1,
                                    left: bodyw / 2,
                                    top: bodyH / 2
                                }, { duration: 500, easing: "ease-in" });
                            } });
                    } else {
                        velocity(_this3.container, "fadeIn", { duration: 300 });
                    }

                    if (_this3.props.onOpen) {
                        _this3.props.onOpen();
                    }
                    _this3.emit("open");
                }, 0);
            }
        }, {
            key: "isOpen",
            value: function isOpen() {
                return this.state.visibility;
            }
        }, {
            key: "getContainer",
            value: function getContainer() {
                return this.container;
            }
        }, {
            key: "getPanel",
            value: function getPanel() {
                return this.panel;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this4 = this;

                this.container = document.createElement("div");
                document.body.appendChild(this.container);
                Dom.dom(this.container).addClass("cm-popup-warp");

                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames("cm-dialog", className);
                var props = _extends({}, this.props);
                props.className = className;

                props.style = style || {};
                props.footers = this.footers;

                if (this.props.hasCloseBtn) {
                    props.tools = {
                        components: [React.createElement(
                            "a",
                            { href: "javascript:void(0)", onClick: this.close.bind(this), className: "cm-dialog-close" },
                            "×"
                        )]
                    };
                }

                if (this.state.visibility) {
                    Dom.dom(this.container).show();
                } else {
                    Dom.dom(this.container).hide();
                }

                window.setTimeout(function () {
                    ReactDOM.render(React.createElement(
                        Panel,
                        _extends({ ref: function ref(_ref) {
                                _this4.panel = _ref;
                            } }, props),
                        _this4.props.children
                    ), _this4.container);
                }, 0);
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement("div", null);
            }
        }]);

        return Dialog;
    }(BaseComponent);

    Dialog.defaultProps = {
        hasCloseBtn: true
    };

    Dialog.propTypes = {
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

    module.exports = Dialog;
});
