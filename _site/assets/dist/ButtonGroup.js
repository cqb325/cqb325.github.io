define(["module", "react", "classnames", "core/BaseComponent", 'FontIcon', 'internal/EnhancedButton'], function (module, React, classnames, BaseComponent, FontIcon, EnhancedButton) {
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

    var ButtonGroup = function (_BaseComponent) {
        _inherits(ButtonGroup, _BaseComponent);

        function ButtonGroup(props) {
            _classCallCheck(this, ButtonGroup);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonGroup).call(this, props));

            _this.buttons = [];
            return _this;
        }

        _createClass(ButtonGroup, [{
            key: "itemBind",
            value: function itemBind(button) {
                var _this2 = this;

                this.buttons.push(button);
                button.on("click", function () {
                    if (!button.getActive()) {
                        _this2.buttons.forEach(function (btn) {
                            if (btn != button) {
                                btn.setActive(false);
                            } else {
                                if (_this2.props.onSelect) {
                                    _this2.props.onSelect(btn);
                                }
                                _this2.emit("select", btn);
                                btn.setActive(true);
                            }
                        });
                    }
                });
            }
        }, {
            key: "renderButtons",
            value: function renderButtons() {
                var _this3 = this;

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
                    if (componentName === 'Button') {
                        var props = _extends({
                            "data-itemBind": _this3.itemBind.bind(_this3)
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
                var className = classnames(this.props.className, 'cm-button-group', this.props.size);

                var btns = this.renderButtons();
                return React.createElement(
                    "span",
                    { className: className, style: this.props.style },
                    btns
                );
            }
        }]);

        return ButtonGroup;
    }(BaseComponent);

    ButtonGroup.propTypes = {
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

    module.exports = ButtonGroup;
});
