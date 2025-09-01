import i from "../vendor/40111";
function s(e, r) {
  var n = -1;
  var s = e.length;
  var o = s - 1;
  for (r = void 0 === r ? s : r; ++n < r;) {
    var a = i(n, o);
    var h = e[a];
    e[a] = e[n];
    e[n] = h;
  }
  e.length = r;
  return e;
}
module.exports = s;