define(["module", "react", "Label", "Row", "Col", "Table", "../components/form/demo1", "../components/form/demo2", "../components/form/demo3", "../components/form/demo4"], function (module, React, Label, Row, Col, Table, Demo1, Demo2, Demo3, Demo4) {
    "use strict";

    var Page = React.createClass({
        displayName: "Page",
        render: function render() {
            return React.createElement(
                "div",
                { className: "main-container" },
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "Form表单元素"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "表单元素",
                    React.createElement("br", null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "代码演示"
                ),
                React.createElement(
                    Row,
                    null,
                    React.createElement(
                        Col,
                        { grid: 0.5, className: "code-col" },
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo1, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo3, null)
                        )
                    ),
                    React.createElement(
                        Col,
                        { grid: 0.5, className: "code-col" },
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo2, null)
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo4, null)
                        )
                    )
                ),
                React.createElement(
                    "h2",
                    { className: "page-h2" },
                    "API"
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Form"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "action", desc: "提交表单的服务地址", type: "string", default: "" }, { param: "method", desc: "提交方式get、post、ajax、custom", type: "string", default: "" }, { param: "target", desc: "同form元素的target", type: "string", default: "" }, { param: "useDefaultSubmitBtn", desc: "是否使用自带的表单提交按钮", type: "string/boolean", default: "true" }, { param: "component", desc: "Form渲染后是form还是div", type: "string", default: "form" }, { param: "layout", desc: "表单的布局方式inline、stack-inline、stack", type: "string", default: "inline" }, { param: "labelWidth", desc: "所有label的默认宽度", type: "number", default: "" }, { param: "customParams", desc: "除了表单元素外的其他需要提交的参数 JSON格式", type: "object", default: "" }, { param: "success", desc: "提交成功回调", type: "function", default: "" }, { param: "error", desc: "提交失败回调", type: "function", default: "" }, { param: "submit", desc: "自定义提交操作方法", type: "function", default: "" }, { param: "submitText", desc: "默认提交按钮的显示文字", type: "string", default: "保 存" }, { param: "encType", desc: "表单有上传文件时的encType", type: "string", default: "" }] }),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Methods"
                ),
                React.createElement(
                    "ul",
                    { className: "code-methods" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getFormParams()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取表单的数据 key/value形式"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Object",
                                " key/value 表单数据"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getItems()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取表单的Items"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Array",
                                " FormControl元素数组"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "submit()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "提交表单"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getItem(name)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据name获取Form表单元素"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "name ",
                                "String",
                                " 元素的name"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Object",
                                " Input、TextArea等元素"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getFormControl(name)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据name获取Form表单元素"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "name ",
                                "String",
                                " 元素的name"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Object",
                                " FormControl元素"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "isValid()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取表单验证是否通过"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Boolean",
                                " true/false"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "FormControl"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "rules", desc: "验证规则", type: "object", default: "" }, { param: "messages", desc: "对应验证规则的提示信息", type: "object", default: "" }, { param: "isFormItem", desc: "当前元素是否是表单元素 false 不进行验证", type: "boolean", default: "true" }, { param: "name", desc: "元素的名称", type: "string", default: "" }, { param: "tipAlign", desc: "验证失败的提示位置 同Tooltip", type: "string", default: "right" }, { param: "required", desc: "同表单元素的required", type: "string/boolean", default: "" }, { param: "type", desc: "注册的表单类型", type: "string", default: "" }, { param: "id", desc: "id", type: "string", default: "" }, { param: "disabled", desc: "禁用", type: "boolean", default: "false" }, { param: "onChange", desc: "值改变回调", type: "function", default: "" }, { param: "onValid", desc: "验证后的回调", type: "function", default: "" }] }),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Methods"
                ),
                React.createElement(
                    "ul",
                    { className: "code-methods" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setMessage(rule, message)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "动态设置验证提示消息"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "rule ",
                                "String",
                                " 规则名称"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "message ",
                                "String",
                                " 规则对应的提示信息"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setRule(rule, rule_args)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "动态设置验证规则"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "rule ",
                                "String",
                                " 规则名称"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "rule_args ",
                                "any",
                                " 规则参数"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setErrorTip(msg)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置错误信息"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "msg ",
                                "String",
                                " 错误提示信息"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "isFormItem()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "是否为表单元素"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "boolean",
                                " true/false"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getName()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取表单名称"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "String",
                                " 表单名称"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setValue(value)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置元素的值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "value ",
                                "any",
                                " 表单元素的值"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getValue()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取元素的值"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "any",
                                " 字段的值"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "isValid()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取元素验证是否通过"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "boolean",
                                " 元素是否验证通过"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getReference()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取子元素Input或TextArea等注册的元素"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "ReactElement",
                                " 子元素对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "check()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "验证元素"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "boolean",
                                " true/false"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
