define(['module', 'react', 'react-dom', 'internal/Popup', 'utils/Events'], function (module, React, ReactDOM, Popup, Events) {
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

    var InnerTrigger = function (_React$Component) {
        _inherits(InnerTrigger, _React$Component);

        function InnerTrigger(props) {
            _classCallCheck(this, InnerTrigger);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InnerTrigger).call(this, props));

            var popupVisible = void 0;
            if ('popupVisible' in props) {
                popupVisible = !!props.popupVisible;
            } else {
                popupVisible = false;
            }

            _this.state = {
                popupVisible: popupVisible,
                isEmpty: props.isEmpty
            };

            _this.popup = props.popup;
            return _this;
        }

        _createClass(InnerTrigger, [{
            key: 'isClickToShow',
            value: function isClickToShow() {
                var _props = this.props;
                var action = _props.action;
                var showAction = _props.showAction;

                return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
            }
        }, {
            key: 'isClickToHide',
            value: function isClickToHide() {
                var _props2 = this.props;
                var action = _props2.action;
                var hideAction = _props2.hideAction;

                return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
            }
        }, {
            key: 'isMouseEnterToShow',
            value: function isMouseEnterToShow() {
                var _props3 = this.props;
                var action = _props3.action;
                var showAction = _props3.showAction;

                return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
            }
        }, {
            key: 'isMouseLeaveToHide',
            value: function isMouseLeaveToHide() {
                var _props4 = this.props;
                var action = _props4.action;
                var hideAction = _props4.hideAction;

                return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
            }
        }, {
            key: 'onClick',
            value: function onClick(event) {
                event.preventDefault();
                var nextVisible = !this.state.popupVisible && !this.state.isEmpty;
                if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
                    this.setPopupVisible(!this.state.popupVisible);
                }
            }
        }, {
            key: 'onMouseEnter',
            value: function onMouseEnter(event) {
                this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
            }
        }, {
            key: 'onMouseLeave',
            value: function onMouseLeave() {
                this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
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
                var _this2 = this;

                window.setTimeout(function () {
                    if (_this2._isMounted) {
                        if (!_this2.state.isEmpty) {
                            _this2.setState({ popupVisible: popupVisible });
                            _this2.popupRef.update(popupVisible);
                        }
                    }
                }, delay * 1000);
            }
        }, {
            key: 'updateContent',
            value: function updateContent(title) {
                this.popupRef.setContent(title);
            }
        }, {
            key: 'contentIsEmpty',
            value: function contentIsEmpty(empty) {
                this.setState({ isEmpty: empty });
                if (empty) {
                    this.setState({ popupVisible: false });
                    this.popupRef.update(false);
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this._isMounted = false;
                var p = this.container.parentNode;
                p.removeChild(this.container);

                var target = ReactDOM.findDOMNode(this.refs.target);
                Events.off(target, "click", this.onClick);
                Events.off(target, "mouseenter", this.onMouseEnter);
                Events.off(target, "mouseleave", this.onMouseLeave);
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this3 = this;

                this._isMounted = true;
                this.container = document.createElement("div");
                document.body.appendChild(this.container);
                var baseEle = ReactDOM.findDOMNode(this);

                var props = {
                    align: this.props.align,
                    baseEle: baseEle,
                    offsetEle: this.props.offsetEle,
                    visible: this.state.popupVisible,
                    extraProps: this.props.extraProps,
                    delay: this.props.delay,
                    onVisibleChange: this.props.onVisibleChange
                };

                window.setTimeout(function () {
                    ReactDOM.render(React.createElement(
                        Popup,
                        _extends({ ref: function ref(_ref) {
                                _this3.popupRef = _ref;
                            } }, props),
                        typeof _this3.popup === 'function' ? _this3.popup() : _this3.popup
                    ), _this3.container);
                }, 0);
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
                    newChildProps.onMouseLeave = this.onMouseLeave.bind(this);
                }

                return React.cloneElement(child, newChildProps);
            }
        }]);

        return InnerTrigger;
    }(React.Component);

    InnerTrigger.defaultProps = {
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0.1
    };

    module.exports = InnerTrigger;
});
