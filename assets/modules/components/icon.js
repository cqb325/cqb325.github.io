define(["module", "react", "Label", "Table", "../components/icon/demo1", "../components/icon/demo2", "../components/icon/demo3", "../components/icon/demo12"], function (module, React, Label, Table, Demo1, Demo2, Demo3, Demo12) {
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
                    "FontIcon 字体图标"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "语义化的矢量图形。"
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "代码演示"
                ),
                React.createElement(
                    Label,
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
                        React.createElement(Demo12, null)
                    )
                ),
                React.createElement(
                    Label,
                    { grid: 0.5, className: "code-col" },
                    React.createElement(
                        Label,
                        { className: "code-box" },
                        React.createElement(Demo2, null)
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
                    "FontIcon"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "icon", desc: "图标名称 font awesome 中的图标", type: "string", default: "" }, { param: "font", desc: "自定义字体的名称", type: "string", default: "" }, { param: "spin", desc: "是否旋转", type: "boolean", default: "" }, { param: "pulse", desc: "分步旋转", type: "boolean", default: "" }, { param: "title", desc: "提示文字", type: "string", default: "" }, { param: "className", desc: "自定义class", type: "string", default: "" }, { param: "size", desc: "字体大小 lg、2x、3x、4x、5x", type: "string", default: "" }, { param: "color", desc: "颜色", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }] })
            );
        }
    });

    module.exports = Page;
});
