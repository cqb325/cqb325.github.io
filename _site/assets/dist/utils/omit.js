define(["module"], function (module) {
    "use strict";

    module.exports = function (obj, props) {
        var ret = {};
        if (obj) {
            for (var key in obj) {
                var find = false;
                for (var i in props) {
                    if (props[i] == key) {
                        find = true;
                    }
                }

                if (!find && obj.hasOwnProperty(key)) {
                    ret[key] = obj[key];
                }
            }
        }

        return ret;
    };
});
