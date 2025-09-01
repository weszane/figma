import n from "../vendor/652015";
import i from "../vendor/180307";
import { List, Repeat, Record } from "../vendor/116740";
var a = List;
var s = Repeat;
var u = Record;
var c = function () {
  return !0;
};
var l = u({
  start: null,
  end: null
});
var f = u({
  start: null,
  end: null,
  decoratorKey: null,
  leaves: null
});
function p(t, e) {
  return t === e;
}
module.exports = {
  generate: function (t, e, r) {
    var i = e.getLength();
    if (!i) return a.of(new f({
      start: 0,
      end: 0,
      decoratorKey: null,
      leaves: a.of(new l({
        start: 0,
        end: 0
      }))
    }));
    var o = [];
    var u = r ? r.getDecorations(e, t) : a(s(null, i));
    var h = e.getCharacterList();
    n(u, p, c, function (t, e) {
      var r;
      var i;
      o.push(new f({
        start: t,
        end: e,
        decoratorKey: u.get(t),
        leaves: (r = h.slice(t, e).toList(), i = [], n(r.map(function (t) {
          return t.getStyle();
        }).toList(), p, c, function (e, r) {
          i.push(new l({
            start: e + t,
            end: r + t
          }));
        }), a(i))
      }));
    });
    return a(o);
  },
  fromJS: function (t) {
    var e = t.leaves;
    return new f(function (t) {
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
    }({}, function (t, e) {
      if (null == t) return {};
      var r;
      var n;
      var i = {};
      var o = Object.keys(t);
      for (n = 0; n < o.length; n++) e.indexOf(r = o[n]) >= 0 || (i[r] = t[r]);
      return i;
    }(t, ["leaves"]), {
      leaves: null != e ? a(Array.isArray(e) ? e : i(e)).map(function (t) {
        return l(t);
      }) : null
    }));
  }
};