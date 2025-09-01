var n; /*!
       Copyright (c) 2018 Jed Watson.
       Licensed under the MIT License (MIT), see
       http://jedwatson.github.io/classnames
       */
!function () {
  "use strict";

  var i = {}.hasOwnProperty;
  function s() {
    for (e = [], r = 0, void 0; r < $$arguments.length; r++) {
      var e;
      var r;
      var n = $$arguments[r];
      if (n) {
        var o = typeof n;
        if ("string" === o || "number" === o) e.push(n);else if (Array.isArray(n)) {
          if (n.length) {
            var a = s.apply(null, n);
            a && e.push(a);
          }
        } else if ("object" === o) {
          if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
            e.push(n.toString());
            continue;
          }
          for (var h in n) i.call(n, h) && n[h] && e.push(h);
        }
      }
    }
    return e.join(" ");
  }
  module.exports ? (s.$$default = s, module.exports = s) : void 0 !== (n = function () {
    return s;
  }.apply(exports, [])) && (module.exports = n);
}();