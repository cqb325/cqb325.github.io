define(["module", "react", "react-dom", "Core", "classnames", "FontIcon", "Button", "core/BaseComponent"], function (module, React, ReactDOM, Core, classnames, FontIcon, Button, BaseComponent) {
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

    var Component = React.Component;

    var PropTypes = React.PropTypes;

    var PagePrev = function (_Component) {
        _inherits(PagePrev, _Component);

        function PagePrev(props) {
            _classCallCheck(this, PagePrev);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(PagePrev).call(this, props));
        }

        _createClass(PagePrev, [{
            key: "render",
            value: function render() {
                var className = classnames("prev", {
                    disabled: this.props.current == 1
                });
                return React.createElement(
                    "li",
                    { onClick: this.props.onClick, className: className },
                    React.createElement(
                        "a",
                        { href: "javascript:void(0)" },
                        React.createElement(FontIcon, { icon: "angle-left" })
                    )
                );
            }
        }]);

        return PagePrev;
    }(Component);

    var PageNext = function (_Component2) {
        _inherits(PageNext, _Component2);

        function PageNext() {
            _classCallCheck(this, PageNext);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(PageNext).apply(this, arguments));
        }

        _createClass(PageNext, [{
            key: "render",
            value: function render() {
                var className = classnames("next", {
                    disabled: this.props.disabled
                });

                return React.createElement(
                    "li",
                    { onClick: this.props.onClick, className: className },
                    React.createElement(
                        "a",
                        { href: "javascript:void(0)" },
                        React.createElement(FontIcon, { icon: "angle-right" })
                    )
                );
            }
        }]);

        return PageNext;
    }(Component);

    var PageItem = function (_Component3) {
        _inherits(PageItem, _Component3);

        function PageItem() {
            _classCallCheck(this, PageItem);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(PageItem).apply(this, arguments));
        }

        _createClass(PageItem, [{
            key: "render",
            value: function render() {
                var className = classnames({
                    active: this.props.active
                });
                return React.createElement(
                    "li",
                    { onClick: this.props.onClick, className: className },
                    React.createElement(
                        "a",
                        { href: "javascript:void(0)" },
                        this.props.currentIndex
                    )
                );
            }
        }]);

        return PageItem;
    }(Component);

    var Pagination = function (_BaseComponent) {
        _inherits(Pagination, _BaseComponent);

        function Pagination(props) {
            _classCallCheck(this, Pagination);

            var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Pagination).call(this, props));

            _this4.addState({
                current: props.current,
                _current: props.current,
                pageSize: props.pageSize,
                total: props.total,
                displayedPages: 5,
                displayInfo: _this4.props.displayInfo != undefined ? _this4.props.displayInfo : true
            });
            return _this4;
        }

        /**
         * 更新数据
         * @method update
         * @param data {Object} 分页数据
         */


        _createClass(Pagination, [{
            key: "update",
            value: function update(data) {
                var params = {};
                if (data.pageSize != undefined) {
                    params.pageSize = data.pageSize;
                }
                if (data.displayedPages != undefined) {
                    params.displayedPages = data.displayedPages;
                }
                if (data.total != undefined) {
                    params.total = data.total;
                }

                if (data.current != undefined) {
                    params.current = data.current;
                    params._current = data.current;

                    var size = data.pageSize || this.state.pageSize;
                    var total = data.total || this.state.total;

                    if (params.current > this._calcPage(size, total)) {
                        this.setState(params);
                        this._changePageSize(size, true);
                        return;
                    }
                }

                this.setState(params);
            }
        }, {
            key: "_calcPage",
            value: function _calcPage(p, total) {
                var pageSize = p;
                if (typeof pageSize === 'undefined') {
                    pageSize = this.state.pageSize;
                }
                total = total || this.state.total;
                return Math.floor((total - 1) / pageSize) + 1;
            }
        }, {
            key: "_isValid",
            value: function _isValid(page) {
                return typeof page === 'number' && page >= 1 && page !== this.state.current;
            }
        }, {
            key: "_selectPageSize",
            value: function _selectPageSize() {
                this._changePageSize(parseInt(ReactDOM.findDOMNode(this.refs.pageSize).value));
            }
        }, {
            key: "_changePageSize",
            value: function _changePageSize(size, preventCallback) {
                var current = this.state.current;

                if (typeof size === 'number') {
                    this.setState({
                        pageSize: size
                    });
                    if (this.state.current > this._calcPage(size)) {
                        current = this._calcPage(size) || 1;
                        this.setState({
                            current: current,
                            _current: current
                        });
                        if (this.refs.pageNum) {
                            ReactDOM.findDOMNode(this.refs.pageNum).value = current;
                        }
                    }
                }
                if (!preventCallback) {
                    if (this.props.onShowSizeChange) {
                        this.props.onShowSizeChange(current, size);
                        this.emit("showSizeChange", current, size);
                    } else {
                        this.goToPage();
                    }
                }
            }
        }, {
            key: "_handleChange",
            value: function _handleChange(p) {
                var page = p;
                if (this._isValid(page)) {
                    if (page > this._calcPage()) {
                        page = this._calcPage();
                    }

                    if (!('current' in this.props)) {
                        this.setState({
                            current: page,
                            _current: page
                        });
                    }

                    this.update({ current: page });
                    if (this.props.onChange) {
                        this.props.onChange(page, this.state.pageSize);
                    }
                    this.emit("change", page, this.state.pageSize);

                    if (this.refs.pageNum) {
                        ReactDOM.findDOMNode(this.refs.pageNum).value = page;
                    }

                    return page;
                }

                return this.state.current;
            }
        }, {
            key: "goToPage",
            value: function goToPage() {
                var page = parseInt(ReactDOM.findDOMNode(this.refs.pageNum).value);
                if (this._isValid(page) && page <= this._calcPage()) {
                    this._handleChange(page);
                }
            }
        }, {
            key: "handlerInput",
            value: function handlerInput(e) {
                this.setState({
                    _current: e.target.value
                });
            }
        }, {
            key: "keyUp",
            value: function keyUp(e) {
                if (e.keyCode == 13) {
                    this.goToPage();
                }
            }
        }, {
            key: "_prev",
            value: function _prev() {
                if (this._hasPrev()) {
                    this._handleChange(this.state.current - 1);
                }
            }
        }, {
            key: "_next",
            value: function _next() {
                if (this._hasNext()) {
                    this._handleChange(this.state.current + 1);
                }
            }
        }, {
            key: "_hasPrev",
            value: function _hasPrev() {
                return this.state.current > 1;
            }
        }, {
            key: "_hasNext",
            value: function _hasNext() {
                return this.state.current < this._calcPage();
            }
        }, {
            key: "_jumpPrev",
            value: function _jumpPrev() {
                this._handleChange(Math.max(1, this.state.current - 5));
            }
        }, {
            key: "_jumpNext",
            value: function _jumpNext() {
                this._handleChange(Math.min(this._calcPage(), this.state.current + 5));
            }
        }, {
            key: "_getInterval",
            value: function _getInterval() {
                var state = this.state;
                var pages = this._calcPage();
                var displayedPages = state.displayedPages;
                var half = displayedPages / 2;
                return {
                    start: Math.ceil(state.current > half ? Math.max(Math.min(state.current - half, pages - displayedPages), 0) : 0),
                    end: Math.ceil(state.current > half ? Math.min(state.current + half, pages) : Math.min(half, pages))
                };
            }
        }, {
            key: "render",
            value: function render() {
                var pages = this._calcPage();
                var pagerList = [];

                var current = this.state.current;
                var interval = this._getInterval();
                if (pages <= 9) {
                    for (var i = 0; i < pages; i++) {
                        var active = current === i + 1;
                        pagerList.push(React.createElement(PageItem, { key: i + 1, onClick: this._handleChange.bind(this, i + 1), active: active, currentIndex: i + 1 }));
                    }
                } else {
                    var edges = 2;
                    var end = Math.min(edges, interval.start);
                    for (var _i = 0; _i < end; _i++) {
                        pagerList.push(React.createElement(PageItem, { key: _i + 1, onClick: this._handleChange.bind(this, _i + 1),
                            currentIndex: _i + 1 }));
                    }
                    if (edges < interval.start && interval.start - edges != 1) {
                        pagerList.push(React.createElement(
                            "li",
                            { key: "...1", className: "disabled" },
                            React.createElement(
                                "span",
                                { className: "ellipse" },
                                "•••"
                            )
                        ));
                    } else if (interval.start - edges == 1) {
                        pagerList.push(React.createElement(PageItem, { key: edges + 1, onClick: this._handleChange.bind(this, edges + 1),
                            currentIndex: edges + 1 }));
                    }

                    for (var j = interval.start; j < interval.end; j++) {
                        var _active = current === j + 1;
                        pagerList.push(React.createElement(PageItem, { key: j + 1, onClick: this._handleChange.bind(this, j + 1),
                            currentIndex: j + 1, active: _active }));
                    }

                    if (interval.end < pages && edges > 0) {
                        if (pages - edges > interval.end && pages - edges - interval.end != 1) {
                            pagerList.push(React.createElement(
                                "li",
                                { key: "...2", className: "disabled" },
                                React.createElement(
                                    "span",
                                    { className: "ellipse" },
                                    "•••"
                                )
                            ));
                        } else if (pages - edges - interval.end == 1) {
                            pagerList.push(React.createElement(PageItem, { key: interval.end + 1, onClick: this._handleChange.bind(this, interval.end + 1),
                                currentIndex: interval.end + 1 }));
                        }
                        var begin = Math.max(pages - edges, interval.end);
                        for (var k = begin; k < pages; k++) {
                            pagerList.push(React.createElement(PageItem, { key: k + 1, onClick: this._handleChange.bind(this, k + 1),
                                currentIndex: k + 1 }));
                        }
                    }
                }

                var className = classnames("cm-pagination", this.state.theme, this.props.className, this.props.shape);
                return React.createElement(
                    "div",
                    { className: className },
                    React.createElement(
                        "ul",
                        { style: { float: "left" } },
                        React.createElement(PagePrev, { current: current, onClick: this._prev.bind(this, null) }),
                        pagerList,
                        React.createElement(PageNext, { current: current, onClick: this._next.bind(this, null), disabled: current == pages })
                    ),
                    this.state.displayInfo ? React.createElement(
                        "div",
                        { className: "pagination-info" },
                        React.createElement(
                            "span",
                            { className: "ml-10" },
                            "共",
                            pages,
                            "页"
                        ),
                        " ",
                        React.createElement(
                            "span",
                            { className: "page-code" },
                            "每页",
                            React.createElement(
                                "select",
                                { name: "pageSize", className: "pageSize", value: this.state.pageSize, ref: "pageSize", onChange: this._selectPageSize.bind(this, null) },
                                React.createElement(
                                    "option",
                                    { value: "10" },
                                    "10"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "50" },
                                    "50"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "100" },
                                    "100"
                                )
                            ),
                            "条"
                        ),
                        " ",
                        React.createElement(
                            "span",
                            { className: "page-code mr-10" },
                            React.createElement(
                                "span",
                                null,
                                "到第"
                            ),
                            React.createElement("input", { name: "pageNum", className: "pageNum", ref: "pageNum",
                                autoComplete: "off",
                                value: this.state._current,
                                type: "text",
                                style: { width: "40px" },
                                onChange: this.handlerInput.bind(this),
                                onKeyUp: this.keyUp.bind(this)
                            }),
                            React.createElement(
                                "span",
                                null,
                                "页"
                            )
                        ),
                        React.createElement(
                            Button,
                            { theme: "primary", flat: true, onClick: this.goToPage.bind(this, null) },
                            "确定"
                        )
                    ) : null
                );
            }
        }]);

        return Pagination;
    }(BaseComponent);

    Pagination.propTypes = {
        /**
         * 当前选中的页号
         * @attribute current
         * @type {number}
         */
        current: PropTypes.number,
        /**
         * 记录总数
         * @attribute total
         * @type {number}
         */
        total: PropTypes.number,
        /**
         * 每页记录数
         * @attribute pageSize
         * @type {number}
         */
        pageSize: PropTypes.number
    };

    module.exports = Pagination;
});
