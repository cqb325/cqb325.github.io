define(['module', 'react', 'react-dom', 'utils/autoPrefix', 'utils/transitions', 'utils/shallowEqual'], function (module, React, ReactDOM, autoPrefix, transitions, shallowEqual) {
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

    var CircleRipple = function (_React$Component) {
        _inherits(CircleRipple, _React$Component);

        function CircleRipple() {
            _classCallCheck(this, CircleRipple);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(CircleRipple).apply(this, arguments));
        }

        _createClass(CircleRipple, [{
            key: 'shouldComponentUpdate',
            value: function shouldComponentUpdate(nextProps) {
                return !shallowEqual(this.props, nextProps);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                clearTimeout(this.enterTimer);
                //clearTimeout(this.leaveTimer);
            }
        }, {
            key: 'componentWillAppear',
            value: function componentWillAppear(callback) {
                //this.initializeAnimation(callback);
            }
        }, {
            key: 'componentWillEnter',
            value: function componentWillEnter(callback) {
                this.initializeAnimation(callback);
            }
        }, {
            key: 'componentDidAppear',
            value: function componentDidAppear() {
                //this.animate();
            }
        }, {
            key: 'componentDidEnter',
            value: function componentDidEnter() {
                this.animate();
            }
        }, {
            key: 'componentWillLeave',
            value: function componentWillLeave(callback) {
                var style = ReactDOM.findDOMNode(this).style;
                style.opacity = 0;
                // If the animation is aborted, remove from the DOM immediately
                var removeAfter = this.props.aborted ? 0 : 2000;
                this.enterTimer = setTimeout(callback, removeAfter);
            }
        }, {
            key: 'animate',
            value: function animate() {
                var style = ReactDOM.findDOMNode(this).style;
                var transitionValue = transitions.easeOut('2s', 'opacity') + ', ' + transitions.easeOut('1s', 'transform');
                autoPrefix.set(style, 'transition', transitionValue);
                autoPrefix.set(style, 'transform', 'scale(1)');
            }
        }, {
            key: 'initializeAnimation',
            value: function initializeAnimation(callback) {
                var style = ReactDOM.findDOMNode(this).style;
                style.opacity = this.props.opacity;
                autoPrefix.set(style, 'transform', 'scale(0)');
                this.leaveTimer = setTimeout(callback, 0);
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props;
                var color = _props.color;
                var opacity = _props.opacity;
                var style = _props.style;


                var mergedStyles = _extends({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    borderRadius: '50%',
                    display: 'inline-block',
                    backgroundColor: color,
                    opacity: opacity
                }, style);

                return React.createElement('div', { style: mergedStyles });
            }
        }]);

        return CircleRipple;
    }(React.Component);

    CircleRipple.propTypes = {
        aborted: React.PropTypes.bool,
        color: React.PropTypes.string,
        opacity: React.PropTypes.number,
        style: React.PropTypes.object
    };
    CircleRipple.defaultProps = {
        opacity: 0.1,
        aborted: false
    };


    module.exports = CircleRipple;
});
