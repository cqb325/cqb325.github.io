define(["module"], function (module) {
  "use strict";

  /**
   * @author cqb 2016-04-17.
   * @module autoPrefix
   */

  module.exports = {
    set: function set(style, key, value) {
      style[key] = value;
    }
  };
});
