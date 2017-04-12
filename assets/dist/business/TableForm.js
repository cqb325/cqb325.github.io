define(["module", "react", "core/BaseComponent", 'classnames', 'Input', 'CheckBoxGroup', 'RadioGroup', 'DateTime', 'Select', 'TextArea', 'Upload', 'FormControl', 'Table', 'utils/UUID'], function (module, React, BaseComponent, classnames, Input, CheckBoxGroup, RadioGroup, DateTime, Select, TextArea, Upload, FormControl, Table, UUID) {
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

    var TableForm = function (_BaseComponent) {
        _inherits(TableForm, _BaseComponent);

        function TableForm(props) {
            _classCallCheck(this, TableForm);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TableForm).call(this, props));

            _this.state = {
                data: []
            };

            _this.items = [];
            return _this;
        }

        /**
         * 创建table使用的column
         * @param columns
         */


        _createClass(TableForm, [{
            key: "buildColumns",
            value: function buildColumns(columns) {
                var _this2 = this;

                if (columns) {
                    columns.forEach(function (column) {
                        if (column.type) {
                            _this2.buildColumn(column);
                        }
                    });
                }
            }
        }, {
            key: "onChange",
            value: function onChange(col, items, name, value, selectItem) {
                if (this.props.onChange) {
                    this.props.onChange(name, value, col, items, selectItem);
                }
            }
        }, {
            key: "buildColumn",
            value: function buildColumn(column) {
                var scope = this;
                column.format = function (value, col, row) {
                    var itemProps = _extends({}, column.props || {});
                    scope.mergeProps(itemProps, column, ["rules", "messages", "name"]);
                    itemProps.value = value || itemProps.defaultValue || "";
                    return React.createElement(FormControl, _extends({ ref: function ref(_ref) {
                            var refs = scope.getLastRefs();
                            if (refs) {
                                refs[column.name] = _ref;
                            }
                        }, onChange: scope.onChange.bind(scope, col, scope.getLastRefs(), itemProps.name), type: column.type }, itemProps));
                };
            }
        }, {
            key: "mergeProps",
            value: function mergeProps(target, source, props) {
                if (props) {
                    props.forEach(function (prop) {
                        if (source[prop] != undefined) {
                            target[prop] = source[prop];
                        }
                    });
                }
            }
        }, {
            key: "getLastRefs",
            value: function getLastRefs() {
                if (this.items.length) {
                    return this.items[this.items.length - 1];
                } else {
                    return null;
                }
            }
        }, {
            key: "addRow",
            value: function addRow(row) {
                var rowItems = {};
                this.items.push(rowItems);
                if (row) {
                    if (row.id == undefined) {
                        row.id = UUID.v4();
                    }
                    this.refs.table.addRow(row);
                    row.__rowItems = rowItems;
                } else {
                    row = this.props.columns.map(function (column) {
                        return _defineProperty({}, "" + column.name, column.defaultValue || "");
                    });
                    row.id = UUID.v4();
                    row.__rowItems = rowItems;
                    this.refs.table.addRow(row);
                }
            }
        }, {
            key: "getRowData",
            value: function getRowData(id) {
                var index = this.getIndexById(id);

                if (index != null) {
                    if (index < this.items.length) {
                        var items = this.items[index];
                        var param = {};
                        for (var field in items) {
                            if (items[field].getValue) {
                                param[field] = items[field].getValue();
                            }
                        }
                        return param;
                    }
                }

                return null;
            }
        }, {
            key: "removeRow",
            value: function removeRow(index) {
                this.items.splice(index, 1);
                this.refs.table.removeRow(index);
            }
        }, {
            key: "removeRowById",
            value: function removeRowById(id) {
                var index = this.getIndexById(id);
                if (index != null) {
                    this.removeRow(index);
                }
            }
        }, {
            key: "getIndexById",
            value: function getIndexById(id) {
                var tableData = this.refs.table.getData();
                var index = null;
                for (var i = 0; i < tableData.length; i++) {
                    if (tableData[i].key === id) {
                        index = i;
                        break;
                    }
                }

                return index;
            }
        }, {
            key: "getData",
            value: function getData() {
                return this.items.map(function (rowItems) {
                    var param = {};
                    for (var field in rowItems) {
                        if (rowItems[field].getValue) {
                            param[field] = rowItems[field].getValue();
                        }
                    }
                    return param;
                });
            }
        }, {
            key: "isValid",
            value: function isValid() {
                var valid = true;
                for (var i = 0; i < this.items.length; i++) {
                    var rowItems = this.items[i];
                    for (var field in rowItems) {
                        if (rowItems[field].isFormItem() && rowItems[field].check() == false) {
                            valid = false;
                            return valid;
                        }
                    }
                }

                return valid;
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var columns = _props.columns;
                var className = _props.className;
                var bordered = _props.bordered;
                var hover = _props.hover;
                var striped = _props.striped;

                this.buildColumns(columns);
                return React.createElement(Table, { ref: "table", columns: columns, data: this.state.data, className: className, bordered: bordered, hover: hover, striped: striped });
            }
        }]);

        return TableForm;
    }(BaseComponent);

    module.exports = TableForm;
});
