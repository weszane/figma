import { createFromArray } from "../vendor/172680";
import { create } from "../vendor/425694";
import a from "../vendor/564492";
import s from "../vendor/517500";
import { removeRange, splitBlock, setBlockType, replaceWithFragment } from "../vendor/662606";
import { push } from "../vendor/724102";
import l from "../vendor/64627";
import f from "../vendor/391990";
import { List, Repeat } from "../vendor/116740";
import h from "../vendor/416215";
function n(t) {
  for (var e = 1; e < $$arguments.length; e++) {
    var r = null != $$arguments[e] ? $$arguments[e] : {};
    var n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable;
    })));
    n.forEach(function (e) {
      var n;
      n = r[e];
      e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n;
    });
  }
  return t;
}
var d = f("draft_tree_data_support");
var g = d ? s : a;
var y = List;
var v = Repeat;
module.exports = {
  insertAtomicBlock: function (t, e, r) {
    var a = t.getCurrentContent();
    var s = t.getSelection();
    var f = removeRange(a, s, "backward");
    var p = f.getSelectionAfter();
    var h = splitBlock(f, p);
    var m = h.getSelectionAfter();
    var _ = setBlockType(h, m, "atomic");
    var b = create({
      entity: e
    });
    var S = {
      key: l(),
      type: "atomic",
      text: r,
      characterList: y(v(b, r.length))
    };
    var w = {
      key: l(),
      type: "unstyled"
    };
    d && (S = n({}, S, {
      nextSibling: w.key
    }), w = n({}, w, {
      prevSibling: S.key
    }));
    var x = [new g(S), new g(w)];
    var k = createFromArray(x);
    var C = replaceWithFragment(_, m, k);
    var E = C.merge({
      selectionBefore: s,
      selectionAfter: C.getSelectionAfter().set("hasFocus", !0)
    });
    return push(t, E, "insert-fragment");
  },
  moveAtomicBlock: function (t, e, r, n) {
    var i;
    var o = t.getCurrentContent();
    var a = t.getSelection();
    if ("before" === n || "after" === n) {
      var s = o.getBlockForKey("before" === n ? r.getStartKey() : r.getEndKey());
      i = h(o, e, s, n);
    } else {
      var l = removeRange(o, r, "backward");
      var f = l.getSelectionAfter();
      var p = l.getBlockForKey(f.getFocusKey());
      if (0 === f.getStartOffset()) i = h(l, e, p, "before");else if (f.getEndOffset() === p.getLength()) i = h(l, e, p, "after");else {
        var d = splitBlock(l, f);
        var g = d.getSelectionAfter();
        var y = d.getBlockForKey(g.getFocusKey());
        i = h(d, e, y, "before");
      }
    }
    var v = i.merge({
      selectionBefore: a,
      selectionAfter: i.getSelectionAfter().set("hasFocus", !0)
    });
    return push(t, v, "move-block");
  }
};