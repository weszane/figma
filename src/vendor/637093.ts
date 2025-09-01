!function (r, n) {
  module.exports = n();
}(0, function () {
  return function (e, r, n) {
    r.prototype.isBetween = function (e, r, i, s) {
      var o = n(e);
      var a = n(r);
      var h = "(" === (s = s || "()")[0];
      var d = ")" === s[1];
      return (h ? this.isAfter(o, i) : !this.isBefore(o, i)) && (d ? this.isBefore(a, i) : !this.isAfter(a, i)) || (h ? this.isBefore(o, i) : !this.isAfter(o, i)) && (d ? this.isAfter(a, i) : !this.isBefore(a, i));
    };
  };
});