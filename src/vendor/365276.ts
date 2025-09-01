import n from "../vendor/331460";
import { OrderedMap } from "../vendor/116740";
module.exports = function (t, e, r) {
  var o = t.getBlockMap();
  var a = e.getStartKey();
  var s = e.getStartOffset();
  var u = e.getEndKey();
  var c = e.getEndOffset();
  var l = o.skipUntil(function (t, e) {
    return e === a;
  }).takeUntil(function (t, e) {
    return e === u;
  }).toOrderedMap().merge(OrderedMap([[u, o.get(u)]])).map(function (t, e) {
    var i = e === a ? s : 0;
    var o = e === u ? c : t.getLength();
    return n(t, i, o, r);
  });
  return t.merge({
    blockMap: o.merge(l),
    selectionBefore: e,
    selectionAfter: e
  });
};