define(["module", "react", "react-dom", "classnames", "Button", 'utils/regs', "core/BaseComponent", "FormControl"], function (module, React, ReactDOM, classnames, Button, Regs, BaseComponent, FormControl) {
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

    var InputNumber = function (_BaseComponent) {
        _inherits(InputNumber, _BaseComponent);

        function InputNumber(props) {
            _classCallCheck(this, InputNumber);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputNumber).call(this, props));

            var value = parseFloat(props.value || 0);
            if (props.min != undefined) {
                value = Math.max(props.min, value);
            }
            if (props.max != undefined) {
                value = Math.min(props.max, value);
            }

            _this.addState({
                value: value || 0,
                min: props.min,
                max: props.max,
                step: parseFloat(props.step) || 1,
                disabled: props.disabled || false
            });
            return _this;
        }

        _createClass(InputNumber, [{
            key: "handleChange",
            value: function handleChange(event) {
                var disabled = this.props.disabled;


                if (disabled) {
                    return;
                }

                var value = this.parser(event.target.value);
                if (this.state.min != undefined) {
                    value = Math.max(this.state.min, value);
                }
                if (this.state.max != undefined) {
                    value = Math.min(this.state.max, value);
                }

                this.setState({ value: value });
                if (this.props.onChange) {
                    this.props.onChange(value);
                }
                this.emit("change", value);
            }
        }, {
            key: "subtract",
            value: function subtract() {
                var value = this.add(this.parser(this.state.value + ""), -this.state.step);
                if (this.state.min != undefined) {
                    value = Math.max(this.state.min, value);
                }
                this.setState({ value: value });
            }
        }, {
            key: "plus",
            value: function plus() {
                var value = this.add(this.parser(this.state.value + ""), this.state.step);
                if (this.state.max != undefined) {
                    value = Math.min(this.state.max, value);
                }
                this.setState({ value: value });
            }
        }, {
            key: "formatter",
            value: function formatter(value) {
                if (this.props.formatter) {
                    return this.props.formatter(value + "");
                }
                return value;
            }
        }, {
            key: "parser",
            value: function parser(value) {
                if (this.props.parser) {
                    return this.props.parser(value);
                }
                return value;
            }
        }, {
            key: "add",
            value: function add(num1, num2) {
                var r1 = void 0,
                    r2 = void 0,
                    m = void 0;
                try {
                    r1 = num1.toString().split(".")[1].length;
                } catch (e) {
                    r1 = 0;
                }
                try {
                    r2 = num2.toString().split(".")[1].length;
                } catch (e) {
                    r2 = 0;
                }
                m = Math.pow(10, Math.max(r1, r2));
                return (num1 * m + num2 * m) / m;
            }
        }, {
            key: "disable",
            value: function disable() {
                this.setState({ disabled: true });
            }
        }, {
            key: "enable",
            value: function enable() {
                this.setState({ disabled: false });
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this.state.value;
            }
        }, {
            key: "getFormatedValue",
            value: function getFormatedValue() {
                return this.formatter(this.state.value);
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                if (this.state.min != undefined) {
                    value = Math.max(this.state.min, value);
                }
                if (this.state.max != undefined) {
                    value = Math.min(this.state.max, value);
                }
                this.setState(value);
            }
        }, {
            key: "setMax",
            value: function setMax(max) {
                max = parseFloat(max);
                if (this.state.min != undefined) {
                    if (this.state.min > max) {
                        console.warn("max " + max + " is < min " + this.state.min);
                        return;
                    }
                }
                var params = {
                    max: max
                };
                if (this.state.value > max) {
                    params.value = max;
                }
                this.setState(params);
            }
        }, {
            key: "setStep",
            value: function setStep(step) {
                this.setState({ step: step });
            }
        }, {
            key: "setMin",
            value: function setMin(min) {
                min = parseFloat(min);
                if (this.state.max != undefined) {
                    if (this.state.max < min) {
                        console.warn("max " + this.state.max + " is < min " + min);
                        return;
                    }
                }
                var params = {
                    min: min
                };
                if (this.state.value < min) {
                    params.value = min;
                }
                this.setState(params);
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;
                var itemClassName = _props.itemClassName;

                className = classnames("cm-input-number", className, this.state.theme, _defineProperty({
                    "cm-input-number-disabled": this.state.disabled
                }, "cm-input-number-" + this.props.size, this.props.size));
                itemClassName = classnames("cm-input-number-field", itemClassName, {
                    "cm-input-number-readonly": this.state.readOnly
                });
                return React.createElement(
                    "span",
                    { className: className, style: style },
                    React.createElement(
                        Button,
                        { onClick: this.subtract.bind(this) },
                        "-"
                    ),
                    React.createElement("input", { className: itemClassName, name: this.props.name, value: this.formatter(this.state.value), type: "text", onChange: this.handleChange.bind(this) }),
                    React.createElement(
                        Button,
                        { onClick: this.plus.bind(this) },
                        "+"
                    )
                );
            }
        }]);

        return InputNumber;
    }(BaseComponent);

    FormControl.register(InputNumber, ["inputnumber"]);

    module.exports = InputNumber;
});
