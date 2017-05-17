define(["module", "react", "../BaseDemo", "FontIcon", "Dropdown", "../Code", 'Menu'], function (module, React, BaseDemo, FontIcon, Dropdown, Code, Menu) {
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
                var menu = React.createElement(
                    Menu,
                    null,
                    React.createElement(
                        Menu.Item,
                        null,
                        "item1"
                    ),
                    React.createElement(
                        Menu.Item,
                        null,
                        "item2"
                    ),
                    React.createElement(
                        Menu.Item,
                        null,
                        "退出"
                    ),
                    React.createElement(
                        Menu.Item,
                        { disabled: true },
                        "item4(disabled)"
                    )
                );

                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(
                            Dropdown,
                            { action: "click", overlay: menu },
                            "click me"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "action"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "action 选择click  默认是hover",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Dropdown = require(\"Dropdown\");\nconst Menu = require('Menu');\n\nlet menu = <Menu>\n            <Menu.Item>item1</Menu.Item>\n            <Menu.Item>item2</Menu.Item>\n            <Menu.Item>退出</Menu.Item>\n            <Menu.Item disabled={true}>item4(disabled)</Menu.Item>\n        </Menu>;\n\nReactDOM.render(\n<Dropdown action=\"click\" overlay={menu}>click me</Dropdown>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
