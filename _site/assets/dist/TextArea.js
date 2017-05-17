define(["module", "react", "classnames", "core/BaseComponent", 'utils/grids', 'utils/omit', 'utils/Dom', 'utils/regs', 'FormControl'], function (module, React, classnames, BaseComponent, grids, Omit, Dom, Regs, FormControl) {
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

    var getGrid = grids.getGrid;

    var PropTypes = React.PropTypes;

    /**
     * TextArea 类
     * @class TextArea
     * @constructor
     * @extend BaseComponent
     */

    var TextArea = function (_BaseComponent) {
        _inherits(TextArea, _BaseComponent);

        function TextArea(props) {
            _classCallCheck(this, TextArea);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, props));

            _this.addState({
                value: props.value
            });
            return _this;
        }

        _createClass(TextArea, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var value = nextProps.value;
                if (value !== this.props.value && value !== this.state.value) {
                    this.setState({ value: value });
                }
            }
        }, {
            key: "handleChange",
            value: function handleChange(event) {
                this.props.autoHeight && this.autoHeight(event);

                var _props = this.props;
                var readOnly = _props.readOnly;
                var type = _props.type;
                var trigger = _props.trigger;


                if (readOnly) {
                    return;
                }

                var value = event.target.value;

                this.setState({ value: value });

                if (trigger === 'change') {
                    this.handleTrigger(event);
                }
            }
        }, {
            key: "autoHeight",
            value: function autoHeight(event) {
                var ele = event.target;
                if (!this.initHeight) {
                    this.initHeight = ele.clientHeight;
                }
                if (ele.scrollHeight > this.initHeight) {
                    ele.style.height = 'auto';
                    ele.style.overflowY = "hidden";
                    ele.scrollTop = 0; //防抖动
                    var pd = this.getPadding(ele);
                    ele.style.height = ele.scrollHeight + pd + 'px';
                }
            }
        }, {
            key: "getPadding",
            value: function getPadding(ele) {
                var pd_top = parseFloat(Dom.css(ele, "paddingTop"));
                var pd_bottom = parseFloat(Dom.css(ele, "paddingBottom"));
                var bd_top = parseFloat(Dom.css(ele, "borderTopWidth"));
                var bd_bottom = parseFloat(Dom.css(ele, "borderBottomWidth"));

                return pd_top + pd_bottom + bd_top + bd_bottom;
            }
        }, {
            key: "handleTrigger",
            value: function handleTrigger(event) {
                var value = event.target.value;
                if (this.props.onChange) {
                    this.props.onChange(value, event);
                }
                this.emit("change", value);
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this.state.value;
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                this.setState({ value: value });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var _props2 = this.props;
                var className = _props2.className;
                var grid = _props2.grid;
                var type = _props2.type;
                var trigger = _props2.trigger;
                var style = _props2.style;
                var height = _props2.height;

                var others = Omit(this.props, ["className", "handleChange", "data-valueType", "data-itemBind", "grid", "type", "trigger", "style", "autoHeight"]);
                var handleChange = this.props.handleChange ? function (event) {
                    _this2.props.handleChange(event, { component: _this2 });
                } : this.handleChange.bind(this);
                style = style || {};
                if (height != undefined && height != null) {
                    style["height"] = height;
                }
                var props = {
                    className: classnames(className, 'cm-form-control', getGrid(grid)),
                    onChange: handleChange,
                    style: style
                };

                if (trigger && trigger !== 'change') {
                    var handle = 'on' + trigger.charAt(0).toUpperCase() + trigger.slice(1);
                    props[handle] = handleChange;
                }

                return React.createElement("textarea", _extends({}, others, props, { value: this.state.value }));
            }
        }]);

        return TextArea;
    }(BaseComponent);

    FormControl.register(TextArea, ["textarea"]);

    TextArea.propTypes = {
        /**
         * 默认选中的值
         * @attribute value
         * @type {String}
         */
        value: PropTypes.string,
        /**
         * 自定义class
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
        /**
         * 禁用
         * @attribute disabled
         * @type {Boolean}
         */
        disabled: PropTypes.bool,
        /**
         * 只读
         * @attribute readOnly
         * @type {Boolean}
         */
        readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        /**
         * 自适应高度
         * @attribute autoHeight
         * @type {Boolean}
         */
        autoHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        /**
         * 高度
         * @attribute height
         * @type {String}
         */
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    };

    TextArea.defaultProps = {
        trigger: 'blur',
        value: ''
    };

    module.exports = TextArea;
});
