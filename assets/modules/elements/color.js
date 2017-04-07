define(["module", "react", "Label", "Row", "Col"], function (module, React, Label, Row, Col) {
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
                    "色值参考"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "色彩在界面设计中的使用应同时具备品牌识别性以及界面设计功能性。色彩是相当感性的东西，设计中对色彩的运用首要应考虑到品牌层面的表达，另外很重要的一点是色彩的运用应达到信息传递，动作指引，交互反馈，或是强化和凸现某一个元素的目的。任何颜色的选取和使用应该是有意义的。"
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "主色"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "CMUI的主色是鲜艳、友好的蓝色。"
                ),
                React.createElement(
                    "div",
                    { className: "mb-10" },
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-blue-light color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "LIGHT BLUE"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#58B7FF"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-blue color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "BLUE"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#20A0FF"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.3, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-blue-dark color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "DARK BLUE"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#1D8CE0"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "辅助色"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。"
                ),
                React.createElement(
                    "div",
                    { className: "mb-10" },
                    React.createElement(
                        Label,
                        { grid: 0.25, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-blue color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "BLUE"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#20A0FF"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.25, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-success color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "SUCCESS"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#13CE66"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.25, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-warning color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "WARNING"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#F7BA2A"
                            )
                        )
                    ),
                    React.createElement(
                        Label,
                        { grid: 0.25, className: "color-box" },
                        React.createElement(
                            "div",
                            { className: "bg-danger color-box-inner" },
                            React.createElement(
                                "div",
                                null,
                                "DANGER"
                            ),
                            React.createElement(
                                "div",
                                null,
                                "#FF4949"
                            )
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    { className: "page-h1" },
                    "中性色"
                ),
                React.createElement(
                    "blockquote",
                    { className: "page-tip" },
                    "中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。"
                ),
                React.createElement(
                    "div",
                    { className: "mb-10" },
                    React.createElement(
                        Row,
                        null,
                        React.createElement(
                            Col,
                            { grid: 0.25, className: "color-box" },
                            React.createElement(
                                "div",
                                { className: "bg-dark color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "DARK"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#1F2D3D"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-dark-light color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHT DARK"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#324057"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-dark-lighter color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHTER DARK"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#475669"
                                )
                            )
                        ),
                        React.createElement(
                            Col,
                            { grid: 0.25, className: "color-box" },
                            React.createElement(
                                "div",
                                { className: "bg-silver color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "Silver"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#8492A6"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-silver-light color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHT Silver"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#99A9BF"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-silver-lighter color-box-inner" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHTER Silver"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#C0CCDA"
                                )
                            )
                        ),
                        React.createElement(
                            Col,
                            { grid: 0.25, className: "color-box" },
                            React.createElement(
                                "div",
                                { className: "bg-gray color-box-inner text-dark-lighter" },
                                React.createElement(
                                    "div",
                                    null,
                                    "GRAY"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#D3DCE6"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-gray-light color-box-inner text-dark-lighter" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHT GRAY"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#E5E9F2"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-gray-lighter color-box-inner text-dark-lighter" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHTER GRAY"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#EFF2F7"
                                )
                            )
                        ),
                        React.createElement(
                            Col,
                            { grid: 0.25, className: "color-box" },
                            React.createElement(
                                "div",
                                { className: "bg-white color-box-inner text-dark-lighter" },
                                React.createElement(
                                    "div",
                                    null,
                                    "WHITE"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#F9FAFC"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "bg-white-light color-box-inner text-dark-lighter" },
                                React.createElement(
                                    "div",
                                    null,
                                    "LIGHT WHITE"
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    "#FFFFFF"
                                )
                            ),
                            React.createElement("div", { className: "bg-white color-box-inner text-dark" })
                        )
                    )
                )
            );
        }
    });

    module.exports = Page;
});
