function r(e, r) {
  return function (n) {
    return e(r(n));
  };
}
module.exports = r;