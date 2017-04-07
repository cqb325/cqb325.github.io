define(["module", "react", "react-dom", "classnames", "moment", "utils/Dom", "utils/ClickAway", "core/BaseComponent", 'Clock'], function (module, React, ReactDOM, classnames, moment, Dom, clickAway, BaseComponent, Clock) {
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

    var Datetime = function (_BaseComponent) {
        _inherits(Datetime, _BaseComponent);

        function Datetime(props) {
            _classCallCheck(this, Datetime);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Datetime).call(this, props));

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
            _this.addState({
                stage: stages[stage],
                visibility: false,
                value: props.value,
                current: moment(props.value),
                startDate: _this.props.startDate ? moment(_this.props.startDate) : false,
                endDate: _this.props.endDate ? moment(_this.props.endDate) : false
            });
            return _this;
        }

        /**
         * 格式化值
         * @method formatValue
         * @param value {String} 日期的值
         * @returns {String} 格式化后的日期
         */


        _createClass(Datetime, [{
            key: "formatValue",
            value: function formatValue(value) {
                if (this.props.format) {
                    return moment(value).format(this.props.format);
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

                var ele = ReactDOM.findDOMNode(this.refs.datePicker);
                ele.style.display = 'block';

                var container = Dom.closest(ele, ".cm-datetime");
                var offset = Dom.getOuterHeight(ele) + 5;
                var dropup = Dom.overView(container, offset);

                Dom.withoutTransition(container, function () {
                    _this2.setState({ dropup: dropup });
                });

                var today = moment();

                if (!this.state.visibility) {
                    _get(Object.getPrototypeOf(Datetime.prototype), "show", this).call(this);
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
                _get(Object.getPrototypeOf(Datetime.prototype), "hide", this).call(this);
                this.unbindClickAway();
                if (this.view === "datetime" && this.state.stage === "time") {
                    this.setState({
                        stage: 1
                    });
                }
            }
        }, {
            key: "dayChange",
            value: function dayChange(date) {
                var _this3 = this;

                this.setState({
                    value: this.formatValue(date),
                    current: date
                });

                this.emit("selectDate", date.toDate());

                if (this.minStage == 0) {
                    setTimeout(function () {
                        _this3.setState({
                            stage: 0
                        });
                    }, 0);
                } else {
                    this.hide();
                }
            }
        }, {
            key: "yearChange",
            value: function yearChange(year) {
                var _this4 = this;

                var current = this.state.current;
                current.set({ "year": year, date: 1 });
                var state = void 0;
                if (this.minStage == 3) {
                    state = {
                        value: this.formatValue(current),
                        current: current
                    };
                } else {
                    state = {
                        stage: 2,
                        current: current
                    };
                }
                setTimeout(function () {
                    _this4.setState(state);
                }, 0);

                this.emit("selectYear", year);
            }
        }, {
            key: "monthChange",
            value: function monthChange(month) {
                var _this5 = this;

                var current = this.state.current;
                current.set({ "month": month, date: 1 });

                var state = void 0;
                if (this.minStage == 2) {
                    state = {
                        value: this.formatValue(current),
                        current: current
                    };
                } else {
                    state = {
                        stage: 1,
                        current: current
                    };
                }
                setTimeout(function () {
                    _this5.setState(state);
                }, 0);
                this.emit("selectMonth", month);
            }
        }, {
            key: "timeChange",
            value: function timeChange(time) {
                var _this6 = this;

                time = time.time;
                var current = this.state.current;
                current.set({ "hour": time.get("hour"), minute: time.get("minute"), second: time.get("second") });

                setTimeout(function () {
                    _this6.setState({
                        current: current,
                        value: current.format("YYYY-MM-DD HH:mm:ss")
                    });
                }, 0);

                this.emit("selectTime", current.format("HH:mm:ss"));
            }
        }, {
            key: "stageChange",
            value: function stageChange(stage) {
                var _this7 = this;

                if (stage < this.minStage || stage > this.maxStage) {
                    return;
                }
                if (this.state.stage === stage) {
                    stage = 1;
                }
                window.setTimeout(function () {
                    _this7.setState({ stage: stage });
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
            }
        }, {
            key: "renderDays",
            value: function renderDays() {
                var value = this.state.value,
                    current = moment(this.state.current),
                    year = current.year(),
                    month = current.month(),
                    first = moment(current.set("date", 1)),
                    end = moment(first).add(1, 'months').add(-1, 'days'),
                    min = 1 - first.weekday(),
                    max = Math.ceil((end.get("date") - min + 1) / 7) * 7,
                    days = [];

                //当前视窗需要渲染的日期
                for (var date, i = 0; i < max; i++) {
                    var temp = moment(first);
                    date = temp.add(i + min, "days");
                    days.push(date);
                }

                //当天
                var isToday = value ? year === moment(value).get("year") && month === moment(value).get('month') : false;

                var startDate = this.state.startDate;
                var endDate = this.state.endDate;

                return days.map(function (d, i) {
                    var _this8 = this;

                    //日期过滤
                    var disabled = startDate && moment(d.format(startDate._f)).diff(startDate) < 0 ? true : false;
                    disabled = disabled || (endDate && moment(d.format(endDate._f)).diff(endDate) > 0 ? true : false);

                    var className = classnames('day', {
                        disabled: disabled,
                        gray: d.get('month') !== month,
                        today: isToday && moment(value).get('date') === d.get('date') && moment(value).get('month') === d.get('month')
                    });

                    return React.createElement(
                        "button",
                        { type: "button", onClick: function onClick() {
                                _this8.dayChange(d);
                            }, key: i, className: className },
                        d.get('date')
                    );
                }, this);
            }
        }, {
            key: "renderYears",
            value: function renderYears() {
                var _this9 = this;

                var current = moment(this.state.current),
                    year = current.get("year");

                var ret = [];

                var _loop = function _loop(i) {
                    ret.push(React.createElement(
                        "button",
                        { type: "button", onClick: function onClick() {
                                _this9.yearChange(i);
                            }, key: i, className: 'year' },
                        i
                    ));
                };

                for (var i = year - 12; i < year + 13; i++) {
                    _loop(i);
                }

                return ret;
            }
        }, {
            key: "renderMonths",
            value: function renderMonths() {
                var _this10 = this;

                var current = moment(this.state.current),
                    year = current.get("year"),
                    month = current.get("month");

                var ret = [];
                var months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

                var _loop2 = function _loop2(i) {
                    ret.push(React.createElement(
                        "button",
                        { type: "button", onClick: function onClick() {
                                _this10.monthChange(i);
                            }, key: i, className: 'month' },
                        months[i]
                    ));
                };

                for (var i = 0; i < 12; i++) {
                    _loop2(i);
                }

                return ret;
            }
        }, {
            key: "timeClose",
            value: function timeClose() {
                if (this.view !== "time") {
                    this.setState({
                        stage: 1
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
                var prev = this.state.stage == 3 ? null : React.createElement(
                    "a",
                    { className: "prev", onClick: this.prev.bind(this) },
                    React.createElement("i", { className: "fa fa-chevron-left" })
                );
                var next = this.state.stage == 3 ? null : React.createElement(
                    "a",
                    { className: "next", onClick: this.next.bind(this) },
                    React.createElement("i", { className: "fa fa-chevron-right" })
                );
                var month = this.state.stage > 1 ? null : React.createElement(
                    "a",
                    { className: "month", onClick: function onClick() {
                            _this11.stageChange(2);
                        } },
                    now.format('MM')
                );
                return React.createElement(
                    "div",
                    { style: this.props.style, className: "date-picker-header" },
                    prev,
                    React.createElement(
                        "a",
                        { className: "year", onClick: function onClick() {
                                _this11.stageChange(3);
                            } },
                        now.format('YYYY')
                    ),
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
                                weeks,
                                cont
                            );
                        }
                    case 3:
                        {
                            var _cont = this.renderYears();
                            return React.createElement(
                                "div",
                                { className: "inner" },
                                _cont
                            );
                        }
                    case 2:
                        {
                            var _cont2 = this.renderMonths();
                            return React.createElement(
                                "div",
                                { className: "inner" },
                                _cont2
                            );
                        }
                    case 0:
                        {
                            var _cont3 = this.renderClock();
                            return React.createElement(
                                "div",
                                { className: "inner" },
                                _cont3
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
                var className = classnames(this.props.className, 'cm-datetime', this.state.theme, {
                    disabled: this.props.disabled || this.props.readOnly,
                    active: this.state.active && !this.props.readOnly,
                    dropup: this.state.dropup
                });

                var text = this.state.value ? this.formatValue(this.state.value) : "";
                text = text ? React.createElement(
                    "span",
                    { className: "date-text" },
                    text
                ) : React.createElement(
                    "span",
                    { className: "date-text" },
                    this.props.placeholder,
                    " "
                );

                var now = moment(this.state.current);

                var header = this._getHeader(now);

                var view = this._getView();

                var footer = this._getFooter();

                return React.createElement(
                    "div",
                    { ref: "datetime", onClick: this.show.bind(this), className: className, style: this.props.style || {} },
                    text,
                    React.createElement("i", { className: "fa fa-calendar" }),
                    React.createElement(
                        "div",
                        { className: "cm-datetime-wrap", ref: "datePicker", style: { display: this.state.visibility ? "block" : "none" } },
                        React.createElement(
                            "div",
                            { className: "date-picker" },
                            header,
                            view,
                            footer
                        )
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

    module.exports = Datetime;
});
