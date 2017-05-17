/**
 * Created by cqb32_000 on 2015/7/14.
 */
(function(){
    if (!window.console){
        var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

        window.console = {};
        for (var i = 0; i < names.length; ++i) {
            window.console[names[i]] = function () {
            }
        }
    }

    var scripts = document.getElementsByTagName("script");
    var dir = null;
    for(var i = 0, l = scripts.length; i < l; i++){
        var script = scripts[i];
        var src = script.getAttribute("src");
        if(src && src.indexOf("require.js") > -1){
            dir = src.replace("/require.js", "");
            break;
        }
    }
    requirejs.dir = dir;
    requirejs.config({
        baseUrl: dir+"/../dist",
        paths: {
            "jquery" : "../lib/jquery-1.11.3.min",
            "react-dom": '../lib/react-dom',
            "react": '../lib/react-with-addons',
            "classnames": '../lib/classnames',
            "moment": '../lib/moment',
            "velocity": '../lib/velocity',
            "store": "../lib/store.min",
            "WebUploader": "../lib/webuploader",
            "common": "../modules/common",
            "bootstrap": "../lib/bootstrap.min",
            "daterangepicker": '../lib/daterangepicker/jquery.daterangepicker',
            "validate": '../lib/jquery.validate.min',
            "validate-message": '../lib/messages_zh',
            "echarts": '../lib/echarts',
            "sham": '../lib/es5-sham.min',
            "shim": '../lib/es5-shim.min',
            "shiv": '../lib/html5shiv',
            "respond": '../lib/respond.min',
            "Routers": '../config/Routers',
            "markdown": '../lib/markdown'
        },
        shim: {
            "common": ["shiv","respond","jquery","moment","validate"],
            "bootstrap": ["jquery"],
            'daterangepicker': ['moment','jquery'],
            'validate': ['jquery'],
            'validate-message': ['validate'],
            'sham': ['shim']
        }
    });

    require.ensure = function(module, callback){
        require(module, function(){
            if(callback){
                callback.apply(this, arguments);
            }
        });
    };

    if (window.ActiveXObject != undefined) {
        var str = navigator.userAgent;
        var v = str.match(/MSIE ([\d.]+)/);
        if(v[1]){
            if(parseInt(v[1]) < 10){
                Object.getPrototypeOf = function getPrototypeOf(object) {
                    return object.__proto__;
                };
            }
            if(parseInt(v[1]) == 10){
                Object.getPrototypeOf = function getPrototypeOf(object) {
                    return object.__proto__;
                };
            }
            if(parseInt(v[1]) < 9){
                require(["sham"], function(){
                    require(["common","main"]);
                });
            }else{
                require(["common","main"]);
            }
        }
    }else{
        require(["common","main"]);
    }


})(window);