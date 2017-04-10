define(["module", "react", 'react-dom', "classnames", "core/BaseComponent", 'Core', 'utils/strings', 'utils/Dom', 'FontIcon', 'utils/grids', 'utils/shallowEqual'], function (module, React, ReactDOM, classnames, BaseComponent, Core, strings, Dom, FontIcon, grids, shallowEqual) {
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

    var substitute = strings.substitute;
    var PropTypes = React.PropTypes;
    var createFragment = React.addons.createFragment;

    var getGrid = grids.getGrid;

    var Panel = function (_BaseComponent) {
        _inherits(Panel, _BaseComponent);

        function Panel(props) {
            _classCallCheck(this, Panel);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).call(this, props));

            _this.addState({
                title: props.title || "",
                content: props.content || ""
            });
            return _this;
        }

        _createClass(Panel, [{
            key: "setTitle",
            value: function setTitle(title) {
                this.setState({ title: title });
            }
        }, {
            key: "setContent",
            value: function setContent(content) {
                this.setState({ content: content });
            }
        }, {
            key: "setTitleAndContent",
            value: function setTitleAndContent(title, content) {
                this.setState({ title: title, content: content });
            }
        }, {
            key: "renderHeader",
            value: function renderHeader() {
                var tools = this.props.tools;
                var align = tools ? tools.align || "right" : "";

                var tools_cont = null;
                if (tools) {
                    var components = tools.components;

                    if (components && components.length) {
                        (function () {
                            var className = classnames("cm-panel-tools", align);

                            var components_map = {};
                            components.forEach(function (comp, index) {
                                components_map["keys_" + index] = comp;
                            });
                            tools_cont = React.createElement(
                                "span",
                                { className: className },
                                createFragment(components_map)
                            );
                        })();
                    }
                }

                var text = React.createElement(
                    "span",
                    { className: "cm-panel-head-text" },
                    this.state.title
                );
                if (tools_cont) {
                    if (align === "right") {
                        return createFragment({
                            title: text,
                            tools: tools_cont
                        });
                    } else {
                        return createFragment({
                            tools: tools_cont,
                            title: text
                        });
                    }
                } else {
                    return text;
                }
            }
        }, {
            key: "renderFooter",
            value: function renderFooter() {
                var tools = this.props.footers;
                var tools_cont = null;
                if (tools) {
                    var components = tools.components;

                    if (components && components.length) {
                        (function () {
                            var className = classnames("cm-panel-footer-tools");

                            var components_map = {};
                            components.forEach(function (comp, index) {
                                components_map["keys_" + index] = comp;
                            });
                            tools_cont = React.createElement(
                                "div",
                                { className: "cm-panel-footer" },
                                React.createElement(
                                    "span",
                                    { className: className },
                                    createFragment(components_map)
                                )
                            );
                        })();
                    }
                }

                return tools_cont;
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (this.props.content !== nextProps.content || this.props.title !== nextProps.title) {
                    this.setState({
                        title: nextProps.title,
                        content: nextProps.content
                    });
                }
            }
        }, {
            key: "renderContent",
            value: function renderContent() {
                if (this.state.content.substring(0, 1) === "<") {
                    return React.createElement("div", { dangerouslySetInnerHTML: { __html: this.state.content } });
                } else {
                    return this.state.content;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;
                var grid = _props.grid;


                className = classnames("cm-panel", className, getGrid(grid));

                var headContent = this.renderHeader();
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    React.createElement(
                        "div",
                        { className: "cm-panel-title" },
                        headContent
                    ),
                    React.createElement(
                        "div",
                        { className: "cm-panel-content" },
                        this.props.children,
                        this.renderContent()
                    ),
                    this.renderFooter()
                );
            }
        }]);

        return Panel;
    }(BaseComponent);

    Panel.propTypes = {
        /**
         * 标题
         * @attribute title
         * @type {String}
         */
        title: PropTypes.string,
        /**
         * 自定义class
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
        /**
         * 自定义样式
         * @attribute style
         * @type {Object}
         */
        style: PropTypes.object
    };

    module.exports = Panel;
});
