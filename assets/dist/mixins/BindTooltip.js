define(["module"], function (module) {
    "use strict";

    module.exports = {

        componentDidMount: function componentDidMount() {
            for (var key in this.refs) {
                var ref = this.refs[key];
                if (ref.refs && ref.props["data-toggle"] == "tooltip") {
                    if (!ref.__islistened) {
                        ref.__islistened = true;
                        var target = ref.props["data-target"];
                        var targetRef = this.refs[target];
                        if (ref.bind) {
                            ref.bind(targetRef);
                        }
                    }
                }
            }
        }
    };
});
