var t; /*!
       Copyright (c) 2018 Jed Watson.
       Licensed under the MIT License (MIT), see
       http://jedwatson.github.io/classnames
       */
!function () {
  "use strict";

  var r = {}.hasOwnProperty;
  function l() {
    for (e = "", n = 0, void 0; n < $$arguments.length; n++) {
      var e;
      var n;
      var t = $$arguments[n];
      t && (e = a(e, function (e) {
        if ("string" == typeof e || "number" == typeof e) return e;
        if ("object" != typeof e) return "";
        if (Array.isArray(e)) return l.apply(null, e);
        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
        var n = "";
        for (var t in e) r.call(e, t) && e[t] && (n = a(n, t));
        return n;
      }(t)));
    }
    return e;
  }
  function a(e, n) {
    return n ? e ? e + " " + n : e + n : e;
  }
  module.exports ? (l.$$default = l, module.exports = l) : void 0 !== (t = function () {
    return l;
  }.apply(exports, [])) && (module.exports = t);
}();