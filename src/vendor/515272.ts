import i from "../vendor/64627";
import o from "../vendor/153658";
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
var a = function (t, e) {
  for (var r = [].concat(t).reverse(); r.length;) {
    var n = r.pop();
    e(n);
    var i = n.children;
    Array.isArray(i) || o(!1);
    r = r.concat([].concat(i.reverse()));
  }
};
var s = function (t) {
  if (!(t && t.type)) return !1;
  var e = t.type;
  return "unordered-list-item" === e || "ordered-list-item" === e;
};
var u = function (t) {
  Array.isArray(t.children) && (t.children = t.children.map(function (e) {
    return e.type === t.type ? n({}, e, {
      depth: (t.depth || 0) + 1
    }) : e;
  }));
};
module.exports = {
  fromRawTreeStateToRawState: function (t) {
    var e = t.blocks;
    var r = [];
    return (Array.isArray(e) || o(!1), Array.isArray(e) && e.length) ? (a(e, function (t) {
      var e = n({}, t);
      s(t) && (e.depth = e.depth || 0, u(t), null != t.children && t.children.length > 0) || (delete e.children, r.push(e));
    }), t.blocks = r, n({}, t, {
      blocks: r
    })) : t;
  },
  fromRawStateToRawTreeState: function (t) {
    var e = [];
    var r = [];
    t.blocks.forEach(function (t) {
      var o = s(t);
      var a = t.depth || 0;
      var u = n({}, t, {
        children: []
      });
      if (!o) {
        e.push(u);
        return;
      }
      var c = r[0];
      if (null == c && 0 === a) e.push(u);else if (null == c || c.depth < a - 1) {
        var l = {
          key: i(),
          text: "",
          depth: a - 1,
          type: t.type,
          children: [],
          entityRanges: [],
          inlineStyleRanges: []
        };
        r.unshift(l);
        1 === a ? e.push(l) : null != c && c.children.push(l);
        l.children.push(u);
      } else if (c.depth === a - 1) c.children.push(u);else {
        for (; null != c && c.depth >= a;) {
          r.shift();
          c = r[0];
        }
        a > 0 ? c.children.push(u) : e.push(u);
      }
    });
    return n({}, t, {
      blocks: e
    });
  }
};