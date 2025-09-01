import { Sh } from "../figma_app/262240";
import { JM } from "../905/950718";
function a(e, t, i, n, r, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    i(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, r);
}
function s(e) {
  return function () {
    var t = this;
    var i = arguments;
    return new Promise(function (n, r) {
      var s = e.apply(t, i);
      function o(e) {
        a(s, n, r, o, l, "next", e);
      }
      function l(e) {
        a(s, n, r, o, l, "throw", e);
      }
      o(void 0);
    });
  };
}
export function $$o0(e, t, i, n, r) {
  return l.apply(this, arguments);
}
function l() {
  return (l = s(function* (e, t, i, n, r) {
    let a = [];
    let s = [];
    let o = Array.from(e.entries()).filter(([, e]) => !e.isEmptyRectangle && !e.isEmptyVector && (e.nodeIsVisible || void 0 === e.nodeIsVisible));
    let l = 0;
    let c = [];
    for (let [e, a] of o) {
      let o = function (e, t, i) {
        let n = {};
        for (let e in i.forEach(e => {
          t.hasOwnProperty(e) && (n[e] = t[e]);
        }), n) "boolean" == typeof n[e] && (n[e] = n[e] ? 1 : 0);
        return function (e) {
          for (var t = 1; t < $$arguments.length; t++) {
            var i = null != $$arguments[t] ? $$arguments[t] : {};
            var n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
              return Object.getOwnPropertyDescriptor(i, e).enumerable;
            })));
            n.forEach(function (t) {
              var n;
              n = i[t];
              t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = n;
            });
          }
          return e;
        }({
          source_id: e,
          target_id: "dummy"
        }, n);
      }(e, a, n);
      let u = new Blob([JSON.stringify(o)]).size;
      l + u > 4194304 && c.length > 0 && (s.push(d(t, c, i, r)), c = [], l = 0);
      c.push(o);
      l += u;
    }
    c.length > 0 && s.push(d(t, c, i, r));
    (yield Promise.all(s)).forEach(e => a.push(...e));
    return a;
  })).apply(this, arguments);
}
function d(e, t, i, n) {
  return c.apply(this, arguments);
}
function c() {
  return (c = s(function* (e, t, i, a) {
    JM(`Sending batch of ${t.length} nodes to classifier`);
    let s = yield e({
      batch: t
    });
    return (a ? s.results.filter(e => e.score > a) : s.results.filter(e => e.prediction)).map(e => Sh(e.source_id, i)).filter(e => null != e);
  })).apply(this, arguments);
}
export const J = $$o0;