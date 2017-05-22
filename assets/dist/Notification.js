define(["module", "react", "react-dom", "classnames", "utils/UUID", "core/BaseComponent", "velocity", "FontIcon"], function (module, React, ReactDOM, classnames, UUID, BaseComponent, velocity, FontIcon) {
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

    var NotificationPanel = function (_BaseComponent) {
        _inherits(NotificationPanel, _BaseComponent);

        function NotificationPanel(props) {
            _classCallCheck(this, NotificationPanel);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(NotificationPanel).call(this, props));
        }

        /**
         * 关闭消息
         * @return {[type]} [description]
         */


        _createClass(NotificationPanel, [{
            key: "close",
            value: function close() {
                var _this2 = this;

                if (!this._isMounted) {
                    return false;
                }
                var ele = ReactDOM.findDOMNode(this);
                velocity(ele, { height: 0, opacity: 0 }, { duration: 100, easing: 'linear', complete: function complete() {
                        _this2.props.parent.destroy(_this2.props.config.key);
                        if (_this2.props.config.onClose) {
                            _this2.props.config.onClose();
                        }
                    } });
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this3 = this;

                this._isMounted = true;
                var ele = ReactDOM.findDOMNode(this);
                var params = {};
                if (this.props.dock == "topRight" || this.props.dock == "bottomRight") {
                    params = { right: 0 };
                } else {
                    params = { left: 0 };
                }
                velocity(ele, params, { duration: 100, easing: 'linear' });

                if (this.props.config.duration) {
                    window.setTimeout(function () {
                        _this3.close();
                    }, this.props.config.duration * 1000);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props$config = this.props.config;
                var className = _props$config.className;
                var style = _props$config.style;
                var icon = _props$config.icon;
                var btn = _props$config.btn;

                className = classnames("cm-notification-item", className, {
                    "cm-notification-item-width-icon": icon
                });
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    React.createElement(
                        "a",
                        { className: "cm-notification-close", onClick: this.close.bind(this) },
                        "x"
                    ),
                    icon ? React.createElement(
                        "div",
                        { className: "cm-notification-icon" },
                        icon
                    ) : null,
                    React.createElement(
                        "div",
                        { className: "cm-notification-content" },
                        React.createElement(
                            "div",
                            { className: "cm-notification-head" },
                            this.props.config.title
                        ),
                        React.createElement(
                            "div",
                            { className: "cm-notification-body" },
                            this.props.config.desc
                        ),
                        btn ? React.createElement(
                            "span",
                            { className: "cm-notification-btn-wrap" },
                            btn
                        ) : null
                    )
                );
            }
        }]);

        return NotificationPanel;
    }(BaseComponent);

    var Notification = function (_BaseComponent2) {
        _inherits(Notification, _BaseComponent2);

        function Notification(props) {
            _classCallCheck(this, Notification);

            var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Notification).call(this, props));

            _this4.addState({
                configs: {}
            });

            _this4.panels = {};
            _this4.DOCK = {
                TOPRIGHT: "topRight",
                TOPLEFT: "topLeft",
                BOTTOMRIGHT: "bottomRight",
                BOTTOMLEFT: "bottomLeft"
            };
            return _this4;
        }

        /**
         * success 消息
         * @param  {[type]} config [description]
         * @return {[type]}        [description]
         */


        _createClass(Notification, [{
            key: "success",
            value: function success(config) {
                config.icon = React.createElement(FontIcon, { icon: "success", font: "cmui" });
                this.open(config);
            }
        }, {
            key: "info",
            value: function info(config) {
                config.icon = React.createElement(FontIcon, { icon: "info", font: "cmui" });
                this.open(config);
            }
        }, {
            key: "warning",
            value: function warning(config) {
                config.icon = React.createElement(FontIcon, { icon: "warning", font: "cmui" });
                this.open(config);
            }
        }, {
            key: "error",
            value: function error(config) {
                config.icon = React.createElement(FontIcon, { icon: "error", font: "cmui" });
                this.open(config);
            }
        }, {
            key: "question",
            value: function question(config) {
                config.icon = React.createElement(FontIcon, { icon: "question", font: "cmui" });
                this.open(config);
            }
        }, {
            key: "open",
            value: function open(config) {
                if (!config.dock) {
                    config.dock = "topRight";
                }
                if (config.key === undefined) {
                    config.key = UUID.v4();
                }
                if (config.duration === undefined) {
                    config.duration = 4.5;
                }

                var configs = this.state.configs;
                if (configs[config.key]) {
                    return false;
                }
                configs[config.key] = config;

                if (this._isMounted) {
                    this.setState({ configs: configs });
                }
            }
        }, {
            key: "close",
            value: function close(key) {
                var notification = this.getNotification(key);
                if (notification) {
                    notification.close();
                }
            }
        }, {
            key: "getNotification",
            value: function getNotification(key) {
                return this.panels[key];
            }
        }, {
            key: "destroy",
            value: function destroy(key) {
                var configs = this.state.configs;
                delete configs[key];
                delete this.panels[key];

                if (this._isMounted) {
                    this.setState({ configs: configs });
                }
            }
        }, {
            key: "renderPanels",
            value: function renderPanels() {
                var panels = [];
                var boxes = {
                    topRight: {},
                    topLeft: {},
                    bottomRight: {},
                    bottomLeft: {}
                };
                var configs = this.state.configs;
                for (var key in configs) {
                    var config = configs[key];
                    if (boxes[config.dock]) {
                        boxes[config.dock][key] = config;
                    }
                }

                var topRight = this.renderDockPanels(boxes.topRight, "topRight");
                panels.push(topRight);
                var topLeft = this.renderDockPanels(boxes.topLeft, "topLeft");
                panels.push(topLeft);
                var bottomRight = this.renderDockPanels(boxes.bottomRight, "bottomRight");
                panels.push(bottomRight);
                var bottomLeft = this.renderDockPanels(boxes.bottomLeft, "bottomLeft");
                panels.push(bottomLeft);

                return panels;
            }
        }, {
            key: "renderDockPanels",
            value: function renderDockPanels(configs, docker) {
                var _this5 = this;

                var panels = [];

                var _loop = function _loop(key) {
                    panels.push(React.createElement(NotificationPanel, { parent: _this5, ref: function ref(_ref) {
                            _this5.panels[key] = _ref;
                        }, key: key, config: configs[key] }));
                };

                for (var key in configs) {
                    _loop(key);
                }
                if (panels.length) {
                    return React.createElement(
                        "div",
                        { key: docker, className: "cm-notification-box cm-notification-" + docker },
                        panels
                    );
                } else {
                    return null;
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
            }
        }, {
            key: "render",
            value: function render() {

                var panels = this.renderPanels();

                return React.createElement(
                    "div",
                    { className: "cm-notification" },
                    panels
                );
            }
        }]);

        return Notification;
    }(BaseComponent);

    var container = document.createElement("div");
    document.body.appendChild(container);
    module.exports = ReactDOM.render(React.createElement(Notification, null), container);
});
