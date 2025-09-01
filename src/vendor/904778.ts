import n from "../vendor/517500";
import i from "../vendor/64627";
import { List, Map as _$$Map } from "../vendor/116740";
import a from "../vendor/153658";
import s from "../vendor/850034";
var u = List;
var c = _$$Map;
var l = function (t, e, r) {
  if (t) {
    var n = e.get(t);
    n && e.set(t, r(n));
  }
};
module.exports = function (t, e) {
  e.isCollapsed() || a(!1);
  var r = e.getAnchorKey();
  var o = t.getBlockMap();
  var f = o.get(r);
  var p = f.getText();
  if (!p) {
    var h = f.getType();
    if ("unordered-list-item" === h || "ordered-list-item" === h) return s(t, e, function (t) {
      return t.merge({
        type: "unstyled",
        depth: 0
      });
    });
  }
  var d = e.getAnchorOffset();
  var g = f.getCharacterList();
  var y = i();
  var v = f instanceof n;
  var m = f.merge({
    text: p.slice(0, d),
    characterList: g.slice(0, d)
  });
  var _ = m.merge({
    key: y,
    text: p.slice(d),
    characterList: g.slice(d),
    data: c()
  });
  var b = o.toSeq().takeUntil(function (t) {
    return t === f;
  });
  var S = o.toSeq().skipUntil(function (t) {
    return t === f;
  }).rest();
  var w = b.concat([[r, m], [y, _]], S).toOrderedMap();
  v && (f.getChildKeys().isEmpty() || a(!1), w = w.withMutations(function (t) {
    var e = m.getKey();
    var r = _.getKey();
    l(m.getParentKey(), t, function (t) {
      var n = t.getChildKeys();
      var i = n.indexOf(e) + 1;
      var o = n.toArray();
      o.splice(i, 0, r);
      return t.merge({
        children: u(o)
      });
    });
    l(m.getNextSiblingKey(), t, function (t) {
      return t.merge({
        prevSibling: r
      });
    });
    l(e, t, function (t) {
      return t.merge({
        nextSibling: r
      });
    });
    l(r, t, function (t) {
      return t.merge({
        prevSibling: e
      });
    });
  }));
  return t.merge({
    blockMap: w,
    selectionBefore: e,
    selectionAfter: e.merge({
      anchorKey: y,
      anchorOffset: 0,
      focusKey: y,
      focusOffset: 0,
      isBackward: !1
    })
  });
};