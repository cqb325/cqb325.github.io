/**
 * Created by cqb32_000 on 2016-10-28.
 */
require(["jquery"], function(){
    var __ele = $("#module");
    if(!__ele.length){
        __ele = $("body");
    }
    var provModel = true;
    var module = __ele.data("module");
    var prov = provModel;
    if(__ele.data("prov") == "false"){
        provModel = false;
    }

    if(module) {
        loadModule(module);
    }

    function loadModule(module){
        var dir = provModel ? "../modules" : "../modules-prod";
        var url = dir+"/"+module;
        require([url]);
    }
});
