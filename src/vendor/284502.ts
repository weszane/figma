import { m as _$$m } from "../vendor/338690";
import { t } from "../vendor/882463";
import { yy } from "../vendor/348210";
function a(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
export function $$h1(e) {
  return (null != e ? e : "online") !== "online" || t.isOnline();
}
class d {
  constructor(e) {
    this.revert = e?.revert;
    this.silent = e?.silent;
  }
}
export function $$p2(e) {
  return e instanceof d;
}
export function $$g0(e) {
  let r;
  let n;
  let p;
  let g = !1;
  let m = 0;
  let v = !1;
  let y = new Promise((e, r) => {
    n = e;
    p = r;
  });
  let b = r => {
    v || (_(new d(r)), null == e.abort || e.abort());
  };
  let O = () => {
    g = !0;
  };
  let x = () => {
    g = !1;
  };
  let w = () => !_$$m.isFocused() || "always" !== e.networkMode && !t.isOnline();
  let k = i => {
    v || (v = !0, null == e.onSuccess || e.onSuccess(i), r?.(), n(i));
  };
  let _ = n => {
    v || (v = !0, null == e.onError || e.onError(n), r?.(), p(n));
  };
  let S = () => new Promise(n => {
    r = e => {
      let r = v || !w();
      r && n(e);
      return r;
    };
    null == e.onPause || e.onPause();
  }).then(() => {
    r = void 0;
    v || null == e.onContinue || e.onContinue();
  });
  let E = () => {
    let r;
    if (!v) {
      try {
        r = e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r).then(k).catch(r => {
        var n;
        var i;
        if (v) return;
        let s = null != (n = e.retry) ? n : 3;
        let h = null != (i = e.retryDelay) ? i : a;
        let d = "function" == typeof h ? h(m, r) : h;
        let p = !0 === s || "number" == typeof s && m < s || "function" == typeof s && s(m, r);
        if (g || !p) {
          _(r);
          return;
        }
        m++;
        null == e.onFail || e.onFail(m, r);
        yy(d).then(() => {
          if (w()) return S();
        }).then(() => {
          g ? _(r) : E();
        });
      });
    }
  };
  $$h1(e.networkMode) ? E() : S().then(E);
  return {
    promise: y,
    cancel: b,
    continue: () => r?.() ? y : Promise.resolve(),
    cancelRetry: O,
    continueRetry: x
  };
}
export const II = $$g0;
export const v_ = $$h1;
export const wm = $$p2; 
