define(["module", "react", "../BaseDemo", "Row", "Col", "FontIcon", "../Code"], function (module, React, BaseDemo, Row, Col, FontIcon, Code) {
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
                            { className: "demo-row" },
                            React.createElement(
                                Col,
                                { grid: 1 / 4, className: "demo-col" },
                                "grid(1/4)"
                            ),
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 4, offset: 1 / 2 }, className: "demo-col" },
                                "grid{{width: 1/4, offset: 1/2}}"
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "demo-row" },
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 3, offset: 1 / 2 }, className: "demo-col" },
                                "grid{{width: 1/3, offset: 1/2}}"
                            )
                        ),
                        React.createElement(
                            Row,
                            { className: "demo-row" },
                            React.createElement(
                                Col,
                                { grid: { width: 1 / 2, offset: 1 / 6 }, className: "demo-col" },
                                "grid{{width: 1/2, offset: 1/6}}"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "左右偏移"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "使用 grid 的 offset 可以将列向右侧偏。例如，offset=",
                            1 / 2,
                            " 将元素向右侧偏移了 50% 的宽度。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Row = require(\"Row\");\nconst Col = require(\"Col\");\n\nReactDOM.render(\n<div>\n    <Row className=\"demo-row\">\n        <Col grid={1/4} className=\"demo-col\">grid(1/4)</Col>\n        <Col grid={{width: 1/4, offset: 1/2}} className=\"demo-col\">{'grid{{width: 1/4, offset: 1/2}}'}</Col>\n    </Row>\n    <Row className=\"demo-row\">\n        <Col grid={{width: 1/3, offset: 1/2}} className=\"demo-col\">{'grid{{width: 1/3, offset: 1/2}}'}</Col>\n    </Row>\n    <Row className=\"demo-row\">\n        <Col grid={{width: 1/2, offset: 1/6}} className=\"demo-col\">{'grid{{width: 1/2, offset: 1/6}}'}</Col>\n    </Row>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
