define(["module", "react", "../BaseDemo", "Button", "Notification", "FontIcon", "../Code"], function (module, React, BaseDemo, Button, notification, FontIcon, Code) {
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
            value: function openNotification(type) {
                notification[type]({
                    title: "Notification Title",
                    desc: "This is the content of the notification. This is the content of the notification. This is the content of the notification."
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
                            Button,
                            { raised: true, onClick: this.openNotification.bind(this, "success") },
                            "Success"
                        ),
                        React.createElement(
                            Button,
                            { className: "ml-5", raised: true, onClick: this.openNotification.bind(this, "info") },
                            "Info"
                        ),
                        React.createElement(
                            Button,
                            { className: "ml-5", raised: true, onClick: this.openNotification.bind(this, "warning") },
                            "Warning"
                        ),
                        React.createElement(
                            Button,
                            { className: "ml-5", raised: true, onClick: this.openNotification.bind(this, "error") },
                            "Error"
                        ),
                        React.createElement(
                            Button,
                            { className: "ml-5", raised: true, onClick: this.openNotification.bind(this, "question") },
                            "Question"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "通知类型"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "带有图标的通知提醒框，success、info、warning、error和question",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Button = require(\"Button\");\nconst notification = require(\"Notification\");\n\nopenNotification(type){\n    notification[type]({\n        title: \"Notification Title\",\n        desc: \"This is the content of the notification. This is the content of the notification. This is the content of the notification.\"\n    });\n}\n\nReactDOM.render(\n<div>\n    <Button raised onClick={this.openNotification.bind(this, \"success\")}>Success</Button>\n    <Button className=\"ml-5\" raised onClick={this.openNotification.bind(this, \"info\")}>Info</Button>\n    <Button className=\"ml-5\" raised onClick={this.openNotification.bind(this, \"warning\")}>Warning</Button>\n    <Button className=\"ml-5\" raised onClick={this.openNotification.bind(this, \"error\")}>Error</Button>\n    <Button className=\"ml-5\" raised onClick={this.openNotification.bind(this, \"question\")}>Question</Button>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
