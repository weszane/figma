import i from "../vendor/564492";
import o from "../vendor/517500";
import a from "../vendor/881972";
import { __create } from "../vendor/725564";
import { fromRawStateToRawTreeState, fromRawTreeStateToRawState } from "../vendor/515272";
import c, { createEmpty } from "../vendor/33809";
import l from "../vendor/843975";
import f from "../vendor/330005";
import p from "../vendor/168170";
import h from "../vendor/64627";
import d from "../vendor/391990";
import { List, Map as _$$Map, OrderedMap } from "../vendor/116740";
import y from "../vendor/153658";
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
var v = d("draft_tree_data_support");
var m = List;
var _ = _$$Map;
var b = OrderedMap;
var S = function (t, e) {
  var r = t.key;
  var n = t.type;
  var i = t.data;
  return {
    text: t.text,
    depth: t.depth || 0,
    type: n || "unstyled",
    key: r || h(),
    data: _(i),
    characterList: w(t, e)
  };
};
var w = function (t, e) {
  var r = t.text;
  var i = t.entityRanges;
  return l(p(r, t.inlineStyleRanges || []), f(r, (i || []).filter(function (t) {
    return e.hasOwnProperty(t.key);
  }).map(function (t) {
    return n({}, t, {
      key: e[t.key]
    });
  })));
};
var x = function (t) {
  return n({}, t, {
    key: t.key || h()
  });
};
var k = function (t, e, r) {
  var i = e.map(function (t) {
    return n({}, t, {
      parentRef: r
    });
  });
  return t.concat(i.reverse());
};
var C = function (t, e) {
  var r = t.blocks.find(function (t) {
    return Array.isArray(t.children) && t.children.length > 0;
  });
  var a = v && !r ? fromRawStateToRawTreeState(t).blocks : t.blocks;
  return v ? a.map(x).reduce(function (t, r, i) {
    Array.isArray(r.children) || y(!1);
    var s = r.children.map(x);
    var u = new o(n({}, S(r, e), {
      prevSibling: 0 === i ? null : a[i - 1].key,
      nextSibling: i === a.length - 1 ? null : a[i + 1].key,
      children: m(s.map(function (t) {
        return t.key;
      }))
    }));
    t = t.set(u.getKey(), u);
    for (var c = k([], s, u); c.length > 0;) {
      var l = c.pop();
      var f = l.parentRef;
      var p = f.getChildKeys();
      var h = p.indexOf(l.key);
      var d = Array.isArray(l.children);
      if (!d) {
        d || y(!1);
        break;
      }
      var g = l.children.map(x);
      var v = new o(n({}, S(l, e), {
        parent: f.getKey(),
        children: m(g.map(function (t) {
          return t.key;
        })),
        prevSibling: 0 === h ? null : p.get(h - 1),
        nextSibling: h === p.size - 1 ? null : p.get(h + 1)
      }));
      t = t.set(v.getKey(), v);
      c = k(c, g, v);
    }
    return t;
  }, b()) : b((r ? fromRawTreeStateToRawState(t).blocks : a).map(function (t) {
    var r = new i(S(t, e));
    return [r.getKey(), r];
  }));
};
var E = function (t) {
  var e = t.entityMap;
  var r = {};
  Object.keys(e).forEach(function (t) {
    var n = e[t];
    var i = n.type;
    var o = n.mutability;
    var a = n.data;
    r[t] = __create(i, o, a || {});
  });
  return r;
};
module.exports = function (t) {
  Array.isArray(t.blocks) || y(!1);
  var e = E(t);
  var r = C(t, e);
  var n = r.isEmpty() ? new c() : createEmpty(r.first().getKey());
  return new a({
    blockMap: r,
    entityMap: e,
    selectionBefore: n,
    selectionAfter: n
  });
};