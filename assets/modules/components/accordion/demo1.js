define(["module", "react", "react-dom", "../BaseDemo", "Accordion", "FontIcon", "../Code"], function (module, React, ReactDOM, BaseDemo, Accordion, FontIcon, Code) {
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
                            Accordion,
                            { style: { width: '500px' }, bordered: true },
                            React.createElement(
                                Accordion.Item,
                                { title: "Proactive Alerting", icon: "square" },
                                "Nothing is more important than getting timely and actionable data. Same as Crashlytics, we've built a layer of intelligent post-processing to alert you about key events within your app as they happen."
                            ),
                            React.createElement(
                                Accordion.Item,
                                { title: "Powerful Developer Account", icon: "calendar" },
                                "With Fabric, you’ll have a single, dedicated developer account with complete access to best-in-class mobile SDKs. Simply add a few lines of code and start coding your app right away. We'll even provision your keys for you."
                            ),
                            React.createElement(
                                Accordion.Item,
                                { title: "整合的移动SDK", icon: "th" },
                                "近几年来，移动SDK已呈现出爆炸式增长——每个SDK都致力于解决某个具体的问题。 虽然这为开发者提供了更多的解决方案和选择，来应对单个挑战，但是新的问题又 出现了:安装和管理门类广泛的SDK，可能是一项既繁琐又复杂的工程。"
                            ),
                            React.createElement(
                                Accordion.Item,
                                { title: "事件处理与合成事件", icon: "ellipsis-h" },
                                "Autobinding: 在 JavaScript 里创建回调的时候，为了保证 this 的正确性， 一般都需要显式地绑定方法到它的实例上。有了 React，所有方法被自动绑定到 了它的组件实例上。React 还缓存这些绑定方法，所以 CPU 和内存都是非常高效。 而且还能减少打字！"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "基本"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "简单实用",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Accordion = require(\"Accordion\");\n\nReactDOM.render(\n<div>\n    <Accordion style={{width: '500px'} } onSelect={selectMenu} bordered>\n        <Accordion.Item title=\"Proactive Alerting\" icon=\"square\">\n            Nothing is more important than getting timely and actionable data.\n            Same as Crashlytics, we've built a layer of intelligent post-processing\n            to alert you about key events within your app as they happen.\n        </Accordion.Item>\n        <Accordion.Item title=\"Powerful Developer Account\" icon=\"calendar\">\n            With Fabric, you’ll have a single, dedicated developer account with\n            complete access to best-in-class mobile SDKs. Simply add a few lines\n            of code and start coding your app right away. We'll even provision\n            your keys for you.\n        </Accordion.Item>\n        <Accordion.Item title=\"整合的移动SDK\" icon=\"th\">\n            近几年来，移动SDK已呈现出爆炸式增长——每个SDK都致力于解决某个具体的问题。\n            虽然这为开发者提供了更多的解决方案和选择，来应对单个挑战，但是新的问题又\n            出现了:安装和管理门类广泛的SDK，可能是一项既繁琐又复杂的工程。\n        </Accordion.Item>\n        <Accordion.Item title=\"事件处理与合成事件\" icon=\"ellipsis-h\">\n            Autobinding: 在 JavaScript 里创建回调的时候，为了保证 this 的正确性，\n            一般都需要显式地绑定方法到它的实例上。有了 React，所有方法被自动绑定到\n            了它的组件实例上。React 还缓存这些绑定方法，所以 CPU 和内存都是非常高效。\n            而且还能减少打字！\n        </Accordion.Item>\n    </Accordion>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
