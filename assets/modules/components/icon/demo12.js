define(["module", "react", "../BaseDemo", "FontIcon", "../Code"], function (module, React, BaseDemo, FontIcon, Code) {
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
                            FontIcon,
                            { font: "cfont", icon: "qq", style: { color: "#20A0FF", fontSize: "30px" } },
                            " "
                        ),
                        React.createElement(
                            FontIcon,
                            { font: "cfont", icon: "iphone", style: { color: "#20A0FF", fontSize: "30px" } },
                            " "
                        ),
                        React.createElement(
                            FontIcon,
                            { font: "cfont", icon: "android", style: { color: "#20A0FF", fontSize: "30px" } },
                            " "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "自定义字体"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "设置FontIcon的 font 属性即可设置字体的family，icon属性指向的字就是该字体中的图标，在页面中的head需要引入对应的css样式",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst FontIcon = require(\"FontIcon\");\n\nReactDOM.render(\n<div>\n    <FontIcon font=\"cfont\" icon={\"qq\"} style={{color: \"#20A0FF\", fontSize: \"30px\"}}> </FontIcon>\n    <FontIcon font=\"cfont\" icon={\"iphone\"} style={{color: \"#20A0FF\", fontSize: \"30px\"}}> </FontIcon>\n    <FontIcon font=\"cfont\" icon={\"android\"} style={{color: \"#20A0FF\", fontSize: \"30px\"}}> </FontIcon>\n</div>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
