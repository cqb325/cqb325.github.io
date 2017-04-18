define(["module", "react", "react-dom", "classnames", "moment", "utils/Dom", "core/BaseComponent", 'Clock'], function (module, React, ReactDOM, classnames, moment, Dom, BaseComponent, Clock) {
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

    var Logo = function (_React$Component) {
        _inherits(Logo, _React$Component);

        function Logo(props) {
            _classCallCheck(this, Logo);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Logo).call(this, props));

            _this.WIDTH = _this.HEIGHT = props.size || 40;
            _this.LOGO_WIDTH = 20, _this.gap = 2, _this.deg = 0, _this.step = 0.01;

            _this.ctx = null;
            return _this;
        }

        _createClass(Logo, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var canvas = ReactDOM.findDOMNode(this.refs.canvas);
                canvas.width = this.WIDTH;
                canvas.height = this.HEIGHT;

                this.ctx = canvas.getContext("2d");

                this.animate();
            }
        }, {
            key: "animate",
            value: function animate() {
                var _this2 = this;

                this.rotate();
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(function () {
                        _this2.animate();
                    });
                } else {
                    window.setTimeout(function () {
                        _this2.animate();
                    }, 10);
                }
            }
        }, {
            key: "rotate",
            value: function rotate() {
                this.deg = this.deg + this.step;

                this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
                this.drawLines();
                this.drawCircle();
            }
        }, {
            key: "drawLines",
            value: function drawLines() {
                var ctx = this.ctx;
                ctx.save();
                ctx.translate(this.WIDTH / 2, this.HEIGHT / 2);
                ctx.rotate(this.deg);
                ctx.beginPath();
                ctx.moveTo(-this.LOGO_WIDTH / 2, -this.gap);
                ctx.lineTo(-this.LOGO_WIDTH / 2, -this.LOGO_WIDTH / 2 - this.gap);
                ctx.lineTo(this.LOGO_WIDTH / 2, -this.LOGO_WIDTH / 2 - this.gap);
                ctx.lineTo(this.LOGO_WIDTH / 2, -this.gap);
                ctx.lineWidth = 2;
                ctx.lineCap = "round";
                ctx.strokeStyle = "#20A0FF";
                ctx.stroke();
                ctx.restore();

                ctx.save();
                ctx.translate(this.WIDTH / 2, this.HEIGHT / 2);
                ctx.rotate(this.deg);
                ctx.beginPath();
                ctx.moveTo(-this.LOGO_WIDTH / 2, this.gap);
                ctx.lineTo(-this.LOGO_WIDTH / 2, this.LOGO_WIDTH / 2 + this.gap);
                ctx.lineTo(this.LOGO_WIDTH / 2, this.LOGO_WIDTH / 2 + this.gap);
                ctx.lineTo(this.LOGO_WIDTH / 2, this.gap);
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#13CE66";
                ctx.stroke();
                ctx.restore();
            }
        }, {
            key: "drawCircle",
            value: function drawCircle() {
                var ctx = this.ctx;
                ctx.save();
                ctx.translate(this.WIDTH / 2, this.HEIGHT / 2);
                ctx.beginPath();
                ctx.arc(0, 0, 3, 0, Math.PI * 2);
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#FF4949";
                ctx.stroke();
                ctx.restore();
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement("canvas", { ref: "canvas" });
            }
        }]);

        return Logo;
    }(React.Component);

    module.exports = Logo;
});
