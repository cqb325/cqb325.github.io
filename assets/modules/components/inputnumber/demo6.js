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

        function Demo() {
            _classCallCheck(this, Demo);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
        }

        _createClass(Demo, [{
            key: "onChange",
            value: function onChange(value) {
                console.log(value);
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
                        React.createElement(InputNumber, { className: "mb-5", min: "0", value: "100", max: "100",
                            formatter: function formatter(value) {
                                return value + "%";
                            },
                            parser: function parser(value) {
                                return value.replace('%', '');
                            },
                            onChange: this.onChange.bind(this)
                        }),
                        React.createElement("br", null),
                        React.createElement(InputNumber, {
                            value: 1000,
                            formatter: function formatter(value) {
                                return "$ " + value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                            },
                            parser: function parser(value) {
                                return value.replace(/\$\s?|(,*)/g, '');
                            }
                        })
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
                            "\nconst InputNumber = require(\"InputNumber\");\n\nonChange(value){\n    console.log(value);\n}\n\nReactDOM.render(\n<div>\n    <InputNumber className=\"mb-5\" min=\"0\" value=\"100\" max=\"100\"\n        formatter={(value)=>`${value}%`}\n        parser={(value)=>value.replace('%', '')}\n        onChange={this.onChange.bind(this)}\n    /><br/>\n\n    <InputNumber\n      value={1000}\n      formatter={value => `$ ${value.replace(/B(?=(d{3})+(?!d))/g, ',')}`}\n      parser={value => value.replace(/$s?|(,*)/g, '')}\n    />\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
