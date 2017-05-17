define(["module", "react", "react-dom", "classnames", "utils/Dom", "velocity", "core/BaseComponent"], function (module, React, ReactDOM, classnames, Dom, velocity, BaseComponent) {
    "use strict";

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

    var Slick = function (_BaseComponent) {
        _inherits(Slick, _BaseComponent);

        function Slick(props) {
            _classCallCheck(this, Slick);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Slick).call(this, props));

            _this.addState({
                current: props.current,
                layout: props.layout,
                autoPlay: props.autoPlay,
                effect: props.effect
            });

            _this.dots = null;

            _this._width = 0, _this._height = 0;
            _this._stack = null;
            _this._lastActiveIndex = 0;
            return _this;
        }

        _createClass(Slick, [{
            key: "getActive",
            value: function getActive() {
                return this.state.current;
            }
        }, {
            key: "jumpTo",
            value: function jumpTo(index, callback) {
                callback = callback ? callback : function () {};
                if (this._isMounted) {
                    this.setState({
                        current: index
                    });
                }

                if (this.props.onShow) {
                    this.props.onShow(index);
                }

                this.emit("show", index);

                if (this.props.effect === "slide") {
                    this.slide(index, callback);
                } else if (this.props.effect === "fade") {
                    this.fade(index, callback);
                } else {
                    this.slideNormal(index, callback);
                }

                this._lastActiveIndex = index;
            }
        }, {
            key: "fade",
            value: function fade(index, callback) {
                var _this2 = this;

                var ele = Dom.dom(ReactDOM.findDOMNode(this));
                var items = Dom.dom(Dom.queryAll(".cm-slick-item", ele[0]));
                if (this._lastActiveIndex != index) {
                    velocity(items[this._lastActiveIndex], "fadeOut", { duration: 300 });
                    velocity(items[index], "fadeIn", { duration: 300, complete: function complete(elements) {
                            callback(index);
                            if (_this2.props.onShown) {
                                _this2.props.onShown(index);
                            }
                            _this2.emit("shown", index);
                        } });
                }
            }
        }, {
            key: "slide",
            value: function slide(index, callback) {
                var _this3 = this;

                if (this.props.layout === "vertical") {
                    var top = -this._height * index;
                    velocity(this._stack[0], { top: top }, { duration: 300, complete: function complete(elements) {
                            callback(index);
                            if (_this3.props.onShown) {
                                _this3.props.onShown(index);
                            }
                            _this3.emit("shown", index);
                        } });
                } else {
                    var left = -this._width * index;
                    velocity(this._stack[0], { left: left }, { duration: 300, complete: function complete(elements) {
                            callback(index);
                            if (_this3.props.onShown) {
                                _this3.props.onShown(index);
                            }
                            _this3.emit("shown", index);
                        } });
                }
            }
        }, {
            key: "slideNormal",
            value: function slideNormal(index, callback) {
                if (this.props.layout === "vertical") {
                    var top = -this._height * index;
                    this._stack.css({
                        top: top + "px"
                    });
                } else {
                    var left = -this._width * index;
                    this._stack.css({
                        left: left + "px"
                    });
                }
                callback(index);
                if (this.props.onShown) {
                    this.props.onShown(index);
                }
                this.emit("shown", index);
            }
        }, {
            key: "slideNormalSilent",
            value: function slideNormalSilent(index) {
                if (this.props.layout === "vertical") {
                    var top = -this._height * index;
                    this._stack.css({
                        top: top + "px"
                    });
                } else {
                    var left = -this._width * index;
                    this._stack.css({
                        left: left + "px"
                    });
                }
            }
        }, {
            key: "renderChildren",
            value: function renderChildren() {
                var _this4 = this;

                this.dots = [];
                var cildren = this.props.children;
                return React.Children.map(cildren, function (child, index) {
                    var active = _this4.state.current === index;
                    if (child.props.name === "Slick.Item") {
                        var props = child.props;
                        props = _extends({}, props, {
                            index: index,
                            active: active,
                            parent: _this4
                        });
                        _this4.dots.push(React.createElement(
                            "li",
                            { key: index, className: active ? "cm-click-dot-active" : "", onClick: _this4.jumpTo.bind(_this4, index, null) },
                            React.createElement(
                                "button",
                                null,
                                index
                            )
                        ));
                        return React.cloneElement(child, props);
                    } else {
                        return child;
                    }
                });
            }
        }, {
            key: "setLastToFirst",
            value: function setLastToFirst(last) {
                if (this.props.layout === "vertical") {
                    last.css({
                        position: "absolute",
                        top: -this._height + "px",
                        left: 0
                    });
                } else {
                    last.css({
                        position: "absolute",
                        left: -this._width + "px",
                        top: 0
                    });
                }
            }
        }, {
            key: "resetLastStyle",
            value: function resetLastStyle(last) {
                last.css({
                    position: "static",
                    top: "auto",
                    left: "auto"
                });
            }
        }, {
            key: "play",
            value: function play() {
                var _this5 = this;

                var ele = Dom.dom(ReactDOM.findDOMNode(this));
                var items = Dom.dom(Dom.queryAll(".cm-slick-item", ele[0]));

                window.setInterval(function () {
                    var current = _this5.state.current;
                    if (_this5.props.effect === "slide" && current == _this5.dots.length - 1) {
                        var last = items.last();
                        _this5.setLastToFirst(last);
                        _this5.slideNormalSilent(-1);
                    }
                    current = (_this5.state.current + 1) % _this5.dots.length;

                    _this5.jumpTo(current, function () {
                        if (_this5.props.effect === "slide" && current == 0) {
                            var _last = items.last();
                            _this5.resetLastStyle(_last);
                        }
                    });
                }, this.props.delay);
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
                var ele = Dom.dom(ReactDOM.findDOMNode(this));
                this._width = ele.width();
                this._height = ele.height();
                var length = this.dots.length;
                var totalWidth = this._width * length;
                var totalHeight = this._height * length;

                this._stack = Dom.dom(Dom.query(".cm-slick-stack", ele[0]));
                var items = Dom.dom(Dom.queryAll(".cm-slick-item", ele[0]));
                if (this.props.effect === "fade") {
                    this._stack.css("height", "100%");
                    this._stack.css("width", "100%");
                    items.css({
                        position: "absolute",
                        left: 0,
                        top: 0,
                        opacity: 0,
                        height: "100%",
                        width: "100%"
                    });
                    items.at(this._lastActiveIndex).css({
                        opacity: 1
                    });
                } else {
                    if (this.props.layout === "vertical") {
                        this._stack.css("height", totalHeight + "px");
                        this._stack.css("width", "100%");
                        items.css({
                            height: this._height + "px",
                            width: "100%"
                        });
                    } else {
                        this._stack.css("width", totalWidth + "px");
                        this._stack.css("height", "100%");
                        items.css({
                            width: this._width + "px",
                            height: "100%"
                        });
                    }
                }

                if (this.state.autoPlay) {
                    this.play();
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;
                var layout = _props.layout;


                className = classnames(className, "cm-slick", _defineProperty({}, "cm-slick-" + layout, layout));
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    React.createElement(
                        "div",
                        { className: "cm-slick-slider" },
                        React.createElement(
                            "div",
                            { className: "cm-slick-list" },
                            React.createElement(
                                "div",
                                { className: "cm-slick-stack" },
                                this.renderChildren()
                            )
                        ),
                        React.createElement(
                            "ul",
                            { className: "cm-slick-dots" },
                            this.dots
                        )
                    )
                );
            }
        }]);

        return Slick;
    }(BaseComponent);

    /**
     * 默认属性
     * @type {{current: number, align: string, autoPlay: boolean}}
     */
    Slick.defaultProps = {
        current: 0,
        layout: "horizontal",
        autoPlay: false,
        delay: 3000
    };

    /**
     * Slick.Item 类
     * @class Slick.Item
     * @constructor
     * @extend BaseComponent
     */

    var Item = function (_BaseComponent2) {
        _inherits(Item, _BaseComponent2);

        function Item(props) {
            _classCallCheck(this, Item);

            var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));

            _this6.addState({});
            return _this6;
        }

        // componentWillReceiveProps(nextProps){
        //     if(nextProps.active !== this.state.active){
        //         this.setState({
        //             active: nextProps.current
        //         })
        //     }
        // }

        _createClass(Item, [{
            key: "render",
            value: function render() {
                var className = classnames(this.props.className, "cm-slick-item", {
                    "cm-slick-active": this.props.active
                });
                return React.createElement(
                    "div",
                    { className: className },
                    this.props.children
                );
            }
        }]);

        return Item;
    }(BaseComponent);

    Item.defaultProps = {
        name: "Slick.Item"
    };

    Slick.Item = Item;

    module.exports = Slick;
});
