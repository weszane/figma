!function (r, n) {
  module.exports = n();
}(0, function () {
  return function (e, r) {
    r.prototype.isSameOrAfter = function (e, r) {
      return this.isSame(e, r) || this.isAfter(e, r);
    };
  };
});