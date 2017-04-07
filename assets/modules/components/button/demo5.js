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

        function Demo(props) {
            _classCallCheck(this, Demo);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));

            _this.state = {
                size: "default"
            };
            return _this;
        }

        _createClass(Demo, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                this.refs.btnGroup.on("select", function (btn) {
                    var size = btn.props["data-size"];
                    _this2.setState({
                        size: size
                    });
                });
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
                            null,
                            React.createElement(
                                ButtonGroup,
                                { ref: "btnGroup" },
                                React.createElement(
                                    Button,
                                    { theme: "primary", "data-size": "small" },
                                    "Small"
                                ),
                                React.createElement(
                                    Button,
                                    { theme: "primary", active: true, "data-size": "default" },
                                    "Default"
                                ),
                                React.createElement(
                                    Button,
                                    { theme: "primary", "data-size": "large" },
                                    "Large"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(Button, { theme: "primary", size: this.state.size, icon: "cloud" }),
                            React.createElement(
                                Button,
                                { theme: "primary", size: this.state.size, raised: true, className: "ml-10" },
                                "Raised"
                            ),
                            React.createElement(
                                Button,
                                { theme: "primary", size: this.state.size, raised: true, icon: "download", className: "ml-10" },
                                "Download"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "按钮组合事件"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "ButtonGroup可以添加onSelect事件，也接受on(\"select\")事件监听 事件回调包含一个Button类型的参数，为当前选中的Button。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Button = require(\"Button\");\nconst ButtonGroup = require(\"ButtonGroup\");\n\nclass Demo extends BaseDemo{\n\n    constructor(props){\n        super(props);\n\n        this.state = {\n            size: \"default\"\n        }\n    }\n\n    componentDidMount(){\n        this.refs.btnGroup.on(\"select\", (btn)=>{\n            let size = btn.props[\"data-size\"];\n            this.setState({\n                size: size\n            });\n        });\n    }\n\n    render(){\n        <div>\n            <div>\n                <ButtonGroup ref=\"btnGroup\">\n                    <Button theme=\"primary\" data-size=\"small\">Small</Button>\n                    <Button theme=\"primary\" active={true} data-size=\"default\">Default</Button>\n                    <Button theme=\"primary\" data-size=\"large\">Large</Button>\n                </ButtonGroup>\n            </div>\n            <div className=\"mt-15\">\n                <Button theme=\"primary\" size={this.state.size} icon=\"cloud\"></Button>\n                <Button theme=\"primary\" size={this.state.size} raised={true} className=\"ml-10\">Raised</Button>\n                <Button theme=\"primary\" size={this.state.size} raised={true} icon=\"download\" className=\"ml-10\">Download</Button>\n            </div>\n        </div>\n    }\n}\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
