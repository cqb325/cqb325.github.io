define(["module", "react", 'react-dom', "classnames", 'Core', 'utils/Dom', 'utils/Events', "core/BaseComponent"], function (module, React, ReactDOM, classnames, Core, Dom, Events, BaseComponent) {
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

    var Tooltip = function (_BaseComponent) {
        _inherits(Tooltip, _BaseComponent);

        function Tooltip(props) {
            _classCallCheck(this, Tooltip);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).call(this, props));

            _this.addState({
                title: _this.props.title,
                content: _this.props.content
            });

            //鼠标移走后延迟隐藏
            _this.delay = _this.props.delay || 0;
            _this.offset = { x: 0, y: 0 };
            if (_this.props.offset) {
                _extends(_this.offset, _this.props.offset);
            }
            return _this;
        }

        _createClass(Tooltip, [{
            key: "_renderTitle",
            value: function _renderTitle() {
                if (this.state.title) {
                    return React.createElement(
                        "div",
                        { className: "cm-tooltip-tile" },
                        this.state.title
                    );
                } else {
                    return null;
                }
            }
        }, {
            key: "_renderContent",
            value: function _renderContent() {
                return React.createElement(
                    "div",
                    { className: "cm-tooltip-content" },
                    this.state.content || this.props.children
                );
            }
        }, {
            key: "bind",
            value: function bind(target) {
                var _this2 = this;

                if (!target) {
                    return false;
                }

                var targetEle = ReactDOM.findDOMNode(target);
                this._targetEle = targetEle;
                this._timer = null;
                var trigger = this.props.trigger || "hover";
                var showEvent = void 0,
                    hideEvent = void 0;
                this.status = "hide";
                if (trigger === "hover") {
                    showEvent = "mouseenter";
                    hideEvent = "mouseleave";
                } else if (trigger === "toggle") {
                    showEvent = "click";
                }
                Events.on(targetEle, showEvent, function (e) {
                    _this2.show(e, trigger);
                });
                Events.on(targetEle, hideEvent, function (e) {
                    //this.hide(e);
                });
            }
        }, {
            key: "getTarget",
            value: function getTarget() {
                return this._targetEle;
            }
        }, {
            key: "show",
            value: function show(e, trigger) {
                if (this.status === "hide") {
                    this.calculatePosition(e ? e.target || e.srcElement : this._targetEle);
                    var tip = Dom.dom(ReactDOM.findDOMNode(this));
                    tip.addClass("slide");
                    if (this._timer) {
                        clearTimeout(this._timer);
                    }
                    this.status = "show";
                } else {
                    if (e && trigger === "toggle" && this.status === "show") {
                        this.hide();
                    }
                }
            }
        }, {
            key: "hide",
            value: function hide(e) {
                var _this3 = this;

                if (this.status === "show" && this._isMounted) {
                    (function () {
                        var tip = Dom.dom(ReactDOM.findDOMNode(_this3));
                        _this3._timer = setTimeout(function () {
                            tip.removeClass("slide");
                            tip.hide();
                            _this3.status = "hide";
                        }, _this3.delay);
                    })();
                }
            }
        }, {
            key: "calculatePosition",
            value: function calculatePosition(ele) {
                var top = ele.offsetTop;
                var left = ele.offsetLeft;

                ele = Dom.dom(ele);
                var width = ele.width();
                var height = ele.height();

                var tip = ReactDOM.findDOMNode(this);

                if (tip.parentNode == ele[0] && Dom.css(ele[0], "position") === "relative") {
                    top = 0;
                    left = 0;
                }

                Dom.dom(tip).show();
                var tipWidth = Dom.dom(tip).width();
                var tipHeight = Dom.dom(tip).height();

                var align = this.props.align || "top";
                var css = {};
                var arrowLeft = 0,
                    arrowTop = 0;
                if (align === "top") {
                    css["top"] = top - tipHeight - 6 + this.offset.y + "px";
                    css["left"] = left + width / 2 - tipWidth / 2 + this.offset.x + "px";
                    arrowLeft = -this.offset.x - 6;
                }
                if (align === "bottom") {
                    css["top"] = top + height + 6 + this.offset.y + "px";
                    css["left"] = left + width / 2 - tipWidth / 2 + this.offset.x + "px";
                    arrowLeft = -this.offset.x - 6;
                }

                if (align === "left") {
                    css["top"] = top + height / 2 - tipHeight / 2 + this.offset.y + "px";
                    css["left"] = left - tipWidth - 6 + "px";
                    arrowTop = -this.offset.y - 6;
                }

                if (align === "right") {
                    css["top"] = top + height / 2 - tipHeight / 2 + this.offset.y + "px";
                    css["left"] = left + width + 6 + this.offset.x + "px";
                    arrowTop = -this.offset.y - 6;
                }

                var style = document.createElement("style");
                document.head.appendChild(style);
                var sheet = style.sheet;

                if (sheet.addRule) {
                    sheet.addRule('.cm-tooltip.' + this.state.theme + '.' + align + ':before', 'margin-left: ' + arrowLeft + 'px;margin-top:' + arrowTop + 'px'); // 兼容IE浏览器
                }
                if (sheet.insertRule) {
                    sheet.insertRule('.cm-tooltip.' + this.state.theme + '.' + align + ':before{margin-left: ' + arrowLeft + 'px; margin-top:' + arrowTop + 'px}', 0); // 支持非IE的现代浏览器
                }

                Dom.dom(tip).css(css);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
                if (this.props.bindTarget) {
                    this.bind(this.props.bindTarget);
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames("cm-tooltip", className, this.state.theme, this.props.align);

                var title = this._renderTitle();
                var contents = this._renderContent();
                return React.createElement(
                    "div",
                    { className: className },
                    React.createElement(
                        "div",
                        { className: "cm-tooltip-body" },
                        React.createElement("div", { className: "cm-tooltip-arrow" }),
                        React.createElement(
                            "div",
                            { className: "cm-tooltip-inner" },
                            title,
                            contents
                        )
                    )
                );
            }
        }]);

        return Tooltip;
    }(BaseComponent);

    module.exports = Tooltip;
});
