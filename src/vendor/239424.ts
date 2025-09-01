import { applyEntity } from "../vendor/425694";
import i from "../vendor/652015";
import o from "../vendor/153658";
function a(t, e, r) {
  var a = e.getCharacterList();
  var s = r > 0 ? a.get(r - 1) : void 0;
  var u = r < a.count() ? a.get(r) : void 0;
  var c = s ? s.getEntity() : void 0;
  var l = u ? u.getEntity() : void 0;
  if (l && l === c && "MUTABLE" !== t.__get(l).getMutability()) {
    for (i(a, function (t, e) {
      return t.getEntity() === e.getEntity();
    }, function (t) {
      return t.getEntity() === l;
    }, function (t, e) {
      t <= r && e >= r && (f = {
        start: t,
        end: e
      });
    }), "object" != typeof f && o(!1), h = f, d = h.start, g = h.end, void 0; d < g;) {
      var f;
      var p;
      var h;
      var d;
      var g;
      p = a.get(d);
      a = a.set(d, applyEntity(p, null));
      d++;
    }
    return e.set("characterList", a);
  }
  return e;
}
module.exports = function (t, e) {
  var r = t.getBlockMap();
  var n = t.getEntityMap();
  var i = {};
  var o = e.getStartKey();
  var s = e.getStartOffset();
  var u = r.get(o);
  var c = a(n, u, s);
  c !== u && (i[o] = c);
  var l = e.getEndKey();
  var f = e.getEndOffset();
  var p = r.get(l);
  o === l && (p = c);
  var h = a(n, p, f);
  return (h !== p && (i[l] = h), Object.keys(i).length) ? t.merge({
    blockMap: r.merge(i),
    selectionAfter: e
  }) : t.set("selectionAfter", e);
};