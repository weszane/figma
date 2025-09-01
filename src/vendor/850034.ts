import { Map as _$$Map } from "../vendor/116740";
var n = _$$Map;
module.exports = function (t, e, r) {
  var i = e.getStartKey();
  var o = e.getEndKey();
  var a = t.getBlockMap();
  var s = a.toSeq().skipUntil(function (t, e) {
    return e === i;
  }).takeUntil(function (t, e) {
    return e === o;
  }).concat(n([[o, a.get(o)]])).map(r);
  return t.merge({
    blockMap: a.merge(s),
    selectionBefore: e,
    selectionAfter: e
  });
};