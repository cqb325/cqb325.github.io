define(["module", "react", "classnames", "core/BaseComponent"], function (module, React, classnames, BaseComponent) {
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

    var WaterSpin = function (_BaseComponent) {
        _inherits(WaterSpin, _BaseComponent);

        function WaterSpin(props) {
            _classCallCheck(this, WaterSpin);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WaterSpin).call(this, props));

            _this.addState({
                percent: parseFloat(props.percent) || 0,
                spinning: props.spinning || false
            });

            return _this;
        }

        /**
         * 设置百分比
         * @param percent
         */


        _createClass(WaterSpin, [{
            key: "setPercent",
            value: function setPercent(percent) {
                this.setState({ percent: percent });
                if (percent == 100) {
                    if (this.props.onFinish) {
                        this.props.onFinish();
                    }
                    this.emit("finish");
                }
            }
        }, {
            key: "getPercent",
            value: function getPercent() {
                return this.state.percent;
            }
        }, {
            key: "render",
            value: function render() {
                var top = 100 - this.state.percent + "%";
                var fontSize = this.props.size / 250 * 75;
                return React.createElement(
                    "div",
                    { className: "cm-water-spin-wrap", style: { width: this.props.size, height: this.props.size } },
                    React.createElement(
                        "div",
                        { className: "cm-water-spin-inner" },
                        React.createElement(
                            "div",
                            { className: "cm-water-spin-text", style: { fontSize: fontSize, lineHeight: this.props.size - 10 + "px" } },
                            this.state.percent + "%"
                        ),
                        React.createElement("div", { className: "cm-water-spin", style: { top: top } }),
                        React.createElement("div", { className: "cm-water-glare" })
                    )
                );
            }
        }]);

        return WaterSpin;
    }(BaseComponent);

    WaterSpin.defaultProps = {
        size: 250
    };

    module.exports.WaterSpin = WaterSpin;

    /**
     * SVGSpin 类
     * @class SVGSpin
     * @constructor
     * @extend BaseComponent
     */

    var SVGSpin = function (_BaseComponent2) {
        _inherits(SVGSpin, _BaseComponent2);

        function SVGSpin(props) {
            _classCallCheck(this, SVGSpin);

            var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(SVGSpin).call(this, props));

            _this2.addState({
                spinning: props.spinning || false
            });

            return _this2;
        }

        _createClass(SVGSpin, [{
            key: "show",
            value: function show() {
                this.setState({
                    spinning: true
                });
            }
        }, {
            key: "hide",
            value: function hide() {
                this.setState({
                    spinning: false
                });
            }
        }, {
            key: "renderSpin",
            value: function renderSpin() {
                if (this.state.spinning) {
                    return React.createElement(
                        "div",
                        { className: "cm-svg-spin-inner" },
                        React.createElement(
                            "div",
                            { className: "cm-svg-spin" },
                            React.createElement(
                                "svg",
                                { width: "32px", height: "32px", xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: "uil-gears" },
                                React.createElement("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none", className: "bk" }),
                                React.createElement(
                                    "g",
                                    { className: "cm-svg-spin-gear1" },
                                    React.createElement("path", { d: "M79.9,52.6C80,51.8,80,50.9,80,\r 50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,\r 35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,\r 27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,\r 5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,\r 1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,\r 6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,\r 6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,\r 1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,\r 80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z\r M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",
                                        fill: "#1f2d3d", transform: "rotate(27 50 50)" })
                                ),
                                React.createElement(
                                    "g",
                                    { className: "cm-svg-spin-gear2" },
                                    React.createElement("path", { d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,\r 35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,\r 20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,\r 4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,\r 0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,\r 4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,\r 4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z\r M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z", fill: "#20A0FF", transform: "rotate(63 50 50)" })
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "cm-svg-spin-text" },
                            this.props.title || "loading..."
                        )
                    );
                } else {
                    return null;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames(this.props.className, "cm-svg-spin-wrap");
                var containerClassName = classnames("cm-spin-container", {
                    "cm-svg-spin-blur": this.state.spinning
                });
                var spin = this.renderSpin();
                return React.createElement(
                    "div",
                    { className: className },
                    spin,
                    React.createElement(
                        "div",
                        { className: containerClassName },
                        this.props.children
                    )
                );
            }
        }]);

        return SVGSpin;
    }(BaseComponent);

    module.exports.SVGSpin = SVGSpin;

    var SpinMap = {
        mask: React.createElement(
            "span",
            null,
            React.createElement(
                "div",
                { className: "cm-mask cm-mask-top" },
                React.createElement("div", { className: "cm-mask-plane" })
            ),
            React.createElement(
                "div",
                { className: "cm-mask cm-mask-middle" },
                React.createElement("div", { className: "cm-mask-plane" })
            ),
            React.createElement(
                "div",
                { className: "cm-mask cm-mask-bottom" },
                React.createElement("div", { className: "cm-mask-plane" })
            )
        ),

        waves: React.createElement("div", { className: "cm-waves" })
    };

    /**
     * CssSpin 类
     * @class CssSpin
     * @constructor
     * @extend BaseComponent
     */

    var CssSpin = function (_BaseComponent3) {
        _inherits(CssSpin, _BaseComponent3);

        function CssSpin(props) {
            _classCallCheck(this, CssSpin);

            var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(CssSpin).call(this, props));

            _this3.addState({
                spinning: props.spinning || false
            });

            return _this3;
        }

        /**
         *
         */


        _createClass(CssSpin, [{
            key: "show",
            value: function show() {
                this.setState({
                    spinning: true
                });
            }
        }, {
            key: "hide",
            value: function hide() {
                this.setState({
                    spinning: false
                });
            }
        }, {
            key: "renderSpin",
            value: function renderSpin() {
                if (this.state.spinning) {
                    return React.createElement(
                        "div",
                        { className: "cm-spin-inner" },
                        React.createElement(
                            "div",
                            { className: "cm-spin" },
                            SpinMap[this.props.type]
                        ),
                        React.createElement(
                            "div",
                            { className: "cm-spin-text" },
                            this.props.title || "loading..."
                        )
                    );
                } else {
                    return null;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames(this.props.className, "cm-spin-wrap", _defineProperty({}, "cm-spin-" + this.props.type, this.props.type));
                var containerClassName = classnames("cm-container", {
                    "cm-spin-blur": this.state.spinning
                });
                var spin = this.renderSpin();
                return React.createElement(
                    "div",
                    { className: className },
                    spin,
                    React.createElement(
                        "div",
                        { className: containerClassName },
                        this.props.children
                    )
                );
            }
        }]);

        return CssSpin;
    }(BaseComponent);

    module.exports.CssSpin = CssSpin;
});
