define(['module', 'react', 'react-dom', 'utils/Dom', 'internal/CircleRipple'], function (module, React, ReactDOM, Dom, CircleRipple) {
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

    var Component = React.Component;
    var PropTypes = React.PropTypes;

    var ReactTransitionGroup = React.addons.TransitionGroup;

    var update = React.addons.update;

    /**
     * 添加元素
     * @param array
     * @param obj
     * @returns {*}
     */
    function push(array, obj) {
        var newObj = Array.isArray(obj) ? obj : [obj];
        return update(array, { $push: newObj });
    }

    /**
     * 删除元素
     * @param array
     * @returns {*}
     */
    function shift(array) {
        return update(array, { $splice: [[0, 1]] });
    }

    /**
     * TouchRipple 类
     * @class TouchRipple
     * @extend Component
     */

    var TouchRipple = function (_Component) {
        _inherits(TouchRipple, _Component);

        function TouchRipple(props, context) {
            _classCallCheck(this, TouchRipple);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TouchRipple).call(this, props, context));

            _this.handleMouseUp = function () {
                _this.end();
            };

            _this.handleMouseLeave = function () {
                _this.end();
            };

            _this.handleTouchStart = function (event) {
                event.stopPropagation();
                // If the user is swiping (not just tapping), save the position so we can
                // abort ripples if the user appears to be scrolling.
                if (_this.props.abortOnScroll && event.touches) {
                    _this.startListeningForScrollAbort(event);
                    _this.startTime = Date.now();
                }
                _this.start(event, true);
            };

            _this.handleTouchEnd = function () {
                _this.end();
            };

            _this.handleTouchMove = function (event) {
                // Stop trying to abort if we're already 300ms into the animation
                var timeSinceStart = Math.abs(Date.now() - _this.startTime);
                if (timeSinceStart > 300) {
                    _this.stopListeningForScrollAbort();
                    return;
                }

                // If the user is scrolling...
                var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
                var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
                // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
                if (deltaY > 6 || deltaX > 6) {
                    var currentRipples = _this.state.ripples;
                    var ripple = currentRipples[0];
                    // This clone will replace the ripple in ReactTransitionGroup with a
                    // version that will disappear immediately when removed from the DOM
                    var abortedRipple = React.cloneElement(ripple, { aborted: true });
                    // Remove the old ripple and replace it with the new updated one
                    currentRipples = shift(currentRipples);
                    currentRipples = push(currentRipples, abortedRipple);
                    _this.setState({ ripples: currentRipples }, function () {
                        // Call end after we've set the ripple to abort otherwise the setState
                        // in end() merges with this and the ripple abort fails
                        _this.end();
                    });
                }
            };

            // Touch start produces a mouse down event for compat reasons. To avoid
            // showing ripples twice we skip showing a ripple for the first mouse down
            // after a touch start. Note we don't store ignoreNextMouseDown in this.state
            // to avoid re-rendering when we change it.
            _this.ignoreNextMouseDown = false;

            _this.state = {
                // This prop allows us to only render the ReactTransitionGroup
                // on the first click of the component, making the inital render faster.
                hasRipples: false,
                nextKey: 0,
                ripples: []
            };
            return _this;
        }

        //componentWillMount(){
        //    //初始化的时候充满容器
        //    //if(this.props.initFull) {
        //    //    let ripples = this.state.ripples;
        //    //    ripples = push(ripples, (
        //    //        <CircleRipple
        //    //            key={this.state.nextKey}
        //    //            color={this.props.color || "rgba(255, 255, 255, .25)"}
        //    //            opacity={this.props.opacity || 0}
        //    //            touchGenerated={false}
        //    //            />
        //    //    ));
        //    //
        //    //    this.setState({
        //    //        hasRipples: true,
        //    //        nextKey: this.state.nextKey + 1,
        //    //        ripples: ripples
        //    //    });
        //    //}
        //}

        /**
         * 开始动画
         * @method start
         * @param event {Event} 事件对象
         * @param isRippleTouchGenerated
         */


        _createClass(TouchRipple, [{
            key: 'start',
            value: function start(event, isRippleTouchGenerated) {
                if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
                    this.ignoreNextMouseDown = false;
                    return;
                }

                var ripples = this.state.ripples;

                // Add a ripple to the ripples array
                ripples = push(ripples, React.createElement(CircleRipple, {
                    key: this.state.nextKey,
                    style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
                    color: this.props.color || "rgba(255, 255, 255, .25)",
                    opacity: this.props.opacity || 1,
                    touchGenerated: isRippleTouchGenerated
                }));

                this.ignoreNextMouseDown = isRippleTouchGenerated;
                this.setState({
                    hasRipples: true,
                    nextKey: this.state.nextKey + 1,
                    ripples: ripples
                });
            }
        }, {
            key: 'end',
            value: function end() {
                var currentRipples = this.state.ripples;
                this.setState({
                    ripples: shift(currentRipples)
                });
                if (this.props.abortOnScroll) {
                    this.stopListeningForScrollAbort();
                }
            }
        }, {
            key: 'handleMouseDown',
            value: function handleMouseDown(event) {
                // only listen to left clicks
                if (event.button === 0) {
                    this.start(event, false);
                }
            }
        }, {
            key: 'startListeningForScrollAbort',
            value: function startListeningForScrollAbort(event) {
                this.firstTouchY = event.touches[0].clientY;
                this.firstTouchX = event.touches[0].clientX;
                // Note that when scolling Chrome throttles this event to every 200ms
                // Also note we don't listen for scroll events directly as there's no general
                // way to cover cases like scrolling within containers on the page
                if (document.addEventListener) {
                    document.body.addEventListener('touchmove', this.handleTouchMove);
                }
            }
        }, {
            key: 'stopListeningForScrollAbort',
            value: function stopListeningForScrollAbort() {
                if (document.removeEventListener) {
                    document.body.removeEventListener('touchmove', this.handleTouchMove);
                }
            }
        }, {
            key: 'getRippleStyle',
            value: function getRippleStyle(event) {
                var style = {};
                var el = ReactDOM.findDOMNode(this);
                var elHeight = el.parentNode.parentNode.offsetHeight;
                var elWidth = el.parentNode.parentNode.offsetWidth;
                var offset = Dom.offset(el.parentNode.parentNode);
                var isTouchEvent = event.touches && event.touches.length;
                var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
                var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
                var pointerX = pageX - offset.left;
                var pointerY = pageY - offset.top;
                var topLeftDiag = this.calcDiag(pointerX, pointerY);
                var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
                var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
                var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
                var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
                var rippleSize = rippleRadius * 2;
                var left = pointerX - rippleRadius;
                var top = pointerY - rippleRadius;

                style.height = rippleSize + 'px';
                style.width = rippleSize + 'px';
                style.top = top + 'px';
                style.left = left + 'px';

                return style;
            }
        }, {
            key: 'calcDiag',
            value: function calcDiag(a, b) {
                return Math.sqrt(a * a + b * b);
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props;
                var children = _props.children;
                var style = _props.style;
                var _state = this.state;
                var hasRipples = _state.hasRipples;
                var ripples = _state.ripples;


                var rippleGroup = void 0;

                var mergedStyles = _extends({
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    overflow: 'hidden'
                }, style);
                if (hasRipples) {
                    rippleGroup = React.createElement(
                        ReactTransitionGroup,
                        { style: mergedStyles },
                        ripples
                    );
                } else {
                    if (true) {
                        ripples = push(ripples, React.createElement(CircleRipple, {
                            key: this.state.nextKey - 1,
                            color: this.props.color || "rgba(255, 255, 255, .25)",
                            opacity: 0,
                            touchGenerated: false,
                            aborted: true
                        }));

                        rippleGroup = React.createElement(
                            ReactTransitionGroup,
                            { style: mergedStyles },
                            ripples
                        );
                    }
                }

                return React.createElement(
                    'div',
                    {
                        onMouseUp: this.handleMouseUp,
                        onMouseDown: this.handleMouseDown.bind(this),
                        onMouseLeave: this.handleMouseLeave,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                        style: style
                    },
                    rippleGroup,
                    children
                );
            }
        }]);

        return TouchRipple;
    }(Component);

    TouchRipple.propTypes = {
        abortOnScroll: PropTypes.bool,
        centerRipple: PropTypes.bool,
        children: PropTypes.node,
        color: PropTypes.string,
        opacity: PropTypes.number,
        style: PropTypes.object
    };
    TouchRipple.defaultProps = {
        abortOnScroll: true
    };


    module.exports = TouchRipple;
});
