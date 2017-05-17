define(["module", "react", "classnames", "core/BaseComponent", 'FontIcon', 'utils/grids'], function (module, React, classnames, BaseComponent, FontIcon, grids) {
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

    var getGrid = grids.getGrid;

    /**
     * Progress 类
     * @class Progress
     * @constructor
     * @extend BaseComponent
     */

    var Progress = function (_BaseComponent) {
        _inherits(Progress, _BaseComponent);

        function Progress(props) {
            _classCallCheck(this, Progress);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Progress).call(this, props));

            _this.addState({
                value: parseFloat(props.value) || parseFloat(props.min) || 0,
                min: parseFloat(props.min) || 0,
                max: parseFloat(props.max) || 100
            });
            return _this;
        }

        _createClass(Progress, [{
            key: "update",
            value: function update(value) {
                if (this._isMounted) {
                    this.setState({
                        value: value
                    });
                }
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this.state.value;
            }
        }, {
            key: "getMax",
            value: function getMax() {
                return this.state.max;
            }
        }, {
            key: "getMin",
            value: function getMin() {
                return this.state.min;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._isMounted = true;
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._isMounted = false;
            }
        }, {
            key: "renderCircle",
            value: function renderCircle() {
                var colorMap = {
                    primary: "#20A0FF",
                    danger: "#FF4949",
                    success: "#13CE66",
                    warning: "#F7BA2A"
                };
                var r = this.props.radius;
                // 计算当前角度对应的弧度值
                var rad = 2 * Math.PI;

                // 极坐标转换成直角坐标
                var x = (Math.sin(rad) * r).toFixed(2);
                var y = -(Math.cos(rad) * r).toFixed(2);

                // path 属性 A 61 61 0 1 1 -0 61 A 61 61 0 1 1 -0 -61
                var descriptions = ['M', 0, -r, 'A', r, r, 0, 1, 1, x, -y, 'A', r, r, 0, 1, 1, x, y];

                var strokeWidth = 6;
                var tx = r + strokeWidth / 2;

                var percent = (this.state.value - this.state.min) / (this.state.max - this.state.min);
                var dd = rad * r;
                var offset = dd * (1 - percent);
                var status = this.props.status;
                if (this.state.value == this.state.max) {
                    status = "finished";
                }

                var color = status === "finished" ? "success" : this.state.theme;
                if (status === "exception") {
                    color = "danger";
                }
                return React.createElement(
                    "svg",
                    { width: "100%", height: "100%", version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg", style: { width: 2 * r + strokeWidth, height: 2 * r + strokeWidth } },
                    React.createElement("circle", { cx: tx, cy: tx, r: r, stroke: "#f3f3f3",
                        strokeWidth: strokeWidth, fillOpacity: "0" }),
                    React.createElement("path", { className: "cm-progress-bar-path",
                        d: descriptions.join(" "),
                        strokeLinecap: "round",
                        strokeWidth: strokeWidth,
                        fillOpacity: "0",
                        stroke: colorMap[color],
                        transform: "translate(" + tx + "," + tx + ")",
                        style: { strokeDashoffset: offset, strokeDasharray: dd }
                    })
                );
            }
        }, {
            key: "render",
            value: function render() {
                var _classnames;

                var _props = this.props;
                var className = _props.className;
                var style = _props.style;
                var grid = _props.grid;
                var showPercent = _props.showPercent;
                var active = _props.active;
                var status = _props.status;
                var type = _props.type;

                if (this.state.value == this.state.max) {
                    status = "finished";
                }
                className = classnames("cm-progress", className, getGrid(grid), this.state.theme, (_classnames = {
                    "cm-progress-active": active,
                    "cm-progress-show-info": showPercent
                }, _defineProperty(_classnames, "cm-progress-" + status, status), _defineProperty(_classnames, "cm-progress-" + type, type), _classnames));
                var current = parseInt((this.state.value - this.state.min) / (this.state.max - this.state.min) * 100);
                var width = current + "%";
                var percent = showPercent ? width : null;

                if (status === "finished" && showPercent) {
                    var icon = type === "circle" ? "check" : "check-circle";
                    percent = React.createElement(FontIcon, { icon: icon });
                }
                if (status === "exception" && showPercent) {
                    var _icon = type === "circle" ? "close" : "times-circle";
                    percent = React.createElement(FontIcon, { icon: _icon });
                }

                if (this.props.format && typeof this.props.format === 'function') {
                    percent = this.props.format(current, this.state.value, this.state.min, this.state.max);
                }

                var bar = null,
                    fontSize = 25;
                if (type === "circle") {
                    bar = this.renderCircle();
                    fontSize = fontSize * this.props.radius / 60;
                } else {
                    bar = React.createElement("div", { className: "cm-progress-bar", style: { width: width, height: this.props.strokeWidth } });
                }
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    React.createElement(
                        "div",
                        { className: "cm-progress-outer" },
                        React.createElement(
                            "div",
                            { className: "cm-progress-inner" },
                            bar,
                            type === "circle" ? React.createElement(
                                "span",
                                { className: "cm-progress-info", style: { fontSize: fontSize } },
                                percent
                            ) : null
                        )
                    ),
                    type === "circle" ? null : React.createElement(
                        "span",
                        { className: "cm-progress-info" },
                        percent
                    )
                );
            }
        }]);

        return Progress;
    }(BaseComponent);

    Progress.defaultProps = {
        showPercent: true,
        strokeWidth: 10,
        type: "line",
        radius: 60,
        theme: "primary"
    };

    module.exports = Progress;
});
