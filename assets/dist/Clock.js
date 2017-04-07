define(["module", "react", "classnames", "moment", "core/BaseComponent"], function (module, React, classnames, moment, BaseComponent) {
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

    var Clock = function (_BaseComponent) {
        _inherits(Clock, _BaseComponent);

        function Clock(props) {
            _classCallCheck(this, Clock);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Clock).call(this, props));

            var current = props.value ? moment(props.value) : "";
            if (current === "") {
                current = moment();
                current.set("hour", 0);
                current.set("minute", 0);
                current.set("second", 0);
            }

            _this.state = {
                current: current
            };
            return _this;
        }

        _createClass(Clock, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.value !== this.props.value) {
                    this.setState({ current: moment(nextProps.value) });
                }
            }
        }, {
            key: "_renderNumbers",
            value: function _renderNumbers() {
                var ret = [];
                var radius = 130;
                var r = Math.PI / 6;
                for (var i = 1; i <= 12; i++) {
                    var x = Math.sin(r * i);
                    var y = Math.cos(r * i);
                    var fx = 8 / radius / 2;
                    var fy = 8 / radius / 2;
                    var style = {
                        left: radius * (0.5 + x / 2 - fx) + "px",
                        top: radius * (0.5 - y / 2 - fy) + "px"
                    };
                    ret.push(React.createElement(
                        "span",
                        { key: i, style: style },
                        i
                    ));
                }

                return ret;
            }
        }, {
            key: "_renderHands",
            value: function _renderHands() {
                var current = this.state.current,
                    hour = current.get("hour"),
                    minute = current.get("minute"),
                    second = current.get("second");
                var sr = -90 + 6 * second;
                var mr = -90 + 6 * (minute + second / 60);
                var hr = -90 + 30 * (hour + minute / 60 + second / 3600);

                var secondStyle = {
                    "transform": "rotateZ(" + sr + "deg)"
                };
                var minuteStyle = {
                    "transform": "rotateZ(" + mr + "deg)"
                };
                var hourStyle = {
                    "transform": "rotateZ(" + hr + "deg)"
                };
                if (this.isLtIE9()) {
                    this._calcFilter(sr, secondStyle, 52);
                    this._calcFilter(mr, minuteStyle, 42);
                    this._calcFilter(hr, hourStyle, 32);
                }
                return React.createElement(
                    "div",
                    { className: "click-hands" },
                    React.createElement("div", { className: "hourHand", style: hourStyle }),
                    React.createElement("div", { className: "minuteHand", style: minuteStyle }),
                    React.createElement("div", { className: "secondHand", style: secondStyle })
                );
            }
        }, {
            key: "_calcFilter",
            value: function _calcFilter(deg, style, width) {
                var rad = deg * (Math.PI / 180);
                var m11 = Math.cos(rad),
                    m12 = -1 * Math.sin(rad),
                    m21 = Math.sin(rad),
                    m22 = m11;

                var dx = m11,
                    dy = m21;
                if (deg > 270) {
                    deg = deg - 360;
                }
                if (deg < 0 && deg >= -90) {
                    dx = 0;
                    dy = m21 * width;
                } else if (deg >= 0 && deg <= 90) {
                    dx = -8 * m11;
                    dy = -m21 * 2;
                } else if (deg > 90 && deg <= 180) {
                    dx = width * m11;
                    dy = -1;
                } else if (deg > 180 && deg <= 270) {
                    dx = width * m11;
                    dy = m21 * width;
                }
                style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + m11 + ",M12=" + m12 + ",M21=" + m21 + ",M22=" + m22 + ",SizingMethod='auto expand')";
                style["marginTop"] = dy + "px";
                style["marginLeft"] = dx + "px";
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                var d = { time: value };
                if (this.props.onChange) {
                    this.props.onChange(d);
                }
            }
        }, {
            key: "close",
            value: function close() {
                if (this.props.onTimeClose) {
                    this.props.onTimeClose();
                }
            }
        }, {
            key: "addHour",
            value: function addHour() {
                var current = this.state.current;
                current.add(1, "hour");

                this.setValue(current);
            }
        }, {
            key: "subHour",
            value: function subHour() {
                var current = this.state.current;
                current.add(-1, "hour");

                this.setValue(current);
            }
        }, {
            key: "addMinute",
            value: function addMinute() {
                var current = this.state.current;
                current.add(1, "minute");

                this.setValue(current);
            }
        }, {
            key: "subMinute",
            value: function subMinute() {
                var current = this.state.current;
                current.add(-1, "minute");

                this.setValue(current);
            }
        }, {
            key: "addSecond",
            value: function addSecond() {
                var current = this.state.current;
                current.add(1, "second");

                this.setValue(current);
            }
        }, {
            key: "subSecond",
            value: function subSecond() {
                var current = this.state.current;
                current.add(-1, "second");

                this.setValue(current);
            }
        }, {
            key: "getTime",
            value: function getTime() {
                return this.state.current.format("HH:mm:ss");
            }
        }, {
            key: "render",
            value: function render() {
                var nums = this._renderNumbers();
                var hands = this._renderHands();
                var current = this.state.current;
                var hour = current.get("hour");
                var minute = current.get("minute");
                var second = current.get("second");

                var close = this.props.view === "time" ? "" : React.createElement(
                    "div",
                    { className: "clock-close", onClick: this.close.bind(this) },
                    React.createElement(
                        "span",
                        { className: "fa-stack text-center" },
                        React.createElement("i", { className: "fa fa-circle-o fa-stack-2x" }),
                        React.createElement("i", { className: "fa fa-close fa-stack-1x" })
                    )
                );

                return React.createElement(
                    "div",
                    { className: "clock-container" },
                    close,
                    React.createElement(
                        "div",
                        { className: "clock-face" },
                        React.createElement(
                            "div",
                            { className: "clock-numbers" },
                            nums
                        ),
                        hands
                    ),
                    React.createElement(
                        "div",
                        { className: "spinners" },
                        React.createElement(
                            "div",
                            { className: "hourSpinner spinner" },
                            React.createElement(
                                "span",
                                { className: "spinner-value" },
                                hour
                            ),
                            React.createElement(
                                "span",
                                { className: "spinner-plus", onClick: this.addHour.bind(this) },
                                React.createElement("i", { className: "fa fa-angle-up" })
                            ),
                            React.createElement(
                                "span",
                                { className: "spinner-subs", onClick: this.subHour.bind(this) },
                                React.createElement("i", { className: "fa fa-angle-down" })
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "minuteSpinner spinner" },
                            React.createElement(
                                "span",
                                { className: "spinner-value" },
                                minute
                            ),
                            React.createElement(
                                "span",
                                { className: "spinner-plus", onClick: this.addMinute.bind(this) },
                                React.createElement("i", { className: "fa fa-angle-up" })
                            ),
                            React.createElement(
                                "span",
                                { className: "spinner-subs", onClick: this.subMinute.bind(this) },
                                React.createElement("i", { className: "fa fa-angle-down" })
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "secondSpinner spinner" },
                            React.createElement(
                                "span",
                                { className: "spinner-value" },
                                second
                            ),
                            React.createElement(
                                "span",
                                { className: "spinner-plus", onClick: this.addSecond.bind(this) },
                                React.createElement("i", { className: "fa fa-angle-up" })
                            ),
                            React.createElement(
                                "span",
                                { className: "spinner-subs", onClick: this.subSecond.bind(this) },
                                React.createElement("i", { className: "fa fa-angle-down" })
                            )
                        )
                    )
                );
            }
        }]);

        return Clock;
    }(BaseComponent);

    module.exports = Clock;
});
