define(["module", "react", "../BaseDemo", "FontIcon", "Form", "FormControl", "Input", "Select", "TextArea", "RadioGroup", "CheckBoxGroup", "DateTime", "DateRange", "Upload", "../Code", "Button"], function (module, React, BaseDemo, FontIcon, Form, FormControl, Input, Select, TextArea, RadioGroup, CheckBoxGroup, DateTime, DateRange, Upload, Code, Button) {
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
                            Form,
                            { layout: "stack", labelWidth: "80", method: "ajax", action: "xxxxx" },
                            React.createElement(FormControl, { type: "text", label: "Input", required: true, name: "input", messages: { required: "请输入input的内容" } }),
                            React.createElement(FormControl, { type: "select", label: "Select", required: true, data: ["Option1", "Option2"], name: "select" }),
                            React.createElement(FormControl, { type: "datetime", label: "DateTime", required: true, dateOnly: true, name: "datetime" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "method"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "method 支持get post 、ajax和custom, get和post使用表单方式提交，ajax以ajax方式提交，custom自定义方式。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Form = require(\"Form\");\nconst FormControl = require(\"FormControl\");\nconst Input = require(\"Input\");\nconst Select = require(\"Select\");\nconst TextArea = require(\"TextArea\");\nconst RadioGroup = require(\"RadioGroup\");\nconst CheckBoxGroup = require(\"CheckBoxGroup\");\nconst DateTime = require(\"DateTime\");\nconst DateRange = require(\"DateRange\");\nconst Upload = require(\"Upload\");\n\nReactDOM.render(\n<div>\n    <Form layout=\"stack\" labelWidth=\"80\" useDefaultSubmitBtn={false}>\n        <FormControl type=\"text\" label=\"Input\" required={true} name=\"input\" messages={{required: \"请输入input的内容\"}}/>\n        <FormControl type=\"select\" label=\"Select\" required={true} data={[\"Option1\",\"Option2\"]} name=\"select\"/>\n        <FormControl type=\"datetime\" label=\"DateTime\" required={true} dateOnly={true} name=\"datetime\"/>\n    </Form>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
