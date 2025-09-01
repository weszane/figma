module.exports = function (t, e, r, n) {
  var i = e.getStartKey();
  var o = e.getEndKey();
  var a = t.getBlockMap();
  var s = a.toSeq().skipUntil(function (t, e) {
    return e === i;
  }).takeUntil(function (t, e) {
    return e === o;
  }).concat([[o, a.get(o)]]).map(function (t) {
    var e = t.getDepth() + r;
    e = Math.max(0, Math.min(e, n));
    return t.set("depth", e);
  });
  a = a.merge(s);
  return t.merge({
    blockMap: a,
    selectionBefore: e,
    selectionAfter: e
  });
};