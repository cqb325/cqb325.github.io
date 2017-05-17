define(["module", "react", "react-dom"], function (module, React, ReactDOM) {
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

    var Animation = React.createClass({
        displayName: "Animation",

        getInitialState: function getInitialState() {
            var time = this.props.time != undefined ? this.props.time : 500;
            time = time / 10;

            this.time = time;
            this.startTime = 1;

            var from = this.props.from || {};
            var to = this.props.to || {};
            var step = {};

            for (var prop in from) {
                if (to[prop]) {
                    var offset = parseFloat(to[prop]) - parseFloat(from[prop]);
                    step[prop] = offset / time;
                }
            }

            this.step = step;

            return {
                style: from
            };
        },

        componentWillUpdate: function componentWillUpdate() {
            this.resolveAnimationFrame();
        },

        componentDidMount: function componentDidMount() {
            this._isMounted = true;
            this.resolveAnimationFrame();
        },
        componentWillUnmount: function componentWillUnmount() {
            this._isMounted = false;
        },


        render: function render() {
            var children = React.Children.map(this.props.children, function (child) {
                var props = _extends({ ref: "widget" }, child.props);
                return React.cloneElement(child, props);
            });

            return children[0];
        },

        resolveAnimationFrame: function resolveAnimationFrame() {
            var _this = this;

            var from = this.state.style;
            var to = this.props.to || {};

            if (this.startTime < this.time) {
                for (var prop in from) {
                    if (to[prop]) {
                        var val = parseFloat(from[prop]) + this.step[prop];
                        from[prop] = from[prop].replace(/^(-?\d+)(\.\d+)?/, val);

                        var ele = ReactDOM.findDOMNode(this.refs.widget);
                        ele.style[prop] = from[prop];
                    }
                }

                setTimeout(function () {
                    if (_this._isMounted) {
                        _this.setState({ style: from });
                    }
                }, 10);

                this.startTime++;
            } else {
                if (this.props.onAnimationEnd) {
                    this.props.onAnimationEnd();
                }
            }
        }
    });

    module.exports = Animation;
});
