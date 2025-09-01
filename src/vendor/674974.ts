import i from "../vendor/168110";
function s(e, r) {
  if (e !== r) {
    var n = void 0 !== e;
    var s = null === e;
    var o = e == e;
    var a = i(e);
    var h = void 0 !== r;
    var d = null === r;
    var p = r == r;
    var g = i(r);
    if (!d && !g && !a && e > r || a && h && p && !d && !g || s && h && p || !n && p || !o) return 1;
    if (!s && !a && !g && e < r || g && n && o && !s && !a || d && n && o || !h && o || !p) return -1;
  }
  return 0;
}
module.exports = s;