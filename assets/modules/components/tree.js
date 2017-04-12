define(["module", "react", "Label", "Row", "Col", "Table", "../components/tree/demo1", "../components/tree/demo2", "../components/tree/demo3", "../components/tree/demo4", "../components/tree/demo5"], function (module, React, Label, Row, Col, Table, Demo1, Demo2, Demo3, Demo4, Demo5) {
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
                    "Tree 选择器"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "弹出一个下拉菜单给用户选择操作，用于代替原生的选择器。",
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
                        ),
                        React.createElement(
                            Label,
                            { className: "code-box" },
                            React.createElement(Demo5, null)
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
                    "Uploadify"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "data", desc: "初始化数据", type: "array", default: "" }, { param: "url", desc: "ajax请求数据进行初始化", type: "string", default: "" }, { param: "enableCheckbox", desc: "是否使用复选框", type: "boolean", default: "false" }, { param: "enableSmartCheckbox", desc: "是否使用级联复选框", type: "boolean", default: "false" }, { param: "onSelect", desc: "选中节点的回调", type: "function(item)", default: "" }, { param: "onOpen", desc: "打开子节点的回调", type: "function(item)", default: "" }, { param: "onCheck", desc: "勾选节点复选框回调", type: "function(item)", default: "" }] }),
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
                            "setSmartSubChecked(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置子节点的级联显示"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setSubChecked(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "选中当前节点的子节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setItemChecked(item, checked)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置节点的勾选状态"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "checked ",
                                "Number",
                                " 节点勾选状态 0 未勾选、1 勾选"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getSubItems(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象获取子节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Array",
                                " 子节点对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getItem(itemId)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id获取节点对象"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "itemId ",
                                "String",
                                " 节点对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getItemText(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点id获取节点的文字"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setItemText(item, text)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点id或节点对象设置节点文字"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "text ",
                                "String",
                                " 节点名称"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setItemColor(item, color)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点id或节点对象设置节点颜色"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "color ",
                                "String",
                                " 要设置的颜色"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "setItemImg(item, img)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点id或节点对象设置节点图标"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "img ",
                                "String",
                                " 要设置的图标"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getLevel(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象获取节点的层级"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Number",
                                " 层级"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getOpenState(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象获取节点的打开状态"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Number",
                                " 节点打开状态"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getSelectedItem()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取当前选中的节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Object",
                                " 节点对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "isItemChecked(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象判断节点是否勾选"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Number",
                                " 节点勾选状态"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "checkItem(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象勾选节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "unCheckItem(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象取消勾选节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "openItem(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象打开节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "openAllItem()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "打开所有的节点"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "closeItem(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象关闭节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "closeAllItem()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "关闭所有的节点"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "selectItem(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象选中节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "unSelectItem(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象取消选中节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getSubCheckedItems(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象获取勾选的子节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getSubUncheckedItems(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象获取未勾选的子节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getAllChecked()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取所有勾选的节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Array",
                                " 节点数组"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getAllCheckedIncludeSmart()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取所有勾选的节点包含smart节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Array",
                                " 节点数组"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getSubChecks(item, checked)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "根据节点的Id或则节点对象获取指定勾选状态的子节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "checked ",
                                "Number",
                                " 节点勾选状态"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Array",
                                " 节点数组"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getAllCheckedBranches()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取所有勾选的非叶子节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Array",
                                " 节点数组"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getAllCheckedLeafs()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取所有勾选的叶子节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Array",
                                " 节点数组"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "addItem(parent, item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "添加一个节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "parent ",
                                "String/Object",
                                " 节点id或对象"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "Object",
                                " 节点对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "deleteChildItems(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "删除所有的孩子结点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "removeItem(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "删除节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getAllBranches()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取所有的非叶子节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Array",
                                " 非叶子节点数组"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "getAllLeafs()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "获取所有的叶子节点"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "return ",
                                "Array",
                                " 叶子节点数组"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "updateParentCheckStatus(item)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "级联更新父节点的状态"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "item ",
                                "String/Object",
                                " 节点id或对象"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "loadDynamicJSON(parent, json, cback)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "动态加载JSON数据"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "parent ",
                                "String/Object",
                                " 节点id或对象"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "json ",
                                "Object",
                                " 子节点数据"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "cback ",
                                "function",
                                " 加载完成之后的回调"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
