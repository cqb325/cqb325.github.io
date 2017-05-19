define(["module", "react", "react-dom", "classnames", "utils/Events", "utils/Dom", "core/BaseComponent"], function (module, React, ReactDOM, classnames, Events, Dom, BaseComponent) {
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

            _this.orignOffset = {};
            _this.target = null;
            return _this;
        }

        _createClass(Affix, [{
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;

                Events.off(this.target, "scroll", this.onScroll);
            }
        }, {
            key: "onScroll",
            value: function onScroll(event) {
                if(!this._isMounted){
                    return false;
                }
                var container = Dom.dom(this.target);
                var scrollTop = container[0].scrollTop;
                var parentOffset = container.offset();
                var ele = Dom.dom(ReactDOM.findDOMNode(this));

                var offsetParent = this.getOffsetParent(ele[0]);
                var offsetParentPostion = {
                    top: 0,
                    left: 0
                };
                if (offsetParent && offsetParent != this.target) {
                    offsetParentPostion = Dom.dom(offsetParent).offset();
                }

                var distance = this.orignOffset.top - parentOffset.top - scrollTop;
                var left = this.orignOffset.left - parentOffset.left;
                if (distance > this.state.offsetTop) {
                    if (this._isMounted) {
                        this.setState({
                            offset: null
                        });
                    }
                } else {
                    if (this._isMounted) {
                        this.setState({
                            offset: {
                                top: scrollTop + parseFloat(this.state.offsetTop) - offsetParentPostion.top,
                                left: container[0].scrollLeft + Math.max(left, 0) - offsetParentPostion.left
                            }
                        });
                    }
                }
            }
        }, {
            key: "getOffsetParent",
            value: function getOffsetParent(ele) {
                var parent = ele.parentNode;

                while (parent !== null && parent.tagName !== "HTML") {
                    if (Dom.dom(parent).css("position") !== "static") {
                        return parent;
                    }
                    parent = parent.parentNode;
                }

                return null;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
                var ele = Dom.dom(ReactDOM.findDOMNode(this));

                var target = null;
                if (this.state.target) {
                    target = Dom.query(this.state.target);
                } else {
                    target = document.body;
                }
                this.target = target;
                var container = Dom.dom(target);
                if (container.css("position") == "static" && container[0].tagName !== "BODY") {
                    container.css("position", "relative");
                }
                this.orignOffset = ele.offset();

                var scrollEle = target;
                if (container[0].tagName == "BODY") {
                    scrollEle = window;
                }
                Events.on(scrollEle, "scroll", this.onScroll.bind(this));
            }
        }, {
            key: "render",
            value: function render() {
                var style = this.props.style || {};
                if (this.state.offset) {
                    style = _extends({ "top": this.state.offset.top + "px", left: this.state.offset.left + "px", position: "absolute" , zIndex: 1000}, style);
                }

                var className = classnames("cm-affix", this.props.className);

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
