define(['module', './JQueryAjax', './Emitter'], function (module, JQueryAjax, Emitter) {
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

    var request = JQueryAjax.UnJQ;

    request.event = {
        trigger: function trigger() {
            this.emit.apply(this, arguments);
        }
    };

    Emitter.extend(request.event);

    /**
     * Ajax 类
     * @class Ajax
     */
    var Ajax = function () {
        function Ajax() {
            _classCallCheck(this, Ajax);
        }

        _createClass(Ajax, null, [{
            key: 'get',
            value: function get(url, params, callback) {
                var options = {
                    url: url,
                    type: "GET",
                    data: params,
                    dataType: "json",
                    success: callback
                };
                return request.ajax(options);
                //return Ajax.request(options);
            }
        }, {
            key: 'post',
            value: function post(url, params, callback) {
                var options = {
                    url: url,
                    type: "POST",
                    data: params,
                    dataType: "json",
                    success: callback
                };
                return request.ajax(options);
                //return Ajax.request(options);
            }
        }, {
            key: 'ajax',
            value: function ajax(options) {
                return request.ajax(options);
            }
        }]);

        return Ajax;
    }();

    ///**
    // * request请求
    // * @method request
    // * @param props
    // * @returns {*}
    // */
    //static request(props) {
    //    var url = props.url;
    //    var method = props.method.toLowerCase() || "get";
    //    var params = props.params;
    //    var body = props.body;
    //    var headers = props.headers;
    //    var type = props.type;
    //    var accept = props.accept;
    //    var withCredentials = props.withCredentials;
    //    var timeout = props.timeout;
    //    var handler = props.onResponse || function(){};
    //
    //    var req = request(method, url);
    //    if(withCredentials){
    //        req.withCredentials();
    //        type = "urlencoded";
    //    }
    //    if(type){
    //        req.type(type);
    //    }
    //    if(headers){
    //        req.set(headers);
    //    }
    //    if(accept){
    //        req.accept(accept);
    //    }
    //    if(params){
    //        req.query(params)
    //    }
    //    if(body){
    //        req.send(body)
    //    }
    //    if(timeout){
    //        req.timeout(timeout)
    //    }
    //    return req.end(handler);
    //}
    module.exports = Ajax;
});
