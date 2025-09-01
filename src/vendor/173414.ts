!function (r, n) {
  module.exports = n();
}(0, function () {
  "use strict";

  var e = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };
  var r = {};
  return function (n, i, s) {
    var o;
    var a = function (e, n, i) {
      void 0 === i && (i = {});
      var s = new Date(e);
      return function (e, n) {
        void 0 === n && (n = {});
        var i = n.timeZoneName || "short";
        var s = e + "|" + i;
        var o = r[s];
        o || (o = new Intl.DateTimeFormat("en-US", {
          hour12: !1,
          timeZone: e,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: i
        }), r[s] = o);
        return o;
      }(n, i).formatToParts(s);
    };
    var h = function (r, n) {
      for (i = a(r, n), o = [], h = 0, void 0; h < i.length; h += 1) {
        var i;
        var o;
        var h;
        var d = i[h];
        var p = d.type;
        var g = d.value;
        var m = e[p];
        m >= 0 && (o[m] = parseInt(g, 10));
      }
      var v = o[3];
      var y = 24 === v ? 0 : v;
      var b = o[0] + "-" + o[1] + "-" + o[2] + " " + y + ":" + o[4] + ":" + o[5] + ":000";
      var O = +r;
      return (s.utc(b).valueOf() - (O -= O % 1e3)) / 6e4;
    };
    var d = i.prototype;
    d.tz = function (e, r) {
      void 0 === e && (e = o);
      var n = this.utcOffset();
      var i = this.toDate();
      var a = i.toLocaleString("en-US", {
        timeZone: e
      });
      var h = Math.round((i - new Date(a)) / 1e3 / 60);
      var d = s(a).$set("millisecond", this.$ms).utcOffset(-(15 * Math.round(i.getTimezoneOffset() / 15)) - h, !0);
      if (r) {
        var p = d.utcOffset();
        d = d.add(n - p, "minute");
      }
      d.$x.$timezone = e;
      return d;
    };
    d.offsetName = function (e) {
      var r = this.$x.$timezone || s.tz.guess();
      var n = a(this.valueOf(), r, {
        timeZoneName: e
      }).find(function (e) {
        return "timezonename" === e.type.toLowerCase();
      });
      return n && n.value;
    };
    var p = d.startOf;
    d.startOf = function (e, r) {
      if (!this.$x || !this.$x.$timezone) return p.call(this, e, r);
      var n = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
      return p.call(n, e, r).tz(this.$x.$timezone, !0);
    };
    s.tz = function (e, r, n) {
      var i = n && r;
      var a = n || r || o;
      var d = h(+s(), a);
      if ("string" != typeof e) return s(e).tz(a);
      var p = function (e, r, n) {
        var i = e - 60 * r * 1e3;
        var s = h(i, n);
        if (r === s) return [i, r];
        var o = h(i -= 60 * (s - r) * 1e3, n);
        return s === o ? [i, s] : [e - 60 * Math.min(s, o) * 1e3, Math.max(s, o)];
      }(s.utc(e, i).valueOf(), d, a);
      var g = p[0];
      var m = p[1];
      var v = s(g).utcOffset(m);
      v.$x.$timezone = a;
      return v;
    };
    s.tz.guess = function () {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    };
    s.tz.setDefault = function (e) {
      o = e;
    };
  };
});