define(["module", "react", "../BaseDemo", "FontIcon", "Tree", "../Code"], function (module, React, BaseDemo, FontIcon, Tree, Code) {
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
            key: "componentDidMount",
            value: function componentDidMount() {
                var tree = this.refs.tree;
                tree.on("open", function (item) {
                    if (item.open) {
                        window.setTimeout(function () {
                            tree.loadDynamicJSON(item, [{ id: new Date().getTime(), text: "新节点" }]);
                        }, 300);
                    }
                });
            }
        }, {
            key: "render",
            value: function render() {
                var treeData = [{
                    id: 0,
                    text: "中国",
                    open: true,
                    children: [{
                        id: '1',
                        text: "北京",
                        children: [{ id: '11', text: "海淀" }, { id: '12', text: "朝阳" }]
                    }, {
                        id: '2',
                        text: "上海"
                    }]
                }];

                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(Tree, { data: treeData, ref: "tree" })
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "实时加载子节点"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "在节点open的事件中通过loadDynamicJSON函数加载子节点",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Tree = require(\"Tree\");\n\nclass Demo extends BaseDemo{\n\n    componentDidMount(){\n        let tree = this.refs.tree;\n        tree.on(\"open\", function(item){\n            if(item.open) {\n                window.setTimeout(function(){\n                    tree.loadDynamicJSON(item, [{id: new Date().getTime(), text: \"新节点\"}]);\n                }, 300);\n            }\n        });\n    }\n\n    render(){\n        let treeData = [{\n            id: 0,\n            text: \"中国\",\n            open: true,\n            children: [\n                {\n                    id: '1',\n                    text: \"北京\",\n                    children: [{id: '11', text: \"海淀\"},{id: '12', text: \"朝阳\"}]\n                },{\n                    id: '2',\n                    text: \"上海\"\n                }\n            ]\n        }];\n\n        return (\n            <div className=\"code-box-demo\">\n                <Tree data={treeData} ref=\"tree\"></Tree>\n            </div>\n        );\n    }\n}\n\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
