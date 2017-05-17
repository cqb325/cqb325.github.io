define(["module", "react", "react-dom", "utils/Dom", "velocity", "utils/UUID", "classnames", 'utils/Events', "core/BaseComponent"], function (module, React, ReactDOM, Dom, velocity, UUID, classnames, Events, BaseComponent) {
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

    var isDescendant = Dom.isDescendant;

    var Menu = function (_BaseComponent) {
        _inherits(Menu, _BaseComponent);

        function Menu(props) {
            _classCallCheck(this, Menu);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this, props));

            _this.onSelect = _this.onSelect.bind(_this);
            _this.onClick = _this.onClick.bind(_this);
            _this.onCollapse = _this.onCollapse.bind(_this);
            _this.onOpen = _this.onOpen.bind(_this);
            _this.modal = props.modal;

            _this.openKeys = {};
            _this.lastOpenKey = null;
            _this.items = {};
            _this.children = [];

            _this.addState({
                layout: props.layout
            });
            _this.name = "Menu";
            _this.prefix = props.prefix || "cm-menu";
            _this.startIndex = props.startIndex == undefined ? 1 : 0;
            return _this;
        }

        _createClass(Menu, [{
            key: "getOpenKeys",
            value: function getOpenKeys() {
                return this.openKeys;
            }
        }, {
            key: "getModal",
            value: function getModal() {
                return this.modal;
            }
        }, {
            key: "onSelect",
            value: function onSelect(item) {
                if (this.props.onSelect) {
                    this.props.onSelect(item);
                }
                this.emit("select", item);
            }
        }, {
            key: "unSelect",
            value: function unSelect(item) {
                if (this.props.unSelect) {
                    this.props.unSelect(item);
                }
                this.emit("unSelect", item);
            }
        }, {
            key: "onClick",
            value: function onClick(item) {
                if (this.props.onClick) {
                    this.props.onClick(item);
                }
                this.emit("click", item);
            }
        }, {
            key: "onCollapse",
            value: function onCollapse(item) {
                if (this.props.onCollapse) {
                    this.props.onCollapse(item);
                }
                this.emit("collapse", item);
            }
        }, {
            key: "setTheme",
            value: function setTheme(theme) {
                this.setState({ theme: theme });
            }
        }, {
            key: "onOpen",
            value: function onOpen(item) {
                if (this.props.onOpen) {
                    this.props.onOpen(item);
                }
                this.emit("open", item);
            }
        }, {
            key: "collapse",
            value: function collapse(key, collapsed) {
                var item = this.items[key];
                if (item) {
                    while (item) {
                        if (item.props.parent.name === "Menu") {
                            item.collapse(collapsed);
                            break;
                        } else {
                            item = item.props.parent;
                        }
                    }
                }
            }
        }, {
            key: "selectItem",
            value: function selectItem(key) {
                var item = this.items[key];
                if (item && item.select) {
                    item.select();
                    var parent = item.props.parent;
                    while (parent) {
                        if (parent.name === "SubMenu") {
                            parent.collapse(false);
                        }
                        parent = parent.props.parent;
                    }
                }
            }
        }, {
            key: "bindKey",
            value: function bindKey(key, item) {
                this.items[key] = item;
                if (item.name === "SubMenu" && item.isOpen()) {
                    this.openKeys[key] = true;
                    if (this.modal === "single") {
                        this.lastOpenKey = key;
                    }
                }
            }
        }, {
            key: "appendChild",
            value: function appendChild(item) {
                this.children.push(item);
            }
        }, {
            key: "renderChildren",
            value: function renderChildren() {
                var _this2 = this;

                var cildren = this.props.children;
                return React.Children.map(cildren, function (child, index) {
                    var props = child.props;
                    props = _extends({}, props, {
                        onSelect: _this2.onSelect,
                        onClick: _this2.onClick,
                        onCollapse: _this2.onCollapse,
                        onOpen: _this2.onOpen,
                        parent: _this2,
                        root: _this2,
                        index: index,
                        level: _this2.startIndex,
                        prefix: _this2.prefix,
                        layout: _this2.props.layout
                    });
                    return React.cloneElement(child, props);
                });
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
                Events.off(document, "click", this.onDocumentClick);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
                if (this.props.layout != "inline") {
                    Events.on(document, "click", this.onDocumentClick.bind(this));
                }
            }
        }, {
            key: "onDocumentClick",
            value: function onDocumentClick(event) {
                if (this._isMounted) {
                    var target = event.target || event.srcElement;
                    var ele = ReactDOM.findDOMNode(this);
                    if (ele != target && !isDescendant(ele, target)) {
                        for (var key in this.openKeys) {
                            this.collapse(key, true);
                        }
                    }
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames(className, this.prefix, this.state.theme, _defineProperty({}, this.prefix + "-" + this.state.layout, this.props.layout != undefined));
                return React.createElement(
                    "ul",
                    { className: className, style: style },
                    this.renderChildren()
                );
            }
        }]);

        return Menu;
    }(BaseComponent);

    Menu.defaultProps = {
        theme: 'light',
        modal: 'single',
        layout: "inline"
    };

    /**
     * Divider
     */

    var Divider = function (_BaseComponent2) {
        _inherits(Divider, _BaseComponent2);

        function Divider() {
            _classCallCheck(this, Divider);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Divider).apply(this, arguments));
        }

        _createClass(Divider, [{
            key: "render",
            value: function render() {
                return React.createElement("li", { className: this.props.prefix + "-item-divider" });
            }
        }]);

        return Divider;
    }(BaseComponent);

    Menu.Divider = Divider;

    var SubMenu = function (_BaseComponent3) {
        _inherits(SubMenu, _BaseComponent3);

        function SubMenu(props) {
            _classCallCheck(this, SubMenu);

            var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(SubMenu).call(this, props));

            _this4.prefix = props.prefix;
            _this4.addState({
                hover: false,
                collapsed: !props.open || false
            });

            _this4.identify = props.identify || "SubMenu_level_" + (props.parent.identify ? props.parent.identify : "") + "_" + props.index;
            _this4.children = [];
            _this4.name = "SubMenu";

            _this4.isAnimating = false;
            return _this4;
        }

        _createClass(SubMenu, [{
            key: "appendChild",
            value: function appendChild(item) {
                this.children.push(item);
            }
        }, {
            key: "renderChildren",
            value: function renderChildren() {
                var _this5 = this;

                var cildren = this.props.children;
                return React.Children.map(cildren, function (child, index) {
                    var props = child.props;
                    props = _extends({}, props, {
                        onSelect: _this5.props.onSelect,
                        onClick: _this5.props.onClick,
                        parent: _this5,
                        root: _this5.props.root,
                        index: index,
                        prefix: _this5.prefix,
                        level: _this5.props.level + 1,
                        layout: _this5.props.layout
                    });
                    return React.cloneElement(child, props);
                });
            }
        }, {
            key: "onMouseOver",
            value: function onMouseOver() {
                if (this.props.disabled) {
                    return false;
                }
                this.setState({ hover: true });
            }
        }, {
            key: "onMouseOut",
            value: function onMouseOut() {
                if (this.props.disabled) {
                    return false;
                }
                this.setState({ hover: false });
            }
        }, {
            key: "onMouseLeave",
            value: function onMouseLeave() {
                var _this6 = this;

                if (this.props.disabled) {
                    return false;
                }
                if (this.props.layout === "horizontal") {
                    if (this.leaveTimer) {
                        window.clearTimeout(this.leaveTimer);
                        this.leaveTimer = null;
                    }
                    this.leaveTimer = window.setTimeout(function () {
                        _this6.onClick(null, true, false);
                    }, 300);
                }
            }
        }, {
            key: "onMouseEnter",
            value: function onMouseEnter() {
                var _this7 = this;

                if (this.props.disabled) {
                    return false;
                }
                if (this.props.layout === "horizontal") {
                    if (this.enterTimer) {
                        window.clearTimeout(this.enterTimer);
                        this.enterTimer = null;
                    }
                    this.enterTimer = window.setTimeout(function () {
                        _this7.onClick(null, true, true);
                    }, 100);
                }
            }
        }, {
            key: "onClick",
            value: function onClick(event, called, collapse) {
                if (this.props.disabled) {
                    return false;
                }

                if (!called && this.props.layout === "horizontal") {
                    return false;
                }
                var parent = this.props.root;
                var openKeys = parent.getOpenKeys();
                if (parent.getModal() === "single") {
                    if (!openKeys[this.identify]) {
                        if (!this.lastOpenIsOffsetParent()) {
                            parent.collapse(parent.lastOpenKey, true);
                        }
                    }
                }

                if (!called && this.props.onClick) {
                    this.props.onClick(this);
                }

                if (this.props.layout === "horizontal") {
                    if (collapse && this.state.collapsed) {
                        this.collapse(false);
                    }
                    if (!collapse && !this.state.collapsed) {
                        this.collapse(true);
                    }
                } else {
                    if (this.state.collapsed) {
                        this.collapse(false);
                    } else {
                        this.collapse(true);
                    }
                }
            }
        }, {
            key: "lastOpenIsOffsetParent",
            value: function lastOpenIsOffsetParent() {
                var parent = this.props.parent;
                var root = this.props.root;
                while (parent) {
                    if (parent.identify === root.lastOpenKey) {
                        return true;
                    }

                    parent = parent.props.parent;
                }

                return false;
            }
        }, {
            key: "isOpen",
            value: function isOpen() {
                return !this.state.collapsed;
            }
        }, {
            key: "collapse",
            value: function collapse(collapsed) {
                var _this8 = this;

                if (this.isAnimating) {
                    return false;
                }
                var subMenu = Dom.dom(ReactDOM.findDOMNode(this.refs.subMenu));
                var parent = this.props.root;
                var openKeys = parent.getOpenKeys();
                this.isAnimating = true;
                if (collapsed) {
                    velocity(subMenu[0], "slideUp", { duration: 300, complete: function complete() {
                            _this8.isAnimating = false;
                        } });

                    if (this.props.onCollapse) {
                        this.props.onCollapse(this);
                    }

                    if (parent.getModal() === "single") {
                        //当前打开的是自身
                        if (openKeys[this.identify]) {
                            if (this.props.parent.name !== "Menu") {
                                var p = this.props.parent;
                                if (p.name === "MenuItemGroup") {
                                    p = p.props.parent;
                                }
                                parent.lastOpenKey = p.identify;
                            } else {
                                parent.lastOpenKey = null;
                            }
                        }
                        delete openKeys[this.identify];
                    } else {
                        delete openKeys[this.identify];
                    }
                } else {
                    velocity(subMenu[0], "slideDown", { duration: 300, complete: function complete() {
                            _this8.isAnimating = false;
                        } });

                    if (this.props.onOpen) {
                        this.props.onOpen(this);
                    }

                    if (parent.getModal() === "single") {
                        parent.lastOpenKey = this.identify;
                        openKeys[this.identify] = true;
                    } else {
                        openKeys[this.identify] = true;
                    }
                }
                window.setTimeout(function () {
                    if (_this8._isMounted) {
                        _this8.setState({
                            collapsed: collapsed
                        });
                    }
                }, 0);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
                var root = this.props.root;
                root.bindKey(this.identify, this);

                this.props.parent.appendChild(this);
            }
        }, {
            key: "render",
            value: function render() {
                var _classnames2;

                var className = classnames(this.prefix + "-submenu-title", (_classnames2 = {}, _defineProperty(_classnames2, this.prefix + "-submenu-title-hover", this.state.hover), _defineProperty(_classnames2, this.prefix + "-disabled", this.props.disabled), _classnames2));

                var className2 = classnames(this.prefix + "-submenu", _defineProperty({}, this.prefix + "-submenu-active", !this.state.collapsed));

                var paddingLeft = this.props.layout === "inline" ? 24 * this.props.level : 0;
                var style = paddingLeft ? { paddingLeft: paddingLeft } : null;
                return React.createElement(
                    "li",
                    { className: className2,
                        onMouseEnter: this.onMouseEnter.bind(this),
                        onMouseLeave: this.onMouseLeave.bind(this)
                    },
                    React.createElement(
                        "div",
                        { className: className,
                            onMouseOver: this.onMouseOver.bind(this),
                            onMouseOut: this.onMouseOut.bind(this),
                            onClick: this.onClick.bind(this),
                            style: style
                        },
                        React.createElement(
                            "span",
                            null,
                            this.props.title
                        )
                    ),
                    React.createElement(
                        "ul",
                        { ref: "subMenu", className: this.prefix + "-sub " + this.prefix, style: { display: this.props.open ? "block" : "none" } },
                        this.renderChildren()
                    )
                );
            }
        }]);

        return SubMenu;
    }(BaseComponent);

    var MenuItemGroup = function (_BaseComponent4) {
        _inherits(MenuItemGroup, _BaseComponent4);

        function MenuItemGroup(props) {
            _classCallCheck(this, MenuItemGroup);

            var _this9 = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItemGroup).call(this, props));

            _this9.prefix = props.prefix;

            _this9.children = [];
            _this9.name = "MenuItemGroup";
            _this9.identify = "ItemGroup_" + props.parent.identify + "_" + props.index;
            return _this9;
        }

        _createClass(MenuItemGroup, [{
            key: "renderChildren",
            value: function renderChildren() {
                var _this10 = this;

                var cildren = this.props.children;
                return React.Children.map(cildren, function (child, index) {
                    var props = child.props;
                    props = _extends({}, props, {
                        onSelect: _this10.props.onSelect,
                        onClick: _this10.props.onClick,
                        index: index,
                        parent: _this10,
                        prefix: _this10.prefix,
                        root: _this10.props.root,
                        level: _this10.props.level,
                        layout: _this10.props.layout
                    });
                    return React.cloneElement(child, props);
                });
            }
        }, {
            key: "appendChild",
            value: function appendChild(item) {
                this.children.push(item);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.parent.appendChild(this);
            }
        }, {
            key: "render",
            value: function render() {

                return React.createElement(
                    "li",
                    { className: this.prefix + "-item-group" },
                    React.createElement(
                        "div",
                        { className: this.prefix + "-item-group-title" },
                        this.props.title
                    ),
                    React.createElement(
                        "ul",
                        { className: this.prefix + "-item-group-list" },
                        this.renderChildren()
                    )
                );
            }
        }]);

        return MenuItemGroup;
    }(BaseComponent);

    var Item = function (_BaseComponent5) {
        _inherits(Item, _BaseComponent5);

        function Item(props) {
            _classCallCheck(this, Item);

            var _this11 = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));

            _this11.identify = props.identify || "Item_level_" + (props.parent.identify ? props.parent.identify : "") + "_" + props.index;
            _this11.prefix = props.prefix;

            _this11.addState({
                active: props.select || false
            });
            _this11.name = "Item";
            return _this11;
        }

        /**
         * 点击
         * @returns {boolean}
         */


        _createClass(Item, [{
            key: "onClick",
            value: function onClick() {
                if (this.props.disabled) {
                    return false;
                }

                if (this.props.onClick) {
                    this.props.onClick(this);
                }
                this.emit("click", this);

                var parent = this.props.root;
                if (parent.lastSelect && parent.lastSelect != this) {
                    parent.lastSelect.unSelect();
                }
                this.select();
            }
        }, {
            key: "select",
            value: function select() {
                if (this._isMounted) {
                    this.setState({ active: true });
                }
                var parent = this.props.root;
                parent.lastSelect = this;

                if (this.props.layout != "inline") {
                    var _parent = this.props.parent;
                    console.log(_parent.name);
                    while (_parent.name != "Menu") {
                        if (_parent.name === "SubMenu") {
                            _parent.collapse(true);
                        }
                        _parent = _parent.props.parent;
                    }
                }

                if (this.props.onSelect) {
                    this.props.onSelect(this);
                }

                this.emit("select", this);
            }
        }, {
            key: "unSelect",
            value: function unSelect() {
                if (this._isMounted) {
                    this.setState({ active: false });
                }
                var parent = this.props.root;
                parent.lastSelect = null;
                if (parent.unSelect) {
                    parent.unSelect(this);
                }
            }
        }, {
            key: "getKey",
            value: function getKey() {
                return this.identify;
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
                var root = this.props.root;
                root.bindKey(this.identify, this);
                this.props.parent.appendChild(this);
            }
        }, {
            key: "render",
            value: function render() {
                var _classnames4;

                var className = classnames(this.props.className, this.prefix + "-item", (_classnames4 = {}, _defineProperty(_classnames4, this.prefix + "-item-active", this.state.active), _defineProperty(_classnames4, this.prefix + "-disabled", this.props.disabled), _classnames4));

                var paddingLeft = this.props.layout === "inline" ? 24 * this.props.level : 0;
                var style = paddingLeft ? { paddingLeft: paddingLeft } : null;
                return React.createElement(
                    "li",
                    { className: className,
                        onClick: this.onClick.bind(this),
                        style: style
                    },
                    React.createElement(
                        "a",
                        { href: this.props.link || "javascript:void(0)" },
                        this.props.children
                    )
                );
            }
        }]);

        return Item;
    }(BaseComponent);

    Menu.SubMenu = SubMenu;
    Menu.MenuItemGroup = MenuItemGroup;
    Menu.Item = Item;

    module.exports = Menu;
});
