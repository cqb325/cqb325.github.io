define(["module", "react", "Label"], function (module, React, Label) {
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
                    "字体"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "跨平台的字体设定，力求在各个操作系统下都有最佳展示效果。"
                ),
                React.createElement(
                    "h1",
                    { className: "main-title-bold" },
                    "中文字体"
                ),
                React.createElement(
                    "div",
                    { className: "mb-30" },
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40 demo-font-PingFang" },
                                "字体"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "PingFang SC"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40 demo-font-Hiragino" },
                                "字体"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "Hiragino Sans GB"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40 demo-font-YaHei" },
                                "字体"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "Microsoft YaHei"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    { className: "main-title-bold" },
                    "数字英文字体"
                ),
                React.createElement(
                    "div",
                    { className: "mb-30" },
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40" },
                                "FONT"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "Helvetica Neue"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40 demo-font-Helvetica" },
                                "FONT"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "Helvetica"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "doc-font-box" },
                        React.createElement(
                            "div",
                            { className: "doc-font-box-inner" },
                            React.createElement(
                                "div",
                                { className: "font-40 demo-font-Arial" },
                                "FONT"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "Arial"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    { className: "main-title-bold" },
                    "字体使用规范"
                ),
                React.createElement(
                    "div",
                    { className: "doc-font-use" },
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "main-title" },
                            React.createElement(
                                "div",
                                null,
                                "主标题"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "main-title" },
                            React.createElement(
                                "div",
                                null,
                                "Main Head"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "main-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "我是标题加粗 #666 16px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "main-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text bold #666 16px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "sub-title" },
                            React.createElement(
                                "div",
                                null,
                                "次级标题"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "sub-title" },
                            React.createElement(
                                "div",
                                null,
                                "Sub Head"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "sub-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "我是标题 加粗 #666 14px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "sub-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text bold #666 14px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "small-title" },
                            React.createElement(
                                "div",
                                null,
                                "小标题"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "small-title" },
                            React.createElement(
                                "div",
                                null,
                                "Small Head"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "small-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "我是标题 加粗 #666 12px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "small-title-bold" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text bold #666 12px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-normal" },
                            React.createElement(
                                "div",
                                null,
                                "正文"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-normal" },
                            React.createElement(
                                "div",
                                null,
                                "Text"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-normal" },
                            React.createElement(
                                "div",
                                null,
                                "我是正文 #666 12px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-normal" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text #666 12px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-promote" },
                            React.createElement(
                                "div",
                                null,
                                "辅助文字"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-promote" },
                            React.createElement(
                                "div",
                                null,
                                "Help Text"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-promote" },
                            React.createElement(
                                "div",
                                null,
                                "我是辅助文字 #999 12px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-promote" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text #999 12px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-invalid" },
                            React.createElement(
                                "div",
                                null,
                                "失效文字"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-invalid" },
                            React.createElement(
                                "div",
                                null,
                                "Help Text"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-invalid" },
                            React.createElement(
                                "div",
                                null,
                                "我是失效文字 #ccc 12px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-invalid" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text #ccc 12px"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-10" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-link" },
                            React.createElement(
                                "div",
                                null,
                                "链接文字"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-link" },
                            React.createElement(
                                "div",
                                null,
                                "Help Text"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "mb-30" },
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-link" },
                            React.createElement(
                                "div",
                                null,
                                "我是链接文字 #20A0FF 12px"
                            )
                        ),
                        React.createElement(
                            Label,
                            { grid: 0.5, className: "text-link" },
                            React.createElement(
                                "div",
                                null,
                                "I am example text #20A0FF 12px"
                            )
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
