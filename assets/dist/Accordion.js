define(["module", "react", "react-dom", "classnames", "core/BaseComponent", "utils/shallowEqual", "FontIcon", "velocity", "utils/UUID", 'internal/EnhancedButton'], function (module, React, ReactDOM, classnames, BaseComponent, shallowEqual, FontIcon, velocity, UUID, EnhancedButton) {
    "use strict";

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

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

    var PropTypes = React.PropTypes;

    var Item = function (_BaseComponent) {
        _inherits(Item, _BaseComponent);

        function Item(props) {
            _classCallCheck(this, Item);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));

            _this.active = props.open || false;
            _this.key = props.identify || UUID.v4();
            _this._animating = false;
            _this.addState({
                active: props.open || false
            });
            return _this;
        }

        _createClass(Item, [{
            key: "onClick",
            value: function onClick(event) {
                if (this._animating) {
                    return false;
                }
                if (!this.active) {
                    this.open();
                } else {
                    this.collapse();
                }
            }
        }, {
            key: "open",
            value: function open() {
                var _this2 = this;

                this._animating = true;
                var body = ReactDOM.findDOMNode(this.refs.body);
                if (this.props.onOpen) {
                    this.props.onOpen(this);
                }
                velocity(body, "slideDown", { duration: 300, complete: function complete() {
                        _this2.active = true;
                        if (_this2._isMounted) {
                            _this2.setState({
                                active: true
                            });
                        }
                        _this2._animating = false;
                        if (_this2.props.onOpened) {
                            _this2.props.onOpened(_this2);
                        }
                    } });
            }
        }, {
            key: "collapse",
            value: function collapse() {
                var _this3 = this;

                this._animating = true;
                var body = ReactDOM.findDOMNode(this.refs.body);
                if (this.props.onCollapse) {
                    this.props.onCollapse(this);
                }
                velocity(body, "slideUp", { duration: 300, complete: function complete() {
                        _this3.active = false;
                        if (_this3._isMounted) {
                            _this3.setState({
                                active: false
                            });
                        }
                        _this3._animating = false;
                        if (_this3.props.onCollapsed) {
                            _this3.props.onCollapsed(_this3);
                        }
                    } });
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
                this.props.parent.items.push(this);
                if (this.props.open) {
                    this.open();
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;
                var icon = _props.icon;
                var title = _props.title;
                var children = _props.children;


                className = classnames("cm-accordion-item", className, {
                    "cm-accordion-item-active": this.state.active
                });
                icon = icon ? React.createElement(FontIcon, { className: "cm-accordion-item-icon", icon: icon }) : null;
                return React.createElement(
                    "li",
                    { className: className, style: style },
                    React.createElement(
                        "div",
                        { className: "cm-accordion-item-head", onClick: this.onClick.bind(this) },
                        icon,
                        title
                    ),
                    React.createElement(
                        "div",
                        { className: "cm-accordion-item-body", ref: "body" },
                        children
                    )
                );
            }
        }]);

        return Item;
    }(BaseComponent);

    var Accordion = function (_BaseComponent2) {
        _inherits(Accordion, _BaseComponent2);

        function Accordion(props) {
            _classCallCheck(this, Accordion);

            var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).call(this, props));

            _this4.items = [];
            _this4.lastOpenItem = null;
            return _this4;
        }

        /**
         * 根据index索引展开
         * @param index
         */


        _createClass(Accordion, [{
            key: "activeByIndex",
            value: function activeByIndex(index) {
                if (this.items[index]) {
                    this.items[index].open();
                }
            }
        }, {
            key: "activeItem",
            value: function activeItem(item) {
                if (typeof item == "string") {
                    item = this.getItem(item);
                }

                if (item) {
                    item.open();
                }
            }
        }, {
            key: "getItem",
            value: function getItem(key) {
                for (var i in this.items) {
                    if (this.items[i].key === key) {
                        return this.items[i];
                    }
                }
                return null;
            }
        }, {
            key: "onOpen",
            value: function onOpen(item) {
                if (this.lastOpenItem) {
                    this.lastOpenItem.collapse();
                }
                this.lastOpenItem = item;

                if (this.props.onOpen) {
                    this.props.onOpen(item);
                }

                this.emit("open", item);
            }
        }, {
            key: "onCollapse",
            value: function onCollapse(item) {
                this.lastOpenItem = null;
                if (this.props.onCollapse) {
                    this.props.onCollapse(item);
                }
                this.emit("collapse", item);
            }
        }, {
            key: "renderItems",
            value: function renderItems() {
                var _this5 = this;

                var children = this.props.children;
                return React.Children.map(children, function (child) {
                    var props = child.props;
                    props = _extends({}, props, {
                        onCollapse: _this5.onCollapse.bind(_this5),
                        onOpen: _this5.onOpen.bind(_this5),
                        onCollapsed: _this5.props.onCollapsed,
                        onOpened: _this5.props.onOpened,
                        parent: _this5
                    });

                    return React.cloneElement(child, props);
                });
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames("cm-accordion", this.state.theme, this.props.className, {
                    "cm-accordion-bordered": this.props.bordered
                });

                var items = this.renderItems();

                return React.createElement(
                    "div",
                    { className: className, style: this.props.style },
                    React.createElement(
                        "ul",
                        { className: "cm-accordion-wrap" },
                        items
                    )
                );
            }
        }]);

        return Accordion;
    }(BaseComponent);

    Accordion.propTypes = {};

    Accordion.Item = Item;

    module.exports = Accordion;
});
