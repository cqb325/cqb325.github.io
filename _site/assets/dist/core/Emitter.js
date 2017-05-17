define(['module', 'react', 'Core'], function (module, React, Core) {
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

    var PropTypes = React.PropTypes;


    var defaultMaxListeners = 10;

    /**
     * 事件分发类
     * @class Emitter
     * @constructor
     */

    var Emitter = function () {
        /**
         *
         * @type {Object}
         * @private
         */

        function Emitter() {
            _classCallCheck(this, Emitter);

            this._events = {};
            this._maxListeners = defaultMaxListeners;
        }
        //this._events = {};
        //this._maxListeners = this._maxListeners || defaultMaxListeners;


        /**
         * 设置最大监听数
         * @method setMaxListeners
         * @param n 可以监听的事件数
         */

        /**
         * 最大事件监听数
         * @property _maxListeners
         * @type {Number}
         * @private
         */


        _createClass(Emitter, [{
            key: 'setMaxListeners',
            value: function setMaxListeners(n) {
                if (!Core.isNumber(n) || n < 0) {
                    throw TypeError('n must be a positive number');
                }

                this._maxListeners = n;
            }
        }, {
            key: 'emit',
            value: function emit(type) {
                if (Core.isUndefined(this._events)) {
                    this._events = {};
                }

                if (type === 'error') {
                    if (!this._events.error || _typeof(this._events.error) === 'object' && !this._events.error.length) {
                        var er = arguments[1];
                        if (er instanceof Error) {
                            throw er;
                        } else {
                            throw TypeError('Uncaught, unspecified "error" event.');
                        }
                    }
                }

                var handler = this._events[type];

                if (Core.isUndefined(handler)) {
                    return undefined;
                }

                if (Core.isFunction(handler)) {
                    var args = arguments;
                    Array.prototype.splice.apply(args, [0, 1]);

                    return handler.apply(this, args);
                } else if (Core.isArray(handler)) {
                    var _args = arguments;
                    Array.prototype.splice.apply(_args, [0, 1]);
                    var len = handler.length,
                        ret = void 0;
                    for (var i = 0; i < len; i++) {
                        ret = ret && handler[i].apply(this, _args);
                    }
                    return ret;
                }
            }
        }, {
            key: 'on',
            value: function on() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return this._addListener.apply(this, args);
            }
        }, {
            key: 'un',
            value: function un() {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                return this._removeListener.apply(this, args);
            }
        }, {
            key: '_addListener',
            value: function _addListener(type, listener) {
                var m;

                if (!Core.isFunction(listener)) {
                    throw TypeError('listener must be a function');
                }

                if (!this._events) {
                    this._events = {};
                }

                if (!this._events[type]) {
                    this._events[type] = listener;
                } else if (Core.isArray(this._events[type])) {
                    this._events[type].push(listener);
                } else {
                    this._events[type] = [this._events[type], listener];

                    // Check for listener leak
                    if (_typeof(this._events[type]) === 'object' && !this._events[type].warned) {
                        m = this._maxListeners;
                        if (m && m > 0 && this._events[type].length > m) {
                            this._events[type].warned = true;
                            console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
                            console.trace();
                        }
                    }
                }

                return this;
            }
        }, {
            key: 'once',
            value: function once(type, listener) {
                if (!Core.isFunction(listener)) {
                    throw TypeError('listener must be a function');
                }

                function g() {
                    this._removeListener(type, g);
                    listener.apply(this, arguments);
                }

                g.listener = listener;
                this.on(type, g);

                return this;
            }
        }, {
            key: '_removeListener',
            value: function _removeListener(type, listener) {
                var list, position, length, i;

                if (!Core.isFunction(listener)) {
                    throw TypeError('listener must be a function');
                }

                if (!this._events || !this._events[type]) {
                    return this;
                }

                list = this._events[type];
                length = list.length;
                position = -1;

                if (list === listener || Core.isFunction(list.listener) && list.listener === listener) {
                    delete this._events[type];
                } else if (Core.isArray(list)) {
                    for (i = length; i-- > 0;) {
                        if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                            position = i;
                            break;
                        }
                    }

                    if (position < 0) {
                        return this;
                    }

                    if (list.length === 1) {
                        list.length = 0;
                        delete this._events[type];
                    } else {
                        list.splice(position, 1);
                    }
                }

                return this;
            }
        }, {
            key: 'removeAllListeners',
            value: function removeAllListeners(type) {
                var listeners;

                if (!this._events) {
                    return this;
                }

                // emit removeListener for all listeners on all events
                if (arguments.length === 0) {
                    var keys = Object.keys(this._events);

                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        this.removeAllListeners(key);
                    }
                    this._events = {};
                    return this;
                }

                listeners = this._events[type];

                if (Core.isFunction(listeners)) {
                    this._removeListener(type, listeners);
                } else {
                    // LIFO order
                    while (listeners.length) {
                        this._removeListener(type, listeners[listeners.length - 1]);
                    }
                }
                delete this._events[type];

                return this;
            }
        }, {
            key: 'listeners',
            value: function listeners(type) {
                var ret = void 0;
                if (!this._events || !this._events[type]) ret = [];else if (Core.isFunction(this._events[type])) {
                    ret = [this._events[type]];
                } else {
                    ret = this._events[type].slice();
                }
                return ret;
            }
        }], [{
            key: 'extend',
            value: function extend(target) {
                return _extend(target, new Emitter(), Emitter.prototype);
            }
        }, {
            key: 'inherits',
            value: function inherits(subClass) {
                _extend(subClass.prototype, Emitter.prototype);
                subClass.prototype.constructor = subClass;
            }
        }]);

        return Emitter;
    }();

    /**
     *
     * @param target
     * @param objs
     * @returns {*}
     * @private
     */
    function _extend(target) {
        for (var _len3 = arguments.length, objs = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            objs[_key3 - 1] = arguments[_key3];
        }

        for (var i = 0, l = objs.length; i < l; i++) {
            var keys = Object.getOwnPropertyNames(objs[i] || {});

            for (var j in keys) {
                var key = keys[j];
                target[key] = objs[i][key];
            }
        }

        return target;
    }

    Emitter.propTypes = {
        _events: PropTypes.object,
        _maxListeners: PropTypes.number
    };

    module.exports = Emitter;
});
