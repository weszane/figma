import i from "../vendor/250581";
function s(e, r) {
  var n = this.__data__;
  var s = i(n, e);
  s < 0 ? (++this.size, n.push([e, r])) : n[s][1] = r;
  return this;
}
module.exports = s;