define(["module", "react", "../BaseDemo", "Button", "Notification", "FontIcon", "../Code", "Select"], function (module, React, BaseDemo, Button, notification, FontIcon, Code, Select) {
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
            key: "openNotification",
            value: function openNotification() {
                var align = this.refs.align.getValue();
                notification.open({
                    title: "Notification Title",
                    desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
                    dock: align
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
                        React.createElement(Select, { ref: "align", data: ["topRight", "bottomRight", "bottomLeft", "topLeft"], value: "topRight" }),
                        React.createElement(
                            Button,
                            { theme: "primary", raised: true, onClick: this.openNotification.bind(this) },
                            "open the otification"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "提示位置"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "指定 dock 可以将通知框显示在不同的位置  支持 topRight、bottomRight、bottomLeft、topLeft，默认是 topRight。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Button = require(\"Button\");\nconst notification = require(\"Notification\");\n\nopenNotification(){\n    let align = this.refs.align.getValue();\n    notification.open({\n        title: \"Notification Title\",\n        desc: \"This is the content of the notification. This is the content of the notification. This is the content of the notification.\",\n        dock: align\n    });\n}\n\nReactDOM.render(\n<div>\n    <Select ref=\"align\" data={[\"topRight\",\"bottomRight\",\"bottomLeft\",\"topLeft\"]} value=\"topRight\"></Select>\n    <Button theme=\"primary\" raised onClick={this.openNotification.bind(this)}>open the otification</Button>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
