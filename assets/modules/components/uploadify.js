define(["module", "react", "Label", "Row", "Col", "Table", "../components/uploadify/demo1", "../components/uploadify/demo2", "../components/uploadify/demo3", "../components/uploadify/demo4"], function (module, React, Label, Row, Col, Table, Demo1, Demo2, Demo3, Demo4) {
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
                    "多上传文件"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "文件选择上传控件，展现上传的进度",
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
                    "Uploadify"
                ),
                React.createElement(Table, { columns: [{ name: "param", text: "参数" }, { name: "desc", text: "说明" }, { name: "type", text: "类型" }, { name: "default", text: "默认值" }], bordered: true, data: [{ param: "className", desc: "自定义class", type: "string", default: "" }, { param: "style", desc: "自定义样式", type: "object", default: "" }, { param: "buttonText", desc: "上传按钮的文字", type: "string", default: "upload" }, { param: "files", desc: "默认文件，这些文件只起到显示作用", type: "array", default: "" }, { param: "params", desc: "额外的参数", type: "object", default: "" }, { param: "mode", desc: "模式falls和grid", type: "string", default: "falls" }, { param: "onInit", desc: "初始化后回调", type: "function", default: "" }, { param: "auto", desc: "自动上传", type: "boolean", default: "true" }, { param: "onFilesAdded", desc: "选中文件后回调", type: "function", default: "" }, { param: "onProgress", desc: "文件上传进度回调", type: "function", default: "" }, { param: "onFileUploaded", desc: "文件上传完成回调", type: "function", default: "" }, { param: "onUploadComplete", desc: "所有文件上传完成回调", type: "function", default: "" }, { param: "onException", desc: "错误回调", type: "function", default: "" }, { param: "onRemoveFile", desc: "移除文件回调", type: "function", default: "" }, { param: "thumbnail", desc: "falls时显示缩略图", type: "boolean", default: "false" }, { param: "maxSize", desc: "最大上传限制单位支持b、kb、mb、gb", type: "string", default: "" }, { param: "mimeTypes", desc: "过滤文件", type: "array", default: "" }, { param: "name", desc: "上传时字段名称", type: "string", default: "file" }, { param: "url", desc: "上传时服务端接口url", type: "string", default: "" }, { param: "multi", desc: "是否多选", type: "boolean", default: "true" }] }),
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
                            "setParams(params)"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "设置key/value参数"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "params ",
                                "Object",
                                " 额外的参数，键值对"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "i",
                            null,
                            "start()"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "开始上传"
                        )
                    )
                ),
                React.createElement(
                    "h3",
                    { className: "page-h3" },
                    "mimeTypes"
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
                            "[{title : \"Image files\", extensions : \"jpg,gif,png\"}]"
                        ),
                        React.createElement(
                            "ul",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "title ",
                                "String",
                                " 文件选择框的说明"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "extensions ",
                                "String",
                                " 文件后缀,隔开"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
