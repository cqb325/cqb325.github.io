define(['module'], function (module) {
    'use strict';

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

    /**
     * @author cqb 2016-04-17.
     * @module shallowEqual
     */

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    /**
     * 判断两个对象是否相等
     * @method shallowEqual
     * @static
     * @param objA
     * @param objB
     * @returns {boolean} true: 相等 false:不相等
     */
    module.exports = function shallowEqual(objA, objB) {
        if (objA === objB) {
            return true;
        }

        if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
            return false;
        }

        if (objA instanceof Array && objB instanceof Array) {
            if (objA.length != objB.length) {
                return false;
            }
            var equal = true;
            objA.forEach(function (objAItem) {
                objB.forEach(function (objBItem) {
                    if (!shallowEqual(objAItem, objBItem)) {
                        equal = false;
                    }
                });
            });

            return equal;
        }

        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);

        if (keysA.length !== keysB.length) {
            return false;
        }

        // Test for A's keys different from B.
        var bHasOwnProperty = hasOwnProperty.bind(objB);
        for (var i = 0; i < keysA.length; i++) {
            if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
                return false;
            }
        }

        return true;
    };
});
