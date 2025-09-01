!function (r, n) {
  module.exports = n();
}(0, function () {
  "use strict";

  var e = 1e3;
  var r = 6e4;
  var n = 36e5;
  var i = "millisecond";
  var s = "second";
  var o = "minute";
  var a = "hour";
  var h = "day";
  var d = "week";
  var p = "month";
  var g = "quarter";
  var m = "year";
  var v = "date";
  var y = "Invalid Date";
  var b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
  var O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
  var x = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    ordinal: function (e) {
      var r = ["th", "st", "nd", "rd"];
      var n = e % 100;
      return "[" + e + (r[(n - 20) % 10] || r[n] || r[0]) + "]";
    }
  };
  var w = function (e, r, n) {
    var i = String(e);
    return !i || i.length >= r ? e : "" + Array(r + 1 - i.length).join(n) + e;
  };
  var k = {
    s: w,
    z: function (e) {
      var r = -e.utcOffset();
      var n = Math.abs(r);
      var i = Math.floor(n / 60);
      var s = n % 60;
      return (r <= 0 ? "+" : "-") + w(i, 2, "0") + ":" + w(s, 2, "0");
    },
    m: function e(r, n) {
      if (r.date() < n.date()) return -e(n, r);
      var i = 12 * (n.year() - r.year()) + (n.month() - r.month());
      var s = r.clone().add(i, p);
      var o = n - s < 0;
      var a = r.clone().add(i + (o ? -1 : 1), p);
      return +(-(i + (n - s) / (o ? s - a : a - s)) || 0);
    },
    a: function (e) {
      return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    },
    p: function (e) {
      return {
        M: p,
        y: m,
        w: d,
        d: h,
        D: v,
        h: a,
        m: o,
        s: s,
        ms: i,
        Q: g
      }[e] || String(e || "").toLowerCase().replace(/s$/, "");
    },
    u: function (e) {
      return void 0 === e;
    }
  };
  var _ = "en";
  var S = {};
  S[_] = x;
  var E = function (e) {
    return e instanceof I;
  };
  var A = function e(r, n, i) {
    var s;
    if (!r) return _;
    if ("string" == typeof r) {
      var o = r.toLowerCase();
      S[o] && (s = o);
      n && (S[o] = n, s = o);
      var a = r.split("-");
      if (!s && a.length > 1) return e(a[0]);
    } else {
      var h = r.name;
      S[h] = r;
      s = h;
    }
    !i && s && (_ = s);
    return s || !i && _;
  };
  var C = function (e, r) {
    if (E(e)) return e.clone();
    var n = "object" == typeof r ? r : {};
    n.date = e;
    n.args = arguments;
    return new I(n);
  };
  var T = k;
  T.l = A;
  T.i = E;
  T.w = function (e, r) {
    return C(e, {
      locale: r.$L,
      utc: r.$u,
      x: r.$x,
      $offset: r.$offset
    });
  };
  var I = function () {
    function x(e) {
      this.$L = A(e.locale, null, !0);
      this.parse(e);
    }
    var w = x.prototype;
    w.parse = function (e) {
      this.$d = function (e) {
        var r = e.date;
        var n = e.utc;
        if (null === r) return new Date(NaN);
        if (T.u(r)) return new Date();
        if (r instanceof Date) return new Date(r);
        if ("string" == typeof r && !/Z$/i.test(r)) {
          var i = r.match(b);
          if (i) {
            var s = i[2] - 1 || 0;
            var o = (i[7] || "0").substring(0, 3);
            return n ? new Date(Date.UTC(i[1], s, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)) : new Date(i[1], s, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o);
          }
        }
        return new Date(r);
      }(e);
      this.$x = e.x || {};
      this.init();
    };
    w.init = function () {
      var e = this.$d;
      this.$y = e.getFullYear();
      this.$M = e.getMonth();
      this.$D = e.getDate();
      this.$W = e.getDay();
      this.$H = e.getHours();
      this.$m = e.getMinutes();
      this.$s = e.getSeconds();
      this.$ms = e.getMilliseconds();
    };
    w.$utils = function () {
      return T;
    };
    w.isValid = function () {
      return this.$d.toString() !== y;
    };
    w.isSame = function (e, r) {
      var n = C(e);
      return this.startOf(r) <= n && n <= this.endOf(r);
    };
    w.isAfter = function (e, r) {
      return C(e) < this.startOf(r);
    };
    w.isBefore = function (e, r) {
      return this.endOf(r) < C(e);
    };
    w.$g = function (e, r, n) {
      return T.u(e) ? this[r] : this.set(n, e);
    };
    w.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    };
    w.valueOf = function () {
      return this.$d.getTime();
    };
    w.startOf = function (e, r) {
      var n = this;
      var i = !!T.u(r) || r;
      var g = T.p(e);
      var y = function (e, r) {
        var s = T.w(n.$u ? Date.UTC(n.$y, r, e) : new Date(n.$y, r, e), n);
        return i ? s : s.endOf(h);
      };
      var b = function (e, r) {
        return T.w(n.toDate()[e].apply(n.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(r)), n);
      };
      var O = this.$W;
      var x = this.$M;
      var w = this.$D;
      var k = "set" + (this.$u ? "UTC" : "");
      switch (g) {
        case m:
          return i ? y(1, 0) : y(31, 11);
        case p:
          return i ? y(1, x) : y(0, x + 1);
        case d:
          var _ = this.$locale().weekStart || 0;
          var S = (O < _ ? O + 7 : O) - _;
          return y(i ? w - S : w + (6 - S), x);
        case h:
        case v:
          return b(k + "Hours", 0);
        case a:
          return b(k + "Minutes", 1);
        case o:
          return b(k + "Seconds", 2);
        case s:
          return b(k + "Milliseconds", 3);
        default:
          return this.clone();
      }
    };
    w.endOf = function (e) {
      return this.startOf(e, !1);
    };
    w.$set = function (e, r) {
      var n;
      var d = T.p(e);
      var g = "set" + (this.$u ? "UTC" : "");
      var y = ((n = {})[h] = g + "Date", n[v] = g + "Date", n[p] = g + "Month", n[m] = g + "FullYear", n[a] = g + "Hours", n[o] = g + "Minutes", n[s] = g + "Seconds", n[i] = g + "Milliseconds", n)[d];
      var b = d === h ? this.$D + (r - this.$W) : r;
      if (d === p || d === m) {
        var O = this.clone().set(v, 1);
        O.$d[y](b);
        O.init();
        this.$d = O.set(v, Math.min(this.$D, O.daysInMonth())).$d;
      } else y && this.$d[y](b);
      this.init();
      return this;
    };
    w.set = function (e, r) {
      return this.clone().$set(e, r);
    };
    w.get = function (e) {
      return this[T.p(e)]();
    };
    w.add = function (i, g) {
      var v;
      var y = this;
      i = Number(i);
      var b = T.p(g);
      var O = function (e) {
        var r = C(y);
        return T.w(r.date(r.date() + Math.round(e * i)), y);
      };
      if (b === p) return this.set(p, this.$M + i);
      if (b === m) return this.set(m, this.$y + i);
      if (b === h) return O(1);
      if (b === d) return O(7);
      var x = ((v = {})[o] = r, v[a] = n, v[s] = e, v)[b] || 1;
      var w = this.$d.getTime() + i * x;
      return T.w(w, this);
    };
    w.subtract = function (e, r) {
      return this.add(-1 * e, r);
    };
    w.format = function (e) {
      var r = this;
      var n = this.$locale();
      if (!this.isValid()) return n.invalidDate || y;
      var i = e || "YYYY-MM-DDTHH:mm:ssZ";
      var s = T.z(this);
      var o = this.$H;
      var a = this.$m;
      var h = this.$M;
      var d = n.weekdays;
      var p = n.months;
      var g = function (e, n, s, o) {
        return e && (e[n] || e(r, i)) || s[n].slice(0, o);
      };
      var m = function (e) {
        return T.s(o % 12 || 12, e, "0");
      };
      var v = n.meridiem || function (e, r, n) {
        var i = e < 12 ? "AM" : "PM";
        return n ? i.toLowerCase() : i;
      };
      var b = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: h + 1,
        MM: T.s(h + 1, 2, "0"),
        MMM: g(n.monthsShort, h, p, 3),
        MMMM: g(p, h),
        D: this.$D,
        DD: T.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: g(n.weekdaysMin, this.$W, d, 2),
        ddd: g(n.weekdaysShort, this.$W, d, 3),
        dddd: d[this.$W],
        H: String(o),
        HH: T.s(o, 2, "0"),
        h: m(1),
        hh: m(2),
        a: v(o, a, !0),
        A: v(o, a, !1),
        m: String(a),
        mm: T.s(a, 2, "0"),
        s: String(this.$s),
        ss: T.s(this.$s, 2, "0"),
        SSS: T.s(this.$ms, 3, "0"),
        Z: s
      };
      return i.replace(O, function (e, r) {
        return r || b[e] || s.replace(":", "");
      });
    };
    w.utcOffset = function () {
      return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
    };
    w.diff = function (i, v, y) {
      var b;
      var O = T.p(v);
      var x = C(i);
      var w = (x.utcOffset() - this.utcOffset()) * r;
      var k = this - x;
      var _ = T.m(this, x);
      _ = ((b = {})[m] = _ / 12, b[p] = _, b[g] = _ / 3, b[d] = (k - w) / 6048e5, b[h] = (k - w) / 864e5, b[a] = k / n, b[o] = k / r, b[s] = k / e, b)[O] || k;
      return y ? _ : T.a(_);
    };
    w.daysInMonth = function () {
      return this.endOf(p).$D;
    };
    w.$locale = function () {
      return S[this.$L];
    };
    w.locale = function (e, r) {
      if (!e) return this.$L;
      var n = this.clone();
      var i = A(e, r, !0);
      i && (n.$L = i);
      return n;
    };
    w.clone = function () {
      return T.w(this.$d, this);
    };
    w.toDate = function () {
      return new Date(this.valueOf());
    };
    w.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    };
    w.toISOString = function () {
      return this.$d.toISOString();
    };
    w.toString = function () {
      return this.$d.toUTCString();
    };
    return x;
  }();
  var P = I.prototype;
  C.prototype = P;
  [["$ms", i], ["$s", s], ["$m", o], ["$H", a], ["$W", h], ["$M", p], ["$y", m], ["$D", v]].forEach(function (e) {
    P[e[1]] = function (r) {
      return this.$g(r, e[0], e[1]);
    };
  });
  C.extend = function (e, r) {
    e.$i || (e(r, I, C), e.$i = !0);
    return C;
  };
  C.locale = A;
  C.isDayjs = E;
  C.unix = function (e) {
    return C(1e3 * e);
  };
  C.en = S[_];
  C.Ls = S;
  C.p = {};
  return C;
});