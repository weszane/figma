var t;
t = function () {
  return function (e, t) {
    var a = t.prototype;
    var n = a.format;
    a.format = function (e) {
      var t = this;
      var a = this.$locale();
      if (!this.isValid()) return n.bind(this)(e);
      var s = this.$utils();
      var i = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (e) {
        switch (e) {
          case "Q":
            return Math.ceil((t.$M + 1) / 3);
          case "Do":
            return a.ordinal(t.$D);
          case "gggg":
            return t.weekYear();
          case "GGGG":
            return t.isoWeekYear();
          case "wo":
            return a.ordinal(t.week(), "W");
          case "w":
          case "ww":
            return s.s(t.week(), "w" === e ? 1 : 2, "0");
          case "W":
          case "WW":
            return s.s(t.isoWeek(), "W" === e ? 1 : 2, "0");
          case "k":
          case "kk":
            return s.s(String(0 === t.$H ? 24 : t.$H), "k" === e ? 1 : 2, "0");
          case "X":
            return Math.floor(t.$d.getTime() / 1e3);
          case "x":
            return t.$d.getTime();
          case "z":
            return "[" + t.offsetName() + "]";
          case "zzz":
            return "[" + t.offsetName("long") + "]";
          default:
            return e;
        }
      });
      return n.bind(this)(i);
    };
  };
};
module.exports = t();