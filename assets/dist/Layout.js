define(["module", "react", "classnames"], function (module, React, classnames) {
    "use strict";

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

    var Basic = function (_React$Component) {
        _inherits(Basic, _React$Component);

        function Basic(props) {
            _classCallCheck(this, Basic);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Basic).call(this, props));
        }

        _createClass(Basic, [{
            key: "render",
            value: function render() {
                var _props = this.props;
                var prefixCls = _props.prefixCls;
                var className = _props.className;
                var children = _props.children;
                var name = _props.name;

                var hasSider = void 0;
                if (name === 'Layout') {
                    React.Children.forEach(children, function (child) {
                        if (child && child.props && child.props.name === 'Sider') {
                            hasSider = true;
                        }
                    });
                }

                className = classnames(className, prefixCls, _defineProperty({}, prefixCls + "-has-sider", hasSider));
                return React.createElement(
                    "div",
                    { className: className },
                    children
                );
            }
        }]);

        return Basic;
    }(React.Component);

    var Layout = function (_React$Component2) {
        _inherits(Layout, _React$Component2);

        function Layout() {
            _classCallCheck(this, Layout);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));
        }

        _createClass(Layout, [{
            key: "render",
            value: function render() {
                return React.createElement(Basic, _extends({ prefixCls: "cm-layout", name: "Layout" }, this.props));
            }
        }]);

        return Layout;
    }(React.Component);

    var Header = function (_React$Component3) {
        _inherits(Header, _React$Component3);

        function Header() {
            _classCallCheck(this, Header);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
        }

        _createClass(Header, [{
            key: "render",
            value: function render() {
                return React.createElement(Basic, _extends({ prefixCls: "cm-layout-header", name: "Header" }, this.props));
            }
        }]);

        return Header;
    }(React.Component);

    var Footer = function (_React$Component4) {
        _inherits(Footer, _React$Component4);

        function Footer() {
            _classCallCheck(this, Footer);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
        }

        _createClass(Footer, [{
            key: "render",
            value: function render() {
                return React.createElement(Basic, _extends({ prefixCls: "cm-layout-footer", name: "Footer" }, this.props));
            }
        }]);

        return Footer;
    }(React.Component);

    var Content = function (_React$Component5) {
        _inherits(Content, _React$Component5);

        function Content() {
            _classCallCheck(this, Content);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
        }

        _createClass(Content, [{
            key: "render",
            value: function render() {
                return React.createElement(Basic, _extends({ prefixCls: "cm-layout-content", name: "Content" }, this.props));
            }
        }]);

        return Content;
    }(React.Component);

    Layout.Header = Header;
    Layout.Footer = Footer;
    Layout.Content = Content;

    module.exports = Layout;
});
