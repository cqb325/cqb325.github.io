define(["module", "react", "../BaseDemo", "FontIcon", "Card", "Row", "Col", "../Code"], function (module, React, BaseDemo, FontIcon, Card, Row, Col, Code) {
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
                            "div",
                            { style: { background: '#ECECEC', padding: '30px' }, className: "mt-20" },
                            React.createElement(
                                Row,
                                { className: "card-row" },
                                React.createElement(
                                    Col,
                                    { grid: 1 / 3, className: "card-col" },
                                    React.createElement(
                                        Card,
                                        { title: "Card Title" },
                                        React.createElement(
                                            "p",
                                            null,
                                            "Card content"
                                        )
                                    )
                                ),
                                React.createElement(
                                    Col,
                                    { grid: 1 / 3, className: "card-col" },
                                    React.createElement(
                                        Card,
                                        { title: "Card Title" },
                                        React.createElement(
                                            "p",
                                            null,
                                            "Card content"
                                        )
                                    )
                                ),
                                React.createElement(
                                    Col,
                                    { grid: 1 / 3, className: "card-col" },
                                    React.createElement(
                                        Card,
                                        { title: "Card Title" },
                                        React.createElement(
                                            "p",
                                            null,
                                            "Card content"
                                        )
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
                            "栅格卡片"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "在系统概览页面常常和栅格进行配合。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Card = require(\"Card\");\n\nReactDOM.render(\n<div style={{background: '#ECECEC', padding: '30px'}} className=\"mt-20\">\n    <Row className=\"card-row\">\n        <Col grid={1/3} className=\"card-col\">\n            <Card title=\"Card Title\">\n                <p>Card content</p>\n            </Card>\n        </Col>\n        <Col grid={1/3} className=\"card-col\">\n            <Card title=\"Card Title\">\n                <p>Card content</p>\n            </Card>\n        </Col>\n        <Col grid={1/3} className=\"card-col\">\n            <Card title=\"Card Title\">\n                <p>Card content</p>\n            </Card>\n        </Col>\n    </Row>\n</div>, mountNode);\n"
                        ),
                        React.createElement(
                            Code,
                            { className: "language-less" },
                            "\n.card-row{\n  margin-left: -8px;\n  margin-right: -8px;\n  .card-col{\n    padding: 0 8px;\n  }\n}\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
