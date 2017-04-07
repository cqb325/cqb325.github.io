define(["module", "react", "react-dom", "classnames", "core/BaseComponent", 'utils/grids', 'Button', 'utils/Dom', 'core/Ajax'], function (module, React, ReactDOM, classnames, BaseComponent, grids, Button, Dom, Ajax) {
    "use strict";

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

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
     * Form 类
     * @class Form
     * @constructor
     * @extend BaseComponent
     */

    var Form = function (_BaseComponent) {
        _inherits(Form, _BaseComponent);

        function Form(props) {
            _classCallCheck(this, Form);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props));

            _this.action = props.action;
            _this.method = props.method;
            _this.target = props.target;
            //是否使用默认提交按钮
            _this.useDefaultSubmitBtn = _this.props.useDefaultSubmitBtn == undefined ? true : _this.props.useDefaultSubmitBtn;

            _this.items = {};

            if (_this.props.component && _this.props.component != "form") {
                _this.method = "ajax";
            }

            _this.addState({});
            return _this;
        }

        /**
         * 是否验证通过
         * @method isValid
         * @returns {boolean} 是否验证通过
         */


        _createClass(Form, [{
            key: "isValid",
            value: function isValid() {
                for (var name in this.items) {
                    var control = this.items[name];

                    if (!control.ref.check()) {
                        return false;
                    }
                }

                return true;
            }
        }, {
            key: "getFormControl",
            value: function getFormControl(name) {
                return this.items[name];
            }
        }, {
            key: "getItem",
            value: function getItem(name) {
                if (this.items[name]) {
                    return this.items[name].ref.getReference();
                }

                return null;
            }
        }, {
            key: "itemBind",
            value: function itemBind(data) {
                if (data.name && data.isFormItem) {
                    this.items[data.name] = data;
                } else {
                    console.log(data.ref, "need a name property");
                }
            }
        }, {
            key: "itemUnBind",
            value: function itemUnBind(name) {
                delete this.items[name];
            }
        }, {
            key: "renderChildren",
            value: function renderChildren() {
                var _this2 = this;

                return React.Children.map(this.props.children, function (child) {
                    var componentName = "";
                    if (child.type) {
                        if (child.type.name) {
                            componentName = child.type.name;
                        } else {
                            var matches = child.type.toString().match(/function\s*([^(]*)\(/);
                            if (matches) {
                                componentName = matches[1];
                            }
                        }
                    }
                    if (componentName === 'FormControl' || componentName === 'Row') {
                        var props = _extends({
                            "data-itemBind": _this2.itemBind.bind(_this2)
                        }, child.props);
                        props.layout = _this2.props.layout ? _this2.props.layout : props.layout;
                        props.labelWidth = _this2.props.labelWidth ? _this2.props.labelWidth : props.labelWidth;
                        return React.cloneElement(child, props);
                    } else {
                        return child;
                    }
                });
            }
        }, {
            key: "submit",
            value: function submit() {
                var _props = this.props;
                var customParams = _props.customParams;
                var success = _props.success;
                var error = _props.error;

                var method = this.method;
                if (this.isValid()) {
                    if (method === "ajax") {
                        var params = customParams ? customParams() : this.getFormParams();
                        Ajax.ajax({
                            url: this.action,
                            method: 'post',
                            data: params,
                            dataType: "json",
                            success: success,
                            error: error
                        });
                    } else if (method === "custom") {
                        if (this.props.submit) {
                            this.props.submit();
                        }
                    } else {
                        this.refs.form.submit();
                    }
                }
            }
        }, {
            key: "getItems",
            value: function getItems() {
                return this.items;
            }
        }, {
            key: "getFormParams",
            value: function getFormParams() {
                var params = {};
                for (var name in this.items) {
                    var control = this.items[name];
                    var value = control.ref.getValue();
                    params[name] = value;
                }

                return params;
            }
        }, {
            key: "renderSubmit",
            value: function renderSubmit() {
                if (this.useDefaultSubmitBtn) {
                    return React.createElement(
                        Button,
                        { theme: "success", onClick: this.submit.bind(this) },
                        this.props.submitText || "保 存"
                    );
                } else {
                    return null;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props2 = this.props;
                var className = _props2.className;
                var grid = _props2.grid;
                var style = _props2.style;
                var layout = _props2.layout;
                var encType = _props2.encType;


                className = classnames("cm-form", className, getGrid(grid), _defineProperty({}, "cm-form-" + layout, layout));

                if (this.props.component && this.props.component === "div") {
                    return React.createElement(
                        "div",
                        { ref: "form", className: className, style: style, encType: encType, action: this.action,
                            method: this.method || "post", target: this.target },
                        this.renderChildren(),
                        React.createElement(
                            "div",
                            { style: { "textAlign": "center" } },
                            this.renderSubmit()
                        )
                    );
                } else {
                    return React.createElement(
                        "form",
                        { ref: "form", className: className, style: style, encType: encType, action: this.action,
                            method: this.method || "post", target: this.target },
                        this.renderChildren(),
                        React.createElement(
                            "div",
                            { style: { "textAlign": "center" } },
                            this.renderSubmit()
                        )
                    );
                }
            }
        }]);

        return Form;
    }(BaseComponent);

    Form.propTypes = {
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
         * 宽度
         * @attribute grid
         * @type {Object/Number}
         */
        grid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 提交服务
         * @attribute action
         * @type {String}
         */
        action: PropTypes.string,
        /**
         * 提交方式
         * @attribute method
         * @type {String}
         */
        method: PropTypes.oneOf(["post", "get", "ajax", "custom"]),
        /**
         * 提交目标
         * @attribute target
         * @type {String}
         */
        target: PropTypes.string,
        /**
         * 提交按钮文字
         * @attribute submitText
         * @type {String}
         */
        submitText: PropTypes.string,
        /**
         * 布局
         * @attribute layout
         * @type {String}
         */
        layout: PropTypes.string,
        /**
         * 是否使用默认的提交按钮
         * @attribute useDefaultSubmitBtn
         * @type {String/Boolean}
         */
        useDefaultSubmitBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    };

    module.exports = Form;

    var Row = function (_React$Component) {
        _inherits(Row, _React$Component);

        function Row(props) {
            _classCallCheck(this, Row);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Row).call(this, props));
        }

        _createClass(Row, [{
            key: "renderChildren",
            value: function renderChildren() {
                var _this4 = this;

                return React.Children.map(this.props.children, function (child) {
                    var componentName = "";
                    if (child.type) {
                        if (child.type.name) {
                            componentName = child.type.name;
                        } else {
                            var matches = child.type.toString().match(/function\s*([^(]*)\(/);
                            if (matches) {
                                componentName = matches[1];
                            }
                        }
                    }
                    if (componentName === 'FormControl') {
                        var props = _extends({
                            "data-itemBind": _this4.props["data-itemBind"]
                        }, child.props);
                        props.layout = _this4.props.layout ? _this4.props.layout : props.layout;
                        props.labelWidth = _this4.props.labelWidth ? _this4.props.labelWidth : props.labelWidth;
                        return React.cloneElement(child, props);
                    } else {
                        return child;
                    }
                });
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames("cm-form-row", this.props.className);
                return React.createElement(
                    "div",
                    { className: className, style: this.props.style },
                    this.renderChildren()
                );
            }
        }]);

        return Row;
    }(React.Component);

    Form.Row = Row;
});
