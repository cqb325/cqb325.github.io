define(["module", "react", 'react-dom', "classnames", 'Core', "core/BaseComponent", 'internal/EnhancedButton'], function (module, React, ReactDOM, classnames, Core, BaseComponent, EnhancedButton) {
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

    var Tab = function (_BaseComponent) {
        _inherits(Tab, _BaseComponent);

        function Tab(props) {
            _classCallCheck(this, Tab);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, props));

            _this.addState({
                data: props.data,
                activeIndex: props.activeIndex || 0
            });
            return _this;
        }

        _createClass(Tab, [{
            key: "_selectTab",
            value: function _selectTab(item) {
                if (!item.active) {

                    var data = this.state.data;
                    var index = data.indexOf(item);
                    item.active = true;
                    var last = this.state.activeIndex;

                    data[last].active = false;
                    this.emit("beforeSelect", item);
                    if (this.props.onBeforeSelect) {
                        this.props.onBeforeSelect(item);
                    }
                    this.setState({ activeIndex: index });
                    this.emit("select", item);
                    if (this.props.onSelect) {
                        this.props.onSelect(item);
                    }
                }
            }
        }, {
            key: "selectByIndex",
            value: function selectByIndex(index) {
                if (index > 0 && index < this.state.data.length) {
                    this.setState({
                        activeIndex: index
                    });
                }
            }
        }, {
            key: "getItem",
            value: function getItem(index) {
                return this.state.data[index];
            }
        }, {
            key: "getActiveItem",
            value: function getActiveItem() {
                return this.state.data[this.state.activeIndex];
            }
        }, {
            key: "_getHeader",
            value: function _getHeader() {
                var data = this.state.data,
                    activeIndex = this.state.activeIndex;
                return data.map(function (item, index) {
                    var _this2 = this;

                    if (activeIndex == index) {
                        item.active = true;
                    }

                    var className = classnames({
                        active: item.active
                    });
                    return React.createElement(
                        "li",
                        { key: index, className: className, onClick: function onClick() {
                                _this2._selectTab(item);
                            } },
                        React.createElement(
                            EnhancedButton,
                            { initFull: true, touchRippleColor: 'rgba(0, 0, 0, 0.1)' },
                            React.createElement(
                                "a",
                                { href: "javascript:void(0)" },
                                item.text
                            )
                        )
                    );
                }, this);
            }
        }, {
            key: "_getContent",
            value: function _getContent() {
                var data = this.state.data,
                    activeIndex = this.state.activeIndex;

                return data.map(function (item, index) {
                    if (activeIndex == index) {
                        item.active = true;
                    }

                    var className = classnames("cm-tab-panel", {
                        active: item.active
                    });

                    var component = item.component;
                    var tabPanel = React.createElement(component, { ref: item.id, data: item.data });
                    return React.createElement(
                        "div",
                        { key: index, className: className },
                        tabPanel
                    );
                }, this);
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames("cm-tab", className);

                var headers = this._getHeader();
                var contents = this._getContent();
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    React.createElement(
                        "ul",
                        { className: "cm-tab-header" },
                        headers
                    ),
                    React.createElement(
                        "div",
                        { className: "cm-tab-content" },
                        contents
                    )
                );
            }
        }]);

        return Tab;
    }(BaseComponent);

    module.exports = Tab;
});
