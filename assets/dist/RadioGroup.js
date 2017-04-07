define(["module", "react", "classnames", "core/BaseComponent", "CheckBox", "core/Ajax", "Core", "FormControl"], function (module, React, classnames, BaseComponent, CheckBox, Ajax, Core, FormControl) {
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

    var RadioGroup = function (_BaseComponent) {
        _inherits(RadioGroup, _BaseComponent);

        function RadioGroup(props) {
            _classCallCheck(this, RadioGroup);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RadioGroup).call(this, props));

            var data = props.data ? Core.clone(props.data) : null;

            data = _this._rebuildData(data);

            _this.addState({
                data: data,
                value: props.value == undefined ? "" : props.value
            });

            _this._lastChecked = null;
            return _this;
        }

        /**
         * 重构数据格式
         * @param data
         * @private
         */


        _createClass(RadioGroup, [{
            key: "_rebuildData",
            value: function _rebuildData(data) {
                if (!data) {
                    return null;
                }
                if (Object.prototype.toString.apply(data) === '[object Array]') {
                    var one = data[0];
                    if (Object.prototype.toString.apply(one) === '[object String]') {
                        return data.map(function (item, index) {
                            var option = { id: index + "", text: item };
                            return option;
                        });
                    }
                    if (Object.prototype.toString.apply(one) === '[object Object]') {
                        return data;
                    }
                    return null;
                }

                if (Object.prototype.toString.apply(data) === '[object Object]') {
                    var ret = [];
                    for (var id in data) {
                        var item = { id: id, text: data[id] };
                        ret.push(item);
                    }
                    return ret;
                }

                return null;
            }
        }, {
            key: "handleChange",
            value: function handleChange(value, checked, event, item) {
                var _props = this.props;
                var readOnly = _props.readOnly;
                var disabled = _props.disabled;


                if (readOnly || disabled) {
                    return;
                }

                if (this._lastChecked) {
                    this._lastChecked._node.updateState({
                        checked: false
                    });
                }

                this._lastChecked = item;

                this.handleTrigger(value);
            }
        }, {
            key: "handleTrigger",
            value: function handleTrigger(value) {
                this.state.value = value;
                if (this.props.onChange) {
                    this.props.onChange(value);
                }

                this.emit("change", value);
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                this.setState({ value: value });
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this.state.value;
            }
        }, {
            key: "_renderItems",
            value: function _renderItems() {
                var data = this.state.data || [];
                var _props2 = this.props;
                var valueField = _props2.valueField;
                var textField = _props2.textField;

                var currentValue = this.state.value;
                var name = this.props.name || "radio_" + new Date().getTime();
                return data.map(function (item, index) {
                    var value_key = valueField ? valueField : "id";
                    var text_key = textField ? textField : "text";
                    var value = item[value_key],
                        text = item[text_key];
                    var checked = currentValue === value;
                    if (checked) {
                        this._lastChecked = item;
                    }

                    return React.createElement(CheckBox, { key: index,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly,
                        type: "radio",
                        value: value,
                        label: text,
                        checked: checked,
                        item: item,
                        name: name,
                        onChange: this.handleChange.bind(this)
                    });
                }, this);
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var _this2 = this;

                if (this.props.url) {
                    (function () {
                        var scope = _this2;
                        Ajax.get(_this2.props.url, {}, function (data, err) {
                            scope.setState({
                                data: data
                            });
                        });
                    })();
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props3 = this.props;
                var className = _props3.className;
                var name = _props3.name;
                var layout = _props3.layout;

                className = classnames(className, 'cm-radio-group', {
                    stack: layout == "stack",
                    stick: this.props.stick
                });

                return React.createElement(
                    "span",
                    { className: className },
                    this._renderItems()
                );
            }
        }]);

        return RadioGroup;
    }(BaseComponent);

    RadioGroup.defaultProps = {
        layout: "inline"
    };

    RadioGroup.propTypes = {
        /**
         * 数据源
         * @attribute data
         * @type {Array}
         */
        data: PropTypes.array,
        /**
         * 远程数据源
         * @attribute url
         * @type {String}
         */
        url: PropTypes.string,
        /**
         * 默认值
         * @attribute value
         * @type {String}
         */
        value: PropTypes.any,
        /**
         * 只读属性
         * @attribute readOnly
         * @type {Boolean}
         */
        readOnly: PropTypes.bool,
        /**
         * 禁用属性
         * @attribute disabled
         * @type {Boolean}
         */
        disabled: PropTypes.bool,
        /**
         * 组名
         * @attribute name
         * @type {String}
         */
        name: PropTypes.string,
        /**
         * class样式名称
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
        /**
         * 行式inline、堆积stack布局
         * @attribute layout
         * @type {String}
         */
        layout: PropTypes.oneOf(["inline", "stack"]),
        /**
         * value字段
         * @attribute valueField
         * @type {String}
         */
        valueField: PropTypes.string,
        /**
         * 显示字段
         * @attribute textField
         * @type {String}
         */
        textField: PropTypes.string,
        /**
         * 值变化回调
         * @attribute onChange
         * @type {Function}
         */
        onChange: PropTypes.func
    };

    FormControl.register(RadioGroup, "radio", "array");

    module.exports = RadioGroup;
});
