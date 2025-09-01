import n from "../vendor/517500";
import i from "../vendor/532572";
import { List, Map as _$$Map } from "../vendor/116740";
List;
var a = _$$Map;
var s = function (t, e, r) {
  if (t) {
    var n = e.get(t);
    n && e.set(t, r(n));
  }
};
var u = function (t, e) {
  var r = [];
  if (!t) return r;
  for (var n = e.get(t); n && n.getParentKey();) {
    var i = n.getParentKey();
    i && r.push(i);
    n = i ? e.get(i) : null;
  }
  return r;
};
var c = function (t, e) {
  var r = [];
  if (!t) return r;
  for (var n = i(t, e); n && e.get(n);) {
    var o = e.get(n);
    r.push(n);
    n = o.getParentKey() ? i(o, e) : null;
  }
  return r;
};
var l = function (t, e, r) {
  if (!t) return null;
  for (var n = r.get(t.getKey()).getNextSiblingKey(); n && !e.get(n);) n = r.get(n).getNextSiblingKey() || null;
  return n;
};
var f = function (t, e, r) {
  if (!t) return null;
  for (var n = r.get(t.getKey()).getPrevSiblingKey(); n && !e.get(n);) n = r.get(n).getPrevSiblingKey() || null;
  return n;
};
var p = function (t, e, r) {
  if (0 === e) for (; e < r;) {
    t = t.shift();
    e++;
  } else if (r === t.count()) for (; r > e;) {
    t = t.pop();
    r--;
  } else {
    var n = t.slice(0, e);
    var i = t.slice(r);
    t = n.concat(i).toList();
  }
  return t;
};
module.exports = function (t, e) {
  if (e.isCollapsed()) return t;
  var r;
  var o;
  var h = t.getBlockMap();
  var d = e.getStartKey();
  var g = e.getStartOffset();
  var y = e.getEndKey();
  var v = e.getEndOffset();
  var m = h.get(d);
  var _ = h.get(y);
  var b = m instanceof n;
  var S = [];
  if (b) {
    var w = _.getChildKeys();
    var x = u(y, h);
    _.getNextSiblingKey() && (S = S.concat(x));
    w.isEmpty() || (S = S.concat(x.concat([y])));
    S = S.concat(u(i(_, h), h));
  }
  o = m === _ ? p(m.getCharacterList(), g, v) : m.getCharacterList().slice(0, g).concat(_.getCharacterList().slice(v));
  var k = m.merge({
    text: m.getText().slice(0, g) + _.getText().slice(v),
    characterList: o
  });
  var C = b && 0 === g && 0 === v && _.getParentKey() === d && null == _.getPrevSiblingKey() ? a([[d, null]]) : h.toSeq().skipUntil(function (t, e) {
    return e === d;
  }).takeUntil(function (t, e) {
    return e === y;
  }).filter(function (t, e) {
    return -1 === S.indexOf(e);
  }).concat(a([[y, null]])).map(function (t, e) {
    return e === d ? k : null;
  });
  var E = h.merge(C).filter(function (t) {
    return !!t;
  });
  b && m !== _ && (E = (r = E).withMutations(function (t) {
    if (s(m.getKey(), t, function (e) {
      return e.merge({
        nextSibling: l(e, t, h),
        prevSibling: f(e, t, h)
      });
    }), s(_.getKey(), t, function (e) {
      return e.merge({
        nextSibling: l(e, t, h),
        prevSibling: f(e, t, h)
      });
    }), u(m.getKey(), h).forEach(function (e) {
      return s(e, t, function (e) {
        return e.merge({
          children: e.getChildKeys().filter(function (e) {
            return t.get(e);
          }),
          nextSibling: l(e, t, h),
          prevSibling: f(e, t, h)
        });
      });
    }), s(m.getNextSiblingKey(), t, function (t) {
      return t.merge({
        prevSibling: m.getPrevSiblingKey()
      });
    }), s(m.getPrevSiblingKey(), t, function (e) {
      return e.merge({
        nextSibling: l(e, t, h)
      });
    }), s(_.getNextSiblingKey(), t, function (e) {
      return e.merge({
        prevSibling: f(e, t, h)
      });
    }), s(_.getPrevSiblingKey(), t, function (t) {
      return t.merge({
        nextSibling: _.getNextSiblingKey()
      });
    }), u(_.getKey(), h).forEach(function (e) {
      s(e, t, function (e) {
        return e.merge({
          children: e.getChildKeys().filter(function (e) {
            return t.get(e);
          }),
          nextSibling: l(e, t, h),
          prevSibling: f(e, t, h)
        });
      });
    }), c(_, h).forEach(function (e) {
      return s(e, t, function (e) {
        return e.merge({
          nextSibling: l(e, t, h),
          prevSibling: f(e, t, h)
        });
      });
    }), null == r.get(m.getKey()) && null != r.get(_.getKey()) && _.getParentKey() === m.getKey() && null == _.getPrevSiblingKey()) {
      var e = m.getPrevSiblingKey();
      s(_.getKey(), t, function (t) {
        return t.merge({
          prevSibling: e
        });
      });
      s(e, t, function (t) {
        return t.merge({
          nextSibling: _.getKey()
        });
      });
      var n = e ? r.get(e) : null;
      var i = n ? n.getParentKey() : null;
      if (m.getChildKeys().forEach(function (e) {
        s(e, t, function (t) {
          return t.merge({
            parent: i
          });
        });
      }), null != i) {
        var o = r.get(i);
        s(i, t, function (t) {
          return t.merge({
            children: o.getChildKeys().concat(m.getChildKeys())
          });
        });
      }
      s(m.getChildKeys().find(function (t) {
        return null === r.get(t).getNextSiblingKey();
      }), t, function (t) {
        return t.merge({
          nextSibling: m.getNextSiblingKey()
        });
      });
    }
  }));
  return t.merge({
    blockMap: E,
    selectionBefore: e,
    selectionAfter: e.merge({
      anchorKey: d,
      anchorOffset: g,
      focusKey: d,
      focusOffset: g,
      isBackward: !1
    })
  });
};