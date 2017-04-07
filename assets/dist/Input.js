define(["module", "react", "classnames", "core/BaseComponent", 'utils/grids', 'utils/omit', 'utils/regs', 'FormControl'], function (module, React, classnames, BaseComponent, grids, Omit, Regs, FormControl) {
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

    var Input = function (_BaseComponent) {
        _inherits(Input, _BaseComponent);

        function Input(props) {
            _classCallCheck(this, Input);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

            _this.addState({
                value: props.value
            });
            return _this;
        }

        _createClass(Input, [{
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
                var _props = this.props;
                var readOnly = _props.readOnly;
                var type = _props.type;
                var trigger = _props.trigger;


                if (readOnly) {
                    return;
                }

                var value = event.target.value;

                if (value && (type === 'integer' || type === 'number')) {
                    if (!Regs[type].test(value)) {
                        value = this.state.value || '';
                    }
                }

                this.setState({ value: value });

                if (trigger === 'change') {
                    this.handleTrigger(event);
                }
            }
        }, {
            key: "handleTrigger",
            value: function handleTrigger(event) {
                var value = event.target.value;
                this.props.onChange(value, event);
                this.emit("change");
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

                var others = Omit(this.props, ["className", "handleChange", "data-valueType", "data-itemBind", "grid", "type", "trigger"]);
                var handleChange = this.props["handleChange"] ? function (event) {
                    _this2.props["handleChange"](event, { component: _this2 });
                } : this.handleChange.bind(this);
                var props = {
                    className: classnames(className, 'cm-form-control', getGrid(grid)),
                    onChange: handleChange,
                    type: type === 'password' || type === 'hidden' ? type : 'text',
                    value: this.state.value
                };

                if (trigger && trigger !== 'change') {
                    var handle = 'on' + trigger.charAt(0).toUpperCase() + trigger.slice(1);
                    props[handle] = handleChange;
                }

                return React.createElement("input", _extends({}, others, props));
            }
        }]);

        return Input;
    }(BaseComponent);

    Input.defaultProps = {
        trigger: 'blur',
        value: ''
    };

    FormControl.register(Input, ["text"]);

    module.exports = Input;
});
