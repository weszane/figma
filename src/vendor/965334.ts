import { decode } from "../vendor/999625";
import i from "../vendor/808828";
module.exports = function (t, e, r, o, a) {
  var s = i(t.getSelection());
  if (!e || !o) return s;
  var u = decode(e);
  var c = u.blockKey;
  var l = t.getBlockTree(c);
  var f = l && l.getIn([u.decoratorKey, "leaves", u.leafKey]);
  var p = decode(o);
  var h = p.blockKey;
  var d = t.getBlockTree(h);
  var g = d && d.getIn([p.decoratorKey, "leaves", p.leafKey]);
  if (!f || !g) return s;
  var y = f.get("start");
  var v = g.get("start");
  var m = f ? y + r : null;
  var _ = g ? v + a : null;
  if (s.getAnchorKey() === c && s.getAnchorOffset() === m && s.getFocusKey() === h && s.getFocusOffset() === _) return s;
  var b = !1;
  if (c === h) {
    var S = f.get("end");
    var w = g.get("end");
    b = v === y && w === S ? a < r : v < y;
  } else b = t.getCurrentContent().getBlockMap().keySeq().skipUntil(function (t) {
    return t === c || t === h;
  }).first() === h;
  return s.merge({
    anchorKey: c,
    anchorOffset: m,
    focusKey: h,
    focusOffset: _,
    isBackward: b
  });
};