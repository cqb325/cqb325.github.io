define(["module", "react", "../BaseDemo", "Spin", "ButtonGroup", "Button", "../Code", "FontIcon"], function (module, React, BaseDemo, Spin, ButtonGroup, Button, Code, FontIcon) {
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

    var WaterSpin = Spin.WaterSpin;
    var SVGSpin = Spin.SVGSpin;
    var CssSpin = Spin.CssSpin;

    var Demo = function (_BaseDemo) {
        _inherits(Demo, _BaseDemo);

        function Demo() {
            _classCallCheck(this, Demo);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
        }

        _createClass(Demo, [{
            key: "plus",
            value: function plus() {
                var percent = this.refs.waterSpin.getPercent();
                if (percent < 100) {
                    this.refs.waterSpin.setPercent(percent + 10);
                }
            }
        }, {
            key: "subtract",
            value: function subtract() {
                var percent = this.refs.waterSpin.getPercent();
                if (percent > 0) {
                    this.refs.waterSpin.setPercent(percent - 10);
                }
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(
                            "div",
                            { style: { background: "#1d1f20", padding: 30 } },
                            React.createElement(WaterSpin, { ref: "waterSpin", size: 150, percent: "50" }),
                            React.createElement(
                                ButtonGroup,
                                { className: "mt-20" },
                                React.createElement(
                                    Button,
                                    { theme: "primary", onClick: this.subtract.bind(this) },
                                    "-"
                                ),
                                React.createElement(
                                    Button,
                                    { theme: "primary", onClick: this.plus.bind(this) },
                                    "+"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "水波状"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "水波状Spin",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Spin = require(\"Spin\");\nconst WaterSpin = Spin.WaterSpin;\nconst ButtonGroup = require(\"ButtonGroup\");\nconst Button = require(\"Button\");\n\nReactDOM.render(\n<div>\n    <div style={{background: \"#1d1f20\"}}>\n        <WaterSpin ref=\"waterSpin\" size={150} percent=\"50\"></WaterSpin>\n        <ButtonGroup>\n            <Button theme=\"primary\" onClick={this.subtract.bind(this)}>-</Button>\n            <Button theme=\"primary\" onClick={this.plus.bind(this)}>+</Button>\n        </ButtonGroup>\n    </div>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
