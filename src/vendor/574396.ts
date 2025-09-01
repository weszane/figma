!function (r, n) {
  module.exports = n();
}(0, function () {
  return function (e, r, n) {
    e = e || {};
    var i = r.prototype;
    var s = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    function o(e, r, n, s) {
      return i.fromToBase(e, r, n, s);
    }
    n.en.relativeTime = s;
    i.fromToBase = function (r, i, o, a, h) {
      for (m = o.$locale().relativeTime || s, v = e.thresholds || [{
        l: "s",
        r: 44,
        d: "second"
      }, {
        l: "m",
        r: 89
      }, {
        l: "mm",
        r: 44,
        d: "minute"
      }, {
        l: "h",
        r: 89
      }, {
        l: "hh",
        r: 21,
        d: "hour"
      }, {
        l: "d",
        r: 35
      }, {
        l: "dd",
        r: 25,
        d: "day"
      }, {
        l: "M",
        r: 45
      }, {
        l: "MM",
        r: 10,
        d: "month"
      }, {
        l: "y",
        r: 17
      }, {
        l: "yy",
        d: "year"
      }], y = v.length, b = 0, void 0; b < y; b += 1) {
        var d;
        var p;
        var g;
        var m;
        var v;
        var y;
        var b;
        var O = v[b];
        O.d && (d = a ? n(r).diff(o, O.d, !0) : o.diff(r, O.d, !0));
        var x = (e.rounding || Math.round)(Math.abs(d));
        if (g = d > 0, x <= O.r || !O.r) {
          x <= 1 && b > 0 && (O = v[b - 1]);
          var w = m[O.l];
          h && (x = h("" + x));
          p = "string" == typeof w ? w.replace("%d", x) : w(x, i, O.l, g);
          break;
        }
      }
      if (i) return p;
      var k = g ? m.future : m.past;
      return "function" == typeof k ? k(p) : k.replace("%s", p);
    };
    i.to = function (e, r) {
      return o(e, r, this, !0);
    };
    i.from = function (e, r) {
      return o(e, r, this);
    };
    var a = function (e) {
      return e.$u ? n.utc() : n();
    };
    i.toNow = function (e) {
      return this.to(a(this), e);
    };
    i.fromNow = function (e) {
      return this.from(a(this), e);
    };
  };
});