define(["module", "react", "react-dom", "classnames", "core/BaseComponent", "utils/UUID", "utils/Dom", "Draggable", "utils/Events"], function (module, React, ReactDOM, classnames, BaseComponent, UUID, Dom, Draggable, Events) {
    "use strict";

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
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

    var DraggableCore = Draggable.DraggableCore;

    var Grid = function (_BaseComponent) {
        _inherits(Grid, _BaseComponent);

        function Grid(props) {
            _classCallCheck(this, Grid);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).call(this, props));

            _this.data = props.data;
            var data = _this.rebuildData(props.data);
            _this.scrollDelta = props.scrollDelta || 40;
            _this.addState({
                data: data || [],
                columns: props.columns,
                pagination: props.pagination || false,
                pageNum: props.pageNum || 1,
                pageSize: props.pageSize || 10,
                columnWidth: []
            });
            return _this;
        }

        _createClass(Grid, [{
            key: "rebuildData",
            value: function rebuildData(data) {
                return data;
            }
        }, {
            key: "renderColGroups",
            value: function renderColGroups() {
                var cols = this.state.columns.map(function (column, index) {
                    return React.createElement("col", { key: index, style: { width: column.width } });
                });
                return React.createElement(
                    "colgroup",
                    null,
                    cols
                );
            }
        }, {
            key: "renderHeader",
            value: function renderHeader() {
                var ths = this.renderHeadRow();
                return React.createElement(
                    "div",
                    { className: "cm-grid-head-wrap" },
                    React.createElement(
                        "div",
                        { className: "cm-grid-head" },
                        ths
                    )
                );
            }
        }, {
            key: "resizeColumn",
            value: function resizeColumn(column, index, event, obj) {
                var columnWidth = this.state.columnWidth;
                var width = Math.max(columnWidth[index] + obj.deltaX, 50);
                columnWidth[index] = width;
                this.setState({
                    columnWidth: columnWidth
                });

                this.updateSpacer();
            }
        }, {
            key: "sortColumn",
            value: function sortColumn(column) {
                var data = this.state.data;
                if (column.__sort === "desc" || column.__sort === undefined) {
                    data.sort(function (a, b) {
                        if (column.sortType === "local") {
                            return a[column.name].localeCompare(b[column.name]);
                        } else {
                            var aVal = a[column.name];
                            if (aVal.replace) {
                                aVal = parseFloat(aVal.replace(/[^0-9\.]+/g, ""));
                            }
                            var bVal = b[column.name];
                            if (bVal.replace) {
                                bVal = parseFloat(bVal.replace(/[^0-9\.]+/g, ""));
                            }
                            return aVal - bVal;
                        }
                    });
                    column.__sort = "asc";
                } else {
                    data.sort(function (a, b) {
                        if (column.sortType === "local") {
                            return b[column.name].localeCompare(a[column.name]);
                        } else {
                            var aVal = a[column.name];
                            if (aVal.replace) {
                                aVal = parseFloat(aVal.replace(/[^0-9\.]+/g, ""));
                            }
                            var bVal = b[column.name];
                            if (bVal.replace) {
                                bVal = parseFloat(bVal.replace(/[^0-9\.]+/g, ""));
                            }
                            return bVal - aVal;
                        }
                    });
                    column.__sort = "desc";
                }

                this.setState({ data: data });
            }
        }, {
            key: "renderHeadRow",
            value: function renderHeadRow() {
                var _this2 = this;

                return this.state.columns.map(function (column, index) {
                    var width = _this2.state.columnWidth[index];
                    var style = {};
                    if (width != undefined) {
                        style.width = width;
                    }
                    return React.createElement(
                        "div",
                        { key: index, className: "cm-grid-column", style: style, "data-column": column.name, "data-index": index },
                        React.createElement(
                            "span",
                            { className: "cm-grid-head-text" },
                            column.text,
                            column.sort ? React.createElement("span", { className: "cm-grid-sort", onClick: _this2.sortColumn.bind(_this2, column) }) : null
                        ),
                        column.resize ? React.createElement(
                            DraggableCore,
                            { axis: "x", onDrag: _this2.resizeColumn.bind(_this2, column, index) },
                            React.createElement("span", { className: "cm-grid-resize" })
                        ) : null
                    );
                });
            }
        }, {
            key: "renderRows",
            value: function renderRows() {
                var _this3 = this;

                return this.state.data.map(function (row, rowIndex) {
                    var cells = _this3.state.columns.map(function (col, colIndex) {
                        var width = _this3.state.columnWidth[colIndex];
                        var style = {};
                        if (width != undefined) {
                            style.width = width;
                        }
                        return React.createElement(
                            "div",
                            { key: colIndex, style: style, className: "cm-grid-cell", "data-row": rowIndex, "data-cell": colIndex },
                            row[col.name]
                        );
                    });
                    return React.createElement(
                        "div",
                        { key: rowIndex, className: "cm-grid-row", "data-row": rowIndex },
                        cells
                    );
                });
            }
        }, {
            key: "renderBody",
            value: function renderBody() {
                var rows = this.renderRows();
                return React.createElement(
                    "div",
                    { className: "cm-grid-body-wrap" },
                    React.createElement(
                        "div",
                        { className: "cm-grid-body" },
                        rows
                    )
                );
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this4 = this;

                this._isMounted = true;
                var ele = ReactDOM.findDOMNode(this);
                var head = Dom.dom(Dom.query(".cm-grid-head-wrap", ele));
                var sc = Dom.dom(Dom.query(".cm-grid-scroll", ele));
                sc.css({
                    top: head.height() + "px"
                });
                var body = Dom.dom(Dom.queryAll(".cm-grid-body", ele));
                var box = Dom.dom(Dom.query(".cm-grid-box", ele));
                var spacer = Dom.dom(ReactDOM.findDOMNode(this.refs.spacer));
                spacer.css({ height: body.height() + "px" });
                var spacerWidth = spacer.width();
                var width = box.width();
                if (spacerWidth < width) {
                    var scrollWidth = width - spacerWidth;
                    var content = Dom.dom(ReactDOM.findDOMNode(this.refs.content));
                    content.css("right", scrollWidth + "px");
                }

                Events.on(ele, "mousewheel", function (e) {
                    var delta = e.wheelDelta;
                    if (delta > 0) {
                        _this4.scrollUp();
                    } else {
                        _this4.scrollDown();
                    }
                });

                this.onSpacerScroll();

                setTimeout(function () {
                    _this4.updateAllWidth();
                    _this4.updateSpacer();
                }, 0);
            }
        }, {
            key: "onSpacerScroll",
            value: function onSpacerScroll() {
                var ele = ReactDOM.findDOMNode(this);
                var body = Dom.dom(Dom.query(".cm-grid-body", ele));
                var scroll = Dom.query(".cm-grid-scroll-box", ele);
                var head = Dom.dom(Dom.query(".cm-grid-head", ele));
                Events.on(scroll, "scroll", function (e) {
                    body.css("top", -scroll.scrollTop + "px");
                    body.css("left", -scroll.scrollLeft + "px");
                    head.css("left", -scroll.scrollLeft + "px");
                });
            }
        }, {
            key: "updateSpacer",
            value: function updateSpacer() {
                var allWidth = 0;
                this.state.columnWidth.forEach(function (w) {
                    allWidth += w;
                });
                var spacer = Dom.dom(ReactDOM.findDOMNode(this.refs.spacer));
                spacer.css({ width: allWidth + "px" });
                var ele = ReactDOM.findDOMNode(this);
                var scroll = Dom.dom(Dom.query(".cm-grid-scroll-box", ele));
                var scrollWidthHeight = this.getScrollWidthHeight();
                var content = Dom.dom(ReactDOM.findDOMNode(this.refs.content));
                content.css("right", scrollWidthHeight.w + "px");
                content.css("bottom", scrollWidthHeight.h + "px");
            }
        }, {
            key: "getScrollWidthHeight",
            value: function getScrollWidthHeight() {
                var spacer = Dom.dom(ReactDOM.findDOMNode(this.refs.spacer));
                var spacerWidth = spacer.width();
                var spacerHeight = spacer.height();

                spacer.css({ height: '100%' });
                var height1 = spacer.height();
                spacer.css({ width: "1px", height: '100%' });
                var clientHeight = spacer.height();
                spacer.css({ width: "auto", height: spacerHeight + "px" });
                var width1 = spacer.width();
                spacer.css({ height: "1px" });
                var clientWidth = spacer.width();

                spacer.css({ height: spacerHeight + "px", width: spacerWidth + "px" });

                return { w: clientWidth - width1, h: clientHeight - height1 };
            }
        }, {
            key: "getBodyWidth",
            value: function getBodyWidth() {
                var ele = ReactDOM.findDOMNode(this);
                var row = Dom.query(".cm-grid-row:first-child", ele);
                if (row) {
                    var cells = Dom.dom(Dom.queryAll(".cm-grid-cell", row));
                    var width = 0;
                    cells.each(function (cell) {
                        width += Dom.dom(cell).width();
                    });

                    return width;
                }

                return "100%";
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: "scrollUp",
            value: function scrollUp() {
                var ele = ReactDOM.findDOMNode(this);
                var scroll = Dom.query(".cm-grid-scroll-box", ele);
                var body = Dom.dom(Dom.query(".cm-grid-body", ele));
                var top = scroll.scrollTop;
                top = Math.max(top - 40, 0);
                scroll.scrollTop = top;
                body.css("top", -top + "px");
            }
        }, {
            key: "scrollDown",
            value: function scrollDown() {
                var ele = ReactDOM.findDOMNode(this);
                var scroll = Dom.query(".cm-grid-scroll-box", ele);
                var body = Dom.dom(Dom.query(".cm-grid-body", ele));
                var top = scroll.scrollTop;
                top = top + 40;
                scroll.scrollTop = top;
                top = scroll.scrollTop;
                body.css("top", -top + "px");
            }
        }, {
            key: "calculateWidth",
            value: function calculateWidth() {
                var ele = ReactDOM.findDOMNode(this);
                var columnEles = Dom.dom(Dom.queryAll(".cm-grid-column", ele));
                var max = [];
                if (this.props.fixed) {
                    var _ret = function () {
                        var content = Dom.dom(Dom.query(".cm-grid-scroll-content", ele));
                        var allWidth = content.width();
                        var colWidth = allWidth / columnEles.length;
                        columnEles.each(function (col) {
                            max.push(colWidth);
                        });
                        return {
                            v: max
                        };
                    }();

                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
                }

                columnEles.each(function (col) {
                    max.push(Dom.dom(col).width() + 1);
                });

                var rowEles = Dom.dom(Dom.queryAll(".cm-grid-row", ele));
                if (rowEles.length) {
                    this.calculateWidthByRow(rowEles[0], max);
                    this.calculateWidthByRow(rowEles[rowEles.length - 1], max);
                    this.calculateWidthByRow(rowEles[Math.ceil(rowEles.length / 2)], max);
                }

                return max;
            }
        }, {
            key: "calculateWidthByRow",
            value: function calculateWidthByRow(row, max) {
                var cellEles = Dom.dom(Dom.queryAll(".cm-grid-cell", row));
                cellEles.each(function (cell, index) {
                    var cellWidth = Dom.dom(cell).width() + 1;
                    if (max[index] < cellWidth) {
                        max[index] = cellWidth;
                    }
                });
            }
        }, {
            key: "updateAllWidth",
            value: function updateAllWidth() {
                var max = this.calculateWidth();
                if (this._isMounted) {
                    this.setState({
                        columnWidth: max
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "cm-grid-wrap" },
                    React.createElement(
                        "div",
                        { className: "cm-grid-box" },
                        this.renderHeader(),
                        React.createElement(
                            "div",
                            { className: "cm-grid-scroll" },
                            React.createElement(
                                "div",
                                { className: "cm-grid-scroll-box" },
                                React.createElement("div", { className: "cm-grid-scroll-spacer", ref: "spacer" })
                            ),
                            React.createElement(
                                "div",
                                { className: "cm-grid-scroll-content", ref: "content" },
                                this.renderBody()
                            )
                        )
                    )
                );
            }
        }]);

        return Grid;
    }(BaseComponent);

    module.exports = Grid;
});
