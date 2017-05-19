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
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(InputNumber, { className: "mb-5", min: 10, max: 20, value: 15.5, step: 0.1, size: "small", theme: "primary" }),
                        React.createElement("br", null),
                        React.createElement(InputNumber, { className: "mb-5", min: 10, max: 20, value: 15.5, step: 0.1, size: "small", theme: "success" }),
                        React.createElement("br", null),
                        React.createElement(InputNumber, { className: "mb-5", min: 10, max: 20, value: 15.5, step: 0.1, size: "small", theme: "warning" }),
                        React.createElement("br", null),
                        React.createElement(InputNumber, { className: "mb-5", min: 10, max: 20, value: 15.5, step: 0.1, size: "small", theme: "danger" }),
                        React.createElement("br", null),
                        React.createElement(InputNumber, { className: "mb-5", min: 10, max: 20, value: 15.5, step: 0.1, size: "small" }),
                        React.createElement("br", null)
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "theme"
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
                            "\nconst InputNumber = require(\"InputNumber\");\n\nReactDOM.render(\n<div>\n    <InputNumber className=\"mb-5\" min={10} max={20} value={15.5} step={0.1} size=\"small\" theme=\"primary\"></InputNumber><br/>\n    <InputNumber className=\"mb-5\" min={10} max={20} value={15.5} step={0.1} size=\"small\" theme=\"success\"></InputNumber><br/>\n    <InputNumber className=\"mb-5\" min={10} max={20} value={15.5} step={0.1} size=\"small\" theme=\"warning\"></InputNumber><br/>\n    <InputNumber className=\"mb-5\" min={10} max={20} value={15.5} step={0.1} size=\"small\" theme=\"danger\"></InputNumber><br/>\n    <InputNumber className=\"mb-5\" min={10} max={20} value={15.5} step={0.1} size=\"small\"></InputNumber><br/>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
