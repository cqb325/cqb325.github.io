define(["module", "react", "../BaseDemo", "FontIcon", "Progress", "Button", 'ButtonGroup', "../Code"], function (module, React, BaseDemo, FontIcon, Progress, Button, ButtonGroup, Code) {
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
            key: "substract",
            value: function substract() {
                var progress = this.refs.progress;
                var max = progress.getMax();
                var current = progress.getValue();
                if (current - 10 <= max) {
                    progress.update(current - 10);
                }
            }
        }, {
            key: "plus",
            value: function plus() {
                var progress = this.refs.progress;
                var max = progress.getMax();
                var current = progress.getValue();
                if (current + 10 <= max) {
                    progress.update(current + 10);
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
                        React.createElement(Progress, { value: 0, ref: "progress", type: "circle", className: "mr-20" }),
                        React.createElement(
                            ButtonGroup,
                            null,
                            React.createElement(
                                Button,
                                { onClick: this.substract.bind(this) },
                                "-"
                            ),
                            React.createElement(
                                Button,
                                { onClick: this.plus.bind(this) },
                                "+"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "动态效果"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "动态效果",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst React = require(\"react\");\nconst BaseDemo = require(\"../BaseDemo\");\nconst Progress = require(\"Progress\");\nconst Button = require(\"Button\");\nconst ButtonGroup = require('ButtonGroup');\n\nclass Demo extends BaseDemo{\n\n    substract(){\n        let progress = this.refs.progress;\n        let max = progress.getMax();\n        let current = progress.getValue();\n        if(current - 10 <= max) {\n            progress.update(current - 10);\n        }\n    }\n\n    plus(){\n        let progress = this.refs.progress;\n        let max = progress.getMax();\n        let current = progress.getValue();\n        if(current + 10 <= max) {\n            progress.update(current + 10);\n        }\n    }\n\n    render(){\n        return (\n            <div>\n                <div className=\"code-box-demo\">\n                    <Progress value={0} ref=\"progress\" type=\"circle\" className=\"mr-20\"></Progress>\n                    <ButtonGroup>\n                        <Button onClick={this.substract.bind(this)}>-</Button>\n                        <Button onClick={this.plus.bind(this)}>+</Button>\n                    </ButtonGroup>\n                </div>\n            </div>\n            );\n    }\n}\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
