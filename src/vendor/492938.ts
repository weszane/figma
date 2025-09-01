import n from "../vendor/564492";
import i from "../vendor/517500";
import o from "../vendor/923588";
import a from "../vendor/64627";
import s from "../vendor/942580";
import u from "../vendor/391990";
import { List, Repeat } from "../vendor/116740";
import l from "../vendor/940781";
var f = List;
var p = Repeat;
var h = u("draft_tree_data_support");
var d = h ? i : n;
module.exports = {
  processHTML: function (t, e) {
    return o(t, s, e);
  },
  processText: function (t, e, r) {
    return t.reduce(function (t, n, i) {
      n = l(n);
      var o = a();
      var s = {
        key: o,
        type: r,
        text: n,
        characterList: f(p(e, n.length))
      };
      if (h && 0 !== i) {
        var u = i - 1;
        s = function (t) {
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
        }({}, s, {
          prevSibling: (t[u] = t[u].merge({
            nextSibling: o
          })).getKey()
        });
      }
      t.push(new d(s));
      return t;
    }, []);
  }
};