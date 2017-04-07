define(["module", "react", "../BaseDemo", "FontIcon", "Layout", "Sider", "../Code"], function (module, React, BaseDemo, FontIcon, Layout, Sider, Code) {
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

    var Header = Layout.Header;
    var Content = Layout.Content;
    var Footer = Layout.Footer;

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
                            Layout,
                            { className: "demo-layout" },
                            React.createElement(
                                Header,
                                null,
                                "Header"
                            ),
                            React.createElement(
                                Content,
                                null,
                                "Content"
                            ),
                            React.createElement(
                                Footer,
                                null,
                                "Footer"
                            )
                        ),
                        React.createElement(
                            Layout,
                            { className: "demo-layout mt-30" },
                            React.createElement(
                                Header,
                                null,
                                "Header"
                            ),
                            React.createElement(
                                Layout,
                                null,
                                React.createElement(
                                    Sider,
                                    null,
                                    "Sider"
                                ),
                                React.createElement(
                                    Content,
                                    null,
                                    "Content"
                                )
                            ),
                            React.createElement(
                                Footer,
                                null,
                                "Footer"
                            )
                        ),
                        React.createElement(
                            Layout,
                            { className: "demo-layout mt-30" },
                            React.createElement(
                                Header,
                                null,
                                "Header"
                            ),
                            React.createElement(
                                Layout,
                                null,
                                React.createElement(
                                    Content,
                                    null,
                                    "Content"
                                ),
                                React.createElement(
                                    Sider,
                                    null,
                                    "Sider"
                                )
                            ),
                            React.createElement(
                                Footer,
                                null,
                                "Footer"
                            )
                        ),
                        React.createElement(
                            Layout,
                            { className: "demo-layout mt-30" },
                            React.createElement(
                                Sider,
                                null,
                                "Sider"
                            ),
                            React.createElement(
                                Layout,
                                null,
                                React.createElement(
                                    Header,
                                    null,
                                    "Header"
                                ),
                                React.createElement(
                                    Content,
                                    null,
                                    "Content"
                                ),
                                React.createElement(
                                    Footer,
                                    null,
                                    "Footer"
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
                            "基本用法"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "基本布局",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Layout = require(\"Layout\");\nconst Header = Layout.Header;\nconst Content = Layout.Content;\nconst Footer = Layout.Footer;\nconst Sider = require(\"Sider\");\n\n\nReactDOM.render(\n<div>\n    <Layout className=\"demo-layout\">\n        <Header>Header</Header>\n        <Content>Content</Content>\n        <Footer>Footer</Footer>\n    </Layout>\n\n    <Layout className=\"demo-layout mt-30\">\n        <Header>Header</Header>\n        <Layout>\n            <Sider>Sider</Sider>\n            <Content>Content</Content>\n        </Layout>\n        <Footer>Footer</Footer>\n    </Layout>\n\n    <Layout className=\"demo-layout mt-30\">\n        <Header>Header</Header>\n        <Layout>\n            <Content>Content</Content>\n            <Sider>Sider</Sider>\n        </Layout>\n        <Footer>Footer</Footer>\n    </Layout>\n\n    <Layout className=\"demo-layout mt-30\">\n        <Sider>Sider</Sider>\n        <Layout>\n            <Header>Header</Header>\n            <Content>Content</Content>\n            <Footer>Footer</Footer>\n        </Layout>\n    </Layout>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
