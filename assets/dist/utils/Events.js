define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.on = on;
    exports.off = off;
    exports.once = once;
    function on(el, type, callback) {
        if (el.addEventListener) {
            el.addEventListener(type, callback);
        } else {
            el.attachEvent('on' + type, function () {
                callback.call(el);
            });
        }
    }

    function off(el, type, callback) {
        if (el.removeEventListener) {
            el.removeEventListener(type, callback);
        } else {
            el.detachEvent('on' + type, callback);
        }
    }

    function once(el, type, callback) {
        var typeArray = type.split(' ');
        var recursiveFunction = function recursiveFunction(e) {
            e.target.removeEventListener(e.type, recursiveFunction);
            return callback(e);
        };

        for (var i = typeArray.length - 1; i >= 0; i--) {
            on(el, typeArray[i], recursiveFunction);
        }
    }
});
