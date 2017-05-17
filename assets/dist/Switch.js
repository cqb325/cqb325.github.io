define(['module', "react", 'react-dom', 'utils/Dom', "classnames", "core/BaseComponent", "FontIcon", 'FormControl'], function (module, React, ReactDOM, Dom, classnames, BaseComponent, FontIcon, FormControl) {
    'use strict';

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

    var Switch = function (_BaseComponent) {
        _inherits(Switch, _BaseComponent);

        function Switch(props) {
            _classCallCheck(this, Switch);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).call(this, props));

            _this.addState({
                checked: props.checked,
                disabled: props.disabled || false
            });
            return _this;
        }

        _createClass(Switch, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.checked !== this.state.checked) {
                    this.setState({
                        checked: nextProps.checked
                    });
                }
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {}
        }, {
            key: 'toggleSwitch',
            value: function toggleSwitch() {
                if (this.state.disabled) {
                    return;
                }
                this.setState({
                    checked: !this.state.checked
                });

                var value = this.state.checked ? 1 : 0;
                if (this.props.onChange) {
                    this.props.onChange(value);
                }
                this.emit("change", value);
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames("cm-switch", className, this.props.size, {
                    checked: this.state.checked,
                    disabled: this.state.disabled
                });

                var text = this.state.checked ? this.props.checkedText : this.props.unCheckedText;

                return React.createElement(
                    'span',
                    { className: className, style: style, tabIndex: '0', onClick: this.toggleSwitch.bind(this) },
                    React.createElement(
                        'span',
                        { className: 'cm-switch-inner' },
                        text
                    ),
                    React.createElement('input', { name: this.props.name, type: 'hidden', value: this.state.checked ? 1 : 0 })
                );
            }
        }]);

        return Switch;
    }(BaseComponent);

    FormControl.register(Switch, "switch");

    module.exports = Switch;
});
