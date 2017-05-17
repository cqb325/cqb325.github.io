define(["module", "react", "../BaseDemo", "FontIcon", "Menu", "../Code"], function (module, React, BaseDemo, FontIcon, Menu, Code) {
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

    var SubMenu = Menu.SubMenu;
    var MenuItemGroup = Menu.MenuItemGroup;

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
                            Menu,
                            { style: { width: 300 }, modal: "multi", theme: "dark" },
                            React.createElement(
                                SubMenu,
                                { title: React.createElement(
                                        "span",
                                        null,
                                        React.createElement(FontIcon, { icon: "th-large" }),
                                        "Navigation One"
                                    ) },
                                React.createElement(
                                    MenuItemGroup,
                                    { title: "Item Group" },
                                    React.createElement(
                                        Menu.Item,
                                        null,
                                        "item1"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        null,
                                        "item2"
                                    )
                                ),
                                React.createElement(
                                    SubMenu,
                                    { title: "SubMenu" },
                                    React.createElement(
                                        Menu.Item,
                                        null,
                                        "item2"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        null,
                                        "item2"
                                    )
                                )
                            ),
                            React.createElement(
                                SubMenu,
                                { title: React.createElement(
                                        "span",
                                        null,
                                        React.createElement(FontIcon, { icon: "codepen" }),
                                        "Navigation Three"
                                    ) },
                                React.createElement(
                                    MenuItemGroup,
                                    { title: "Item 1" },
                                    React.createElement(
                                        Menu.Item,
                                        null,
                                        "item21"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        null,
                                        "item22"
                                    )
                                ),
                                React.createElement(
                                    MenuItemGroup,
                                    { title: "Item 2" },
                                    React.createElement(
                                        Menu.Item,
                                        null,
                                        "item21"
                                    ),
                                    React.createElement(
                                        Menu.Item,
                                        null,
                                        "item22"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "多开"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "设置 modal 为 multi 可以设置菜单为多展开状态 默认为signle 单开状态。 设置 theme 为 dark 可以设置黑色主题  支持 light 和 dark 默认为 light。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst FontIcon = require(\"FontIcon\");\nconst Menu = require(\"Menu\");\nconst SubMenu = Menu.SubMenu;\nconst MenuItemGroup = Menu.MenuItemGroup;\n\n\nReactDOM.render(\n<div>\n    <Menu style={{width: 300}} modal=\"multi\" theme=\"dark\">\n        <SubMenu title={<span><FontIcon icon=\"th-large\"></FontIcon>Navigation One</span>}>\n            <MenuItemGroup title=\"Item Group\">\n                <Menu.Item>item1</Menu.Item>\n                <Menu.Item>item2</Menu.Item>\n            </MenuItemGroup>\n            <SubMenu title=\"SubMenu\">\n                <Menu.Item>item2</Menu.Item>\n                <Menu.Item>item2</Menu.Item>\n            </SubMenu>\n        </SubMenu>\n        <SubMenu title={<span><FontIcon icon=\"codepen\"></FontIcon>Navigation Three</span>}>\n            <MenuItemGroup title=\"Item 1\">\n                <Menu.Item>item21</Menu.Item>\n                <Menu.Item>item22</Menu.Item>\n            </MenuItemGroup>\n            <MenuItemGroup title=\"Item 2\">\n                <Menu.Item>item21</Menu.Item>\n                <Menu.Item>item22</Menu.Item>\n            </MenuItemGroup>\n        </SubMenu>\n    </Menu>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
