import { removeRange, replaceWithFragment } from "../vendor/662606";
import { push, acceptSelection } from "../vendor/724102";
import o from "../vendor/759742";
module.exports = function (t) {
  var e;
  var r;
  var a = t.getSelection();
  if (!a.isCollapsed()) return t;
  var s = a.getAnchorOffset();
  if (0 === s) return t;
  var u = a.getAnchorKey();
  var c = t.getCurrentContent();
  var l = c.getBlockForKey(u).getLength();
  if (l <= 1) return t;
  s === l ? (e = a.set("anchorOffset", s - 1), r = a) : r = (e = a.set("focusOffset", s + 1)).set("anchorOffset", s + 1);
  var f = o(c, e);
  var p = removeRange(c, e, "backward");
  var h = p.getSelectionAfter();
  var d = h.getAnchorOffset() - 1;
  var g = h.merge({
    anchorOffset: d,
    focusOffset: d
  });
  var y = replaceWithFragment(p, g, f);
  var v = push(t, y, "insert-fragment");
  return acceptSelection(v, r);
};