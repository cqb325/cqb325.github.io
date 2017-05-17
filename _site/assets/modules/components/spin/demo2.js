define(["module", "react", "../BaseDemo", "Spin", "Switch", "../Code", "FontIcon"], function (module, React, BaseDemo, Spin, Switch, Code, FontIcon) {
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

    var SVGSpin = Spin.SVGSpin;

    var Demo = function (_BaseDemo) {
        _inherits(Demo, _BaseDemo);

        function Demo() {
            _classCallCheck(this, Demo);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
        }

        _createClass(Demo, [{
            key: "switchSpin",
            value: function switchSpin(value) {

                if (!value) {
                    this.refs.spin.show();
                } else {
                    this.refs.spin.hide();
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
                            SVGSpin,
                            { ref: "spin" },
                            React.createElement(
                                "div",
                                { style: { height: 100, position: "relative", backgroundColor: "#ecf6fd", border: "1px solid #d2eafb", textAlian: "center" } },
                                React.createElement(
                                    "strong",
                                    null,
                                    "Alert message title"
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "Further details about the context of this alert."
                                )
                            )
                        ),
                        React.createElement(Switch, { className: "mt-20", theme: "primary", value: 1, onChange: this.switchSpin.bind(this) })
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "齿轮状svg Spin"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "齿轮状Spin",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Spin = require(\"Spin\");\nconst SVGSpin = Spin.SVGSpin;\nconst Switch = require(\"Switch\");\n\nReactDOM.render(\n<div>\n    <SVGSpin ref=\"spin\">\n        <div style={{height: 100, position: \"relative\", backgroundColor: \"#ecf6fd\", border: \"1px solid #d2eafb\", textAlian: \"center\"}}>\n            <strong>Alert message title</strong>\n            <p>Further details about the context of this alert.</p>\n        </div>\n    </SVGSpin>\n\n    <Switch className=\"mt-20\" theme=\"primary\" value={1} onChange={this.switchSpin.bind(this)}></Switch>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
