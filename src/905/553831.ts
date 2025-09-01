import { Qw } from "../905/989992";
import { A } from "../905/417830";
import { n as _$$n } from "../905/347702";
import { Z } from "../905/441145";
export function $$o0(e, t, {
  retainMs: i = 0
} = {}) {
  return new Promise((n, r) => {
    let a = Z.get();
    let o = a?.subscribe(e, t, e => {
      "loaded" === e.status ? (n(e.data), setTimeout(() => o?.(), i)) : e.errors && (r(e.errors), setTimeout(() => o?.(), i));
    });
  });
}
export let $$l1 = _$$n((e, t) => new Promise(i => {
  let n = Z.get();
  let r = n?.subscribe(e, t, e => {
    i(e.status);
    r?.();
  });
}));
export function $$d2(e, t) {
  return 0 === t.length ? Promise.resolve([]) : new Promise((i, a) => {
    let o = Z.get();
    if (!o) {
      a(Error("Livegraph client not available"));
      return;
    }
    let l = new A(o, () => {
      let e = t.map(e => ({
        args: e,
        result: Qw.from(l.currentResult(e))
      }));
      e.every(({
        result: e
      }) => "loaded" === e.status || e.errors) && (i(e), l.clear());
    });
    l.update(e, t);
  });
}
export const Ek = $$o0;
export const RI = $$l1;
export const S8 = $$d2;