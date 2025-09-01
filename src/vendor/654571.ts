import { notEmptyKey } from "../vendor/223155";
var n = notEmptyKey;
function i(t, e) {
  return n(e) && "MUTABLE" === t.__get(e).getMutability() ? e : null;
}
module.exports = function (t, e) {
  if (e.isCollapsed()) {
    var r;
    var n = e.getAnchorKey();
    var o = e.getAnchorOffset();
    return o > 0 ? (r = t.getBlockForKey(n).getEntityAt(o - 1)) !== t.getBlockForKey(n).getEntityAt(o) ? null : i(t.getEntityMap(), r) : null;
  }
  var a = e.getStartKey();
  var s = e.getStartOffset();
  var u = t.getBlockForKey(a);
  r = s === u.getLength() ? null : u.getEntityAt(s);
  return i(t.getEntityMap(), r);
};