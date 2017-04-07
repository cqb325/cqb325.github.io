define(["module", "react", "classnames", "core/BaseComponent", "CheckBox", "core/Ajax", 'FormControl'], function (module, React, classnames, BaseComponent, CheckBox, Ajax, FormControl) {
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

    var CheckBoxGroup = function (_BaseComponent) {
        _inherits(CheckBoxGroup, _BaseComponent);

        function CheckBoxGroup(props) {
            _classCallCheck(this, CheckBoxGroup);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckBoxGroup).call(this, props));

            _this.addState({
                data: props.data,
                value: props.value == undefined ? "" : props.value
            });
            return _this;
        }

        /**
         * 值变化回调
         * @method handleChange
         * @param value {String} 当前操作对象的值
         * @param checked   {Boolean} 知否选中
         * @param event     {Event} 事件对象
         * @param item  {Object} 当前操作对象
         */


        _createClass(CheckBoxGroup, [{
            key: "handleChange",
            value: function handleChange(value, checked, event, item) {
                var _props = this.props;
                var readOnly = _props.readOnly;
                var disabled = _props.disabled;


                if (readOnly || disabled) {
                    return;
                }

                item._checked = checked;
                var data = this.state.data,
                    ret = [];
                var value_key = this.props.valueField ? this.props.valueField : "id";
                data.forEach(function (theItem) {
                    if (theItem._checked) {
                        var _value = theItem[value_key];
                        ret.push(_value);
                    }
                });

                this.handleTrigger(ret.join(","));
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
                var _props2 = this.props;
                var valueField = _props2.valueField;
                var textField = _props2.textField;
                var name = _props2.name;


                var data = this.state.data || [];
                var values = this.state.value.split(",");
                return data.map(function (item, index) {
                    var value_key = valueField ? valueField : "id";

                    var text_key = textField ? textField : "text";
                    var value = item[value_key],
                        text = item[text_key];
                    var checked = values.indexOf(value) != -1;
                    item._checked = checked;

                    return React.createElement(CheckBox, { key: index,
                        name: name,
                        disabled: this.props.disabled,
                        readOnly: this.props.readOnly,
                        value: value,
                        label: text,
                        checked: checked,
                        item: item,
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

                className = classnames(className, 'cm-checkbox-group', {
                    stack: layout == "stack"
                });

                return React.createElement(
                    "span",
                    { className: className },
                    this._renderItems()
                );
            }
        }]);

        return CheckBoxGroup;
    }(BaseComponent);

    CheckBoxGroup.defaultProps = {
        layout: "inline"
    };

    CheckBoxGroup.propTypes = {
        /**
         * 数据源
         * @attribute data
         * @type {Array}
         */
        data: PropTypes.array,
        /**
         * 默认值
         * @attribute value
         * @type {String}
         */
        value: PropTypes.string,
        /**
         * 数据源地址
         * @attribute url
         * @type {String}
         */
        url: PropTypes.string,
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

    FormControl.register(CheckBoxGroup, "checkbox", "array");

    module.exports = CheckBoxGroup;
});
