define(["module", "react", "core/Emitter"], function (module, React, Emitter) {
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

    var Component = React.Component;
    var PropTypes = React.PropTypes;

    /**
     * BaseComponent 类
     * @class BaseComponent
     * @constructor
     * @extend Component
     * @extend Emitter
     */

    var BaseComponent = function (_Component) {
        _inherits(BaseComponent, _Component);

        /**
         * 组件的id
         * @property id
         * @type String
         */

        /**
         * 组件的宽度
         * @property width
         * @type String
         * @default auto
         */

        /**
         * 是否禁用
         * @property disabled
         * @type Boolean
         */

        /**
         * className
         * @property className
         * @type String
         */

        function BaseComponent(props) {
            _classCallCheck(this, BaseComponent);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BaseComponent).call(this, props));

            _this.className = undefined;
            _this.style = undefined;
            _this.disabled = false;
            _this.readOnly = false;
            _this.width = "auto";
            _this.height = "auto";
            _this.id = "";
            _this.children = undefined;


            var prop = void 0;

            for (prop in props) {
                if (_this.hasOwnProperty(prop)) {
                    _this[prop] = props[prop];
                }
            }

            _this.state = {
                /**
                 * 组件的主题
                 * @property theme
                 * @type {String}
                 * @default default
                 */
                theme: props.theme || "default",
                /**
                 * 组件的显示状态
                 * @property visibility
                 * @type Boolean
                 * @default true
                 */
                visibility: true
            };
            return _this;
        }

        /**
         * 添加state
         * @method addState
         * @param params
         */

        /**
         * 组件的子节点内容
         * @property children
         * @type Element
         */

        /**
         * 组件的高度
         * @property height
         * @type String
         * @default auto
         */

        /**
         * 是否只读
         * @property readOnly
         * @type Boolean
         */

        /**
         * 自定义样式
         * @property style
         * @type Object
         */


        _createClass(BaseComponent, [{
            key: "addState",
            value: function addState(params) {
                if (!this.state) {
                    this.state = {};
                }
                for (var i in params) {
                    this.state[i] = params[i];
                }
            }
        }, {
            key: "show",
            value: function show() {
                var ret = this.emit("beforeShow");
                ret = ret == undefined ? true : ret;
                if (ret && !this.state.visibility) {
                    this.emit("show");
                    this.setState({ visibility: true });
                    this.emit("shown");
                }
                return this;
            }
        }, {
            key: "hide",
            value: function hide() {
                var ret = this.emit("beforeHide");
                ret = ret == undefined ? true : ret;
                if (ret && this.state.visibility) {
                    this.emit("hide");
                    this.setState({ visibility: false });
                    this.emit("hidden");
                }
                return this;
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return null;
            }
        }, {
            key: "setValue",
            value: function setValue() {}
        }, {
            key: "setTheme",
            value: function setTheme(theme) {
                this.setState({ theme: theme });
            }
        }, {
            key: "getTheme",
            value: function getTheme() {
                return this.state.theme;
            }
        }, {
            key: "destroy",
            value: function destroy() {}
        }, {
            key: "isLtIE9",
            value: function isLtIE9() {
                if (navigator.userAgent.indexOf("MSIE") > 0) {
                    if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                        return true;
                    } else if (navigator.userAgent.indexOf("MSIE 7.0") > 0) {
                        return true;
                    } else if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
                        return true;
                    } else if (navigator.userAgent.indexOf("MSIE 9.0") > 0) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement("div", null);
            }
        }]);

        return BaseComponent;
    }(Component);

    BaseComponent.propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        readOnly: PropTypes.bool,
        width: PropTypes.string,
        height: PropTypes.string,
        id: PropTypes.string,
        children: PropTypes.any
    };
    Emitter.inherits(BaseComponent);

    module.exports = BaseComponent;
});
