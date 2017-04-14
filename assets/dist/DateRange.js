define(["module", "react", "react-dom", "classnames", "moment", "utils/Dom", "utils/ClickAway", "core/BaseComponent", "Date", "./Button", 'FormControl', "velocity"], function (module, React, ReactDOM, classnames, moment, Dom, clickAway, BaseComponent, Date, Button, FormControl, velocity) {
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

    var DateRange = function (_BaseComponent) {
        _inherits(DateRange, _BaseComponent);

        function DateRange(props) {
            _classCallCheck(this, DateRange);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateRange).call(this, props));

            _this._selectedDate = [];
            var sep = props.sep || "~",
                start = void 0,
                end = void 0;
            if (props.value) {
                var values = props.value.split(sep);
                start = moment(values[0]);
                end = moment(values[1]);
                _this._selectedDate[0] = start;
                _this._selectedDate[1] = end;
            }

            _this.maxRange = props.maxRange || 0;
            _this.isSibling = false;
            _this._isSelecting = false;
            _this.addState({
                visibility: false,
                start: start,
                end: end,
                startDate: props.startDate,
                endDate: props.endDate
            });
            return _this;
        }

        /**
         * 获取当前选中的值
         * @method getValue
         * @returns {Array} [start, end]
         */


        _createClass(DateRange, [{
            key: "getValue",
            value: function getValue() {
                if (this.state.start && this.state.end) {
                    return [this.state.start.format("YYYY-MM-DD"), this.state.end.format("YYYY-MM-DD")];
                } else {
                    return "";
                }
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                if (value) {
                    var sep = this.props.sep || "~";
                    var values = value.split(sep);
                    start = moment(values[0]);
                    end = moment(values[1]);
                    this._selectedDate[0] = start;
                    this._selectedDate[1] = end;
                    this.setState({
                        start: start,
                        end: end
                    });
                } else {
                    this._selectedDate[0] = null;
                    this._selectedDate[1] = null;
                    this.setState({
                        start: null,
                        end: null
                    });
                }
            }
        }, {
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
                    _get(Object.getPrototypeOf(DateRange.prototype), "show", this).call(this);
                    setTimeout(function () {
                        _this2.setState({
                            current: moment(_this2.state.value) || today
                        });

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
                        _get(Object.getPrototypeOf(DateRange.prototype), "hide", _this3).call(_this3);
                        _this3.unbindClickAway();
                    } });
            }
        }, {
            key: "_selectStartDate",
            value: function _selectStartDate(value, date) {
                if (!this._isSelecting) {
                    if (this.props.onSelectStart) {
                        this.props.onSelectStart(value, date);
                    }
                    this._isSelecting = true;
                    this._selectedDate[0] = value;
                    this._selectedDate[1] = null;
                    this.updateRange();
                } else {
                    if (this._inMaxRange(value)) {
                        this._isSelecting = false;
                        this._selectedDate[1] = value;
                        this.updateRange();
                        this._selectDate();
                        this.hide();
                    }
                }
            }
        }, {
            key: "_selectEndDate",
            value: function _selectEndDate(value, date) {
                if (!this._isSelecting) {
                    if (this.props.onSelectEnd) {
                        this.props.onSelectEnd(value, date);
                    }
                    this._isSelecting = true;
                    this._selectedDate[0] = value;
                    this._selectedDate[1] = null;
                    this.updateRange();
                } else {
                    if (this._inMaxRange(value)) {
                        this._isSelecting = false;
                        this._selectedDate[1] = value;
                        this.updateRange();
                        this._selectDate();
                        this.hide();
                    }
                }
            }
        }, {
            key: "updateRange",
            value: function updateRange() {
                var startDate = this.refs.startDate;
                var endDate = this.refs.endDate;

                var selectedRange = void 0;
                if (this._selectedDate.length == 1) {
                    selectedRange = [this._selectedDate[0], this._selectedDate[0]];
                } else {
                    selectedRange = [this._selectedDate[0], this._selectedDate[1]];
                }
                selectedRange.sort(function (a, b) {
                    return moment(a).toDate().getTime() - moment(b).toDate().getTime();
                });

                startDate.setState({
                    selectedRange: selectedRange
                });
                endDate.setState({
                    selectedRange: selectedRange
                });
            }
        }, {
            key: "_selectDate",
            value: function _selectDate() {
                this._selectedDate.sort(function (a, b) {
                    return moment(a).toDate().getTime() - moment(b).toDate().getTime();
                });
                this.setState({
                    start: moment(this._selectedDate[0]),
                    end: moment(this._selectedDate[1])
                });

                var startDate = this.refs.startDate;
                var endDate = this.refs.endDate;

                var startCurrent = moment(this._selectedDate[0]);
                var endCurrent = moment(this._selectedDate[1]);
                if (startCurrent.isSame(endCurrent, 'month')) {
                    if (startCurrent.isSame(startDate.state.current, 'month')) {
                        endCurrent.set('date', 1);
                        endCurrent.add(1, 'month');
                    } else {
                        startCurrent.set('date', 1);
                        startCurrent.add(-1, 'month');
                    }
                }
                startDate.setState({
                    current: startCurrent
                });
                endDate.setState({
                    current: endCurrent
                });

                if (this.props.onSelected) {
                    this.props.onSelected(this._selectedDate[0], this._selectedDate[1]);
                }
                this._selectedDate = [];

                if (this.props.onChange) {
                    var sep = this.props.sep || "~";
                    var _start = moment(this._selectedDate[0]).format("YYYY-MM-DD"),
                        _end = moment(this._selectedDate[1]).format("YYYY-MM-DD");
                    this.props.onChange(_start + sep + _end);
                }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this4 = this;

                var start = this.state.start,
                    end = this.state.end;
                if (!start) {
                    start = moment();
                    end = moment();
                    start.add(-1, "month");
                } else {
                    start = moment(start);
                    end = moment(end);
                    if (start.format("YYYY-MM") == end.format("YYYY-MM")) {
                        start.add(-1, "month");
                    }
                }

                var startDate = this.refs.startDate;
                var endDate = this.refs.endDate;

                this.checkIsSibling(start, end);

                startDate.setState({
                    current: start
                });

                endDate.setState({
                    current: end
                });

                this.updateRange();

                startDate.on("selectPrev", function () {
                    _this4.checkIsSibling();
                });
                startDate.on("selectNext", function () {
                    _this4.checkIsSibling();
                });
                startDate.on("selectMonth", function () {
                    _this4.checkIsSibling();
                });

                endDate.on("selectPrev", function () {
                    _this4.checkIsSibling();
                });
                endDate.on("selectNext", function () {
                    _this4.checkIsSibling();
                });
                endDate.on("selectMonth", function () {
                    _this4.checkIsSibling();
                });

                startDate.on("hoverDay", function (d) {
                    if (_this4._isSelecting) {
                        if (_this4._inMaxRange(d)) {
                            _this4._selectedDate[1] = d;
                            _this4.updateRange();
                        } else {
                            _this4._selectMaxRange(d);
                        }
                    }
                });
                endDate.on("hoverDay", function (d) {
                    if (_this4._isSelecting) {
                        if (_this4._inMaxRange(d)) {
                            _this4._selectedDate[1] = d;
                            _this4.updateRange();
                        } else {
                            _this4._selectMaxRange(d);
                        }
                    }
                });
            }
        }, {
            key: "_selectMaxRange",
            value: function _selectMaxRange(d) {
                var start = moment(this._selectedDate[0]);
                if (start.isBefore(d)) {
                    this._selectedDate[1] = start.add(this.maxRange - 1, 'day');
                } else {
                    this._selectedDate[1] = start.add(1 - this.maxRange, 'day');
                }

                this.updateRange();
            }
        }, {
            key: "_inMaxRange",
            value: function _inMaxRange(d) {
                if (this.maxRange === 0) {
                    return true;
                } else {
                    var _start2 = moment(this._selectedDate[0]);
                    var arr = [_start2, moment(d)];
                    arr.sort(function (a, b) {
                        return moment(a).toDate().getTime() - moment(b).toDate().getTime();
                    });

                    var temp = arr[0].add(this.maxRange - 1, "day");
                    return !temp.isBefore(arr[1]);
                }
            }
        }, {
            key: "checkIsSibling",
            value: function checkIsSibling(start, end) {
                var startDate = this.refs.startDate,
                    endDate = this.refs.endDate;
                start = moment(start || startDate.state.current);
                start.set("date", 1);
                start.add(1, "month");
                end = moment(end || endDate.state.current);

                var isSibling = false;
                if (start.get("month") == end.get("month") && start.get("year") == end.get("year")) {
                    isSibling = true;
                }
                if (start.get("month") > end.get("month")) {
                    var year = start.get("year");
                    var month = start.get("month");

                    end.set("year", year);
                    end.set("month", month);
                    end.set("date", 1);

                    endDate.setCurrent(end);
                    isSibling = true;
                }

                if (this.isSibling != isSibling) {
                    this.isSibling = isSibling;

                    window.setTimeout(function () {
                        startDate.setState({
                            nextBtn: !isSibling
                        });

                        endDate.setState({
                            prevBtn: !isSibling
                        });
                    }, 0);
                }
            }
        }, {
            key: "selectShortCuts",
            value: function selectShortCuts(fun) {
                if (fun) {
                    var dates = fun();
                    var startDate = this.refs.startDate;
                    var endDate = this.refs.endDate;

                    this._isSelecting = false;
                    this._selectedDate[0] = dates[0];
                    this._selectedDate[1] = dates[1];
                    this.updateRange();
                    this._selectDate();
                    this.hide();
                }
            }
        }, {
            key: "clear",
            value: function clear() {
                this._selectedDate = [];
                this.updateRange();

                this.setState({
                    start: null,
                    end: null
                });

                this.hide();
            }
        }, {
            key: "renderTools",
            value: function renderTools() {
                var clear = this.props.clear;

                if (clear) {
                    return React.createElement(
                        "span",
                        { className: "pull-right" },
                        React.createElement(
                            Button,
                            { theme: "info", flat: "true",
                                onClick: this.clear.bind(this) },
                            "清除"
                        )
                    );
                } else {
                    return null;
                }
            }
        }, {
            key: "renderShortCuts",
            value: function renderShortCuts() {
                var shortcuts = this.props.shortcuts;

                if (shortcuts) {
                    return shortcuts.map(function (shortcut, index) {
                        var callback = null,
                            name = void 0;
                        if (typeof shortcut === 'string') {
                            name = shortcut;
                            callback = DateRange.SHORTCUTS[shortcut];
                        } else {
                            name = shortcut.name;
                            callback = shortcut.dates;
                        }

                        if (callback) {
                            return React.createElement(
                                "a",
                                { href: "javascript:void(0)", className: "date-range-shortcut", key: index, onClick: this.selectShortCuts.bind(this, callback) },
                                name
                            );
                        } else {
                            return null;
                        }
                    }, this);
                } else {
                    return null;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames(this.props.className, 'cm-datetime', 'cm-dateRange', this.state.theme, {
                    disabled: this.props.disabled || this.props.readOnly,
                    dropup: this.state.dropup
                });

                var sep = this.props.sep || "~";
                var start = this.state.start ? this.state.start.format("YYYY-MM-DD") : "",
                    end = this.state.end ? this.state.end.format("YYYY-MM-DD") : "";
                var start_name = this.props.startName || "startDate";
                var end_name = this.props.endName || "endDate";
                var startText = React.createElement(
                    "span",
                    { className: "date-text" },
                    React.createElement("input", { type: "hidden", name: start_name, value: start }),
                    start,
                    " "
                );
                var endText = React.createElement(
                    "span",
                    { className: "date-text" },
                    React.createElement("input", { type: "hidden", name: end_name, value: end }),
                    end,
                    " "
                );

                var startProps = {
                    dateOnly: true,
                    value: start,
                    completion: false,
                    startDate: this.state.startDate,
                    endDate: this.state.endDate
                };
                var endProps = {
                    dateOnly: true,
                    value: end,
                    completion: false,
                    startDate: this.state.startDate,
                    endDate: this.state.endDate
                };

                var days = 0;
                if (this.state.start && this.state.end) {
                    days = this.state.end.diff(this.state.start, 'days') + 1;
                }

                return React.createElement(
                    "div",
                    { ref: "datetime", onClick: this.show.bind(this), className: className, style: this.props.style || {} },
                    startText,
                    sep,
                    endText,
                    React.createElement(
                        "div",
                        { className: "cm-datetime-wrap", ref: "datePicker", style: { display: this.state.visibility ? "block" : "none" } },
                        React.createElement(
                            "div",
                            { className: "tools-info" },
                            React.createElement(
                                "span",
                                null,
                                "选择了: ",
                                days,
                                "天"
                            ),
                            this.renderShortCuts(),
                            this.renderTools()
                        ),
                        React.createElement(Date, _extends({ ref: "startDate" }, startProps, { onSelectDate: this._selectStartDate.bind(this) })),
                        React.createElement(Date, _extends({ ref: "endDate" }, endProps, { onSelectDate: this._selectEndDate.bind(this) }))
                    )
                );
            }
        }]);

        return DateRange;
    }(BaseComponent);

    DateRange = clickAway(DateRange);

    DateRange.SHORTCUTS = {
        "一周内": function _() {
            var end = moment();
            var start = moment();
            start.add(-6, 'day');

            return [start, end];
        },
        "一个月内": function _() {
            var end = moment();
            var start = moment();
            start.add(-1, 'month');

            return [start, end];
        },
        "三个月内": function _() {
            var end = moment();
            var start = moment();
            start.add(-3, 'month');

            return [start, end];
        },
        "半年内": function _() {
            var end = moment();
            var start = moment();
            start.add(-6, 'month');

            return [start, end];
        },
        "一年内": function _() {
            var end = moment();
            var start = moment();
            start.add(-1, 'year');

            return [start, end];
        },
        "一周后": function _() {
            var end = moment();
            var start = moment();
            end.add(6, 'day');

            return [start, end];
        },
        "一个月后": function _() {
            var end = moment();
            var start = moment();
            end.add(1, 'month');

            return [start, end];
        },
        "三个月后": function _() {
            var end = moment();
            var start = moment();
            end.add(3, 'month');

            return [start, end];
        },
        "半年后": function _() {
            var end = moment();
            var start = moment();
            end.add(6, 'month');

            return [start, end];
        },
        "一年后": function _() {
            var end = moment();
            var start = moment();
            end.add(1, 'year');

            return [start, end];
        }
    };

    DateRange.propTypes = {
        /**
         * 默认值
         * @attribute value
         * @type {String}
         */
        value: PropTypes.string,
        /**
         * 分割符
         * @attribute sep
         * @type {String}
         */
        sep: PropTypes.string
    };

    FormControl.register(DateRange, "daterange");

    module.exports = DateRange;
});
