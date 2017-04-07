define(["module"], function (module) {
    "use strict";

    module.exports = {

        componentDidUpdate: function componentDidUpdate() {
            var _this = this;

            var _loop = function _loop(key) {
                var ref = _this.refs[key];
                if (ref.refs && ref.props["data-toggle"] == "dialog") {
                    var listener = function listener() {
                        var target = ref.props["data-target"];
                        var targetRef = _this.refs[target];
                        if (targetRef && targetRef.open) {
                            targetRef.open();
                            if (ref.props["data-data"]) {
                                targetRef.setData(ref.props["data-data"]);
                            }
                            return;
                        }
                    };
                    if (!ref.__islistened) {
                        ref.__islistened = true;
                        //ref.un("click", listener);
                        ref.on("click", listener);
                    }
                }
            };

            for (var key in this.refs) {
                _loop(key);
            }
        }
    };
});
