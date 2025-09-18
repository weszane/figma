import { weakMapMemoize } from '../vendor/492049';
function i(e) {
  let r = Array.isArray(e[0]) ? e[0] : e;
  if (!r.every(e => {
    return typeof e == 'function';
  })) {
    throw new Error(`createSelector expects all input-selectors to be functions, but received the following types: [${r.map(e => {
      return typeof e == 'function' ? `function ${e.name || 'unnamed'}()` : typeof e;
    }).join(', ')}]`);
  }
  return r;
}
export function createSelectorCreator(e) {
  for (r = $$arguments.length, n = Array.from({
    length: r > 1 ? r - 1 : 0
  }), s = 1, void 0; s < r; s++) {
    var r;
    var n;
    var s;
    n[s - 1] = $$arguments[s];
  }
  return function () {
    for (s = $$arguments.length, o = new Array(s), a = 0, void 0; a < s; a++) {
      var r;
      var s;
      var o;
      var a;
      o[a] = $$arguments[a];
    }
    let h = 0;
    let d = {
      memoizeOptions: void 0
    };
    let p = o.pop();
    if (typeof p == 'object' && (d = p, p = o.pop()), typeof p != 'function') throw new Error(`createSelector expects an output function after the inputs, but received: [${typeof p}]`);
    let g = d.memoizeOptions;
    let m = void 0 === g ? n : g;
    let v = Array.isArray(m) ? m : [m];
    let y = i(o);
    let b = e.apply(void 0, [function () {
      h++;
      return p.apply(null, arguments);
    }].concat(v));
    let O = e(function () {
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
      lastResult() {
        return r;
      },
      recomputations() {
        return h;
      },
      resetRecomputations() {
        return h = 0;
      }
    });
    return O;
  };
}
export var createSelector = createSelectorCreator(weakMapMemoize);
export const Ad = createSelectorCreator;
export const Mz = createSelector;