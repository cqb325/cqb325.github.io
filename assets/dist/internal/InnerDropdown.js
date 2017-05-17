define(['module', 'react', 'react-dom', "velocity", 'internal/Popup', 'utils/Events', 'utils/Dom'], function (module, React, ReactDOM, velocity, Popup, Events, Dom) {
    'use strict';

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

    var isDescendant = Dom.isDescendant;

    /**
     * InnerDropdown 类
     * @class InnerDropdown
     * @constructor
     * @extend React.Component
     */

    var InnerDropdown = function (_React$Component) {
        _inherits(InnerDropdown, _React$Component);

        function InnerDropdown(props) {
            _classCallCheck(this, InnerDropdown);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InnerDropdown).call(this, props));

            var popupVisible = void 0;
            if ('popupVisible' in props) {
                popupVisible = !!props.popupVisible;
            } else {
                popupVisible = false;
            }

            _this.state = {
                popupVisible: popupVisible
            };

            _this.overlay = props.overlay;
            _this.overlaySelect = _this.overlay.onSelect;
            return _this;
        }

        _createClass(InnerDropdown, [{
            key: 'isClickToShow',
            value: function isClickToShow() {
                var action = this.props.action;

                return action.indexOf('click') !== -1;
            }
        }, {
            key: 'isClickToHide',
            value: function isClickToHide() {
                var action = this.props.action;

                return action.indexOf('click') !== -1;
            }
        }, {
            key: 'isMouseEnterToShow',
            value: function isMouseEnterToShow() {
                var action = this.props.action;

                return action.indexOf('hover') !== -1;
            }
        }, {
            key: 'isMouseLeaveToHide',
            value: function isMouseLeaveToHide() {
                var action = this.props.action;

                return action.indexOf('hover') !== -1;
            }
        }, {
            key: 'onClick',
            value: function onClick(event) {
                var nextVisible = !this.state.popupVisible;
                if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
                    this.setPopupVisible(!this.state.popupVisible);
                }
            }
        }, {
            key: 'onDocumentClick',
            value: function onDocumentClick(event) {
                var target = event.target || event.srcElement;
                var triggerEle = ReactDOM.findDOMNode(this.refs.target);
                var overlayEle = ReactDOM.findDOMNode(this.popupRef);
                if (target != triggerEle && !isDescendant(triggerEle, target) && target != overlayEle && !isDescendant(overlayEle, target)) {
                    this.setPopupVisible(false);
                }
                return false;
            }
        }, {
            key: 'onMouseEnter',
            value: function onMouseEnter(event) {
                if (!this.state.popupVisible) {
                    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
                }
            }
        }, {
            key: 'onMouseLeave',
            value: function onMouseLeave(event) {}
        }, {
            key: 'onDocumentMove',
            value: function onDocumentMove(event) {
                var _this2 = this;

                if (!this.state.popupVisible) {
                    return true;
                }
                var target = event.target || event.srcElement;
                if (this.timer) {
                    window.clearTimeout(this.timer);
                    this.timer = null;
                }
                this.timer = window.setTimeout(function () {
                    var triggerEle = ReactDOM.findDOMNode(_this2.refs.target);
                    var overlayEle = ReactDOM.findDOMNode(_this2.popupRef);
                    if (target != triggerEle && !isDescendant(triggerEle, target) && target != overlayEle && !isDescendant(overlayEle, target)) {
                        _this2.setPopupVisible(false);
                    }
                }, this.props.mouseLeaveDelay * 1000);
            }
        }, {
            key: 'onSelect',
            value: function onSelect(item) {
                this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
                if (this.overlaySelect) {
                    this.overlaySelect(item);
                }
            }
        }, {
            key: 'setPopupVisible',
            value: function setPopupVisible(popupVisible) {
                if (this._isMounted) {
                    this.setState({ popupVisible: popupVisible });
                    this.popupRef.update(popupVisible);
                }
            }
        }, {
            key: 'delaySetPopupVisible',
            value: function delaySetPopupVisible(popupVisible, delay) {
                var _this3 = this;

                window.setTimeout(function () {
                    if (_this3._isMounted) {
                        if (!_this3.state.isEmpty) {
                            _this3.setState({ popupVisible: popupVisible });
                            _this3.popupRef.update(popupVisible);
                        }
                    }
                }, delay * 1000);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this._isMounted = false;
                var p = this.container.parentNode;
                p.removeChild(this.container);

                var target = ReactDOM.findDOMNode(this.refs.target);
                Events.off(target, "click", this.onClick);
                Events.off(document, "click", this.onClick);
                Events.off(target, "mouseenter", this.onMouseEnter);
                Events.off(target, "mouseleave", this.onMouseLeave);
                Events.off(document, "mousemove", this.onDocumentMove);
            }
        }, {
            key: 'onVisibleChange',
            value: function onVisibleChange(visible) {
                var tip = ReactDOM.findDOMNode(this.popupRef);
                if (!visible) {
                    velocity(tip, "slideUp", { duration: 300 });
                } else {
                    velocity(tip, "slideDown", { duration: 300 });
                }
                if (this.props.onVisibleChange) {
                    this.props.onVisibleChange();
                }
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this4 = this;

                this._isMounted = true;
                this.container = document.createElement("div");
                document.body.appendChild(this.container);
                var baseEle = ReactDOM.findDOMNode(this);

                var props = {
                    align: this.props.align,
                    baseEle: baseEle,
                    visible: this.state.popupVisible,
                    extraProps: this.props.extraProps,
                    delay: this.props.delay,
                    onVisibleChange: this.onVisibleChange.bind(this)
                };

                var overlayProps = _extends({
                    onSelect: this.onSelect.bind(this),
                    prefix: "cm-dropdown-menu",
                    startIndex: 0
                }, this.overlay.props);
                var newOverlay = React.cloneElement(this.overlay, overlayProps);
                window.setTimeout(function () {
                    ReactDOM.render(React.createElement(
                        Popup,
                        _extends({ ref: function ref(_ref) {
                                _this4.popupRef = _ref;
                            } }, props),
                        newOverlay
                    ), _this4.container);
                }, 0);

                if (this.isClickToHide() || this.isClickToShow()) {
                    Events.on(document, "click", this.onDocumentClick.bind(this));
                }

                if (this.isMouseLeaveToHide()) {
                    Events.on(document, "mousemove", this.onDocumentMove.bind(this));
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var props = this.props;
                var children = props.children;
                var child = React.Children.only(children);
                var newChildProps = {
                    ref: "target"
                };

                if (this.isClickToHide() || this.isClickToShow()) {
                    newChildProps.onClick = this.onClick.bind(this);
                }

                if (this.isMouseEnterToShow()) {
                    newChildProps.onMouseEnter = this.onMouseEnter.bind(this);
                }

                if (this.isMouseLeaveToHide()) {
                    //newChildProps.onMouseLeave = this.onMouseLeave.bind(this);
                }

                return React.cloneElement(child, newChildProps);
            }
        }]);

        return InnerDropdown;
    }(React.Component);

    InnerDropdown.defaultProps = {
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0.2
    };

    module.exports = InnerDropdown;
});
