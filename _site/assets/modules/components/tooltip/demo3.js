define(["module", "react", "../BaseDemo", "FontIcon", "Tooltip", "Row", "Col", "../Code"], function (module, React, BaseDemo, FontIcon, Tooltip, Row, Col, Code) {
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
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(
                            Row,
                            null,
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "topLeft" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "TL"
                                    )
                                )
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "top" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "Top"
                                    )
                                )
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "topRight" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "TR"
                                    )
                                )
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "mt-30" },
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "leftTop" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "LT"
                                    )
                                )
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "rightTop" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "RT"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "mt-30" },
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "left" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "Left"
                                    )
                                )
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "right" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "Right"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "mt-30" },
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "leftBottom" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "LB"
                                    )
                                )
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "rightBottom" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "RB"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "mt-30" },
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "bottomLeft" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "BL"
                                    )
                                )
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "bottom" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "Bottom"
                                    )
                                )
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                React.createElement(
                                    Tooltip,
                                    { title: "tip text", align: "bottomRight" },
                                    React.createElement(
                                        "span",
                                        { className: "align-item" },
                                        "BR"
                                    )
                                )
                            ),
                            React.createElement(
                                Col,
                                { grid: 0.2 },
                                " "
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "位置"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "支持12个不同的显示位置，通过设置align属性设置。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Tooltip = require(\"Tooltip\");\nconst Row = require(\"Row\");\nconst Col = require(\"Col\");\n\nReactDOM.render(\n<div>\n    <Row>\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"topLeft\">\n                <span className=\"align-item\">TL</span>\n            </Tooltip>\n        </Col>\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"top\">\n                <span className=\"align-item\">Top</span>\n            </Tooltip>\n        </Col>\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"topRight\">\n                <span className=\"align-item\">TR</span>\n            </Tooltip>\n        </Col>\n        <Col grid={0.2}>&nbsp;</Col>\n    </Row>\n    <Row className=\"mt-30\">\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"leftTop\">\n                <span className=\"align-item\">LT</span>\n            </Tooltip>\n        </Col>\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"rightTop\">\n                <span className=\"align-item\">RT</span>\n            </Tooltip>\n        </Col>\n    </Row>\n    <Row className=\"mt-30\">\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"left\">\n                <span className=\"align-item\">Left</span>\n            </Tooltip>\n        </Col>\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"right\">\n                <span className=\"align-item\">Right</span>\n            </Tooltip>\n        </Col>\n    </Row>\n    <Row className=\"mt-30\">\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"leftBottom\">\n                <span className=\"align-item\">LB</span>\n            </Tooltip>\n        </Col>\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"rightBottom\">\n                <span className=\"align-item\">RB</span>\n            </Tooltip>\n        </Col>\n    </Row>\n    <Row className=\"mt-30\">\n        <Col grid={0.2}>&nbsp;</Col>\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"bottomLeft\">\n                <span className=\"align-item\">BL</span>\n            </Tooltip>\n        </Col>\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"bottom\">\n                <span className=\"align-item\">Bottom</span>\n            </Tooltip>\n        </Col>\n        <Col grid={0.2}>\n            <Tooltip title=\"tip text\" align=\"bottomRight\">\n                <span className=\"align-item\">BR</span>\n            </Tooltip>\n        </Col>\n        <Col grid={0.2}>&nbsp;</Col>\n    </Row>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
