define(["module", "react", "react-dom", "classnames", "core/BaseComponent", 'utils/omit', 'utils/regs', 'utils/Dom', 'utils/Validation', 'Label', 'core/Ajax', 'Tooltip'], function (module, React, ReactDOM, classnames, BaseComponent, Omit, Regs, Dom, Validation, Label, Ajax, Tooltip) {
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

    var FormControl = function (_BaseComponent) {
        _inherits(FormControl, _BaseComponent);

        function FormControl(props) {
            _classCallCheck(this, FormControl);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormControl).call(this, props));

            _this.displayName = "FormControl";


            _this.rules = props.rules || {};
            _this.messages = props.messages || {};
            _this._isFormItem = props.isFormItem != undefined ? props.isFormItem : true;
            _this._name = props.name;
            _this._areaLabel = false;
            _this._tipAlign = props.tipAlign || "right";
            if (props.required) {
                _this.rules["required"] = true;
            }
            _this.addState({
                errorTip: ''
            });

            _this.item = null;
            return _this;
        }

        /**
         * 获取类型对应的元素
         * @method _getControl
         * @param type
         * @returns {*}
         * @private
         */


        _createClass(FormControl, [{
            key: "_getControl",
            value: function _getControl(type) {
                var component = null;
                if (type) {
                    component = FormControl.COMPONENTS[type];
                    if (!component) {
                        component = FormControl.COMPONENTS["text"];
                    }

                    var others = Omit(this.props, ["itemStyle", "labelWidth", "handleChange", "data-valueType", "className", "children", "layout", "rules", "messages", "isFormItem", "onValid", "onChange", "label", "labelGrid"]);
                    var props = _extends({
                        type: this.props.type,
                        key: this.props.name,
                        id: this.props.id,
                        ref: "formItem",
                        "data-valueType": component.valueType
                    }, others);
                    var componentName = component.component.name || component.component.toString().match(/function\s*([^(]*)\(/)[1];
                    if (componentName === 'Input') {
                        props["handleChange"] = this.handleChange.bind(this);
                    } else if (componentName === 'TextArea') {
                        this._areaLabel = true;
                        props["handleChange"] = this.handleChange.bind(this);
                    } else {
                        props.onChange = this.onChange.bind(this);
                    }

                    props.style = this.props.itemStyle;

                    component = React.createElement(component.component, props);
                }
                return component;
            }
        }, {
            key: "_renderChildren",
            value: function _renderChildren() {
                var _this2 = this;

                var children = this.props.children;


                return React.Children.map(children, function (child, index) {
                    var registerComp = _this2.isRegisterComponent(child);
                    if (registerComp) {
                        var others = Omit(_this2.props, ["itemStyle", "labelWidth", "handleChange", "data-valueType", "tipAlign", "className", "children", "layout", "rules", "messages", "isFormItem", "onValid", "onChange", "label", "labelGrid"]);
                        var props = _extends({
                            key: index,
                            "data-valueType": registerComp.valueType,
                            ref: "formItem"
                        }, others);

                        props = _extends(props, child.props);

                        var componentName = child.type.name || child.type.toString().match(/function\s*([^(]*)\(/)[1];

                        if (componentName === 'Input' || componentName === 'TextArea') {
                            props["handleChange"] = _this2.handleChange.bind(_this2);
                            if (componentName === 'TextArea') {
                                _this2._areaLabel = true;
                            }
                        } else {
                            props.onChange = _this2.onChange.bind(_this2);
                        }

                        props.style = _this2.props.itemStyle;

                        return React.cloneElement(child, props);
                    } else {
                        return child;
                    }
                });
            }
        }, {
            key: "isRegisterComponent",
            value: function isRegisterComponent(child) {
                for (var type in FormControl.COMPONENTS) {
                    var typeComp = FormControl.COMPONENTS[type];
                    if (typeComp.component == child.type) {
                        return typeComp;
                    }
                }

                return false;
            }
        }, {
            key: "handleChange",
            value: function handleChange(event) {
                var _props = this.props;
                var readOnly = _props.readOnly;
                var type = _props.type;
                var trigger = _props.trigger;

                if (readOnly) {
                    return;
                }
                //textArea
                this.props.autoHeight && this.autoHeight(event);

                if (!this.item) {
                    this.item = this.refs["formItem"];
                }
                //chilren自定义
                type = type || this.item.props.type;

                var value = event.target.value;

                if (value && (type === 'integer' || type === 'number')) {
                    if (!Regs[type].test(value)) {
                        value = this.state.value || '';
                    }
                }

                this.item.setState({ value: value });

                if (trigger && trigger == event.type) {
                    this.check(value);
                    if (this.props.onChange) {
                        this.props.onChange.apply(this, [value, event]);
                    }
                }
            }
        }, {
            key: "needValid",
            value: function needValid() {
                if (this.props.type === "hidden") {
                    return false;
                }

                if (this.props.disabled || this.props.readOnly) {
                    return false;
                }
                var ele = Dom.dom(ReactDOM.findDOMNode(this));
                if (ele.width() === 0 && ele.height() === 0) {
                    return false;
                }

                return true;
            }
        }, {
            key: "onChange",
            value: function onChange(value) {
                var valid = this.check(value);
                if (this.props.onChange) {
                    this.props.onChange.apply(this, arguments);
                }
            }
        }, {
            key: "check",
            value: function check(value) {
                if (!this.needValid()) {
                    return true;
                }
                if (!value) {
                    value = this.item.getValue();
                }
                var rules = this.rules,
                    messages = this.messages,
                    rule = void 0,
                    result = void 0,
                    errorTip = void 0;

                if (!rules["required"] && (value == null || value == "" || value == undefined)) {
                    if (this.state.errorTip) {
                        this.setState({ errorTip: null });
                        this.refs.tooltip.setTitle(null);
                    }
                    return true;
                }

                if (this.item.props.valueType === 'array') {
                    value = value ? value.split(",") : [];
                }

                if (rules["required"]) {
                    rule = { method: "required", parameters: rules["required"] };
                    result = this.validByMethod(value, rule, messages);
                    if (result == false) {
                        return false;
                    }
                }
                for (var method in rules) {
                    if (method === "required" || method === "remote") {
                        continue;
                    }
                    rule = { method: method, parameters: rules[method] };

                    result = this.validByMethod(value, rule, messages);
                    if (result == false) {
                        return false;
                    }
                }
                if (rules["remote"]) {
                    var url = rules["remote"];
                    var name = this.item.props.name;
                    if (typeof url === 'function') {
                        url = url();
                    } else {
                        url = this._URLParse(url);
                        url = this._rebuildURL(url, { name: value });
                    }

                    result = this.validByRemote(value, url, messages);
                    if (result == false) {
                        return false;
                    }
                }

                if (this.props.onValid) {
                    this.props.onValid(value, true, this);
                }
                this.emit("valid", value, true, this);

                this.setState({ errorTip: null });
                this.refs.tooltip.setTitle(null);
                return true;
            }
        }, {
            key: "_URLParse",
            value: function _URLParse(url, otherParams) {
                url = url.split("?");
                var params = {};

                if (url[1]) {
                    var parts = url[1].split("=");
                    if (parts.length) {
                        parts.forEach(function (part) {
                            var pair = part.split("&");
                            params[pair[0]] = pair[1];
                        });
                    }
                }
                if (otherParams) {
                    for (var key in otherParams) {
                        params[key] = otherParams[key];
                    }
                }

                return {
                    pathname: url[0],
                    query: params
                };
            }
        }, {
            key: "_rebuildURL",
            value: function _rebuildURL(url) {
                var suffix = [];
                if (url.query) {
                    for (var key in url.query) {
                        suffix.push(key + "=" + url.query[key]);
                    }
                }
                return url.pathname + "?" + suffix.join("&");
            }
        }, {
            key: "validByRemote",
            value: function validByRemote(value, url, messages) {
                var remoteRet = false;
                Ajax.ajax({
                    url: url,
                    type: "GET",
                    dataType: "text",
                    async: "false",
                    success: function success(ret) {
                        remoteRet = ret === "true";
                    },
                    error: function error() {
                        remoteRet = false;
                    }
                });

                var errorTip;
                if (remoteRet === false) {
                    errorTip = messages && messages["remote"] ? messages["remote"] : Validation.messages["remote"];
                    if (typeof errorTip === 'function') {
                        errorTip = errorTip.call(null, rule.parameters);
                    }
                    if (this._isMounted) {
                        this.setState({ errorTip: errorTip });
                        this.refs.tooltip.setTitle(errorTip);
                    }
                    if (this.props.onValid) {
                        this.props.onValid(value, remoteRet, this);
                    }
                    this.emit("valid", value, remoteRet, this);
                }

                return remoteRet;
            }
        }, {
            key: "validByMethod",
            value: function validByMethod(value, rule, messages) {
                var method = rule.method;
                if (!Validation.methods[method]) {
                    console.error("验证中缺少" + method + "方法");
                    return;
                }
                var result = Validation.methods[method].call(this, value, rule.parameters);
                var errorTip;
                if (result == false) {
                    errorTip = messages && messages[method] ? messages[method] : Validation.messages[method];
                    if (typeof errorTip === 'function') {
                        errorTip = errorTip.call(null, rule.parameters);
                    }
                    this.setState({ errorTip: errorTip });
                    this.refs.tooltip.setTitle(errorTip);
                    if (this.props.onValid) {
                        this.props.onValid(value, result, this);
                    }
                    this.emit("valid", value, result, this);
                }

                return result;
            }
        }, {
            key: "getReference",
            value: function getReference() {
                return this.refs["formItem"];
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
                this.item = this.refs["formItem"];
                if (this.props["data-itemBind"] && this.isFormItem()) {
                    this.props["data-itemBind"]({
                        ref: this,
                        name: this.props.name,
                        isFormItem: this.isFormItem()
                    });
                }
            }
        }, {
            key: "isValid",
            value: function isValid() {
                return !this.state.errorTip;
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this.item.getValue();
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                this.item.setValue(value);
            }
        }, {
            key: "getName",
            value: function getName() {
                return this._name;
            }
        }, {
            key: "isFormItem",
            value: function isFormItem() {
                return this._isFormItem;
            }
        }, {
            key: "setErrorTip",
            value: function setErrorTip(msg) {
                this.setState({ errorTip: msg });
                this.refs.tooltip.setTitle(msg);
            }
        }, {
            key: "setRule",
            value: function setRule(rule, rule_args) {
                this.rules[rule] = rule_args;
            }
        }, {
            key: "setMessage",
            value: function setMessage(rule, message) {
                this.messages[rule] = message;
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: "render",
            value: function render() {
                var _props2 = this.props;
                var label = _props2.label;
                var labelGrid = _props2.labelGrid;
                var type = _props2.type;
                var layout = _props2.layout;
                var className = _props2.className;
                var style = _props2.style;
                var children = _props2.children;
                var required = _props2.required;


                className = classnames("cm-form-group", className, {
                    inline: layout === "inline",
                    invalid: this.state.errorTip ? true : false
                });

                var items = this._getControl(type);
                var customChildren = this._renderChildren();

                var labelClass = classnames("cm-form-label", {
                    required: required || this.required,
                    "cm-form-label-top": this._areaLabel
                });

                if (type === "hidden") {
                    return React.createElement(
                        "div",
                        { className: className, style: style },
                        items,
                        customChildren
                    );
                }

                var labelEle = null;
                if (label) {
                    if (label === "&nbsp;") {
                        label = " ";
                    }
                    var labelStyle = {};
                    if (this.props.labelWidth) {
                        labelStyle["width"] = this.props.labelWidth + "px";
                    }
                    labelEle = React.createElement(
                        Label,
                        { className: labelClass, grid: labelGrid, style: labelStyle },
                        label
                    );
                }
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    labelEle,
                    React.createElement(
                        Tooltip,
                        { theme: "error", className: "error-tip", align: this._tipAlign, ref: "tooltip", title: this.state.errorTip },
                        items,
                        customChildren
                    )
                );
            }
        }]);

        return FormControl;
    }(BaseComponent);

    FormControl.defaultProps = {
        layout: 'inline',
        trigger: "blur"
    };

    FormControl.COMPONENTS = {};

    /**
     * 注册空间到FormControl
     * @param component 空间类
     * @param type 空间类型
     * @param valueType 值类型
     */
    FormControl.register = function (component, type, valueType) {
        if (type instanceof Array) {
            type.forEach(function (theType) {
                if (theType == "number" || theType == "integer" || theType == "tel") {
                    valueType = "number";
                }
                FormControl.COMPONENTS[theType] = {
                    component: component,
                    valueType: valueType || "string"
                };
            });
        } else {
            FormControl.COMPONENTS[type] = {
                component: component,
                valueType: valueType || "string"
            };
        }
    };

    FormControl.propTypes = {
        /**
         * 类型
         * @attribute type
         * @type {String}
         */
        type: PropTypes.string,
        /**
         * 字段名称
         * @attribute name
         * @type {String}
         */
        name: PropTypes.string,
        /**
         * 布局
         * @attribute layout
         * @type {String}
         */
        layout: PropTypes.string,
        /**
         * 字段提示文字
         * @attribute label
         * @type {String}
         */
        label: PropTypes.string,
        /**
         * 文本框的提示
         * @attribute placeholder
         * @type {String}
         */
        placeholder: PropTypes.string,
        /**
         * 文本的宽度
         * @attribute labelGrid
         * @type {Object/Number}
         */
        labelGrid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 验证规则
         * @attribute rules
         * @type {Object}
         */
        rules: PropTypes.object,
        /**
         * 字段对应错误信息的提示语
         * @attribute messages
         * @type {Object}
         */
        messages: PropTypes.object,
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
         * 是否为表单元素  默认true 如为false则不会在表单中上传
         * @attribute isFormItem
         * @type {Boolean}
         */
        isFormItem: PropTypes.bool,
        /**
         * 是否必须的校验
         * @attribute required
         * @type {Boolean}
         */
        required: PropTypes.bool,
        /**
         * 验证后的回调
         * @attribute onValid
         * @type {Function}
         */
        onValid: PropTypes.func,
        /**
         * 值变化后的回调
         * @attribute onChange
         * @type {Function}
         */
        onChange: PropTypes.func,
        /**
         * 提示位置
         * @attribute tipAlign
         * @type {String}
         * @default right
         */
        tipAlign: PropTypes.string
    };

    module.exports = FormControl;
});
