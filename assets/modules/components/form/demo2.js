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
                            { layout: "stack-inline", labelWidth: "80" },
                            React.createElement(FormControl, { type: "text", label: "Input", required: true, name: "input", messages: { required: "请输入input的内容" } }),
                            React.createElement(FormControl, { type: "select", label: "Select", required: true, data: ["Option1", "Option2"], name: "select" }),
                            React.createElement(FormControl, { type: "datetime", label: "DateTime", required: true, dateOnly: true, name: "datetime" }),
                            React.createElement(FormControl, { type: "daterange", label: "DateRange", required: true, maxRange: 30, name: "daterange" }),
                            React.createElement(FormControl, { type: "checkbox", label: "checkbox", required: true, data: [{ id: "0", text: "check1" }, { id: "1", text: "check2" }], name: "checkbox" }),
                            React.createElement(FormControl, { type: "radio", stick: true, label: "Radio", required: true, data: [{ id: "0", text: "radio1" }, { id: "1", text: "radio2" }], name: "radio" }),
                            React.createElement(FormControl, { type: "file", label: "Upload", required: true, name: "file" }),
                            React.createElement(FormControl, { type: "textarea", label: "TextArea", height: "50", autoHeight: true, required: true, name: "textarea" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "验证"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "简单用法",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Form = require(\"Form\");\nconst FormControl = require(\"FormControl\");\nconst Input = require(\"Input\");\nconst Select = require(\"Select\");\nconst TextArea = require(\"TextArea\");\nconst RadioGroup = require(\"RadioGroup\");\nconst CheckBoxGroup = require(\"CheckBoxGroup\");\nconst DateTime = require(\"DateTime\");\nconst DateRange = require(\"DateRange\");\nconst Upload = require(\"Upload\");\n\nReactDOM.render(\n<div>\n    <Form layout=\"stack-inline\" labelWidth=\"80\">\n        <FormControl type=\"text\" label=\"Input\" required={true} name=\"input\" messages={{required: \"请输入input的内容\"}}/>\n        <FormControl type=\"select\" label=\"Select\" required={true} data={[\"Option1\",\"Option2\"]} name=\"select\"/>\n        <FormControl type=\"datetime\" label=\"DateTime\" required={true} dateOnly={true} name=\"datetime\"/>\n        <FormControl type=\"daterange\" label=\"DateRange\" required={true} maxRange={30} name=\"daterange\"/>\n        <FormControl type=\"checkbox\" label=\"checkbox\" required={true} data={[{id: \"0\", text: \"check1\"},{id: \"1\", text: \"check2\"}]} name=\"checkbox\"/>\n        <FormControl type=\"radio\" stick={true} label=\"Radio\" required={true} data={[{id: \"0\", text: \"radio1\"},{id: \"1\", text: \"radio2\"}]} name=\"radio\"/>\n        <FormControl type=\"file\" label=\"Upload\" required={true} name=\"file\"/>\n        <FormControl type=\"textarea\" label=\"TextArea\" height=\"50\" autoHeight={true} required={true} name=\"textarea\"/>\n    </Form>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
