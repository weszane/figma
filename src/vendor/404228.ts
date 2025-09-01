function n() {
  return "undefined" != typeof performance && performance ? 0 | performance.now() : Date.now();
}
function i(e) {
  return n() - e;
}
exports.difference = exports.now = void 0;
exports.now = n;
exports.difference = i;