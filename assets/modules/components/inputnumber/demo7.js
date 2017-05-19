define(["module", "react", "../BaseDemo", "Button", "InputNumber", "FontIcon", "../Code"], function (module, React, BaseDemo, Button, InputNumber, FontIcon, Code) {
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
                disabled: true
            };
            return _this;
        }

        _createClass(Demo, [{
            key: "toggleDisable",
            value: function toggleDisable() {
                if (this.state.disabled) {
                    this.refs.inputNumber.enable();
                    this.setState({ disabled: false });
                } else {
                    this.refs.inputNumber.disable();
                    this.setState({ disabled: true });
                }
            }
        }, {
            key: "setMax",
            value: function setMax() {
                this.refs.inputNumber.setMax(50);
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
                        React.createElement(InputNumber, { className: "mb-5", min: "0", value: "100", max: "100", ref: "inputNumber",
                            formatter: function formatter(value) {
                                return value + "%";
                            },
                            parser: function parser(value) {
                                return value.replace('%', '');
                            },
                            disabled: true
                        }),
                        React.createElement("br", null),
                        React.createElement(
                            Button,
                            { onClick: this.toggleDisable.bind(this) },
                            this.state.disabled ? "激活" : "禁用"
                        ),
                        React.createElement(
                            Button,
                            { className: "ml-5", onClick: this.setMax.bind(this) },
                            "设置最大值"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "formatter和parser"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "theme支持 primary 、success、 warning、 danger",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst InputNumber = require(\"InputNumber\");\n\ntoggleDisable(){\n    if(this.state.disabled){\n        this.refs.inputNumber.enable();\n        this.setState({disabled: false});\n    }else{\n        this.refs.inputNumber.disable();\n        this.setState({disabled: true});\n    }\n}\n\nsetMax(){\n    this.refs.inputNumber.setMax(50);\n}\n\nReactDOM.render(\n<div>\n    <InputNumber className=\"mb-5\" min=\"0\" value=\"100\" max=\"100\" ref=\"inputNumber\"\n        formatter={(value)=>`${value}%`}\n        parser={(value)=>value.replace('%', '')}\n        disabled\n    /><br/>\n\n    <Button onClick={this.toggleDisable.bind(this)}>{this.state.disabled ? \"激活\" : \"禁用\"}</Button>\n    <Button className=\"ml-5\" onClick={this.setMax.bind(this)}>设置最大值</Button>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
