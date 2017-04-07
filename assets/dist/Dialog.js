define(["module", "react", 'react-dom', "classnames", "core/BaseComponent", 'utils/Dom', 'Panel', 'Button'], function (module, React, ReactDOM, classnames, BaseComponent, Dom, Panel, Button) {
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
    var createFragment = React.addons.createFragment;

    var Dialog = function (_BaseComponent) {
        _inherits(Dialog, _BaseComponent);

        function Dialog(props) {
            _classCallCheck(this, Dialog);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).call(this, props));

            _this.addState({
                title: props.title || "",
                visibility: false
            });

            _this.footers = props.footers || {
                components: [React.createElement(
                    Button,
                    { theme: "success", raised: true, onClick: _this.btnHandler.bind(_this, true), icon: "save" },
                    props.okButtonText || "保 存"
                ), React.createElement(
                    Button,
                    { theme: "info", raised: true, onClick: _this.btnHandler.bind(_this, false), icon: "flask", className: "ml-10" },
                    props.cancleButtonText || "取 消"
                )]
            };

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
                this.setState({
                    title: title
                });
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
                this.setState({
                    visibility: false
                });

                if (this.props.onClose) {
                    this.props.onClose();
                }
                this.emit("close");
                this.backdrop.style.display = "none";
            }
        }, {
            key: "open",
            value: function open() {
                var _this2 = this;

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
                    var ele = ReactDOM.findDOMNode(_this2);
                    var w = ele.clientWidth;
                    var h = ele.clientHeight;
                    ele.style.marginLeft = -w / 2 + "px";
                    ele.style.marginTop = -h / 2 + "px";

                    if (_this2.props.onOpen) {
                        _this2.props.onOpen();
                    }
                    _this2.emit("open");
                }, 0);
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames("cm-dialog", className);
                var props = _extends({}, this.props);
                props.className = className;

                var sty = style || {};
                sty.display = this.state.visibility ? "block" : "none";
                props.style = sty;

                props.footers = this.footers;

                return React.createElement(
                    Panel,
                    props,
                    this.props.children
                );
            }
        }]);

        return Dialog;
    }(BaseComponent);

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
