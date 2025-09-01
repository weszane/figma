!function (r, n) {
  module.exports = n();
}(0, function () {
  "use strict";

  var e = "minute";
  var r = /[+-]\d\d(?::?\d\d)?/g;
  var n = /([+-]|\d\d)/g;
  return function (i, s, o) {
    var a = s.prototype;
    o.utc = function (e) {
      var r = {
        date: e,
        utc: !0,
        args: arguments
      };
      return new s(r);
    };
    a.utc = function (r) {
      var n = o(this.toDate(), {
        locale: this.$L,
        utc: !0
      });
      return r ? n.add(this.utcOffset(), e) : n;
    };
    a.local = function () {
      return o(this.toDate(), {
        locale: this.$L,
        utc: !1
      });
    };
    var h = a.parse;
    a.parse = function (e) {
      e.utc && (this.$u = !0);
      this.$utils().u(e.$offset) || (this.$offset = e.$offset);
      h.call(this, e);
    };
    var d = a.init;
    a.init = function () {
      if (this.$u) {
        var e = this.$d;
        this.$y = e.getUTCFullYear();
        this.$M = e.getUTCMonth();
        this.$D = e.getUTCDate();
        this.$W = e.getUTCDay();
        this.$H = e.getUTCHours();
        this.$m = e.getUTCMinutes();
        this.$s = e.getUTCSeconds();
        this.$ms = e.getUTCMilliseconds();
      } else d.call(this);
    };
    var p = a.utcOffset;
    a.utcOffset = function (i, s) {
      var o = this.$utils().u;
      if (o(i)) return this.$u ? 0 : o(this.$offset) ? p.call(this) : this.$offset;
      if ("string" == typeof i && null === (i = function (e) {
        void 0 === e && (e = "");
        var i = e.match(r);
        if (!i) return null;
        var s = ("" + i[0]).match(n) || ["-", 0, 0];
        var o = s[0];
        var a = 60 * +s[1] + +s[2];
        return 0 === a ? 0 : "+" === o ? a : -a;
      }(i))) return this;
      var a = 16 >= Math.abs(i) ? 60 * i : i;
      var h = this;
      if (s) {
        h.$offset = a;
        h.$u = 0 === i;
        return h;
      }
      if (0 !== i) {
        var d = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        (h = this.local().add(a + d, e)).$offset = a;
        h.$x.$localOffset = d;
      } else h = this.utc();
      return h;
    };
    var g = a.format;
    a.format = function (e) {
      var r = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return g.call(this, r);
    };
    a.valueOf = function () {
      var e = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * e;
    };
    a.isUTC = function () {
      return !!this.$u;
    };
    a.toISOString = function () {
      return this.toDate().toISOString();
    };
    a.toString = function () {
      return this.toDate().toUTCString();
    };
    var m = a.toDate;
    a.toDate = function (e) {
      return "s" === e && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : m.call(this);
    };
    var v = a.diff;
    a.diff = function (e, r, n) {
      if (e && this.$u === e.$u) return v.call(this, e, r, n);
      var i = this.local();
      var s = o(e).local();
      return v.call(i, s, r, n);
    };
  };
});