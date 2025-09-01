import { wg } from "../vendor/73976";
import { um } from "../vendor/186187";
import { l } from "../vendor/616758";
import { uC } from "../vendor/316592";
export function $$h0(e, r, n, {
  computeHandlingStack: i
} = {}) {
  let d = e[r];
  if ("function" != typeof d) {
    if (!(r in e && r.startsWith("on"))) return {
      stop: l
    };
    d = l;
  }
  let p = !1;
  let g = function () {
    let e;
    if (p) return d.apply(this, arguments);
    let r = Array.from(arguments);
    um(n, null, [{
      target: this,
      parameters: r,
      onPostCall: r => {
        e = r;
      },
      handlingStack: i ? uC("instrumented method") : void 0
    }]);
    let o = d.apply(this, r);
    e && um(e, null, [o]);
    return o;
  };
  e[r] = g;
  return {
    stop: () => {
      p = !0;
      e[r] === g && (e[r] = d);
    }
  };
}
export function $$d1(e, r, n) {
  let s = Object.getOwnPropertyDescriptor(e, r);
  if (!s || !s.set || !s.configurable) return {
    stop: l
  };
  let a = l;
  let h = (e, r) => {
    wg(() => {
      h !== a && n(e, r);
    }, 0);
  };
  let d = function (e) {
    s.set.call(this, e);
    h(this, e);
  };
  Object.defineProperty(e, r, {
    set: d
  });
  return {
    stop: () => {
      var n;
      Object.getOwnPropertyDescriptor(e, r)?.set === d && Object.defineProperty(e, r, s);
      h = a;
    }
  };
}
export const H = $$h0;
export const t = $$d1;