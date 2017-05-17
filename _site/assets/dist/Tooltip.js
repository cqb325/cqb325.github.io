define(["module", "react", 'react-dom', "classnames", 'internal/InnerTrigger', "core/BaseComponent"], function (module, React, ReactDOM, classnames, InnerTrigger, BaseComponent) {
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

    var Tooltip = function (_BaseComponent) {
        _inherits(Tooltip, _BaseComponent);

        function Tooltip(props) {
            _classCallCheck(this, Tooltip);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).call(this, props));

            _this.addState({
                title: props.title,
                theme: props.theme
            });

            //鼠标移走后延迟隐藏
            _this.delay = _this.props.delay || 0;
            _this.action = _this.props.trigger || "hover";
            if (_this.action === "hover") {
                _this.showAction = "mouseEnter";
                _this.hideAction = "mouseLeave";
            }
            if (_this.action === "click") {
                _this.showAction = "click";
                _this.hideAction = "click";
            }
            return _this;
        }

        /**
         * 获取显示的内容
         * @param title
         * @returns {XML}
         */


        _createClass(Tooltip, [{
            key: "getPopupElement",
            value: function getPopupElement(title) {
                return React.createElement(
                    "div",
                    { className: "cm-tooltip-body" },
                    React.createElement("div", { className: "cm-tooltip-arrow" }),
                    React.createElement(
                        "div",
                        { className: "cm-tooltip-inner" },
                        title || this.state.title
                    )
                );
            }
        }, {
            key: "onVisibleChange",
            value: function onVisibleChange(visible) {
                if (this.props.onVisibleChange) {
                    this.props.onVisibleChange(visible);
                }
            }
        }, {
            key: "setTitle",
            value: function setTitle(title) {
                this.setState({ title: title });
                this.refs.trigger.contentIsEmpty(!title);
                this.refs.trigger.updateContent(this.getPopupElement(title));
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames("cm-tooltip", className, this.state.theme, this.props.align);

                return React.createElement(
                    InnerTrigger,
                    {
                        ref: "trigger",
                        action: this.action,
                        hideAction: this.hideAction,
                        showAction: this.showAction,
                        popup: this.getPopupElement.bind(this),
                        align: this.props.align || "top",
                        delay: this.delay,
                        isEmpty: !this.state.title,
                        offsetEle: this.props.offsetEle,
                        onVisibleChange: this.onVisibleChange.bind(this),
                        extraProps: {
                            className: className,
                            style: style
                        }
                    },
                    React.isValidElement(this.props.children) ? this.props.children : React.createElement(
                        "span",
                        { className: "cm-tooltip-helper" },
                        this.props.children
                    )
                );
            }
        }]);

        return Tooltip;
    }(BaseComponent);

    Tooltip.defaultProps = {
        theme: "black"
    };

    Tooltip.propTypes = {
        /**
         * 显示的内容
         * @attribute title
         * @type {String}
         */
        title: PropTypes.string,
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
        style: PropTypes.object,
        /**
         * 主题
         * @attribute theme
         * @type {String}
         */
        theme: PropTypes.string,
        /**
         * 停靠位置 "topLeft","top","topRight","bottom","bottomLeft",
         * "bottomRight","left","leftTop","leftBottom","right",
         * "rightTop","rightBottom"
         * @attribute theme
         * @type {String}
         */
        align: PropTypes.oneOf(["topLeft", "top", "topRight", "bottom", "bottomLeft", "bottomRight", "left", "leftTop", "leftBottom", "right", "rightTop", "rightBottom"]),
        /**
         * 触发条件 "hover","click"
         * @attribute trigger
         * @type {String}
         */
        trigger: PropTypes.oneOf(["hover", "click"])
    };

    module.exports = Tooltip;
});
