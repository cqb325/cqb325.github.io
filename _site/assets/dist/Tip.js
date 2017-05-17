define(['module', "react", 'react-dom', 'utils/Dom', "classnames", "core/BaseComponent", 'FontIcon', 'utils/grids'], function (module, React, ReactDOM, Dom, classnames, BaseComponent, FontIcon, grids) {
    'use strict';

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

    /**
     * Tip 类
     * @class Tip
     * @constructor
     * @extend BaseComponent
     */

    var Tip = function (_BaseComponent) {
        _inherits(Tip, _BaseComponent);

        function Tip(props) {
            _classCallCheck(this, Tip);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Tip).call(this, props));
        }

        _createClass(Tip, [{
            key: 'getContent',
            value: function getContent() {
                return this.state.fileName;
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {}
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var style = _props.style;
                var grid = _props.grid;


                className = classnames("cm-tip", className, getGrid(grid));

                return React.createElement(
                    'div',
                    { className: className, style: style },
                    this.props.children || this.props.title
                );
            }
        }]);

        return Tip;
    }(BaseComponent);

    Tip.propTypes = {
        /**
         * 自定义class
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
        /**
         * 自定义样式
         * @attribute style
         * @type {Object}
         */
        style: PropTypes.object
    };

    module.exports = Tip;
});
