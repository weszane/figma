import { UI } from "../vendor/492049";
function i(e) {
  var r = Array.isArray(e[0]) ? e[0] : e;
  if (!r.every(function (e) {
    return "function" == typeof e;
  })) throw Error("createSelector expects all input-selectors to be functions, but received the following types: [" + r.map(function (e) {
    return "function" == typeof e ? "function " + (e.name || "unnamed") + "()" : typeof e;
  }).join(", ") + "]");
  return r;
}
export function $$s0(e) {
  for (r = $$arguments.length, n = Array(r > 1 ? r - 1 : 0), s = 1, void 0; s < r; s++) {
    var r;
    var n;
    var s;
    n[s - 1] = $$arguments[s];
  }
  return function () {
    for (s = $$arguments.length, o = Array(s), a = 0, void 0; a < s; a++) {
      var r;
      var s;
      var o;
      var a;
      o[a] = $$arguments[a];
    }
    var h = 0;
    var d = {
      memoizeOptions: void 0
    };
    var p = o.pop();
    if ("object" == typeof p && (d = p, p = o.pop()), "function" != typeof p) throw Error("createSelector expects an output function after the inputs, but received: [" + typeof p + "]");
    var g = d.memoizeOptions;
    var m = void 0 === g ? n : g;
    var v = Array.isArray(m) ? m : [m];
    var y = i(o);
    var b = e.apply(void 0, [function () {
      h++;
      return p.apply(null, arguments);
    }].concat(v));
    var O = e(function () {
      for (e = [], n = y.length, i = 0, void 0; i < n; i++) {
        var e;
        var n;
        var i;
        e.push(y[i].apply(null, arguments));
      }
      return r = b.apply(null, e);
    });
    Object.assign(O, {
      resultFunc: p,
      memoizedResultFunc: b,
      dependencies: y,
      lastResult: function () {
        return r;
      },
      recomputations: function () {
        return h;
      },
      resetRecomputations: function () {
        return h = 0;
      }
    });
    return O;
  };
}
export var $$o1 = $$s0(UI);
export const Ad = $$s0;
export const Mz = $$o1;