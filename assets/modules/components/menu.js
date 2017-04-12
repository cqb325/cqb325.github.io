define(["module", "react", "Label", "Table", "../components/menu/demo1", "../components/menu/demo2", "../components/menu/demo3", "../components/menu/demo4"], function (module, React, Label, Table, Demo1, Demo2, Demo3, Demo4) {
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
                    "Menu 菜单"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "为页面和功能提供导航的菜单列表。",
                    React.createElement("br", null)
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "代码演示"
                ),
                React.createElement(
                    Label,
                    { grid: 1, className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo1, null)
                    )
                ),
                React.createElement(
                    Label,
                    { grid: 1, className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo2, null)
                    )
                ),
                React.createElement(
                    Label,
                    { grid: 1, className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo3, null)
                    )
                ),
                React.createElement(
                    Label,
                    { grid: 1, className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo4, null)
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
                    "Menu"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "theme", desc: "主题 dark light", type: "object", default: "light" }, { param: "modal", desc: "选择模式multi 或者 single ", type: "string", default: "single" }, { param: "layout", desc: "Menu的布局 horizontal和vertical", type: "string", default: "vertical" }, { param: "onSelect", desc: "选择菜单时触发", type: "function", default: "" }, { param: "unSelect", desc: "上一个菜单项未选择回调", type: "function", default: "" }, { param: "onClick", desc: "选择菜单时触发", type: "function", default: "" }, { param: "onCollapse", desc: "菜单折叠回调", type: "function", default: "" }, { param: "onOpen", desc: "菜单打开回调", type: "function", default: "" }] }),
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
                            "selectItem(key)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "选中菜单项"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "key ",
                                "String",
                                " 菜单项的唯一key值"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "collapse(key, collapsed)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "折叠或展开"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "key ",
                                "String",
                                " 菜单项的唯一key值"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "collapsed ",
                                "Boolean",
                                " true折叠false打开"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setTheme(theme)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置主题"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "theme ",
                                "String",
                                " 菜单主题"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getModal()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "当前的选择模式"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "String",
                                " 获取模式 single、multi"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Menu.SubMenu"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "open", desc: "是否打开", type: "boolean", default: "" }, { param: "identify", desc: "唯一标识 可选 默认系统自动生成", type: "string", default: "" }, { param: "disabled", desc: "是否禁用", type: "boolean", default: "false" }] }),
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
                            "collapse(collapsed)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "折叠或打开"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "collapsed ",
                                "Boolean",
                                " true折叠false打开"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "isOpen()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "是否打开的状态"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Boolean",
                                " true折叠false打开"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Menu.MenuItemGroup"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "title", desc: "标题", type: "string", default: "" }] }),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "Menu.Item"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "title", desc: "标题", type: "string", default: "" }, { param: "identify", desc: "菜单项的唯一标识", type: "string", default: "" }, { param: "select", desc: "是否选中", type: "boolean", default: "false" }, { param: "disabled", desc: "是否禁用", type: "boolean", default: "false" }, { param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "link", desc: "链接地址", type: "string", default: "" }] }),
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
                            "getKey()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取菜单项的Key"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "String",
                                " 菜单项的Key"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "select()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "选中"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "unSelect()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "取消选中"
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
