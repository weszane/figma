var r = "Expected a function";
function n(e, n, i) {
  if ("function" != typeof e) throw TypeError(r);
  return setTimeout(function () {
    e.apply(void 0, i);
  }, n);
}
module.exports = n;