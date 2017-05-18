define(["module", "react", "react-dom", "classnames", "internal/InnerDropdown", "core/BaseComponent"], function (module, React, ReactDOM, classnames, InnerDropdown, BaseComponent) {
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

    var Dropdown = function (_BaseComponent) {
        _inherits(Dropdown, _BaseComponent);

        function Dropdown(props) {
            _classCallCheck(this, Dropdown);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));

            _this.action = props.action || "hover";
            return _this;
        }

        /**
         * 显示隐藏回调
         * @param visible
         */


        _createClass(Dropdown, [{
            key: "onVisibleChange",
            value: function onVisibleChange(visible) {
                if (this.props.onVisibleChange) {
                    this.props.onVisibleChange(visible);
                }

                this.emit("visibleChange", visible);
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;

                className = classnames("cm-dropdown", className, this.props.align);

                return React.createElement(
                    InnerDropdown,
                    {
                        ref: "trigger",
                        action: this.action,
                        overlay: this.props.overlay,
                        align: this.props.align || "bottomLeft",
                        delay: this.delay,
                        onVisibleChange: this.onVisibleChange.bind(this),
                        extraProps: {
                            className: className,
                            style: style
                        }
                    },
                    React.isValidElement(this.props.children) ? this.props.children : React.createElement(
                        "span",
                        { className: "cm-dropdown-helper" },
                        this.props.children
                    )
                );
            }
        }]);

        return Dropdown;
    }(BaseComponent);

    Dropdown.defaultProps = {
        action: "hover",
        align: "bottomLeft"
    };

    module.exports = Dropdown;
});
