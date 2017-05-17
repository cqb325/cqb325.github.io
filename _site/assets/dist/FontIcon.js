define(["module", "react", "classnames", "core/BaseComponent"], function (module, React, classnames, BaseComponent) {
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

    var FontIcon = function (_BaseComponent) {
        _inherits(FontIcon, _BaseComponent);

        function FontIcon(props) {
            _classCallCheck(this, FontIcon);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(FontIcon).call(this, props));
        }

        _createClass(FontIcon, [{
            key: "render",
            value: function render() {
                var _props = this.props;
                var icon = _props.icon;
                var spin = _props.spin;
                var pulse = _props.pulse;
                var title = _props.title;
                var font = _props.font;


                var className = "";
                //自定义字体
                if (font) {
                    className = classnames(font, font + "-" + icon, this.props.className);
                } else {
                    var size = this.props.size ? "fa-" + this.props.size : false;
                    var rotate = this.props.rotate ? "fa-rotate-" + this.props.rotate : false;
                    className = classnames("fa", "fa-" + icon, size, this.props.className, {
                        "fa-spin": spin,
                        "fa-pulse": pulse
                    }, rotate);
                }

                var style = this.props.style || {};
                if (this.props.color) {
                    style.color = this.props.color;
                }
                return React.createElement(
                    "i",
                    { className: className, style: style, onClick: this.props.onClick, title: title },
                    this.props.children
                );
            }
        }]);

        return FontIcon;
    }(BaseComponent);

    FontIcon.propTypes = {
        /**
         * 图标名称 font awesome 中的图标
         * @attribute icon
         * @type {String}
         */
        icon: PropTypes.string,
        /**
         * 自定义图标的名称
         * @attribute font
         * @type {String}
         */
        font: PropTypes.string
    };

    module.exports = FontIcon;
});
