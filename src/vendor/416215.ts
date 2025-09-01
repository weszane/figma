import n from "../vendor/517500";
import i from "../vendor/532572";
import { OrderedMap, List } from "../vendor/116740";
import a from "../vendor/153658";
var s = OrderedMap;
var u = List;
var c = function (t, e, r) {
  if (t) {
    var n = e.get(t);
    n && e.set(t, r(n));
  }
};
var l = function (t, e, r, n, i) {
  if (!i) return t;
  var o = "after" === n;
  var a = e.getKey();
  var s = r.getKey();
  var l = e.getParentKey();
  var f = e.getNextSiblingKey();
  var p = e.getPrevSiblingKey();
  var h = r.getParentKey();
  var d = o ? r.getNextSiblingKey() : s;
  var g = o ? s : r.getPrevSiblingKey();
  return t.withMutations(function (t) {
    c(l, t, function (t) {
      var e = t.getChildKeys();
      return t.merge({
        children: e.$$delete(e.indexOf(a))
      });
    });
    c(p, t, function (t) {
      return t.merge({
        nextSibling: f
      });
    });
    c(f, t, function (t) {
      return t.merge({
        prevSibling: p
      });
    });
    c(d, t, function (t) {
      return t.merge({
        prevSibling: a
      });
    });
    c(g, t, function (t) {
      return t.merge({
        nextSibling: a
      });
    });
    c(h, t, function (t) {
      var e = t.getChildKeys();
      var r = e.indexOf(s);
      var n = e.toArray();
      n.splice(o ? r + 1 : 0 !== r ? r - 1 : 0, 0, a);
      return t.merge({
        children: u(n)
      });
    });
    c(a, t, function (t) {
      return t.merge({
        nextSibling: d,
        prevSibling: g,
        parent: h
      });
    });
  });
};
module.exports = function (t, e, r, o) {
  "replace" !== o || a(!1);
  var u = r.getKey();
  var c = e.getKey();
  c !== u || a(!1);
  var f = t.getBlockMap();
  var p = e instanceof n;
  var h = [e];
  var d = f.$$delete(c);
  p && (h = [], d = f.withMutations(function (t) {
    var r = e.getNextSiblingKey();
    var n = i(e, t);
    t.toSeq().skipUntil(function (t) {
      return t.getKey() === c;
    }).takeWhile(function (t) {
      var e = t.getKey();
      var i = e === c;
      var o = !r && t.getParentKey() && (!n || e !== n);
      return !!(i || r && e !== r || o);
    }).forEach(function (e) {
      h.push(e);
      t.$$delete(e.getKey());
    });
  }));
  var g = d.toSeq().takeUntil(function (t) {
    return t === r;
  });
  var y = d.toSeq().skipUntil(function (t) {
    return t === r;
  }).skip(1);
  var v = h.map(function (t) {
    return [t.getKey(), t];
  });
  var m = s();
  if ("before" === o) {
    var _ = t.getBlockBefore(u);
    _ && _.getKey() === e.getKey() && a(!1);
    m = g.concat([].concat(v, [[u, r]]), y).toOrderedMap();
  } else if ("after" === o) {
    var b = t.getBlockAfter(u);
    b && b.getKey() === c && a(!1);
    m = g.concat([[u, r]].concat(v), y).toOrderedMap();
  }
  return t.merge({
    blockMap: l(m, e, r, o, p),
    selectionBefore: t.getSelectionAfter(),
    selectionAfter: t.getSelectionAfter().merge({
      anchorKey: c,
      focusKey: c
    })
  });
};