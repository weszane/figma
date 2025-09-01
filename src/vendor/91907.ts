import { createFromArray } from "../vendor/172680";
import i from "../vendor/517500";
import { List } from "../vendor/116740";
import a from "../vendor/300241";
import s from "../vendor/153658";
import u from "../vendor/400786";
var c = List;
var l = function (t, e, r, n, i, o) {
  var s = $$arguments.length > 6 && void 0 !== $$arguments[6] ? $$arguments[6] : "REPLACE_WITH_NEW_DATA";
  var u = r.get(i);
  var c = u.getText();
  var l = u.getCharacterList();
  var f = o + n.getText().length;
  var p = null;
  switch (s) {
    case "MERGE_OLD_DATA_TO_NEW_DATA":
      p = n.getData().merge(u.getData());
      break;
    case "REPLACE_WITH_NEW_DATA":
      p = n.getData();
  }
  var h = u.getType();
  c && "unstyled" === h && (h = n.getType());
  var d = u.merge({
    text: c.slice(0, o) + n.getText() + c.slice(o),
    characterList: a(l, n.getCharacterList(), o),
    type: h,
    data: p
  });
  return t.merge({
    blockMap: r.set(i, d),
    selectionBefore: e,
    selectionAfter: e.merge({
      anchorKey: i,
      anchorOffset: f,
      focusKey: i,
      focusOffset: f,
      isBackward: !1
    })
  });
};
var f = function (t, e, r) {
  var n = t.getText();
  var i = t.getCharacterList();
  var o = n.slice(0, e);
  var a = i.slice(0, e);
  var s = r.first();
  return t.merge({
    text: o + s.getText(),
    characterList: a.concat(s.getCharacterList()),
    type: o ? t.getType() : s.getType(),
    data: s.getData()
  });
};
var p = function (t, e, r) {
  var n = t.getText();
  var i = t.getCharacterList();
  var o = n.length;
  var a = n.slice(e, o);
  var s = i.slice(e, o);
  var u = r.last();
  return u.merge({
    text: u.getText() + a,
    characterList: u.getCharacterList().concat(s),
    data: u.getData()
  });
};
var h = function (t, e) {
  var r = t.getKey();
  var n = t;
  var i = [];
  for (e.get(r) && i.push(r); n && n.getNextSiblingKey();) {
    var o = n.getNextSiblingKey();
    if (!o) break;
    i.push(o);
    n = e.get(o);
  }
  return i;
};
var d = function (t, e, r, o, a, s) {
  var u;
  var l = r.first() instanceof i;
  var d = [];
  var g = o.size;
  var y = r.get(a);
  var v = o.first();
  var m = o.last();
  var _ = m.getLength();
  var b = m.getKey();
  var S = l && (!y.getChildKeys().isEmpty() || !v.getChildKeys().isEmpty());
  r.forEach(function (t, e) {
    if (e !== a) {
      d.push(t);
      return;
    }
    S ? d.push(t) : d.push(f(t, s, o));
    o.slice(S ? 0 : 1, g - 1).forEach(function (t) {
      return d.push(t);
    });
    d.push(p(t, s, o));
  });
  var w = createFromArray(d);
  l && (w = (u = w).withMutations(function (t) {
    var e = y.getKey();
    var r = v.getKey();
    var n = y.getNextSiblingKey();
    var i = y.getParentKey();
    var o = h(v, u);
    var a = o[o.length - 1];
    if (t.get(r) ? (t.setIn([e, "nextSibling"], r), t.setIn([r, "prevSibling"], e)) : (t.setIn([e, "nextSibling"], v.getNextSiblingKey()), t.setIn([v.getNextSiblingKey(), "prevSibling"], e)), t.setIn([a, "nextSibling"], n), n && t.setIn([n, "prevSibling"], a), o.forEach(function (e) {
      return t.setIn([e, "parent"], i);
    }), i) {
      var s = u.get(i).getChildKeys();
      var l = s.indexOf(e);
      var f = s.toArray();
      f.splice.apply(f, [l + 1, 0].concat(o));
      t.setIn([i, "children"], c(f));
    }
  }));
  return t.merge({
    blockMap: w,
    selectionBefore: e,
    selectionAfter: e.merge({
      anchorKey: b,
      anchorOffset: _,
      focusKey: b,
      focusOffset: _,
      isBackward: !1
    })
  });
};
module.exports = function (t, e, r) {
  var n = $$arguments.length > 3 && void 0 !== $$arguments[3] ? $$arguments[3] : "REPLACE_WITH_NEW_DATA";
  e.isCollapsed() || s(!1);
  var o = t.getBlockMap();
  var a = u(r);
  var c = e.getStartKey();
  var f = e.getStartOffset();
  var p = o.get(c);
  return (p instanceof i && (p.getChildKeys().isEmpty() || s(!1)), 1 === a.size) ? l(t, e, o, a.first(), c, f, n) : d(t, e, o, a, c, f);
};