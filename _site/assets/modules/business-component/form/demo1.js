define(["module", "react", "../../components/BaseDemo", "../../components/Code", "FontIcon", "Button", "../../all_district", "business/SimpleForm"], function (module, React, BaseDemo, Code, FontIcon, Button, ALL_DISTRICT, SimpleForm) {
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
            value: function onChange(item, value, selectItem) {
                if (item.name === "province") {
                    var cities = selectItem.children;
                    var city = this.refs.simpleForm.getItem("city");
                    city.setData(cities);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var formData = {
                    action: "asdasdasd",
                    method: "post",
                    props: {
                        layout: "stack-inline",
                        labelWidth: "120",
                        useDefaultSubmitBtn: true,
                        submitText: "",
                        target: "",
                        className: "",
                        style: {}
                    },
                    items: [{ name: "shortName", label: "企业简称：", type: "text", props: {}, rules: { required: true }, messages: { required: "请填写企业简称" } }, { name: "name", label: "企业名称：", type: "text", props: { required: true }, rules: {}, messages: {} }, { name: "email", label: "企业联系邮箱：", type: "text", props: { required: true }, rules: { email: true }, messages: {} }, { name: "tel", label: "企业联系电话：", type: "number", props: { required: true, maxLength: 11 }, rules: { mobile: true }, messages: {} }, { type: "row", props: { className: "cm-form-inline", required: true }, children: [{ name: "province", label: "详细地址：", type: "select", props: {
                                data: ALL_DISTRICT
                            }, rules: {}, messages: {} }, { name: "city", label: "", type: "select", props: {
                                data: []
                            }, rules: {}, messages: {} }] }, { name: "address", label: "&nbsp;", type: "textarea", props: {
                            itemStyle: { height: 50, width: 335 }
                        }, rules: { required: true }, messages: {} }, { name: "radio", label: "类型选择：", type: "radio", props: { required: true, data: ["央企", "国企", "民企"] }, rules: { required: true }, messages: {} }, { name: "radio2", label: "类型选择2：", type: "radio", props: { stick: true, required: true, data: ["央企", "国企", "民企"] }, rules: { required: true }, messages: {} }, { name: "checkbox", label: "权限选择：", type: "checkbox", props: { required: true, data: [{ id: "0", text: "admin" }, { id: "1", text: "企业" }, { id: "2", text: "运营" }] }, rules: { required: true }, messages: {} }]
                };
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(SimpleForm, { ref: "simpleForm", data: formData, onChange: this.onChange.bind(this) })
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "简单的表单"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "通过配置来展现表单",
                            React.createElement("br", null),
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst SimpleForm = require(\"business/SimpleForm\");\n\nlet formData = {\n    action: \"asdasdasd\",\n    method: \"post\",\n    props: {\n        layout: \"stack-inline\",\n        labelWidth: \"120\",\n        useDefaultSubmitBtn: true,\n        submitText: \"\",\n        target: \"\",\n        className: \"\",\n        style: {}\n    },\n    items: [\n        {name: \"shortName\", label: \"企业简称：\", type: \"text\", props: {}, rules: {required: true}, messages: {required: \"请填写企业简称\"}},\n        {name: \"name\", label: \"企业名称：\", type: \"text\", props: {required: true}, rules: {}, messages: {}},\n        {name: \"email\", label: \"企业联系邮箱：\", type: \"text\", props: {required: true}, rules: {email: true}, messages: {}},\n        {name: \"tel\", label: \"企业联系电话：\", type: \"number\", props: {required: true, maxLength: 11}, rules: {mobile: true,}, messages: {}},\n        {type: \"row\", props: {className: \"cm-form-inline\", required: true}, children: [\n            {name: \"province\", label: \"详细地址：\", type: \"select\", props: {\n                data: ALL_DISTRICT\n            }, rules: {}, messages: {}},\n            {name: \"city\", label: \"\", type: \"select\", props: {\n                data: []\n            }, rules: {}, messages: {}},\n        ]},\n        {name: \"address\", label: \"&nbsp;\", type: \"textarea\", props: {\n            itemStyle: {height: 50, width: 335}\n        }, rules: {required: true}, messages: {}},\n        {name: \"radio\", label: \"类型选择：\", type: \"radio\", props: {required: true, data: [\"央企\",\"国企\",\"民企\"]}, rules: {required: true}, messages: {}},\n        {name: \"radio2\", label: \"类型选择2：\", type: \"radio\", props: {stick: true, required: true, data: [\"央企\",\"国企\",\"民企\"]}, rules: {required: true}, messages: {}},\n        {name: \"checkbox\", label: \"权限选择：\", type: \"checkbox\", props: {required: true, data: [{id: \"0\", text: \"admin\"},{id: \"1\", text: \"企业\"},{id: \"2\", text: \"运营\"}]}, rules: {required: true}, messages: {}},\n    ]\n};\n\nReactDOM.render(\n<div>\n    <SimpleForm ref=\"simpleForm\" data={formData} onChange={this.onChange.bind(this)}></SimpleForm>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
