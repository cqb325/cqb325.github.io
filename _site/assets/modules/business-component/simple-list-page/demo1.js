define(["module", "react", "../../components/BaseDemo", "business/SimpleListPage", "../../components/Code", "FontIcon", "FormControl", "Input", "Select", "Button"], function (module, React, BaseDemo, SimpleListPage, Code, FontIcon, FormControl, Input, Select, Button) {
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
                var columns = [{ name: "index", text: "序号", type: "index" }, { name: "username", text: "用户名" }, { name: "mobile", text: "手机号码" }, { name: "email", text: "邮箱" }, { name: "createTime", text: "注册时间" }, { name: "status", text: "状态", format: function format(value, column, row) {
                        return ["禁用", "激活"][value];
                    } }, { name: "op", text: "操作", format: function format(value, column, row) {
                        if (row.status) {
                            return '<a class="text-warning" href="javascript:void(0)" data-id="' + row.id + '">禁用</a>';
                        } else {
                            return '<a href="javascript:void(0)" class="text-success" data-id="' + row.id + '">激活</a>';
                        }
                    } }];
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(
                            "div",
                            { className: "search-wrap mb-10" },
                            React.createElement(
                                "label",
                                null,
                                "用户名"
                            ),
                            " ",
                            React.createElement(Input, { type: "text", name: "username", className: "searchItem" }),
                            React.createElement(
                                "label",
                                null,
                                "手机号"
                            ),
                            " ",
                            React.createElement(Input, { type: "number", name: "mobile", className: "searchItem" }),
                            React.createElement(
                                "label",
                                null,
                                "状态"
                            ),
                            " ",
                            React.createElement(Select, { name: "status", data: [{ id: "0", text: "禁用" }, { id: "1", text: "激活" }], className: "searchItem" }),
                            React.createElement(
                                "a",
                                { className: "cm-button primary ml-10", id: "search-btn" },
                                "查 询"
                            )
                        ),
                        React.createElement(SimpleListPage, { pagination: true, columns: columns, action: "http://192.168.105.202:8415/mock/cdn/getOperatorList.html" })
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "列表页组件的约定"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "约定1：查询项的name是必须的,class 为searchItem",
                            React.createElement("br", null),
                            "约定2：查询按钮的id为search-btn",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst SimpleListPage = require(\"business/SimpleListPage\");\nconst FormControl = require(\"FormControl\");\nconst Input = require(\"Input\");\nconst Select = require(\"Select\");\nconst Button = require(\"Button\");\n\nlet columns = [\n    {name: \"username\", text: \"用户名\"},\n    {name: \"mobile\", text: \"手机号码\"},\n    {name: \"email\", text: \"邮箱\"},\n    {name: \"createTime\", text: \"注册时间\"},\n    {name: \"status\", text: \"状态\", format: function(value, column, row){\n        return [\"禁用\",\"激活\"][value];\n    }}\n];\n\nReactDOM.render(\n<div>\n    <div className=\"search-wrap mb-10\">\n        <label>用户名</label> <Input type=\"text\" name=\"username\" className=\"searchItem\"/>\n        <label>手机号</label> <Input type=\"number\" name=\"mobile\"  className=\"searchItem\"/>\n        <label>状态</label> <Select name=\"status\" data={[{id: \"0\", text: \"禁用\"},{id: \"1\", text: \"激活\"}]} className=\"searchItem\"/>\n        <a className=\"cm-button primary ml-10\" id=\"search-btn\">查 询</a>\n    </div>\n    <SimpleListPage pagination={true} columns={columns} action=\"http://192.168.105.202:8415/mock/cdn/getOperatorList.html\"></SimpleListPage>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
