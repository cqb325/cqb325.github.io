define(['module', 'react', 'react-dom', 'utils/Events', 'utils/Dom'], function (module, React, ReactDOM, Events, Dom) {
    'use strict';

    var isDescendant = Dom.isDescendant;

    module.exports = function clickAway(Component) {
        Component.prototype.getClickAwayEvent = function () {
            var _this = this;

            var fn = this.state.checkClickAwayMethod;

            if (!fn) {
                fn = function fn(e) {
                    e = e || window.event;
                    var el = ReactDOM.findDOMNode(_this);

                    // Check if the target is inside the current component
                    if (e.target !== el && !isDescendant(el, e.target || e.srcElement)) {
                        _this.componentClickAway();
                    }
                };
                this.setState({ checkClickAwayMethod: fn });
            }

            return fn;
        };

        Component.prototype.bindClickAway = function () {
            var fn = this.getClickAwayEvent();
            Events.on(document, 'click', fn);
            Events.on(document, 'touchstart', fn);
        };

        Component.prototype.unbindClickAway = function () {
            var fn = this.getClickAwayEvent();
            Events.off(document, 'click', fn);
            Events.off(document, 'touchstart', fn);
        };

        return Component;
    };
});
