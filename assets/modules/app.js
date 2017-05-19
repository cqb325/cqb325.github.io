define(['react', 'jquery', 'react-dom', 'ReactRouter', "FontIcon", "Logo", "store", "Routers", "SideBar", "Menu"], function (React, jQuery, ReactDOM, ReactRouter, FontIcon, Logo, store, Routers, SideBar, Menu) {
    'use strict';

    var Router = ReactRouter.Router;
    var Route = ReactRouter.Route;
    var IndexRoute = ReactRouter.IndexRoute;


    var APP = {
        sysName: "CMUI",
        menus: Routers
    };

    var SubMenu = Menu.SubMenu;
    var MenuItemGroup = Menu.MenuItemGroup;

    var App = React.createClass({
        displayName: 'App',
        getInitialState: function getInitialState() {
            return {};
        },
        forwardModule: function forwardModule(item) {
            store.set("cm-cmui-doc-lastSelectKey", item.getKey());
            if (window.location.hash.indexOf(item.props.link) == -1) {
                window.location.hash = item.props.link;
            }
            return;
        },
        renderMenu: function renderMenu() {
            var _this = this;

            this.menuIndex = 0;
            return Routers.map(function (menuItem) {
                _this.menuIndex++;
                if (menuItem.link) {
                    var icon = menuItem.icon ? React.createElement(FontIcon, { icon: menuItem.icon, style: { marginRight: "8px" } }) : null;
                    return React.createElement(
                        Menu.Item,
                        { key: _this.menuIndex, identify: menuItem.identify, link: menuItem.link },
                        icon,
                        menuItem.text
                    );
                } else {
                    var _icon = menuItem.icon ? React.createElement(FontIcon, { icon: menuItem.icon }) : null;
                    return React.createElement(
                        SubMenu,
                        { open: true, key: _this.menuIndex, title: React.createElement(
                                'span',
                                null,
                                _icon,
                                menuItem.text
                            ) },
                        _this.renderSubMenu(menuItem.children)
                    );
                }
            });
        },
        renderSubMenu: function renderSubMenu(subMenus) {
            var _this2 = this;

            return subMenus.map(function (menuItem) {
                _this2.menuIndex++;
                if (menuItem.link) {
                    var icon = menuItem.icon ? React.createElement(FontIcon, { icon: menuItem.icon, style: { marginRight: "8px" } }) : null;
                    return React.createElement(
                        Menu.Item,
                        { key: _this2.menuIndex, identify: menuItem.identify, link: menuItem.link },
                        icon,
                        menuItem.text
                    );
                } else {
                    return React.createElement(
                        MenuItemGroup,
                        { key: _this2.menuIndex, title: menuItem.text },
                        _this2.renderMenuItemGroup(menuItem.children)
                    );
                }
            });
        },
        renderMenuItemGroup: function renderMenuItemGroup(subMenus) {
            var _this3 = this;

            return subMenus.map(function (menuItem) {
                _this3.menuIndex++;
                if (menuItem.link) {
                    var icon = menuItem.icon ? React.createElement(FontIcon, { icon: menuItem.icon, style: { marginRight: "8px" } }) : null;
                    return React.createElement(
                        Menu.Item,
                        { key: _this3.menuIndex, identify: menuItem.identify, link: menuItem.link },
                        icon,
                        menuItem.text
                    );
                } else {
                    return null;
                }
            });
        },
        componentDidMount: function componentDidMount() {
            var key = store.get("cm-cmui-doc-lastSelectKey");
            if (key) {
                this.refs.menu.selectItem(key);
            } else {
                this.refs.menu.selectItem("31");
            }
        },
        render: function render() {
            return React.createElement(
                'div',
                { className: 'rc-desktop-wrap' },
                React.createElement(
                    'div',
                    { className: 'menu-wrap' },
                    React.createElement(
                        'div',
                        { style: { verticalAlign: "middle", borderBottom: "1px dashed #e7e7e7" } },
                        React.createElement(Logo, null),
                        ' ',
                        React.createElement(
                            'span',
                            { className: 'ml-5', style: { position: "relative", top: -11 } },
                            'CMUI'
                        )
                    ),
                    React.createElement(
                        Menu,
                        { style: { width: 200 },
                            ref: 'menu',
                            onSelect: this.forwardModule
                        },
                        this.renderMenu()
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'desktop' },
                    this.props.children
                )
            );
        }
    });

    var routers = [];
    APP.menus.map(function (item, index) {
        var _ctx = "../modules";
        if (item.children) {
            item.children.forEach(function (subItem, subIndex) {
                if (subItem.link) {
                    if (subItem.link.indexOf(".html") != -1) {
                        routers.push(React.createElement(Route, { path: subItem.link, key: subIndex }));
                    } else {
                        routers.push(React.createElement(Route, { key: subIndex, path: subItem.link.substring(2),
                            getComponents: function getComponents(nextState, callback) {
                                var module_url = _ctx + "/" + subItem.link.substring(2);
                                require.ensure([module_url], function (Widget) {
                                    callback(null, Widget);
                                });
                            } }));
                    }
                }
            });
        }
        if (item.link) {
            if (item.link.indexOf(".html") != -1) {
                routers.push(React.createElement(Route, { path: item.link, key: index }));
            } else {
                routers.push(React.createElement(Route, { path: item.link.substring(2), key: index, getComponents: function getComponents(nextState, callback) {
                        var module_url = _ctx + "/" + item.link.substring(2);
                        require.ensure([module_url], function (Widget) {
                            callback(null, Widget);
                        });
                    } }));
            }
        }
    });

    var Dashboard = React.createClass({
        displayName: 'Dashboard',
        render: function render() {
            return React.createElement(
                'div',
                null,
                'Welcome to the app!'
            );
        }
    });

    ReactDOM.render(React.createElement(
        Router,
        null,
        React.createElement(
            Route,
            { path: '/', component: App },
            React.createElement(IndexRoute, { component: Dashboard }),
            routers
        )
    ), document.querySelector("#desktop"));
});
