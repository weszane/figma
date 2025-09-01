import { getRemovalRange } from "../vendor/805362";
import i from "../vendor/206243";
import o from "../vendor/153658";
function a(t, e, r, a, s, u, c) {
  var l = r.getStartOffset();
  var f = r.getEndOffset();
  var p = t.__get(s).getMutability();
  var h = c ? l : f;
  if ("MUTABLE" === p) return r;
  var d = i(e, s).filter(function (t) {
    return h <= t.end && h >= t.start;
  });
  1 != d.length && o(!1);
  var g = d[0];
  if ("IMMUTABLE" === p) return r.merge({
    anchorOffset: g.start,
    focusOffset: g.end,
    isBackward: !1
  });
  u || (c ? f = g.end : l = g.start);
  var y = getRemovalRange(l, f, e.getText().slice(g.start, g.end), g.start, a);
  return r.merge({
    anchorOffset: y.start,
    focusOffset: y.end,
    isBackward: !1
  });
}
module.exports = function (t, e, r, n, i) {
  var o = n.getStartOffset();
  var s = n.getEndOffset();
  var u = e.getEntityAt(o);
  var c = r.getEntityAt(s - 1);
  if (!u && !c) return n;
  var l = n;
  if (u && u === c) l = a(t, e, l, i, u, !0, !0);else if (u && c) {
    var f = a(t, e, l, i, u, !1, !0);
    var p = a(t, r, l, i, c, !1, !1);
    l = l.merge({
      anchorOffset: f.getAnchorOffset(),
      focusOffset: p.getFocusOffset(),
      isBackward: !1
    });
  } else if (u) {
    var h = a(t, e, l, i, u, !1, !0);
    l = l.merge({
      anchorOffset: h.getStartOffset(),
      isBackward: !1
    });
  } else if (c) {
    var d = a(t, r, l, i, c, !1, !1);
    l = l.merge({
      focusOffset: d.getEndOffset(),
      isBackward: !1
    });
  }
  return l;
};