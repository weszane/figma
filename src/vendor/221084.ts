import i from "../vendor/509185";
var s = Object.create;
var o = function () {
  function e() {}
  return function (r) {
    if (!i(r)) return {};
    if (s) return s(r);
    e.prototype = r;
    var n = new e();
    e.prototype = void 0;
    return n;
  };
}();
module.exports = o;