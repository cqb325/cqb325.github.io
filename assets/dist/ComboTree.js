define(["module", "react", 'react-dom', "classnames", "core/BaseComponent", 'Core', 'core/Ajax', "utils/ClickAway", 'utils/Dom', 'utils/grids', 'FormControl', 'Tree'], function (module, React, ReactDOM, classnames, BaseComponent, Core, Ajax, clickAway, Dom, grids, FormControl, Tree) {
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

    var getGrid = grids.getGrid;

    var ComboTree = function (_BaseComponent) {
        _inherits(ComboTree, _BaseComponent);

        function ComboTree(props) {
            _classCallCheck(this, ComboTree);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ComboTree).call(this, props));

            _this.selectedItems = {};

            _this.addState({
                value: props.value,
                active: false,
                data: props.data
            });

            _this.showOptions = _this.showOptions.bind(_this);
            _this.hideOptions = _this.hideOptions.bind(_this);
            return _this;
        }

        /**
         * 渲染值域区域
         * @method _renderValues
         * @returns {XML}
         * @private
         */


        _createClass(ComboTree, [{
            key: "_renderValues",
            value: function _renderValues() {
                var item = this.selectedItems[this.state.value];
                var label = item ? item["text"] : this.props.placeholder ? this.props.placeholder + "&nbsp;" : "&nbsp;",
                    className = classnames("cm-select-value", {
                    placeholder: !item && this.props.placeholder
                });

                var html = label + '<input type="hidden" name="' + this.props.name + '" value="' + this.state.value + '">';
                return React.createElement("span", { className: className, dangerouslySetInnerHTML: { __html: html } });
            }
        }, {
            key: "_selectItem",
            value: function _selectItem(item) {
                var valueField = "id";

                var value = null;
                if (!item) {
                    if (!this.props.multi) {
                        this.hideOptions();
                    }
                } else {
                    if (this.props.multi) {
                        this.selectedItems[item[valueField]] = item;
                        value = this.getSelectedValues();
                    } else {
                        value = item[valueField];
                        this.selectedItems = {};
                        this.selectedItems[value] = item;
                    }
                }

                this.setState({
                    value: value
                });

                if (this.props.onChange) {
                    this.props.onChange(value, item);
                }

                this.emit("change", value, item);
            }
        }, {
            key: "getSelectedValues",
            value: function getSelectedValues() {
                if (this.selectedItems) {
                    var ret = [];
                    for (var value in this.selectedItems) {
                        ret.push(value);
                    }
                    return ret.join(",");
                }
                return "";
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this.getSelectedValues();
            }
        }, {
            key: "setValue",
            value: function setValue(obj) {
                this.selectedItems[obj.id] = obj;
                this.setState({ value: obj.id });
            }
        }, {
            key: "componentClickAway",
            value: function componentClickAway() {
                this.hideOptions();
            }
        }, {
            key: "showOptions",
            value: function showOptions() {
                var _this2 = this;

                if (this.props.readOnly || this.props.disabled) {
                    return;
                }

                var options = ReactDOM.findDOMNode(this.refs.options);
                options.style.display = 'block';

                var container = Dom.closest(options, ".cm-select");
                var offset = Dom.getOuterHeight(options) + 5;
                var dropup = Dom.overView(container, offset);

                Dom.withoutTransition(container, function () {
                    _this2.setState({ dropup: dropup });
                });

                this.bindClickAway();

                setTimeout(function () {
                    _this2.setState({ active: true });
                }, 0);
            }
        }, {
            key: "hideOptions",
            value: function hideOptions() {
                var _this3 = this;

                this.setState({ active: false });
                var options = ReactDOM.findDOMNode(this.refs.options);

                this.unbindClickAway();

                var time = 500;
                if (this.isLtIE9()) {
                    time = 0;
                }

                setTimeout(function () {
                    if (_this3.state.active === false) {
                        options.style.display = 'none';
                    }
                }, time);
            }
        }, {
            key: "setData",
            value: function setData(data) {
                this.setState({
                    data: data,
                    value: ""
                });
            }
        }, {
            key: "getReference",
            value: function getReference() {
                return this.refs.tree;
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var _this4 = this;

                if (this.props.url) {
                    (function () {
                        var scope = _this4;
                        Ajax.get(_this4.props.url, {}, function (data) {
                            if (data) {
                                scope.setState({
                                    data: data
                                });
                            }
                        });
                    })();
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var disabled = _props.disabled;
                var readOnly = _props.readOnly;
                var style = _props.style;
                var grid = _props.grid;

                className = classnames("cm-select", getGrid(grid), {
                    active: this.state.active,
                    disabled: disabled || readOnly,
                    dropup: this.state.dropup,
                    hasEmptyOption: this.props.hasEmptyOption
                });

                var text = this._renderValues();
                return React.createElement(
                    "div",
                    { className: className, style: style, onClick: this.showOptions },
                    text,
                    React.createElement("span", { className: "cm-select-cert" }),
                    React.createElement(
                        "div",
                        { className: "cm-select-options-wrap" },
                        React.createElement(
                            "div",
                            { ref: "options", className: "cm-select-options" },
                            React.createElement(Tree, { ref: "tree", data: this.state.data, onSelect: this._selectItem.bind(this) })
                        )
                    )
                );
            }
        }]);

        return ComboTree;
    }(BaseComponent);

    ComboTree = clickAway(ComboTree);

    ComboTree.propTypes = {
        /**
         * 数据源
         * @attribute data
         * @type {Array/Object}
         */
        data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        /**
         * 默认选中的值
         * @attribute value
         * @type {String}
         */
        value: PropTypes.string,
        /**
         * 自定义class
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
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
         * 多选状态
         * @attribute multi
         * @type {Boolean}
         */
        multi: PropTypes.bool,
        /**
         * 自定义样式
         * @attribute style
         * @type {Object}
         */
        style: PropTypes.object,
        /**
         * 请选择文字
         * @attribute choiceText
         * @type {String}
         */
        choiceText: PropTypes.string,
        /**
         * holder文字
         * @attribute placeholder
         * @type {String}
         */
        placeholder: PropTypes.string
    };

    if (FormControl) {
        FormControl.register(ComboTree, "combotree");
    }

    module.exports = ComboTree;
});
