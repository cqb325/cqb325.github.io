define(["module", "react", "../BaseDemo", "FontIcon", "Steps", "../Code", "Button"], function (module, React, BaseDemo, FontIcon, Steps, Code, Button) {
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

    var Step = Steps.Step;

    var Demo = function (_BaseDemo) {
        _inherits(Demo, _BaseDemo);

        function Demo(props) {
            _classCallCheck(this, Demo);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));

            _this.state = {
                current: 0
            };

            _this.steps = [{
                title: 'First',
                content: 'First-content'
            }, {
                title: 'Second',
                content: 'Second-content'
            }, {
                title: 'Last',
                content: 'Last-content'
            }];

            _this.next = _this.next.bind(_this);
            _this.prev = _this.prev.bind(_this);
            return _this;
        }

        _createClass(Demo, [{
            key: "next",
            value: function next() {
                var current = this.state.current;
                if (current < this.steps.length - 1) {
                    current++;

                    this.setState({
                        current: current
                    });
                }
            }
        }, {
            key: "prev",
            value: function prev() {
                var current = this.state.current;
                if (current > 0) {
                    current--;

                    this.setState({
                        current: current
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "code-box-demo" },
                        React.createElement(
                            Steps,
                            { current: this.state.current },
                            this.steps.map(function (step) {
                                return React.createElement(Step, { key: step.title, title: step.title });
                            })
                        ),
                        React.createElement(
                            "div",
                            { className: "steps-content" },
                            this.steps[this.state.current].content
                        ),
                        React.createElement(
                            "div",
                            { className: "mt-20" },
                            React.createElement(
                                Button,
                                { theme: "primary", onClick: this.next },
                                "Next"
                            ),
                            React.createElement(
                                Button,
                                { theme: "primary", onClick: this.prev, className: "ml-15" },
                                "Prev"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-desc" },
                        React.createElement(
                            "div",
                            { className: "code-box-title" },
                            "步骤切换"
                        ),
                        React.createElement(
                            "div",
                            null,
                            "通常配合内容及按钮使用，表示一个流程的处理进度。",
                            React.createElement(FontIcon, { icon: "chevron-circle-down", ref: "collapse", className: "collapse", onClick: this.openCloseCode.bind(this) })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "code-box-src", ref: "boxSrc" },
                        React.createElement(
                            Code,
                            { className: "language-jsx" },
                            "\nconst Steps = require(\"Steps\");\nconst Step = Steps.Step;\nconst Button = require(\"Button\");\n\nclass Demo extends BaseDemo{\n    constructor(props){\n        super(props);\n\n        this.state = {\n            current: 0\n        };\n\n        this.steps = [{\n            title: 'First',\n            content: 'First-content',\n        }, {\n            title: 'Second',\n            content: 'Second-content',\n        }, {\n            title: 'Last',\n            content: 'Last-content',\n        }];\n\n        this.next = this.next.bind(this);\n        this.prev = this.prev.bind(this);\n    }\n\n    next(){\n        let current = this.state.current;\n        if(current < this.steps.length - 1){\n            current ++;\n\n            this.setState({\n                current\n            });\n        }\n    }\n\n    prev(){\n        let current = this.state.current;\n        if(current > 0){\n            current --;\n\n            this.setState({\n                current\n            });\n        }\n    }\n\n    render(){\n        return (\n            <div>\n                <Steps current={this.state.current}>\n                    {this.steps.map((step)=>{ return <Step key={step.title} title={step.title} /> })}\n                </Steps>\n                <div className=\"steps-content\">{this.steps[this.state.current].content}</div>\n\n                <div className=\"mt-20\">\n                    <Button theme=\"primary\" onClick={this.next}>Next</Button>\n                    <Button theme=\"primary\" onClick={this.prev} className=\"ml-15\">Prev</Button>\n                </div>\n            </div>\n        );\n    }\n}\nReactDOM.render(\n<Demo/>, mountNode);\n"
                        )
                    )
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
