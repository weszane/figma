import { create } from "../vendor/425694";
import { add, remove } from "../vendor/37688";
import o from "../vendor/365276";
import a from "../vendor/194040";
import s from "../vendor/759742";
import { OrderedSet } from "../vendor/116740";
import c from "../vendor/91907";
import l from "../vendor/540756";
import f from "../vendor/153658";
import p from "../vendor/850034";
import h from "../vendor/239424";
import d from "../vendor/515055";
import g from "../vendor/904778";
var y = OrderedSet;
var v = {
  replaceText: function (t, e, r, i, o) {
    var a = d(h(t, e), e);
    var s = create({
      style: i || y(),
      entity: o || null
    });
    return l(a, a.getSelectionAfter(), r, s);
  },
  insertText: function (t, e, r, n, i) {
    e.isCollapsed() || f(!1);
    return v.replaceText(t, e, r, n, i);
  },
  moveText: function (t, e, r) {
    var n = s(t, e);
    var i = v.removeRange(t, e, "backward");
    return v.replaceWithFragment(i, r, n);
  },
  replaceWithFragment: function (t, e, r) {
    var n = $$arguments.length > 3 && void 0 !== $$arguments[3] ? $$arguments[3] : "REPLACE_WITH_NEW_DATA";
    var i = d(h(t, e), e);
    return c(i, i.getSelectionAfter(), r, n);
  },
  removeRange: function (t, e, r) {
    e.getIsBackward() && (e = e.merge({
      anchorKey: e.getFocusKey(),
      anchorOffset: e.getFocusOffset(),
      focusKey: e.getAnchorKey(),
      focusOffset: e.getAnchorOffset(),
      isBackward: !1
    }));
    n = e.getAnchorKey();
    i = e.getFocusKey();
    o = t.getBlockForKey(n);
    s = t.getBlockForKey(i);
    var n;
    var i;
    var o;
    var s;
    var u = e.getStartOffset();
    var c = e.getEndOffset();
    var l = o.getEntityAt(u);
    var f = s.getEntityAt(c - 1);
    if (n === i && l && l === f) {
      var p = a(t.getEntityMap(), o, s, e, r);
      return d(t, p);
    }
    return d(h(t, e), e);
  },
  splitBlock: function (t, e) {
    var r = d(h(t, e), e);
    return g(r, r.getSelectionAfter());
  },
  applyInlineStyle: function (t, e, r) {
    return add(t, e, r);
  },
  removeInlineStyle: function (t, e, r) {
    return remove(t, e, r);
  },
  setBlockType: function (t, e, r) {
    return p(t, e, function (t) {
      return t.merge({
        type: r,
        depth: 0
      });
    });
  },
  setBlockData: function (t, e, r) {
    return p(t, e, function (t) {
      return t.merge({
        data: r
      });
    });
  },
  mergeBlockData: function (t, e, r) {
    return p(t, e, function (t) {
      return t.merge({
        data: t.getData().merge(r)
      });
    });
  },
  applyEntity: function (t, e, r) {
    return o(h(t, e), e, r);
  }
};
module.exports = v;