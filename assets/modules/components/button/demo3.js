define(["module", "react", "../BaseDemo", "Button", "ButtonGroup", "FontIcon", "../Code"], function (module, React, BaseDemo, Button, ButtonGroup, FontIcon, Code) {
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

    var Demo = function (_BaseDemo) {
        _inherits(Demo, _BaseDemo);

        function Demo() {
            _classCallCheck(this, Demo);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
        }

        _createClass(Demo, [{
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
                            null,
                            React.createElement(
                                ButtonGroup,
                                null,
                                React.createElement(
                                    Button,
                                    null,
                                    "Default"
                                ),
                                React.createElement(
                                    Button,
                                    null,
                                    "Default"
                                ),
                                React.createElement(
                                    Button,
                                    null,
                                    "Default"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(
                                ButtonGroup,
                                null,
                                React.createElement(Button, { theme: "primary", icon: "cloud" }),
                                React.createElement(Button, { theme: "primary", icon: "cloud" }),
                                React.createElement(Button, { theme: "primary", icon: "cloud" })
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(
                                ButtonGroup,
                                null,
                                React.createElement(
                                    Button,
                                    { theme: "primary", icon: "angle-left" },
                                    "Go back"
                                ),
                                React.createElement(
                                    Button,
                                    { theme: "primary", icon: "angle-right", iconAlign: "right" },
                                    "Go forward"
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
                            "按钮组"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "可以将多个 Button 放入 ButtonGroup 的容器中。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Button = require(\"Button\");\nconst ButtonGroup = require(\"ButtonGroup\");\n\nReactDOM.render(\n<div>\n    <div>\n        <ButtonGroup>\n            <Button>Default</Button>\n            <Button>Default</Button>\n            <Button>Default</Button>\n        </ButtonGroup>\n    </div>\n    <div className=\"mt-15\">\n        <ButtonGroup>\n            <Button theme=\"primary\" icon=\"cloud\"></Button>\n            <Button theme=\"primary\" icon=\"cloud\"></Button>\n            <Button theme=\"primary\" icon=\"cloud\"></Button>\n        </ButtonGroup>\n    </div>\n    <div className=\"mt-15\">\n        <ButtonGroup>\n            <Button theme=\"primary\" icon=\"angle-left\">Go back</Button>\n            <Button theme=\"primary\" icon=\"angle-right\" iconAlign=\"right\">Go forward</Button>\n        </ButtonGroup>\n    </div>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
