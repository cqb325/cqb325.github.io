define(['module'], function (module) {
    'use strict';

    /**
     * @author cqb 2016-04-17.
     * @module transitions
     */

    var transitions = {
        easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
        easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

        easeOut: function easeOut(duration, property, delay, easeFunction) {
            easeFunction = easeFunction || this.easeOutFunction;

            if (property && Object.prototype.toString.call(property) === '[object Array]') {
                var _transitions = '';
                for (var i = 0; i < property.length; i++) {
                    if (_transitions) _transitions += ',';
                    _transitions += this.create(duration, property[i], delay, easeFunction);
                }

                return _transitions;
            } else {
                return this.create(duration, property, delay, easeFunction);
            }
        },
        create: function create(duration, property, delay, easeFunction) {
            duration = duration || '450ms';
            property = property || 'all';
            delay = delay || '0ms';
            easeFunction = easeFunction || 'linear';

            return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
        }
    };

    module.exports = transitions;
});
