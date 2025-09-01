import i from "../vendor/416412";
import s from "../vendor/969474";
import o from "../vendor/615861";
import a from "../vendor/509185";
function h(e, r, n) {
  if (!a(n)) return !1;
  var h = typeof r;
  return ("number" == h ? !!(s(n) && o(r, n.length)) : "string" == h && r in n) && i(n[r], e);
}
module.exports = h;