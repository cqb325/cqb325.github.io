define(["module", "react", "react-dom", "../BaseDemo", "Button", "FontIcon", "../Code"], function (module, React, ReactDOM, BaseDemo, Button, FontIcon, Code) {
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
                                Button,
                                { theme: "default", className: "mr-5" },
                                "Default"
                            ),
                            React.createElement(
                                Button,
                                { theme: "primary", className: "mr-5" },
                                "Primary"
                            ),
                            React.createElement(
                                Button,
                                { theme: "success", className: "mr-5" },
                                "Success"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(
                                Button,
                                { theme: "default", size: "large", className: "mr-5" },
                                "Default"
                            ),
                            React.createElement(
                                Button,
                                { theme: "primary", size: "large", className: "mr-5" },
                                "Primary"
                            ),
                            React.createElement(
                                Button,
                                { theme: "success", size: "large", className: "mr-5" },
                                "Success"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-15" },
                            React.createElement(
                                Button,
                                { theme: "default", size: "small", className: "mr-5" },
                                "Default"
                            ),
                            React.createElement(
                                Button,
                                { theme: "primary", size: "small", className: "mr-5" },
                                "Primary"
                            ),
                            React.createElement(
                                Button,
                                { theme: "success", size: "small", className: "mr-5" },
                                "Success"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "按钮尺寸"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "按钮有大、中、小三种尺寸。 通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Button = require(\"Button\");\n\nReactDOM.render(\n<div>\n    <div>\n        <Button theme=\"default\" className=\"mr-5\">Default</Button>\n        <Button theme=\"primary\" className=\"mr-5\">Primary</Button>\n        <Button theme=\"success\" className=\"mr-5\">Success</Button>\n    </div>\n    <div className=\"mt-15\">\n        <Button theme=\"default\" size=\"large\" className=\"mr-5\">Default</Button>\n        <Button theme=\"primary\" size=\"large\" className=\"mr-5\">Primary</Button>\n        <Button theme=\"success\" size=\"large\" className=\"mr-5\">Success</Button>\n    </div>\n    <div className=\"mt-15\">\n        <Button theme=\"default\" size=\"small\" className=\"mr-5\">Default</Button>\n        <Button theme=\"primary\" size=\"small\" className=\"mr-5\">Primary</Button>\n        <Button theme=\"success\" size=\"small\" className=\"mr-5\">Success</Button>\n    </div>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
