define(["module", "react", "react-dom", "../BaseDemo", "FontIcon", "Dialog", "../Code", "Button"], function (module, React, ReactDOM, BaseDemo, FontIcon, Dialog, Code, Button) {
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
            key: "openDialog",
            value: function openDialog() {
                this.refs.dialog.open();
                this.refs.dialog.setData({ params: 1 });
            }
        }, {
            key: "onDialogConfirm",
            value: function onDialogConfirm(flag) {
                var data = this.refs.dialog.getData();
                console.log(data);
                console.log(flag);
                if (flag) {
                    console.log("ok click");
                } else {
                    console.log("cancel click");
                }

                //must return true
                return true;
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
                            Dialog,
                            { ref: "dialog", title: "提示", onConfirm: this.onDialogConfirm.bind(this), hasFooter: true, okButtonText: "提 交", cancleButtonText: "关 闭" },
                            React.createElement(
                                "p",
                                null,
                                "dialog content"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "dialog content"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "dialog content"
                            )
                        ),
                        React.createElement(
                            Button,
                            { theme: "success", onClick: this.openDialog.bind(this) },
                            "open dialog"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "footer"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "hasFooter设置Dialog是否显示默认Footer",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Dialog = require(\"Dialog\");\n\nopenDialog(){\n    this.refs.dialog.open();\n    this.refs.dialog.setData({params: 1});\n}\n\nonDialogConfirm(flag){\n    let data = this.refs.dialog.getData();\n    console.log(data);\n    console.log(flag);\n    if(flag){\n        console.log(\"ok click\");\n    }else{\n        console.log(\"cancel click\");\n    }\n\n    //must return true\n    return true;\n}\n\nReactDOM.render(\n<div>\n    <Dialog ref=\"dialog\" title=\"提示\" onConfirm={this.onDialogConfirm.bind(this)} hasFooter={true} okButtonText=\"提 交\" cancleButtonText=\"关 闭\">\n        <p>dialog content</p>\n        <p>dialog content</p>\n        <p>dialog content</p>\n    </Dialog>\n\n    <Button onClick={this.openDialog.bind(this)}>open dialog</Button>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
