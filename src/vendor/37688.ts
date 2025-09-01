import { Map as _$$Map } from "../vendor/116740";
import { applyStyle, removeStyle } from "../vendor/425694";
var i = _$$Map;
function o(t, e, r, o) {
  var a = t.getBlockMap();
  var s = e.getStartKey();
  var u = e.getStartOffset();
  var c = e.getEndKey();
  var l = e.getEndOffset();
  var f = a.skipUntil(function (t, e) {
    return e === s;
  }).takeUntil(function (t, e) {
    return e === c;
  }).concat(i([[c, a.get(c)]])).map(function (t, e) {
    s === c ? (i = u, a = l) : (i = e === s ? u : 0, a = e === c ? l : t.getLength());
    for (p = t.getCharacterList(), void 0; i < a;) {
      var i;
      var a;
      var f;
      var p;
      f = p.get(i);
      p = p.set(i, o ? applyStyle(f, r) : removeStyle(f, r));
      i++;
    }
    return t.set("characterList", p);
  });
  return t.merge({
    blockMap: a.merge(f),
    selectionBefore: e,
    selectionAfter: e
  });
}
module.exports = {
  add: function (t, e, r) {
    return o(t, e, r, !0);
  },
  remove: function (t, e, r) {
    return o(t, e, r, !1);
  }
};