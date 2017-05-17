define(["module", "react", "react-dom", "classnames", "utils/Events", "utils/Dom", "core/BaseComponent"], function (module, React, ReactDOM, classnames, Events, Dom, BaseComponent) {
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

    var PropTypes = React.PropTypes;

    var Affix = function (_BaseComponent) {
        _inherits(Affix, _BaseComponent);

        function Affix(props) {
            _classCallCheck(this, Affix);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Affix).call(this, props));

            _this.addState({
                offsetTop: props.offsetTop || 0,
                offsetBottom: props.offsetBottom || 0,
                target: props.target,
                offset: null
            });
            return _this;
        }

        _createClass(Affix, [{
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;

                var target = null;
                if (this.state.target) {
                    target = Dom.query(this.state.target);
                } else {
                    target = document.body;
                }
                target = Dom.dom(target);
                Events.off(target[0], "scroll", this._listener);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                this._isMounted = true;
                var ele = Dom.dom(ReactDOM.findDOMNode(this));
                var target = null;
                if (this.state.target) {
                    target = Dom.query(this.state.target);
                } else {
                    target = document.body;
                }
                target = Dom.dom(target);

                var parentOffset = target.offset();
                var eleOffset = ele.offset();
                var needH = eleOffset.top - parentOffset.top - this.state.offsetTop;
                var bw = target[0].style.borderLeftWidth;
                var pl = parseFloat(target[0].style.paddingLeft);

                var listener = this._listener = function (e) {
                    if (_this2._isMounted) {
                        if (target[0].scrollTop > needH) {
                            _this2.setState({
                                offset: {
                                    top: target[0].scrollTop + parseFloat(_this2.state.offsetTop) - needH,
                                    left: eleOffset.left - parentOffset.left - bw - pl
                                }
                            });
                        } else {
                            _this2.setState({
                                offset: null
                            });
                        }
                    }
                };

                Events.on(target[0], "scroll", listener);
            }
        }, {
            key: "render",
            value: function render() {
                var style = {};
                if (this.state.offset) {
                    style = { "top": this.state.offset.top + "px", left: this.state.offset.left + "px", position: "relative" };
                }

                var className = classnames("cm-affix", {
                    fixed: !!this.state.offset
                });

                return React.createElement(
                    "div",
                    { ref: "affix", style: style, className: className },
                    this.props.children
                );
            }
        }]);

        return Affix;
    }(BaseComponent);

    module.exports = Affix;
});
