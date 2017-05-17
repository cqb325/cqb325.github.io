define(["module", "react", "classnames", "core/BaseComponent"], function (module, React, classnames, BaseComponent) {
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

    var Breadcrumb = function (_BaseComponent) {
        _inherits(Breadcrumb, _BaseComponent);

        function Breadcrumb(props) {
            _classCallCheck(this, Breadcrumb);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Breadcrumb).call(this, props));
        }

        _createClass(Breadcrumb, [{
            key: "renderItems",
            value: function renderItems() {
                var _this2 = this;

                return React.Children.map(this.props.children, function (child) {
                    var componentName = "";
                    if (child.type) {
                        if (child.type.name) {
                            componentName = child.type.name;
                        } else {
                            var matches = child.type.toString().match(/function\s*([^(]*)\(/);
                            if (matches) {
                                componentName = matches[1];
                            }
                        }
                    }
                    if (componentName === 'Item') {
                        var props = _extends({
                            "separator": _this2.props.separator
                        }, child.props);
                        return React.cloneElement(child, props);
                    } else {
                        return child;
                    }
                });
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames("cm-breadcrumb", this.props.className);
                return React.createElement(
                    "div",
                    { className: className, style: this.props.style },
                    this.renderItems()
                );
            }
        }]);

        return Breadcrumb;
    }(BaseComponent);

    Breadcrumb.propTypes = {
        /**
         * 自定义class
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
        /**
         * 自定义style
         * @attribute style
         * @type {Object}
         */
        style: PropTypes.object
    };

    var Item = function (_BaseComponent2) {
        _inherits(Item, _BaseComponent2);

        function Item(props) {
            _classCallCheck(this, Item);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));
        }

        _createClass(Item, [{
            key: "render",
            value: function render() {
                var className = classnames("cm-breadcrumb-link", this.props.className);
                var link = this.props.link;
                var linkEle = link ? React.createElement(
                    "a",
                    { className: className, href: this.props.link },
                    this.props.children
                ) : React.createElement(
                    "span",
                    { className: className },
                    this.props.children
                );
                return React.createElement(
                    "span",
                    null,
                    linkEle,
                    React.createElement(
                        "span",
                        { className: "cm-breadcrumb-separator" },
                        this.props.separator || "/"
                    )
                );
            }
        }]);

        return Item;
    }(BaseComponent);

    Item.propTypes = {
        /**
         * 自定义class
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
        /**
         * 自定义style
         * @attribute style
         * @type {Object}
         */
        style: PropTypes.object,
        /**
         * 链接地址
         * @attribute link
         * @type {String}
         */
        link: PropTypes.string
    };

    Breadcrumb.Item = Item;

    module.exports = Breadcrumb;
});
