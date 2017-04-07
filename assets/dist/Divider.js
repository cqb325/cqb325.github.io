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

    var Divider = function (_BaseComponent) {
        _inherits(Divider, _BaseComponent);

        function Divider(props) {
            _classCallCheck(this, Divider);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Divider).call(this, props));
        }

        _createClass(Divider, [{
            key: "render",
            value: function render() {
                var _props = this.props;
                var style = _props.style;
                var className = _props.className;
                var theme = _props.theme;

                className = classnames(className, "cm-divider", theme);
                return React.createElement("hr", { style: style, className: className });
            }
        }]);

        return Divider;
    }(BaseComponent);

    Divider.defaultProps = {
        theme: "default"
    };

    Divider.propTypes = {};

    module.exports = Divider;
});
