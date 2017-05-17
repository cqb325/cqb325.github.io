define(["module", "react", "classnames", "core/BaseComponent", "utils/shallowEqual", "utils/UUID", "core/Ajax"], function (module, React, classnames, BaseComponent, shallowEqual, UUID, Ajax) {
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

    var TreeNode = function (_BaseComponent) {
        _inherits(TreeNode, _BaseComponent);

        function TreeNode(props) {
            _classCallCheck(this, TreeNode);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeNode).call(this, props));

            _this.addState({
                item: props.item
            });
            return _this;
        }

        /**
         * 节点选中事件回调
         * @method _select
         * @private
         */


        _createClass(TreeNode, [{
            key: "_select",
            value: function _select() {
                var item = this.state.item;
                this.props.onSelect ? this.props.onSelect(item) : false;
            }
        }, {
            key: "_openClose",
            value: function _openClose() {
                var item = this.state.item;
                item.open = !item.open;
                this.updateState();
                this.props.onOpenClose ? this.props.onOpenClose(item) : false;
            }
        }, {
            key: "_check",
            value: function _check() {
                var item = this.state.item;
                this.props.onCheck ? this.props.onCheck(item) : false;

                this.updateState();
            }
        }, {
            key: "updateState",
            value: function updateState() {
                var item = this.state.item;
                this.setState({
                    item: item
                });
            }
        }, {
            key: "open",
            value: function open() {
                var item = this.state.item;
                if (!item.open) {
                    item.open = true;
                    this.updateState();
                }
            }
        }, {
            key: "close",
            value: function close() {
                var item = this.state.item;
                if (item.open) {
                    item.open = false;
                    this.updateState();
                }
            }
        }, {
            key: "select",
            value: function select() {
                var item = this.state.item;
                if (!item._selected) {
                    item._selected = true;
                    this.setState({
                        item: item
                    });
                }
            }
        }, {
            key: "unSelect",
            value: function unSelect() {
                var item = this.state.item;
                if (item._selected === true) {
                    item._selected = false;
                    this.setState({
                        item: item
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var item = this.state.item;
                item._node = this;
                var iconStyle = item.icon ? {
                    "backgroundImage": "url(" + item.icon + ")"
                } : null;
                var textColor = item.color ? {
                    color: item.color
                } : null;

                item._checked = item._checked === undefined ? 0 : item._checked;
                //if(this.props.enableCheckbox && this.props.enableSmartCheckbox && item._parent && item._parent._checked){
                //    item._checked = 1;
                //}

                var checkboxEle = void 0;
                if (this.props.enableCheckbox) {
                    var checkClassName = classnames("tree_checkbox", {
                        checked: item._checked === 1,
                        dischecked: item._checked === 2
                    });
                    checkboxEle = React.createElement("span", { className: checkClassName, onClick: this._check.bind(this) });
                }

                var subNodes = null;
                if (item.children && item.children.length) {
                    subNodes = React.createElement(TreeSubNodes, {
                        items: item.children,
                        parent: item,
                        visible: item.open,
                        onSelect: this.props.onSelect,
                        onOpenClose: this.props.onOpenClose,
                        enableCheckbox: this.props.enableCheckbox,
                        enableSmartCheckbox: this.props.enableSmartCheckbox,
                        onCheck: this.props.onCheck
                    });
                }

                var iconClassName = classnames("tree_icon", {
                    icon_branch: item.children && item.children.length,
                    icon_leaf: !(item.children && item.children.length)
                });

                var nodeClassName = classnames("tree_node_wrap", {
                    node_open: item.open,
                    node_close: !item.open
                });

                var contClassName = classnames("tree_cont", {
                    node_selected: item._selected
                });
                return React.createElement(
                    "div",
                    { className: "tree_node" },
                    React.createElement(
                        "span",
                        { className: nodeClassName },
                        React.createElement("span", { className: "tree_arrow", onClick: this._openClose.bind(this) }),
                        checkboxEle,
                        React.createElement(
                            "span",
                            { className: contClassName, onClick: this._select.bind(this) },
                            React.createElement("span", { className: iconClassName, style: iconStyle }),
                            React.createElement(
                                "span",
                                { className: "tree_text", title: item.text, style: textColor },
                                item.text
                            )
                        )
                    ),
                    subNodes
                );
            }
        }]);

        return TreeNode;
    }(BaseComponent);

    TreeNode.propTypes = {
        /**
         * 节点数据
         * @attribute item
         * @type {Object}
         */
        item: PropTypes.object,
        /**
         * 是否显示复选框
         * @attribute enableCheckbox
         * @type {Boolean}
         */
        enableCheckbox: PropTypes.bool,
        /**
         * 是否使用级联复选框
         * @attribute enableSmartCheckbox
         * @type {Boolean}
         */
        enableSmartCheckbox: PropTypes.bool,
        /**
         * 选中的回调
         * @attribute onSelect
         * @type {Function}
         */
        onSelect: PropTypes.func,
        /**
         * 节点展开收缩的回调
         * @attribute onOpenClose
         * @type {Function}
         */
        onOpenClose: PropTypes.func,
        /**
         * 节点勾选的回调
         * @attribute onCheck
         * @type {Function}
         */
        onCheck: PropTypes.func
    };

    /**
     * TreeSubNodes 类
     * @class TreeSubNodes
     * @extend BaseComponent
     */

    var TreeSubNodes = function (_BaseComponent2) {
        _inherits(TreeSubNodes, _BaseComponent2);

        function TreeSubNodes(props) {
            _classCallCheck(this, TreeSubNodes);

            var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeSubNodes).call(this, props));

            _this2.addState({
                items: props.items
            });
            return _this2;
        }

        /**
         * 更新状态
         * @method updateState
         * @param newItems 新的数据
         */


        _createClass(TreeSubNodes, [{
            key: "updateState",
            value: function updateState(newItems) {
                var items = newItems || this.state.items;
                this.setState({
                    items: items
                });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (!shallowEqual(nextProps.items, this.props.items)) {
                    this.setState({ items: nextProps.items });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var items = this.state.items,
                    visible = this.props.visible;

                if (this.props.parent) {
                    this.props.parent._subNodes = this;
                }

                var nodes = items.map(function (item, index) {
                    item._parent = this.props.parent;
                    return React.createElement(TreeNode, {
                        key: index,
                        item: item,
                        onSelect: this.props.onSelect,
                        onOpenClose: this.props.onOpenClose,
                        enableCheckbox: this.props.enableCheckbox,
                        enableSmartCheckbox: this.props.enableSmartCheckbox,
                        onCheck: this.props.onCheck
                    });
                }, this);

                var classNames = this.props.isRoot ? "tree_rootNode" : "tree_subNode";
                var display = this.props.isRoot ? "" : visible ? "" : "none";
                return React.createElement(
                    "div",
                    { className: classNames, style: { display: display } },
                    nodes
                );
            }
        }]);

        return TreeSubNodes;
    }(BaseComponent);

    TreeSubNodes.propTypes = {
        /**
         * 节点数据
         * @attribute items
         * @type {Array}
         */
        items: PropTypes.array,
        /**
         * 是否为根节点
         * @attribute isRoot
         * @type {Boolean}
         */
        isRoot: PropTypes.bool,
        /**
         * 父节点数据
         * @attribute parent
         * @type {Object}
         */
        parent: PropTypes.object,
        /**
         * 是否显示
         * @attribute visible
         * @type {Boolean}
         */
        visible: PropTypes.bool,
        /**
         * 是否显示复选框
         * @attribute enableCheckbox
         * @type {Boolean}
         */
        enableCheckbox: PropTypes.bool,
        /**
         * 是否使用级联复选框
         * @attribute enableSmartCheckbox
         * @type {Boolean}
         */
        enableSmartCheckbox: PropTypes.bool,
        /**
         * 选中的回调
         * @attribute onSelect
         * @type {Function}
         */
        onSelect: PropTypes.func,
        /**
         * 节点展开收缩的回调
         * @attribute onOpenClose
         * @type {Function}
         */
        onOpenClose: PropTypes.func,
        /**
         * 节点勾选的回调
         * @attribute onCheck
         * @type {Function}
         */
        onCheck: PropTypes.func
    };

    /**
     * Tree 类
     * @class Tree
     * @constructor
     * @extend BaseComponent
     */

    var Tree = function (_BaseComponent3) {
        _inherits(Tree, _BaseComponent3);

        function Tree(props) {
            _classCallCheck(this, Tree);

            var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Tree).call(this, props));

            _this3.idData = {};
            _this3._reBuildData(props.data);
            _this3.selectedItem = null;
            _this3.checkedItems = {};
            _this3.addState({
                data: props.data || [],
                url: props.url,
                enableCheckbox: props.enableCheckbox || false,
                enableSmartCheckbox: props.enableSmartCheckbox || false
            });
            return _this3;
        }

        /**
         * 重新构建数据结构
         * @method _reBuildData
         * @param data {Object} 属性中的数据结构
         * @private
         */


        _createClass(Tree, [{
            key: "_reBuildData",
            value: function _reBuildData(data) {
                if (data) {
                    data.forEach(function (item) {
                        this.idData[item.id] = item;
                        if (item.children && item.children.length) {
                            this._reBuildData(item.children);
                        }
                    }, this);
                }
            }
        }, {
            key: "_select",
            value: function _select(item) {
                var lastSelectItem = this.selectedItem;

                if (lastSelectItem && lastSelectItem.id === item.id) {
                    return;
                } else {
                    if (lastSelectItem) {
                        lastSelectItem._node.unSelect();
                    }
                    item._node.select();
                    this.selectedItem = item;

                    if (this.props.onSelect) {
                        this.props.onSelect(item);
                    }

                    this.emit("select", item);
                }
            }
        }, {
            key: "_openClose",
            value: function _openClose(item) {
                if (this.props.onOpen) {
                    this.props.onOpen(item);
                }
                this.emit("open", item);
            }
        }, {
            key: "_check",
            value: function _check(item) {
                var checkedItems = this.checkedItems;

                if (item._checked === 0 || item._checked === 2) {
                    item._checked = 1;
                    checkedItems[item.id] = item;
                } else if (item._checked === 1) {
                    item._checked = 0;
                    delete checkedItems[item.id];
                }

                if (this.state.enableSmartCheckbox) {
                    this.setSmartSubChecked(item);
                    this.updateParentCheckStatus(item);
                }

                if (this.props.onCheck) {
                    this.props.onCheck(item);
                }
                this.emit("check", item);
            }
        }, {
            key: "setSmartSubChecked",
            value: function setSmartSubChecked(item) {
                this.setSubChecked(item);
                if (item.children && item.children.length) {
                    item.children.forEach(function (child) {
                        this.setSmartSubChecked(child);
                    }, this);
                }
            }
        }, {
            key: "setSubChecked",
            value: function setSubChecked(item) {
                if (item.children && item.children.length) {
                    item.children.forEach(function (child) {
                        child._checked = item._checked;
                        child._node.updateState();
                    });
                }
            }
        }, {
            key: "setItemChecked",
            value: function setItemChecked(item, checked) {
                var checkedItems = this.checkedItems;

                item._checked = checked;
                if (item._checked === 0) {
                    delete checkedItems[item.id];
                }
                if (item._checked === 1) {
                    checkedItems[item.id] = item;
                }
                if (item._checked === 2) {
                    delete checkedItems[item.id];
                }

                item._node.updateState();

                if (this.state.enableSmartCheckbox) {
                    this.setSmartSubChecked(item);
                    this.updateParentCheckStatus(item);
                }

                if (this.props.onCheck) {
                    this.props.onCheck(item);
                }
                this.emit("check", item);
            }
        }, {
            key: "getSubItems",
            value: function getSubItems(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                return item.children;
            }
        }, {
            key: "getItem",
            value: function getItem(itemId) {
                return this.idData[itemId];
            }
        }, {
            key: "getItemText",
            value: function getItemText(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (item) {
                    return item.text;
                } else {
                    return null;
                }
            }
        }, {
            key: "setItemText",
            value: function setItemText(item, text) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (item) {
                    item.text = text;
                    item._node.updateState();
                }
            }
        }, {
            key: "setItemColor",
            value: function setItemColor(item, color) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (item) {
                    item.color = color;
                    item._node.updateState();
                }
            }
        }, {
            key: "setItemImg",
            value: function setItemImg(item, img) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (item) {
                    item.icon = img;
                    item._node.updateState();
                }
            }
        }, {
            key: "getLevel",
            value: function getLevel(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (item) {
                    return item.level;
                } else {
                    return null;
                }
            }
        }, {
            key: "getOpenState",
            value: function getOpenState(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (item) {
                    return item.open;
                } else {
                    return null;
                }
            }
        }, {
            key: "getSelectedItem",
            value: function getSelectedItem() {
                return this.selectedItem;
            }
        }, {
            key: "isItemChecked",
            value: function isItemChecked(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                return item._checked === 1;
            }
        }, {
            key: "checkItem",
            value: function checkItem(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (!item) {
                    return;
                }
                if (item._checked !== 1) {
                    this.setItemChecked(item, 1);
                }
            }
        }, {
            key: "unCheckItem",
            value: function unCheckItem(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (!item) {
                    return;
                }
                if (item._checked !== 0) {
                    this.setItemChecked(item, 0);
                }
            }
        }, {
            key: "openItem",
            value: function openItem(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (item) {
                    item._node.open();
                }
            }
        }, {
            key: "openAllItem",
            value: function openAllItem() {
                var items = this.getAllBranches() || [];
                items.forEach(function (item) {
                    this.openItem(item);
                }, this);
            }
        }, {
            key: "closeItem",
            value: function closeItem(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (item) {
                    item._node.close();
                }
            }
        }, {
            key: "closeAllItem",
            value: function closeAllItem() {
                var items = this.getAllBranches() || [];
                items.forEach(function (item) {
                    this.closeItem(item);
                }, this);
            }
        }, {
            key: "selectItem",
            value: function selectItem(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (item) {
                    this._select(item);
                }
            }
        }, {
            key: "unSelectItem",
            value: function unSelectItem(item) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                if (item) {
                    item._node.unSelect();
                    this.selectedItem = null;
                }
            }
        }, {
            key: "getSubCheckedItems",
            value: function getSubCheckedItems(item) {
                return this.getSubChecks(item, 1);
            }
        }, {
            key: "getSubUncheckedItems",
            value: function getSubUncheckedItems(item) {
                return this.getSubChecks(item, 0);
            }
        }, {
            key: "getAllChecked",
            value: function getAllChecked() {
                return this.checkedItems;
            }
        }, {
            key: "getAllCheckedIncludeSmart",
            value: function getAllCheckedIncludeSmart() {
                var ret = [];
                for (var i in this.idData) {
                    var item = this.idData[i];
                    if (item._checked === 1 || item._checked === 2) {
                        ret.push(item);
                    }
                }

                return ret;
            }
        }, {
            key: "getSubChecks",
            value: function getSubChecks(item, checked) {
                if (typeof item === 'string') {
                    item = this.getItem(item);
                }
                var subs = [];
                if (item.children) {
                    subs = item.children.filter(function (child) {
                        return child._checked === checked;
                    });
                }
                return subs;
            }
        }, {
            key: "getAllCheckedBranches",
            value: function getAllCheckedBranches() {
                var items = [];
                for (var i in this.idData) {
                    var item = this.idData[i];
                    if (item._checked === 1 && item.children && item.children.length) {
                        items.push(item);
                    }
                }
                return items;
            }
        }, {
            key: "getAllCheckedLeafs",
            value: function getAllCheckedLeafs() {
                var items = [];
                for (var i in this.idData) {
                    var item = this.idData[i];
                    if (!item.children && item._checked === 1) {
                        items.push(item);
                    }
                }
                return items;
            }
        }, {
            key: "addItem",
            value: function addItem(parent, item) {
                if (typeof parent == "string") {
                    parent = this.getItem(parent);
                }
                this.idData[item.id] = item;

                item.parent = parent;
                if (parent) {
                    item.level = parent.level + 1;
                    parent.children ? parent.children.push(item) : parent.children = [item];
                } else {
                    parent = {
                        open: true,
                        children: [item]
                    };
                    item.level = 1;
                }

                parent._node.updateState();
            }
        }, {
            key: "deleteChildItems",
            value: function deleteChildItems(item) {
                if (typeof item == "string") {
                    item = this.getItem(item);
                }
                if (item) {
                    delete item.children;

                    item._node.updateState();
                }
            }
        }, {
            key: "removeItem",
            value: function removeItem(item) {
                if (typeof item == "string") {
                    item = this.getItem(item);
                }
                if (item) {
                    var parent = item._parent;
                    if (parent) {
                        for (var i = 0; i < parent.children.length; i++) {
                            if (shallowEqual(parent.children[i], item)) {
                                parent.children.splice(i, 1);
                                break;
                            }
                        }
                        if (parent.children.length === 0) {
                            delete parent["children"];
                        }
                        if (this.selectedItem == item) {
                            this.selectedItem = null;
                        }
                        parent._node.updateState();
                    }
                    delete this.idData[item.id];
                }
            }
        }, {
            key: "getAllBranches",
            value: function getAllBranches() {
                var ret = [];
                for (var i in this.idData) {
                    var item = this.idData[i];
                    if (item.children && item.children.length) {
                        ret.push(item);
                    }
                }

                return ret;
            }
        }, {
            key: "getAllLeafs",
            value: function getAllLeafs() {
                var ret = [];
                for (var i in this.idData) {
                    var item = this.idData[i];
                    if (!item.children) {
                        ret.push(item);
                    }
                }

                return ret;
            }
        }, {
            key: "updateParentCheckStatus",
            value: function updateParentCheckStatus(item) {
                var parent = item._parent;
                if (!parent) {
                    return;
                }

                var checkNum = 0;
                parent.children.forEach(function (child) {
                    checkNum = child._checked === 1 ? checkNum + 1 : checkNum;
                });

                var checked = parent._checked;
                if (checkNum === parent.children.length) {
                    checked = 1;
                } else if (checkNum === 0) {
                    checked = 0;
                } else {
                    checked = 2;
                }

                if (checked !== parent._checked) {
                    parent._checked = checked;
                    parent._node.updateState();
                    this.updateParentCheckStatus(parent);
                }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this4 = this;

                if (this.state.url) {
                    (function () {
                        var scope = _this4;
                        _this4.req = Ajax.get(_this4.state.url, {}, function (data, err) {
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
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.req) {
                    this.req.abort();
                }
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (!shallowEqual(nextProps.data, this.props.data)) {
                    this.setState({ data: nextProps.data });
                }
            }
        }, {
            key: "loadDynamicJSON",
            value: function loadDynamicJSON(parent, json, cback) {
                if (typeof parent == "string") {
                    parent = this.getItem(parent);
                }
                if (parent) {
                    if (parent.children) {
                        parent.children = parent.children.concat(json);
                        parent._subNodes.updateState(parent.children);
                    } else {
                        parent.children = json;
                        parent._node.updateState(parent);
                    }
                    cback ? cback(this) : false;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames("cm-tree");
                return React.createElement(
                    "div",
                    { className: className },
                    React.createElement(TreeSubNodes, {
                        items: this.state.data,
                        isRoot: true,
                        onSelect: this._select.bind(this),
                        onOpenClose: this._openClose.bind(this),
                        enableCheckbox: this.state.enableCheckbox,
                        enableSmartCheckbox: this.state.enableSmartCheckbox,
                        onCheck: this._check.bind(this)
                    })
                );
            }
        }]);

        return Tree;
    }(BaseComponent);

    Tree.propTypes = {
        /**
         * 数据源
         * @attribute data
         * @type {Array}
         */
        data: PropTypes.array,
        /**
         * 远程数据源
         * @attribute url
         * @type {String}
         */
        url: PropTypes.string,
        /**
         * 是否显示复选框
         * @attribute enableCheckbox
         * @type {Boolean}
         */
        enableCheckbox: PropTypes.bool,
        /**
         * 是否使用级联复选框
         * @attribute enableSmartCheckbox
         * @type {Boolean}
         */
        enableSmartCheckbox: PropTypes.bool,
        /**
         * 选中的回调
         * @attribute onSelect
         * @type {Function}
         */
        onSelect: PropTypes.func,
        /**
         * 节点展开收缩的回调
         * @attribute onOpen
         * @type {Function}
         */
        onOpen: PropTypes.func,
        /**
         * 节点勾选的回调
         * @attribute onCheck
         * @type {Function}
         */
        onCheck: PropTypes.func
    };

    module.exports = Tree;
});
