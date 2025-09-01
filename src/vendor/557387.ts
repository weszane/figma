!function (r, n) {
  module.exports = n();
}(0, function () {
  "use strict";

  var e = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  return function (r, n, i) {
    var s = n.prototype;
    var o = s.format;
    i.en.formats = e;
    s.format = function (r) {
      void 0 === r && (r = "YYYY-MM-DDTHH:mm:ssZ");
      var n = this.$locale().formats;
      var i = function (r, n) {
        return r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (r, i, s) {
          var o = s && s.toUpperCase();
          return i || n[s] || e[s] || n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, r, n) {
            return r || n.slice(1);
          });
        });
      }(r, void 0 === n ? {} : n);
      return o.call(this, i);
    };
  };
});