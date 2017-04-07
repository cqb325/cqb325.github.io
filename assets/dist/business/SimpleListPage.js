define(["module", "react", "Table2", "Pagination", "jquery"], function (module, React, Table, Pagination, jQuery) {
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

    var SimpleListPage = function (_React$Component) {
        _inherits(SimpleListPage, _React$Component);

        function SimpleListPage(props) {
            _classCallCheck(this, SimpleListPage);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleListPage).call(this, props));
        }

        _createClass(SimpleListPage, [{
            key: "getSearchParams",
            value: function getSearchParams(page, pageSize) {
                var params = {
                    pageNum: page,
                    pageSize: pageSize
                };

                var searchClazz = this.props.searchClass || "searchItem";

                jQuery("." + searchClazz).each(function () {
                    var name = $(this).attr("name");
                    var value = $(this).val();
                    if ($(this).attr("type") == "radio") {
                        value = $("input[name='" + name + "']:checked").val();
                    }
                    if (value != "") {
                        params[name] = value;
                    }
                });

                return params;
            }
        }, {
            key: "search",
            value: function search(page, pageSize) {
                var scope = this;
                $.ajax({
                    url: this.props.action,
                    type: "post",
                    dataType: "json",
                    data: this.getSearchParams(page, pageSize)
                }).then(function (ret) {
                    scope.refs.table.setData(ret.data);
                    if (scope.refs.pagination) {
                        scope.refs.pagination.update({ total: ret.total, current: ret.pageNum, pageSize: ret.pageSize });
                    }

                    if (scope.props.afterRequest) {
                        scope.props.afterRequest();
                    }
                }).fail(function () {
                    console.log("get Table Data error!");
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.search(1, 10);
                var searchBtn = this.props.searchBtn || $("#search-btn");
                var scope = this;
                $(searchBtn).on("click", function () {
                    var pageSize = 10;
                    if (scope.refs.pagination) {
                        pageSize = scope.refs.pagination.state.pageSize;
                    }
                    scope.search(1, pageSize);
                });
            }
        }, {
            key: "refresh",
            value: function refresh() {
                var pageSize = 10;
                var current = 1;
                if (this.refs.pagination) {
                    pageSize = this.refs.pagination.state.pageSize;
                    current = this.refs.pagination.state.current;
                }
                this.search(current, pageSize);
            }
        }, {
            key: "getData",
            value: function getData() {
                return this.refs.table.getData();
            }
        }, {
            key: "setData",
            value: function setData(data) {
                this.refs.table.setData(data);
            }
        }, {
            key: "getTable",
            value: function getTable() {
                return this.refs.table;
            }
        }, {
            key: "checkRows",
            value: function checkRows(ids) {
                ids.forEach(function (id) {
                    this.checkRow(id);
                }, this);
            }
        }, {
            key: "checkRow",
            value: function checkRow(field, value) {
                this.refs.table.checkRow(field, value);
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(Table, { ref: "table", columns: this.props.columns, data: this.props.data || [], bordered: true, hover: true, striped: true }),
                    React.createElement(
                        "div",
                        { className: "cm-row" },
                        this.props.pagination ? React.createElement(Pagination, { className: "pull-right", ref: "pagination", current: 1, pageSize: 10, total: 0, onChange: this.search.bind(this), onShowSizeChange: this.search.bind(this) }) : null
                    )
                );
            }
        }]);

        return SimpleListPage;
    }(React.Component);

    module.exports = SimpleListPage;
});
