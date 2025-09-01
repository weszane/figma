!function (r, n) {
  module.exports = n();
}(0, function () {
  "use strict";

  var e;
  var r;
  var n = 1e3;
  var i = 6e4;
  var s = 36e5;
  var o = 864e5;
  var a = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
  var h = 31536e6;
  var d = 2592e6;
  var p = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  var g = {
    years: 31536e6,
    months: 2592e6,
    days: 864e5,
    hours: 36e5,
    minutes: 6e4,
    seconds: 1e3,
    milliseconds: 1,
    weeks: 6048e5
  };
  var m = function (e) {
    return e instanceof k;
  };
  var v = function (e, r, n) {
    return new k(e, n, r.$l);
  };
  var y = function (e) {
    return r.p(e) + "s";
  };
  var b = function (e) {
    return e < 0;
  };
  var O = function (e) {
    return b(e) ? Math.ceil(e) : Math.floor(e);
  };
  var x = function (e) {
    return Math.abs(e);
  };
  var w = function (e, r) {
    return e ? b(e) ? {
      negative: !0,
      format: "" + x(e) + r
    } : {
      negative: !1,
      format: "" + e + r
    } : {
      negative: !1,
      format: ""
    };
  };
  var k = function () {
    function b(e, r, n) {
      var i = this;
      if (this.$d = {}, this.$l = n, void 0 === e && (this.$ms = 0, this.parseFromMilliseconds()), r) return v(e * g[y(r)], this);
      if ("number" == typeof e) {
        this.$ms = e;
        this.parseFromMilliseconds();
        return this;
      }
      if ("object" == typeof e) {
        Object.keys(e).forEach(function (r) {
          i.$d[y(r)] = e[r];
        });
        this.calMilliseconds();
        return this;
      }
      if ("string" == typeof e) {
        var s = e.match(p);
        if (s) {
          var o = s.slice(2).map(function (e) {
            return null != e ? Number(e) : 0;
          });
          this.$d.years = o[0];
          this.$d.months = o[1];
          this.$d.weeks = o[2];
          this.$d.days = o[3];
          this.$d.hours = o[4];
          this.$d.minutes = o[5];
          this.$d.seconds = o[6];
          this.calMilliseconds();
          return this;
        }
      }
      return this;
    }
    var x = b.prototype;
    x.calMilliseconds = function () {
      var e = this;
      this.$ms = Object.keys(this.$d).reduce(function (r, n) {
        return r + (e.$d[n] || 0) * g[n];
      }, 0);
    };
    x.parseFromMilliseconds = function () {
      var e = this.$ms;
      this.$d.years = O(e / h);
      e %= h;
      this.$d.months = O(e / d);
      e %= d;
      this.$d.days = O(e / o);
      e %= o;
      this.$d.hours = O(e / s);
      e %= s;
      this.$d.minutes = O(e / i);
      e %= i;
      this.$d.seconds = O(e / n);
      e %= n;
      this.$d.milliseconds = e;
    };
    x.toISOString = function () {
      var e = w(this.$d.years, "Y");
      var r = w(this.$d.months, "M");
      var n = +this.$d.days || 0;
      this.$d.weeks && (n += 7 * this.$d.weeks);
      var i = w(n, "D");
      var s = w(this.$d.hours, "H");
      var o = w(this.$d.minutes, "M");
      var a = this.$d.seconds || 0;
      this.$d.milliseconds && (a += this.$d.milliseconds / 1e3);
      var h = w(a, "S");
      var d = e.negative || r.negative || i.negative || s.negative || o.negative || h.negative;
      var p = s.format || o.format || h.format ? "T" : "";
      var g = (d ? "-" : "") + "P" + e.format + r.format + i.format + p + s.format + o.format + h.format;
      return "P" === g || "-P" === g ? "P0D" : g;
    };
    x.toJSON = function () {
      return this.toISOString();
    };
    x.format = function (e) {
      var n = e || "YYYY-MM-DDTHH:mm:ss";
      var i = {
        Y: this.$d.years,
        YY: r.s(this.$d.years, 2, "0"),
        YYYY: r.s(this.$d.years, 4, "0"),
        M: this.$d.months,
        MM: r.s(this.$d.months, 2, "0"),
        D: this.$d.days,
        DD: r.s(this.$d.days, 2, "0"),
        H: this.$d.hours,
        HH: r.s(this.$d.hours, 2, "0"),
        m: this.$d.minutes,
        mm: r.s(this.$d.minutes, 2, "0"),
        s: this.$d.seconds,
        ss: r.s(this.$d.seconds, 2, "0"),
        SSS: r.s(this.$d.milliseconds, 3, "0")
      };
      return n.replace(a, function (e, r) {
        return r || String(i[e]);
      });
    };
    x.as = function (e) {
      return this.$ms / g[y(e)];
    };
    x.get = function (e) {
      var r = this.$ms;
      var n = y(e);
      "milliseconds" === n ? r %= 1e3 : r = "weeks" === n ? O(r / g[n]) : this.$d[n];
      return 0 === r ? 0 : r;
    };
    x.add = function (e, r, n) {
      var i;
      i = r ? e * g[y(r)] : m(e) ? e.$ms : v(e, this).$ms;
      return v(this.$ms + i * (n ? -1 : 1), this);
    };
    x.subtract = function (e, r) {
      return this.add(e, r, !0);
    };
    x.locale = function (e) {
      var r = this.clone();
      r.$l = e;
      return r;
    };
    x.clone = function () {
      return v(this.$ms, this);
    };
    x.humanize = function (r) {
      return e().add(this.$ms, "ms").locale(this.$l).fromNow(!r);
    };
    x.milliseconds = function () {
      return this.get("milliseconds");
    };
    x.asMilliseconds = function () {
      return this.as("milliseconds");
    };
    x.seconds = function () {
      return this.get("seconds");
    };
    x.asSeconds = function () {
      return this.as("seconds");
    };
    x.minutes = function () {
      return this.get("minutes");
    };
    x.asMinutes = function () {
      return this.as("minutes");
    };
    x.hours = function () {
      return this.get("hours");
    };
    x.asHours = function () {
      return this.as("hours");
    };
    x.days = function () {
      return this.get("days");
    };
    x.asDays = function () {
      return this.as("days");
    };
    x.weeks = function () {
      return this.get("weeks");
    };
    x.asWeeks = function () {
      return this.as("weeks");
    };
    x.months = function () {
      return this.get("months");
    };
    x.asMonths = function () {
      return this.as("months");
    };
    x.years = function () {
      return this.get("years");
    };
    x.asYears = function () {
      return this.as("years");
    };
    return b;
  }();
  return function (n, i, s) {
    e = s;
    r = s().$utils();
    s.duration = function (e, r) {
      return v(e, {
        $l: s.locale()
      }, r);
    };
    s.isDuration = m;
    var o = i.prototype.add;
    var a = i.prototype.subtract;
    i.prototype.add = function (e, r) {
      m(e) && (e = e.asMilliseconds());
      return o.bind(this)(e, r);
    };
    i.prototype.subtract = function (e, r) {
      m(e) && (e = e.asMilliseconds());
      return a.bind(this)(e, r);
    };
  };
});