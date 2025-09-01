import i from "../vendor/674974";
function s(e, r, n) {
  for (s = -1, o = e.criteria, a = r.criteria, h = o.length, d = n.length, void 0; ++s < h;) {
    var s;
    var o;
    var a;
    var h;
    var d;
    var p = i(o[s], a[s]);
    if (p) {
      if (s >= d) return p;
      return p * ("desc" == n[s] ? -1 : 1);
    }
  }
  return e.index - r.index;
}
module.exports = s;