import n from "../vendor/564492";
import i from "../vendor/517500";
import { stringify, unstringify } from "../vendor/881915";
import a from "../vendor/277613";
import s from "../vendor/189362";
import u from "../vendor/153658";
var c = function (t, e) {
  return {
    key: t.getKey(),
    text: t.getText(),
    type: t.getType(),
    depth: t.getDepth(),
    inlineStyleRanges: s(t),
    entityRanges: a(t, e),
    data: t.getData().toObject()
  };
};
var l = function (t, e, r, o) {
  if (t instanceof n) {
    r.push(c(t, e));
    return;
  }
  t instanceof i || u(!1);
  var a = t.getParentKey();
  var s = o[t.getKey()] = function (t) {
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
  }({}, c(t, e), {
    children: []
  });
  if (a) {
    o[a].children.push(s);
    return;
  }
  r.push(s);
};
var f = function (t, e) {
  var r = e.entityMap;
  var n = [];
  var i = {};
  var a = {};
  var s = 0;
  t.getBlockMap().forEach(function (t) {
    t.findEntityRanges(function (t) {
      return null !== t.getEntity();
    }, function (e) {
      var n = t.getEntityAt(e);
      var i = stringify(n);
      !a[i] && (a[i] = n, r[i] = "".concat(s), s++);
    });
    l(t, r, n, i);
  });
  return {
    blocks: n,
    entityMap: r
  };
};
var p = function (t, e) {
  var r = e.blocks;
  var n = e.entityMap;
  var i = {};
  Object.keys(n).forEach(function (e, r) {
    var n = t.getEntity(unstringify(e));
    i[r] = {
      type: n.getType(),
      mutability: n.getMutability(),
      data: n.getData()
    };
  });
  return {
    blocks: r,
    entityMap: i
  };
};
module.exports = function (t) {
  var e = {
    entityMap: {},
    blocks: []
  };
  e = f(t, e);
  return e = p(t, e);
};