define(["module", "react", "react-dom", "classnames", "moment", "utils/Dom", "core/BaseComponent", 'Clock'], function (module, React, ReactDOM, classnames, moment, Dom, BaseComponent, Clock) {
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

    var Date = function (_BaseComponent) {
        _inherits(Date, _BaseComponent);

        function Date(props) {
            _classCallCheck(this, Date);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Date).call(this, props));

            var stages = {
                "time": 0,
                "date": 1,
                "month": 2,
                "year": 3
            };

            _this.view = props.view || "datetime";
            var stage = _this.view != "datetime" ? props.view : "date",
                minStage = 0,
                maxStage = 3;
            if (props.timeOnly) {
                _this.view = stage = "time";
                maxStage = 0;
            }
            if (props.dateOnly) {
                minStage = 1;
                _this.view = "date";
            }
            if (props.monthOnly) {
                _this.view = stage = "month";
                minStage = 2;
            }
            if (props.yearOnly) {
                _this.view = stage = "year";
                minStage = 3;
            }
            _this.minStage = minStage;
            _this.maxStage = maxStage;

            _this.maxRange = props.maxRange || 0;
            var current = moment();
            var format = props.format;
            if (props.value) {
                if (!format) {
                    if (stages[stage] == 0) {
                        format = "HH:mm:ss";
                        current = moment(props.value, format);
                    } else {
                        current = moment(props.value);
                    }
                } else {
                    current = moment(props.value, format);
                }
            }

            _this.addState({
                stage: stages[stage],
                value: props.value,
                format: format,
                current: current,
                startDate: props.startDate ? moment(props.startDate) : false,
                endDate: props.endDate ? moment(props.endDate) : false,
                prevBtn: props.prevBtn || true,
                nextBtn: props.nextBtn || true,
                selectedRange: []
            });
            return _this;
        }

        _createClass(Date, [{
            key: "setMonthOnly",
            value: function setMonthOnly() {
                this.minStage = 2;
                this.maxStage = 3;

                this.setState({
                    stage: 2
                });
            }
        }, {
            key: "setYearOnly",
            value: function setYearOnly() {
                this.minStage = 3;
                this.maxStage = 3;

                this.setState({
                    stage: 3
                });
            }
        }, {
            key: "setDateOnly",
            value: function setDateOnly() {
                this.minStage = 1;
                this.maxStage = 3;

                this.setState({
                    stage: 1
                });
            }
        }, {
            key: "setTimeOnly",
            value: function setTimeOnly() {
                this.minStage = 0;
                this.maxStage = 0;

                this.setState({
                    stage: 0
                });
            }
        }, {
            key: "setFormat",
            value: function setFormat(format) {
                if (this.state.format !== format) {
                    this.setState({
                        format: format
                    });
                }
            }
        }, {
            key: "getCurrent",
            value: function getCurrent() {
                return this.state.current;
            }
        }, {
            key: "setCurrent",
            value: function setCurrent(current) {
                this.setState({ current: current });
            }
        }, {
            key: "show",
            value: function show() {}
            // let today = moment();
            //
            // this.setState({
            //     current: moment(this.state.value) || today
            // });


            /**
             * 格式化值
             * @method formatValue
             * @param value {String} 日期的值
             * @returns {String} 格式化后的日期
             */

        }, {
            key: "formatValue",
            value: function formatValue(value) {
                if (this.state.format) {
                    return moment(value).format(this.state.format);
                }

                var view = this.view;
                var format = null;
                if (view === "datetime") {
                    format = "YYYY-MM-DD HH:mm:ss";
                }
                if (view === "date") {
                    format = "YYYY-MM-DD";
                }
                if (view === "time") {
                    format = "HH:mm:ss";
                }

                if (view === "month") {
                    format = "YYYY-MM-01";
                }
                if (view === "year") {
                    format = "YYYY-01-01";
                }
                return format ? moment(value).format(format) : "";
            }
        }, {
            key: "dayChange",
            value: function dayChange(date) {
                var _this2 = this;

                var value = this.formatValue(date);
                if (!date.isSame(this.state.current, "month")) {
                    this.emit("selectMonth", date.get("month"));
                }
                this.setState({
                    value: value,
                    current: date
                });

                this.valueChange(value, date.toDate());

                if (this.minStage == 0) {
                    setTimeout(function () {
                        _this2.setState({
                            stage: 0
                        });
                    }, 0);
                } else {
                    this.emit("hide");
                }
            }
        }, {
            key: "valueChange",
            value: function valueChange(value, date) {
                this.emit("selectDate", value, date);
                if (this.props.onSelectDate) {
                    this.props.onSelectDate(value, date);
                }
            }
        }, {
            key: "yearChange",
            value: function yearChange(year) {
                var _this3 = this;

                var current = this.state.current;
                current.set({ "year": year, date: 1 });
                var state = void 0;
                if (this.minStage == 3) {
                    var value = this.formatValue(current);
                    state = {
                        value: value,
                        current: current
                    };

                    this.valueChange(value, current.toDate());

                    this.emit("hide");
                } else {
                    state = {
                        stage: 2,
                        current: current
                    };
                }
                setTimeout(function () {
                    _this3.setState(state);
                    _this3.emit("selectYear", year);
                }, 0);
            }
        }, {
            key: "monthChange",
            value: function monthChange(month) {
                var _this4 = this;

                var current = this.state.current;
                current.set({ "month": month, date: 1 });

                var state = void 0;
                if (this.minStage == 2) {
                    var value = this.formatValue(current);
                    state = {
                        value: this.formatValue(current),
                        current: current
                    };

                    this.valueChange(value, current.toDate());

                    this.emit("hide");
                } else {
                    state = {
                        stage: 1,
                        current: current
                    };
                }
                setTimeout(function () {
                    _this4.setState(state);
                    _this4.emit("selectMonth", month);
                }, 0);
            }
        }, {
            key: "timeChange",
            value: function timeChange(time) {
                var _this5 = this;

                time = time.time;
                var current = this.state.current;
                current.set({ "hour": time.get("hour"), minute: time.get("minute"), second: time.get("second") });

                var value = this.formatValue(current);
                setTimeout(function () {
                    _this5.setState({
                        current: current,
                        value: value
                    });
                }, 0);

                this.valueChange(value, current.toDate());
                this.emit("selectTime", value, current.toDate());
            }
        }, {
            key: "hoverDay",
            value: function hoverDay(d) {
                this.emit("hoverDay", d);
            }
        }, {
            key: "stageChange",
            value: function stageChange(stage) {
                var _this6 = this;

                if (stage < this.minStage || stage > this.maxStage) {
                    return;
                }
                if (this.state.stage === stage) {
                    stage = 1;
                }
                window.setTimeout(function () {
                    _this6.setState({ stage: stage });
                }, 0);
            }
        }, {
            key: "prev",
            value: function prev() {
                var stage = this.state.stage;
                var d = void 0;
                if (stage == 1) {
                    d = this.state.current.add(-1, 'month');
                }
                if (stage == 2) {
                    d = this.state.current.add(-1, 'year');
                }
                this.setState({ current: d });
                this.emit("selectPrev", d);
            }
        }, {
            key: "next",
            value: function next() {
                var stage = this.state.stage;
                var d = void 0;
                if (stage == 1) {
                    d = this.state.current.add(1, 'month');
                }
                if (stage == 2) {
                    d = this.state.current.add(1, 'year');
                }
                this.setState({ current: d });
                this.emit("selectNext", d);
            }
        }, {
            key: "renderDays",
            value: function renderDays() {
                var _this7 = this;

                var value = this.state.value,
                    current = moment(this.state.current),
                    year = current.year(),
                    month = current.month(),
                    first = moment(current.set("date", 1)),
                    end = moment(first).add(1, 'months').add(-1, 'days'),
                    min = 1 - first.weekday(),
                    max = Math.ceil((end.get("date") - min + 1) / 7) * 7,
                    days = [],
                    lines = [],
                    lineLength = 0;

                //当前视窗需要渲染的日期
                for (var date, i = 0; i < max; i++) {
                    var temp = moment(first);
                    date = temp.add(i + min - 1, "days");
                    days.push(date);
                }

                lineLength = days.length / 7;

                //当天
                var isToday = value ? year === moment(value).get("year") && month === moment(value).get('month') : false;

                var startDate = this.state.startDate;
                var endDate = this.state.endDate;

                var selectedRange = this.state.selectedRange,
                    rangeStart = void 0,
                    rangeEnd = void 0;

                if (selectedRange && selectedRange.length) {
                    rangeStart = moment(selectedRange[0]);
                    rangeEnd = moment(selectedRange[1]);
                    isToday = false;
                }

                var completion = this.props.completion == undefined ? true : this.props.completion;
                for (var _i = 0; _i < lineLength; _i++) {
                    var line = [];

                    var _loop = function _loop(j) {
                        var index = _i * 7 + j;
                        var d = days[index];

                        //日期过滤
                        var disabled = startDate && moment(d.format(startDate._f)).diff(startDate) < 0 ? true : false;
                        disabled = disabled || (endDate && moment(d.format(endDate._f)).diff(endDate) > 0 ? true : false);

                        var rangeSelect = false;
                        var isRangeStart = false,
                            isRangeEnd = false;
                        if (rangeStart && (rangeStart.isBefore(d) || rangeStart.isSame(d, 'day') && rangeStart.isSame(d, 'month') && rangeStart.isSame(d, 'year')) && (d.isBefore(rangeEnd) || rangeEnd.isSame(d, 'day') && rangeEnd.isSame(d, 'month') && rangeEnd.isSame(d, 'year'))) {
                            rangeSelect = true;

                            if (rangeStart.isSame(d, 'day') && rangeStart.isSame(d, 'month') && rangeStart.isSame(d, 'year')) {
                                isRangeStart = true;
                            }
                            if (rangeEnd.isSame(d, 'day') && rangeEnd.isSame(d, 'month') && rangeEnd.isSame(d, 'year')) {
                                isRangeEnd = true;
                            }
                        }

                        var className = classnames('day', {
                            disabled: disabled,
                            gray: d.get('month') !== month,
                            today: isToday && moment(value).get('date') === d.get('date') && moment(value).get('month') === d.get('month'),
                            rangeSelect: rangeSelect,
                            "cm-date-range-start": isRangeStart,
                            "cm-date-range-end": isRangeEnd
                        });

                        if (!completion && d.get('month') !== month) {
                            line.push(React.createElement("button", { type: "button", key: index, className: "day empty" }));
                        } else {
                            line.push(React.createElement(
                                "button",
                                { type: "button", onClick: function onClick() {
                                        _this7.dayChange(d);
                                    }, onMouseOver: function onMouseOver() {
                                        _this7.hoverDay(d);
                                    }, key: index, className: className },
                                React.createElement(
                                    "span",
                                    null,
                                    d.get('date')
                                )
                            ));
                        }
                    };

                    for (var j = 0; j < 7; j++) {
                        _loop(j);
                    }
                    lines.push(React.createElement(
                        "li",
                        { key: _i, className: "cm-date-line" },
                        line
                    ));
                }
                return lines;
            }
        }, {
            key: "renderYears",
            value: function renderYears() {
                var _this8 = this;

                var current = moment(this.state.current),
                    year = current.get("year");

                var ret = [];

                var _loop2 = function _loop2(i) {
                    var className = classnames("year", {
                        "active": i === year
                    });
                    ret.push(React.createElement(
                        "button",
                        { type: "button", onClick: function onClick() {
                                _this8.yearChange(i);
                            }, key: i, className: className },
                        i
                    ));
                };

                for (var i = year - 12; i < year + 13; i++) {
                    _loop2(i);
                }

                var lines = [];
                for (var _i2 = 0; _i2 < 5; _i2++) {
                    var line = [];
                    for (var j = 0; j < 5; j++) {
                        var _index = _i2 * 5 + j;
                        line.push(ret[_index]);
                    }
                    lines.push(React.createElement(
                        "div",
                        { className: "cm-date-line", key: _i2 },
                        line
                    ));
                }

                return lines;
            }
        }, {
            key: "renderMonths",
            value: function renderMonths() {
                var _this9 = this;

                var current = moment(this.state.current),
                    year = current.get("year"),
                    month = current.get("month");

                var startDate = this.state.startDate;
                var endDate = this.state.endDate;

                var ret = [];
                var months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

                var _loop3 = function _loop3(i) {
                    var disabled = false;
                    if (startDate) {
                        if (startDate.get("year") > year) {
                            disabled = true;
                        }
                        if (startDate.get("year") == year) {
                            if (startDate.get("month") > i) {
                                disabled = true;
                            }
                        }
                    }
                    if (endDate) {
                        if (endDate.get("year") < year) {
                            disabled = true;
                        }
                        if (endDate.get("year") == year) {
                            if (endDate.get("month") < i) {
                                disabled = true;
                            }
                        }
                    }
                    var className = classnames('month', {
                        disabled: disabled,
                        active: i == month
                    });
                    ret.push(React.createElement(
                        "button",
                        { type: "button", onClick: function onClick() {
                                _this9.monthChange(i);
                            }, key: i, className: className },
                        months[i]
                    ));
                };

                for (var i = 0; i < 12; i++) {
                    _loop3(i);
                }

                return ret;
            }
        }, {
            key: "timeClose",
            value: function timeClose() {
                var _this10 = this;

                if (this.view !== "time") {
                    window.setTimeout(function () {
                        _this10.setState({
                            stage: 1
                        });
                    });
                }
            }
        }, {
            key: "renderClock",
            value: function renderClock() {
                return React.createElement(Clock, { ref: "clock", view: this.view, value: this.state.current, onChange: this.timeChange.bind(this), onTimeClose: this.timeClose.bind(this) });
            }
        }, {
            key: "clear",
            value: function clear() {
                this.setState({
                    value: null
                });
            }
        }, {
            key: "today",
            value: function today() {
                var time = moment(this.state.value);
                var today = moment();
                if (this.view === "datetime") {
                    var hour = time.get("hour"),
                        minute = time.get("minute"),
                        second = time.get("second");
                    today.set("hour", hour);
                    today.set("minute", minute);
                    today.set("second", second);
                }

                this.setState({
                    value: today,
                    current: moment(today)
                });

                this.emit("selectDate", moment(today).toDate());
            }
        }, {
            key: "_getWeek",
            value: function _getWeek() {
                return ["日", "一", "二", "三", "四", "五", "六"].map(function (w, i) {
                    return React.createElement(
                        "div",
                        { key: i, className: "week" },
                        w
                    );
                });
            }
        }, {
            key: "_getHeader",
            value: function _getHeader(now) {
                var _this11 = this;

                if (this.state.stage == 0) {
                    return "";
                }
                var prev = this.state.stage == 3 || !this.state.prevBtn ? null : React.createElement(
                    "a",
                    { className: "prev", onClick: this.prev.bind(this) },
                    "<"
                );
                var next = this.state.stage == 3 || !this.state.nextBtn ? null : React.createElement(
                    "a",
                    { className: "next", onClick: this.next.bind(this) },
                    ">"
                );
                var month = this.state.stage > 1 ? null : React.createElement(
                    "a",
                    { className: "month", onClick: function onClick() {
                            _this11.stageChange(2);
                        } },
                    now.format('MM')
                );
                var year = this.state.stage >= 3 ? null : React.createElement(
                    "a",
                    { className: "year", onClick: function onClick() {
                            _this11.stageChange(3);
                        } },
                    now.format('YYYY')
                );
                return React.createElement(
                    "div",
                    { style: this.props.style, className: "date-picker-header" },
                    prev,
                    year,
                    month,
                    next
                );
            }
        }, {
            key: "_getFooter",
            value: function _getFooter() {
                if (this.state.stage == 1 && this.props.tools) {
                    return React.createElement(
                        "div",
                        { className: "date-picker-footer" },
                        React.createElement(
                            "a",
                            { className: "clear", onClick: this.clear.bind(this) },
                            "清除"
                        ),
                        React.createElement(
                            "a",
                            { className: "today-btn", onClick: this.today.bind(this) },
                            "今天"
                        )
                    );
                } else {
                    return "";
                }
            }
        }, {
            key: "_getView",
            value: function _getView() {
                switch (this.state.stage) {
                    case 1:
                        {
                            //星期结构
                            var weeks = this._getWeek();
                            var cont = this.renderDays();
                            return React.createElement(
                                "div",
                                { className: "inner" },
                                React.createElement(
                                    "div",
                                    { className: "cm-date-week-line" },
                                    weeks
                                ),
                                React.createElement(
                                    "ul",
                                    { className: "cm-date-lines" },
                                    cont
                                )
                            );
                        }
                    case 3:
                        {
                            var _cont = this.renderYears();
                            return React.createElement(
                                "div",
                                { className: "inner" },
                                React.createElement(
                                    "ul",
                                    { className: "cm-date-lines cm-date-year-line" },
                                    _cont
                                )
                            );
                        }
                    case 2:
                        {
                            var _cont2 = this.renderMonths();
                            return React.createElement(
                                "div",
                                { className: "inner" },
                                React.createElement(
                                    "ul",
                                    { className: "cm-date-lines cm-date-month-line" },
                                    _cont2
                                )
                            );
                        }
                    case 0:
                        {
                            var _cont3 = this.renderClock();
                            return React.createElement(
                                "div",
                                { className: "inner" },
                                React.createElement(
                                    "ul",
                                    { className: "cm-date-lines" },
                                    _cont3
                                )
                            );
                        }
                }
            }
        }, {
            key: "setStartDate",
            value: function setStartDate(start) {
                this.setState({
                    startDate: moment(start)
                });
            }
        }, {
            key: "setEndDate",
            value: function setEndDate(end) {
                this.setState({
                    endDate: moment(end)
                });
            }
        }, {
            key: "setValue",
            value: function setValue(value) {
                this.setState({
                    value: value,
                    current: moment(value)
                });
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this.state.value;
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames(this.props.className, 'date-picker');

                var now = moment(this.state.current);

                var header = this._getHeader(now);

                var view = this._getView();

                var footer = this._getFooter();

                return React.createElement(
                    "div",
                    { className: className, style: this.props.style },
                    header,
                    view,
                    footer
                );
            }
        }]);

        return Date;
    }(BaseComponent);

    Date.propTypes = {
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
        endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(moment)]),
        /**
         * 只显示时刻
         * @attribute timeOnly
         * @type {Boolean}
         */
        timeOnly: PropTypes.bool,
        /**
         * 只显示日期
         * @attribute dateOnly
         * @type {Boolean}
         */
        dateOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        /**
         * 只显示月份
         * @attribute monthOnly
         * @type {Boolean}
         */
        monthOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        /**
         * 只显示年份
         * @attribute yearOnly
         * @type {Boolean}
         */
        yearOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        /**
         * 最小视图
         * @attribute minStage
         * @type {Number}
         */
        minStage: PropTypes.number,
        /**
         * 最大视图
         * @attribute maxStage
         * @type {Number}
         */
        maxStage: PropTypes.number,
        /**
         * 是否显示前一按钮
         * @attribute prevBtn
         * @type {Boolean}
         */
        prevBtn: PropTypes.bool,
        /**
         * 是否显示后一月按钮
         * @attribute nextBtn
         * @type {Boolean}
         */
        nextBtn: PropTypes.bool
    };

    module.exports = Date;
});
