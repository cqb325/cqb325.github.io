define(["module", "react", "core/BaseComponent", 'classnames', 'Input', 'CheckBoxGroup', 'RadioGroup', 'DateTime', 'Select', 'TextArea', 'Upload', 'FormControl', 'Form'], function (module, React, BaseComponent, classnames, Input, CheckBoxGroup, RadioGroup, DateTime, Select, TextArea, Upload, FormControl, Form) {
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

    var SimpleForm = function (_BaseComponent) {
        _inherits(SimpleForm, _BaseComponent);

        function SimpleForm(props) {
            _classCallCheck(this, SimpleForm);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleForm).call(this, props));

            _this.state = {
                data: props.data || {},
                initData: props.initData || {}
            };

            _this.itemIndex = 0;
            return _this;
        }

        /**
         *
         * @param target
         * @param source
         * @param props
         */


        _createClass(SimpleForm, [{
            key: "mergeProps",
            value: function mergeProps(target, source, props) {
                if (props) {
                    props.forEach(function (prop) {
                        if (source[prop] != undefined) {
                            target[prop] = source[prop];
                        }
                    });
                }
            }
        }, {
            key: "onChange",
            value: function onChange(item, value, selectItem) {
                item.value = value;

                if (this.props.onChange) {
                    this.props.onChange(item, value, selectItem);
                }

                this.emit("change", item, value, selectItem);
            }
        }, {
            key: "renderItems",
            value: function renderItems(items) {
                var _this2 = this;

                if (items) {
                    return items.map(function (item) {
                        if (item.type === "label") {
                            return React.createElement(
                                "span",
                                _extends({ key: _this2.itemIndex++, style: item.style }, item.props),
                                item.label
                            );
                        }
                        if (item.type !== "row") {
                            var itemProps = _extends({}, item.props || {});
                            _this2.mergeProps(itemProps, item, ["name", "type", "rules", "messages"]);
                            itemProps.key = _this2.itemIndex++;
                            var initData = _this2.state.initData;
                            var val = initData[item.name];
                            if (typeof itemProps.value === 'function') {
                                val = itemProps.value(initData);
                            }
                            itemProps.value = val || itemProps.value;
                            itemProps.value = itemProps.value == undefined || itemProps.value == null ? undefined : itemProps.value + "";
                            return React.createElement(FormControl, _extends({}, itemProps, { label: item.label, onChange: _this2.onChange.bind(_this2, item) }));
                        } else {
                            return _this2.renderFormRow(item);
                        }
                    });
                }
                return null;
            }
        }, {
            key: "renderFormRow",
            value: function renderFormRow(item) {
                var items = this.renderItems(item.children);
                return React.createElement(
                    Form.Row,
                    _extends({}, item.props, { key: this.itemIndex++ }),
                    items
                );
            }
        }, {
            key: "getForm",
            value: function getForm() {
                return this.refs.form;
            }
        }, {
            key: "getFormItems",
            value: function getFormItems() {
                this.refs.form.getItems();
            }
        }, {
            key: "isValid",
            value: function isValid() {
                return this.refs.form.isValid();
            }
        }, {
            key: "getFormData",
            value: function getFormData() {
                return this.refs.form.getFormParams();
            }
        }, {
            key: "setFormData",
            value: function setFormData(data) {
                this.setState({ initData: data });
            }
        }, {
            key: "getFormControl",
            value: function getFormControl(name) {
                return this.refs.form.getFormControl(name);
            }
        }, {
            key: "getItem",
            value: function getItem(name) {
                return this.refs.form.getItem(name);
            }
        }, {
            key: "render",
            value: function render() {
                var formData = this.state.data;
                var formProps = _extends({}, formData.props || {});
                this.mergeProps(formProps, formData, ["action", "method", "encType"]);
                return React.createElement(
                    Form,
                    _extends({ ref: "form" }, formProps),
                    this.renderItems(formData.items)
                );
            }
        }]);

        return SimpleForm;
    }(BaseComponent);

    module.exports = SimpleForm;
});
