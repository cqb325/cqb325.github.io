define(["module", "react", "Core", "classnames", "core/BaseComponent", "moment", "utils/Dom", "utils/UUID", "CheckBox", "utils/shallowEqual"], function (module, React, Core, classnames, BaseComponent, moment, Dom, UUID, CheckBox, shallowEqual) {
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

    var Table = function (_BaseComponent) {
        _inherits(Table, _BaseComponent);

        function Table(props) {
            _classCallCheck(this, Table);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

            _this.data = _this._rebuildData(props.data);

            _this.addState({
                data: _this.data || [],
                columns: props.columns
            });

            _this.checkboxes = {};

            _this._index = 1;
            return _this;
        }

        _createClass(Table, [{
            key: "_rebuildData",
            value: function _rebuildData(data) {
                if (data && data.length) {
                    return data.map(function (item) {
                        return {
                            key: item.id || UUID.v4(),
                            data: item
                        };
                    });
                }
                return data;
            }
        }, {
            key: "setData",
            value: function setData(data) {
                var newData = this._rebuildData(data);
                this._index = 1;
                this.setState({ data: newData });
            }
        }, {
            key: "getData",
            value: function getData() {
                return this.state.data;
            }
        }, {
            key: "getColumns",
            value: function getColumns() {
                return this.state.columns;
            }
        }, {
            key: "addRow",
            value: function addRow(row) {
                var data = this.getData();
                data.push({
                    key: row.id || UUID.v4(),
                    data: row
                });
                this.setState({ data: data });
            }
        }, {
            key: "removeRow",
            value: function removeRow(index) {
                var data = this.getData();
                if (index >= 0 && index < data.length) {
                    data.splice(index, 1);
                    this.setState({ data: data });
                }
            }
        }, {
            key: "removeRows",
            value: function removeRows(field, value) {
                var data = this.getData();
                for (var i = data.length - 1; i >= 0; i--) {
                    if (data[i].data[field] == value) {
                        data.splice(i, 1);
                    }
                }
                this.setState({ data: data });
            }
        }, {
            key: "resetData",
            value: function resetData(data) {
                var newData = this._rebuildData(data.data);
                this._index = 1;
                this.setState({ columns: data.columns, data: newData });
            }
        }, {
            key: "checkedAll",
            value: function checkedAll(checked) {
                for (var key in this.checkboxes) {
                    var row = this.checkboxes[key]["row"];
                    row.check(checked);
                }
            }
        }, {
            key: "checkRow",
            value: function checkRow(field, value) {
                for (var key in this.checkboxes) {
                    var row = this.checkboxes[key]["row"];
                    if (row.getData()[field] == value) {
                        row.check(true);
                    }
                }
            }
        }, {
            key: "unCheckRow",
            value: function unCheckRow(field, value) {
                for (var key in this.checkboxes) {
                    var row = this.checkboxes[key]["row"];
                    if (row.getData()[field] == value) {
                        row.check(false);
                    }
                }
            }
        }, {
            key: "bindCheckBox",
            value: function bindCheckBox(key, data) {
                this.checkboxes[key] = data;
            }
        }, {
            key: "unBindCheckBox",
            value: function unBindCheckBox(key) {
                delete this.checkboxes[key];
            }
        }, {
            key: "getAllChecked",
            value: function getAllChecked() {
                var data = [];var rows = [];
                for (var key in this.checkboxes) {
                    var row = this.checkboxes[key]["row"];
                    if (row.isChecked()) {
                        data.push(row.getData());
                        rows.push(row);
                    }
                }

                return {
                    data: data,
                    rows: rows
                };
            }
        }, {
            key: "refreshHeaderCheckBox",
            value: function refreshHeaderCheckBox(key, checked) {
                if (!checked) {
                    this.refs.header.check(checked);
                } else {
                    var isAllChecked = true;
                    for (var _key in this.checkboxes) {
                        var row = this.checkboxes[_key]["row"];
                        if (!row.isChecked()) {
                            isAllChecked = false;
                            break;
                        }
                    }

                    this.refs.header.check(isAllChecked);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames("cm-table", this.props.className, {
                    "table-bordered": this.props.bordered,
                    "table-striped": this.props.striped,
                    "table-hover": this.props.hover
                });
                return React.createElement(
                    "div",
                    { className: "table-responsive" },
                    React.createElement(
                        "table",
                        { className: className, style: this.props.style },
                        React.createElement(Header, { ref: "header", columns: this.state.columns, table: this }),
                        React.createElement(Body, { ref: "body", data: this.state.data, columns: this.state.columns, table: this })
                    )
                );
            }
        }]);

        return Table;
    }(BaseComponent);

    var Header = function (_BaseComponent2) {
        _inherits(Header, _BaseComponent2);

        function Header(props) {
            _classCallCheck(this, Header);

            var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

            _this2.addState({
                columns: props.columns || []
            });
            return _this2;
        }

        _createClass(Header, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (!shallowEqual(nextProps.columns, this.state.columns)) {
                    this.setState({
                        columns: nextProps.columns
                    });
                }
            }
        }, {
            key: "checkedAll",
            value: function checkedAll(value, checked, event, item) {
                this.props.table.checkedAll(checked);
            }
        }, {
            key: "check",
            value: function check(checked) {
                this.refs.checkbox.updateState({
                    checked: checked
                });
            }
        }, {
            key: "renderColumns",
            value: function renderColumns() {
                var _this3 = this;

                var columns = this.state.columns;

                return columns.map(function (column, index) {
                    if (columns.hide) {
                        return null;
                    }
                    var text = null;
                    var className = classnames(column.className);
                    if (column.type === "checkbox") {
                        text = React.createElement(CheckBox, { ref: "checkbox", checked: false, onChange: _this3.checkedAll.bind(_this3) });
                        className = classnames(className, "cm-table-col-checkbox");
                    } else if (column.type === "index") {
                        className = classnames(className, "cm-table-col-index");
                        text = column.text;
                    } else {
                        text = column.text;
                    }
                    return React.createElement(
                        "th",
                        { key: index, className: className, width: column.width, style: column.style,
                            name: column.name },
                        text
                    );
                });
            }
        }, {
            key: "render",
            value: function render() {

                return React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        this.renderColumns()
                    )
                );
            }
        }]);

        return Header;
    }(BaseComponent);

    Table.Header = Header;

    /**
     * Body 类
     * @class Body
     * @extend BaseComponent
     */

    var Body = function (_BaseComponent3) {
        _inherits(Body, _BaseComponent3);

        function Body(props) {
            _classCallCheck(this, Body);

            var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Body).call(this, props));

            _this4.addState({
                data: props.data || []
            });
            return _this4;
        }

        _createClass(Body, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (!shallowEqual(nextProps.data, this.state.data)) {
                    this.setState({
                        data: nextProps.data
                    });
                }
            }
        }, {
            key: "renderData",
            value: function renderData() {
                var _this5 = this;

                var data = this.state.data;

                return data.map(function (row, index) {
                    return React.createElement(Row, { row: index, data: row.data, key: row.key, identify: row.key, columns: _this5.props.columns, table: _this5.props.table });
                });
            }
        }, {
            key: "render",
            value: function render() {

                return React.createElement(
                    "tbody",
                    null,
                    this.renderData()
                );
            }
        }]);

        return Body;
    }(BaseComponent);

    Table.Body = Body;

    /**
     * Row 类
     * @class Row
     * @extend BaseComponent
     */

    var Row = function (_BaseComponent4) {
        _inherits(Row, _BaseComponent4);

        function Row(props) {
            _classCallCheck(this, Row);

            var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Row).call(this, props));

            _this6.addState({
                data: props.data || []
            });

            _this6.identify = props.identify || UUID.v4();
            return _this6;
        }

        _createClass(Row, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (!shallowEqual(nextProps.data, this.state.data)) {
                    this.setState({
                        data: nextProps.data
                    });
                }
            }
        }, {
            key: "checkRow",
            value: function checkRow(value, checked, event, item) {
                var _this7 = this;

                window.setTimeout(function () {
                    _this7.props.table.refreshHeaderCheckBox(_this7.identify, checked);
                }, 0);
            }
        }, {
            key: "check",
            value: function check(checked) {
                this.refs.checkbox.updateState({ checked: checked });
            }
        }, {
            key: "isChecked",
            value: function isChecked() {
                if (this.refs.checkbox) {
                    return this.refs.checkbox.state.checked;
                } else {
                    return false;
                }
            }
        }, {
            key: "getData",
            value: function getData() {
                return this.state.data;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.refs.checkbox) {
                    this.props.table.bindCheckBox(this.identify, { checkbox: this.refs.checkbox, row: this });
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.refs.checkbox) {
                    this.props.table.unBindCheckBox(this.identify);
                }
            }
        }, {
            key: "renderData",
            value: function renderData() {
                var _this8 = this;

                var data = this.state.data;
                var table = this.props.table;

                var columns = this.props.columns || [];
                return columns.map(function (col, index) {
                    if (col.hide) {
                        return null;
                    }
                    if (col.type === "checkbox") {
                        return React.createElement(
                            "td",
                            { "data-row": _this8.props.row, "data-col": index, key: index },
                            React.createElement(CheckBox, { ref: "checkbox", checked: false, onChange: _this8.checkRow.bind(_this8) })
                        );
                    }
                    if (col.type === "index") {
                        return React.createElement(
                            "td",
                            { "data-row": _this8.props.row, "data-col": index, key: index },
                            table._index++
                        );
                    }
                    var text = data[col.name];
                    text = _this8.formatData(text, col, data);

                    var tip = "";
                    if (React.isValidElement(text)) {
                        if (col.tip) {
                            text = text.props.children;
                        }
                        return React.createElement(
                            "td",
                            { "data-row": _this8.props.row, "data-col": index, key: index, title: tip },
                            text
                        );
                    }

                    if (text instanceof Array) {
                        text = text.join("");
                        col.tip = false;
                    }

                    if (col.tip) {
                        tip = text + "";
                        if ('<' == tip.charAt(0)) {
                            tip = Dom.dom(tip).text();
                        }
                    }

                    return React.createElement("td", { "data-row": _this8.props.row, "data-col": index, key: index, dangerouslySetInnerHTML: { __html: text }, title: tip });
                });
            }
        }, {
            key: "formatData",
            value: function formatData(text, col, data) {
                if (col.format) {
                    var formatFun = void 0;
                    if (typeof col.format === 'function') {
                        formatFun = col.format;
                    } else if (typeof col.format === 'string') {
                        formatFun = Table.Formats[col.format];
                    }
                    if (formatFun) {
                        text = formatFun(text, col, data);
                    }
                }

                return text;
            }
        }, {
            key: "render",
            value: function render() {

                return React.createElement(
                    "tr",
                    { "data-row": this.props.row },
                    this.renderData()
                );
            }
        }]);

        return Row;
    }(BaseComponent);

    Table.Row = Row;

    Table.propTypes = {
        /**
         * 表中数据
         * @attribute data
         * @type {Array}
         */
        data: PropTypes.array,
        /**
         * 表头定义
         * @attribute header
         * @type {Array}
         */
        header: PropTypes.array,
        /**
         * 宽度
         * @attribute width
         * @type {String}
         * @default auto/100%
         */
        width: PropTypes.string,
        /**
         * 高度
         * @attribute height
         * @type {String}
         * @default auto
         */
        height: PropTypes.string,
        /**
         * 是否显示边框
         * @attribute bordered
         * @type {Boolean}
         * @default false
         */
        bordered: PropTypes.bool,
        /**
         * 是否交替显示背景
         * @attribute striped
         * @type {Boolean}
         * @default false
         */
        striped: PropTypes.bool,
        /**
         * 鼠标滑过是否显示背景色
         * @attribute hover
         * @type {Boolean}
         * @default false
         */
        hover: PropTypes.bool
    };

    Table.Formats = {
        /**
         * 日期格式化
         * @param value
         * @param column
         * @param row
         * @returns {*}
         * @constructor
         */
        DateFormat: function DateFormat(value, column, row) {
            if (value) {
                return moment(value).format("YYYY-MM-DD");
            } else {
                return "";
            }
        },

        /**
         * 日期时间格式化
         * @param value
         * @param column
         * @param row
         * @returns {*}
         * @constructor
         */
        DateTimeFormat: function DateTimeFormat(value, column, row) {
            if (value) {
                return moment(value).format("YYYY-MM-DD HH:mm:ss");
            } else {
                return "";
            }
        }
    };

    module.exports = Table;
});
