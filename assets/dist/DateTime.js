define(["module", "react", "react-dom", "classnames", "moment", "utils/Dom", "utils/ClickAway", "core/BaseComponent", 'Date', "utils/shallowEqual", 'FormControl', 'utils/grids', "velocity", 'utils/omit'], function (module, React, ReactDOM, classnames, moment, Dom, clickAway, BaseComponent, Date, shallowEqual, FormControl, grids, velocity, Omit) {
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

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

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

    var getGrid = grids.getGrid;

    var Datetime = function (_BaseComponent) {
        _inherits(Datetime, _BaseComponent);

        function Datetime(props) {
            _classCallCheck(this, Datetime);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Datetime).call(this, props));

            _this.addState({
                visibility: false,
                value: props.value
            });
            return _this;
        }

        /**
         * ClickAway 点击别的地方的回调
         * @method componentClickAway
         */


        _createClass(Datetime, [{
            key: "componentClickAway",
            value: function componentClickAway() {
                this.hide();
            }
        }, {
            key: "show",
            value: function show() {
                var _this2 = this;

                if (this.props.readOnly || this.props.disabled) {
                    return;
                }

                if (this.state.visibility) {
                    return false;
                }

                var ele = ReactDOM.findDOMNode(this.refs.datePicker);
                Dom.dom(ele).show();
                var container = Dom.closest(ele, ".cm-datetime");
                var offset = Dom.getOuterHeight(ele) + 5;
                var dropup = Dom.overView(container, offset);

                Dom.withoutTransition(container, function () {
                    _this2.setState({ dropup: dropup });
                    Dom.dom(ele).hide();
                });

                velocity(ele, "fadeIn", { duration: 500 });

                if (!this.state.visibility) {
                    _get(Object.getPrototypeOf(Datetime.prototype), "show", this).call(this);
                    setTimeout(function () {
                        var dateComp = _this2.refs.date;
                        dateComp.show();

                        _this2.bindClickAway();
                    }, 0);
                }
            }
        }, {
            key: "hide",
            value: function hide() {
                var _this3 = this;

                var ele = ReactDOM.findDOMNode(this.refs.datePicker);
                velocity(ele, "fadeOut", { delay: 200, duration: 500, complete: function complete() {
                        _get(Object.getPrototypeOf(Datetime.prototype), "hide", _this3).call(_this3);
                        _this3.unbindClickAway();
                    } });

                var dateComp = this.refs.date;

                if (dateComp.view === "datetime" && dateComp.state.stage === "time") {
                    dateComp.setState({
                        stage: 1
                    });
                }
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                this.setState({
                    value: value
                });
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this.state.value;
            }
        }, {
            key: "_selectDate",
            value: function _selectDate(value, date) {
                this.setState({
                    value: value
                });

                if (this.props.onSelectDate) {
                    this.props.onSelectDate(value, date);
                }

                this.emit("selectDate", value, date);

                if (this.props.onChange) {
                    this.props.onChange(value, date);
                }

                this.emit("change", value, date);
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(newProps) {
                if (!shallowEqual(newProps, this.props)) {
                    var propsChangeFlag = this.state.propsChangeFlag || 0;
                    this.setState({
                        propsChangeFlag: propsChangeFlag + 1
                    });
                }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this4 = this;

                var dateComp = this.refs.date;

                dateComp.on("hide", function () {
                    _this4.hide();
                });

                dateComp.on("selectTime", function (value) {
                    _this4.emit("selectTime", value);
                });
                dateComp.on("selectMonth", function (value) {
                    _this4.emit("selectMonth", value);
                });
                dateComp.on("selectYear", function (value) {
                    _this4.emit("selectYear", value);
                });
            }
        }, {
            key: "getReference",
            value: function getReference() {
                return this.refs.date;
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var grid = _props.grid;
                var readOnly = _props.readOnly;
                var disabled = _props.disabled;
                var name = _props.name;
                var placeholder = _props.placeholder;
                var style = _props.style;

                className = classnames(className, 'cm-datetime', this.state.theme, getGrid(grid), {
                    disabled: disabled || readOnly,
                    active: this.state.active && !readOnly,
                    dropup: this.state.dropup
                });

                var text = this.state.value ? this.state.value : "";
                text = text ? React.createElement(
                    "span",
                    { className: "date-text" },
                    React.createElement("input", { type: "hidden", name: name, defaultValue: this.state.value }),
                    text
                ) : React.createElement(
                    "span",
                    { className: "date-text" },
                    React.createElement("input", { type: "hidden", name: name, defaultValue: this.state.value }),
                    placeholder,
                    " "
                );

                var others = Omit(this.props, ["className", "grid", "readOnly", "disabled", "style"]);
                return React.createElement(
                    "div",
                    { ref: "datetime", onClick: this.show.bind(this), className: className, style: style || {} },
                    text,
                    React.createElement("i", { className: "fa fa-calendar" }),
                    React.createElement(
                        "div",
                        { className: "cm-datetime-wrap", ref: "datePicker" },
                        React.createElement(Date, _extends({ ref: "date" }, others, { onSelectDate: this._selectDate.bind(this) }))
                    )
                );
            }
        }]);

        return Datetime;
    }(BaseComponent);

    Datetime = clickAway(Datetime);

    Datetime.propTypes = {
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
        readOnly: PropTypes.bool,
        /**
         * 默认值
         * @attribute value
         * @type {string/moment}
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
        /**
         * 显示状态 "datetime","date","time"
         * @attribute view
         * @type {string}
         */
        view: PropTypes.oneOf(["datetime", "date", "time"]),
        /**
         * 格式化
         * @attribute format
         * @type {string}
         */
        format: PropTypes.string,
        /**
         * 开始时间
         * @attribute startDate
         * @type {string/moment}
         */
        startDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
        /**
         * 结束时间
         * @attribute endDate
         * @type {string/moment}
         */
        endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)])
    };

    FormControl.register(Datetime, "datetime");

    module.exports = Datetime;
});
