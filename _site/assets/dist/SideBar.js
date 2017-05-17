define(["module", "react", "classnames", "core/BaseComponent", "utils/shallowEqual", "FontIcon", "store", 'internal/EnhancedButton', 'ReactRouter'], function (module, React, classnames, BaseComponent, shallowEqual, FontIcon, Store, EnhancedButton, ReactRouter) {
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

    var Link = ReactRouter.Link;

    /**
     * MenuItem Component
     */

    var MenuItem = function (_Component) {
        _inherits(MenuItem, _Component);

        function MenuItem() {
            _classCallCheck(this, MenuItem);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItem).apply(this, arguments));
        }

        _createClass(MenuItem, [{
            key: "_onSelect",
            value: function _onSelect(event) {
                var item = this.props.data;
                if (this.props.onSelect) {
                    this.props.onSelect(item);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var item = this.props.data,
                    icon = item.customIcon ? React.createElement("i", { className: "menu-icon " + item.customIcon }) : item.icon ? React.createElement(FontIcon, { icon: item.icon, className: "menu-icon" }) : null,
                    link = item.link ? item.link : null,
                    text = item.text,
                    children = item.children;

                var visible = item._visible;
                var subMenu = children ? React.createElement(SubMenus, { hasExpand: this.props.hasExpand, visible: visible, onSelect: this.props.onSelect, items: children, isSub: true }) : "";

                var className = classnames({
                    active: item._active
                });

                link = link ? React.createElement(
                    Link,
                    { to: link, "data-identity": this.props.identity, onClick: this._onSelect.bind(this) },
                    React.createElement(
                        EnhancedButton,
                        { initFull: true },
                        icon,
                        text
                    )
                ) : React.createElement(
                    "a",
                    { href: "javascript:void(0)", "data-identity": this.props.identity, onClick: this._onSelect.bind(this) },
                    React.createElement(
                        EnhancedButton,
                        { initFull: true },
                        icon,
                        text
                    )
                );
                return React.createElement(
                    "li",
                    { className: className },
                    link,
                    subMenu
                );
            }
        }]);

        return MenuItem;
    }(Component);

    var SubMenus = function (_Component2) {
        _inherits(SubMenus, _Component2);

        function SubMenus() {
            _classCallCheck(this, SubMenus);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(SubMenus).apply(this, arguments));
        }

        _createClass(SubMenus, [{
            key: "render",
            value: function render() {
                var menus = [];
                var subs = this.props.items;
                var hasExpand = this.props.hasExpand;

                if (subs) {
                    for (var i = 0; i < subs.length; i++) {
                        var item = subs[i];
                        var identity = item["identity"] || item["text"];
                        menus.push(React.createElement(MenuItem, { hasExpand: hasExpand, onSelect: this.props.onSelect, key: i, identity: identity, data: item }));
                    }
                }

                var className = classnames({
                    submenu: this.props.isSub
                });

                var visible = hasExpand == false ? "block" : this.props.visible ? 'block' : "none";
                if (this.props.isSub) {
                    return React.createElement(
                        "ul",
                        { className: className, style: { display: visible } },
                        menus
                    );
                } else {
                    return React.createElement(
                        "ul",
                        { className: className },
                        menus
                    );
                }
            }
        }]);

        return SubMenus;
    }(Component);

    var SideBar = function (_BaseComponent) {
        _inherits(SideBar, _BaseComponent);

        function SideBar(props) {
            _classCallCheck(this, SideBar);

            var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(SideBar).call(this, props));

            _this3.data = {};
            _this3._initActive = null;
            _this3._buildData(_this3.data, -1, props.data);
            _this3.addState({
                data: props.data,
                _active: _this3._initActive
            });
            return _this3;
        }

        /**
         * 重新构建数据
         * @method _buildData
         * @param root
         * @param parentId
         * @param data
         * @private
         */


        _createClass(SideBar, [{
            key: "_buildData",
            value: function _buildData(root, parentId, data) {
                var prefix = this.props ? this.props.prefix + "_" : "";
                data.forEach(function (item) {
                    item._parentId = parentId;
                    root[item.id] = item;

                    var activeId = Store.get(prefix + "sideBar_active");
                    if (activeId && activeId === item.id) {
                        item._active = true;
                        item._visible = true;
                        this._initActive = item;
                        if (item._parentId != -1) {
                            var parent = this.getItem(item._parentId);
                            parent._active = true;
                            parent._visible = true;
                        }

                        if (this.props.onInitActive) {
                            this.props.onInitActive(item);
                        }
                    }

                    if (item.children && item.children.length) {
                        this._buildData(root, item.id, item.children);
                    }
                }, this);
            }
        }, {
            key: "setActive",
            value: function setActive(item) {
                if (typeof item === "string") {
                    item = this.getItem(id);
                }

                this._onSelect(item);
            }
        }, {
            key: "setActiveStatus",
            value: function setActiveStatus(item) {
                if (typeof item === "string") {
                    item = this.getItem(item);
                }

                this._onSelect(item, true);
            }
        }, {
            key: "clearActive",
            value: function clearActive() {
                var prefix = this.props.prefix + "_" || "";
                Store.set(prefix + "sideBar_active", "");
                this.setState({ _active: null });
            }
        }, {
            key: "getItem",
            value: function getItem(id) {
                return this.data[id];
            }
        }, {
            key: "_onSelect",
            value: function _onSelect(item, onlyStatus) {
                var prefix = this.props.prefix + "_" || "";
                Store.set(prefix + "sideBar_active", item.id);
                if (this.state._active && shallowEqual(this.state._active, item)) {
                    if (item._parentId == -1) {
                        item._visible = !item._visible;
                        this.setState({ _active: item });
                    }
                } else {
                    var last = this.state._active;
                    if (last) {
                        last._active = false;
                        last._visible = false;

                        if (last._parentId != -1) {
                            var parent = this.getItem(last._parentId);
                            if (shallowEqual(parent, item)) {
                                item._active = true;
                                item._visible = false;
                                this.setState({ _active: item });
                                return;
                            } else {
                                parent._active = false;
                                parent._visible = false;
                            }
                        }
                    }
                    if (item._parentId != -1) {
                        var _parent = this.getItem(item._parentId);
                        _parent._active = true;
                        _parent._visible = true;
                    }
                    item._active = true;
                    item._visible = true;
                    this.setState({ _active: item });
                }

                if (this.props.onSelect && !onlyStatus) {
                    this.props.onSelect(item);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var className = classnames("cm-sidebar", this.state.theme, this.props.className);

                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "section client" },
                        React.createElement(
                            "div",
                            { className: className, style: this.props.style },
                            React.createElement(
                                "div",
                                { className: "sidebar-header" },
                                React.createElement("img", { className: "pull-left", src: this.props.logo }),
                                React.createElement(
                                    "span",
                                    null,
                                    this.props.header
                                )
                            ),
                            React.createElement(SubMenus, { hasExpand: this.props.hasExpand, onSelect: this._onSelect.bind(this), items: this.state.data, isSub: false })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "desktop-wrap client" },
                        this.props.children
                    )
                );
            }
        }]);

        return SideBar;
    }(BaseComponent);

    SideBar.propTypes = {
        /**
         * 数据
         * @attribute data
         * @type {Array}
         */
        data: PropTypes.array
    };

    module.exports = SideBar;
});
