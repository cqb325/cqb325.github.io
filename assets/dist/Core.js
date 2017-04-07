define(['module'], function (module) {
    'use strict';

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

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

    var Core = function () {
        function Core() {
            _classCallCheck(this, Core);
        }

        _createClass(Core, null, [{
            key: 'isType',
            value: function isType(obj, type) {
                return Object.prototype.toString.apply(obj) === '[object ' + type + ']';
            }
        }, {
            key: 'isArray',
            value: function isArray(obj) {
                return Core.isType(obj, "Array");
            }
        }, {
            key: 'isString',
            value: function isString(obj) {
                return Core.isType(obj, "String");
            }
        }, {
            key: 'isNumber',
            value: function isNumber(obj) {
                return Core.isType(obj, "Number");
            }
        }, {
            key: 'isObject',
            value: function isObject(obj) {
                return Core.isType(obj, "Object");
            }
        }, {
            key: 'isNull',
            value: function isNull(obj) {
                return Core.isType(obj, "Null");
            }
        }, {
            key: 'isUndefined',
            value: function isUndefined(obj) {
                return obj === undefined || Core.isType(obj, "Undefined");
            }
        }, {
            key: 'isFunction',
            value: function isFunction(fun) {
                return Core.isType(fun, "Function");
            }
        }, {
            key: 'isDefined',
            value: function isDefined(obj) {
                return !Core.isUndefined(obj);
            }
        }, {
            key: 'clone',
            value: function clone(obj) {
                var o = void 0;
                if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object') {
                    if (obj === null) {
                        o = null;
                    } else {
                        if (Core.isArray(obj)) {
                            o = [];
                            for (var i = 0, len = obj.length; i < len; i++) {
                                o.push(Core.clone(obj[i]));
                            }
                        } else {
                            o = {};
                            for (var j in obj) {
                                o[j] = Core.clone(obj[j]);
                            }
                        }
                    }
                } else {
                    o = obj;
                }
                return o;
            }
        }]);

        return Core;
    }();

    module.exports = Core;
});
