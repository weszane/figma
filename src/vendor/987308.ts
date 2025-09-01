import i from "../vendor/250581";
var s = Array.prototype.splice;
function o(e) {
  var r = this.__data__;
  var n = i(r, e);
  return !(n < 0) && (n == r.length - 1 ? r.pop() : s.call(r, n, 1), --this.size, !0);
}
module.exports = o;