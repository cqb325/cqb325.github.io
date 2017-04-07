define(["module", "react", "react-dom", "classnames", 'utils/Dom', 'utils/Events'], function (module, React, ReactDOM, classnames, Dom, Events) {
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

    var Popup = function (_React$Component) {
        _inherits(Popup, _React$Component);

        function Popup(props) {
            _classCallCheck(this, Popup);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this, props));

            _this.state = {
                visible: _this.props.visible,
                content: null
            };
            //距离目标的距离
            _this.gap = 5;
            _this.timer = null;
            _this.scrollElements = [];
            return _this;
        }

        _createClass(Popup, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.visible !== this.state.visible) {
                    this.setState({
                        visible: nextProps.visible
                    });
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
                var _this2 = this;

                this._isMounted = true;

                var flag = false;
                Events.on(window, "resize", function (e) {
                    if (!flag) {
                        flag = true;
                        if (_this2.timer) {
                            clearTimeout(_this2.timer);
                        }
                        _this2.timer = window.setTimeout(function () {
                            if (_this2.state.visible && _this2._isMounted) {
                                _this2.update(_this2.state.visible);
                            }
                            flag = false;
                        }, 100);
                    }
                });

                this.getScrollElements(this.props.baseEle);

                this.scrollElements.forEach(function (ele) {
                    Events.on(ele, "scroll", function (e) {
                        if (_this2.state.visible && _this2._isMounted) {
                            _this2.update(_this2.state.visible);
                        }
                    });
                });
            }
        }, {
            key: "update",
            value: function update(visible) {
                var tip = Dom.dom(ReactDOM.findDOMNode(this));
                if (visible) {
                    var base = Dom.dom(this.props.baseEle);
                    var baseOffset = base.offset();
                    var scroll = this.getScroll(this.props.baseEle);

                    var scrollTop = scroll.top;
                    var scrollLeft = scroll.left;
                    // if(this.props.offsetEle) {
                    //     scrollTop = Dom.query(this.props.offsetEle).scrollTop;
                    //     scrollLeft = Dom.query(this.props.offsetEle).scrollLeft;
                    // }

                    var style = {};
                    var baseWidth = base.width();
                    var baseHeight = base.height();

                    tip.show();
                    var tipWidth = tip.width();
                    var tipHeight = tip.height();

                    if (this.props.align === "top") {
                        style.left = baseOffset.left + baseWidth / 2 - tipWidth / 2;
                        style.top = baseOffset.top - tipHeight - this.gap;
                    }
                    if (this.props.align === "topRight") {
                        style.left = baseOffset.left - (tipWidth - baseWidth);
                        style.top = baseOffset.top - tipHeight - this.gap;
                    }
                    if (this.props.align === "topLeft") {
                        style.left = baseOffset.left;
                        style.top = baseOffset.top - tipHeight - this.gap;
                    }

                    if (this.props.align === "bottom") {
                        style.left = baseOffset.left + baseWidth / 2 - tipWidth / 2;
                        style.top = baseOffset.top + baseHeight + this.gap;
                    }
                    if (this.props.align === "bottomRight") {
                        style.left = baseOffset.left - (tipWidth - baseWidth);
                        style.top = baseOffset.top + baseHeight + this.gap;
                    }
                    if (this.props.align === "bottomLeft") {
                        style.left = baseOffset.left;
                        style.top = baseOffset.top + baseHeight + this.gap;
                    }

                    if (this.props.align === "left") {
                        style.left = baseOffset.left - tipWidth - this.gap;
                        style.top = baseOffset.top + (baseHeight - tipHeight) / 2;
                    }
                    if (this.props.align === "leftTop") {
                        style.left = baseOffset.left - tipWidth - this.gap;
                        style.top = baseOffset.top;
                    }
                    if (this.props.align === "leftBottom") {
                        style.left = baseOffset.left - tipWidth - this.gap;
                        style.top = baseOffset.top - (tipHeight - baseHeight);
                    }

                    if (this.props.align === "right") {
                        style.left = baseOffset.left + baseWidth + this.gap;
                        style.top = baseOffset.top + (baseHeight - tipHeight) / 2;
                    }
                    if (this.props.align === "rightTop") {
                        style.left = baseOffset.left + baseWidth + this.gap;
                        style.top = baseOffset.top;
                    }
                    if (this.props.align === "rightBottom") {
                        style.left = baseOffset.left + baseWidth + this.gap;
                        style.top = baseOffset.top - (tipHeight - baseHeight);
                    }

                    style.top = style.top - scrollTop;
                    style.left = style.left - scrollLeft;

                    this.setState({
                        visible: visible,
                        style: style
                    });
                } else {
                    this.setState({
                        visible: visible
                    });

                    // window.setTimeout(()=>{
                    //     tip.hide();
                    // }, this.props.delay || 0);
                }

                if (this.props.onVisibleChange) {
                    this.props.onVisibleChange(visible);
                }
            }
        }, {
            key: "getScrollElements",
            value: function getScrollElements(ele) {
                var parent = ele.parentNode;

                while (parent !== null && parent.tagName !== "HTML") {
                    if (parent.scrollHeight > parent.offsetHeight && Dom.dom(parent).css("overflow") !== "hidden") {
                        this.scrollElements.push(parent);
                    }
                    parent = parent.parentNode;
                }
            }
        }, {
            key: "getScroll",
            value: function getScroll() {
                var top = 0,
                    left = 0;
                this.scrollElements.forEach(function (ele) {
                    top += ele.scrollTop;
                    left += ele.scrollLeft;
                });
                return {
                    top: top,
                    left: left
                };
            }
        }, {
            key: "setContent",
            value: function setContent(content) {
                this.setState({ content: content });
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames({
                    visible: this.state.visible
                }, this.props.extraProps ? this.props.extraProps.className : "", this.props.align);
                var style = _extends({}, this.props.extraProps.style, this.state.style);
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    this.state.content || this.props.children
                );
            }
        }]);

        return Popup;
    }(React.Component);

    module.exports = Popup;
});
