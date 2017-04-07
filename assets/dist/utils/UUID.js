define(["module"], function (module) {
  "use strict";

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

  /**
   * @author cqb 2016-03-24
   * @module UUID模块
   */

  /**
   *
   * @returns {string}
   * @private
   */
  var _s4 = function _s4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };

  /**
   * UUID
   */

  var UUID = function () {
    function UUID() {
      _classCallCheck(this, UUID);
    }

    _createClass(UUID, null, [{
      key: "v4",
      value: function v4() {
        return _s4() + _s4() + "-" + _s4() + "-" + _s4() + "-" + _s4() + "-" + _s4() + _s4() + _s4();
      }
    }]);

    return UUID;
  }();

  module.exports = UUID;
});
